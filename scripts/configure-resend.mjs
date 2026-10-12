import { readFileSync, writeFileSync } from "node:fs";
import { consentProperties } from "../lib/newsletter.ts";

process.loadEnvFile(".env.local");
const key = process.env.RESEND_CONTACTS_API_KEY || process.env.RESEND_API_KEY;
if (!key) throw new Error("Set a Resend Full access key in .env.local first.");

async function request(path, method = "GET", body) {
  // The account API allows two requests per second. Never print authorization or response bodies.
  await new Promise((resolve) => setTimeout(resolve, 550));
  const response = await fetch(`https://api.resend.com${path}`, {
    method, headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Resend configuration failed: HTTP ${response.status} on ${path}. Full access is required.`);
  return response.json();
}

const definitions = (await request("/contact-properties")).data;
for (const name of consentProperties) {
  const existing = definitions.find((property) => property.key === name);
  if (existing && existing.type !== "string") throw new Error(`Contact property ${name} must have type string.`);
  if (!existing) await request("/contact-properties", "POST", { key: name, type: "string" });
}
const segments = (await request("/segments")).data;
const segment = segments.find((item) => item.name === "Softwarebrief") ?? await request("/segments", "POST", { name: "Softwarebrief" });
const file = ".env.local";
let env = readFileSync(file, "utf8");
const line = `RESEND_SEGMENT_ID="${segment.id}"`;
env = /^RESEND_SEGMENT_ID=.*$/m.test(env) ? env.replace(/^RESEND_SEGMENT_ID=.*$/m, line) : env.trimEnd() + "\n" + line + "\n";
writeFileSync(file, env);
console.log("Resend contact properties and Softwarebrief segment configured. Segment ID saved in .env.local. No email was sent.");
