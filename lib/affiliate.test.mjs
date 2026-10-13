import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { SAGE_TRACKING_LINK, affiliatePartners, networkDeepLink, sageDestinations, withAffiliateLink, withPlacement } from "./affiliate.ts";

const catalog = JSON.parse(readFileSync(new URL("../data/catalog.json", import.meta.url), "utf8"));

const destinations = {
  fastbill: "https://fastbill.com/?utm_medium=company_profile&utm_source=softwarebrief&utm_campaign=domain_click",
  "lexware-office": "https://www.lexware.de/?utm_medium=softwarebriefe&utm_source=softwarebrief&utm_campaign=domain_click",
  "lexware-office-lohn-gehalt": "https://www.lexware.de/?utm_medium=softwarebriefe&utm_source=softwarebrief&utm_campaign=domain_click",
  sevdesk: "https://sevdesk.de/?utm_source=softwarebrief.de&utm_medium=softwarebrief&utm_campaign=listing",
  freshbooks: "https://www.freshbooks.com/?utm_source=softwarebrief.de&utm_medium=referral&utm_campaign=listing",
  easybill: "https://www.easybill.de/?utm_source=softwarebrief.de&utm_medium=referral&utm_campaign=listing",
};

const sage = affiliatePartners.find((partner) => partner.slug === "sage");
const sageDeep = (target) => `https://sagegmbh.sjv.io/QYg9aa?u=${encodeURIComponent(target)}`;

test("the five direct partners retain the supplied tracking destinations", () => {
  const direct = affiliatePartners.filter((partner) => partner.slug !== "sage");
  assert.equal(direct.length, 5);
  for (const partner of direct) {
    assert.equal(partner.linkType, "affiliate");
    assert.equal(partner.vendorUrl, destinations[partner.slug]);
  }
});

test("confirmed links override stale remote destinations for every associated direct product", () => {
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
    const vendor = { slug: "personio", vendorUrl: "https://www.personio.de/preise/", linkType };
    assert.equal(withAffiliateLink(vendor), vendor);
  }
});

test("Sage is a confirmed affiliate partner with the supplied network link", () => {
  assert.ok(sage);
  assert.equal(sage.linkType, "affiliate");
  assert.equal(sage.vendorUrl, "https://sagegmbh.sjv.io/QYg9aa");
  assert.equal(sage.vendorUrl, SAGE_TRACKING_LINK);
});

test("every Sage catalog profile deep links to its own page through the network link", () => {
  for (const [slug, target] of Object.entries(sageDestinations)) {
    const product = catalog.find((item) => item.slug === slug);
    assert.ok(product, `${slug} is missing from the catalog`);
    assert.equal(target, product.vendorUrl, `${slug}: destination differs from data/catalog.json`);
    const updated = withAffiliateLink({ slug, vendorUrl: "https://old.example/", linkType: "direct" });
    assert.equal(updated.vendorUrl, sageDeep(target));
    assert.equal(updated.linkType, "affiliate");
  }
});

test("no Sage catalog profile is left without the affiliate link", () => {
  const sageProducts = catalog.filter((item) => item.slug.startsWith("sage-") || /sage\.com/.test(item.vendorUrl));
  assert.ok(sageProducts.length >= 8);
  for (const product of sageProducts) assert.ok(sage.productSlugs.includes(product.slug), `${product.slug} lacks the Sage affiliate link`);
});

test("applying the affiliate link repeatedly never wraps the URL twice", () => {
  for (const slug of [...Object.keys(sageDestinations), ...Object.keys(destinations)]) {
    const once = withAffiliateLink({ slug, vendorUrl: "https://old.example/" });
    assert.deepEqual(withAffiliateLink(once), once);
    assert.deepEqual(withAffiliateLink(withAffiliateLink(once)), once);
  }
});

test("the deep link carries the exact destination in the u parameter", () => {
  const url = new URL(networkDeepLink(SAGE_TRACKING_LINK, "https://www.sage.com/de-de/produkte/sage-100/?a=1&b=2"));
  assert.equal(url.origin + url.pathname, "https://sagegmbh.sjv.io/QYg9aa");
  assert.equal(url.searchParams.get("u"), "https://www.sage.com/de-de/produkte/sage-100/?a=1&b=2");
});

test("placement is added as subId1 on network links only", () => {
  const deep = withAffiliateLink({ slug: "sage-100", vendorUrl: "x" }).vendorUrl;
  const placed = new URL(withPlacement(deep, "profil-sage-100-kopf"));
  assert.equal(placed.searchParams.get("subId1"), "profil-sage-100-kopf");
  assert.equal(placed.searchParams.get("u"), sageDestinations["sage-100"]);
  assert.equal(withPlacement(deep), deep);
  assert.equal(withPlacement(destinations.sevdesk, "profil-sevdesk-kopf"), destinations.sevdesk);
  assert.equal(withPlacement("https://www.sage.com/de-de/produkte/sage-100/", "x"), "https://www.sage.com/de-de/produkte/sage-100/");
});

test("an empty or malformed destination never throws when a placement is given", () => {
  for (const broken of ["", "nicht-eine-adresse", "/relativ/pfad"]) assert.equal(withPlacement(broken, "profil-x-kopf"), broken);
});
