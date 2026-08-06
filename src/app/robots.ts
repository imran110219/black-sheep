import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  if (!env.NEXT_PUBLIC_ALLOW_INDEXING) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`
  };
}
