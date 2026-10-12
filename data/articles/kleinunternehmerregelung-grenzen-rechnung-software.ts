import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Rechtsstand: 13. Oktober 2026. Die Grenzen gelten seit dem 1. Januar 2025. Dieser Ratgeber erklärt die Regeln allgemein und ersetzt keine Steuerberatung. Ob die Regelung für Sie sinnvoll ist, klären Sie vor der Gründung oder dem Wechsel mit Ihrer Kanzlei.",
  keyTakeaways: [
    "Seit 2025 darf der Gesamtumsatz im Vorjahr höchstens 25.000 Euro betragen und im laufenden Jahr 100.000 Euro nicht überschreiten. Beide Grenzen sind Nettowerte.",
    "Gerechnet wird nach vereinnahmten Entgelten, also nach Zahlungseingang. Das Rechnungsdatum allein ist nicht entscheidend.",
    "Überschreiten Sie 100.000 Euro im laufenden Jahr, endet die Befreiung sofort. Bereits der Umsatz, der die Grenze überschreitet, ist steuerpflichtig.",
    "Auf der Rechnung steht kein Umsatzsteuerbetrag, dafür ein Hinweis auf die Steuerbefreiung. Vorsteuer aus Einkäufen können Sie nicht abziehen.",
    "Eine Buchhaltungssoftware sollte Umsätze nach Zahlungseingang überwachen, vor der Grenze warnen und den Wechsel zur Regelbesteuerung ohne Neuaufbau erlauben.",
  ],
  sections: [
    {
      heading: "Was die Kleinunternehmerregelung bedeutet",
      blocks: [
        p("Die Kleinunternehmerregelung steht in § 19 des Umsatzsteuergesetzes. Wer sie anwendet, ist von der Umsatzsteuer befreit. Das hat zwei Seiten. Sie schreiben **Rechnungen ohne Umsatzsteuer**, müssen keine Umsatzsteuervoranmeldungen abgeben und sparen Aufwand. Dafür können Sie die **Vorsteuer aus Eingangsrechnungen nicht abziehen**. Für Freiberufler, Nebenerwerbsgründer und kleine Dienstleister ist das oft ein klarer Vorteil, bei hohen Investitionen oder vielen Geschäftskunden kann es sich lohnen, darauf zu verzichten."),
        p("Wichtig ist der Begriff: Es geht um eine **Steuerbefreiung**, nicht um eine Befreiung von der Buchführung. Auch Kleinunternehmer führen Einnahmen und Ausgaben nachvollziehbar, bewahren Belege auf und geben Einkommensteuererklärungen ab. Wie das zusammenhängt, zeigt der Ratgeber [GoBD und Aufbewahrungsfristen](/ratgeber/gobd-aufbewahrungsfristen-belege-digitalisieren)."),
      ],
    },
    {
      heading: "Die Grenzen seit 2025",
      blocks: [
        table("Voraussetzungen der Kleinunternehmerregelung nach § 19 UStG", ["Merkmal", "Seit 1. Januar 2025", "Vorher"], [
          ["Gesamtumsatz im Vorjahr", "höchstens 25.000 Euro", "höchstens 22.000 Euro"],
          ["Gesamtumsatz im laufenden Jahr", "höchstens 100.000 Euro, feste Grenze", "voraussichtlich höchstens 50.000 Euro, als Prognose"],
          ["Bezugsgröße", "Nettoumsatz, also ohne Umsatzsteuer", "Bruttoumsatz"],
          ["Berechnung", "nach vereinnahmten Entgelten", "nach vereinnahmten Entgelten"],
        ], "Nach § 19 UStG und den Hinweisen der Industrie und Handelskammern. Der Gesamtumsatz bestimmt sich nach § 19 Absatz 2 UStG."),
        p("Die neue Grenze von 100.000 Euro im laufenden Jahr ist **keine Prognose** mehr. Früher durften Sie zu Jahresbeginn schätzen, dass Sie unter 50.000 Euro bleiben. Wurde die Schätzung später überschritten, blieb das folgenlos. Heute zählt der tatsächliche Umsatz."),
        h3("Drei Beispiele"),
        table("So wirken die Grenzen in der Praxis", ["Fall", "Umsatz Vorjahr", "Umsatz laufendes Jahr", "Folge"], [
          ["A", "24.000 Euro", "60.000 Euro", "Die Regelung gilt weiter, beide Grenzen sind eingehalten."],
          ["B", "24.000 Euro", "110.000 Euro", "Ab dem Umsatz, der 100.000 Euro übersteigt, ist Umsatzsteuer fällig. Im Folgejahr ist die Regelung nicht anwendbar, weil der Vorjahresumsatz über 25.000 Euro liegt."],
          ["C", "26.000 Euro", "30.000 Euro", "Die Regelung ist im laufenden Jahr nicht anwendbar, weil der Vorjahresumsatz 25.000 Euro übersteigt."],
        ], "Fall B folgt dem Beispiel der IHK Köln. Alle Beträge netto."),
        achtung("Die Grenze gilt sofort", "Überschreiten Sie im laufenden Jahr 100.000 Euro, endet die Befreiung mit diesem Umsatz. Umsätze davor bleiben steuerfrei. Stellen Sie also schon während des Jahres Ihre Rechnungen und Ihre Software um, nicht erst im Folgejahr."),
        p("Für Neugründer gilt eine Besonderheit. Nach den Hinweisen der Kammern starten Gründer seit 2025 automatisch als Kleinunternehmer, ohne eine Prognose abgeben zu müssen, und für das Gründungsjahr zählt die Grenze von 25.000 Euro. Klären Sie Ihren Fall bei Gründung mit der Steuerberatung."),
      ],
    },
    {
      heading: "Zahlungseingang statt Rechnungsdatum",
      blocks: [
        p("Der Gesamtumsatz wird nach **vereinnahmten Entgelten** berechnet. Das heißt: Es zählt, wann das Geld eingeht, nicht wann die Rechnung geschrieben wurde. Das hat praktische Folgen. Eine Rechnung vom Dezember, die im Januar bezahlt wird, gehört zum neuen Jahr. Eine Anzahlung im November zählt bereits im November."),
        p("Genau hier hilft eine gute Software. Sie sollte die Umsätze nach Zahlungseingang aufsummieren und anzeigen, wie weit Sie von 25.000 und 100.000 Euro entfernt sind. Wer nur Rechnungsbeträge addiert, verschätzt sich leicht, vor allem bei Anzahlungen, Teilzahlungen und Gutschriften."),
        tipp("Bauen Sie sich eine Frühwarnung", "Legen Sie in Ihrer Software oder in einer Tabelle eine Marke bei 80 Prozent der Grenzen fest. Ab dieser Marke prüfen Sie, welche Aufträge noch kommen und ob ein Wechsel zur Regelbesteuerung sinnvoll ist."),
      ],
    },
    {
      heading: "Was auf die Rechnung gehört",
      blocks: [
        p("Rechnungen über steuerfreie Umsätze nach § 19 Absatz 1 UStG müssen die Mindestangaben des § 34a der Umsatzsteuerdurchführungsverordnung enthalten. Das sind in der Sache:"),
        ul(
          "vollständiger Name und Anschrift des Leistenden und des Empfängers,",
          "Steuernummer oder Umsatzsteuer Identifikationsnummer des Leistenden,",
          "Ausstellungsdatum,",
          "Menge und Art der gelieferten Gegenstände oder Umfang und Art der Leistung,",
          "das Entgelt für die Leistung,",
          "ein **Hinweis auf die Steuerbefreiung** als Kleinunternehmer.",
        ),
        p("Die Umsatzsteuer weisen Sie nicht gesondert aus. Wer das trotzdem tut, riskiert steuerliche Folgen. Klären Sie Zweifelsfälle mit der Steuerberatung. Hilfreich ist eine Software, die den Hinweis automatisch auf jede Rechnung setzt und beim Wechsel zur Regelbesteuerung auf Umsatzsteuer umschaltet."),
        h3("E-Rechnung für Kleinunternehmer"),
        p("Kleinunternehmer müssen keine E-Rechnung ausstellen. Nach § 34a UStDV darf ihre Rechnung immer als sonstige Rechnung übermittelt werden, zum Beispiel als PDF. **Empfangen** müssen Kleinunternehmer E-Rechnungen aber seit dem 1. Januar 2025 können. Die Einzelheiten stehen im Ratgeber [E-Rechnung Pflicht](/ratgeber/e-rechnung-pflicht-fristen-software)."),
      ],
    },
    {
      heading: "Verzicht auf die Regelung: Wann er sinnvoll ist",
      blocks: [
        p("Sie können auf die Anwendung der Kleinunternehmerregelung verzichten. Das heißt, Sie versteuern Ihre Umsätze regulär und erhalten dafür die Vorsteuer. Nach § 19 Absatz 3 UStG ist die Erklärung gegenüber dem Finanzamt **unwiderruflich** und bindet Sie mindestens für **fünf Kalenderjahre**. Sie ist bis zum letzten Tag des Februars des zweiten auf den Besteuerungszeitraum folgenden Kalenderjahres möglich."),
        table("Regelbesteuerung oder Kleinunternehmer?", ["Situation", "Eher Kleinunternehmer", "Eher Regelbesteuerung"], [
          ["Kunden", "Privatpersonen, die keine Umsatzsteuer abziehen können", "Geschäftskunden, die Vorsteuer abziehen"],
          ["Investitionen", "Wenig Einkäufe, wenig Vorsteuer", "Hohe Anschaffungen, bei denen Vorsteuer zählt"],
          ["Aufwand", "Möglichst wenig Meldungen", "Bereitschaft für Voranmeldungen und Buchführung"],
          ["Wachstum", "Umsatz bleibt unter den Grenzen", "Absehbar über 25.000 Euro im nächsten Jahr"],
        ]),
        fakt("Warum die Bindung wichtig ist", "Wer verzichtet, kann nicht im nächsten Jahr zurück. Entscheiden Sie deshalb mit Zahlen: Was zahlen Sie an Vorsteuer, was kostet der Mehraufwand, und wie reagieren Ihre Kunden auf Rechnungen mit Umsatzsteuer?"),
      ],
    },
    {
      heading: "Worauf Sie bei der Software achten sollten",
      blocks: [
        table("Prüfpunkte für Buchhaltungssoftware bei Kleinunternehmern", ["Prüfpunkt", "Warum er zählt"], [
          ["Einstellung für Kleinunternehmer", "Rechnungen ohne Umsatzsteuer, mit Hinweis auf die Steuerbefreiung"],
          ["Umsatzüberwachung", "Auswertung nach Zahlungseingang, Anzeige der Abstände zu 25.000 und 100.000 Euro"],
          ["Wechsel zur Regelbesteuerung", "Umstellung der Vorlagen, Steuersätze und Konten ohne Neuaufbau, auch unterjährig"],
          ["Einnahmenüberschussrechnung", "Auswertung der Einnahmen und Ausgaben, Übergabe an die Steuerberatung"],
          ["Umsatzsteuervoranmeldung", "Ist nach dem Wechsel nötig. Prüfen Sie, ob sie im Tarif enthalten ist."],
          ["Belege und Archiv", "Digitale Belege unveränderbar speichern, auffindbar halten"],
          ["Empfang von E-Rechnungen", "Strukturierte Rechnungen lesen und aufbewahren können"],
        ]),
        p("Für die Auswahl lohnt der Blick auf die Tarifgrenzen. Die Einnahmenüberschussrechnung ist in unserer Funktionsmatrix für [Lexware Office](/software/buchhaltung/lexware-office) belegt, dort ab Stufe L für 21,90 Euro im Monat, ebenso für [Sage Active](/software/buchhaltung/sage-active) im Paket Essentials für 49 Euro im Monat und für [Billomat](/software/buchhaltung/billomat), dessen Professional Tarif 29 Euro im Monat kostet. Die Umsatzsteuervoranmeldung nennen die Hersteller für Lexware Office ab L, für Sage Active Essentials über ELSTER und für [FastBill](/software/buchhaltung/fastbill), das bei 10 Euro im Monat beginnt."),
        p("Zu einem Kleinunternehmer Modus und zur Umsatzüberwachung nennen die geprüften Herstellerquellen nichts Belastbares. Wir behaupten deshalb nicht, dass ein Programm sie bietet. Fragen Sie vor dem Kauf konkret: Wie stelle ich auf Kleinunternehmer um, und wie sehe ich meine Umsätze nach Zahlungseingang?"),
      ],
    },
    {
      heading: "Preise, Kunden und die Frage der Umsatzsteuer",
      blocks: [
        p("Die Befreiung wirkt sich auf Ihre Preise aus, und zwar je nach Kundengruppe unterschiedlich. Das wird bei der Gründung oft übersehen."),
        table("Wirkung der Regelung nach Kundengruppe", ["Kundengruppe", "Was sich ändert", "Worauf Sie achten"], [
          ["Privatpersonen", "Sie können keine Vorsteuer abziehen. Ein Preis ohne Umsatzsteuer ist für sie günstiger als der eines Wettbewerbers mit Regelbesteuerung.", "Sie dürfen Ihre Preise ohne Aufschlag für Umsatzsteuer kalkulieren."],
          ["Geschäftskunden mit Vorsteuerabzug", "Für sie ist die Umsatzsteuer ein durchlaufender Posten. Ihr Preis wirkt nicht günstiger, weil sie die Steuer ohnehin zurückbekommen.", "Manche Kunden fragen nach Rechnungen mit Umsatzsteuer. Das ist dann kein Wettbewerbsvorteil."],
          ["Kunden ohne Vorsteuerabzug, zum Beispiel Vereine", "Ähnlich wie bei Privatpersonen: Ein Preis ohne Umsatzsteuer ist ein Vorteil.", "Klären Sie, wer Ihre Kundschaft ist."],
        ], "Die Einordnung ist allgemein. Rechtlich und steuerlich maßgeblich ist Ihr Einzelfall."),
        p("Wer überwiegend an Geschäftskunden verkauft und größere Anschaffungen plant, prüft den Verzicht. Wer vor allem Privatkunden bedient und wenig investiert, profitiert eher von der Regelung. Sprechen Sie mit Ihrer Steuerberatung, bevor Sie Preislisten festlegen."),
      ],
    },
    {
      heading: "Eine Umsatzplanung als Frühwarnsystem",
      blocks: [
        p("Die feste Grenze von 100.000 Euro im laufenden Jahr verlangt, dass Sie den Umsatz im Blick behalten. Eine einfache Planung in einer Tabelle oder in der Software genügt. Tragen Sie monatlich den **tatsächlichen Zahlungseingang** ein und rechnen Sie den Verlauf hoch."),
        table("Beispiel für eine Jahresplanung mit Frühwarnung (netto)", ["Zeitraum", "Zahlungseingang im Zeitraum", "Summe seit Jahresbeginn", "Abstand zur Grenze von 100.000 €"], [
          ["Januar bis März", "18.000 €", "18.000 €", "82.000 €"],
          ["April bis Juni", "27.000 €", "45.000 €", "55.000 €"],
          ["Juli bis September", "30.000 €", "75.000 €", "25.000 €"],
          ["Oktober", "12.000 €", "87.000 €", "13.000 €"],
        ], "Das Beispiel ist erfunden. Die Summe von 87.000 € im Oktober zeigt, dass die Grenze noch im selben Jahr erreicht werden kann, wenn weitere Aufträge anstehen."),
        p("Ab 80.000 Euro lohnt sich der Blick auf offene Angebote und Anzahlungen. Wer absehen kann, dass er die Grenze überschreitet, bereitet den Wechsel vor: Software umstellen, Kunden informieren, Rechnungsvorlagen anpassen, mit der Steuerberatung die Voranmeldungen planen."),
      ],
    },
    {
      heading: "Typische Fehler bei der Kleinunternehmerregelung",
      blocks: [
        ul(
          "**Rechnungsdatum statt Zahlungseingang:** Wer Umsätze nach Rechnungsdatum zählt, verschätzt sich bei Jahresübergängen und Anzahlungen.",
          "**Brutto statt netto:** Die Grenzen gelten seit 2025 für den Umsatz ohne Umsatzsteuer. Wer noch mit Bruttobeträgen plant, rechnet falsch.",
          "**Umsatzsteuer trotz Befreiung ausweisen:** Das verwirrt Kunden und kann steuerliche Folgen haben.",
          "**Grenze erst im Nachhinein bemerken:** Die 100.000 Euro gelten sofort. Eine nachträgliche Korrektur ist unangenehm.",
          "**Wechsel nicht vorbereiten:** Wer erst am Tag des Überschreitens die Software umstellt, schreibt in der Zwischenzeit falsche Rechnungen.",
          "**Verzicht ohne Folgen zu kennen:** Die Bindung von fünf Kalenderjahren ist lang.",
          "**E-Rechnungen ignorieren:** Der Empfang ist auch für Kleinunternehmer Pflicht.",
        ),
        p("Wer diese Fehler kennt, kann sie mit einfachen Mitteln vermeiden: einer Umsatzübersicht nach Zahlungseingang, einer Software, die den Wechsel unterstützt, und einem kurzen Gespräch mit der Steuerberatung zu Beginn des Jahres."),
      ],
    },
    {
      heading: "Der Wechsel in die Regelbesteuerung",
      blocks: [
        ol(
          "**Zeitpunkt festlegen:** Wann endet die Befreiung? Bei mehr als 100.000 Euro im laufenden Jahr ab dem Umsatz, der die Grenze übersteigt. Haben Sie im Vorjahr mehr als 25.000 Euro erzielt, gilt sie im Folgejahr nicht.",
          "**Steuernummer und Umsatzsteuer Identifikationsnummer klären:** Rechnungen brauchen die passende Angabe.",
          "**Rechnungsvorlagen umstellen:** Umsatzsteuer ausweisen, Hinweis auf die Befreiung entfernen, Preise gegebenenfalls anpassen.",
          "**Buchhaltung anpassen:** Steuerkonten, Vorsteuer, Umsatzsteuervoranmeldung.",
          "**Kunden informieren:** Besonders Geschäftskunden fragen nach Rechnungen mit Umsatzsteuer.",
          "**Meldefristen notieren:** Voranmeldungen haben feste Termine.",
        ),
        p("Die beste Vorbereitung ist ein Testlauf: Erstellen Sie in der Software eine Rechnung im Regelbesteuerungsmodus und prüfen Sie, ob alle Angaben stimmen. So sehen Sie, ob der Wechsel im Alltag funktioniert."),
        p("Mehr zur Auswahl von Programmen für Gründer finden Sie im Ratgeber [Buchhaltungssoftware für Startups und Gründer](/ratgeber/buchhaltungssoftware-fuer-startups-gruender)."),
      ],
    },
  ],
  checklist: [
    "Wie hoch war unser Gesamtumsatz im Vorjahr, netto und nach Zahlungseingang?",
    "Wo stehen wir im laufenden Jahr im Verhältnis zu 100.000 Euro?",
    "Zeigt die Software Umsätze nach Zahlungseingang und warnt vor den Grenzen?",
    "Setzt sie den Hinweis auf die Steuerbefreiung automatisch auf jede Rechnung?",
    "Wie lässt sich unterjährig auf Regelbesteuerung umstellen?",
    "Ist die Umsatzsteuervoranmeldung im Tarif enthalten, falls wir wechseln?",
    "Können wir E-Rechnungen empfangen, lesen und aufbewahren?",
    "Lohnt sich ein Verzicht, und kennen wir die Bindung von fünf Kalenderjahren?",
  ],
  faq: [
    { q: "Wie hoch sind die Grenzen der Kleinunternehmerregelung?", a: "Seit dem 1. Januar 2025 darf der Gesamtumsatz im Vorjahr 25.000 Euro nicht überschreiten und im laufenden Jahr höchstens 100.000 Euro betragen (§ 19 UStG). Beide Werte sind Nettobeträge." },
    { q: "Gelten die Grenzen brutto oder netto?", a: "Netto. Maßgeblich ist der Umsatz ohne Umsatzsteuer. Bis 2024 galt eine Bruttogrenze." },
    { q: "Was passiert, wenn ich im laufenden Jahr über 100.000 Euro komme?", a: "Die Befreiung endet sofort. Der Umsatz, mit dem die Grenze überschritten wird, ist bereits steuerpflichtig. Vorherige Umsätze bleiben steuerfrei. Für das Folgejahr zählt dann Ihr Vorjahresumsatz." },
    { q: "Muss ich als Kleinunternehmer E-Rechnungen ausstellen?", a: "Nein. Sie dürfen weiter sonstige Rechnungen wie PDF verwenden (§ 34a UStDV). Empfangen müssen Sie E-Rechnungen aber seit dem 1. Januar 2025 können." },
    { q: "Darf ich trotzdem Umsatzsteuer ausweisen?", a: "Bei Anwendung der Regelung nicht. Die Umsätze sind steuerfrei. Wer Umsatzsteuer gesondert ausweist, riskiert steuerliche Folgen. Klären Sie das vorab mit der Steuerberatung." },
    { q: "Kann ich auf die Kleinunternehmerregelung verzichten?", a: "Ja. Der Verzicht ist gegenüber dem Finanzamt zu erklären, unwiderruflich und bindet mindestens fünf Kalenderjahre (§ 19 Absatz 3 UStG). Prüfen Sie die Folgen genau, bevor Sie verzichten." },
  ],
  sources: [
    { label: "§ 19 UStG: Besteuerung der Kleinunternehmer", url: "https://www.gesetze-im-internet.de/ustg_1980/__19.html" },
    { label: "§ 34a UStDV: Rechnungen von Kleinunternehmern", url: "https://www.gesetze-im-internet.de/ustdv_1980/__34a.html" },
    { label: "IHK Köln: Kleinunternehmerregelung, das ändert sich 2025", url: "https://www.ihk.de/koeln/hauptnavigation/recht-steuern/steuern/kleinunternehmer-im-umsatzsterrecht-5695056" },
    { label: "IHK Nord Westfalen: Kleinunternehmerregelung 2025", url: "https://www.ihk.de/nordwestfalen/steuern/kleinunternehmerregleung-2025-6412924" },
    { label: "Lexware Office: Preise und Versionen", url: "https://www.lexware.de/preise/" },
    { label: "Sage Active: Pakete", url: "https://www.sage.com/de-de/produkte/sage-active/" },
    { label: "Billomat: Preise", url: "https://www.billomat.com/preise/" },
    { label: "FastBill: Preise", url: "https://www.fastbill.com/preise" },
  ],
  related: ["lexware-office", "fastbill", "billomat", "sage-active"],
  relatedGuides: ["gobd-aufbewahrungsfristen-belege-digitalisieren", "e-rechnung-pflicht-fristen-software", "buchhaltungssoftware-fuer-startups-gruender"],
};
