import { siteUrl } from "@/lib/site";
import type { Env } from "@/lib/newsletter";

/** Server environment used by Next.js on Vercel and the local preview. */
export function newsletterEnv(): Env {
  const merged = process.env;
  return { ...merged, NEXT_PUBLIC_SITE_URL: siteUrl() ?? undefined };
}
