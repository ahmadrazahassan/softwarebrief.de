import assert from "node:assert/strict";
import { test } from "node:test";
import { consentProperties, consentVersion, createConfirmationToken, verifyConfirmationToken, confirmSubscription, resendConfig, maskEmail, newsletterSignupSchema, resolveProvider, subscribe } from "./newsletter.ts";
const env = { NEWSLETTER_PROVIDER:"resend", RESEND_API_KEY:"send-test-key", RESEND_CONTACTS_API_KEY:"contacts-test-key", RESEND_FROM_EMAIL:"Softwarebrief <brief@softwarebrief.example>", NEWSLETTER_TOKEN_SECRET:"test-secret-with-at-least-32-characters", RESEND_SEGMENT_ID:"segment-test", NEXT_PUBLIC_SITE_URL:"https://softwarebrief.example/" };
const now = Date.parse("2026-10-13T00:00:00Z");
const json = (body,status=200) => new Response(JSON.stringify(body),{status});
const definitions = {data:consentProperties.map(key=>({key,type:"string"}))};
function preflight(next) { return async (url,init) => url.endsWith('/contact-properties') ? json(definitions) : url.includes('/segments/') && init.method==='GET' ? json({id:env.RESEND_SEGMENT_ID}) : next(url,init); }
async function quiet(run) { const original=console.error; const logs=[]; console.error=(...args)=>logs.push(args.join(' ')); try{return {result:await run(),logs};}finally{console.error=original;} }

