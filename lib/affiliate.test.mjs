import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { SAGE_TRACKING_LINK, affiliateLinkAttributes, affiliatePartners, networkDeepLink, sageDestinations, sageProductLinks, withAffiliateLink, withPlacement } from "./affiliate.ts";

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
const SAGE_LINK = "https://sagegmbh.sjv.io/X4qb2G";
const sageDeep = (target) => `${SAGE_LINK}?u=${encodeURIComponent(target)}`;
/* Ein eigener Kurzlink je Profil ersetzt den Deep Link über u. */
const sageExpected = (slug) => sageProductLinks[slug] ?? sageDeep(sageDestinations[slug]);

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
  assert.equal(sage.vendorUrl, SAGE_LINK);
  assert.equal(sage.vendorUrl, SAGE_TRACKING_LINK);
});

test("every Sage catalog profile deep links to its own page through the network link", () => {
  for (const [slug, target] of Object.entries(sageDestinations)) {
    const product = catalog.find((item) => item.slug === slug);
    assert.ok(product, `${slug} is missing from the catalog`);
    assert.equal(target, product.vendorUrl, `${slug}: destination differs from data/catalog.json`);
    const updated = withAffiliateLink({ slug, vendorUrl: "https://old.example/", linkType: "direct" });
    assert.equal(updated.vendorUrl, sageExpected(slug));
    assert.equal(updated.linkType, "affiliate");
  }
});

test("Sage product short links are clean Impact links, one per profile, each with its own landing page", () => {
  const links = Object.entries(sageProductLinks);
  for (const [slug, link] of links) {
    assert.ok(slug in sageDestinations, `${slug} is not a Sage profile`);
    const url = new URL(link);
    assert.equal(url.origin, "https://sagegmbh.sjv.io", `${slug}: not a Sage tracking link`);
    assert.match(url.pathname, /^\/[A-Za-z0-9_-]+$/, `${slug}: expected a short link like https://sagegmbh.sjv.io/AbC123`);
    assert.equal(url.search + url.hash, "", `${slug}: leave Sub IDs empty when creating the link, subId1 is added per placement`);
    assert.notEqual(link, SAGE_TRACKING_LINK, `${slug}: the general link has no landing page, create one with the product page`);
    const placed = new URL(withPlacement(link, `profil-${slug}-kopf`));
    assert.equal(placed.searchParams.get("subId1"), `profil-${slug}-kopf`);
    assert.equal(placed.searchParams.get("u"), null);
  }
  assert.equal(new Set(links.map(([, link]) => link)).size, links.length, "two profiles share one short link");
});

test("no Sage catalog profile is left without the affiliate link", () => {
  const sageProducts = catalog.filter((item) => item.slug.startsWith("sage-") || /sage\.com/.test(item.vendorUrl));
  assert.ok(sageProducts.length >= 8);
  for (const product of sageProducts) assert.ok(sage.productSlugs.includes(product.slug), `${product.slug} lacks the Sage affiliate link`);
});

test("every Sage button resolves to the supplied tracking link, with or without a placement", () => {
  for (const slug of Object.keys(sageDestinations)) {
    const { vendorUrl, linkType } = withAffiliateLink({ slug, vendorUrl: "https://www.sage.com/de-de/", linkType: "direct" });
    assert.equal(linkType, "affiliate");
    for (const href of [vendorUrl, withPlacement(vendorUrl, `profil-${slug}-kopf`)]) {
      const url = new URL(href);
      if (sageProductLinks[slug]) {
        assert.equal(url.origin + url.pathname, sageProductLinks[slug], `${slug}: click would not be counted by Impact`);
        assert.equal(url.searchParams.get("u"), null);
        continue;
      }
      assert.equal(url.origin + url.pathname, SAGE_LINK, `${slug}: click would not be counted by Impact`);
      assert.equal(url.searchParams.get("u"), sageDestinations[slug]);
    }
  }
});

test("the Sage profile showcase button lands on the same page as the profile button", () => {
  const source = readFileSync(new URL("../data/vendor-media.ts", import.meta.url), "utf8");
  const sources = [...source.matchAll(/"(sage-[a-z0-9-]+)":\s*\{\s*vendor: "Sage",\s*publicationApproval: [^,]+,\s*source: "([^"]+)"/g)];
  assert.ok(sources.length >= 4, "expected the Sage media entries to be found");
  for (const [, slug, url] of sources) assert.equal(url, sageDestinations[slug], `${slug}: showcase source differs from the tracked destination`);
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
  assert.equal(url.origin + url.pathname, SAGE_LINK);
  assert.equal(url.searchParams.get("u"), "https://www.sage.com/de-de/produkte/sage-100/?a=1&b=2");
});

test("placement is added as subId1 on network links only", () => {
  const deep = withAffiliateLink({ slug: "sage-100", vendorUrl: "x" }).vendorUrl;
  const placed = new URL(withPlacement(deep, "profil-sage-100-kopf"));
  assert.equal(placed.searchParams.get("subId1"), "profil-sage-100-kopf");
  assert.equal(placed.searchParams.get("u"), sageProductLinks["sage-100"] ? null : sageDestinations["sage-100"]);
  assert.equal(withPlacement(deep), deep);
  assert.equal(withPlacement(destinations.sevdesk, "profil-sevdesk-kopf"), destinations.sevdesk);
  assert.equal(withPlacement("https://www.sage.com/de-de/produkte/sage-100/", "x"), "https://www.sage.com/de-de/produkte/sage-100/");
});

test("an empty or malformed destination never throws when a placement is given", () => {
  for (const broken of ["", "nicht-eine-adresse", "/relativ/pfad"]) assert.equal(withPlacement(broken, "profil-x-kopf"), broken);
});

test("affiliate links send the site address as referrer so Impact can attribute the click", () => {
  const rel = affiliateLinkAttributes.rel.split(/\s+/);
  assert.ok(rel.includes("sponsored"));
  assert.ok(rel.includes("noopener"));
  assert.ok(!rel.includes("noreferrer"), "noreferrer hides the referring domain from the network");
  assert.equal(affiliateLinkAttributes.referrerPolicy, "strict-origin-when-cross-origin");
});

test("affiliate links and banners use the shared attributes and no component hard-codes a sponsored rel", () => {
  const root = new URL("../", import.meta.url);
  const code = (path) => readFileSync(new URL(path, root), "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/(?<!:)\/\/.*$/gm, "");
  for (const file of ["components/vendor-link.tsx", "components/sage-banner.tsx"]) {
    assert.match(code(file), /import \{[^}]*\baffiliateLinkAttributes\b[^}]*\} from "@\/lib\/affiliate"/, `${file} does not import affiliateLinkAttributes`);
    assert.match(code(file), /\{\.\.\.(affiliateLinkAttributes|linkAttributes)\}/, `${file} does not spread the shared attributes onto its link`);
  }
  for (const dir of ["app", "components"]) {
    for (const file of readdirSync(new URL(dir, root), { recursive: true }).filter((name) => name.endsWith(".tsx"))) {
      assert.doesNotMatch(code(`${dir}/${file}`), /rel=["{`][^>]*sponsored/, `${dir}/${file}: use affiliateLinkAttributes for affiliate links`);
    }
  }
});
