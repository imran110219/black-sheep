import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const salmanFRahmanSources = [
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
  })
];
