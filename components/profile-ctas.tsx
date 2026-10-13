import Link from "next/link";
import { ArrowDown, GitCompareArrows, Sparkles } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { CtaContent, ctaClass } from "@/components/cta";
import { VendorLink } from "@/components/vendor-link";
import { affiliateLinkNote, withAffiliateLink } from "@/lib/affiliate";

/** Hinweis zum Anbieterlink, passend zum tatsächlichen Linkstatus. */
export const vendorNote = (product: Product) =>
  withAffiliateLink(product).linkType === "affiliate"
    ? affiliateLinkNote
    : "Sie besuchen die offizielle Herstellerseite. Dieser Link ist kein Werbelink.";

/**
 * Handlungsaufforderungen auf der Profilseite. Die drei Wege sind immer dieselben: beim Anbieter prüfen,
 * die Preise verstehen, mit Alternativen vergleichen. Nur Größe und Hintergrund ändern sich je Ort.
 * - panel: auf der dunklen Showroom Fläche
 * - inline: unter dem Produktfilm
 */
export function ProfileCtas({ product, variant }: { product: Product; variant: "panel" | "inline" }) {
  const panel = variant === "panel";
  const size = panel ? "lg" : "sm";
  return (
    <div className={`pcta pcta--${variant}`}>
      {panel && <div className="pcta-copy"><strong>Überzeugt Sie, was Sie sehen?</strong><p>Prüfen Sie jetzt Preise und Bedingungen beim Anbieter oder stellen Sie {product.name} anderen Programmen gegenüber.</p></div>}
      <div className="pcta-row">
        <VendorLink product={product} placement={`profil-${product.slug}-${panel ? "showroom" : "film"}`} cta={{ variant: panel ? "brand" : "dark", size }} />
        <a className={ctaClass({ variant: "light", size })} href="#preise"><CtaContent icon={<ArrowDown size={18} strokeWidth={1.75} />}>Preise im Detail</CtaContent></a>
        <Link className={ctaClass({ variant: "light", size })} href={`/vergleich?produkte=${product.slug}`}><CtaContent icon={<GitCompareArrows size={18} strokeWidth={1.75} />}>Alternativen vergleichen</CtaContent></Link>
      </div>
      <p className="pcta-note">{vendorNote(product)}</p>
    </div>
  );
}

/** Abschluss der Profilseite: ein klarer nächster Schritt, auch für Besucher, die bis ans Ende gelesen haben. */
export function ProfileCtaBand({ product }: { product: Product }) {
  return (
    <section className="shell pband-wrap" aria-labelledby="naechster-schritt">
      <div className="pband">
        <div>
          <p className="pband-eyebrow">NÄCHSTER SCHRITT</p>
          <h2 id="naechster-schritt">Bereit, {product.name} zu prüfen?</h2>
          <p>Holen Sie sich beim Anbieter ein Angebot für Ihr konkretes Team. Oder lassen Sie sich in vier Fragen passende Alternativen nennen.</p>
        </div>
        <div className="pband-actions">
          <VendorLink product={product} placement={`profil-${product.slug}-abschluss`} cta={{ variant: "brand", size: "lg", block: true }} />
          <Link className={ctaClass({ variant: "light", size: "lg", block: true })} href={`/vergleich?produkte=${product.slug}`}><CtaContent icon={<GitCompareArrows size={18} strokeWidth={1.75} />}>Mit Alternativen vergleichen</CtaContent></Link>
          <Link className={ctaClass({ variant: "light", size: "lg", block: true })} href="/empfehlung"><CtaContent icon={<Sparkles size={18} strokeWidth={1.75} />}>Empfehlung erhalten</CtaContent></Link>
          <p className="pcta-note">{vendorNote(product)}</p>
        </div>
      </div>
    </section>
  );
}
