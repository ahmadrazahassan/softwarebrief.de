import assert from "node:assert/strict";
import { test } from "node:test";
import { buildCheck } from "./check-rules.ts";

const options = [{ key: "a", label: "A" }, { key: "b", label: "B" }, { key: "c", label: "C" }, { key: "d", label: "D" }];
const plan = (over = {}) => ({ name: "Plus", price: "15 €", unit: "pro Monat", amount: 15, model: "flat", ...over });
const base = { featureOptions: options, featureTags: [], sourceCount: 2, checked: "27. September 2026" };

test("Alle Tarife mit Europreis: vollständig, Einstieg mit ab", () => {
  const check = buildCheck({ ...base, plans: [plan({ name: "Solo", price: "10 €", amount: 10 }), plan()] });
  assert.deepEqual(check.prices, { published: 2, total: 2, status: "complete" });
  assert.deepEqual(check.entry, { kind: "price", value: "ab 10 €", hint: "Solo, pro Monat" });
});

test("Teilweise veröffentlichte Preise werden als teilweise gezählt", () => {
  const check = buildCheck({ ...base, plans: [plan(), plan({ name: "Pro", price: "Euro-Angebot", amount: null, model: "quote" })] });
  assert.deepEqual(check.prices, { published: 1, total: 2, status: "partial" });
});

test("Nur Angebote: Preis auf Anfrage, keine Zahl erfunden", () => {
  const check = buildCheck({ ...base, plans: [plan({ price: "Euro-Angebot", amount: null, model: "quote" })] });
  assert.equal(check.prices.status, "none");
  assert.deepEqual(check.entry, { kind: "quote", value: "Auf Anfrage", hint: "Kein öffentlicher Europreis" });
});

test("Kostenloser Tarif hat Vorrang vor bezahltem Einstieg", () => {
  const check = buildCheck({ ...base, plans: [plan({ name: "Kostenlos", price: "0 €", amount: 0, model: "free" }), plan()] });
  assert.equal(check.entry.kind, "free");
  assert.match(check.entry.hint, /Kostenlos/);
});

test("Eingeschränkte Lizenz zählt nicht als Einstieg", () => {
  const check = buildCheck({ ...base, plans: [plan({ name: "Team Members", price: "6,90 €", amount: 6.9, model: "seat", limited: true }), plan({ name: "Essentials", price: "69,30 €", amount: 69.3, model: "seat" })] });
  assert.equal(check.entry.value, "ab 69,30 €");
  assert.equal(check.entry.hint, "Essentials, pro Monat");
  assert.equal(check.prices.published, 2);
});

test("Ein Tarif mit ab im Preis bekommt kein zweites ab", () => {
  const check = buildCheck({ ...base, plans: [plan({ price: "ab 12,90 €", amount: 12.9 })] });
  assert.equal(check.entry.value, "ab 12,90 €");
});

test("Ein einzelner fester Tarif bekommt kein ab", () => {
  const check = buildCheck({ ...base, plans: [plan({ price: "50 €", amount: 50 })] });
  assert.equal(check.entry.value, "50 €");
});

test("Kernfunktionen zählen nur belegte Schlüssel der Kategorie", () => {
  const check = buildCheck({ ...base, featureTags: ["a", "c", "unbekannt"], plans: [plan()] });
  assert.equal(check.features.covered, 2);
  assert.equal(check.features.total, 4);
  assert.deepEqual(check.features.items.map((item) => item.ok), [true, false, true, false]);
});

test("Quellen und Prüfdatum werden unverändert durchgereicht", () => {
  const check = buildCheck({ ...base, plans: [plan()], sourceCount: 1, checked: null });
  assert.deepEqual(check.sources, { count: 1, checked: null });
});
