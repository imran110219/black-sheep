import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const benazirAhmedSources = [
  source({
    id: publicSourceIds.benazirBssAccProbe,
    isDemo: false,
    slug: "source-benazir-bss-acc-probe-2024",
    type: "NEWS_REPORT",
    title: "ACC forms body to probe graft allegations against ex-IGP Benazir",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/185075",
    publicationDate: "2024-04-22",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the Anti-Corruption Commission formed a probe body to inquire into graft allegations against former IGP Benazir Ahmed.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former IGP identification",
      "ACC probe-body reporting",
      "Graft allegations are inquiry-stage reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.benazirAhmed]
  }),
  source({
    id: publicSourceIds.benazirBssIndicted,
    isDemo: false,
    slug: "source-benazir-bss-indicted-graft-case-2026",
    type: "NEWS_REPORT",
    title: "Ex-IGP Benazir indicted in graft case",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/383775",
    publicationDate: "2026-05-03",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that a Dhaka court framed charges against former IGP Benazir Ahmed in a graft case involving alleged illegal wealth, information concealment, and money laundering.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Charge-framing report",
      "ACC case and charge-sheet context",
      "No final conviction is established by this source"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.benazirAhmed]
  })
];
