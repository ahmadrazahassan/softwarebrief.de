import type { GuideBlock } from "../guide-types";

/* Kurzschreibweisen, damit die Artikeldateien lesbar bleiben. */
export const p = (text: string): GuideBlock => ({ t: "p", text });
export const h3 = (text: string): GuideBlock => ({ t: "h3", text });
export const ul = (...items: string[]): GuideBlock => ({ t: "ul", items });
export const ol = (...items: string[]): GuideBlock => ({ t: "ol", items });
export const table = (caption: string, head: string[], rows: string[][], note?: string): GuideBlock => ({ t: "table", caption, head, rows, note });
export const tipp = (title: string, text: string): GuideBlock => ({ t: "callout", tone: "tipp", title, text });
export const achtung = (title: string, text: string): GuideBlock => ({ t: "callout", tone: "achtung", title, text });
export const fakt = (title: string, text: string): GuideBlock => ({ t: "callout", tone: "fakt", title, text });
