import type { SourceRecord } from "@/domain/source";
import { publicPersonIds, publicSourceIds } from "../ids";

function source(record: SourceRecord): SourceRecord {
  return record;
}

export const formerRegimeFigureSources = [
  source({
    id: publicSourceIds.anisulHuqTbs,
    isDemo: false,
    slug: "source-anisul-huq-tbs-2024",
    type: "INVESTIGATIVE_REPORT",
    title: "Anisul Huq: How the minister of (in)justice ruled the law",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/features/panorama/anisul-huq-how-minister-injustice-ruled-law-918341",
    publicationDate: "2024-08-17",
    accessedAt: "2026-08-07",
    excerpt:
      "Public analysis of Anisul Huq's law ministry tenure, judicial-administration criticism, 16th Amendment, and digital-law context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former law minister role",
      "Criticism of judicial-administration influence",
      "16th Amendment and digital-law context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.anisulHuq]
  }),
  source({
    id: publicSourceIds.anisulHuqBss,
    isDemo: false,
    slug: "source-anisul-huq-bss-arrest-2024",
    type: "NEWS_REPORT",
    title: "Anisul Huq, Salman F Rahman arrested in capital",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news-flash/203781",
    publicationDate: "2024-08-13",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on the arrest of Anisul Huq and Salman F Rahman in a New Market police case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Arrest reporting",
      "Former law minister role",
      "New Market police case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.anisulHuq, publicPersonIds.salmanFRahman]
  }),
  source({
    id: publicSourceIds.mamunBss,
    isDemo: false,
    slug: "source-mamun-bss-jail-2024",
    type: "NEWS_REPORT",
    title: "Ex-IGP Mamun lands in jail",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/227616",
    publicationDate: "2024-12-01",
    accessedAt: "2026-08-07",
    excerpt:
      "Public court report on former IGP Chowdhury Abdullah Al-Mamun being sent to jail after remand in an uprising-related murder case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former IGP role",
      "Arrest and remand reporting",
      "Uprising-related murder case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.chowdhuryAbdullahAlMamun]
  }),
  source({
    id: publicSourceIds.hasanMahmudTbsPressFreedom,
    isDemo: false,
    slug: "source-hasan-mahmud-tbs-press-freedom-2024",
    type: "INVESTIGATIVE_REPORT",
    title: "How Hasina became a predator of press freedom",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/features/panorama/how-hasina-became-predator-press-freedom-921516",
    publicationDate: "2024-08-21",
    accessedAt: "2026-08-07",
    excerpt:
      "Public analysis of press-freedom erosion, cyber-law use, and institutional control during the Hasina government.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Press-freedom criticism context",
      "Digital-law criticism",
      "Media environment under the former government"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.hasanMahmud, publicPersonIds.sheikhHasina]
  }),
  source({
    id: publicSourceIds.hasanMahmudTbsJournalistCase,
    isDemo: false,
    slug: "source-hasan-mahmud-tbs-journalist-case-2023",
    type: "NEWS_REPORT",
    title: "Journalism not a crime, but journalists are not above law: Hasan Mahmud",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/journalism-not-crime-journalists-are-not-above-law-hasan-mahmud-608366",
    publicationDate: "2023-03-31",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on Hasan Mahmud's comments after a Prothom Alo journalist's arrest and his defense of digital security law context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former information minister role",
      "Public comments on journalist arrest",
      "Digital Security Act defense context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.hasanMahmud]
  }),
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
  }),
  source({
    id: publicSourceIds.taposhDsccBiography,
    isDemo: false,
    slug: "source-taposh-dscc-biography",
    type: "GOVERNMENT_DOCUMENT",
    title: "Biography of Hon'ble Mayor Sheikh Fazle Noor Taposh",
    publisher: "Dhaka South City Corporation",
    sourceUrl: "https://dscc.gov.bd/site/page/284a426a-cdb8-43be-b9ba-221294df2343/%5Bfront%5D",
    publicationDate: "2022-08-22",
    accessedAt: "2026-08-07",
    excerpt:
      "Official biography recording mayoral role, parliamentary roles, Awami League nomination, and minister-status notice.",
    verificationStatus: "REVIEWED",
    isPrimarySource: true,
    supportedClaims: [
      "Former DSCC mayor role",
      "Former MP roles",
      "Awami League mayoral nomination"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhFazleNoorTaposh]
  }),
  source({
    id: publicSourceIds.taposhProthomAloBank,
    isDemo: false,
    slug: "source-taposh-prothom-alo-modhumoti-bank",
    type: "INVESTIGATIVE_REPORT",
    title: "Dhaka south city's money in Taposh's bank",
    publisher: "Prothom Alo English",
    sourceUrl: "https://en.prothomalo.com/bangladesh/city/h7cdfmc5gj",
    publicationDate: "2024-08-25",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report alleging DSCC funds and transactions were shifted toward Modhumoti Bank, with contract and patronage concerns.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Modhumoti Bank relationship",
      "DSCC fund allegations",
      "Contract and party-linked patronage allegations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhFazleNoorTaposh]
  }),
  source({
    id: publicSourceIds.salmanTbsBankLoans,
    isDemo: false,
    slug: "source-salman-tbs-bank-loans-2024",
    type: "INVESTIGATIVE_REPORT",
    title: "How Salman F Rahman makes billions with free bank money",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/how-salman-f-rahman-makes-billions-free-bank-money-917011",
    publicationDate: "2024-08-14",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on loans of companies associated with Salman F Rahman across seven banks and alleged abuse of state-owned banks.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Beximco-linked banking exposure",
      "Bank loan reporting",
      "Political influence allegations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.salmanFRahman]
  }),
  source({
    id: publicSourceIds.salmanBssAccCase,
    isDemo: false,
    slug: "source-salman-bss-acc-case-2026",
    type: "NEWS_REPORT",
    title: "ACC files case against Salman F Rahman, 21 others",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/others/349254",
    publicationDate: "2026-01-08",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on ACC case alleging stock-market manipulation, bank-loan embezzlement, and money laundering.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case filing",
      "Stock-market manipulation allegations",
      "Bank-loan embezzlement and money-laundering allegations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.salmanFRahman]
  }),
  source({
    id: publicSourceIds.salmanBssArrest,
    isDemo: false,
    slug: "source-salman-bss-arrest-2024",
    type: "NEWS_REPORT",
    title: "Anisul Huq, Salman F Rahman arrested in capital",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news-flash/203781",
    publicationDate: "2024-08-13",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on arrest of Salman F Rahman and Anisul Huq in a New Market police case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Arrest reporting", "Former adviser role", "New Market police case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.salmanFRahman, publicPersonIds.anisulHuq]
  }),
  source({
    id: publicSourceIds.tariqueSiddiqueProthomAloCase,
    isDemo: false,
    slug: "source-tarique-siddique-prothom-alo-case-2024",
    type: "NEWS_REPORT",
    title: "Tarique Siddique sued for plotting abduction, murder",
    publisher: "Prothom Alo English / Bangladesh Sangbad Sangstha",
    sourceUrl: "https://en.prothomalo.com/bangladesh/nln3e3oxcd",
    publicationDate: "2024-09-19",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report that a court complaint was filed against 10 people including Tarique Ahmed Siddique, and that New Market police were directed to record it as an FIR.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former security affairs adviser role",
      "Filed case reporting",
      "Court direction to record complaint as FIR",
      "Alleged abduction, enforced-disappearance plotting, and killing context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.tariqueAhmedSiddique]
  })
];
