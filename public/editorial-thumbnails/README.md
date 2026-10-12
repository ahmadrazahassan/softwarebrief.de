# Klarlotse Ratgeber thumbnails

Ten original topic-specific thumbnails created with the built-in image generator on 13 October 2026 after analyzing the complete ten-guide library in `data/guides.ts`.

- Language: German (including correct umlauts and compound nouns).
- Original files: ten PNG images, 1672 × 941 pixels.
- Website files: ten optimized WebP images, 1536 × 864 pixels (16:9).
- Every filename matches its guide slug.
- Exact prompts, German headlines, supporting lines, subjects and alternative text: `manifest.json`.
- Visual overview and individual download links: `index.html`.
- Complete downloadable package: `klarlotse-ratgeber-thumbnails.zip`.

On 13 October 2026 the wordmark in the bottom left corner of the ten files was repainted from the former name to "Softwarebrief" (WebP and PNG); `manifest.json`, `index.html` and the ZIP still show the original prompts and the old name.

The attached OMR screenshot informed the visual direction only. The illustrations, copy and Klarlotse compositions are original. No vendor ratings, prices, author identities or endorsements were invented.

Integration: `lib/guide-thumbnails.ts` maps each article separately. Homepage cards, Ratgeber cards, the featured guide and article covers use the new images with an uncropped 16:9 frame.

Visual QA: every generated original was inspected for German spelling, subject relevance, legibility and completeness. The site was checked at desktop, tablet and phone widths. Asset completeness and dimensions are validated against the article inventory.
