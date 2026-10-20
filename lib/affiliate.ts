type VendorDestination = { slug: string; vendorUrl: string; linkType?: "direct" | "affiliate" };

export type AffiliatePartner = VendorDestination & {
  name: string;
  productSlugs: readonly string[];
  linkType: "affiliate";
  /** Domain auf der Partnerkarte, wenn vendorUrl ein Netzwerklink ist und nicht die Seite des Anbieters. */
  domain?: string;
  /** Profile, die auf der Partnerkarte erscheinen. Ohne Angabe zeigt die Karte alle Profile des Partners. */
  featuredSlugs?: readonly string[];
  /** Zielseite je Produkt, wenn der Partner Deep Links über ein Netzwerk erlaubt. vendorUrl ist dann der Netzwerklink. */
  destinations?: Readonly<Record<string, string>>;
  /** Eigener Netzwerklink je Produkt aus dem Linkgenerator des Netzwerks, mit der Zielseite als Landing Page erzeugt.
      Hat Vorrang vor destinations: Impact beschreibt Deep Links über u nur für den vollständigen Link, nicht für Kurzlinks. */
  productLinks?: Readonly<Record<string, string>>;
};

/** Netzwerklink von Sage (Impact). Die Zusage stammt vom Betreiber, der Link wurde am 14. Oktober 2026 ersetzt.
    Jeder Sage Button führt über diesen Link, damit Impact den Klick zählt. */
export const SAGE_TRACKING_LINK = "https://sagegmbh.sjv.io/X4qb2G";

/** Zielseiten der Sage Profile. Sie müssen mit vendorUrl in data/catalog.json übereinstimmen; der Test prüft das. */
export const sageDestinations: Readonly<Record<string, string>> = {
  "sage-active": "https://www.sage.com/de-de/produkte/sage-active/",
  "sage-payroll": "https://www.sage.com/de-de/sage-business-cloud/lohnabrechnung/",
  "sage-100": "https://www.sage.com/de-de/produkte/sage-100/",
  "sage-hr": "https://www.sage.com/de-de/sage-business-cloud/hr/",
  "sage-hr-payroll": "https://www.sage.com/de-de/produkte/sage-hr-payroll/",
  "sage-50-handwerk": "https://www.sage.com/de-de/produkte/sage-50-handwerk/",
  "sage-intacct": "https://www.sage.com/de-de/sage-business-cloud/intacct/pricing/",
  "sage-sales-management": "https://www.sage.com/de-de/produkte/sage-sales-management/",
};

/** Kurzlinks je Sage Profil aus dem Impact Fenster "Create a link": Programm Sage Germany, Landing Page = Zielseite aus
    sageDestinations, Media Property www.softwarebrief.de, unter "Advanced" keine Sub IDs (subId1 hängt withPlacement an).
    Profile ohne Eintrag führen über SAGE_TRACKING_LINK mit der Zielseite im Parameter u.
    Erzeugt vom Betreiber am 20. Oktober 2026. Ein Testklick auf den Sage Active Link kam mit irclickid auf der Zielseite an. */
export const sageProductLinks: Readonly<Record<string, string>> = {
  "sage-active": "https://sagegmbh.sjv.io/OYQW5K",
  "sage-payroll": "https://sagegmbh.sjv.io/4aDqKL",
  "sage-100": "https://sagegmbh.sjv.io/7XrQxV",
  "sage-hr": "https://sagegmbh.sjv.io/k43Nbx",
  "sage-hr-payroll": "https://sagegmbh.sjv.io/qW3BNb",
  "sage-50-handwerk": "https://sagegmbh.sjv.io/QYrWea",
  "sage-intacct": "https://sagegmbh.sjv.io/5kQxxb",
  "sage-sales-management": "https://sagegmbh.sjv.io/GbB22n",
};

