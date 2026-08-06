import { describe, expect, it } from "vitest";
import { caseRecordSchema } from "@/domain/case";
import { cases, people } from "@/data";
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
  const publicPerson = people.find((person) => person.slug === "sweden-aslam");

  it("normalizes English and Bangla query text", () => {
    expect(normalizeQuery("  Sweden   ASLAM  ")).toBe("sweden aslam");
    expect(normalizeQuery(" সুইডেন  আসলাম ")).toBe("সুইডেন আসলাম");
  });

  it("matches Bangla or English names with OR behavior", () => {
    expect(publicPerson).toBeDefined();
    expect(personMatchesQuery(publicPerson!, "সুইডেন আসলাম")).toBe(true);
    expect(personMatchesQuery(publicPerson!, "Sweden Aslam")).toBe(true);
  });

  it("filters by affiliation before pagination", () => {
    const filtered = applyPeopleFilters(people, cases, {
      politicalAffiliation: "AWAMI_LEAGUE",
      page: 1,
      pageSize: 1
    });
    expect(filtered.length).toBeGreaterThan(0);
    const paged = paginate(filtered, 1, 1);
    expect(paged.total).toBe(filtered.length);
  });

  it("sorts and aggregates statuses", () => {
    expect(sortPeople(people, "alphabetical")[0].nameEn).toBe("Ershad Shikdar");
    expect(publicPerson).toBeDefined();
    expect(aggregateStatuses(publicPerson!, cases)).toEqual([]);
  });

  it("provides localized status labels and date formatting", () => {
    expect(statusLabel("ACQUITTED", "en")).toBe("Acquitted");
    expect(statusLabel("ACQUITTED", "bn")).toBe("খালাস");
    expect(formatDate("2026-07-01", "en")).toContain("2026");
  });

  it("selects a repository and validates case records with Zod", async () => {
    expect(createBlackSheepRepository()).toBeTruthy();
    expect(cases.map((record) => caseRecordSchema.parse(record))).toEqual([]);
  });
});
