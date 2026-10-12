"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";

function withoutPrivateParameters(event: BeforeSendEvent): BeforeSendEvent | null {
  try {
    const url = new URL(event.url);
    if (url.pathname.startsWith("/newsletter/bestaetigt")) return null;
    url.search = "";
    url.hash = "";
    return { ...event, url: url.toString() };
  } catch {
    return null;
  }
}

export function SiteAnalytics() {
  const pathname = usePathname();
  // Bestätigungslinks enthalten einen persönlichen Newsletter-Token.
  if (pathname?.startsWith("/newsletter/bestaetigt")) return null;
  return <Analytics beforeSend={withoutPrivateParameters} debug={false} />;
}
