export type Editorial = { strengths: string[]; limitations: string[]; practicalCheck: string };

export const editorial: Record<string, Editorial> = {
  "fastbill": {
    strengths: ["Angebote, Rechnungen, Belege und die Übergabe an die Steuerberatung bilden einen klaren Arbeitsablauf für Dienstleister.", "Kleine Betriebe können mit einem schlanken Tarif beginnen und bei mehr Automatisierung aufsteigen."],
    limitations: ["Wiederkehrende Rechnungen sind erst ab Pro enthalten; automatische Belegverarbeitung liegt vor allem in Premium.", "Zusätzliche Module und mehrere Personen können den vermeintlich günstigen Einstieg deutlich verteuern."],
    practicalCheck: "Lassen Sie sich den Preis für Ihre tatsächliche Zahl an Rechnungen, Nutzern und Zusatzfunktionen zeigen. Klären Sie mit Ihrer Steuerberatung, welche Buchhaltungsaufgaben FastBill und welche die Kanzlei übernimmt.",
  },
  "lexware-office": {
    strengths: ["Die Produktstufen folgen einem nachvollziehbaren Weg von Belegen über Rechnungen bis zur laufenden Buchhaltung.", "Für Unternehmen mit eigenen Steueraufgaben sind die höheren Tarife mit EÜR und Umsatzsteuerfunktionen relevant."],
    limitations: ["Der Einstiegstarif S enthält keine Ausgangsrechnungen; dafür ist mindestens M vorgesehen.", "EÜR und Umsatzsteuerfunktionen liegen erst ab L. Eine benötigte Lohnlösung ist gesondert zu betrachten."],
    practicalCheck: "Schreiben Sie Ihre Pflichtaufgaben auf und markieren Sie den ersten Tarif, der sie vollständig abdeckt. Vergleichen Sie genau diesen Betrag mit anderen Lösungen, nicht den beworbenen Einstiegspreis.",
  },
  "sevdesk": {
    strengths: ["Rechnungen, Belege und Bankabgleich lassen sich in einem webbasierten Ablauf verbinden.", "Die Trennung zwischen Rechnung und Buchhaltung macht den gewünschten Funktionsumfang sichtbar."],
    limitations: ["Erweiterte Buchhaltungsfunktionen hängen vom gebuchten Paket ab.", "Aktionspreise und die gewählte Zahlungsweise können die dargestellte Monatsgebühr verändern."],
    practicalCheck: "Prüfen Sie die aktuelle Tariftabelle mit zwei oder drei echten Geschäftsvorfällen. Fragen Sie nach dem regulären Preis nach jeder Aktion sowie nach Teamfunktionen und der Übergabe an die Kanzlei.",
  },
  "sage-active": {
    strengths: ["Der Einstieg über Angebote und Rechnungen kann mit weiterführenden Buchhaltungsaufgaben verbunden werden.", "Essentials nennt unter anderem EÜR, Anlagenbuchhaltung und Auswertungen bis zu GuV und Bilanz."],
    limitations: ["Starter ist kein belastbarer Preisanker, wenn doppelte Buchführung oder Personalaufgaben gebraucht werden.", "Kontingente für Nutzer und Rechnungen sowie weitere Leistungen können Mehrkosten auslösen."],
    practicalCheck: "Fordern Sie eine Aufstellung für alle benötigten Buchhaltungsfunktionen, Nutzer und Rechnungen an. Lassen Sie sich erklären, ob Lohn und HR im konkreten Angebot enthalten sind.",
  },
  "billomat": {
    strengths: ["Dokumentenarbeit von Angebot und Rechnung bis zu Belegen und Mahnungen ist der erkennbare Kern.", "Für wachsende Teams gibt es Pakete mit mehr Nutzern und zusätzlichen Verbindungen."],
    limitations: ["Professional umfasst nur einen Nutzer und 30 Rechnungen pro Monat.", "Banking Verknüpfung und DATEVconnect beginnen laut Tariftabelle erst ab Business; API und weitere Personen können zusätzlich kosten."],
    practicalCheck: "Zählen Sie Rechnungen, aktive Nutzer und benötigte Verbindungen für einen typischen Monat. Vergleichen Sie dann den dazu passenden Tarif statt ausschließlich Professional.",
  },
  "sage-payroll": {
    strengths: ["Die Gebühr je Mitarbeiter macht die Basiskosten bei einem festen Team grundsätzlich nachvollziehbar.", "Plus verbindet die Lohnaufgabe mit ausgewählten Personalprozessen wie Zeit und Abwesenheiten."],
    limitations: ["Korrekturen und weitere Abrechnungen können gesondert berechnet werden.", "Für einen breiteren HR Bedarf ist Plus gegen eigenständige Personalsysteme abzuwägen."],
    practicalCheck: "Rechnen Sie mit Ihrer tatsächlichen Mitarbeiterzahl und einem normalen Jahr inklusive Korrekturen. Klären Sie schriftlich, welche Sonderfälle und HR Funktionen Ihr Tarif enthält.",
  },
  "lexware-office-lohn-gehalt": {
    strengths: ["Die Verbindung zur Lexware Office Buchhaltung vermeidet eine zusätzliche manuelle Übergabe der Personalkosten.", "Geführte Abrechnung und Meldungen sprechen kleine Arbeitgeber mit üblichen Lohnfällen an."],
    limitations: ["Der Hersteller schließt bestimmte Beschäftigungsarten und Entgeltfälle aus, darunter Baulohn und öffentlichen Dienst.", "Die konkrete Preisstaffel nach Mitarbeitenden muss vor Abschluss geprüft werden."],
    practicalCheck: "Nehmen Sie Ihre Beschäftigungsarten einzeln mit der aktuellen Ausschlussliste des Herstellers durch. Wenn ein Sonderfall nicht abgedeckt ist, sollte die integrierte Buchhaltung allein die Wahl nicht entscheiden.",
  },
  "datev-lohn-und-gehalt": {
    strengths: ["Baulohn und weitere Sonderfälle sprechen für die fachliche Tiefe der Lösung.", "Die Arbeit im DATEV Umfeld kann zu bestehenden Abläufen mit einer Kanzlei passen."],
    limitations: ["Die Verarbeitung in einer lokalen PC Umgebung erfordert andere technische Planung als eine reine Cloud Anwendung.", "Produktseite und Preisliste nennen unterschiedliche Lizenzbezüge; zusätzliche Dienste gehören zur Gesamtkostenrechnung."],
    practicalCheck: "Lassen Sie DATEV oder Ihre Kanzlei die benötigte Lizenz, Rechenzentrumsleistungen und Arbeitsplätze konkret auflisten. Vergleichen Sie danach den vollständigen Jahresaufwand.",
  },
  "agenda-personalwesen": {
    strengths: ["Lohn, Meldewesen und optionale Personalprozesse können in einem fachlich ausgerichteten System zusammenkommen.", "Baulohn ist als optionaler Bereich beschrieben und damit für spezielle Betriebe prüfenswert."],
    limitations: ["Die Grundgebühr allein bildet den Preis je Mitarbeitendem und weitere Bausteine nicht ab.", "Die genannte Mindestlaufzeit von zwölf Monaten erhöht die Bedeutung einer sorgfältigen Einführung."],
    practicalCheck: "Fordern Sie eine Beispielrechnung mit Ihrer Zahl an Mitarbeitenden, den benötigten Arbeitsplätzen und dem gewünschten Baulohn Umfang an. Prüfen Sie dabei die Vertragslaufzeit.",
  },
  "personio-payroll": {
    strengths: ["Stammdaten und Lohnprozess können innerhalb der Personio Umgebung zusammengeführt werden.", "Der Hersteller beschreibt sowohl eigene Abrechnung als auch Zusammenarbeit mit der Steuerberatung."],
    limitations: ["Für die Payroll Lösung wird kein fester öffentlicher Gesamtpreis genannt.", "Wer nur wenige Gehälter abrechnet, muss den Aufwand für Plattform, Einführung und Konfiguration besonders genau prüfen."],
    practicalCheck: "Lassen Sie im Angebot Payroll, HR Grundsystem, zusätzliche Apps und Einführung getrennt ausweisen. Prüfen Sie den konkreten Ablauf mit Ihrer Steuerberatung vor einer Zusage.",
  },
  "personio": {
    strengths: ["Personalstammdaten, Dokumente, Zeit und Workflows können Medienbrüche im HR Alltag verringern.", "Die Plattform bietet einen Ausbaupfad für Unternehmen mit mehreren Personalprozessen."],
    limitations: ["API, Rechte und weitere Funktionen können von Core Pro oder zusätzlichen Apps abhängen.", "Einführung und Payroll sollten nicht stillschweigend als Teil des Grundpreises angenommen werden."],
    practicalCheck: "Erstellen Sie eine Liste der fünf wichtigsten Abläufe und lassen Sie jeden einem konkreten Paket zuordnen. Fragen Sie nach Einführung, Payroll und Kosten pro zusätzlicher App.",
  },
  "factorial": {
    strengths: ["Das modulare Modell erlaubt den Einstieg mit Personalstammdaten und späteren Ausbau.", "Vorlagen, Signatur und Benachrichtigungen adressieren häufige Verwaltungsaufgaben."],
    limitations: ["Zeit, Talent und Finanzen sind nicht automatisch im genannten Einstieg enthalten.", "Die Summe hängt von gewählten Modulen und abrechenbaren Nutzern ab."],
    practicalCheck: "Lassen Sie sich einen Vorschlag mit genau den Modulen zeigen, die Sie im ersten Jahr einsetzen. Prüfen Sie, wie Beschäftigte, Administratoren und zusätzliche Nutzer berechnet werden.",
  },
  "kenjo": {
    strengths: ["Zeit, Urlaub, Dokumente und Schichtplanung passen zu Betrieben mit operativen Teams.", "Höhere Pakete erweitern Workflows, Berechtigungen und Integrationen."],
    limitations: ["Recruiting wird als Zusatzmodul genannt; API und weitergehende Verbindungen liegen nicht in jedem Paket.", "Die dynamische Preisseite lieferte keinen belastbaren deutschen Listenpreis; Onboarding kann zusätzlich kosten."],
    practicalCheck: "Bitten Sie um ein Angebot für Ihre Schichtplanung, Nutzerzahl, gewünschte Integrationen und mögliche Recruiting Nutzung. Lassen Sie Einmalkosten getrennt ausweisen.",
  },
  "hr-works": {
    strengths: ["Personalverwaltung, Zeit und Reisekosten in einer Umgebung sind für reisende Teams ein klarer Prüfpunkt.", "Die Lösung adressiert mehrere typische Abläufe des deutschen Mittelstands."],
    limitations: ["Vorbereitende Lohnbuchhaltung ersetzt nicht zwingend einen vollständigen Lohnlauf.", "Die Gebühr aus Grundpreis und Lizenzzahl ist ohne konkretes Angebot nicht seriös zu beziffern."],
    practicalCheck: "Zeichnen Sie den Weg von Zeiterfassung über Reisekosten bis zur Lohnabrechnung auf. Lassen Sie sich jede Übergabe und die Gesamtkosten für alle aktiven Personen erklären.",
  },
  "hibob-bob": {
    strengths: ["Analysen und Workflows können mehrere Teams und internationale HR Abläufe verbinden.", "Die Plattform bietet einen breiten Kern für Daten, Dokumente, Abwesenheiten und Integrationen."],
    limitations: ["Module und Preis werden individuell vereinbart; ein veröffentlichter deutscher Listenbetrag liegt nicht vor.", "Eine Payroll Integration ist kein Nachweis für eine native, vollständig abgedeckte deutsche Lohnabrechnung."],
    practicalCheck: "Testen Sie die für Sie wichtigen Länder, Rollen und Berichte in einer Demo. Fragen Sie gezielt, wie ein deutscher Lohnlauf tatsächlich ausgeführt wird und welche Partner beteiligt sind.",
  },
  "pipedrive": {
    strengths: ["Die visuelle Pipeline gibt kleinen Vertriebsteams einen klaren Blick auf Deals und nächste Schritte.", "Leads, Kontakte, Kalender und Berichte unterstützen einen fokussierten Verkaufsprozess."],
    limitations: ["Automatisierung und zusätzliche Bereiche können höhere Pläne oder Addons erfordern.", "Marketing und Service in einer gemeinsamen Suite sind nicht der Schwerpunkt des Produkts."],
    practicalCheck: "Bauen Sie Ihre echte Pipeline mit mehreren Nutzern nach. Prüfen Sie danach, ob Automatisierung, E Mail Anbindung und Berichte im passenden Plan enthalten sind.",
  },
  "hubspot-sales-hub": {
    strengths: ["Der kostenlose Einstieg senkt die Hürde, Kontakte und Deals strukturiert zu verwalten.", "Vertrieb kann später mit weiteren Bereichen des HubSpot Ökosystems verbunden werden."],
    limitations: ["Nützliche Automatisierung und erweiterte Steuerung liegen in höheren Stufen.", "Lizenzen, zusätzliche Produkte und mögliche Einführungskosten können deutlich über dem Einstiegswert liegen."],
    practicalCheck: "Definieren Sie den Workflow, den Ihr Team in zwölf Monaten benötigt. Lassen Sie alle dazu nötigen Lizenzen, Produkte und Einrichtungsleistungen in ein Angebot aufnehmen.",
  },
  "centralstationcrm": {
    strengths: ["Der Grundfunktionsumfang bleibt über die Pakete vergleichbar; die Grenzen liegen vor allem bei Nutzern und Kontakten.", "Ein kleines Team kann mit einer kostenlosen Variante beginnen und den gemeinsamen Datenbestand erproben."],
    limitations: ["Wachsende Kontaktzahlen und Dateibestände können ein größeres Paket nötig machen.", "Bei komplexen Vertriebsprozessen müssen Automatisierung und Integrationen gezielt geprüft werden."],
    practicalCheck: "Zählen Sie aktive Nutzer und Kontakte einschließlich eines Wachstumsjahres. Testen Sie mit einem typischen Verkaufsvorgang, ob Ihnen Funktionen für Nachverfolgung und Berichte genügen.",
  },
  "zoho-crm": {
    strengths: ["Editionen und Konfigurationen bieten Spielraum für strukturierte Vertriebsprozesse.", "Eine kostenlose Edition für kleine Teams kann den Einstieg erleichtern."],
    limitations: ["Benötigte Workflows, Rollen und Analysen liegen je nach Edition unterschiedlich.", "Die dynamische deutsche Preisseite zeigte während der Recherche keine verlässlich verwendbare Euro Angabe."],
    practicalCheck: "Ordnen Sie Ihre benötigten Rollen und Automatisierungen der aktuellen Editionstabelle zu. Bitten Sie Zoho um einen deutschen Preis in Euro für genau diese Ausstattung.",
  },
  "superoffice-crm": {
    strengths: ["Vertrieb, Service und Kundenkontakte können auf einem gemeinsamen Datenbestand arbeiten.", "Die Pakete benennen einen Ausbau von Kontakten über Pipeline bis zu stärkeren Prozessen."],
    limitations: ["Der Preis fällt je Nutzer an und setzt laut Preisseite jährliche Zahlung voraus.", "Einführung und Schulung können zusätzlich nötig sein und sind für ein Teamprojekt wesentlich."],
    practicalCheck: "Lassen Sie sich die Zahl der benötigten Nutzer je Abteilung und den Einführungsplan bestätigen. Vergleichen Sie Jahreskosten statt nur den Monatswert pro Person.",
  },
  "weclapp": {
    strengths: ["Die Pakete unterscheiden Dienstleistung und Handel anhand ihrer tatsächlichen Prozesse.", "Kontakte, Angebote und Rechnungen können mit Projekten oder Warenwirtschaft verbunden werden."],
    limitations: ["Lager und Shopprozesse liegen nicht im günstigen Starter als vollwertiger Handelstarif.", "Die Gebühr je Nutzer wächst bei mehreren Mitarbeitenden; Zahlungsweise verändert einzelne Tarife."],
    practicalCheck: "Wählen Sie zunächst Ihr Arbeitsmodell und die erforderlichen Module. Rechnen Sie dann alle Nutzer und die tatsächliche Zahlungsweise für das ganze Jahr zusammen.",
  },
  "xentral": {
    strengths: ["Aufträge, Lager, Versand und Shopverbindungen bilden einen zusammenhängenden Handelsprozess.", "Unbegrenzte Nutzer in einem Paket können bei wachsendem Team ein Vorteil sein."],
    limitations: ["Launch hat eine Umsatzgrenze und einen zusätzlichen Betrag je Auftrag.", "Volumen, Module und weitere Leistungen beeinflussen die Kosten stärker als die Nutzerzahl allein."],
    practicalCheck: "Nehmen Sie Ihr reales Monatsvolumen an Aufträgen und Ihren Jahresumsatz als Ausgangspunkt. Prüfen Sie, wann ein Tarifwechsel nötig wird und welche Shops oder Marktplätze enthalten sind.",
  },
  "odoo": {
    strengths: ["Die modulare Plattform kann Verkauf, Lager, CRM, Buchhaltung und weitere Bereiche verbinden.", "Für Unternehmen mit besonderen Abläufen gibt es zusätzliche Anpassungsmöglichkeiten."],
    limitations: ["Custom, Hosting, Implementierung und Partnerarbeit können deutlich über dem angezeigten Nutzerpreis liegen.", "Deutsche Buchhaltungsabläufe sollten für den konkreten Anwendungsfall geprüft werden; die DE Preisseite zeigte US Dollar."],
    practicalCheck: "Beschreiben Sie einen durchgängigen Vorgang vom Angebot bis zur Buchung und lassen Sie ihn demonstrieren. Fordern Sie getrennte Kosten für Lizenzen, Hosting, Anpassung und Betreuung an.",
  },
  "sage-100": {
    strengths: ["Warenwirtschaft, Rechnungswesen und Produktion lassen sich entsprechend dem Unternehmensprozess kombinieren.", "Die modulare Struktur kann für Betriebe mit klar beschriebenen Anforderungen passen."],
    limitations: ["Ein öffentlicher Einzelpreis für ein Modul ist kein Gesamtpreis für die vollständige ERP Lösung.", "Einführung, Erweiterungen und Partnerleistungen gehören in die Kalkulation."],
    practicalCheck: "Legen Sie benötigte Module und Sonderprozesse vor einer Demo fest. Lassen Sie sich Lizenz, Implementierung, Schulung und laufenden Betrieb als vollständiges Angebot darstellen.",
  },
  "microsoft-dynamics-365-business-central": {
    strengths: ["Essentials verbindet Finanzen, Einkauf, Lager und Projekte für komplexere Abläufe.", "Premium ergänzt Dienstverwaltung und Fertigung, wenn diese Prozesse tatsächlich gebraucht werden."],
    limitations: ["Listenpreise je Nutzer bilden Partnerimplementierung, Apps und Anpassungen nicht ab.", "Unterschiedliche Lizenztypen sowie regionale Preisabweichungen erfordern eine konkrete Angebotsprüfung."],
    practicalCheck: "Trennen Sie Vollnutzer, Team Members und benötigte Apps. Lassen Sie einen Partner einen realen Geschäftsprozess vorführen und die einmaligen sowie laufenden Kosten beziffern.",
  },
};
