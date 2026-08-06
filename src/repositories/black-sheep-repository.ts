import type { CaseCategory, CaseRecord, CaseSummary, LegalStatus } from "@/domain/case";
import type { PaginatedResponse } from "@/domain/common";
import type { CorrectionRecord } from "@/domain/correction";
import type { NewsRecord } from "@/domain/news";
import type { Organization } from "@/domain/organization";
import type { PeopleSearchQuery, PersonCard, PersonProfile } from "@/domain/person";
import type { SourceRecord } from "@/domain/source";

export type FilterMetadata = {
  legalStatuses: LegalStatus[];
  categories: CaseCategory[];
  politicalAffiliations: string[];
  occupations: string[];
  organizations: string[];
  countries: string[];
  tags: { id: string; slug: string; nameBn: string; nameEn: string }[];
  years: string[];
};

export interface BlackSheepRepository {
  searchPeople(query: PeopleSearchQuery): Promise<PaginatedResponse<PersonCard>>;
  getPersonBySlug(slug: string): Promise<PersonProfile | null>;
  getCaseBySlug(slug: string): Promise<CaseRecord | null>;
  getNewsBySlug(slug: string): Promise<NewsRecord | null>;
  getSourceBySlug(slug: string): Promise<SourceRecord | null>;
  getOrganizationBySlug(slug: string): Promise<Organization | null>;
  getFilterMetadata(): Promise<FilterMetadata>;
  getRecentProfiles(limit: number): Promise<PersonCard[]>;
  getRecentCases(limit: number): Promise<CaseSummary[]>;
  getCorrections(): Promise<CorrectionRecord[]>;
}
