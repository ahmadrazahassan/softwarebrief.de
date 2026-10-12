import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Preise sind Listenpreise der Hersteller zum Stand 25. und 27. September 2026, netto und ohne Aktionen. Rechtliche und steuerliche Fragen klären Sie mit Ihrer Steuerberatung.",
  keyTakeaways: [
    "Die Reihenfolge zählt mehr als die Menge: Zuerst Rechnungen und Buchhaltung, dann Lohn bei der ersten Anstellung, danach Vertrieb, Personalverwaltung und erst zuletzt ein ERP System.",
    "Viele Programme starten günstig und werden mit Nutzern, Rechnungen, Aufträgen oder Zusatzmodulen deutlich teurer. Rechnen Sie immer mit Ihrer geplanten Teamgröße in zwölf Monaten.",
    "Kostenlose Einstiege wie bei CentralStationCRM (bis 3 Nutzer, 200 Kontakte) oder HubSpot helfen, Prozesse zu klären, bevor Sie zahlen.",
    "Achten Sie auf Kündigungsfristen und Datenexport. Monatlich kündbare Tarife sind für Gründer wertvoller als ein paar Euro Rabatt bei langer Laufzeit.",
    "Ein Startup mit fünf Personen kommt mit Listenpreisen im Bereich von rund 85 Euro netto im Monat für Buchhaltung, Lohn, Vertrieb und Personalverwaltung aus. Die Beispielrechnung steht weiter unten.",
  ],
  sections: [
    {
      heading: "Die Reihenfolge entscheidet, nicht die Menge",
      blocks: [
        p("Gründer neigen zu zwei Fehlern. Der erste: Sie kaufen früh eine umfangreiche Plattform, die sie erst in zwei Jahren ausnutzen. Der zweite: Sie schieben Entscheidungen auf, die später teuer werden, etwa die Wahl der Buchhaltung oder den Umgang mit Belegen. Dieser Ratgeber hilft bei beidem, indem er Programme nach dem **Auslöser** ordnet, der sie nötig macht."),
        table("Welche Software wann nötig wird", ["Phase", "Auslöser", "Software", "Dringlichkeit"], [
          ["Vor der ersten Rechnung", "Sie stellen Rechnungen und sammeln Belege", "Rechnungen und Buchhaltung", "Sofort"],
          ["Erste Anstellung", "Sie zahlen Gehalt und müssen Meldungen abgeben", "Lohnabrechnung, Zeiterfassung, Personalakte", "Vor dem ersten Arbeitstag"],
          ["Regelmäßiger Vertrieb", "Mehr als eine Person pflegt Kontakte und Angebote", "CRM", "Wenn Tabellen Reibung erzeugen"],
          ["Mehrere Beschäftigte", "Urlaub, Abwesenheit, Verträge und Dokumente häufen sich", "Personalsoftware", "Ab etwa zehn Personen"],
          ["Waren und Aufträge", "Sie lagern, versenden oder rechnen Projekte ab", "ERP oder Warenwirtschaft", "Wenn Prozesse Fehler erzeugen"],
        ], "Die Zeilen sind eine Orientierung. Ihr Geschäftsmodell kann die Reihenfolge ändern, etwa bei einem Onlinehandel mit Lager ab Tag eins."),
        tipp("Die Frage hinter jeder Softwareentscheidung", "Welche Aufgabe kostet uns heute am meisten Zeit oder birgt das größte Risiko? Beginnen Sie dort, nicht bei der Software, die am meisten verspricht."),
      ],
    },
    {
      heading: "Phase eins: Rechnungen, Belege und Buchhaltung",
      blocks: [
        p("Die Buchhaltung ist die Software, die Sie am wenigsten leicht wechseln. Belege, Buchungen und Auswertungen hängen daran, und Ihre Steuerberatung arbeitet mit dem Ergebnis. Entscheidend ist zuerst Ihre **Rechtsform**: Kapitalgesellschaften wie GmbH und UG sind buchführungspflichtig und führen doppelte Buchführung. Selbstständige und viele Einzelunternehmer ermitteln den Gewinn mit der Einnahmenüberschussrechnung. Beide Wege verlangen unterschiedliche Tarife."),
        p("Der Ratgeber [Buchhaltungssoftware für Startups und Gründer](/ratgeber/buchhaltungssoftware-fuer-startups-gruender) erklärt den Unterschied ausführlich. Bei kleinen Umsätzen kann zusätzlich die [Kleinunternehmerregelung](/ratgeber/kleinunternehmerregelung-grenzen-rechnung-software) in Betracht kommen, die seit 2025 neue Grenzen kennt."),
        h3("Was in der Praxis Geld spart"),
        ul(
          "**Belege sofort erfassen:** Foto per App, automatische Zuordnung zur Bankbuchung. So entstehen am Monatsende keine Stapel.",
          "**Bankanbindung:** Der Abgleich von Zahlungen und Rechnungen ist der größte Zeitgewinn im Alltag.",
          "**Zugang für die Steuerberatung:** Klären Sie, ob Ihre Kanzlei direkt im System arbeitet oder Exporte bekommt, etwa im Format von DATEV.",
          "**E-Rechnung:** Empfang ist seit 2025 Pflicht, die Ausstellung folgt ab 2027 und 2028. Prüfen Sie dies schon bei der Auswahl. Details im [Ratgeber zur E-Rechnung](/ratgeber/e-rechnung-pflicht-fristen-software).",
        ),
        p("Als Orientierung für den Einstieg nennen die Hersteller diese Preise: [Lexware Office](/software/buchhaltung/lexware-office) kostet je nach Stufe 7,90 Euro (S, nur Belege), 12,90 Euro (M, mit Ausgangsrechnungen), 21,90 Euro (L, mit Einnahmenüberschussrechnung und Umsatzsteuervoranmeldung) oder 32,90 Euro (XL) im Monat. [FastBill](/software/buchhaltung/fastbill) beginnt mit Solo bei 10 Euro im Monat. [Sage Active](/software/buchhaltung/sage-active) bietet Starter für 25 Euro und Essentials mit doppelter Buchführung und Lohn für zwei Personen für 49 Euro, jeweils monatlich kündbar."),
      ],
    },
    {
      heading: "Phase zwei: Die erste Anstellung und die Lohnabrechnung",
      blocks: [
        p("Mit dem ersten Beschäftigten beginnt ein Pflichtprogramm: Abrechnung, Meldungen an Finanzamt und Sozialversicherung, Zahlung der Beiträge und Ausstellung der Abrechnung. In bestimmten Branchen, etwa Bau und Gastronomie, kommt die Sofortmeldung hinzu. Fehler kosten Geld, deshalb ist die Frage nicht, ob Sie Hilfe brauchen, sondern in welcher Form."),
        table("Drei Wege für die Lohnabrechnung", ["Weg", "Das übernehmen Sie", "Typischer Fit"], [
          ["Steuerberatung oder Lohnbüro", "Stammdaten und Änderungen melden", "Wenige Beschäftigte, wenig Zeit, Sonderfälle"],
          ["Eigene Cloud Lohnsoftware", "Daten pflegen, Lauf prüfen und freigeben", "Üblicher Lohnfall, Interesse an eigener Kontrolle"],
          ["Lohn in einer Personalplattform", "Stammdaten und Abrechnung in einem System", "Wachsende Teams mit vielen Personalprozessen"],
        ]),
        p("Bei Preisen gilt die Faustregel: Der Grundpreis täuscht, die Kosten je Person entscheiden. [Sage Payroll](/software/lohnabrechnung/sage-payroll) nennt für Payroll Essentials 20 Euro im Monat inklusive fünf Beschäftigter, jede weitere Person kostet 3 Euro. [Lexware Office Lohn und Gehalt](/software/lohnabrechnung/lexware-office-lohn-gehalt) beginnt ab 12,90 Euro im Monat, die Staffel nach Mitarbeitenden prüfen Sie im Bestellvorgang. Beide schließen bestimmte Fälle aus, etwa Baulohn und öffentlichen Dienst. Die ausführliche Entscheidungshilfe finden Sie im Ratgeber [Lohnabrechnung auslagern oder selbst machen](/ratgeber/lohnabrechnung-auslagern-oder-selbst-machen)."),
        achtung("Vor dem ersten Arbeitstag klären", "Wer macht die Anmeldung zur Sozialversicherung, wer meldet bei Beginn, wer legt Zugangsdaten für Beschäftigte an? Legen Sie Zuständigkeiten fest, bevor der erste Vertrag unterschrieben ist."),
      ],
    },
    {
      heading: "Phase drei: Arbeitszeit und Personalakte",
      blocks: [
        p("Sobald jemand für Sie arbeitet, stellt sich die Frage nach der Arbeitszeit. Das Bundesarbeitsgericht hat 2022 entschieden, dass Arbeitgeber Beginn, Ende und Dauer der Arbeitszeit erfassen müssen. Welche Form dafür nötig ist und wie ein künftiges Gesetz sie regelt, erklärt der Ratgeber [Arbeitszeiterfassung Pflicht](/ratgeber/arbeitszeiterfassung-pflicht-software-auswahl). Für den Anfang genügt oft ein einfaches System, das Zeiten erfasst und Abwesenheiten sammelt."),
        p("Personalakten gehören zu den sensibelsten Daten im Unternehmen. Wer sie digital führt, sollte Zugriffsrechte, Löschfristen und den Vertrag mit dem Anbieter klären. Der Ratgeber [Digitale Personalakte und DSGVO](/ratgeber/digitale-personalakte-dsgvo-personalsoftware) zeigt die wichtigsten Punkte."),
        p("Preislich sind baukastenartige Angebote für kleine Teams besonders gut vergleichbar. [Sage HR](/software/hr/sage-hr) nennt für die Basis 4,50 Euro je Beschäftigtem und Monat, Zeit oder Schichtplanung kosten je 2,50 Euro dazu. Eine Lohnabrechnung ist dort nicht enthalten. Plattformen wie [Personio](/software/hr/personio), [Factorial](/software/hr/factorial) oder [Kenjo](/software/hr/kenjo) richten sich eher an Teams, die mehrere Personalprozesse in einem System bündeln wollen. Bei Personio und Kenjo nennen die Hersteller keinen öffentlichen Euro Listenpreis, hier ist ein Angebot nötig."),
      ],
    },
    {
      heading: "Phase vier: Vertrieb und Kundendaten",
      blocks: [
        p("Ein CRM lohnt sich, wenn mehr als eine Person mit denselben Kontakten arbeitet oder Angebote nachverfolgt werden müssen. Bis dahin kann eine saubere Tabelle reichen, wenn sie klare Spalten und einen Verantwortlichen hat. Wann Tabellen zum Risiko werden, beschreibt der Ratgeber [Excel ablösen](/ratgeber/excel-abloesen-wann-tabellen-zum-risiko-werden)."),
        p("Für den Einstieg gibt es kostenlose Optionen: [CentralStationCRM](/software/crm/centralstationcrm) bietet laut Hersteller den Starter für bis zu drei Nutzer und 200 Kontakte kostenlos, das Team Paket kostet 24 Euro im Monat. [HubSpot Sales Hub](/software/crm/hubspot-sales-hub) hat einen kostenlosen Einstieg, bezahlte Stufen beginnen bei 7 Euro je Lizenz und Monat. [Zoho CRM](/software/crm/zoho-crm) nennt eine kostenlose Edition für bis zu drei Nutzer."),
        p("Entscheidend ist weniger das Programm als der Prozess. Die häufigsten Gründe für das Scheitern beschreibt der Ratgeber [CRM einführen: Neun typische Fehler](/ratgeber/crm-einfuehrung-fehler-vermeiden)."),
      ],
    },
    {
      heading: "Phase fünf: Waren, Aufträge und Projekte",
      blocks: [
        p("Ein ERP System verbindet Angebot, Auftrag, Lager, Einkauf und Rechnung. Für Startups mit Dienstleistungsmodell ist es oft zu früh. Anders beim Handel: Wer Waren lagert und über mehrere Kanäle verkauft, profitiert früh von einer Warenwirtschaft, damit Bestände stimmen."),
        ul(
          "**Handel mit Shopanbindung:** [Xentral](/software/erp/xentral) nennt einen Launch Tarif ab 99 Euro im Monat für Startups bis 500.000 Euro Jahresumsatz, plus 0,30 Euro je Auftrag laut Herstellerseite.",
          "**Dienstleistung und Handel gemischt:** [weclapp](/software/erp/weclapp) berechnet je Nutzer, vom Starter ab 39 Euro bis zum Handelspaket ab 163 Euro im Monat bei jährlicher Zahlung.",
          "**Modulare Plattform:** [Odoo](/software/erp/odoo) erlaubt eine App kostenlos, für weitere Apps fehlt ein veröffentlichter Euro Listenpreis.",
        ),
        p("Wie Sie ein ERP sauber auswählen, steht im Ratgeber [ERP auswählen im Mittelstand](/ratgeber/erp-auswahl-mittelstand-schritt-fuer-schritt). Für Startups gilt dieselbe Regel wie für Mittelständler: Erst Prozesse aufnehmen, dann Programme ansehen."),
      ],
    },
    {
      heading: "Drei Beispielrechnungen mit echten Listenpreisen",
      blocks: [
        p("Die folgenden Rechnungen zeigen Größenordnungen. Sie sind keine Empfehlung und enthalten nur das, was die Hersteller als Listenpreis nennen. Zusatzmodule, Einführung, Steuern und Aktionen sind nicht eingerechnet."),
        table("Beispiele für den monatlichen Softwarebedarf (netto, Listenpreise)", ["Szenario", "Bausteine", "Summe im Monat"], [
          ["Soloselbstständig, keine Anstellung", "Lexware Office L (21,90 €), CentralStationCRM Starter (0 €)", "21,90 €"],
          ["Team mit fünf Beschäftigten", "Lexware Office L (21,90 €), Sage Payroll Essentials (20 €), HubSpot Starter für 3 Lizenzen (21 €), Sage HR Basis für 5 Personen (22,50 €)", "85,40 €"],
          ["Onlinehandel mit Lager", "Lexware Office L (21,90 €), Xentral Launch (ab 99 €, plus 0,30 € je Auftrag)", "ab 120,90 € plus Aufträge"],
        ], "Rechenweg: Zweite Zeile 21,90 + 20 + 21 + 22,50 = 85,40. Dritte Zeile 21,90 + 99 = 120,90. HubSpot nennt Starter ab 7 Euro je Lizenz, das Angebot kann abweichen."),
        p("Wichtig ist die Richtung: Die Kosten wachsen mit der Zahl der Personen und der Vorgänge, nicht mit dem Funktionsumfang. Deshalb lohnt sich ein Blick in die Tarifgrenzen, zum Beispiel bei Rechnungen pro Monat oder Aufträgen."),
      ],
    },
    {
      heading: "Was Gründer bei Tarifen leicht übersehen",
      blocks: [
        ul(
          "**Mindestlaufzeit und Zahlungsweise:** sevdesk nennt Preise bei 24 Monaten Laufzeit, Sage 100 bei zwölf Monaten Mindestlaufzeit. Monatlich kündbare Tarife wie bei Sage Active geben mehr Spielraum.",
          "**Kontingente:** Rechnungen, Nutzer, Belege oder Aufträge sind oft begrenzt. Das Überschreiten kostet extra.",
          "**Aktionspreise:** Rabatte für Neukunden gelten befristet. Rechnen Sie mit dem regulären Preis.",
          "**Zusatzmodule:** Recruiting, Zeiterfassung oder Schnittstellen sind häufig Aufpreis.",
          "**Datenexport:** Klären Sie vor dem Kauf, in welchem Format Sie Daten mitnehmen können. Der Ratgeber [Softwarevertrag prüfen](/ratgeber/softwarevertrag-pruefen-laufzeit-daten-ausstieg) enthält eine Checkliste dazu.",
        ),
        fakt("Warum Ausstiegskosten zählen", "Ein Wechsel ist in der Buchhaltung und in der Lohnabrechnung besonders aufwendig, weil Bestände, Belege und Meldungen übertragen werden müssen. Ein sauberer Export ist deshalb ein Kaufargument, kein Detail."),
      ],
    },
    {
      heading: "Sechs Fehler, die Gründer bei Software machen",
      blocks: [
        ol(
          "**Zu früh zu groß kaufen.** Ein ERP System oder eine umfangreiche Personalplattform bindet Zeit und Geld, bevor die Abläufe stehen. Beginnen Sie mit dem, was ein konkretes Problem löst, und erweitern Sie, wenn Sie es spüren.",
          "**Die Buchhaltung unterschätzen.** Wer Belege sammelt, aber nicht ordnet, bezahlt später mit Zeit oder Beratungskosten. Eine Software mit App für Belege und Bankanbindung zahlt sich schnell aus.",
          "**Nur den Einstiegspreis vergleichen.** Nutzer, Kontingente und Zusatzmodule bestimmen die Rechnung. Rechnen Sie mit Ihrer Teamgröße in zwölf Monaten.",
          "**Keine Verantwortlichen benennen.** Jede Software braucht eine Person, die Regeln pflegt und Fragen beantwortet. Sonst verfällt sie.",
          "**Datenschutz aufschieben.** Mit der ersten Anstellung und dem ersten CRM Kontakt gelten Pflichten. Verträge zur Auftragsverarbeitung gehören zum Einkauf von Software.",
          "**Den Ausstieg nicht mitdenken.** Wer Daten nicht herausbekommt, ist gefangen. Fragen Sie vor dem Kauf nach Exportformaten.",
        ),
        p("Ein Startup entwickelt sich schnell, und Software soll mitwachsen können. Das gelingt am besten mit kleinen Schritten, klaren Zuständigkeiten und Verträgen, die Flexibilität lassen."),
      ],
    },
    {
      heading: "Ein Plan für die ersten 90 Tage",
      blocks: [
        ol(
          "**Woche 1 bis 2:** Rechtsform und Buchführung klären, Steuerberatung festlegen, Buchhaltungssoftware testen.",
          "**Woche 3 bis 4:** Bankanbindung einrichten, Belegablauf festlegen, erste Rechnungen im neuen System erstellen.",
          "**Monat 2:** Lohn und Zeiterfassung aufsetzen, sobald die erste Anstellung ansteht. Zuständigkeiten für Meldungen dokumentieren.",
          "**Monat 2 bis 3:** Vertriebsphasen definieren und ein CRM testen, aber nur mit echten Kontakten und einem Verantwortlichen.",
          "**Monat 3:** Alle Verträge prüfen, Kündigungsfristen in den Kalender eintragen, Zugriffsrechte und Datenexporte dokumentieren.",
        ),
        tipp("Testen Sie mit echten Daten", "Eine Demo mit Beispieldaten zeigt, wie gut Software aussieht. Ein Test mit drei echten Belegen, einer echten Rechnung und einem echten Kontakt zeigt, wie gut sie funktioniert."),
      ],
    },
  ],
  checklist: [
    "Welche Aufgabe kostet uns heute am meisten Zeit oder birgt das größte Risiko?",
    "Welche Buchführung gilt für unsere Rechtsform, und passt der gewählte Tarif dazu?",
    "Wie viele Personen und Vorgänge haben wir in zwölf Monaten, und was kostet der Tarif dann?",
    "Gibt es eine Mindestlaufzeit, und wie lange ist die Kündigungsfrist?",
    "In welchem Format können wir Daten exportieren, wenn wir wechseln müssen?",
    "Hat unsere Steuerberatung Zugriff oder bekommt sie Exporte, und in welchem Format?",
    "Ist die Funktion, die wir brauchen, im günstigsten Tarif enthalten oder ein Zusatz?",
    "Wer ist intern für jedes Programm verantwortlich?",
  ],
  faq: [
    { q: "Welche Software braucht ein Startup zuerst?", a: "Eine Lösung für Rechnungen und Buchhaltung. Sie wird gebraucht, sobald die erste Rechnung geschrieben wird, und ist später am schwersten zu wechseln. Lohn, Vertrieb und Personalverwaltung folgen mit dem jeweiligen Auslöser." },
    { q: "Reicht Excel am Anfang?", a: "Für Kontaktlisten und einfache Planung kann eine saubere Tabelle am Anfang genügen. Für Buchhaltung und Lohn ist sie keine gute Wahl, weil Nachvollziehbarkeit und Meldepflichten eine geprüfte Lösung verlangen. Mehr dazu im Ratgeber [Excel ablösen](/ratgeber/excel-abloesen-wann-tabellen-zum-risiko-werden)." },
    { q: "Wann lohnt sich ein ERP System für ein Startup?", a: "Wenn Sie Waren lagern, über mehrere Kanäle verkaufen oder Projekte mit vielen Positionen abrechnen und Fehler zwischen Angebot, Auftrag und Rechnung passieren. Reine Dienstleister kommen meist lange ohne aus." },
    { q: "Brauche ich bei einem Mitarbeiter eine eigene Lohnsoftware?", a: "Nicht zwingend. Viele Betriebe lassen die Abrechnung von Steuerberatung oder Lohnbüro erledigen. Eine eigene Cloud Lohnsoftware lohnt sich, wenn Sie die Kontrolle behalten wollen und Ihre Fälle gewöhnlich sind. Der Ratgeber [Lohnabrechnung auslagern](/ratgeber/lohnabrechnung-auslagern-oder-selbst-machen) vergleicht die Wege." },
    { q: "Wie viel Budget sollte ich für Software einplanen?", a: "Für ein Team mit fünf Beschäftigten liegen Listenpreise für Buchhaltung, Lohn, Vertrieb und Personalverwaltung in unserem Beispiel bei rund 85 Euro netto im Monat. Einführung, Zusatzmodule und Steuerberatung kommen dazu. Ein Onlinehandel mit Lager liegt wegen der Warenwirtschaft höher." },
    { q: "Sind kostenlose Tarife eine gute Idee?", a: "Als Einstieg ja, wenn Sie Grenzen kennen und Daten exportieren können. Prüfen Sie, bis zu welcher Nutzerzahl, Kontaktzahl oder Funktion der Tarif gilt und was beim Wechsel in einen bezahlten Tarif passiert." },
  ],
  sources: [
    { label: "Lexware Office: Preise und Versionen", url: "https://www.lexware.de/preise/" },
    { label: "FastBill: Preise", url: "https://www.fastbill.com/preise" },
    { label: "Sage Active: Pakete und Kontingente", url: "https://www.sage.com/de-de/produkte/sage-active/" },
    { label: "Sage Payroll: Preise und Pakete", url: "https://www.sage.com/de-de/sage-business-cloud/lohnabrechnung/preis/" },
    { label: "Sage HR: Modulpreise", url: "https://www.sage.com/de-de/sage-business-cloud/hr/" },
    { label: "CentralStationCRM: Pakete", url: "https://centralstationcrm.de/plans" },
    { label: "HubSpot: Preise für Sales", url: "https://www.hubspot.de/pricing/sales" },
    { label: "Xentral: Preise", url: "https://xentral.com/de/preise" },
    { label: "weclapp: Preise", url: "https://www.weclapp.com/de/preise/" },
    { label: "§ 238 HGB: Buchführungspflicht", url: "https://www.gesetze-im-internet.de/hgb/__238.html" },
    { label: "§ 4 EStG: Gewinnermittlung", url: "https://www.gesetze-im-internet.de/estg/__4.html" },
  ],
  related: ["lexware-office", "sage-payroll", "sage-hr", "centralstationcrm", "xentral"],
  relatedGuides: ["buchhaltungssoftware-fuer-startups-gruender", "lohnabrechnung-auslagern-oder-selbst-machen", "excel-abloesen-wann-tabellen-zum-risiko-werden"],
};
