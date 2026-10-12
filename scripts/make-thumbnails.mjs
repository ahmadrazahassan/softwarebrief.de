/* Zeichnet die Vorschaubilder der ausführlichen Ratgeber (1536 x 864, WebP) im Stil der vorhandenen Bilder:
   violetter Grund, gelbe Chips, mintgrüne Akzente, weiße Titel in Lato. Die Bilder entstehen aus Vektoren,
   die Symbole stammen von lucide. Wer lieber eigene Bilder (zum Beispiel aus ChatGPT) nutzt, legt sie unter
   dem gleichen Dateinamen in public/editorial-thumbnails ab und startet danach npm run images:optimize -- --force.

   Aufruf:  npm run thumbnails            (nur fehlende Bilder)
            npm run thumbnails -- --force (alle neu zeichnen)                                                    */

import satori from "satori";
import sharp from "sharp";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public/editorial-thumbnails");
const FORCE = process.argv.includes("--force");
const W = 1536, H = 864;

const C = { bg: "#6048e9", bgDark: "#4a35c7", blob: "#9d90f5", chip: "#fed24a", mint: "#6af6b5", navy: "#292660", white: "#ffffff", soft: "#e4defe", lilac: "#c9c0fb" };

/* slug, Chips, Titelzeilen, Untertitel, drei Symbole */
const thumbs = [
  { slug: "e-rechnung-pflicht-fristen-software", chips: ["BUCHHALTUNG", "E-RECHNUNG"], lines: ["E-Rechnung:", "Das gilt jetzt"], sub: "Fristen · Formate · Software", icons: ["receipt-text", "calendar-clock", "file-check"] },
  { slug: "software-fuer-startups-die-ersten-zwoelf-monate", chips: ["STARTUP", "SOFTWARE"], lines: ["Software für", "Startups"], sub: "Die ersten zwölf Monate", icons: ["rocket", "layers", "trending-up"] },
  { slug: "lohnabrechnung-auslagern-oder-selbst-machen", chips: ["LOHN", "KOSTEN"], lines: ["Lohn auslagern", "oder selbst machen?"], sub: "Kosten · Pflichten · Software", icons: ["banknote", "users", "scale"] },
  { slug: "arbeitszeiterfassung-pflicht-software-auswahl", chips: ["PERSONAL", "ZEITERFASSUNG"], lines: ["Arbeitszeit", "erfassen: Pflicht?"], sub: "Recht · Software · Praxis", icons: ["clock", "timer", "list-checks"] },
  { slug: "crm-einfuehrung-fehler-vermeiden", chips: ["CRM", "EINFÜHRUNG"], lines: ["CRM einführen:", "9 Fehler"], sub: "und wie Sie sie vermeiden", icons: ["handshake", "users", "list-checks"] },
  { slug: "erp-auswahl-mittelstand-schritt-fuer-schritt", chips: ["ERP", "AUSWAHL"], lines: ["ERP auswählen", "im Mittelstand"], sub: "Pflichtenheft · Demo · Kosten", icons: ["blocks", "workflow", "package"] },
  { slug: "kleinunternehmerregelung-grenzen-rechnung-software", chips: ["BUCHHALTUNG", "KLEINUNTERNEHMER"], lines: ["Kleinunternehmer", "ab 2025"], sub: "Grenzen · Rechnung · Software", icons: ["euro", "receipt-text", "calculator"] },
  { slug: "gobd-aufbewahrungsfristen-belege-digitalisieren", chips: ["BUCHHALTUNG", "GOBD"], lines: ["GoBD und", "Aufbewahrung"], sub: "Belege digital archivieren", icons: ["archive", "file-check", "shield-check"] },
  { slug: "buchhaltungssoftware-fuer-startups-gruender", chips: ["BUCHHALTUNG", "GRÜNDER"], lines: ["Buchhaltung", "für Startups"], sub: "EÜR · GmbH · Tarife", icons: ["calculator", "wallet", "rocket"] },
  { slug: "digitale-personalakte-dsgvo-personalsoftware", chips: ["PERSONAL", "DSGVO"], lines: ["Digitale", "Personalakte"], sub: "DSGVO · Rollen · Löschfristen", icons: ["folder-lock", "shield-check", "key-round"] },
  { slug: "excel-abloesen-wann-tabellen-zum-risiko-werden", chips: ["ERP", "PROZESSE"], lines: ["Excel ablösen:", "Wann es Zeit ist"], sub: "Warnzeichen · Umstieg", icons: ["sheet", "database", "workflow"] },
  { slug: "softwarevertrag-pruefen-laufzeit-daten-ausstieg", chips: ["VERTRAG", "DATENSCHUTZ"], lines: ["Softwarevertrag", "richtig prüfen"], sub: "Laufzeit · Daten · Ausstieg", icons: ["scroll-text", "lock", "gavel"] },
];

const black = await readFile(path.join(root, "scripts/fonts/Lato-Black.ttf"));
const bold = await readFile(path.join(root, "scripts/fonts/Lato-Bold.ttf"));
const fonts = [{ name: "Lato", data: black, weight: 900, style: "normal" }, { name: "Lato", data: bold, weight: 700, style: "normal" }];

