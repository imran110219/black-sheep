import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const ershadShikdarSources = [
  source({
    id: publicSourceIds.ershadShikdarDailyStar,
    isDemo: false,
    slug: "source-ershad-shikdar-daily-star-2004",
    type: "NEWS_REPORT",
    title: "Ershad Shikdar to be hanged on May 10",
    publisher: "The Daily Star",
    sourceUrl: "https://archive.thedailystar.net/2004/04/21/d40421011818.htm",
    publicationDate: "2004-04-21",
    accessedAt: "2026-08-07",
    excerpt: "Public report on death sentence, rejected mercy petition, and murder-case record.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Death sentence", "Rejected mercy petition", "Murder case record"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.ershadShikdar]
  }),
  source({
    id: publicSourceIds.ershadShikdarVoa,
    isDemo: false,
    slug: "source-ershad-shikdar-voa-2004",
    type: "NEWS_REPORT",
    title: "Ershad Shikder Executed in Khulna",
    publisher: "VOA Bangla",
    sourceUrl: "https://www.voabangla.com/a/a-16-a-2004-05-11-1-ershad-94348939/1385241.html",
    publicationDate: "2004-05-11",
    accessedAt: "2026-08-07",
    excerpt: "Public report on execution in Khulna District Jail after Supreme Court confirmation.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Execution in 2004",
      "Supreme Court upheld death sentence",
      "Conviction reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.ershadShikdar]
  })
];
