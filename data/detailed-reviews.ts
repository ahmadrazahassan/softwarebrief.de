// Long-form editorial reviews. Every figure is taken from the linked German
// manufacturer page as checked on the stated date; cost examples are simple
// list-price arithmetic without discounts, introduction or partner services.

export type CostExample = { scenario: string; calculation: string; monthly: string; yearly: string };
export type DetailedReview = {
  checked: string;
  summary: string;
  bestFor: string[];
  notFor: string[];
  sections: { heading: string; paragraphs: string[] }[];
  costExamples: CostExample[];
  costNote: string;
  verdict: string;
};

export const detailedReviews: Record<string, DetailedReview> = {
  "sage-active": {
    checked: "13. Oktober 2026",
    summary: "Sage Active verbindet Auftragsbearbeitung, doppelte Buchführung und Lohnabrechnung für kleine Betriebe in einer Cloudlösung. Das Preismodell ist klar, die Kontingente sind großzügig. Beim Versand elektronischer Rechnungen und bei der Übermittlung von Jahresabschlüssen sollten Sie die aktuellen Grenzen kennen.",
    bestFor: ["Kleine Unternehmen mit Geschäftskunden, die selbst buchen und bis zu zehn Nutzer brauchen", "Betriebe mit wenigen Beschäftigten, die Lohn und Buchhaltung nicht in zwei Programmen pflegen möchten", "Teams, die per Browser und App arbeiten und monatlich kündbar bleiben wollen"],
    notFor: ["Händler mit Lagerbestand, denn eine Lagerverwaltung fehlt", "Betriebe, die sofort elektronische Rechnungen versenden müssen", "Unternehmen, die Jahressteuererklärung und E-Bilanz direkt aus der Buchhaltung übermitteln wollen"],
    sections: [
      { heading: "Zwei Pakete mit klar getrennter Aufgabe", paragraphs: [
        "Starter kostet 25 € pro Monat und ist ausdrücklich für Betriebe gedacht, deren Buchführung ein externer Buchhalter erledigt. Enthalten sind Angebote, Aufträge, Lieferscheine und Rechnungen, individuelle Preise und Rabatte, die Erfassung von Belegen mit künstlicher Intelligenz, der Bankabgleich, Umsatzberichte, ein Zugang für die Kanzlei, eine offene API, Sage Copilot und die mobile App. Ein Unternehmen und fünf Nutzer sind eingeschlossen, dazu 300 Rechnungen pro Monat.",
        "Essentials kostet 49 € pro Monat und macht aus dem Rechnungsprogramm eine vollständige Buchhaltung: doppelte Buchführung mit SKR03 oder SKR04, Anlagenbuchhaltung, automatische Buchungssätze, GuV und Bilanz in Echtzeit, Soll und Ist Versteuerung, die Umsatzsteuervoranmeldung über ELSTER und die Vorbereitung von Monats und Jahresabschlüssen. Hinzu kommen Lohnabrechnung mit allen gesetzlichen Meldungen und ein Portal, in dem Beschäftigte ihre Daten selbst pflegen. Eingeschlossen sind zehn Nutzer, 500 Rechnungen und zwei Beschäftigte.",
      ] },
      { heading: "Was zusätzlich kostet", paragraphs: [
        "Jede weitere Person in der Lohnabrechnung kostet 3 € pro Monat und wird für den vollen Monat berechnet. Wer mehr Rechnungen schreibt als enthalten, bucht Pakete: 100 Rechnungen für 10 €, 500 für 40 €, 1.000 für 65 €, 5.000 für 250 € und 10.000 für 500 €. Jede Rechnung über das gewählte Paket hinaus kostet 0,15 €. Weitere Unternehmen lassen sich unbegrenzt anlegen, werden aber jeweils ab dem Tag der Anlage berechnet; einen Betrag dafür nennt die Produktseite nicht.",
        "Für Verträge vor Februar 2026 gelten laut Hersteller andere Kontingente mit zwei beziehungsweise vier Nutzern. Sage bietet Neukunden 50 % Rabatt für die ersten drei Monate. Laut Hersteller läuft die Aktion bis zum 4. Januar 2027; ab dem vierten Monat gilt der reguläre Listenpreis. Maßgeblich sind die aktuellen Konditionen bei Sage. Sage Copilot ist laut Seite für kurze Zeit ohne Aufpreis enthalten, ein späterer Preis ist nicht genannt.",
      ] },
      { heading: "Elektronische Rechnungen, Steuern und Abschluss", paragraphs: [
        "Eingehende elektronische Rechnungen im Format XRechnung und ZUGFeRD liest Sage Active in beiden Paketen ein. Den Versand elektronischer Rechnungen kündigt Sage als Funktion an, die in Kürze folgen soll. Für Betriebe, deren Pflicht zum Versand im inländischen Geschäftsverkehr je nach Vorjahresumsatz 2027 oder 2028 beginnt, ist das ein wichtiger Punkt für die Planung.",
        "Die Umsatzsteuervoranmeldung übermittelt Essentials monatlich oder vierteljährlich über ELSTER. Einen Bericht zur Einnahmenüberschussrechnung können Sie abrufen und an die Kanzlei geben, die EÜR selbst erstellt und übermittelt dann die Steuerberatung. Die Jahressteuererklärung ist in Sage Active nicht möglich, für die E-Bilanz empfiehlt Sage eine Drittlösung. Alle Buchungen lassen sich im DATEV Format exportieren.",
      ] },
      { heading: "Bedienung, Technik und Vertrag", paragraphs: [
        "Sage Active läuft im Browser auf Windows, macOS und Android; auf dem Mac empfiehlt Sage Google Chrome, weil Safari nur eingeschränkt unterstützt wird. Enthalten sind 5 GB Speicher für Dokumente. Kunden, Lieferanten, Artikel, Sachkonten, Buchungen und Mitarbeiterstammdaten lassen sich über CSV Vorlagen importieren.",
        "Das Abonnement verlängert sich monatlich und ist zum Ende des Abrechnungsmonats kündbar. Mit der ersten Anmeldung verzichten Sie laut Nutzungsbedingungen auf das Widerrufsrecht. Nach einer Kündigung endet der Zugriff auf die Daten mit dem Vertrag, nach sechs Monaten werden sie gelöscht. Sichern Sie Ihre Daten deshalb rechtzeitig.",
      ] },
    ],
    costExamples: [
      { scenario: "Rechnungen schreiben, Buchführung macht die Kanzlei", calculation: "Starter 25 €", monthly: "25 €", yearly: "300 €" },
      { scenario: "Starter mit 400 Rechnungen im Monat", calculation: "25 € + Paket mit 100 Rechnungen 10 €", monthly: "35 €", yearly: "420 €" },
      { scenario: "Eigene Buchhaltung ohne Beschäftigte", calculation: "Essentials 49 €", monthly: "49 €", yearly: "588 €" },
      { scenario: "Buchhaltung und Lohn für 6 Beschäftigte", calculation: "49 € + 4 weitere Personen × 3 €", monthly: "61 €", yearly: "732 €" },
    ],
    costNote: "Listenpreise netto zzgl. MwSt., ohne Aktion. Das Rechnungspaket wird nur in Monaten berechnet, in denen Sie es tatsächlich brauchen.",
    verdict: "Für kleine Betriebe, die selbst buchen und wenige Beschäftigte abrechnen, ist Essentials ein starkes Gesamtpaket zu einem fairen Preis. Prüfen Sie vor dem Wechsel, wann der Versand elektronischer Rechnungen verfügbar ist, und klären Sie mit Ihrer Kanzlei, wer Jahresabschluss und E-Bilanz übernimmt.",
  },

  "sage-payroll": {
    checked: "27. September 2026",
    summary: "Sage Payroll ist eine Cloudlösung für die Lohnabrechnung kleiner Betriebe bis 150 Beschäftigte. Seit der Umstellung auf Pakete mit fünf enthaltenen Personen ist der Einstieg sehr günstig. Die drei Pakete unterscheiden sich vor allem durch Personalfunktionen.",
    bestFor: ["Arbeitgeber mit bis zu etwa 30 Beschäftigten und üblichen Beschäftigungsarten", "Betriebe, die die Lohnabrechnung aus dem Lohnbüro zurückholen möchten", "Gastronomie und andere Branchen mit Sofortmeldepflicht"],
    notFor: ["Baubetriebe mit Baulohn", "Arbeitgeber mit Betriebsrentnern oder im öffentlichen Dienst", "Unternehmen mit mehr als 150 Beschäftigten"],
    sections: [
      { heading: "Neues Paketmodell statt Preis je Kopf", paragraphs: [
        "Auf der aktuellen Produktseite bietet Sage drei Pakete an: Payroll Essentials für 20 €, Standard für 30 € und Premium für 40 € pro Monat, jeweils mit fünf Beschäftigten und zzgl. MwSt. Jede weitere Person kostet 3 €, 5 € beziehungsweise 7 € pro Monat. Insgesamt lassen sich bis zu 150 Beschäftigte abrechnen.",
        "Eine ältere, weiterhin erreichbare Preisseite nennt noch Preise ab 6,50 € beziehungsweise 8,50 € je Beschäftigtem und gesonderte Beträge für zusätzliche Abrechnungen und Korrekturen. Die Kaufschaltflächen der Produktseite führen jedoch zu den neuen Paketen. Wir verwenden deshalb das Paketmodell und empfehlen, den gültigen Preis vor Vertragsschluss schriftlich bestätigen zu lassen.",
      ] },
      { heading: "Was alle Pakete abrechnen", paragraphs: [
        "Die Lohnabrechnung selbst ist in allen Paketen gleich: Steuern und Sozialversicherungsbeiträge werden automatisch berechnet, Meldungen an Krankenkassen und Behörden automatisch erstellt und versendet. Auch Sofortmeldungen für Branchen wie die Gastronomie sind vorgesehen. Beschäftigte erhalten einen eigenen Zugang für Abrechnungen und Steuerdokumente; der Versand von Lohnscheinen per unverschlüsselter E-Mail ist aus Datenschutzgründen nicht vorgesehen.",
        "Enthalten sind außerdem die mobile App, bis zu drei Abwesenheitsarten, Mitarbeiterdokumente, eine Benutzer und Rechteverwaltung, die Abrechnung mehrerer Firmen sowie ein Buchhaltungsexport für Sage und DATEV. Die Lösung wird laut Sage seit 2009 in Leipzig entwickelt.",
      ] },
      { heading: "Wofür sich Standard und Premium lohnen", paragraphs: [
        "Standard ergänzt ein personalisiertes Portal für das Onboarding, die Erfassung von Arbeitszeiten und Überstunden, Genehmigungsabläufe, Berichte zu Arbeitszeittabellen, ein Organigramm sowie die Verwaltung aller Urlaubs und Abwesenheitsarten. Premium bringt zusätzlich Schichtplanung mit Einsatzplänen und das Einreichen und Genehmigen von Spesen per App. Recruiting und Performance lassen sich ab Standard zubuchen.",
        "Wer ausschließlich abrechnen möchte, braucht also kein höheres Paket. Standard lohnt sich, sobald Arbeitszeiten ohnehin digital erfasst werden müssen, Premium vor allem für Betriebe mit Schichtbetrieb.",
      ] },
      { heading: "Grenzen und Support", paragraphs: [
        "Sage nennt die ausgeschlossenen Gruppen klar: Baulohn, Betriebsrentner und öffentlicher Dienst sind nicht möglich; dafür verweist der Hersteller auf die Sage HR Suite. Fragen werden über Tickets im Support Center beantwortet. Wie bei jeder Lohnsoftware bleibt die Verantwortung für korrekt eingegebene Daten beim Arbeitgeber.",
      ] },
    ],
    costExamples: [
      { scenario: "5 Beschäftigte, nur Lohn", calculation: "Essentials 20 €", monthly: "20 €", yearly: "240 €" },
      { scenario: "12 Beschäftigte, nur Lohn", calculation: "20 € + 7 × 3 €", monthly: "41 €", yearly: "492 €" },
      { scenario: "12 Beschäftigte mit Zeiterfassung", calculation: "Standard 30 € + 7 × 5 €", monthly: "65 €", yearly: "780 €" },
      { scenario: "30 Beschäftigte im Schichtbetrieb", calculation: "Premium 40 € + 25 × 7 €", monthly: "215 €", yearly: "2.580 €" },
    ],
    costNote: "Listenpreise netto zzgl. MwSt. auf Basis der aktuellen Paketübersicht. Zubuchbare Module wie Recruiting sind nicht enthalten.",
    verdict: "Für kleine Arbeitgeber mit üblichen Lohnfällen gehört Sage Payroll zu den günstigsten Cloudlösungen mit vollständigem Meldewesen. Prüfen Sie vorab die Ausschlussliste und lassen Sie sich wegen der zwei unterschiedlichen Preisseiten den gültigen Tarif bestätigen.",
  },

  "sage-hr-payroll": {
    checked: "27. September 2026",
    summary: "Sage HR & Payroll kombiniert umfangreiche Personalfunktionen mit einer Lohnabrechnung. Schon Essentials enthält Zeiten, Schichten und Spesen. Die Lohnabrechnung von Standard und Premium beruht laut Hersteller auf einer Desktop Lösung, was Sie bei der Auswahl kennen sollten.",
    bestFor: ["Mittelständische Betriebe, laut Sage ab etwa 50 Beschäftigten", "Unternehmen mit Schichtbetrieb, die Personalplanung und Lohn verbinden wollen", "Betriebe mit Sonderlöhnen, die Standard oder Premium nutzen"],
    notFor: ["Sehr kleine Teams, die nur abrechnen möchten und mit Sage Payroll günstiger fahren", "Unternehmen, die zwingend eine reine Cloudumgebung für jede Lohnart verlangen", "Betriebe mit Baulohn, die nur Essentials buchen möchten"],
    sections: [
      { heading: "Pakete und Preise", paragraphs: [
        "Essentials kostet 40 €, Standard 60 € und Premium 80 € pro Monat, jeweils für fünf Beschäftigte und zzgl. 19 % MwSt. Weitere Personen kosten ab 7 €, ab 9 € beziehungsweise ab 11 € im Monat. Sage wirbt mit flexiblem Start, jederzeitiger Kündigung und ohne versteckte Kosten. Einen Test über 30 Tage bietet die Seite nur für Essentials an; Standard und Premium lernen Sie über eine Webdemo kennen.",
      ] },
      { heading: "Essentials ist breiter als der Name vermuten lässt", paragraphs: [
        "Essentials enthält ein personalisiertes Onboarding Portal, Arbeitszeittabellen mit Überstunden und Berichten, ein Organigramm, automatisierte Genehmigungsabläufe, alle Arten von Urlaub und Abwesenheit, Schichtplanung mit Einsatzplänen sowie Spesen per App. Hinzu kommen die automatische Lohnabrechnung mit gesetzlichen Meldungen, die mobile App, Benutzer und Rechteverwaltung, mehrere Firmen und der Buchhaltungsexport für Sage und DATEV.",
        "Zum Vergleich: Bei Sage HR würden Zeit und Schichten zusammen 5 € je Person und Monat zusätzlich zum Basispreis kosten, und die Lohnabrechnung fehlt dort ganz. Bei größeren Belegschaften kann Sage HR & Payroll Essentials deshalb günstiger sein als die Kombination aus Sage HR und einer separaten Lohnlösung.",
      ] },
      { heading: "Standard und Premium für komplexere Abrechnungen", paragraphs: [
        "Standard ergänzt eine Lohnabrechnung für komplexere Geschäftsfälle mit Sonderlöhnen, Mehrmandantenfähigkeit, Auswertungen über ein Controlling Modul und die Korrespondenz mit allen zuständigen Behörden. Premium kommt mit Korrektursimulation, automatisierten Korrekturabrechnungen und Abrechnungsläufen, einfacher Projektzeiterfassung, Performancemanagement mit OKR, 360 Grad Feedback und Befragungen sowie Recruiting mit Bewerberpipeline, Scorecards, Stellenseiten und Interviewplanung.",
        "Laut FAQ der Produktseite umfasst Essentials eine Cloud Lohnabrechnung, Standard und Premium dagegen eine Desktop Lohnabrechnung mit erweiterten Funktionen. Fragen Sie deshalb konkret, wo die Abrechnung technisch läuft, wer Updates einspielt und wie Beschäftigte und Steuerberatung darauf zugreifen.",
      ] },
      { heading: "Ausschlüsse, Datenschutz und Support", paragraphs: [
        "Essentials kann keine Sonderlöhne abbilden: Baulohn, öffentlicher Dienst und Versorgungsbezüge für Betriebsrentner sind ausgeschlossen und verlangen Standard oder Premium. Die Lösung ist laut Sage DSGVO konform und arbeitet mit rollenbasierten Rechten. Ein Upgrade auf ein höheres Paket ist ohne Datenverlust möglich, Support gibt es über Tickets.",
      ] },
    ],
    costExamples: [
      { scenario: "10 Beschäftigte mit Zeit und Schichten", calculation: "Essentials 40 € + 5 × 7 €", monthly: "75 €", yearly: "900 €" },
      { scenario: "50 Beschäftigte ohne Sonderlöhne", calculation: "Essentials 40 € + 45 × 7 €", monthly: "355 €", yearly: "4.260 €" },
      { scenario: "50 Beschäftigte mit Sonderlöhnen", calculation: "Standard 60 € + 45 × 9 €", monthly: "465 €", yearly: "5.580 €" },
      { scenario: "50 Beschäftigte mit Recruiting und Performance", calculation: "Premium 80 € + 45 × 11 €", monthly: "575 €", yearly: "6.900 €" },
    ],
    costNote: "Die Aufpreise je Person sind als Mindestwerte angegeben. Listenpreise netto zzgl. 19 % MwSt.",
    verdict: "Sage HR & Payroll bietet für mittelgroße Belegschaften viel Funktion je Euro, besonders in Essentials. Entscheidend ist die Frage nach Sonderlöhnen: Wer sie braucht, landet bei Standard oder Premium und sollte die Desktop Architektur der Lohnabrechnung vor Vertragsschluss genau verstehen.",
  },

  "sage-hr": {
    checked: "27. September 2026",
    summary: "Sage HR ist eine modulare Personalsoftware ohne Lohnabrechnung. Jedes Modul hat einen öffentlichen Preis je Person, was die Kalkulation sehr transparent macht. Bei wachsender Belegschaft und vielen Modulen steigen die Kosten allerdings schnell.",
    bestFor: ["Kleine und mittlere Unternehmen, die Urlaub, Krankmeldungen und Personalakten digitalisieren wollen", "Betriebe, die Zeiterfassung oder Schichtplanung schrittweise einführen möchten", "Teams, deren Lohnabrechnung bei der Kanzlei bleibt"],
    notFor: ["Unternehmen, die Personal und Lohn in einem System suchen", "Betriebe mit seltenen Einstellungen, für die sich 175 € Recruiting pro Monat nicht rechnen", "Organisationen, die ein Paket mit festem Gesamtpreis bevorzugen"],
    sections: [
      { heading: "Das Baukastenmodell", paragraphs: [
        "Sage HR Basis kostet 4,50 € je Beschäftigtem und Monat, zzgl. MwSt. Enthalten sind Abwesenheitsmanagement mit digitalen Anträgen und Genehmigungen, eine digitale Mitarbeiterakte mit interaktivem Organigramm, Selbstbedienung für Beschäftigte und die mobile App für Mitarbeitende und Führungskräfte.",
        "Dazu lassen sich Module einzeln buchen: Arbeitszeittabellen, Performance und Schichtplanung kosten je 2,50 €, Ausgaben 1,50 € je Person und Monat. Recruiting wird pauschal mit 175 € pro Monat berechnet. Sage zeigt zwei Beispielpakete: das Zeit Paket für 7,00 € und das Schicht Paket für 9,50 € je Person. Einen Preisrechner stellt Sage ebenfalls bereit.",
      ] },
      { heading: "Die Module im Einzelnen", paragraphs: [
        "Die Arbeitszeittabellen erfassen Zeiten auch projektbezogen, erlauben eigene Arbeitsmuster, aktualisieren Fehlzeiten automatisch und haben individuelle Freigabeprozesse. Die Schichtplanung erstellt Dienste für jedes Team, benachrichtigt Beschäftigte mit einem Klick, weist Vertretungen zu und definiert Regeln für das Zusammenspiel mit Arbeitszeit und Abwesenheit.",
        "Performance verbindet Unternehmens, Team und individuelle Ziele mit ganzjährigem Feedback und anonymen Umfragen. Ausgaben wandelt Belegfotos aus der App in Spesenabrechnungen um. Recruiting veröffentlicht Stellen auf eigenen Seiten, zeigt Bewerbungen in einer Pipeline per Ziehen und Ablegen und gleicht Gesprächstermine mit Outlook ab.",
      ] },
      { heading: "Vertrag, Test und Datenschutz", paragraphs: [
        "Laut FAQ können Sie mit einer Frist von einem Monat kündigen und gehen keine langfristige Bindung ein. Der Test über 30 Tage funktioniert ohne Zahlungsdaten und endet automatisch. Zum Datenschutz beschreibt die Seite allgemein den Betrieb in Rechenzentren der Europäischen Union und eine Verschlüsselung mit AES 256 Bit; lassen Sie sich die Angaben für Ihren Vertrag im Auftragsverarbeitungsvertrag bestätigen.",
        "Eine Lohnabrechnung ist ausdrücklich nicht enthalten. Sage empfiehlt dafür die Ergänzung mit der eigenen Online Lohnabrechnung oder den Wechsel zu Sage HR & Payroll.",
      ] },
    ],
    costExamples: [
      { scenario: "15 Beschäftigte, nur Basis", calculation: "15 × 4,50 €", monthly: "67,50 €", yearly: "810 €" },
      { scenario: "20 Beschäftigte mit Zeiterfassung", calculation: "20 × 7,00 € (Zeit Paket)", monthly: "140 €", yearly: "1.680 €" },
      { scenario: "30 Beschäftigte mit Schichten und Spesen", calculation: "30 × (9,50 € + 1,50 €)", monthly: "330 €", yearly: "3.960 €" },
      { scenario: "25 Beschäftigte mit Zeit, Performance und Recruiting", calculation: "25 × 9,50 € + 175 €", monthly: "412,50 €", yearly: "4.950 €" },
    ],
    costNote: "Listenpreise netto zzgl. MwSt. Eine Lohnabrechnung ist in keinem Beispiel enthalten.",
    verdict: "Sage HR ist eine faire Wahl für Betriebe, die Personalprozesse Schritt für Schritt digitalisieren und jeden Euro vorher kennen wollen. Sobald auch die Lohnabrechnung in dasselbe System soll oder viele Module für alle Beschäftigte nötig sind, lohnt sich die Gegenrechnung mit Sage HR & Payroll.",
  },

  "sage-50-handwerk": {
    checked: "27. September 2026",
    summary: "Sage 50 Handwerk ist eine lokal installierte Branchenlösung für Handwerksbetriebe aller Gewerke. Die Software kennt typische Abläufe vom Aufmaß bis zur Schlussrechnung und bietet die wichtigen Handwerksschnittstellen. Der günstige Einstieg deckt aber nicht alle Rechnungsarten ab.",
    bestFor: ["Handwerksbetriebe mit Aufmaß, Material und Projekten, etwa SHK, Elektro oder Dachdecker", "Betriebe, die Ausschreibungen über GAEB bearbeiten und beim Großhandel über IDS oder OCI bestellen", "Unternehmen, die eine installierte Software mit Betreuung durch einen Fachhändler bevorzugen"],
    notFor: ["Betriebe, die eine reine Browserlösung ohne Installation suchen", "Einzelbetriebe mit Abschlagsrechnungen, die nur den Essential Preis zahlen möchten", "Unternehmen, die monatlich kündbar bleiben wollen"],
    sections: [
      { heading: "Zwei Pakete, ein entscheidender Unterschied", paragraphs: [
        "Essential kostet 19,90 € pro Monat für einen Benutzer, Enterprise 59 € pro Monat für unbegrenzt viele Benutzer, jeweils zzgl. MwSt. bei jährlicher Rechnungsstellung und zwölf Monaten Mindestlaufzeit. Kürzere oder längere Laufzeiten sind laut Sage auf Anfrage möglich. Bestellt wird über ein Angebot, nicht direkt im Onlineshop.",
        "Essential enthält Angebote, Aufträge und Rechnungen, elektronische Rechnungen in ZUGFeRD 2.1 und XRechnung, Stammdaten, Projektverwaltung, den SmartFinder und den Express Auftrag. Enterprise ergänzt Teil und Schlussrechnungen und den Terminkalender. Wer auf Baustellen mit Abschlägen arbeitet, sollte deshalb Enterprise als realistischen Preis ansetzen, auch mit nur einem Arbeitsplatz.",
      ] },
      { heading: "Handwerksfunktionen und Schnittstellen", paragraphs: [
        "Zum Funktionsumfang der Produktfamilie gehören Aufmaß direkt im Angebot, Zahlungen, offene Posten und Mahnwesen, Lager mit Projekt und Fahrzeuglagern, Stücklisten und Seriennummern, automatische Bestellvorschläge, Inventur, ein Kassenmodul sowie ein Controlling Center mit Reportdesigner. Für Wartungsanlagen gibt es eine Historie mit Messwerten und Serienbriefen für anstehende Termine.",
        "Als Schnittstellen nennt Sage OCI und IDS für den Großhandel, GAEB für Ausschreibungen sowie DATANORM, ELDANORM und ZVEHNorm. Nachkalkulation, Wartung und Service, Regiezentrum, Termin und Ressourcenplanung, Dokumentenmanagement und Finanzbuchhaltung sind je nach Paket optional zubuchbar. Öffentliche Preise für diese Bausteine nennt Sage nicht.",
      ] },
      { heading: "Installation, Cloud Paket und Betreuung", paragraphs: [
        "Die Software wird lokal installiert; Sage nennt als Voraussetzung mindestens 2 GB freien Speicher, einen Prozessor mit 2,0 GHz und 4 GB Arbeitsspeicher. Updates für gesetzliche Änderungen kommen als Servicepacks und setzen einen gültigen Wartungsvertrag voraus. Vertrieb, Demoversion für 30 Tage und Datenübernahme laufen über Fachhandelspartner.",
        "Mobiles Arbeiten ermöglicht das zubuchbare Cloud Paket des Partners Loginfinity: Monteure erhalten Termine und Aufträge auf dem Mobilgerät, erfassen Zeiten vor Ort und nutzen eine mobile Projektmappe mit Fotos und Protokollen. Die Dokumente liegen laut Sage in einem deutschen Rechenzentrum. In der FAQ tauchen noch ältere Editionsnamen auf; maßgeblich sind die Pakete Essential und Enterprise.",
      ] },
    ],
    costExamples: [
      { scenario: "Ein Büroarbeitsplatz ohne Teilrechnungen", calculation: "Essential 19,90 € × 12", monthly: "19,90 €", yearly: "238,80 €" },
      { scenario: "Ein Arbeitsplatz mit Abschlags und Schlussrechnungen", calculation: "Enterprise 59 € × 12", monthly: "59 €", yearly: "708 €" },
      { scenario: "Drei Arbeitsplätze im Büro", calculation: "Enterprise 59 € × 12", monthly: "59 €", yearly: "708 €" },
    ],
    costNote: "Listenpreise netto zzgl. MwSt. bei Jahresrechnung. Schnittstellen, Finanzbuchhaltung, Cloud Paket und Einrichtung durch den Fachhändler kommen hinzu.",
    verdict: "Sage 50 Handwerk ist eine solide, fachlich passende Lösung für Handwerksbetriebe, die mit installierter Software und einem Fachhändler arbeiten möchten. Rechnen Sie mit Enterprise, sobald Teilrechnungen oder mehrere Arbeitsplätze nötig sind, und lassen Sie sich alle Schnittstellen und das Cloud Paket einzeln beziffern.",
  },

  "sage-100": {
    checked: "27. September 2026",
    summary: "Sage 100 ist ein modulares ERP für den Mittelstand mit Warenwirtschaft, Rechnungswesen und Produktion. Die Modulpreise sind öffentlich, die tatsächlichen Projektkosten hängen aber stark von Zusatzlösungen und Einführung ab.",
    bestFor: ["Mittelständische Handels und Fertigungsbetriebe mit individuellen Prozessen", "Unternehmensgruppen mit mehreren Mandanten, Sprachen oder Währungen", "Betriebe, die ihr ERP lokal auf eigenen Servern betreiben möchten"],
    notFor: ["Kleinstbetriebe, die eine sofort nutzbare Cloudsoftware suchen", "Unternehmen ohne Zeit und Budget für eine Einführung mit Fachhändler", "Betriebe, die monatlich kündbar bleiben wollen"],
    sections: [
      { heading: "Drei Kernmodule mit öffentlichen Preisen", paragraphs: [
        "Die Warenwirtschaft kostet ab 56 €, das Rechnungswesen ab 58 € und die Produktion ab 90 € je Nutzer und Monat, jeweils bei jährlicher Rechnungsstellung, zwölf Monaten Mindestlaufzeit und zzgl. MwSt. Das Produktionsmodul enthält das Warenwirtschaftspaket bereits. Alle drei Module erlauben unbegrenzt viele Mandanten.",
        "Die Warenwirtschaft umfasst Kunden und Lieferanten, Artikel und Preislisten, Auftragsverwaltung, Bestellwesen und Kommissionierung, Lager und Inventur sowie Seriennummern und Chargen. Auf der Produktseite nennt Sage zusätzlich Disposition nach Bestand und Reichweite, die Anbindung von Versanddienstleistern, eine automatische Sanktionslistenprüfung und Qualitätsmanagement.",
      ] },
      { heading: "Rechnungswesen und Produktion", paragraphs: [
        "Das Rechnungswesen bringt Controlling und Dashboard, Finanz und Anlagenbuchhaltung, Kassenbuch und digitale Belegverarbeitung, Zahlungsverkehr mit Bankanbindung, Bilanzierung und Kostenrechnung nach Kostenstellen, Kostenträgern und Kostenarten, DATEV Export und Import, Mahnwesen, die Umsatzsteuervoranmeldung über ELSTER und mehr als 40 Kennzahlen.",
        "Die Produktion richtet sich an Einzel, Projekt und Serienfertiger. Enthalten sind Fertigungssteuerung, Ressourcenliste, CAD Schnittstelle, Kostensimulation, Vor und Nachkalkulation, mobile Betriebsdatenerfassung, Fremdfertigung, grafische Ressourcenplanung und Projektfertigung.",
      ] },
      { heading: "Erweiterungen und Betrieb", paragraphs: [
        "Als integrierte Zusatzlösungen nennt Sage einen KI Assistenten, elektronische Rechnungen mit Versand in XRechnung und ZUGFeRD sowie einem zentralen Rechnungseingang mit Texterkennung, ein erweitertes Kundenmanagement mit Kampagnen und Service, Projektmanagement, Webshop und Marktplatzanbindung, Kasse, Dokumentenarchiv sowie Personal und Lohn. Über eine API sind mehr als 200 Partneranwendungen verfügbar. Preise für diese Erweiterungen sind nicht öffentlich.",
        "Sage 100 läuft lokal auf eigenen Servern oder in der Cloud mit deutschen Rechenzentren und automatischen Sicherungen. Für die Cloudvariante nennt Sage keinen Listenpreis. Laut Hersteller eignet sich das System vom Einzelunternehmen bis zu Betrieben mit 50 bis 100 Nutzern und mehreren tausend Belegen pro Tag. Deutschlandweit betreuen über 200 zertifizierte Fachhändler die Einführung.",
      ] },
    ],
    costExamples: [
      { scenario: "3 Nutzer Warenwirtschaft, 2 Nutzer Rechnungswesen", calculation: "3 × 56 € + 2 × 58 €", monthly: "284 €", yearly: "3.408 €" },
      { scenario: "5 Nutzer Produktion, 2 Nutzer Rechnungswesen", calculation: "5 × 90 € + 2 × 58 €", monthly: "566 €", yearly: "6.792 €" },
    ],
    costNote: "Mindestpreise laut Produktseite, netto zzgl. MwSt., bei Jahresrechnung. Einführung, Schulung, Zusatzlösungen und Anpassungen sind nicht enthalten und machen in ERP Projekten oft einen großen Teil der Kosten aus.",
    verdict: "Sage 100 ist ein bewährtes ERP für Mittelständler mit klar beschriebenen, individuellen Prozessen und der Bereitschaft zu einem echten Einführungsprojekt. Die offenen Modulpreise helfen bei der ersten Einordnung, ersetzen aber kein vollständiges Angebot über drei Jahre.",
  },

  "sage-intacct": {
    checked: "27. September 2026",
    summary: "Sage Intacct ist eine Cloudplattform für Finanzteams wachsender Unternehmen. Sage veröffentlicht Richtpreise für nahezu jedes Modul. Der Einstieg bei 1.390 € pro Monat enthält zwei Vollnutzer; Bankanbindung, Multiwährung oder mehrere Gesellschaften kommen hinzu.",
    bestFor: ["Unternehmen mit eigener Finanzabteilung und wachsendem Berichtsbedarf", "Gruppen mit mehreren Gesellschaften, die konsolidieren müssen", "Dienstleister mit Projekten, Dimensionen und wiederkehrenden Umsätzen"],
    notFor: ["Kleine Betriebe mit einer Gesellschaft und einfacher Buchhaltung", "Unternehmen, die Warenwirtschaft und Produktion im selben System brauchen", "Betriebe ohne Budget für ein Einführungsprojekt"],
    sections: [
      { heading: "Was der Standard enthält", paragraphs: [
        "Der Richtpreis von 1.390 € pro Monat netto zzgl. MwSt. umfasst zwei Business User und die Finanzkernmodule: Hauptbuch, Debitoren und Kreditorenbuchhaltung, elektronische Rechnungen, Zahlungsverkehr und Cash Management, Verkauf und Auftragserfassung, Einkauf und Bestellwesen, eine Steuerlösung und die nationale Konsolidierung. Dazu kommen Berichte und Dashboards, Plattformdienste, Zugang zum Marketplace, Backups mit unbegrenztem Speicher, regelmäßige Updates und die Lernplattform.",
        "Sage Copilot und eine Erkennung von Anomalien per künstlicher Intelligenz sind ebenfalls im Standard enthalten. Das AI Gateway kostet 25 € pro Monat.",
      ] },
      { heading: "Die wichtigsten Zusatzmodule mit Richtpreisen", paragraphs: [
        "Automatisierter Rechnungseingang kostet ab 90 €, Abschlussautomatisierung 329 €, Multiwährung 585 €, Bankanbindung 160 €, weitere Steuerlösungen 250 €, dynamische Zuweisungen 585 € und die Anlagenbuchhaltung ab 190 € pro Monat. Für mehrere Gesellschaften nennt Sage 215 € plus 60 € je Einheit, für die globale Konsolidierung 1.005 € pro Monat. Umsatzrealisierung, Projektmodule und intelligente Zeiterfassung gibt es auf Anfrage.",
        "Bei den Lizenzen kostet jeder weitere Business User 240 €, ein Operational User 100 € und ein Paket mit zehn Mitarbeiterzugängen 130 € pro Monat. Interaktive Berichte kosten 80 €, der Zugang über Web Services und API 160 € pro Monat.",
      ] },
      { heading: "Einführung, Vertrag und Nachweise", paragraphs: [
        "Implementierung, Datenmigration und Schulungen werden getrennt von der Lizenz ausgewiesen. Einen Preisrechner gibt es nicht; nach einem Bedarfsgespräch von etwa 30 Minuten erhalten Sie laut Sage innerhalb von 24 bis 48 Stunden ein schriftliches Angebot. Für Jahres und Mehrjahresverträge sind Rabatte möglich. Die Einführung begleiten Sage und spezialisierte Partner.",
        "Sage nennt Nachweise nach GoBD, DSGVO, ISO 27001, 27017 und 27018, SOC 1 und SOC 2 Type II, ISAE 3402 und 3000 sowie die Unterstützung von IFRS 15 und ASC 606. Aussagen wie ein Abschluss in Tagen statt Wochen oder ein fünffacher ROI stammen vom Hersteller und sind keine unabhängigen Messwerte.",
      ] },
    ],
    costExamples: [
      { scenario: "Standard mit 2 Business Usern", calculation: "1.390 €", monthly: "1.390 €", yearly: "16.680 €" },
      { scenario: "5 Vollnutzer, Bankanbindung, Rechnungseingang", calculation: "1.390 € + 3 × 240 € + 160 € + 90 €", monthly: "2.360 €", yearly: "28.320 €" },
      { scenario: "Gruppe mit 4 Gesellschaften und Fremdwährung", calculation: "1.390 € + 215 € + 4 × 60 € + 585 €", monthly: "2.430 €", yearly: "29.160 €" },
    ],
    costNote: "Monatliche Richtpreise netto zzgl. MwSt. laut Preisübersicht. Die Berechnung der Gesellschaften folgt der Angabe 215 € plus 60 € je Einheit; lassen Sie die genaue Zählweise bestätigen. Einführung und Migration sind nicht enthalten.",
    verdict: "Sage Intacct ist eine der transparentesten Finanzplattformen ihrer Klasse und passt zu Unternehmen, deren Finanzteam mehr Automatisierung, Konsolidierung und Berichte braucht. Kalkulieren Sie realistisch mit mehr als zwei Nutzern und den Modulen, die Sie ab dem ersten Tag benötigen.",
  },

  "sage-sales-management": {
    checked: "27. September 2026",
    summary: "Sage Sales Management ist ein mobiles CRM für Außendienstteams. Sprachberichte mit Sage Copilot, Offline Nutzung und Routenplanung sind die Stärken. Die Mindestabnahme von fünf Lizenzen und kostenpflichtige Angebotsfunktionen erhöhen den Einstieg.",
    bestFor: ["Vertriebsteams mit Geschäftskunden und hoher Reisetätigkeit", "Unternehmen, deren Außendienst Besuche heute verspätet oder gar nicht dokumentiert", "Teams, die mit Microsoft 365 oder Google Workspace arbeiten"],
    notFor: ["Kleine Teams mit weniger als fünf Vertriebskräften", "Unternehmen, die Marketing, Service und Vertrieb in einer Plattform suchen", "Betriebe, die eine fertige Anbindung an ein deutsches ERP voraussetzen"],
    sections: [
      { heading: "Preis und Zusatzmodule", paragraphs: [
        "Das Paket Professional kostet 55 € je Nutzer und Monat bei mindestens fünf Nutzern, also mindestens 275 € im Monat. Zubuchbar sind Angebote und Bestellungen für 7 €, Vertriebskampagnen für 10 € und weitere Sprachberichte für 10 € je Nutzer und Monat. Der Signatur Manager enthält 15 Signaturen pro Monat, mehr kosten ab 30 € monatlich. Einen Hinweis zur Umsatzsteuer enthält die Preisangabe nicht.",
      ] },
      { heading: "Funktionen für unterwegs", paragraphs: [
        "Accounts, Kontakte und Verkaufschancen sind jeweils bis 100.000 Datensätze möglich. Enthalten sind Kalender und Aufgaben, Aktivitätsverfolgung, Videoanrufe, eine App für Microsoft Teams, eine zeitliche Übersicht der Teamaktivitäten und geolokalisierte Verkaufschancen. Die Apps für iOS und Android funktionieren auch offline und erfassen Anrufe, Standortdaten, E-Mails und Termine.",
        "Sage Copilot fasst E-Mails nach Priorität zusammen, legt Termine per Sprachbefehl an, scannt Visitenkarten und unterstützt beim Formulieren von E-Mails. Mit Sprachberichten diktieren Vertriebskräfte ihren Besuch und erhalten eine strukturierte Zusammenfassung mit Vorschlägen für die nächsten Schritte. 150 Sprachberichte sind enthalten.",
      ] },
      { heading: "Steuerung, Anpassung und Grenzen", paragraphs: [
        "Für die Vertriebsleitung gibt es Dashboards, Ziele mit dem GoalManager und Mitteilungen mit Lesebestätigung über den NewsManager. Bis zu fünf Geschäftseinheiten, drei Hierarchieebenen und 100 eigene Felder lassen sich abbilden, dazu Mehrwährung, eigene Formulare und ein angepasstes Erscheinungsbild der App.",
        "Speicher und Schnittstellen sind offen begrenzt: 5 GB Dateispeicher plus 512 MB je Nutzer, 10 GB Datenspeicher plus 20 MB je Nutzer und 250 API Anfragen pro Minute. Für die Geolokalisierung sind 20.000 Adressen beim ersten Import und 1.000 pro Monat vorgesehen.",
      ] },
      { heading: "Integrationen und ERP Anbindung", paragraphs: [
        "Sage nennt Integrationen mit Microsoft 365 einschließlich Teams, Outlook, Exchange und Anmeldung über Office 365, mit Google Kalender und Gmail, Zoom, Mailchimp, Zendesk sowie Zapier und Make. Daten lassen sich per CSV synchronisieren oder über die API anbinden.",
        "Die auf der deutschen Seite beschriebene native ERP Anbindung bezieht sich auf Sage 50 und Sage 200 in einem spanischsprachigen Textblock sowie auf Sage X3 über die API. Eine fertige Anbindung an Sage 100 oder andere in Deutschland verbreitete ERP Systeme wird nicht konkret beschrieben. Lassen Sie sich diesen Weg deshalb vorführen.",
      ] },
    ],
    costExamples: [
      { scenario: "5 Nutzer, Grundpaket", calculation: "5 × 55 €", monthly: "275 €", yearly: "3.300 €" },
      { scenario: "8 Nutzer mit Angeboten und Bestellungen", calculation: "8 × (55 € + 7 €)", monthly: "496 €", yearly: "5.952 €" },
      { scenario: "12 Nutzer mit Angeboten und Kampagnen", calculation: "12 × (55 € + 7 € + 10 €)", monthly: "864 €", yearly: "10.368 €" },
    ],
    costNote: "Listenpreise laut Produktseite ohne Angabe zur Umsatzsteuer. Integration und Einrichtung sind nicht enthalten.",
    verdict: "Für Außendienstteams ab fünf Personen ist Sage Sales Management eine durchdachte, sehr mobile Lösung, die die Dokumentation von Besuchen spürbar erleichtern kann. Rechnen Sie Angebote und Bestellungen fast immer mit ein und prüfen Sie die ERP Anbindung vor Vertragsschluss mit echten Daten.",
  },
};
