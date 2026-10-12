import { readFileSync } from "node:fs";
import path from "node:path";
import { renderConfirmationEmail } from "./newsletter-email.ts";
import { z } from "zod";

export type Env = Record<string, string | undefined>;
export type Provider = "resend" | "dev" | "aus";
export type SignupResult = { status: "ok"; dryRun?: boolean } | { status: "invalid-email" | "rate-limited" | "unavailable" | "error" };
export type ConfirmationResult = SignupResult | { status: "invalid-token" };

export const newsletterSignupSchema = z.object({
  email: z.string().trim().toLowerCase().min(5).max(254).email(),
  consent: z.literal(true),
  website: z.string().optional(),
});

export const consentVersion = "softwarebrief-monthly-2026-10-13";
export const consentProperties = ["softwarebrief_requested_at", "softwarebrief_confirmed_at", "softwarebrief_consent_version"] as const;
const confirmationLifetime = 48 * 60 * 60 * 1000;
const apiBase = "https://api.resend.com";

export function maskEmail(email: string) {
  const at = email.lastIndexOf("@");
  return at < 1 ? "***" : `${email[0]}***${email.slice(at)}`;
}

function isProduction(env: Env) {
  return env.NODE_ENV === "production" || (import.meta as { env?: { PROD?: boolean } }).env?.PROD === true;
}

export function resolveProvider(env: Env, production = isProduction(env)): Provider {
  const wanted = env.NEWSLETTER_PROVIDER?.trim().toLowerCase();
  if (wanted === "resend") return "resend";
  if (wanted === "dev" && !production) return "dev";
  return "aus";
}

export type ResendConfig = { apiKey: string; contactsApiKey: string; from: string; siteUrl: string; tokenSecret: string; segmentId: string };
export function resendConfig(env: Env): ResendConfig | null {
  const apiKey = env.RESEND_API_KEY?.trim();
  const contactsApiKey = env.RESEND_CONTACTS_API_KEY?.trim() || apiKey;
  const from = env.RESEND_FROM_EMAIL?.trim();
  const tokenSecret = env.NEWSLETTER_TOKEN_SECRET?.trim();
  const segmentId = env.RESEND_SEGMENT_ID?.trim();
  const site = env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!apiKey || !contactsApiKey || !from || !tokenSecret || tokenSecret.length < 32 || !segmentId || !site) return null;
  const sender = from.match(/<([^<>]+)>$/)?.[1] ?? from;
  if (!z.string().email().safeParse(sender).success) return null;
  try {
    const url = new URL(site);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || url.pathname !== "/") return null;
    if (url.protocol === "http:" && !["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)) return null;
    return { apiKey, contactsApiKey, from, siteUrl: url.origin, tokenSecret, segmentId };
  } catch { return null; }
}

function encode(bytes: Uint8Array) {
  return btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join("")).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function decode(value: string) {
  if (!/^[a-zA-Z0-9_-]+$/.test(value)) throw new Error("Invalid token encoding");
  return Uint8Array.from(atob(value.replaceAll("-", "+").replaceAll("_", "/")), (char) => char.charCodeAt(0));
}
async function tokenKey(secret: string) {
  return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}
export type ConfirmationClaims = { email: string; issuedAt: number; expiresAt: number; version: string; purpose: "newsletter-confirm" };
export async function createConfirmationToken(email: string, secret: string, now = Date.now()) {
  const payload = encode(new TextEncoder().encode(JSON.stringify({ email, issuedAt: now, expiresAt: now + confirmationLifetime, version: consentVersion, purpose: "newsletter-confirm" })));
  const signature = await crypto.subtle.sign("HMAC", await tokenKey(secret), new TextEncoder().encode(payload));
  return `${payload}.${encode(new Uint8Array(signature))}`;
}
export async function verifyConfirmationToken(token: string, secret: string, now = Date.now()): Promise<ConfirmationClaims | null> {
  if (!secret || token.length > 2048) return null;
  try {
    const [payload, signature, extra] = token.split(".");
    if (!payload || !signature || extra !== undefined) return null;
    if (!await crypto.subtle.verify("HMAC", await tokenKey(secret), decode(signature), new TextEncoder().encode(payload))) return null;
    const claims = JSON.parse(new TextDecoder().decode(decode(payload))) as ConfirmationClaims;
    const address = newsletterSignupSchema.safeParse({ email: claims.email, consent: true });
    if (!address.success || address.data.email !== claims.email || claims.purpose !== "newsletter-confirm" || claims.version !== consentVersion) return null;
    if (!Number.isSafeInteger(claims.issuedAt) || !Number.isSafeInteger(claims.expiresAt) || claims.issuedAt > now + 60000 || claims.expiresAt <= now || claims.expiresAt - claims.issuedAt !== confirmationLifetime) return null;
    return claims;
  } catch { return null; }
}

