import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const barristerMdHarunArRashidSources = [
  source({
    id: publicSourceIds.barristerHarunNewAgeRabDg,
    isDemo: false,
    slug: "source-barrister-harun-new-age-rab-dg-2024",
    type: "NEWS_REPORT",
    title: "New RAB DG Md Harun-Ar-Rashid takes over charges",
    publisher: "New Age",
    sourceUrl: "https://www.newagebd.net/print/post/236974",
    publicationDate: "2024-06-05",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Barrister Md Harun-Ar-Rashid took charge as RAB director general, replacing M Khurshid Hossain.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "RAB DG appointment",
      "Former Additional IGP and Mymensingh Range DIG context",
      "Leadership transition"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.barristerMdHarunArRashid, publicPersonIds.mKhurshidHossain]
  }),
  source({
    id: publicSourceIds.barristerHarunDailyStarIctWarrant,
    isDemo: false,
    slug: "source-barrister-harun-daily-star-ict-warrant-2025",
    type: "NEWS_REPORT",
    title: "ICT issues arrest warrants against ex-Rab DG Harun",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/ict-issues-arrest-warrants-against-ex-rab-dg-harun-3808711",
    publicationDate: "2025-01-26",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the ICT issued arrest warrants against former RAB DG Md Harun or Rashid over alleged crimes against humanity during the July-August uprising and enforced disappearances.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT arrest-warrant reporting",
      "Alleged command-responsibility context",
      "RAB denial context over helicopter gunfire allegation"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.barristerMdHarunArRashid]
  })
];
