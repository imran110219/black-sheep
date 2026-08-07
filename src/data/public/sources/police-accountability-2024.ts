import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const policeAccountability2024Sources = [
  source({
    id: publicSourceIds.policeDailyStarAccProbeLooms,
    isDemo: false,
    slug: "source-daily-star-high-ranking-cops-acc-probe-2024",
    type: "NEWS_REPORT",
    title: "High-ranking cops concerned as ACC probe looms",
    publisher: "The Daily Star",
    sourceUrl:
      "https://online.thedailystar.net/news/bangladesh/news/high-ranking-cops-concerned-acc-probe-looms-3682396",
    publicationDate: "2024-08-21",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on ACC-source discussion of investigations into former and current police officials, naming several senior police figures in post-transition accountability context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Post-transition ACC investigation discussion",
      "Former police officials named in source-attributed reporting",
      "Reporting context only; not a final finding"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.benazirAhmed,
      publicPersonIds.habiburRahmanDmp,
      publicPersonIds.harunOrRashid,
      publicPersonIds.monirulIslam,
      publicPersonIds.biplobKumarSarker,
      publicPersonIds.barristerMdHarunArRashid
    ]
  })
];
