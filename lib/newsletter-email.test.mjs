import assert from "node:assert/strict";
import { test } from "node:test";
import { renderConfirmationEmail, renderNewsletterEmail } from "./newsletter-email.ts";

test("German confirmation uses the real brand logo and confirmation destination", () => {
  const mail = renderConfirmationEmail({siteUrl:"https://softwarebrief.example",confirmationUrl:"https://softwarebrief.example/newsletter/bestaetigt?token=example",logoUrl:"cid:softwarebrief-logo"});
  assert.match(mail.html, /<html lang="de">/);
  assert.match(mail.html, /src="cid:softwarebrief-logo"/);
  assert.match(mail.html, /alt="Softwarebrief"/);
  assert.match(mail.html, /Anmeldung bestätigen/);
  assert.match(mail.html, /48 Stunden/);
  assert.match(mail.text, /newsletter\/bestaetigt\?token=example/);
});

test("newsletter keeps source links, German copy and the native unsubscribe placeholder", () => {
  const mail = renderNewsletterEmail({subject:"Softwarebrief",preheader:"Zwei Ratgeber",label:"Oktober 2026",title:"Verträge prüfen",intro:"Abläufe & Verträge",articles:[{title:"CRM auswählen",summary:"<script>unsafe</script>",href:"/ratgeber/crm",category:"CRM"}],questions:["Was ist enthalten?"]},"https://softwarebrief.example",{name:"Redaktion",address:"Hamburg",email:"brief@softwarebrief.example"});
  assert.match(mail.html, /https:\/\/softwarebrief.example\/brand\/softwarebrief-logo-web.png/);
  assert.match(mail.html, /https:\/\/softwarebrief.example\/ratgeber\/crm/);
  assert.match(mail.html, /\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}/);
  assert.match(mail.html, /Newsletter abbestellen/);
  assert.match(mail.html, /&lt;script&gt;unsafe/);
  assert.ok(!mail.html.includes('<script>'));
});
