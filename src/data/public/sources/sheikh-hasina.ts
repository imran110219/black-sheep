import type { SourceRecord } from "@/domain/source";
import { publicPersonIds, publicSourceIds } from "../ids";

export const sheikhHasinaWikipediaSource: SourceRecord = {
  id: publicSourceIds.sheikhHasinaWikipedia,
  isDemo: false,
  slug: "source-sheikh-hasina-wikipedia",
  type: "OTHER",
  title: "Sheikh Hasina public biography",
  publisher: "Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Sheikh_Hasina",
  jurisdiction: "Bangladesh",
  publicationDate: "2026-08-07",
  accessedAt: "2026-08-07",
  excerpt:
    "Public biographical reference for name, political affiliation, occupation, and senior public roles.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "Name and Bangla name",
    "Political affiliation with Bangladesh Awami League",
    "Public role as politician and former prime minister"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.sheikhHasina]
};
