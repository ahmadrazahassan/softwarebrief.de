import Link from "next/link";
import { ChevronRight, MailCheck } from "lucide-react";
import { CtaContent, ctaClass } from "@/components/cta";
import { newsletter } from "@/data/newsletter";

const copy = newsletter.confirmed;

/* Zielseite nach dem Klick auf den Bestätigungslink im E-Mail Dienst. Nicht für Suchmaschinen gedacht. */
export const metadata = { title: `${copy.title} | Softwarebrief`, robots: { index: false, follow: false } };

export default function NewsletterConfirmedPage() {
  return (
    <main className="kl nl-scope">
      <section className="kl-wrap kl-hero">
        <nav className="kl-crumbs" aria-label="Brotkrumen"><Link href="/">Startseite</Link><ChevronRight size={13} /><Link href={newsletter.path}>Newsletter</Link><ChevronRight size={13} /><span>Bestätigt</span></nav>
        <span className="section-chip"><MailCheck size={15} strokeWidth={1.75} aria-hidden="true" />{copy.chip}</span>
        <h1>{copy.title}</h1>
        <p className="kl-lead">{copy.text}</p>
        <div className="kl-actions">
          <Link className={ctaClass({ variant: "dark" })} href={copy.primary.href}><CtaContent>{copy.primary.label}</CtaContent></Link>
          <Link className={ctaClass({ variant: "light" })} href={copy.secondary.href}><CtaContent>{copy.secondary.label}</CtaContent></Link>
        </div>
      </section>
    </main>
  );
}
