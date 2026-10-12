"use client";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight, Minus, Plus, Printer, Search, Share2, X } from "lucide-react";
import { ProductLogo } from "@/components/product-logo";
import { VendorLink } from "@/components/vendor-link";
import { Coverage, PairCard, PlanLadder, ProsCons, YesNo } from "@/components/compare-parts";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { categories, categorySlugs, compactPrice, displayText, type CategorySlug, type Product } from "@/lib/catalog";
import { featureOptions } from "@/lib/feature-filters";
import {
  comparisonPairs, differs, euro, shortName, featureCoverage, hasFeature, pairFor, paidEntry, plansFor, priceModel, priceModelLabel, verdicts, yearlyEstimate,
} from "@/lib/compare";
import { editorial } from "@/data/editorial";
import { reviewExtras } from "@/data/review-extras";
import { pricingPlans } from "@/data/pricing-plans";

const MAX = 4;

type Row = {
  key: string;
  label: string;
  hint?: ReactNode;
  /** Values used to detect differences; rows without it are free text and always shown. */
  diff?: (p: Product) => string | number | boolean;
  render: (p: Product) => ReactNode;
};
type Section = { id: string; title: string; intro: string; rows: Row[] };

export function CompareWorkspace({ initial, products }: { initial: string[]; products: Product[] }) {
  const [selected, setSelected] = useState<string[]>(() => initial.filter((s) => products.some((p) => p.slug === s)).slice(0, MAX));
  const [seats, setSeats] = useState(3);
  const [highlight, setHighlight] = useState(true);
  const [onlyDiffs, setOnlyDiffs] = useState(false);
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState("ueberblick");
  const [overflowing, setOverflowing] = useState(false);
  const [libraryFilter, setLibraryFilter] = useState<CategorySlug | "alle">("alle");

  const scrollerRef = useRef<HTMLDivElement>(null);
  const barTrackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const bySlug = useMemo(() => new Map(products.map((p) => [p.slug, p])), [products]);
  const chosen = selected.map((s) => bySlug.get(s)).filter((p): p is Product => !!p);
  const activeCategory = chosen[0]?.categorySlug as CategorySlug | undefined;
  const category = activeCategory ? categories[activeCategory] : undefined;

  function update(next: string[]) {
    setSelected(next);
    // Slugs are URL-safe; keep literal commas so shared links stay readable.
    const url = new URL(window.location.href);
    url.search = next.length ? `?produkte=${next.join(",")}` : "";
    window.history.replaceState(null, "", url);
  }
  const add = (slug: string) => { if (!selected.includes(slug) && selected.length < MAX) update([...selected, slug]); };
  const remove = (slug: string) => update(selected.filter((s) => s !== slug));
  const toggleCollapsed = (id: string) => setCollapsed((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  const selectionKey = selected.join(",");
  useEffect(() => {
    const names = selectionKey.split(",").map((s) => bySlug.get(s)?.name).filter(Boolean);
    document.title = names.length >= 2 ? `${names.join(" vs. ")}: Vergleich | Softwarebrief` : "Software vergleichen | Softwarebrief";
  }, [selectionKey, bySlug]);

  // Compact product bar appears once the full product cards leave the viewport.
  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, [chosen.length]);

  // Mirror horizontal scroll between the comparison and the compact bar.
  useEffect(() => {
    const body = scrollerRef.current;
    const bar = barTrackRef.current;
    if (!body) return;
    const measure = () => setOverflowing(body.scrollWidth > body.clientWidth + 2);
    const onBody = () => { if (bar) bar.scrollLeft = body.scrollLeft; };
    const onBar = () => { if (bar) body.scrollLeft = bar.scrollLeft; };
    measure();
    body.addEventListener("scroll", onBody, { passive: true });
    bar?.addEventListener("scroll", onBar, { passive: true });
    window.addEventListener("resize", measure);
    return () => { body.removeEventListener("scroll", onBody); bar?.removeEventListener("scroll", onBar); window.removeEventListener("resize", measure); };
  }, [chosen.length]);

  // Scroll spy for the section navigation.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-kl-section]"));
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-30% 0px -60% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chosen.length]);

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share && window.matchMedia("(pointer: coarse)").matches) await navigator.share({ title: document.title, url });
      else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2200); }
    } catch { /* user dismissed the share sheet */ }
  }

  const sections: Section[] = [
    {
      id: "ueberblick", title: "Überblick", intro: "Für wen das Produkt gedacht ist und wie wir es einordnen.",
      rows: [
        { key: "fit", label: "Geeignet für", render: (p) => <p>{displayText(p.fit)}</p> },
        { key: "review", label: "Unsere Einordnung", render: (p) => <p className="kl-clamp">{displayText(p.review)}</p> },
      ],
    },
    {
      id: "eckdaten", title: "Eckdaten", intro: "Vergleichbare Fakten. Unterschiede sind markiert.",
      rows: [
        { key: "model", label: "Preismodell", diff: (p) => priceModel(p.slug), render: (p) => <strong className="kl-fact">{priceModelLabel(priceModel(p.slug))}</strong> },
        { key: "public", label: "Öffentlicher Europreis", diff: (p) => !!paidEntry(p.slug), render: (p) => <YesNo yes={!!paidEntry(p.slug)} no="Nur auf Anfrage" /> },
        { key: "free", label: "Kostenloser Einstieg", diff: (p) => priceModel(p.slug) === "free", render: (p) => <YesNo yes={priceModel(p.slug) === "free"} no="Nicht belegt" /> },
        { key: "tiers", label: "Tarifstufen", diff: (p) => plansFor(p.slug).length, render: (p) => <strong className="kl-fact">{plansFor(p.slug).length}</strong> },
        { key: "cov", label: "Belegte Kernfunktionen", diff: (p) => featureCoverage(p).covered, render: (p) => <Coverage p={p} /> },
      ],
    },
    {
      id: "preise", title: "Preise und Tarife", intro: "Einstieg, Tarifleiter und ein Jahresrichtwert für Ihre Teamgröße.",
      rows: [
        { key: "entry", label: "Einstieg", diff: (p) => compactPrice(p), render: (p) => <strong className="kl-price">{compactPrice(p)}</strong> },
        {
          key: "year", label: "Richtwert für 12 Monate", diff: (p) => yearlyEstimate(p.slug, seats)?.yearly ?? "quote",
          hint: <SeatControl seats={seats} setSeats={setSeats} />,
          render: (p) => {
            const est = yearlyEstimate(p.slug, seats);
            if (!est) return <span className="kl-muted">Angebot anfordern</span>;
            return <><strong className="kl-price">{euro(est.yearly, 0)}</strong><small className="kl-note">Tarif {est.plan.name} · {est.plan.price} {est.plan.unit}{est.plan.model === "seat" ? ` × ${seats}` : ""}</small></>;
          },
        },
        { key: "ladder", label: "Tarifleiter", render: (p) => <PlanLadder slug={p.slug} /> },
        { key: "basis", label: "Preisbasis", render: (p) => <><p>{pricingPlans[p.slug]?.basis}</p><small className="kl-note">Geprüft am {pricingPlans[p.slug]?.checked}</small></> },
      ],
    },
    {
      id: "funktionen", title: "Funktionen", intro: category ? `Kernfunktionen für ${category.name}. Ein Haken heißt: in Herstellerquellen belegt.` : "Kernfunktionen der Kategorie.",
      rows: [
        ...(activeCategory ? featureOptions[activeCategory] : []).map((o): Row => ({
          key: `f-${o.key}`, label: o.label, diff: (p) => hasFeature(p.slug, o.key),
          render: (p) => <YesNo yes={hasFeature(p.slug, o.key)} yesLabel="Belegt" no="Nicht belegt" />,
        })),
        { key: "scope", label: "Umfang laut Hersteller", render: (p) => <p>{displayText(p.features)}</p> },
      ],
    },
    {
      id: "staerken", title: "Stärken und Grenzen", intro: "Redaktionelle Einschätzung auf Basis der Herstellerquellen.",
      rows: [
        { key: "pro", label: "Stärken", render: (p) => <ProsCons slug={p.slug} kind="pro" /> },
        { key: "con", label: "Grenzen und Zusatzkosten", render: (p) => <ProsCons slug={p.slug} kind="con" /> },
      ],
    },
    {
      id: "einfuehrung", title: "Einführung", intro: "Was Sie in der Demo prüfen und vor Vertragsabschluss klären sollten.",
      rows: [
        { key: "flow", label: "Typischer Ablauf", render: (p) => <p>{reviewExtras[p.slug]?.workflow}</p> },
        { key: "demo", label: "In der Demo testen", render: (p) => <p>{reviewExtras[p.slug]?.implementation}</p> },
        { key: "ask", label: "Frage an den Anbieter", render: (p) => <p className="kl-quote">{reviewExtras[p.slug]?.buyingQuestion}</p> },
        { key: "check", label: "Praxis-Check", render: (p) => <p>{editorial[p.slug]?.practicalCheck}</p> },
      ],
    },
    {
      id: "quellen", title: "Quellen", intro: "Jede Angabe lässt sich an der Herstellerquelle nachprüfen.",
      rows: [
        { key: "src", label: "Herstellerquellen", render: (p) => <ul className="kl-sources">{p.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="kl-link">{s.label}<ArrowUpRight size={14} /></a></li>)}</ul> },
        { key: "next", label: "Nächster Schritt", render: (p) => <div className="kl-cell-actions"><VendorLink product={p} className="kl-btn kl-btn--dark kl-btn--sm kl-btn--block" /><Link href={`/software/${p.categorySlug}/${p.slug}`} className="kl-link">Profil lesen<ChevronRight size={15} /></Link></div> },
      ],
    },
  ];

  const cols = { "--cols": Math.max(chosen.length, 1) } as React.CSSProperties;
  const board = chosen.length ? verdicts(chosen, seats) : [];
  const winnerKeys = (p: Product) => board.filter((v) => v.winner?.slug === p.slug);
  const checked = [...new Set(chosen.map((p) => pricingPlans[p.slug]?.checked).filter(Boolean))].sort();
  const sourceCount = chosen.reduce((n, p) => n + p.sources.length, 0);
  const alternatives = activeCategory ? products.filter((p) => p.categorySlug === activeCategory && !selected.includes(p.slug)) : [];
  const diffCount = sections.flatMap((s) => s.rows).filter((r) => r.diff && differs(chosen.map(r.diff))).length;
  const detailPair = chosen.length === 2 ? pairFor(chosen[0].slug, chosen[1].slug) : undefined;

  const picker = <ProductPicker open={pickerOpen} onOpenChange={setPickerOpen} products={products} selected={selected} lockedCategory={activeCategory} onToggle={(slug) => (selected.includes(slug) ? remove(slug) : add(slug))} />;

  /* ─── Hub (nothing selected) ─── */
  if (!chosen.length) {
    const sagePairs = comparisonPairs.filter((p) => p.sage);
    const library = comparisonPairs.filter((p) => libraryFilter === "alle" || p.category === libraryFilter);
    return <main className="kl">
      <section className="kl-wrap kl-hero">
        <Crumbs />
        <span className="section-chip">Software-Vergleiche</span>
        <h1>Software vergleichen.<br /><span>Klar und nachvollziehbar.</span></h1>
        <p className="kl-lead">{comparisonPairs.length} ausführliche Detailvergleiche und ein Werkzeug für bis zu vier Programme nebeneinander. Mit Preisen, belegten Funktionen und einer Quelle zu jeder Angabe.</p>
        <div className="kl-actions">
          <button type="button" className="kl-btn kl-btn--brand" onClick={() => setPickerOpen(true)}><Plus size={17} />Eigenen Vergleich erstellen</button>
          <Link href="/empfehlung" className="kl-btn kl-btn--ghost">Empfehlung erhalten<ArrowRight size={17} /></Link>
        </div>
        <dl className="kl-stats">
          <div><dt>Detailvergleiche</dt><dd>{comparisonPairs.length}</dd></div>
          <div><dt>Programme</dt><dd>{products.length}</dd></div>
          <div><dt>Kategorien</dt><dd>{categorySlugs.length}</dd></div>
        </dl>
      </section>

      <section className="kl-wrap kl-block">
        <header className="kl-head"><span className="section-chip">Sage</span><h2>Sage-Programme im Vergleich</h2><p>Sage Active, Sage 100, Sage HR, Sage Payroll und weitere Lösungen gegen die bekanntesten Alternativen.</p></header>
        <div className="kl-pair-grid">{sagePairs.map((p) => <PairCard key={p.slug} pair={p} products={bySlug} />)}</div>
      </section>

      <section className="kl-wrap kl-block">
        <header className="kl-head"><span className="section-chip">Bibliothek</span><h2>Alle Detailvergleiche</h2><p>Jeweils zwei Programme aus derselben Kategorie, ausführlich gegenübergestellt.</p></header>
        <div className="kl-pills" role="tablist" aria-label="Nach Kategorie filtern">
          {(["alle", ...categorySlugs] as const).map((slug) => (
            <button key={slug} type="button" role="tab" aria-selected={libraryFilter === slug} onClick={() => setLibraryFilter(slug)}>
              {slug === "alle" ? "Alle" : categories[slug].name}<span>{slug === "alle" ? comparisonPairs.length : comparisonPairs.filter((p) => p.category === slug).length}</span>
            </button>
          ))}
        </div>
        <div className="kl-pair-grid">{library.map((p) => <PairCard key={p.slug} pair={p} products={bySlug} />)}</div>
      </section>

      <section className="kl-wrap kl-block">
        <header className="kl-head"><span className="section-chip">Selbst zusammenstellen</span><h2>Mit einem Produkt beginnen</h2><p>Wählen Sie ein erstes Programm. Weitere Produkte derselben Kategorie ergänzen Sie danach.</p></header>
        <div className="kl-starter">
          {categorySlugs.map((slug) => (
            <div key={slug} className="kl-starter-row">
              <div><strong>{categories[slug].name}</strong><span>{categories[slug].question}</span></div>
              <div className="kl-chips">{products.filter((p) => p.categorySlug === slug).map((p) => (
                <button key={p.slug} type="button" onClick={() => update([p.slug])}><ProductLogo product={p} />{p.name}</button>
              ))}</div>
            </div>
          ))}
        </div>
      </section>
      {picker}
    </main>;
  }

  /* ─── Comparison ─── */
  return <main className="kl">
    <section className="kl-wrap kl-hero kl-hero--tight">
      <Crumbs category={activeCategory} />
      <span className="section-chip">Direktvergleich · {category?.name}</span>
      <h1 translate="no">{chosen.length >= 2 ? chosen.map((p, i) => <span key={p.slug} className="kl-h1-name">{i > 0 && <em> vs. </em>}{shortName(p)}</span>) : [<span key="eins" className="kl-h1-name">{shortName(chosen[0])}</span>, <em key="vs" className="kl-vs-muted"> vs. …</em>]}</h1>
      <p className="kl-lead">Tarife, belegte Funktionen, Grenzen und Einführung nebeneinander. Alle Angaben stammen aus öffentlich zugänglichen Herstellerquellen.</p>
      <p className="kl-meta"><span>{sourceCount} Herstellerquellen</span><span>Preise geprüft am {new Intl.ListFormat("de", { type: "conjunction" }).format(checked)}</span><span>Vergütete Links gekennzeichnet</span></p>
      <div className="kl-actions">
        <button type="button" onClick={share} className="kl-btn kl-btn--ghost kl-btn--sm">{copied ? <Check size={16} /> : <Share2 size={16} />}{copied ? "Link kopiert" : "Teilen"}</button>
        <button type="button" onClick={() => window.print()} className="kl-btn kl-btn--ghost kl-btn--sm"><Printer size={16} />Drucken oder PDF</button>
      </div>
    </section>

    <section className="kl-wrap kl-toolbar" aria-label="Vergleich anpassen">
      <div className="kl-toolbar-products">
        {chosen.map((p) => <span key={p.slug} className="kl-token"><ProductLogo product={p} />{shortName(p)}<button type="button" onClick={() => remove(p.slug)} aria-label={`${p.name} entfernen`}><X size={14} /></button></span>)}
        <button type="button" className="kl-token kl-token--add" onClick={() => setPickerOpen(true)} disabled={chosen.length >= MAX}><Plus size={15} />{chosen.length >= MAX ? "Maximum erreicht" : "Produkt hinzufügen"}</button>
      </div>
      {chosen.length > 1 && <div className="kl-toolbar-view">
        <Toggle checked={highlight} onChange={setHighlight} label="Unterschiede markieren" />
        <Toggle checked={onlyDiffs} onChange={setOnlyDiffs} label="Nur Unterschiede" />
        <span className="kl-toolbar-count">{diffCount} Unterschiede</span>
      </div>}
    </section>

    <section className="kl-wrap kl-verdicts" aria-label="Auf einen Blick">
      {board.map((v) => (
        <article key={v.key} className="kl-verdict">
          <p className="kl-kicker">{v.label}</p>
          {v.winner ? <div className="kl-verdict-winner"><ProductLogo product={v.winner} /><strong>{shortName(v.winner)}</strong></div> : <div className="kl-verdict-winner"><strong className="kl-muted-strong">{v.tie ? "Gleichstand" : "Keine Angabe"}</strong></div>}
          <p className="kl-verdict-value">{v.value}</p>
          <small>{v.basis}</small>
        </article>
      ))}
    </section>

    {detailPair && <div className="kl-wrap"><Link href={`/vergleich/${detailPair.slug}`} className="kl-banner"><span><strong>Ausführliche Analyse verfügbar</strong>Kurzfazit, Richtwerte für verschiedene Teamgrößen und häufige Fragen zu {chosen[0].name} und {chosen[1].name}.</span><ArrowRight size={20} /></Link></div>}

    {chosen.length === 1 && <div className="kl-wrap kl-nudge">
      <p><strong>Fügen Sie ein zweites Produkt hinzu.</strong> Passend aus {category?.name}:</p>
      <div className="kl-chips">{alternatives.slice(0, 5).map((p) => <button key={p.slug} type="button" onClick={() => add(p.slug)}><ProductLogo product={p} />{p.name}<Plus size={14} /></button>)}</div>
    </div>}

    <nav className="kl-wrap kl-jump" aria-label="Abschnitte">
      {sections.map((s) => <a key={s.id} href={`#${s.id}`} className={active === s.id ? "is-active" : undefined}>{s.title}</a>)}
    </nav>

    {/* Compact bar: zero-height sticky anchor so it takes no layout space. */}
    <div className="kl-sticky" aria-hidden={!stuck}>
      <div className={`kl-bar${stuck ? " is-visible" : ""}`}>
        <div className="kl-wrap">
          <div className="kl-bar-track" ref={barTrackRef} style={cols}>
            <div className="kl-bar-label">{chosen.length} Produkte</div>
            {chosen.map((p) => <div key={p.slug} className="kl-bar-item"><ProductLogo product={p} /><span><strong>{shortName(p)}</strong><small>{compactPrice(p)}</small></span></div>)}
          </div>
        </div>
      </div>
    </div>

    <section className="kl-wrap" id="kl-top">
      <div className="kl-board">
        {overflowing && <p className="kl-swipe">Seitlich wischen für alle Produkte</p>}
        <div className="kl-scroller" ref={scrollerRef} style={cols} role="table" aria-label={`Vergleich: ${chosen.map((p) => p.name).join(", ")}`} tabIndex={0}>
          <div className="kl-row kl-cards" ref={cardsRef} role="row">
            <div className="kl-label kl-cards-label" role="columnheader">
              <span className="kl-count">{chosen.length}<small> / {MAX}</small></span>
              <span className="kl-muted">Produkte im Vergleich</span>
              {highlight && chosen.length > 1 && <span className="kl-legend"><i />Unterschied</span>}
            </div>
            {chosen.map((p) => {
              const cov = featureCoverage(p);
              return <div key={p.slug} className="kl-card" role="columnheader">
                <button type="button" className="kl-card-remove" onClick={() => remove(p.slug)} aria-label={`${p.name} entfernen`}><X size={17} /></button>
                <ProductLogo product={p} />
                <h2>{p.name}</h2>
                <p className="kl-card-rating"><strong>{cov.covered} von {cov.total}</strong><span>Kernfunktionen belegt</span></p>
                <p className="kl-card-price"><small>Einstieg</small>{compactPrice(p)}</p>
                {winnerKeys(p).length > 0 && <ul className="kl-badges">{winnerKeys(p).map((v) => <li key={v.key}>{v.label}</li>)}</ul>}
                <div className="kl-card-actions"><VendorLink product={p} className="kl-btn kl-btn--dark kl-btn--sm kl-btn--block" /><Link href={`/software/${p.categorySlug}/${p.slug}`} className="kl-link">Profil lesen<ChevronRight size={15} /></Link></div>
              </div>;
            })}
          </div>

          {sections.map((section, index) => {
            const isCollapsed = collapsed.includes(section.id);
            const rows = section.rows.filter((r) => !(onlyDiffs && r.diff && chosen.length > 1 && !differs(chosen.map(r.diff))));
            return <div key={section.id} id={section.id} data-kl-section className="kl-section" role="rowgroup">
              <div className="kl-section-head" role="row">
                <button type="button" onClick={() => toggleCollapsed(section.id)} aria-expanded={!isCollapsed} role="columnheader">
                  <span className="kl-section-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="kl-section-title"><strong>{section.title}</strong><small>{section.intro}</small></span>
                  <ChevronDown size={20} className={`kl-chevron${isCollapsed ? " is-collapsed" : ""}`} />
                </button>
              </div>
              {!isCollapsed && (rows.length ? rows.map((row) => {
                const isDiff = highlight && chosen.length > 1 && !!row.diff && differs(chosen.map(row.diff));
                return <div key={row.key} role="row" className={`kl-row${isDiff ? " is-diff" : ""}`}>
                  <div className="kl-label" role="rowheader"><span className="kl-label-text">{isDiff && <i className="kl-dot" role="img" aria-label="Unterschied" />}{row.label}</span>{row.hint}</div>
                  {chosen.map((p) => <div key={p.slug} className="kl-cell" role="cell"><span className="kl-cell-name">{shortName(p)}</span>{row.render(p)}</div>)}
                </div>;
              }) : <p className="kl-section-empty">Keine Unterschiede in diesem Abschnitt.</p>)}
            </div>;
          })}
        </div>
      </div>
    </section>

    {alternatives.length > 0 && <section className="kl-wrap kl-block">
      <header className="kl-head"><h2>Weitere Produkte in {category?.name}</h2><p>Nicht das Richtige dabei? Ergänzen Sie den Vergleich direkt.</p></header>
      <div className="kl-alt-grid">{alternatives.map((p) => {
        return <article key={p.slug} className="kl-alt">
          <div className="kl-alt-head"><ProductLogo product={p} /><div><strong>{p.name}</strong><small>{compactPrice(p)}</small></div></div>
          <p>{displayText(p.fit)}</p>
          <div className="kl-alt-foot">
            <span className="kl-inline-rating"><strong>{featureCoverage(p).covered} von {featureCoverage(p).total}</strong><span className="kl-muted">belegt</span></span>
            <button type="button" className="kl-btn kl-btn--ghost kl-btn--xs" onClick={() => add(p.slug)} disabled={chosen.length >= MAX}><Plus size={15} />Hinzufügen</button>
          </div>
        </article>;
      })}</div>
    </section>}

    <section className="kl-wrap kl-block">
      <header className="kl-head"><span className="section-chip">Entscheidungshilfe</span><h2>So treffen Sie die Auswahl</h2><p>Ein Vergleich ersetzt keinen Test mit echten Vorgängen.</p></header>
      <ol className="kl-steps">
        <li><span>01</span><strong>Pflichtaufgaben festlegen</strong><p>Markieren Sie Ihre drei wichtigsten Arbeitsabläufe.</p></li>
        <li><span>02</span><strong>Passenden Tarif finden</strong><p>Prüfen Sie, welcher Tarif diese Abläufe vollständig abdeckt.</p></li>
        <li><span>03</span><strong>Jahreskosten bestätigen</strong><p>Mit allen Nutzern, Zusatzmodulen und Einführung.</p></li>
        <li><span>04</span><strong>Echten Vorgang testen</strong><p>Spielen Sie in der Demo einen Fall aus Ihrem Alltag durch.</p></li>
      </ol>
    </section>

    <section className="kl-wrap kl-block">
      <header className="kl-head"><h2>Detailvergleiche in {category?.name}</h2></header>
      <div className="kl-pair-grid">{comparisonPairs.filter((p) => p.category === activeCategory).map((p) => <PairCard key={p.slug} pair={p} products={bySlug} />)}</div>
    </section>

    <p className="kl-wrap kl-disclosure">Die Angaben stammen aus öffentlich zugänglichen Herstellerquellen und wurden redaktionell zusammengefasst; ein eigener Produkttest hat nicht stattgefunden. „Nicht belegt“ heißt, dass eine Funktion in den geprüften Quellen nicht bestätigt wurde – nicht, dass sie fehlt. Richtwerte berücksichtigen weder Zusatzmodule noch Nutzergrenzen. Vergütete Anbieterlinks werden direkt am Link markiert.</p>
    {picker}
  </main>;
}

