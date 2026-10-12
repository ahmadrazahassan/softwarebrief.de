"use client";

import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { CtaContent, ctaClass } from "@/components/cta";

type Review = {
  id: string;
  rating: number;
  title: string;
  body: string;
  display_name: string;
  usage_period: string | null;
  company_size: string | null;
  published_at: string | null;
};

export function ReviewsPanel({ slug, name }: { slug: string; name: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [connected, setConnected] = useState(false);
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/reviews?product=${encodeURIComponent(slug)}`)
      .then((response) => response.json() as Promise<{ reviews?: Review[]; connected?: boolean }>)
      .then((data) => { if (active) { setReviews(data.reviews ?? []); setConnected(!!data.connected); } })
      .catch(() => { if (active) setConnected(false); });
    return () => { active = false; };
  }, [slug]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (!rating) { setStatus("Bitte wählen Sie eine Bewertung."); return; }
    setSubmitting(true);
    setStatus("");
    const payload = {
      product_slug: slug,
      rating,
      title: String(fields.get("title") ?? ""),
      body: String(fields.get("body") ?? ""),
      display_name: String(fields.get("display_name") ?? ""),
      usage_period: String(fields.get("usage_period") ?? ""),
      company_size: String(fields.get("company_size") ?? ""),
      website: String(fields.get("website") ?? ""),
    };
    try {
      const response = await fetch("/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { message?: string; error?: string };
      setStatus(result.message ?? result.error ?? "Ihre Eingabe konnte nicht gespeichert werden.");
      if (response.ok) { form.reset(); setRating(0); }
    } catch {
      setStatus("Die Verbindung ist gerade nicht verfügbar. Bitte versuchen Sie es später erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  return <>
    {reviews.length > 0 && <><h3 className="ur-subhead">Bewertungen auf Softwarebrief</h3><div className="review-list">{reviews.map((review) => <article key={review.id} className="review-card"><div className="review-card-heading"><div><strong>{review.title}</strong><span>{review.display_name}{review.published_at ? ` · ${new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(new Date(review.published_at))}` : ""}</span></div><span aria-label={`${review.rating} von 5 Sternen`}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span></div><p>{review.body}</p>{(review.usage_period || review.company_size) && <small>{[review.usage_period, review.company_size].filter(Boolean).join(" · ")}</small>}</article>)}</div></>}
    {connected && <form className="review-form" onSubmit={submit}><h3>Ihre Erfahrung mit {name} teilen</h3><p>Berichten Sie konkret von Ihrem Einsatz. Wir prüfen Einreichungen vor der Veröffentlichung und kennzeichnen sie als Nutzermeinung.</p><fieldset><legend>Ihre Bewertung</legend><div className="rating-input">{[1, 2, 3, 4, 5].map((value) => <button type="button" key={value} onClick={() => setRating(value)} aria-label={`${value} von 5 Sternen`} aria-pressed={rating === value}>{value <= rating ? "★" : "☆"}</button>)}</div></fieldset><div className="review-form-grid"><label>Anzeigename<input name="display_name" required minLength={2} maxLength={80}/></label><label>Nutzungsdauer<input name="usage_period" maxLength={100} placeholder="Zum Beispiel: seit einem Jahr"/></label></div><label>Unternehmensgröße<input name="company_size" maxLength={100} placeholder="Zum Beispiel: 20 Beschäftigte"/></label><label>Überschrift<input name="title" required minLength={8} maxLength={120}/></label><label>Ihre Erfahrung<textarea name="body" required minLength={80} maxLength={3000} rows={6} placeholder="Welche Aufgaben lösen Sie damit? Was funktioniert gut und wo liegen Grenzen?"/></label><label className="review-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label><button className={ctaClass({ variant: "dark" })} type="submit" disabled={submitting}><CtaContent icon={<Send size={17} strokeWidth={1.75} />}>{submitting ? "Wird gesendet" : "Bewertung einreichen"}</CtaContent></button><p className="review-form-note">Mit dem Absenden stimmen Sie der redaktionellen Prüfung und Veröffentlichung Ihres Anzeigenamens und Textes zu. Geben Sie keine personenbezogenen Daten Dritter an.</p>{status && <p role="status" className="review-status">{status}</p>}</form>}
  </>;
}
