import Link from "next/link";
import { ChevronRight, MailCheck } from "lucide-react";
import { CtaContent, ctaClass } from "@/components/cta";
import { newsletter } from "@/data/newsletter";
import { verifyConfirmationToken } from "@/lib/newsletter";
import { newsletterEnv } from "@/lib/newsletter-env";

export const dynamic = "force-dynamic";
export const metadata = { title: "Newsletter Anmeldung bestätigen | Softwarebrief", robots: { index: false, follow: false }, referrer: "no-referrer" };

export default async function NewsletterConfirmedPage({ searchParams }: { searchParams: Promise<{ token?: string; status?: string }> }) {
  const { token, status } = await searchParams;
  const claims = token ? await verifyConfirmationToken(token, newsletterEnv().NEWSLETTER_TOKEN_SECRET ?? "") : null;
  const confirmed = status === "ok";
  const pending = Boolean(claims);
  const title = confirmed ? newsletter.confirmed.title : pending ? "Bitte bestätigen Sie Ihre Anmeldung." : "Ihre Anmeldung ist noch nicht bestätigt.";
  const text = confirmed ? newsletter.confirmed.text : pending ? "Ein Klick auf den Button bestätigt Ihre Einwilligung zum monatlichen Softwarebrief. Erst danach nehmen wir Sie in die Newsletterliste auf." : status === "unavailable" ? "Die Anmeldung ist gerade nicht verfügbar. Bitte versuchen Sie es später erneut." : status === "error" || status === "rate-limited" ? "Die Bestätigung konnte nicht gespeichert werden. Öffnen Sie den Link aus Ihrer E-Mail und versuchen Sie es später erneut." : "Öffnen Sie den Bestätigungslink aus Ihrer E-Mail. Ist er ungültig oder älter als 48 Stunden, melden Sie sich erneut an.";
  return <main className="kl nl-scope"><section className="kl-wrap kl-hero">
    <nav className="kl-crumbs" aria-label="Brotkrumen"><Link href="/">Startseite</Link><ChevronRight size={13} /><Link href={newsletter.path}>Newsletter</Link><ChevronRight size={13} /><span>Bestätigung</span></nav>
    <span className="section-chip"><MailCheck size={15} strokeWidth={1.75} aria-hidden="true" />Newsletter</span>
    <h1>{title}</h1><p className="kl-lead">{text}</p>
    {pending && <form action="/api/newsletter/bestaetigung" method="post"><input type="hidden" name="token" value={token} /><button className={ctaClass({ variant: "dark" })} type="submit"><CtaContent>Anmeldung bestätigen</CtaContent></button></form>}
    <div className="kl-actions"><Link className={ctaClass({ variant: "light" })} href={confirmed ? "/ratgeber" : "/newsletter#anmeldung"}><CtaContent>{confirmed ? "Ratgeber lesen" : "Zur Anmeldung"}</CtaContent></Link><Link className={ctaClass({ variant: "light" })} href="/"><CtaContent>Zur Startseite</CtaContent></Link></div>
  </section></main>;
}