/* ─── Small building blocks ─── */

function Crumbs({ category }: { category?: CategorySlug }) {
  return <nav className="kl-crumbs" aria-label="Brotkrumen">
    <Link href="/">Startseite</Link><ChevronRight size={13} /><Link href="/vergleich">Vergleiche</Link>
    {category && <><ChevronRight size={13} /><Link href={`/software/${category}`}>{categories[category].name}</Link></>}
  </nav>;
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return <button type="button" role="switch" aria-checked={checked} className="kl-toggle" onClick={() => onChange(!checked)}>
    <span className="kl-toggle-track"><span /></span>{label}
  </button>;
}

function SeatControl({ seats, setSeats }: { seats: number; setSeats: (n: number) => void }) {
  return <div className="kl-seats">
    <label htmlFor="kl-seats">Personen</label>
    <div>
      <button type="button" onClick={() => setSeats(Math.max(1, seats - 1))} aria-label="Weniger Personen"><Minus size={14} /></button>
      <input id="kl-seats" type="number" inputMode="numeric" min={1} max={250} value={seats} onChange={(e) => setSeats(Math.min(250, Math.max(1, Number(e.target.value) || 1)))} />
      <button type="button" onClick={() => setSeats(Math.min(250, seats + 1))} aria-label="Mehr Personen"><Plus size={14} /></button>
    </div>
  </div>;
}

