import type { CaseSummary } from "@/domain/case";
import type { VerificationStatus } from "@/domain/common";
import type { PersonCard, PeopleSearchQuery, PersonProfile } from "@/domain/person";
import {
  areas,
  assets,
  cases,
  claims,
  corrections,
  dossiers,
  geographicAssociations,
  impactRecords,
  incidents,
  institutionAssociations,
  institutions,
  newsRecords,
  organizations,
  people,
  relationships,
  revisions,
  sources,
  subjectResponses,
  tags
} from "@/data";
import { applyPeopleFilters, normalizeQuery, paginate, sortPeople } from "@/lib/search";
import type {
  BlackSheepRepository,
  FilterMetadata,
  GlobalSearchResult
} from "./black-sheep-repository";

export class MockBlackSheepRepository implements BlackSheepRepository {
  async searchPeople(query: PeopleSearchQuery) {
    const filtered = applyPeopleFilters(people, cases, query);
    const sorted = sortPeople(filtered, query.sort);
    return paginate(sorted.map(toPersonCard), query.page, query.pageSize);
  }

  async getPersonBySlug(slug: string) {
    return people.find((person) => person.slug === slug) ?? null;
  }

  async getClaimBySlug(slug: string) {
    return claims.find((record) => record.slug === slug) ?? null;
  }

  async getIncidentBySlug(slug: string) {
    return incidents.find((record) => record.slug === slug) ?? null;
  }

  async getAreaBySlug(slug: string) {
    return areas.find((record) => record.slug === slug) ?? null;
  }

  async getInstitutionBySlug(slug: string) {
    return institutions.find((record) => record.slug === slug) ?? null;
  }

