# Softwarebrief

German software comparison site for small and medium businesses. The starter catalog contains 30 researched products across accounting, payroll, HR, CRM and ERP. Product claims are linked to the original vendor sources. The editorial source dossier is in `content/verified-product-dossier.md`.

## Run locally

Use Node.js 24.x (also configured for Vercel).

```bash
npm ci
npm run dev
```

The site works immediately with the checked in research catalog. No database credentials are required for local preview.

## Connect Supabase

1. Create a Supabase project and run `supabase/schema.sql` once in its SQL editor.
2. Run `supabase/seed.sql` in the SQL editor. It adds all 30 product profiles and their direct vendor links.
3. Copy `.env.example` to `.env.local` and add the project URL and public anon key. Never add the service role key to this site or the repository.
4. Restart the development server. The homepage, category pages, product profiles, comparisons and recommendation flow will use published Supabase catalog entries. The checked in catalog remains available if Supabase is temporarily unreachable.

`catalog_products.profile` stores the complete structured profile. The `outbound_links` table stores the active vendor destination for each product. Set `link_type` to `affiliate` only when a real agreement and tracking URL exist. The site then shows `Werbung` beside that link and adds `rel="sponsored"`. Never replace a vendor link with an unverified destination.

The partner section appears immediately after the homepage guides. Official FreshBooks and easybill SVG marks are downloaded from their own websites; provenance is in data/logo-sources.json. CTA labels wrap within their buttons, including translated labels.

The six confirmed Affiliate Partners (FastBill, Lexware, sevdesk, FreshBooks, easybill and Sage) and the exact operator supplied tracking URLs live in `lib/affiliate.ts`. The overrides run on both the local catalog and the merged Supabase catalog, so older remote destinations cannot undo these links. Both Lexware Office profiles use the Lexware partner URL. `VendorLink` applies the same override for every provider CTA, including tariff cards and the mobile bar, and adds the visible `Werbung` label plus `rel="sponsored"`. The homepage shows all six partners; FreshBooks and easybill link directly to their vendors and do not claim to have researched catalog profiles. Affiliate disclosure appears before the partner cards, in the global footer, on partner profiles, and at `/methodik#affiliate-offenlegung`. Editorial source links keep their original destinations.

The review form appears after Supabase is connected. Submitted reviews remain `pending` and are invisible to visitors. Review each submission in the Supabase console, then set `moderation_status` to `published` and `published_at` to the publication time. No fabricated ratings or testimonials are included. The public anon key can insert pending reviews but cannot approve them or edit catalog entries.

## Newsletter ("Softwarebrief")

The newsletter page lives at `/newsletter`. Sign-up forms also appear at the end of the homepage and of every guide. The confirmation and goodbye pages are `/newsletter/bestaetigt` and `/newsletter/abgemeldet` (both `noindex`).

**Architecture.** Resend sends a confirmation email through its transactional API. A signed link is valid for 48 hours. Opening the link does not subscribe the visitor: an explicit confirmation POST creates or updates the contact in the dedicated Softwarebrief segment. Resend contact properties store the request time, confirmation time and consent version. An old confirmation cannot reactivate a contact after unsubscribe. No local subscriber database is used. Send the monthly issue as a Resend Broadcast to this segment and include Resend's native unsubscribe link in every issue.

**Configuration.** The default remains off when NEWSLETTER_PROVIDER is empty. Use NEWSLETTER_PROVIDER=resend, RESEND_API_KEY, RESEND_FROM_EMAIL, NEWSLETTER_TOKEN_SECRET and RESEND_SEGMENT_ID as server environment variables. A sending-only key can deliver emails but cannot manage contacts: supply a Full access key through RESEND_CONTACTS_API_KEY, or use one Full access RESEND_API_KEY for both. The token secret must have at least 32 random characters and remain stable between deployments. NEXT_PUBLIC_SITE_URL defaults to the domain in data/operator.ts. The Resend sender domain must be verified.

**One-time setup.** Put the real credentials in the ignored .env.local and run `node scripts/configure-resend.mjs`. This reuses or creates the Softwarebrief segment and the three consent properties, then writes RESEND_SEGMENT_ID to .env.local. It sends no email. Configure the same values in the production host. Never commit real .env files. The tracked .env.example contains placeholders only.

**Local preview.** NEWSLETTER_PROVIDER=dev validates the form and logs a masked address without sending or storing anything. This mode is disabled in production. For actual signup, the form only succeeds after Resend accepts the confirmation email and contact storage has been checked. Confirmation errors and expired links never display a successful subscription. Add request rate limiting at the hosting edge before public signup; the existing form honeypot remains active.

