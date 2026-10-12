"use client";
import { useState } from "react";
import { GuideCard } from "@/components/guide-card";
import type { GuideMeta } from "@/data/guides";
import { categories, categorySlugs, type CategorySlug } from "@/lib/catalog";

export function GuideLibrary({ guides }: { guides: GuideMeta[] }) {
  const [filter, setFilter] = useState<CategorySlug | "alle">("alle");
  const shown = guides.filter((g) => filter === "alle" || g.category === filter);
  return <>
    <div className="kl-pills" role="tablist" aria-label="Ratgeber nach Kategorie filtern">
      {(["alle", ...categorySlugs] as const).map((slug) => (
        <button key={slug} type="button" role="tab" aria-selected={filter === slug} onClick={() => setFilter(slug)}>
          {slug === "alle" ? "Alle" : categories[slug].name}<span>{slug === "alle" ? guides.length : guides.filter((g) => g.category === slug).length}</span>
        </button>
      ))}
    </div>
    <div className="bl-grid">{shown.map((g) => <GuideCard key={g.slug} guide={g} />)}</div>
  </>;
}
