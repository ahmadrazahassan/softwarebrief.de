import manifest from "@/data/cloudinary-assets.json";

/* Medien kommen von Cloudinary. data/cloudinary-assets.json wird von `npm run media:upload` erzeugt und
   enthält zu jeder hochgeladenen Datei Maße, Größe, Seitenzahl und Version. Der Cloud Name ist öffentlich
   (er steht in jeder Auslieferungs-URL). Der API Secret kommt hier nie vor. */

export const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || manifest.cloudName;
/** Wird an CldImage übergeben, damit die Komponenten auch ohne gesetzte Umgebungsvariable funktionieren. */
export const cldConfig = { cloud: { cloudName } };

export type CldAsset = { product: string; kind: "image" | "pdf" | "video"; width: number; height: number; bytes: number; pages?: number; version: number };

/** Liest eine Datei aus dem Verzeichnis. Fehlt sie, bricht der Build ab, statt ein kaputtes Bild zu zeigen. */
export function asset(id: string): CldAsset {
  const found = (manifest.assets as Record<string, CldAsset>)[id];
  if (!found) throw new Error(`Cloudinary: "${id}" fehlt in data/cloudinary-assets.json. Zuerst npm run media:upload ausführen.`);
  return found;
}

const base = `https://res.cloudinary.com/${cloudName}`;
const versioned = (id: string) => `v${asset(id).version}/${id}`;

/**
 * Ausgelieferte Videofassung (720p, H.264, sparsame Qualität). Der Text muss exakt dem entsprechen, was
 * scripts/upload-media.mjs vorberechnen lässt. Cloudinary legt abgeleitete Fassungen unter genau diesem Text ab,
 * eine andere Reihenfolge der Teile würde neu umgerechnet und das dauert beim ersten Abruf bis zu einer Minute.
 */
export const videoRendition = "c_limit,q_auto:eco,vc_h264,w_1280";
export const videoUrl = (id: string) => `${base}/video/upload/${videoRendition}/${versioned(id)}.mp4`;
/** Standbild aus dem Video an Sekunde `at`. */
export const videoPoster = (id: string, at: number, width = 1280) => `${base}/video/upload/so_${at},c_limit,q_auto,w_${width}/${versioned(id)}.webp`;

/** Erste Seite eines PDFs als Vorschaubild. Das funktioniert auch, wenn die PDF Auslieferung gesperrt ist. */
export const pdfCover = (id: string, width = 640) => `${base}/image/upload/pg_1,c_limit,q_auto,w_${width}/${versioned(id)}.webp`;

/** Eine Seite eines PDFs als Bild. Cloudinary liefert Seitenbilder auch dann, wenn die PDF Datei selbst gesperrt ist. Der Wert box begrenzt Breite und Höhe in Pixeln. */
export const pdfPage = (id: string, page: number, box = 1300) => `${base}/image/upload/pg_${page},c_limit,h_${box},q_auto,w_${box}/${versioned(id)}.webp`;

/**
 * PDF Datei aus Cloudinary. Neue Konten sperren die Auslieferung von PDF und ZIP standardmäßig (Antwort 401).
 * Nach der Freigabe unter Settings, Security in Cloudinary NEXT_PUBLIC_CLOUDINARY_PDF_DELIVERY=1 setzen.
 */
export const pdfFromCloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_PDF_DELIVERY === "1";
export const pdfUrl = (id: string) => `${base}/image/upload/${versioned(id)}.pdf`;
