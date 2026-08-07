import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const khandakerTanvirulIslamJoySources = [
  source({
    id: publicSourceIds.joyDailyStar,
    isDemo: false,
    slug: "source-tanvir-joy-daily-star-2019",
    type: "INVESTIGATIVE_REPORT",
    title: "Is this man top terror Joy?",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/frontpage/news/tycoon-rana-top-terror-joy-1842277",
    publicationDate: "2019-12-18",
    accessedAt: "2026-08-07",
    excerpt:
      "Joint investigation by The Daily Star and Global News on Tanvir Islam Joy identity questions.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Seven Star group reference",
      "Bangladesh Police most-wanted record reference",
      "Identity dispute context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.khandakerTanvirulIslamJoy]
  })
];
