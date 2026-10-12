import type { GuideBody } from "../guide-types";
import { achtung, fakt, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Preise sind Listenpreise der Hersteller zum Stand 25. und 27. September 2026, netto und ohne Aktionen. Welche Buchführung für Sie gilt, klären Sie mit Ihrer Steuerberatung. Dieser Ratgeber ersetzt keine Steuerberatung.",
  keyTakeaways: [
    "Die Rechtsform bestimmt die Buchführung: GmbH und UG führen doppelte Buchführung, Selbstständige und viele Einzelunternehmer ermitteln ihren Gewinn mit der Einnahmenüberschussrechnung.",
    "Wählen Sie die Software zuerst nach der Arbeitsteilung mit Ihrer Steuerberatung: Bucht die Kanzlei, brauchen Sie vor allem Rechnungen, Belege, Banking und einen sauberen Export.",
    "Tarife unterscheiden sich in Aufgaben, nicht nur im Preis. Bei Lexware Office beginnen Ausgangsrechnungen erst bei M, die Einnahmenüberschussrechnung bei L. Bei sevdesk trennen sich Rechnung und Buchhaltung.",
    "Unter den fünf geprüften Programmen nennt nur Sage Active ausdrücklich doppelte Buchführung mit SKR03 und SKR04, Bilanz und GuV in einem Paket (Essentials, 49 Euro im Monat).",
    "Achten Sie auf Laufzeit, Kontingente und Exporte. Monatlich kündbare Tarife helfen in der Gründungsphase mehr als ein Rabatt bei langer Bindung.",
  ],
  sections: [
    {
      heading: "Erst die Rechtsform, dann die Software",
      blocks: [
        p("Gründer fragen häufig zuerst nach dem besten Programm. Die bessere Frage lautet: Welche Buchführung gilt für uns, und wer übernimmt welchen Teil? Die Antwort steht nicht in der Software, sondern im Recht."),
        table("Rechtsform und Buchführung im Überblick", ["Rechtsform", "Typische Buchführung", "Was das für die Software bedeutet"], [
          ["Freiberufler, Einzelunternehmer ohne Buchführungspflicht", "Einnahmenüberschussrechnung nach § 4 Absatz 3 EStG", "Einnahmen und Ausgaben, Belege, Umsatzsteuer. Ein Programm mit Auswertung der Einnahmenüberschussrechnung genügt oft."],
          ["Kaufleute, GmbH, UG", "Doppelte Buchführung nach HGB, Bilanz und Gewinn und Verlustrechnung", "Kontenrahmen, Buchungssätze, Jahresabschluss. Oft übernimmt die Steuerberatung Buchung und Abschluss."],
        ], "Grundlage: § 238 HGB für die Buchführungspflicht der Kaufleute, § 4 EStG für die Gewinnermittlung. Im Einzelfall klärt Ihre Steuerberatung, welche Regeln gelten."),
        p("Erst danach lohnt der Blick auf Programme. Wer nur Rechnungen schreibt und Belege sammelt, braucht etwas anderes als jemand, der selbst bucht und Umsatzsteuervoranmeldungen abgibt. Wichtig ist auch, ob die [Kleinunternehmerregelung](/ratgeber/kleinunternehmerregelung-grenzen-rechnung-software) für Sie infrage kommt."),
      ],
    },
    {
      heading: "Die Arbeitsteilung mit der Steuerberatung",
      blocks: [
        p("Die meisten Startups arbeiten mit einer Kanzlei zusammen, aber sehr unterschiedlich. Klären Sie diese Frage vor der Softwarewahl, denn sie bestimmt die nötigen Funktionen."),
        table("Drei Modelle der Zusammenarbeit", ["Modell", "Ihre Aufgabe", "Nötige Funktionen"], [
          ["Kanzlei bucht", "Rechnungen schreiben, Belege einreichen", "Belegerfassung, Banking, Export oder Zugang für die Kanzlei"],
          ["Sie bereiten vor, Kanzlei schließt ab", "Laufend buchen, Kanzlei macht Jahresabschluss", "Buchungsfunktion, Kontenrahmen, Auswertungen, Export"],
          ["Sie buchen selbst, Kanzlei prüft", "Buchführung und Voranmeldung selbst", "Vollständige Buchhaltung, Umsatzsteuervoranmeldung, Abschlussvorbereitung"],
        ]),
        tipp("Fragen Sie Ihre Kanzlei konkret", "Welches Format brauchen Sie von mir? Möchten Sie direkten Zugriff auf die Software? Bis wann im Monat brauchen Sie die Belege? Ein Gespräch von zehn Minuten verhindert viele Fehlkäufe."),
      ],
    },
    {
      heading: "Die fünf Programme im Überblick",
      blocks: [
        p("Die folgenden Angaben stammen von den Herstellerseiten und wurden am 25. und 27. September 2026 geprüft. Preise sind netto im Monat."),
        table("Tarife für Gründer im Vergleich", ["Programm", "Tarife und Preise", "Besonderheiten laut Hersteller"], [
          ["[Lexware Office](/software/buchhaltung/lexware-office)", "S 7,90 €, M 12,90 €, L 21,90 €, XL 32,90 €", "Belege ab S, Ausgangsrechnungen ab M, Einnahmenüberschussrechnung und Umsatzsteuervoranmeldung ab L, XL mit API und besonderen Rechnungstypen."],
          ["[sevdesk](/software/buchhaltung/sevdesk)", "Rechnung 12,90 €, Buchhaltung 25,90 €, Buchhaltung Pro 34,90 € bei 24 Monaten Laufzeit", "E-Rechnungen, Belege, Bankabgleich, Zusammenarbeit mit der Steuerberatung, erweiterte Buchhaltung je nach Tarif."],
          ["[FastBill](/software/buchhaltung/fastbill)", "Solo 10 €, Plus 15 €, Pro 30 €, Premium ab 59 € bei monatlicher Zahlung, jährlich günstiger", "E-Rechnungen, Mahnwesen, Belege, Banking, Export für DATEV, UStVA. Wiederkehrende Rechnungen erst ab Pro."],
          ["[Billomat](/software/buchhaltung/billomat)", "Professional 29 €, Business 39 €, Enterprise 119 € bei monatlicher Zahlung, jährlich 19, 29 und 99 €", "Professional mit einem Nutzer und 30 Rechnungen im Monat. DATEVconnect und Banking laut Tariftabelle erst ab Business."],
          ["[Sage Active](/software/buchhaltung/sage-active)", "Starter 25 €, Essentials 49 €, monatlich kündbar", "Starter mit fünf Nutzern und 300 Rechnungen, Essentials mit doppelter Buchführung SKR03 und SKR04, Bilanz und GuV, Umsatzsteuervoranmeldung über ELSTER und Lohn für zwei Personen."],
        ], "Quellen und Prüfdatum stehen im Profil jedes Programms. Aktionen sind nicht eingerechnet."),
        p("Direkt nebeneinander sehen Sie die Programme im [Vergleich der Buchhaltungssoftware](/vergleich?produkte=lexware-office,sevdesk,fastbill,billomat,sage-active)."),
      ],
    },
    {
      heading: "Worauf Gründer bei den Tarifen achten sollten",
      blocks: [
        ul(
          "**Der günstigste Tarif ist selten der passende.** Lexware Office S enthält Belege, aber keine Ausgangsrechnungen. Wer Rechnungen schreibt, braucht mindestens M, wer die Einnahmenüberschussrechnung nutzt, L. Bei Sage Active deckt Starter Rechnungen ab, überlässt die Buchführung aber ausdrücklich einer externen Buchhaltung.",
          "**Kontingente prüfen.** Billomat Professional enthält einen Nutzer und 30 Rechnungen im Monat. Sage Active enthält 300 beziehungsweise 500, weitere Pakete kosten ab 10 Euro für 100 Rechnungen. Wachstum kostet dann extra.",
          "**Laufzeit lesen.** sevdesk nennt Preise bei 24 Monaten Laufzeit, die anderen Hersteller bieten monatliche Zahlung oder Kündigung an. Für die ersten Monate ist Flexibilität wertvoll.",
          "**Zahlweise beachten.** FastBill und Billomat sind bei jährlicher Zahlung günstiger. Rechnen Sie mit dem Preis, den Sie tatsächlich zahlen.",
          "**Zusatzfunktionen einrechnen.** Lohn, Schnittstellen und Banking sind teilweise an höhere Tarife gebunden.",
        ),
        achtung("Unterschied zwischen Rechnung und Buchhaltung", "Ein Tarif „Rechnung“ ersetzt keine Buchhaltung. Er erstellt Dokumente, bucht aber nicht zwingend. Wer Belege und Zahlungen verbinden, Umsatzsteuer melden oder Auswertungen sehen will, braucht den größeren Tarif."),
      ],
    },
    {
      heading: "Belege, Bank und Umsatzsteuer im Alltag",
      blocks: [
        p("Die meiste Zeit in der Buchhaltung kostet nicht das Buchen, sondern das Suchen. Gründer unterschätzen, wie viel Arbeit entsteht, wenn Belege in E-Mails, Messengern und Taschen liegen. Drei Gewohnheiten sparen viel Zeit:"),
        ol(
          "**Belege sofort erfassen:** Foto per App oder Weiterleitung per E-Mail, noch am selben Tag. So entstehen keine Stapel.",
          "**Bank anbinden:** Der Abgleich von Zahlungen und Rechnungen zeigt offene Posten und erspart Handarbeit. Prüfen Sie, ob die Bankanbindung in Ihrem Tarif enthalten ist.",
          "**Monatlichen Termin festlegen:** Ein fester Tag im Monat für Belege, offene Posten und Rückfragen der Kanzlei, zum Beispiel am dritten Werktag.",
        ),
        p("Wer umsatzsteuerpflichtig ist, gibt Voranmeldungen ab. Hersteller wie Lexware Office (ab L), FastBill und Sage Active (Essentials, über ELSTER) nennen die Funktion ausdrücklich. Klären Sie mit der Kanzlei, wer die Voranmeldung übermittelt und bis wann die Zahlen stehen müssen."),
        p("Gleichzeitig gelten Regeln für Belege und Archivierung. Der Ratgeber [GoBD und Aufbewahrungsfristen](/ratgeber/gobd-aufbewahrungsfristen-belege-digitalisieren) erklärt, was Sie digital wie lange aufbewahren müssen."),
      ],
    },
    {
      heading: "E-Rechnung und Bank: Zwei Punkte, die Sie jetzt einplanen sollten",
      blocks: [
        p("Der Empfang von E-Rechnungen ist seit 2025 Pflicht, die Ausstellung folgt ab 2027 und 2028. Gründer, die jetzt ein Programm auswählen, sollten diese Anforderung berücksichtigen. In den geprüften Herstellerquellen steht „E-Rechnung“ als Funktion bei FastBill, sevdesk und Billomat. Sage Active liest XRechnung und ZUGFeRD ein und kündigt den Versand an. Die Details, auch zu Fristen und Formaten, stehen im Ratgeber [E-Rechnung Pflicht](/ratgeber/e-rechnung-pflicht-fristen-software)."),
        p("Bei der Bank lohnt die Frage, ob Zahlungen automatisch Rechnungen zugeordnet werden und welche Bankanbindung der Tarif umfasst. Bei Billomat ist die Banking Verknüpfung laut Tariftabelle erst ab Business enthalten."),
      ],
    },
    {
      heading: "Welcher Gründertyp wählt was",
      blocks: [
        table("Orientierung nach Situation (keine Empfehlung)", ["Situation", "Worauf Sie zuerst schauen", "Beispiele aus dem Katalog"], [
          ["Freiberufler, wenige Rechnungen", "Rechnungen und Belege, Einnahmenüberschussrechnung", "Lexware Office M oder L, FastBill Solo oder Plus, sevdesk Rechnung"],
          ["Gründerteam, Kanzlei bucht", "Beleg und Bankabgleich, Zugang oder Export für die Kanzlei", "FastBill mit Export für DATEV, sevdesk, Billomat Business mit DATEVconnect, Sage Active mit Zugang für externe Buchhalter"],
          ["GmbH oder UG, Sie buchen selbst", "Doppelte Buchführung, Kontenrahmen, Abschlussvorbereitung", "Sage Active Essentials mit SKR03 und SKR04, Bilanz und GuV"],
          ["Mit ersten Beschäftigten", "Lohn und Buchhaltung unter einem Dach oder gute Schnittstelle", "Sage Active Essentials mit Lohn für zwei Personen, jede weitere 3 €"],
        ], "Die Auswahl ist eine Orientierung. Prüfen Sie jeden Tarif auf die Funktionen, die Sie brauchen."),
        fakt("Wenn Ihre Kanzlei DATEV nutzt", "Dann zählt der Weg der Daten. FastBill nennt einen Export für DATEV, Sage Active einen Export im DATEV Format in Essentials, Billomat DATEVconnect ab Business. Bestätigen Sie mit der Kanzlei, ob dieser Weg bei Ihnen genutzt wird."),
      ],
    },
    {
      heading: "Was ein Jahr Buchhaltungssoftware kostet",
      blocks: [
        p("Monatspreise wirken klein, Jahreskosten und Laufzeit zeigen mehr. Die folgende Übersicht rechnet für jeweils einen realistischen Tarif zwölf Monate. Sie vergleicht keine gleichen Leistungen, sondern zeigt, was die jeweilige Bindung bedeutet."),
        table("Beispielrechnung für zwölf Monate (netto, Listenpreise)", ["Programm und Tarif", "Preis im Monat", "Kosten in zwölf Monaten", "Bindung laut Herstellerangabe"], [
          ["Lexware Office, Stufe L", "21,90 €", "262,80 €", "Monatlicher Regelpreis, Aktionen nicht eingerechnet"],
          ["FastBill, Plus", "15 € (monatlich) oder 14 € (jährlich)", "180 € oder 168 €", "Zahlweise wählbar, jährlich günstiger"],
          ["sevdesk, Buchhaltung", "25,90 €", "310,80 €", "Preis bei 24 Monaten Laufzeit, Gesamtbindung 621,60 €"],
          ["Billomat, Business", "39 € (monatlich) oder 29 € (jährlich)", "468 € oder 348 €", "Zahlweise wählbar, jährlich günstiger"],
          ["Sage Active, Essentials", "49 €", "588 €", "Monatlich kündbar, enthält doppelte Buchführung und Lohn für zwei Personen"],
        ], "Rechenweg: Monatspreis mal zwölf. Die Programme unterscheiden sich im Funktionsumfang. Die Tabelle ist keine Empfehlung."),
        p("Auffällig ist der Unterschied zwischen **Preis und Bindung**. sevdesk wirkt mit 25,90 Euro günstig, bindet aber 24 Monate. Sage Active Essentials kostet mehr, ist aber monatlich kündbar und enthält mehr Funktionen. Entscheidend ist, was Sie im ersten Jahr wirklich brauchen und wie sicher Ihre Annahmen sind."),
      ],
    },
    {
      heading: "Wenn sich die Rechtsform ändert",
      blocks: [
        p("Viele Startups beginnen als Einzelunternehmen oder Gesellschaft bürgerlichen Rechts und wechseln später in eine UG oder GmbH. Dann ändern sich Buchführung, Steuernummern und häufig auch die Anforderungen an die Software. Planen Sie diesen Schritt früh ein:"),
        ul(
          "**Neue Gesellschaft, neue Buchführung:** Die GmbH führt doppelte Buchführung. Eine Software, die nur die Einnahmenüberschussrechnung abbildet, reicht dann nicht allein.",
          "**Saubere Trennung:** Belege, Rechnungen und Konten der alten und der neuen Gesellschaft dürfen nicht vermischt werden.",
          "**Übernahme von Stammdaten:** Kunden und Lieferanten lassen sich meist exportieren und importieren. Prüfen Sie das früh.",
          "**Abstimmung mit der Steuerberatung:** Der Wechsel hat steuerliche Folgen, die über die Software hinausgehen.",
        ),
        p("Wer absehbar in eine Kapitalgesellschaft wechselt, wählt besser von Beginn an ein Programm, das beide Welten abdeckt, oder stimmt den Wechsel des Programms mit dem Wechsel der Rechtsform ab."),
      ],
    },
    {
      heading: "Daten mitnehmen: Der Wechsel nach dem ersten Jahr",
      blocks: [
        p("Viele Gründer wechseln nach zwölf Monaten das Programm, weil sich Anforderungen ändern oder ein größerer Tarif nötig wird. Ein Wechsel ist einfacher, wenn Sie von Anfang an auf Datenmitnahme achten."),
        ol(
          "**Stammdaten exportieren:** Kunden, Lieferanten, Artikel als CSV oder in einem anderen offenen Format.",
          "**Belege sichern:** Alle Belege mit ihren Buchungen in einem Archiv, das auch ohne Software lesbar ist.",
          "**Buchungen exportieren:** Die Steuerberatung bekommt die Buchungsdaten in dem Format, das sie braucht.",
          "**Offene Posten abstimmen:** Offene Rechnungen und Zahlungen werden im neuen System neu angelegt oder importiert.",
          "**Zeitpunkt wählen:** Ein Wechsel zum Jahreswechsel oder zum Quartalsende vermeidet Brüche.",
        ),
        p("Mehr zu Aufbewahrung und Archivierung steht im Ratgeber [GoBD und Aufbewahrungsfristen](/ratgeber/gobd-aufbewahrungsfristen-belege-digitalisieren), mehr zu Verträgen und Ausstieg im Ratgeber [Softwarevertrag prüfen](/ratgeber/softwarevertrag-pruefen-laufzeit-daten-ausstieg)."),
      ],
    },
    {
      heading: "In 14 Tagen zur Entscheidung",
      blocks: [
        ol(
          "**Tag 1:** Rechtsform und Buchführung klären, Arbeitsteilung mit der Kanzlei festlegen.",
          "**Tag 2 bis 3:** Anforderungen auf einer Seite sammeln: Rechnungen pro Monat, Nutzer, Bank, Lohn, E-Rechnung.",
          "**Tag 4 bis 7:** Zwei bis drei Programme testen, jeweils mit drei echten Belegen und einer echten Rechnung.",
          "**Tag 8 bis 10:** Tarifgrenzen und Laufzeit prüfen, Gesamtkosten für zwölf Monate rechnen.",
          "**Tag 11 bis 12:** Mit der Kanzlei abstimmen: Format, Zugriff, Fristen.",
          "**Tag 13 bis 14:** Entscheiden, Zugänge anlegen, Belegablauf starten.",
        ),
        p("Wer in dieser Zeit alle Tarife durchrechnet, sieht schnell: Die Preisunterschiede zwischen den Programmen sind kleiner als die Unterschiede in Zeit und Nerven, die ein unpassender Ablauf kostet. Wählen Sie das Programm, das Ihren Alltag am wenigsten umbaut."),
      ],
    },
  ],
  checklist: [
    "Welche Buchführung gilt für unsere Rechtsform?",
    "Was übernimmt die Steuerberatung, was machen wir selbst?",
    "Welches Format und welchen Zugriff braucht die Kanzlei?",
    "Welcher Tarif enthält Rechnungen, Belege, Bankanbindung und Umsatzsteuervoranmeldung?",
    "Wie viele Rechnungen und Nutzer sind im Tarif enthalten, und was kostet mehr?",
    "Wie lang ist die Laufzeit, und wie schnell können wir kündigen?",
    "Wie gut ist die E-Rechnung abgedeckt, beim Empfang und beim Versand?",
    "In welchem Format können wir alle Daten exportieren, wenn wir wechseln?",
  ],
  faq: [
    { q: "Welche Buchhaltungssoftware ist die beste für Startups?", a: "Das hängt von Rechtsform, Arbeitsteilung mit der Kanzlei und Umfang ab. Freiberufler kommen oft mit einem Programm für Rechnungen und Einnahmenüberschussrechnung aus. GmbH und UG brauchen doppelte Buchführung oder eine enge Zusammenarbeit mit der Steuerberatung. Eine pauschal beste Software gibt es nicht." },
    { q: "Brauche ich als GmbH doppelte Buchführung?", a: "Ja. Kapitalgesellschaften sind nach den handelsrechtlichen Vorschriften zur Buchführung verpflichtet und erstellen Bilanz sowie Gewinn und Verlustrechnung. In der Praxis übernimmt häufig die Steuerberatung Buchung und Abschluss. Klären Sie die Aufteilung bei der Gründung." },
    { q: "Reicht Lexware Office für eine GmbH?", a: "Das lässt sich aus den Herstellerangaben nicht pauschal beantworten. Belege ab S, Ausgangsrechnungen ab M sowie Einnahmenüberschussrechnung und Umsatzsteuervoranmeldung ab L sind belegt. Doppelte Buchführung nennt die geprüfte Quelle nicht. Fragen Sie den Hersteller und Ihre Kanzlei, wie die Jahresabschlüsse entstehen." },
    { q: "Was kostet Buchhaltungssoftware für den Start?", a: "Die Einstiegstarife der fünf geprüften Programme liegen bei 7,90 bis 29 Euro im Monat netto, passende Tarife für Rechnungen und Einnahmenüberschussrechnung häufig zwischen 13 und 30 Euro. Doppelte Buchführung mit Lohn kostet bei Sage Active Essentials 49 Euro im Monat." },
    { q: "Kann ich später die Software wechseln?", a: "Ja, aber mit Aufwand. Prüfen Sie vorab die Exportmöglichkeiten für Belege, Buchungen und Stammdaten. Ein Wechsel zum Jahreswechsel ist meist am einfachsten." },
    { q: "Muss meine Software DATEV unterstützen?", a: "Nur, wenn Ihre Steuerberatung mit DATEV arbeitet und die Daten so erhalten möchte. Fragen Sie die Kanzlei nach dem gewünschten Weg und prüfen Sie, ob der Tarif den passenden Export enthält." },
  ],
  sources: [
    { label: "Lexware Office: Preise und Versionen", url: "https://www.lexware.de/preise/" },
    { label: "sevdesk: Preise", url: "https://sevdesk.de/preise/" },
    { label: "FastBill: Preise", url: "https://www.fastbill.com/preise" },
    { label: "Billomat: Preise und Tarifdetails", url: "https://www.billomat.com/preise/" },
    { label: "Sage Active: Pakete, Kontingente und FAQ", url: "https://www.sage.com/de-de/produkte/sage-active/" },
    { label: "§ 238 HGB: Buchführungspflicht", url: "https://www.gesetze-im-internet.de/hgb/__238.html" },
    { label: "§ 4 EStG: Gewinnbegriff", url: "https://www.gesetze-im-internet.de/estg/__4.html" },
  ],
  related: ["lexware-office", "sevdesk", "fastbill", "billomat", "sage-active"],
  relatedGuides: ["kleinunternehmerregelung-grenzen-rechnung-software", "e-rechnung-pflicht-fristen-software", "buchhaltungssoftware-auswaehlen"],
};
