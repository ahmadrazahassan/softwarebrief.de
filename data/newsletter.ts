/* Redaktionelle Texte des Softwarebriefs.
   Reine Daten ohne schwere Importe, weil das Anmeldeformular sie im Browser nutzt.
   Die Beispielausgabe (aus echten Ratgebern gebaut) liegt getrennt in newsletter-sample.ts. */

import { operator } from "@/data/operator";

export const newsletter = {
  name: "Softwarebrief",
  path: "/newsletter",
  meta: {
    title: "Newsletter für Softwareentscheidungen im Mittelstand | Softwarebrief",
    description: "Der Softwarebrief: einmal im Monat Tarifgrenzen, Prüffragen und Vergleiche für Buchhaltung, Lohn, Personal, CRM und ERP. Kostenlos, mit Quellen.",
  },

  hero: {
    chip: "Newsletter",
    titleLead: "Ein Brief im Monat.",
    titleAccent: "Für eine klare Softwareauswahl.",
    lead: "Der Softwarebrief ordnet ein, was bei Tarifen, Funktionen und Anbieterfragen für kleine und mittlere Betriebe zählt. Redaktionell aufbereitet, mit Quellen, die Sie selbst prüfen können.",
    benefits: [
      "Konkrete Prüffragen für Ihr nächstes Anbietergespräch",
      "Tarifgrenzen, die auf der Preisseite leicht übersehen werden",
      "Direkte Vergleiche mit Quellen und offenen Punkten",
    ],
    formTitle: "Den Brief abonnieren",
    facts: ["Kostenlos", "Einmal im Monat", "Jederzeit abbestellbar"],
  },

  rubrics: {
    chip: "Inhalt",
    title: "Was jede Ausgabe enthält",
    text: "Vier feste Rubriken, damit Sie in wenigen Minuten wissen, worauf es bei Ihrer Entscheidung ankommt.",
    items: [
      { number: "01", title: "Thema des Monats", text: "Eine Entscheidungsfrage, praktisch beantwortet. Etwa: Wie rechnen Sie CRM Kosten nach Nutzern, Kontakten und Automationen durch?" },
      { number: "02", title: "Tarifcheck", text: "Wo Pakete ihre Grenzen haben. Wir zeigen, welche Funktion in welchem Tarif liegt und was als Zusatzmodul berechnet wird." },
      { number: "03", title: "Fragen fürs Anbietergespräch", text: "Drei bis fünf konkrete Fragen, die Sie vor einem Angebot stellen sollten. So lassen sich Tarife und Bedingungen sauber vergleichen." },
      { number: "04", title: "Vergleich des Monats", text: "Zwei Programme direkt gegenübergestellt, mit Quellen, Tarifbedingungen und einem klaren Hinweis auf offene Punkte." },
    ],
    excerptLabel: "Aus der Beispielausgabe",
  },

  roles: {
    chip: "Zielgruppe",
    title: "Für alle, die im Betrieb Software auswählen",
    text: "Softwareentscheidungen betreffen selten nur eine Person. Der Brief ist so geschrieben, dass er in Geschäftsführung, Buchhaltung, Personal und Vertrieb gleichermaßen hilft.",
    items: [
      { role: "Geschäftsführung", text: "Kosten, Risiken und Aufwand einer Softwareentscheidung einschätzen, bevor ein Vertrag unterschrieben wird." },
      { role: "Buchhaltung und Finanzen", text: "Tarife, Steuerfunktionen und die Zusammenarbeit mit der Kanzlei prüfen." },
      { role: "Personal", text: "Einführung, Rollen und Datenübernahme planen, ohne laufende Prozesse zu stören." },
      { role: "Vertrieb", text: "Pipeline, Nutzerkosten und Automatisierung nüchtern vergleichen." },
    ],
  },

  principles: {
    chip: "Redaktionelle Grundsätze",
    title: "Worauf Sie sich verlassen können",
    items: [
      { title: "Eine Quelle zu jeder Angabe", text: "Preise und Funktionen stammen von den Herstellerseiten. Sie sehen, woher eine Angabe kommt und wann wir sie geprüft haben." },
      { title: "Einordnung statt Testversprechen", text: "Unsere Einschätzung beruht auf öffentlichen Herstellerangaben. Sie ist kein eigener Praxistest, und wir sagen das offen dazu." },
      { title: "Werbung bleibt erkennbar", text: "Vergütete Links kennzeichnen wir als Werbung. Eine mögliche Vergütung bestimmt weder den Inhalt noch die Reihenfolge." },
      { title: "Keine Weitergabe Ihrer Adresse", text: "Wir geben Ihre E-Mail-Adresse nicht an Softwareanbieter weiter und vermitteln keine Kontakte." },
    ],
    linkLabel: "Unsere Methodik im Detail",
    linkHref: "/methodik",
  },

  steps: {
    chip: "Ablauf",
    title: "So melden Sie sich an",
    items: [
      { number: "01", title: "Adresse eintragen", text: "Geben Sie Ihre E-Mail-Adresse ein und bestätigen Sie die Einwilligung. Mehr Angaben brauchen wir nicht." },
      { number: "02", title: "Anmeldung bestätigen", text: "Sie erhalten eine E-Mail mit einem Bestätigungslink. Erst nach dem Klick sind Sie angemeldet." },
      { number: "03", title: "Brief erhalten", text: "Danach kommt der Softwarebrief einmal im Monat in Ihr Postfach. Abmelden können Sie sich in jeder Ausgabe." },
    ],
  },

  privacy: {
    id: "datenschutz",
    chip: "Datenschutz",
    title: "So gehen wir mit Ihrer E-Mail-Adresse um",
    text: "Die wichtigsten Punkte zur Anmeldung auf einen Blick. Die vollständige Datenschutzerklärung finden Sie auf der Seite Datenschutz.",
    items: [
      { term: "Welche Daten", text: "Ihre E-Mail-Adresse sowie Zeitpunkt und Nachweis Ihrer Bestätigung." },
      { term: "Wofür", text: "Ausschließlich für den Versand des Softwarebriefs." },
      { term: "Rechtsgrundlage", text: "Ihre Einwilligung nach Artikel 6 Absatz 1 Buchstabe a der Datenschutz-Grundverordnung." },
      { term: "Versanddienstleister", text: "Bestätigungsmail, Versand und Verwaltung der bestätigten Adressen übernimmt Resend. Weitere Angaben finden Sie in der Datenschutzerklärung." },
      { term: "Speicherdauer", text: "Bis Sie Ihre Einwilligung widerrufen. Danach löschen wir Ihre Adresse, soweit keine gesetzlichen Aufbewahrungs- oder Nachweispflichten entgegenstehen." },
      { term: "Ihre Rechte", text: "Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Zudem haben Sie Rechte auf Auskunft, Berichtigung und Löschung sowie auf Beschwerde bei einer Aufsichtsbehörde." },
    ],
    linkLabel: "Vollständige Datenschutzerklärung",
    linkHref: "/datenschutz",
  },

  faq: {
    eyebrow: "GUT ZU WISSEN",
    title: "Fragen zum Brief.",
    linkLabel: "Zur Anmeldung",
    linkHref: "#anmeldung",
    items: [
      { q: "Was kostet der Softwarebrief?", a: "Nichts. Der Brief ist kostenlos, und für die Anmeldung brauchen Sie keine Zahlungsangaben." },
      { q: "Wie oft erscheint der Brief?", a: "Einmal im Monat. Mehr Post schicken wir Ihnen nicht." },
      { q: "Wer schreibt den Brief?", a: "Die Redaktion von Softwarebrief. Unsere Einordnungen beruhen auf öffentlichen Herstellerangaben und sind keine eigenen Praxistests. Wie wir arbeiten, beschreiben wir in der Methodik." },
      { q: "Bekomme ich Werbung von Softwareanbietern?", a: "Nein. Wir geben Ihre Adresse nicht an Anbieter weiter. Im Brief können vergütete Links vorkommen, die wir deutlich als Werbung kennzeichnen." },
      { q: "Welche Themen deckt der Brief ab?", a: "Buchhaltung, Lohnabrechnung, Personal, CRM und ERP. Das sind dieselben fünf Bereiche wie auf Softwarebrief insgesamt." },
      { q: "Wie melde ich mich wieder ab?", a: `Mit dem Abmeldelink am Ende jeder Ausgabe oder per E-Mail an ${operator.email}. Danach erhalten Sie keine weiteren Briefe.` },
      { q: "Ich habe keine Bestätigungsmail erhalten. Was kann ich tun?", a: "Schauen Sie zuerst im Spam-Ordner nach. In Unternehmen blockieren Filter manchmal unbekannte Absender. Fragen Sie dann Ihre IT, ob Nachrichten von Softwarebrief zugelassen sind, und tragen Sie sich danach erneut ein." },
    ],
  },

  closing: {
    title: "Bessere Entscheidungen beginnen mit besseren Fragen.",
    text: "Melden Sie sich an und erhalten Sie den nächsten Softwarebrief direkt in Ihr Postfach.",
  },

  /* Abschnitt auf der Startseite */
  home: {
    eyebrow: "NEWSLETTER",
    title: "Einmal im Monat klarer entscheiden.",
    text: "Der Softwarebrief bringt Tarifgrenzen, Prüffragen und Vergleiche aus der Redaktion in Ihr Postfach. Kostenlos, mit Quellen und jederzeit abbestellbar.",
    points: ["Thema des Monats mit Checkliste", "Tarifcheck für kleine und mittlere Betriebe", "Fragen für das Anbietergespräch"],
    linkLabel: "Mehr zum Softwarebrief",
  },

  /* Karte am Ende eines Ratgeberartikels */
  article: {
    kicker: "Softwarebrief",
    title: "Mehr davon, einmal im Monat im Postfach.",
    text: "Der Brief greift jeden Monat eine Entscheidungsfrage auf, so wie dieser Ratgeber, und endet mit Fragen für Ihr Anbietergespräch.",
    linkLabel: "Mehr zum Brief",
  },

  /* Formular und Rückmeldungen */
  form: {
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "name@unternehmen.de",
    submit: "Kostenlos anmelden",
    sending: "Wird gesendet",
    note: "Sie erhalten zuerst eine E-Mail zur Bestätigung. Erst danach sind Sie angemeldet.",
    consent: {
      before: "Ich möchte den Softwarebrief einmal im Monat per E-Mail erhalten. Dafür darf Softwarebrief meine E-Mail-Adresse verarbeiten. Ich kann diese Einwilligung jederzeit widerrufen. Die ",
      linkLabel: "Hinweise zum Datenschutz",
      after: " habe ich gelesen.",
      newTab: " (öffnet in neuem Tab)",
    },
    errors: {
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      consent: "Bitte bestätigen Sie die Einwilligung, damit wir Ihnen den Brief senden dürfen.",
      generic: "Ihre Eingabe konnte nicht verarbeitet werden. Bitte prüfen Sie Ihre Angaben.",
      rateLimited: "Es sind gerade zu viele Anfragen eingegangen. Bitte versuchen Sie es in einigen Minuten erneut.",
      unavailable: "Die Anmeldung ist derzeit noch nicht freigeschaltet. Bitte versuchen Sie es in Kürze erneut.",
      failed: "Die Anmeldung konnte nicht abgeschlossen werden. Bitte versuchen Sie es später erneut.",
      network: "Die Verbindung ist gerade nicht verfügbar. Bitte versuchen Sie es später erneut.",
    },
    done: {
      title: "Fast geschafft. Bitte bestätigen Sie Ihre Anmeldung.",
      before: "Wir haben eine E-Mail an ",
      after: " gesendet. Öffnen Sie die Nachricht und klicken Sie auf den Bestätigungslink. Erst dann sind Sie für den Softwarebrief angemeldet.",
      hint: "Nichts angekommen? Schauen Sie bitte auch im Spam-Ordner nach.",
      reset: "Andere Adresse eingeben",
      dryRun: "Testmodus: Diese Umgebung versendet keine E-Mails und speichert nichts.",
    },
  },

  /* Zielseiten nach dem Klick im E-Mail Dienst */
  confirmed: {
    chip: "Newsletter",
    title: "Ihre Anmeldung ist bestätigt.",
    text: "Danke. Sie erhalten den Softwarebrief ab sofort einmal im Monat. Bis zur nächsten Ausgabe finden Sie in unseren Ratgebern konkrete Hilfe für Ihre Softwareauswahl.",
    primary: { label: "Ratgeber lesen", href: "/ratgeber" },
    secondary: { label: "Empfehlung erhalten", href: "/empfehlung" },
  },
  unsubscribed: {
    chip: "Newsletter",
    title: "Sie sind abgemeldet.",
    text: "Sie erhalten keinen Softwarebrief mehr. Falls das ein Versehen war, können Sie sich jederzeit erneut anmelden.",
    primary: { label: "Erneut anmelden", href: "/newsletter#anmeldung" },
    secondary: { label: "Zur Startseite", href: "/" },
  },
} as const;
