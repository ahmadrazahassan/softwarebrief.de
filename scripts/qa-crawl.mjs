/* Prüft eine laufende Instanz der Website (Entwicklung oder Produktion) auf Fehler, die beim Durchklicken leicht übersehen werden:
   Statuscodes, fehlende Titel und Beschreibungen, doppelte oder fehlende H1, kaputte interne Links, fehlende Bilder und Skripte.

   Aufruf:  node scripts/qa-crawl.mjs [Basisadresse]
   Beispiel: node scripts/qa-crawl.mjs http://127.0.0.1:8787                                                          */

const base = (process.argv[2] ?? "http://localhost:5173").replace(/\/+$/, "");
const problems = [];
const seenAssets = new Map();
const seenLinks = new Map();
const pages = new Map();

async function get(url, init) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  try { return await fetch(url, { ...init, signal: controller.signal, redirect: "manual" }); }
  finally { clearTimeout(timer); }
}

const attr = (html, tag, name) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*?\\s${name}="([^"]*)"`, "g"))].map((m) => m[1]);
const decode = (s) => s.replace(/&amp;/g, "&");

async function loadRoutes() {
  /* Startpunkte: Startseite und alle Adressen, die dort und in den Listen verlinkt sind, plus Sitemap Logik der Seite selbst. */
  const queue = ["/", "/kategorien", "/ratgeber", "/vergleich", "/empfehlung", "/methodik", "/faq", "/ueber-uns", "/kontakt", "/newsletter", "/datenschutz", "/impressum", "/does-not-exist"];
  const done = new Set();
  while (queue.length) {
    const path = queue.shift();
    if (done.has(path)) continue;
    done.add(path);
    const res = await get(base + path);
    const html = res.status === 200 ? await res.text() : "";
    pages.set(path, { status: res.status, html, location: res.headers.get("location") });
    if (path === "/does-not-exist") continue;
    for (const href of attr(html, "a", "href").map(decode)) {
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const clean = href.split("#")[0].split("?")[0];
      if (clean && !done.has(clean) && /^\/(software|ratgeber|vergleich|kategorien|newsletter)(\/|$)/.test(clean) && !clean.startsWith("/api")) queue.push(clean);
    }
  }
}

await loadRoutes();

for (const [path, page] of pages) {
  if (path === "/does-not-exist") { if (page.status !== 404) problems.push(`${path}: erwartet 404, erhalten ${page.status}`); continue; }
  if (page.status !== 200) { problems.push(`${path}: Status ${page.status}${page.location ? ` nach ${page.location}` : ""}`); continue; }
  const html = page.html;
  const title = (html.match(/<title>([^<]*)<\/title>/) ?? [])[1];
  if (!title || /^error$/i.test(title)) problems.push(`${path}: Titel fehlt oder Fehlerseite (${title})`);
  else if (title.length > 70) problems.push(`${path}: Titel länger als 70 Zeichen (${title.length})`);
  if (!/<meta[^>]+name="description"/.test(html)) problems.push(`${path}: Meta Description fehlt`);
  const h1 = (html.match(/<h1\b/g) ?? []).length;
  if (h1 !== 1) problems.push(`${path}: ${h1} H1 Überschriften`);
  if (!/<html[^>]+lang="de"/.test(html)) problems.push(`${path}: lang="de" fehlt`);
  for (const img of attr(html, "img", "src")) if (!/^data:/.test(img)) seenAssets.set(decode(img), path);
  for (const img of [...html.matchAll(/<img\b[^>]*>/g)]) if (!/\salt=/.test(img[0])) problems.push(`${path}: Bild ohne alt Attribut`);
  for (const link of attr(html, "a", "href").map(decode)) {
    if (link.startsWith("/") && !link.startsWith("//") && !link.startsWith("/api")) seenLinks.set(link.split("#")[0], path);
    if (/href="#"/.test(`href="${link}"`)) problems.push(`${path}: leerer Anker`);
  }
  for (const src of attr(html, "script", "src")) seenAssets.set(decode(src), path);
}

let checked = 0;
for (const [url, from] of seenLinks) {
  if (!url || pages.has(url)) continue;
  const res = await get(base + url, { method: "GET" });
  checked++;
  if (res.status >= 400) problems.push(`${from}: Link ${url} liefert ${res.status}`);
}

for (const [url, from] of seenAssets) {
  if (!url) continue;
  const target = url.startsWith("http") ? url : base + url;
  if (/res\.cloudinary\.com/.test(target)) continue;
  const res = await get(target, { method: "GET" });
  checked++;
  if (res.status >= 400) problems.push(`${from}: Datei ${url} liefert ${res.status}`);
}

console.log(`${pages.size} Seiten, ${checked} weitere Adressen geprüft, ${problems.length} Auffälligkeiten.`);
for (const p of [...new Set(problems)]) console.log(`- ${p}`);
process.exit(problems.length ? 1 : 0);
