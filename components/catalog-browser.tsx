"use client";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ProductLogo } from "@/components/product-logo";
import { VendorLink } from "@/components/vendor-link";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { type Product, compactPrice, displayText, type CategorySlug } from "@/lib/catalog";
import { featureOptions, verifiedFeatureTags } from "@/lib/feature-filters";
import { CtaContent, ctaClass } from "@/components/cta";

export function CatalogBrowser({ items, categorySlug }: { items: Product[]; categorySlug: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("suche") ?? "");
  const [priceFilter, setPriceFilter] = useState<"all"|"public"|"quote">("all");
  const [sort, setSort] = useState("name");
  const [selected, setSelected] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const options = featureOptions[categorySlug as CategorySlug] ?? [];
  const shown = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("de");
    const filtered = items.filter((p) => {
      const searchMatch = !q || `${p.name} ${p.fit} ${p.features} ${p.review}`.toLocaleLowerCase("de").includes(q);
      const price = compactPrice(p);
      const priceMatch = priceFilter === "all" || (priceFilter === "quote" ? price === "Preis auf Anfrage" : price !== "Preis auf Anfrage");
      return searchMatch && priceMatch && features.every((feature) => (verifiedFeatureTags[p.slug] ?? []).includes(feature));
    });
    return filtered.sort((a,b) => sort === "name" ? a.name.localeCompare(b.name,"de") : sort === "reverse" ? b.name.localeCompare(a.name,"de") : (compactPrice(a)==="Preis auf Anfrage"?0:1)-(compactPrice(b)==="Preis auf Anfrage"?0:1) || a.name.localeCompare(b.name,"de"));
  }, [items,query,priceFilter,sort,features]);
  function toggle(slug:string) { setSelected((current)=>current.includes(slug)?current.filter((s)=>s!==slug):current.length<4?[...current,slug]:current); }
  function openCompare(){router.push(`/vergleich?produkte=${selected.join(",")}`)}
  function reset(){setQuery("");setPriceFilter("all");setSort("name");setFeatures([]);router.replace(`/software/${categorySlug}`)}
  return <div className="catalog-layout"><aside className="filter-panel"><div className="filter-title"><SlidersHorizontal size={18}/><strong>Auswahl eingrenzen</strong></div><label className="field-label" htmlFor="catalog-search">Software suchen</label><div className="field-with-icon"><Search size={17}/><Input id="catalog-search" value={query} onChange={(e)=>{setQuery(e.target.value);const url=new URL(window.location.href);e.target.value?url.searchParams.set("suche",e.target.value):url.searchParams.delete("suche");window.history.replaceState(null,"",url)}} placeholder="Name oder Funktion" className="catalog-input"/></div><div className="filter-group"><strong>Preisangabe</strong><label className="filter-option"><Checkbox checked={priceFilter==="all"} onCheckedChange={()=>setPriceFilter("all")}/> Alle Produkte</label><label className="filter-option"><Checkbox checked={priceFilter==="public"} onCheckedChange={()=>setPriceFilter("public")}/> Öffentlich genannter Preis</label><label className="filter-option"><Checkbox checked={priceFilter==="quote"} onCheckedChange={()=>setPriceFilter("quote")}/> Preis auf Anfrage</label></div><div className="filter-group"><strong>Funktionen</strong>{options.map((option)=><label className="filter-option" key={option.key}><Checkbox checked={features.includes(option.key)} onCheckedChange={()=>setFeatures((current)=>current.includes(option.key)?current.filter((key)=>key!==option.key):[...current,option.key])}/> {option.label}</label>)}<small>Funktionen können vom Tarif abhängen.</small></div><button className="reset-link" onClick={reset}>Filter zurücksetzen</button><div className="filter-explainer">Preise unterscheiden sich nach Tarif, Nutzern und Abrechnung. Die Bedingungen stehen im Produktprofil.</div></aside><div className="catalog-main"><div className="catalog-toolbar"><span><strong>{shown.length}</strong> von {items.length} Produkten</span><Select value={sort} onValueChange={(v)=>setSort(v??"name")}><SelectTrigger aria-label="Produkte sortieren" className="sort-trigger"><SelectValue placeholder="Sortieren"/></SelectTrigger><SelectContent><SelectItem value="name">Name A bis Z</SelectItem><SelectItem value="reverse">Name Z bis A</SelectItem><SelectItem value="quote">Preis auf Anfrage zuerst</SelectItem></SelectContent></Select></div><div className="catalog-cards">{shown.map((p)=><article className="catalog-card" key={p.slug}><div className="catalog-card-top"><ProductLogo product={p}/><div className="catalog-card-title"><span className="eyebrow">{p.category.toUpperCase()}</span><h2><Link href={`/software/${p.categorySlug}/${p.slug}`}>{p.name}</Link></h2><p>{displayText(p.fit)}</p></div><div className="catalog-card-price"><small>Preisangabe</small><strong>{compactPrice(p)}</strong><span>Details und Bedingungen im Profil</span></div></div><p className="catalog-card-summary">{displayText(p.review)}</p><div className="catalog-card-bottom"><label className="compare-check"><Checkbox checked={selected.includes(p.slug)} onCheckedChange={()=>toggle(p.slug)} disabled={!selected.includes(p.slug)&&selected.length>=4}/> Vergleichen</label><Link href={`/software/${p.categorySlug}/${p.slug}`}>Profil ansehen <ArrowUpRight size={16}/></Link><VendorLink product={p} placement={`kategorie-${p.slug}`} cta={{ variant: "dark", size: "sm" }}/></div></article>)}{!shown.length&&<div className="no-results"><h2>Keine passenden Produkte gefunden.</h2><p>Entfernen Sie einen Filter oder suchen Sie nach einem anderen Begriff.</p><Button onClick={reset}>Filter zurücksetzen</Button></div>}</div></div>{selected.length>0&&<div className="compare-bar"><div><strong>{selected.length} von 4 Produkten gewählt</strong><span>{selected.map((slug)=>items.find((p)=>p.slug===slug)?.name).join(", ")}</span></div><button className="clear-compare" onClick={()=>setSelected([])} aria-label="Vergleichsauswahl löschen"><X size={18}/></button><button type="button" className={ctaClass({ variant: "brand", size: "sm" })} onClick={openCompare} disabled={selected.length<2}><CtaContent>Jetzt vergleichen</CtaContent></button></div>}</div>;
}
