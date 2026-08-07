import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const monirulIslamSources = [
  source({
    id: publicSourceIds.monirulDailyStarSbChief,
    isDemo: false,
    slug: "source-monirul-daily-star-special-branch-chief-2021",
    type: "NEWS_REPORT",
    title: "Monirul Islam new chief of police's special branch",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/city/news/monirul-islam-new-chief-polices-special-branch-2060653",
    publicationDate: "2021-03-14",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Monirul Islam, then CTTC chief and DMP additional commissioner, was appointed to lead the Special Branch of police.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "CTTC chief role",
      "Special Branch chief appointment",
      "DMP additional commissioner role"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.monirulIslam]
  })
];
