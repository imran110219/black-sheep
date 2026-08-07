import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const tariqueAhmedSiddiqueSources = [
  source({
    id: publicSourceIds.tariqueSiddiqueProthomAloCase,
    isDemo: false,
    slug: "source-tarique-siddique-prothom-alo-case-2024",
    type: "NEWS_REPORT",
    title: "Tarique Siddique sued for plotting abduction, murder",
    publisher: "Prothom Alo English / Bangladesh Sangbad Sangstha",
    sourceUrl: "https://en.prothomalo.com/bangladesh/nln3e3oxcd",
    publicationDate: "2024-09-19",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report that a court complaint was filed against 10 people including Tarique Ahmed Siddique, and that New Market police were directed to record it as an FIR.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former security affairs adviser role",
      "Filed case reporting",
      "Court direction to record complaint as FIR",
      "Alleged abduction, enforced-disappearance plotting, and killing context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.tariqueAhmedSiddique]
  })
];
