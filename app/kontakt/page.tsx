import Link from "next/link";
import { OperatorAddress, OperatorContact } from "@/components/operator-contact";

export const metadata = { title: "Kontakt | Softwarebrief", description: "Hinweise und Korrekturen zu Softwarebrief.", alternates: { canonical: "/kontakt" } };

export default function ContactPage() {
  return <main>
    <section className="page-hero shell"><p className="eyebrow">KONTAKT</p><h1>Ein Hinweis kann den Vergleich besser machen.</h1><p>Haben Sie eine veraltete Preisangabe oder eine sachliche Unstimmigkeit entdeckt? Wir prüfen Hinweise anhand der Herstellerquelle.</p></section>
    <div className="shell editorial-page legal">
      <section aria-labelledby="erreichbar"><h2 id="erreichbar">So erreichen Sie uns</h2>
        <OperatorContact />
        <p>Schriftlich erreichen Sie uns unter dieser Anschrift:</p>
        <OperatorAddress />
      </section>

      <section aria-labelledby="hinweis"><h2 id="hinweis">Was uns bei einem Hinweis hilft</h2>
        <ul className="legal-list">
          <li>Die Adresse der Seite, auf der Ihnen etwas aufgefallen ist.</li>
          <li>Die Angabe, die Sie für falsch oder veraltet halten.</li>
          <li>Eine Quelle, am besten die Seite des Herstellers, die etwas anderes sagt.</li>
        </ul>
        <p>Wir prüfen den Hinweis anhand der Herstellerquelle und passen die Angabe an, wenn sie sich bestätigt. Wie wir arbeiten, steht in der <Link href="/methodik">Methodik</Link>. Eine Beratung zu Ihrer Softwareauswahl bieten wir nicht an. Hilfe bei der Entscheidung gibt der <Link href="/empfehlung">Empfehlungsweg</Link>.</p>
      </section>

      <section aria-labelledby="daten"><h2 id="daten">Was mit Ihren Angaben geschieht</h2>
        <p>Wir nutzen Ihre Angaben, um Ihren Hinweis zu bearbeiten und zu beantworten. Mehr dazu steht in der <Link href="/datenschutz">Datenschutzerklärung</Link>.</p>
      </section>
    </div>
  </main>;
}
