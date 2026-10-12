import Link from "next/link";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { ProductLogo } from "@/components/product-logo";
import { categories, compactPrice, type Product } from "@/lib/catalog";
import { featureCoverage, plansFor, shortName, type ComparisonPair } from "@/lib/compare";
import { editorial } from "@/data/editorial";

/* Presentational building blocks shared by the interactive comparison
   (/vergleich) and the editorial head-to-head pages (/vergleich/[pair]).
   No hooks, so they render on the server and inside client components. */

export function YesNo({ yes, yesLabel = "Ja", no }: { yes: boolean; yesLabel?: string; no: string }) {
  return yes
    ? <span className="kl-yes"><Check size={17} strokeWidth={2.5} aria-hidden="true" />{yesLabel}</span>
    : <span className="kl-no"><Minus size={17} strokeWidth={2} aria-hidden="true" />{no}</span>;
}

export function Coverage({ p }: { p: Product }) {
  const { covered, total } = featureCoverage(p);
  return <span className="kl-coverage"><strong>{covered} von {total}</strong><span className="kl-meter" aria-hidden="true"><i style={{ width: `${total ? (covered / total) * 100 : 0}%` }} /></span></span>;
}

export function PlanLadder({ slug }: { slug: string }) {
  return <ol className="kl-ladder">{plansFor(slug).map((plan) => (
    <li key={plan.name} className={plan.featured ? "is-featured" : undefined}>
      <span className="kl-ladder-name">{plan.name}{plan.featured && <em>Häufig passend</em>}</span>
      <strong>{plan.price}</strong>
      <small>{plan.unit}</small>
    </li>
  ))}</ol>;
}

export function ProsCons({ slug, kind }: { slug: string; kind: "pro" | "con" }) {
  const items = kind === "pro" ? editorial[slug]?.strengths : editorial[slug]?.limitations;
  const Icon = kind === "pro" ? Plus : Minus;
  return <ul className={`kl-proscons is-${kind}`}>{items?.map((s) => <li key={s}><Icon size={16} strokeWidth={2.5} aria-hidden="true" />{s}</li>)}</ul>;
}

export function PairCard({ pair, products }: { pair: ComparisonPair; products: Map<string, Product> }) {
  const a = products.get(pair.a);
  const b = products.get(pair.b);
  if (!a || !b) return null;
  return <Link href={`/vergleich/${pair.slug}`} className="kl-pair">
    <span className="kl-pair-logos"><ProductLogo product={a} /><em>vs</em><ProductLogo product={b} /></span>
    <span className="kl-pair-title">{shortName(a)} <span>vs.</span> {shortName(b)}</span>
    <span className="kl-pair-prices">{[a, b].map((p) => <span key={p.slug}><b>{shortName(p)}</b>{compactPrice(p)}</span>)}</span>
    <span className="kl-pair-foot"><span>{categories[pair.category].name}</span><ArrowRight size={16} aria-hidden="true" /></span>
  </Link>;
}
