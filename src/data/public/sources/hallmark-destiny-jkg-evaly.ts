import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const hallmarkSources = [
  source({
    id: publicSourceIds.hallmarkDailyStarLifeSentence,
    isDemo: false,
    slug: "source-hallmark-daily-star-life-sentence-2024",
    type: "NEWS_REPORT",
    title: "Hallmark scam: Tanvir, his wife, others jailed for life",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/hallmark-scam-tanvir-his-wife-others-jailed-life-3613816",
    publicationDate: "2024-05-28",
    accessedAt: "2026-08-08",
    excerpt:
      "Court report that Hall-Mark Group managing director Tanvir Mahmud, chairperson Jesmin Islam, and others were sentenced in a Sonali Bank loan-scam case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Hall-Mark/Sonali Bank conviction reporting", "Corporate roles"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.tanvirMahmudHallmark, publicPersonIds.jesminIslam]
  }),
  source({
    id: publicSourceIds.hallmarkDhakaTribuneLifeSentence,
    isDemo: false,
    slug: "source-hallmark-dhaka-tribune-life-sentence-2024",
    type: "NEWS_REPORT",
    title: "Hallmark scam: Tanvir, his wife, others get life",
    publisher: "Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/court/347325/hallmark-scam-tanvir-his-wife-others-get-life",
    publicationDate: "2024-05-28",
    accessedAt: "2026-08-08",
    excerpt: "Court report on sentencing in a Hall-Mark loan-scam case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Conviction reporting", "Sonali Bank loan-scam case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.tanvirMahmudHallmark, publicPersonIds.jesminIslam]
  })
];

export const destinySources = [
  source({
    id: publicSourceIds.destinyDailyStarConviction,
    isDemo: false,
    slug: "source-destiny-daily-star-conviction-2022",
    type: "NEWS_REPORT",
    title: "Destiny MD Rafiqul, 11 others get 12 years jail in money laundering case",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/destiny-md-rafiqul-11-others-get-12-years-jail-money-laundering-case-3012881",
    publicationDate: "2022-05-12",
    accessedAt: "2026-08-08",
    excerpt:
      "Court report that Destiny Group MD Rafiqul Amin and others were sentenced in a money-laundering case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Money-laundering conviction reporting", "Destiny Group role"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.rafiqulAmin]
  }),
  source({
    id: publicSourceIds.destinyDhakaTribuneConviction,
    isDemo: false,
    slug: "source-destiny-dhaka-tribune-conviction-2022",
    type: "NEWS_REPORT",
    title: "Destiny MD Rafiqul Amin, 11 others jailed for 12 years",
    publisher: "Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/court/268997/destiny-md-rafiqul-amin-11-others-jailed-for-12",
    publicationDate: "2022-05-12",
    accessedAt: "2026-08-08",
    excerpt: "Court report on the Destiny money-laundering sentence.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Conviction reporting", "Investor-fund case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.rafiqulAmin]
  })
];

export const jkgSources = [
  source({
    id: publicSourceIds.jkgDailyStarConviction,
    isDemo: false,
    slug: "source-jkg-daily-star-conviction-2022",
    type: "NEWS_REPORT",
    title: "Fake Covid test reports: Sabrina, Arif, 6 others jailed for 11 years",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/fake-covid-test-reports-sabrina-arif-6-others-jailed-11-years-3078231",
    publicationDate: "2022-07-19",
    accessedAt: "2026-08-08",
    excerpt:
      "Court report that Sabrina Arif Chowdhury, Ariful Haque Chowdhury, and others were sentenced in the JKG fake Covid test report case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Fake Covid test report conviction", "JKG Health Care context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sabrinaArifChowdhury, publicPersonIds.arifulHaqueChowdhury]
  }),
  source({
    id: publicSourceIds.jkgProthomAloConviction,
    isDemo: false,
    slug: "source-jkg-prothom-alo-conviction-2022",
    type: "NEWS_REPORT",
    title: "Court sentences Sabrina, Arif to 11 years in jail",
    publisher: "Prothom Alo",
    sourceUrl:
      "https://en.prothomalo.com/bangladesh/crime-and-law/court-sentences-sabrina-arif-to-11-years-in-jail",
    publicationDate: "2022-07-19",
    accessedAt: "2026-08-08",
    excerpt: "Court report on sentencing in the JKG Health Care fake Covid certificate case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Conviction reporting", "Pandemic testing case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sabrinaArifChowdhury, publicPersonIds.arifulHaqueChowdhury]
  })
];

