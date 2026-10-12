import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [slug, sourcePath] = process.argv.slice(2);
const directory = path.resolve("public/editorial-thumbnails");
const manifest = JSON.parse(fs.readFileSync(path.join(directory, "manifest.json"), "utf8"));
const asset = manifest.assets.find((entry) => entry.slug === slug);
if (!asset || !sourcePath) throw new Error("Provide a known guide slug and its generated image path.");
const background = { violet: "#6952e8", yellow: "#f4cb42", mint: "#caf0da" }[asset.palette];
fs.copyFileSync(sourcePath, path.join(directory, slug + ".png"));
const metadata = await sharp(sourcePath).metadata();
await sharp(sourcePath)
  .resize(1536, 864, { fit: "contain", background })
  .webp({ quality: 90, effort: 6 })
  .toFile(path.join(directory, slug + ".webp"));
console.log(JSON.stringify({
  slug,
  original: { width: metadata.width, height: metadata.height },
  webp: { width: 1536, height: 864, bytes: fs.statSync(path.join(directory, slug + ".webp")).size },
}));
