import Link from "next/link";
import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import type { GuideBlock, GuideFaq } from "@/data/guide-types";

/* Darstellung der Bausteine eines Ratgeberartikels. Rein serverseitig, ohne Zustand. */

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/** Text mit **fett** und [Linktext](/pfad oder https://adresse). Interne Pfade werden zu Next Links, fremde Adressen öffnen in neuem Tab. */
export function Inline({ text }: { text: string }) {
  return <>{text.split(TOKEN).filter(Boolean).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!link) return part;
    const [, label, href] = link;
    if (href.startsWith("/") || href.startsWith("#")) return <Link key={i} href={href}>{label}</Link>;
    return <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}<span className="bl-sr"> (öffnet in neuem Tab)</span></a>;
  })}</>;
}

/** Klartext ohne Auszeichnung, zum Beispiel für strukturierte Daten. */
export const plain = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

const calloutIcon = { tipp: Lightbulb, achtung: TriangleAlert, fakt: Info } as const;
const calloutLabel = { tipp: "Tipp", achtung: "Achtung", fakt: "Gut zu wissen" } as const;

export function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return <>{blocks.map((block, i) => {
    switch (block.t) {
      case "p": return <p key={i}><Inline text={block.text} /></p>;
      case "h3": return <h3 key={i}>{block.text}</h3>;
      case "ul": return <ul key={i} className="bl-list">{block.items.map((item) => <li key={item}><Inline text={item} /></li>)}</ul>;
      case "ol": return <ol key={i} className="bl-list bl-list--ordered">{block.items.map((item) => <li key={item}><Inline text={item} /></li>)}</ol>;
      case "table": return (
        <figure key={i} className="bl-table">
          <p className="bl-table-title" aria-hidden="true">{block.caption}</p>
          <div className="bl-table-scroll">
            <table>
              <caption className="bl-sr">{block.caption}</caption>
              <thead><tr>{block.head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
              <tbody>{block.rows.map((row) => <tr key={row.join("|")}>{row.map((cell, c) => c === 0 ? <th key={c} scope="row"><Inline text={cell} /></th> : <td key={c} data-label={block.head[c]}><Inline text={cell} /></td>)}</tr>)}</tbody>
            </table>
          </div>
          {block.note && <figcaption><Inline text={block.note} /></figcaption>}
        </figure>
      );
      case "callout": {
        const Icon = calloutIcon[block.tone];
        return (
          <aside key={i} className={`bl-callout is-${block.tone}`}>
            <Icon size={20} aria-hidden="true" />
            <div><p className="bl-callout-title"><span className="bl-sr">{calloutLabel[block.tone]}: </span>{block.title}</p><p><Inline text={block.text} /></p></div>
          </aside>
        );
      }
    }
  })}</>;
}

/** Häufige Fragen als aufklappbare Liste. Die Antworten stehen im HTML, auch wenn sie zugeklappt sind. */
export function GuideFaqList({ items }: { items: GuideFaq[] }) {
  return (
    <div className="bl-faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary><span>{item.q}</span><span className="bl-faq-plus" aria-hidden="true">+</span></summary>
          <p><Inline text={item.a} /></p>
        </details>
      ))}
    </div>
  );
}
