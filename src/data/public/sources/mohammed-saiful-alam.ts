import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mohammedSaifulAlamSources = [
  source({
    id: publicSourceIds.sAlamBssIslamiBankCase,
    isDemo: false,
    slug: "source-s-alam-bss-islami-bank-case-2025",
    type: "NEWS_REPORT",
    title: "ACC files case against S Alam, 66 others for embezzling Tk 10,500 crore",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/others/330106",
    publicationDate: "2025-11-09",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS report that ACC filed a case against S Alam and 66 others over alleged embezzlement from Islami Bank and alleged laundering of a portion of the money to Singapore.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case reporting against Mohammed Saiful Alam and others",
      "Alleged Islami Bank loan embezzlement and money laundering",
      "Amounts are ACC-reported allegations, not final judicial findings"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammedSaifulAlam]
  }),
  source({
    id: publicSourceIds.sAlamDailyStarIllegalAssets,
    isDemo: false,
    slug: "source-s-alam-daily-star-illegal-assets-2025",
    type: "NEWS_REPORT",
    title: "S Alam, wife sued over illegal assets worth over Tk 1,539cr",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/corruption/news/s-alam-wife-sued-over-illegal-assets-worth-over-tk-1539cr-3857111",
    publicationDate: "2025-03-25",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the ACC filed two cases accusing Mohammed Saiful Alam and Farzana Parveen of amassing alleged illegal wealth and undeclared assets in Bangladesh and abroad.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC illegal-wealth case reporting",
      "Foreign asset allegation context",
      "No conviction is established by the article"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammedSaifulAlam]
  }),
  source({
    id: publicSourceIds.sAlamDailyStarBankGrab,
    isDemo: false,
    slug: "source-s-alam-daily-star-bank-grab-2024",
    type: "INVESTIGATIVE_REPORT",
    title: "How S Alam family grabbed multiple banks",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/business/economy/banks/news/how-s-alam-family-grabbed-multiple-banks-3688241",
    publicationDate: "2024-08-27",
    accessedAt: "2026-08-08",
    excerpt:
      "Investigative report on how Mohammed Saiful Alam and family members allegedly used regulatory permission and bank shareholding structures to control several banks and financial institutions.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Bank-control investigative reporting",
      "S Alam family shareholding and loan exposure context",
      "Regulatory failure allegations are reporting context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammedSaifulAlam]
  }),
  source({
    id: publicSourceIds.sAlamProthomAloIslamiBankTakeover,
    isDemo: false,
    slug: "source-s-alam-prothom-alo-islami-bank-takeover-2026",
    type: "INVESTIGATIVE_REPORT",
    title: "'Hey, who are you people?' — The story of a bank takeover",
    publisher: "Prothom Alo",
    sourceUrl: "https://en.prothomalo.com/business/local/76waaclbg2",
    publicationDate: "2026-05-11",
    accessedAt: "2026-08-08",
    excerpt:
      "Detailed report based on former directors, bank officials and Bangladesh Bank sources describing the alleged 2017 transfer of Islami Bank control to S Alam Group under state-security pressure.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Investigative account of Islami Bank takeover",
      "Saiful Alam's role in reported bank-control transition",
      "Source says attempts to obtain Saiful Alam's comment were unsuccessful"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammedSaifulAlam]
  }),
  source({
    id: publicSourceIds.sAlamBssShareFreeze,
    isDemo: false,
    slug: "source-s-alam-bss-share-freeze-2025",
    type: "NEWS_REPORT",
    title: "Court orders freezing of Tk 5,109cr shares, profits of S Alam family",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/245976",
    publicationDate: "2025-02-12",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS report that a Dhaka court ordered freezing of shares and related profits owned by Mohammed Saiful Alam and family members during an ACC money-laundering investigation.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Court freeze-order reporting",
      "ACC money-laundering investigation context",
      "Share values are reported from the ACC plea"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammedSaifulAlam]
  })
];
