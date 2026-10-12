/* Prüft, ob die Herstellerseiten, Quellen und Ratgeberquellen noch erreichbar sind.
   Aufruf:  npx tsx scripts/check-outbound.ts
   Hinweis: Viele Anbieter sperren Skripte (Status 403 oder 429). Diese Fälle sind "manuell prüfen", nicht kaputt. */

import { products } from "../lib/catalog";
import { longGuideLoaders } from "../data/guide-bodies";

const urls = new Map<string, string>();
for (const p of products) {
  urls.set(p.vendorUrl, `Produkt ${p.slug}`);
  for (const s of p.sources) urls.set(s.url, `Quelle ${p.slug}`);
}
for (const [slug, load] of Object.entries(longGuideLoaders)) {
  const { body } = await load();
  for (const s of body.sources ?? []) if (!urls.has(s.url)) urls.set(s.url, `Ratgeber ${slug}`);
}

const headers = { "user-agent": "Mozilla/5.0 (compatible; SoftwarebriefLinkCheck/1.0)", accept: "text/html,application/pdf,*/*" };

async function probe(url: string) {
  for (const method of ["HEAD", "GET"] as const) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    try {
      const res = await fetch(url, { method, headers, redirect: "follow", signal: controller.signal });
      if (res.status === 405 || res.status === 403 && method === "HEAD") continue;
      return res.status;
    } catch (e) {
      if (method === "GET") return (e as Error).name === "AbortError" ? "Zeitüberschreitung" : `Fehler ${(e as Error).message}`;
    } finally { clearTimeout(timer); }
  }
  return "unbekannt";
}

const results: [string, string, string | number][] = [];
const queue = [...urls];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const [url, label] = queue.shift()!;
    results.push([url, label, await probe(url)]);
  }
}));

const ok = results.filter(([, , s]) => typeof s === "number" && s < 400);
const manual = results.filter(([, , s]) => s === 403 || s === 429 || s === 401);
console.log(`${results.length} Adressen: ${ok.length} erreichbar, ${manual.length} manuell prüfen, ${results.length - ok.length - manual.length} auffällig.`);
for (const [url, label, status] of results.sort((a, b) => String(a[2]).localeCompare(String(b[2])))) {
  if (typeof status === "number" && status < 400) continue;
  console.log(`${String(status).padEnd(18)} ${label.padEnd(34)} ${url}`);
}
