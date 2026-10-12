import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Rechtsstand: 13. Oktober 2026. Preise sind Listenpreise der Hersteller (Stand 25. und 27. September 2026). Dieser Ratgeber ersetzt keine Beratung durch Steuerberatung oder Lohnbüro.",
  keyTakeaways: [
    "Auslagern oder selbst abrechnen ist keine Glaubensfrage. Entscheidend sind Zahl der Beschäftigten, Sonderfälle, Ihre Zeit und die Frage, wer im Fehlerfall reagiert.",
    "Die monatlichen Pflichten sind klar: Abrechnung in Textform, Lohnsteuer Anmeldung bis zum zehnten Tag nach dem Anmeldezeitraum, Beiträge zur Sozialversicherung am drittletzten Bankarbeitstag und Meldungen.",
    "Cloud Lohnsoftware ist für übliche Fälle günstig, schließt aber häufig Baulohn, öffentlichen Dienst und Versorgungsbezüge aus. Lesen Sie die Ausschlüsse vor dem Kauf.",
    "Bei Sage Payroll Essentials steigen die Listenpreise von 20 Euro für fünf Personen auf 65 Euro bei 20 Beschäftigten. Der Preis je Kopf entscheidet, nicht der Grundpreis.",
    "Verantwortlich gegenüber Finanzamt und Sozialversicherung bleiben Sie als Arbeitgeber. Auch bei Auslagerung regeln Sie Zuständigkeiten und Fristen schriftlich.",
  ],
  sections: [
    {
      heading: "Was jeden Monat auf Sie zukommt",
      blocks: [
        p("Die Lohnabrechnung ist das einzige Verfahren in vielen kleinen Betrieben, das jeden Monat in derselben Qualität laufen muss. Fehler zeigen sich nicht bei Ihnen, sondern bei den Beschäftigten, beim Finanzamt und bei der Sozialversicherung. Deshalb lohnt es sich, die Pflichten zu kennen, bevor Sie entscheiden, wer sie erledigt."),
        table("Das monatliche Pflichtprogramm im Überblick", ["Aufgabe", "Was gilt", "Grundlage"], [
          ["Abrechnung erteilen", "Bei der Zahlung des Arbeitsentgelts erhält die beschäftigte Person eine Abrechnung in Textform mit Abrechnungszeitraum, Zusammensetzung des Entgelts und Abzügen.", "§ 108 GewO"],
          ["Lohnsteuer anmelden", "Anmeldung und Zahlung spätestens am zehnten Tag nach Ablauf des Anmeldezeitraums. Grundsätzlich ist das ein Kalendermonat, bei geringer Lohnsteuer ein Quartal oder ein Jahr.", "§ 41a EStG"],
          ["Sozialversicherungsbeiträge zahlen", "Fällig spätestens am drittletzten Bankarbeitstag des Monats, in dem die Beschäftigung ausgeübt wurde, zunächst in voraussichtlicher Höhe.", "§ 23 SGB IV"],
          ["Meldungen abgeben", "An- und Abmeldungen, Jahresmeldungen und weitere Meldungen an die Sozialversicherung.", "§ 28a SGB IV"],
          ["Sofortmeldung", "In bestimmten Branchen wie Baugewerbe, Gastronomie und Beherbergung, Gebäudereinigung, Logistik oder Friseur und Kosmetik spätestens bei Aufnahme der Beschäftigung.", "§ 28a Absatz 4 SGB IV"],
          ["Personalkosten buchen", "Das Ergebnis der Abrechnung fließt in die Buchhaltung.", "Buchführung"],
        ], "Die Tabelle nennt Grundregeln. Fristen und Ausnahmen im Einzelfall klären Sie mit Steuerberatung oder Lohnbüro."),
        p("Dazu kommen Sonderthemen, die selten sind, aber Zeit kosten: Minijobs, Krankheitsmeldungen, Korrekturen für Vormonate, Jahreswechsel, Betriebsprüfungen. Eine gute Lösung deckt sie ab oder sagt ehrlich, wo sie endet."),
      ],
    },
    {
      heading: "Drei Wege im Vergleich",
      blocks: [
        table("Auslagern, selbst abrechnen oder Plattform", ["Kriterium", "Steuerberatung oder Lohnbüro", "Eigene Lohnsoftware", "Lohn in einer Personalplattform"], [
          ["Ihre Arbeit", "Stammdaten und Änderungen melden, Ergebnis prüfen", "Daten pflegen, Lauf prüfen, freigeben, Meldungen kontrollieren", "Stammdaten einmal pflegen, Lauf prüfen und freigeben"],
          ["Fachwissen im Haus", "Wenig nötig", "Grundkenntnis der Lohnfälle nötig", "Grundkenntnis nötig, dazu Verständnis des Gesamtsystems"],
          ["Kosten", "Meist je Abrechnung und Beschäftigtem, plus Einrichtung und Korrekturen", "Grundpreis plus Preis je Beschäftigtem", "Oft Angebot nach Beschäftigtenzahl und Modulen"],
          ["Tempo bei Änderungen", "Abhängig von der Erreichbarkeit der Kanzlei", "Sie entscheiden selbst", "Sie entscheiden selbst"],
          ["Sonderfälle", "Stärke der Fachleute", "Abhängig vom Funktionsumfang", "Abhängig vom Anbieter"],
          ["Verbindung zu Buchhaltung und Zeit", "Über Export und Abstimmung", "Über Schnittstellen", "Im System integriert"],
        ]),
        p("Die Wahl muss nicht endgültig sein. Viele Betriebe starten mit Auslagerung, solange die Fälle selten sind, und holen die Abrechnung später ins Haus. Andere gehen den umgekehrten Weg, wenn ein Sonderfall auftaucht, den die Software ausschließt."),
      ],
    },
    {
      heading: "Wann sich Auslagern lohnt",
      blocks: [
        ul(
          "**Sie haben wenige Beschäftigte und wenig Zeit.** Der Aufwand je Abrechnung ist hoch, wenn Sie nur selten abrechnen und jedes Mal neu einsteigen.",
          "**Sonderfälle treten auf.** Baulohn, Versorgungsbezüge, öffentlicher Dienst, Saisonkräfte oder Auslandseinsätze sind Fälle, die Fachwissen verlangen.",
          "**Ihre Kanzlei übernimmt die Abrechnung ohnehin.** Dann sind Abstimmung und Haftungsfragen einfach geklärt.",
          "**Sie wollen das Risiko begrenzen.** Fachleute kennen aktuelle Änderungen und müssen bei Fehlern einstehen, wenn dies im Vertrag geregelt ist.",
        ),
        achtung("Auslagern heißt nicht, Verantwortung abzugeben", "Gegenüber Finanzamt und Sozialversicherung bleiben Sie als Arbeitgeber verantwortlich. Legen Sie schriftlich fest, wer Daten liefert, bis wann, wer Meldungen kontrolliert und wie Korrekturen laufen."),
      ],
    },
    {
      heading: "Wann sich eigene Software lohnt",
      blocks: [
        ul(
          "**Die Fälle sind üblich:** Gehalt, Stundenlohn, Urlaub, Krankheit, einfache Zuschläge.",
          "**Sie wollen Kontrolle und Tempo:** Änderungen sind sofort im System, Beschäftigte sehen ihre Abrechnungen im Portal.",
          "**Die Kosten je Person bleiben niedrig:** Bei wenigen Beschäftigten sind Cloud Lösungen sehr günstig.",
          "**Sie nutzen bereits ein passendes System:** Wer mit Lexware Office bucht, hat Vorteile bei der Verbuchung der Personalkosten. Wer Sage nutzt, kann Daten für Sage und DATEV exportieren.",
        ),
        p("Dagegen spricht, wenn Sonderfälle zum Alltag gehören oder niemand im Betrieb die Verantwortung übernehmen möchte. Eine Software rechnet korrekt, wenn die Stammdaten stimmen. Sie ersetzt aber nicht die Entscheidung, welcher Fall vorliegt."),
      ],
    },
    {
      heading: "Was eine Lohnsoftware können muss",
      blocks: [
        table("Prüfpunkte für die Auswahl", ["Prüfpunkt", "Worauf Sie achten"], [
          ["Meldungen", "Gesetzliche Meldungen, einschließlich Sofortmeldung, werden elektronisch übermittelt und protokolliert."],
          ["Sonderfälle und Ausschlüsse", "Lesen Sie die Ausschlussliste: Baulohn, öffentlicher Dienst, Betriebsrenten oder Versorgungsbezüge fehlen bei vielen Cloud Paketen."],
          ["Korrekturen", "Rückwirkende Änderungen und Korrekturläufe müssen nachvollziehbar und ohne Neuaufbau möglich sein."],
          ["Mitarbeiterportal", "Beschäftigte rufen Abrechnungen und Dokumente selbst ab. Das spart Versand und Rückfragen."],
          ["Rollen und Rechte", "Wer sieht Gehälter? Das muss sich einstellen lassen."],
          ["Verbindung zur Buchhaltung", "Export für DATEV oder Sage, oder direkte Buchung in das Buchhaltungsprogramm."],
          ["Mehrere Firmen", "Wichtig, wenn Sie mehrere Gesellschaften betreuen."],
          ["Updates", "Gesetzliche Änderungen zum Jahreswechsel müssen automatisch ankommen."],
          ["Support", "Wer hilft bei Rückfragen, und zu welchen Zeiten?"],
        ]),
        tipp("Testen Sie einen echten Monat", "Spielen Sie mit fünf echten Datensätzen einen Monat durch: Eintritt, Austritt, Überstunden, eine Korrektur und eine Krankmeldung. Vergleichen Sie das Ergebnis mit Ihrer bisherigen Abrechnung."),
      ],
    },
    {
      heading: "Was die Programme im Katalog kosten und ausschließen",
      blocks: [
        p("Die folgende Tabelle zeigt die Herstellerangaben, die Softwarebrief geprüft hat. Sie ist eine Orientierung für die ersten Gespräche, kein Preisvergleich mit Aussage über die beste Wahl."),
        table("Lohnabrechnung im Katalog (Listenpreise, netto)", ["Programm", "Preislogik", "Wichtige Grenze"], [
          ["[Sage Payroll](/software/lohnabrechnung/sage-payroll)", "Essentials 20 €, Standard 30 €, Premium 40 € im Monat inklusive fünf Beschäftigter, danach 3 €, 5 € oder 7 € je Person, bis 150 Beschäftigte.", "Baulohn, Betriebsrenten und öffentlicher Dienst sind ausgeschlossen."],
          ["[Lexware Office Lohn und Gehalt](/software/lohnabrechnung/lexware-office-lohn-gehalt)", "Ab 12,90 € im Monat, Staffel nach Mitarbeitenden im Bestellvorgang prüfen.", "Der Hersteller nennt ausgeschlossene Beschäftigungsarten, darunter Baulohn und öffentlicher Dienst."],
          ["[DATEV Lohn und Gehalt classic](/software/lohnabrechnung/datev-lohn-und-gehalt)", "Produktseite ab 15,86 € im Monat, Preisliste 2026 nennt für eine Einer-Netzlizenz 27,20 €. Lizenz, Rechenzentrum und Zusatzdienste einzeln prüfen.", "Lokale Systemumgebung und mehrteilige Preisstruktur erfordern mehr Planung."],
          ["[Agenda Personalwesen](/software/lohnabrechnung/agenda-personalwesen)", "Ab 50 € im Monat plus nutzungsabhängige Kosten, zwölf Monate Mindestlaufzeit.", "Baulohn ist optional. Gesamtkosten hängen von Modulen und Volumen ab."],
          ["[Sage HR und Payroll](/software/lohnabrechnung/sage-hr-payroll)", "Essentials 40 €, Standard 60 €, Premium 80 € im Monat für fünf Beschäftigte, weitere ab 7 €, 9 € oder 11 € je Person.", "Essentials schließt Baulohn, öffentlichen Dienst und Versorgungsbezüge aus."],
          ["[Personio Payroll](/software/lohnabrechnung/personio-payroll)", "Individuelles Angebot nach Beschäftigtenzahl und Apps.", "Sinnvoll vor allem, wenn Personio ohnehin Ihr Personalsystem ist."],
        ], "Quellen und Prüfdatum stehen im jeweiligen Profil. Aktionen und Zusatzmodule sind nicht eingerechnet."),
        h3("Rechenbeispiel: Sage Payroll nach Teamgröße"),
        table("Monatliche Listenpreise Sage Payroll in Abhängigkeit von der Zahl der Beschäftigten", ["Beschäftigte", "Essentials", "Standard", "Premium"], [
          ["5", "20 €", "30 €", "40 €"],
          ["10", "35 €", "55 €", "75 €"],
          ["20", "65 €", "105 €", "145 €"],
        ], "Rechenweg: Grundpreis für fünf Personen plus Aufpreis je weiterer Person (3 €, 5 € und 7 €). Beispiel Essentials bei 20 Personen: 20 € + 15 × 3 € = 65 €."),
        p("Die Staffel zeigt, warum der Preis je Kopf entscheidet. Die Unterschiede zwischen den Paketen liegen nach Herstellerangaben vor allem in Personalfunktionen wie Zeiterfassung, Schichtplanung oder Spesen, weniger in der eigentlichen Lohnabrechnung."),
      ],
    },
    {
      heading: "Sonderfälle: Wann Standardpakete nicht reichen",
      blocks: [
        p("Der häufigste Fehler bei der Auswahl ist, den Normalfall zu prüfen und den Ausnahmefall zu vergessen. Sammeln Sie die Abrechnungen der letzten zwölf Monate und markieren Sie jede, die vom Standard abweicht: Zuschläge, wechselnde Arbeitszeiten, Sachbezüge, Betriebsrenten, Beschäftigte aus dem Ausland, Altersteilzeit oder mehrere Beschäftigungsverhältnisse."),
        p("Die Ratgeber [Baulohn und Sonderfälle vor der Auswahl prüfen](/ratgeber/baulohn-und-sonderfaelle) und [Lohnsoftware richtig kalkulieren](/ratgeber/lohnsoftware-kosten-vergleichen) vertiefen beide Themen. Fragen Sie den Anbieter nach jedem Sonderfall schriftlich, ob er im gewählten Paket abgebildet wird."),
        fakt("Faustregel", "Wenn ein Sonderfall bei Ihnen regelmäßig vorkommt und die Cloud Software ihn ausschließt, sind Sie entweder bei einer Fachlösung oder bei der Kanzlei besser aufgehoben."),
      ],
    },
    {
      heading: "Typische Fehler in der Praxis",
      blocks: [
        p("Fehler in der Lohnabrechnung entstehen selten durch die Rechnung selbst, sondern durch Daten und Abläufe davor. Die folgenden Punkte treten in kleinen Betrieben immer wieder auf, ob mit Software oder bei der Kanzlei:"),
        ul(
          "**Veraltete Stammdaten:** Anschrift, Bankverbindung, Krankenkasse oder Steuermerkmale sind nicht aktuell. Die elektronischen Lohnsteuerabzugsmerkmale ändern sich, und Änderungen kommen nicht automatisch an.",
          "**Zu späte Meldung von Eintritten und Austritten:** Wer Änderungen erst am Monatsende weitergibt, riskiert verspätete Meldungen.",
          "**Fehlende Absprache bei Änderungen:** Gehaltsänderungen, Zuschläge, Sachbezüge oder Abwesenheiten kommen mündlich und werden nicht dokumentiert.",
          "**Unklare Zuständigkeit:** Niemand weiß, wer bei Abwesenheit den Lauf freigibt oder die Zahlung auslöst.",
          "**Sonderfälle zu spät erkannt:** Ein Beschäftigter mit zwei Arbeitgebern, ein Werkstudent oder ein Wechsel in Teilzeit wird erst bei der Abrechnung auffällig.",
          "**Zahlungen und Meldungen nicht abgestimmt:** Die Beiträge werden überwiesen, aber die dazugehörigen Meldungen fehlen, oder umgekehrt.",
          "**Update zum Jahreswechsel verpasst:** Gesetzliche Änderungen, etwa bei Beitragssätzen, werden nicht rechtzeitig eingespielt.",
          "**Korrekturen ohne Dokumentation:** Rückwirkende Änderungen werden gemacht, aber nicht begründet.",
        ),
        p("Gegen die meisten dieser Fehler hilft ein einfacher Monatsplan: Bis zu einem festen Tag melden Verantwortliche alle Änderungen, danach folgt die Abrechnung, eine Kontrolle durch eine zweite Person und die Freigabe. Wer das schriftlich festhält, ist unabhängig davon, ob er selbst abrechnet oder auslagert."),
        table("Was Sie Ihrer Kanzlei oder dem Lohnbüro monatlich liefern sollten", ["Lieferung", "Warum"], [
          ["Eintritte und Austritte mit Datum", "Grundlage für Meldungen und Beiträge"],
          ["Änderungen bei Gehalt, Stunden oder Zuschlägen", "Richtige Berechnung"],
          ["Abwesenheiten wie Krankheit und unbezahlter Urlaub", "Entgeltfortzahlung und Beiträge"],
          ["Sachbezüge, Prämien und Einmalzahlungen", "Steuerliche und sozialversicherungsrechtliche Behandlung"],
          ["Neue Bankverbindungen, Anschriften", "Zahlung und Meldungen"],
          ["Besonderheiten wie Pfändungen", "Rechtssichere Abrechnung"],
        ], "Vereinbaren Sie mit Ihrer Kanzlei einen festen Tag im Monat, bis zu dem diese Informationen vorliegen müssen."),
      ],
    },
    {
      heading: "Der Wechsel: So gelingt der Umstieg",
      blocks: [
        ol(
          "**Bestand erfassen:** Stammdaten, Lohnarten, Sozialversicherungsdaten, Lohnkonten des laufenden Jahres und offene Korrekturen.",
          "**Zeitpunkt wählen:** Viele Kanzleien empfehlen den Jahreswechsel, weil dann keine unterjährigen Stände übertragen werden müssen. Ein Wechsel mitten im Jahr ist möglich, braucht aber saubere Vortragswerte.",
          "**Parallellauf:** Rechnen Sie einen Monat in beiden Systemen und vergleichen Sie Ergebnisse je Person.",
          "**Zuständigkeiten klären:** Wer gibt frei, wer meldet, wer zahlt, wer informiert die Buchhaltung?",
          "**Dokumentieren:** Halten Sie den Ablauf schriftlich fest, damit Vertretungen möglich sind.",
        ),
        p("Besonders sensibel sind Beschäftigtendaten. Wer Lohn in der Cloud abrechnet, braucht einen Vertrag zur Auftragsverarbeitung und klare Regeln zu Zugriffen. Mehr dazu im Ratgeber [Softwarevertrag prüfen](/ratgeber/softwarevertrag-pruefen-laufzeit-daten-ausstieg)."),
      ],
    },
    {
      heading: "So entscheiden Sie in einer Stunde",
      blocks: [
        ol(
          "Zählen Sie Ihre Beschäftigten und schätzen Sie die Zahl in zwölf Monaten.",
          "Markieren Sie Sonderfälle der letzten zwölf Monate.",
          "Holen Sie von Ihrer Kanzlei ein Angebot für die Abrechnung ein, getrennt nach Einrichtung, Abrechnung je Beschäftigtem und Korrekturen.",
          "Rechnen Sie zwei bis drei Softwareangebote mit Ihrer Beschäftigtenzahl durch.",
          "Vergleichen Sie nicht nur Euro, sondern auch Ihre Zeit und die Frage, wer im Fehlerfall reagiert.",
        ),
        p("Lohnt sich die Software, planen Sie die Einführung wie ein kleines Projekt. Lohnt sich die Auslagerung, sichern Sie sich die Daten: Fragen Sie, in welchem Format Sie Abrechnungen und Lohnkonten erhalten, falls Sie später wechseln."),
      ],
    },
  ],
  checklist: [
    "Wie viele Beschäftigte haben wir heute, und wie viele in zwölf Monaten?",
    "Welche Sonderfälle kamen in den letzten zwölf Monaten vor, und deckt das Paket sie ab?",
    "Welche Fälle schließt der Hersteller ausdrücklich aus?",
    "Was kostet uns die Abrechnung bei der Kanzlei je Beschäftigtem, getrennt nach Einrichtung und Korrekturen?",
    "Wie werden Meldungen und Sofortmeldungen übermittelt und protokolliert?",
    "Wer gibt den Lauf frei und wer vertritt bei Abwesenheit?",
    "Wie gelangen die Daten in die Buchhaltung, und in welchem Format?",
    "Gibt es einen Vertrag zur Auftragsverarbeitung, und wo werden Daten gespeichert?",
  ],
  faq: [
    { q: "Muss ich die Lohnabrechnung selbst machen?", a: "Nein. Die Abrechnung können Sie selbst erledigen oder von Steuerberatung beziehungsweise Lohnbüro durchführen lassen. Verantwortlich gegenüber Finanzamt und Sozialversicherung bleiben Sie als Arbeitgeber." },
    { q: "Was kostet eine Lohnabrechnung pro Mitarbeiter?", a: "Das hängt von Weg und Umfang ab. Software nennt Preise je Beschäftigtem oder Pakete, bei Sage Payroll zum Beispiel 20 Euro im Monat für fünf Personen und 3 Euro je weitere Person im Paket Essentials. Kanzleien rechnen meist je Abrechnung und Person ab. Holen Sie ein Angebot ein, getrennt nach Einrichtung, laufender Abrechnung und Korrekturen." },
    { q: "Welche Fristen gelten für die Lohnsteuer Anmeldung?", a: "Die Anmeldung und Zahlung sind spätestens am zehnten Tag nach Ablauf des Anmeldezeitraums fällig. Grundsätzlich ist das ein Kalendermonat. Bei geringer Lohnsteuer im Vorjahr kann ein Quartal oder ein Jahr gelten (§ 41a EStG)." },
    { q: "Wann sind Sozialversicherungsbeiträge fällig?", a: "Spätestens am drittletzten Bankarbeitstag des Monats, in dem die Beschäftigung ausgeübt wurde. Zunächst ist der Betrag in voraussichtlicher Höhe zu zahlen (§ 23 SGB IV)." },
    { q: "Für wen gilt die Sofortmeldung?", a: "Für Beschäftigte in bestimmten Branchen, unter anderem Baugewerbe, Gaststätten und Beherbergung, Personenbeförderung, Logistik, Gebäudereinigung, Fleischwirtschaft, Wach und Sicherheitsgewerbe sowie Friseur und Kosmetik. Sie erfolgt spätestens bei Aufnahme der Beschäftigung (§ 28a Absatz 4 SGB IV)." },
    { q: "Kann ich unterjährig zu einer anderen Lohnsoftware wechseln?", a: "Ja, technisch ist das möglich. Es verlangt aber saubere Vortragswerte aus dem laufenden Jahr. Viele Kanzleien empfehlen deshalb den Jahreswechsel. Klären Sie den Zeitpunkt mit Ihrer Steuerberatung." },
  ],
  sources: [
    { label: "§ 108 GewO: Abrechnung des Arbeitsentgelts", url: "https://www.gesetze-im-internet.de/gewo/__108.html" },
    { label: "§ 41a EStG: Lohnsteuer Anmeldung", url: "https://www.gesetze-im-internet.de/estg/__41a.html" },
    { label: "§ 23 SGB IV: Fälligkeit der Beiträge", url: "https://www.gesetze-im-internet.de/sgb_4/__23.html" },
    { label: "§ 28a SGB IV: Meldepflicht des Arbeitgebers", url: "https://www.gesetze-im-internet.de/sgb_4/__28a.html" },
    { label: "Sage Payroll: Pakete und Preise", url: "https://www.sage.com/de-de/sage-business-cloud/lohnabrechnung/preis/" },
    { label: "Lexware: Preise und Ausschlüsse", url: "https://www.lexware.de/preise/" },
    { label: "DATEV Lohn und Gehalt: Produktseite", url: "https://www.datev.de/web/de/shop/produkt-details/41842" },
    { label: "Agenda: Preismodell", url: "https://www.agenda-software.de/unternehmen/preise.php" },
    { label: "Sage HR und Payroll: Pakete", url: "https://www.sage.com/de-de/produkte/sage-hr-payroll/" },
  ],
  related: ["sage-payroll", "lexware-office-lohn-gehalt", "datev-lohn-und-gehalt", "agenda-personalwesen", "sage-hr-payroll"],
  relatedGuides: ["baulohn-und-sonderfaelle", "lohnsoftware-kosten-vergleichen", "software-fuer-startups-die-ersten-zwoelf-monate"],
};
