import { operator } from "@/data/operator";
import type { Env } from "@/lib/newsletter";

/** Server environment used by Next.js on Vercel and the local preview. */
export function newsletterEnv(): Env {
  const merged = process.env;
  return { ...merged, NEXT_PUBLIC_SITE_URL: merged.NEXT_PUBLIC_SITE_URL?.trim() || operator.siteUrl };
}
