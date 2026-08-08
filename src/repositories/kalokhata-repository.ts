import type { CaseCategory, CaseRecord, CaseSummary, LegalStatus } from "@/domain/case";
import type {
  Area,
  ClaimRecord,
  GeographicAssociation,
  ImpactRecord,
  IncidentRecord,
  Institution,
  InstitutionAssociation
} from "@/domain/claim";
import type { PaginatedResponse } from "@/domain/common";
import type { CorrectionRecord } from "@/domain/correction";
import type { DossierCollection } from "@/domain/dossier";
import type { NewsRecord } from "@/domain/news";
import type { Organization } from "@/domain/organization";
import type { PeopleSearchQuery, PersonCard, PersonProfile } from "@/domain/person";
import type { RelationshipRecord } from "@/domain/relationship";
import type { RevisionRecord } from "@/domain/revision";
import type { SourceRecord } from "@/domain/source";
import type { AssetRecord } from "@/domain/asset";
import type { SubjectResponse } from "@/domain/correction";

export type FilterMetadata = {
  legalStatuses: LegalStatus[];
  categories: CaseCategory[];
  areas: { id: string; slug: string; nameBn: string; nameEn: string }[];
  historicalEras: string[];
  influenceDomains: string[];
  institutionTypes: string[];
  politicalAffiliations: string[];
  occupations: string[];
  organizations: string[];
  countries: string[];
  tags: { id: string; slug: string; nameBn: string; nameEn: string }[];
  claimTypes: string[];
  claimStatuses: string[];
  incidentTypes: string[];
  relationshipTypes: string[];
  verificationStatuses: string[];
  years: string[];
};

export type PersonStoryContext = {
  person: PersonProfile;
  claims: ClaimRecord[];
  incidents: IncidentRecord[];
  impactRecords: ImpactRecord[];
  cases: CaseRecord[];
  sources: SourceRecord[];
  areas: Area[];
  institutions: Institution[];
  organizations: Organization[];
  relationships: RelationshipRecord[];
  geographicAssociations: GeographicAssociation[];
  institutionAssociations: InstitutionAssociation[];
  corrections: CorrectionRecord[];
};

export type PersonEvidenceContext = PersonStoryContext & {
  news: NewsRecord[];
  assets: AssetRecord[];
  responses: SubjectResponse[];
  revisions: RevisionRecord[];
};

export type PersonNetworkContext = Pick<
  PersonStoryContext,
  | "person"
  | "relationships"
  | "geographicAssociations"
  | "institutionAssociations"
  | "areas"
  | "institutions"
  | "organizations"
> & {
  people: PersonProfile[];
  claims: ClaimRecord[];
  sources: SourceRecord[];
};

export type AreaContext = {
  area: Area;
  people: PersonCard[];
  claims: ClaimRecord[];
  incidents: IncidentRecord[];
  institutions: Institution[];
  geographicAssociations: GeographicAssociation[];
  sources: SourceRecord[];
};

export type InstitutionContext = {
  institution: Institution;
  people: PersonCard[];
  claims: ClaimRecord[];
  incidents: IncidentRecord[];
  cases: CaseRecord[];
  sources: SourceRecord[];
  associations: InstitutionAssociation[];
};

export type IncidentContext = {
  incident: IncidentRecord;
  people: PersonProfile[];
  claims: ClaimRecord[];
  cases: CaseRecord[];
  areas: Area[];
  institutions: Institution[];
  impactRecords: ImpactRecord[];
  sources: SourceRecord[];
  news: NewsRecord[];
  corrections: CorrectionRecord[];
};

export type DossierContext = {
  dossier: DossierCollection;
  people: PersonCard[];
  claims: ClaimRecord[];
  incidents: IncidentRecord[];
  areas: Area[];
  institutions: Institution[];
  sources: SourceRecord[];
};

export type CaseContext = {
  record: CaseRecord;
  people: PersonProfile[];
  sources: SourceRecord[];
  news: NewsRecord[];
  responses: SubjectResponse[];
  corrections: CorrectionRecord[];
  relatedCases: CaseRecord[];
};

