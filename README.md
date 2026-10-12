# Softwarebrief

German software comparison site for small and medium businesses. The starter catalog contains 30 researched products across accounting, payroll, HR, CRM and ERP. Product claims are linked to the original vendor sources. The editorial source dossier is in `content/verified-product-dossier.md`.

## Run locally

Use Node.js 22.13 or later.

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

The five confirmed Affiliate Partners (FastBill, Lexware, sevdesk, FreshBooks and easybill) and the exact operator supplied tracking URLs live in `lib/affiliate.ts`. The overrides run on both the local catalog and the merged Supabase catalog, so older remote destinations cannot undo these links. Both Lexware Office profiles use the Lexware partner URL. `VendorLink` applies the same override for every provider CTA, including tariff cards and the mobile bar, and adds the visible `Werbung` label plus `rel="sponsored"`. The homepage shows all five partners; FreshBooks and easybill link directly to their vendors and do not claim to have researched catalog profiles. Affiliate disclosure appears before the partner cards, in the global footer, on partner profiles, and at `/methodik#affiliate-offenlegung`. Editorial source links keep their original destinations.

The review form appears after Supabase is connected. Submitted reviews remain `pending` and are invisible to visitors. Review each submission in the Supabase console, then set `moderation_status` to `published` and `published_at` to the publication time. No fabricated ratings or testimonials are included. The public anon key can insert pending reviews but cannot approve them or edit catalog entries.

## Newsletter ("Softwarebrief")

The newsletter page lives at `/newsletter`. Sign-up forms also appear at the end of the homepage and of every guide. The confirmation and goodbye pages are `/newsletter/bestaetigt` and `/newsletter/abgemeldet` (both `noindex`).

**Architecture.** The email service owns the subscriber list, sends the confirmation email (double opt-in) and hosts the unsubscribe link. The site only forwards the address through `POST /api/newsletter/anmeldung`. This keeps proof of consent with a processor that is under a data processing agreement and keeps every secret out of the repository. We deliberately do not store subscribers in Supabase: the double opt-in check would need a server secret (the service role key), which this project avoids.

**Default is off.** Without `NEWSLETTER_PROVIDER` the API answers 503 with a German "noch nicht freigeschaltet" message, in every environment. The form never fakes a success.

**Local preview.** Put `NEWSLETTER_PROVIDER=dev` into `.env.local` and restart the dev server. The form then validates, shows the success state with a visible "Testmodus" note and writes a masked line to the server log. No email is sent and nothing is stored. Test mode is ignored in any production build (`import.meta.env.PROD` is fixed at build time because Cloudflare Workers do not reliably set `NODE_ENV`).

**Going live with Brevo** (the only adapter so far; `lib/newsletter.ts` is the single place to add another provider such as rapidmail or CleverReach):

1. Create a Brevo account, sign the data processing agreement and create a contact list. Note its numeric ID.
2. Create a double opt-in email template in German. It must contain the confirmation link placeholder `{{ params.DOIurl }}`. Note the template ID.
3. In the list's unsubscribe settings, set the redirect page to `https://<your-domain>/newsletter/abgemeldet`.
4. Set `NEWSLETTER_PROVIDER=brevo`, `BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_DOI_TEMPLATE_ID` and `NEXT_PUBLIC_SITE_URL` as server environment variables of the hosting. After the confirmation click Brevo redirects to `<NEXT_PUBLIC_SITE_URL>/newsletter/bestaetigt`.
5. Add rate limiting or a bot challenge in front of `/api/newsletter/anmeldung` (for example a Cloudflare rate limiting rule or Turnstile). The form has a honeypot and requires JSON, but without a limit someone can still trigger confirmation emails to a third party address by repeating requests.

The Brevo request in `subscribeWithBrevo` follows its documented double opt-in endpoint and is covered by tests with mocked responses. It has not been run against a live Brevo account, so send one real signup through a test list before launch.

