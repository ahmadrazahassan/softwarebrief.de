import NextImage from "next/image";
import type { ComponentProps } from "react";
import variants from "@/data/image-variants.json";

/* Ersatz für next/image bei lokalen Bildern. Der Bild Endpunkt des Hostings verkleinert nichts, deshalb liefert
   dieses Bauteil ein srcset mit den vorab erzeugten Größen (npm run images:optimize), und der Browser wählt die
   passende. Dieselben Eigenschaften wie next/image, nur der Import ändert sich.
   Alles, was nicht im Verzeichnis steht (Cloudinary, SVG, externe Adressen), geht unverändert an next/image. */

type Props = ComponentProps<typeof NextImage>;
type Entry = { width: number; height: number; variants: { w: number; src: string }[] };
const table = variants as Record<string, Entry>;
const NEXT_ONLY = new Set(["quality", "placeholder", "blurDataURL", "unoptimized", "loader", "onLoadingComplete", "overrideSrc"]);

export default function Image(props: Props) {
  const { src, alt, width, height, sizes, priority, fill, loading, className, style, ...rest } = props;
  const entry = typeof src === "string" ? table[src] : undefined;
  if (!entry || typeof src !== "string") return <NextImage {...props} />;

  const srcSet = [...entry.variants, { w: entry.width, src }].map((v) => `${v.src} ${v.w}w`).join(", ");
  /* Diese next/image Eigenschaften kennt ein normales img Element nicht. */
  const domProps = Object.fromEntries(Object.entries(rest).filter(([key]) => !NEXT_ONLY.has(key)));

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...domProps}
      src={src}
      srcSet={srcSet}
      sizes={sizes ?? "100vw"}
      alt={alt}
      width={fill ? undefined : (width as number | undefined) ?? entry.width}
      height={fill ? undefined : (height as number | undefined) ?? entry.height}
      loading={priority ? "eager" : loading ?? "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={className}
      style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style}
    />
  );
}
