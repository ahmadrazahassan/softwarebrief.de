/* Offizielle Sage Werbebanner aus dem Affiliate Programm (Netzwerk Impact, Programm 27498).
   Die Anzeigen stammen unverändert von Sage. Wir beschneiden, verzerren, ergänzen oder überlagern sie nicht und
   binden jede Anzeige nur mit dem zugehörigen Klicklink ein. Quelle der Anzeigennummern: Sage Export "Ads.csv"
   vom 13. Oktober 2026. Die Datei hat bewusst keine Importe, damit der Node Test sie direkt laden kann. */

export const SAGE_PUBLISHER_ID = 7957351;
export const SAGE_PROGRAM_ID = 27498;
const CLICK_BASE = "https://sagegmbh.sjv.io/c";

/** Auslieferung der Bilddateien durch Impact. Zum Selbsthosten genügt es, hier einen eigenen Ordner einzutragen
    (Dateiname je Anzeige: <Anzeigennummer>.png). Dann entfällt die Verbindung zu Impact beim Laden der Seite. */
export const bannerImageBase = "https://a.impactradius-go.com/display-ad";

export type BannerSetId = "hr" | "erp" | "intacct" | "operations";
export type BannerSize = "970x250" | "728x90" | "320x50" | "300x600" | "300x250" | "300x50" | "160x600";
export type BannerFormat = "billboard" | "leaderboard" | "rectangle";

export type BannerSet = {
  id: BannerSetId;
  name: string;
  /** Beschreibung des Bildinhalts für Screenreader. Sie gibt nur wieder, was das Banner selbst sagt. */
  alt: string;
  /** Zielseite laut Sage Export. Jeder Klicklink dieses Satzes führt dorthin. */
  landing: string;
  ads: Partial<Record<BannerSize, number>>;
};

export const bannerSets: Record<BannerSetId, BannerSet> = {
  hr: {
    id: "hr", name: "Sage HR", alt: "Sage HR-Software: Personalprozesse effizient gestalten",
    landing: "https://www.sage.com/de-de/hr-software/",
    ads: { "320x50": 3364232, "728x90": 3364233, "970x250": 3364234, "160x600": 3364228, "300x50": 3364229, "300x250": 3364230, "300x600": 3364231 },
  },
  erp: {
    id: "erp", name: "Sage ERP", alt: "Sage ERP-Software: Ressourcen perfekt nutzen",
    landing: "https://www.sage.com/de-de/erp-software/",
    ads: { "160x600": 3364219, "300x50": 3364220, "300x250": 3364221, "300x600": 3364222 },
  },
  intacct: {
    id: "intacct", name: "Sage Intacct", alt: "Sage Intacct: Finanzmanagement-Software mit KI",
    landing: "https://www.sage.com/de-de/sage-business-cloud/intacct/",
    ads: { "160x600": 3364239, "300x50": 3364240, "300x250": 3364241, "300x600": 3364242, "320x50": 3364243, "728x90": 3364244, "970x250": 3364245 },
  },
  operations: {
    id: "operations", name: "Sage Operations", alt: "Sage Operations: Cloud-ERP-Software für Handel und Fertigung",
    landing: "https://www.sage.com/de-de/sage-business-cloud/sage-operations/",
    ads: { "160x600": 3723302, "300x50": 3723303, "300x250": 3723304, "300x600": 3723305, "320x50": 3723306, "728x90": 3723307, "970x250": 3723308 },
  },
};

/** Welche Bildgröße ab welcher Fensterbreite erscheint. Die Breiten sind so gewählt, dass die Anzeige unverkleinert
    in die Spalte passt (Seitenbreite abzüglich Rand, bei Profilseiten zusätzlich Seitenleiste und Innenabstand). */
export const bannerFormats: Record<BannerFormat, { fallback: BannerSize; wide: { minWidth: number; size: BannerSize }[] }> = {
  billboard: { fallback: "300x250", wide: [{ minWidth: 1040, size: "970x250" }, { minWidth: 800, size: "728x90" }] },
  leaderboard: { fallback: "300x250", wide: [{ minWidth: 1240, size: "728x90" }] },
  rectangle: { fallback: "300x250", wide: [] },
};

