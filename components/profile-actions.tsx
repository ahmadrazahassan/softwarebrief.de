"use client";
import { useRouter } from "next/navigation";
import { GitCompareArrows } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { VendorLink } from "@/components/vendor-link";
import { vendorNote } from "@/components/profile-ctas";
import { CtaContent, ctaClass } from "@/components/cta";
export function ProfileActions({product}:{product:Product}){const router=useRouter();return <div className="profile-actions"><VendorLink product={product} cta={{ variant: "dark", block: true }}/><button type="button" className={ctaClass({ variant: "light", block: true })} onClick={()=>router.push(`/vergleich?produkte=${product.slug}`)}><CtaContent icon={<GitCompareArrows size={18} strokeWidth={1.75}/>}>Im Vergleich ansehen</CtaContent></button><p>{vendorNote(product)}</p></div>}
