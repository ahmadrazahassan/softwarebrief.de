# Klarlotse

German software comparison site for small and medium businesses. The starter catalog contains 25 researched products across accounting, payroll, HR, CRM and ERP. Product claims are linked to the original vendor sources. The editorial source dossier is in `content/verified-product-dossier.md`.

## Run locally

Use Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

The site works immediately with the checked in research catalog. No database credentials are required for local preview.

## Connect Supabase

1. Create a Supabase project and run `supabase/schema.sql` once in its SQL editor.
2. Run `supabase/seed.sql` in the SQL editor. It adds all 25 product profiles and their direct vendor links.
3. Copy `.env.example` to `.env.local` and add the project URL and public anon key. Never add the service role key to this site or the repository.
4. Restart the development server. The homepage, category pages, product profiles, comparisons and recommendation flow will use published Supabase catalog entries. The checked in catalog remains available if Supabase is temporarily unreachable.

`catalog_products.profile` stores the complete structured profile. The `outbound_links` table stores the active vendor destination for each product. Set `link_type` to `affiliate` only when a real agreement and tracking URL exist. The site then shows `Werbung` beside that link and adds `rel="sponsored"`. Never replace a vendor link with an unverified destination.

The review form appears after Supabase is connected. Submitted reviews remain `pending` and are invisible to visitors. Review each submission in the Supabase console, then set `moderation_status` to `published` and `published_at` to the publication time. No fabricated ratings or testimonials are included. The public anon key can insert pending reviews but cannot approve them or edit catalog entries.

## Content and release notes

The product dossier and guide copy were researched for 25 September 2026. Verify every live price and tariff condition again before public launch. The site does not claim to have personally tested the products. The 25 products are a curated selection, not the entire German market.

The product cards use real company marks stored under `public/logos/`. `data/logo-sources.json` records the source URL for each one. Some marks come directly from the vendor site; others use an official company avatar or a brand icon collection when the vendor site blocked asset downloads. Logos identify the product only and do not imply a partnership. Review the relevant brand rules before public release.

The contact, imprint and privacy pages explicitly await the real operator identity and contact details. Fill these with accurate legal information before making the site public. Decide how long review submissions are retained and document this in the privacy notice before enabling reviews publicly.

The visual brief and complete website generation prompt are in the parent workspace at `website-generation-prompt.md`; reference screenshots and design notes are under `research/`.
