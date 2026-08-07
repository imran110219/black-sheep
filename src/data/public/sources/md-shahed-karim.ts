import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mdShahedKarimSources = [
  source({
    id: publicSourceIds.shahedProthomAloArrestAgain,
    isDemo: false,
    slug: "source-shahed-prothom-alo-arrest-again-2025",
    type: "NEWS_REPORT",
    title: "Regent's Shahed arrested again",
    publisher: "Prothom Alo",
    sourceUrl: "https://en.prothomalo.com/bangladesh/crime-and-law/22hdvlghqg",
    publicationDate: "2026-07-20",
    accessedAt: "2026-08-08",
    excerpt:
      "Report identifying Md Shahed, also known as Shahed Karim, as Regent Hospital's figure and describing a later arrest on an arrest warrant, previous Covid-test fraud allegations, 35-case history, bail history, arms-case appeal posture, and ACC asset-case sentence reporting.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Regent Hospital role and aliases",
      "Arrest-warrant reporting after bail release",
      "Covid sample-testing fraud allegation and case history",
      "Arms-case conviction, High Court acquittal, and Chamber Court stay posture",
      "ACC asset-case sentence and money-laundering case reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdShahedKarim]
  }),
  source({
    id: publicSourceIds.shahedProthomAloArmsIndictment,
    isDemo: false,
    slug: "source-shahed-prothom-alo-arms-indictment-2020",
    type: "NEWS_REPORT",
    title: "Regent Group chairman Shahed indicted in arms case",
    publisher: "Prothom Alo",
    sourceUrl:
      "https://en.prothomalo.com/bangladesh/crime-and-law/regent-group-chairman-shahed-indicted-in-arms-case",
    publicationDate: "2020-08-27",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that a Dhaka court framed charges against Regent Group chairman Mohammad Shahed Karim in an arms case after RAB arrest and Regent Hospital Covid-certificate fraud case reporting.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Arms-case charge-framing report",
      "Regent Group chairman identification",
      "RAB arrest and Regent Hospital Covid-certificate case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdShahedKarim]
  }),
  source({
    id: publicSourceIds.shahedDailyStarArmsAcquittal,
    isDemo: false,
    slug: "source-shahed-daily-star-arms-acquittal-2024",
    type: "NEWS_REPORT",
    title: "HC acquits Shahed in arms case",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/hc-acquits-shahed-arms-case-3517251",
    publicationDate: "2024-01-11",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the High Court acquitted Regent Group chairman Mohammad Shahed in the arms case in which he had earlier been sentenced to life imprisonment.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "High Court acquittal reporting in arms case",
      "Earlier life-sentence context",
      "Release status remained affected by other cases according to the report"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdShahedKarim]
  }),
  source({
    id: publicSourceIds.shahedProthomAloAccEmbezzlement,
    isDemo: false,
    slug: "source-shahed-prothom-alo-acc-embezzlement-2020",
    type: "NEWS_REPORT",
    title: "ACC sues Shahed, 3 others over embezzlement of Tk 15m",
    publisher: "Prothom Alo",
    sourceUrl:
      "https://en.prothomalo.com/bangladesh/acc-sues-shahed-3-others-over-embezzlement-of-tk-15m",
    publicationDate: "2020-07-22",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the Anti-Corruption Commission filed a case against Mohammad Shahed and others over alleged embezzlement from NRB Bank.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case-filing report",
      "Embezzlement allegation attributed to ACC case statement",
      "Regent Hospital chairman identification"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdShahedKarim]
  }),
  source({
    id: publicSourceIds.shahedProthomAloDghsMou,
    isDemo: false,
    slug: "source-shahed-prothom-alo-dghs-mou-2020",
    type: "NEWS_REPORT",
    title: "DGHS claims health ministry high-ups directed it to sign Regent Hospital MoU",
    publisher: "Prothom Alo",
    sourceUrl:
      "https://en.prothomalo.com/bangladesh/crime-and-law/dghs-claims-health-ministry-high-ups-directed-it-to-sign-regent-hospital-mou",
    publicationDate: "2020-07-11",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on DGHS explanation about the Regent Hospital MoU and claims that DGHS later found gross irregularities including fake Covid-certificate sales.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Regent Hospital MoU controversy",
      "DGHS statement and institutional context",
      "Reported fake Covid-certificate irregularities"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdShahedKarim]
  })
];