  async getDossierBySlug(slug: string) {
    return dossiers.find((record) => record.slug === slug) ?? null;
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

  async getPersonStoryContext(personId: string) {
    const context = buildPersonContext(personId);
    if (!context) return null;
    return context;
  }

  async getPersonEvidenceContext(personId: string) {
    const context = buildPersonContext(personId);
    if (!context) return null;
    return {
      ...context,
      news: newsRecords.filter((record) => context.person.newsIds.includes(record.id)),
      assets: assets.filter((record) => context.person.assetIds.includes(record.id)),
      responses: subjectResponses.filter((record) => record.personId === context.person.id),
      revisions: revisions.filter((record) => record.entityId === context.person.id)
    };
  }

  async getPersonNetworkContext(personId: string) {
    const context = buildPersonContext(personId);
    if (!context) return null;
    return {
      person: context.person,
      relationships: context.relationships,
      geographicAssociations: context.geographicAssociations,
      institutionAssociations: context.institutionAssociations,
      areas: context.areas,
      institutions: context.institutions,
      organizations: context.organizations,
      people,
      claims: context.claims,
      sources: context.sources
    };
  }

  async getAreaContext(areaId: string) {
    const area = areas.find((record) => record.id === areaId);
    if (!area) return null;
    const relatedGeo = geographicAssociations.filter((record) => record.areaId === area.id);
    const areaClaims = claims.filter((record) => record.areaIds.includes(area.id));
    const areaIncidents = incidents.filter((record) => record.areaIds.includes(area.id));
    const areaInstitutions = institutions.filter((record) => record.areaIds.includes(area.id));
    const personIds = new Set([
      ...relatedGeo.map((record) => record.personId),
      ...areaClaims.flatMap((record) => record.personIds),
      ...areaIncidents.flatMap((record) => record.personLinks.map((link) => link.personId))
    ]);
    const sourceIds = new Set([
      ...relatedGeo.flatMap((record) => record.sourceIds),
      ...areaClaims.flatMap((record) => record.sourceIds),
      ...areaIncidents.flatMap((record) => record.sourceIds)
    ]);
    return {
      area,
      people: people.filter((person) => personIds.has(person.id)).map(toPersonCard),
      claims: areaClaims,
      incidents: areaIncidents,
      institutions: areaInstitutions,
      geographicAssociations: relatedGeo,
      sources: sources.filter((source) => sourceIds.has(source.id))
    };
  }

  async getInstitutionContext(institutionId: string) {
    const institution = institutions.find((record) => record.id === institutionId);
    if (!institution) return null;
    const associations = institutionAssociations.filter(
      (record) => record.institutionId === institution.id
    );
    const institutionClaims = claims.filter((record) =>
      record.institutionIds.includes(institution.id)
    );
    const institutionIncidents = incidents.filter((record) =>
      record.institutionIds.includes(institution.id)
    );
    const personIds = new Set([
      ...associations.map((record) => record.personId),
      ...institutionClaims.flatMap((record) => record.personIds),
      ...institutionIncidents.flatMap((record) => record.personLinks.map((link) => link.personId))
    ]);
    const caseIds = new Set([
      ...institutionClaims.flatMap((record) => record.caseIds),
      ...institutionIncidents.flatMap((record) => record.caseIds)
    ]);
    const sourceIds = new Set([
      ...associations.flatMap((record) => record.sourceIds),
      ...institutionClaims.flatMap((record) => record.sourceIds),
      ...institutionIncidents.flatMap((record) => record.sourceIds)
    ]);
    return {
      institution,
      people: people.filter((person) => personIds.has(person.id)).map(toPersonCard),
      claims: institutionClaims,
      incidents: institutionIncidents,
      cases: cases.filter((record) => caseIds.has(record.id)),
      sources: sources.filter((source) => sourceIds.has(source.id)),
      associations
    };
  }

  async getIncidentContext(incidentId: string) {
    const incident = incidents.find((record) => record.id === incidentId);
    if (!incident) return null;
    return {
      incident,
      people: people.filter((person) =>
        incident.personLinks.some((link) => link.personId === person.id)
      ),
      claims: claims.filter((record) => incident.claimIds.includes(record.id)),
      cases: cases.filter((record) => incident.caseIds.includes(record.id)),
      areas: areas.filter((record) => incident.areaIds.includes(record.id)),
      institutions: institutions.filter((record) => incident.institutionIds.includes(record.id)),
      impactRecords: impactRecords.filter((record) => incident.impactRecordIds.includes(record.id)),
      sources: sources.filter((record) => incident.sourceIds.includes(record.id)),
      news: newsRecords.filter((record) => incident.newsIds.includes(record.id)),
      corrections: corrections.filter((record) => record.entityId === incident.id)
    };
  }

  async getDossierContext(dossierId: string) {
    const dossier = dossiers.find((record) => record.id === dossierId);
    if (!dossier) return null;
    return {
      dossier,
      people: people.filter((person) => dossier.personIds.includes(person.id)).map(toPersonCard),
      claims: claims.filter((record) => dossier.claimIds.includes(record.id)),
      incidents: incidents.filter((record) => dossier.incidentIds.includes(record.id)),
      areas: areas.filter((record) => dossier.areaIds.includes(record.id)),
      institutions: institutions.filter((record) => dossier.institutionIds.includes(record.id)),
      sources: sources.filter((record) => dossier.sourceIds.includes(record.id))
    };
  }

  async getCaseContext(caseId: string) {
    const record = cases.find((item) => item.id === caseId);
    if (!record) return null;
    return {
      record,
      people: people.filter((person) =>
        record.personLinks.some((link) => link.personId === person.id)
      ),
      sources: sources.filter((source) => record.sourceIds.includes(source.id)),
      news: newsRecords.filter((news) => news.caseIds.includes(record.id)),
      responses: subjectResponses.filter((response) => response.caseId === record.id),
      corrections: corrections.filter((correction) => correction.entityId === record.id),
      relatedCases: cases.filter((caseRecord) => record.relatedCaseIds.includes(caseRecord.id))
    };
  }

  async getNewsContext(newsId: string) {
    const news = newsRecords.find((item) => item.id === newsId);
    if (!news) return null;
    return {
      news,
      people: people.filter((person) => news.personIds.includes(person.id)).map(toPersonCard),
      cases: cases.filter((record) => news.caseIds.includes(record.id))
    };
  }

  async getSourceContext(sourceId: string) {
    const source = sources.find((item) => item.id === sourceId);
    if (!source) return null;
    return {
      source,
      people: people
        .filter((person) => source.relatedPersonIds.includes(person.id))
        .map(toPersonCard),
      cases: cases.filter((record) => source.relatedCaseIds.includes(record.id))
    };
  }

  async getOrganizationContext(organizationId: string) {
    const organization = organizations.find((item) => item.id === organizationId);
    if (!organization) return null;
    return {
      organization,
      people: people
        .filter((person) => organization.personIds.includes(person.id))
        .map(toPersonCard),
      cases: cases.filter((record) => organization.caseIds.includes(record.id))
    };
  }

  async getFilterMetadata(): Promise<FilterMetadata> {
    const years = new Set<string>();
    for (const record of [...cases, ...claims, ...incidents]) {
      for (const value of [
        "filedAt" in record ? record.filedAt : undefined,
        "startedAt" in record ? record.startedAt : undefined,
        "resolvedAt" in record ? record.resolvedAt : undefined,
        "startDate" in record ? record.startDate : undefined,
        "endDate" in record ? record.endDate : undefined,
        "occurredAt" in record ? record.occurredAt : undefined,
        "periodStart" in record ? record.periodStart : undefined,
        "periodEnd" in record ? record.periodEnd : undefined
      ]) {
        if (value) years.add(value.slice(0, 4));
      }
    }

    return {
      legalStatuses: Array.from(new Set(cases.map((record) => record.legalStatus))),
      categories: Array.from(new Set(cases.map((record) => record.category))),
      areas: areas.map((area) => ({
        id: area.id,
        slug: area.slug,
        nameBn: area.nameBn,
        nameEn: area.nameEn
      })),
      historicalEras: Array.from(new Set(people.flatMap((person) => person.historicalEraIds))),
      influenceDomains: Array.from(new Set(people.flatMap((person) => person.influenceDomains))),
      institutionTypes: Array.from(new Set(institutions.map((record) => record.type))),
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
      claimTypes: Array.from(new Set(claims.map((record) => record.type))),
      claimStatuses: Array.from(new Set(claims.map((record) => record.status))),
      incidentTypes: Array.from(new Set(incidents.map((record) => record.incidentType))),
      relationshipTypes: Array.from(
        new Set(relationships.map((record) => record.relationshipType))
      ),
      verificationStatuses: Array.from(
        new Set([
          ...claims.map((record) => record.verificationStatus),
          ...sources.map((record) => record.verificationStatus)
        ])
      ),
      years: Array.from(years).sort().reverse()
    };
  }

  async getFeaturedProfiles(limit: number) {
    return sortPeople(people, "recently-updated").slice(0, limit).map(toPersonCard);
  }

  async getAreas() {
    return areas;
  }

  async getInstitutions() {
    return institutions;
  }

  async getFeaturedIncidents(limit: number) {
    return [...incidents].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, limit);
  }

