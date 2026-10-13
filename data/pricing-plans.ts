/** limited: eingeschränkte Lizenz (zum Beispiel ohne Vollzugriff). Sie zählt nicht als Einstiegspreis für Vergleiche und Richtwerte. */
export type Plan = { name: string; price: string; unit: string; detail: string; highlights: string[]; featured?: boolean; limited?: boolean };
export type PricingPlanData = { basis: string; plans: Plan[]; checked: string };

// Euro amounts are copied from the linked German manufacturer price pages.
// An enquiry card is deliberately used when a reliable German euro amount is unavailable.
export const pricingPlans: Record<string, PricingPlanData> = {
  fastbill: { basis: "Nettopreise je Monat bei monatlicher Zahlung; Jahreszahlung ist günstiger.", checked: "27. September 2026", plans: [
    { name: "Solo", price: "10 €", unit: "pro Monat", detail: "Für den Rechnungseinstieg", highlights: ["Angebote und Rechnungen", "Einzelbetrieb prüfen"] },
    { name: "Plus", price: "15 €", unit: "pro Monat", detail: "Mehr Umfang für den Alltag", highlights: ["Belege und Banking prüfen", "Kontingente beachten"], featured: true },
    { name: "Pro", price: "30 €", unit: "pro Monat", detail: "Für wiederkehrende Abläufe", highlights: ["Wiederkehrende Rechnungen", "Nutzerzahl prüfen"] },
    { name: "Premium", price: "ab 59 €", unit: "pro Monat", detail: "Für mehr Automatisierung", highlights: ["Automatische Belegverarbeitung prüfen", "Zusatzmodule einrechnen"] },
  ] },
  "lexware-office": { basis: "Monatliche Regelpreise, netto; befristete Aktionen sind nicht eingerechnet.", checked: "27. September 2026", plans: [
    { name: "S", price: "7,90 €", unit: "pro Monat", detail: "Belege ohne Ausgangsrechnungen", highlights: ["Belege verwalten", "Keine Ausgangsrechnungen"] },
    { name: "M", price: "12,90 €", unit: "pro Monat", detail: "Rechnungen ergänzen", highlights: ["Angebote und Rechnungen", "Steueraufgaben prüfen"] },
    { name: "L", price: "21,90 €", unit: "pro Monat", detail: "Für eigene Buchhaltung", highlights: ["EÜR und Umsatzsteuerfunktionen", "Kanzleiablauf abstimmen"], featured: true },
    { name: "XL", price: "32,90 €", unit: "pro Monat", detail: "Erweiterter Umfang", highlights: ["Zusätzliche Funktionen laut Preisseite", "Lohn getrennt prüfen"] },
  ] },
  sevdesk: { basis: "Reguläre Nettopreise je Monat bei 24 Monaten Laufzeit.", checked: "27. September 2026", plans: [
    { name: "Rechnung", price: "12,90 €", unit: "pro Monat", detail: "Für Angebote und Rechnungen", highlights: ["Rechnungskern", "Keine volle Buchhaltung behauptet"] },
    { name: "Buchhaltung", price: "25,90 €", unit: "pro Monat", detail: "Belege und Bank verbinden", highlights: ["Buchhaltungsablauf", "Kanzleiübergabe prüfen"], featured: true },
    { name: "Buchhaltung Pro", price: "34,90 €", unit: "pro Monat", detail: "Mehr Funktionen und Automatisierung", highlights: ["Erweiterte Abläufe", "Tarifgrenzen prüfen"] },
  ] },
  "sage-active": { basis: "Listenpreise pro Monat, zzgl. MwSt., monatlich kündbar. Die befristete Neukundenaktion ist nicht eingerechnet.", checked: "13. Oktober 2026", plans: [
    { name: "Starter", price: "25 €", unit: "pro Monat", detail: "Angebote und Rechnungen", highlights: ["1 Unternehmen, 5 Nutzer", "300 Rechnungen pro Monat", "Belegerfassung und Bankabgleich", "Keine eigene Buchführung"] },
    { name: "Essentials", price: "49 €", unit: "pro Monat", detail: "Buchhaltung und Lohn", highlights: ["10 Nutzer, 500 Rechnungen", "Doppelte Buchführung, GuV und Bilanz", "Umsatzsteuervoranmeldung über ELSTER", "Lohn für 2 Personen, jede weitere 3 €"], featured: true },
  ] },
  billomat: { basis: "Nettopreise bei monatlicher Zahlung; Jahreszahlung ist günstiger.", checked: "25. September 2026", plans: [
    { name: "Professional", price: "29 €", unit: "pro Monat", detail: "Ein Nutzer, 30 Rechnungen", highlights: ["Angebote und Rechnungen", "Kontingente beachten"] },
    { name: "Business", price: "39 €", unit: "pro Monat", detail: "Mehr Verbindungen", highlights: ["Banking und DATEVconnect prüfen", "Teamumfang prüfen"], featured: true },
    { name: "Enterprise", price: "119 €", unit: "pro Monat", detail: "Für größeren Bedarf", highlights: ["Erweiterte Teamabläufe", "API und Zusatzkosten prüfen"] },
  ] },
  "sage-payroll": { basis: "Preise pro Monat inklusive 5 Beschäftigter, zzgl. MwSt.; jede weitere Person wird je Paket zusätzlich berechnet.", checked: "27. September 2026", plans: [
    { name: "Payroll Essentials", price: "20 €", unit: "pro Monat, 5 Personen", detail: "Lohn mit Grundfunktionen", highlights: ["Weitere Person 3 €", "Meldungen und Mitarbeiterzugang", "Export für Sage und DATEV"], featured: true },
    { name: "Payroll Standard", price: "30 €", unit: "pro Monat, 5 Personen", detail: "Lohn mit Zeit und Abläufen", highlights: ["Weitere Person 5 €", "Arbeitszeiten und Überstunden", "Genehmigungen und Onboarding"] },
    { name: "Payroll Premium", price: "40 €", unit: "pro Monat, 5 Personen", detail: "Lohn mit Schichten und Spesen", highlights: ["Weitere Person 7 €", "Schichtplanung", "Spesen per App"] },
  ] },
  "lexware-office-lohn-gehalt": { basis: "Öffentlicher Euro-Einstieg zzgl. MwSt.; konkrete Mitarbeiterstaffel im Checkout prüfen.", checked: "25. September 2026", plans: [
    { name: "Lohn & Gehalt", price: "ab 12,90 €", unit: "pro Monat", detail: "In Lexware Office eingebunden", highlights: ["Geführte Lohnabrechnung", "Ausschlüsse und Mitarbeiterzahl prüfen"] },
  ] },
  "datev-lohn-und-gehalt": { basis: "Lizenz, Rechenzentrum und Zusatzdienste sind getrennt zu kalkulieren.", checked: "25. September 2026", plans: [
    { name: "Passende DATEV-Lizenz", price: "Euro-Angebot", unit: "individuell", detail: "Kein belastbarer Komplettpreis", highlights: ["Arbeitsplätze und Lizenzart", "Rechenzentrumsleistungen und Kanzleiablauf"] },
  ] },
  "agenda-personalwesen": { basis: "Grundpreis plus nutzungsabhängige Kosten; zwölf Monate Mindestlaufzeit.", checked: "25. September 2026", plans: [
    { name: "Personalwesen", price: "ab 50 €", unit: "pro Monat", detail: "Grundpreis des Komplettsystems", highlights: ["Mitarbeiter und Arbeitsplätze hinzurechnen", "Baulohnmodule prüfen"] },
  ] },
  "personio-payroll": { basis: "Kein verifizierter öffentlicher Euro-Komplettpreis.", checked: "25. September 2026", plans: [
    { name: "Personio Payroll", price: "Euro-Angebot", unit: "individuell", detail: "HR, Payroll und Einführung getrennt kalkulieren", highlights: ["Mitarbeiterzahl", "Apps und Steuerberatung"] },
  ] },
  personio: { basis: "Preis hängt von Beschäftigtenzahl, Core-Paket und Apps ab.", checked: "25. September 2026", plans: [
    { name: "Personio HR", price: "Euro-Angebot", unit: "individuell", detail: "Passendes Paket zusammenstellen", highlights: ["Core und Zusatzapps", "Einführung und Payroll separat"] },
  ] },
  factorial: { basis: "Euro-Einstieg je Nutzer und Monat; Modulauswahl bestimmt den Gesamtpreis.", checked: "25. September 2026", plans: [
    { name: "Basis und Module", price: "ab 8 €", unit: "je Nutzer und Monat", detail: "Angebot für benötigte Module prüfen", highlights: ["Personalstammdaten", "Zeit, Talent und Finanzen gesondert"] },
  ] },
  kenjo: { basis: "Kein verifizierter deutscher Euro-Listenpreis aus der dynamischen Preisseite.", checked: "25. September 2026", plans: [
    { name: "Kenjo-Paket", price: "Euro-Angebot", unit: "individuell", detail: "Funktionen und Onboarding bestätigen", highlights: ["Schichtplanung und Recruiting", "API und Einführung"] },
  ] },
  "hr-works": { basis: "Monatsgebühr laut Hersteller aus Grundgebühr und Lizenzen.", checked: "25. September 2026", plans: [
    { name: "HRworks", price: "Euro-Angebot", unit: "individuell", detail: "Gesamtkosten je Team anfragen", highlights: ["Personal, Zeit und Reisekosten", "Grundgebühr und Lizenzen"] },
  ] },
  "hibob-bob": { basis: "Individuelle Eurokalkulation nach Mitarbeitern und Modulen.", checked: "25. September 2026", plans: [
    { name: "Bob", price: "Euro-Angebot", unit: "individuell", detail: "Internationale HR-Anforderungen prüfen", highlights: ["Länder und Rollen", "Deutsche Payroll-Integration"] },
  ] },
  pipedrive: { basis: "Die deutsche Seite lieferte keinen verifizierten Europreis. Keine Währungsumrechnung.", checked: "27. September 2026", plans: [
    { name: "Lite", price: "Euro-Angebot", unit: "je Nutzer", detail: "Pipeline-Einstieg", highlights: ["Kontakte und Deals", "Deutschen Preis anfragen"] },
    { name: "Growth", price: "Euro-Angebot", unit: "je Nutzer", detail: "Mehr Vertriebsabläufe", highlights: ["Automatisierung prüfen", "Jahres- oder Monatszahlung klären"], featured: true },
    { name: "Premium", price: "Euro-Angebot", unit: "je Nutzer", detail: "Erweiterte Steuerung", highlights: ["Berichte und Rechte prüfen", "Zusatzmodule einrechnen"] },
    { name: "Ultimate", price: "Euro-Angebot", unit: "je Nutzer", detail: "Größter gelisteter Umfang", highlights: ["Teamrollen und Support prüfen", "Schriftliches Euroangebot einholen"] },
  ] },
  "hubspot-sales-hub": { basis: "Deutsche Euro-Einstiegswerte je Lizenz und Monat; Zahlungsart und Onboarding bestätigen.", checked: "25. September 2026", plans: [
    { name: "Kostenlos", price: "0 €", unit: "Einstieg", detail: "Grundfunktionen für Kontakte und Deals", highlights: ["Kostenloser Start", "Grenzen vor Ausbau prüfen"] },
    { name: "Starter", price: "ab 7 €", unit: "je Lizenz und Monat", detail: "Vertrieb erweitern", highlights: ["Lizenzen zählen", "Aktionsbedingungen prüfen"], featured: true },
    { name: "Professional", price: "ab 90 €", unit: "je Lizenz und Monat", detail: "Für umfassendere Prozesse", highlights: ["Workflows und Berichte prüfen", "Einführung einkalkulieren"] },
    { name: "Enterprise", price: "ab 150 €", unit: "je Lizenz und Monat", detail: "Für größere Organisationen", highlights: ["Mehrere Teams und Hubs", "Gesamtvertrag anfragen"] },
  ] },
  centralstationcrm: { basis: "Monatliche Paketpreise zzgl. MwSt. laut deutscher Preisseite.", checked: "25. September 2026", plans: [
    { name: "Starter", price: "0 €", unit: "pro Monat", detail: "Bis 3 Nutzer, 200 Kontakte", highlights: ["Kontaktpflege testen", "Wachstum beachten"] },
    { name: "Team", price: "24 €", unit: "pro Monat", detail: "3 Nutzer, 3.000 Kontakte", highlights: ["Kleines Team", "Kontaktgrenze prüfen"], featured: true },
    { name: "Small Office", price: "75 €", unit: "pro Monat", detail: "Bis 10 Nutzer", highlights: ["Mehr Teamplätze", "Speichergrenze prüfen"] },
    { name: "Business", price: "149 €", unit: "pro Monat", detail: "Bis 20 Nutzer", highlights: ["Größerer Teamrahmen", "Integrationen prüfen"] },
    { name: "Enterprise", price: "289 €", unit: "pro Monat", detail: "Bis 40 Nutzer", highlights: ["Umfangreichster gelisteter Tarif", "Bedarf abgleichen"] },
  ] },
  "zoho-crm": { basis: "Nur die kostenlose Edition ist als Eurobetrag gesichert; bezahlte deutsche Europreise anfragen.", checked: "25. September 2026", plans: [
    { name: "Kostenlos", price: "0 €", unit: "bis 3 Nutzer", detail: "CRM-Einstieg", highlights: ["Kontakte und Pipeline testen", "Grenzen beachten"] },
    { name: "Standard", price: "Euro-Angebot", unit: "je Nutzer", detail: "Bezahlte Edition", highlights: ["Automatisierung prüfen", "Region und Zahlungsart klären"] },
    { name: "Professional", price: "Euro-Angebot", unit: "je Nutzer", detail: "Bezahlte Edition", highlights: ["Benötigte Funktionen abgleichen", "Europreis schriftlich bestätigen"] },
    { name: "Enterprise / Ultimate", price: "Euro-Angebot", unit: "je Nutzer", detail: "Erweiterte Editionen", highlights: ["Rollen und Analysen prüfen", "Gesamtvertrag anfragen"] },
  ] },
  "superoffice-crm": { basis: "Europreise je Nutzer und Monat bei jährlicher Zahlung.", checked: "25. September 2026", plans: [
    { name: "Starter", price: "45 €", unit: "je Nutzer und Monat", detail: "CRM-Einstieg", highlights: ["Kontakte und Kernabläufe", "Jahreszahlung"] },
    { name: "Core", price: "65 €", unit: "je Nutzer und Monat", detail: "Mehr Funktionen", highlights: ["Rollen und Nutzung prüfen", "Einführung einrechnen"] },
    { name: "Growth", price: "95 €", unit: "je Nutzer und Monat", detail: "Wachsende Teams", highlights: ["Automatisierung prüfen", "Teamgesamtpreis rechnen"], featured: true },
    { name: "Plus", price: "130 €", unit: "je Nutzer und Monat", detail: "Erweiterte Nutzung", highlights: ["Vertrieb und Service abgleichen", "Jahresvertrag"] },
    { name: "Super", price: "160 €", unit: "je Nutzer und Monat", detail: "Größter gelisteter Umfang", highlights: ["Alle Rollen prüfen", "Einführungskosten anfragen"] },
  ] },
  weclapp: { basis: "Nettopreise je Nutzer und Monat; Dienstleistung und Handel bei jährlicher Zahlung.", checked: "25. September 2026", plans: [
    { name: "ERP Starter", price: "39 €", unit: "je Nutzer und Monat", detail: "ERP-Einstieg", highlights: ["Kernprozesse prüfen", "Nutzerzahl rechnen"] },
    { name: "Dienstleistung", price: "86 €", unit: "je Nutzer und Monat", detail: "Bei jährlicher Zahlung", highlights: ["Projekte und Leistungen", "Monatliche Zahlung teurer"], featured: true },
    { name: "Handel", price: "163 €", unit: "je Nutzer und Monat", detail: "Bei jährlicher Zahlung", highlights: ["Lager und Warenprozesse", "Shop-Anbindungen prüfen"] },
    { name: "Enterprise", price: "Euro-Angebot", unit: "individuell", detail: "Komplexere Anforderungen", highlights: ["Module und Integrationen", "Einführung kalkulieren"] },
  ] },
  xentral: { basis: "Euro-Einstieg plus mögliche Volumen- und Zusatzkosten.", checked: "25. September 2026", plans: [
    { name: "Launch", price: "ab 99 €", unit: "pro Monat", detail: "Für Startups bis 500.000 € Jahresumsatz", highlights: ["Zusätzlich 0,30 € je Auftrag", "Umsatzgrenze beachten"] },
    { name: "Starter", price: "ab 349 €", unit: "pro Monat", detail: "500 Aufträge monatlich enthalten", highlights: ["Unbegrenzte Nutzer laut Preisseite", "Mehrvolumen prüfen"], featured: true },
    { name: "Weitere Pakete", price: "Euro-Angebot", unit: "individuell", detail: "Bei größerem Handelsvolumen", highlights: ["Aufträge und Kanäle", "Einführung und Module"] },
  ] },
  odoo: { basis: "Nur die kostenlose Ein-App-Option ist als Eurobetrag gesichert.", checked: "25. September 2026", plans: [
    { name: "Eine App gratis", price: "0 €", unit: "Einstieg", detail: "Einzelne App ohne Gesamt-ERP", highlights: ["Eine App auswählen", "Grenzen vor Ausbau prüfen"] },
    { name: "Standard", price: "Euro-Angebot", unit: "je Nutzer", detail: "Mehrere Apps verbinden", highlights: ["Deutsche Lokalisierung prüfen", "Hosting klären"], featured: true },
    { name: "Custom", price: "Euro-Angebot", unit: "je Nutzer", detail: "Anpassungen und Integrationen", highlights: ["Partnerarbeit kalkulieren", "Odoo.sh gesondert prüfen"] },
  ] },
  "sage-100": { basis: "Modulpreise je Nutzer und Monat bei jährlicher Rechnung und zwölf Monaten Mindestlaufzeit, zzgl. MwSt. Einführung und Zusatzlösungen kommen hinzu.", checked: "27. September 2026", plans: [
    { name: "Warenwirtschaft", price: "ab 56 €", unit: "je Nutzer und Monat", detail: "Einkauf, Verkauf und Lager", highlights: ["Aufträge, Bestellungen, Kommissionierung", "Seriennummern und Chargen", "Unbegrenzte Mandanten"] },
    { name: "Rechnungswesen", price: "ab 58 €", unit: "je Nutzer und Monat", detail: "Finanzen und Controlling", highlights: ["Finanz und Anlagenbuchhaltung", "Kostenrechnung und Bilanz", "DATEV Austausch, ELSTER"], featured: true },
    { name: "Produktion", price: "ab 90 €", unit: "je Nutzer und Monat", detail: "Fertigung inklusive Warenwirtschaft", highlights: ["Fertigungssteuerung und CAD Schnittstelle", "Vor und Nachkalkulation", "Betriebsdatenerfassung"] },
  ] },
  "microsoft-dynamics-365-business-central": { basis: "Europreise je Nutzer und Monat bei jährlicher Abrechnung, zzgl. MwSt.; regionale Abweichungen möglich.", checked: "25. September 2026", plans: [
    { name: "Team Members", price: "6,90 €", unit: "je Nutzer und Monat", detail: "Eingeschränkte Nutzung", highlights: ["Keine Vollnutzerlizenz", "Rollen prüfen"], limited: true },
    { name: "Essentials", price: "69,30 €", unit: "je Nutzer und Monat", detail: "Finanzen und Warenprozesse", highlights: ["Einkauf und Lager", "Partnerkosten einplanen"], featured: true },
    { name: "Premium", price: "95,30 €", unit: "je Nutzer und Monat", detail: "Erweiterte Prozesse", highlights: ["Dienst und Fertigung", "Apps und Anpassungen prüfen"] },
  ] },
  "sage-hr": { basis: "Preise je Beschäftigtem und Monat, zzgl. MwSt. Module frei kombinierbar: Zeit, Schichten und Performance je 2,50 €, Ausgaben 1,50 €, Recruiting pauschal 175 € pro Monat.", checked: "27. September 2026", plans: [
    { name: "Basis", price: "4,50 €", unit: "je Person und Monat", detail: "Abwesenheiten und Personalakte", highlights: ["Abwesenheitsmanagement", "Digitale Mitarbeiterakte", "Mobile App und Selbstbedienung"] },
    { name: "Zeit-Paket", price: "7,00 €", unit: "je Person und Monat", detail: "Basis mit Arbeitszeittabellen", highlights: ["Projektbezogene Zeiterfassung", "Arbeitsmuster und Freigaben"], featured: true },
    { name: "Schicht-Paket", price: "9,50 €", unit: "je Person und Monat", detail: "Zeit mit Schichtplanung", highlights: ["Schichten und Vertretungen", "Benachrichtigung per App"] },
  ] },
  "sage-hr-payroll": { basis: "Preise pro Monat für 5 Beschäftigte, zzgl. 19 % MwSt.; weitere Personen kosten ab 7 €, ab 9 € beziehungsweise ab 11 € pro Monat.", checked: "27. September 2026", plans: [
    { name: "Essentials", price: "40 €", unit: "pro Monat, 5 Personen", detail: "Cloud HR und Cloud Lohn", highlights: ["Weitere Person ab 7 €", "Zeit, Schichten und Spesen enthalten", "Keine Sonderlöhne wie Baulohn"] },
    { name: "Standard", price: "60 €", unit: "pro Monat, 5 Personen", detail: "Komplexere Lohnfälle", highlights: ["Weitere Person ab 9 €", "Sonderlöhne und Controlling", "Lohn laut Hersteller als Desktop Lösung"], featured: true },
    { name: "Premium", price: "80 €", unit: "pro Monat, 5 Personen", detail: "Automatisierung, Performance, Recruiting", highlights: ["Weitere Person ab 11 €", "Korrektursimulation und Projektzeit", "OKR, Feedback und Bewerberpipeline"] },
  ] },
  "sage-50-handwerk": { basis: "Preise pro Monat bei jährlicher Rechnung und zwölf Monaten Mindestlaufzeit, zzgl. MwSt. Schnittstellen und Zusatzmodule werden gesondert angeboten.", checked: "27. September 2026", plans: [
    { name: "Essential", price: "19,90 €", unit: "pro Monat", detail: "Ein Benutzer", highlights: ["Angebote, Aufträge, Rechnungen", "ZUGFeRD und XRechnung", "Keine Teil und Schlussrechnungen"] },
    { name: "Enterprise", price: "59 €", unit: "pro Monat", detail: "Unbegrenzte Benutzer", highlights: ["Teil und Schlussrechnungen", "Terminkalender", "Wartung und Nachkalkulation zubuchbar"], featured: true },
  ] },
  "sage-intacct": { basis: "Monatliche Richtpreise netto in Euro, zzgl. MwSt.; finale Konditionen werden individuell kalkuliert. Einführung und Migration separat.", checked: "27. September 2026", plans: [
    { name: "Standard", price: "ab 1.390 €", unit: "pro Monat", detail: "Finanzplattform mit 2 Business Usern", highlights: ["Hauptbuch, Debitoren, Kreditoren", "Nationale Konsolidierung enthalten", "Weitere Business User 240 €"] },
    { name: "Typische Module", price: "ab 25 €", unit: "je Modul und Monat", detail: "Richtpreise laut Preisübersicht", highlights: ["Bankanbindung 160 €, Multiwährung 585 €", "Mehrere Gesellschaften 215 € plus 60 € je Einheit", "Globale Konsolidierung 1.005 €"] },
  ] },
  "sage-sales-management": { basis: "Preis je Nutzer und Monat bei mindestens fünf Nutzern. Zusatzmodule werden je Nutzer berechnet.", checked: "27. September 2026", plans: [
    { name: "Professional", price: "55 €", unit: "je Nutzer und Monat", detail: "Mindestens 5 Lizenzen, also ab 275 €", highlights: ["Mobiles CRM mit Offline Nutzung", "Sage Copilot mit 150 Sprachberichten", "Angebote 7 €, Kampagnen 10 € je Nutzer"] },
  ] },
};
