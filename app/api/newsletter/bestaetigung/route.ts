import { NextRequest, NextResponse } from "next/server";
import { confirmSubscription } from "@/lib/newsletter";
import { newsletterEnv } from "@/lib/newsletter-env";

export async function POST(request: NextRequest) {
  const redirect = (status: string) => {
    const response = NextResponse.redirect(new URL(`/newsletter/bestaetigt?status=${status}`, request.url), 303);
    response.headers.set("Cache-Control", "no-store");
    response.headers.set("Referrer-Policy", "no-referrer");
    return response;
  };
  if (request.headers.get("origin") && request.headers.get("origin") !== new URL(request.url).origin) return redirect("invalid-token");
  let form: FormData;
  try { form = await request.formData(); } catch { return redirect("invalid-token"); }
  const token = form.get("token");
  if (typeof token !== "string" || token.length > 2048) return redirect("invalid-token");
  const result = await confirmSubscription(token, { env: newsletterEnv() });
  return redirect(result.status);
}
