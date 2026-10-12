import { guides } from "@/data/guides";
import type { NewsletterIssue } from "@/lib/newsletter-email";
const selected = ["crm-einfuehrung-fehler-vermeiden", "softwarevertrag-pruefen-laufzeit-daten-ausstieg"];
export const currentIssue: NewsletterIssue = {
  subject: "Softwarebrief: CRM einführen und Softwareverträge prüfen",
  preheader: "Zwei Ratgeber und drei Fragen für Ihr nächstes Anbietergespräch.",
  label: "Softwarebrief · Oktober 2026",
  title: "Softwareauswahl: Prozesse und Verträge prüfen",
  intro: "Ein neues Programm muss zu Ihren Abläufen passen. In dieser Ausgabe geht es um zwei Schritte vor der Unterschrift: den geplanten CRM-Einsatz klären und den Softwarevertrag prüfen.",
  articles: selected.map(slug => {
    const guide = guides.find(item => item.slug === slug);
    if (!guide) throw new Error(`Newsletter source missing: ${slug}`);
    return { title: guide.title, summary: guide.intro, href: `/ratgeber/${guide.slug}`, category: guide.category };
  }),
  questions: [
    "Welche Arbeitsschritte soll die Software übernehmen, und wer ist im Team dafür verantwortlich?",
    "Welche benötigten Funktionen sind im angebotenen Tarif enthalten, und was kostet zusätzlich?",
    "Wie können wir unsere Daten vollständig exportieren, wenn wir später den Anbieter wechseln?",
  ],
};
