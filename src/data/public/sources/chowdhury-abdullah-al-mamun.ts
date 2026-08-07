import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const chowdhuryAbdullahAlMamunSources = [
  source({
    id: publicSourceIds.mamunBss,
    isDemo: false,
    slug: "source-mamun-bss-jail-2024",
    type: "NEWS_REPORT",
    title: "Ex-IGP Mamun lands in jail",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/227616",
    publicationDate: "2024-12-01",
    accessedAt: "2026-08-07",
    excerpt:
      "Public court report on former IGP Chowdhury Abdullah Al-Mamun being sent to jail after remand in an uprising-related murder case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former IGP role",
      "Arrest and remand reporting",
      "Uprising-related murder case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.chowdhuryAbdullahAlMamun]
  })
];
