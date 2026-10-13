/* Prüft, ob alle Sage Banner noch erreichbar sind und als PNG ausgeliefert werden. Es werden nur Kopfdaten abgefragt.
   Aufruf:  npm run check:banners
   Sage kann Anzeigen im Affiliate Programm ersetzen oder beenden; dann liefert Impact 404 und die Seite zeigt eine Lücke.
   Ein Netzwerkfehler wird zweimal wiederholt und dann als Fehler gemeldet, ohne das Skript abzubrechen. */

import { bannerImageUrl, bannerSets } from "../lib/sage-banners.ts";

const ads = Object.values(bannerSets).flatMap((set) => Object.entries(set.ads).map(([size, id]) => ({ set: set.id, size, id })));

async function probe(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(20000) });
      return { status: res.status, type: res.headers.get("content-type") ?? "" };
    } catch (error) {
      if (attempt === 3) return { status: 0, type: `${error.cause?.code ?? error.name}` };
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }
}

let failed = 0;
for (const ad of ads) {
  const { status, type } = await probe(bannerImageUrl(ad.id));
  const ok = status === 200 && type.startsWith("image/png");
  if (!ok) failed++;
  console.log(`${ok ? "ok    " : "FEHLER"} ${ad.set.padEnd(10)} ${ad.size.padEnd(8)} Anzeige ${ad.id}  ${status || "keine Antwort"} ${type}`);
}
console.log(failed ? `\n${failed} von ${ads.length} Bannern nicht erreichbar.` : `\nAlle ${ads.length} Banner erreichbar.`);
process.exit(failed ? 1 : 0);
