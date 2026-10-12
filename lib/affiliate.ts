type VendorDestination = { slug: string; vendorUrl: string; linkType?: "direct" | "affiliate" };

export type AffiliatePartner = VendorDestination & {
  name: string;
  productSlugs: readonly string[];
  linkType: "affiliate";
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
];

export const affiliateDisclosure = "Wir sind Affiliate Partner dieser Anbieter. Wenn Sie über einen mit „Werbung“ gekennzeichneten Link ein Angebot nutzen oder einen Vertrag abschließen, können wir eine Provision erhalten. Es gelten die Preise und Bedingungen des jeweiligen Anbieters. Eine mögliche Vergütung beeinflusst weder unsere redaktionellen Angaben noch die fachliche Reihenfolge der Empfehlungen.";
export const affiliateLinkNote = "Affiliate Link (Werbung): Wenn Sie über diesen Link ein Angebot nutzen oder einen Vertrag abschließen, können wir eine Provision erhalten. Es gelten die Preise und Bedingungen des Anbieters.";

/** Apply after loading remote destinations so an older database cannot undo confirmed links. */
export function withAffiliateLink<T extends VendorDestination>(product: T): T {
  const partner = affiliatePartners.find((item) => item.productSlugs.includes(product.slug));
  return partner ? { ...product, vendorUrl: partner.vendorUrl, linkType: "affiliate" } : product;
}
