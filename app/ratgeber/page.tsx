import Image from "@/components/fast-image";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { guides } from "@/data/guides";
import { categories, categorySlugs } from "@/lib/catalog";
import { guideThumbnail } from "@/lib/guide-thumbnails";
import { GuideLibrary } from "@/components/guide-library";

export const metadata = { title: "Ratgeber zur Softwareauswahl | Softwarebrief", description: "Praktische Ratgeber für Buchhaltung, Lohnabrechnung, Personal, CRM und ERP: Anforderungen sortieren, Kosten richtig lesen und die richtigen Fragen stellen.", alternates: { canonical: "/ratgeber" } };

export default function GuidesPage() {
  const featured = guides[0];
  const thumbnail = guideThumbnail(featured);
  return <main className="kl bl">
    <section className="kl-wrap kl-hero">
      <nav className="kl-crumbs" aria-label="Brotkrumen"><Link href="/">Startseite</Link><ChevronRight size={13} /><span>Ratgeber</span></nav>
      <span className="section-chip"><BookOpen size={15} strokeWidth={1.75} aria-hidden="true" />Ratgeber</span>
      <h1>Wissen, bevor Sie <span>entscheiden.</span></h1>
      <p className="kl-lead">Gute Software löst eine konkrete Aufgabe. Unsere Ratgeber helfen Ihnen, Anforderungen zu sortieren, Kosten richtig zu lesen und im Gespräch mit Anbietern die richtigen Fragen zu stellen.</p>
      <p className="kl-meta"><span>{guides.length} Ratgeber</span><span>{categorySlugs.length} Kategorien</span><span>Redaktionell geprüft im September 2026</span></p>
    </section>

    <section className="kl-wrap bl-featured-wrap">
      <Link href={`/ratgeber/${featured.slug}`} className="bl-featured">
        <div className="bl-featured-media"><Image {...thumbnail} alt={thumbnail.alt} sizes="(max-width: 760px) 90vw, 560px" priority /></div>
        <div className="bl-featured-body">
          <div className="insight-meta"><span className="insight-chip">{categories[featured.category].name}</span><span>{featured.readingMinutes} Min. Lesezeit</span></div>
          <p className="kl-kicker">Empfohlener Einstieg</p>
          <h2>{featured.title}</h2>
          <p>{featured.intro}</p>
          <span className="bl-read">Artikel lesen<ArrowRight size={17} /></span>
        </div>
      </Link>
    </section>

    <section className="kl-wrap kl-block bl-library">
      <header className="kl-head"><h2>Alle Ratgeber</h2><p>Nach Softwarebereich sortiert. Jeder Artikel endet mit einer Fragenliste für das Anbietergespräch.</p></header>
      <GuideLibrary guides={guides} />
    </section>

    <section className="kl-wrap kl-block kl-narrow">
      <div className="kl-cta">
        <h2>Vom Wissen zur Entscheidung</h2>
        <p>Stellen Sie Programme direkt gegenüber – mit Preisen, belegten Funktionen und einer Quelle zu jeder Angabe.</p>
        <div className="kl-actions">
          <Link href="/vergleich" className="kl-btn kl-btn--brand">Software vergleichen<ArrowRight size={17} /></Link>
          <Link href="/empfehlung" className="kl-btn kl-btn--outline-light">Empfehlung erhalten</Link>
        </div>
      </div>
    </section>
  </main>;
}
