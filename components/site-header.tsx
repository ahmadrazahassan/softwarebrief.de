"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CtaContent, ctaClass } from "@/components/cta";

const links = [{href:"/kategorien",label:"Kategorien"},{href:"/vergleich",label:"Vergleichen"},{href:"/ratgeber",label:"Ratgeber"},{href:"/newsletter",label:"Newsletter"},{href:"/methodik",label:"Methodik"}];
export function SiteHeader() {
  const [open,setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="Softwarebrief Startseite" onClick={() => setOpen(false)}>
          {/* The PNG is already sized for display and shared with the footer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="header-brand-logo" src="/brand/softwarebrief-logo-web.png" width="720" height="121" alt="Softwarebrief" decoding="async" fetchPriority="high" />
        </Link>
        <nav className="main-nav" aria-label="Hauptnavigation">
          {links.map((link) => <Link className={path.startsWith(link.href) ? "nav-active" : ""} href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <Link className={ctaClass({ variant: "dark", size: "sm", className: "header-action" })} href="/empfehlung"><CtaContent>Empfehlung erhalten</CtaContent></Link>
        <button className="mobile-menu-button" aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile Navigation">
        {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/empfehlung" onClick={() => setOpen(false)}>Empfehlung erhalten</Link>
      </nav>}
    </header>
  );
}
