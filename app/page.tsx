import { HomeContent } from "@/components/home-content";
import { loadCatalog } from "@/lib/load-catalog";

export const metadata = { alternates: { canonical: "/" } };

export default async function Home() {
  return <>
    {/* Das Hero Bild steht im Stylesheet und würde erst spät entdeckt. Die Hinweise lassen den Browser es sofort laden, jeweils in der passenden Größe. */}
    <link rel="preload" as="image" href="/illustrations/germany-hero-panorama-1280.webp" media="(max-width: 1280px)" fetchPriority="high" />
    <link rel="preload" as="image" href="/illustrations/germany-hero-panorama.webp" media="(min-width: 1281px)" fetchPriority="high" />
    <link rel="preconnect" href="https://res.cloudinary.com" />
    <HomeContent products={await loadCatalog()} />
  </>;
}
