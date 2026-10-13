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
};

/** Netzwerklink von Sage (Impact). Die Zusage stammt vom Betreiber, Stand 13. Oktober 2026. */
export const SAGE_TRACKING_LINK = "https://sagegmbh.sjv.io/QYg9aa";

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
  },
];

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
  return { ...product, vendorUrl: destination ? networkDeepLink(partner.vendorUrl, destination) : partner.vendorUrl, linkType: "affiliate" };
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
