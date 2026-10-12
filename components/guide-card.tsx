import Image from "@/components/fast-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GuideMeta } from "@/data/guides";
import { categories } from "@/lib/catalog";
import { guideThumbnail } from "@/lib/guide-thumbnails";

/** The article card from the homepage "Aktuelle Ratgeber" section, shared by the blog pages. */
export function GuideCard({ guide }: { guide: GuideMeta }) {
  const thumbnail = guideThumbnail(guide);
  return <Link href={`/ratgeber/${guide.slug}`} className="insight-card">
    <div className="insight-media"><Image {...thumbnail} alt={thumbnail.alt} sizes="(max-width: 760px) 90vw, 400px" /></div>
    <div className="insight-body"><div className="insight-meta"><span className="insight-chip">{categories[guide.category].name}</span><span>{guide.readingMinutes} Min. Lesezeit</span></div><h3>{guide.title}</h3></div>
    <span className="insight-foot">Artikel lesen</span>
    <span className="insight-corner" aria-hidden="true"><span><ArrowRight size={18} strokeWidth={1.75} /></span></span>
  </Link>;
}

/** Splits a long section body into short paragraphs of two to three sentences. */
export function toParagraphs(body: string) {
  const sentences = body.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((s) => s.trim()) ?? [body];
  const out: string[] = [];
  for (let i = 0; i < sentences.length; i += 3) out.push(sentences.slice(i, i + 3).join(" "));
  if (out.length > 1 && out[out.length - 1].length < 90) out[out.length - 2] += ` ${out.pop()}`;
  return out;
}
