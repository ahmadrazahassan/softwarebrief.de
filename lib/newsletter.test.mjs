import assert from "node:assert/strict";
import { test } from "node:test";
import { brevoConfig, maskEmail, newsletterSignupSchema, resolveProvider, subscribe } from "./newsletter.ts";

const brevoEnv = {
  NEWSLETTER_PROVIDER: "brevo",
  BREVO_API_KEY: "key-123",
  BREVO_LIST_ID: "7",
  BREVO_DOI_TEMPLATE_ID: "3",
  NEXT_PUBLIC_SITE_URL: "https://softwarebrief.example/",
};

/** Fängt console.error ab, damit wir prüfen können, was im Log landet. */
async function withCapturedErrors(run) {
  const original = console.error;
  const lines = [];
  console.error = (...args) => lines.push(args.join(" "));
  try {
    return { result: await run(), lines };
  } finally {
    console.error = original;
  }
}

const reply = (status, body = "") => async () => new Response(body, { status });

test("Schema normalisiert die Adresse und verlangt die Einwilligung", () => {
  const ok = newsletterSignupSchema.safeParse({ email: "  Anna.Beispiel@Firma.DE ", consent: true });
  assert.equal(ok.success, true);
  assert.equal(ok.data.email, "anna.beispiel@firma.de");

  for (const bad of [
    { email: "anna@firma.de" },
    { email: "anna@firma.de", consent: false },
    { email: "anna@firma.de", consent: "true" },
    { email: "kein-at", consent: true },
    { email: "a@b", consent: true },
    { email: 42, consent: true },
    { email: `${"a".repeat(250)}@firma.de`, consent: true },
  ]) {
    assert.equal(newsletterSignupSchema.safeParse(bad).success, false, JSON.stringify(bad).slice(0, 60));
  }
});

test("maskEmail zeigt nur den ersten Buchstaben und die Domain", () => {
  assert.equal(maskEmail("max.mustermann@firma.de"), "m***@firma.de");
  assert.equal(maskEmail("kaputt"), "***");
  assert.equal(maskEmail("@firma.de"), "***");
});

test("resolveProvider: ohne ausdrückliche Wahl ist die Anmeldung überall aus", () => {
  assert.equal(resolveProvider({}), "aus");
  assert.equal(resolveProvider({ NODE_ENV: "development" }), "aus");
  assert.equal(resolveProvider({ NODE_ENV: "production" }), "aus");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: "tippfehler" }), "aus");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: "aus" }), "aus");
});

test("resolveProvider: dev läuft nur außerhalb der Produktion, brevo überall", () => {
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: "dev" }), "dev");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: " DEV ", NODE_ENV: "development" }), "dev");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: "dev", NODE_ENV: "production" }), "aus", "NODE_ENV production sperrt dev");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: "dev" }, true), "aus", "Build Flag production sperrt dev, auch wenn NODE_ENV fehlt");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: " BREVO " }), "brevo");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: "brevo", NODE_ENV: "production" }), "brevo");
  assert.equal(resolveProvider({ NEWSLETTER_PROVIDER: "brevo" }, true), "brevo");
});

test("brevoConfig verlangt alle Werte und bereinigt die Basis URL", () => {
  assert.deepEqual(brevoConfig(brevoEnv), { apiKey: "key-123", listId: 7, templateId: 3, redirectionUrl: "https://softwarebrief.example/newsletter/bestaetigt" });
  assert.equal(brevoConfig({ ...brevoEnv, BREVO_API_KEY: "" }), null);
  assert.equal(brevoConfig({ ...brevoEnv, BREVO_LIST_ID: "7abc" }), null);
  assert.equal(brevoConfig({ ...brevoEnv, BREVO_LIST_ID: "0" }), null);
  assert.equal(brevoConfig({ ...brevoEnv, BREVO_DOI_TEMPLATE_ID: undefined }), null);
  assert.equal(brevoConfig({ ...brevoEnv, NEXT_PUBLIC_SITE_URL: undefined }), null);
  assert.equal(brevoConfig({ ...brevoEnv, NEXT_PUBLIC_SITE_URL: "kein url" }), null);
  assert.equal(brevoConfig({ ...brevoEnv, NEXT_PUBLIC_SITE_URL: "javascript:alert(1)" }), null);
});

