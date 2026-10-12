"use client";

import { useEffect, useRef, useState } from "react";
import Image from "@/components/fast-image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type ProcessStep = { number: string; title: string; detail: string; image: string; tint: string };

/** Horizontal scroll-snap track with arrow controls and a progress indicator. */
export function AboutProcess({ steps }: { steps: ProcessStep[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 1);
      setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>(".process-card");
    if (!el || !card) return;
    el.scrollBy({ left: direction * (card.offsetWidth + 14), behavior: "smooth" });
  };

  return <>
    <div className="process-track" ref={track} role="list" tabIndex={0} aria-label="Arbeitsschritte der Redaktion">
      {steps.map((step) => <article className="process-card" role="listitem" key={step.number} style={{ "--tint": step.tint } as React.CSSProperties}>
        <Image src={step.image} alt="" width={768} height={768} sizes="(max-width: 700px) 78vw, 300px" />
        <div className="process-label"><span>{step.number}</span><strong>{step.title}</strong><small>{step.detail}</small></div>
      </article>)}
    </div>
    <div className="process-controls">
      <div>
        <button type="button" onClick={() => scrollBy(-1)} disabled={edges.start} aria-label="Vorheriger Schritt"><ArrowLeft size={18} /></button>
        <button type="button" onClick={() => scrollBy(1)} disabled={edges.end} aria-label="Nächster Schritt"><ArrowRight size={18} /></button>
      </div>
      <span className="process-progress" aria-hidden="true"><i style={{ width: `${Math.max(12, progress * 100)}%` }} /></span>
    </div>
  </>;
}
