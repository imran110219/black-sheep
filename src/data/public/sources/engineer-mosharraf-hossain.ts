import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const engineerMosharrafHossainSources = [
  source({
    id: publicSourceIds.mosharrafDailyStarBailDeath,
    isDemo: false,
    slug: "source-mosharraf-daily-star-bail-death-2026",
    type: "NEWS_REPORT",
    title: "Ex-minister Mosharraf Hossain dies",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/ex-minister-mosharraf-hossain-dies-4175251",
    publicationDate: "2026-05-14",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on Engineer Mosharraf Hossain's death, noting earlier arrest in a July-uprising-related case and subsequent bail in all 12 cases.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former minister and Chattogram-1 lawmaker role",
      "Arrest in July-uprising-related case",
      "Bail in all cases and death reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.engineerMosharrafHossain]
  })
];
