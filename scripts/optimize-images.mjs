/* Erzeugt kleinere WebP Fassungen aller lokalen Bilder und schreibt data/image-variants.json.

   Aufruf:  npm run images:optimize          (nur fehlende Stufen)
         npm run images:optimize -- --force  (alles neu erzeugen, nach Änderung von Breiten oder Qualität)

   Warum: Der Bild Endpunkt des Hostings ändert die Größe nicht (w=384 liefert dieselbe Datei wie das Original).
   Eine 768 px Illustration für eine 140 px Kachel zu laden kostet auf dem Handy Zeit und Datenvolumen.
   Hier entstehen deshalb feste Größen (Name-320.webp, Name-480.webp, ...), die components/fast-image.tsx
   über srcset passend zur Bildschirmbreite auswählt. Der Lauf ist wiederholbar und überspringt fertige Dateien. */

import sharp from "sharp";
import { mkdir, readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");

/** Breiten, in denen Varianten entstehen (nur kleinere als das Original). Bewusst keine kleinen Stufen unter 640:
    Die Bilder enthalten Schrift und feine Linien, und auf hochauflösenden Bildschirmen wirken kleine Stufen sofort weich. */
const WIDTHS = [640, 960, 1280, 1600];
/** Hohe Qualität, damit Schrift in den Vorschaubildern scharf bleibt. */
const QUALITY = 90;
const FORCE = process.argv.includes("--force");

/** Ordner, die verarbeitet werden. PNG Vorlagen im Ordner product-media werden zusätzlich als WebP gespeichert. */
const folders = ["illustrations", "editorial-thumbnails", "product-media"];
const isVariant = (file) => /-\d{3,4}\.webp$/.test(file);

const manifest = {};
let made = 0, kept = 0, converted = 0;

async function newer(target, source) {
  if (FORCE) return false;
  try { return (await stat(target)).mtimeMs >= (await stat(source)).mtimeMs; } catch { return false; }
}

for (const folder of folders) {
  const dir = path.join(pub, folder);
  for (const file of (await readdir(dir)).sort()) {
    const ext = path.extname(file).toLowerCase();
    if (isVariant(file) || ![".webp", ".png"].includes(ext)) continue;
    const stem = path.basename(file, ext);
    /* PNG Vorlagen werden nur in product-media gebraucht (Hersteller Screenshots). Bei den Illustrationen gibt es WebP schon. */
    if (ext === ".png" && folder !== "product-media") continue;
    const input = path.join(dir, file);

    let base = path.join(dir, `${stem}.webp`);
    if (ext === ".png") {
      if (!(await newer(base, input))) { await sharp(input).webp({ quality: 82, effort: 5 }).toFile(base); converted++; }
    }
    const source = ext === ".png" ? base : input;
    const meta = await sharp(source).metadata();
    const entry = { width: meta.width, height: meta.height, variants: [] };

    for (const w of WIDTHS) {
      if (w >= meta.width * 0.9) continue;
      const out = path.join(dir, `${stem}-${w}.webp`);
      if (await newer(out, source)) kept++;
      else { await sharp(source).resize({ width: w }).webp({ quality: QUALITY, effort: 6, smartSubsample: true }).toFile(out); made++; }
      entry.variants.push({ w, src: `/${folder}/${stem}-${w}.webp` });
    }
    manifest[`/${folder}/${stem}.webp`] = entry;
  }
}

/* Veraltete Stufen (zum Beispiel -320 und -480 aus früheren Läufen) entfernen, damit keine toten Dateien ausgeliefert werden. */
const wanted = new Set(Object.values(manifest).flatMap((entry) => entry.variants.map((v) => path.join(pub, v.src))));
let pruned = 0;
for (const folder of folders) {
  const dir = path.join(pub, folder);
  for (const file of await readdir(dir)) {
    if (isVariant(file) && !wanted.has(path.join(dir, file))) { await unlink(path.join(dir, file)); pruned++; }
  }
}

await mkdir(path.join(root, "data"), { recursive: true });
await writeFile(path.join(root, "data/image-variants.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`${Object.keys(manifest).length} Bilder erfasst, ${made} Varianten neu erzeugt, ${kept} schon aktuell, ${converted} PNG nach WebP umgewandelt, ${pruned} veraltete Stufen entfernt.`);
