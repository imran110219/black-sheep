import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const picchiHannanSources = [
  source({
    id: publicSourceIds.picchiHannanDailyStar,
    isDemo: false,
    slug: "source-picchi-hannan-daily-star-2004",
    type: "NEWS_REPORT",
    title: "Pichchi Hannan killed in crossfire",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/2004/08/07/d4080701011.htm",
    publicationDate: "2004-08-07",
    accessedAt: "2026-08-07",
    excerpt: "Public report on death during claimed RAB crossfire, remand, and pending cases.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Death during claimed crossfire", "Top-23 list", "Pending case reporting"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.picchiHannan]
  })
];
