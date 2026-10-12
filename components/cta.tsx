import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export type CtaVariant = "dark" | "light" | "brand";
export type CtaSize = "sm" | "md" | "lg";

/** Class list for the icon-tile CTA. Use on <a>, <Link> or <button>. */
export function ctaClass({ variant = "dark", size = "md", block = false, className = "" }: { variant?: CtaVariant; size?: CtaSize; block?: boolean; className?: string } = {}) {
  return ["cta", `cta--${variant}`, `cta--${size}`, block && "cta--block", className].filter(Boolean).join(" ");
}

/** Inner markup: square icon tile + label. The label stays centred in the remaining space. */
export function CtaContent({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return <>
    <span className="cta-icon" aria-hidden="true">{icon ?? <ArrowRight size={18} strokeWidth={1.75} />}</span>
    <span className="cta-label">{children}</span>
  </>;
}
