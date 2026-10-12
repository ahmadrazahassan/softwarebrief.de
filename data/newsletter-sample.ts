import { getLegacyGuide } from "@/data/legacy-guides";
import { findPair } from "@/lib/compare";
import { products } from "@/lib/catalog";

/* Beispielausgabe für die Seite /newsletter.
   Alle Inhalte stammen aus dem bestehenden Ratgeber zu CRM Kosten und dem Vergleich Pipedrive gegen
   HubSpot. Es ist keine versendete Ausgabe und wird auch nicht so bezeichnet. Fehlt eine Quelle,
   bricht der Build ab, statt eine leere Karte auszuliefern. */

const guide = getLegacyGuide("crm-kosten-verstehen");
const pair = findPair("pipedrive-vs-hubspot-sales-hub");
if (!guide || !pair) throw new Error("Beispielausgabe: Ratgeber oder Vergleich nicht gefunden.");

const nameOf = (slug: string) => products.find((p) => p.slug === slug)?.name ?? slug;

export const sampleIssue = {
  tag: "Beispielausgabe",
  caption: "So ist ein Brief aufgebaut. Die Inhalte stammen aus unserem Ratgeber zu CRM Kosten. Es handelt sich nicht um eine bereits versendete Ausgabe.",
  topic: {
    title: guide.title,
    teaser: guide.intro,
    points: guide.sections.map((s) => s.heading),
    href: `/ratgeber/${guide.slug}`,
    cta: "Ratgeber lesen",
  },
  /* Spiegelt den ersten Absatz des Ratgebers zu den Abrechnungseinheiten. */
  tariff: "CentralStationCRM bündelt Nutzer und Kontaktgrenzen je Paket. Pipedrive, HubSpot und SuperOffice kalkulieren nach Lizenzen.",
  questions: guide.checklist.slice(0, 2),
  comparison: {
    title: `${nameOf(pair.a)} oder ${nameOf(pair.b)}?`,
    href: `/vergleich/${pair.slug}`,
    cta: "Vergleich ansehen",
  },
};
