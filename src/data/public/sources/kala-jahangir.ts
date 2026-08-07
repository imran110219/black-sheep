import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const kalaJahangirSources = [
  source({
    id: publicSourceIds.kalaJahangirDailyStar,
    isDemo: false,
    slug: "source-kala-jahangir-daily-star-2006",
    type: "NEWS_REPORT",
    title: "Newton Murder: Kala Jahangir, Killer Abbas, 8 others to die",
    publisher: "The Daily Star",
    sourceUrl: "https://archive.thedailystar.net/2006/05/25/d60525012215.htm",
    publicationDate: "2006-05-25",
    accessedAt: "2026-08-07",
    excerpt: "Court report on death sentences in the Saidur Rahman Newton murder case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Newton murder verdict",
      "Death sentence reporting",
      "Top-listed criminal description"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.kalaJahangir, publicPersonIds.killerAbbas]
  }),
  source({
    id: publicSourceIds.kalaJahangirBdnews24,
    isDemo: false,
    slug: "source-kala-jahangir-bdnews24-2006",
    type: "NEWS_REPORT",
    title: "10 get death sentence, six life term for killing ward commissioner Newton",
    publisher: "bdnews24.com",
    sourceUrl:
      "https://bdnews24.com/bangladesh/10-get-death-sentence-six-life-term-for-killing-ward-commissioner-newton",
    publicationDate: "2006-05-23",
    accessedAt: "2026-08-07",
    excerpt: "Court report naming death-sentence convicts in the Newton murder case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Newton murder case verdict",
      "Death sentence reporting",
      "Absconding status in report"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.kalaJahangir, publicPersonIds.killerAbbas]
  })
];
