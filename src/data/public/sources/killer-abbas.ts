import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const killerAbbasSources = [
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
  })
];
