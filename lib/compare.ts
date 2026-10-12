import { pricingPlans, type Plan } from "@/data/pricing-plans";
import { featureOptions, verifiedFeatureTags } from "@/lib/feature-filters";
import { products as catalogProducts, type CategorySlug, type Product } from "@/lib/catalog";

/* ─── Price normalisation ──────────────────────────────────────────
   Vendor plans mix flat monthly fees, per-seat fees and quotes. We only
   ever compare amounts that share the same billing model, and every
   derived figure is labelled as a guide value in the UI. */

export type PriceModel = "flat" | "seat" | "free" | "quote";
export type ParsedPlan = Plan & { amount: number | null; model: PriceModel };

const modelLabels: Record<PriceModel, string> = {
  flat: "Pauschal pro Monat",
  seat: "Pro Person bzw. Lizenz",
  free: "Kostenloser Einstieg",
  quote: "Preis auf Anfrage",
};
export const priceModelLabel = (model: PriceModel) => modelLabels[model];

export function parseAmount(price: string): number | null {
  const match = price.match(/(\d{1,3}(?:\.\d{3})*(?:,\d+)?|\d+(?:,\d+)?)\s*€/);
  return match ? Number(match[1].replaceAll(".", "").replace(",", ".")) : null;
}

export function parsePlan(plan: Plan): ParsedPlan {
  const amount = parseAmount(plan.price);
  const model: PriceModel = amount === null ? "quote" : amount === 0 ? "free" : /je (Nutzer|Person|Lizenz|Mitarbeiter)/i.test(plan.unit) ? "seat" : "flat";
  return { ...plan, amount, model };
}

export function plansFor(slug: string): ParsedPlan[] {
  return (pricingPlans[slug]?.plans ?? []).map(parsePlan);
}

/** First paid plan with a published euro amount – the realistic entry point. Restricted licences do not count. */
export function paidEntry(slug: string) {
  return plansFor(slug).find((p) => p.amount !== null && p.amount > 0 && !p.limited) ?? null;
}

export function priceModel(slug: string): PriceModel {
  const plans = plansFor(slug);
  if (plans.some((p) => p.model === "free")) return "free";
  return paidEntry(slug)?.model ?? "quote";
}

/** Guide value for twelve months with `seats` people on the entry tariff. */
export function yearlyEstimate(slug: string, seats: number) {
  const plan = paidEntry(slug);
  if (!plan || plan.amount === null) return null;
  const monthly = plan.model === "seat" ? plan.amount * seats : plan.amount;
  return { plan, monthly, yearly: monthly * 12 };
}

export const euro = (value: number, digits = 2) =>
  value.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: Number.isInteger(value) ? 0 : digits, maximumFractionDigits: digits });

/* ─── Display names ───
   A few official product names are too long for cards and headlines.
   Page titles and profiles keep the full name. */
const shortNames: Record<string, string> = {
  "sage-payroll": "Sage Payroll",
  "datev-lohn-und-gehalt": "DATEV Lohn und Gehalt",
  "microsoft-dynamics-365-business-central": "Business Central",
  "lexware-office-lohn-gehalt": "Lexware Lohn & Gehalt",
};
export const shortName = (p: Pick<Product, "slug" | "name">) => shortNames[p.slug] ?? p.name;

/* ─── Features ─── */

export function featureCoverage(p: Product) {
  const options = featureOptions[p.categorySlug as CategorySlug] ?? [];
  const tags = verifiedFeatureTags[p.slug] ?? [];
  return { covered: options.filter((o) => tags.includes(o.key)).length, total: options.length };
}

export const hasFeature = (slug: string, key: string) => (verifiedFeatureTags[slug] ?? []).includes(key);

/* ─── Verdicts ("Auf einen Blick") ─── */

export type Verdict = { key: string; label: string; winner: Product | null; value: string; basis: string; tie?: boolean };

