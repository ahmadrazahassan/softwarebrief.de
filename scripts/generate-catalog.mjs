import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "../research/verified-product-dossier.md");
const localSource = resolve(root, "content/verified-product-dossier.md");
mkdirSync(dirname(localSource), { recursive: true });
copyFileSync(source, localSource);
const text = readFileSync(localSource, "utf8");
const categories = { Buchhaltung: "buchhaltung", Lohnabrechnung: "lohnabrechnung", HR: "hr", CRM: "crm", ERP: "erp" };
const slugMap = {
  "FastBill":"fastbill", "Lexware Office":"lexware-office", "sevdesk":"sevdesk", "Sage Active":"sage-active", "Billomat":"billomat",
  "Sage Payroll / Sage Business Cloud Lohnabrechnung":"sage-payroll", "Lexware Office Lohn & Gehalt":"lexware-office-lohn-gehalt", "DATEV Lohn und Gehalt classic":"datev-lohn-und-gehalt", "Agenda Personalwesen":"agenda-personalwesen", "Personio Payroll":"personio-payroll",
  "Personio":"personio", "Factorial":"factorial", "Kenjo":"kenjo", "HR WORKS":"hr-works", "HiBob / Bob":"hibob-bob",
  "Pipedrive":"pipedrive", "HubSpot Sales Hub":"hubspot-sales-hub", "CentralStationCRM":"centralstationcrm", "Zoho CRM":"zoho-crm", "SuperOffice CRM":"superoffice-crm",
  "weclapp":"weclapp", "Xentral":"xentral", "Odoo":"odoo", "Sage 100":"sage-100", "Microsoft Dynamics 365 Business Central":"microsoft-dynamics-365-business-central"
};
const lines = text.split("\n");
let category = "";
let current = null;
const products = [];
for (const line of lines) {
  const categoryMatch = line.match(/^## (Buchhaltung|Lohnabrechnung|HR|CRM|ERP)\s*$/);
  if (categoryMatch) { category = categoryMatch[1]; continue; }
  const productMatch = line.match(/^### (\d+)\. (.+?)\s*$/);
  if (productMatch && category) {
    if (current) products.push(current);
    current = { id:Number(productMatch[1]), name:productMatch[2], slug:slugMap[productMatch[2]], category, categorySlug:categories[category], raw:"" };
    continue;
  }
  if (line.startsWith("## Redaktionsregeln")) { if (current) products.push(current); current = null; break; }
  if (current) current.raw += line + "\n";
}
const clean = (value) => value?.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1").replace(/\*\*/g, "").trim() || "";
const field = (raw, label) => {
  const pattern = new RegExp(`\\*\\*${label}:\\*\\*\\s*([\\s\\S]*?)(?=\\s*\\*\\*[^*]+:\\*\\*|\\s*\\[[^\\]]+\\]\\(https?:|$)`);
  return clean(raw.match(pattern)?.[1]);
};
for (const product of products) {
  const raw = product.raw;
  product.fit = field(raw,"Für wen");
  product.pricing = field(raw,"Preis");
  product.features = field(raw,"Funktionen");
  product.review = field(raw,"Redaktionelle Einschätzung");
  product.alternatives = field(raw,"Alternativen").split(/,\s*/).filter(Boolean);
  product.sources = [...raw.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)].map((m) => ({label:m[1],url:m[2]}));
  product.vendorUrl = product.sources[0]?.url ?? "";
  product.priceShort = product.pricing.split(/[.;]/)[0].slice(0,105);
  delete product.raw;
  if (!product.slug || !product.fit || !product.pricing || !product.review || !product.sources.length) throw new Error(`Incomplete product ${product.name}`);
}
if (products.length !== 25) throw new Error(`Expected 25 products, got ${products.length}`);
mkdirSync(resolve(root,"data"),{recursive:true});
writeFileSync(resolve(root,"data/catalog.json"),JSON.stringify(products,null,2)+"\n");
process.stdout.write(`Wrote ${products.length} profiles\n`);
