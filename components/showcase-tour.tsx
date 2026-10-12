"use client";

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { MediaImage } from "@/data/vendor-media";
import { CloudImage } from "@/components/cloud-image";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Showroom für Screenshots: großes Browserfenster, darunter eine Tour Leiste mit allen Ansichten.
 * Bedienung per Maus, Touch (Wischen), Tastatur (Pfeile, Pos1, Ende) und Vollbild mit Esc.
 */
export function ShowcaseTour({ images, name }: { images: MediaImage[]; name: string }) {
  const uid = useId();
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const total = images.length;
  const current = images[index];

  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const rail = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);

  const step = (to: number) => (to + total) % total;
  const go = (to: number, focusTab = false) => {
    const next = step(to);
    setIndex(next);
    if (focusTab) tabs.current[next]?.focus();
  };

  /* Die aktive Ansicht in der Leiste mittig halten, ohne die Seite selbst zu bewegen. */
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    const tab = tabs.current[index];
    const strip = rail.current;
    if (!tab || !strip) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    strip.scrollTo({ left: tab.offsetLeft - (strip.clientWidth - tab.clientWidth) / 2, behavior: reduce ? "auto" : "smooth" });
  }, [index]);

  /* Vollbild über das native dialog Element: Fokusfalle, Esc und Hintergrund sind eingebaut. */
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (zoomed && !el.open) el.showModal();
    if (!zoomed && el.open) el.close();
  }, [zoomed]);

  function onArrowKeys(event: React.KeyboardEvent) {
    const moves: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: total - 1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    go(moves[event.key], true);
  }

  const swipe = {
    onPointerDown: (e: React.PointerEvent) => { if (e.pointerType === "touch") touchStart.current = e.clientX; },
    onPointerUp: (e: React.PointerEvent) => {
      if (touchStart.current === null) return;
      const dx = e.clientX - touchStart.current;
      touchStart.current = null;
      if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
    },
  };

  return (
    <div className="vs-tour">
      <div className="vs-window" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${index}`}>
        <div className="vs-chrome">
          <span className="vs-dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="vs-address"><span>{name}</span><b aria-hidden="true">/</b><span>{current.title}</span></span>
          <button type="button" className="vs-expand" onClick={() => setZoomed(true)} aria-label="Ansicht im Vollbild öffnen">
            <Maximize2 size={16} aria-hidden="true" /><span>Vergrößern</span>
          </button>
        </div>

        <div className="vs-screen" {...swipe}>
          <CloudImage key={current.id} id={current.id} width={current.width} height={current.height} widths={[800, 1200, 1800, 2400]} sizes="(max-width: 1100px) 100vw, 1100px" alt={current.alt} className="vs-img" />
          {total > 1 && <>
            <button type="button" className="vs-arrow vs-arrow--prev" onClick={() => go(index - 1)} aria-label="Vorherige Ansicht"><ChevronLeft size={24} aria-hidden="true" /></button>
            <button type="button" className="vs-arrow vs-arrow--next" onClick={() => go(index + 1)} aria-label="Nächste Ansicht"><ChevronRight size={24} aria-hidden="true" /></button>
          </>}
        </div>

        <div className="vs-caption" aria-live="polite">
          <span className="vs-count">{pad(index + 1)}<small> / {pad(total)}</small></span>
          <div><strong>{current.title}</strong><p>{current.caption}</p></div>
        </div>
      </div>

      {total > 1 && (
        <div className="vs-rail" ref={rail} role="tablist" aria-label={`Ansichten von ${name}`} onKeyDown={onArrowKeys}>
          {images.map((image, i) => (
            <button
              key={image.id}
              ref={(el) => { tabs.current[i] = el; }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={i === index}
              aria-controls={`${uid}-panel`}
              tabIndex={i === index ? 0 : -1}
              className="vs-step"
              onClick={() => setIndex(i)}
            >
              <span className="vs-thumb"><CloudImage id={image.id} width={image.width} height={image.height} widths={[360, 540, 720]} sizes="176px" alt="" /></span>
              <span className="vs-step-label"><small>{pad(i + 1)}</small><span>{image.title}</span></span>
            </button>
          ))}
        </div>
      )}

      <dialog ref={dialog} className="vs-lightbox" aria-label={`${name}: ${current.title}`} onClose={() => setZoomed(false)} onClick={(e) => { if (e.target === dialog.current) setZoomed(false); }} onKeyDown={(e) => { if (e.key === "ArrowRight") go(index + 1); if (e.key === "ArrowLeft") go(index - 1); }}>
        {zoomed && <>
          <div className="vs-lb-bar">
            <span>{name} · {current.title} · {pad(index + 1)} von {pad(total)}</span>
            <button type="button" onClick={() => setZoomed(false)} aria-label="Vollbild schließen"><X size={20} aria-hidden="true" /></button>
          </div>
          <div className="vs-lb-body">
            {total > 1 && <button type="button" className="vs-arrow" onClick={() => go(index - 1)} aria-label="Vorherige Ansicht"><ChevronLeft size={24} aria-hidden="true" /></button>}
            <CloudImage key={current.id} id={current.id} width={current.width} height={current.height} widths={[1400, 2000, 2800]} sizes="96vw" alt={current.alt} priority />
            {total > 1 && <button type="button" className="vs-arrow" onClick={() => go(index + 1)} aria-label="Nächste Ansicht"><ChevronRight size={24} aria-hidden="true" /></button>}
          </div>
          <p className="vs-lb-caption">{current.caption}</p>
        </>}
      </dialog>
    </div>
  );
}
