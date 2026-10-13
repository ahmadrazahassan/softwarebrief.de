import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductLogo } from "@/components/product-logo";
import { VendorLink } from "@/components/vendor-link";
import { ProductEvidence } from "@/components/product-evidence";
import { PricingPlans } from "@/components/pricing-plans";
import { ArrowUpRight, ArrowDown, Check, Info } from "lucide-react";
import { CtaContent, ctaClass } from "@/components/cta";
import { products, findProduct, categories, displayText, compactPrice } from "@/lib/catalog";
import { ProfileActions } from "@/components/profile-actions";
import { ReviewsPanel } from "@/components/reviews-panel";
import { SoftwarebriefCheck } from "@/components/softwarebrief-check";
import { ProductShowcase } from "@/components/product-showcase";
import { ProductFilm } from "@/components/product-film";
import { ProfileCtaBand, ProfileCtas } from "@/components/profile-ctas";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SageAds } from "@/components/sage-banner";
import { profileBanners } from "@/lib/sage-banners";
import { vendorMedia, vendorSources } from "@/data/vendor-media";
import { supabaseConfig } from "@/lib/supabase";
import { loadCatalog } from "@/lib/load-catalog";
import { fitTitle } from "@/lib/site";
import { shortName } from "@/lib/compare";
import { editorial } from "@/data/editorial";
import { reviewExtras } from "@/data/review-extras";
import { detailedReviews } from "@/data/detailed-reviews";