  async getFeaturedDossiers(limit: number) {
    return [...dossiers].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, limit);
  }

  async globalSearch(query: string, limit = 8) {
    const normalized = normalizeQuery(query);
    if (!normalized) return [];
    const results: GlobalSearchResult[] = [
      ...people
        .filter((person) =>
          [
            person.nameBn,
            person.nameEn,
            ...person.aliases,
            person.primaryAreaBn,
            person.primaryAreaEn
          ]
            .map(normalizeQuery)
            .some((value) => value.includes(normalized))
        )
        .map((person) => ({
          type: "PERSON" as const,
          slug: person.slug,
          titleBn: person.nameBn,
          titleEn: person.nameEn,
          contextBn: `${person.primaryAreaBn} · ${person.claimIds.length} দাবি`,
          contextEn: `${person.primaryAreaEn} · ${person.claimIds.length} claims`
        })),
      ...areas
        .filter((area) =>
          [area.nameBn, area.nameEn, area.slug]
            .map(normalizeQuery)
            .some((value) => value.includes(normalized))
        )
        .map((area) => ({
          type: "AREA" as const,
          slug: area.slug,
          titleBn: area.nameBn,
          titleEn: area.nameEn,
          contextBn: area.type,
          contextEn: area.type
        })),
      ...institutions
        .filter((institution) =>
          [institution.nameBn, institution.nameEn, institution.type, institution.slug]
            .map(normalizeQuery)
            .some((value) => value.includes(normalized))
        )
        .map((institution) => ({
          type: "INSTITUTION" as const,
          slug: institution.slug,
          titleBn: institution.nameBn,
          titleEn: institution.nameEn,
          contextBn: institution.type,
          contextEn: institution.type
        })),
      ...incidents
        .filter((incident) =>
          [incident.titleBn, incident.titleEn, incident.summaryBn, incident.summaryEn]
            .map(normalizeQuery)
            .some((value) => value.includes(normalized))
        )
        .map((incident) => ({
          type: "INCIDENT" as const,
          slug: incident.slug,
          titleBn: incident.titleBn,
          titleEn: incident.titleEn,
          contextBn: `${incident.occurredAt?.slice(0, 4) ?? "সময়কাল"} · ${incident.sourceIds.length} উৎস`,
          contextEn: `${incident.occurredAt?.slice(0, 4) ?? "period"} · ${incident.sourceIds.length} sources`
        })),
      ...claims
        .filter((claim) =>
          [claim.titleBn, claim.titleEn, claim.summaryBn, claim.summaryEn, claim.type, claim.status]
            .map(normalizeQuery)
            .some((value) => value.includes(normalized))
        )
        .map((claim) => ({
          type: "CLAIM" as const,
          slug: claim.slug,
          titleBn: claim.titleBn,
          titleEn: claim.titleEn,
          contextBn: claim.status,
          contextEn: claim.status
        })),
      ...cases
        .filter((record) =>
          [record.titleBn, record.titleEn, record.caseNumber, record.legalStatus]
            .map(normalizeQuery)
            .some((value) => value.includes(normalized))
        )
        .map((record) => ({
          type: "CASE" as const,
          slug: record.slug,
          titleBn: record.titleBn,
          titleEn: record.titleEn,
          contextBn: record.legalStatus,
          contextEn: record.legalStatus
        })),
      ...dossiers
        .filter((dossier) =>
          [dossier.titleBn, dossier.titleEn, dossier.summaryBn, dossier.summaryEn]
            .map(normalizeQuery)
            .some((value) => value.includes(normalized))
        )
        .map((dossier) => ({
          type: "DOSSIER" as const,
          slug: dossier.slug,
          titleBn: dossier.titleBn,
          titleEn: dossier.titleEn,
          contextBn: `${dossier.personIds.length} ব্যক্তি`,
          contextEn: `${dossier.personIds.length} people`
        }))
    ];
    return results.slice(0, limit);
  }

  async getRecentProfiles(limit: number) {
    return this.getFeaturedProfiles(limit);
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

function buildPersonContext(personId: string) {
  const person = people.find((item) => item.id === personId);
  if (!person) return null;
  const relatedCases = cases.filter((record) => person.caseIds.includes(record.id));
  const relatedClaims = claims.filter((record) => record.personIds.includes(person.id));
  const relatedIncidents = incidents.filter((record) =>
    record.personLinks.some((link) => link.personId === person.id)
  );
  const relatedGeographicAssociations = geographicAssociations.filter(
    (record) => record.personId === person.id
  );
  const relatedInstitutionAssociations = institutionAssociations.filter(
    (record) => record.personId === person.id
  );
  const sourceIds = new Set([
    ...relatedCases.flatMap((record) => record.sourceIds),
    ...relatedClaims.flatMap((record) => record.sourceIds),
    ...relatedIncidents.flatMap((record) => record.sourceIds),
    ...relatedGeographicAssociations.flatMap((record) => record.sourceIds),
    ...relatedInstitutionAssociations.flatMap((record) => record.sourceIds)
  ]);
  const areaIds = new Set([
    ...person.primaryAreaIds,
    ...relatedClaims.flatMap((record) => record.areaIds),
    ...relatedIncidents.flatMap((record) => record.areaIds),
    ...relatedGeographicAssociations.map((record) => record.areaId)
  ]);
  const institutionIds = new Set([
    ...relatedClaims.flatMap((record) => record.institutionIds),
    ...relatedInstitutionAssociations.map((record) => record.institutionId),
    ...relatedIncidents.flatMap((record) => record.institutionIds)
  ]);
  const organizationIds = new Set([
    ...relatedClaims.flatMap((record) => record.organizationIds),
    ...relatedIncidents.flatMap((record) => record.organizationIds)
  ]);
  const relatedImpactIds = new Set(relatedIncidents.flatMap((record) => record.impactRecordIds));
  return {
    person,
    claims: relatedClaims,
    cases: relatedCases,
    incidents: relatedIncidents,
    impactRecords: impactRecords.filter((record) => relatedImpactIds.has(record.id)),
    geographicAssociations: relatedGeographicAssociations,
    institutionAssociations: relatedInstitutionAssociations,
    areas: areas.filter((record) => areaIds.has(record.id)),
    sources: sources.filter(
      (record) => sourceIds.has(record.id) || record.relatedPersonIds.includes(person.id)
    ),
    relationships: relationships.filter((record) => person.relationshipIds.includes(record.id)),
    corrections: corrections.filter(
      (record) => record.entityId === person.id || person.caseIds.includes(record.entityId)
    ),
    institutions: institutions.filter((record) => institutionIds.has(record.id)),
    organizations: organizations.filter(
      (record) => record.personIds.includes(person.id) || organizationIds.has(record.id)
    )
  };
}

function toPersonCard(person: PersonProfile): PersonCard {
  const relatedClaims = claims.filter((record) => record.personIds.includes(person.id));
  const relatedIncidents = incidents.filter((record) =>
    record.personLinks.some((link) => link.personId === person.id)
  );
  const relatedCases = cases.filter((record) => person.caseIds.includes(record.id));
  const relatedInstitutionAssociations = institutionAssociations.filter(
    (record) => record.personId === person.id
  );
  const relatedGeographicAssociations = geographicAssociations.filter(
    (record) => record.personId === person.id
  );
  const sourceIds = new Set([
    ...relatedClaims.flatMap((record) => record.sourceIds),
    ...relatedIncidents.flatMap((record) => record.sourceIds),
    ...relatedCases.flatMap((record) => record.sourceIds)
  ]);
  return {
    ...person,
    counts: {
      claims: relatedClaims.length,
      incidents: relatedIncidents.length,
      cases: relatedCases.length,
      verifiedSources: sources.filter(
        (source) =>
          sourceIds.has(source.id) &&
          (
            ["REVIEWED", "CROSS_CHECKED", "PRIMARY_SOURCE_VERIFIED"] as VerificationStatus[]
          ).includes(source.verificationStatus)
      ).length,
      relationships: person.relationshipIds.length,
      institutions: relatedInstitutionAssociations.length,
      areas: relatedGeographicAssociations.length
    }
  };
}
