import { describe, expect, it } from "vitest";
import { caseRecordSchema } from "@/domain/case";
import { people, cases } from "@/data/fixtures/mock-data";
import { formatDate } from "@/lib/dates";
import {
  aggregateStatuses,
  applyPeopleFilters,
  normalizeQuery,
  paginate,
  personMatchesQuery,
  sortPeople
} from "@/lib/search";
import { statusLabel } from "@/lib/status";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

describe("search utilities", () => {
  it("normalizes English and Bangla query text", () => {
    expect(normalizeQuery("  Demo   PERSON  ")).toBe("demo person");
    expect(normalizeQuery(" ডেমো  ব্যক্তি ")).toBe("ডেমো ব্যক্তি");
  });

  it("matches Bangla or English names with OR behavior", () => {
    expect(personMatchesQuery(people[0], "ডেমো ব্যক্তি 1")).toBe(true);
    expect(personMatchesQuery(people[0], "Demo Person 1")).toBe(true);
  });

  it("filters by category, status, affiliation, and before pagination", () => {
    const filtered = applyPeopleFilters(people, cases, {
      category: cases[0].category,
      legalStatus: cases[0].legalStatus,
      politicalAffiliation: people[0].politicalAffiliation,
      page: 1,
      pageSize: 1
    });
    expect(filtered.length).toBeGreaterThan(0);
    const paged = paginate(filtered, 1, 1);
    expect(paged.total).toBe(filtered.length);
  });

  it("sorts and aggregates statuses", () => {
    expect(sortPeople(people, "alphabetical")[0].nameEn).toBe("Demo Person 1");
    expect(aggregateStatuses(people[0], cases).length).toBeGreaterThan(0);
  });

  it("provides localized status labels and date formatting", () => {
    expect(statusLabel("ACQUITTED", "en")).toBe("Acquitted");
    expect(statusLabel("ACQUITTED", "bn")).toBe("খালাস");
    expect(formatDate("2026-07-01", "en")).toContain("2026");
  });

  it("selects a repository and validates case records with Zod", async () => {
    expect(createBlackSheepRepository()).toBeTruthy();
    expect(caseRecordSchema.parse(cases[0]).id).toBe(cases[0].id);
  });
});
