import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const tokaiSagarSources = [
  source({
    id: publicSourceIds.tokaiSagarDailyStar,
    isDemo: false,
    slug: "source-tokai-sagar-daily-star-2025",
    type: "NEWS_REPORT",
    title: "Top criminals Subrata Bain, Molla Masud held",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/top-criminals-subrata-bain-molla-masud-held-3904636",
    publicationDate: "2025-05-27",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report identifying Amin Rasul Sagor alias Tokai Sagor as a co-leader of the Seven Star group.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Tokai Sagor alias",
      "Seven Star co-leader reporting",
      "Underworld network context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.tokaiSagar]
  })
];
