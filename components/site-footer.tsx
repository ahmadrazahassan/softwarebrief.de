import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "@/components/fast-image";
import { operator } from "@/data/operator";

export function SiteFooter() {
  const emailParts = operator.email?.split("@");

  return (
    <footer className="site-footer">
      <div className="shell footer-content">
        <div className="footer-grid">
          <div className="footer-identity">
            <Link href="/" className="footer-brand" aria-label="Softwarebrief Startseite">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="footer-brand-logo"
                src="/brand/softwarebrief-logo-web.png"
                width="720"
                height="121"
                alt="Softwarebrief"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="footer-description">Software verstehen.<br />Entscheidungen mit Augenmaß treffen.</p>
            <p className="footer-copyright">© 2026 Softwarebrief<br />Alle Rechte vorbehalten.</p>
          </div>

          <nav className="footer-column" aria-labelledby="footer-discover">
            <h2 id="footer-discover">Entdecken</h2>
            <Link href="/kategorien">Kategorien</Link>
            <Link href="/empfehlung">Empfehlung</Link>
            <Link href="/vergleich">Vergleich</Link>
            <Link href="/ratgeber">Ratgeber</Link>
            <Link href="/newsletter">Newsletter</Link>
          </nav>

          <nav className="footer-column" aria-labelledby="footer-editorial">
            <h2 id="footer-editorial">Softwarebrief</h2>
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/methodik">Unsere Methodik</Link>
            <Link href="/faq">Häufige Fragen</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>

          <div className="footer-column footer-contact">
            <h2>Im Gespräch bleiben</h2>
            {operator.email && (
              <a className="footer-mail" href={`mailto:${operator.email}`}>
                {emailParts?.[0]}@<wbr />{emailParts?.[1]}
              </a>
            )}
            <p>Fragen zur Softwareauswahl oder Hinweise zu unseren Inhalten?</p>
            <Link className="footer-contact-link" href="/kontakt">
              Schreiben Sie uns <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclosure">
            <strong>Affiliate-Hinweis.</strong> Bei einem Abschluss über einen als „Werbung“
            gekennzeichneten Anbieterlink können wir eine Provision erhalten.
            Es gelten die Preise und Bedingungen des Anbieters.
          </p>
          <nav className="footer-legal" aria-label="Rechtliche Informationen">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/methodik#affiliate-offenlegung">Affiliate-Offenlegung</Link>
          </nav>
        </div>
      </div>

      <div className="footer-panorama" aria-hidden="true">
        <Image
          className="footer-panorama-image"
          src="/illustrations/footer-frankfurt.webp"
          alt=""
          fill
          sizes="(max-width: 700px) 850px, 100vw"
          loading="lazy"
        />
      </div>
    </footer>
  );
}
