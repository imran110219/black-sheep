import type { SourceRecord } from "@/domain/source";
import { publicPersonIds, publicSourceIds } from "../ids";

export const obaidulQuaderWikipediaSource: SourceRecord = {
  id: publicSourceIds.obaidulQuaderWikipedia,
  isDemo: false,
  slug: "source-obaidul-quader-wikipedia",
  type: "OTHER",
  title: "Obaidul Quader public biography",
  publisher: "Wikipedia",
  sourceUrl: "https://en.wikipedia.org/wiki/Obaidul_Quader",
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
    "Public role as politician and party general secretary"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.obaidulQuader]
};
