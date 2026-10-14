# Sage: Quellenstand und Veröffentlichung

Geprüft am 13. Oktober 2026.

## Sage Active

Quelle: https://www.sage.com/de-de/produkte/sage-active/

Die offizielle Produktseite nennt 50 % Rabatt für die ersten drei Monate für Neukunden, gültig bis 4. Januar 2027. Danach gilt der Listenpreis. Die im Browser geladenen Preiskarten zeigen Starter 25 € regulär / 12,50 € während der Aktion und Essentials 49 € regulär / 24,50 € während der Aktion, jeweils pro Monat zzgl. MwSt. Unsere Tariftabellen und Kostenbeispiele verwenden weiterhin die Listenpreise.

Der Quellenstand wurde ausschließlich für Sage Active aktualisiert. Die Datumsangaben anderer Produktprofile bleiben bei ihrem tatsächlichen Recherchestand.

## Medien

Der Betreiber hat bestätigt, dass keine schriftliche Freigabe zur erneuten Veröffentlichung der Sage Screenshots, Videos und PDFs vorliegt. Die Sage Programmbedingungen, Abschnitt 4.2, verlangen eine schriftliche Abstimmung für andere Werbematerialien:

https://www.sage.com/de-de/-/media/files/sagedotcom/germany/documents/pdf/support-und-service/download/2025-09-programm_agbs.pdf

Deshalb verwenden die Profile von Sage Active, Sage 100, Sage Intacct und Sage Payroll offizielle Herstellerlinks mit Quellenhinweis. Sie laden keine archivierten Sage Bilder oder Videos. Die vier Intacct PDFs wurden aus dem öffentlichen Ordner entfernt. Vorhandene lokale Originale bleiben außerhalb der Veröffentlichung in einem ignorierten Archiv.

`data/vendor-media.ts` exportiert Medien nur mit einem dokumentierten `publicationApproval` Verweis. Alle Sage Einträge bleiben gesperrt. Eine Quellenangabe oder eine Zulassung zum Affiliate Programm ersetzt keine ausdrückliche Medienfreigabe. Die Zulassung vom 13. Oktober 2026 ändert daran nichts: Freigegeben sind nur die von Sage im Programm bereitgestellten Werbebanner (siehe unten), nicht die archivierten Screenshots, Videos und PDFs.

Die Sage Logos dienen der Identifikation des jeweiligen Produkts.

## Affiliate Programm und Werbebanner

Der Betreiber hat am 13. Oktober 2026 bestätigt, dass die Zulassung zum Sage Affiliate Programm (Netzwerk Impact, Programm 27498) vorliegt. Softwarebrief nennt Sage deshalb in der Affiliate Offenlegung (`lib/affiliate.ts`, Methodik, FAQ, Impressum, Datenschutz).

- **Links:** Alle Sage Profile führen über den Netzwerklink https://sagegmbh.sjv.io/X4qb2G auf die jeweilige Produktseite (Parameter `u`). Die Stelle der Seite geht als `subId1` an Impact.
- **Banner:** Die 25 von Sage bereitgestellten Banner (Export `data/sage-ads-export.csv`) werden unverändert eingebunden (`lib/sage-banners.ts`, `components/sage-banner.tsx`). Jedes Banner trägt den Hinweis "Werbung".
- **Auslieferung:** Die Bilddateien lädt der Browser von Impact (`a.impactradius-go.com`). Das ist in der Datenschutzerklärung beschrieben. Wer die Dateien selbst hosten will, ändert `bannerImageBase` in `lib/sage-banners.ts`.
- **Quelle der Bedingungen:** Die verbindlichen Programmbedingungen stehen im Impact Konto des Betreibers. Sie waren für diese Umsetzung nicht einsehbar (siehe research/sage-affiliate-integration-2026-10-13.md). Vor dem Start gegen die Bedingungen prüfen.