function ProductPicker({ open, onOpenChange, products, selected, lockedCategory, onToggle }: {
  open: boolean; onOpenChange: (v: boolean) => void; products: Product[]; selected: string[]; lockedCategory?: CategorySlug; onToggle: (slug: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [chosenTab, setTab] = useState<CategorySlug | "alle">("alle");
  const tab = lockedCategory ?? chosenTab;
  const q = query.trim().toLocaleLowerCase("de");
  const list = products.filter((p) => (tab === "alle" || p.categorySlug === tab) && (!q || `${p.name} ${p.category} ${p.fit}`.toLocaleLowerCase("de").includes(q)));
  const full = selected.length >= MAX;
  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="kl-picker">
      <DialogHeader>
        <DialogTitle>Produkte hinzufügen</DialogTitle>
        <DialogDescription>{lockedCategory ? `Verglichen wird innerhalb von ${categories[lockedCategory].name}.` : "Bis zu vier Produkte aus derselben Kategorie."} {selected.length} von {MAX} ausgewählt.</DialogDescription>
      </DialogHeader>
      <div className="kl-picker-search"><Search size={17} /><Input autoFocus aria-label="Produkt suchen" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name oder Einsatzzweck suchen" /></div>
      {!lockedCategory && <div className="kl-pills kl-pills--left" role="tablist">
        {(["alle", ...categorySlugs] as const).map((slug) => <button key={slug} type="button" role="tab" aria-selected={tab === slug} onClick={() => setTab(slug)}>{slug === "alle" ? "Alle" : categories[slug].name}</button>)}
      </div>}
      <div className="kl-picker-list">
        {list.map((p) => {
          const isOn = selected.includes(p.slug);
          const blocked = !isOn && (full || (!!lockedCategory && p.categorySlug !== lockedCategory));
          return <button key={p.slug} type="button" className={`kl-picker-item${isOn ? " is-on" : ""}`} onClick={() => onToggle(p.slug)} disabled={blocked} aria-pressed={isOn}>
            <ProductLogo product={p} />
            <span><strong>{p.name}</strong><small>{p.category} · {compactPrice(p)}</small></span>
            {isOn ? <Check size={18} strokeWidth={2.5} className="kl-picker-mark is-on" /> : <Plus size={18} className="kl-picker-mark" />}
          </button>;
        })}
        {!list.length && <p className="kl-muted">Keine passenden Produkte gefunden.</p>}
      </div>
      <div className="kl-picker-foot">
        <span className="kl-muted">{full ? "Maximal vier Produkte gleichzeitig." : "Mehrere Produkte nacheinander auswählen."}</span>
        <button type="button" className="kl-btn kl-btn--dark kl-btn--sm" onClick={() => onOpenChange(false)}>Fertig</button>
      </div>
    </DialogContent>
  </Dialog>;
}
