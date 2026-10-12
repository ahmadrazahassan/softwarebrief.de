import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Rechtsstand: 13. Oktober 2026. Dieser Ratgeber erklärt die Regeln allgemein und ersetzt keine Steuerberatung. Prüfen Sie Ihren Einzelfall mit Ihrer Kanzlei.",
  keyTakeaways: [
    "Empfangen müssen alle inländischen Unternehmen E-Rechnungen schon seit dem 1. Januar 2025, ohne Übergangsfrist und ohne Umsatzgrenze.",
    "Ausstellen müssen Sie die E-Rechnung bei inländischen Geschäftskunden ab 2027, wenn Ihr Vorjahresumsatz über 800.000 Euro lag, und ab 2028 in jedem Fall.",
    "Eine normale PDF Datei ist keine E-Rechnung. Gemeint sind strukturierte Formate wie XRechnung oder ZUGFeRD ab Version 2.0.1.",
    "Kleinunternehmer, Kleinbetragsrechnungen bis 250 Euro und Fahrausweise sind von der Ausstellungspflicht ausgenommen. Empfangen müssen Kleinunternehmer trotzdem.",
    "Aufbewahrt wird die strukturierte Datei acht Jahre lang, unveränderbar und lesbar. Ihre Software sollte das ohne Handarbeit leisten.",
  ],
  sections: [
    {
      heading: "Was eine E-Rechnung ist und was nicht",
      blocks: [
        p("Viele Unternehmer verwechseln die E-Rechnung mit der Rechnung per E-Mail. Der Unterschied ist aber grundlegend. Das Umsatzsteuergesetz beschreibt in § 14 Absatz 1 die elektronische Rechnung als Rechnung, die in einem **strukturierten elektronischen Format** ausgestellt, übermittelt und empfangen wird und eine **elektronische Verarbeitung** ermöglicht. Das Format muss der europäischen Norm für die elektronische Rechnungsstellung entsprechen. Alternativ können Aussteller und Empfänger ein anderes Format vereinbaren, wenn sich alle erforderlichen Angaben daraus vollständig und richtig in ein normkonformes Format übertragen lassen."),
        p("Alles andere ist rechtlich eine **sonstige Rechnung**: Papier, aber auch ein PDF, ein Foto oder ein Word Dokument im Anhang einer E-Mail. Für das menschliche Auge sieht eine PDF Rechnung genauso aus wie eine E-Rechnung. Eine Software kann aus ihr aber keine Beträge, Steuersätze oder Positionen zuverlässig auslesen, ohne zu raten. Genau das soll die E-Rechnung ändern: Die Daten sollen ohne Abtippen und ohne Texterkennung in die Buchhaltung des Empfängers fließen."),
        fakt("Merksatz", "Eine E-Rechnung ist zuerst eine Datei für Maschinen. Die lesbare Darstellung ist nachrangig, maßgeblich sind die strukturierten Daten."),
        h3("Was das für Ihren Alltag bedeutet"),
        p("Sie müssen Rechnungen künftig nicht mehr drucken, unterschreiben oder als PDF zusammenbauen. Ihre Software erzeugt beim Erstellen der Rechnung eine XML Datei oder ein Hybridformat und verschickt sie. Der Empfänger liest die Datei ein, prüft sie und bucht sie. Das spart Zeit, setzt aber saubere Stammdaten voraus: Eine fehlende Steuernummer, eine falsche Anschrift oder eine unvollständige Leistungsbeschreibung wirkt sich nun unmittelbar auf die Verarbeitung aus."),
      ],
    },
    {
      heading: "Die Fristen im Überblick",
      blocks: [
        p("Die Einführung läuft in Stufen. Wichtig ist die Trennung zwischen **Empfang** und **Ausstellung**. Für den Empfang gibt es keine Übergangszeit. Für die Ausstellung regelt § 27 Absatz 38 UStG, bis wann Sie noch auf Papier oder in einem sonstigen elektronischen Format abrechnen dürfen."),
        table("Fristen für Empfang und Ausstellung von E-Rechnungen (inländische Umsätze zwischen Unternehmern)", ["Zeitraum", "Empfang", "Ausstellung"], [
          ["2025 und 2026", "Pflicht für alle inländischen Unternehmen, ohne Übergangsfrist", "Papier oder sonstiges elektronisches Format (zum Beispiel PDF) bleibt zulässig. Ein elektronisches Format setzt die Zustimmung des Empfängers voraus."],
          ["2027", "Pflicht", "E-Rechnung ist Pflicht, wenn Ihr Gesamtumsatz im Vorjahr über 800.000 Euro lag. Bei bis zu 800.000 Euro dürfen Sie noch Papier oder sonstige Formate nutzen. Rechnungen im elektronischen Datenaustausch (EDI) dürfen noch im bisherigen Format laufen."],
          ["ab 2028", "Pflicht", "E-Rechnung ist Pflicht für alle inländischen Umsätze zwischen Unternehmern."],
        ], "Grundlage: § 14 und § 27 Absatz 38 UStG. Stand 13. Oktober 2026."),
        p("Die Grenze von 800.000 Euro bezieht sich auf den **Gesamtumsatz** des ausstellenden Unternehmers im Vorjahr im Sinne von § 19 Absatz 2 UStG, gerechnet nach vereinnahmten Entgelten. Für 2027 zählt also der Umsatz des Jahres 2026. Wer 2026 knapp unter oder über der Grenze liegt, sollte mit der Steuerberatung klären, welche Umsätze genau mitzählen."),
        achtung("Wer nur bis 2026 plant, plant zu kurz", "Auch Betriebe unter der Umsatzgrenze müssen spätestens zum 1. Januar 2028 ausstellen können. Wer erst 2027 eine Software sucht, konkurriert mit allen anderen, die ebenfalls spät dran sind. Starten Sie früh genug, um mindestens zwei Monate echte Rechnungen im neuen Ablauf zu testen."),
      ],
    },
    {
      heading: "Wen die Pflicht betrifft und wer ausgenommen ist",
      blocks: [
        p("Die Pflicht gilt für Umsätze zwischen **inländischen Unternehmern**. Nach den Erläuterungen der Finanzverwaltung betrifft sie damit weder Rechnungen an Privatpersonen noch Rechnungen an Geschäftskunden im Ausland. Für Rechnungen an Behörden und andere öffentliche Auftraggeber gelten häufig zusätzliche Vorgaben, etwa eine Leitweg ID, auf die Sie sich im Einzelfall vorbereiten sollten."),
        h3("Ausnahmen bei der Ausstellung"),
        ul(
          "**Kleinunternehmer** nach § 19 UStG müssen keine E-Rechnung ausstellen. Nach § 34a der Umsatzsteuerdurchführungsverordnung (UStDV) darf ihre Rechnung immer als sonstige Rechnung übermittelt werden. Wie die Regelung seit 2025 funktioniert, erklärt unser [Ratgeber zur Kleinunternehmerregelung](/ratgeber/kleinunternehmerregelung-grenzen-rechnung-software).",
          "**Kleinbetragsrechnungen** bis 250 Euro nach § 33 UStDV dürfen ebenfalls als sonstige Rechnung übermittelt werden.",
          "**Fahrausweise** nach § 34 UStDV sind ausgenommen.",
          "**Steuerfreie Umsätze** nach § 4 Nummer 8 bis 29 UStG sind von der Rechnungspflicht in § 14 Absatz 2 ausgenommen.",
        ),
        h3("Keine Ausnahme beim Empfang"),
        p("Der Empfang betrifft jeden inländischen Unternehmer, der Leistungen von anderen inländischen Unternehmern bezieht. Dazu zählen ausdrücklich auch Kleinunternehmer, Nebenerwerbsgründer und Vereine mit unternehmerischer Tätigkeit. Nach Auskunft der Industrie- und Handelskammern genügt für den Empfang grundsätzlich ein **Postfach für E-Mails**. Sie müssen keine eigene Plattform anschaffen, aber Sie müssen die Datei öffnen, prüfen und aufbewahren können."),
      ],
    },
    {
      heading: "XRechnung, ZUGFeRD und EN 16931: Welches Format wofür",
      blocks: [
        p("Die europäische Norm EN 16931 legt fest, welche Angaben eine E-Rechnung enthält und wie sie benannt werden. In Deutschland sind zwei Umsetzungen verbreitet."),
        table("Die beiden wichtigsten Formate im Vergleich", ["Merkmal", "XRechnung", "ZUGFeRD"], [
          ["Aufbau", "Reine XML Datei ohne Bildteil", "PDF mit eingebetteter XML Datei (Hybridformat)"],
          ["Für wen gedacht", "Ursprünglich für öffentliche Auftraggeber, heute allgemein nutzbar", "Gut für Geschäftskunden, die die Rechnung auch lesen wollen"],
          ["Was zählt rechtlich", "Die strukturierten Daten", "Die eingebettete XML Datei, nicht die PDF Darstellung"],
          ["Worauf Sie achten", "Aktuelle Version der Software und des Empfängers", "Version 2.0.1 oder höher, ohne die Profile MINIMUM und BASIC WL"],
        ], "Nach Angaben der Industrie- und Handelskammern sowie der Finanzverwaltung. Konkrete Versionen ändern sich, prüfen Sie diese bei Ihrer Software."),
        p("Bei ZUGFeRD kommt es auf das **Profil** an. Die Profile MINIMUM und BASIC WL enthalten nicht alle Angaben, die für die Umsatzsteuer nötig sind, und gelten deshalb nicht als E-Rechnung im Sinne des Gesetzes. Ihre Software sollte standardmäßig ein geeignetes Profil wählen, damit Sie das nicht jedes Mal selbst entscheiden müssen."),
        tipp("Fragen Sie nach dem Validator", "Gute Programme prüfen die erzeugte Datei vor dem Versand gegen das Regelwerk des Formats und zeigen Fehler in Klartext. Das spart Rückfragen von Kunden und verhindert, dass eine fehlerhafte Rechnung als nicht ordnungsgemäß zurückkommt."),
      ],
    },
    {
      heading: "Empfang: Was Sie heute schon können müssen",
      blocks: [
        p("Weil der Empfang bereits Pflicht ist, lohnt sich zuerst ein Blick auf den eigenen Posteingang. Erhält Ihr Unternehmen schon heute E-Rechnungen, etwa von größeren Lieferanten, muss ein klarer Ablauf bestehen."),
        ol(
          "**Eingang bündeln:** Legen Sie eine zentrale Adresse für Rechnungen fest und weisen Sie Lieferanten darauf hin. So landet keine Rechnung im falschen Postfach.",
          "**Datei prüfen:** Die XML Datei oder das Hybridformat muss lesbar sein. Ein Programm sollte die Angaben anzeigen, auch wenn Sie kein Fachwissen über XML haben.",
          "**Inhalt kontrollieren:** Stimmen Leistung, Betrag, Steuersatz und Anschrift? Fehler bei Pflichtangaben können den Vorsteuerabzug gefährden. Klären Sie mit Ihrer Steuerberatung, wie Sie mit Abweichungen umgehen.",
          "**Weiterverarbeiten:** Buchen Sie die Rechnung, geben Sie sie zur Zahlung frei und archivieren Sie die Originaldatei.",
        ),
        p("Eine Software kann hier viel abnehmen. Sie liest die Daten ein, schlägt Konten vor und verknüpft die Rechnung mit der Zahlung. Wer bisher mit Texterkennung aus PDF Belegen arbeitet, bekommt durch strukturierte Daten zuverlässigere Ergebnisse, muss aber den Umgang mit zwei Welten pflegen: E-Rechnungen und die weiterhin zulässigen sonstigen Rechnungen."),
      ],
    },
    {
      heading: "Ausstellung: Was Ihre Software können muss",
      blocks: [
        p("Beim Ausstellen reicht es nicht, dass im Prospekt „E-Rechnung“ steht. Prüfen Sie die folgenden Punkte nacheinander, am besten mit einer eigenen Musterrechnung in der Testversion."),
        table("Prüfpunkte für das Ausstellen von E-Rechnungen", ["Prüfpunkt", "Warum er zählt"], [
          ["Formate", "Mindestens XRechnung und ZUGFeRD ab 2.0.1 mit geeignetem Profil. Fragen Sie, welche Version aktuell ist und wie Updates kommen."],
          ["Validierung", "Die Datei wird vor dem Versand geprüft. Fehler werden verständlich erklärt."],
          ["Versandwege", "E-Mail ist der Standard. Manche Kunden verlangen Portale oder das Peppol Netzwerk. Klären Sie, welche Wege Ihr Kundenkreis nutzt."],
          ["Pflichtangaben und Stammdaten", "Leitweg ID, Bestellnummer, Zahlungsbedingungen und Steuerangaben müssen sich pro Kunde hinterlegen lassen."],
          ["Korrekturen", "Gutschriften und Stornos müssen als eigene E-Rechnung gelingen, nicht nur als PDF."],
          ["Wiederkehrende Rechnungen", "Abos und Daueraufträge müssen automatisch im neuen Format laufen."],
          ["Archiv", "Die strukturierte Datei wird unverändert gespeichert, nicht nur eine Bildansicht."],
          ["Preis und Tarif", "Prüfen Sie, ob die Funktion in Ihrem Tarif enthalten ist oder als Zusatz gebucht wird."],
        ]),
        p("Ein häufiger Irrtum betrifft **Eingang und Ausgang**. Viele Programme lesen E-Rechnungen schon ein, erzeugen sie aber erst später selbst. So nennt Sage für Sage Active nach unserer Recherche, Stand 27. September 2026, das Einlesen von XRechnung und ZUGFeRD in beiden Paketen. Den Versand elektronischer Rechnungen kündigt der Hersteller als Funktion an, die folgen soll. Für Betriebe, die ab 2027 ausstellen müssen, ist genau dieser Unterschied entscheidend. Die Einordnung finden Sie im [Profil von Sage Active](/software/buchhaltung/sage-active)."),
      ],
    },
    {
      heading: "Aufbewahrung und GoBD: Was mit der Datei geschieht",
      blocks: [
        p("Rechnungen gehören zu den Buchungsbelegen. Für sie gilt seit 2025 eine Aufbewahrungsfrist von **acht Jahren**. Die Frist beginnt nach § 14b Absatz 1 UStG mit dem Schluss des Kalenderjahres, in dem die Rechnung ausgestellt wurde. Während dieser Zeit muss die Rechnung ihre Herkunft belegen, unverändert bleiben und lesbar sein. Bei einer E-Rechnung bedeutet das: Die **strukturierte Datei** bleibt maßgeblich. Ein Ausdruck oder ein Bild reicht nicht aus."),
        p("Dazu kommt der Datenzugriff der Finanzverwaltung. Nach § 147 Absatz 6 der Abgabenordnung darf sie bei einer Außenprüfung Einsicht in die gespeicherten Daten nehmen, das System nutzen oder eine maschinelle Auswertung verlangen. Deshalb sollte Ihre Software Rechnungen exportieren können und die Datei zum Beleg in einem prüfbaren Archiv halten. Wie das im Detail aussieht, erklärt der Ratgeber zu [GoBD und Aufbewahrungsfristen](/ratgeber/gobd-aufbewahrungsfristen-belege-digitalisieren)."),
        fakt("Zwei Beispiele für den Alltag", "Ein Lieferant sendet Ihnen eine ZUGFeRD Datei. Sie speichern nur die PDF Ansicht und löschen die E-Mail. Damit fehlt die maßgebliche XML Datei. Oder Sie ändern eine Rechnung nachträglich im Archiv, etwa die Anschrift. Beides gefährdet die Ordnungsmäßigkeit."),
      ],
    },
    {
      heading: "Welche Programme im Katalog was belegen",
      blocks: [
        p("Softwarebrief führt in der Funktionsmatrix die Kernfunktion „Elektronische Rechnungen“ nur auf, wenn eine Herstellerquelle sie belegt. Für **FastBill**, **sevdesk** und **Billomat** nennen die Herstellerseiten diese Funktion. Das heißt noch nicht, dass jede Variante für jeden Tarif gleich vollständig ist. Prüfen Sie deshalb die folgenden Punkte im Tarif, den Sie tatsächlich buchen würden."),
        table("Was die Herstellerangaben zur elektronischen Rechnung hergeben", ["Programm", "Was wir belegen", "Was Sie klären sollten"], [
          ["[FastBill](/software/buchhaltung/fastbill)", "E-Rechnungen als Funktion, Einstieg Solo ab 10 Euro im Monat netto bei monatlicher Zahlung.", "Format und Version, wiederkehrende Rechnungen erst ab Pro."],
          ["[sevdesk](/software/buchhaltung/sevdesk)", "E-Rechnungen, Rechnung ab 12,90 Euro im Monat bei 24 Monaten Laufzeit.", "Format, Versandweg und Umfang je Tarif."],
          ["[Billomat](/software/buchhaltung/billomat)", "E-Rechnung, Professional ab 29 Euro im Monat bei monatlicher Zahlung, ein Nutzer und 30 Rechnungen im Monat.", "Kontingent, Tarifgrenzen bei Nutzern und Rechnungen."],
          ["[Sage Active](/software/buchhaltung/sage-active)", "Einlesen von XRechnung und ZUGFeRD in beiden Paketen, Starter 25 Euro, Essentials 49 Euro im Monat netto.", "Versand elektronischer Rechnungen ist laut Hersteller angekündigt."],
          ["[Sage 50 Handwerk](/software/erp/sage-50-handwerk)", "Elektronische Rechnungen in ZUGFeRD 2.1 und XRechnung im Paket Essential.", "Teilrechnungen und Schlussrechnungen erst in Enterprise."],
        ], "Preise sind Listenpreise der Hersteller, Stand 25. und 27. September 2026. Aktionen sind nicht eingerechnet."),
        p("Für den Vergleich nebeneinander nutzen Sie unseren [Vergleich von Buchhaltungsprogrammen](/vergleich?produkte=fastbill,sevdesk,billomat,sage-active). Dort sehen Sie pro Programm, welche Kernfunktionen belegt sind und wo Angaben fehlen."),
      ],
    },
    {
      heading: "Typische Fehler bei der Umstellung",
      blocks: [
        ul(
          "**Nur den Versand betrachten.** Der Empfang gilt schon heute. Wer ihn ignoriert, riskiert unbearbeitete Rechnungen und Probleme beim Vorsteuerabzug.",
          "**PDF für eine E-Rechnung halten.** Wenn Ihr Programm „E-Rechnung als PDF“ anbietet, fragen Sie nach, ob wirklich eine XML Datei eingebettet ist.",
          "**Stammdaten nicht pflegen.** Fehlende Steuernummern, veraltete Anschriften und falsche Zahlungsbedingungen führen zu abgelehnten Rechnungen.",
          "**Archiv vergessen.** Die Datei muss acht Jahre unverändert bleiben. Ein loses Verzeichnis auf dem Desktop genügt nicht.",
          "**Zu spät testen.** Nehmen Sie sich Zeit für Kunden, die eigene Anforderungen haben, etwa Portale oder Bestellnummern.",
          "**Die Steuerberatung zu spät einbinden.** Klären Sie früh, welche Formate und Exporte Ihre Kanzlei benötigt.",
        ),
      ],
    },
    {
      heading: "In sechs Schritten zur E-Rechnung",
      blocks: [
        ol(
          "**Bestandsaufnahme:** Wie viele Rechnungen stellen Sie aus, wie viele erhalten Sie, in welchen Formaten?",
          "**Fristen prüfen:** Liegt Ihr Gesamtumsatz 2026 über 800.000 Euro? Dann gilt die Pflicht schon ab 2027.",
          "**Anforderungen sammeln:** Formate, Versandwege, Behördenkunden, Gutschriften, wiederkehrende Rechnungen.",
          "**Software testen:** Erstellen Sie eine echte Musterrechnung und prüfen Sie die Datei mit einem Validator.",
          "**Ablauf festlegen:** Wer prüft eingehende Rechnungen, wer gibt frei, wer archiviert?",
          "**Umstellen und beobachten:** Starten Sie mit wenigen Kunden, sammeln Sie Rückmeldungen und weiten Sie den Ablauf Schritt für Schritt aus.",
        ),
        tipp("Gleich mit der Kanzlei abstimmen", "Fragen Sie vor der Entscheidung, in welchem Format Ihre Steuerberatung ausgehende und eingehende Rechnungen am liebsten bekommt. Viele Kanzleien arbeiten mit DATEV. Prüfen Sie in dem Fall die Schnittstelle, bevor Sie sich festlegen."),
      ],
    },
  ],
  checklist: [
    "Bis wann müssen wir ausstellen: Liegt unser Gesamtumsatz 2026 über 800.000 Euro?",
    "Welche Formate und welche ZUGFeRD Version erzeugt und liest die Software?",
    "Gibt es eine Prüfung vor dem Versand, und wie sehen die Fehlermeldungen aus?",
    "Wie werden Gutschriften, Stornos und wiederkehrende Rechnungen als E-Rechnung ausgestellt?",
    "Wird die strukturierte Datei acht Jahre unverändert archiviert und lässt sie sich exportieren?",
    "Ist die Funktion in unserem Tarif enthalten oder kostet sie extra?",
    "Welche Versandwege nutzen unsere Kunden, etwa E-Mail, Portal oder Peppol?",
    "Welches Format und welche Schnittstelle erwartet unsere Steuerberatung?",
  ],
  faq: [
    { q: "Müssen auch Kleinunternehmer E-Rechnungen ausstellen?", a: "Nein. Kleinunternehmer sind von der Ausstellungspflicht ausgenommen und dürfen weiterhin sonstige Rechnungen nutzen. **Empfangen** müssen sie E-Rechnungen aber seit dem 1. Januar 2025 können." },
    { q: "Ist ein PDF eine E-Rechnung?", a: "Nein. Eine reine PDF Datei ist eine sonstige Rechnung. Eine E-Rechnung braucht ein strukturiertes Format wie XRechnung oder ein Hybridformat wie ZUGFeRD ab Version 2.0.1, bei dem die eingebettete XML Datei die maßgeblichen Daten enthält." },
    { q: "Was gilt für Rechnungen unter 250 Euro?", a: "Kleinbetragsrechnungen bis 250 Euro dürfen nach § 33 UStDV weiterhin als sonstige Rechnung übermittelt werden. Eine E-Rechnung ist dafür nicht vorgeschrieben." },
    { q: "Wie lange müssen E-Rechnungen aufbewahrt werden?", a: "Acht Jahre. Die Frist beginnt mit dem Ende des Kalenderjahres, in dem die Rechnung ausgestellt wurde. Die strukturierte Datei muss unverändert und lesbar bleiben." },
    { q: "Reicht ein Postfach für E-Mails für den Empfang?", a: "Nach Auskunft der Industrie- und Handelskammern genügt für den Empfang grundsätzlich ein Postfach für E-Mails. Sie müssen die Datei aber öffnen, prüfen, verarbeiten und aufbewahren können." },
    { q: "Welche Folgen hat es, wenn ich nach 2027 weiter PDF Rechnungen verschicke?", a: "Wer zur E-Rechnung verpflichtet ist und trotzdem eine sonstige Rechnung ausstellt, erfüllt die Vorgaben nicht. Der Empfänger kann dann Probleme beim Vorsteuerabzug bekommen. Klären Sie mögliche Folgen im Einzelfall mit Ihrer Steuerberatung." },
  ],
  sources: [
    { label: "§ 14 UStG: Ausstellung von Rechnungen", url: "https://www.gesetze-im-internet.de/ustg_1980/__14.html" },
    { label: "§ 14b UStG: Aufbewahrung von Rechnungen", url: "https://www.gesetze-im-internet.de/ustg_1980/__14b.html" },
    { label: "§ 27 Absatz 38 UStG: Übergangsregelung für Rechnungen", url: "https://www.gesetze-im-internet.de/ustg_1980/__27.html" },
    { label: "§ 33 UStDV: Rechnungen über Kleinbeträge", url: "https://www.gesetze-im-internet.de/ustdv_1980/__33.html" },
    { label: "§ 34a UStDV: Rechnungen von Kleinunternehmern", url: "https://www.gesetze-im-internet.de/ustdv_1980/__34a.html" },
    { label: "§ 147 Abgabenordnung: Aufbewahrung von Unterlagen", url: "https://www.gesetze-im-internet.de/ao_1977/__147.html" },
    { label: "IHK Halle Dessau: Pflicht zur E-Rechnung ab 2025", url: "https://www.ihk.de/halle/produktmarken/innovation-und-infrastruktur/digitale-wirtschaft/pflicht-zur-e-rechnung-ab-2025-6280970" },
    { label: "Bundesfinanzministerium: Fragen und Antworten zur E-Rechnung", url: "https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html" },
  ],
  related: ["fastbill", "sevdesk", "billomat", "sage-active", "sage-50-handwerk"],
  relatedGuides: ["gobd-aufbewahrungsfristen-belege-digitalisieren", "kleinunternehmerregelung-grenzen-rechnung-software", "buchhaltungssoftware-fuer-startups-gruender"],
};
