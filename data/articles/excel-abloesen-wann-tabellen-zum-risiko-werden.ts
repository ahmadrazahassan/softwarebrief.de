import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Preise sind Listenpreise der Hersteller zum Stand 25. und 27. September 2026, netto und ohne Aktionen.",
  keyTakeaways: [
    "Tabellen sind schnell gebaut und lange nützlich. Zum Risiko werden sie, wenn mehrere Personen dieselben Daten pflegen, Zahlen Entscheidungen tragen oder Nachweise nötig sind.",
    "Die wichtigsten Warnzeichen: doppelte Erfassung, mehrere Dateiversionen, Wissen in einem Kopf, unklare Zugriffe und Auswertungen, denen niemand traut.",
    "Beginnen Sie nicht mit der größten Tabelle, sondern mit der Aufgabe, bei der ein Fehler am teuersten wäre: Rechnungen und Buchhaltung, Lohn oder Kundendaten.",
    "Ein Umstieg gelingt in Etappen: Aufgabe auswählen, Daten bereinigen, parallel arbeiten, Verantwortliche festlegen, dann abschalten.",
    "Excel bleibt für Analysen und Planung ein gutes Werkzeug. Es sollte nur nicht die Datenbank Ihres Betriebs sein.",
  ],
  sections: [
    {
      heading: "Warum Excel so lange funktioniert",
      blocks: [
        p("Es gibt gute Gründe, warum Betriebe Tabellen nutzen. Sie sind flexibel, jeder kennt sie, sie kosten kaum etwas, und man kann ein Problem in einer Stunde lösen. Für Planung, Kalkulation und Auswertung bleibt Tabellenkalkulation ein hervorragendes Werkzeug. Das Problem beginnt, wenn eine Tabelle zur **Datenbank** wird: Wenn Kunden, Aufträge, Bestände oder Zeiten darin leben und mehrere Menschen sie gleichzeitig verändern."),
        p("Eine Tabelle hat keine Regeln. Sie verhindert nicht, dass jemand einen Preis überschreibt, eine Formel löscht oder eine Zeile doppelt anlegt. Sie speichert nicht, wer wann was geändert hat. Und sie kennt keine Rechte: Wer die Datei öffnen darf, sieht alles. Solange eine Person die Tabelle pflegt, ist das beherrschbar. Mit jeder weiteren Person wächst das Risiko."),
      ],
    },
    {
      heading: "Zehn Warnzeichen",
      blocks: [
        table("Wenn mehrere Antworten ja lauten, lohnt sich der Umstieg", ["Frage", "Was dahinter steckt"], [
          ["Pflegen mehrere Personen dieselbe Datei?", "Gleichzeitige Änderungen führen zu überschriebenen Daten oder Kopien."],
          ["Gibt es mehrere Versionen mit Namen wie „final“ oder „neu“?", "Niemand weiß, welche Version stimmt."],
          ["Wird dieselbe Information an mehreren Stellen eingegeben?", "Doppelte Erfassung erzeugt Fehler und kostet Zeit."],
          ["Versteht nur eine Person die Formeln?", "Ein Ausfall stoppt den Ablauf."],
          ["Lässt sich nicht nachvollziehen, wer was geändert hat?", "Fehler bleiben unentdeckt, Nachweise fehlen."],
          ["Sehen alle alles, oder verschickt ihr Dateien per E-Mail?", "Rechte und Datenschutz sind nicht geregelt."],
          ["Dauern Auswertungen Tage?", "Zahlen werden von Hand zusammengetragen."],
          ["Misstrauen Sie den Zahlen?", "Entscheidungen beruhen auf Bauchgefühl, nicht auf Daten."],
          ["Gibt es Aufgaben, die niemand mehr anfasst?", "Die Tabelle ist zu komplex geworden."],
          ["Wächst die Datei, und sie wird langsam?", "Die Grenze der Technik rückt näher."],
        ]),
        tipp("Machen Sie den Test im Team", "Lassen Sie drei Personen unabhängig voneinander die Fragen beantworten. Unterschiedliche Antworten sind selbst ein Warnzeichen: Dann herrscht kein gemeinsames Bild vom Zustand der Daten."),
      ],
    },
    {
      heading: "Welche Risiken wirklich teuer werden",
      blocks: [
        table("Typische Risiken und ihre Folgen", ["Risiko", "Beispiel", "Folge"], [
          ["Rechenfehler und Überschreiben", "Eine Formel wird versehentlich durch eine Zahl ersetzt.", "Falsche Preise, falsche Rechnungen"],
          ["Fehlende Nachvollziehbarkeit", "Niemand weiß, wer einen Betrag geändert hat.", "Streit mit Kunden, Probleme bei Prüfungen"],
          ["Wissen in einem Kopf", "Die Person, die die Datei gebaut hat, fällt aus.", "Abläufe stehen"],
          ["Datenschutz", "Dateien mit Kundendaten oder Gehältern werden per E-Mail verschickt.", "Verstoß gegen Vorgaben, Reputationsrisiko"],
          ["Fehlende Rechte", "Alle sehen alle Daten.", "Vertrauliche Informationen werden offen"],
          ["Skalierung", "Mehr Kunden, mehr Aufträge, mehr Mitarbeitende.", "Der Aufwand wächst schneller als der Betrieb"],
        ]),
        achtung("Buchhaltung, Lohn und Zeiterfassung sind besonders sensibel", "Für Bücher und Aufzeichnungen verlangen die Grundsätze zur ordnungsmäßigen Buchführung Unveränderbarkeit und Nachvollziehbarkeit. Das lässt sich in einer Tabelle schwer sicherstellen, weil Zellen unbemerkt überschrieben werden können. Mehr dazu im Ratgeber [GoBD und Aufbewahrungsfristen](/ratgeber/gobd-aufbewahrungsfristen-belege-digitalisieren). Auch für die Arbeitszeit gilt: Die Aufzeichnung muss vollständig und nachprüfbar sein, siehe [Arbeitszeiterfassung Pflicht](/ratgeber/arbeitszeiterfassung-pflicht-software-auswahl)."),
      ],
    },
    {
      heading: "Womit Sie beginnen sollten",
      blocks: [
        p("Der Fehler vieler Umstiegsprojekte ist, die größte oder komplizierteste Tabelle zuerst anzugehen. Besser ist die Aufgabe, bei der **ein Fehler am teuersten** wäre und die zugleich gut abgrenzbar ist. Bewerten Sie jede Tabelle mit zwei Fragen: Wie oft wird sie benutzt? Wie teuer wäre ein Fehler?"),
        table("Welche Aufgabe zuerst in eine Software gehört", ["Aufgabe", "Typische Tabelle", "Passende Software", "Beispiele aus dem Katalog"], [
          ["Rechnungen, Belege, Buchhaltung", "Rechnungsliste, Ausgabenliste", "Buchhaltungssoftware", "[Lexware Office](/software/buchhaltung/lexware-office) ab 7,90 €, [FastBill](/software/buchhaltung/fastbill) ab 10 €, [Sage Active](/software/buchhaltung/sage-active) ab 25 € im Monat"],
          ["Lohn und Gehalt", "Gehaltsliste", "Lohnsoftware oder Steuerberatung", "[Sage Payroll](/software/lohnabrechnung/sage-payroll) 20 € für fünf Beschäftigte, [Lexware Lohn und Gehalt](/software/lohnabrechnung/lexware-office-lohn-gehalt) ab 12,90 €"],
          ["Kundendaten und Angebote", "Kontaktliste, Angebotsliste", "CRM", "[CentralStationCRM](/software/crm/centralstationcrm) bis 3 Nutzer kostenlos, [HubSpot](/software/crm/hubspot-sales-hub) kostenloser Einstieg"],
          ["Arbeitszeit und Abwesenheit", "Zeitliste, Urlaubsplan", "Zeiterfassung und Personalsoftware", "[Sage HR](/software/hr/sage-hr) Basis 4,50 € je Person, Zeit 2,50 € dazu"],
          ["Aufträge, Lager, Einkauf", "Bestandsliste, Auftragsliste", "Warenwirtschaft oder ERP", "[weclapp](/software/erp/weclapp) ab 39 € je Nutzer, [Xentral](/software/erp/xentral) Launch ab 99 €"],
        ], "Preise sind Listenpreise (Stand 25. und 27. September 2026). Bei Xentral kommen 0,30 € je Auftrag hinzu."),
        p("In den meisten Betrieben beginnt der Umstieg bei **Rechnungen und Buchhaltung**, weil dort gesetzliche Anforderungen gelten und ein Fehler sofort Folgen hat. Danach folgen Kundendaten, Zeit und Aufträge."),
      ],
    },
    {
      heading: "Der Umstieg in Etappen",
      blocks: [
        ol(
          "**Aufgabe festlegen:** Eine einzige Aufgabe pro Etappe, mit Verantwortlichem und Zieldatum.",
          "**Tabelle analysieren:** Welche Spalten werden wirklich genutzt? Welche Regeln stecken in Formeln? Was passiert manuell?",
          "**Anforderungen formulieren:** Nur das, was die Tabelle heute leistet, plus das, was sie nicht kann: Rechte, Protokoll, Kollaboration.",
          "**Zwei Programme testen:** Mit echten Daten und einem echten Ablauf.",
          "**Daten bereinigen:** Dubletten entfernen, Schreibweisen vereinheitlichen, alte Datensätze archivieren.",
          "**Importieren und parallel arbeiten:** Ein bis zwei Wochen beide Systeme führen und Ergebnisse vergleichen.",
          "**Abschalten:** Die Tabelle wird schreibgeschützt und archiviert, nicht mehr gepflegt.",
        ),
        h3("Was beim Import schiefgeht"),
        ul(
          "Spalten mit gemischtem Inhalt, etwa Telefonnummer und Notiz in einer Zelle.",
          "Datumsangaben in unterschiedlichen Formaten.",
          "Namen und Firmen mit abweichender Schreibweise, die doppelt angelegt werden.",
          "Formeln, die beim Import verloren gehen. Exportieren Sie Ergebnisse als Werte.",
        ),
        fakt("Excel als Brücke", "Die meisten Programme importieren Daten aus Tabellen und exportieren sie wieder. Planen Sie den Weg in beide Richtungen: Sie sollten Ihre Daten jederzeit wieder herausbekommen. Prüfen Sie den Export vor dem Kauf."),
      ],
    },
    {
      heading: "Was Excel weiterhin gut kann",
      blocks: [
        p("Der Ausstieg aus Tabellen ist kein Verbot. Viele Aufgaben bleiben dort richtig aufgehoben:"),
        ul(
          "**Kalkulationen und Szenarien:** Preise, Budgets, Prognosen.",
          "**Auswertungen:** Daten aus der Software exportieren und in einer Tabelle analysieren.",
          "**Einmalige Aufgaben:** Aktionen, Projekte, Auswertungen mit begrenzter Dauer.",
          "**Entwürfe:** Eine Struktur skizzieren, bevor sie in ein System übernommen wird.",
        ),
        p("Die Regel lautet: **Daten, die laufend gepflegt und von mehreren genutzt werden, gehören in ein System. Auswertungen und Szenarien dürfen in der Tabelle leben.**"),
      ],
    },
    {
      heading: "Drei Tabellen und ihr Weg in die Software",
      blocks: [
        p("Allgemeine Ratschläge helfen wenig, wenn die eigene Tabelle gemeint ist. Die folgenden drei Beispiele zeigen, wie typische Dateien aussehen und was beim Umstieg passiert."),
        h3("Die Rechnungsliste"),
        p("Eine Tabelle mit laufender Nummer, Kunde, Betrag und Zahlstatus ist die häufigste Keimzelle der Buchhaltung. Sie funktioniert, solange Rechnungen als Dokumente woanders entstehen. Probleme beginnen, wenn die Liste zur Grundlage für Umsatzsteuer, Mahnungen und Steuerberatung wird. Dann fehlen Belege, Zahlungen müssen von Hand abgeglichen werden, und niemand kann belegen, dass nachträglich nichts geändert wurde. Der Weg führt zu einer Buchhaltungssoftware, die Rechnungen erzeugt, mit der Bank abgleicht und der Kanzlei einen Zugang oder Export bietet. Wie Sie dabei vorgehen, zeigt der Ratgeber [Buchhaltungssoftware für Startups und Gründer](/ratgeber/buchhaltungssoftware-fuer-startups-gruender)."),
        h3("Die Kundenliste"),
        p("Kontakte mit Notizen, letztem Gespräch und nächstem Schritt gehören zu den Daten, die am schnellsten veralten. Zwei Personen pflegen dieselbe Firma mit unterschiedlicher Schreibweise, eine Notiz steht nur im Kopf des Vertriebs. Ein CRM hilft, aber nur mit klaren Phasen und einer Person, die Regeln durchsetzt. Beim Import sind Dubletten und Schreibweisen das Hauptproblem. Beginnen Sie mit aktiven Kunden und offenen Chancen und lassen Sie alte Datensätze zunächst draußen."),
        h3("Die Liste für Bestand und Aufträge"),
        p("Bei Händlern und Handwerkern wächst die Tabelle zur Warenwirtschaft: Artikel, Bestand, Lieferanten, Aufträge. Hier sind Fehler besonders teuer, denn falsche Bestände führen zu Fehlkäufen und verpassten Lieferungen. Ein ERP oder eine Warenwirtschaft verbindet Auftrag, Lager und Rechnung. Der Umstieg ist aufwendig, weil Artikelstammdaten sauber sein müssen. Planen Sie die Datenbereinigung als eigenes Teilprojekt."),
      ],
    },
    {
      heading: "Was es kostet, Excel zu behalten",
      blocks: [
        p("Software kostet Geld, die Tabelle scheinbar nicht. Die Rechnung ist trotzdem nicht null: Sie zahlen mit Arbeitszeit, mit Fehlern und mit dem Risiko, dass Wissen verloren geht. Sie können die Kosten selbst abschätzen."),
        table("Rechenschema für die verdeckten Kosten einer Tabelle", ["Posten", "So rechnen Sie", "Beispielrechnung"], [
          ["Doppelte Erfassung", "Stunden pro Woche × Stundensatz × 52", "3 Stunden × 40 € × 52 = 6.240 € im Jahr"],
          ["Fehlersuche und Korrektur", "Stunden pro Monat × Stundensatz × 12", "4 Stunden × 40 € × 12 = 1.920 € im Jahr"],
          ["Auswertungen von Hand", "Stunden pro Monat × Stundensatz × 12", "6 Stunden × 40 € × 12 = 2.880 € im Jahr"],
          ["Summe der Arbeitszeit", "Summe der Posten", "11.040 € im Jahr"],
        ], "Das Beispiel ist erfunden und dient nur zur Veranschaulichung der Rechnung. Setzen Sie Ihre eigenen Stunden und Ihren eigenen Stundensatz ein."),
        p("Die Zahlen Ihres Betriebs fallen anders aus. Entscheidend ist der Vergleich: Würde ein Programm für 20 bis 100 Euro im Monat einen relevanten Teil dieser Zeit sparen? Dazu kommen Risiken, die sich schwer beziffern lassen, etwa ein falscher Preis in einem Angebot oder ein Ausfall der Person, die die Tabelle versteht."),
      ],
    },
    {
      heading: "Wenn Sie Tabellen behalten: Regeln für den Rest",
      blocks: [
        p("Nicht jede Tabelle muss ersetzt werden. Für die, die bleiben, helfen einige Regeln, das Risiko zu senken:"),
        ul(
          "**Eine Quelle der Wahrheit:** Pro Datensatz gibt es genau eine Datei oder ein System. Kopien sind nur Auswertungen.",
          "**Zentrale Ablage mit Versionierung:** Speichern Sie die Datei in einem geteilten Ordner mit Versionsverlauf, nicht auf einzelnen Rechnern oder in E-Mail Anhängen.",
          "**Schutz für Formeln:** Sperren Sie Zellen mit Formeln und schützen Sie Blätter, damit nichts versehentlich überschrieben wird.",
          "**Klare Zuständigkeit:** Eine Person pflegt die Struktur, andere tragen nur Daten ein.",
          "**Zugriffsrechte:** Dateien mit sensiblen Daten liegen in Ordnern mit eingeschränkten Rechten.",
          "**Dokumentation:** Ein Blatt beschreibt Zweck, Spalten, Formeln und Verantwortliche.",
          "**Regelmäßige Prüfung:** Einmal im Quartal stimmen Sie Summen mit einer zweiten Quelle ab, zum Beispiel mit dem Kontoauszug.",
        ),
      ],
    },
    {
      heading: "Der Faktor Mensch",
      blocks: [
        p("Der Umstieg scheitert selten an der Technik, sondern an Gewohnheiten. Wer jahrelang eine eigene Tabelle gepflegt hat, gibt Kontrolle ab. Das fühlt sich zunächst wie Mehrarbeit an. Drei Dinge helfen:"),
        ul(
          "**Beteiligen:** Lassen Sie die Menschen, die die Tabelle pflegen, bei der Auswahl mitreden. Sie kennen die Sonderfälle.",
          "**Nutzen zeigen:** Zeigen Sie konkret, was besser wird, zum Beispiel weniger Doppelarbeit oder schnellere Auswertung.",
          "**Verantwortung klären:** Eine Person kümmert sich um Regeln, Felder und Fragen. Ohne Zuständigkeit verfällt jedes System.",
        ),
        p("Ein ähnliches Muster zeigt sich bei der Einführung von Kundenmanagement. Wie Sie typische Fehler vermeiden, beschreibt der Ratgeber [CRM einführen: Neun typische Fehler](/ratgeber/crm-einfuehrung-fehler-vermeiden). Beim ERP hilft der Ratgeber [ERP auswählen im Mittelstand](/ratgeber/erp-auswahl-mittelstand-schritt-fuer-schritt)."),
      ],
    },
  ],
  checklist: [
    "Welche Tabellen tragen heute Entscheidungen oder Nachweise?",
    "Wie viele Personen pflegen dieselbe Datei, und wie vermeiden wir Überschreiben?",
    "Wo sind die Daten am schwierigsten zu ersetzen, wenn sie verloren gehen?",
    "Mit welcher Aufgabe beginnen wir, und wer ist verantwortlich?",
    "Können wir Daten aus der neuen Software wieder in einem gängigen Format exportieren?",
    "Haben wir Daten bereinigt, bevor wir sie importieren?",
    "Wie lange arbeiten wir parallel, und wann schalten wir die Tabelle ab?",
    "Wer pflegt Regeln und Felder im neuen System?",
  ],
  faq: [
    { q: "Wann sollte ich Excel durch eine Software ersetzen?", a: "Wenn mehrere Personen dieselben Daten pflegen, Fehler teuer werden, Nachweise nötig sind oder Auswertungen Tage dauern. Je mehr Warnzeichen zutreffen, desto dringender wird der Umstieg." },
    { q: "Ist eine Buchhaltung in Excel erlaubt?", a: "Grundsätzlich können Aufzeichnungen in Tabellen geführt werden. Sie müssen aber nachvollziehbar, vollständig und unveränderbar sein. Das ist mit Tabellenkalkulation schwierig. Klären Sie das mit Ihrer Steuerberatung. Mehr dazu im Ratgeber zu GoBD." },
    { q: "Was kostet der Umstieg?", a: "Das hängt von der Aufgabe ab. Einstiegstarife liegen bei Buchhaltung ab 7,90 Euro, bei CRM kostenlos bis zu wenigen Nutzern, bei Personal ab 4,50 Euro je Person im Monat. Dazu kommen Zeit für Einrichtung und Datenbereinigung." },
    { q: "Welche Daten sollte ich zuerst übernehmen?", a: "Aktive Datensätze: laufende Kunden, offene Rechnungen, aktuelle Mitarbeitende. Archivieren Sie alte Datensätze getrennt und übernehmen Sie sie nur bei Bedarf." },
    { q: "Kann ich beides parallel nutzen?", a: "Ja, für kurze Zeit. Arbeiten Sie ein bis zwei Wochen in beiden Systemen und vergleichen Sie. Dann schalten Sie die Tabelle ab, damit nicht dauerhaft doppelt gepflegt wird." },
    { q: "Brauche ich dafür ein ERP?", a: "Nicht unbedingt. Oft reichen einzelne Programme für Buchhaltung, Kundendaten und Zeit. Ein ERP lohnt sich, wenn mehrere Bereiche eng zusammenarbeiten, zum Beispiel Auftrag, Lager und Rechnung." },
  ],
  sources: [
    { label: "Lexware Office: Preise und Versionen", url: "https://www.lexware.de/preise/" },
    { label: "FastBill: Preise", url: "https://www.fastbill.com/preise" },
    { label: "Sage Payroll: Preise", url: "https://www.sage.com/de-de/sage-business-cloud/lohnabrechnung/preis/" },
    { label: "CentralStationCRM: Pakete", url: "https://centralstationcrm.de/plans" },
    { label: "Sage HR: Modulpreise", url: "https://www.sage.com/de-de/sage-business-cloud/hr/" },
    { label: "weclapp: Preise", url: "https://www.weclapp.com/de/preise/" },
    { label: "Xentral: Preise", url: "https://xentral.com/de/preise" },
    { label: "§ 147 Abgabenordnung: Aufbewahrung von Unterlagen", url: "https://www.gesetze-im-internet.de/ao_1977/__147.html" },
  ],
  related: ["lexware-office", "sage-payroll", "centralstationcrm", "sage-hr", "weclapp"],
  relatedGuides: ["vertrieb-von-tabellen-ins-crm", "gobd-aufbewahrungsfristen-belege-digitalisieren", "erp-auswahl-mittelstand-schritt-fuer-schritt"],
};