/* lucide Symbole als satori Elemente */
async function icon(name, size, color, strokeWidth = 2) {
  const mod = await import(pathToFileURL(path.join(root, `node_modules/lucide-react/dist/esm/icons/${name}.mjs`)).href);
  const children = mod.__iconNode.map(([tag, attrs]) => ({ type: tag, props: Object.fromEntries(Object.entries(attrs).filter(([name]) => name !== "key")) }));
  return { type: "svg", props: { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", children } };
}

const el = (type, style, children) => ({ type, props: { style: { display: "flex", ...style }, children } });

/* Eine weiße Karte der Illustration: farbige Kachel mit Symbol, zwei Linien, eine Bestätigung */
async function card({ x, y, w, h, rotate, tone, name }) {
  const tile = tone === "mint" ? C.mint : tone === "yellow" ? C.chip : C.lilac;
  return el("div", { position: "absolute", left: x, top: y, width: w, height: h, transform: `rotate(${rotate}deg)`, flexDirection: "column", alignItems: "stretch", padding: 22, gap: 16, background: C.white, borderRadius: 30, border: `5px solid ${C.navy}`, boxShadow: "0 24px 0 -8px rgba(41,38,96,0.25)" }, [
    el("div", { height: Math.round(h * 0.42), alignItems: "center", justifyContent: "center", background: tile, borderRadius: 20 }, [await icon(name, Math.round(h * 0.26), C.navy, 2.2)]),
    el("div", { height: 16, width: "86%", background: C.soft, borderRadius: 8 }, ""),
    el("div", { height: 16, width: "62%", background: C.soft, borderRadius: 8 }, ""),
    el("div", { marginTop: "auto", height: 46, alignItems: "center", justifyContent: "center", background: tile, borderRadius: 14 }, [await icon("check", 28, C.navy, 3.2)]),
  ]);
}

async function scene({ chips, lines, sub, icons }) {
  const longest = Math.max(...lines.map((l) => l.length));
  const titleSize = Math.min(150, Math.floor(800 / (longest * 0.54)));

  return el("div", { position: "relative", width: W, height: H, background: C.bg, overflow: "hidden", fontFamily: "Lato" }, [
    /* Hintergrundformen */
    el("div", { position: "absolute", left: 930, top: 40, width: 760, height: 760, borderRadius: 380, background: C.blob, opacity: 0.55 }, ""),
    el("div", { position: "absolute", left: 1010, top: 690, width: 640, height: 190, borderRadius: 320, background: C.bgDark, opacity: 0.55 }, ""),
    el("div", { position: "absolute", left: 872, top: 118, width: 62, height: 62, borderRadius: 31, background: C.blob, opacity: 0.8 }, ""),
    el("div", { position: "absolute", left: 1442, top: 380, width: 46, height: 46, borderRadius: 23, background: C.blob, opacity: 0.8 }, ""),

    /* Karten der Illustration */
    await card({ x: 900, y: 300, w: 230, h: 340, rotate: -5, tone: "lilac", name: icons[0] }),
    await card({ x: 1330, y: 270, w: 180, h: 300, rotate: 6, tone: "yellow", name: icons[2] }),
    await card({ x: 1085, y: 190, w: 270, h: 410, rotate: 1, tone: "mint", name: icons[1] }),

    /* Text */
    el("div", { position: "absolute", left: 70, top: 112, gap: 18 }, chips.map((chip) => el("div", { padding: "14px 30px", background: C.chip, color: C.navy, fontSize: 40, fontWeight: 900, borderRadius: 18, letterSpacing: 1 }, chip))),
    el("div", { position: "absolute", left: 66, top: 250, flexDirection: "column", color: C.white, fontWeight: 900, fontSize: titleSize, lineHeight: 1.04, letterSpacing: -2 }, lines.map((line) => el("div", {}, line))),
    el("div", { position: "absolute", left: 70, top: 250 + Math.round(titleSize * 1.04 * lines.length) + 34, color: C.white, fontSize: 54, fontWeight: 700 }, sub),
    el("div", { position: "absolute", left: 70, top: 742, alignItems: "center", gap: 20 }, [
      el("div", { width: 56, height: 56, background: C.mint, borderRadius: 12 }, ""),
      el("div", { color: C.white, fontSize: 60, fontWeight: 700 }, "Softwarebrief"),
    ]),
  ]);
}

let made = 0, kept = 0;
for (const thumb of thumbs) {
  const target = path.join(outDir, `${thumb.slug}.webp`);
  if (!FORCE) { try { await stat(target); kept++; continue; } catch { /* fehlt, wird gezeichnet */ } }
  const svg = await satori(await scene(thumb), { width: W, height: H, fonts });
  await sharp(Buffer.from(svg)).resize(W, H).webp({ quality: 92, effort: 6 }).toFile(target);
  made++;
}
console.log(`${made} Vorschaubilder gezeichnet, ${kept} schon vorhanden.`);
