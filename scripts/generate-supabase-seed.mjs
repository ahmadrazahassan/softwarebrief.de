import {readFileSync,writeFileSync} from "node:fs";
import {resolve} from "node:path";
const root=resolve(import.meta.dirname,"..");
const products=JSON.parse(readFileSync(resolve(root,"data/catalog.json"),"utf8"));
const sql=["-- Run after schema.sql. Source: the verified editorial dossier dated 25 September 2026."];
for(const p of products){const esc=(s)=>String(s).replaceAll("'","''");sql.push(`insert into public.catalog_products (slug,category_slug,name,profile,verified_at) values ('${esc(p.slug)}','${esc(p.categorySlug)}','${esc(p.name)}','${esc(JSON.stringify(p))}'::jsonb,'2026-09-25T00:00:00Z') on conflict (slug) do update set category_slug=excluded.category_slug,name=excluded.name,profile=excluded.profile,verified_at=excluded.verified_at,updated_at=now();`);sql.push(`insert into public.outbound_links (product_slug,destination_url,link_type,active) select '${esc(p.slug)}','${esc(p.vendorUrl)}','direct',true where not exists (select 1 from public.outbound_links where product_slug='${esc(p.slug)}' and active);`)}
writeFileSync(resolve(root,"supabase/seed.sql"),sql.join("\n\n")+"\n");
process.stdout.write(`Wrote seed for ${products.length} products\n`);