test("signup requires explicit consent and normalizes email",()=>{
 assert.equal(newsletterSignupSchema.parse({email:" Anna@FIRMA.DE ",consent:true}).email,"anna@firma.de");
 for(const input of [{email:"a@b",consent:true},{email:"anna@firma.de",consent:false},{email:"anna@firma.de"}]) assert.equal(newsletterSignupSchema.safeParse(input).success,false);
 assert.equal(maskEmail("anna@firma.de"),"a***@firma.de");
});
test("Resend replaces Brevo, with development mode disabled in production",()=>{
 assert.equal(resolveProvider({}),"aus"); assert.equal(resolveProvider({NEWSLETTER_PROVIDER:"brevo"}),"aus");
 assert.equal(resolveProvider({NEWSLETTER_PROVIDER:" RESEND "},true),"resend");
 assert.equal(resolveProvider({NEWSLETTER_PROVIDER:"dev"},false),"dev"); assert.equal(resolveProvider({NEWSLETTER_PROVIDER:"dev"},true),"aus");
});
test("configuration validates sender, secret and origin",()=>{
 assert.equal(resendConfig(env).siteUrl,"https://softwarebrief.example");
 for(const missing of ['RESEND_API_KEY','RESEND_FROM_EMAIL','NEWSLETTER_TOKEN_SECRET','RESEND_SEGMENT_ID','NEXT_PUBLIC_SITE_URL'])assert.equal(resendConfig({...env,[missing]:undefined}),null,missing);
 for(const site of ['javascript:alert(1)','https://user:pass@softwarebrief.example','https://softwarebrief.example/path','http://softwarebrief.example'])assert.equal(resendConfig({...env,NEXT_PUBLIC_SITE_URL:site}),null);
 assert.equal(resendConfig({...env,RESEND_CONTACTS_API_KEY:undefined}).contactsApiKey,env.RESEND_API_KEY);
});
test("signed confirmation tokens expire and reject tampering or another secret",async()=>{
 const token=await createConfirmationToken('anna@firma.de',env.NEWSLETTER_TOKEN_SECRET,now);
 assert.equal((await verifyConfirmationToken(token,env.NEWSLETTER_TOKEN_SECRET,now+1000)).email,'anna@firma.de');
 assert.equal(await verifyConfirmationToken(token,env.NEWSLETTER_TOKEN_SECRET,now+48*3600000),null);
 assert.equal(await verifyConfirmationToken(token+'x',env.NEWSLETTER_TOKEN_SECRET,now),null);
 assert.equal(await verifyConfirmationToken(token,'another-secret',now),null);
 assert.equal(await verifyConfirmationToken('bad.token',env.NEWSLETTER_TOKEN_SECRET,now),null);
 assert.equal(await verifyConfirmationToken(token,env.NEWSLETTER_TOKEN_SECRET,now-120000),null);
});
test("signup sends a confirmation email but creates no contact",async()=>{
 const calls=[];const result=await subscribe('anna@firma.de',{env,now,fetchImpl:preflight(async(url,init)=>{calls.push({url,init});return json({id:'email-id'});})});
 assert.deepEqual(result,{status:'ok'});assert.equal(calls.length,1);assert.equal(calls[0].url,'https://api.resend.com/emails');
 const body=JSON.parse(calls[0].init.body);assert.deepEqual(body.to,['anna@firma.de']);assert.equal(body.from,env.RESEND_FROM_EMAIL);
 const link=body.text.match(/https:\/\/\S+/)[0];assert.equal(new URL(link).pathname,'/newsletter/bestaetigt');
 assert.equal((await verifyConfirmationToken(new URL(link).searchParams.get('token'),env.NEWSLETTER_TOKEN_SECRET,now)).email,'anna@firma.de');
 assert.equal(calls[0].init.headers.Authorization,'Bearer '+env.RESEND_API_KEY);
});
test("sending-only or incomplete Contacts setup cannot send a misleading confirmation",async()=>{
 let sends=0;
 for(const response of [()=>json({message:'sending only'},401),()=>json({data:[]})]){
  const {result}=await quiet(()=>subscribe('anna@firma.de',{env,fetchImpl:async(url)=>{if(url.endsWith('/emails'))sends++;return response();}}));
  assert.deepEqual(result,{status:'unavailable'});
 }assert.equal(sends,0);
 assert.deepEqual(await subscribe('anna@firma.de',{env:{NEWSLETTER_PROVIDER:'resend'}}),{status:'unavailable'});
});
test("Resend delivery failures return errors without exposing credentials or recipients",async()=>{
 for(const [status,expected] of [[429,'rate-limited'],[401,'unavailable'],[403,'unavailable'],[422,'error'],[500,'error']]){
  const {result,logs}=await quiet(()=>subscribe('anna@firma.de',{env,fetchImpl:preflight(async()=>json({message:'anna@firma.de '+env.RESEND_API_KEY},status))}));
  assert.deepEqual(result,{status:expected});assert.ok(!logs.join('').includes('anna@firma.de'));assert.ok(!logs.join('').includes(env.RESEND_API_KEY));
 }
 const {result}=await quiet(()=>subscribe('anna@firma.de',{env,fetchImpl:async()=>{throw new Error('offline')}}));assert.deepEqual(result,{status:'error'});
});
test("explicit confirmation saves the contact, segment and consent timestamps",async()=>{
 const token=await createConfirmationToken('anna@firma.de',env.NEWSLETTER_TOKEN_SECRET,now);const calls=[];
 const result=await confirmSubscription(token,{env,now:now+1000,fetchImpl:async(url,init)=>{calls.push({url,init});return init.method==='GET'?json({},404):json({id:'contact-id'},201);}});
 assert.deepEqual(result,{status:'ok'});assert.equal(calls.length,2);assert.equal(calls[1].url,'https://api.resend.com/contacts');
 assert.deepEqual(JSON.parse(calls[1].init.body),{email:'anna@firma.de',unsubscribed:false,properties:{softwarebrief_requested_at:new Date(now).toISOString(),softwarebrief_confirmed_at:new Date(now+1000).toISOString(),softwarebrief_consent_version:consentVersion},segments:[{id:env.RESEND_SEGMENT_ID}]});
 assert.equal(calls[1].init.headers.Authorization,'Bearer '+env.RESEND_CONTACTS_API_KEY);
});
test("invalid or expired confirmation makes no provider request",async()=>{
 let called=false;const fetchImpl=async()=>{called=true;return json({});};
 assert.deepEqual(await confirmSubscription('bad.token',{env,now,fetchImpl}),{status:'invalid-token'});
 const token=await createConfirmationToken('anna@firma.de',env.NEWSLETTER_TOKEN_SECRET,now);
 assert.deepEqual(await confirmSubscription(token,{env,now:now+49*3600000,fetchImpl}),{status:'invalid-token'});assert.equal(called,false);
});
test("replayed confirmation cannot reactivate an unsubscribed contact",async()=>{
 const token=await createConfirmationToken('anna@firma.de',env.NEWSLETTER_TOKEN_SECRET,now);let calls=0;
 const result=await confirmSubscription(token,{env,now:now+2000,fetchImpl:async()=>{calls++;return json({unsubscribed:true,properties:{softwarebrief_confirmed_at:{value:new Date(now+1000).toISOString(),type:"string"}}});}});
 assert.deepEqual(result,{status:'invalid-token'});assert.equal(calls,1);
});
test("a new confirmed signup may resubscribe after an earlier opt-out",async()=>{
 const token=await createConfirmationToken('anna@firma.de',env.NEWSLETTER_TOKEN_SECRET,now);const calls=[];
 const result=await confirmSubscription(token,{env,now:now+1000,fetchImpl:async(url,init)=>{calls.push({url,init});return init.method==='GET'?json({unsubscribed:true,properties:{softwarebrief_confirmed_at:{value:new Date(now-1000).toISOString(),type:"string"}}}):json({id:'contact-id'});}});
 assert.deepEqual(result,{status:'ok'});assert.equal(calls[1].url,'https://api.resend.com/contacts/anna%40firma.de/segments/segment-test');assert.equal(calls[2].init.method,'PATCH');assert.equal(JSON.parse(calls[2].init.body).unsubscribed,false);
});
test("local dry runs do not send email",async()=>{
 assert.deepEqual(await subscribe('anna@firma.de',{env:{NEWSLETTER_PROVIDER:'dev'},fetchImpl:async()=>{throw new Error('must not call')}}),{status:'ok',dryRun:true});
 assert.deepEqual(await subscribe('anna@firma.de',{env:{NEWSLETTER_PROVIDER:'dev',NODE_ENV:'production'}}),{status:'unavailable'});
});
