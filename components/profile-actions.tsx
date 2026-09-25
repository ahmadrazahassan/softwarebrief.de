"use client";
import { useRouter } from "next/navigation";
import { GitCompareArrows } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { VendorLink } from "@/components/vendor-link";
import { Button } from "@/components/ui/button";
export function ProfileActions({product}:{product:Product}){const router=useRouter();return <div className="profile-actions"><VendorLink product={product} className="primary-cta"/><Button className="outline-cta" variant="outline" onClick={()=>router.push(`/vergleich?produkte=${product.slug}`)}><GitCompareArrows size={18}/> Im Vergleich ansehen</Button><p>{product.linkType==="affiliate"?"Dieser Link kann eine Provision auslösen. Der Anbieter entscheidet über Preise und Konditionen.":"Sie besuchen die offizielle Herstellerseite. Für diesen Link ist derzeit keine Affiliate Partnerschaft hinterlegt."}</p></div>}
