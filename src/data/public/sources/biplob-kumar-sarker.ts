import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const biplobKumarSarkerSources = [
  source({
    id: publicSourceIds.biplobProthomAloSuspension,
    isDemo: false,
    slug: "source-biplob-prothom-alo-suspension-2025",
    type: "NEWS_REPORT",
    title: "Biplob Kumar suspended for unauthorised absence",
    publisher: "Prothom Alo",
    sourceUrl: "https://en.prothomalo.com/bangladesh/1ac4gz1fdu",
    publicationDate: "2025-08-18",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Biplob Kumar Sarker, former DMP joint commissioner, was temporarily suspended for unauthorised absence from duty.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former DMP joint commissioner role",
      "Unauthorised-absence suspension reporting",
      "Administrative status, not criminal finding"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.biplobKumarSarker]
  })
];
