import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { withAffiliateLink } from "@/lib/affiliate";
import { CtaContent, ctaClass, type CtaSize, type CtaVariant } from "@/components/cta";

export function VendorLink({ product, className = "", cta, label = "Anbieter besuchen", ariaLabel }: { product: Pick<Product, "slug" | "name" | "vendorUrl" | "linkType">; className?: string; label?: string; ariaLabel?: string; cta?: { variant?: CtaVariant; size?: CtaSize; block?: boolean } }) {
  const destination = withAffiliateLink(product);
  const affiliate = destination.linkType === "affiliate";
  const rel = affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer";
  const content = <>{affiliate && <span className="affiliate-label">Werbung</span>}{label}</>;
  const accessibleLabel = `${affiliate ? "Werbung: " : ""}${ariaLabel ?? `${label}: ${product.name}`} (öffnet in neuem Tab)`;
  if (cta) return <a className={ctaClass({ ...cta, className })} href={destination.vendorUrl} target="_blank" rel={rel} aria-label={accessibleLabel}>
    <CtaContent icon={<ArrowUpRight size={18} strokeWidth={1.75} />}>{content}</CtaContent>
  </a>;
  return <a className={className} href={destination.vendorUrl} target="_blank" rel={rel} aria-label={accessibleLabel}>
    {content} <ArrowUpRight size={17} aria-hidden="true" />
  </a>;
}
