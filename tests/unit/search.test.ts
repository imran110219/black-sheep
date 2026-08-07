import { describe, expect, it } from "vitest";
import { caseRecordSchema } from "@/domain/case";
import {
  areaSchema,
  claimRecordSchema,
  incidentRecordSchema,
  institutionSchema
} from "@/domain/claim";
import { personNarrativeSchema } from "@/domain/person";
import { areas, cases, claims, incidents, institutions, people } from "@/data";
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
    const sortedNames = sortPeople(people, "alphabetical").map((person) => person.nameEn);
    expect(sortedNames).toEqual([...sortedNames].sort((a, b) => a.localeCompare(b)));
    expect(publicPerson).toBeDefined();
    expect(aggregateStatuses(publicPerson!, cases)).toEqual([]);
  });

  it("provides localized status labels, date formatting, and safe pagination", () => {
    expect(statusLabel("ACQUITTED", "en")).toBe("Acquitted");
    expect(statusLabel("ACQUITTED", "bn")).toBe("খালাস");
    expect(formatDate("2026-07-01", "en")).toContain("2026");
    expect(paginate([1, 2, 3], Number.NaN, Number.NaN).page).toBe(1);
    expect(paginate([1, 2, 3], 99, 2)).toMatchObject({
      items: [3],
      page: 2,
      totalPages: 2
    });
  });

  it("validates expanded public-interest records with Zod", () => {
    expect(cases.map((record) => caseRecordSchema.parse(record)).length).toBeGreaterThanOrEqual(13);
    expect(claims.map((record) => claimRecordSchema.parse(record)).length).toBeGreaterThanOrEqual(
      24
    );
    expect(
      incidents.map((record) => incidentRecordSchema.parse(record)).length
    ).toBeGreaterThanOrEqual(13);
    expect(areas.map((record) => areaSchema.parse(record)).length).toBeGreaterThanOrEqual(20);
    expect(
      institutions.map((record) => institutionSchema.parse(record)).length
    ).toBeGreaterThanOrEqual(17);
    expect(
      people.map((person) => personNarrativeSchema.parse(person.narrative)).length
    ).toBeGreaterThanOrEqual(23);
  });

  it("searches across people, institutions, and incidents", async () => {
    const repo = createBlackSheepRepository();
    expect(await repo.globalSearch("metropolitan")).toEqual(
      expect.arrayContaining([expect.objectContaining({ type: "INSTITUTION" })])
    );
    expect(await repo.globalSearch("Sweden Aslam")).toEqual(
      expect.arrayContaining([expect.objectContaining({ type: "PERSON" })])
    );
    expect(await repo.getPersonStoryContext(publicPerson!.id)).toBeTruthy();
    const hasina = people.find((person) => person.slug === "sheikh-hasina");
    expect(hasina).toBeDefined();
    const hasinaStory = await repo.getPersonStoryContext(hasina!.id);
    const hasinaEvidence = await repo.getPersonEvidenceContext(hasina!.id);
    expect(hasinaStory?.claims.length).toBeGreaterThanOrEqual(4);
    expect(hasinaStory?.incidents.length).toBeGreaterThanOrEqual(1);
    expect(hasinaEvidence?.cases.length).toBeGreaterThanOrEqual(1);
    expect(hasinaEvidence?.responses.length).toBeGreaterThanOrEqual(1);
  });
});
