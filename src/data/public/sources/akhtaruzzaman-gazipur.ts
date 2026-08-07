import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const akhtaruzzamanGazipurSources = [
  source({
    id: publicSourceIds.akhtaruzzamanDailyStarArrest,
    isDemo: false,
    slug: "source-akhtaruzzaman-daily-star-arrest-2026",
    type: "NEWS_REPORT",
    title: "Ex-Gazipur MP Akhtaruzzaman arrested",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/crime-justice/news/ex-gazipur-mp-akhtaruzzaman-arrested-4241166",
    publicationDate: "2026-08-06",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report that DMP Detective Branch arrested former Gazipur-5 MP Akhtaruzzaman and quoted police allegations about banned-organisation-linked activity and a July uprising murder case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former Gazipur-5 MP role",
      "DB arrest reporting",
      "Police-attributed banned-organisation activity allegation",
      "July uprising murder-case accusation context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.akhtaruzzamanGazipur]
  }),
  source({
    id: publicSourceIds.akhtaruzzamanParliamentProfile,
    isDemo: false,
    slug: "source-akhtaruzzaman-parliament-profile",
    type: "PARLIAMENTARY_RECORD",
    title: "Member of parliament listing",
    publisher: "Bangladesh Parliament",
    sourceUrl: "https://www.parliament.gov.bd/sitting-members",
    publicationDate: "2026-08-07",
    accessedAt: "2026-08-07",
    excerpt:
      "Accessed public parliamentary listing identifying Akhtaruzzaman as representative for Gazipur-5.",
    verificationStatus: "REVIEWED",
    isPrimarySource: true,
    supportedClaims: ["Member of Parliament role", "Gazipur-5 constituency"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.akhtaruzzamanGazipur]
  }),
  source({
    id: publicSourceIds.akhtaruzzamanAjkerPatrikaElection,
    isDemo: false,
    slug: "source-akhtaruzzaman-ajker-patrika-election-2024",
    type: "NEWS_REPORT",
    title: "শীতলক্ষ্যা বাঁচানো অগ্রাধিকার: আখতারুজ্জামান",
    publisher: "Ajker Patrika",
    sourceUrl: "https://www.ajkerpatrika.com/epaper/ajprz1gmfj1ck/",
    publicationDate: "2024-02-06",
    accessedAt: "2026-08-07",
    excerpt:
      "Public Bangla report describing Akhtaruzzaman as elected MP from Gazipur-5 in the 12th parliamentary election and noting earlier DUCSU and freedom-fighter context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Gazipur-5 election context",
      "Independent candidacy reporting",
      "Former DUCSU VP and GS context",
      "Freedom-fighter public-role context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.akhtaruzzamanGazipur]
  })
];
