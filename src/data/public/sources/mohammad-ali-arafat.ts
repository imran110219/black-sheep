import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mohammadAliArafatSources = [
  source({
    id: publicSourceIds.arafatDailyStarAppointment,
    isDemo: false,
    slug: "source-arafat-daily-star-appointment-2024",
    type: "NEWS_REPORT",
    title: "Arafat appointed information and broadcasting state minister",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/election-2024/news/news/arafat-appointed-information-and-broadcasting-state-minister-3517241",
    publicationDate: "2024-01-11",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on Mohammad Ali Arafat's appointment and Awami League communications and foreign-relations role.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "State minister appointment",
      "Awami League central role",
      "Communications and foreign-relations function"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammadAliArafat]
  }),
  source({
    id: publicSourceIds.arafatDailyStarInterview,
    isDemo: false,
    slug: "source-arafat-daily-star-interview-2024",
    type: "NEWS_REPORT",
    title: "There's a huge difference between DSA and CSA",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/opinion/interviews/news/theres-huge-difference-between-dsa-and-csa-3534621",
    publicationDate: "2024-02-03",
    accessedAt: "2026-08-07",
    excerpt:
      "Public interview on press freedom, rumours, disinformation, the Cyber Security Act, and ministry priorities.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Press-freedom messaging",
      "Cyber Security Act position",
      "Disinformation policy context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammadAliArafat]
  })
];