test("subscribe: dev meldet Erfolg als Testmodus, aus meldet nicht verfügbar", async () => {
  assert.deepEqual(await subscribe("a@firma.de", { env: { NEWSLETTER_PROVIDER: "dev" } }), { status: "ok", dryRun: true });
  assert.deepEqual(await subscribe("a@firma.de", { env: { NEWSLETTER_PROVIDER: "aus" } }), { status: "unavailable" });
  assert.deepEqual(await subscribe("a@firma.de", { env: { NODE_ENV: "production" } }), { status: "unavailable" });
  assert.deepEqual(await subscribe("a@firma.de", { env: {} }), { status: "unavailable" }, "ohne Konfiguration nie ein Scheinerfolg");
  assert.deepEqual(await subscribe("a@firma.de", { env: { NEWSLETTER_PROVIDER: "dev", NODE_ENV: "production" } }), { status: "unavailable" });
});

test("subscribe über Brevo: sendet die erwartete Anfrage", async () => {
  let seen;
  const fetchImpl = async (url, init) => {
    seen = { url, init };
    return new Response(null, { status: 201 });
  };
  const result = await subscribe("anna@firma.de", { env: brevoEnv, fetchImpl });
  assert.deepEqual(result, { status: "ok" });
  assert.equal(seen.url, "https://api.brevo.com/v3/contacts/doubleOptinConfirmation");
  assert.equal(seen.init.method, "POST");
  assert.equal(seen.init.headers["api-key"], "key-123");
  assert.deepEqual(JSON.parse(seen.init.body), { email: "anna@firma.de", includeListIds: [7], templateId: 3, redirectionUrl: "https://softwarebrief.example/newsletter/bestaetigt" });
});

test("subscribe über Brevo: bildet Fehlerantworten auf klare Ergebnisse ab", async () => {
  const run = (fetchImpl) => subscribe("anna@firma.de", { env: brevoEnv, fetchImpl });
  const { lines } = await withCapturedErrors(async () => {
    assert.deepEqual(await run(reply(429)), { status: "rate-limited" });
    assert.deepEqual(await run(reply(401)), { status: "unavailable" });
    assert.deepEqual(await run(reply(403)), { status: "unavailable" });
    assert.deepEqual(await run(reply(400, '{"code":"invalid_parameter","message":"Invalid email address"}')), { status: "invalid-email" });
    assert.deepEqual(await run(reply(400, '{"code":"invalid_parameter","message":"templateId does not exist"}')), { status: "error" });
    assert.deepEqual(await run(reply(500)), { status: "error" });
    assert.deepEqual(await run(async () => { throw new Error("Netzwerk"); }), { status: "error" });
  });
  assert.ok(lines.length >= 7, "jeder Fehler wird protokolliert");
});

test("subscribe über Brevo: schreibt die Adresse nie im Klartext ins Log", async () => {
  const { lines } = await withCapturedErrors(() => subscribe("anna.beispiel@firma.de", { env: brevoEnv, fetchImpl: reply(400, '{"message":"anna.beispiel@firma.de is not valid"}') }));
  const log = lines.join("\n");
  assert.ok(!log.includes("anna.beispiel@firma.de"), log);
  assert.ok(log.includes("a***@firma.de"), log);
});

test("subscribe über Brevo: ohne vollständige Konfiguration nicht verfügbar und kein Netzwerkzugriff", async () => {
  let called = false;
  const { result } = await withCapturedErrors(() => subscribe("anna@firma.de", { env: { NEWSLETTER_PROVIDER: "brevo" }, fetchImpl: async () => { called = true; return new Response(null, { status: 201 }); } }));
  assert.deepEqual(result, { status: "unavailable" });
  assert.equal(called, false);
});
