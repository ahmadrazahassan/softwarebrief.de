import Link from "next/link";
import { operator } from "@/data/operator";
import { OperatorAddress, OperatorContact } from "@/components/operator-contact";

export const metadata = { title: "Impressum | Softwarebrief", alternates: { canonical: "/impressum" } };

export default function ImprintPage() {
  return <main>
    <section className="page-hero shell"><p className="eyebrow">RECHTLICHES</p><h1>Impressum</h1><p>Angaben nach § 5 Digitale Dienste Gesetz und § 18 Medienstaatsvertrag.</p></section>
    <div className="shell editorial-page legal">
      <section aria-labelledby="anbieter"><h2 id="anbieter">Anbieter</h2><OperatorAddress /></section>

      <section aria-labelledby="kontakt"><h2 id="kontakt">Kontakt</h2><OperatorContact />
        <p>Hinweise und Korrekturen zu einzelnen Angaben senden Sie uns über die <Link href="/kontakt">Kontaktseite</Link>.</p>
      </section>

      {operator.vatId && <section aria-labelledby="ust"><h2 id="ust">Umsatzsteuer</h2><p>Umsatzsteuer Identifikationsnummer nach § 27a Umsatzsteuergesetz: {operator.vatId}</p></section>}

      <section aria-labelledby="inhalt"><h2 id="inhalt">Verantwortlich für den Inhalt</h2><p>Verantwortlich im Sinne von § 18 Absatz 2 Medienstaatsvertrag:</p><OperatorAddress /></section>

      <section aria-labelledby="redaktion"><h2 id="redaktion">Redaktionelle Arbeit und Werbung</h2>
        <p>Softwarebrief ordnet öffentlich zugängliche Herstellerangaben ein. Wie wir recherchieren, steht in unserer <Link href="/methodik">Methodik</Link>. Unsere Einordnungen sind keine eigenen Produkttests. Links zu Herstellern führen zur offiziellen Herstellerseite. Ist für einen Link eine Vergütung möglich, kennzeichnen wir ihn als Werbung.</p>
      </section>

      <section aria-labelledby="haftung"><h2 id="haftung">Haftung für Inhalte</h2>
        <p>Wir erstellen die Inhalte mit Sorgfalt und nennen zu jeder Angabe die Quelle. Preise, Tarife und Funktionen können sich beim Hersteller ändern. Maßgeblich ist immer das aktuelle Angebot des Herstellers. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir deshalb keine Gewähr übernehmen. Auf berechtigte Hinweise auf sachliche Fehler reagieren wir und korrigieren die Angabe, wenn die Herstellerquelle sie widerlegt.</p>
      </section>

      <section aria-labelledby="links"><h2 id="links">Haftung für Links</h2>
        <p>Unsere Seiten verlinken auf Angebote Dritter, vor allem auf Herstellerseiten. Für deren Inhalte sind ausschließlich die jeweiligen Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Werden uns solche bekannt, entfernen wir den Link.</p>
      </section>

      <section aria-labelledby="marken"><h2 id="marken">Marken, Logos und Herstellermaterial</h2>
        <p>Produktnamen, Firmenzeichen und Logos gehören ihren Inhabern. Wir zeigen sie, damit Sie die Programme erkennen. Die Darstellung eines Logos allein begründet keine Partnerschaft. Bestehende Affiliate Partnerschaften nennen wir in der <Link href="/methodik#affiliate-offenlegung">Affiliate Offenlegung</Link>. Abbildungen, Videos und Broschüren von Herstellern sind als solche gekennzeichnet. Die Rechte daran liegen bei den jeweiligen Herstellern.</p>
        <p>Für Produktansichten, Videos und Unterlagen von Sage verweisen wir auf die offiziellen Sage Seiten. Sage und die Sage Produktnamen sind Marken ihrer jeweiligen Rechteinhaber. Der Quellenverweis begründet keine Affiliate Partnerschaft oder Freigabe durch Sage.</p>
      </section>

      <section aria-labelledby="urheber"><h2 id="urheber">Urheberrecht</h2>
        <p>Die von Softwarebrief erstellten Texte, Tabellen und Grafiken unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf unserer schriftlichen Zustimmung.</p>
      </section>
    </div>
  </main>;
}
