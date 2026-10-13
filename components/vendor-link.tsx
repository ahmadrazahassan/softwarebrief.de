import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { withAffiliateLink, withPlacement } from "@/lib/affiliate";
import { CtaContent, ctaClass, type CtaSize, type CtaVariant } from "@/components/cta";

/** `placement` nennt die Stelle der Seite (zum Beispiel "profil-kopf") und erscheint bei Netzwerklinks als subId1 in der Auswertung des Partnernetzwerks. */
export function VendorLink({ product, className = "", cta, label = "Anbieter besuchen", ariaLabel, placement }: { product: Pick<Product, "slug" | "name" | "vendorUrl" | "linkType">; className?: string; label?: string; ariaLabel?: string; placement?: string; cta?: { variant?: CtaVariant; size?: CtaSize; block?: boolean } }) {
  const destination = withAffiliateLink(product);
  const affiliate = destination.linkType === "affiliate";
  const href = withPlacement(destination.vendorUrl, placement);
  const rel = affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer";
  const content = <>{affiliate && <span className="affiliate-label">Werbung</span>}<span className="vendor-link-text">{label}</span></>;
  const accessibleLabel = `${affiliate ? "Werbung: " : ""}${ariaLabel ?? `${label}: ${product.name}`} (öffnet in neuem Tab)`;
  if (cta) return <a className={ctaClass({ ...cta, className })} href={href} target="_blank" rel={rel} aria-label={accessibleLabel}>
    <CtaContent icon={<ArrowUpRight size={18} strokeWidth={1.75} />}>{content}</CtaContent>
  </a>;
  return <a className={className} href={href} target="_blank" rel={rel} aria-label={accessibleLabel}>
    {content} <ArrowUpRight size={17} aria-hidden="true" />
  </a>;
}
