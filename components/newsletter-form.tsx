"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MailCheck } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { CtaContent, ctaClass } from "@/components/cta";
import { newsletter } from "@/data/newsletter";

type Field = "email" | "consent";
type Problem = { field: Field | null; message: string };
type Props = {
  /** stack: Felder untereinander (Standard). inline: Adresse und Button in einer Zeile. */
  variant?: "stack" | "inline";
  tone?: "light" | "dark";
};

export function NewsletterForm({ variant = "stack", tone = "light" }: Props) {
  const copy = newsletter.form;
  const uid = useId();
  const emailId = `${uid}-email`;
  const emailErrorId = `${uid}-email-error`;
  const consentErrorId = `${uid}-consent-error`;
  const onNewsletterPage = usePathname() === newsletter.path;

  const emailRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [dryRun, setDryRun] = useState(false);
  const [problem, setProblem] = useState<Problem | null>(null);

  useEffect(() => {
    if (sentTo) doneRef.current?.focus();
  }, [sentTo]);

  function fail(field: Field | null, message: string) {
    setProblem({ field, message });
    if (field === "email") emailRef.current?.focus();
    if (field === "consent") consentRef.current?.focus();
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const consent = data.get("consent") === "on";

    setProblem(null);
    if (!emailRef.current?.checkValidity() || !email) return fail("email", copy.errors.email);
    if (!consent) return fail("consent", copy.errors.consent);

    setSending(true);
    try {
      const response = await fetch("/api/newsletter/anmeldung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true, website: String(data.get("website") ?? "") }),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string; field?: Field; dryRun?: boolean };
      if (response.ok) {
        setDryRun(result.dryRun === true);
        setSentTo(email);
      } else {
        fail(result.field ?? null, result.error ?? copy.errors.failed);
      }
    } catch {
      fail(null, copy.errors.network);
    } finally {
      setSending(false);
    }
  }

  if (sentTo) {
    return (
      <div className="nl-block" data-tone={tone}>
        <div className="nl-done">
          <span className="nl-done-icon" aria-hidden="true"><MailCheck size={22} strokeWidth={1.75} /></span>
          <h3 ref={doneRef} tabIndex={-1}>{copy.done.title}</h3>
          <p>{copy.done.before}<strong>{sentTo}</strong>{copy.done.after}</p>
          <p className="nl-note">{copy.done.hint}</p>
          {dryRun && <p className="nl-dryrun">{copy.done.dryRun}</p>}
          <button type="button" className="nl-linkbutton" onClick={() => { setSentTo(null); setProblem(null); }}>{copy.done.reset}</button>
        </div>
      </div>
    );
  }

  const emailProblem = problem?.field === "email" ? problem.message : null;
  const consentProblem = problem?.field === "consent" ? problem.message : null;
  const generalProblem = problem && !problem.field ? problem.message : null;
  const submit = (
    <button type="submit" className={ctaClass({ variant: tone === "dark" ? "brand" : "dark", size: variant === "inline" ? "md" : "lg" })} disabled={sending}>
      <CtaContent icon={<Mail size={18} strokeWidth={1.75} />}>{sending ? copy.sending : copy.submit}</CtaContent>
    </button>
  );

  return (
    <div className="nl-block" data-tone={tone}>
      <form className={`nl-form nl-form--${variant}`} onSubmit={onSubmit} noValidate>
        <div className="nl-field">
          <label htmlFor={emailId}>{copy.emailLabel}</label>
          <input
            ref={emailRef}
            id={emailId}
            name="email"
            type="email"
            className="nl-input"
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            required
            placeholder={copy.emailPlaceholder}
            aria-invalid={emailProblem ? true : undefined}
            aria-describedby={emailProblem ? emailErrorId : undefined}
          />
          {emailProblem && <p id={emailErrorId} className="nl-error">{emailProblem}</p>}
        </div>

        <div className="nl-field">
          <label className="nl-consent">
            <input
              ref={consentRef}
              name="consent"
              type="checkbox"
              aria-invalid={consentProblem ? true : undefined}
              aria-describedby={consentProblem ? consentErrorId : undefined}
            />
            <span>
              {copy.consent.before}
              {onNewsletterPage ? (
                <a href={`#${newsletter.privacy.id}`}>{copy.consent.linkLabel}</a>
              ) : (
                <Link href={`${newsletter.path}#${newsletter.privacy.id}`} target="_blank" rel="noopener">
                  {copy.consent.linkLabel}<span className="sr-only">{copy.consent.newTab}</span>
                </Link>
              )}
              {copy.consent.after}
            </span>
          </label>
          {consentProblem && <p id={consentErrorId} className="nl-error">{consentProblem}</p>}
        </div>

        <label className="nl-hp" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>

        {submit}
        <p className="nl-note">{copy.note}</p>
        <div aria-live="polite">{generalProblem && <p className="nl-alert">{generalProblem}</p>}</div>
      </form>
    </div>
  );
}
