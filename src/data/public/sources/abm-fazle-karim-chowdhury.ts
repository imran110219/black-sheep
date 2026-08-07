import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const abmFazleKarimChowdhurySources = [
  source({
    id: publicSourceIds.fazleKarimDailyStarIctArrest,
    isDemo: false,
    slug: "source-fazle-karim-daily-star-ict-arrest-2025",
    type: "NEWS_REPORT",
    title: "Ex-AL MP Fazle Karim shown arrested",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/ex-al-mp-fazle-karim-shown-arrested-3825331",
    publicationDate: "2025-02-16",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that ICT showed former Chattogram-6 MP ABM Fazle Karim Chowdhury arrested over allegations linked to July-uprising killings and injuries in Chattogram; he denied the allegations.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT shown-arrested reporting",
      "Chattogram July-uprising allegation context",
      "Denial before tribunal"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.abmFazleKarimChowdhury]
  })
];
