import Image from "@/components/fast-image";
import Link from "next/link";
import { ArrowRight, BadgeInfo, Compass, Euro, Flag, Globe, ListChecks, MessageSquareQuote, Scale, Search, ShieldCheck, Workflow } from "lucide-react";
import { AboutProcess, type ProcessStep } from "@/components/about-process";
import { CtaContent, ctaClass } from "@/components/cta";
import { categorySlugs, products } from "@/lib/catalog";
import { operator } from "@/data/operator";

export const metadata = { title: "Über Softwarebrief", description: "Softwarebrief hilft deutschen Unternehmen, Geschäftssoftware mit nachvollziehbaren Informationen auszuwählen.", alternates: { canonical: "/ueber-uns" } };

// Figures are derived from the catalogue so they can never drift from what the site actually contains.
const sourceCount = products.reduce((sum, p) => sum + p.sources.length, 0);
const stats = [
  { value: String(products.length), label: "recherchierte Produktprofile" },
  { value: String(categorySlugs.length), label: "Softwarebereiche für kleine und mittlere Betriebe" },
  { value: String(sourceCount), label: "verlinkte Herstellerquellen" },
];

const steps: ProcessStep[] = [
  { number: "01", title: "Bedarf verstehen", detail: "Aufgaben vor Funktionen", image: "/illustrations/principle-tasks.webp", tint: "#e3f4e7" },
  { number: "02", title: "Quellen prüfen", detail: "Nur Herstellerangaben mit Link", image: "/illustrations/principle-sources.webp", tint: "#e8eef6" },
  { number: "03", title: "Tarife einordnen", detail: "Preis immer mit Einheit", image: "/illustrations/principle-tariffs.webp", tint: "#f3efe3" },
  { number: "04", title: "Grenzen benennen", detail: "Was im Tarif fehlt", image: "/illustrations/methodology.webp", tint: "#eaf1ee" },
  { number: "05", title: "Nächste Schritte", detail: "Fragen für Ihre Demo", image: "/illustrations/recommendation.webp", tint: "#e6f2ea" },
];

const values = [
  { icon: ShieldCheck, title: "Nachvollziehbar statt laut", body: "Jede Aussage lässt sich über die verlinkte Herstellerquelle prüfen. Wo etwas unklar ist, sagen wir das offen." },
  { icon: Euro, title: "Preise im Zusammenhang", body: "Ein Betrag steht immer mit Einheit, Laufzeit und Bedingung. Aktionspreise behandeln wir nicht als Regelpreis." },
  { icon: BadgeInfo, title: "Werbung bleibt erkennbar", body: "Vergütete Anbieterlinks sind direkt am Link als Werbung gekennzeichnet. Die Reihenfolge ist keine bezahlte Platzierung." },
  { icon: MessageSquareQuote, title: "Belegt statt behauptet", body: "Der Softwarebrief Check zeigt auf jedem Profil, was sich aus Herstellerquellen belegen lässt. Erfahrungsberichte erscheinen nur bei echten Einreichungen." },
];

const topics = [
  { title: "Sachlichen Fehler melden", tags: ["Korrektur", "Mit Quelle"], href: "/kontakt" },
  { title: "Hinweis als Anbieter", tags: ["Produktdaten", "Tarifänderung"], href: "/kontakt" },
  { title: "Methodik nachlesen", tags: ["Transparenz", "Bewertungsgrundlage"], href: "/methodik" },
  { title: "Häufige Fragen", tags: ["FAQ"], href: "/faq" },
  { title: "Datenschutz", tags: ["Rechtliches"], href: "/datenschutz" },
];

const promises = [
  { icon: Globe, title: "Für Betriebe in Deutschland", body: "Preise in Euro, deutsche Herstellerseiten" },
  { icon: Search, title: "Quellen offen gelegt", body: "Jedes Profil mit Herstellerlinks" },
  { icon: Flag, title: "Stand sichtbar", body: "Quellenstand je Profil ausgewiesen" },
];

