/* Prüft alle Ratgeber auf Fehler, die man beim Lesen leicht übersieht:
   fehlende Texte, kaputte interne Links, unbekannte Produkte, fehlende Vorschaubilder, Gedankenstriche,
   zu lange Titel für Suchmaschinen und eine Lesezeit, die nicht zur Wortzahl passt.

   Aufruf:  npm run check:guides
   Mit Fehlern endet das Skript mit Exitcode 1, Hinweise (Warnungen) brechen nicht ab. */

import { existsSync } from "node:fs";
import path from "node:path";
import { guides, isLongGuide } from "../data/guides";
import { loadGuideBody } from "../data/guide-bodies";
import { guideThumbnail } from "../lib/guide-thumbnails";
import { products, categorySlugs } from "../lib/catalog";
import type { GuideBlock, GuideBody } from "../data/guide-types";

const errors: string[] = [];
const warnings: string[] = [];
const productSlugs = new Set(products.map((p) => p.slug));
const guideSlugs = new Set(guides.map((g) => g.slug));
const productPaths = new Set(products.map((p) => `/software/${p.categorySlug}/${p.slug}`));
const staticPaths = new Set(["/", "/ratgeber", "/vergleich", "/empfehlung", "/methodik", "/faq", "/kategorien", "/newsletter", "/ueber-uns", "/kontakt", ...categorySlugs.map((c) => `/software/${c}`)]);

const blockTexts = (b: GuideBlock): string[] => {
  switch (b.t) {
    case "p": case "h3": return [b.text];
    case "ul": case "ol": return b.items;
    case "table": return [b.caption, ...b.head, ...b.rows.flat(), ...(b.note ? [b.note] : [])];
    case "callout": return [b.title, b.text];
  }
};

function texts(body: GuideBody) {
  const out: string[] = [];
  for (const s of body.sections) {
    out.push(s.heading, ...(s.body ? [s.body] : []), ...(s.blocks?.flatMap(blockTexts) ?? []));
  }
  out.push(...body.checklist, ...(body.keyTakeaways ?? []), ...(body.faq?.flatMap((f) => [f.q, f.a]) ?? []));
  if (body.legalNote) out.push(body.legalNote);
  return out;
}

const linkRe = /\]\(([^)]+)\)/g;

function checkLink(href: string, where: string) {
  if (/^https?:\/\//.test(href) || href.startsWith("#")) return;
  const [pathname, query] = href.split("?");
  if (pathname.startsWith("/ratgeber/")) {
    if (!guideSlugs.has(pathname.replace("/ratgeber/", ""))) errors.push(`${where}: Ratgeber nicht gefunden: ${href}`);
  } else if (pathname.startsWith("/software/") && pathname.split("/").length === 4) {
    if (!productPaths.has(pathname)) errors.push(`${where}: Produktseite nicht gefunden: ${href}`);
  } else if (!staticPaths.has(pathname)) {
    errors.push(`${where}: unbekannter interner Pfad: ${href}`);
  }
  if (pathname === "/vergleich" && query?.startsWith("produkte=")) {
    for (const slug of query.replace("produkte=", "").split(",")) if (!productSlugs.has(slug)) errors.push(`${where}: Vergleich mit unbekanntem Produkt ${slug}`);
  }
}

const dash = /[–—]| - /;

for (const g of guides) {
  const where = g.slug;
  const body = await loadGuideBody(g.slug);
  if (!body) { errors.push(`${where}: kein Text gefunden`); continue; }

  try {
    const thumb = guideThumbnail(g);
    if (!existsSync(path.join("public", thumb.src))) errors.push(`${where}: Vorschaubild fehlt: ${thumb.src}`);
  } catch (e) { errors.push(`${where}: ${(e as Error).message}`); }

  for (const slug of body.related) if (!productSlugs.has(slug)) errors.push(`${where}: unbekanntes Produkt in related: ${slug}`);
  for (const slug of body.relatedGuides ?? []) if (!guideSlugs.has(slug)) errors.push(`${where}: unbekannter Ratgeber in relatedGuides: ${slug}`);

  const all = texts(body);
  const words = all.join(" ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").split(/\s+/).filter(Boolean).length;
  for (const text of all) {
    for (const m of text.matchAll(linkRe)) checkLink(m[1], where);
    if (dash.test(text)) errors.push(`${where}: Gedankenstrich im Text: „${text.slice(0, 70)}…“`);
  }
  for (const s of body.sources ?? []) if (!/^https:\/\//.test(s.url)) errors.push(`${where}: Quelle ohne https: ${s.url}`);

  const minutes = Math.max(1, Math.round(words / 200));
  if (isLongGuide(g)) {
    if (words < 1800) warnings.push(`${where}: nur ${words} Wörter (Ziel: mindestens 1.800)`);
    if (Math.abs(minutes - g.readingMinutes) > 1) warnings.push(`${where}: Lesezeit ${g.readingMinutes} Min., Wortzahl ${words} ergibt etwa ${minutes} Min.`);
    if (!g.metaTitle || g.metaTitle.length > 62) errors.push(`${where}: metaTitle fehlt oder länger als 62 Zeichen (${g.metaTitle?.length})`);
    if (!g.metaDescription || g.metaDescription.length > 160) errors.push(`${where}: metaDescription fehlt oder länger als 160 Zeichen (${g.metaDescription?.length})`);
    if (!body.faq || body.faq.length < 5) warnings.push(`${where}: weniger als fünf häufige Fragen`);
    if (!body.sources || body.sources.length < 4) warnings.push(`${where}: weniger als vier Quellen`);
    if (!body.keyTakeaways || body.keyTakeaways.length < 4) warnings.push(`${where}: Kurzfassung mit weniger als vier Punkten`);
    if (g.keyword && !(g.title + " " + g.intro).toLowerCase().includes(g.keyword.toLowerCase().split(" ")[0])) warnings.push(`${where}: Suchbegriff „${g.keyword}“ fehlt in Titel und Einleitung`);
  }
  console.log(`${isLongGuide(g) ? "lang " : "kurz "} ${String(words).padStart(5)} Wörter  ${String(g.readingMinutes).padStart(2)} Min.  ${g.slug}`);
}

console.log(`\n${guides.length} Ratgeber geprüft, ${errors.length} Fehler, ${warnings.length} Hinweise.`);
for (const w of warnings) console.log(`Hinweis: ${w}`);
for (const e of errors) console.log(`FEHLER:  ${e}`);
process.exit(errors.length ? 1 : 0);
