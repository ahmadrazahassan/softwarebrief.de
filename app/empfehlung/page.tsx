import { RecommendationFlow } from "@/components/recommendation-flow";
import { loadCatalog } from "@/lib/load-catalog";
export const metadata={title:"Software Empfehlung erhalten | Softwarebrief",description:"Vier Fragen führen zu nachvollziehbaren Softwareempfehlungen für Ihren Betrieb.",alternates:{canonical:"/empfehlung"}};
export default async function RecommendationPage(){return <RecommendationFlow products={await loadCatalog()}/>}
