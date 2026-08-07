import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const ziaulAhsanSources = [
  source({
    id: publicSourceIds.ziaulAhsanDailyStarIctTestimony,
    isDemo: false,
    slug: "source-ziaul-ahsan-daily-star-ict-testimony-2026",
    type: "NEWS_REPORT",
    title: "Maj Gen Ziaul Ahsan left no trace while killing people",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/crime-justice/news/maj-gen-ziaul-ahsan-left-no-trace-while-killing-people-4236831",
    publicationDate: "2026-07-31",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on testimony before International Crimes Tribunal-1 alleging RAB Intelligence Wing involvement in extrajudicial killing and enforced-disappearance operations.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT trial reporting",
      "Former RAB intelligence role context",
      "Tribunal testimony against Ziaul Ahsan",
      "Alleged extrajudicial killing and enforced-disappearance operations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.ziaulAhsan]
  })
];
