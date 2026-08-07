import { source } from "./_source-factory";
import { publicPersonIds, publicSourceIds } from "../ids";

export const hasanulHaqInuSources = [
  source({
    id: publicSourceIds.inuTbsKushtiaCharges,
    isDemo: false,
    slug: "source-inu-tbs-kushtia-charges-2025",
    type: "NEWS_REPORT",
    title: "Kushtia killings: Charges framed, trial ordered against Hanif, Inu and 3 others",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/court/kushtia-killings-charges-framed-trial-ordered-against-hanif-inu-and-3-others",
    publicationDate: "2025-11-02",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on ICT-2 charge-framing and trial-order context involving Hasanul Haq Inu and Mahbubul Alam Hanif in Kushtia July-uprising cases.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT-2 charge-framing report",
      "Inu denial posture",
      "Kushtia July-uprising case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.hasanulHaqInu, publicPersonIds.mahbubulAlamHanif]
  })
];
