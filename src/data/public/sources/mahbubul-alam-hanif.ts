import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mahbubulAlamHanifSources = [
  source({
    id: publicSourceIds.hanifTbsIctWitness,
    isDemo: false,
    slug: "source-hanif-tbs-ict-witness-2026",
    type: "NEWS_REPORT",
    title: "Hanif ordered deadly crackdown on protesters in Kushtia, witness tells ICT",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/court/hanif-ordered-deadly-crackdown-protesters-kushtia-witness-tells-ict-1328746",
    publicationDate: "2026-01-07",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on ICT witness testimony alleging Mahbubul Alam Hanif directed violent suppression of protesters in Kushtia.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT witness testimony reporting",
      "Kushtia July-uprising case context",
      "Testimony is not final adjudication"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mahbubulAlamHanif]
  })
];
