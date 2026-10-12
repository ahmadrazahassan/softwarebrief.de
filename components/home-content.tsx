"use client";

import { useMemo, useState } from "react";
import Image from "@/components/fast-image";
import Link from "next/link";
import { Search, ArrowUpRight, ArrowRight, BookOpen, Check } from "lucide-react";
import { ProductLogo } from "@/components/product-logo";
import { GuideCard } from "@/components/guide-card";
import { Input } from "@/components/ui/input";
import { CtaContent, ctaClass } from "@/components/cta";
import { NewsletterSection } from "@/components/newsletter-section";
import { categories, categorySlugs, compactPrice, displayText, type Product } from "@/lib/catalog";
import { categoryIllustrations } from "@/lib/illustrations";
import { guides } from "@/data/guides";
import { productMedia } from "@/data/evidence";
import { vendorMedia } from "@/data/vendor-media";
import { CloudImage } from "@/components/cloud-image";
import { AffiliatePartners } from "@/components/affiliate-partners";
import { affiliateDisclosure } from "@/lib/affiliate";

const situations = [
  { number: "01", title: "Rechnungen und Belege ordnen", text: "Von der ersten Rechnung bis zur Zusammenarbeit mit der Steuerberatung.", href: "/software/buchhaltung", tag: "Buchhaltung" },
  { number: "02", title: "Löhne verlässlich abrechnen", text: "Mitarbeiterzahl, Sonderfälle und Kosten pro Abrechnung prüfen.", href: "/software/lohnabrechnung", tag: "Lohnabrechnung" },
  { number: "03", title: "Personalprozesse vereinfachen", text: "Akten, Abwesenheiten und Zeiten nach Ihrem Arbeitsalltag auswählen.", href: "/software/hr", tag: "Personal" },
  { number: "04", title: "Vertrieb im Blick behalten", text: "Kontakte, Aufgaben und Verkaufschancen an einem Ort führen.", href: "/software/crm", tag: "CRM" },
  { number: "05", title: "Abläufe verbinden", text: "Aufträge, Lager oder Projekte mit einem passenden ERP steuern.", href: "/software/erp", tag: "ERP" },
];
const popularPairs = [
  { title: "Lexware Office oder sevdesk?", text: "Buchhaltung, Tarife und wichtige Grenzen", href: "/vergleich/lexware-office-vs-sevdesk", category: "Buchhaltung" },
  { title: "Personio oder Factorial?", text: "Personalverwaltung und Module", href: "/vergleich/personio-vs-factorial", category: "Personal" },
  { title: "Pipedrive oder HubSpot?", text: "Pipeline, Nutzer und Zusatzfunktionen", href: "/vergleich/pipedrive-vs-hubspot-sales-hub", category: "CRM" },
  { title: "weclapp oder Xentral?", text: "ERP für Dienstleistung und Handel", href: "/vergleich/weclapp-vs-xentral", category: "ERP" },
];
/* Obere Reihe: Produkte mit einzelner Herstelleransicht. Untere Reihe: Sage Produkte mit eigener Galerie im Profil. */
const interfaceSlugs = ["fastbill", "pipedrive", "weclapp", "sage-active", "sage-payroll", "sage-100"];

/** Vorschaubild für die Startseite: erst die einzelne Herstelleransicht, sonst das gewählte Bild der Galerie. */
type Shot = { image: string; alt: string; caption: string; source: string; cloudinary?: { id: string; width: number; height: number } };
function shot(slug: string): Shot | null {
  const single = productMedia[slug];
  if (single?.image) return single;
  const kit = vendorMedia[slug];
  if (!kit) return null;
  const image = kit.images[kit.featured];
  return { image: "", cloudinary: { id: image.id, width: image.width, height: image.height }, alt: image.alt, caption: `Herstelleransicht: ${image.caption}. Kein eigener Produkttest.`, source: kit.source };
}