Copy lives in `data/newsletter.ts`; the sample issue is built from the existing CRM guide in `data/newsletter-sample.ts`. The sample is labelled as such and is not presented as a sent issue. Run the tests with `npm test`.

## Media on Cloudinary (screenshots, videos, PDFs)

The Sage screenshots, videos and PDFs are delivered from Cloudinary through `next-cloudinary`. Files live in `data/cloudinary-assets.json` (generated), are described in `data/vendor-media.ts`, and are rendered by `components/product-showcase.tsx` (screenshot showroom and PDF library) and `components/product-film.tsx` (product film in the overview). URL helpers are in `lib/cloudinary.ts`.

- **Environment.** `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is public (it is part of every delivery URL; the code falls back to the manifest if it is missing). `CLOUDINARY_URL`, `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` are only for the upload script, belong in `.env.local`, and must never get a `NEXT_PUBLIC_` prefix. A build scan confirms none of them ends up in `dist/`.
- **Upload.** Source files are kept in `media-originals/` (git-ignored). `npm run media:upload` uploads them under `klarlotse/<product>/<name>`, skips files that already exist, uploads large videos in chunks, pre-generates the 720p video rendition and rewrites `data/cloudinary-assets.json`. `-- --dry` shows the plan only.
- **Delivery.** Images get `f_auto,q_auto` and an explicit width per use (stage 1400 px, thumbnails 360 px). Videos use the pre-generated rendition `c_limit,q_auto:eco,vc_h264,w_1280`, which must stay identical to the one in `scripts/upload-media.mjs`, otherwise Cloudinary re-encodes on the first request (up to a minute).
- **PDFs.** New Cloudinary accounts block delivery of PDF and ZIP files (HTTP 401). PDF cover images work, so the library shows them from Cloudinary, but the PDF files themselves are still served from `public/sage-intacct/`. Allow PDF delivery in the Cloudinary console under Settings, Security, then set `NEXT_PUBLIC_CLOUDINARY_PDF_DELIVERY=1` and delete the PDFs from `public/`.
- **Privacy.** Visitors' browsers now request images (and, after a click, videos) from `res.cloudinary.com`. Name Cloudinary as a recipient in the privacy statement and sign its data processing agreement before launch.

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

The public address is `https://softwarebrief.de`, set once as `siteUrl` in `data/operator.ts`. It drives canonical addresses, Open Graph URLs, absolute URLs in the structured data, `robots.txt` with the sitemap line, a filled `sitemap.xml` and the newsletter confirmation link. A `NEXT_PUBLIC_SITE_URL` environment variable (at build time and as a server variable) overrides it, for example for a preview deployment.

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

The operator's details live in one file, `data/operator.ts`, and feed all three pages. Filled in on 13 October 2026: name, c/o address, phone and the e-mail address `niklas.winterfeld@softwarebrief.de` (shown on Impressum, Kontakt, Datenschutz, in the footer and in the newsletter FAQ). The mailbox itself must exist at the domain host before launch, and it should be the same address that Brevo uses as sender. Add `vatId` if the operator has one. If the site is run through a company (UG, GmbH), the Impressum needs company name, legal form, representative and register number instead of a private person.

The privacy statement (`app/datenschutz/page.tsx`) describes what the code really does: no cookies or analytics, server logs at the host (`operator.hosting`, Cloudflare by default), Cloudinary for media, self hosted fonts, contact, newsletter via Brevo, review submissions via Supabase. Before launch the operator must actually have the contracts it states (data processing agreements with the host, Cloudinary, Brevo and Supabase; choose an EU region for Supabase), and the text must be updated when something changes, for example newsletter open tracking or an analytics tool. Have a lawyer or a data protection officer read it once. Decide how long review submissions are retained and document it there before enabling reviews publicly.

The visual brief and complete website generation prompt are in the parent workspace at `website-generation-prompt.md`; reference screenshots and design notes are under `research/`.
