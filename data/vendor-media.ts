/* Archiv des Sage Herstellermaterials. Ohne dokumentierte schriftliche Freigabe
   erscheinen weder Abbildungen noch Videos oder PDF Kopien auf der Website.
   Stattdessen verweisen die Profilseiten über vendorSources auf Sage.

   Hochgeladen, aber nicht eingebunden, weil es dazu keine Produktprofile gibt: klarlotse/sage-x3 und
   klarlotse/sage-operations (Sage X3, Sage Distribution and Manufacturing Operations). */

import { asset } from "@/lib/cloudinary";

export type MediaImage = { id: string; title: string; caption: string; alt: string; width: number; height: number };
export type MediaVideo = { id: string; title: string; description: string; duration: string; posterAt: number };
export type MediaDocument = { id: string; fallback: string; kind: "Produktbroschüre" | "Leitfaden" | "Studie" | "E-Book" | "Datenblatt"; title: string; description: string; pages: number; sizeMb: number };
export type MediaKit = {
  vendor: string;
  /** Referenz auf die schriftliche Veröffentlichungsfreigabe; null sperrt das Material. Quellenangaben sind keine Freigabe. */
  publicationApproval: string | null;
  /** Produktseite des Herstellers, auf die als Herkunft verwiesen wird. */
  source: string;
  images: MediaImage[];
  /** Index des Bildes, das auf der Startseite als Vorschau dient. */
  featured: number;
  video?: MediaVideo;
  documents?: MediaDocument[];
  /** Zusätzlicher Hinweis, zum Beispiel zur Sprache der Oberfläche. */
  note?: string;
};

const img = (product: string, name: string, title: string, caption: string, alt: string): MediaImage => {
  const id = `klarlotse/${product}/${name}`;
  const { width, height } = asset(id);
  return { id, title, caption, alt, width, height };
};

const doc = (product: string, name: string, fallback: string, kind: MediaDocument["kind"], title: string, description: string): MediaDocument => {
  const id = `klarlotse/${product}/${name}`;
  const { pages, bytes } = asset(id);
  return { id, fallback, kind, title, description, pages: pages ?? 0, sizeMb: Math.round(bytes / 104857.6) / 10 };
};

