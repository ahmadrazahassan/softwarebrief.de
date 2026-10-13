import Link from "next/link";
import { bannerClickUrl, bannerImageUrl, bannerSets, bannerSources, type BannerFormat, type BannerSetId, type PlacedBanner } from "@/lib/sage-banners";

/**
 * Offizielle Sage Anzeige aus dem Affiliate Programm, unverändert und mit sichtbarer Kennzeichnung.
 * - Der Browser wählt je nach Fensterbreite genau eine Bildgröße. Die Größenangaben an den Quellen halten den Platz frei,
 *   damit die Seite beim Laden nicht springt.
 * - Das Bild lädt erst kurz vor dem Sichtbereich (lazy) und sendet keine Herkunftsseite an den Bilddienst.
 * - Der Link trägt rel="sponsored"; die Platzierung geht als subId1 an Impact, damit sich Klicks je Stelle auswerten lassen.
 * - Es gibt keinen Zählpixel, keine Überlagerung und kein Pop up.
 */
export function SageBanner({ set, format, placement, eager = false }: { set: BannerSetId; format: BannerFormat; placement: string; eager?: boolean }) {
  const data = bannerSets[set];
  const { fallback, wide } = bannerSources(data, format);
  return <div className={`sage-ad sage-ad--${format}`}>
    <div className="sage-ad-box">
      <div className="sage-ad-meta"><span className="sage-ad-label">Werbung</span><Link href="/methodik#affiliate-offenlegung">Hinweis zur Werbung</Link></div>
      <a className="sage-ad-link" href={bannerClickUrl(fallback.id, placement)} target="_blank" rel="noopener noreferrer sponsored" aria-label={`Werbung: ${data.alt} (öffnet in neuem Tab)`}>
        <picture>
          {wide.map((source) => <source key={source.size} media={`(min-width: ${source.minWidth}px)`} srcSet={bannerImageUrl(source.id)} width={source.width} height={source.height} />)}
          <img src={bannerImageUrl(fallback.id)} width={fallback.width} height={fallback.height} alt={data.alt} loading={eager ? "eager" : "lazy"} decoding="async" referrerPolicy="no-referrer" />
        </picture>
      </a>
    </div>
  </div>;
}

/** Eine oder mehrere Anzeigen nebeneinander. `slot` benennt die Stelle der Seite und bildet mit dem Banner die Platzierungskennung. */
export function SageAds({ banners, slot, className = "" }: { banners: readonly PlacedBanner[]; slot: string; className?: string }) {
  if (!banners.length) return null;
  return <div className={`sage-ads ${className}`.trim()}>{banners.map((banner) => <SageBanner key={`${banner.set}-${banner.format}`} {...banner} placement={`${slot}-${banner.set}`} />)}</div>;
}
