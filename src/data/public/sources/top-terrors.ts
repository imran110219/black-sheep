import type { SourceRecord } from "@/domain/source";
import { publicPersonIds, publicSourceIds } from "../ids";

function source(record: SourceRecord): SourceRecord {
  return record;
}

export const topTerrorSources = [
  source({
    id: publicSourceIds.swedenAslamDailyStar,
    isDemo: false,
    slug: "source-sweden-aslam-daily-star-2024",
    type: "NEWS_REPORT",
    title: "Top criminal Sweden Aslam released after 27yrs in jail",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/top-criminal-sweden-aslam-released-after-27yrs-jail-3694666",
    publicationDate: "2024-09-04",
    accessedAt: "2026-08-07",
    excerpt: "Public report on bail release, case history, and police-attributed case counts.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Bail release in 2024", "Reported case history", "Top criminal label"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.swedenAslam]
  }),
  source({
    id: publicSourceIds.swedenAslamTbs,
    isDemo: false,
    slug: "source-sweden-aslam-tbs-2024",
    type: "NEWS_REPORT",
    title: "Top terror Sweden Aslam released from Kashimpur jail",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/top-terrorist-sweden-aslam-released-kashimpur-jail-933191",
    publicationDate: "2024-09-04",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report identifying him among the 23 top criminals and describing pending trial context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Named among 23 top criminals",
      "Kashimpur jail release",
      "Reported case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.swedenAslam]
  }),
  source({
    id: publicSourceIds.subrataBainDailyStar,
    isDemo: false,
    slug: "source-subrata-bain-daily-star-2025",
    type: "NEWS_REPORT",
    title: "Top criminals Subrata Bain, Molla Masud held",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/top-criminals-subrata-bain-molla-masud-held-3904636",
    publicationDate: "2025-05-27",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on arrests, Seven Star group, top-23 list, and law-enforcement statements.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["2025 arrest", "Seven Star group association", "Top-23 list reference"],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.subrataBain,
      publicPersonIds.mollaMasud,
      publicPersonIds.tokaiSagar
    ]
  }),
  source({
    id: publicSourceIds.subrataBainDhakaTribune,
    isDemo: false,
    slug: "source-subrata-bain-dhaka-tribune-2025",
    type: "NEWS_REPORT",
    title: "Who is the notorious top criminal Subrata Bain?",
    publisher: "Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/crime/382523/who-is-the-notorious-%E2%80%98top-criminal%E2%80%99-subrata-bain",
    publicationDate: "2025-05-29",
    accessedAt: "2026-08-07",
    excerpt:
      "Public profile report on Subrata Bain, the Seven Star group, and Interpol-listed history.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Seven Star group history",
      "Reported criminal network",
      "Interpol notice history"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.subrataBain, publicPersonIds.tokaiSagar]
  }),
  source({
    id: publicSourceIds.jisanAhmedUnb,
    isDemo: false,
    slug: "source-jisan-ahmed-unb-2019",
    type: "NEWS_REPORT",
    title: "Top terror Jisan being brought back from Dubai: Police",
    publisher: "United News of Bangladesh",
    sourceUrl:
      "https://unb.com.bd/category/bangladesh/top-terror-jisan-being-brought-back-from-dubai-police/29560",
    publicationDate: "2019-10-04",
    accessedAt: "2026-08-07",
    excerpt:
      "Police-attributed report on Dubai arrest, 2001 top criminal list, Interpol alert, and alleged alias.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Dubai arrest",
      "2001 top criminal list",
      "Ali Akbar Chowdhury alias reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.jisanAhmed]
  }),
  source({
    id: publicSourceIds.jisanAhmedTbs,
    isDemo: false,
    slug: "source-jisan-ahmed-tbs-2019",
    type: "NEWS_REPORT",
    title: "Zeesan planned to kill 4 Jubo League leaders",
    publisher: "The Business Standard",
    sourceUrl: "https://www.tbsnews.net/bangladesh/zeesan-planned-kill-4-jubo-league-leaders",
    publicationDate: "2019-10-06",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on Zeesan/Jisan, alleged Dubai-based influence, weapons, and tender manipulation.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Zeesan/Jisan alias reporting",
      "Reported Dubai-based operations",
      "Tender manipulation reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.jisanAhmed]
  }),
  source({
    id: publicSourceIds.joyDailyStar,
    isDemo: false,
    slug: "source-tanvir-joy-daily-star-2019",
    type: "INVESTIGATIVE_REPORT",
    title: "Is this man top terror Joy?",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/frontpage/news/tycoon-rana-top-terror-joy-1842277",
    publicationDate: "2019-12-18",
    accessedAt: "2026-08-07",
    excerpt:
      "Joint investigation by The Daily Star and Global News on Tanvir Islam Joy identity questions.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Seven Star group reference",
      "Bangladesh Police most-wanted record reference",
      "Identity dispute context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.khandakerTanvirulIslamJoy]
  }),
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
  }),
  source({
    id: publicSourceIds.killerAbbasDailyStar,
    isDemo: false,
    slug: "source-killer-abbas-daily-star-2024",
    type: "NEWS_REPORT",
    title: "Killer Abbas freed",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/news/bangladesh/news/killer-abbas-freed-3676631",
    publicationDate: "2024-08-13",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on Abbas Ali's release from Kashimpur Central Jail-2 and 2003 arrest history.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["2024 release", "2003 arrest reporting", "Top terror label"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.killerAbbas]
  }),
  source({
    id: publicSourceIds.killerAbbasProthomAlo,
    isDemo: false,
    slug: "source-killer-abbas-prothom-alo-2024",
    type: "NEWS_REPORT",
    title: "Top terrors control crime, extortion from jail",
    publisher: "Prothom Alo English",
    sourceUrl: "https://en.prothomalo.com/bangladesh/crime-and-law/npnsihtymg",
    publicationDate: "2024-05-20",
    accessedAt: "2026-08-07",
    excerpt: "Public report on incarcerated top terrors and alleged Mirpur-area influence.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Mirpur-area influence reporting",
      "Incarceration context",
      "Extortion allegations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.killerAbbas]
  }),
  source({
    id: publicSourceIds.ershadShikdarDailyStar,
    isDemo: false,
    slug: "source-ershad-shikdar-daily-star-2004",
    type: "NEWS_REPORT",
    title: "Ershad Shikdar to be hanged on May 10",
    publisher: "The Daily Star",
    sourceUrl: "https://archive.thedailystar.net/2004/04/21/d40421011818.htm",
    publicationDate: "2004-04-21",
    accessedAt: "2026-08-07",
    excerpt: "Public report on death sentence, rejected mercy petition, and murder-case record.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Death sentence", "Rejected mercy petition", "Murder case record"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.ershadShikdar]
  }),
  source({
    id: publicSourceIds.ershadShikdarVoa,
    isDemo: false,
    slug: "source-ershad-shikdar-voa-2004",
    type: "NEWS_REPORT",
    title: "Ershad Shikder Executed in Khulna",
    publisher: "VOA Bangla",
    sourceUrl: "https://www.voabangla.com/a/a-16-a-2004-05-11-1-ershad-94348939/1385241.html",
    publicationDate: "2004-05-11",
    accessedAt: "2026-08-07",
    excerpt: "Public report on execution in Khulna District Jail after Supreme Court confirmation.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Execution in 2004",
      "Supreme Court upheld death sentence",
      "Conviction reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.ershadShikdar]
  }),
  source({
    id: publicSourceIds.mollaMasudDailyStar2015,
    isDemo: false,
    slug: "source-molla-masud-daily-star-2015",
    type: "NEWS_REPORT",
    title: "Top criminal Masud caught in India",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/backpage/top-criminal-masud-caught-kolkata-71829",
    publicationDate: "2015-03-15",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on Indian arrest, Interpol red notice, cases, and Seven Star association.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["2015 arrest in India", "Interpol red notice", "Seven Star association"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mollaMasud]
  }),
  source({
    id: publicSourceIds.mollaMasudDailyStar2025,
    isDemo: false,
    slug: "source-molla-masud-daily-star-2025",
    type: "NEWS_REPORT",
    title: "Top criminals Subrata Bain, Molla Masud held",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/top-criminals-subrata-bain-molla-masud-held-3904636",
    publicationDate: "2025-05-27",
    accessedAt: "2026-08-07",
    excerpt: "Public report on 2025 arrest with Subrata Bain and Seven Star group context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["2025 arrest", "Seven Star group context", "Top-23 list reference"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mollaMasud, publicPersonIds.subrataBain]
  }),
  source({
    id: publicSourceIds.picchiHannanDailyStar,
    isDemo: false,
    slug: "source-picchi-hannan-daily-star-2004",
    type: "NEWS_REPORT",
    title: "Pichchi Hannan killed in crossfire",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/2004/08/07/d4080701011.htm",
    publicationDate: "2004-08-07",
    accessedAt: "2026-08-07",
    excerpt: "Public report on death during claimed RAB crossfire, remand, and pending cases.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Death during claimed crossfire", "Top-23 list", "Pending case reporting"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.picchiHannan]
  }),
  source({
    id: publicSourceIds.tokaiSagarDailyStar,
    isDemo: false,
    slug: "source-tokai-sagar-daily-star-2025",
    type: "NEWS_REPORT",
    title: "Top criminals Subrata Bain, Molla Masud held",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/top-criminals-subrata-bain-molla-masud-held-3904636",
    publicationDate: "2025-05-27",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report identifying Amin Rasul Sagor alias Tokai Sagor as a co-leader of the Seven Star group.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Tokai Sagor alias",
      "Seven Star co-leader reporting",
      "Underworld network context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.tokaiSagar]
  }),
  source({
    id: publicSourceIds.interpolTopCriminalsProthomAlo,
    isDemo: false,
    slug: "source-interpol-top-criminals-prothom-alo",
    type: "NEWS_REPORT",
    title: "Interpol's red notice against 82, so far 17 caught",
    publisher: "Prothom Alo English",
    sourceUrl:
      "https://en.prothomalo.com/bangladesh/crime-and-law/interpols-red-notice-against-82-so-far-17-caught",
    publicationDate: "2022-05-30",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report listing red notices against several top criminals including Subrata Bain, Joy, Jishan, Kala Jahangir and others.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Interpol red notice reporting", "Top criminal names", "Extradition context"],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.subrataBain,
      publicPersonIds.jisanAhmed,
      publicPersonIds.khandakerTanvirulIslamJoy,
      publicPersonIds.kalaJahangir
    ]
  })
];
