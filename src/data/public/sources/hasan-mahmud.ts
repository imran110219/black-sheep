import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const hasanMahmudSources = [
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
  })
];
