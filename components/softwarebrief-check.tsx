import Link from "next/link";
import { ArrowRight, Check, Info, Minus } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { softwarebriefCheck } from "@/lib/softwarebrief-check";

const ARC = Math.PI * 52;

/** Halbkreis Anzeige: Der Bogen füllt sich im Verhältnis von belegten zu möglichen Punkten. */
function Gauge({ part, total, label }: { part: number; total: number; label: string }) {
  const share = total ? part / total : 0;
  return (
    <div className="kc-gauge" role="img" aria-label={`${label}: ${part} von ${total}`}>
      <svg viewBox="0 0 132 66" aria-hidden="true">
        <path className="kc-track" d="M 14 59 A 52 52 0 0 1 118 59" />
        {share > 0 && <path className="kc-arc" d="M 14 59 A 52 52 0 0 1 118 59" strokeDasharray={ARC.toFixed(2)} strokeDashoffset={(ARC * (1 - share)).toFixed(2)} />}
      </svg>
      <span className="kc-value" aria-hidden="true"><b>{part}</b><small>/ {total}</small></span>
    </div>
  );
}

const Chip = ({ tone, children }: { tone: "full" | "part" | "none"; children: React.ReactNode }) => <em className={`kc-chip is-${tone}`}>{children}</em>;

/**
 * Der Softwarebrief Check: vier nachprüfbare Punkte aus den Herstellerquellen. Er vergibt keine Note und ist kein Test.
 * Die Zahlen kommen aus denselben Daten wie die Preisübersicht und die Funktionsmatrix.
 */
export function SoftwarebriefCheck({ product }: { product: Product }) {
  const { prices, features, entry, sources } = softwarebriefCheck(product);
  const featureTone = features.covered === features.total ? "full" : features.covered === 0 ? "none" : "part";
  const priceChip = { complete: ["full", "Vollständig"], partial: ["part", "Teilweise"], none: ["none", "Auf Anfrage"] } as const;
  const entryChip = { free: ["full", "Kostenlos starten"], price: ["full", "Öffentlicher Preis"], quote: ["none", "Auf Anfrage"] } as const;
  const [priceTone, priceText] = priceChip[prices.status];
  const [entryTone, entryText] = entryChip[entry.kind];

  return (
    <section className="kc-band" id="softwarebrief-check" aria-labelledby="kc-title">
      <div className="shell kc">
        <div className="kc-head">
          <div>
            <p className="eyebrow">SOFTWAREBRIEF CHECK</p>
            <h2 id="kc-title">{product.name} in vier Prüfpunkten.</h2>
          </div>
          <p>Was sich aus den Herstellerquellen belegen lässt. Ohne Note und ohne Testversprechen, jede Zahl lässt sich unten bei den Quellen nachprüfen.</p>
        </div>

        <div className="kc-grid">
          <article className="kc-card">
            <h3>Preise öffentlich</h3>
            <Gauge part={prices.published} total={prices.total} label="Tarife mit Europreis" />
            <p>Tarife mit Europreis</p>
            <Chip tone={priceTone}>{priceText}</Chip>
          </article>

          <article className="kc-card">
            <h3>Kernfunktionen belegt</h3>
            <Gauge part={features.covered} total={features.total} label="Belegte Kernfunktionen" />
            <ul className="kc-list">
              {features.items.map((item) => (
                <li key={item.key} className={item.ok ? "is-ok" : undefined}>
                  {item.ok ? <Check size={15} strokeWidth={2.5} aria-hidden="true" /> : <Minus size={15} strokeWidth={2} aria-hidden="true" />}
                  <span>{item.label}<span className="kc-sr">{item.ok ? ", belegt" : ", nicht belegt"}</span></span>
                </li>
              ))}
            </ul>
            <p className="kc-hint">Ein Strich heißt: in den Herstellerquellen nicht belegt. Das bedeutet nicht, dass die Funktion fehlt.</p>
            <Chip tone={featureTone}>{features.covered === features.total ? "Vollständig belegt" : features.covered === 0 ? "Nicht belegt" : "Teilweise belegt"}</Chip>
          </article>

          <article className="kc-card">
            <h3>Einstieg</h3>
            <p className="kc-big" data-kind={entry.kind}>{entry.value}</p>
            <p>{entry.hint}</p>
            <Chip tone={entryTone}>{entryText}</Chip>
          </article>

          <article className="kc-card">
            <h3>Quellen geprüft</h3>
            <p className="kc-big">{sources.count}</p>
            <p>{sources.count === 1 ? "Herstellerseite" : "Herstellerseiten"}</p>
            <Chip tone="full">{sources.checked ? `Stand ${sources.checked}` : "Geprüft"}</Chip>
          </article>
        </div>

        <div className="kc-foot">
          <div className="kc-note"><Info size={18} aria-hidden="true" /><p>Der Check zeigt, was Softwarebrief belegen kann. Er ist keine Note und kein Produkttest. „Auf Anfrage“ sagt etwas über die Preisangabe, nicht über die Qualität eines Programms.</p></div>
          <Link href="/methodik#softwarebrief-check">So prüfen wir <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