export function verdicts(chosen: Product[], seats: number): Verdict[] {
  const out: Verdict[] = [];

  const priced = chosen.map((p) => ({ p, est: yearlyEstimate(p.slug, seats) })).filter((x) => x.est);
  const quoted = chosen.length - priced.length;
  if (priced.length) {
    const best = priced.reduce((a, b) => (b.est!.yearly < a.est!.yearly ? b : a));
    const tie = priced.filter((x) => x.est!.yearly === best.est!.yearly).length > 1;
    out.push({
      key: "price", label: "Niedrigster Richtwert", winner: tie ? null : best.p, tie,
      value: `${euro(best.est!.yearly, 0)} im Jahr`,
      basis: `Tarif ${best.est!.plan.name} für ${seats} ${seats === 1 ? "Person" : "Personen"}${quoted ? `; ${quoted} ${quoted === 1 ? "Produkt" : "Produkte"} nur auf Anfrage` : ""}. Ohne Zusatzmodule.`,
    });
  } else {
    out.push({ key: "price", label: "Niedrigster Richtwert", winner: null, value: "Nur auf Anfrage", basis: "Keines der Produkte nennt einen belastbaren Europreis für den Einstieg." });
  }

  const coverage = chosen.map((p) => ({ p, c: featureCoverage(p) }));
  const top = coverage.reduce((a, b) => (b.c.covered > a.c.covered ? b : a));
  const tie = coverage.filter((x) => x.c.covered === top.c.covered).length > 1;
  out.push({ key: "features", label: "Meiste belegte Kernfunktionen", winner: tie ? null : top.p, tie, value: `${top.c.covered} von ${top.c.total}`, basis: tie ? "Gleichstand – prüfen Sie die Funktionsmatrix im Detail." : "Gezählt werden nur Funktionen, die in Herstellerquellen belegt sind." });

  return out;
}

/* ─── Differences ─── */

export const differs = (values: (string | number | boolean)[]) => new Set(values.map(String)).size > 1;

/* ─── Curated head-to-head pages (/vergleich/[a-vs-b]) ───
   Both products must share a category. Order matters only for the URL. */

const pairList: [string, string][] = [
  ["lexware-office", "sevdesk"], ["sage-active", "lexware-office"], ["sage-active", "sevdesk"], ["fastbill", "billomat"], ["lexware-office", "fastbill"], ["sevdesk", "fastbill"],
  ["sage-payroll", "lexware-office-lohn-gehalt"], ["sage-payroll", "datev-lohn-und-gehalt"], ["datev-lohn-und-gehalt", "agenda-personalwesen"], ["sage-hr-payroll", "personio-payroll"], ["sage-hr-payroll", "sage-payroll"],
  ["personio", "factorial"], ["sage-hr", "personio"], ["sage-hr", "factorial"], ["kenjo", "hr-works"], ["personio", "hibob-bob"],
  ["pipedrive", "hubspot-sales-hub"], ["hubspot-sales-hub", "zoho-crm"], ["zoho-crm", "centralstationcrm"], ["sage-sales-management", "pipedrive"], ["sage-sales-management", "superoffice-crm"],
  ["weclapp", "xentral"], ["odoo", "microsoft-dynamics-365-business-central"], ["sage-100", "microsoft-dynamics-365-business-central"], ["sage-100", "weclapp"], ["sage-intacct", "microsoft-dynamics-365-business-central"], ["sage-50-handwerk", "sage-100"],
];

export type ComparisonPair = { slug: string; a: string; b: string; category: CategorySlug; sage: boolean };

export const comparisonPairs: ComparisonPair[] = pairList.flatMap(([a, b]) => {
  const pa = catalogProducts.find((p) => p.slug === a);
  const pb = catalogProducts.find((p) => p.slug === b);
  if (!pa || !pb || pa.categorySlug !== pb.categorySlug) return [];
  return [{ slug: `${a}-vs-${b}`, a, b, category: pa.categorySlug as CategorySlug, sage: a.startsWith("sage-") || b.startsWith("sage-") }];
});

export const findPair = (slug: string) => comparisonPairs.find((p) => p.slug === slug);
export const pairFor = (x: string, y: string) => comparisonPairs.find((p) => (p.a === x && p.b === y) || (p.a === y && p.b === x));

/** Pairs sharing a product first, then the same category. */
export function relatedPairs(pair: ComparisonPair, limit = 6) {
  const others = comparisonPairs.filter((p) => p.slug !== pair.slug);
  const score = (p: ComparisonPair) => ([p.a, p.b].some((s) => s === pair.a || s === pair.b) ? 2 : 0) + (p.category === pair.category ? 1 : 0);
  return others.map((p) => ({ p, s: score(p) })).filter((x) => x.s > 0).sort((x, y) => y.s - x.s).slice(0, limit).map((x) => x.p);
}
