"use client";

import Link from "next/link";
import { GitCompareArrows } from "lucide-react";
import { useEffect, useState } from "react";
import { compactPrice, type Product } from "@/lib/catalog";
import { VendorLink } from "@/components/vendor-link";

/**
 * Feste Leiste am unteren Rand, nur auf dem Handy. Sie erscheint, sobald der Seitenkopf aus dem Bild ist,
 * und verschwindet am Seitenende, damit sie den Footer nicht verdeckt.
 */
export function MobileCtaBar({ product }: { product: Product }) {
  const [heroGone, setHeroGone] = useState(false);
  const [footerNear, setFooterNear] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".product-hero");
    const footer = document.querySelector(".site-footer");
    const observers: IntersectionObserver[] = [];
    if (hero) { const o = new IntersectionObserver(([e]) => setHeroGone(!e.isIntersecting), { threshold: 0 }); o.observe(hero); observers.push(o); }
    if (footer) { const o = new IntersectionObserver(([e]) => setFooterNear(e.isIntersecting), { threshold: 0 }); o.observe(footer); observers.push(o); }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const visible = heroGone && !footerNear;
  return (
    <div className={`mcb${visible ? " is-visible" : ""}`} role="region" aria-label={`Schnellzugriff ${product.name}`} aria-hidden={!visible}>
      <div className="mcb-text"><strong>{product.name}</strong><span>{compactPrice(product)}</span></div>
      <VendorLink product={product} label="Anbieter" placement={`profil-${product.slug}-mobil`} cta={{ variant: "brand", size: "sm" }} />
      <Link href={`/vergleich?produkte=${product.slug}`} className="mcb-compare" aria-label={`${product.name} vergleichen`} tabIndex={visible ? 0 : -1}><GitCompareArrows size={20} aria-hidden="true" /></Link>
    </div>
  );
}
