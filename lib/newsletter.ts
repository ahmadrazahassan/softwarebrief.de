import { z } from "zod";

/* Newsletter Anmeldung (serverseitig).
   Der E-Mail Dienst führt die Liste, verschickt die Bestätigungsmail (Double Opt in) und stellt den
   Abmeldelink bereit. Die Website reicht nur die Adresse weiter. So liegt der Nachweis der Einwilligung
   bei einem Dienst mit Auftragsverarbeitung, und im Repository steckt kein Geheimnis.
   Diese Datei importiert bewusst nichts außer zod, damit sie ohne Bundler testbar bleibt. */

export type Env = Record<string, string | undefined>;
export type Provider = "brevo" | "dev" | "aus";

export type SignupResult =
  | { status: "ok"; dryRun?: boolean }
  | { status: "invalid-email" }
  | { status: "rate-limited" }
  | { status: "unavailable" }
  | { status: "error" };

/** Eingabe des Formulars. Die Einwilligung muss ausdrücklich vorliegen, die Adresse wird normalisiert. */
export const newsletterSignupSchema = z.object({
  email: z.string().trim().toLowerCase().min(5).max(254).email(),
  consent: z.literal(true),
  website: z.string().optional(),
});

/** Kürzt eine Adresse für Logs: m***@firma.de */
export function maskEmail(email: string) {
  const at = email.lastIndexOf("@");
  if (at < 1) return "***";
  return `${email[0]}***${email.slice(at)}`;
}

/**
 * Wählt den Versandweg. Der Standard ist "aus", damit eine fehlende Konfiguration nie nach Erfolg aussieht.
 * - brevo: echter Versand über die Brevo API.
 * - dev: schreibt nur ins Serverlog. Muss ausdrücklich verlangt werden und läuft nie in einem Produktionsbuild.
 * - aus: Anmeldung nicht verfügbar.
 */
export function resolveProvider(env: Env, production = isProduction(env)): Provider {
  const wanted = env.NEWSLETTER_PROVIDER?.trim().toLowerCase();
  if (wanted === "brevo") return "brevo";
  if (wanted === "dev" && !production) return "dev";
  return "aus";
}

/**
 * Cloudflare Workers setzen NODE_ENV nicht zuverlässig. Deshalb zählt zusätzlich das Build Flag von Vite,
 * das beim Bauen fest eingesetzt wird. Unter Node (Tests) gibt es kein import.meta.env.
 */
function isProduction(env: Env) {
  return env.NODE_ENV === "production" || (import.meta as { env?: { PROD?: boolean } }).env?.PROD === true;
}

export type BrevoConfig = { apiKey: string; listId: number; templateId: number; redirectionUrl: string };

const positiveInt = (value: string | undefined) => (value && /^\d+$/.test(value.trim()) && Number(value) > 0 ? Number(value) : null);

/** Liefert die Brevo Einstellungen oder null, wenn etwas fehlt oder die Basis URL ungültig ist. */
export function brevoConfig(env: Env): BrevoConfig | null {
  const apiKey = env.BREVO_API_KEY?.trim();
  const listId = positiveInt(env.BREVO_LIST_ID);
  const templateId = positiveInt(env.BREVO_DOI_TEMPLATE_ID);
  const site = env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
  if (!apiKey || !listId || !templateId || !site) return null;
  try {
    const url = new URL(site);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  } catch {
    return null;
  }
  return { apiKey, listId, templateId, redirectionUrl: `${site}/newsletter/bestaetigt` };
}

type Options = { env?: Env; fetchImpl?: typeof fetch };

export async function subscribe(email: string, options: Options = {}): Promise<SignupResult> {
  const env = options.env ?? {};
  const fetchImpl = options.fetchImpl ?? ((input: RequestInfo | URL, init?: RequestInit) => fetch(input, init));
  switch (resolveProvider(env)) {
    case "dev":
      console.info(`[newsletter:dev] Anmeldung für ${maskEmail(email)}. Es wurde keine E-Mail versendet.`);
      return { status: "ok", dryRun: true };
    case "brevo":
      return subscribeWithBrevo(email, env, fetchImpl);
    default:
      return { status: "unavailable" };
  }
}

/** Brevo "Double Opt in" Endpunkt: Brevo sendet die Bestätigungsmail und legt den Kontakt erst nach dem Klick an. */
async function subscribeWithBrevo(email: string, env: Env, fetchImpl: typeof fetch): Promise<SignupResult> {
  const config = brevoConfig(env);
  if (!config) {
    console.error("[newsletter] Brevo ist nicht vollständig konfiguriert (BREVO_API_KEY, BREVO_LIST_ID, BREVO_DOI_TEMPLATE_ID, NEXT_PUBLIC_SITE_URL).");
    return { status: "unavailable" };
  }
  let response: Response;
  try {
    response = await fetchImpl("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: { "api-key": config.apiKey, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({ email, includeListIds: [config.listId], templateId: config.templateId, redirectionUrl: config.redirectionUrl }),
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    console.error("[newsletter] Brevo war nicht erreichbar.");
    return { status: "error" };
  }
  if (response.ok) return { status: "ok" };

  const detail = (await response.text().catch(() => "")).replaceAll(email, maskEmail(email)).slice(0, 300);
  console.error(`[newsletter] Brevo antwortete mit ${response.status}: ${detail}`);
  if (response.status === 429) return { status: "rate-limited" };
  if (response.status === 401 || response.status === 403) return { status: "unavailable" };
  /* Ein 400 kann auch eine falsche Listen oder Vorlagen ID bedeuten. Nur wenn die Antwort die Adresse bemängelt, bitten wir um Korrektur. */
  if (response.status === 400 && /e-?mail/i.test(detail)) return { status: "invalid-email" };
  return { status: "error" };
}