export type NewsContext = {
  news: NewsRecord;
  people: PersonCard[];
  cases: CaseRecord[];
};

export type SourceContext = {
  source: SourceRecord;
  people: PersonCard[];
  cases: CaseRecord[];
};

export type OrganizationContext = {
  organization: Organization;
  people: PersonCard[];
  cases: CaseRecord[];
};

export type GlobalSearchResult =
  | {
      type: "PERSON";
      slug: string;
      titleBn: string;
      titleEn: string;
      contextBn: string;
      contextEn: string;
    }
  | {
      type: "AREA";
      slug: string;
      titleBn: string;
      titleEn: string;
      contextBn: string;
      contextEn: string;
    }
  | {
      type: "INSTITUTION";
      slug: string;
      titleBn: string;
      titleEn: string;
      contextBn: string;
      contextEn: string;
    }
  | {
      type: "INCIDENT";
      slug: string;
      titleBn: string;
      titleEn: string;
      contextBn: string;
      contextEn: string;
    }
  | {
      type: "CLAIM";
      slug: string;
      titleBn: string;
      titleEn: string;
      contextBn: string;
      contextEn: string;
    }
  | {
      type: "CASE";
      slug: string;
      titleBn: string;
      titleEn: string;
      contextBn: string;
      contextEn: string;
    }
  | {
      type: "DOSSIER";
      slug: string;
      titleBn: string;
      titleEn: string;
      contextBn: string;
      contextEn: string;
    };

export interface KaloKhataRepository {
  searchPeople(query: PeopleSearchQuery): Promise<PaginatedResponse<PersonCard>>;
  getPersonBySlug(slug: string): Promise<PersonProfile | null>;
  getClaimBySlug(slug: string): Promise<ClaimRecord | null>;
  getIncidentBySlug(slug: string): Promise<IncidentRecord | null>;
  getAreaBySlug(slug: string): Promise<Area | null>;
  getInstitutionBySlug(slug: string): Promise<Institution | null>;
  getDossierBySlug(slug: string): Promise<DossierCollection | null>;
  getCaseBySlug(slug: string): Promise<CaseRecord | null>;
  getNewsBySlug(slug: string): Promise<NewsRecord | null>;
  getSourceBySlug(slug: string): Promise<SourceRecord | null>;
  getOrganizationBySlug(slug: string): Promise<Organization | null>;
  getPersonStoryContext(personId: string): Promise<PersonStoryContext | null>;
  getPersonEvidenceContext(personId: string): Promise<PersonEvidenceContext | null>;
  getPersonNetworkContext(personId: string): Promise<PersonNetworkContext | null>;
  getAreaContext(areaId: string): Promise<AreaContext | null>;
  getInstitutionContext(institutionId: string): Promise<InstitutionContext | null>;
  getIncidentContext(incidentId: string): Promise<IncidentContext | null>;
  getDossierContext(dossierId: string): Promise<DossierContext | null>;
  getCaseContext(caseId: string): Promise<CaseContext | null>;
  getNewsContext(newsId: string): Promise<NewsContext | null>;
  getSourceContext(sourceId: string): Promise<SourceContext | null>;
  getOrganizationContext(organizationId: string): Promise<OrganizationContext | null>;
  getFilterMetadata(): Promise<FilterMetadata>;
  getAreas(): Promise<Area[]>;
  getInstitutions(): Promise<Institution[]>;
  getFeaturedProfiles(limit: number): Promise<PersonCard[]>;
  getFeaturedIncidents(limit: number): Promise<IncidentRecord[]>;
  getFeaturedDossiers(limit: number): Promise<DossierCollection[]>;
  globalSearch(query: string, limit?: number): Promise<GlobalSearchResult[]>;
  getRecentProfiles(limit: number): Promise<PersonCard[]>;
  getRecentCases(limit: number): Promise<CaseSummary[]>;
  getCorrections(): Promise<CorrectionRecord[]>;
}
