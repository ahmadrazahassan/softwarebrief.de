import { products, type Product, type CategorySlug } from "@/lib/catalog";
export type Answers={category:CategorySlug|null;size:string;priority:string;special:string};
export const priorities:Record<CategorySlug,{value:string;label:string}[]>={
  buchhaltung:[{value:"rechnungen",label:"Rechnungen und Belege ordnen"},{value:"buchfuehrung",label:"Laufende Buchführung selbst erledigen"},{value:"team",label:"Buchhaltung und Lohn verbinden"}],
  lohnabrechnung:[{value:"einfach",label:"Regelmäßige Gehälter abrechnen"},{value:"sonderfaelle",label:"Komplexe Lohnfälle bearbeiten"},{value:"hr",label:"Lohn und Personal verbinden"}],
  hr:[{value:"akte",label:"Personalakten und Abläufe ordnen"},{value:"zeit",label:"Arbeitszeit und Schichten planen"},{value:"entwicklung",label:"Wachsende Teams steuern"}],
  crm:[{value:"pipeline",label:"Vertriebschancen verfolgen"},{value:"einfach",label:"Kontakte gemeinsam pflegen"},{value:"plattform",label:"Vertrieb und Service verbinden"}],
  erp:[{value:"handel",label:"Lager und Aufträge verbinden"},{value:"dienstleistung",label:"Projekte und Leistungen steuern"},{value:"produktion",label:"Fertigung und Finanzen verbinden"}],
};
const tags:Record<string,string[]>={
  "fastbill":["rechnungen","klein"],"lexware-office":["rechnungen","buchfuehrung","klein"],"sevdesk":["rechnungen","buchfuehrung","klein"],"sage-active":["buchfuehrung","team","mittel"],"billomat":["rechnungen","buchfuehrung","mittel"],
  "sage-payroll":["einfach","klein"],"lexware-office-lohn-gehalt":["einfach","klein"],"datev-lohn-und-gehalt":["sonderfaelle","baulohn","mittel"],"agenda-personalwesen":["sonderfaelle","baulohn","mittel"],"personio-payroll":["hr","mittel"],
  "personio":["akte","entwicklung","mittel"],"factorial":["akte","zeit","klein"],"kenjo":["zeit","mittel"],"hr-works":["akte","zeit","mittel"],"hibob-bob":["entwicklung","mittel"],
  "pipedrive":["pipeline","klein"],"hubspot-sales-hub":["pipeline","plattform","mittel"],"centralstationcrm":["einfach","klein"],"zoho-crm":["pipeline","plattform","mittel"],"superoffice-crm":["plattform","mittel"],
  "weclapp":["handel","dienstleistung","klein","mittel"],"xentral":["handel","mittel"],"odoo":["handel","dienstleistung","produktion","mittel"],"sage-100":["produktion","mittel"],"microsoft-dynamics-365-business-central":["produktion","mittel"]
};
export function recommend(answers:Answers,catalog:Product[]=products):{product:Product;reasons:string[];caveat:string}[]{
  if(!answers.category)return [];
  return catalog.filter((p)=>p.categorySlug===answers.category).filter((p)=>answers.special!=="baulohn"||(tags[p.slug]??[]).includes("baulohn")).map((product)=>{
    const own=tags[product.slug]??[];
    let score=0;const reasons:string[]=[];
    if(own.includes(answers.priority)){score+=4;reasons.push("Das Produkt deckt Ihren gewählten Schwerpunkt laut Herstellerangaben ab.")}
    if(answers.size==="klein"&&own.includes("klein")){score+=2;reasons.push("Die Lösung richtet sich auch an kleinere Betriebe.")}
    if(answers.size==="mittel"&&own.includes("mittel")){score+=2;reasons.push("Die Lösung bietet Funktionen für wachsende Teams.")}
    if(answers.special==="baulohn"&&own.includes("baulohn")){score+=5;reasons.push("Baulohn wird vom Hersteller als Funktion genannt.")}
    if(answers.special==="integrationen"&&/API|Integrationen|Schnittstelle|DATEV/i.test(product.features)){score+=1;reasons.push("Schnittstellen oder Integrationen werden beschrieben.")}
    if(!reasons.length)reasons.push("Das Produkt gehört zur passenden Softwarekategorie.");
    const caveat=product.slug==="datev-lohn-und-gehalt"?"Die genannten Lizenzbeträge sind kein vollständiger Gesamtpreis. Fragen Sie nach Rechenzentrumsleistungen und Zusatzdiensten.":product.slug==="agenda-personalwesen"?"Neben der Grundgebühr fallen nutzungsabhängige Kosten an. Prüfen Sie Baulohn, Arbeitsplätze und Laufzeit im Angebot.":product.pricing.includes("Anfrage")||product.pricing.includes("kein verifizierter")?"Der Gesamtpreis ist öffentlich nicht verlässlich bezifferbar. Fordern Sie ein Angebot an.":"Prüfen Sie den passenden Tarif und die konkreten Vertragsbedingungen beim Anbieter.";
    return {product,score,reasons,caveat};
  }).sort((a,b)=>b.score-a.score||a.product.id-b.product.id).slice(0,3).map(({product,reasons,caveat})=>({product,reasons,caveat}));
}
