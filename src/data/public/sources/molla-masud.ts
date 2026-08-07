import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mollaMasudSources = [
  source({
    id: publicSourceIds.mollaMasudDailyStar2015,
    isDemo: false,
    slug: "source-molla-masud-daily-star-2015",
    type: "NEWS_REPORT",
    title: "Top criminal Masud caught in India",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/backpage/top-criminal-masud-caught-kolkata-71829",
    publicationDate: "2015-03-15",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on Indian arrest, Interpol red notice, cases, and Seven Star association.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["2015 arrest in India", "Interpol red notice", "Seven Star association"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mollaMasud]
  }),
  source({
    id: publicSourceIds.mollaMasudDailyStar2025,
    isDemo: false,
    slug: "source-molla-masud-daily-star-2025",
    type: "NEWS_REPORT",
    title: "Top criminals Subrata Bain, Molla Masud held",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/top-criminals-subrata-bain-molla-masud-held-3904636",
    publicationDate: "2025-05-27",
    accessedAt: "2026-08-07",
    excerpt: "Public report on 2025 arrest with Subrata Bain and Seven Star group context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["2025 arrest", "Seven Star group context", "Top-23 list reference"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mollaMasud, publicPersonIds.subrataBain]
  })
];
