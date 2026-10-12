import records from "@/data/catalog.json";
import { withAffiliateLink } from "@/lib/affiliate";

export type Product = (typeof records)[number] & { linkType?: "direct" | "affiliate" };
export const products: Product[] = records.map(withAffiliateLink);
export const categorySlugs = ["buchhaltung", "lohnabrechnung", "hr", "crm", "erp"] as const;
export type CategorySlug = (typeof categorySlugs)[number];
export const categories: Record<CategorySlug, { name: string; number: string; kicker: string; intro: string; question: string; criteria: string[] }> = {
  buchhaltung: {
    name: "Buchhaltung", number: "01", kicker: "Finanzen ordnen", question: "Welche Aufgaben soll die Software wirklich übernehmen?",
    intro: "Für manche Betriebe reichen Rechnungen und Belege. Andere möchten Umsatzsteuer, Auswertungen und die laufende Buchführung selbst erledigen. Der passende Tarif hängt von dieser Grenze ab.",
    criteria: ["Rechnungen und Belege", "Einnahmenüberschussrechnung", "Umsatzsteuer", "Zusammenarbeit mit der Steuerberatung"],
  },
  lohnabrechnung: {
    name: "Lohnabrechnung", number: "02", kicker: "Menschen bezahlen", question: "Wie komplex sind Ihre Lohnfälle?",
    intro: "Eine gute Lohnlösung passt zu Ihren Beschäftigungsarten und Arbeitsabläufen. Prüfen Sie neben dem Grundpreis die Kosten je Abrechnung, Sonderfälle und die Zusammenarbeit mit Ihrer Kanzlei.",
    criteria: ["Zahl der Beschäftigten", "Sonderfälle", "Meldungen", "Anbindung an die Buchhaltung"],
  },
  hr: {
    name: "Personal", number: "03", kicker: "Arbeit organisieren", question: "Welche Personalprozesse kosten heute am meisten Zeit?",
    intro: "Personalsoftware kann Akten, Abwesenheiten, Arbeitszeiten und Recruiting verbinden. Entscheidend ist, welche Funktionen im Grundpaket liegen und welche als zusätzliches Modul berechnet werden.",
    criteria: ["Digitale Personalakte", "Zeiterfassung", "Schichtplanung", "Recruiting"],
  },
  crm: {
    name: "CRM", number: "04", kicker: "Kunden verstehen", question: "Brauchen Sie vor allem eine Pipeline oder eine ganze Plattform?",
    intro: "Ein CRM soll Kontakte und Verkaufschancen übersichtlich machen. Mit wachsendem Team werden Automatisierung, Nutzungsgrenzen und die Verbindung zu Marketing und Service wichtiger.",
    criteria: ["Kontakte und Unternehmen", "Vertriebspipeline", "Automatisierung", "Anzahl der Nutzer"],
  },
  erp: {
    name: "ERP", number: "05", kicker: "Prozesse verbinden", question: "Welche Abläufe müssen in einem System zusammenkommen?",
    intro: "Dienstleister, Händler und Fertigungsbetriebe brauchen sehr unterschiedliche ERP Funktionen. Lizenzpreis, Einführung, Auftragsvolumen und zusätzliche Module gehören gemeinsam in die Rechnung.",
    criteria: ["Aufträge und Einkauf", "Lager und Versand", "Projekte", "Einführung und Anpassung"],
  },
};
export function isCategory(value: string): value is CategorySlug { return categorySlugs.includes(value as CategorySlug); }
export function byCategory(slug: CategorySlug) { return products.filter((p) => p.categorySlug === slug); }
export function findProduct(category: string, slug: string) { return products.find((p) => p.categorySlug === category && p.slug === slug); }
export function compactPrice(product: Product) {
  const labels: Record<string, string> = {
    "fastbill": "ab 10 € monatlich, netto",
    "lexware-office": "ab 7,90 € monatlich, netto",
    "sevdesk": "ab 12,90 € monatlich, 24 Monate",
    "sage-active": "ab 25 € monatlich, netto",
    "billomat": "ab 29 € monatlich",
    "sage-payroll": "ab 20 € monatlich für 5 Personen",
    "lexware-office-lohn-gehalt": "ab 12,90 € monatlich",
    "datev-lohn-und-gehalt": "Lizenz und Nutzung prüfen",
    "agenda-personalwesen": "ab 50 € monatlich plus Nutzung",
    "personio-payroll": "Preis auf Anfrage",
    "personio": "Preis auf Anfrage",
    "factorial": "ab 8 € je Nutzer und Monat",
    "kenjo": "Preis auf Anfrage",
    "hr-works": "Preis auf Anfrage",
    "hibob-bob": "Preis auf Anfrage",
    "pipedrive": "Europreis auf Anfrage",
    "hubspot-sales-hub": "ab 7 € je Lizenz und Monat",
    "centralstationcrm": "Kostenloser Einstieg",
    "zoho-crm": "Kostenlose Edition",
    "superoffice-crm": "ab 45 € je Nutzer und Monat",
    "weclapp": "ab 39 € je Nutzer und Monat",
    "xentral": "ab 99 € monatlich plus Aufträge",
    "odoo": "Eine App kostenlos; Europreis auf Anfrage",
    "sage-hr": "ab 4,50 € je Person und Monat, netto",
    "sage-hr-payroll": "ab 40 € monatlich für 5 Personen",
    "sage-50-handwerk": "ab 19,90 € monatlich, jährlich",
    "sage-intacct": "ab 1.390 € monatlich, netto",
    "sage-sales-management": "55 € je Nutzer, mindestens 5",
    "sage-100": "ab 56 € je Nutzer und Monat",
    "microsoft-dynamics-365-business-central": "ab 69,30 € je Nutzer und Monat",
  };
  return labels[product.slug] ?? "Tarife ansehen";
}
export function displayText(value: string) {
  const substitutions: [string, string][] = [
    ["Add-ons", "Zusatzmodule"], ["Add-on", "Zusatzmodul"],
    ["Ein „ab 7,90 €“-Vergleich", "Ein Vergleich allein anhand von 7,90 €"],
    ["Steuerberater-Zusammenarbeit", "Zusammenarbeit mit der Steuerberatung"],
    ["Rechnungs- und Buchhaltungstarif", "Tarifen für Rechnungen und Buchhaltung"],
    ["Starter-Einstieg", "Einstieg mit Starter"],
    ["Rechnungs- und Nutzerkontingente", "Kontingente für Rechnungen und Nutzer"],
    ["Handels-/Dienstleistungsbetriebe", "Betriebe in Handel und Dienstleistung"],
    ["Banking-Verknüpfung", "Verbindung zum Banking"], ["API-Nutzung", "Nutzung der API"],
    ["Cloud-Lösung", "Cloudlösung"], ["HR-Systemen", "Personalsystemen"],
    ["DATEV-Preisliste", "Preisliste von DATEV"], ["Einer-Netzlizenz", "Netzlizenz für einen Arbeitsplatz"],
    ["DATEV-Rechenzentrum", "Rechenzentrum von DATEV"], ["PC-Verarbeitung", "Verarbeitung am PC"],
    ["DATEV-Systemumgebung", "Systemumgebung von DATEV"], ["Cloud-Einstieg", "Einstieg in eine Cloudlösung"],
    ["Personalwesen-Komplettsystem", "Komplettsystem für Personalwesen"], ["Experten-Support", "fachlicher Support"],
    ["HR-Umgebung", "Personalumgebung"], ["HR-System", "Personalsystem"],
    ["Personio-Plattform", "Plattform von Personio"], ["HR-Kernsystem", "zentrales Personalsystem"],
    ["Payroll-Angebot", "Angebot für Payroll"], ["HR-Module", "Personalfunktionen"],
    ["HR-Alltag", "Personalalltag"], ["Pro-Funktion", "Funktion von Core Pro"],
    ["On-/Offboarding-Vorlagen", "Vorlagen für Eintritte und Austritte"],
    ["Zeit-, Talent- und Finanzfunktionen", "Funktionen für Zeit, Talent und Finanzen"],
    ["Zeit- und Abwesenheitsprozessen", "Prozessen für Arbeitszeit und Abwesenheit"],
    ["„0,0 €“-Werte", "Werte von „0,0 €“"],
    ["Schicht- und Zeitfunktionen", "Funktionen für Schichten und Arbeitszeit"],
    ["HR-Vollständigkeitsbehauptung", "Behauptung einer vollständigen Personallösung"],
    ["Recruiting-Add-on", "Zusatzmodul für Recruiting"], ["HR-Prozessen", "Personalprozessen"],
    ["HR-Reporting", "Berichte im Personalbereich"],
    ["Zeit- und Aktenprozessen", "Prozessen für Arbeitszeit und Personalakten"],
    ["Payroll-Integration", "Anbindung der Lohnabrechnung"], ["Sales-Teams", "Vertriebsteams"],
    ["Marketing-/Service-Ausbau", "Ausbau für Marketing und Service"],
    ["DE-Preisseite", "deutschen Preisseite"], ["CRM-Einführung", "Einführung eines CRM"],
    ["Integrations- und Automationsbedarf", "Bedarf an Integrationen und Automatisierung"],
    ["EUR-Preis", "Europreis"], ["INR-Werte", "Angaben in indischen Rupien"],
    ["INR-Zahl", "Angabe in indischen Rupien"], ["DE-Seite", "deutschen Seite"],
    ["CRM-Plattform", "Plattform für Kundenbeziehungen"],
    ["Vertriebs- und Serviceprozesse", "Prozesse für Vertrieb und Service"],
    ["E-Commerce-Teams", "Teams im Onlinehandel"], ["Lager-/Shopfunktionen", "Funktionen für Lager und Shops"],
    ["Handels- und E-Commerce-Unternehmen", "Handelsunternehmen mit Onlinevertrieb"],
    ["Shop-/Marktplatzanbindung", "Anbindung von Shops und Marktplätzen"],
    ["Shop-/Marktplatz-Anbindung", "Anbindung von Shops und Marktplätzen"],
    ["Odoo.sh-Hosting", "Hosting über Odoo.sh"], ["Hosting-Optionen", "Hostingoptionen"],
    ["App-Auswahl", "Auswahl an Apps"], ["Festpreis-Tarif", "Tarif mit Festpreis"],
    ["Microsoft-Umgebung", "Umgebung von Microsoft"],
    ["Finanz-, Vertriebs- und Warenprozessen", "Prozessen für Finanzen, Vertrieb und Waren"],
    ["DATEV-Export", "Export für DATEV"], ["E-Rechnungen", "elektronische Rechnungen"],
    ["E-Rechnung", "elektronische Rechnung"],
  ];
  const revised = substitutions.reduce((text, [before, after]) => text.replaceAll(before, after), value);
  return revised.charAt(0).toLocaleUpperCase("de") + revised.slice(1);
}
