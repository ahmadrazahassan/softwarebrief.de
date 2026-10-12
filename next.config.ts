import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/newsletter/anmeldung": ["./public/brand/softwarebrief-logo.png"],
  },
};

export default nextConfig;
