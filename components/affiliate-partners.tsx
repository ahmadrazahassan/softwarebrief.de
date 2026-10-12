import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { affiliateDisclosure, affiliatePartners } from "@/lib/affiliate";
import type { Product } from "@/lib/catalog";
import { ProductLogo } from "@/components/product-logo";
import { VendorLink } from "@/components/vendor-link";

export function AffiliatePartners({ products }: { products: Product[] }) {
  return <section className="partner-section" aria-labelledby="partner-title">
    <div className="shell">
      <div className="section-heading partner-heading">
        <div><p className="eyebrow">WERBUNG · AFFILIATE PARTNER</p><h2 id="partner-title">Unsere Softwarepartner.</h2></div>
        <Link href="/methodik#affiliate-offenlegung">So finanzieren wir Softwarebrief <ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
      <aside className="partner-disclosure" aria-label="Affiliate Offenlegung">
        <strong>Affiliate Offenlegung</strong><p>{affiliateDisclosure}</p>
      </aside>
      <div className="partner-grid">{affiliatePartners.map((partner) => {
        const profiles = products.filter((product) => partner.productSlugs.includes(product.slug));
        return <article className="partner-card" key={partner.slug}>
          <div className="partner-card-head"><ProductLogo product={partner} /><span>Affiliate Partner</span></div>
          <h3>{partner.name}</h3>
          <p className="partner-domain">{new URL(partner.vendorUrl).hostname.replace(/^www\./, "")}</p>
          <p className="partner-card-copy">Angebot, Funktionen und Konditionen direkt beim Anbieter prüfen.</p>
          <div className="partner-profiles">{profiles.map((product) => <Link key={product.slug} href={`/software/${product.categorySlug}/${product.slug}`}>{profiles.length > 1 ? product.name : "Profil und Quellen ansehen"} <ArrowRight size={14} aria-hidden="true" /></Link>)}</div>
          <VendorLink product={partner} label="Besuchen" cta={{ variant: "dark", size: "sm", block: true }} />
        </article>;
      })}</div>
    </div>
  </section>;
}
