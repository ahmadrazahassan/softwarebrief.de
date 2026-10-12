import { getCldImageUrl } from "next-cloudinary";
import { cldConfig } from "@/lib/cloudinary";

/* Bild aus Cloudinary mit mehreren Breiten im srcset. Die Adressen baut getCldImageUrl aus next-cloudinary
   (automatisches Format und automatische Qualität). Die CldImage Komponente liefert in diesem Setup nur eine
   einzige Breite, deshalb kleine Bildschirme das große Bild laden würden. Hier wählt der Browser die passende. */

type Props = {
  /** Public ID in Cloudinary. */
  id: string;
  /** Maße des Originals. Es wird nie größer ausgeliefert. */
  width: number;
  height: number;
  /** Gewünschte Breiten für das srcset. */
  widths: number[];
  sizes: string;
  alt: string;
  className?: string;
  /** Eager mit hoher Priorität statt lazy. */
  priority?: boolean;
};

export function CloudImage({ id, width, height, widths, sizes, alt, className, priority }: Props) {
  const steps = [...new Set(widths.map((w) => Math.min(w, width)))].sort((a, b) => a - b);
  const top = steps[steps.length - 1];
  const url = (w: number) => getCldImageUrl({ src: id, width: w, height: Math.round((w * height) / width) }, cldConfig);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url(top)}
      srcSet={steps.map((w) => `${url(w)} ${w}w`).join(", ")}
      sizes={sizes}
      width={top}
      height={Math.round((top * height) / width)}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}
