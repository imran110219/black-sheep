import type { Metadata } from "next";
import type { Locale } from "@/domain/common";
import { env } from "./env";

export function pageMetadata({
  title,
  description,
  locale,
  path
}: {
  title: string;
  description: string;
  locale: Locale;
  path: string;
}): Metadata {
  const url = `${env.NEXT_PUBLIC_SITE_URL}/${locale}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        bn: `/bn${path}`,
        en: `/en${path}`
      }
    },
    openGraph: { title, description, url, siteName: "KaloKhata", locale },
    twitter: { card: "summary", title, description },
    robots: env.NEXT_PUBLIC_ALLOW_INDEXING ? undefined : { index: false, follow: false }
  };
}