/** Kurzhinweis, was das Profil zusätzlich bietet, zum Beispiel "8 Ansichten, Video, 4 PDFs". */
function extras(slug: string) {
  const kit = vendorMedia[slug];
  if (!kit) return null;
  return [`${kit.images.length} Ansichten`, kit.video && "Video", kit.documents && `${kit.documents.length} PDFs`].filter(Boolean).join(", ");
}
const steps = [
  { number: "01", title: "Bedarf klären", text: "Welche Aufgaben müssen Sie lösen? Wie groß ist Ihr Team? Ein kurzer Fragenweg hilft beim Einstieg." },
  { number: "02", title: "Tarife prüfen", text: "Vergleichen Sie Funktionen, Preisbasis und Grenzen im tatsächlich benötigten Paket." },
  { number: "03", title: "Angebote absichern", text: "Öffnen Sie die Herstellerquellen und lassen Sie wichtige Bedingungen vor der Entscheidung bestätigen." },
];
const faqs = [
  { q: "Wie findet Softwarebrief passende Software?", a: "Sie können nach einer Aufgabe oder einem Produkt suchen, eine Kategorie öffnen oder vier Fragen beantworten. Der Fragenweg nutzt feste Regeln und nennt zu jedem Ergebnis Gründe sowie Punkte, die Sie selbst prüfen sollten." },
  { q: "Sind die Produkte getestet oder bewertet?", a: "Unsere Einordnungen beruhen auf öffentlichen Herstellerinformationen und sind keine eigenen Praxistests. Statt Sternen zeigt der Softwarebrief Check auf jedem Profil, was wir belegen können: Europreise, Kernfunktionen, Einstieg und Quellen." },
  { q: "Wie aktuell sind die Preise?", a: "Die Profilseiten zeigen den Stand der Recherche und verlinken die Herstellerquellen. Tarife können sich ändern. Prüfen Sie vor dem Kauf die aktuelle Preisseite und ein konkretes Angebot." },
  { q: "Beeinflusst Werbung die Empfehlung?", a: affiliateDisclosure },
];

