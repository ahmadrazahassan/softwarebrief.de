/* Öffentliche Adresse der Website. Standard ist die Domain aus data/operator.ts; NEXT_PUBLIC_SITE_URL überschreibt sie
   (zum Beispiel für eine Vorschauumgebung). */

import { operator } from "@/data/operator";

export function siteUrl(): string | null {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || operator.siteUrl).replace(/\/+$/, "");
  if (!raw) return null;
  try {
    const url = new URL(raw);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : null;
  } catch {
    return null;
  }
}

/** Macht aus einem Pfad wie /ratgeber eine vollständige Adresse, oder null ohne bekannte Domain. */
export function absoluteUrl(path: string): string | null {
  const base = siteUrl();
  return base ? `${base}${path.startsWith("/") ? path : `/${path}`}` : null;
}

/** Seitentitel für Suchmaschinen: höchstens etwa 62 Zeichen. Passt der Zusatz nicht mehr dazu, entfällt er. */
export function fitTitle(main: string, suffix = " | Softwarebrief", max = 62) {
  if (main.length + suffix.length <= max) return main + suffix;
  return main.length <= max ? main : main.slice(0, max - 1).trimEnd() + "…";
}
