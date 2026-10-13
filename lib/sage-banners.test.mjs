import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { bannerClickUrl, bannerFormats, bannerImageUrl, bannerSets, bannerSources, categoryBanners, homeBanners, isPlacementId, profileBanners, supportsFormat } from "./sage-banners.ts";
import { sageDestinations } from "./affiliate.ts";

const catalog = JSON.parse(readFileSync(new URL("../data/catalog.json", import.meta.url), "utf8"));
const categorySlugs = new Set(catalog.map((item) => item.categorySlug));

/* Sage Export "Ads.csv" (13. Oktober 2026). Die Felder enthalten keine Kommas in Anführungszeichen. */
const [header, ...lines] = readFileSync(new URL("../data/sage-ads-export.csv", import.meta.url), "utf8").split(/\r?\n/).filter(Boolean);
const columns = header.split(",");
const exported = lines.map((line) => Object.fromEntries(line.split(",").map((value, index) => [columns[index], value])));
const allPlaced = [...Object.values(homeBanners), ...Object.values(categoryBanners), ...Object.values(profileBanners).flatMap((slot) => [...slot.intro, ...slot.closing])];

test("the table covers exactly the 25 active ads of the Sage export", () => {
  assert.equal(exported.length, 25);
  const ours = Object.values(bannerSets).flatMap((set) => Object.values(set.ads));
  assert.equal(ours.length, 25);
  assert.equal(new Set(ours).size, 25, "an ad number is used twice");
  assert.deepEqual([...ours].sort(), exported.map((row) => Number(row.AdId)).sort());
});

test("each ad number, size, landing page and click link matches the Sage export", () => {
  for (const row of exported) {
    assert.equal(row.State, "ACTIVE");
    assert.equal(row.ProgramId, "27498");
    const size = row.Creative.replace(/\.png$/, "");
    assert.equal(size, `${row.ThirdPartyServableAdCreativeWidth}x${row.ThirdPartyServableAdCreativeHeight}`);
    const set = Object.values(bannerSets).find((candidate) => candidate.landing === row.LandingPage);
    assert.ok(set, `no set for landing page ${row.LandingPage}`);
    assert.equal(set.ads[size], Number(row.AdId), `${set.id} ${size}`);
    assert.equal(row.TrackingLink, `https://sagegmbh.sjv.io/c/7957351/${row.AdId}/27498`);
    assert.equal(bannerClickUrl(Number(row.AdId), "test").split("?")[0], row.TrackingLink);
  }
});

test("image and click URLs have the documented shape", () => {
  assert.equal(bannerImageUrl(3364245), "https://a.impactradius-go.com/display-ad/27498-3364245");
  assert.equal(bannerClickUrl(3364245, "start-kategorien-hr"), "https://sagegmbh.sjv.io/c/7957351/3364245/27498?subId1=start-kategorien-hr");
});

test("placement ids stay URL safe and are validated", () => {
  for (const good of ["start-partner-operations", "profil-sage-hr-payroll-ende-hr", "a1"]) assert.ok(isPlacementId(good), good);
  for (const bad of ["", "Start", "a b", "a_b", "-a", "a-", "a--b", "ä", "x".repeat(65)]) assert.ok(!isPlacementId(bad), bad);
  assert.throws(() => bannerClickUrl(1, "Nicht gültig"));
});

test("every placed banner supports its format and resolves its sizes", () => {
  assert.ok(allPlaced.length >= 10);
  for (const placed of allPlaced) {
    const set = bannerSets[placed.set];
    assert.ok(set, `unknown set ${placed.set}`);
    assert.ok(supportsFormat(set, placed.format), `${placed.set} cannot show ${placed.format}`);
    const { fallback, wide } = bannerSources(set, placed.format);
    assert.equal(fallback.size, bannerFormats[placed.format].fallback);
    assert.equal(wide.length, bannerFormats[placed.format].wide.length);
  }
});

test("wide sources are ordered widest first so the browser picks the largest that fits", () => {
  for (const format of Object.keys(bannerFormats)) {
    const widths = bannerFormats[format].wide.map((entry) => entry.minWidth);
    assert.deepEqual(widths, [...widths].sort((a, b) => b - a), format);
    for (const entry of bannerFormats[format].wide) assert.ok(Number(entry.size.split("x")[0]) <= entry.minWidth - 64, `${format} ${entry.size} does not fit at ${entry.minWidth}px`);
  }
});

test("a set without a wide size refuses the wide formats instead of showing a wrong banner", () => {
  assert.ok(!supportsFormat(bannerSets.erp, "billboard"));
  assert.ok(!supportsFormat(bannerSets.erp, "leaderboard"));
  assert.ok(supportsFormat(bannerSets.erp, "rectangle"));
  assert.throws(() => bannerSources(bannerSets.erp, "billboard"));
});

test("banners appear only on Sage profiles and on categories that have a matching creative", () => {
  for (const slug of Object.keys(profileBanners)) {
    assert.ok(slug in sageDestinations, `${slug} is not a Sage profile`);
    assert.ok(catalog.some((item) => item.slug === slug), `${slug} is not in the catalog`);
  }
  for (const category of Object.keys(categoryBanners)) assert.ok(categorySlugs.has(category), category);
  /* Kein passendes Banner im Sage Export: bewusst ohne Anzeige. */
  assert.ok(!("sage-active" in profileBanners));
  assert.ok(!("sage-sales-management" in profileBanners));
});

test("alt texts and landing pages are filled in", () => {
  for (const set of Object.values(bannerSets)) {
    assert.ok(set.alt.length > 10, set.id);
    assert.match(set.landing, /^https:\/\/www\.sage\.com\/de-de\//);
  }
});
