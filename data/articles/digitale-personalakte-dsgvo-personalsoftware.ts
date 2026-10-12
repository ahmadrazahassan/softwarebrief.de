import type { GuideBody } from "../guide-types";
import { achtung, fakt, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Rechtsstand: 13. Oktober 2026. Datenschutz im Beschäftigungsverhältnis ist in Teilen umstritten und ändert sich durch Rechtsprechung. Dieser Ratgeber gibt einen Überblick und ersetzt keine Rechtsberatung. Binden Sie bei der Einführung Ihre Datenschutzbeauftragte oder Ihren Datenschutzbeauftragten und gegebenenfalls den Betriebsrat ein.",
  keyTakeaways: [
    "Personalakten enthalten besonders sensible Daten. Für ihre digitale Führung gelten die Grundsätze der Datenschutz Grundverordnung: Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung und Sicherheit.",
    "Ein Anbieter, der Personaldaten in Ihrem Auftrag verarbeitet, braucht einen Vertrag zur Auftragsverarbeitung nach Artikel 28 DSGVO. Fragen Sie nach Standort, Unterauftragnehmern und Löschung bei Vertragsende.",
    "Wichtiger als jede Funktion ist ein Rollen und Rechtekonzept: Wer sieht Gehälter, wer sieht Krankmeldungen, wer sieht Abmahnungen? Prüfen Sie, in welchem Tarif Rechte einstellbar sind.",
    "Legen Sie vor dem Start fest, wann Daten gelöscht werden. Für Lohnunterlagen, Zeitnachweise und Bewerbungen gelten unterschiedliche Fristen.",
    "Beschäftigte haben ein Recht auf Auskunft und Einsicht. Die Software muss Daten vollständig herausgeben können.",
  ],
  sections: [
    {
      heading: "Was in eine digitale Personalakte gehört",
      blocks: [
        p("Eine Personalakte sammelt Unterlagen, die das Arbeitsverhältnis betreffen: Vertrag, Stammdaten, Qualifikationen, Gehaltsänderungen, Zeugnisse. Digital kann sie mehr leisten als ein Ordner: Dokumente sind schnell auffindbar, Vorlagen sparen Zeit, Fristen lassen sich überwachen. Mit dem Komfort wächst die Verantwortung, denn ein Zugriffsfehler betrifft nicht ein Papier, sondern potenziell alle Akten."),
        table("Typische Inhalte und ihre Sensibilität", ["Inhalt", "Sensibilität", "Hinweis zum Zugriff"], [
          ["Stammdaten, Anschrift, Kontaktdaten", "Normal", "Personalabteilung, Führungskraft nur im nötigen Umfang"],
          ["Arbeitsvertrag, Änderungen, Zeugnisse", "Erhöht", "Personalabteilung, Geschäftsführung"],
          ["Gehalt, Bankverbindung, Steuerdaten", "Hoch", "Nur Lohn und Personalverantwortliche"],
          ["Abmahnungen, Gespräche, Beurteilungen", "Hoch", "Eng begrenzter Kreis, Protokollierung"],
          ["Krankmeldungen, Schwerbehinderung, Gesundheitsdaten", "Besonders hoch", "Besondere Kategorien nach Artikel 9 DSGVO, getrennte Ablage, sehr enger Zugriff"],
          ["Bewerbungsunterlagen", "Erhöht", "Nur am Auswahlverfahren Beteiligte, kurze Aufbewahrung"],
        ], "Die Einstufung ist eine praktische Orientierung. Ihre Datenschutzbeauftragte oder Ihr Datenschutzbeauftragter legt sie verbindlich fest."),
        tipp("Trennen Sie Akten nach Zweck", "Legen Sie Gesundheitsdaten, Gehälter und Beurteilungen in getrennten Bereichen ab, die nur wenige Personen sehen. Eine gemeinsame Gesamtakte, die jede Führungskraft öffnen kann, ist keine gute Lösung."),
      ],
    },
    {
      heading: "Der Rechtsrahmen im Überblick",
      blocks: [
        p("Für die Verarbeitung von Beschäftigtendaten gilt die Datenschutz Grundverordnung. Sie wird in Deutschland durch das Bundesdatenschutzgesetz ergänzt. Die genaue Anwendung der Regeln zum Beschäftigtendatenschutz ist teilweise umstritten, auch nach Entscheidungen des Europäischen Gerichtshofs. Für Ihre Praxis genügt zunächst ein Überblick über die Grundpflichten."),
        table("Pflichten, die bei einer digitalen Personalakte regelmäßig gelten", ["Pflicht", "Was sie bedeutet", "Vorschrift"], [
          ["Grundsätze", "Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit", "Artikel 5 DSGVO"],
          ["Rechtsgrundlage", "Es muss eine Rechtsgrundlage für jede Verarbeitung geben, bei Beschäftigten zum Beispiel die Durchführung des Arbeitsvertrags oder gesetzliche Pflichten.", "Artikel 6 und 88 DSGVO, § 26 BDSG"],
          ["Information", "Beschäftigte werden verständlich informiert, welche Daten Sie wofür verarbeiten.", "Artikel 13 und 14 DSGVO"],
          ["Auftragsverarbeitung", "Verträge mit Dienstleistern, die Daten in Ihrem Auftrag verarbeiten, etwa die Anbieter der Software", "Artikel 28 DSGVO"],
          ["Sicherheit", "Technische und organisatorische Maßnahmen, die dem Risiko angemessen sind", "Artikel 32 DSGVO"],
          ["Verzeichnis", "Dokumentation der Verarbeitungstätigkeiten", "Artikel 30 DSGVO"],
          ["Betroffenenrechte", "Auskunft, Berichtigung, Löschung, Einschränkung", "Artikel 15 bis 18 DSGVO"],
        ], "Die Tabelle fasst Grundpflichten zusammen und ist nicht vollständig. Ausnahmen und Besonderheiten klären Sie mit Fachleuten."),
        p("Besondere Kategorien personenbezogener Daten, zu denen Gesundheitsdaten zählen, unterliegen strengeren Regeln (Artikel 9 DSGVO). Dazu gehören zum Beispiel Informationen zu Krankheiten oder zu einer Schwerbehinderung. Nutzen Sie die digitale Akte nur dann für solche Daten, wenn der Zweck klar ist und der Zugriff sehr eng begrenzt wird."),
      ],
    },
    {
      heading: "Rollen und Rechte: Wer darf was sehen",
      blocks: [
        p("Der häufigste Fehler bei der Einführung ist ein zu offenes Rechtekonzept. Alle Beteiligten sollen schnell loslegen, also bekommen viele Personen weitreichende Rechte. Später ist es schwer, sie zurückzunehmen. Legen Sie das Konzept vor dem Import der Daten fest."),
        table("Beispiel für ein Rollenmodell", ["Rolle", "Darf sehen", "Darf nicht sehen"], [
          ["Beschäftigte", "Eigene Daten, eigene Dokumente, eigene Anträge", "Daten anderer Personen"],
          ["Führungskräfte", "Abwesenheiten und Anträge des eigenen Teams", "Gehälter, Gesundheitsdaten, Abmahnungen anderer Teams"],
          ["Personalabteilung", "Akten, Verträge, Entwicklungsgespräche", "Gesundheitsdaten, soweit nicht erforderlich"],
          ["Lohnverantwortliche", "Entgelt und Steuerdaten", "Beurteilungen, Gesprächsprotokolle"],
          ["Geschäftsführung", "Auswertungen und Freigaben", "Details, die sie nicht brauchen"],
          ["IT und Administration", "Technische Einstellungen", "Inhalte der Akten, soweit möglich"],
        ], "Beispiel zur Veranschaulichung. Passen Sie die Rollen an Ihre Organisation an."),
        ul(
          "**Rechte pro Feld und Dokument:** Gute Systeme erlauben, einzelne Bereiche zu sperren.",
          "**Protokollierung:** Wer hat wann welche Akte geöffnet oder geändert? Das ist wichtig für Nachvollziehbarkeit und Nachweise.",
          "**Vertretungen:** Regeln Sie, wie Zugriffe bei Urlaub oder Ausscheiden übergeben werden.",
          "**Regelmäßige Prüfung:** Kontrollieren Sie einmal im Jahr, wer welche Rechte hat.",
        ),
        achtung("Rechte sind oft an den Tarif gebunden", "Bei vielen Anbietern gehören feinere Rechte zu höheren Paketen. Prüfen Sie vor dem Kauf, ob das Rollen und Rechtekonzept, das Sie brauchen, im günstigeren Tarif enthalten ist."),
      ],
    },
    {
      heading: "Löschen und Aufbewahren",
      blocks: [
        p("Daten dürfen nicht länger gespeichert werden, als es für den Zweck nötig ist. Gleichzeitig verlangen Gesetze, dass bestimmte Unterlagen aufbewahrt werden. Ein Löschkonzept bringt beides zusammen. Es legt fest, welche Daten wie lange bleiben, wer löscht und wie das nachgewiesen wird."),
        table("Orientierung für typische Fristen", ["Unterlage", "Frist", "Hinweis"], [
          ["Buchungsbelege, zum Beispiel Rechnungen von Dienstleistern", "8 Jahre", "§ 147 Abgabenordnung, Ende des Kalenderjahres als Beginn"],
          ["Lohnkonten und Lohnunterlagen", "eigene Frist", "Nach dem Einkommensteuergesetz und den Sozialversicherungsvorschriften, bitte mit Lohnbüro oder Steuerberatung klären"],
          ["Arbeitszeitnachweise über acht Stunden täglich", "mindestens 2 Jahre", "§ 16 Absatz 2 Arbeitszeitgesetz"],
          ["Bewerbungen abgelehnter Personen", "häufig etwa 6 Monate", "Orientierung wegen kurzer Fristen nach dem Allgemeinen Gleichbehandlungsgesetz, im Einzelfall klären"],
          ["Personalakte nach Ende des Arbeitsverhältnisses", "nach Bedarf, häufig bis zum Ablauf der Verjährung", "Die regelmäßige Verjährungsfrist beträgt drei Jahre (§ 195 BGB). Lohnunterlagen folgen eigenen Fristen."],
        ], "Die Fristen sind Orientierungen. Verbindliche Aussagen für Ihre Unterlagen gibt Ihre Steuerberatung oder Rechtsberatung."),
        p("Eine Software sollte Löschfristen pro Dokumenttyp erlauben, Erinnerungen geben oder automatisch löschen und das protokollieren. Fehlt diese Funktion, müssen Sie den Prozess organisatorisch lösen, zum Beispiel mit einem jährlichen Termin."),
        fakt("Aufbewahren und Löschen sind kein Widerspruch", "Wer Daten länger als nötig behält, verstößt gegen die Speicherbegrenzung. Wer sie zu früh löscht, kann sich bei Streit nicht mehr belegen. Das Löschkonzept schafft Klarheit für beide Seiten."),
      ],
    },
    {
      heading: "Auftragsverarbeitung, Standort und Unterauftragnehmer",
      blocks: [
        p("Cloud Software verarbeitet Daten im Auftrag. Das verlangt einen Vertrag nach Artikel 28 DSGVO, der Gegenstand, Dauer, Art der Daten, Pflichten und Kontrollrechte regelt. Der Anbieter darf Daten nur nach Ihren Weisungen verarbeiten, muss die Sicherheit gewährleisten, Beschäftigte zur Vertraulichkeit verpflichten und bei Vertragsende Daten löschen oder zurückgeben."),
        ul(
          "**Standort:** In welchem Land liegen die Daten, auch bei Sicherungen und Support?",
          "**Unterauftragnehmer:** Welche weiteren Dienstleister sind beteiligt, und wo sitzen sie?",
          "**Drittländer:** Werden Daten in Länder außerhalb der Europäischen Union übertragen, und auf welcher Grundlage?",
          "**Sicherheitsmaßnahmen:** Verschlüsselung, Zugriffskontrolle, Protokolle, Notfallplan.",
          "**Datenzugriff durch den Anbieter:** Wer kann beim Anbieter Ihre Daten sehen, und wie wird das protokolliert?",
          "**Ende des Vertrags:** In welchem Format erhalten Sie Ihre Daten zurück, und wann werden sie gelöscht?",
        ),
        p("Eine ausführliche Checkliste für Verträge finden Sie im Ratgeber [Softwarevertrag prüfen](/ratgeber/softwarevertrag-pruefen-laufzeit-daten-ausstieg)."),
      ],
    },
    {
      heading: "Programme im Katalog: Was zur Akte und zu Rechten belegt ist",
      blocks: [
        p("Die folgenden Angaben stammen aus den Herstellerquellen. Datenschutz und Sicherheit bewerten wir nicht. Prüfen Sie diese Punkte direkt beim Anbieter und lassen Sie sich Verträge und Nachweise vorlegen."),
        table("Akte, Dokumente und Rechte laut Herstellerangaben", ["Programm", "Was die Quelle nennt", "Preislogik"], [
          ["[Personio](/software/hr/personio)", "Core mit Profilen, Dokumenten, Berichten und Workflows. Core Pro erweitert unter anderem um API und Rechte.", "Auf Anfrage, abhängig von Beschäftigten und Apps"],
          ["[Kenjo](/software/hr/kenjo)", "Starter mit Zeit, Urlaub, Dokumenten und Schichtplanung. Growth ergänzt Workflows, Signatur, Berechtigungen und Auswertungen.", "Kein veröffentlichter Euro Listenpreis"],
          ["[Sage HR](/software/hr/sage-hr)", "Basis mit digitaler Mitarbeiterakte, Organigramm, Selbstbedienung und mobiler App. Keine Lohnabrechnung.", "Basis 4,50 € je Person und Monat"],
          ["[Factorial](/software/hr/factorial)", "Core mit Mitarbeiterverzeichnis, Vorlagen für Eintritt und Austritt, Signatur und Benachrichtigungen.", "Ab 8 € je Nutzer und Monat, Gesamtpreis abhängig von Modulen"],
          ["[HiBob / Bob](/software/hr/hibob-bob)", "Core mit Mitarbeiterdaten, Dokumenten, Abwesenheiten, Workflows, Integrationen und Analysen.", "Individuelles Angebot"],
          ["[Agenda Personalwesen](/software/lohnabrechnung/agenda-personalwesen)", "Lohn und Gehalt, Meldewesen, Mitarbeiterportal, digitale Akte, Urlaubsverwaltung.", "Ab 50 € im Monat plus nutzungsabhängige Kosten"],
        ], "Stand der Herstellerangaben: 25. und 27. September 2026."),
        p("Auffällig ist, dass **Berechtigungen** bei Personio und Kenjo an höhere Stufen gebunden sind. Wer ein feines Rechtekonzept braucht, sollte deshalb nicht den Einstiegspreis vergleichen, sondern den Tarif, in dem die benötigten Rechte enthalten sind."),
      ],
    },
    {
      heading: "Technische Schutzmaßnahmen: Was konkret erwartbar ist",
      blocks: [
        p("Artikel 32 der Datenschutz Grundverordnung verlangt Maßnahmen, die dem Risiko angemessen sind. Für eine Personalakte ist das Risiko hoch, denn Fehler treffen konkrete Menschen. Konkretisieren Sie den Begriff mit einer Liste, die Sie bei jedem Anbieter abfragen:"),
        table("Maßnahmen und Fragen an den Anbieter", ["Maßnahme", "Worum es geht", "Frage"], [
          ["Anmeldung", "Schutz vor fremdem Zugriff, etwa durch Zwei Faktor Verfahren", "Gibt es eine zweite Stufe der Anmeldung, und ist sie für alle Rollen verfügbar?"],
          ["Verschlüsselung", "Schutz bei Übertragung und Speicherung", "Werden Daten verschlüsselt übertragen und gespeichert?"],
          ["Berechtigungen", "Zugriff nach Rolle und Bereich", "Lassen sich Felder und Dokumente einzeln sperren?"],
          ["Protokolle", "Nachvollziehbarkeit von Zugriffen und Änderungen", "Wer kann Protokolle einsehen, und wie lange werden sie gespeichert?"],
          ["Sicherungen", "Schutz vor Datenverlust", "Wie oft wird gesichert, und wie schnell lässt sich wiederherstellen?"],
          ["Zertifizierungen und Prüfungen", "Nachweise für Sicherheitsstandards", "Welche Nachweise gibt es, und lassen sie sich vorlegen?"],
          ["Mandantentrennung", "Daten verschiedener Kunden sind getrennt", "Wie ist die Trennung technisch umgesetzt?"],
        ], "Die Liste dient der Orientierung. Welche Maßnahmen angemessen sind, bewertet Ihre Datenschutzbeauftragte oder Ihr Datenschutzbeauftragter."),
        p("Ein Zertifikat ersetzt keine Prüfung, aber es zeigt, dass der Anbieter sich Fragen stellen lässt. Anbieter, die auf diese Fragen nicht antworten können oder wollen, sind ein Warnzeichen."),
      ],
    },
    {
      heading: "Wenn etwas schiefgeht: Die Meldung einer Datenpanne",
      blocks: [
        p("Auch bei guter Vorsorge können Fehler passieren: Eine Akte wird an die falsche Person gesendet, ein Zugang wird gestohlen, ein Anbieter meldet einen Sicherheitsvorfall. Für solche Fälle gilt in der Datenschutz Grundverordnung eine feste Regel: Verletzungen des Schutzes personenbezogener Daten sind der Aufsichtsbehörde grundsätzlich unverzüglich und möglichst binnen 72 Stunden zu melden, wenn sie voraussichtlich zu einem Risiko für die Betroffenen führen (Artikel 33). Bei hohem Risiko müssen auch die Betroffenen informiert werden (Artikel 34)."),
        ul(
          "**Zuständigkeit:** Legen Sie fest, wer im Betrieb Vorfälle entgegennimmt und bewertet.",
          "**Wege:** Beschäftigte wissen, an wen sie sich wenden, auch am Wochenende.",
          "**Anbieter:** Der Vertrag zur Auftragsverarbeitung sollte regeln, dass der Anbieter Sie unverzüglich informiert.",
          "**Dokumentation:** Halten Sie jeden Vorfall schriftlich fest, auch wenn er nicht gemeldet wird.",
        ),
        achtung("Die Frist beginnt mit Ihrer Kenntnis", "Die 72 Stunden laufen ab dem Zeitpunkt, an dem Sie von der Verletzung erfahren. Planen Sie deshalb vorher, wer wie reagiert. Im Ernstfall bleibt keine Zeit, Zuständigkeiten zu klären."),
      ],
    },
    {
      heading: "Welche Unterlagen in die digitale Akte gehören",
      blocks: [
        p("Nicht alles, was Papier war, muss in die digitale Akte. Gerade beim Umstieg lohnt es sich, den Inhalt zu hinterfragen. Der Grundsatz der Datenminimierung gilt auch hier: Speichern Sie, was Sie für das Arbeitsverhältnis brauchen."),
        ul(
          "**Behalten und digitalisieren:** Arbeitsvertrag und Änderungen, Zeugnisse, Qualifikationsnachweise, Nachweise über Pflichtschulungen, Unterlagen zu Urlaub und Abwesenheiten.",
          "**Getrennt und mit eigenem Zugriff:** Abmahnungen, Gesprächsprotokolle, Beurteilungen, Gesundheitsdaten.",
          "**Prüfen, ob nötig:** Bewerbungsunterlagen nach der Einstellung, Kopien von Ausweisen, Ergebnisse von Tests.",
          "**Nicht aufnehmen:** Daten, die für das Arbeitsverhältnis keine Rolle spielen, etwa private Notizen zur Person.",
        ),
        p("Ältere Papierakten müssen nicht sofort vollständig digitalisiert werden. Beginnen Sie mit aktiven Beschäftigten und lassen Sie Akten ausgeschiedener Personen im Archiv, bis Fristen abgelaufen sind."),
      ],
    },
    {
      heading: "Einführung: Von der Papierakte zur digitalen Akte",
      blocks: [
        ol(
          "**Bestand aufnehmen:** Welche Akten gibt es, wo liegen sie, wer hat Zugriff?",
          "**Aufräumen:** Veraltete Dokumente prüfen, nach Löschfristen aussortieren, Dubletten entfernen.",
          "**Rechte planen:** Rollen, Bereiche und Freigaben festlegen, bevor Daten importiert werden.",
          "**Beteiligte einbinden:** Datenschutzbeauftragte, Betriebsrat (§ 87 Betriebsverfassungsgesetz), Geschäftsführung.",
          "**Beschäftigte informieren:** Welche Daten werden digital geführt, wer sieht sie, wie kann ich Einsicht nehmen?",
          "**Pilot starten:** Mit einer kleinen Gruppe testen, Rechte überprüfen, dann ausweiten.",
        ),
        p("Beschäftigte haben das Recht, in ihre Personalakte Einsicht zu nehmen (§ 83 Betriebsverfassungsgesetz). Die digitale Akte sollte dies unkompliziert ermöglichen, etwa mit einem Export. Mehr zu Abläufen bei der Einführung von Personalsoftware finden Sie im Ratgeber [Personalsoftware einführen, ohne Prozesse zu verlieren](/ratgeber/hr-software-einfuehren)."),
        tipp("Mit wenigen Daten beginnen", "Starten Sie mit Stammdaten, Verträgen und Abwesenheiten. Weitere Bereiche kommen dazu, wenn Rechte und Löschkonzept stehen. So bleibt die Menge sensibler Daten anfangs überschaubar."),
      ],
    },
  ],
  checklist: [
    "Haben wir einen Vertrag zur Auftragsverarbeitung mit dem Anbieter?",
    "Wo werden Daten gespeichert, und welche Unterauftragnehmer sind beteiligt?",
    "Welche Rollen gibt es, und in welchem Tarif sind sie einstellbar?",
    "Werden Zugriffe und Änderungen protokolliert?",
    "Gibt es ein Löschkonzept mit Fristen je Dokumenttyp?",
    "Können wir Beschäftigten Auskunft und Einsicht geben?",
    "Sind Datenschutzbeauftragte und Betriebsrat eingebunden?",
    "Wie erhalten wir Daten bei Vertragsende zurück, und in welchem Format?",
  ],
  faq: [
    { q: "Ist eine digitale Personalakte erlaubt?", a: "Ja. Eine digitale Personalakte ist zulässig, wenn die Grundsätze der Datenschutz Grundverordnung eingehalten werden: klare Zwecke, begrenzter Zugriff, Sicherheit und Löschkonzept. Mit Anbietern ist ein Vertrag zur Auftragsverarbeitung nötig." },
    { q: "Brauche ich einen Vertrag mit dem Softwareanbieter?", a: "Ja. Verarbeitet der Anbieter Personaldaten in Ihrem Auftrag, ist ein Vertrag zur Auftragsverarbeitung nach Artikel 28 DSGVO erforderlich. Er regelt Weisungen, Sicherheit, Unterauftragnehmer und Löschung." },
    { q: "Wie lange darf ich Bewerbungen aufbewahren?", a: "Häufig wird eine Frist von etwa sechs Monaten genannt, weil Ansprüche nach dem Allgemeinen Gleichbehandlungsgesetz kurze Fristen haben. Die Antwort hängt vom Einzelfall ab. Klären Sie die Frist mit Ihrer Datenschutzbeauftragten oder Rechtsberatung." },
    { q: "Dürfen Führungskräfte alle Akten ihres Teams sehen?", a: "Nur das, was sie für ihre Aufgabe brauchen. Abwesenheiten und Anträge ja, Gehälter, Gesundheitsdaten und Abmahnungen in der Regel nicht. Legen Sie das über Rollen und Rechte fest." },
    { q: "Haben Beschäftigte ein Recht auf Einsicht in ihre Akte?", a: "Ja. Nach § 83 Betriebsverfassungsgesetz haben Beschäftigte das Recht, in ihre Personalakte Einsicht zu nehmen. Hinzu kommen Auskunftsrechte nach der Datenschutz Grundverordnung." },
    { q: "Muss der Betriebsrat bei Einführung beteiligt werden?", a: "Besteht ein Betriebsrat, hat er bei der Einführung technischer Einrichtungen, die zur Überwachung von Verhalten oder Leistung geeignet sind, mitzubestimmen (§ 87 Betriebsverfassungsgesetz). Binden Sie ihn früh ein." },
  ],
  sources: [
    { label: "Datenschutz Grundverordnung, Verordnung (EU) 2016/679", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679" },
    { label: "§ 26 BDSG: Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses", url: "https://www.gesetze-im-internet.de/bdsg_2018/__26.html" },
    { label: "§ 83 BetrVG: Einsicht in die Personalakten", url: "https://www.gesetze-im-internet.de/betrvg/__83.html" },
    { label: "§ 87 BetrVG: Mitbestimmungsrechte", url: "https://www.gesetze-im-internet.de/betrvg/__87.html" },
    { label: "§ 147 Abgabenordnung: Aufbewahrung von Unterlagen", url: "https://www.gesetze-im-internet.de/ao_1977/__147.html" },
    { label: "§ 16 Arbeitszeitgesetz: Aushang und Arbeitszeitnachweise", url: "https://www.gesetze-im-internet.de/arbzg/__16.html" },
    { label: "Personio: Preise und Pakete", url: "https://www.personio.de/preise/" },
    { label: "Kenjo: Tarife und Funktionen", url: "https://www.kenjo.io/de/preise" },
    { label: "Sage HR: Modulpreise und Funktionen", url: "https://www.sage.com/de-de/sage-business-cloud/hr/" },
  ],
  related: ["personio", "kenjo", "sage-hr", "factorial", "hibob-bob"],
  relatedGuides: ["hr-software-einfuehren", "arbeitszeiterfassung-pflicht-software-auswahl", "softwarevertrag-pruefen-laufzeit-daten-ausstieg"],
};
