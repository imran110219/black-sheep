import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const saifuzzamanChowdhurySources = [
  source({
    id: publicSourceIds.saifuzzamanDailyStarVietnamProperties,
    isDemo: false,
    slug: "source-saifuzzaman-daily-star-vietnam-properties-2026",
    type: "NEWS_REPORT",
    title: "Saifuzzaman Chy owns 33 properties worth Tk 167cr in Vietnam",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/crime-justice/news/saifuzzaman-chy-owns-33-properties-worth-tk-167cr-vietnam-4241981",
    publicationDate: "2026-08-07",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on an ACC circular and Dhaka court seizure order for Vietnam properties linked to Saifuzzaman Chowdhury and related persons or entities.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former land minister role",
      "ACC probe into overseas properties",
      "Vietnam property reporting",
      "Dhaka court seizure-order context",
      "Money-laundering and corruption allegation context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.saifuzzamanChowdhury]
  }),
  source({
    id: publicSourceIds.saifuzzamanDailyStarForeignAssets,
    isDemo: false,
    slug: "source-saifuzzaman-daily-star-foreign-assets-2026",
    type: "NEWS_REPORT",
    title: "Court orders seizure of Saifuzzaman's foreign assets",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/court-orders-seizure-saifuzzamans-foreign-assets-4080581",
    publicationDate: "2026-01-14",
    accessedAt: "2026-08-07",
    excerpt:
      "Public court report on Dhaka court orders to confiscate foreign properties in connection with ACC corruption allegations.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Foreign asset seizure-order reporting",
      "ACC enquiry context",
      "Overseas property country list",
      "Corruption allegation context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.saifuzzamanChowdhury]
  }),
  source({
    id: publicSourceIds.saifuzzamanDailyStarUcbCase,
    isDemo: false,
    slug: "source-saifuzzaman-daily-star-ucb-case-2026",
    type: "NEWS_REPORT",
    title: "Ex-land minister Saifuzzaman, wife sued over Tk 25cr embezzlement",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/ex-land-minister-saifuzzaman-wife-sued-over-tk-25cr-embezzlement-4073746",
    publicationDate: "2026-01-05",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report that the ACC filed a UCB-related case alleging embezzlement, fraud, and money laundering.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case filing",
      "UCB-related embezzlement allegation",
      "Fraud and money-laundering allegation context",
      "Former land minister role"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.saifuzzamanChowdhury]
  }),
  source({
    id: publicSourceIds.saifuzzamanParliamentProfile,
    isDemo: false,
    slug: "source-saifuzzaman-parliament-profile",
    type: "PARLIAMENTARY_RECORD",
    title: "Member of parliament listing",
    publisher: "Bangladesh Parliament",
    sourceUrl: "https://www.parliament.gov.bd/sitting-members",
    publicationDate: "2026-08-07",
    accessedAt: "2026-08-07",
    excerpt:
      "Accessed public parliamentary listing identifying Saifuzzaman Chowdhury as Bangladesh Awami League representative for Chattogram-13.",
    verificationStatus: "REVIEWED",
    isPrimarySource: true,
    supportedClaims: [
      "Member of Parliament role",
      "Bangladesh Awami League affiliation",
      "Chattogram-13 constituency"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.saifuzzamanChowdhury]
  })
];
