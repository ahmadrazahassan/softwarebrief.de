import Link from "next/link";
import { CtaContent, ctaClass } from "@/components/cta";
export default function NotFound(){return <main className="shell not-found"><p className="eyebrow">SEITE NICHT GEFUNDEN</p><h1>Hier führt gerade kein Weg weiter.</h1><p>Die Adresse könnte sich geändert haben. Über die Kategorien finden Sie alle recherchierten Programme.</p><Link className={ctaClass({ variant: "dark" })} href="/kategorien"><CtaContent>Kategorien ansehen</CtaContent></Link></main>}
