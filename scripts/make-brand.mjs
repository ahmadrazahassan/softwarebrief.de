import satori from "satori";
import sharp from "sharp";
import { readFile, mkdir, writeFile } from "node:fs/promises";

const font = await readFile(new URL("./fonts/Lato-Black.ttf", import.meta.url));
await mkdir("public/brand", { recursive: true });
for (const [variant, color] of [["dark", "#292d34"], ["light", "#ffffff"]]) {
  // Reproduce the website's existing diamond mark, Lato wordmark and green dot.
  const svg = await satori({ type: "div", props: {
    style: { width: 900, height: 150, display: "flex", alignItems: "center", gap: 26, padding: 24 },
    children: [
      { type: "svg", props: { width: 86, height: 86, viewBox: "0 0 100 100", children: [
        { type: "path", props: { d: "M12 50L50 12L88 50L50 88Z", fill: "none", stroke: color, strokeWidth: 14 } },
        { type: "path", props: { d: "M50 12L88 50", fill: "none", stroke: "#00d54b", strokeWidth: 14 } },
      ] } },
      { type: "div", props: { style: { display: "flex", fontFamily: "Lato", fontSize: 72, fontWeight: 900, letterSpacing: -3.7, color }, children: ["Softwarebrief", { type: "span", props: { style: { color: "#00d54b" }, children: "." } }] } },
    ],
  } }, { width: 900, height: 150, fonts: [{ name: "Lato", data: font, weight: 900, style: "normal" }] });
  const pipeline = sharp(Buffer.from(svg)).trim().resize({ width: 720 }).png();
  const { data, info } = await pipeline.toBuffer({ resolveWithObject: true });
  const file = variant === "dark" ? "softwarebrief-logo.png" : "softwarebrief-logo-light.png";
  await writeFile(`public/brand/${file}`, data);
  console.log(`${file}: ${info.width} × ${info.height}, ${data.length} bytes`);
}
