import type { Metadata } from "next";
import { z } from "zod";
import type { Locale } from "@/domain/common";
import type { PeopleSearchQuery } from "@/domain/person";
import { PeopleDirectory } from "@/features/people/PeopleDirectory";
import { pageMetadata } from "@/lib/metadata";
import { createKaloKhataRepository } from "@/repositories/repository-factory";

const peopleSearchParamsSchema = z.object({
  query: z.string().optional(),
  area: z.string().optional(),
  historicalEra: z.string().optional(),
  influenceDomain: z.string().optional(),
  institutionType: z.string().optional(),
  legalStatus: z.string().optional(),
  category: z.string().optional(),
  politicalAffiliation: z.string().optional(),
  occupation: z.string().optional(),
  organization: z.string().optional(),
  country: z.string().optional(),
  tag: z.string().optional(),
  claimType: z.string().optional(),
  claimStatus: z.string().optional(),
  incidentType: z.string().optional(),
  relationshipType: z.string().optional(),
  verificationStatus: z.string().optional(),
  officialFindingAvailable: z.string().optional(),
  subjectResponseAvailable: z.string().optional(),
  year: z.string().optional(),
  sort: z
    .enum(["recently-verified", "recently-updated", "alphabetical"])
    .default("recently-verified"),
  page: z.coerce.number().int().positive().catch(1)
});

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
  const sp = peopleSearchParamsSchema.parse(await searchParams);
  const query: PeopleSearchQuery = {
    query: sp.query,
    area: sp.area,
    historicalEra: sp.historicalEra,
    influenceDomain: sp.influenceDomain,
    institutionType: sp.institutionType,
    legalStatus: sp.legalStatus,
    category: sp.category,
    politicalAffiliation: sp.politicalAffiliation,
    occupation: sp.occupation,
    organization: sp.organization,
    country: sp.country,
    tag: sp.tag,
    claimType: sp.claimType,
    claimStatus: sp.claimStatus,
    incidentType: sp.incidentType,
    relationshipType: sp.relationshipType,
    verificationStatus: sp.verificationStatus,
    officialFindingAvailable: sp.officialFindingAvailable,
    subjectResponseAvailable: sp.subjectResponseAvailable,
    year: sp.year,
    sort: sp.sort,
    page: sp.page,
    pageSize: 9
  };
  const repo = createKaloKhataRepository();
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
      <PeopleDirectory locale={locale} result={result} metadata={metadata} query={query} />
    </div>
  );
}
