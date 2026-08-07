import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mdSaifulAlamSources = [
  source({
    id: publicSourceIds.saifulDailyStarForcedRetirement,
    isDemo: false,
    slug: "source-saiful-daily-star-dgfi-forced-retirement-2024",
    type: "NEWS_REPORT",
    title: "3 ex-DGs of DGFI sent into forced retirement",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/3-ex-dgs-dgfi-sent-forced-retirement-3701191",
    publicationDate: "2024-09-12",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Lt Gen Md Saiful Alam, a former DGFI director general, was sent into forced retirement and had been subject to BFIU account-freeze reporting.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former DGFI director general role",
      "Forced-retirement reporting",
      "BFIU account-freeze reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdSaifulAlam, publicPersonIds.hamidulHaque]
  }),
  source({
    id: publicSourceIds.saifulProthomAloForcedRetirement,
    isDemo: false,
    slug: "source-saiful-prothom-alo-forced-retirement-2024",
    type: "NEWS_REPORT",
    title: "Lt Gen Mujibur dismissed, Saiful sent on forced retirement",
    publisher: "Prothom Alo",
    sourceUrl: "https://en.prothomalo.com/bangladesh/um6ixg946e",
    publicationDate: "2024-09-12",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Lt Gen Md Saiful Alam was forced to retire early and had served as DGFI director general, Quartermaster General, and GOC of 11 Infantry Division.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "DGFI and army command roles",
      "Forced-retirement reporting",
      "BFIU account-freeze context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdSaifulAlam]
  })
];
