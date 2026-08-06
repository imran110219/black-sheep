import type { CaseRecord } from "@/domain/case";
import type { PersonCard, PeopleSearchQuery, PersonProfile } from "@/domain/person";

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
    return (
      personMatchesQuery(person, query.query) &&
      (!query.legalStatus ||
        relatedCases.some((record) => record.legalStatus === query.legalStatus)) &&
      (!query.category || relatedCases.some((record) => record.category === query.category)) &&
      (!query.politicalAffiliation || person.politicalAffiliation === query.politicalAffiliation) &&
      (!query.occupation || person.occupation === query.occupation) &&
      (!query.organization || person.organizations.includes(query.organization)) &&
      (!query.country || person.country === query.country) &&
      (!query.tag || person.tags.includes(query.tag)) &&
      (!query.year ||
        relatedCases.some((record) =>
          [record.filedAt, record.startedAt, record.resolvedAt]
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
  const safePage = Math.max(1, page);
  const safePageSize = Math.max(1, pageSize);
  const total = items.length;
  const totalPages = Math.ceil(total / safePageSize);
  const start = (safePage - 1) * safePageSize;
  return {
    items: items.slice(start, start + safePageSize),
    page: safePage,
    pageSize: safePageSize,
    total,
    totalPages
  };
}
