import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Rechtsstand: 13. Oktober 2026. Der Entwurf des Bundesarbeitsministeriums wurde nach Berichten vom 1. Oktober 2026 noch innerhalb der Bundesregierung abgestimmt und ist nicht in Kraft. Prüfen Sie den aktuellen Stand beim Ministerium. Dieser Ratgeber ersetzt keine Rechtsberatung.",
  keyTakeaways: [
    "Arbeitgeber müssen Beginn, Ende und Dauer der täglichen Arbeitszeit erfassen. Das folgt aus dem Beschluss des Bundesarbeitsgerichts vom 13. September 2022 (1 ABR 22/21) und gilt auch ohne neues Gesetz.",
    "Eine bestimmte Form schreibt das Gericht nicht vor. Elektronisch oder schriftlich ist möglich, entscheidend sind Vollständigkeit und Nachprüfbarkeit.",
    "Ein Entwurf des Bundesarbeitsministeriums, bekannt seit dem 18. Juni 2026, sieht dagegen eine elektronische Erfassung am Tag der Arbeitsleistung vor, mit gestaffelten Übergangsfristen. Er ist nicht in Kraft und wird noch abgestimmt.",
    "Vertrauensarbeitszeit bleibt möglich, befreit aber nicht von der Erfassung.",
    "Zeiterfassung und Schichtplanung sind zwei Aufgaben. Prüfen Sie beide getrennt, bevor Sie ein Programm wählen.",
  ],
  sections: [
    {
      heading: "Die Rechtslage heute",
      blocks: [
        p("Die Pflicht zur Arbeitszeiterfassung ist kein Zukunftsthema. Der Europäische Gerichtshof hat 2019 im sogenannten Stechuhr Urteil verlangt, dass Mitgliedstaaten Arbeitgeber zu einem System verpflichten, das die tägliche Arbeitszeit erfasst. Das Bundesarbeitsgericht hat daraus 2022 für Deutschland eine klare Folge gezogen: Arbeitgeber sind schon nach geltendem Recht verpflichtet, ein System zur Erfassung der Arbeitszeit einzuführen. Das Gericht leitet die Pflicht aus dem Arbeitsschutzgesetz ab, in der Auslegung nach Europarecht."),
        table("Was nach dem Beschluss des Bundesarbeitsgerichts gilt", ["Frage", "Antwort"], [
          ["Was muss erfasst werden?", "Beginn, Ende und damit die Dauer der täglichen Arbeitszeit, einschließlich Überstunden. Nach Hinweisen der Kammern gehören auch Pausen dazu."],
          ["In welcher Form?", "Weder der Beschluss noch das Arbeitsschutzgesetz schreiben eine Form vor. Elektronische und schriftliche Systeme sind möglich."],
          ["Wer führt die Erfassung?", "Die Erfassung darf an Beschäftigte delegiert werden. Der Arbeitgeber muss sie aber sicherstellen und zum Beispiel durch Stichproben kontrollieren."],
          ["Für wen gilt sie?", "Grundsätzlich für alle Arbeitnehmer. Für leitende Angestellte dürfte sie nach Auffassung der Kammern nicht gelten."],
          ["Was folgt bei Verstößen?", "Ein Verstoß ist nicht unmittelbar bußgeldbewehrt. Befolgt ein Arbeitgeber eine Anordnung der Behörde nicht, drohen nach Hinweisen der Kammern bis zu 30.000 Euro."],
        ], "Nach den Hinweisen der Industrie und Handelskammern zum Beschluss 1 ABR 22/21 vom 13. September 2022."),
        p("Eine Ausnahme für kleine Betriebe sieht dieser Weg nicht vor, denn das Arbeitsschutzgesetz kennt keine Mindestgröße. Wer einen oder zwei Beschäftigte hat, sollte also dieselben Grundregeln beachten wie ein Betrieb mit hundert. Der Unterschied liegt im Aufwand, nicht in der Pflicht."),
      ],
    },
    {
      heading: "Was der Gesetzentwurf vorsieht",
      blocks: [
        p("Seit Jahren wird darüber gesprochen, die Pflicht ausdrücklich im Arbeitszeitgesetz zu regeln. Das Bundesarbeitsministerium hat im Juni 2026 einen Entwurf vorgelegt, der am 18. Juni 2026 bekannt wurde. Als Termin für das Inkrafttreten nennt das Handwerksblatt den 1. Januar 2027. Nach den Berichten vom 1. Juli und vom 1. Oktober 2026 befindet sich der Entwurf noch in der Abstimmung innerhalb der Bundesregierung. Danach folgen Kabinett, Bundestag und Bundesrat. Es sind also noch Änderungen möglich."),
        table("Geplante Regelungen laut Berichten zum Entwurf (nicht in Kraft, Stand der Berichte: 1. Juli und 1. Oktober 2026)", ["Punkt", "Vorgesehen"], [
          ["Aufzeichnung", "Beginn, Ende und Dauer der täglichen Arbeitszeit, grundsätzlich elektronisch und am Tag der Arbeitsleistung."],
          ["Übergangsfristen", "Gestaffelt nur für die elektronische Form: Betriebe unter 250 Beschäftigten etwa zwei Jahre, Betriebe unter 50 Beschäftigten bis zu fünf Jahre. Die Berichte nennen für einzelne Größenklassen leicht abweichende Fristen."],
          ["Kleinstbetriebe", "Betriebe mit bis zu zehn Beschäftigten sollen die Arbeitszeit aufzeichnen, aber nicht elektronisch erfassen müssen."],
          ["Vertrauensarbeitszeit", "Bleibt möglich. Arbeitgeber müssen aber sicherstellen, dass sie Verstöße gegen Arbeitszeit und Ruhezeit erkennen."],
          ["Höchstarbeitszeit", "Über Tarifverträge soll eine wöchentliche statt einer täglichen Höchstarbeitszeit möglich werden. Betriebe ohne Tarifbindung bleiben beim gesetzlichen Achtstundentag."],
        ], "Die Angaben stammen aus Fachberichten, nicht aus einem beschlossenen Gesetz. Maßgeblich ist der Gesetzestext, sobald er beschlossen ist."),
        achtung("Nicht auf das Gesetz warten", "Die Pflicht besteht heute. Ein neues Gesetz würde sie nur konkretisieren. Wer jetzt ein System auswählt, das elektronisch, tagesaktuell und nachprüfbar erfasst, ist auf beide Fälle vorbereitet."),
      ],
    },
    {
      heading: "Weitere Pflichten, die schon gelten",
      blocks: [
        p("Neben der allgemeinen Erfassungspflicht gibt es Vorschriften, die bestimmte Daten verlangen und Aufbewahrung regeln. Die folgenden Regeln betreffen viele Betriebe, unabhängig vom Gesetzentwurf."),
        ul(
          "**Höchstarbeitszeit und Ruhezeit:** Das Arbeitszeitgesetz begrenzt die tägliche Arbeitszeit und verlangt eine ununterbrochene Ruhezeit nach Arbeitsende. Eine Software sollte Verstöße anzeigen, bevor sie entstehen.",
          "**Aufzeichnung von Mehrarbeit:** Nach § 16 Absatz 2 Arbeitszeitgesetz sind Aufzeichnungen über Arbeitszeit, die über acht Stunden hinausgeht, mindestens zwei Jahre aufzubewahren.",
          "**Minijobs und bestimmte Branchen:** Nach § 17 Mindestlohngesetz sind Beginn, Ende und Dauer der täglichen Arbeitszeit bei geringfügig Beschäftigten und in bestimmten Branchen zeitnah aufzuzeichnen und zwei Jahre aufzubewahren.",
          "**Mitbestimmung:** Besteht ein Betriebsrat, ist er bei Einführung von Systemen zur Zeiterfassung zu beteiligen (§ 87 Betriebsverfassungsgesetz).",
        ),
        p("Welche Regeln für Ihren Betrieb gelten, hängt von Branche, Tarifvertrag und Beschäftigungsart ab. Klären Sie das mit einer Fachperson für Arbeitsrecht oder mit Ihrem Verband."),
      ],
    },
    {
      heading: "Wie die Erfassung im Alltag aussieht",
      blocks: [
        p("Die Wahl des Systems hängt von der Arbeitsweise ab. Ein Büroteam am Rechner erfasst anders als ein Betrieb mit Außendienst, Baustellen oder Schichten."),
        table("Erfassungswege im Vergleich", ["Weg", "Eignet sich für", "Worauf Sie achten"], [
          ["Browser", "Büroarbeitsplätze", "Einfache Eingabe, Erinnerungen, Korrekturen mit Begründung"],
          ["Mobile App", "Außendienst, Baustelle, Homeoffice", "Offline Erfassung, Standortfreigaben nur mit Zustimmung, Datenschutz"],
          ["Terminal oder Karte", "Produktion, Lager, Empfang", "Hardwarekosten, Anbindung, Ausfallplan"],
          ["Projektzeit", "Dienstleister mit Abrechnung nach Stunden", "Zuordnung zu Kunden und Aufträgen, Export für die Rechnung"],
        ]),
        p("Eine gute Software erfasst nicht nur, sie macht Fehler sichtbar. Fehlende Buchungen, zu lange Tage, unterschrittene Ruhezeiten und offene Korrekturen sollten in einer Übersicht erscheinen, damit Führungskräfte reagieren können, bevor die Lohnabrechnung ansteht."),
      ],
    },
    {
      heading: "Was eine Software können muss",
      blocks: [
        table("Prüfpunkte für die Auswahl", ["Prüfpunkt", "Warum er zählt"], [
          ["Beginn, Ende und Pausen", "Die Grunddaten, die das Bundesarbeitsgericht verlangt."],
          ["Korrekturen mit Nachweis", "Änderungen sollen nachvollziehbar bleiben: wer, wann, warum."],
          ["Freigaben", "Führungskräfte bestätigen Zeiten, bevor sie in die Abrechnung gehen."],
          ["Warnungen", "Hinweise bei langen Tagen, fehlender Ruhezeit oder Überstunden."],
          ["Abwesenheiten", "Urlaub, Krankheit und Feiertage fließen automatisch ein."],
          ["Auswertungen", "Überstundenkonten, Salden und Berichte für Betriebsrat und Behörden."],
          ["Export", "Übergabe an die Lohnabrechnung ohne Abtippen."],
          ["Rollen und Datenschutz", "Wer sieht welche Zeiten? Wie lange werden Daten gespeichert?"],
          ["Aufbewahrung", "Aufzeichnungen müssen mindestens so lange vorliegen, wie Vorschriften es verlangen."],
        ]),
        tipp("Spielen Sie eine Woche durch", "Lassen Sie sich in der Demo eine echte Arbeitswoche zeigen: reguläre Tage, ein Überstundentag, ein Krankheitstag, ein Feiertag und eine nachträgliche Korrektur. So sehen Sie, ob das System Ihre Regeln abbildet."),
      ],
    },
    {
      heading: "Zeiterfassung oder Schichtplanung",
      blocks: [
        p("Beide Begriffe tauchen in Prospekten gemeinsam auf, lösen aber verschiedene Probleme. **Zeiterfassung** dokumentiert, was gearbeitet wurde. **Schichtplanung** legt fest, wer wann arbeiten soll, und berücksichtigt Verfügbarkeiten, Qualifikationen, Tausch und Vertretung. Ein Programm kann das eine gut und das andere nur oberflächlich."),
        ul(
          "Ein Büroteam mit festen Zeiten braucht meist nur Erfassung, Abwesenheiten und Freigaben.",
          "Ein Betrieb mit wechselnden Diensten braucht zusätzlich Planung mit Regeln, damit Ruhezeiten und Höchstgrenzen im Plan eingehalten werden.",
          "Wenn beides gebraucht wird, prüfen Sie, ob es im gleichen Tarif liegt oder als Zusatz berechnet wird.",
        ),
        p("Der Ratgeber [Zeiterfassung und Schichtplanung getrennt bewerten](/ratgeber/zeiterfassung-und-schichtplanung) vertieft diese Unterscheidung."),
      ],
    },
    {
      heading: "Programme im Katalog: Was die Herstellerquellen belegen",
      blocks: [
        p("In der Funktionsmatrix von Softwarebrief gilt „Zeiterfassung“ nur, wenn eine Herstellerquelle sie belegt. Das Ergebnis für Programme aus dem Bereich Personal:"),
        table("Zeiterfassung und Schichtplanung laut Herstellerangaben", ["Programm", "Was belegt ist", "Preislogik"], [
          ["[Sage HR](/software/hr/sage-hr)", "Zeitmodul mit projektbezogenen Arbeitszeittabellen, Arbeitsmustern und Freigaben, Schichtmodul mit Vertretungen und Regeln zur Arbeitszeit.", "Basis 4,50 € je Person und Monat, Zeit und Schichten je 2,50 € dazu. Test über 30 Tage ohne Zahlungsdaten."],
          ["[Kenjo](/software/hr/kenjo)", "Starter mit Zeit, Urlaub, Dokumenten und Schichtplanung.", "Kein veröffentlichter Euro Listenpreis, Angebot nötig."],
          ["[Personio](/software/hr/personio)", "Core mit Profilen, Dokumenten, Berichten, Workflows und Zeit.", "Auf Anfrage, abhängig von Beschäftigten und Apps."],
          ["[HR WORKS](/software/hr/hr-works)", "Personalverwaltung, Zeiterfassung, Abwesenheiten, Reisekosten.", "Monatsgebühr aus Grundgebühr und Lizenzen, kein Listenbetrag."],
          ["[Factorial](/software/hr/factorial)", "Zeitfunktionen als wählbares Modul.", "Einstieg ab 8 € je Nutzer und Monat, Gesamtpreis abhängig von Modulen."],
          ["[Sage Payroll](/software/lohnabrechnung/sage-payroll)", "Ab Standard Arbeitszeiten und Überstunden, ab Premium Schichtplanung.", "Standard 30 €, Premium 40 € im Monat inklusive fünf Beschäftigter."],
        ], "Stand der Herstellerangaben: 25. und 27. September 2026. Prüfen Sie Funktionen im Tarif, den Sie buchen würden."),
        p("Die Programme unterscheiden sich weniger in der Frage, ob sie Zeiten erfassen, sondern in der **Tiefe**: Regeln, Warnungen, Planung, Auswertungen. Vergleichen Sie sie deshalb direkt im [Vergleich von Personalsoftware](/vergleich?produkte=sage-hr,kenjo,personio,factorial)."),
      ],
    },
    {
      heading: "Typische Situationen im Betrieb",
      blocks: [
        p("Die Pflicht klingt einfach, die Praxis verlangt Antworten auf konkrete Fälle. Die folgenden Situationen kommen in kleinen und mittleren Betrieben regelmäßig vor:"),
        table("Fälle aus der Praxis und mögliche Lösungen", ["Situation", "Herausforderung", "Mögliche Lösung"], [
          ["Büro mit festen Zeiten", "Wenig Aufwand, aber Pausen und Überstunden werden vergessen", "Erfassung im Browser mit Erinnerung, Freigabe durch Führungskraft"],
          ["Außendienst und Baustelle", "Kein fester Arbeitsplatz, wechselnde Orte", "Mobile App mit Offline Erfassung, nachträgliche Korrektur mit Begründung"],
          ["Homeoffice und mobiles Arbeiten", "Arbeitszeit ist schwer sichtbar", "Selbsterfassung mit klaren Regeln und Stichproben durch Vorgesetzte"],
          ["Schichtbetrieb", "Wechselnde Dienste, Tausch, Ruhezeiten", "Planung mit Regeln und Warnungen, Erfassung am Terminal oder in der App"],
          ["Teilzeit und geringfügig Beschäftigte", "Zusätzliche Aufzeichnungspflichten", "Erfassung mit Export, Aufbewahrung beachten"],
          ["Projektarbeit mit Abrechnung nach Stunden", "Zeit muss Kunden und Aufträgen zugeordnet werden", "Projektzeiterfassung mit Export für die Rechnung"],
        ]),
        p("Je unterschiedlicher die Situationen in Ihrem Betrieb sind, desto wichtiger ist ein System, das mehrere Wege erlaubt. Eine Lösung, die nur am Terminal funktioniert, hilft dem Außendienst nicht. Eine Lösung nur in der App überfordert Beschäftigte ohne Smartphone."),
        h3("Ein Kostenbeispiel für 20 Beschäftigte"),
        p("Am Beispiel von Sage HR lässt sich die Preislogik nachrechnen. Die Basis kostet 4,50 Euro je Beschäftigtem und Monat, das Zeitmodul 2,50 Euro, die Schichtplanung weitere 2,50 Euro. Die Hersteller nennen dazu zwei Beispielpakete mit 7,00 Euro (Basis mit Zeit) und 9,50 Euro (Basis mit Zeit und Schichten) je Person."),
        table("Monatliche Listenpreise Sage HR bei 20 Beschäftigten (netto)", ["Paket", "Preis je Person", "Rechnung", "Im Monat"], [
          ["Basis", "4,50 €", "20 × 4,50 €", "90 €"],
          ["Basis mit Zeit", "7,00 €", "20 × 7,00 €", "140 €"],
          ["Basis mit Zeit und Schichten", "9,50 €", "20 × 9,50 €", "190 €"],
        ], "Stand der Herstellerangaben: 27. September 2026. Recruiting und Spesen sind nicht eingerechnet. Eine Lohnabrechnung ist nicht enthalten."),
        p("Das Beispiel zeigt, dass die Kosten mit der Beschäftigtenzahl und den gebuchten Modulen steigen. Rechnen Sie deshalb immer mit der Zahl, die Sie in zwölf Monaten erwarten, und mit den Modulen, die Sie tatsächlich brauchen."),
      ],
    },
    {
      heading: "Datenschutz und Betriebsrat",
      blocks: [
        p("Arbeitszeitdaten sind Beschäftigtendaten. Das bedeutet: Sie dürfen nur für den Zweck genutzt werden, für den sie erhoben wurden, und nur von den Personen eingesehen werden, die sie brauchen. Bei Standortdaten in mobilen Apps ist besondere Zurückhaltung nötig. Klären Sie, ob sie wirklich erforderlich sind und wie Beschäftigte sie nachvollziehen können."),
        ul(
          "Schließen Sie mit dem Anbieter einen Vertrag zur Auftragsverarbeitung.",
          "Legen Sie fest, wie lange Zeitdaten gespeichert werden und wer sie löschen darf.",
          "Binden Sie den Betriebsrat früh ein, falls es einen gibt.",
          "Informieren Sie Beschäftigte, was erfasst wird und warum.",
        ),
        p("Vertiefende Hinweise finden Sie im Ratgeber [Digitale Personalakte und DSGVO](/ratgeber/digitale-personalakte-dsgvo-personalsoftware)."),
      ],
    },
    {
      heading: "Einführung in vier Wochen",
      blocks: [
        ol(
          "**Woche 1:** Arbeitsweise aufnehmen (Orte, Zeiten, Schichten, Sonderfälle) und Regeln festhalten, etwa Pausen und Zuschläge.",
          "**Woche 2:** Zwei Programme mit einer Gruppe testen, die echte Abläufe abbildet. Betriebsrat und Datenschutz einbinden.",
          "**Woche 3:** Entscheidung, Einrichtung, Schulung der Führungskräfte, Pilotgruppe starten.",
          "**Woche 4:** Auswertung des Piloten, Korrekturen am Ablauf, Start für alle Beschäftigten.",
        ),
        fakt("Warum der Pilot wichtig ist", "Die meisten Probleme zeigen sich nicht in der Demo, sondern am zweiten Arbeitstag: vergessene Buchungen, unklare Pausen, Korrekturen am Monatsende. Ein kurzer Pilot kostet wenig und spart Ärger."),
      ],
    },
  ],
  checklist: [
    "Wird Beginn, Ende und Dauer der Arbeitszeit für alle Beschäftigten erfasst?",
    "Wer kontrolliert die Erfassung, und wie oft gibt es Stichproben?",
    "Welche Erfassungswege nutzen wir: Browser, App, Terminal?",
    "Zeigt die Software Verstöße gegen Ruhezeit und Höchstarbeitszeit an?",
    "Sind Korrekturen nachvollziehbar protokolliert?",
    "Gibt es einen Export in unsere Lohnabrechnung?",
    "Gibt es einen Vertrag zur Auftragsverarbeitung, und wie lange werden Daten gespeichert?",
    "Ist der Betriebsrat eingebunden, falls vorhanden?",
  ],
  faq: [
    { q: "Muss ich als Arbeitgeber die Arbeitszeit erfassen?", a: "Ja. Nach dem Beschluss des Bundesarbeitsgerichts vom 13. September 2022 müssen Arbeitgeber ein System einführen, das Beginn, Ende und Dauer der täglichen Arbeitszeit erfasst. Die Pflicht ergibt sich aus dem Arbeitsschutzgesetz und gilt unabhängig von einem neuen Gesetz." },
    { q: "Genügt eine Excel Tabelle?", a: "Das Gericht schreibt keine Form vor, deshalb sind auch schriftliche oder tabellarische Systeme denkbar. Sie müssen vollständig, nachprüfbar und gegen nachträgliche Änderungen geschützt sein. Bei mehr als wenigen Beschäftigten ist eine Software praktischer. Ein Gesetzentwurf sieht künftig eine elektronische Erfassung vor." },
    { q: "Gilt die Pflicht auch bei Vertrauensarbeitszeit?", a: "Ja. Vertrauensarbeitszeit bleibt erlaubt, befreit aber nicht von der Erfassung. Es geht darum, dass die geleistete Arbeitszeit dokumentiert wird, nicht darum, dass Vorgesetzte Anwesenheit kontrollieren." },
    { q: "Wie lange müssen Arbeitszeitdaten aufbewahrt werden?", a: "Für Arbeitszeit über acht Stunden am Tag verlangt § 16 Absatz 2 Arbeitszeitgesetz mindestens zwei Jahre Aufbewahrung. Das Mindestlohngesetz nennt für bestimmte Gruppen ebenfalls zwei Jahre. Zum Entwurf liegen uns dazu keine gesicherten Angaben vor." },
    { q: "Was passiert, wenn ich nichts tue?", a: "Ein Verstoß ist nach Auskunft der Kammern nicht unmittelbar bußgeldbewehrt. Ordnet die Behörde die Erfassung an und befolgen Sie das nicht, drohen Bußgelder bis zu 30.000 Euro. Unabhängig davon fehlen Ihnen im Streit um Überstunden belastbare Nachweise." },
    { q: "Brauche ich Zeiterfassung oder Schichtplanung?", a: "Zeiterfassung dokumentiert die geleistete Arbeitszeit. Schichtplanung legt künftige Einsätze fest. Betriebe mit festen Zeiten brauchen meist nur die Erfassung, Betriebe mit wechselnden Diensten zusätzlich eine Planung mit Regeln." },
  ],
  sources: [
    { label: "IHK Rhein Neckar: Arbeitszeiterfassung, Pflicht und Gesetzesstand", url: "https://www.ihk.de/rhein-neckar/recht/arbeitsrecht/arbeitszeiterfassung-5631422" },
    { label: "IHK Berlin: Arbeitszeiterfassungspflicht für Arbeitgeber", url: "https://www.ihk.de/berlin/service-und-beratung/recht-und-steuern/arbeitsrecht/arbeitszeiterfasung-5666426" },
    { label: "Arbeitszeitgesetz, § 16: Aufzeichnung und Aufbewahrung", url: "https://www.gesetze-im-internet.de/arbzg/__16.html" },
    { label: "Mindestlohngesetz, § 17: Erfassung und Bereithaltung von Dokumenten", url: "https://www.gesetze-im-internet.de/milog/__17.html" },
    { label: "Arbeitsschutzgesetz, § 3: Grundpflichten des Arbeitgebers", url: "https://www.gesetze-im-internet.de/arbschg/__3.html" },
    { label: "Betriebsverfassungsgesetz, § 87: Mitbestimmungsrechte", url: "https://www.gesetze-im-internet.de/betrvg/__87.html" },
    { label: "Handwerksblatt: Neues Arbeitszeitgesetz, das steht drin (1. Juli 2026)", url: "https://www.handwerksblatt.de/themen-specials/arbeitszeit-erfassen-aber-wie/neues-arbeitszeitgesetz-das-steht-drin" },
    { label: "Handwerksblatt: Elektronische Zeiterfassung wird Pflicht, aber nicht für Kleinbetriebe (1. Oktober 2026)", url: "https://www.handwerksblatt.de/themen-specials/arbeitszeit-erfassen-aber-wie/elektronische-erfassung-der-arbeitszeit-wird-pflicht" },
  ],
  related: ["sage-hr", "kenjo", "personio", "hr-works", "factorial"],
  relatedGuides: ["zeiterfassung-und-schichtplanung", "digitale-personalakte-dsgvo-personalsoftware", "hr-software-einfuehren"],
};
