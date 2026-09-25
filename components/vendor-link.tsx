import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/catalog";

export function VendorLink({ product, className = "" }: { product: Product; className?: string }) {
  const affiliate = product.linkType === "affiliate";
  return <a className={className} href={product.vendorUrl} target="_blank" rel={affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}>
    {affiliate && <span className="affiliate-label">Werbung</span>}
    Anbieter besuchen <ArrowUpRight size={17} />
  </a>;
}
