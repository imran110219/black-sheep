import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/people",
    "/corrections",
    "/methodology",
    "/editorial-policy",
    "/source-policy",
    "/right-of-reply",
    "/privacy",
    "/legal",
    "/about"
  ];
  return ["bn", "en"].flatMap((locale) =>
    paths.map((path) => ({
      url: `${env.NEXT_PUBLIC_SITE_URL}/${locale}${path}`,
      lastModified: new Date("2026-08-01")
    }))
  );
}
