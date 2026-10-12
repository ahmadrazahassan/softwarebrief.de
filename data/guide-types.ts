/* Inhalt eines Ratgeberartikels. Die kurzen Angaben für Karten und Listen stehen getrennt in data/guides.ts,
   damit die Startseite nicht alle Artikeltexte laden muss. */

/** Ein Baustein im Fließtext. Inline sind **fett** und [Linktext](/pfad) möglich. */
export type GuideBlock =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; caption: string; head: string[]; rows: string[][]; note?: string }
  | { t: "callout"; tone: "tipp" | "achtung" | "fakt"; title: string; text: string };

export type GuideSection = {
  heading: string;
  /** Alte Artikel: ein Textblock, der in kurze Absätze geteilt wird. */
  body?: string;
  /** Neue Artikel: strukturierte Bausteine. */
  blocks?: GuideBlock[];
};

export type GuideFaq = { q: string; a: string };
export type GuideSource = { label: string; url: string };

export type GuideBody = {
  sections: GuideSection[];
  checklist: string[];
  /** Produkte, die im Artikel vorkommen (Slugs aus dem Katalog). */
  related: string[];
  /** Kurzfassung für Leser und für Suchmaschinen. */
  keyTakeaways?: string[];
  faq?: GuideFaq[];
  /** Amtliche und herstellerseitige Quellen, die der Artikel nutzt. */
  sources?: GuideSource[];
  /** Weitere Ratgeber zum Thema (Slugs). */
  relatedGuides?: string[];
  /** Hinweis zum Rechtsstand, wird oberhalb des Artikels gezeigt. */
  legalNote?: string;
};
