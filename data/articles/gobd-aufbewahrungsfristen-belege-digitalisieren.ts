import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Rechtsstand: 13. Oktober 2026. Die GoBD sind ein Schreiben der Finanzverwaltung, das mehrfach geändert wurde. Dieser Ratgeber fasst die Grundregeln zusammen und ersetzt keine Steuerberatung.",
  keyTakeaways: [
    "Die GoBD beschreiben, wie Bücher, Aufzeichnungen und Belege in elektronischer Form geführt werden müssen: nachvollziehbar, vollständig, richtig, zeitgerecht, geordnet und unveränderbar.",
    "Die Aufbewahrungsfristen betragen zehn Jahre für Bücher, Jahresabschlüsse und Inventare, acht Jahre für Buchungsbelege und sechs Jahre für Geschäftsbriefe und sonstige steuerlich relevante Unterlagen (§ 147 Abgabenordnung).",
    "Die Frist beginnt mit dem Schluss des Kalenderjahres, in dem die Unterlage entstanden ist. Sie läuft nicht ab, solange die Unterlagen für noch offene Steuerfestsetzungen gebraucht werden.",
    "Bei einer Außenprüfung darf die Finanzverwaltung Einsicht in die Daten nehmen, eine maschinelle Auswertung verlangen oder Daten in einem auswertbaren Format fordern (§ 147 Absatz 6).",
    "Eine Verfahrensdokumentation beschreibt, wie Ihr Betrieb Belege erfasst, bucht und archiviert. Sie ist die wichtigste Unterlage, wenn jemand Ihre Abläufe prüft.",
  ],
  sections: [
    {
      heading: "Was die GoBD sind und wen sie betreffen",
      blocks: [
        p("Die Abkürzung steht für „Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff“. Es handelt sich um ein Schreiben des Bundesfinanzministeriums, das die Anforderungen an die elektronische Buchführung bündelt. Die aktuelle Fassung geht auf das Schreiben vom 28. November 2019 zurück und wurde seither mehrfach angepasst, nach unserem Stand zuletzt mit dem Schreiben vom 14. Juli 2025."),
        p("Betroffen sind alle, die Bücher oder Aufzeichnungen für Steuerzwecke führen: GmbH, UG, Einzelunternehmer, Freiberufler, die ihre Einnahmen und Ausgaben aufzeichnen. Ob Sie mit einem Programm, einer Tabelle oder Papier arbeiten, ändert nichts an den Grundsätzen. Je digitaler Ihr Ablauf ist, desto wichtiger wird jedoch die Frage, ob Ihre Daten **unverändert, vollständig und auffindbar** bleiben."),
      ],
    },
    {
      heading: "Die Grundsätze in einfacher Sprache",
      blocks: [
        table("Die wichtigsten Anforderungen und was sie im Alltag bedeuten", ["Grundsatz", "Was er verlangt", "Im Alltag"], [
          ["Nachvollziehbarkeit und Nachprüfbarkeit", "Ein sachverständiger Dritter kann Abläufe in angemessener Zeit nachvollziehen.", "Jeder Buchung ist ein Beleg zugeordnet, Änderungen werden protokolliert."],
          ["Vollständigkeit", "Geschäftsvorfälle werden lückenlos erfasst.", "Keine Belege verlieren, Kontoauszüge und Kasse lückenlos."],
          ["Richtigkeit", "Angaben stimmen mit dem tatsächlichen Vorgang überein.", "Betrag, Datum und Leistung sind korrekt gebucht."],
          ["Zeitgerechtheit", "Erfassung zeitnah zum Vorgang.", "Orientierung: unbare Vorgänge innerhalb weniger Tage, Kasse täglich."],
          ["Ordnung", "Belege lassen sich systematisch finden.", "Ablage nach klaren Regeln, Suchfunktion im Programm."],
          ["Unveränderbarkeit", "Einträge dürfen nicht unbemerkt geändert werden.", "Korrekturen als Gegenbuchung oder mit Protokoll, keine stille Überschreibung."],
        ], "Zusammenfassung der Grundsätze der GoBD. Die Auslegung im Einzelfall klärt Ihre Steuerberatung."),
        p("Zur Zeitgerechtheit nennen Kammern und DATEV als Orientierung, dass unbare Geschäftsvorfälle innerhalb von zehn Tagen erfasst sein sollten. Wer periodisch bucht, etwa monatlich, muss durch organisatorische Vorkehrungen sicherstellen, dass Belege bis zur Buchung vollständig bleiben. Kassenvorgänge sollen täglich aufgezeichnet werden."),
      ],
    },
    {
      heading: "Aufbewahrungsfristen von sechs, acht und zehn Jahren",
      blocks: [
        p("Welche Unterlage wie lange aufbewahrt werden muss, regelt § 147 der Abgabenordnung. Seit 2025 gilt für Buchungsbelege eine kürzere Frist als zuvor: Das Vierte Bürokratieentlastungsgesetz hat sie von zehn auf acht Jahre gesenkt."),
        table("Aufbewahrungsfristen nach § 147 Abgabenordnung", ["Frist", "Unterlagen"], [
          ["10 Jahre", "Bücher und Aufzeichnungen, Inventare, Jahresabschlüsse, Lageberichte, die Eröffnungsbilanz sowie die zu ihrem Verständnis nötigen Arbeitsanweisungen und Organisationsunterlagen"],
          ["8 Jahre", "Buchungsbelege, zum Beispiel Rechnungen, Kassenbelege und Kontoauszüge"],
          ["6 Jahre", "Empfangene Handels- und Geschäftsbriefe, Wiedergaben abgesandter Handels- und Geschäftsbriefe, sonstige Unterlagen, soweit sie für die Besteuerung von Bedeutung sind"],
        ], "Stand der Rechtslage: Oktober 2026. Für Unternehmen des Finanzsektors gelten abweichende Regelungen."),
        h3("Wann die Frist beginnt und warum sie länger laufen kann"),
        p("Die Frist beginnt mit dem Schluss des Kalenderjahres, in dem die Unterlage entstanden ist oder die letzte Eintragung gemacht wurde. Eine Rechnung vom 15. Mai 2026 muss also bis zum Ende des Jahres 2034 aufbewahrt werden. Die Frist läuft zudem nicht ab, solange die Unterlagen für Steuern gebraucht werden, deren Festsetzungsfrist noch läuft. Im Streitfall ist es deshalb sinnvoll, Unterlagen nicht am ersten Tag nach Fristende zu löschen."),
        p("Für Rechnungen regelt § 14b des Umsatzsteuergesetzes zusätzlich: Die Frist beträgt acht Jahre und beginnt mit dem Schluss des Kalenderjahres der Rechnungsausstellung. Während der gesamten Zeit muss die Rechnung ihre Herkunft belegen, unverändert und lesbar sein. Bei E-Rechnungen bleibt die strukturierte Datei maßgeblich, mehr dazu im Ratgeber [E-Rechnung Pflicht](/ratgeber/e-rechnung-pflicht-fristen-software)."),
        achtung("Lohnunterlagen und Verträge", "Für Lohnkonten, Verträge und Arbeitsverhältnisse gelten teilweise andere Fristen. Klären Sie diese mit Ihrer Steuerberatung, bevor Sie Personalunterlagen löschen."),
      ],
    },
    {
      heading: "Belege digitalisieren: Was erlaubt ist",
      blocks: [
        p("Viele Betriebe möchten Papier loswerden. Das ist grundsätzlich möglich, wenn der Ablauf geregelt und dokumentiert ist. Man spricht vom **ersetzenden Scannen**: Das Papieroriginal wird bildlich erfasst, die digitale Fassung ersetzt es anschließend. Entscheidend ist, dass das Bild dem Original entspricht, lesbar ist und unverändert bleibt."),
        ol(
          "**Belege vollständig erfassen:** Vorder und Rückseite, wenn dort Angaben stehen, mehrseitige Dokumente zusammenhängend.",
          "**Lesbarkeit prüfen:** Ein unscharfes Foto genügt nicht. Qualität und Auflösung müssen die Inhalte sicher wiedergeben.",
          "**Ordnungsmerkmal vergeben:** Jeder Beleg erhält eine eindeutige Zuordnung, am besten automatisch und mit Datum der Erfassung.",
          "**Unveränderbar speichern:** Das Archiv muss Änderungen verhindern oder protokollieren.",
          "**Vernichtung regeln:** In der Verfahrensdokumentation legen Sie fest, wann und wer Papieroriginale vernichtet. Dokumente mit Urkundencharakter bewahren viele Betriebe weiterhin im Original auf.",
        ),
        tipp("Keine Fotos in der privaten Galerie", "Belege, die als Foto auf einem privaten Smartphone liegen, sind keine ordentliche Ablage. Nutzen Sie die App Ihrer Buchhaltungssoftware, die den Beleg direkt in das Archiv überträgt und zuordnet."),
      ],
    },
    {
      heading: "Die Verfahrensdokumentation: Ihr wichtigster Nachweis",
      blocks: [
        p("Wer Bücher oder Aufzeichnungen führt, soll beschreiben, wie das geschieht. Die GoBD sprechen von einer **Verfahrensdokumentation**. Sie zeigt, welche Verfahren Sie nutzen, wer wofür zuständig ist und wie Belege und Daten verarbeitet werden. Die Anforderungen stehen in den GoBD ab Randnummer 151. Die IHK nennt als typische Bestandteile Systembeschreibungen, Arbeitsanweisungen, Beschreibungen der Kontrollen und der Archivierung."),
        table("Bausteine einer einfachen Verfahrensdokumentation", ["Baustein", "Inhalt"], [
          ["Überblick", "Welche Programme und Geräte werden genutzt? Wer ist zuständig?"],
          ["Belegeingang", "Wie kommen Rechnungen und Quittungen an: Papier, E-Mail, App?"],
          ["Erfassung und Buchung", "Wer erfasst, wer prüft, wie wird gebucht?"],
          ["Archivierung", "Wo liegen Daten, wer hat Zugriff, wie lange werden sie aufbewahrt?"],
          ["Kontrollen", "Abstimmung mit Bank und Kasse, Prüfung auf Vollständigkeit"],
          ["Änderungen", "Wie werden Fehler korrigiert und protokolliert?"],
          ["Sicherung und Datenschutz", "Sicherungen, Zugriffsrechte, Verträge mit Dienstleistern"],
        ]),
        fakt("Klein anfangen ist erlaubt", "Für kleine Betriebe genügen wenige Seiten, die den tatsächlichen Ablauf beschreiben. Wichtig ist, dass der Text stimmt und aktuell bleibt. Eine Vorlage hilft, ersetzt aber nicht die Anpassung an Ihren Betrieb."),
      ],
    },
    {
      heading: "Der Datenzugriff bei einer Außenprüfung",
      blocks: [
        p("Sind Unterlagen mit einem Datenverarbeitungssystem erstellt worden, darf die Finanzverwaltung bei einer Außenprüfung nach § 147 Absatz 6 der Abgabenordnung auf drei Wegen auf die Daten zugreifen:"),
        ul(
          "**Einsicht:** Sie nimmt Einsicht in die gespeicherten Daten und nutzt das System zur Prüfung.",
          "**Maschinelle Auswertung:** Sie verlangt, dass Daten nach ihren Vorgaben ausgewertet zur Verfügung gestellt werden.",
          "**Datenübertragung:** Sie verlangt, dass Daten in einem maschinell auswertbaren Format an sie übertragen werden.",
        ),
        p("Für Ihre Software heißt das: Sie sollte Daten in prüfbaren Formaten exportieren können, etwa als strukturierte Dateien mit Beschreibung. Fragen Sie den Anbieter, welche Exportformate es gibt und ob die Belege mit den Buchungen verknüpft bleiben. Auch nach Vertragsende müssen Sie die Daten noch lesen können. Der Ratgeber [Softwarevertrag prüfen](/ratgeber/softwarevertrag-pruefen-laufzeit-daten-ausstieg) nennt die Fragen für den Ausstieg."),
      ],
    },
    {
      heading: "Was Buchhaltungssoftware leisten sollte",
      blocks: [
        table("Prüfpunkte für GoBD taugliche Software", ["Prüfpunkt", "Worauf Sie achten"], [
          ["Belegerfassung", "App, E-Mail oder Upload, mit automatischer Zuordnung zur Buchung"],
          ["Unveränderbarkeit", "Gebuchte Daten sind festgeschrieben, Änderungen werden protokolliert"],
          ["Protokoll", "Wer hat wann was geändert, einsehbar für die Steuerberatung"],
          ["Archiv und Suche", "Belege sind auffindbar, auch Jahre später"],
          ["Export", "Exportformate für Steuerberatung und Betriebsprüfung, zum Beispiel DATEV"],
          ["E-Rechnung", "Strukturierte Dateien werden im Original gespeichert"],
          ["Zugriff der Kanzlei", "Direkter Zugriff oder regelmäßiger Export"],
          ["Datenhaltung", "Ort der Speicherung, Verträge, Sicherungen"],
        ]),
        p("Was die geprüften Herstellerquellen im Katalog belegen: [FastBill](/software/buchhaltung/fastbill) nennt Belege, Banking und einen Export für DATEV. [Sage Active](/software/buchhaltung/sage-active) bietet im Paket Essentials den Export im DATEV Format, beide Pakete einen Zugang für externe Buchhalter. Bei [Billomat](/software/buchhaltung/billomat) steht DATEVconnect laut Tariftabelle erst ab dem Paket Business zur Verfügung. [Lexware Office](/software/buchhaltung/lexware-office) verwaltet Belege ab Stufe S. Ob und wie ein Programm die GoBD im Detail erfüllt, bestätigen die Hersteller selbst oder Ihre Steuerberatung. Wir bewerten das nicht."),
      ],
    },
    {
      heading: "Ein Beispiel: Der Weg einer Rechnung vom Eingang bis zum Archiv",
      blocks: [
        p("Die Grundsätze werden greifbar, wenn man einen Beleg begleitet. Das folgende Beispiel zeigt, wie eine Eingangsrechnung in einem kleinen Betrieb behandelt werden kann. Es ist ein Muster und ersetzt nicht Ihre eigene Verfahrensdokumentation."),
        table("Eine Eingangsrechnung von der Ankunft bis zur Archivierung", ["Schritt", "Was geschieht", "Warum es wichtig ist"], [
          ["1. Eingang", "Die Rechnung kommt per E-Mail an eine zentrale Adresse oder wird per App fotografiert.", "Jeder Beleg läuft über denselben Weg, nichts liegt in privaten Postfächern."],
          ["2. Erfassung", "Die Software legt den Beleg ab, liest Daten aus und vergibt ein Ordnungsmerkmal.", "Der Beleg ist eindeutig zugeordnet und mit Datum der Erfassung versehen."],
          ["3. Prüfung", "Eine Person prüft Leistung, Betrag und Steuer und gibt zur Zahlung frei.", "Richtigkeit und Zuständigkeit sind nachvollziehbar."],
          ["4. Buchung", "Der Beleg wird gebucht und mit der Zahlung verknüpft.", "Buchung und Beleg sind miteinander verbunden."],
          ["5. Festschreibung", "Nach Abschluss des Zeitraums sind die Buchungen festgeschrieben.", "Spätere Änderungen sind nur als protokollierte Korrektur möglich."],
          ["6. Archiv", "Beleg und Buchung liegen unveränderbar im Archiv und sind durchsuchbar.", "Die Unterlagen stehen für die Dauer der Aufbewahrung bereit."],
          ["7. Löschung", "Nach Ablauf der Frist wird der Beleg geprüft und gelöscht, wenn nichts dagegen spricht.", "Das Löschdatum ist dokumentiert."],
        ]),
        p("Jeder dieser Schritte gehört in die Verfahrensdokumentation: wer ihn ausführt, womit und mit welcher Kontrolle. Auch kleine Betriebe können dies auf einer Seite beschreiben."),
      ],
    },
    {
      heading: "Betriebsprüfung vorbereiten",
      blocks: [
        p("Eine Außenprüfung kündigt sich in der Regel an. Wer vorbereitet ist, spart Zeit und Nerven. Die folgenden Punkte lassen sich das ganze Jahr über erledigen und nehmen der Prüfung die Dramatik:"),
        ol(
          "**Verfahrensdokumentation aktuell halten:** Sie spiegelt den tatsächlichen Ablauf, nicht den Zustand von vor drei Jahren.",
          "**Zugang für die Prüfung klären:** Wer richtet im Fall der Fälle Zugriffe ein, und wer begleitet?",
          "**Exporte testen:** Probieren Sie vorab, ob Sie Buchungen, Belege und Stammdaten in einem auswertbaren Format ausgeben können.",
          "**Berechtigungen prüfen:** Nur die nötigen Daten sind zugänglich, besonders bei Datenzugriff über das System.",
          "**Belege vollständig halten:** Offene Posten, fehlende Belege und Eigenbelege sind dokumentiert.",
          "**Fristen im Blick:** Unterlagen, deren Fristen noch laufen, werden nicht gelöscht.",
          "**Ansprechperson bestimmen:** Ihre Steuerberatung weiß Bescheid und kennt Ihren Ablauf.",
          "**Software Updates dokumentieren:** Änderungen am System, die Buchungen betreffen, sind nachvollziehbar.",
        ),
        tipp("Üben Sie den Export einmal im Jahr", "Prüfen Sie jährlich, ob Sie alle Daten des Vorjahres exportieren können, inklusive Belege. Wenn das einmal im Jahr klappt, funktioniert es auch im Ernstfall."),
      ],
    },
    {
      heading: "Typische Fehler und ein Plan für den Anfang",
      blocks: [
        ul(
          "**Belege auf privaten Geräten:** Fotos in der Galerie oder in Messengern sind kein Archiv.",
          "**Ablage ohne Regeln:** Ohne feste Benennung und Zuordnung fehlt die Nachprüfbarkeit.",
          "**Stilles Überschreiben:** Wer Dateien ändert statt zu korrigieren, verletzt die Unveränderbarkeit.",
          "**Keine Verfahrensdokumentation:** Sie wird erst gefragt, wenn es eilt.",
          "**Zu früh löschen:** Fristen beginnen am Jahresende und können sich verlängern.",
          "**Wechsel ohne Datenübernahme:** Beim Programmwechsel gehören Belege, Buchungen und Protokolle in den neuen Bestand oder in ein lesbares Archiv.",
        ),
        ol(
          "Legen Sie fest, wie Belege künftig ankommen: Postfach für E-Mails, App, Scanner.",
          "Nutzen Sie eine Software, die Belege den Buchungen zuordnet und Änderungen protokolliert.",
          "Schreiben Sie eine kurze Verfahrensdokumentation und halten Sie sie aktuell.",
          "Stimmen Sie mit der Steuerberatung Formate und Zugriffe ab.",
          "Notieren Sie Aufbewahrungsfristen und prüfen Sie einmal im Jahr, was gelöscht werden darf.",
        ),
      ],
    },
  ],
  checklist: [
    "Wie kommen Belege bei uns an, und wo werden sie gespeichert?",
    "Sind gebuchte Daten festgeschrieben, und werden Änderungen protokolliert?",
    "Gibt es eine Verfahrensdokumentation, die dem tatsächlichen Ablauf entspricht?",
    "Welche Aufbewahrungsfristen gelten für unsere Unterlagen, und wer prüft sie jährlich?",
    "Können wir Daten für eine Außenprüfung in einem auswertbaren Format exportieren?",
    "Wie werden E-Rechnungen im Original gespeichert?",
    "Welche Zugriffe hat die Steuerberatung?",
    "Was geschieht mit Belegen und Protokollen, wenn wir die Software wechseln?",
  ],
  faq: [
    { q: "Wie lange muss ich Rechnungen aufbewahren?", a: "Acht Jahre. Rechnungen sind Buchungsbelege, für die seit 2025 die kürzere Frist von acht statt zehn Jahren gilt. Sie beginnt mit dem Ende des Kalenderjahres, in dem die Rechnung ausgestellt wurde (§ 147 Abgabenordnung, § 14b UStG)." },
    { q: "Was gilt für Bücher und Jahresabschlüsse?", a: "Bücher, Aufzeichnungen, Inventare, Jahresabschlüsse, Lageberichte und die Eröffnungsbilanz bewahren Sie zehn Jahre auf. Dazu gehören die Arbeitsanweisungen und Organisationsunterlagen, die zu ihrem Verständnis nötig sind." },
    { q: "Darf ich Papierbelege nach dem Scannen vernichten?", a: "Unter Bedingungen ja: Der Scan muss dem Original entsprechen, lesbar und unveränderbar archiviert sein, und der Ablauf muss in der Verfahrensdokumentation stehen. Bei Dokumenten mit Urkundencharakter bewahren viele Betriebe das Original weiter auf. Klären Sie das mit Ihrer Steuerberatung." },
    { q: "Brauche ich eine Verfahrensdokumentation?", a: "Die GoBD verlangen, dass Buchführungs und Aufzeichnungspflichtige ihre Verfahren beschreiben können. In der Praxis ist eine kurze, gepflegte Verfahrensdokumentation die beste Vorsorge für eine Prüfung." },
    { q: "Was darf die Finanzverwaltung bei einer Prüfung verlangen?", a: "Bei Daten aus einem Datenverarbeitungssystem darf sie Einsicht nehmen, eine maschinelle Auswertung verlangen oder die Übertragung der Daten in einem auswertbaren Format fordern (§ 147 Absatz 6 Abgabenordnung)." },
    { q: "Ist eine Excel Tabelle GoBD konform?", a: "Eine Tabelle kann genutzt werden, wenn Unveränderbarkeit und Nachvollziehbarkeit sichergestellt sind. Das ist mit Tabellenkalkulation schwierig, weil Zellen unbemerkt überschrieben werden können. Mehr dazu im Ratgeber [Excel ablösen](/ratgeber/excel-abloesen-wann-tabellen-zum-risiko-werden)." },
  ],
  sources: [
    { label: "§ 147 Abgabenordnung: Ordnungsvorschriften für die Aufbewahrung von Unterlagen", url: "https://www.gesetze-im-internet.de/ao_1977/__147.html" },
    { label: "§ 14b UStG: Aufbewahrung von Rechnungen", url: "https://www.gesetze-im-internet.de/ustg_1980/__14b.html" },
    { label: "IHK Nordschwarzwald: GoBD, Führung und Aufbewahrung von Büchern und Unterlagen", url: "https://www.ihk.de/nordschwarzwald/recht/steuerrecht/verfahrensrecht/fuehrung-und-aufbewahrung-von-buechern-unterlagen-4493466" },
    { label: "IHK Darmstadt: GoBD, was ist zu tun", url: "https://www.ihk.de/darmstadt/produktmarken/recht-und-fair-play/steuerinfo/steuerverfahren/gobd-was-ist-zu-tun--3699342" },
    { label: "DATEV: Häufigste Fragen zu den GoBD", url: "https://www.datev.de/content/dam/markenassets/themen-und-produktgruppen/zielgruppen/zielgruppenuebergreifend/gobd/faqs_gobd_2020.pdf" },
    { label: "BMF: GoBD, zweite Änderung (14. Juli 2025)", url: "https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Weitere_Steuerthemen/Abgabenordnung/2025-07-14-GoBD-2-aenderung.pdf?__blob=publicationFile&v=4" },
  ],
  related: ["fastbill", "sage-active", "billomat", "lexware-office", "sevdesk"],
  relatedGuides: ["e-rechnung-pflicht-fristen-software", "kleinunternehmerregelung-grenzen-rechnung-software", "softwarevertrag-pruefen-laufzeit-daten-ausstieg"],
};