const mediaArchive: Record<string, MediaKit> = {
  "sage-active": {
    vendor: "Sage",
    publicationApproval: null,
    source: "https://www.sage.com/de-de/produkte/sage-active/",
    featured: 0,
    images: [
      img("sage-active", "hw7iq7et72gpzgs858gzawzhiqp0", "Startseite", "Startseite mit ausstehenden Forderungen, Verbindlichkeiten und überfälligen Verkaufsrechnungen", "Sage Active Startseite mit Balken zu ausstehenden Forderungen und Verbindlichkeiten sowie einer Liste überfälliger Verkaufsrechnungen"),
      img("sage-active", "v418aevyre70xpy7u10a2gqlzq7s", "Dashboard", "Dashboard mit Gewinn- und Verlustindikatoren, Leistungskennzahlen und Finanzsalden", "Sage Active Dashboard mit Rohertrag, Ergebnis vor Steuern, Rentabilitätskennzahlen und Salden"),
      img("sage-active", "pwh71dinfpjrw7xlv9pkshsnmh08", "Angebot", "Verkaufsangebot mit Positionen und Artikelauswahl", "Sage Active Maske für ein Verkaufsangebot mit geöffneter Artikelauswahl"),
      img("sage-active", "ae9m0hf1c6o9ljgo0liqwt6idyu8", "Einkaufsrechnung", "Details einer Einkaufsrechnung mit Belegansicht und Buchungsdaten", "Sage Active Detailansicht einer Einkaufsrechnung mit Beleg links und Rechnungsdaten rechts"),
      img("sage-active", "chz0k1ue8boaxfii7ixqk8ak3oom", "Buchung", "Buchung erfassen mit Soll- und Habenseite", "Sage Active Maske zum Erfassen einer Buchung mit Buchungsdatum, Konten sowie Soll und Haben"),
      img("sage-active", "q6m3h4wvny37wtcge2fo9z3mwrx3", "Bank", "Banktransaktionen mit Buchungsvorschlägen abgleichen", "Sage Active Banktransaktionen mit Kontostand, Transaktionsliste und Auswahl des Gegenkontos"),
      img("sage-active", "vnlx1jfcwi04ewabn3hk7yr0iytb", "Umsatzsteuer", "Umsatzsteuer: Voranmeldung für den Februar", "Sage Active Umsatzsteuer mit Monatsliste links und Details der Voranmeldung für Februar rechts"),
      img("sage-active", "r3o303u9xiis5fkpb972mmiydosy", "Bilanz", "Bilanz mit Gliederung und Analysebereich", "Sage Active Bilanz mit Kontengliederung und eingeblendetem Analysebereich zu Stärken und Schwächen"),
    ],
    note: "Die Ansichten zeigen Demodaten des Herstellers.",
  },

  "sage-100": {
    vendor: "Sage",
    publicationApproval: null,
    source: "https://www.sage.com/de-de/produkte/sage-100/",
    featured: 5,
    images: [
      img("sage-100", "o22qy053kj3v9vv0c6ad1hw37fm6", "Rechnungswesen", "Rechnungswesen mit Umsatzsteuer-Auswertungen und Trendvergleich", "Sage 100 Rechnungswesen mit Umsatzsteuerfunktionen links und einem Trendvergleich als Diagramm rechts"),
      img("sage-100", "r0jhiqbscvrrn3ze04nmmlh8f8tx", "Bestellung", "Bestellung mit Belegkopf, Positionen und Belegfuß", "Sage 100 Bestellung mit Lieferantendaten und einer Dokumentenvorschau"),
      img("sage-100", "jv6mm8my498d0e55r8i8ad0lrqo4", "Lager", "Lagerauswertungen mit Lagerbestandsliste und Lagerbewegungsprotokoll", "Sage 100 Lagerverwaltung mit Auswertungen, ausstehenden Wareneingängen und einem Lagerwertdiagramm"),
      img("sage-100", "fxjamcdhgb4r6evpjrt2zvmipc39", "Fertigung", "Fertigungsauftragsübersicht mit Positionen", "Sage 100 Fertigungsauftragsübersicht mit Tabelle der Aufträge und Detailzeilen"),
      img("sage-100", "ygx1gte5x9itkj1t9oznulxo5fgi", "Projekte", "Projektübersicht mit Planung, Plantafel und Zeiterfassung", "Sage 100 Projektliste mit Reitern für Planung und Kalkulation, Plantafel und Zeiterfassung sowie einem Umsatzdiagramm"),
      img("sage-100", "w4sitkratvxfxl73d70qm13yx7s0", "Vertrieb", "Vertriebsauswertung mit Top-Vertriebsmitarbeitern, Artikelumsätzen und offenen Angeboten", "Sage 100 Vertriebsauswertung mit Balkendiagramm der Vertriebsmitarbeiter und einem Kreisdiagramm der Artikelumsätze"),
      img("sage-100", "ztqe5s5u6elv14cggnnd2v03z6q2", "Chancen", "Vertriebschancen nach Phasen vom Erstkontakt bis zur Lösungsfindung", "Sage 100 Chancenübersicht mit farbigem Balken nach Phasen und Kennzahlen je Phase"),
    ],
    video: {
      id: "klarlotse/sage-100/produkttour",
      title: "Sage 100: Teaser zur Produkttour",
      description: "Kurzer Teaser von Sage zur Produkttour von Sage 100, mit Kundenstimmen. Die Aussagen im Video sind Herstellerangaben.",
      duration: "0:48",
      posterAt: 7,
    },
    note: "Die Ansichten zeigen Demodaten des Herstellers.",
  },

  "sage-intacct": {
    vendor: "Sage",
    publicationApproval: null,
    source: "https://www.sage.com/de-de/sage-business-cloud/intacct/pricing/",
    featured: 0,
    images: [
      img("sage-intacct", "3labwje5m49yqptawj3hztr8kzau", "Rollen-Dashboard", "Rollenbasiertes Dashboard mit Kennzahlen wie EBITDA und Nettoergebnis", "Sage Intacct Dashboard mit Kennzahlenkacheln, Kennzahlenverlauf und Diagrammen, Oberfläche in englischer Sprache"),
      img("sage-intacct", "znyjlzadxp0cc861ma4jg4jld0hk", "Finanz-Dashboard", "Dashboard für die Finanzleitung mit Ergebnis nach Standort und Cashflow", "Sage Intacct Dashboard der Finanzleitung mit Balkendiagramm nach Standort und Cashflow-Tabelle, Oberfläche in englischer Sprache"),
    ],
    documents: [
      doc("sage-intacct", "rhj3gfj68bjmlavsjdxfg2o1npey", "/sage-intacct/rhj3gfj68bjmlavsjdxfg2o1npey.pdf", "Produktbroschüre", "Sage Intacct: Cloud-Finanzlösung für wachsende Unternehmen", "Überblick über die Lösung, Produktfunktionen, Dashboards, Plattform, Branchen und Kundenbeispiele."),
      doc("sage-intacct", "s2hgb61c8vm18gc96khr13ndxtin", "/sage-intacct/s2hgb61c8vm18gc96khr13ndxtin.pdf", "Leitfaden", "Buyer's Guide: Finanzmanagement-Software in der Cloud", "Auswahlhilfe von Sage für Finanzverantwortliche. Sie ist aus Herstellersicht geschrieben und keine neutrale Marktübersicht."),
      doc("sage-intacct", "0e0opk3scnepwwhiagj50lpop3sd", "/sage-intacct/0e0opk3scnepwwhiagj50lpop3sd.pdf", "Studie", "Der Erfolgscode für modernes Finanzmanagement", "Studie von Sage mit vier Strategien: KI und Automatisierung, datenbasierte Entscheidungen, größerer Einflussbereich und Compliance."),
      doc("sage-intacct", "xp1inwb21kapl397dptbfmsu7w09", "/sage-intacct/xp1inwb21kapl397dptbfmsu7w09.pdf", "E-Book", "Gamechanger KI im Finanzbereich", "E-Book von Sage zum Einsatz von KI im Finanzwesen, etwa beim Monatsabschluss. Zeitersparnisse darin sind Herstellerangaben."),
    ],
    note: "Beide Ansichten sind englischsprachig und zeigen Beträge in Pfund. Die deutsche Oberfläche kann abweichen.",
  },

  "sage-payroll": {
    vendor: "Sage",
    publicationApproval: null,
    source: "https://www.sage.com/de-de/sage-business-cloud/lohnabrechnung/",
    featured: 0,
    images: [
      img("sage-payroll", "tacmnbcza3jd2iyq9h3pz1lt5obf", "Startseite", "Startseite mit Aufgaben, Terminen und Monatsabrechnung", "Sage Lohnabrechnung Startseite mit Kacheln für Arbeitszeiterfassung, Aufgaben, nächste Termine und Monatsabrechnung"),
      img("sage-payroll", "johjqaaiq3eb9floqm79g1gypyb3", "Abrechnungen", "Abrechnungen mit aktueller Abrechnung und erledigten Monaten", "Sage Lohnabrechnung Übersicht der Abrechnungen mit aktuellem Monat und Liste erledigter Abrechnungen"),
      img("sage-payroll", "ur8pbgknfh72mcrxu6aqwyiiusxf", "Abwesenheiten", "Abrechnung mit erfassten Abwesenheiten der Beschäftigten", "Sage Lohnabrechnung Schritt Abwesenheiten mit Liste der Mitarbeitenden, Abwesenheitsart und Tagen"),
      img("sage-payroll", "lkgmvbzcxaxwon1gppjh1x80vpvn", "Stammdaten", "Stammdaten einer Mitarbeiterin oder eines Mitarbeiters", "Sage Lohnabrechnung Stammdatenmaske mit Anrede, Name, Anschrift und Kontaktdaten"),
      img("sage-payroll", "aeyki2cwxspw9u1d86c5rsbrig3b", "Arbeitszeiten", "Arbeitszeiten im Wochenraster", "Sage Lohnabrechnung Arbeitszeiten als Wochenraster mit Stunden pro Tag"),
      img("sage-payroll", "epclprc3dfkhmuc1x1av9epru4va", "Dokumente", "Dokumente wie Lohnscheine und Fehlzeitenübersicht", "Sage Lohnabrechnung Dokumentenbereich mit Liste von Lohnscheinen, Fehlzeitenübersicht und Stammdatenblatt"),
      img("sage-payroll", "q5p8jslr269jd7r79fj27i7to65r", "Jahreskalender", "Jahreskalender mit Abwesenheiten", "Sage Lohnabrechnung Jahreskalender mit farbig markierten Abwesenheitstagen"),
    ],
    video: {
      id: "klarlotse/sage-payroll/kundenvideo-becker-eventkonzept",
      title: "Kundenvideo: Sage und Becker Eventkonzept",
      description: "Kundenfilm von Sage über das Unternehmen Becker Eventkonzept, Titel „Mobil wachsen mit der Sage Business Cloud“. Das Video zeigt Veranstaltungsszenen und keine Oberfläche der Lohnabrechnung. Welche Sage Lösung das Unternehmen im Detail einsetzt, geht aus dem Material nicht hervor.",
      duration: "2:44",
      posterAt: 2,
    },
    note: "Die Ansichten zeigen eine Demofirma des Herstellers.",
  },
};

/** Nur Material mit dokumentierter Freigabe darf von öffentlichen Komponenten gerendert werden. */
export const vendorMedia: Record<string, MediaKit> = Object.fromEntries(
  Object.entries(mediaArchive).filter(([, kit]) => Boolean(kit.publicationApproval?.trim())),
);

/** Offizielle Quellen dürfen unabhängig von einer Medienfreigabe verlinkt werden. */
export const vendorSources: Record<string, { vendor: string; url: string }> = Object.fromEntries(
  Object.entries(mediaArchive).map(([slug, kit]) => [slug, { vendor: kit.vendor, url: kit.source }]),
);
