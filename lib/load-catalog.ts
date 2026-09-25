import { products, type Product } from "@/lib/catalog";
import { supabaseGet } from "@/lib/supabase";

type CatalogRow = { profile: Product };
type OutboundRow = { product_slug: string; destination_url: string; link_type: "direct" | "affiliate" };

export async function loadCatalog(): Promise<Product[]> {
  try {
    const [rows, links] = await Promise.all([
      supabaseGet<CatalogRow[]>("catalog_products?published=eq.true&select=profile"),
      supabaseGet<OutboundRow[]>("outbound_links?active=eq.true&select=product_slug,destination_url,link_type"),
    ]);
    if (!rows?.length) return products;
    const current = new Map(rows.map((row) => [row.profile.slug, row.profile]));
    const destinations = new Map((links ?? []).map((link) => [link.product_slug, link]));
    return products.map((product) => {
      const profile = current.get(product.slug) ?? product;
      const destination = destinations.get(product.slug);
      return { ...profile, vendorUrl: destination?.destination_url ?? profile.vendorUrl, linkType: destination?.link_type ?? "direct" };
    });
  } catch {
    return products;
  }
}
