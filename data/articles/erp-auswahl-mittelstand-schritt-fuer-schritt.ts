import type { GuideBody } from "../guide-types";
import { achtung, fakt, h3, ol, p, table, tipp, ul } from "./helpers";

export const body: GuideBody = {
  legalNote: "Preise sind Listenpreise der Hersteller zum Stand 25. und 27. September 2026. Einführung, Anpassungen, Schnittstellen und Schulung sind darin nicht enthalten und werden meist über Partner angeboten.",
  keyTakeaways: [
    "Ein ERP System bildet Angebot, Auftrag, Einkauf, Lager, Rechnung und Finanzen in einer Datenbasis ab. Die Auswahl beginnt deshalb bei Ihren Abläufen, nicht bei Produktlisten.",
    "Schreiben Sie ein Pflichtenheft mit Muss, Soll und Kann Kriterien und lassen Sie sich in der Demo Ihren eigenen Musterauftrag zeigen.",
    "Die Lizenz ist nur ein Teil der Kosten. Einführung, Datenmigration, Schnittstellen, Schulung und Anpassungen kommen hinzu und liegen oft über der Jahreslizenz.",
    "Bei zehn Nutzern liegen die Listenpreise der Lizenz im Beispiel zwischen rund 6.700 und 19.600 Euro im Jahr, Xentral Starter mit unbegrenzten Nutzern bei rund 4.200 Euro. Zusatzlösungen und Einführung sind darin nicht enthalten.",
    "Planen Sie die Einführung als Projekt mit Verantwortlichen, Abnahmekriterien, Testphase und Ausstiegsregeln, bevor Sie unterschreiben.",
  ],
  sections: [
    {
      heading: "Was ein ERP leistet und was nicht",
      blocks: [
        p("ERP steht für Enterprise Resource Planning. Im Mittelstand bedeutet das meist: ein System für Angebote, Aufträge, Einkauf, Lager, Rechnungen, Projekte und die Verbindung zur Finanzbuchhaltung. Alle Abteilungen arbeiten mit derselben Datenbasis, statt Informationen mehrfach in getrennten Programmen zu pflegen."),
        p("Der Begriff wird weit gefasst. Manche Anbieter nennen eine Auftragsabwicklung ERP, andere meinen eine vollständige Plattform mit Produktion und Konzernberichten. Deshalb gilt: Entscheidend sind Ihre Prozesse, nicht das Etikett."),
        table("ERP im Verhältnis zu anderen Programmen", ["Bereich", "Aufgabe", "Wann reicht es allein"], [
          ["Buchhaltung", "Belege, Buchungen, Steuer", "Dienstleister mit wenigen Aufträgen"],
          ["CRM", "Kontakte, Verkaufschancen", "Vertrieb ohne Lager und Warenfluss"],
          ["Warenwirtschaft", "Artikel, Bestände, Einkauf, Versand", "Handel ohne umfangreiche Projekte"],
          ["ERP", "Alle Bereiche in einer Datenbasis", "Wenn mehrere Bereiche eng zusammenarbeiten müssen"],
        ]),
        p("Wer noch keine Warenwirtschaft braucht, findet im Ratgeber [Software für Startups](/ratgeber/software-fuer-startups-die-ersten-zwoelf-monate) eine Übersicht, wann welches Programm sinnvoll wird."),
      ],
    },
    {
      heading: "Wann sich ein ERP lohnt",
      blocks: [
        p("Ein ERP kostet Geld und Aufmerksamkeit. Es lohnt sich, wenn die Reibung zwischen den Programmen größer ist als der Aufwand der Einführung. Typische Anzeichen:"),
        ul(
          "Dieselben Daten werden an mehreren Stellen eingegeben, etwa Kunde, Artikel und Preis.",
          "Bestände stimmen nicht, weil Lager, Verkauf und Einkauf getrennte Listen führen.",
          "Angebote und Aufträge lassen sich nicht nachverfolgen, und Rechnungen entstehen verspätet.",
          "Auswertungen kosten Tage, weil Zahlen aus mehreren Tabellen zusammengetragen werden müssen.",
          "Wichtiges Wissen steckt in Köpfen und privaten Tabellen. Fällt jemand aus, steht der Ablauf.",
        ),
        p("Mehr zu den Warnzeichen finden Sie im Ratgeber [Excel ablösen: Wann Tabellen zum Risiko werden](/ratgeber/excel-abloesen-wann-tabellen-zum-risiko-werden). Wer nur eines dieser Zeichen sieht, braucht nicht sofort ein ERP, sondern oft zuerst Ordnung im Prozess."),
      ],
    },
    {
      heading: "Schritt 1: Prozesse aufnehmen",
      blocks: [
        p("Der wichtigste Schritt geschieht vor jeder Demo. Beschreiben Sie einen typischen Auftrag von der Anfrage bis zur bezahlten Rechnung. Gehen Sie ihn gemeinsam mit den Menschen durch, die ihn bearbeiten, und notieren Sie, was wirklich passiert, nicht was im Handbuch steht."),
        ol(
          "**Ablauf skizzieren:** Anfrage, Angebot, Auftrag, Einkauf, Lager, Lieferung, Rechnung, Zahlung, Reklamation.",
          "**Schmerzpunkte markieren:** Wo wird doppelt erfasst? Wo entstehen Fehler? Wo wartet jemand auf eine Information?",
          "**Ausnahmen sammeln:** Sonderpreise, Teillieferungen, Gutschriften, Rahmenverträge, Streckengeschäfte, Serien oder Chargen.",
          "**Mengen festhalten:** Nutzer, Aufträge im Monat, Artikel, Kunden, Lagerorte, Gesellschaften.",
          "**Ziele festlegen:** Was soll nach einem Jahr besser sein, und woran messen wir es?",
        ),
        tipp("Nehmen Sie die Praxis ernst", "Die besten Hinweise kommen von den Beschäftigten, die täglich mit Aufträgen arbeiten. Lassen Sie jemanden aus dem Lager, jemanden aus dem Vertrieb und jemanden aus der Buchhaltung den Ablauf beschreiben."),
      ],
    },
    {
      heading: "Schritt 2: Das Pflichtenheft",
      blocks: [
        p("Aus der Prozessaufnahme entsteht das Pflichtenheft. Es beschreibt, was die Software können muss. Fachleute unterscheiden oft zwischen **Lastenheft** (das wünscht der Auftraggeber) und **Pflichtenheft** (so setzt der Anbieter es um). Für die Auswahl genügt in kleinen Betrieben eine gemeinsame Liste mit klarer Gewichtung."),
        table("Beispiel für eine Anforderungsmatrix", ["Anforderung", "Gewicht", "Frage an den Anbieter"], [
          ["Angebot, Auftrag und Rechnung ohne Neuerfassung", "Muss", "Bitte im Musterauftrag zeigen, mit unseren Positionen."],
          ["Lagerführung mit Chargen", "Muss", "Ist die Funktion im angebotenen Paket enthalten?"],
          ["Anbindung an den Onlineshop", "Soll", "Welche Shops sind bereits angebunden, was kostet die Schnittstelle?"],
          ["Projekt und Zeiterfassung", "Soll", "Wie werden Zeiten in Rechnungen übernommen?"],
          ["Auswertungen nach Kunde und Artikel", "Kann", "Welche Berichte gibt es, welche sind individuell?"],
          ["Datenexport", "Muss", "In welchen Formaten erhalten wir alle Daten?"],
        ], "Beispiel zur Veranschaulichung. Ihre Matrix richtet sich nach Ihren Prozessen."),
        p("Eine gute Regel: Jede Muss Anforderung wird in der Demo vorgeführt, nicht nur zugesagt. Alles, was nur zugesagt wird, schreiben Sie später in den Vertrag."),
      ],
    },
    {
      heading: "Schritt 3: Marktüberblick und Vorauswahl",
      blocks: [
        p("Der Markt ist groß, aber nicht beliebig. Für kleine und mittlere Betriebe lassen sich einige Klassen unterscheiden. Die Einordnung stützt sich auf die Herstellerangaben, die Softwarebrief geprüft hat. Sie ist kein Test."),
        table("ERP Klassen und Beispiele aus dem Katalog", ["Klasse", "Beispiele", "Passt, wenn", "Hinweis"], [
          ["Cloud ERP für kleine Teams", "[weclapp](/software/erp/weclapp), [Xentral](/software/erp/xentral)", "Sie schnell starten und wenig anpassen wollen", "weclapp trennt Pakete nach Dienstleistung und Handel, Xentral richtet sich an Handel mit Shopanbindung."],
          ["Modulare Plattform", "[Odoo](/software/erp/odoo)", "Sie viele Anwendungen verbinden und anpassen möchten", "Eine App ist kostenlos, für Standard und Custom fehlt ein verifizierter Euro Preis."],
          ["Klassisches Mittelstands ERP", "[Sage 100](/software/erp/sage-100), [Microsoft Dynamics 365 Business Central](/software/erp/microsoft-dynamics-365-business-central)", "Sie komplexe Abläufe, Mandanten oder Produktion haben", "Einführung über Fachhändler oder Partner, Lizenz ist nur ein Teil der Kosten."],
          ["Branchenlösung", "[Sage 50 Handwerk](/software/erp/sage-50-handwerk)", "Sie ein Handwerksbetrieb mit Aufmaß und Schlussrechnung sind", "Schnittstellen wie GAEB und DATANORM sind optional."],
          ["Finanzplattform", "[Sage Intacct](/software/erp/sage-intacct)", "Ihr Finanzteam Konsolidierung und Berichte braucht", "Richtpreis ab 1.390 € im Monat inklusive zwei Business Usern."],
        ], "Stand der Herstellerangaben: 25. und 27. September 2026."),
        p("Mehr zu den Unterschieden zwischen Handel und Dienstleistung finden Sie im Ratgeber [ERP für Handel oder Dienstleistung](/ratgeber/erp-handel-oder-dienstleistung). Eine Vorauswahl von drei Programmen genügt. Mehr Anbieter machen die Bewertung nicht besser, sondern langsamer."),
      ],
    },
    {
      heading: "Schritt 4: Demo mit eigenem Szenario",
      blocks: [
        p("Eine Standarddemo zeigt, was das Produkt gut kann. Eine Demo mit Ihrem Szenario zeigt, ob es zu Ihnen passt. Schicken Sie dem Anbieter vorab Ihren Musterauftrag mit Sonderfällen und bitten Sie darum, ihn live durchzuspielen."),
        ul(
          "**Drei bis fünf Szenarien:** Normalauftrag, Auftrag mit Sonderpreis, Teillieferung mit Rechnung, Retoure mit Gutschrift, Monatsabschluss.",
          "**Eine Bewertungsliste:** Alle Beteiligten bewerten dieselben Kriterien nach der Demo, am besten noch am selben Tag.",
          "**Fragen nach Grenzen:** Was ist Standard, was ist Anpassung, was kostet extra?",
          "**Referenzen:** Sprechen Sie mit einem Kunden ähnlicher Größe und Branche. Fragen Sie nach Einführungsdauer, Problemen und Support.",
        ),
        achtung("Versprechen sind keine Funktionen", "Notieren Sie jede Zusage, die in der Demo nur genannt, aber nicht gezeigt wird. Bitten Sie, sie im Angebot schriftlich zu bestätigen."),
      ],
    },
    {
      heading: "Die Kosten: Lizenz ist nur der Anfang",
      blocks: [
        table("Kostenblöcke eines ERP Projekts", ["Block", "Beispiele", "Worauf Sie achten"], [
          ["Lizenz oder Abo", "Preis je Nutzer, je Modul, je Auftrag", "Laufzeit, Mindestnutzer, Nutzungsgrenzen"],
          ["Einführung", "Beratung, Einrichtung, Test, Go live", "Festpreis oder Aufwand, Verantwortlichkeiten"],
          ["Datenmigration", "Kunden, Artikel, Offene Posten", "Bereinigung, Prüfung, Verantwortliche"],
          ["Schnittstellen", "Shop, Zahlung, Bank, Steuerberatung", "Einmalkosten und laufende Gebühren"],
          ["Anpassungen", "Formulare, Berichte, Sonderfunktionen", "Pflegeaufwand bei Updates"],
          ["Schulung", "Anwender, Administratoren", "Intern oder extern, Termine"],
          ["Betrieb", "Support, Hosting, Updates", "Reaktionszeiten, Kosten nach der Einführung"],
        ]),
        p("Die Lizenzkosten allein lassen sich bereits vergleichen. Das folgende Beispiel rechnet mit zehn Nutzern und Listenpreisen. Es zeigt Größenordnungen, nicht das Gesamtprojekt."),
        table("Beispiel: Lizenzkosten ohne Einführung (netto, Listenpreise)", ["Programm", "Rechnung", "Im Monat", "Im Jahr"], [
          ["Sage 100, Warenwirtschaft", "10 Nutzer × ab 56 €", "560 €", "6.720 €"],
          ["Business Central, Essentials", "10 Nutzer × 69,30 €", "693 €", "8.316 €"],
          ["weclapp, Dienstleistung", "10 Nutzer × 86 € (jährliche Zahlung)", "860 €", "10.320 €"],
          ["weclapp, Handel", "10 Nutzer × 163 € (jährliche Zahlung)", "1.630 €", "19.560 €"],
          ["Xentral, Starter", "ab 349 € inklusive 500 Aufträge und unbegrenzte Nutzer", "349 €", "4.188 €"],
        ], "Sage 100 mit zwölf Monaten Mindestlaufzeit bei jährlicher Rechnung. Business Central bei jährlicher Abrechnung, Lizenztypen und Partnerkosten kommen hinzu. Xentral berechnet über 500 Aufträge hinaus zusätzlich."),
        fakt("Warum die Einführung oft teurer ist als die Lizenz", "Ein ERP verändert Abläufe. Daten müssen übertragen, Prozesse abgestimmt, Schnittstellen eingerichtet und Beschäftigte geschult werden. Je stärker Sie anpassen, desto höher der Aufwand, auch später bei Updates. Lassen Sie sich Einführungskosten und mögliche Zusatzkosten schriftlich nennen."),
      ],
    },
    {
      heading: "Cloud oder lokal: Eine Entscheidungshilfe",
      blocks: [
        p("Die Frage nach dem Betrieb stellt sich früh, denn sie bestimmt Kosten, Verantwortung und Datenschutz. Die meisten Anbieter im Katalog sind Cloud Lösungen. Sage 100 nennt ausdrücklich den Betrieb lokal oder in der Cloud, Sage 50 Handwerk ist eine installierte Software, ein Cloud Paket lässt sich über einen Partner zubuchen."),
        table("Cloud und lokaler Betrieb im Vergleich", ["Kriterium", "Cloud", "Lokal"], [
          ["Start", "Schnell, ohne eigene Server", "Installation und Einrichtung nötig"],
          ["Updates", "Automatisch durch den Anbieter", "Eigene Planung oder Dienstleister"],
          ["Kosten", "Laufende Gebühr, planbar", "Lizenz und Betrieb, oft höherer Einmalaufwand"],
          ["Kontrolle über Daten", "Beim Anbieter, geregelt im Vertrag", "Im eigenen Haus"],
          ["Anpassung", "Eingeschränkt, je nach Anbieter", "Oft größerer Spielraum"],
          ["Zugriff von unterwegs", "Meist einfach", "Zusätzlicher Aufwand"],
          ["Verantwortung bei Ausfall", "Anbieter, mit Grenzen im Vertrag", "Sie oder Ihr Dienstleister"],
        ], "Allgemeine Einordnung. Einzelne Produkte können abweichen, prüfen Sie jeweils Betrieb und Vertrag."),
        p("Kleine Teams ohne eigene IT sind mit einer Cloud Lösung meist besser bedient. Betriebe mit besonderen Anforderungen an Anpassung, Schnittstellen oder interne Richtlinien prüfen auch lokale Varianten. Beides erfordert einen Vertrag zur Auftragsverarbeitung, sobald ein Dienstleister Daten verarbeitet."),
      ],
    },
    {
      heading: "Wer im Projekt was tut",
      blocks: [
        p("ERP Projekte scheitern selten an Software, sondern an unklaren Rollen. Legen Sie vor dem Start fest, wer welche Verantwortung trägt."),
        table("Rollen in einem ERP Projekt", ["Rolle", "Aufgabe", "Typischer Fehler"], [
          ["Geschäftsführung", "Ziele setzen, Budget freigeben, Entscheidungen treffen", "Das Projekt nebenbei laufen lassen"],
          ["Interne Projektleitung", "Planung, Abstimmung, Prüfung, Ansprechperson für den Partner", "Keine Zeit eingeplant"],
          ["Fachverantwortliche", "Prozesse beschreiben, testen, abnehmen", "Erst beim Go live beteiligt"],
          ["Anwender", "Mit dem System arbeiten, Rückmeldung geben", "Zu spät geschult"],
          ["Einführungspartner", "Einrichtung, Datenübernahme, Schulung", "Umfang nicht schriftlich festgelegt"],
          ["Datenschutz und IT", "Verträge, Sicherheit, Schnittstellen", "Am Ende statt am Anfang einbezogen"],
        ]),
        p("Wichtig ist die Zeit, die interne Beteiligte brauchen. Planen Sie sie ein, bevor Sie das Projekt starten: Wer täglich im Auftragsgeschäft arbeitet, kann nicht nebenher ein ERP einführen, ohne dass etwas liegen bleibt."),
      ],
    },
    {
      heading: "Einführung, Vertrag und Ausstieg",
      blocks: [
        h3("Das Projekt aufstellen"),
        ul(
          "**Interner Projektleiter:** Eine Person mit Zeit, Entscheidungsbefugnis und Kenntnis der Abläufe.",
          "**Abnahmekriterien:** Woran erkennen wir, dass ein Teil fertig ist? Schreiben Sie sie in den Vertrag.",
          "**Testphase mit echten Daten:** Parallelbetrieb oder Pilot vor dem Umstieg.",
          "**Datenmigration planen:** Nur bereinigte Daten übernehmen.",
          "**Nachbetreuung:** Rechnen Sie mit Rückfragen in den ersten Wochen nach dem Start.",
        ),
        h3("Der Vertrag"),
        p("Achten Sie auf Laufzeit, Kündigung, Preisanpassung, Nutzungsgrenzen, Support und Datenexport. Bei Softwareverträgen mit Cloud Anteil gehört ein Vertrag zur Auftragsverarbeitung dazu. Eine Checkliste bietet der Ratgeber [Softwarevertrag prüfen](/ratgeber/softwarevertrag-pruefen-laufzeit-daten-ausstieg)."),
        h3("Der Ausstieg"),
        p("Klären Sie vor der Unterschrift, wie Sie Daten wieder herausbekommen und in welchem Format. Ein ERP ist schwer zu wechseln. Umso wichtiger ist ein sauberer Exportweg für Kunden, Artikel, Belege und Buchungen. Eine Zusage dazu im Vertrag ist ein starkes Argument."),
      ],
    },
    {
      heading: "Die häufigsten Fehler",
      blocks: [
        ul(
          "**Nach Funktionslisten statt nach Abläufen wählen.**",
          "**Zu viele Anbieter vergleichen und keine Demo mit eigenem Szenario machen.**",
          "**Zu viel anpassen:** Jede Anpassung erhöht den Aufwand bei Updates.",
          "**Datenbereinigung vergessen:** Schlechte Daten machen jedes neue System schlecht.",
          "**Das Team zu spät einbinden:** Wer das System täglich nutzt, entscheidet über den Erfolg.",
          "**Nur die Lizenz vergleichen:** Einführung, Schnittstellen und Schulung gehören in die Rechnung.",
        ),
        p("Wer diese Fehler vermeidet, hat bereits einen großen Teil des Risikos beseitigt. Nehmen Sie sich für die Auswahl Zeit, aber nicht unbegrenzt: Ein klares Pflichtenheft, drei Demos und ein Gespräch mit zwei Referenzkunden reichen meist, um sicher zu entscheiden."),
      ],
    },
  ],
  checklist: [
    "Haben wir einen Auftrag von Anfang bis Ende aufgenommen, einschließlich Ausnahmen?",
    "Liegt ein Pflichtenheft mit Muss, Soll und Kann Kriterien vor?",
    "Wurden alle Muss Kriterien in der Demo vorgeführt?",
    "Sind Einführung, Schnittstellen, Schulung und Anpassungen im Angebot beziffert?",
    "Wer ist der interne Projektleiter, und wie viel Zeit hat er?",
    "Welche Abnahmekriterien gelten für jeden Projektschritt?",
    "Wie und in welchem Format können wir alle Daten exportieren?",
    "Gibt es einen Vertrag zur Auftragsverarbeitung, und wo liegen die Daten?",
  ],
  faq: [
    { q: "Wie lange dauert die Einführung eines ERP Systems?", a: "Das hängt von Umfang, Datenlage und Zahl der Schnittstellen ab. Einfache Cloud Pakete lassen sich in wenigen Wochen starten, umfangreiche Einführungen mit Anpassungen dauern mehrere Monate. Fragen Sie nach Referenzprojekten ähnlicher Größe." },
    { q: "Was kostet ein ERP für ein kleines Unternehmen?", a: "Die Lizenz liegt bei Cloud Anbietern im Bereich von rund 350 bis über 1.600 Euro im Monat bei zehn Nutzern, je nach Paket. Dazu kommen Einführung und Zusatzkosten. Ein Pauschalpreis ist ohne Ihr Mengengerüst nicht seriös." },
    { q: "Cloud oder lokale Installation?", a: "Cloud Lösungen sparen Betrieb und Updates, lokale Systeme geben mehr Kontrolle. Mehrere Anbieter bieten beides, zum Beispiel Sage 100 lokal oder in der Cloud. Prüfen Sie Datenschutz, Ausfallzeiten und Exportwege." },
    { q: "Wie viele Anbieter sollte ich vergleichen?", a: "Eine Vorauswahl von drei Programmen genügt. Mehr Vergleiche verlängern das Projekt, ohne die Entscheidung zu verbessern." },
    { q: "Brauche ich ein Pflichtenheft?", a: "Ja, in kleiner Form. Eine Liste mit Muss, Soll und Kann Kriterien verhindert, dass Sie von Demos überredet werden, statt Ihre Anforderungen zu prüfen." },
    { q: "Sollte ich viel anpassen lassen?", a: "Nur so viel wie nötig. Anpassungen erhöhen Kosten und den Aufwand bei Updates. Prüfen Sie zuerst, ob Sie einen Ablauf an die Standardfunktion anpassen können." },
  ],
  sources: [
    { label: "weclapp: Preise", url: "https://www.weclapp.com/de/preise/" },
    { label: "Xentral: Preise", url: "https://xentral.com/de/preise" },
    { label: "Odoo: Preise", url: "https://www.odoo.com/de_DE/pricing" },
    { label: "Sage 100: Module, Preise und Vertragsbedingungen", url: "https://www.sage.com/de-de/produkte/sage-100/" },
    { label: "Microsoft Dynamics 365 Business Central: Preise", url: "https://www.microsoft.com/de-de/dynamics-365/products/business-central/pricing" },
    { label: "Sage 50 Handwerk: Funktionen und Pakete", url: "https://www.sage.com/de-de/produkte/sage-50-handwerk/" },
    { label: "Sage Intacct: Preisübersicht", url: "https://www.sage.com/de-de/sage-business-cloud/intacct/pricing/" },
  ],
  related: ["weclapp", "xentral", "odoo", "sage-100", "microsoft-dynamics-365-business-central"],
  relatedGuides: ["erp-handel-oder-dienstleistung", "erp-gesamtkosten", "softwarevertrag-pruefen-laufzeit-daten-ausstieg"],
};