Copy lives in `data/newsletter.ts`; the sample issue is built from the existing CRM guide in `data/newsletter-sample.ts`. The sample is labelled as such and is not presented as a sent issue. Run the tests with `npm test`.

## Sage affiliate links and banners

Sage is a confirmed partner via Impact (program 27498). The operator confirmed the approval on 13 October 2026.

- **Links.** `lib/affiliate.ts` sends every Sage profile through its own Impact short link (`sageProductLinks`, created with the product page as Landing Page, for example `https://sagegmbh.sjv.io/OYQW5K` for Sage Active). The general link `https://sagegmbh.sjv.io/X4qb2G` (Sage homepage) serves the Sage partner card. Every Sage button uses these links (`VendorLink` everywhere, including "Bei Sage ansehen" in the profile showcase), so Impact counts the click. `sageDestinations` must equal `vendorUrl` in `data/catalog.json` (a test enforces it). `VendorLink` takes an optional `placement` that is appended as `subId1`, so Impact reports show which button converts (`profil-<slug>-kopf`, `-mobil`, `-tarif`, `-abschluss` and so on).
- **Banners.** `lib/sage-banners.ts` holds the 25 official creatives from Sage's export (`data/sage-ads-export.csv`); a test cross-checks every ad number, size, landing page and click link against that file. `components/sage-banner.tsx` renders one creative per slot, picks the size by viewport width, keeps the space reserved (no layout shift), labels it "Werbung" and adds `rel="sponsored"`. Placements are data: `homeBanners`, `categoryBanners`, `profileBanners`. A format a set cannot fill (the ERP set has no wide sizes) throws instead of showing a wrong banner.
- **Delivery.** Images load from Impact's CDN (`bannerImageBase`), without a referrer and lazily. This is disclosed in `/datenschutz`. To self-host instead, copy the PNGs to `public/` and change `bannerImageBase`; then the privacy page can drop the Impact image paragraph.
- **Referrer (click attribution).** Every affiliate link and banner spreads `affiliateLinkAttributes` from `lib/affiliate.ts`: `rel="sponsored noopener"` and `referrerpolicy="strict-origin-when-cross-origin"`. Never add `noreferrer` to an affiliate link: without a referrer Impact records the click with no referring domain and cannot match it to the registered website. The policy sends only the site origin (`https://www.softwarebrief.de/`), never the page path or query; the clicked spot is in `subId1`. `npm run build` ends with `npm run check:links`, which scans every prerendered page and fails the build if an affiliate link lacks `sponsored`, carries `noreferrer` or has another referrer policy. A unit test also blocks hand-written `sponsored` rels in `app/` and `components/`.
- **Deep links.** Impact documents deep links (`u=`) for the full tracking link (`/c/7957351/<ad id>/27498`), not for a short link such as `X4qb2G`, and the partner UI only hands out short links. The documented way is one short link per product: in Impact "Create a link", choose Sage Germany, enter the product page from `sageDestinations` as Landing Page, keep Media Property `www.softwarebrief.de (8998199)`, leave the Sub IDs under Advanced empty, then add the link to `sageProductLinks`. A product with its own link uses it directly (plus `subId1`); products without one fall back to `X4qb2G?u=<page>`. Tests reject a reused general link, a link with query parameters and duplicates. `X4qb2G` itself (no landing page) stays the link for the generic Sage card.
- **Not used.** No impression pixel, no pop ups, no overlays, no auto redirects, no edited creatives.
- **Health check.** `npm run check:banners` sends a header only request for each of the 25 images. Run it before launch and after Sage changes creatives.
- Notes on rules, placements and open points: `research/sage-affiliate-integration-2026-10-13.md` (one level above this folder).

## Media on Cloudinary (screenshots, videos, PDFs)

Sage screenshots, videos and PDFs are currently withheld from the public website: the operator confirmed on 13 October 2026 that no written republication permission exists. `data/vendor-media.ts` keeps the catalogue of media, but `vendorMedia` exports only entries with a documented `publicationApproval` reference. Every Sage entry currently has `null`. Profile pages show an official Sage source link and attribution instead; homepage Sage screenshot cards and embedded films are excluded. Source credit does not grant republication rights. The four Intacct PDF copies were moved out of `public/` into ignored `media-originals/pending-permission/sage-intacct/`.

