import { Play } from "lucide-react";
import { productMedia } from "@/data/evidence";
import Image from "@/components/fast-image";
import { CtaContent, ctaClass } from "@/components/cta";

/** Herstellermedien (Oberfläche, Video). Die belegten Eckdaten eines Produkts zeigt der Softwarebrief Check. */
export function ProductEvidence({ slug }: { slug: string }) {
  const media = productMedia[slug];
  if (!media) return null;
  return <div className="product-evidence">
    {media.image && <figure className="evidence-media"><Image src={media.image} alt={media.alt} width={1200} height={700} sizes="(max-width: 760px) 100vw, 760px" unoptimized /><figcaption>{media.caption} <a href={media.source} target="_blank" rel="noopener noreferrer">Original beim Hersteller ansehen ↗</a></figcaption></figure>}
    {media.video && <div className="evidence-video"><div><strong>Produktvideo auf Deutsch</strong><p>{media.video.title} · Hersteller, {media.video.year}. {Number(media.video.year) < 2025 ? "Die heutige Oberfläche kann abweichen. " : ""}Das Video öffnet erst nach Ihrem Klick bei YouTube.</p></div><a href={media.video.url} target="_blank" rel="noopener noreferrer" className={ctaClass({ variant: "brand", size: "sm" })}><CtaContent icon={<Play size={16} strokeWidth={2} />}>Video ansehen</CtaContent></a></div>}
  </div>;
}