export default function AboutPage() {
  return <main className="about-page">
    <section className="shell about-hero">
      <span className="section-chip"><Compass size={15} strokeWidth={1.75} aria-hidden="true" />Über Softwarebrief</span>
      <h1>Wir machen Softwareentscheidungen ruhiger.</h1>
      <p>Softwarebrief ordnet Herstellerangaben, Tarife und Grenzen so, dass kleine und mittlere Betriebe ihre Auswahl neben dem Tagesgeschäft treffen können.</p>
      <Link className={ctaClass({ variant: "dark" })} href="/methodik"><CtaContent>Unsere Methodik</CtaContent></Link>
      <figure className="about-media">
        <Image src="/illustrations/germany-hero-panorama.webp" alt="Illustrierte Skyline deutscher Städte am Wasser" width={1600} height={900} sizes="(max-width: 1320px) 94vw, 1240px" priority />
        <figcaption><span />Redaktionelle Recherche · Quellenstand im jeweiligen Produktprofil</figcaption>
      </figure>
    </section>

    <section className="shell about-mission" aria-labelledby="mission-title">
      <div className="about-mission-intro">
        <span className="section-chip"><ListChecks size={15} strokeWidth={1.75} aria-hidden="true" />Unser Anspruch</span>
        <h2 id="mission-title">Eine kurze Notiz der Redaktion</h2>
        <p>Warum es Softwarebrief gibt und wie ein fairer Softwarevergleich aus unserer Sicht aussieht.</p>
        <dl className="about-stats">{stats.map((s) => <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}</dl>
      </div>
      <article className="about-note">
        <p>Softwarebrief ist aus einer einfachen Beobachtung entstanden: Wer in einem kleinen Betrieb Software auswählt, erledigt das neben der eigentlichen Arbeit. Die nötigen Informationen liegen verstreut auf Preisseiten, in Tariftabellen und Produktvideos, und sie passen selten zu der Frage, die heute beantwortet werden muss.</p>
        <p>Wir glauben, dass ein Vergleich nicht lauter, sondern klarer werden sollte. Nicht mehr Sterne und Ranglisten, sondern nachvollziehbare Antworten: Welche Aufgabe deckt ein Produkt ab, was steckt in welchem Tarif, wo liegen die Grenzen, und was sollten Sie in der Demo noch fragen?</p>
        <footer><span className="about-note-mark" aria-hidden="true"><span className="brand-mark" /></span><div><strong>Redaktion Softwarebrief</strong><small>Redaktionelle Einordnung · Stand September 2026</small></div><Link href="/methodik">Wie wir prüfen <ArrowRight size={16} /></Link></footer>
      </article>
    </section>

    <section className="about-process" aria-labelledby="process-title"><div className="shell">
      <div className="about-process-head"><span className="section-chip section-chip-dark"><Workflow size={15} strokeWidth={1.75} aria-hidden="true" />So arbeiten wir</span><h2 id="process-title">Vom Herstellerangebot zur klaren Einordnung</h2><p>Jedes Profil folgt demselben Aufbau: von der Aufgabe bis zu den Fragen für Ihre Demo.</p></div>
      <AboutProcess steps={steps} />
    </div></section>

    <section className="shell about-values" aria-labelledby="values-title">
      <div className="about-section-head"><span className="section-chip"><Scale size={15} strokeWidth={1.75} aria-hidden="true" />Unsere Grundsätze</span><h2 id="values-title">Woran Sie gute Einordnung erkennen</h2></div>
      <div className="values-bento">
        {values.map(({ icon: Icon, title, body }) => <article key={title}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></article>)}
        <aside className="values-cta"><Compass size={22} strokeWidth={1.5} aria-hidden="true" /><div><h3>Bereit für den Vergleich?</h3><p>Wählen Sie bis zu vier Produkte und sehen Sie Tarife, Grenzen und Quellen direkt nebeneinander.</p><Link className={ctaClass({ variant: "brand", block: true })} href="/vergleich"><CtaContent>Zum Vergleich</CtaContent></Link></div></aside>
      </div>
    </section>

    <section className="shell about-contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Mit uns in Kontakt</h2>
      <div className="contact-panel">
        <ul className="topic-list">{topics.map((t) => <li key={t.title}><Link href={t.href}><strong>{t.title}</strong><span className="topic-tags">{t.tags.map((tag) => <span key={tag}>{tag}</span>)}</span><ArrowRight size={18} aria-hidden="true" /></Link></li>)}</ul>
        <aside className="operator-card"><h3>Angaben zum Betreiber</h3><p>Softwarebrief wird von {operator.name} betrieben. Die vollständige Anschrift, Kontaktdaten und Angaben zur redaktionellen Verantwortung finden Sie im Impressum.</p><Link className={ctaClass({ variant: "light", block: true })} href="/impressum"><CtaContent>Impressum ansehen</CtaContent></Link></aside>
      </div>
      <ul className="promise-row">{promises.map(({ icon: Icon, title, body }) => <li key={title}><span><Icon size={18} strokeWidth={1.75} aria-hidden="true" /></span><div><strong>{title}</strong><small>{body}</small></div></li>)}</ul>
    </section>

    <section className="shell about-final"><div className="about-final-inner">
      <span className="about-final-mark" aria-hidden="true"><span className="brand-mark" /></span>
      <h2>Bereit für eine klare Entscheidung?</h2>
      <p>Beantworten Sie vier kurze Fragen und erhalten Sie passende Produkte mit nachvollziehbarer Begründung.</p>
      <div className="about-final-actions"><Link className={ctaClass({ variant: "brand" })} href="/empfehlung"><CtaContent>Empfehlung erhalten</CtaContent></Link><Link className={ctaClass({ variant: "light", className: "cta-on-dark" })} href="/kategorien"><CtaContent>Kategorien ansehen</CtaContent></Link></div>
      <div className="about-final-art"><Image src="/illustrations/hero-software-choice.webp" alt="" width={1100} height={733} sizes="(max-width: 760px) 90vw, 760px" /></div>
    </div></section>
  </main>;
}
