import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const bacchuSources = [
  source({
    id: publicSourceIds.bacchuDailyStarBasicBankCases,
    isDemo: false,
    slug: "source-bacchu-daily-star-basic-bank-cases-2023",
    type: "NEWS_REPORT",
    title: "Basic Bank scam: ACC files 59 cases against Bacchu, 146 others",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/basic-bank-scam-acc-files-59-cases-against-bacchu-146-others-3493121",
    publicationDate: "2023-12-12",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the ACC filed cases against former Basic Bank chairman Sheikh Abdul Hye Bacchu and others over alleged loan irregularities.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case filing reporting",
      "Basic Bank loan irregularity allegations",
      "No final conviction established by this source"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhAbdulHyeBacchu]
  }),
  source({
    id: publicSourceIds.bacchuBssBasicBankCase,
    isDemo: false,
    slug: "source-bacchu-bss-basic-bank-case-2023",
    type: "NEWS_REPORT",
    title: "Basic Bank loan scam case reporting",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/162450",
    publicationDate: "2023-12-12",
    accessedAt: "2026-08-08",
    excerpt:
      "State news report on ACC case activity involving former Basic Bank chairman Sheikh Abdul Hye Bacchu and others.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["ACC case context", "Basic Bank public-interest record"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhAbdulHyeBacchu]
  })
];

export const pkHalderSources = [
  source({
    id: publicSourceIds.pkHalderDailyStarConviction,
    isDemo: false,
    slug: "source-pk-halder-daily-star-conviction-2023",
    type: "NEWS_REPORT",
    title: "PK Halder, 13 others jailed for 22 years",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/pk-halder-13-others-jailed-22-years-3442681",
    publicationDate: "2023-10-08",
    accessedAt: "2026-08-08",
    excerpt: "Court report that PK Halder and 13 others were sentenced in a money-laundering case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Money-laundering conviction reporting", "Financial-sector case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.prashantaKumarHalder]
  }),
  source({
    id: publicSourceIds.pkHalderDhakaTribuneConviction,
    isDemo: false,
    slug: "source-pk-halder-dhaka-tribune-conviction-2023",
    type: "NEWS_REPORT",
    title: "PK Halder, 13 others jailed for 22 years",
    publisher: "Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/court/328209/pk-halder-13-others-jailed-for-22-years",
    publicationDate: "2023-10-08",
    accessedAt: "2026-08-08",
    excerpt: "Court report on sentencing in the PK Halder money-laundering case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Conviction reporting", "Case outcome context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.prashantaKumarHalder]
  })
];

export const skSurChowdhurySources = [
  source({
    id: publicSourceIds.skSurDailyStarAccCase,
    isDemo: false,
    slug: "source-sk-sur-daily-star-acc-case-2024",
    type: "NEWS_REPORT",
    title: "ACC files case against former BB deputy governor SK Sur, wife",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/acc-files-case-against-former-bb-deputy-governor-sk-sur-wife-3663871",
    publicationDate: "2024-07-28",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the ACC filed a case against former Bangladesh Bank deputy governor S K Sur Chowdhury and his wife over alleged wealth beyond known income.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case filing",
      "Illegal-wealth allegation",
      "Former Bangladesh Bank role"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.skSurChowdhury]
  }),
  source({
    id: publicSourceIds.skSurTbsAccCase,
    isDemo: false,
    slug: "source-sk-sur-tbs-acc-case-2024",
    type: "NEWS_REPORT",
    title: "ACC files case against former BB deputy governor SK Sur, wife",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/corruption/acc-files-case-against-former-bb-deputy-governor-sk-sur-wife-902671",
    publicationDate: "2024-07-28",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on ACC case activity involving S K Sur Chowdhury and his wife over alleged undeclared assets.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["ACC case reporting", "Asset declaration allegation context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.skSurChowdhury]
  })
];
