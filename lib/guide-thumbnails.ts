import type { GuideMeta } from "@/data/guides";

/** One original German editorial thumbnail for each published guide. */
const thumbnails: Record<string, { src: string; alt: string }> = {
  "buchhaltungssoftware-auswaehlen": { src: "/editorial-thumbnails/buchhaltungssoftware-auswaehlen.webp", alt: "Buchhaltung: Software wählen – Ratgeber zu Abläufen, Tarifen und Steuerberatung." },
  "elektronische-rechnungen-software": { src: "/editorial-thumbnails/elektronische-rechnungen-software.webp", alt: "E-Rechnungen richtig verarbeiten – Empfang, Prüfung und Archivierung im Überblick." },
  "lohnsoftware-kosten-vergleichen": { src: "/editorial-thumbnails/lohnsoftware-kosten-vergleichen.webp", alt: "Lohnsoftware: Kosten im Blick – Teamgröße, Korrekturen und interner Aufwand." },
  "baulohn-und-sonderfaelle": { src: "/editorial-thumbnails/baulohn-und-sonderfaelle.webp", alt: "Baulohn und Sonderfälle – Leistungen und Fachmodule vor der Softwareauswahl prüfen." },
  "hr-software-einfuehren": { src: "/editorial-thumbnails/hr-software-einfuehren.webp", alt: "HR-Software sicher einführen – Daten, Rollen und Prozesse vorbereiten." },
  "zeiterfassung-und-schichtplanung": { src: "/editorial-thumbnails/zeiterfassung-und-schichtplanung.webp", alt: "Zeiterfassung und Schichtplanung – Erfassung, Planung und Freigaben getrennt prüfen." },
  "crm-kosten-verstehen": { src: "/editorial-thumbnails/crm-kosten-verstehen.webp", alt: "CRM-Kosten richtig verstehen – Nutzer, Kontakte und Funktionen vergleichen." },
  "vertrieb-von-tabellen-ins-crm": { src: "/editorial-thumbnails/vertrieb-von-tabellen-ins-crm.webp", alt: "Von Tabellen zur Pipeline – Kontakte ordnen und den Vertrieb strukturieren." },
  "erp-handel-oder-dienstleistung": { src: "/editorial-thumbnails/erp-handel-oder-dienstleistung.webp", alt: "ERP für Handel oder Dienstleistung – Warenfluss und Projektprozesse vergleichen." },
  "erp-gesamtkosten": { src: "/editorial-thumbnails/erp-gesamtkosten.webp", alt: "ERP: Was kostet das wirklich? – Lizenzen, Einführung und Betrieb kalkulieren." },
  /* Ausführliche Artikel: gezeichnet mit scripts/make-thumbnails.mjs. */
  "e-rechnung-pflicht-fristen-software": { src: "/editorial-thumbnails/e-rechnung-pflicht-fristen-software.webp", alt: "E-Rechnung: Das gilt jetzt. Fristen, Formate und Software im Überblick." },
  "software-fuer-startups-die-ersten-zwoelf-monate": { src: "/editorial-thumbnails/software-fuer-startups-die-ersten-zwoelf-monate.webp", alt: "Software für Startups: Welche Programme Gründer in den ersten zwölf Monaten brauchen." },
  "lohnabrechnung-auslagern-oder-selbst-machen": { src: "/editorial-thumbnails/lohnabrechnung-auslagern-oder-selbst-machen.webp", alt: "Lohn auslagern oder selbst machen? Kosten, Pflichten und Software im Vergleich." },
  "arbeitszeiterfassung-pflicht-software-auswahl": { src: "/editorial-thumbnails/arbeitszeiterfassung-pflicht-software-auswahl.webp", alt: "Arbeitszeit erfassen: Rechtslage, Software und Praxis für Arbeitgeber." },
  "crm-einfuehrung-fehler-vermeiden": { src: "/editorial-thumbnails/crm-einfuehrung-fehler-vermeiden.webp", alt: "CRM einführen: Neun typische Fehler und wie Sie sie vermeiden." },
  "erp-auswahl-mittelstand-schritt-fuer-schritt": { src: "/editorial-thumbnails/erp-auswahl-mittelstand-schritt-fuer-schritt.webp", alt: "ERP auswählen im Mittelstand: Pflichtenheft, Demo und Kosten." },
  "kleinunternehmerregelung-grenzen-rechnung-software": { src: "/editorial-thumbnails/kleinunternehmerregelung-grenzen-rechnung-software.webp", alt: "Kleinunternehmer ab 2025: Grenzen, Rechnung und Software." },
  "gobd-aufbewahrungsfristen-belege-digitalisieren": { src: "/editorial-thumbnails/gobd-aufbewahrungsfristen-belege-digitalisieren.webp", alt: "GoBD und Aufbewahrung: Belege digital archivieren." },
  "buchhaltungssoftware-fuer-startups-gruender": { src: "/editorial-thumbnails/buchhaltungssoftware-fuer-startups-gruender.webp", alt: "Buchhaltung für Startups: Einnahmenüberschussrechnung, GmbH und Tarife." },
  "digitale-personalakte-dsgvo-personalsoftware": { src: "/editorial-thumbnails/digitale-personalakte-dsgvo-personalsoftware.webp", alt: "Digitale Personalakte: Datenschutz, Rollen und Löschfristen." },
  "excel-abloesen-wann-tabellen-zum-risiko-werden": { src: "/editorial-thumbnails/excel-abloesen-wann-tabellen-zum-risiko-werden.webp", alt: "Excel ablösen: Warnzeichen und Umstieg in eine Software." },
  "softwarevertrag-pruefen-laufzeit-daten-ausstieg": { src: "/editorial-thumbnails/softwarevertrag-pruefen-laufzeit-daten-ausstieg.webp", alt: "Softwarevertrag richtig prüfen: Laufzeit, Daten und Ausstieg." },
};

export function guideThumbnail(guide: GuideMeta) {
  const thumbnail = thumbnails[guide.slug];
  if (!thumbnail) throw new Error(`Missing editorial thumbnail for guide: ${guide.slug}`);
  return { ...thumbnail, width: 1536, height: 864 };
}