- **Environment.** `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is public (it is part of every delivery URL; the code falls back to the manifest if it is missing). `CLOUDINARY_URL`, `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` are only for the upload script, belong in `.env.local`, and must never get a `NEXT_PUBLIC_` prefix. A build scan confirms none of them ends up in `dist/`.
- **Upload.** Source files are kept in `media-originals/` (git-ignored). `npm run media:upload` uploads them under `klarlotse/<product>/<name>`, skips files that already exist, uploads large videos in chunks, pre-generates the 720p video rendition and rewrites `data/cloudinary-assets.json`. `-- --dry` shows the plan only.
- **Delivery.** Images get `f_auto,q_auto` and an explicit width per use (stage 1400 px, thumbnails 360 px). Videos use the pre-generated rendition `c_limit,q_auto:eco,vc_h264,w_1280`, which must stay identical to the one in `scripts/upload-media.mjs`, otherwise Cloudinary re-encodes on the first request (up to a minute).
- **PDFs.** No Sage PDF copies are publicly served. After a documented written approval, restore only the approved files and confirm delivery before enabling a gallery. New Cloudinary accounts can block PDF delivery (HTTP 401); changing the delivery setting does not confer publication rights.
- **Privacy.** The source-link panels make no Cloudinary media requests. If approved media are enabled later, check the Cloudinary processing agreement and privacy text first.

## Softwarebrief Check (no star ratings)

Every product profile opens with four facts computed from verified site data: tariffs with a public euro price, core functions confirmed by a vendor source, the entry price and the number of vendor pages checked. There is deliberately no star score, because Softwarebrief has neither hands-on tests nor a user survey, and third party scores (for example OMR) cannot be shown as our own. Rules live in `lib/check-rules.ts` (tested in `lib/check-rules.test.mjs`), the panel in `components/softwarebrief-check.tsx`. See `research/softwarebrief-check-2026-10-13.md` for the reasoning and for what real stars would need.

## Guides (Ratgeber)

- `data/guides.ts` is the light index (title, intro, reading time, SEO fields). Cards, the homepage and the guide list only load this file. The homepage shows the first six entries.
- Short guides (the first ten) keep their text in `data/legacy-guides.ts`. The long articles are one file each in `data/articles/` (blocks: paragraphs, lists, tables, callouts; plus key takeaways, FAQ, sources, related guides). `data/guide-bodies.ts` loads a body on demand, server side only. To add an article: create the file, add its meta entry to `longGuides` in `data/guides.ts`, register it in `data/guide-bodies.ts`, add a thumbnail (below) and run `npm run check:guides`.
- Inline markup in article text: `**bold**` and `[label](/internal/path)` or `[label](https://external)`.
- `npm run check:guides` fails on missing text, broken internal links, unknown product slugs, missing thumbnails, dash characters in copy, titles over 62 characters and a reading time that does not match the word count.
- Thumbnails: `npm run thumbnails` draws the covers of the long articles (satori, Lato from `scripts/fonts`) in the style of the existing ones. To use your own image instead, save it as `public/editorial-thumbnails/<slug>.webp` and run `npm run images:optimize -- --force`.
- Legal and tax statements in the articles are checked against gesetze-im-internet.de, the chambers of commerce and the sources listed at the end of each article. They carry a dated note. Re-check them when laws change (E-Rechnung, working time act, GoBD).

## Images

`npm run images:optimize` creates WebP variants (640, 960, 1280, 1600 wide, quality 90, `--force` rebuilds) for `public/illustrations`, `public/editorial-thumbnails` and `public/product-media` and writes `data/image-variants.json`. `components/fast-image.tsx` serves them through `srcset`, because the production image endpoint does not resize. Cloudinary images use widths up to 2400 px for the showroom stage (never above the original).

## SEO and public address

The public address is `https://www.softwarebrief.de`, set once as `siteUrl` in `data/operator.ts`. Vercel redirects the apex domain to www. `lib/site.ts` normalizes older production env values to the serving host for canonical addresses, Open Graph URLs, structured data, `robots.txt`, `sitemap.xml` and newsletter confirmation links. A `NEXT_PUBLIC_SITE_URL` environment variable can still select another origin for preview deployments.

## Quality checks

| Command | What it checks |
|---|---|
| `npm test` | Newsletter logic and Softwarebrief Check rules |
| `npm run check:guides` | All guides, see above |
| `node scripts/qa-crawl.mjs <base url>` | Every page and link of a running site: status, title, description, one H1, alt texts, broken internal links and files |
| `npx tsx scripts/check-outbound.ts` | Whether vendor and source pages still respond (403 and 429 mean "bot protection, check by hand") |

## Content and release notes

The product dossier and guide copy were researched for 25 September 2026, the long articles for 13 October 2026. Verify every live price and tariff condition again before public launch. The site does not claim to have personally tested the products. The 30 products are a curated selection, not the entire German market.

The product cards use real company marks stored under `public/logos/`. `data/logo-sources.json` records the source URL for each one. Some marks come directly from the vendor site; others use an official company avatar or a brand icon collection when the vendor site blocked asset downloads. Logos identify the product only and do not imply a partnership. Review the relevant brand rules before public release.

## Legal pages (Impressum, Datenschutz, Kontakt)

The operator's details live in one file, `data/operator.ts`, and feed all three pages. Filled in on 13 October 2026: name, c/o address, phone and the e-mail address `niklas.winterfeld@softwarebrief.de` (shown on Impressum, Kontakt, Datenschutz, in the footer and in the newsletter FAQ). The mailbox itself must exist at the domain host before launch, and it should be the same address that Resend uses as sender. Add `vatId` if the operator has one. If the site is run through a company (UG, GmbH), the Impressum needs company name, legal form, representative and register number instead of a private person.

The privacy statement (`app/datenschutz/page.tsx`) describes server logs at the host (`operator.hosting`, Vercel for production), Vercel Web Analytics, self hosted fonts, links to external manufacturer media, contact, newsletter via Resend and optional review submissions via Supabase. The operator must have the processing agreements described for the services that are active. Update the privacy statement when enabling additional services or media delivery. Supabase reviews remain disabled without credentials.

The visual brief and complete website generation prompt are in the parent workspace at `website-generation-prompt.md`; reference screenshots and design notes are under `research/`.

## Current storage setup

| Component | Current setup |
|---|---|
| Software catalog, articles, editorial content, affiliate URLs | Versioned JSON/TypeScript files |
| Images, videos and documents | Local public assets and Cloudinary |
| Newsletter delivery and confirmed subscriber storage | Resend API, Contacts, Softwarebrief segment and consent properties |
| Supabase | Optional code and SQL schema exist; no credentials are configured, so reviews stay disabled |
| Website database | None connected; Cloudflare starter bindings have been removed |
| Site hosting | Standard Next.js on Vercel; local Next.js preview |

Real local environment variables are not pushed to GitHub. Configure them separately on any new hosting destination. No scheduler for the monthly newsletter has been created; compose and send issues from Resend Broadcasts.

## Deploy on Vercel

Import the GitHub repository as a new Vercel project. The app is at the repository root; use the Next.js framework preset, Node.js 24.x, npm ci and npm run build. vercel.json declares the framework and commands. No custom output directory or Cloudflare bindings are needed.

Add the values from your private .env.local to Vercel Project Settings → Environment Variables for Production (and Preview if needed). Required newsletter keys: NEWSLETTER_PROVIDER=resend, RESEND_API_KEY, RESEND_CONTACTS_API_KEY, RESEND_FROM_EMAIL, RESEND_SEGMENT_ID and NEWSLETTER_TOKEN_SECRET. Keep the token secret stable. Set NEXT_PUBLIC_SITE_URL=https://www.softwarebrief.de for production and add the softwarebrief.de domain in Vercel. For preview signup tests, set the public origin to that preview URL. NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is the only Cloudinary value the site needs for delivery; Cloudinary API secrets are for the local upload script only. Supabase keys are optional and not required for the catalog.

The real env file stays out of GitHub. A new hosting environment does not inherit local credentials. Redeploy after changing environment variables.

Vercel Web Analytics is installed and integrated through the root layout. In the Vercel project, open Analytics and enable Web Analytics, then deploy again. The integration removes query parameters and hashes from recorded URLs and excludes newsletter confirmation pages. There are no custom events containing form input or email addresses. The German privacy page describes the service. Setup documentation: https://vercel.com/docs/analytics/quickstart.

German email previews: npm run emails:preview. Newsletter drafts: npm run newsletter:draft creates a Resend Broadcast draft using existing published guides and a native unsubscribe link. It never sends the broadcast. Review and send the issue from Resend. The monthly issue is not scheduled automatically.

## Brand assets and email design

The existing diamond mark, Lato wordmark and green dot are exported as transparent PNGs in public/brand. The dark version appears in the light site footer above an original Frankfurt-inspired panorama. The illustration is delivered as responsive WebP variants with lazy loading; its generation prompt and provenance are in public/illustrations/footer-frankfurt.prompt.md. Confirmation emails embed the dark logo as a CID attachment, so it does not depend on a live website image URL. Monthly broadcasts use the same logo from the production domain. Both emails use the website charcoal, green and pale green colors, table layouts, German copy and a plain text alternative. Regenerate logos with npm run brand:build. Next.js output tracing explicitly includes the confirmation logo in the Vercel function.
