import type { CaseSummary } from "@/domain/case";
import type { PersonCard, PeopleSearchQuery } from "@/domain/person";
import {
  cases,
  claims,
  corrections,
  geographicAssociations,
  newsRecords,
  organizations,
  people,
  sources,
  tags
} from "@/data/fixtures/mock-data";
import { applyPeopleFilters, paginate, sortPeople } from "@/lib/search";
import type { BlackSheepRepository, FilterMetadata } from "./black-sheep-repository";

export class MockBlackSheepRepository implements BlackSheepRepository {
  async searchPeople(query: PeopleSearchQuery) {
    const filtered = applyPeopleFilters(people, cases, query);
    const sorted = sortPeople(filtered, query.sort);
    return paginate(sorted.map(toPersonCard), query.page, query.pageSize);
  }

  async getPersonBySlug(slug: string) {
    return people.find((person) => person.slug === slug) ?? null;
  }

  async getCaseBySlug(slug: string) {
    return cases.find((record) => record.slug === slug) ?? null;
  }

  async getNewsBySlug(slug: string) {
    return newsRecords.find((record) => record.slug === slug) ?? null;
  }

  async getSourceBySlug(slug: string) {
    return sources.find((record) => record.slug === slug) ?? null;
  }

  async getOrganizationBySlug(slug: string) {
    return organizations.find((record) => record.slug === slug) ?? null;
  }

  async getFilterMetadata(): Promise<FilterMetadata> {
    const years = new Set<string>();
    for (const record of cases) {
      years.add(record.filedAt.slice(0, 4));
      years.add(record.startedAt.slice(0, 4));
      if (record.resolvedAt) years.add(record.resolvedAt.slice(0, 4));
    }

    return {
      legalStatuses: Array.from(new Set(cases.map((record) => record.legalStatus))),
      categories: Array.from(new Set(cases.map((record) => record.category))),
      politicalAffiliations: Array.from(
        new Set(
          people
            .map((person) => person.politicalAffiliation)
            .filter((value): value is string => Boolean(value))
        )
      ),
      occupations: Array.from(new Set(people.map((person) => person.occupation))),
      organizations: Array.from(new Set(people.flatMap((person) => person.organizations))),
      countries: Array.from(new Set(people.map((person) => person.country))),
      tags: tags.map((tag) => ({
        id: tag.id,
        slug: tag.slug,
        nameBn: tag.nameBn,
        nameEn: tag.nameEn
      })),
      years: Array.from(
        new Set(
          [
            ...Array.from(years),
            ...claims.flatMap((claim) => [
              claim.startDate?.slice(0, 4),
              claim.endDate?.slice(0, 4)
            ]),
            ...geographicAssociations.flatMap((area) => [
              area.startDate?.slice(0, 4),
              area.endDate?.slice(0, 4)
            ])
          ].filter((value): value is string => Boolean(value))
        )
      )
        .sort()
        .reverse()
    };
  }

  async getRecentProfiles(limit: number) {
    return sortPeople(people, "recently-updated").slice(0, limit).map(toPersonCard);
  }

  async getRecentCases(limit: number): Promise<CaseSummary[]> {
    return [...cases]
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .slice(0, limit)
      .map((record) => ({
        id: record.id,
        slug: record.slug,
        titleBn: record.titleBn,
        titleEn: record.titleEn,
        caseNumber: record.caseNumber,
        category: record.category,
        legalStatus: record.legalStatus,
        authority: record.authority,
        lastVerifiedAt: record.lastVerifiedAt,
        updatedAt: record.updatedAt,
        isDemo: record.isDemo
      }));
  }

  async getCorrections() {
    return [...corrections].sort((a, b) => b.correctedAt.localeCompare(a.correctedAt));
  }
}

function toPersonCard(person: (typeof people)[number]): PersonCard {
  const {
    id,
    isDemo,
    slug,
    nameBn,
    nameEn,
    aliases,
    summaryBn,
    summaryEn,
    occupation,
    politicalAffiliation,
    publicRoles,
    organizations: orgs,
    activePeriod,
    primaryAreaBn,
    primaryAreaEn,
    influenceDomains,
    historicalIdentityBn,
    historicalIdentityEn,
    narrative,
    city,
    country,
    tags: personTags,
    caseIds,
    relationshipIds,
    lastVerifiedAt,
    updatedAt
  } = person;
  return {
    id,
    isDemo,
    slug,
    nameBn,
    nameEn,
    aliases,
    summaryBn,
    summaryEn,
    occupation,
    politicalAffiliation,
    publicRoles,
    organizations: orgs,
    activePeriod,
    primaryAreaBn,
    primaryAreaEn,
    influenceDomains,
    historicalIdentityBn,
    historicalIdentityEn,
    narrative,
    city,
    country,
    tags: personTags,
    caseIds,
    relationshipIds,
    lastVerifiedAt,
    updatedAt
  };
}
