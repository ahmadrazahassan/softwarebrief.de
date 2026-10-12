import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { categorySlugs, products } from "@/lib/catalog";
import { comparisonPairs } from "@/lib/compare";
import { absoluteUrl, siteUrl } from "@/lib/site";

/* Sitemap für Suchmaschinen, mit der Domain aus lib/site.ts. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl()) return [];
  const at = (path: string, priority: number, lastModified?: string) => ({ url: absoluteUrl(path)!, priority, ...(lastModified && { lastModified }) });

  return [
    at("/", 1),
    at("/ratgeber", 0.9),
    ...guides.map((g) => at(`/ratgeber/${g.slug}`, g.published ? 0.8 : 0.6, g.updated ?? g.published)),
    at("/kategorien", 0.8),
    ...categorySlugs.map((c) => at(`/software/${c}`, 0.8)),
    ...products.map((p) => at(`/software/${p.categorySlug}/${p.slug}`, 0.7)),
    at("/vergleich", 0.7),
    ...comparisonPairs.map((p) => at(`/vergleich/${p.slug}`, 0.6)),
    at("/empfehlung", 0.6),
    at("/newsletter", 0.5),
    at("/methodik", 0.5),
    at("/faq", 0.5),
    at("/ueber-uns", 0.4),
    at("/kontakt", 0.3),
  ];
}
