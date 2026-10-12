import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";
import { newsletter } from "@/data/newsletter";

/** Abschnitt am Ende der Startseite. */
export function NewsletterSection() {
  const copy = newsletter.home;
  return (
    <section className="shell nl-scope nl-home" aria-labelledby="newsletter-home-title">
      <div className="nl-home-card">
        <div className="nl-home-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="newsletter-home-title">{copy.title}</h2>
          <p>{copy.text}</p>
          <ul>{copy.points.map((point) => <li key={point}><Check size={17} strokeWidth={2.25} aria-hidden="true" />{point}</li>)}</ul>
          <Link href={newsletter.path} className="nl-textlink">{copy.linkLabel}<ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="nl-home-form">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}

/** Karte am Ende eines Ratgeberartikels. */
export function NewsletterArticleCard() {
  const copy = newsletter.article;
  return (
    <aside className="nl-scope nl-article" aria-labelledby="newsletter-article-title">
      <p className="kl-kicker">{copy.kicker}</p>
      <h2 id="newsletter-article-title">{copy.title}</h2>
      <p>{copy.text}</p>
      <NewsletterForm variant="inline" />
      <Link href={newsletter.path} className="nl-textlink">{copy.linkLabel}<ArrowRight size={16} aria-hidden="true" /></Link>
    </aside>
  );
}
