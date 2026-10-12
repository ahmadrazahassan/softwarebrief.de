import { NextRequest, NextResponse } from "next/server";
import { newsletter } from "@/data/newsletter";
import { newsletterSignupSchema, subscribe } from "@/lib/newsletter";
import { newsletterEnv } from "@/lib/newsletter-env";

const { errors } = newsletter.form;
const reply = (body: Record<string, unknown>, status: number) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: NextRequest) {
  /* Nur echtes JSON: Ein fremdes Formular kann diesen Content-Type nicht ohne Preflight senden. */
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return reply({ error: errors.generic }, 415);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return reply({ error: errors.generic }, 400);
  }

  const parsed = newsletterSignupSchema.safeParse(payload);
  if (!parsed.success) {
    const consentMissing = parsed.error.issues[0]?.path[0] === "consent";
    return consentMissing ? reply({ error: errors.consent, field: "consent" }, 400) : reply({ error: errors.email, field: "email" }, 400);
  }

  /* Honeypot: Bots füllen das versteckte Feld aus und sehen trotzdem "Erfolg". */
  if (parsed.data.website) return reply({ ok: true }, 201);

  const result = await subscribe(parsed.data.email, { env: newsletterEnv() });
  switch (result.status) {
    case "ok":
      return reply({ ok: true, dryRun: result.dryRun === true }, 201);
    case "invalid-email":
      return reply({ error: errors.email, field: "email" }, 422);
    case "rate-limited":
      return reply({ error: errors.rateLimited }, 429);
    case "unavailable":
      return reply({ error: errors.unavailable }, 503);
    default:
      return reply({ error: errors.failed }, 502);
  }
}
