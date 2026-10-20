/* Prüft nach dem Build jede vorgerenderte Seite: Jeder Werbelink und jedes Werbebanner muss als Werbung markiert sein
   (rel="sponsored") und die Adresse der Website als Herkunft mitsenden. Mit "noreferrer" oder ohne referrerpolicy sieht
   Impact keine verweisende Domain und ordnet den Klick nicht Softwarebrief zu.
   Aufruf:  npm run check:links  (läuft auch am Ende von npm run build und stoppt dann das Deployment)
   Als Werbelink gilt: rel enthält "sponsored", das Ziel ist ein Netzwerklink (sjv.io) oder ein Partnerlink aus lib/affiliate.ts. */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { affiliateLinkAttributes, affiliatePartners } from "../lib/affiliate.ts";

const root = ".next/server/app";
if (!existsSync(root)) {
  console.error(`${root} fehlt. Zuerst npm run build ausführen.`);
  process.exit(1);
}

const partnerLinks = affiliatePartners.map((partner) => partner.vendorUrl);
const attribute = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1]?.replaceAll("&amp;", "&");
const isNetworkLink = (href) => { try { return new URL(href).hostname.endsWith(".sjv.io"); } catch { return false; } };

const pages = readdirSync(root, { recursive: true }).filter((name) => name.endsWith(".html"));
const problems = [];
const hosts = new Map();
let links = 0;

for (const page of pages) {
  for (const [tag] of readFileSync(join(root, page), "utf8").matchAll(/<a\s[^>]*>/g)) {
    const href = attribute(tag, "href") ?? "";
    const rel = (attribute(tag, "rel") ?? "").split(/\s+/).filter(Boolean);
    if (!rel.includes("sponsored") && !isNetworkLink(href) && !partnerLinks.some((link) => href.startsWith(link))) continue;
    links++;
    const host = URL.canParse(href) ? new URL(href).hostname : href;
    hosts.set(host, (hosts.get(host) ?? 0) + 1);
    const policy = attribute(tag, "referrerpolicy");
    const fault = !rel.includes("sponsored") ? 'rel="sponsored" fehlt'
      : rel.includes("noreferrer") ? 'rel enthält "noreferrer", Impact sieht keine Herkunft'
      : policy !== affiliateLinkAttributes.referrerPolicy ? `referrerpolicy ist "${policy ?? "nicht gesetzt"}" statt "${affiliateLinkAttributes.referrerPolicy}"`
      : null;
    if (fault) problems.push(`${page}: ${fault}\n    ${tag.slice(0, 220)}`);
  }
}

console.log(`${pages.length} Seiten, ${links} Werbelinks: ${[...hosts].map(([host, count]) => `${host} ${count}`).join(", ")}`);
if (!links) problems.push("Keine Werbelinks gefunden. Die Prüfung erkennt die Links nicht mehr, bitte das Skript anpassen.");
if (problems.length) {
  console.error(`\n${problems.length} Fehler:\n${problems.join("\n")}`);
  process.exit(1);
}
console.log("Alle Werbelinks senden die Herkunft mit und sind als Werbung markiert.");
