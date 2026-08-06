import type { Metadata } from "next";
import type { Locale } from "@/domain/common";
import type { PeopleSearchQuery } from "@/domain/person";
import { PeopleDirectory } from "@/features/people/PeopleDirectory";
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
    title: locale === "bn" ? "ব্যক্তি নির্দেশিকা" : "People directory",
    description: "Search documented public-interest records.",
    locale,
    path: "/people"
  });
}

export default async function PeoplePage({
  params,
  searchParams
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const query: PeopleSearchQuery = {
    query: sp.query,
    legalStatus: sp.legalStatus,
    category: sp.category,
    politicalAffiliation: sp.politicalAffiliation,
    occupation: sp.occupation,
    organization: sp.organization,
    country: sp.country,
    tag: sp.tag,
    year: sp.year,
    sort: (sp.sort as PeopleSearchQuery["sort"]) ?? "recently-verified",
    page: Number(sp.page ?? 1),
    pageSize: 9
  };
  const repo = createBlackSheepRepository();
  const [result, metadata] = await Promise.all([
    repo.searchPeople(query),
    repo.getFilterMetadata()
  ]);
  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-semibold">
          {locale === "bn" ? "ব্যক্তি নির্দেশিকা" : "People directory"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {locale === "bn"
            ? "নথিভিত্তিক জনস্বার্থ রেকর্ড অনুসন্ধান করুন।"
            : "Search documented public-interest records."}
        </p>
      </header>
      <PeopleDirectory
        locale={locale}
        result={result}
        metadata={metadata}
        cases={getPublicMockIndex().cases}
        query={query}
      />
    </div>
  );
}
