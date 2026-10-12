import type { Metadata } from "next";
import { CompareWorkspace } from "@/components/compare-workspace";
import { loadCatalog } from "@/lib/load-catalog";
import { products } from "@/lib/catalog";

type Props = { searchParams: Promise<{ produkte?: string }> };
const slugsFrom = (value?: string) => (value ?? "").split(",").filter(Boolean);

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const names = slugsFrom((await searchParams).produkte).map((s) => products.find((p) => p.slug === s)?.name).filter(Boolean).slice(0, 4);
  if (names.length < 2) return { title: "Software vergleichen | Softwarebrief", description: "Vergleichen Sie Funktionen, Preisbedingungen und Einsatzbereiche von Geschäftssoftware direkt nebeneinander." };
  const title = names.join(" vs. ");
  return {
    title: `${title}: Preise, Funktionen und Grenzen im Vergleich | Softwarebrief`,
    description: `${title} im direkten Vergleich: Tarife, belegte Funktionen, externe Bewertungen und Einführungsaufwand – mit Herstellerquelle zu jeder Angabe.`,
  };
}

export default async function ComparePage({ searchParams }: Props) {
  const params = await searchParams;
  return <CompareWorkspace initial={slugsFrom(params.produkte)} products={await loadCatalog()} />;
}