export type BannerAd = { id: number; size: BannerSize; width: number; height: number };

const dimensions = (size: BannerSize) => { const [width, height] = size.split("x").map(Number); return { width, height }; };
const ad = (set: BannerSet, size: BannerSize): BannerAd => {
  const id = set.ads[size];
  if (!id) throw new Error(`Sage Banner "${set.id}" hat keine Größe ${size}`);
  return { id, size, ...dimensions(size) };
};

export const supportsFormat = (set: BannerSet, format: BannerFormat) => {
  const f = bannerFormats[format];
  return [f.fallback, ...f.wide.map((w) => w.size)].every((size) => Boolean(set.ads[size]));
};

/** Bildquellen in der Reihenfolge, in der der Browser sie prüft (breiteste zuerst), plus die Ausweichgröße. */
export function bannerSources(set: BannerSet, format: BannerFormat) {
  const f = bannerFormats[format];
  return { fallback: ad(set, f.fallback), wide: f.wide.map((w) => ({ minWidth: w.minWidth, ...ad(set, w.size) })) };
}

export const bannerImageUrl = (adId: number) => `${bannerImageBase}/${SAGE_PROGRAM_ID}-${adId}`;

/** Platzierungskennung für die Auswertung bei Impact (Parameter subId1). Nur Kleinbuchstaben, Ziffern und Bindestriche. */
export const isPlacementId = (value: string) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value) && value.length <= 64;

export function bannerClickUrl(adId: number, placement: string) {
  if (!isPlacementId(placement)) throw new Error(`Ungültige Platzierungskennung: ${placement}`);
  return `${CLICK_BASE}/${SAGE_PUBLISHER_ID}/${adId}/${SAGE_PROGRAM_ID}?subId1=${placement}`;
}

export type PlacedBanner = { set: BannerSetId; format: BannerFormat };

/** Passende Anzeigen je Sage Profil. Eine Anzeige erscheint nur, wenn sie thematisch zum Produkt gehört.
    Sage Active und Sage Sales Management haben im Export keine passende Anzeige und bleiben ohne Banner.
    Sage Payroll und Sage HR & Payroll verwenden den HR Banner, weil Sage für Lohn kein eigenes Banner liefert. */
export const profileBanners: Record<string, { intro: PlacedBanner[]; closing: PlacedBanner[] }> = {
  "sage-hr": { intro: [{ set: "hr", format: "leaderboard" }], closing: [{ set: "hr", format: "rectangle" }] },
  "sage-hr-payroll": { intro: [{ set: "hr", format: "leaderboard" }], closing: [{ set: "hr", format: "rectangle" }] },
  "sage-payroll": { intro: [{ set: "hr", format: "leaderboard" }], closing: [{ set: "hr", format: "rectangle" }] },
  "sage-100": { intro: [{ set: "operations", format: "leaderboard" }], closing: [{ set: "erp", format: "rectangle" }, { set: "intacct", format: "rectangle" }] },
  "sage-50-handwerk": { intro: [{ set: "erp", format: "rectangle" }], closing: [] },
  "sage-intacct": { intro: [{ set: "intacct", format: "leaderboard" }], closing: [{ set: "erp", format: "rectangle" }, { set: "operations", format: "rectangle" }] },
};

/** Anzeigen auf Kategorieseiten, nur in Kategorien, zu denen Sage ein Banner liefert. */
export const categoryBanners: Record<string, PlacedBanner> = {
  erp: { set: "operations", format: "billboard" },
  hr: { set: "hr", format: "billboard" },
  lohnabrechnung: { set: "hr", format: "billboard" },
};

/** Anzeigen auf der Startseite. */
export const homeBanners: Record<"categories" | "partners", PlacedBanner> = {
  categories: { set: "hr", format: "billboard" },
  partners: { set: "operations", format: "billboard" },
};
