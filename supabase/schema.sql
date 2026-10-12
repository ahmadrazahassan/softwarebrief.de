-- Softwarebrief: run once in the Supabase SQL editor. No private credentials belong in this repository.
create extension if not exists pgcrypto;

create table if not exists public.catalog_products (
  slug text primary key,
  category_slug text not null check (category_slug in ('buchhaltung','lohnabrechnung','hr','crm','erp')),
  name text not null,
  profile jsonb not null,
  published boolean not null default true,
  verified_at timestamptz not null,
  updated_at timestamptz not null default now()
);
create index if not exists catalog_products_category_idx on public.catalog_products(category_slug);
alter table public.catalog_products enable row level security;
create policy "Read published product profiles" on public.catalog_products for select to anon, authenticated using (published = true);

create table if not exists public.user_reviews (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null references public.catalog_products(slug),
  rating smallint not null check (rating between 1 and 5),
  title text not null check (char_length(title) between 8 and 120),
  body text not null check (char_length(body) between 80 and 3000),
  display_name text not null check (char_length(display_name) between 2 and 80),
  usage_period text,
  company_size text,
  moderation_status text not null default 'pending' check (moderation_status in ('pending','published','rejected')),
  created_at timestamptz not null default now(),
  published_at timestamptz
);
create index if not exists user_reviews_product_status_idx on public.user_reviews(product_slug,moderation_status,published_at);
alter table public.user_reviews enable row level security;
create policy "Read published reviews" on public.user_reviews for select to anon, authenticated using (moderation_status = 'published');
create policy "Submit pending reviews" on public.user_reviews for insert to anon, authenticated with check (moderation_status = 'pending' and published_at is null);

create table if not exists public.outbound_links (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null references public.catalog_products(slug),
  destination_url text not null,
  link_type text not null default 'direct' check (link_type in ('direct','affiliate')),
  active boolean not null default true,
  verified_at timestamptz not null default now()
);
create unique index if not exists outbound_links_active_product_idx on public.outbound_links(product_slug) where active;
alter table public.outbound_links enable row level security;
create policy "Read active outbound links" on public.outbound_links for select to anon, authenticated using (active = true);

-- Public clients cannot edit catalog entries, approve reviews, or change vendor links.
-- Moderate reviews in the Supabase console with a trusted operator account.
