/* Regeln für den Softwarebrief Check. Reine Funktion ohne Importe aus dem Projekt, damit sie sich ohne Build testen lässt.
   Der Check zählt nur nachprüfbare Tatsachen aus den Herstellerquellen, die Softwarebrief erfasst hat. Er vergibt keine Note:
   Eine fehlende Angabe ("Preis auf Anfrage") ist hier eine Tatsache und kein Urteil über die Qualität eines Programms. */

export type PlanFact = { name: string; price: string; unit: string; amount: number | null; model: "flat" | "seat" | "free" | "quote"; limited?: boolean };

export type CheckInput = {
  plans: PlanFact[];
  featureOptions: { key: string; label: string }[];
  /** Funktionen, die in einer Herstellerquelle belegt sind. */
  featureTags: string[];
  sourceCount: number;
  /** Datum der letzten Prüfung der Tarife, wie angezeigt. */
  checked: string | null;
};

export type PriceStatus = "complete" | "partial" | "none";
export type EntryKind = "free" | "price" | "quote";

export type SoftwarebriefCheck = {
  prices: { published: number; total: number; status: PriceStatus };
  features: { covered: number; total: number; items: { key: string; label: string; ok: boolean }[] };
  entry: { kind: EntryKind; value: string; hint: string };
  sources: { count: number; checked: string | null };
};

export function buildCheck(input: CheckInput): SoftwarebriefCheck {
  const { plans, featureOptions, featureTags, sourceCount, checked } = input;

  const published = plans.filter((plan) => plan.amount !== null).length;
  const status: PriceStatus = published === 0 ? "none" : published === plans.length ? "complete" : "partial";

  const items = featureOptions.map((option) => ({ ...option, ok: featureTags.includes(option.key) }));

  return {
    prices: { published, total: plans.length, status },
    features: { covered: items.filter((item) => item.ok).length, total: items.length, items },
    entry: entryOf(plans),
    sources: { count: sourceCount, checked },
  };
}

function entryOf(plans: PlanFact[]): SoftwarebriefCheck["entry"] {
  const free = plans.find((plan) => plan.model === "free");
  if (free) return { kind: "free", value: "Kostenlos", hint: `Tarif „${free.name}“ mit Grenzen` };

  /* Eingeschränkte Lizenzen (zum Beispiel ohne Vollzugriff) sind kein realistischer Einstieg. */
  const entry = plans.find((plan) => plan.amount !== null && plan.amount > 0 && !plan.limited);
  if (!entry) return { kind: "quote", value: "Auf Anfrage", hint: "Kein öffentlicher Europreis" };

  const value = plans.length > 1 && !/^ab\s/i.test(entry.price) ? `ab ${entry.price}` : entry.price;
  return { kind: "price", value, hint: `${entry.name}, ${entry.unit}` };
}
