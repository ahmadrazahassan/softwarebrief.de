"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, Download, FileText, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CtaContent, ctaClass } from "@/components/cta";
import type { MediaDocument } from "@/data/vendor-media";
import { pdfCover, pdfFromCloudinary, pdfPage, pdfUrl } from "@/lib/cloudinary";

const fmtMb = (mb: number) => mb.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const fileUrl = (doc: MediaDocument) => (pdfFromCloudinary ? pdfUrl(doc.id) : doc.fallback);
const fileName = (doc: MediaDocument) => `${doc.title.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.pdf`;

/**
 * PDF Karten mit Titelblatt und einem Leser direkt auf der Seite. Der Leser zeigt die Seiten als Bilder aus
 * Cloudinary, mit Seitenleiste, Pfeilen und Tastatur. Die PDF Datei selbst lässt sich herunterladen.
 */
export function PdfLibrary({ docs }: { docs: MediaDocument[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const dialog = useRef<HTMLDialogElement>(null);
  const strip = useRef<HTMLOListElement>(null);
  const doc = docs.find((d) => d.id === openId) ?? null;

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (doc && !el.open) el.showModal();
    if (!doc && el.open) el.close();
  }, [doc]);

  /* Nächste und vorherige Seite schon laden, damit das Blättern ohne Wartezeit klappt. */
  useEffect(() => {
    if (!doc) return;
    for (const n of [page + 1, page - 1]) if (n >= 1 && n <= doc.pages) new window.Image().src = pdfPage(doc.id, n);
  }, [doc, page]);

  /* Die aktuelle Seite in der Seitenleiste sichtbar halten, ohne die Seite dahinter zu bewegen. */
  useEffect(() => {
    const list = strip.current;
    const item = list?.children[page - 1] as HTMLElement | undefined;
    if (!list || !item) return;
    const vertical = list.scrollHeight > list.clientHeight + 4 && getComputedStyle(list).flexDirection === "column";
    if (vertical) list.scrollTo({ top: item.offsetTop - (list.clientHeight - item.clientHeight) / 2 });
    else list.scrollTo({ left: item.offsetLeft - (list.clientWidth - item.clientWidth) / 2 });
  }, [page, doc]);

  const goto = (n: number) => doc && setPage(Math.min(doc.pages, Math.max(1, n)));
  const close = () => setOpenId(null);

  function onKeyDown(event: React.KeyboardEvent) {
    if (!doc) return;
    const keys: Record<string, number> = { ArrowRight: page + 1, ArrowDown: page + 1, PageDown: page + 1, ArrowLeft: page - 1, ArrowUp: page - 1, PageUp: page - 1, Home: 1, End: doc.pages };
    if (!(event.key in keys)) return;
    event.preventDefault();
    goto(keys[event.key]);
  }

  return (
    <>
      <ul>
        {docs.map((d) => (
          <li key={d.id}>
            <button type="button" className="vs-cover" onClick={() => { setPage(1); setOpenId(d.id); }} aria-label={`${d.title} im Leser öffnen`}>
              <Image src={pdfCover(d.id)} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 260px" unoptimized />
              <span className="vs-kind"><FileText size={13} aria-hidden="true" />{d.kind}</span>
              <span className="vs-read" aria-hidden="true"><BookOpen size={18} />Lesen</span>
            </button>
            <div className="vs-doc">
              <strong>{d.title}</strong>
              <p>{d.description}</p>
              <small>PDF · {d.pages} Seiten · {fmtMb(d.sizeMb)} MB</small>
              <div className="vs-doc-actions">
                <button type="button" className={ctaClass({ variant: "dark", size: "sm" })} onClick={() => { setPage(1); setOpenId(d.id); }}>
                  <CtaContent icon={<BookOpen size={17} strokeWidth={1.75} />}>Hier lesen</CtaContent>
                </button>
                <a className={ctaClass({ variant: "light", size: "sm" })} href={fileUrl(d)} download={fileName(d)} target="_blank" rel="noopener noreferrer" aria-label={`${d.title} als PDF herunterladen, ${fmtMb(d.sizeMb)} Megabyte`}>
                  <CtaContent icon={<Download size={17} strokeWidth={1.75} />}>PDF</CtaContent>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <dialog ref={dialog} className="pr" aria-label={doc ? `${doc.title}, PDF Leser` : "PDF Leser"} onClose={close} onClick={(e) => { if (e.target === dialog.current) close(); }} onKeyDown={onKeyDown}>
        {doc && <>
          <div className="pr-bar">
            <div className="pr-title"><span>{doc.kind}</span><strong>{doc.title}</strong></div>
            <div className="pr-actions">
              <a className={ctaClass({ variant: "brand", size: "sm" })} href={fileUrl(doc)} download={fileName(doc)} target="_blank" rel="noopener noreferrer">
                <CtaContent icon={<Download size={17} strokeWidth={1.75} />}>PDF herunterladen</CtaContent>
              </a>
              <button type="button" className="pr-close" onClick={close} aria-label="Leser schließen"><X size={20} aria-hidden="true" /></button>
            </div>
          </div>

          <div className="pr-body">
            <ol className="pr-pages" ref={strip} aria-label="Seiten">
              {Array.from({ length: doc.pages }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  <button type="button" onClick={() => setPage(n)} aria-label={`Seite ${n}`} aria-current={n === page ? "page" : undefined}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pdfPage(doc.id, n, 200)} alt="" loading="lazy" decoding="async" />
                    <span>{n}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="pr-stage">
              <button type="button" className="vs-arrow" onClick={() => goto(page - 1)} disabled={page <= 1} aria-label="Vorherige Seite"><ChevronLeft size={24} aria-hidden="true" /></button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img key={`${doc.id}-${page}`} src={pdfPage(doc.id, page)} alt={`${doc.title}, Seite ${page} von ${doc.pages}`} decoding="async" />
              <button type="button" className="vs-arrow" onClick={() => goto(page + 1)} disabled={page >= doc.pages} aria-label="Nächste Seite"><ChevronRight size={24} aria-hidden="true" /></button>
            </div>
          </div>

          <div className="pr-foot">
            <span aria-live="polite">Seite {page} von {doc.pages}</span>
            <a href={fileUrl(doc)} target="_blank" rel="noopener noreferrer">Original als PDF öffnen<ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </>}
      </dialog>
    </>
  );
}