export function generateStaticParams() { return products.map((p) => ({ category: p.categorySlug, slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const p = findProduct(category, slug);
  return p ? { title: fitTitle(`${shortName(p)}: Funktionen, Preise und Einschätzung`), description: p.fit, alternates: { canonical: `/software/${p.categorySlug}/${p.slug}` } } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const catalog = await loadCatalog();
  const p = catalog.find((item) => item.categorySlug === category && item.slug === slug);
  if (!p) notFound();
  const similar = catalog.filter((item) => item.categorySlug === category && item.slug !== slug).slice(0, 3);
  const cat = categories[p.categorySlug as keyof typeof categories];
  const extra = reviewExtras[p.slug];
  const assessment = editorial[p.slug];
  const detailed = detailedReviews[p.slug];
  const media = vendorMedia[p.slug];
  const hasInsights = Boolean(media || vendorSources[p.slug]);
  const sageAds = profileBanners[p.slug];
  /* Der Abschnitt für Erfahrungsberichte erscheint nur, wenn Einreichungen möglich sind. Sonst zeigen wir nichts. */
  const showReviews = Boolean(supabaseConfig());
  const checked = detailed?.checked ?? (["fastbill", "lexware-office", "sevdesk", "pipedrive"].includes(p.slug) ? "27. September 2026" : "25. September 2026");
  return <main>
    <section className="product-hero shell">
      <nav className="breadcrumbs" aria-label="Brotkrumen"><Link href="/">Startseite</Link><span>/</span><Link href={`/software/${category}`}>{cat.name}</Link><span>/</span><span>{p.name}</span></nav>
      <div className="product-hero-grid"><div><div className="product-brandline"><ProductLogo product={p}/><p className="eyebrow">PRODUKTPROFIL · {cat.name.toUpperCase()}</p></div><h1>{p.name}</h1><p className="product-lead">{displayText(p.fit)}</p><div className="hero-fact-row"><span>Redaktionelle Recherche</span><span>Quellenstand: {checked}</span>{vendorMedia[p.slug]?.video && <a href="#produktfilm" className="hero-rating">Produktvideo</a>}{hasInsights && <a href="#einblicke" className="hero-rating">{media ? `${media.images.length} Ansichten` : "Einblicke bei Sage"}</a>}<a href="#softwarebrief-check" className="hero-rating">Softwarebrief Check</a></div></div><div className="profile-hero-price"><small>Preis und Tarifstatus</small><strong>{compactPrice(p)}</strong><p>Der passende Tarif hängt von Funktionen, Nutzern und Laufzeit ab. Prüfen Sie die vollständige Kostenrechnung weiter unten.</p><div className="profile-hero-actions"><a className={ctaClass({ variant: "dark", size: "sm", block: true })} href="#preise"><CtaContent icon={<ArrowDown size={18} strokeWidth={1.75}/>}>Preise im Detail</CtaContent></a><VendorLink product={p} placement={`profil-${p.slug}-kopf`} cta={{ variant: "light", size: "sm", block: true }}/></div></div></div>
    </section>
    <SoftwarebriefCheck product={p}/>
    <ProductShowcase product={p}/>
    <div className="shell profile-layout"><article className="profile-content">
      <section className="profile-section" id="ueberblick"><p className="eyebrow">01 / EINORDNUNG</p><h2>Für wen ist {p.name} sinnvoll?</h2><p className="large-text">{displayText(p.fit)}</p><p>{cat.intro}</p>{vendorMedia[p.slug]?.video && <><ProductFilm video={vendorMedia[p.slug].video!} vendor={vendorMedia[p.slug].vendor}/><ProfileCtas product={p} variant="inline"/></>}<div className="review-decision"><strong>Die Kernfrage vor der Auswahl</strong><p>{displayText(extra.buyingQuestion)}</p></div><div className="profile-inline-actions"><Link className={ctaClass({ variant: "dark", size: "sm" })} href={`/vergleich?produkte=${p.slug}`}><CtaContent>Mit Alternativen vergleichen</CtaContent></Link><a className={ctaClass({ variant: "light", size: "sm" })} href="#pruefen"><CtaContent icon={<ArrowDown size={18} strokeWidth={1.75}/>}>Prüffragen lesen</CtaContent></a></div></section>
      {sageAds?.intro.length ? <div className="profile-ad"><SageAds banners={sageAds.intro} slot={`profil-${p.slug}-start`}/></div> : null}
      <section className="profile-section" id="funktionen"><p className="eyebrow">02 / FUNKTIONEN</p><h2>Was das Produkt abdeckt.</h2><div className="fact-box"><div className="fact-icon"><Check size={20}/></div><p>{displayText(p.features)}</p></div><h3>Worauf es im Arbeitsalltag ankommt</h3><p>{displayText(extra.workflow)}</p><p className="source-note">Die Funktionen stammen aus den verlinkten Herstellerquellen. Verfügbarkeit und Kontingente unterscheiden sich je nach Tarif.</p></section>
      <section className="profile-section" id="preise"><p className="eyebrow">03 / PREISE UND KOSTEN</p><h2>Was Ihr Betrieb tatsächlich einplanen sollte.</h2><p>{displayText(p.pricing)}</p><PricingPlans product={p}/>{detailed && <div className="cost-examples"><h3>Rechenbeispiele auf Basis der Listenpreise</h3><div className="cost-example-scroll"><table className="cost-example-table"><thead><tr><th scope="col">Szenario</th><th scope="col">Rechnung</th><th scope="col">Pro Monat</th><th scope="col">Pro Jahr</th></tr></thead><tbody>{detailed.costExamples.map((example) => <tr key={example.scenario}><th scope="row">{example.scenario}</th><td>{example.calculation}</td><td>{example.monthly}</td><td>{example.yearly}</td></tr>)}</tbody></table></div><p className="source-note">{detailed.costNote} Eigene Berechnung von Softwarebrief, Stand {detailed.checked}.</p></div>}<div className="cost-check-grid"><div><strong>Lizenz und Laufzeit</strong><p>Vergleichen Sie Monats- und Jahreszahlung, Steuerangabe und den regulären Preis nach Aktionen.</p></div><div><strong>Nutzer und Volumen</strong><p>Prüfen Sie Mitarbeiter, Arbeitsplätze, Rechnungen, Aufträge oder Kontakte anhand Ihrer realen Mengen.</p></div><div><strong>Einführung und Zusatzmodule</strong><p>Fragen Sie nach Datenübernahme, Schulung, Schnittstellen und laufender Betreuung.</p></div></div><ProductEvidence slug={p.slug}/></section>
      <section className="profile-section" id="einschaetzung"><p className="eyebrow">04 / REDAKTIONELLE EINSCHÄTZUNG</p><h2>Stärken und Grenzen im Zusammenhang.</h2><p className="large-text">{displayText(p.review)}</p>{detailed && <div className="detail-review"><p className="detail-summary">{detailed.summary}</p><div className="assessment-grid fit-grid"><div><h3>Passt gut für</h3><ul>{detailed.bestFor.map((point) => <li key={point}>{point}</li>)}</ul></div><div><h3>Eher nicht geeignet für</h3><ul>{detailed.notFor.map((point) => <li key={point}>{point}</li>)}</ul></div></div>{detailed.sections.map((section) => <section key={section.heading} className="detail-review-section"><h3>{section.heading}</h3>{section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}</section>)}</div>}<div className="assessment-grid"><div><h3>Was für das Produkt spricht</h3><ul>{assessment.strengths.map((point) => <li key={point}>{point}</li>)}</ul></div><div><h3>Welche Grenzen Sie prüfen sollten</h3><ul>{assessment.limitations.map((point) => <li key={point}>{point}</li>)}</ul></div></div><div className="practical-check"><h3>Unser Rat für Ihre Auswahl</h3><p>{assessment.practicalCheck}</p></div>{detailed && <div className="review-decision detail-verdict"><strong>Unser Fazit</strong><p>{detailed.verdict}</p></div>}<div className="editorial-note"><Info size={18}/><p>Diese Einordnung beruht auf öffentlich zugänglichen Quellen. Sie ist kein eigener Produkttest.</p></div></section>
      <section className="profile-section" id="pruefen"><p className="eyebrow">05 / PRAXISCHECK</p><h2>Diese Fragen gehören in Ihre Demo.</h2><p>{displayText(extra.implementation)}</p><ol className="demo-list"><li><strong>Ein konkreter Vorgang:</strong> Lassen Sie den wichtigsten Arbeitsablauf Ihres Betriebs mit Beispieldaten vorführen.</li><li><strong>Tarifgrenzen:</strong> Fragen Sie zu jedem benötigten Schritt, ob er im angebotenen Paket enthalten ist.</li><li><strong>Daten und Übergabe:</strong> Prüfen Sie Import, Export, Rollen und Ihre bestehenden Schnittstellen.</li><li><strong>Gesamtkosten:</strong> Lassen Sie Einmalkosten und laufende Gebühren für zwölf Monate getrennt ausweisen.</li></ol><VendorLink product={p} placement={`profil-${p.slug}-praxis`} cta={{ variant: "dark" }}/></section>
      {sageAds?.closing.length ? <div className="profile-ad"><SageAds banners={sageAds.closing} slot={`profil-${p.slug}-ende`}/></div> : null}
      {showReviews && <section className="profile-section" id="bewertungen"><p className="eyebrow">06 / ERFAHRUNGEN</p><h2>Erfahrungen aus der Praxis.</h2><p>Berichten Sie von Ihren Erfahrungen mit dem Programm. Eingereichte Bewertungen werden vor der Veröffentlichung geprüft.</p><ReviewsPanel slug={p.slug} name={p.name}/></section>}
      <section className="profile-section" id="alternativen"><p className="eyebrow">07 / ALTERNATIVEN</p><h2>Diese Produkte sind ebenfalls eine Prüfung wert.</h2><div className="alternatives-grid">{similar.map((other) => <Link href={`/software/${other.categorySlug}/${other.slug}`} key={other.slug}><div className="alternative-head"><ProductLogo product={other}/><span>{other.category}</span></div><strong>{other.name}</strong><p>{displayText(other.fit)}</p><ArrowUpRight size={19}/></Link>)}</div><p className="alternative-note">Im Dossier außerdem genannt: {p.alternatives.map(displayText).join(", ")}</p><Link className={ctaClass({ variant: "dark", className: "alternatives-cta" })} href={`/vergleich?produkte=${[p.slug, ...similar.map((item) => item.slug)].join(",")}`}><CtaContent>Alle vier direkt vergleichen</CtaContent></Link></section>
      <section className="profile-section" id="quellen"><p className="eyebrow">08 / QUELLEN</p><h2>Prüfen Sie die Angaben selbst.</h2><ul className="source-list">{p.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer"><span>{source.label}</span><span>{new URL(source.url).hostname.replace(/^www\./, "")}</span><ArrowUpRight size={17}/></a></li>)}</ul><p className="source-note">Quellenstand: {checked}. Tarife und Leistungen können sich ändern; maßgeblich ist das Angebot des Herstellers.</p></section>
    </article><aside className="profile-sidebar"><div className="profile-side-card"><ProductLogo product={p}/><h2>{p.name}</h2><p>{displayText(p.fit)}</p><a className="side-price" href="#preise"><small>Preisanker</small><strong>{compactPrice(p)}</strong><span>Alle Tarife ansehen</span></a><ProfileActions product={p}/></div><nav className="profile-toc" aria-label="Auf dieser Seite"><strong>Auf dieser Seite</strong><a href="#softwarebrief-check">Softwarebrief Check</a>{hasInsights && <a href="#einblicke">{media ? "Einblicke" : "Herstellerseite"}</a>}<a href="#ueberblick">Überblick</a>{vendorMedia[p.slug]?.video && <a href="#produktfilm">Produktfilm</a>}<a href="#funktionen">Funktionen</a><a href="#preise">Preise</a><a href="#einschaetzung">Einschätzung</a><a href="#pruefen">Praxischeck</a>{showReviews && <a href="#bewertungen">Erfahrungen</a>}<a href="#alternativen">Alternativen</a><a href="#quellen">Quellen</a></nav></aside></div>
    <ProfileCtaBand product={p}/>
    <MobileCtaBar product={p}/>
  </main>;
}
