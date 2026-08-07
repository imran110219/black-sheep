import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const hamidulHaqueSources = [
  source({
    id: publicSourceIds.hamidulBdnewsDgfiAppointment,
    isDemo: false,
    slug: "source-hamidul-bdnews-dgfi-appointment-2022",
    type: "NEWS_REPORT",
    title: "Maj Gen Hamidul Haque is appointed DGFI chief",
    publisher: "bdnews24.com",
    sourceUrl: "https://bdnews24.com/bangladesh/vt91u11rbv",
    publicationDate: "2022-10-26",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Major General Hamidul Haque was appointed director general of DGFI, replacing Ahmed Tabrez Shams Chowdhury.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "DGFI chief appointment",
      "Previous 17th Infantry Division command context",
      "Army career background"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.hamidulHaque]
  }),
  source({
    id: publicSourceIds.hamidulDailyStarForcedRetirement,
    isDemo: false,
    slug: "source-hamidul-daily-star-forced-retirement-2024",
    type: "NEWS_REPORT",
    title: "3 ex-DGs of DGFI sent into forced retirement",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/3-ex-dgs-dgfi-sent-forced-retirement-3701191",
    publicationDate: "2024-09-12",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Major General Hamidul Haque, a former DGFI director general, was sent into forced retirement after the August 2024 transition.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former DGFI director general role",
      "Forced-retirement reporting",
      "Replacement after fall of Awami League government"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.hamidulHaque, publicPersonIds.mdSaifulAlam]
  })
];
