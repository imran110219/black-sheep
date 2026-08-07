import type { CaseRecord } from "@/domain/case";
import type { PersonCard, PeopleSearchQuery, PersonProfile } from "@/domain/person";
import {
  claims,
  geographicAssociations,
  incidents,
  institutionAssociations,
  institutions,
  relationships,
  subjectResponses
} from "@/data";

export function normalizeQuery(value: string | undefined) {
  return (value ?? "")
    .normalize("NFKC")
    .toLocaleLowerCase("en-US")
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function includes(value: string | string[] | undefined, query: string) {
  if (!query) return true;
  const values = Array.isArray(value) ? value : [value ?? ""];
  return values.some((item) => normalizeQuery(item).includes(query));
}

export function personMatchesQuery(
  person: PersonProfile | PersonCard,
  rawQuery: string | undefined
) {
  const query = normalizeQuery(rawQuery);
  if (!query) return true;
  return (
    includes(person.nameBn, query) ||
    includes(person.nameEn, query) ||
    includes(person.aliases, query) ||
    includes(person.summaryBn, query) ||
    includes(person.summaryEn, query) ||
    includes("narrative" in person ? person.narrative.whyListedBn : undefined, query) ||
    includes("narrative" in person ? person.narrative.whyListedEn : undefined, query) ||
    includes("historicalIdentityBn" in person ? person.historicalIdentityBn : undefined, query) ||
    includes("historicalIdentityEn" in person ? person.historicalIdentityEn : undefined, query) ||
    includes("primaryAreaBn" in person ? person.primaryAreaBn : undefined, query) ||
    includes("primaryAreaEn" in person ? person.primaryAreaEn : undefined, query) ||
    includes("influenceDomains" in person ? person.influenceDomains : undefined, query) ||
    includes(person.organizations, query) ||
    includes(person.publicRoles, query)
  );
}

export function aggregateStatuses(person: PersonProfile | PersonCard, cases: CaseRecord[]) {
  const relatedCases = cases.filter((record) => person.caseIds.includes(record.id));
  const counts = new Map<string, number>();
  for (const record of relatedCases)
    counts.set(record.legalStatus, (counts.get(record.legalStatus) ?? 0) + 1);
  return Array.from(counts.entries()).map(([status, count]) => ({ status, count }));
}

export function applyPeopleFilters(
  people: PersonProfile[],
  cases: CaseRecord[],
  query: PeopleSearchQuery
) {
  return people.filter((person) => {
    const relatedCases = cases.filter((record) => person.caseIds.includes(record.id));
    const relatedClaims = claims.filter((record) => record.personIds.includes(person.id));
    const relatedIncidents = incidents.filter((record) =>
      record.personLinks.some((link) => link.personId === person.id)
    );
    const relatedInstitutionAssociations = institutionAssociations.filter(
      (record) => record.personId === person.id
    );
    const relatedGeographicAssociations = geographicAssociations.filter(
      (record) => record.personId === person.id
    );
    const relatedRelationships = relationships.filter((record) =>
      person.relationshipIds.includes(record.id)
    );
    return (
      personMatchesQuery(person, query.query) &&
      (!query.area ||
        person.primaryAreaIds.includes(query.area) ||
        relatedClaims.some((record) => record.areaIds.includes(query.area!)) ||
        relatedIncidents.some((record) => record.areaIds.includes(query.area!)) ||
        relatedGeographicAssociations.some((record) => record.areaId === query.area)) &&
      (!query.historicalEra || person.historicalEraIds.includes(query.historicalEra)) &&
      (!query.influenceDomain ||
        person.influenceDomains.includes(query.influenceDomain as never)) &&
      (!query.institutionType ||
        relatedInstitutionAssociations.some((association) => {
          const institution = institutions.find(
            (record) => record.id === association.institutionId
          );
          return institution?.type === query.institutionType;
        })) &&
      (!query.legalStatus ||
        relatedCases.some((record) => record.legalStatus === query.legalStatus)) &&
      (!query.category || relatedCases.some((record) => record.category === query.category)) &&
      (!query.politicalAffiliation || person.politicalAffiliation === query.politicalAffiliation) &&
      (!query.occupation || person.occupation === query.occupation) &&
      (!query.organization || person.organizations.includes(query.organization)) &&
      (!query.country || person.country === query.country) &&
      (!query.tag || person.tags.includes(query.tag)) &&
      (!query.claimType || relatedClaims.some((record) => record.type === query.claimType)) &&
      (!query.claimStatus || relatedClaims.some((record) => record.status === query.claimStatus)) &&
      (!query.incidentType ||
        relatedIncidents.some((record) => record.incidentType === query.incidentType)) &&
      (!query.relationshipType ||
        relatedRelationships.some((record) => record.relationshipType === query.relationshipType) ||
        relatedInstitutionAssociations.some(
          (record) => record.relationshipType === query.relationshipType
        ) ||
        relatedGeographicAssociations.some(
          (record) => record.relationType === query.relationshipType
        )) &&
      (!query.verificationStatus ||
        relatedClaims.some((record) => record.verificationStatus === query.verificationStatus) ||
        relatedInstitutionAssociations.some(
          (record) => record.verificationStatus === query.verificationStatus
        ) ||
        relatedGeographicAssociations.some(
          (record) => record.verificationStatus === query.verificationStatus
        )) &&
      (!query.officialFindingAvailable ||
        relatedClaims.some((record) =>
          ["OFFICIAL_FINDING", "JUDICIALLY_ESTABLISHED"].includes(record.status)
        )) &&
      (!query.subjectResponseAvailable ||
        subjectResponses.some((record) => record.personId === person.id)) &&
      (!query.year ||
        relatedCases.some((record) =>
          [record.filedAt, record.startedAt, record.resolvedAt]
            .filter(Boolean)
            .some((date) => date?.startsWith(query.year!))
        ) ||
        relatedClaims.some((record) =>
          [record.startDate, record.endDate]
            .filter(Boolean)
            .some((date) => date?.startsWith(query.year!))
        ) ||
        relatedIncidents.some((record) =>
          [record.occurredAt, record.periodStart, record.periodEnd]
            .filter(Boolean)
            .some((date) => date?.startsWith(query.year!))
        ))
    );
  });
}

export function sortPeople(
  people: PersonProfile[],
  sort: PeopleSearchQuery["sort"] = "recently-verified"
) {
  return [...people].sort((a, b) => {
    if (sort === "alphabetical") return a.nameEn.localeCompare(b.nameEn);
    if (sort === "recently-updated") return b.updatedAt.localeCompare(a.updatedAt);
    return b.lastVerifiedAt.localeCompare(a.lastVerifiedAt);
  });
}

export function paginate<T>(items: T[], page = 1, pageSize = 9) {
  const safePageSize = Number.isFinite(pageSize) ? Math.max(1, pageSize) : 9;
  const total = items.length;
  const totalPages = Math.ceil(total / safePageSize);
  const requestedPage = Number.isFinite(page) ? Math.max(1, page) : 1;
  const safePage = totalPages > 0 ? Math.min(requestedPage, totalPages) : 1;
  const start = (safePage - 1) * safePageSize;
  return {
    items: items.slice(start, start + safePageSize),
    page: safePage,
    pageSize: safePageSize,
    total,
    totalPages
  };
}
