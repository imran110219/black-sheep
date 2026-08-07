import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mKhurshidHossainSources = [
  source({
    id: publicSourceIds.khurshidNewAgeRabTransition,
    isDemo: false,
    slug: "source-khurshid-new-age-rab-transition-2024",
    type: "NEWS_REPORT",
    title: "New RAB DG Md Harun-Ar-Rashid takes over charges",
    publisher: "New Age",
    sourceUrl: "https://www.newagebd.net/print/post/236974",
    publicationDate: "2024-06-05",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Barrister Md Harun-Ar-Rashid replaced former RAB DG M Khurshid Hossain after Khurshid went on retirement.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former RAB DG role",
      "Retirement and leadership transition",
      "RAB command context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mKhurshidHossain, publicPersonIds.barristerMdHarunArRashid]
  }),
  source({
    id: publicSourceIds.khurshidDailySunElectionRab,
    isDemo: false,
    slug: "source-khurshid-daily-sun-election-rab-2024",
    type: "NEWS_REPORT",
    title: "Stern action if anyone tries to obstruct voters: RAB DG",
    publisher: "Daily Sun",
    sourceUrl: "https://www.daily-sun.com/printversion/details/729239",
    publicationDate: "2024-01-06",
    accessedAt: "2026-08-08",
    excerpt:
      "Report quoting RAB DG M Khurshid Hossain on election-day security and law-enforcement coordination.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["RAB DG role", "Election security comments", "Public security coordination"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mKhurshidHossain]
  })
];
