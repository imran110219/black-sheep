import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const harunOrRashidSources = [
  source({
    id: publicSourceIds.harunDailyStarTransfer,
    isDemo: false,
    slug: "source-harun-daily-star-transfer-2024",
    type: "NEWS_REPORT",
    title: "Harun transferred from DB",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/news/bangladesh/news/harun-transferred-db-3666491",
    publicationDate: "2024-07-31",
    accessedAt: "2026-08-08",
    excerpt:
      "Report identifying Harun Or Rashid as a DMP Detective Branch official and describing his transfer to the crime and operations department after quota-protest related controversy.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former DMP Detective Branch leadership context",
      "Transfer from Detective Branch to crime and operations department",
      "Quota-protest related public controversy around DB office conduct"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.harunOrRashid]
  }),
  source({
    id: publicSourceIds.harunDailyStarAccInvestigation,
    isDemo: false,
    slug: "source-harun-daily-star-acc-investigation-2024",
    type: "NEWS_REPORT",
    title: "ACC starts investigation against DB Harun",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/acc-starts-investigation-against-db-harun-3680301",
    publicationDate: "2024-08-18",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the Anti-Corruption Commission initiated an investigation against Harun Or Rashid over allegations of acquiring illegal wealth through irregularities and corruption.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC investigation reporting",
      "Allegations of illegal wealth are investigation-stage claims",
      "Former head of DMP Detective Branch identification"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.harunOrRashid]
  }),
  source({
    id: publicSourceIds.harunDailyStarAccSummons,
    isDemo: false,
    slug: "source-harun-daily-star-acc-summons-2024",
    type: "NEWS_REPORT",
    title: "ACC summons ex-DB chief Harun over corruption allegations",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/acc-summons-ex-db-chief-harun-over-corruption-allegations-3735496",
    publicationDate: "2024-10-24",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the ACC summoned Harun Or Rashid, former DMP Detective Branch chief, to appear regarding allegations of acquiring assets beyond known income through irregularities and corruption.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC summons reporting",
      "Corruption allegations are attributed to ACC inquiry context",
      "No conviction or final finding is established by the summons article"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.harunOrRashid]
  }),
  source({
    id: publicSourceIds.harunDailyStarAccountsFrozen,
    isDemo: false,
    slug: "source-harun-daily-star-accounts-frozen-2024",
    type: "NEWS_REPORT",
    title: "Former DMP DB chief Harun's accounts frozen",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/business/economy/news/former-dmp-db-chief-haruns-accounts-frozen-3733146",
    publicationDate: "2024-10-21",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the Central Intelligence Cell of the National Board of Revenue sent account-freeze letters to banks and financial institutions concerning Harun Or Rashid and family members.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Account-freeze reporting",
      "NBR Central Intelligence Cell procedural context",
      "Further tax and asset review context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.harunOrRashid]
  }),
  source({
    id: publicSourceIds.harunDailyStarTaxSeizureOrder,
    isDemo: false,
    slug: "source-harun-daily-star-tax-seizure-order-2025",
    type: "NEWS_REPORT",
    title: "Court orders ACC to seize income tax documents of former DB chief Harun",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/court-orders-acc-seize-income-tax-documents-former-db-chief-harun-3794676",
    publicationDate: "2025-01-08",
    accessedAt: "2026-08-08",
    excerpt:
      "Court report that a Dhaka court ordered the ACC to seize income-tax documents in connection with corruption cases and applications alleging illegal wealth.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Court order to seize income-tax documents",
      "ACC applications alleging illegal wealth by abuse of official power",
      "Report states ACC filed graft cases on December 17, 2024"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.harunOrRashid]
  }),
  source({
    id: publicSourceIds.harunDailyStarSuspension,
    isDemo: false,
    slug: "source-harun-daily-star-suspension-2025",
    type: "NEWS_REPORT",
    title: "Ex-DB chief Harun, 17 cops suspended over 'desertion'",
    publisher: "The Daily Star",
    sourceUrl:
      "https://online-d11.thedailystar.net/news/bangladesh/news/ex-db-chief-harun-17-cops-suspended-over-desertion-3965196",
    publicationDate: "2025-08-18",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the government suspended Harun Or Rashid and other police officers on desertion charges under the Government Servants discipline rules.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Administrative suspension reporting",
      "Desertion charge under government service discipline rules",
      "Former DMP Detective Branch leadership context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.harunOrRashid]
  })
];