export const abulKalamAzadDghsSources = [
  source({
    id: publicSourceIds.abulKalamAzadProthomAloRegentMou,
    isDemo: false,
    slug: "source-abul-kalam-azad-prothom-alo-regent-mou-2020",
    type: "NEWS_REPORT",
    title: "DGHS claims health ministry high-ups directed it to sign Regent Hospital MoU",
    publisher: "Prothom Alo",
    sourceUrl:
      "https://en.prothomalo.com/bangladesh/crime-and-law/dghs-claims-health-ministry-high-ups-directed-it-to-sign-regent-hospital-mou",
    publicationDate: "2020-07-12",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on DGHS explanation concerning the Regent Hospital MoU and fake Covid-certificate irregularity context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["DGHS administrative explanation", "Regent Hospital MoU controversy"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.abulKalamAzadDghs, publicPersonIds.mdShahedKarim]
  }),
  source({
    id: publicSourceIds.abulKalamAzadDailyStarChargeSheet,
    isDemo: false,
    slug: "source-abul-kalam-azad-daily-star-charge-sheet-2021",
    type: "NEWS_REPORT",
    title: "Regent scam: ACC submits charge sheet against Shahed, ex-DGHS DG Abul Kalam Azad",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/regent-scam-acc-submits-charge-sheet-against-shahed-ex-dghs-dg-abul-kalam-azad-2202046",
    publicationDate: "2021-09-30",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that ACC submitted a charge sheet naming Md Shahed Karim and former DGHS DG Abul Kalam Azad.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["ACC charge-sheet reporting", "Regent Hospital case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.abulKalamAzadDghs, publicPersonIds.mdShahedKarim]
  })
];

export const gkShamimSources = [
  source({
    id: publicSourceIds.gkShamimDailyStarArmsConviction,
    isDemo: false,
    slug: "source-gk-shamim-daily-star-arms-conviction-2022",
    type: "NEWS_REPORT",
    title: "GK Shamim, 7 bodyguards get life in arms case",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/gk-shamim-7-bodyguards-get-life-arms-case-3141781",
    publicationDate: "2022-09-25",
    accessedAt: "2026-08-08",
    excerpt:
      "Court report that GK Shamim and seven bodyguards received life sentences in an arms case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Arms-case conviction reporting", "Contractor public identity"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.golamKibriaShamim]
  }),
  source({
    id: publicSourceIds.gkShamimTbsArmsConviction,
    isDemo: false,
    slug: "source-gk-shamim-tbs-arms-conviction-2022",
    type: "NEWS_REPORT",
    title: "GK Shamim, 7 bodyguards get life in arms case",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/court/gk-shamim-7-bodyguards-get-life-arms-case-511786",
    publicationDate: "2022-09-25",
    accessedAt: "2026-08-08",
    excerpt: "Court report on the arms-case sentence involving GK Shamim and bodyguards.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Conviction reporting", "Arms case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.golamKibriaShamim]
  })
];

export const evalySources = [
  source({
    id: publicSourceIds.evalyDailyStarArrest,
    isDemo: false,
    slug: "source-evaly-daily-star-arrest-2021",
    type: "NEWS_REPORT",
    title: "Evaly CEO Rassel, wife arrested",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/business/news/evaly-ceo-rassel-wife-arrested-2177851",
    publicationDate: "2021-09-16",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on arrest of Evaly CEO Mohammad Rassel and chairperson Shamima Nasrin in e-commerce fraud case context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Arrest reporting", "Evaly fraud case context", "Corporate roles"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammadRasselEvaly, publicPersonIds.shamimaNasrinEvaly]
  }),
  source({
    id: publicSourceIds.evalyDhakaTribuneBail,
    isDemo: false,
    slug: "source-evaly-dhaka-tribune-rassel-bail-2023",
    type: "NEWS_REPORT",
    title: "Evaly CEO Rassel gets bail in all cases",
    publisher: "Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/court/311607/evaly-ceo-rassel-gets-bail-in-all-cases",
    publicationDate: "2023-04-06",
    accessedAt: "2026-08-08",
    excerpt: "Report on Mohammad Rassel's bail status in Evaly-related cases.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Bail status reporting", "Evaly case context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mohammadRasselEvaly]
  }),
  source({
    id: publicSourceIds.evalyTbsShamimaBail,
    isDemo: false,
    slug: "source-evaly-tbs-shamima-bail-2022",
    type: "NEWS_REPORT",
    title: "Evaly chairman Shamima Nasrin gets bail",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/economy/corporates/evaly-chairman-shamima-nasrin-gets-bail-390598",
    publicationDate: "2022-04-06",
    accessedAt: "2026-08-08",
    excerpt: "Report on Shamima Nasrin's bail in an Evaly-related case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Bail status reporting", "Evaly chairperson role"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.shamimaNasrinEvaly]
  })
];
