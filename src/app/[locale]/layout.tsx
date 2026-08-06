import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { AppProviders } from "@/providers/app-providers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/domain/common";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <AppProviders>
        <SiteHeader locale={locale as Locale} />
        <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-8">{children}</main>
        <SiteFooter locale={locale as Locale} />
      </AppProviders>
    </NextIntlClientProvider>
  );
}
