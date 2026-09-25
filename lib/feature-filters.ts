import type { CategorySlug } from "@/lib/catalog";

export const featureOptions: Record<CategorySlug, { key: string; label: string }[]> = {
  buchhaltung: [{ key: "invoice", label: "Elektronische Rechnungen" }, { key: "euer", label: "EÜR" }, { key: "banking", label: "Banking" }, { key: "datev", label: "DATEV Verbindung" }],
  lohnabrechnung: [{ key: "baulohn", label: "Baulohn" }, { key: "hr", label: "Personalprozesse" }, { key: "meldungen", label: "Meldungen" }],
  hr: [{ key: "zeit", label: "Zeiterfassung" }, { key: "schicht", label: "Schichtplanung" }, { key: "recruiting", label: "Recruiting" }, { key: "reise", label: "Reisekosten" }],
  crm: [{ key: "pipeline", label: "Vertriebspipeline" }, { key: "automation", label: "Automatisierung" }, { key: "free", label: "Kostenloser Einstieg" }, { key: "service", label: "Serviceprozesse" }],
  erp: [{ key: "lager", label: "Lager" }, { key: "produktion", label: "Produktion" }, { key: "projekte", label: "Projekte" }, { key: "shops", label: "Shopanbindung" }],
};

export const verifiedFeatureTags: Record<string, string[]> = {
  "fastbill": ["invoice", "banking", "datev"],
  "lexware-office": ["euer"],
  "sevdesk": ["invoice", "banking"],
  "sage-active": ["euer", "banking"],
  "billomat": ["invoice", "euer", "banking", "datev"],
  "sage-payroll": ["meldungen", "hr"],
  "lexware-office-lohn-gehalt": ["meldungen"],
  "datev-lohn-und-gehalt": ["baulohn", "meldungen"],
  "agenda-personalwesen": ["baulohn", "meldungen", "hr"],
  "personio-payroll": ["hr"],
  "personio": ["zeit"],
  "factorial": ["zeit"],
  "kenjo": ["zeit", "schicht", "recruiting"],
  "hr-works": ["zeit", "reise"],
  "hibob-bob": [],
  "pipedrive": ["pipeline", "automation"],
  "hubspot-sales-hub": ["pipeline", "automation", "free"],
  "centralstationcrm": ["free"],
  "zoho-crm": ["pipeline", "automation", "free"],
  "superoffice-crm": ["pipeline", "automation", "service"],
  "weclapp": ["lager", "produktion", "projekte", "shops"],
  "xentral": ["lager", "shops"],
  "odoo": ["lager", "produktion"],
  "sage-100": ["lager", "produktion"],
  "microsoft-dynamics-365-business-central": ["lager", "produktion", "projekte"],
};
