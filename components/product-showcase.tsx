import { ArrowUpRight, Info } from "lucide-react";
import { CtaContent, ctaClass } from "@/components/cta";
import { PdfLibrary } from "@/components/pdf-library";
import { ProfileCtas, vendorNote } from "@/components/profile-ctas";
import { ShowcaseTour } from "@/components/showcase-tour";
import { VendorLink } from "@/components/vendor-link";
import { vendorMedia, vendorSources } from "@/data/vendor-media";
import { withAffiliateLink } from "@/lib/affiliate";
import type { Product } from "@/lib/catalog";

/** Freigegebenes Herstellermaterial oder ein direkter Verweis auf die offizielle Quelle. */
export function ProductShowcase({ product }: { product: Product }) {
  const { slug, name } = product;
  const kit = vendorMedia[slug];
  const source = vendorSources[slug];
  if (!kit || (!kit.images.length && !kit.documents?.length)) {
    if (!source) return null;
    // Affiliate Partner (Sage) laufen über den Netzwerklink, damit Impact den Klick zählt und die Werbung gekennzeichnet ist.
    const affiliate = withAffiliateLink(product).linkType === "affiliate";
    return (
      <section className="shell vs-wrap" id="einblicke" aria-labelledby="einblicke-title">
        <div className="vs vs--source">
          <div className="vs-source-content">
            <div>
              <p className="vs-eyebrow">OFFIZIELLE HERSTELLERSEITE</p>
              <h2 id="einblicke-title">Einblicke in {name}. Direkt bei {source.vendor}.</h2>
              <p>Die aktuellen Produktinformationen und verfügbaren Demos finden Sie beim Hersteller. Prüfen Sie dort die Oberfläche, das Angebot und die Unterlagen für Ihren Betrieb.</p>
            </div>
            {affiliate
              ? <VendorLink product={product} label={`Bei ${source.vendor} ansehen`} placement={`profil-${slug}-einblicke`} cta={{ variant: "dark" }} />
              : <a href={source.url} target="_blank" rel="noopener noreferrer" className={ctaClass({ variant: "dark" })}>
                  <CtaContent icon={<ArrowUpRight size={18} strokeWidth={1.75} />}>Bei {source.vendor} ansehen</CtaContent>
                </a>}
          </div>
          <p className="vs-source-credit">Quelle: {source.vendor} · {new URL(source.url).hostname.replace(/^www\./, "")}. Produktabbildungen, Videos und Unterlagen auf der verlinkten Seite stammen vom Hersteller. Die Rechte liegen bei den jeweiligen Rechteinhabern.{affiliate && ` ${vendorNote(product)}`}</p>
        </div>
      </section>
    );
  }
  const { images, documents } = kit;

  return (
    <section className="shell vs-wrap" id="einblicke" aria-labelledby="einblicke-title">
      {/* Verbindung zu Cloudinary früh aufbauen, damit Bilder und das Video ohne Wartezeit starten. */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <div className="vs">
        <header className="vs-head">
          <div>
            <p className="vs-eyebrow">EINBLICKE</p>
            <h2 id="einblicke-title">Die Oberfläche von {name}</h2>
          </div>
          <p className="vs-meta">{images.length} {images.length === 1 ? "Ansicht" : "Ansichten"}{documents ? `, ${documents.length} PDFs` : ""}<span>Herstellermaterial von {kit.vendor}</span></p>
        </header>

        {images.length > 0 && <ShowcaseTour images={images} name={name} />}

        {documents && (
          <div className="vs-library" id="unterlagen">
            <h3>Unterlagen des Herstellers</h3>
            <PdfLibrary docs={documents} />
          </div>
        )}

        <ProfileCtas product={product} variant="panel" />

        <div className="vs-note">
          <Info size={16} aria-hidden="true" />
          <p>
            {documents ? "Abbildungen und Dokumente" : "Die Abbildungen"} stammen von {kit.vendor}. Aussagen darin sind Herstellerangaben, die Softwarebrief nicht geprüft hat, und die Oberfläche kann inzwischen abweichen. Das ist kein Produkttest.
            {kit.note ? ` ${kit.note}` : ""} <a href={kit.source} target="_blank" rel="noopener noreferrer">Produktseite des Herstellers ↗</a>
          </p>
        </div>
      </div>
    </section>
  );
}