/** Confirmed partnerships and exact destinations supplied by the site operator. */
export const affiliatePartners: AffiliatePartner[] = [
  {
    slug: "fastbill", name: "FastBill", productSlugs: ["fastbill"], linkType: "affiliate",
    vendorUrl: "https://fastbill.com/?utm_medium=company_profile&utm_source=softwarebrief&utm_campaign=domain_click",
  },
  {
    slug: "lexware-office", name: "Lexware", productSlugs: ["lexware-office", "lexware-office-lohn-gehalt"], linkType: "affiliate",
    vendorUrl: "https://www.lexware.de/?utm_medium=softwarebriefe&utm_source=softwarebrief&utm_campaign=domain_click",
  },
  {
    slug: "sevdesk", name: "sevdesk", productSlugs: ["sevdesk"], linkType: "affiliate",
    vendorUrl: "https://sevdesk.de/?utm_source=softwarebrief.de&utm_medium=softwarebrief&utm_campaign=listing",
  },
  {
    slug: "freshbooks", name: "FreshBooks", productSlugs: ["freshbooks"], linkType: "affiliate",
    vendorUrl: "https://www.freshbooks.com/?utm_source=softwarebrief.de&utm_medium=referral&utm_campaign=listing",
  },
  {
    slug: "easybill", name: "easybill", productSlugs: ["easybill"], linkType: "affiliate",
    vendorUrl: "https://www.easybill.de/?utm_source=softwarebrief.de&utm_medium=referral&utm_campaign=listing",
  },
  {
    slug: "sage", name: "Sage", linkType: "affiliate", vendorUrl: SAGE_TRACKING_LINK, domain: "sage.com",
    productSlugs: Object.keys(sageDestinations),
    featuredSlugs: ["sage-active", "sage-hr", "sage-100", "sage-payroll"],
    destinations: sageDestinations,
    productLinks: sageProductLinks,
  },
];

/** Attribute für jeden Werbelink und jedes Werbebanner (VendorLink, SageBanner). Nicht je Komponente neu schreiben.
    - Kein "noreferrer": Ohne Herkunftsangabe sieht das Partnernetzwerk nicht, von welcher Website der Klick kommt.
      Impact zeigt den Klick dann ohne verweisende Domain und kann ihn nicht der eingetragenen Website zuordnen.
    - "noopener" trennt den neuen Tab von unserer Seite und lässt die Herkunftsangabe unberührt.
    - referrerPolicy: Der Browser sendet nur die Adresse der Website (https://www.softwarebrief.de/), nicht die einzelne
      Seite mit Suchbegriffen oder Parametern. Die Angabe am Link gilt auch, wenn später eine strengere Richtlinie für die
      ganze Seite gesetzt wird. Welche Stelle geklickt wurde, steht in subId1 (withPlacement). */
export const affiliateLinkAttributes = { rel: "sponsored noopener", referrerPolicy: "strict-origin-when-cross-origin" } as const;

export const affiliateDisclosure = "Wir sind Affiliate Partner dieser Anbieter. Wenn Sie über einen mit „Werbung“ gekennzeichneten Link oder Banner ein Angebot nutzen oder einen Vertrag abschließen, können wir eine Provision erhalten. Es gelten die Preise und Bedingungen des jeweiligen Anbieters. Eine mögliche Vergütung beeinflusst weder unsere redaktionellen Angaben noch die fachliche Reihenfolge der Empfehlungen.";
export const affiliateLinkNote = "Affiliate Link (Werbung): Wenn Sie über diesen Link ein Angebot nutzen oder einen Vertrag abschließen, können wir eine Provision erhalten. Es gelten die Preise und Bedingungen des Anbieters.";

/** Deep Link über ein Partnernetzwerk: Der Netzwerklink führt nach der Zuordnung auf die Zielseite im Parameter u. */
export function networkDeepLink(trackingLink: string, destination: string) {
  const url = new URL(trackingLink);
  url.searchParams.set("u", destination);
  return url.toString();
}

/** Apply after loading remote destinations so an older database cannot undo confirmed links.
    Rechnet immer aus der Konfiguration, nicht aus der übergebenen Adresse; mehrfaches Anwenden ändert nichts. */
export function withAffiliateLink<T extends VendorDestination>(product: T): T {
  const partner = affiliatePartners.find((item) => item.productSlugs.includes(product.slug));
  if (!partner) return product;
  const destination = partner.destinations?.[product.slug];
  const vendorUrl = partner.productLinks?.[product.slug] ?? (destination ? networkDeepLink(partner.vendorUrl, destination) : partner.vendorUrl);
  return { ...product, vendorUrl, linkType: "affiliate" };
}

/** Hängt die Platzierung als subId1 an Netzwerklinks (sjv.io), damit Impact Klicks und Abschlüsse je Platzierung
    ausweist. Andere Adressen bleiben unverändert. Es werden keine Angaben über Besucher übertragen. */
export function withPlacement(url: string, placement?: string) {
  if (!placement) return url;
  let parsed: URL;
  try { parsed = new URL(url); } catch { return url; }
  if (!parsed.hostname.endsWith(".sjv.io")) return url;
  parsed.searchParams.set("subId1", placement);
  return parsed.toString();
}
