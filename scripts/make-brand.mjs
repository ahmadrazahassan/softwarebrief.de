import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

// Production exports from the generated artwork; preserve its alpha.
// Rebuilding must never re-create the former CSS diamond or change the artwork.
const directory = "public/brand";
await mkdir(directory, { recursive: true });

async function artwork(source, iconOnly = false) {
  const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let left = info.width, top = info.height, right = 0, bottom = 0;
  const columns = new Array(info.width).fill(0);
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 16) columns[x]++;
    }
  }
  let iconEnd = info.width, started = false, gap = 0;
  if (iconOnly) {
    // The first isolated shape is the S; the large clear gap separates the name.
    for (let x = 0; x < info.width; x++) {
      if (columns[x] > 1) { started = true; gap = 0; }
      else if (started && ++gap >= 20) { iconEnd = x - gap + 1; break; }
    }
    if (iconEnd === info.width) throw new Error("The logo symbol could not be isolated.");
  }
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < iconEnd; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 16) {
        left = Math.min(left, x); top = Math.min(top, y);
        right = Math.max(right, x); bottom = Math.max(bottom, y);
      }
    }
  }
  const inset = 3;
  left = Math.max(0, left - inset); top = Math.max(0, top - inset);
  right = Math.min(info.width - 1, right + inset);
  bottom = Math.min(info.height - 1, bottom + inset);
  return sharp(source).extract({ left, top, width: right - left + 1, height: bottom - top + 1 }).png().toBuffer();
}

const source = "assets/brand/softwarebrief-generated.png";
const lightSource = "assets/brand/softwarebrief-generated-light.png";
for (const [file, input] of [["softwarebrief-logo.png", source], ["softwarebrief-logo-light.png", lightSource]]) {
  const image = await artwork(input);
  await writeFile(`${directory}/${file}`, image);
  const webFile = file.replace(".png", "-web.png");
  const { data, info } = await sharp(image).resize({ width: 720 }).png({ compressionLevel: 9 }).toBuffer({ resolveWithObject: true });
  await writeFile(`${directory}/${webFile}`, data);
  console.log(`${webFile}: ${info.width} × ${info.height}, ${data.length} bytes`);
}

const symbol = await artwork(source, true);
const lightSymbol = await artwork(lightSource, true);
for (const [file, image] of [["softwarebrief-mark.png", symbol], ["softwarebrief-mark-light.png", lightSymbol]]) {
  await sharp(image).resize(512, 512, { fit: "contain", background: "#00000000" }).png().toFile(`${directory}/${file}`);
}

const faviconBuffers = [];
for (const size of [16, 32, 48, 180, 192, 512]) {
  const inset = Math.max(1, Math.round(size * 0.09));
  const scaled = await sharp(symbol).resize(size - inset * 2, size - inset * 2, { fit: "contain", background: "#00000000" }).png().toBuffer();
  const png = await sharp({ create: { width: size, height: size, channels: 4, background: "#f4f4f4" } })
    .composite([{ input: scaled, gravity: "centre" }]).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(`${directory}/softwarebrief-favicon-${size}.png`, png);
  if (size <= 48) faviconBuffers.push({ size, png });
}

// ICO supports PNG-encoded entries. Include native 16, 32 and 48px sizes.
const header = Buffer.alloc(6 + faviconBuffers.length * 16);
header.writeUInt16LE(1, 2); header.writeUInt16LE(faviconBuffers.length, 4);
let offset = header.length;
faviconBuffers.forEach(({ size, png }, i) => {
  const entry = 6 + i * 16;
  header[entry] = size; header[entry + 1] = size;
  header.writeUInt16LE(1, entry + 4); header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8); header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
await writeFile("app/favicon.ico", Buffer.concat([header, ...faviconBuffers.map(({ png }) => png)]));
console.log("Exported transparent logos, symbols, browser icons and Apple touch icon.");
