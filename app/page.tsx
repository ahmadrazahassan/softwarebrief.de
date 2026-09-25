import { HomeContent } from "@/components/home-content";
import { loadCatalog } from "@/lib/load-catalog";

export default async function Home() {
  return <HomeContent products={await loadCatalog()} />;
}
