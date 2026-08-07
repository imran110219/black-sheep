import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const swedenAslamSources = [
  source({
    id: publicSourceIds.swedenAslamDailyStar,
    isDemo: false,
    slug: "source-sweden-aslam-daily-star-2024",
    type: "NEWS_REPORT",
    title: "Top criminal Sweden Aslam released after 27yrs in jail",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/top-criminal-sweden-aslam-released-after-27yrs-jail-3694666",
    publicationDate: "2024-09-04",
    accessedAt: "2026-08-07",
    excerpt: "Public report on bail release, case history, and police-attributed case counts.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Bail release in 2024", "Reported case history", "Top criminal label"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.swedenAslam]
  }),
  source({
    id: publicSourceIds.swedenAslamTbs,
    isDemo: false,
    slug: "source-sweden-aslam-tbs-2024",
    type: "NEWS_REPORT",
    title: "Top terror Sweden Aslam released from Kashimpur jail",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/top-terrorist-sweden-aslam-released-kashimpur-jail-933191",
    publicationDate: "2024-09-04",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report identifying him among the 23 top criminals and describing pending trial context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Named among 23 top criminals",
      "Kashimpur jail release",
      "Reported case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.swedenAslam]
  })
];
