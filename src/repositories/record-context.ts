import {
  assets,
  cases,
  corrections,
  newsRecords,
  people,
  relationships,
  revisions,
  sources,
  subjectResponses,
  organizations
} from "@/data/fixtures/mock-data";

export function getPublicMockIndex() {
  return {
    people,
    cases,
    newsRecords,
    sources,
    assets,
    relationships,
    subjectResponses,
    corrections,
    revisions,
    organizations
  };
}

export function getPersonContext(personId: string) {
  const person = people.find((item) => item.id === personId);
  if (!person) return null;
  const relatedCases = cases.filter((record) => person.caseIds.includes(record.id));
  const sourceIds = new Set(relatedCases.flatMap((record) => record.sourceIds));
  return {
    person,
    cases: relatedCases,
    allCases: cases,
    news: newsRecords.filter((record) => person.newsIds.includes(record.id)),
    sources: sources.filter(
      (record) => sourceIds.has(record.id) || record.relatedPersonIds.includes(person.id)
    ),
    assets: assets.filter((record) => person.assetIds.includes(record.id)),
    relationships: relationships.filter((record) => person.relationshipIds.includes(record.id)),
    people,
    responses: subjectResponses.filter((record) => record.personId === person.id),
    corrections: corrections.filter(
      (record) => record.entityId === person.id || person.caseIds.includes(record.entityId)
    ),
    revisions: revisions.filter((record) => record.entityId === person.id),
    organizations: organizations.filter((record) => record.personIds.includes(person.id))
  };
}

export function getCaseContext(caseId: string) {
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

export function getNewsContext(newsId: string) {
  const news = newsRecords.find((item) => item.id === newsId);
  if (!news) return null;
  return {
    news,
    people: people.filter((person) => news.personIds.includes(person.id)),
    cases: cases.filter((record) => news.caseIds.includes(record.id))
  };
}

export function getSourceContext(sourceId: string) {
  const source = sources.find((item) => item.id === sourceId);
  if (!source) return null;
  return {
    source,
    people: people.filter((person) => source.relatedPersonIds.includes(person.id)),
    cases: cases.filter((record) => source.relatedCaseIds.includes(record.id))
  };
}

export function getOrganizationContext(organizationId: string) {
  const organization = organizations.find((item) => item.id === organizationId);
  if (!organization) return null;
  return {
    organization,
    people: people.filter((person) => organization.personIds.includes(person.id)),
    cases: cases.filter((record) => organization.caseIds.includes(record.id))
  };
}
