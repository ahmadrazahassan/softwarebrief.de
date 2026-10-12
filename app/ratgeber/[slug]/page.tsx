import { notFound } from "next/navigation";
import Image from "@/components/fast-image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronRight, Info } from "lucide-react";
import { guides, getGuide, germanDate, isLongGuide, type GuideMeta } from "@/data/guides";
import { loadGuideBody } from "@/data/guide-bodies";
import { categories, compactPrice, displayText, products } from "@/lib/catalog";
import { guideThumbnail } from "@/lib/guide-thumbnails";
import { comparisonPairs } from "@/lib/compare";
import { operator } from "@/data/operator";
import { absoluteUrl, fitTitle } from "@/lib/site";
import { ProductLogo } from "@/components/product-logo";
import { PairCard } from "@/components/compare-parts";
import { GuideCard, toParagraphs } from "@/components/guide-card";
import { GuideBlocks, GuideFaqList, Inline, plain } from "@/components/guide-blocks";
import { CopyLink, ReadingProgress, TableOfContents } from "@/components/article-tools";
import { NewsletterArticleCard } from "@/components/newsletter-section";

export function generateStaticParams() { return guides.map((g) => ({ slug: g.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const g = getGuide((await params).slug);
  if (!g) return {};
  const title = g.metaTitle ?? fitTitle(g.title, " | Softwarebrief Ratgeber");
  const description = g.metaDescription ?? g.intro;
  const thumbnail = guideThumbnail(g);
  const image = absoluteUrl(thumbnail.src);
  return {
    title,
    description,
    alternates: { canonical: `/ratgeber/${g.slug}` },
    openGraph: {
      type: "article", locale: "de_DE", siteName: "Softwarebrief", title, description, url: `/ratgeber/${g.slug}`,
      ...(g.published && { publishedTime: g.published, modifiedTime: g.updated ?? g.published }),
      ...(image && { images: [{ url: image, width: thumbnail.width, height: thumbnail.height, alt: thumbnail.alt }] }),
    },
    twitter: { card: "summary_large_image", title, description, ...(image && { images: [image] }) },
  };
}

const REVIEWED = "25. September 2026";
const anchor = (i: number) => `abschnitt-${i + 1}`;

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const g = getGuide((await params).slug);
  const body = g ? await loadGuideBody(g.slug) : null;
  if (!g || !body) notFound();

  const long = isLongGuide(g);
  const category = categories[g.category];
  const thumbnail = guideThumbnail(g);
  const related = body.related.map((s) => products.find((p) => p.slug === s)).filter((p): p is (typeof products)[number] => !!p);
  const index = guides.findIndex((x) => x.slug === g.slug);
  const prev = guides[(index - 1 + guides.length) % guides.length];
  const next = guides[(index + 1) % guides.length];
  const topicGuides = (body.relatedGuides ?? []).map((s) => getGuide(s)).filter((x): x is GuideMeta => !!x && x.slug !== g.slug);
  const moreGuides = [...topicGuides, ...guides.filter((x) => x.category === g.category && x.slug !== g.slug), ...guides.filter((x) => x.category !== g.category)]
    .filter((x, i, all) => all.findIndex((y) => y.slug === x.slug) === i).slice(0, 3);
  const bySlug = new Map(products.map((p) => [p.slug, p]));
  const pairs = comparisonPairs.filter((p) => p.category === g.category).slice(0, 3);
  const toc = [
    ...body.sections.map((s, i) => ({ id: anchor(i), label: s.heading })),
    ...(body.faq?.length ? [{ id: "haeufige-fragen", label: "Häufige Fragen" }] : []),
    { id: "fragenliste", label: "Ihre Fragenliste" },
    ...(body.sources?.length ? [{ id: "quellen", label: "Quellen" }] : []),
  ];

  const url = absoluteUrl(`/ratgeber/${g.slug}`);
  const image = absoluteUrl(thumbnail.src);
  const publisher = { "@type": "Organization", name: "Softwarebrief", ...(absoluteUrl("/") && { url: absoluteUrl("/") }), ...(operator.email && { email: operator.email }) };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", headline: g.title, description: g.metaDescription ?? g.intro, inLanguage: "de-DE",
        datePublished: g.published ?? "2026-09-25", dateModified: g.updated ?? "2026-09-25",
        author: { "@type": "Organization", name: "Redaktion Softwarebrief" }, publisher,
        ...(g.keyword && { keywords: g.keyword }), ...(url && { mainEntityOfPage: url }), ...(image && { image }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", ...(absoluteUrl("/") && { item: absoluteUrl("/") }) },
          { "@type": "ListItem", position: 2, name: "Ratgeber", ...(absoluteUrl("/ratgeber") && { item: absoluteUrl("/ratgeber") }) },
          { "@type": "ListItem", position: 3, name: g.title },
        ],
      },
      ...(body.faq?.length ? [{ "@type": "FAQPage", mainEntity: body.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })) }] : []),
    ],
  };

  return <main className="kl bl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <ReadingProgress target="#artikel" />

    <header className="kl-wrap kl-hero bl-article-hero">
      <nav className="kl-crumbs" aria-label="Brotkrumen"><Link href="/">Startseite</Link><ChevronRight size={13} /><Link href="/ratgeber">Ratgeber</Link><ChevronRight size={13} /><span>{category.name}</span></nav>
      <span className="section-chip">{category.name}</span>
      <h1>{g.title}</h1>
      <p className="kl-lead">{g.intro}</p>
      {long
        ? <p className="kl-meta"><span>Redaktion Softwarebrief</span><span>Aktualisiert am {germanDate(g.updated ?? g.published!)}</span><span>{g.readingMinutes} Min. Lesezeit</span></p>
        : <p className="kl-meta"><span>Redaktion Softwarebrief</span><span>Geprüft am {REVIEWED}</span><span>{g.readingMinutes} Min. Lesezeit</span></p>}
    </header>

    <figure className="kl-wrap bl-cover"><Image {...thumbnail} alt={thumbnail.alt} sizes="(max-width: 760px) 90vw, 1120px" priority /></figure>

    <div className="kl-wrap bl-layout">
      <aside className="bl-rail bl-rail--left"><TableOfContents items={toc} /></aside>

      <article id="artikel" className="bl-article">
        {body.legalNote && <div className="bl-legalnote" role="note"><Info size={18} aria-hidden="true" /><p>{body.legalNote}</p></div>}

        {body.keyTakeaways?.length ? (
          <section className="bl-takeaways" aria-labelledby="kurzfassung">
            <h2 id="kurzfassung">Das Wichtigste in Kürze</h2>
            <ul>{body.keyTakeaways.map((item) => <li key={item}><Check size={18} strokeWidth={2.5} aria-hidden="true" /><span><Inline text={item} /></span></li>)}</ul>
          </section>
        ) : null}

        <div className="bl-summary">
          <p className="kl-kicker">In diesem Ratgeber</p>
          <ol>{body.sections.map((s, i) => <li key={s.heading}><a href={`#${anchor(i)}`}>{s.heading}</a></li>)}</ol>
        </div>

        {body.sections.map((s, i) => (
          <section key={s.heading} id={anchor(i)} className="bl-section">
            <span className="bl-section-num">{String(i + 1).padStart(2, "0")}</span>
            <h2>{s.heading}</h2>
            {s.blocks ? <GuideBlocks blocks={s.blocks} /> : toParagraphs(s.body ?? "").map((para) => <p key={para}>{para}</p>)}
          </section>
        ))}

        {body.faq?.length ? (
          <section id="haeufige-fragen" className="bl-faq-wrap" aria-labelledby="faq-titel">
            <p className="kl-kicker">Kurz beantwortet</p>
            <h2 id="faq-titel">Häufige Fragen</h2>
            <GuideFaqList items={body.faq} />
          </section>
        ) : null}

        <section id="fragenliste" className="bl-checklist">
          <p className="kl-kicker">Ihre Fragenliste</p>
          <h2>Vor dem Anbietergespräch klären</h2>
          <ul>{body.checklist.map((item) => <li key={item}><Check size={18} strokeWidth={2.5} aria-hidden="true" />{item}</li>)}</ul>
        </section>

        {body.sources?.length ? (
          <section id="quellen" className="bl-sources" aria-labelledby="quellen-titel">
            <h2 id="quellen-titel">Quellen</h2>
            <p>Die Angaben dieses Ratgebers beruhen auf diesen Quellen. Prüfen Sie dort den aktuellen Stand, bevor Sie entscheiden.</p>
            <ul>{body.sources.map((s) => (
              <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer"><span>{s.label}<span className="bl-sr"> (öffnet in neuem Tab)</span></span><small>{new URL(s.url).hostname.replace(/^www\./, "")}<ArrowUpRight size={14} aria-hidden="true" style={{ marginLeft: 4, verticalAlign: "-2px" }} /></small></a></li>
            ))}</ul>
          </section>
        ) : null}

        <p className="bl-disclaimer">Dieser Ratgeber unterstützt Ihre Auswahl. Produktfunktionen, Preise und rechtliche Anforderungen sollten Sie vor einer Entscheidung anhand aktueller Herstellerangaben und bei Bedarf mit fachkundiger Beratung prüfen.</p>

        <div className="bl-share"><span>Hilfreich? Teilen Sie den Ratgeber mit Ihrem Team.</span><CopyLink /></div>

        <section className="bl-products">
          <p className="kl-kicker">Im Artikel erwähnt</p>
          <h2>Passende Programme</h2>
          <ul>{related.map((p) => (
            <li key={p.slug}>
              <Link href={`/software/${p.categorySlug}/${p.slug}`} className="bl-product">
                <ProductLogo product={p} />
                <span><strong>{p.name}</strong><small>{compactPrice(p)}</small><em>{displayText(p.fit)}</em></span>
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </li>
          ))}</ul>
          {related.length > 1 && <Link href={`/vergleich?produkte=${related.map((p) => p.slug).join(",")}`} className="kl-btn kl-btn--brand">Diese {related.length} Programme vergleichen<ArrowRight size={17} /></Link>}
        </section>

        {topicGuides.length > 0 && (
          <section className="bl-more-guides" aria-labelledby="mehr-zum-thema">
            <h2 id="mehr-zum-thema">Mehr zum Thema</h2>
            <ul>{topicGuides.map((x) => <li key={x.slug}><Link href={`/ratgeber/${x.slug}`}><span>{x.title}</span><ArrowRight size={17} aria-hidden="true" /></Link></li>)}</ul>
          </section>
        )}

        <NewsletterArticleCard />

        <nav className="bl-pager" aria-label="Weitere Artikel">
          <Link href={`/ratgeber/${prev.slug}`}><small><ArrowLeft size={14} />Vorheriger Artikel</small><strong>{prev.title}</strong></Link>
          <Link href={`/ratgeber/${next.slug}`} className="is-next"><small>Nächster Artikel<ArrowRight size={14} /></small><strong>{next.title}</strong></Link>
        </nav>
      </article>

      <aside className="bl-rail bl-rail--right">
        <div className="bl-rail-card">
          <p className="kl-kicker">{category.name}</p>
          <p className="bl-rail-title">Alle Programme im Überblick</p>
          <p>{category.intro}</p>
          <Link href={`/software/${g.category}`} className="kl-link">Zur Kategorie<ChevronRight size={15} /></Link>
        </div>
      </aside>
    </div>

    {pairs.length > 0 && <section className="kl-wrap kl-block">
      <header className="kl-head"><span className="section-chip">Vergleiche</span><h2>Direkt gegenübergestellt</h2><p>Detailvergleiche aus {category.name} mit Preisen, Funktionen und Fazit.</p></header>
      <div className="kl-pair-grid">{pairs.map((p) => <PairCard key={p.slug} pair={p} products={bySlug} />)}</div>
    </section>}

    <section className="kl-wrap kl-block">
      <header className="kl-head"><h2>Weiterlesen</h2></header>
      <div className="bl-grid">{moreGuides.map((x) => <GuideCard key={x.slug} guide={x} />)}</div>
    </section>
  </main>;
}
