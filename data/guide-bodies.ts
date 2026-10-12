import { legacyGuides } from "./legacy-guides";
import type { GuideBody } from "./guide-types";

/* Lädt den Text eines Ratgebers. Nur serverseitig: Die Artikeltexte sind lang und sollen nicht in den Browser Code gelangen.
   Jeder ausführliche Artikel hat eine eigene Datei und wird erst geladen, wenn er gelesen wird. */

type Loader = () => Promise<{ body: GuideBody }>;

export const longGuideLoaders: Record<string, Loader> = {
  "arbeitszeiterfassung-pflicht-software-auswahl": () => import("./articles/arbeitszeiterfassung-pflicht-software-auswahl"),
  "buchhaltungssoftware-fuer-startups-gruender": () => import("./articles/buchhaltungssoftware-fuer-startups-gruender"),
  "crm-einfuehrung-fehler-vermeiden": () => import("./articles/crm-einfuehrung-fehler-vermeiden"),
  "digitale-personalakte-dsgvo-personalsoftware": () => import("./articles/digitale-personalakte-dsgvo-personalsoftware"),
  "e-rechnung-pflicht-fristen-software": () => import("./articles/e-rechnung-pflicht-fristen-software"),
  "erp-auswahl-mittelstand-schritt-fuer-schritt": () => import("./articles/erp-auswahl-mittelstand-schritt-fuer-schritt"),
  "excel-abloesen-wann-tabellen-zum-risiko-werden": () => import("./articles/excel-abloesen-wann-tabellen-zum-risiko-werden"),
  "gobd-aufbewahrungsfristen-belege-digitalisieren": () => import("./articles/gobd-aufbewahrungsfristen-belege-digitalisieren"),
  "kleinunternehmerregelung-grenzen-rechnung-software": () => import("./articles/kleinunternehmerregelung-grenzen-rechnung-software"),
  "lohnabrechnung-auslagern-oder-selbst-machen": () => import("./articles/lohnabrechnung-auslagern-oder-selbst-machen"),
  "software-fuer-startups-die-ersten-zwoelf-monate": () => import("./articles/software-fuer-startups-die-ersten-zwoelf-monate"),
  "softwarevertrag-pruefen-laufzeit-daten-ausstieg": () => import("./articles/softwarevertrag-pruefen-laufzeit-daten-ausstieg"),
};

export async function loadGuideBody(slug: string): Promise<GuideBody | null> {
  const load = longGuideLoaders[slug];
  if (load) return (await load()).body;

  const legacy = legacyGuides.find((guide) => guide.slug === slug);
  if (!legacy) return null;
  return { sections: legacy.sections, checklist: legacy.checklist, related: legacy.related };
}
