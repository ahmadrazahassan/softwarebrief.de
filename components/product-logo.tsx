import sources from "@/data/logo-sources.json";
import type { Product } from "@/lib/catalog";

const logos = sources as Record<string, { asset: string; source: string; page: string; vendor: string }>;

export function ProductLogo({ product, className = "" }: { product: Product; className?: string }) {
  const logo = logos[product.slug];
  return <span className={`product-monogram product-logo ${className}`}>
    {logo ? <img src={logo.asset} alt={`${product.name} Logo`} loading="lazy" /> : <span aria-hidden="true">{product.name.slice(0, 1)}</span>}
  </span>;
}
