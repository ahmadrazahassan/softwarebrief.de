import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import "./sections.css";
import "./home.css";
import "./reviews.css";
import "./cta.css";
import "./refinements.css";
import "./about.css";
import "./compare.css";
import "./blog.css";
import "./home-refresh.css";
import "./newsletter.css";
import "./softwarebrief-check.css";
import "./showcase.css";
import "./profile-extras.css";
import "./article.css";
import "./legal.css";
import "./contrast.css";
import "./footer.css";
import "./brand.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteAnalytics } from "@/components/site-analytics";
import { siteUrl } from "@/lib/site";

/* Zwei Schutzmaßnahmen, die vor dem Framework laufen müssen.
   1. Ein zweiter Klick auf einen Link bricht die erste, noch ladende Navigation ab. Das Framework fängt diesen erwarteten AbortError nicht ab und zeigt im Entwicklungsmodus eine Fehlerseite. Ignoriert wird nur dieser Fall.
   2. Übersetzungsfunktionen des Browsers (zum Beispiel die automatische Übersetzung deutscher Seiten ins Englische) und manche Erweiterungen packen Textknoten in neue Elemente. Wenn React später einen solchen Knoten entfernen will, wirft der Browser "removeChild" und die Seite stürzt ab. Die beiden Funktionen überspringen in diesem Fall den Eingriff, statt zu werfen (bekannter Umweg, React Issue 11538). */
const earlyGuards = [
  'window.addEventListener("unhandledrejection",function(e){var r=e.reason;if(r&&r.name==="AbortError"){e.preventDefault();e.stopImmediatePropagation()}});',
  '(function(){if(typeof Node!=="function"||!Node.prototype)return;var rc=Node.prototype.removeChild;Node.prototype.removeChild=function(c){if(c&&c.parentNode!==this)return c;return rc.apply(this,arguments)};var ib=Node.prototype.insertBefore;Node.prototype.insertBefore=function(n,r){if(r&&r.parentNode!==this)return n;return ib.apply(this,arguments)}})();',
].join("");

export const metadata: Metadata = {
  /* Mit der Domain aus lib/site.ts werden kanonische und Vorschau Adressen vollständig. */
  ...(siteUrl() && { metadataBase: new URL(siteUrl()!) }),
  openGraph: { siteName: "Softwarebrief", locale: "de_DE", type: "website" },
  title: "Softwarebrief | Software finden, die zu Ihrem Betrieb passt",
  description: "Vergleichen Sie Buchhaltung, Lohnabrechnung, Personalsoftware, CRM und ERP mit nachvollziehbaren Quellen und klaren Einschätzungen.",
  icons: {
    icon: [
      { url: "/brand/softwarebrief-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/softwarebrief-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/softwarebrief-favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/brand/softwarebrief-favicon-180.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased"><script dangerouslySetInnerHTML={{ __html: earlyGuards }} /><link rel="preload" as="font" type="font/woff2" href="/fonts/lato-900-latin.woff2" crossOrigin="anonymous" /><link rel="preload" as="font" type="font/woff2" href="/fonts/open-sans-latin.woff2" crossOrigin="anonymous" /><SiteHeader />{children}<SiteFooter /><SiteAnalytics /></body>
    </html>
  );
}
