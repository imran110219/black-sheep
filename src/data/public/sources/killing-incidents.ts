import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const killingIncidentSources = [
  source({
    id: publicSourceIds.august21GrenadeAttackProthomAlo,
    isDemo: false,
    slug: "source-august-21-grenade-attack-prothom-alo",
    type: "NEWS_REPORT",
    title: "21 August grenade attack: 24 years on, justice still elusive",
    publisher: "Prothom Alo",
    sourceUrl: "https://en.prothomalo.com/bangladesh/mn67qllsdr",
    publicationDate: "2025-08-21",
    accessedAt: "2026-08-08",
    excerpt:
      "Prothom Alo reported that at least 24 people, including Awami League leader Ivy Rahman, were killed and about 300 injured in the August 21, 2004 grenade attack.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "August 21, 2004 Dhaka grenade attack chronology",
      "At least 24 deaths reported",
      "About 300 injuries reported"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  }),
  source({
    id: publicSourceIds.august21GrenadeAttackHumanRightsWatch,
    isDemo: false,
    slug: "source-august-21-grenade-attack-human-rights-watch",
    type: "INVESTIGATIVE_REPORT",
    title: "Bangladesh: Probe Recent Attacks",
    publisher: "Human Rights Watch",
    sourceUrl: "https://www.hrw.org/news/2004/08/26/bangladesh-probe-recent-attacks",
    publicationDate: "2004-08-26",
    accessedAt: "2026-08-08",
    excerpt:
      "Human Rights Watch called for an investigation and prosecution after the August 21 grenade attack on an Awami League rally in Dhaka.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Attack on an Awami League rally in Dhaka",
      "Call for investigation and prosecution",
      "Contemporary human-rights accountability context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  })
];
