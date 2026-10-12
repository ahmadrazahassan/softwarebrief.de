import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight, Plus } from "lucide-react";
import { ProductLogo } from "@/components/product-logo";
import { VendorLink } from "@/components/vendor-link";
import { Coverage, PairCard, PlanLadder, ProsCons, YesNo } from "@/components/compare-parts";
import { categories, compactPrice, displayText, products as staticProducts, type Product } from "@/lib/catalog";
import { fitTitle } from "@/lib/site";
import { loadCatalog } from "@/lib/load-catalog";
import { featureOptions } from "@/lib/feature-filters";
import {
  comparisonPairs, differs, euro, featureCoverage, findPair, hasFeature, paidEntry, plansFor, priceModel, priceModelLabel, relatedPairs, shortName, verdicts, yearlyEstimate,
} from "@/lib/compare";
import { pricingPlans } from "@/data/pricing-plans";
import { editorial } from "@/data/editorial";
import { reviewExtras } from "@/data/review-extras";

type Props = { params: Promise<{ pair: string }> };

export function generateStaticParams() { return comparisonPairs.map((p) => ({ pair: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pair = findPair((await params).pair);
  const a = staticProducts.find((p) => p.slug === pair?.a);
  const b = staticProducts.find((p) => p.slug === pair?.b);
  if (!pair || !a || !b) return {};
  return {
    title: fitTitle(`${shortName(a)} vs. ${shortName(b)}: Preise und Funktionen`),
    alternates: { canonical: `/vergleich/${pair.slug}` },
    description: `${a.name} oder ${b.name}? Tarife, Jahresrichtwerte, belegte Funktionen, Stärken, Grenzen und Einführung im direkten Vergleich, mit Herstellerquelle zu jeder Angabe.`,
  };
}

const SEAT_STEPS = [1, 5, 15];

export default async function PairPage({ params }: Props) {
  const pair = findPair((await params).pair);
  if (!pair) notFound();
  const catalog = await loadCatalog();
  const bySlug = new Map(catalog.map((p) => [p.slug, p]));
  const a = bySlug.get(pair.a);
  const b = bySlug.get(pair.b);
  if (!a || !b) notFound();
  const both = [a, b];
  const category = categories[pair.category];
  const board = verdicts(both, 5);
  const checked = [...new Set(both.map((p) => pricingPlans[p.slug]?.checked).filter(Boolean))].sort();
  const options = featureOptions[pair.category];
  const others = catalog.filter((p) => p.categorySlug === pair.category && p.slug !== a.slug && p.slug !== b.slug);
  const related = relatedPairs(pair);

  const facts: { label: string; diff: (p: Product) => string | number | boolean; render: (p: Product) => React.ReactNode }[] = [
    { label: "Einstieg", diff: (p) => compactPrice(p), render: (p) => <strong className="kl-fact">{compactPrice(p)}</strong> },
    { label: "Preismodell", diff: (p) => priceModel(p.slug), render: (p) => priceModelLabel(priceModel(p.slug)) },
    { label: "Öffentlicher Europreis", diff: (p) => !!paidEntry(p.slug), render: (p) => <YesNo yes={!!paidEntry(p.slug)} no="Nur auf Anfrage" /> },
    { label: "Kostenloser Einstieg", diff: (p) => priceModel(p.slug) === "free", render: (p) => <YesNo yes={priceModel(p.slug) === "free"} no="Nicht belegt" /> },
    { label: "Tarifstufen", diff: (p) => plansFor(p.slug).length, render: (p) => plansFor(p.slug).length },
    { label: "Belegte Kernfunktionen", diff: (p) => featureCoverage(p).covered, render: (p) => <Coverage p={p} /> },
  ];

  const est = (p: Product, n: number) => yearlyEstimate(p.slug, n);
  const covA = featureCoverage(a);
  const covB = featureCoverage(b);
  const faq = [
    {
      q: `Was kostet ${a.name} im Vergleich zu ${b.name}?`,
      a: `${a.name}: ${compactPrice(a)} (${pricingPlans[a.slug]?.basis ?? "Preisbasis beim Anbieter prüfen"}). ${b.name}: ${compactPrice(b)} (${pricingPlans[b.slug]?.basis ?? "Preisbasis beim Anbieter prüfen"}). ` +
        both.map((p) => { const e = est(p, 5); return e ? `Für fünf Personen ergibt der niedrigste bezahlte Tarif von ${p.name} einen Richtwert von ${euro(e.yearly, 0)} im Jahr.` : `${p.name} nennt keinen belastbaren Europreis; hier ist ein Angebot nötig.`; }).join(" ") + " Zusatzmodule und Nutzergrenzen sind nicht eingerechnet.",
    },
    {
      q: `Welches Programm bietet mehr Funktionen?`,
      a: `In den geprüften Herstellerquellen sind für ${a.name} ${covA.covered} von ${covA.total} und für ${b.name} ${covB.covered} von ${covB.total} der Kernfunktionen für ${category.name} belegt. Eine nicht belegte Funktion kann trotzdem vorhanden sein oder in einem höheren Tarif liegen. Lassen Sie sich Ihre Pflichtfunktionen im konkreten Tarif bestätigen.`,
    },
    { q: `Für wen eignet sich ${a.name}, für wen ${b.name}?`, a: `${a.name}: ${displayText(a.fit)} ${b.name}: ${displayText(b.fit)}` },
    { q: `Welche Grenzen sollte ich beachten?`, a: `${a.name}: ${editorial[a.slug]?.limitations[0] ?? ""} ${b.name}: ${editorial[b.slug]?.limitations[0] ?? ""}` },
    { q: `Welche Alternativen gibt es zu ${a.name} und ${b.name}?`, a: others.length ? `In der Kategorie ${category.name} führen wir außerdem ${new Intl.ListFormat("de", { type: "conjunction" }).format(others.map((p) => p.name))}. Sie können bis zu vier Produkte im interaktiven Vergleich gegenüberstellen.` : `Weitere Produkte finden Sie in der Kategorie ${category.name}.` },
  ];
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const toc = [["fazit", "Kurzfazit"], ["eckdaten", "Eckdaten"], ["preise", "Preise"], ["funktionen", "Funktionen"], ["staerken", "Stärken und Grenzen"], ["einfuehrung", "Einführung"], ["faq", "Häufige Fragen"]];

  return <main className="kl kl-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

    <section className="kl-wrap kl-hero">
      <nav className="kl-crumbs" aria-label="Brotkrumen"><Link href="/">Startseite</Link><ChevronRight size={13} /><Link href="/vergleich">Vergleiche</Link><ChevronRight size={13} /><span>{shortName(a)} vs. {shortName(b)}</span></nav>
      <div className="kl-duel" aria-hidden="true"><ProductLogo product={a} /><span>vs</span><ProductLogo product={b} /></div>
      <span className="section-chip">{category.name} · Detailvergleich</span>
      <h1>{shortName(a)} <em>vs.</em> {shortName(b)}</h1>
      <p className="kl-lead">Welches Programm passt besser zu Ihrem Betrieb? Wir stellen Tarife, Jahresrichtwerte, belegte Funktionen, Grenzen und Einführung gegenüber – mit Quelle zu jeder Angabe.</p>
      <p className="kl-meta"><span>Preise geprüft am {new Intl.ListFormat("de", { type: "conjunction" }).format(checked)}</span><span>Redaktionelle Einordnung, kein Produkttest</span></p>
      <div className="kl-actions">
        <Link href={`/vergleich?produkte=${a.slug},${b.slug}`} className="kl-btn kl-btn--brand">Interaktiv vergleichen<ArrowRight size={17} /></Link>
        <Link href={`/vergleich?produkte=${a.slug},${b.slug}`} className="kl-btn kl-btn--ghost"><Plus size={17} />Weiteres Produkt hinzufügen</Link>
      </div>
    </section>

    <nav className="kl-wrap kl-jump" aria-label="Inhalt">{toc.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>

    <section id="fazit" className="kl-wrap kl-block kl-anchor">
      <header className="kl-head"><span className="section-chip">Kurzfazit</span><h2>Das Wichtigste in Kürze</h2></header>
      <div className="kl-verdicts kl-verdicts--flush">
        {board.map((v) => (
          <article key={v.key} className="kl-verdict">
            <p className="kl-kicker">{v.label}</p>
            {v.winner ? <div className="kl-verdict-winner"><ProductLogo product={v.winner} /><strong>{shortName(v.winner)}</strong></div> : <div className="kl-verdict-winner"><strong className="kl-muted-strong">{v.tie ? "Gleichstand" : "Keine Angabe"}</strong></div>}
            <p className="kl-verdict-value">{v.value}</p>
            <small>{v.basis}</small>
          </article>
        ))}
      </div>
      <div className="kl-duo">
        {both.map((p) => (
          <article key={p.slug} className="kl-panel">
            <div className="kl-panel-head"><ProductLogo product={p} /><div><p className="kl-kicker">Passt, wenn Sie …</p><h3>{p.name}</h3></div></div>
            <p>{displayText(p.fit)}</p>
            <p className="kl-panel-strong">{editorial[p.slug]?.strengths[0]}</p>
            <div className="kl-panel-actions"><VendorLink product={p} className="kl-btn kl-btn--dark kl-btn--sm" /><Link href={`/software/${p.categorySlug}/${p.slug}`} className="kl-link">Profil lesen<ChevronRight size={15} /></Link></div>
          </article>
        ))}
      </div>
    </section>

    <section id="eckdaten" className="kl-wrap kl-block kl-anchor">
      <header className="kl-head"><span className="section-chip">Eckdaten</span><h2>Fakten nebeneinander</h2><p>Markierte Zeilen unterscheiden sich zwischen beiden Programmen.</p></header>
      <div className="kl-table" role="table" aria-label="Eckdaten">
        <div className="kl-table-row kl-table-head" role="row"><span role="columnheader" /><span role="columnheader"><ProductLogo product={a} />{shortName(a)}</span><span role="columnheader"><ProductLogo product={b} />{shortName(b)}</span></div>
        {facts.map((f) => {
          const isDiff = differs(both.map(f.diff));
          return <div key={f.label} className={`kl-table-row${isDiff ? " is-diff" : ""}`} role="row">
            <span role="rowheader">{isDiff && <i className="kl-dot" role="img" aria-label="Unterschied" />}{f.label}</span>
            {both.map((p) => <span key={p.slug} role="cell"><small className="kl-cell-name">{p.name}</small>{f.render(p)}</span>)}
          </div>;
        })}
      </div>
    </section>

    <section id="preise" className="kl-wrap kl-block kl-anchor">
      <header className="kl-head"><span className="section-chip">Preise</span><h2>Tarife und Jahresrichtwerte</h2><p>Richtwerte auf Basis des niedrigsten bezahlten Tarifs, ohne Zusatzmodule und Einführung.</p></header>
      <div className="kl-table kl-table--seats" role="table" aria-label="Jahresrichtwerte">
        <div className="kl-table-row kl-table-head" role="row"><span role="columnheader">Teamgröße</span><span role="columnheader"><ProductLogo product={a} />{shortName(a)}</span><span role="columnheader"><ProductLogo product={b} />{shortName(b)}</span></div>
        {SEAT_STEPS.map((n) => (
          <div key={n} className="kl-table-row" role="row">
            <span role="rowheader">{n} {n === 1 ? "Person" : "Personen"}</span>
            {both.map((p) => { const e = est(p, n); return <span key={p.slug} role="cell"><small className="kl-cell-name">{p.name}</small>{e ? <><strong className="kl-price">{euro(e.yearly, 0)}</strong><small className="kl-note">pro Jahr · Tarif {e.plan.name}</small></> : <span className="kl-muted">Angebot anfordern</span>}</span>; })}
          </div>
        ))}
      </div>
      <div className="kl-duo">
        {both.map((p) => (
          <article key={p.slug} className="kl-panel">
            <div className="kl-panel-head"><ProductLogo product={p} /><div><p className="kl-kicker">Tarifleiter</p><h3>{p.name}</h3></div></div>
            <PlanLadder slug={p.slug} />
            <p className="kl-note">{pricingPlans[p.slug]?.basis} Geprüft am {pricingPlans[p.slug]?.checked}.</p>
            <details className="kl-details"><summary>Vollständige Tarifbedingungen<ChevronDown size={16} /></summary><p>{displayText(p.pricing)}</p></details>
          </article>
        ))}
      </div>
    </section>

    <section id="funktionen" className="kl-wrap kl-block kl-anchor">
      <header className="kl-head"><span className="section-chip">Funktionen</span><h2>Belegte Kernfunktionen</h2><p>Ein Haken heißt: in den Herstellerquellen bestätigt. „Nicht belegt“ heißt nicht, dass die Funktion fehlt.</p></header>
      <div className="kl-table" role="table" aria-label="Funktionen">
        <div className="kl-table-row kl-table-head" role="row"><span role="columnheader" /><span role="columnheader"><ProductLogo product={a} />{shortName(a)}</span><span role="columnheader"><ProductLogo product={b} />{shortName(b)}</span></div>
        {options.map((o) => {
          const isDiff = differs(both.map((p) => hasFeature(p.slug, o.key)));
          return <div key={o.key} className={`kl-table-row${isDiff ? " is-diff" : ""}`} role="row">
            <span role="rowheader">{isDiff && <i className="kl-dot" role="img" aria-label="Unterschied" />}{o.label}</span>
            {both.map((p) => <span key={p.slug} role="cell"><small className="kl-cell-name">{p.name}</small><YesNo yes={hasFeature(p.slug, o.key)} yesLabel="Belegt" no="Nicht belegt" /></span>)}
          </div>;
        })}
      </div>
      <div className="kl-duo">
        {both.map((p) => <article key={p.slug} className="kl-panel"><p className="kl-kicker">Umfang laut Hersteller</p><h3>{p.name}</h3><p>{displayText(p.features)}</p></article>)}
      </div>
    </section>

    <section id="staerken" className="kl-wrap kl-block kl-anchor">
      <header className="kl-head"><span className="section-chip">Einordnung</span><h2>Stärken und Grenzen</h2><p>Redaktionelle Einschätzung auf Basis der Herstellerquellen, kein eigener Produkttest.</p></header>
      <div className="kl-duo">
        {both.map((p) => (
          <article key={p.slug} className="kl-panel">
            <div className="kl-panel-head"><ProductLogo product={p} /><h3>{p.name}</h3></div>
            <p className="kl-kicker">Stärken</p><ProsCons slug={p.slug} kind="pro" />
            <p className="kl-kicker kl-kicker--spaced">Grenzen und Zusatzkosten</p><ProsCons slug={p.slug} kind="con" />
          </article>
        ))}
      </div>
    </section>

    <section id="einfuehrung" className="kl-wrap kl-block kl-anchor">
      <header className="kl-head"><span className="section-chip">Einführung</span><h2>So prüfen Sie beide Programme</h2><p>Nehmen Sie diese Punkte in Ihre Demo und das Angebotsgespräch mit.</p></header>
      <div className="kl-duo">
        {both.map((p) => (
          <article key={p.slug} className="kl-panel">
            <div className="kl-panel-head"><ProductLogo product={p} /><h3>{p.name}</h3></div>
            <dl className="kl-deflist">
              <div><dt>Typischer Ablauf</dt><dd>{reviewExtras[p.slug]?.workflow}</dd></div>
              <div><dt>In der Demo testen</dt><dd>{reviewExtras[p.slug]?.implementation}</dd></div>
              <div><dt>Frage an den Anbieter</dt><dd className="kl-quote">{reviewExtras[p.slug]?.buyingQuestion}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </section>

    <section id="faq" className="kl-wrap kl-block kl-anchor kl-narrow">
      <header className="kl-head"><span className="section-chip">FAQ</span><h2>Häufige Fragen</h2></header>
      <div className="kl-faq">{faq.map((f, i) => <details key={f.q} open={i === 0}><summary>{f.q}<ChevronDown size={18} /></summary><p>{f.a}</p></details>)}</div>
    </section>

    <section className="kl-wrap kl-block kl-narrow">
      <div className="kl-cta">
        <h2>Noch nicht entschieden?</h2>
        <p>Öffnen Sie beide Programme im interaktiven Vergleich, passen Sie die Teamgröße an oder ergänzen Sie weitere Produkte aus {category.name}.</p>
        <div className="kl-actions">
          <Link href={`/vergleich?produkte=${a.slug},${b.slug}`} className="kl-btn kl-btn--brand">Interaktiv vergleichen<ArrowRight size={17} /></Link>
          <Link href={`/software/${pair.category}`} className="kl-btn kl-btn--outline-light">Alle Produkte in {category.name}</Link>
        </div>
      </div>
    </section>

    <section className="kl-wrap kl-block">
      <header className="kl-head"><h2>Weitere Vergleiche</h2></header>
      <div className="kl-pair-grid">{related.map((p) => <PairCard key={p.slug} pair={p} products={bySlug} />)}</div>
    </section>

    <section className="kl-wrap kl-block kl-narrow">
      <p className="kl-kicker">Quellen</p>
      <ul className="kl-source-list">{both.flatMap((p) => p.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="kl-link">{p.name}: {s.label}<ArrowUpRight size={14} /></a></li>))}</ul>
      <p className="kl-disclosure">Die Angaben stammen aus öffentlich zugänglichen Herstellerquellen und wurden redaktionell zusammengefasst; ein eigener Produkttest hat nicht stattgefunden. Richtwerte berücksichtigen weder Zusatzmodule noch Nutzergrenzen. Vergütete Anbieterlinks werden direkt am Link markiert. Preise und Funktionen können sich ändern.</p>
    </section>
  </main>;
}
