import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";
import "./home.css";
import "./reviews.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Klarlotse | Software finden, die zu Ihrem Betrieb passt",
  description: "Vergleichen Sie Buchhaltung, Lohnabrechnung, Personalsoftware, CRM und ERP mit nachvollziehbaren Quellen und klaren Einschätzungen.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased"><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