export function HomeContent({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const matches = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("de");
    const category = categorySlugs.find((slug) => categories[slug].name.toLocaleLowerCase("de") === term || slug === term);
    return products.filter((p) => category ? p.categorySlug === category : `${p.name} ${p.category} ${p.fit} ${p.features}`.toLocaleLowerCase("de").includes(term));
  }, [products, query]);
  const shown = query.trim() || showAll ? matches : matches.slice(0, 5);
  const scrollToResults = () => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });

  return <main>
    <section className="hero-stage"><div className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENTSCHEIDEN</p>
        <h1>Die richtige Software.<br /><span>Für Ihren Betrieb.</span></h1>
        <p className="hero-intro">Finden Sie Programme, die zu Ihren Aufgaben passen. Softwarebrief zeigt Funktionen, Tarifbedingungen und redaktionelle Einschätzungen mit Quellen, die Sie selbst prüfen können.</p>
        <div className="search-wrap"><Search size={22} aria-hidden="true" /><Input aria-label="Software suchen" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") scrollToResults(); }} placeholder="Software oder Kategorie suchen" className="hero-search" /><button type="button" className={ctaClass({ variant: "dark" })} onClick={scrollToResults} aria-label="Suchen"><CtaContent icon={<Search size={18} strokeWidth={1.75} />}>Suchen</CtaContent></button></div>
        <div className="hero-meta"><span>{products.length} recherchierte Produkte</span><span>5 Kategorien</span><span>Quellen offen gelegt</span></div>
      </div>
      <div className="hero-visual">
        <aside className="hero-aside" aria-label="So hilft Softwarebrief"><div className="aside-index">KL / 01</div><p>Eine gute Entscheidung beginnt mit den richtigen Fragen.</p><div className="aside-rule" /><span>01&nbsp; Bedarf verstehen</span><span>02&nbsp; Tarife prüfen</span><span>03&nbsp; Produkte vergleichen</span><Link className={ctaClass({ variant: "brand", size: "sm", block: true })} href="/empfehlung"><CtaContent>Zur Empfehlung</CtaContent></Link></aside>
      </div>
    </div></section>

    <AffiliatePartners products={products} />

    <section className="shell situation-section" aria-labelledby="situation-title"><div className="section-heading"><div><p className="eyebrow">BEGINNEN SIE MIT IHRER AUFGABE</p><h2 id="situation-title">Was soll die Software für Sie lösen?</h2></div><Link href="/empfehlung">Noch unsicher? Vier Fragen beantworten <ArrowUpRight size={17} /></Link></div><div className="situation-grid">{situations.map((item) => <Link href={item.href} className="situation-card" key={item.number}><div><span>{item.number}</span><small>{item.tag}</small></div><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight size={19} aria-hidden="true" /></Link>)}</div></section>

    <section className="categories-section shell" aria-labelledby="categories-title">
      <div className="section-heading"><div><p className="eyebrow">MARKTÜBERBLICK</p><h2 id="categories-title">Fünf Bereiche. Ein klarer Einstieg.</h2></div><Link href="/kategorien">Alle Kategorien <ArrowUpRight size={17} /></Link></div>
      <div className="category-grid">{categorySlugs.map((slug) => <Link className="category-card" href={`/software/${slug}`} key={slug}>
        <span className="category-number">{categories[slug].number} / 05</span>
        <Image className="category-card-art" src={categoryIllustrations[slug]} alt="" width={768} height={768} sizes="(max-width: 700px) 45vw, 220px" />
        <div><h3>{categories[slug].name}</h3><p>{categories[slug].kicker}</p></div><ArrowUpRight size={22} />
      </Link>)}</div>
    </section>

    <section className="home-process"><div className="shell"><div className="process-heading"><p className="eyebrow">SO FUNKTIONIERT SOFTWAREBRIEF</p><h2>Vom Bedarf zur fundierten Auswahl.</h2><p>Sie entscheiden selbst. Wir ordnen öffentlich belegte Angaben so, dass Sie Unterschiede erkennen und gezielt nachfragen können.</p></div><div className="process-grid">{steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><Link href="/methodik">Recherche und Methodik ansehen <ArrowRight size={17} /></Link></div></section>

    <section className="shell pair-section" aria-labelledby="pair-title"><div className="section-heading"><div><p className="eyebrow">DIREKTVERGLEICH</p><h2 id="pair-title">Zwei Programme im direkten Vergleich.</h2></div><Link href="/vergleich">Vergleich selbst zusammenstellen <ArrowUpRight size={17} /></Link></div><div className="pair-grid">{popularPairs.map((pair) => <Link href={pair.href} key={pair.href} className="pair-card"><span>{pair.category}</span><h3>{pair.title}</h3><p>{pair.text}</p><strong>Unterschiede ansehen <ArrowRight size={17} /></strong></Link>)}</div></section>

    <section className="interface-section" aria-labelledby="interface-title"><div className="shell"><div className="section-heading"><div><p className="eyebrow">EINBLICK IN DIE OBERFLÄCHE</p><h2 id="interface-title">Sehen Sie sich die Programme an.</h2></div><p className="section-aside">Originalansichten der Hersteller. Die aktuelle Oberfläche kann abweichen; jede Abbildung führt zur Quelle.</p></div><div className="interface-grid">{interfaceSlugs.map((slug) => { const product = products.find((p) => p.slug === slug); const media = shot(slug); if (!product || !media) return null; return <article className="interface-card" key={slug}><div className="interface-card-head"><ProductLogo product={product}/><div><span>{product.category}</span><h3>{product.name}</h3></div></div><div className="interface-media">{media.cloudinary ? <CloudImage id={media.cloudinary.id} width={media.cloudinary.width} height={media.cloudinary.height} widths={[640, 900, 1200, 1600]} sizes="(max-width: 700px) 86vw, (max-width: 1100px) 45vw, 380px" alt={media.alt} /> : <Image src={media.image} alt={media.alt} width={900} height={540} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 380px" unoptimized />}</div><div className="interface-card-body"><p>{media.caption}</p><a href={media.source} target="_blank" rel="noopener noreferrer">Bildquelle beim Hersteller <ArrowUpRight size={15}/></a>{extras(slug) && <Link href={`/software/${product.categorySlug}/${product.slug}#einblicke`}>Im Profil: {extras(slug)} <ArrowRight size={14}/></Link>}<div className="interface-price"><span>Einstieg</span><strong>{compactPrice(product)}</strong></div><Link href={`/software/${product.categorySlug}/${product.slug}`} className="interface-profile">Profil, Tarife und Grenzen ansehen <ArrowRight size={17}/></Link></div></article>; })}</div><p className="interface-note">Die Abbildungen stammen von den Herstellern und sind kein eigener Produkttest. Preise und Funktionen prüfen wir im Profil jedes Programms.</p></div></section>

    <section className="results-section" id="results"><div className="shell"><div className="section-heading"><div><p className="eyebrow">PRODUKTE ENTDECKEN</p><h2>{query.trim() ? `${matches.length} passende Ergebnisse.` : `${products.length} Programme im Überblick.`}</h2></div><p className="section-aside">Ein kuratierter Startbestand, keine Rangliste. Einstiegspreise allein sagen noch nichts über den passenden Tarif aus.</p></div><div className="product-list">{shown.length ? shown.map((p) => <Link href={`/software/${p.categorySlug}/${p.slug}`} className="product-row" key={p.slug}><ProductLogo product={p} /><span className="product-info"><strong>{p.name}</strong><small>{p.category}</small></span><span className="product-fit">{displayText(p.fit)}</span><span className="product-price"><small>Preisanker</small>{compactPrice(p)}</span><span className={ctaClass({ variant: "light", size: "sm", className: "row-cta" })}><CtaContent>Profil</CtaContent></span></Link>) : <p className="empty-result">Keine passenden Einträge. Versuchen Sie einen anderen Suchbegriff oder öffnen Sie eine Kategorie.</p>}</div><div className="results-actions">{!query.trim() && !showAll && <button type="button" className={ctaClass({ variant: "dark" })} onClick={() => setShowAll(true)}><CtaContent>Alle {products.length} Programme zeigen</CtaContent></button>}{query.trim() && <button type="button" className={ctaClass({ variant: "dark" })} onClick={() => { setQuery(""); setShowAll(false); }}><CtaContent>Suche zurücksetzen</CtaContent></button>}<Link className={ctaClass({ variant: "light" })} href="/vergleich"><CtaContent>Produkte vergleichen</CtaContent></Link></div></div></section>

    <section className="shell insights-section" aria-labelledby="insights-title">
      <div className="insights-head"><div><span className="section-chip"><BookOpen size={15} strokeWidth={1.75} aria-hidden="true" />Ratgeber</span><h2 id="insights-title">Wissen für Ihre Entscheidung</h2><p>Fristen, Pflichten und Kosten rund um Buchhaltung, Lohn, Personal, CRM und ERP. Mit Quellen und einer Fragenliste für Ihr Anbietergespräch.</p></div><Link className={ctaClass({ variant: "dark" })} href="/ratgeber"><CtaContent>Alle Ratgeber</CtaContent></Link></div>
      <div className="insight-grid">{guides.slice(0, 6).map((g) => <GuideCard guide={g} key={g.slug} />)}</div>
      <div className="insights-more"><Link className={ctaClass({ variant: "light" })} href="/ratgeber"><CtaContent>Alle {guides.length} Ratgeber ansehen</CtaContent></Link></div>
    </section>

    <section className="home-recommendation"><div className="shell home-recommendation-inner"><div><p className="eyebrow">WENN SIE NOCH NICHT WISSEN, WO SIE ANFANGEN SOLLEN</p><h2>Vier Fragen schaffen Orientierung.</h2><p>Beschreiben Sie Ihre wichtigste Aufgabe und Ihre Betriebsgröße. Danach sehen Sie passende Produkte mit einer nachvollziehbaren Begründung und einem Hinweis, was Sie noch prüfen sollten.</p><Link className={ctaClass({ variant: "brand", size: "lg" })} href="/empfehlung"><CtaContent>Empfehlung erhalten</CtaContent></Link></div><div className="recommendation-art"><Image src="/illustrations/recommendation.webp" alt="" width={768} height={768} sizes="(max-width: 760px) 80vw, 310px" /></div></div></section>

    <section className="home-trust-band"><div className="shell home-trust"><div><p className="eyebrow">TRANSPARENZ</p><h2>Einordnungen mit sichtbaren Quellen.</h2><ul><li><Check size={17} /> Herstellerangaben und unsere Einschätzung sind getrennt.</li><li><Check size={17} /> Tests, Sterne und Partnerschaften nennen wir nur, wenn sie belegt sind.</li><li><Check size={17} /> Vergütete Links werden als Werbung gekennzeichnet.</li></ul></div><div><p>Die Profile beruhen auf öffentlich zugänglichen Herstellerinformationen. Sie zeigen den jeweiligen Recherche Stand und führen direkt zu den Quellen. Der Katalog ist ein kuratierter Startbestand und keine vollständige Marktübersicht.</p><Link href="/methodik">Unsere Methodik im Detail <ArrowRight size={18} /></Link></div></div></section>

    <section className="shell home-faq" aria-labelledby="home-faq-title"><div><p className="eyebrow">GUT ZU WISSEN</p><h2 id="home-faq-title">Fragen vor der Auswahl.</h2><Link href="/faq">Alle Antworten <ArrowUpRight size={17} /></Link></div><div>{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span aria-hidden="true">+</span></summary><p>{faq.a}</p></details>)}</div></section>

    <NewsletterSection />
  </main>;
}
