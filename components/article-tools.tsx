"use client";
import { useEffect, useState } from "react";
import { Check, Link2 } from "lucide-react";

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ReadingProgress({ target }: { target: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(target);
    if (!el) return;
    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const total = height - window.innerHeight * 0.6;
      setProgress(Math.min(1, Math.max(0, -top / Math.max(total, 1))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [target]);
  return <div className="bl-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>;
}

/** Highlights the table-of-contents entry for the section in view. */
export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);
  return <nav className="bl-toc" aria-label="Inhalt">
    <p>Inhalt</p>
    <ol>{items.map((i) => <li key={i.id}><a href={`#${i.id}`} className={active === i.id ? "is-active" : undefined}>{i.label}</a></li>)}</ol>
  </nav>;
}

export function CopyLink() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* clipboard unavailable */ }
  }
  return <button type="button" className="kl-btn kl-btn--ghost kl-btn--sm" onClick={copy}>{copied ? <Check size={16} /> : <Link2 size={16} />}{copied ? "Link kopiert" : "Link kopieren"}</button>;
}
