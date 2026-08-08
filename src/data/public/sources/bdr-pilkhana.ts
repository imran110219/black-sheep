import { publicCaseIds, publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

const relatedPeople = [
  publicPersonIds.sheikhHasina,
  publicPersonIds.sheikhFazleNoorTaposh,
  publicPersonIds.sheikhFazlulKarimSelim,
  publicPersonIds.jahangirKabirNanak,
  publicPersonIds.mirzaAzam,
  publicPersonIds.saharaKhatun
];

export const bdrPilkhanaSources = [
  source({
    id: publicSourceIds.bdrPilkhanaCourtJudgment,
    isDemo: false,
    slug: "source-supreme-court-bdr-pilkhana-carnage-judgment",
    type: "COURT_JUDGMENT",
    title: "Supreme Court judgment in BDR carnage death reference and appeals",
    publisher: "Supreme Court of Bangladesh",
    sourceUrl: "https://www.supremecourt.gov.bd/resources/documents/769454_DeathRef58of2013_3.pdf",
    jurisdiction: "Bangladesh",
    publicationDate: "2017-11-27",
    accessedAt: "2026-08-08",
    excerpt:
      "The judgment records the 25-26 February 2009 Pilkhana incident, 74 deaths including 57 army officers, the roles of public officials in the crisis response, and criminal-case findings against convicted BDR personnel.",
    verificationStatus: "PRIMARY_SOURCE_VERIFIED",
    isPrimarySource: true,
    supportedClaims: [
      "74 deaths including 57 army officers",
      "Pilkhana location and dates",
      "Criminal-case judgment and appeals",
      "Official crisis-response evidence"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: relatedPeople
  }),
  source({
    id: publicSourceIds.bdrPilkhanaNationalProbeSummary,
    isDemo: false,
    slug: "source-daily-star-national-probe-bdr-mutiny-2009",
    type: "GOVERNMENT_DOCUMENT",
    title: "A summary of the national probe report on the BDR mutiny",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/news-detail-90347",
    jurisdiction: "Bangladesh",
    publicationDate: "2009-05-28",
    accessedAt: "2026-08-08",
    excerpt:
      "The published summary describes the national inquiry committee's mandate, interviews, reported grievances, and its account of planning and leadership within the mutiny.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2009 national inquiry summary",
      "BDR grievances and Dal-Bhat context",
      "Reported mutiny planning account"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.bdrPilkhanaHumanRights,
    isDemo: false,
    slug: "source-human-rights-watch-bdr-mutiny-2012",
    type: "INVESTIGATIVE_REPORT",
    title:
      "The Fear Never Leaves Me: Torture, Custodial Deaths, and Unfair Trials after the 2009 Mutiny",
    publisher: "Human Rights Watch",
    sourceUrl:
      "https://www.hrw.org/report/2012/07/04/fear-never-leaves-me/torture-custodial-deaths-and-unfair-trials-after-2009-mutiny",
    publicationDate: "2012-07-04",
    accessedAt: "2026-08-08",
    excerpt:
      "Human Rights Watch documented allegations of torture, custodial deaths, and fair-trial concerns after the mutiny through interviews with families, BDR members, officials, lawyers, and journalists.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Post-mutiny torture allegations",
      "Custodial-death concerns",
      "Fair-trial concerns",
      "BDR institutional context"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.bdrPilkhanaAmnesty,
    isDemo: false,
    slug: "source-amnesty-bdr-mutineers-trial-2009",
    type: "INVESTIGATIVE_REPORT",
    title: "Bangladesh: Looking for justice: Mutineers on trial",
    publisher: "Amnesty International",
    sourceUrl: "https://www.amnesty.org/en/documents/ASA13/006/2009/en/",
    publicationDate: "2009-04-01",
    accessedAt: "2026-08-08",
    excerpt:
      "Amnesty International described the deaths during the mutiny and called for justice under internationally recognized fair-trial standards, while recording reports of torture after the event.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2009 mutiny and death context",
      "Fair-trial standards",
      "Post-event torture reports"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.bdrPilkhanaCommission,
    isDemo: false,
    slug: "source-bss-national-independent-bdr-commission-2024",
    type: "GOVERNMENT_DOCUMENT",
    title: "Govt announces full-fledged commission to reinvestigate BDR carnage",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/233268",
    jurisdiction: "Bangladesh",
    publicationDate: "2024-12-24",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS reported the gazette formation of a seven-member National Independent Investigation Commission to reinvestigate the February 25-26, 2009 Pilkhana massacre and identify perpetrators and related responsibility.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2024 commission formation",
      "Reinvestigation mandate",
      "High Court-directed inquiry context"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.bdrPilkhanaAppeals,
    isDemo: false,
    slug: "source-tbs-bdr-pilkhana-pending-appeals-2024",
    type: "NEWS_REPORT",
    title: "Govt halts plan for BDR mutiny commission amid pending appeals",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/govt-halts-plan-bdr-mutiny-commission-amid-pending-appeals-1018991",
    publicationDate: "2024-12-15",
    accessedAt: "2026-08-08",
    excerpt:
      "The report says the government told the High Court that two related BDR cases were under appeal at the Appellate Division when the commission question was being considered.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Pending Appellate Division appeals",
      "Commission and judicial-process interaction",
      "No final appellate resolution in cited report"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.bdrPilkhanaBssJustice,
    isDemo: false,
    slug: "source-bss-pilkhana-justice-pending-appeals-2026",
    type: "NEWS_REPORT",
    title: "Home Minister vows justice over Pilkhana carnage, rules out new probe commission",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news-flash/363726",
    publicationDate: "2026-02-25",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS reported that several Pilkhana appeals remained pending before the Appellate Division and that the government planned phased implementation of the independent commission's recommendations.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2026 pending appeals",
      "Phased implementation position",
      "74 deaths and 57 army officers"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.bdrPilkhanaCommissionFindings,
    isDemo: false,
    slug: "source-tbs-bdr-commission-findings-2025",
    type: "NEWS_REPORT",
    title: "Commission finds AL collectively involved in the killings",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/bdr-massacre-commission-finds-collective-awami-league-involvement-names-ex-mp-taposh-key",
    publicationDate: "2025-11-30",
    accessedAt: "2026-08-08",
    excerpt:
      "The report attributes to the National Independent Investigation Commission findings that the attack was planned and involved the then government; these are commission findings and remain distinct from a criminal court judgment.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2025 commission report",
      "Commission's reported political-involvement findings",
      "Distinction between inquiry findings and court judgment"
    ],
    relatedCaseIds: [publicCaseIds.bdrPilkhanaCriminalCase],
    relatedPersonIds: [publicPersonIds.sheikhHasina, publicPersonIds.sheikhFazleNoorTaposh]
  })
];
