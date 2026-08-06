import { Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DemoDataNotice,
  EditorialNotice,
  PresumptionOfInnocenceNotice
} from "@/components/shared/Notices";
import { CaseCard } from "@/features/cases/CaseCard";
import { PersonCard } from "@/features/people/PersonCard";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/domain/common";
import { categoryLabels, statusLabel } from "@/lib/status";
import { pageMetadata } from "@/lib/metadata";
import { createBlackSheepRepository } from "@/repositories/repository-factory";
import { getPublicMockIndex } from "@/repositories/record-context";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Black Sheep",
    description:
      locale === "bn"
        ? "নথিভিত্তিক জনস্বার্থ ও জবাবদিহির আর্কাইভ"
        : "A documented public-interest accountability archive",
    locale,
    path: ""
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const repo = createBlackSheepRepository();
  const [profiles, recentCases, metadata] = await Promise.all([
    repo.getRecentProfiles(3),
    repo.getRecentCases(4),
    repo.getFilterMetadata()
  ]);
  const index = getPublicMockIndex();

  return (
    <div className="grid gap-12">
      <section className="grid min-h-[58vh] content-center gap-8 rounded-md border bg-muted/30 p-6 md:p-10">
        <div className="max-w-4xl">
          <DemoDataNotice text={t("common.demoData")} />
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-normal md:text-6xl">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{t("home.heroCopy")}</p>
        </div>
        <form action={`/${locale}/people`} className="flex max-w-2xl gap-2">
          <label className="sr-only" htmlFor="home-search">
            {t("actions.search")}
          </label>
          <Input
            id="home-search"
            name="query"
            placeholder={t("home.searchPlaceholder")}
            className="h-12"
          />
          <Button type="submit" className="h-12">
            <Search className="h-4 w-4" />
            {t("actions.search")}
          </Button>
        </form>
        <PresumptionOfInnocenceNotice text={t("home.disclaimer")} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{t("home.stats")}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {[
            [index.people.length, locale === "bn" ? "ডেমো ব্যক্তি" : "demo people"],
            [index.cases.length, locale === "bn" ? "ডেমো মামলা" : "demo cases"],
            [index.sources.length, locale === "bn" ? "ডেমো উৎস" : "demo sources"],
            [index.corrections.length, locale === "bn" ? "ডেমো সংশোধন" : "demo corrections"]
          ].map(([count, label]) => (
            <div key={label} className="rounded-md border p-5">
              <p className="text-3xl font-semibold">{count}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{t("home.recentProfiles")}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {profiles.map((person) => (
            <PersonCard key={person.id} person={person} cases={index.cases} locale={locale} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{t("home.recentCases")}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {recentCases.map((record) => (
            <CaseCard key={record.id} record={record} locale={locale} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">{t("home.browseCategory")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {metadata.categories.map((category) => (
              <Link
                key={category}
                href={`/people?category=${category}`}
                locale={locale}
                className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
              >
                {categoryLabels[category][locale]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{t("home.browseStatus")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {metadata.legalStatuses.map((status) => (
              <Link
                key={status}
                href={`/people?legalStatus=${status}`}
                locale={locale}
                className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
              >
                {statusLabel(status, locale)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <EditorialNotice>{t("home.methodologyPreview")}</EditorialNotice>
        <EditorialNotice tone="amber">{t("home.replyCallout")}</EditorialNotice>
      </section>
    </div>
  );
}
