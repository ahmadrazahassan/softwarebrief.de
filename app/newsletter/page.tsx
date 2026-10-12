import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Mail } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";
import { newsletter } from "@/data/newsletter";
import { sampleIssue } from "@/data/newsletter-sample";

export const metadata = { title: newsletter.meta.title, description: newsletter.meta.description, alternates: { canonical: newsletter.path } };

export default function NewsletterPage() {
  const { hero, rubrics, roles, principles, steps, privacy, faq, closing } = newsletter;
  /* Ein Auszug je Rubrik, in derselben Reihenfolge wie rubrics.items. */
  const excerpts = [
    <Link key="topic" href={sampleIssue.topic.href} className="nl-excerpt-link">{sampleIssue.topic.title}<ArrowRight size={15} aria-hidden="true" /></Link>,
    <p key="tariff">{sampleIssue.tariff}</p>,
    <ul key="questions">{sampleIssue.questions.map((q) => <li key={q}>{q}</li>)}</ul>,
    <Link key="comparison" href={sampleIssue.comparison.href} className="nl-excerpt-link">{sampleIssue.comparison.title}<ArrowRight size={15} aria-hidden="true" /></Link>,
  ];

  return (
    <main className="kl nl nl-scope">
      <section className="kl-wrap nl-hero">
        <div className="nl-hero-copy">
          <nav className="kl-crumbs" aria-label="Brotkrumen"><Link href="/">Startseite</Link><ChevronRight size={13} /><span>Newsletter</span></nav>
          <span className="section-chip"><Mail size={15} strokeWidth={1.75} aria-hidden="true" />{hero.chip}</span>
          <h1>{hero.titleLead} <span>{hero.titleAccent}</span></h1>
          <p className="kl-lead">{hero.lead}</p>
          <ul className="nl-benefits">{hero.benefits.map((b) => <li key={b}><Check size={18} strokeWidth={2.25} aria-hidden="true" />{b}</li>)}</ul>
        </div>

        <div className="nl-hero-form" id="anmeldung">
          <h2>{hero.formTitle}</h2>
          <ul className="nl-facts">{hero.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          <NewsletterForm />
        </div>
      </section>

      <section className="kl-wrap kl-block" aria-labelledby="nl-rubrics-title">
        <header className="kl-head"><span className="section-chip">{rubrics.chip}</span><h2 id="nl-rubrics-title">{rubrics.title}</h2><p>{rubrics.text}</p></header>
        <div className="nl-issue">
          <figure className="nl-mail">
            <div className="nl-mail-card">
              <div className="nl-mail-bar"><span className="nl-mail-brand">Softwarebrief<span>.</span></span><span className="nl-mail-tag">{sampleIssue.tag}</span></div>
              <div className="nl-mail-body">
                <p className="kl-kicker">{rubrics.items[0].number} {rubrics.items[0].title}</p>
                <p className="nl-mail-title">{sampleIssue.topic.title}</p>
                <p>{sampleIssue.topic.teaser}</p>
                <ol>{sampleIssue.topic.points.map((point) => <li key={point}>{point}</li>)}</ol>
                <Link href={sampleIssue.topic.href} className="nl-textlink">{sampleIssue.topic.cta}<ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
              <div className="nl-mail-foot">
                <p className="kl-kicker">Außerdem in dieser Ausgabe</p>
                <ul>{rubrics.items.slice(1).map((item) => <li key={item.number}><span>{item.number}</span>{item.title}</li>)}</ul>
              </div>
            </div>
            <figcaption>{sampleIssue.caption}</figcaption>
          </figure>

          <div className="nl-rubrics">
            {rubrics.items.map((item, i) => (
              <article className="nl-rubric" key={item.number}>
                <span className="nl-num">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="nl-excerpt"><p className="kl-kicker">{rubrics.excerptLabel}</p>{excerpts[i]}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kl-wrap kl-block" aria-labelledby="nl-roles-title">
        <header className="kl-head"><span className="section-chip">{roles.chip}</span><h2 id="nl-roles-title">{roles.title}</h2><p>{roles.text}</p></header>
        <dl className="nl-roles">{roles.items.map((item) => <div key={item.role}><dt>{item.role}</dt><dd>{item.text}</dd></div>)}</dl>
      </section>

      <section className="kl-wrap kl-block" aria-labelledby="nl-principles-title">
        <div className="nl-principles">
          <header><span className="section-chip">{principles.chip}</span><h2 id="nl-principles-title">{principles.title}</h2><Link href={principles.linkHref} className="nl-textlink">{principles.linkLabel}<ArrowRight size={16} aria-hidden="true" /></Link></header>
          <ul>{principles.items.map((item) => <li key={item.title}><Check size={20} strokeWidth={2.25} aria-hidden="true" /><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ul>
        </div>
      </section>

      <section className="kl-wrap kl-block" aria-labelledby="nl-steps-title">
        <header className="kl-head"><span className="section-chip">{steps.chip}</span><h2 id="nl-steps-title">{steps.title}</h2></header>
        <ol className="nl-steps">{steps.items.map((item) => <li key={item.number}><span className="nl-num">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
      </section>

      <section className="kl-wrap kl-block nl-privacy" id={privacy.id} aria-labelledby="nl-privacy-title">
        <header><span className="section-chip">{privacy.chip}</span><h2 id="nl-privacy-title">{privacy.title}</h2><p>{privacy.text}</p><Link href={privacy.linkHref} className="nl-textlink">{privacy.linkLabel}<ArrowRight size={16} aria-hidden="true" /></Link></header>
        <dl>{privacy.items.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.text}</dd></div>)}</dl>
      </section>

      <section className="kl-wrap home-faq" aria-labelledby="nl-faq-title">
        <div><p className="eyebrow">{faq.eyebrow}</p><h2 id="nl-faq-title">{faq.title}</h2><Link href={faq.linkHref}>{faq.linkLabel}<ArrowRight size={16} /></Link></div>
        <div>{faq.items.map((item) => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div>
      </section>

      <section className="kl-wrap">
        <div className="kl-cta nl-cta">
          <h2>{closing.title}</h2>
          <p>{closing.text}</p>
          <div className="nl-cta-form"><NewsletterForm tone="dark" /></div>
        </div>
      </section>
    </main>
  );
}
