export type Editorial = { strengths: string[]; limitations: string[]; practicalCheck: string };

export const editorial: Record<string, Editorial> = {
  "sage-hr": {
    strengths: ["Jedes Modul hat einen öffentlichen Europreis je Person, sodass sich die Kosten vor dem ersten Vertriebsgespräch genau berechnen lassen.", "Zeiterfassung, Schichtplanung, Performance und Spesen lassen sich einzeln hinzubuchen, statt ein großes Paket zu kaufen.", "Kündigung mit einem Monat Frist und ein Test ohne Zahlungsdaten senken das Risiko beim Einstieg.", "Die mobile App deckt Anträge, Genehmigungen und Belegfotos für Beschäftigte und Führungskräfte ab."],
    limitations: ["Eine Lohnabrechnung ist nicht enthalten; dafür braucht es Sage Payroll, Sage HR & Payroll oder eine Lösung der Steuerberatung.", "Jedes Modul wird mit jeder Person multipliziert, sodass die Kosten bei wachsender Belegschaft schnell steigen.", "Recruiting kostet pauschal 175 € pro Monat und lohnt sich erst bei regelmäßigen Einstellungen."],
    practicalCheck: "Legen Sie fest, welche Module wirklich alle Beschäftigten brauchen, und rechnen Sie den Monatspreis mit Ihrer Personenzahl aus. Vergleichen Sie das Ergebnis mit Sage HR & Payroll Essentials, falls Sie auch die Lohnabrechnung auslagern möchten.",
  },
  "sage-hr-payroll": {
    strengths: ["Personalstammdaten, Arbeitszeiten, Abwesenheiten und Lohnabrechnung greifen ohne doppelte Pflege ineinander.", "Schichtplanung, Arbeitszeittabellen und Spesen sind bereits in Essentials enthalten.", "Premium bietet Korrektursimulation und automatisierte Korrekturabrechnungen, die bei vielen Beschäftigten spürbar Zeit sparen können.", "Performance und Recruiting sind in Premium ohne weiteres Modul integriert."],
    limitations: ["Essentials schließt Baulohn, öffentlichen Dienst und Versorgungsbezüge aus.", "Standard und Premium beruhen laut Hersteller auf einer Desktop Lohnabrechnung; das ist für Betriebe wichtig, die eine reine Cloudumgebung erwarten.", "Der Grundpreis deckt nur fünf Beschäftigte ab, und die Aufpreise je Person sind als Mindestwerte angegeben.", "Standard und Premium lassen sich nicht direkt testen, sondern nur über eine Webdemo kennenlernen."],
    practicalCheck: "Lassen Sie sich einen Monatslauf mit einem echten Sonderfall und einer Korrektur vorführen. Fragen Sie schriftlich nach, wo die Lohnabrechnung in Standard oder Premium technisch läuft und wie die Preise je Person bei Ihrer Belegschaft genau aussehen.",
  },
  "sage-50-handwerk": {
    strengths: ["Die Software bildet typische Handwerksabläufe vom Aufmaß über Angebot und Auftrag bis zur Schlussrechnung ab.", "Schnittstellen wie GAEB, IDS, OCI und DATANORM verbinden Ausschreibungen und Großhandel ohne Abtippen.", "Elektronische Rechnungen in ZUGFeRD und XRechnung sind bereits in Essential enthalten.", "Enterprise erlaubt unbegrenzt viele Benutzer zu einem festen Monatspreis."],
    limitations: ["Essential umfasst nur einen Benutzer und laut Paketübersicht keine Teil und Schlussrechnungen.", "Schnittstellen, Finanzbuchhaltung, Dokumentenmanagement und das Cloud Paket kosten extra; öffentliche Preise dafür fehlen.", "Die Software wird lokal installiert und über Fachhändler vertrieben; mobiles Arbeiten erfordert das zusätzliche Cloud Paket.", "Die Mindestlaufzeit beträgt im Standardangebot zwölf Monate."],
    practicalCheck: "Spielen Sie einen echten Auftrag mit Aufmaß, Abschlag und Schlussrechnung durch und lassen Sie sich alle benötigten Schnittstellen im Angebot einzeln beziffern. Rechnen Sie Enterprise als Vergleichspreis, sobald Sie Teilrechnungen oder mehr als einen Arbeitsplatz brauchen.",
  },
  "sage-intacct": {
    strengths: ["Sage veröffentlicht Richtpreise für nahezu alle Module, was eine frühe Budgetplanung ermöglicht.", "Nationale Konsolidierung, elektronische Rechnungen, Dashboards und der KI Assistent sind bereits im Standard enthalten.", "Umfangreiche Nachweise wie GoBD, ISO 27001, SOC 1 und SOC 2 sprechen für den Einsatz in prüfungsnahen Finanzteams.", "Mehrere Gesellschaften, Multiwährung und globale Konsolidierung lassen sich schrittweise ergänzen."],
    limitations: ["Der Einstiegspreis enthält nur zwei Business User; jeder weitere Vollnutzer kostet 240 € pro Monat.", "Bankanbindung, Multiwährung und Anlagenbuchhaltung sind nicht im Standard enthalten.", "Einführung, Migration und Schulung werden separat berechnet und sind nicht öffentlich beziffert.", "Einen Preisrechner gibt es nicht; das Angebot entsteht erst nach einem Beratungsgespräch."],
    practicalCheck: "Erstellen Sie vor dem Gespräch eine Liste aller Gesellschaften, Nutzerrollen, Währungen und Bankkonten. Lassen Sie Lizenzen, Module und Einführung getrennt ausweisen und vergleichen Sie die Summe über drei Jahre.",
  },
  "sage-sales-management": {
    strengths: ["Die mobile App ist konsequent für den Außendienst gebaut, mit Offline Nutzung, Routenplanung und geolokalisierten Chancen.", "Sprachberichte und Visitenkartenscanner verringern die Nacherfassung nach Kundenbesuchen.", "Microsoft 365, Google Workspace, Zoom und weitere Werkzeuge lassen sich direkt anbinden.", "Grenzen wie 100.000 Datensätze je Objekt und 250 API Anfragen pro Minute sind offen dokumentiert."],
    limitations: ["Mindestens fünf Lizenzen sind vorgeschrieben, der Einstieg liegt damit bei 275 € pro Monat.", "Angebote und Bestellungen aus dem CRM kosten 7 € je Nutzer und Monat zusätzlich.", "Eine native Anbindung an deutsche ERP Systeme wie Sage 100 wird auf der Seite nicht konkret beschrieben.", "Die Preisangabe enthält keinen Hinweis, ob es sich um einen Netto oder Bruttopreis handelt."],
    practicalCheck: "Lassen Sie einen Kundenbesuch vom Sprachbericht bis zum Angebot vorführen und prüfen Sie die Übergabe an Ihr ERP mit echten Artikeldaten. Rechnen Sie den Teampreis mit allen benötigten Zusatzmodulen über zwölf Monate.",
  },
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
    strengths: ["Auftragsbearbeitung, doppelte Buchführung und Lohnabrechnung laufen in einer Cloudlösung und unter einem Vertrag.", "Die Kontingente sind großzügig: Essentials enthält 10 Nutzer und 500 Rechnungen pro Monat.", "Umsatzsteuervoranmeldung über ELSTER, GuV und Bilanz in Echtzeit sowie der Export im DATEV Format sind in Essentials enthalten.", "Monatliche Kündigung und ein Test über 30 Tage machen den Einstieg risikoarm."],
    limitations: ["Starter enthält keine eigene Buchführung; wer selbst bucht, muss Essentials vergleichen.", "Der Versand elektronischer Rechnungen ist laut Hersteller erst angekündigt, nur der Empfang ist bereits möglich.", "Jahressteuererklärung und E-Bilanz sind nicht enthalten; für die E-Bilanz verweist Sage auf eine Drittlösung.", "Weitere Personen in der Lohnabrechnung, zusätzliche Rechnungspakete und weitere Unternehmen kosten extra; eine Lagerverwaltung fehlt."],
    practicalCheck: "Zählen Sie Rechnungen, Nutzer und Beschäftigte eines typischen Monats und rechnen Sie Essentials mit allen Aufpreisen durch. Fragen Sie nach dem verbindlichen Termin für den Versand elektronischer Rechnungen, falls Ihre Pflicht dazu 2027 oder 2028 beginnt.",
  },
  "billomat": {
    strengths: ["Dokumentenarbeit von Angebot und Rechnung bis zu Belegen und Mahnungen ist der erkennbare Kern.", "Für wachsende Teams gibt es Pakete mit mehr Nutzern und zusätzlichen Verbindungen."],
    limitations: ["Professional umfasst nur einen Nutzer und 30 Rechnungen pro Monat.", "Banking Verknüpfung und DATEVconnect beginnen laut Tariftabelle erst ab Business; API und weitere Personen können zusätzlich kosten."],
    practicalCheck: "Zählen Sie Rechnungen, aktive Nutzer und benötigte Verbindungen für einen typischen Monat. Vergleichen Sie dann den dazu passenden Tarif statt ausschließlich Professional.",
  },
  "sage-payroll": {
    strengths: ["Fünf Beschäftigte sind im Grundpreis enthalten, sodass sehr kleine Betriebe ab 20 € pro Monat abrechnen können.", "Gesetzliche Meldungen einschließlich Sofortmeldungen für Branchen wie die Gastronomie sind in allen Paketen enthalten.", "Beschäftigte sehen Abrechnungen und Steuerdokumente im geschützten Zugang oder in der App, ohne unverschlüsselten E-Mail Versand.", "Laut Hersteller keine langfristige Bindung; Upgrade und Kündigung sind jederzeit möglich."],
    limitations: ["Baulohn, Betriebsrenten und der öffentliche Dienst sind ausdrücklich ausgeschlossen.", "Das System ist auf höchstens 150 Beschäftigte ausgelegt.", "Arbeitszeiten, Genehmigungen und Onboarding gibt es erst ab Standard, Schichtplanung erst in Premium.", "Auf der Website stehen noch ältere Preise je Beschäftigtem; lassen Sie sich die gültige Preisliste bestätigen."],
    practicalCheck: "Gleichen Sie Ihre Beschäftigungsarten mit der Ausschlussliste ab und lassen Sie einen normalen Lohnlauf sowie eine Korrektur vorführen. Rechnen Sie Ihre Personenzahl mit dem Aufpreis des gewählten Pakets durch.",
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
    strengths: ["Warenwirtschaft, Rechnungswesen und Produktion haben öffentliche Modulpreise je Nutzer, was für ein Mittelstands ERP selten ist.", "Unbegrenzte Mandanten sowie mehrere Sprachen und Währungen passen zu Unternehmensgruppen und internationalem Handel.", "Über 200 Partneranwendungen und zertifizierte Fachhändler decken viele Branchenanforderungen ab.", "Betrieb lokal oder in der Cloud mit deutschen Rechenzentren ist möglich."],
    limitations: ["Die Modulpreise enthalten weder Einführung noch Zusatzlösungen wie CRM, Dokumentenmanagement, Webshop oder Lohn.", "Die Mindestlaufzeit beträgt im Standardangebot zwölf Monate bei jährlicher Rechnung.", "Für die Cloudvariante nennt Sage keinen öffentlichen Preis.", "Ohne Fachhändler und saubere Prozessbeschreibung lässt sich das System kaum sinnvoll einführen."],
    practicalCheck: "Beschreiben Sie Ihre fünf wichtigsten Geschäftsprozesse schriftlich und lassen Sie sie von einem Fachhändler im System vorführen. Fordern Sie Lizenz, Einführung, Schulung, Anpassungen und Wartung als Gesamtkosten über drei Jahre an.",
  },
  "microsoft-dynamics-365-business-central": {
    strengths: ["Essentials verbindet Finanzen, Einkauf, Lager und Projekte für komplexere Abläufe.", "Premium ergänzt Dienstverwaltung und Fertigung, wenn diese Prozesse tatsächlich gebraucht werden."],
    limitations: ["Listenpreise je Nutzer bilden Partnerimplementierung, Apps und Anpassungen nicht ab.", "Unterschiedliche Lizenztypen sowie regionale Preisabweichungen erfordern eine konkrete Angebotsprüfung."],
    practicalCheck: "Trennen Sie Vollnutzer, Team Members und benötigte Apps. Lassen Sie einen Partner einen realen Geschäftsprozess vorführen und die einmaligen sowie laufenden Kosten beziffern.",
  },
};
