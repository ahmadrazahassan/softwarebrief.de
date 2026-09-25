import { CompareWorkspace } from "@/components/compare-workspace";
import { loadCatalog } from "@/lib/load-catalog";
export const metadata={title:"Software vergleichen | Klarlotse",description:"Vergleichen Sie Funktionen, Preisbedingungen und Einsatzbereiche von Geschäftssoftware direkt nebeneinander."};
export default async function ComparePage({searchParams}:{searchParams:Promise<{produkte?:string}>}){const params=await searchParams;return <CompareWorkspace initial={(params.produkte??"").split(",").filter(Boolean)} products={await loadCatalog()}/>}
