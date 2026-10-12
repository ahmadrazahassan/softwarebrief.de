/* Lädt das Herstellermaterial (Bilder, PDFs, Videos) nach Cloudinary und schreibt data/cloudinary-assets.json.

   Aufruf:  npm run media:upload            lädt hoch
            npm run media:upload -- --dry   zeigt nur den Plan
   Zugangsdaten kommen aus .env.local (CLOUDINARY_URL). Sie werden nie ausgegeben und nie in den Browser gegeben.

   Der Lauf ist wiederholbar: Dateien, die unter derselben ID schon in Cloudinary liegen, werden nicht neu
   hochgeladen (overwrite: false). Videos werden als Original hochgeladen, Cloudinary erzeugt daraus die
   ausgelieferte Fassung (siehe eager). */

import { v2 as cloudinary } from "cloudinary";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dry = process.argv.includes("--dry");

if (!process.env.CLOUDINARY_URL) {
  console.error("CLOUDINARY_URL fehlt. Aufruf über npm run media:upload, damit .env.local geladen wird.");
  process.exit(1);
}
cloudinary.config({ secure: true });

/** Ordner im Projekt und das Produkt (Katalog Slug), zu dem sie gehören. */
/* Alle Quelldateien liegen in media-originals (nicht in public, nicht in git). Aus public werden nur noch die
   PDFs ausgeliefert, und nur solange Cloudinary PDF Dateien sperrt (siehe lib/cloudinary.ts). */
const sources = [
  { dir: "media-originals/sage-active", product: "sage-active" },
  { dir: "media-originals/sage-100", product: "sage-100" },
  { dir: "media-originals/sage-intacct", product: "sage-intacct" },
  { dir: "media-originals/lohnabrechnung", product: "sage-payroll" },
  { dir: "media-originals/sage-operations", product: "sage-operations" },
  { dir: "media-originals/sage-x3", product: "sage-x3" },
];

/** Lesbare IDs für die Videos, alles andere behält den Dateinamen ohne Endung. */
const renames = new Map([
  ["Sage 100 Teaser CTA = Produkttour_button (1) (1) (1).mp4", "produkttour"],
  ["Mobil Wachsen mit der Sage Business Cloud_ Becker Eventkonzept.mp4", "kundenvideo-becker-eventkonzept"],
]);

/** Selbst erzeugte Web Fassungen und Poster werden nicht hochgeladen. Cloudinary erzeugt beides aus dem Original. */
const derived = /^(produkttour\.mp4|kundenvideo-becker-eventkonzept\.mp4|.*-poster\.webp)$/;
/** Unscharfe Platzhaltervorschau in sage-100, kein Screenshot. */
const placeholders = new Set(["o36mnnhwknfp2ktu5egbffjv9oxc.webp"]);

const kindOf = (file) => ({ ".mp4": "video", ".pdf": "pdf", ".webp": "image" })[path.extname(file).toLowerCase()];

async function plan() {
  const items = [];
  for (const { dir, product } of sources) {
    for (const file of (await readdir(path.join(root, dir))).sort()) {
      const kind = kindOf(file);
      if (!kind || derived.test(file) || placeholders.has(file)) continue;
      const full = path.join(root, dir, file);
      const name = renames.get(file) ?? path.basename(file, path.extname(file));
      items.push({ file: path.join(dir, file).replaceAll("\\", "/"), full, product, kind, publicId: `klarlotse/${product}/${name}`, bytes: (await stat(full)).size });
    }
  }
  return items;
}

async function existing(publicId, resourceType) {
  try {
    return await cloudinary.api.resource(publicId, { resource_type: resourceType, pages: true });
  } catch (error) {
    if (error?.error?.http_code === 404) return null;
    throw error;
  }
}

/** Die ausgelieferte Videofassung: 720p, H.264, sparsame Qualität. Muss exakt zu delivery.video in lib/cloudinary.ts passen. */
const videoRendition = { width: 1280, crop: "limit", quality: "auto:eco", video_codec: "h264", format: "mp4" };

async function upload(item) {
  const resource_type = item.kind === "video" ? "video" : "image";
  const found = await existing(item.publicId, resource_type);
  if (found) return { result: found, skipped: true };

  const options = {
    public_id: item.publicId,
    resource_type,
    overwrite: false,
    unique_filename: false,
    use_filename: false,
    tags: ["klarlotse", "sage", item.product, item.kind],
    context: { product: item.product, source: "Sage (Hersteller)" },
  };
  if (item.kind === "video") {
    /* Die ausgelieferte Fassung (720p, H.264) wird gleich im Hintergrund vorberechnet, damit der erste Aufruf nicht wartet. */
    options.eager = [videoRendition];
    options.eager_async = true;
  }
  if (item.bytes > 20 * 1024 * 1024) await cloudinary.uploader.upload_large(item.full, { ...options, chunk_size: 6_000_000 });
  else await cloudinary.uploader.upload(item.full, options);
  /* Die Rückgabe des Teile Uploads enthält keine Metadaten. Deshalb lesen wir sie immer aus Cloudinary nach. */
  return { result: await existing(item.publicId, resource_type), skipped: false };
}

/** Legt die ausgelieferte Videofassung nachträglich an, falls sie fehlt (zum Beispiel nach einer Änderung der Qualität). */
async function ensureRendition(publicId) {
  await cloudinary.uploader.explicit(publicId, { resource_type: "video", type: "upload", eager: [videoRendition], eager_async: true });
}

const items = await plan();
const mb = (n) => (n / 1048576).toFixed(1).padStart(5);
console.log(`${items.length} Dateien, ${mb(items.reduce((s, i) => s + i.bytes, 0))} MB gesamt${dry ? " (Trockenlauf)" : ""}`);

const manifest = {};
let uploaded = 0, skipped = 0, failed = 0;
for (const item of items) {
  const label = `${item.kind.padEnd(5)} ${mb(item.bytes)} MB  ${item.publicId}`;
  if (dry) { console.log("plan   " + label); continue; }
  try {
    const { result, skipped: wasThere } = await upload(item);
    if (wasThere) skipped++;
    else uploaded++;
    if (item.kind === "video" && process.argv.includes("--renditions")) await ensureRendition(item.publicId);
    manifest[item.publicId] = {
      product: item.product,
      kind: item.kind,
      resourceType: result.resource_type,
      format: result.format,
      width: result.width,
      height: result.height,
      bytes: result.bytes,
      ...(result.pages && { pages: result.pages }),
      ...(result.duration && { duration: Math.round(result.duration * 10) / 10 }),
      version: result.version,
    };
    console.log((wasThere ? "da     " : "hoch   ") + label);
  } catch (error) {
    failed++;
    console.error("FEHLER " + label + "  " + (error?.error?.message ?? error?.message ?? error));
  }
}

if (!dry) {
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(path.join(root, "data/cloudinary-assets.json"), JSON.stringify({ cloudName: cloudinary.config().cloud_name, assets: sorted }, null, 2) + "\n");
  console.log(`\nfertig: ${uploaded} hochgeladen, ${skipped} schon vorhanden, ${failed} Fehler. Verzeichnis: data/cloudinary-assets.json`);
  if (failed) process.exit(1);
}
