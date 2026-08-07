import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const habiburRahmanDmpSources = [
  source({
    id: publicSourceIds.habiburProthomAloIctReport,
    isDemo: false,
    slug: "source-habibur-prothom-alo-ict-chankharpul-report-2026",
    type: "NEWS_REPORT",
    title:
      "First investigation report submitted to Tribunal against ex-DMP commissioner Habibur, 7 others",
    publisher: "Prothom Alo",
    sourceUrl: "https://en.prothomalo.com/bangladesh/8oapcd3htm",
    publicationDate: "2026-06-23",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that an ICT investigation report named former DMP commissioner Habibur Rahman among accused persons in the Chankharpul July-uprising deaths context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former DMP commissioner role",
      "ICT investigation-report context",
      "Allegations are investigation/prosecution-stage reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.habiburRahmanDmp]
  })
];