type Options = { env?: Env; fetchImpl?: typeof fetch; now?: number };
function optionsFor(options: Options) {
  return { env: options.env ?? {}, fetchImpl: options.fetchImpl ?? fetch, now: options.now ?? Date.now() };
}
async function api(path: string, key: string, fetchImpl: typeof fetch, method = "GET", body?: unknown) {
  const init: RequestInit = {
    method, headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(8000),
  };
  const response = await fetchImpl(`${apiBase}${path}`, init);
  if (response.status !== 429) return response;
  const seconds = Number(response.headers.get("Retry-After") ?? "1");
  if (!Number.isFinite(seconds) || seconds > 2) return response;
  await new Promise((resolve) => setTimeout(resolve, Math.max(1, seconds) * 1000));
  return fetchImpl(`${apiBase}${path}`, { ...init, signal: AbortSignal.timeout(8000) });
}
function failure(response: Response): SignupResult {
  // Do not log provider bodies: they can contain recipient addresses or secrets.
  console.error(`[newsletter] Resend HTTP ${response.status}.`);
  if (response.status === 429) return { status: "rate-limited" };
  if ([401, 403].includes(response.status)) return { status: "unavailable" };
  return { status: "error" };
}

/** Send a confirmation email only after verifying that contact storage is configured. */
export async function subscribe(email: string, options: Options = {}): Promise<SignupResult> {
  const { env, fetchImpl, now } = optionsFor(options);
  const provider = resolveProvider(env);
  if (provider === "dev") {
    console.info(`[newsletter:dev] Anmeldung für ${maskEmail(email)}. Es wurde keine E-Mail versendet.`);
    return { status: "ok", dryRun: true };
  }
  if (provider !== "resend") return { status: "unavailable" };
  const config = resendConfig(env);
  if (!config) return { status: "unavailable" };
  const parsed = newsletterSignupSchema.safeParse({ email, consent: true });
  if (!parsed.success) return { status: "invalid-email" };
  email = parsed.data.email;
  try {
    const properties = await api("/contact-properties", config.contactsApiKey, fetchImpl);
    if (!properties.ok) return failure(properties);
    const definitions = await properties.json() as { data?: { key: string; type: string }[] };
    if (!consentProperties.every((key) => definitions.data?.some((property) => property.key === key && property.type === "string"))) return { status: "unavailable" };
    const segment = await api(`/segments/${encodeURIComponent(config.segmentId)}`, config.contactsApiKey, fetchImpl);
    if (!segment.ok) return segment.status === 404 ? { status: "unavailable" } : failure(segment);
    const token = await createConfirmationToken(email, config.tokenSecret, now);
    const url = `${config.siteUrl}/newsletter/bestaetigt?token=${encodeURIComponent(token)}`;
    const message = renderConfirmationEmail({ confirmationUrl: url, siteUrl: config.siteUrl, logoUrl: "cid:softwarebrief-logo" });
    const response = await api("/emails", config.apiKey, fetchImpl, "POST", { from: config.from, to: [email], ...message, attachments: [{ filename: "softwarebrief-logo.png", content: readFileSync(path.join(process.cwd(), "public/brand/softwarebrief-logo.png")).toString("base64"), content_type: "image/png", content_id: "softwarebrief-logo" }] });
    return response.ok ? { status: "ok" } : failure(response);
  } catch {
    console.error("[newsletter] Resend ist nicht erreichbar.");
    return { status: "error" };
  }
}

/** GET on the confirmation page never subscribes; this is called by an explicit POST. */
export async function confirmSubscription(token: string, options: Options = {}): Promise<ConfirmationResult> {
  const { env, fetchImpl, now } = optionsFor(options);
  if (resolveProvider(env) !== "resend") return { status: "unavailable" };
  const config = resendConfig(env);
  if (!config) return { status: "unavailable" };
  const claims = await verifyConfirmationToken(token, config.tokenSecret, now);
  if (!claims) return { status: "invalid-token" };
  const path = `/contacts/${encodeURIComponent(claims.email)}`;
  const properties = {
    softwarebrief_requested_at: new Date(claims.issuedAt).toISOString(),
    softwarebrief_confirmed_at: new Date(now).toISOString(),
    softwarebrief_consent_version: claims.version,
  };
  try {
    const existing = await api(path, config.contactsApiKey, fetchImpl);
    if (existing.status === 404) {
      const created = await api("/contacts", config.contactsApiKey, fetchImpl, "POST", { email: claims.email, unsubscribed: false, properties, segments: [{ id: config.segmentId }] });
      return created.ok ? { status: "ok" } : failure(created);
    }
    if (!existing.ok) return failure(existing);
    const contact = await existing.json() as { unsubscribed: boolean; properties?: Record<string, { value: string; type: string }> };
    const confirmedAt = Date.parse(contact.properties?.softwarebrief_confirmed_at?.value ?? "");
    if (confirmedAt >= claims.issuedAt) return contact.unsubscribed ? { status: "invalid-token" } : { status: "ok" };
    const added = await api(`${path}/segments/${encodeURIComponent(config.segmentId)}`, config.contactsApiKey, fetchImpl, "POST");
    if (!added.ok) return failure(added);
    const updated = await api(path, config.contactsApiKey, fetchImpl, "PATCH", { unsubscribed: false, properties });
    return updated.ok ? { status: "ok" } : failure(updated);
  } catch {
    console.error("[newsletter] Resend Kontaktverwaltung ist nicht erreichbar.");
    return { status: "error" };
  }
}
