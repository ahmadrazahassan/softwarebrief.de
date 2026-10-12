import type React from "react";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { pricingPlans } from "@/data/pricing-plans";
import { VendorLink } from "@/components/vendor-link";
import { vendorNote } from "@/components/profile-ctas";

export function PricingPlans({ product }: { product: Product }) {
  const data = pricingPlans[product.slug];
  if (!data) return null;
  return <div className="pricing-showcase">
    <div className="pricing-showcase-intro"><div><span className="pricing-kicker">TARIFE IM ÜBERBLICK</span><h3>Welcher Umfang passt zu Ihrem Betrieb?</h3></div><p>{data.basis}</p></div>
    <div className="pricing-tab" aria-hidden="true"><span>{data.plans.length === 1 ? "1 Tarif" : `${data.plans.length} Tarife`} · Preise in Euro</span></div>
    <div className="plan-frame"><div className="plan-grid" data-count={data.plans.length} style={{ "--plans": data.plans.length } as React.CSSProperties}>
      {data.plans.map((plan) => {
        const inquiry = plan.price === "Euro-Angebot";
        const free = plan.price === "0 €";
        return <article key={plan.name} className={`plan-card${plan.featured ? " plan-card-emphasis" : ""}`}>
          {plan.featured && <span className="plan-badge">Im Fokus</span>}
          <div className="plan-card-head"><span>{plan.name}</span><small>{plan.detail}</small></div>
          <div className="plan-price"><strong>{plan.price}</strong><span>{plan.unit}</span></div>
          <VendorLink product={product} cta={{ variant: plan.featured ? "dark" : "light", block: true }} label={inquiry ? "Angebot anfordern" : free ? "Kostenlos prüfen" : "Tarif prüfen"} ariaLabel={`${plan.name} von ${product.name} beim Anbieter prüfen`} />
          <ul>{plan.highlights.map((item) => <li key={item}><Plus size={17} strokeWidth={1.5} /><span>{item}</span></li>)}</ul>
        </article>;
      })}
    </div></div>
    <p className="pricing-showcase-note">Stand: {data.checked}. Preise sind Herstellerangaben in Euro und nur mit der genannten Einheit und Bedingung vergleichbar. Funktionen, Steuer und Aktionen können abweichen. <VendorLink product={product} label="Preise beim Anbieter ansehen" /></p>
    <p className="pricing-showcase-note">{vendorNote(product)}</p>
  </div>;
}
