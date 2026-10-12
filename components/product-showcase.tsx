import { Info } from "lucide-react";
import { PdfLibrary } from "@/components/pdf-library";
import { ProfileCtas } from "@/components/profile-ctas";
import { ShowcaseTour } from "@/components/showcase-tour";
import { vendorMedia } from "@/data/vendor-media";
import type { Product } from "@/lib/catalog";

/** Showroom mit Screenshots und den PDF Unterlagen des Herstellers. Zeigt nichts, wenn es kein Material gibt. */
export function ProductShowcase({ product }: { product: Product }) {
  const { slug, name } = product;
  const kit = vendorMedia[slug];
  if (!kit || (!kit.images.length && !kit.documents)) return null;
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
