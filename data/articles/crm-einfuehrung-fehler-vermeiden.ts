import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Preise sind Listenpreise der Hersteller zum Stand 25. und 27. September 2026, netto und ohne Aktionen. „ab“ bedeutet: Einstiegswert laut Herstellerseite, der Endpreis hängt von Ausstattung und Zahlweise ab.",
  keyTakeaways: [
    "Ein CRM scheitert selten an der Technik. Die häufigsten Ursachen sind fehlende Ziele, zu viele Phasen und Felder, ungeprüfte Daten und ein Team, das nicht mitgenommen wurde.",
    "Beginnen Sie mit einer einfachen Pipeline aus vier bis sechs Phasen, einem Verantwortlichen und wenigen Pflichtfeldern. Ausbau folgt, wenn die Basis genutzt wird.",
    "Bereinigen Sie Daten vor dem Import. Ein Import von Dubletten und veralteten Kontakten macht jedes neue System zäh.",
    "Rechnen Sie Lizenzen, Kontakte und Zusatzfunktionen mit Ihrer Teamgröße in zwölf Monaten. Bei acht Nutzern liegen die Listenpreise je nach Programm zwischen 56 und 760 Euro im Monat.",
    "Messen Sie nach 30, 60 und 90 Tagen, ob Kontakte, nächste Schritte und Abschlussgründe gepflegt werden. Das ist wichtiger als jedes Feature.",
  ],
  sections: [
    {
      heading: "Warum CRM Projekte scheitern",
      blocks: [
        p("Ein Kundenbeziehungsmanagement soll Kontakte, Gespräche und Verkaufschancen an einem Ort sammeln. Das klingt einfach, und trotzdem landen viele Systeme nach wenigen Monaten im Abseits: Das Team pflegt Daten in Tabellen weiter, Führungskräfte vertrauen den Berichten nicht, und niemand weiß, wer das System verantwortet. Die Software ist in solchen Fällen selten schlecht. Es fehlt ein Plan, der Technik, Menschen und Gewohnheiten zusammenbringt."),
        p("Dieser Ratgeber beschreibt neun typische Fehler und zu jedem den Weg, ihn zu vermeiden. Die Reihenfolge folgt dem Projekt: von der Vorbereitung über die Auswahl bis zum Betrieb."),
      ],
    },
    {
      heading: "Fehler 1 bis 3: Vor der Auswahl",
      blocks: [
        h3("Fehler 1: Ohne Ziel starten"),
        p("„Wir brauchen ein CRM“ ist kein Ziel. Ein Ziel beschreibt ein Problem und eine Messgröße: „Angebote bleiben liegen, wir wollen jedes Angebot innerhalb von drei Tagen nachfassen“ oder „wir wissen nicht, welche Kontakte aus welcher Quelle kommen“. Ohne Ziel lässt sich weder ein Programm auswählen noch der Erfolg beurteilen."),
        tipp("So formulieren Sie ein Ziel", "Schreiben Sie drei Sätze: Was läuft heute schief? Woran merken wir in 90 Tagen, dass es besser ist? Wer ist dafür verantwortlich?"),
        h3("Fehler 2: Zu viele Phasen und Felder"),
        p("Eine Pipeline mit zwölf Phasen und dreißig Pflichtfeldern wirkt gründlich, wird aber nicht gepflegt. Vier bis sechs eindeutige Phasen reichen für viele kleine Teams. Jede Phase braucht eine klare Bedingung für den Wechsel, zum Beispiel „Angebot versendet“ oder „Termin vereinbart“. Pflichtfelder sollten nur das enthalten, was für die nächste Entscheidung nötig ist."),
        h3("Fehler 3: Daten ungeprüft übernehmen"),
        p("Der Umzug aus Tabellen ist die Chance, aufzuräumen. Wer Dubletten, veraltete Ansprechpartner und uneinheitliche Firmennamen mitnimmt, hat von Beginn an ein System, dem niemand traut. Beginnen Sie mit einem Teilbestand, testen Sie Suche und Zuordnung und importieren Sie erst danach den Rest. Legen Sie fest, wer Dubletten bereinigt und wie Firmennamen geschrieben werden."),
        p("Mehr zum Umstieg aus Tabellen finden Sie im Ratgeber [Vom Tabellenvertrieb zu einer klaren Pipeline](/ratgeber/vertrieb-von-tabellen-ins-crm)."),
      ],
    },
    {
      heading: "Fehler 4 bis 6: Bei der Auswahl",
      blocks: [
        h3("Fehler 4: Nach Funktionen statt nach Abläufen auswählen"),
        p("Funktionslisten täuschen. Fast jedes CRM verspricht Pipeline, Aufgaben, Berichte und Automatisierung. Wichtig ist, ob Ihr Ablauf in zwei Wochen läuft. Definieren Sie drei Abläufe, die vom ersten Tag an funktionieren müssen, etwa: Anfrage anlegen und zuweisen, Angebot nachfassen, gewonnenes Geschäft an die Buchhaltung übergeben. Lassen Sie sich genau diese Abläufe in der Demo zeigen, mit Ihren Daten."),
        h3("Fehler 5: Die Kosten falsch rechnen"),
        p("CRM Preise werden je Nutzer, je Paket oder nach Kontakten berechnet. Dazu kommen Aufpreise für Automatisierung, Berichte oder zusätzliche Hubs. Rechnen Sie daher mit der Teamgröße, die Sie in zwölf Monaten haben, und mit allen Rollen, die Zugang brauchen."),
        table("Beispiel: Monatliche Listenpreise für acht Nutzer", ["Programm", "Preislogik", "Rechnung für acht Nutzer"], [
          ["[HubSpot Sales Hub](/software/crm/hubspot-sales-hub)", "Kostenloser Einstieg, Starter ab 7 € je Lizenz, Professional ab 90 € je Lizenz", "Starter ab 56 €, Professional ab 720 €"],
          ["[SuperOffice CRM](/software/crm/superoffice-crm)", "Starter 45 €, Core 65 €, Growth 95 € je Nutzer, bei jährlicher Zahlung", "Starter 360 €, Core 520 €, Growth 760 €"],
          ["[Sage Sales Management](/software/crm/sage-sales-management)", "Professional 55 € je Nutzer bei mindestens fünf Nutzern", "440 €"],
          ["[CentralStationCRM](/software/crm/centralstationcrm)", "Pakete nach Nutzern und Kontakten: Small Office 75 € für 10 Nutzer", "75 € im Paket Small Office"],
          ["[Pipedrive](/software/crm/pipedrive)", "Stufen Lite bis Ultimate, kein verifizierter Euro Listenpreis", "Angebot nötig"],
          ["[Zoho CRM](/software/crm/zoho-crm)", "Kostenlose Edition bis drei Nutzer, bezahlte Editionen ohne verifizierten Euro Preis", "Angebot nötig"],
        ], "Rechenweg: je Nutzer mal acht, zum Beispiel SuperOffice Growth 95 € × 8 = 760 €. Kein Preisvergleich mit Qualitätsaussage: Die Programme unterscheiden sich stark im Funktionsumfang."),
        p("Der Unterschied zwischen 56 und 720 Euro zeigt: Der Einstiegspreis sagt wenig über die Rechnung, die Sie am Ende bezahlen. Weitere Hinweise zu Nutzer, Kontakt und Funktionsgrenzen finden Sie im Ratgeber [CRM Kosten verstehen](/ratgeber/crm-kosten-verstehen)."),
        h3("Fehler 6: Integrationen vergessen"),
        p("Ein CRM lebt davon, dass es dort ankommt, wo gearbeitet wird: im Postfach, im Kalender, in der Buchhaltung, im Angebotsprogramm. Fehlen Verbindungen, pflegt das Team doppelt. Prüfen Sie vor dem Kauf, welche Verbindungen es gibt, ob sie im günstigen Tarif enthalten sind und wer sie einrichtet. Sage Sales Management nennt zum Beispiel Verbindungen zu Microsoft 365, Google Workspace, Zoom, Mailchimp, Zendesk, Zapier und Make sowie eine API. Angebote und Bestellungen aus dem CRM kosten dort aber zusätzlich."),
      ],
    },
    {
      heading: "Fehler 7 bis 9: Im Betrieb",
      blocks: [
        h3("Fehler 7: Das Team nicht mitnehmen"),
        p("Ein CRM verändert Gewohnheiten. Wer bisher in der eigenen Tabelle arbeitet, empfindet das System zunächst als Mehrarbeit. Beteiligen Sie die künftigen Nutzer früh: Lassen Sie zwei oder drei Kolleginnen und Kollegen die Demo mitbewerten, sammeln Sie ihre Schmerzpunkte und machen Sie sichtbar, was sich verbessert. Ein Verantwortlicher im Team pflegt Felder, beantwortet Fragen und sorgt dafür, dass Regeln eingehalten werden."),
        h3("Fehler 8: Alles auf einmal automatisieren"),
        p("Automatisierungen sind der Reiz vieler Plattformen: E-Mail Sequenzen, Aufgaben, Bewertungen. Sie funktionieren aber nur, wenn die Daten stimmen und der Prozess klar ist. Starten Sie mit der Basis. Automatisieren Sie erst, wenn ein Schritt mehrfach manuell und immer gleich ausgeführt wurde. Marketing und Service kommen später dazu, wenn Vertrieb stabil läuft."),
        achtung("Datenschutz mitdenken", "Ein CRM enthält personenbezogene Daten. Schließen Sie mit dem Anbieter einen Vertrag zur Auftragsverarbeitung und legen Sie fest, wann Kontakte gelöscht werden. Wer E-Mails oder Newsletter über das System versendet, braucht eine tragfähige Rechtsgrundlage dafür. Lassen Sie sich im Zweifel beraten."),
        h3("Fehler 9: Keine Routine für Pflege und Messung"),
        p("Ohne Routine verfällt jedes System. Legen Sie fest, wann das Team gemeinsam in die Pipeline schaut, etwa wöchentlich zehn Minuten. Fragen Sie nicht nur nach Umsatz, sondern nach Pflege: Wie viele offene Chancen haben keinen nächsten Schritt? Wie viele Kontakte sind älter als zwölf Monate ohne Aktivität? Diese Zahlen zeigen früher als jeder Umsatzbericht, ob das CRM lebt."),
      ],
    },
    {
      heading: "Welche Programme zu welchem Team passen",
      blocks: [
        p("Eine Rangliste gibt es nicht, denn die Programme lösen unterschiedliche Aufgaben. Die folgende Übersicht hilft bei der Vorauswahl:"),
        table("Vorauswahl nach Arbeitsweise", ["Wenn Sie…", "…prüfen Sie zuerst", "Weil"], [
          ["klein starten und Prozesse klären wollen", "[CentralStationCRM](/software/crm/centralstationcrm) oder [HubSpot](/software/crm/hubspot-sales-hub)", "Beide haben einen kostenlosen Einstieg. CentralStationCRM nennt Grenzen bei Nutzern und Kontakten, nicht bei den Grundfunktionen."],
          ["eine visuelle Pipeline für ein kleines Vertriebsteam brauchen", "[Pipedrive](/software/crm/pipedrive)", "Das Produkt konzentriert sich auf den Vertrieb. Ein verifizierter Euro Preis liegt nicht vor."],
          ["Vertrieb, Service und Kundenkontakt auf einer Plattform bündeln wollen", "[SuperOffice CRM](/software/crm/superoffice-crm)", "Mehrere Stufen mit Pipeline, Projekten, Service und Automatisierung, Preis je Nutzer."],
          ["viel im Außendienst arbeiten", "[Sage Sales Management](/software/crm/sage-sales-management)", "Offline Nutzung, Routenplanung und Sprachberichte, Mindestabnahme von fünf Nutzern."],
          ["ein anpassbares System mit vielen Editionen suchen", "[Zoho CRM](/software/crm/zoho-crm)", "Konfigurierbare Prozesse, kostenlose Edition für bis zu drei Nutzer."],
        ]),
        p("Direkt nebeneinander sehen Sie die Programme im [Vergleich von CRM Programmen](/vergleich?produkte=pipedrive,hubspot-sales-hub,centralstationcrm,zoho-crm)."),
      ],
    },
    {
      heading: "Das Datenmodell: Kontakte, Firmen, Chancen und Aktivitäten",
      blocks: [
        p("Hinter jeder CRM Oberfläche steht dasselbe Modell. Wer es versteht, erkennt schnell, ob ein Programm zu den eigenen Abläufen passt, und vermeidet ein Chaos, das später kaum zu beheben ist."),
        table("Die vier Grundobjekte eines CRM", ["Objekt", "Bedeutung", "Typischer Fehler"], [
          ["Person", "Ein Mensch, mit dem Sie sprechen: Name, E-Mail, Telefon, Rolle", "Gleiche Person mehrfach angelegt, mit unterschiedlicher Schreibweise"],
          ["Firma", "Das Unternehmen, bei dem die Person arbeitet", "Firmen ohne Zuordnung der Ansprechpartner"],
          ["Chance", "Ein möglicher Verkauf mit Wert, Phase und Abschlussdatum", "Chancen ohne Datum und ohne nächsten Schritt"],
          ["Aktivität", "Anruf, Termin, E-Mail oder Aufgabe, die zu einer Chance gehört", "Aktivitäten nur im Kopf oder im Postfach"],
        ]),
        p("Klären Sie vor der Auswahl, ob Sie in **Firmen** oder in **Personen** denken. Ein Unternehmen mit mehreren Ansprechpartnern braucht eine Firmenebene, ein Berater, der mit Einzelpersonen arbeitet, kommt oft mit Personen aus. Zudem sollten Sie festlegen, was eine Chance ist: Ab wann ist ein Kontakt eine Chance, und wer entscheidet das?"),
        tipp("Definieren Sie Pflichtfelder pro Phase", "In der ersten Phase genügen Name und Quelle. Für ein Angebot brauchen Sie Wert und Termin. So wächst die Datenqualität mit dem Fortschritt der Chance und das Team wird nicht mit Feldern überfordert."),
      ],
    },
    {
      heading: "Beispiele für einfache Pipelines",
      blocks: [
        p("Die richtige Pipeline hängt vom Verkaufsprozess ab. Die folgenden Beispiele zeigen, wie kurz sie sein kann. Sie sind Anregungen, keine Vorlagen."),
        table("Drei Beispiele für Verkaufsphasen", ["Branche", "Phasen", "Bedingung für den nächsten Schritt"], [
          ["Dienstleister mit Beratung", "Anfrage, Erstgespräch, Angebot, Verhandlung, Auftrag", "Erstgespräch gehalten, Angebot versendet, Antwort erhalten"],
          ["Handwerksbetrieb", "Anfrage, Aufmaß, Angebot, Zusage, Ausführung", "Termin vereinbart, Angebot verschickt, Zusage schriftlich"],
          ["Softwarevertrieb an Firmen", "Lead, Demo, Test, Angebot, Vertrag", "Demo gebucht, Test gestartet, Angebot freigegeben"],
        ]),
        p("Gemeinsam ist allen: Jede Phase hat ein klares Ereignis, das den Wechsel auslöst, und eine Person, die verantwortlich ist. Wo diese Klarheit fehlt, pflegt niemand die Phase, und die Pipeline zeigt Wunschdenken."),
      ],
    },
    {
      heading: "Kennzahlen, die Sie wirklich brauchen",
      blocks: [
        p("Viele Systeme bieten Dutzende Berichte. Für kleine Teams genügen wenige Zahlen, die Sie wöchentlich ansehen und mit einer klaren Frage verbinden:"),
        ul(
          "**Offene Chancen je Phase:** Wo staut es sich?",
          "**Chancen ohne nächsten Schritt:** Welche Chancen bleiben liegen?",
          "**Durchlaufzeit von Anfrage bis Abschluss:** Wie lange dauert ein Verkauf typischerweise?",
          "**Abschlussquote je Quelle:** Welche Kanäle bringen Aufträge, nicht nur Anfragen?",
          "**Gründe für verlorene Chancen:** Preis, Zeitpunkt, Wettbewerb? Ohne Gründe gibt es kein Lernen.",
        ),
        p("Aussagekräftig sind diese Zahlen nur, wenn die Daten gepflegt werden. Deshalb stehen Pflege und Routine vor jeder Auswertung."),
      ],
    },
    {
      heading: "Die ersten 90 Tage",
      blocks: [
        ol(
          "**Tage 1 bis 30, Vorbereiten:** Ziel formulieren, Phasen festlegen, Verantwortlichen benennen, Daten bereinigen, zwei Programme mit echten Abläufen testen.",
          "**Tage 31 bis 60, Starten:** Ein Programm wählen, Teilbestand importieren, Team schulen, Pipeline mit den ersten echten Chancen füllen, wöchentliche Pipeline Runde einführen.",
          "**Tage 61 bis 90, Festigen:** Restbestand importieren, Berichte prüfen, erste Automatisierung für einen wiederkehrenden Schritt einrichten, Rückmeldungen aus dem Team einholen.",
        ),
        fakt("Woran Sie nach 90 Tagen den Erfolg erkennen", "Jede offene Chance hat einen nächsten Schritt mit Datum. Kontakte werden im System gepflegt, nicht in privaten Tabellen. Die Führungskraft nutzt die Pipeline für Entscheidungen. Wenn eines davon fehlt, liegt es meist am Ablauf, nicht an der Software."),
      ],
    },
    {
      heading: "Wann ein Wechsel oder ein Neustart sinnvoll ist",
      blocks: [
        p("Nicht jedes gescheiterte CRM muss ersetzt werden. Prüfen Sie zuerst, ob Ziele, Phasen und Verantwortung stimmen. Ein Neustart mit bereinigten Daten und klarer Rolle in demselben System ist oft günstiger als ein Wechsel. Wechseln Sie, wenn ein zentraler Ablauf technisch nicht abbildbar ist, wenn Lizenzgrenzen Ihr Wachstum bremsen oder wenn Datenexport und Datenschutz nicht zu Ihren Anforderungen passen."),
        p("Bevor Sie einen Vertrag unterschreiben, lohnt der Blick in die Bedingungen: Laufzeit, Kündigung, Datenexport, Auftragsverarbeitung. Der Ratgeber [Softwarevertrag prüfen](/ratgeber/softwarevertrag-pruefen-laufzeit-daten-ausstieg) enthält dafür eine Checkliste."),
      ],
    },
  ],
  checklist: [
    "Welches konkrete Problem soll das CRM lösen, und woran messen wir den Erfolg?",
    "Welche vier bis sechs Phasen hat unser Verkaufsprozess, und was löst den Wechsel aus?",
    "Wer ist verantwortlich für Daten, Felder und Regeln?",
    "Welche drei Abläufe müssen vom ersten Tag an funktionieren?",
    "Was kostet das System für die Teamgröße in zwölf Monaten, einschließlich Zusatzfunktionen?",
    "Welche Verbindungen brauchen wir, und sind sie im Tarif enthalten?",
    "Wie bereinigen wir Daten vor dem Import, und wer entscheidet bei Dubletten?",
    "Gibt es einen Vertrag zur Auftragsverarbeitung und ein Konzept für Löschung?",
    "Wann schauen wir regelmäßig gemeinsam in die Pipeline?",
  ],
  faq: [
    { q: "Wie lange dauert die Einführung eines CRM?", a: "Für kleine Teams mit einfacher Pipeline ist ein erster Betrieb in wenigen Wochen realistisch. Entscheidend ist weniger die Technik als die Vorbereitung: Ziel, Phasen, Datenbereinigung und Schulung. Planen Sie 90 Tage, bis der Ablauf zur Gewohnheit wird." },
    { q: "Brauche ich ein CRM oder reicht Excel?", a: "Bei einer Person und wenigen Kontakten reicht eine saubere Tabelle. Sobald mehrere Personen mit denselben Kontakten arbeiten, Angebote nachverfolgt werden oder Berichte nötig sind, spart ein CRM Zeit. Der Ratgeber [Excel ablösen](/ratgeber/excel-abloesen-wann-tabellen-zum-risiko-werden) nennt die Warnzeichen." },
    { q: "Welche Daten sollte ich zuerst importieren?", a: "Beginnen Sie mit aktiven Kunden und offenen Chancen. Ältere Kontakte kommen später und nur, wenn sie bereinigt sind. So bleibt die Suche schnell und das Team nutzt das System von Anfang an." },
    { q: "Was kostet ein CRM für ein kleines Team?", a: "Das reicht von kostenlos bis zu mehreren hundert Euro im Monat. Bei acht Nutzern liegen die Listenpreise der geprüften Programme je nach Stufe zwischen 56 und 760 Euro, einzelne Programme nennen keinen verifizierten Euro Preis. Der Einstiegspreis allein sagt wenig." },
    { q: "Kann ich ein CRM später wechseln?", a: "Ja, aber mit Aufwand. Klären Sie vor dem Kauf, in welchem Format Sie Kontakte, Chancen und Notizen exportieren können. Ein Export in gängigen Formaten ist ein wichtiges Kaufargument." },
    { q: "Wer sollte im Team für das CRM verantwortlich sein?", a: "Eine Person mit Zeit und Autorität, die Regeln durchsetzt, Felder pflegt und Fragen beantwortet. In kleinen Teams ist das oft die Vertriebsleitung oder die Geschäftsführung, nicht die IT." },
  ],
  sources: [
    { label: "HubSpot: Preise für Sales", url: "https://www.hubspot.de/pricing/sales" },
    { label: "SuperOffice: Preise", url: "https://www.superoffice.de/preise/" },
    { label: "CentralStationCRM: Pakete und Grenzen", url: "https://centralstationcrm.de/plans" },
    { label: "Sage Sales Management: Funktionen und Preis", url: "https://www.sage.com/de-de/produkte/sage-sales-management/" },
    { label: "Pipedrive: Preise", url: "https://www.pipedrive.com/de/pricing" },
    { label: "Zoho CRM: Editionen und Preise", url: "https://www.zoho.com/de/crm/zohocrm-pricing.html" },
    { label: "Art. 28 DSGVO: Auftragsverarbeiter", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679" },
  ],
  related: ["centralstationcrm", "hubspot-sales-hub", "pipedrive", "superoffice-crm", "sage-sales-management"],
  relatedGuides: ["crm-kosten-verstehen", "vertrieb-von-tabellen-ins-crm", "excel-abloesen-wann-tabellen-zum-risiko-werden"],
};
