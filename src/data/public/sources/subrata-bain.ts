import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const subrataBainSources = [
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
