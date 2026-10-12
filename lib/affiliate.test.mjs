import assert from "node:assert/strict";
import { test } from "node:test";
import { affiliatePartners, withAffiliateLink } from "./affiliate.ts";

const destinations = {
  fastbill: "https://fastbill.com/?utm_medium=company_profile&utm_source=softwarebrief&utm_campaign=domain_click",
  "lexware-office": "https://www.lexware.de/?utm_medium=softwarebriefe&utm_source=softwarebrief&utm_campaign=domain_click",
  "lexware-office-lohn-gehalt": "https://www.lexware.de/?utm_medium=softwarebriefe&utm_source=softwarebrief&utm_campaign=domain_click",
  sevdesk: "https://sevdesk.de/?utm_source=softwarebrief.de&utm_medium=softwarebrief&utm_campaign=listing",
  freshbooks: "https://www.freshbooks.com/?utm_source=softwarebrief.de&utm_medium=referral&utm_campaign=listing",
  easybill: "https://www.easybill.de/?utm_source=softwarebrief.de&utm_medium=referral&utm_campaign=listing",
};

test("all five confirmed partners retain the supplied tracking destinations", () => {
  assert.equal(affiliatePartners.length, 5);
  for (const partner of affiliatePartners) {
    assert.equal(partner.linkType, "affiliate");
    assert.equal(partner.vendorUrl, destinations[partner.slug]);
  }
});

test("confirmed links override stale remote destinations for every associated product", () => {
  for (const [slug, vendorUrl] of Object.entries(destinations)) {
    const stale = { slug, vendorUrl: "https://old.example/pricing", linkType: "direct", name: "Preserve editorial profile", sources: ["verified source"] };
    const updated = withAffiliateLink(stale);
    assert.equal(updated.vendorUrl, vendorUrl);
    assert.equal(updated.linkType, "affiliate");
    assert.equal(updated.name, stale.name);
    assert.equal(updated.sources, stale.sources);
    assert.equal(stale.vendorUrl, "https://old.example/pricing");
  }
});

test("other vendors keep their current destination and link status", () => {
  for (const linkType of ["direct", "affiliate", undefined]) {
    const vendor = { slug: "sage-active", vendorUrl: "https://www.sage.com/de-de/produkte/sage-active/", linkType };
    assert.equal(withAffiliateLink(vendor), vendor);
  }
});
