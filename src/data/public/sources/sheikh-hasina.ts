import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const sheikhHasinaSources = [
  source({
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
  }),
  source({
    id: publicSourceIds.sheikhHasinaAwamiLeagueProfile,
    isDemo: false,
    slug: "source-sheikh-hasina-awami-league-profile-2018",
    type: "OFFICIAL_STATEMENT",
    title: "A Life sketch of Sheikh Hasina; Sentinel of Democracy",
    publisher: "Bangladesh Awami League",
    sourceUrl: "https://www.albd.org/pages/16/Sheikh-Hasina",
    jurisdiction: "Bangladesh",
    publicationDate: "2018-09-27",
    accessedAt: "2026-08-07",
    excerpt:
      "Party profile describing birth in Tungipara, Awami League leadership from 1981, prime ministerial terms, opposition roles, and major political milestones.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Birthplace and year",
      "Awami League presidency from 1981",
      "Prime minister and opposition-leader periods",
      "Gopalganj and national political base"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  }),
  source({
    id: publicSourceIds.sheikhHasinaBssIctCharges,
    isDemo: false,
    slug: "source-sheikh-hasina-bss-ict-charges-2025",
    type: "NEWS_REPORT",
    title: "ICT frames charges against Sheikh Hasina for July-Aug mass killing",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news-flash/290892",
    jurisdiction: "Bangladesh",
    publicationDate: "2025-07-10",
    accessedAt: "2026-08-07",
    excerpt:
      "State news report that ICT-1 framed charges against Sheikh Hasina and two others in a crimes-against-humanity case and noted the rejection of a discharge plea.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT-1 charge framing",
      "Crimes-against-humanity trial posture",
      "Defence plea to dismiss charges was rejected",
      "Trial proceeded in absentia for fugitive accused after notice"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  }),
  source({
    id: publicSourceIds.sheikhHasinaBssIctJudgment,
    isDemo: false,
    slug: "source-sheikh-hasina-bss-ict-judgment-2025",
    type: "NEWS_REPORT",
    title: "Full text of ICT judgment sentencing Hasina to death released",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/336111",
    jurisdiction: "Bangladesh",
    publicationDate: "2025-11-26",
    accessedAt: "2026-08-07",
    excerpt:
      "State news report on release of the ICT-1 judgment text after the tribunal convicted and sentenced Sheikh Hasina in the July Mass Uprising case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT-1 judgment was reported as released",
      "Conviction and death sentence were reported",
      "Superior command responsibility was reported as part of the tribunal reasoning",
      "Former IGP Chowdhury Abdullah Al-Mamun was reported as an approver"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  }),
  source({
    id: publicSourceIds.sheikhHasinaOhchrFactFinding,
    isDemo: false,
    slug: "source-sheikh-hasina-ohchr-fact-finding-2025",
    type: "INVESTIGATIVE_REPORT",
    title:
      "Human Rights Violations and Abuses related to the Protests of July and August 2024 in Bangladesh",
    publisher: "Office of the United Nations High Commissioner for Human Rights",
    sourceUrl:
      "https://www.ohchr.org/sites/default/files/documents/countries/bangladesh/ohchr-fftb-hr-violations-bd.pdf",
    jurisdiction: "Bangladesh",
    publicationDate: "2025-02-12",
    accessedAt: "2026-08-07",
    excerpt:
      "UN fact-finding report on protest-related human rights violations between July 1 and August 15, 2024, including findings about former-government policy and security-force conduct.",
    verificationStatus: "REVIEWED",
    isPrimarySource: true,
    supportedClaims: [
      "Human-rights context of the July-August 2024 protests",
      "OHCHR fact-finding methodology and mandate",
      "Reported estimate of deaths and injuries",
      "Findings concerning former-government and security-apparatus conduct"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  }),
  source({
    id: publicSourceIds.sheikhHasinaApVerdictResponse,
    isDemo: false,
    slug: "source-sheikh-hasina-ap-verdict-response-2025",
    type: "NEWS_REPORT",
    title: "Hasina sentenced to death for crackdown on Bangladesh uprising",
    publisher: "Associated Press",
    sourceUrl:
      "https://apnews.com/article/bangladesh-hasina-verdict-yunus-security-c1eec828e68460bae66824601a94eaca",
    jurisdiction: "Bangladesh",
    publicationDate: "2025-11-17",
    accessedAt: "2026-08-07",
    excerpt:
      "Wire report on the ICT verdict, including Hasina's response denying wrongdoing and calling the verdict biased and politically motivated.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Reported death sentence and in-absentia conviction",
      "Hasina's denial and criticism of the verdict",
      "Reported appeal limitation unless she surrenders or is arrested within the stated period"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  }),
  source({
    id: publicSourceIds.sheikhHasinaDailyStarIronGrip,
    isDemo: false,
    slug: "source-sheikh-hasina-daily-star-iron-grip-2026",
    type: "NEWS_REPORT",
    title: "How Sheikh Hasina's iron grip unravelled",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/supplements/july-uprising-day-2026/news/how-sheikh-hasinas-iron-grip-unravelled-4240691",
    jurisdiction: "Bangladesh",
    publicationDate: "2026-08-05",
    accessedAt: "2026-08-07",
    excerpt:
      "Analysis article tracing electoral controversies, centralisation of executive authority, democratic-space concerns, repression allegations, economic-development claims, and the student-led uprising that ended Hasina's rule.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Contextual reporting on 2014, 2018, and 2024 election controversies",
      "Analysis of centralised executive authority and weakened checks and balances",
      "Reported allegations of enforced disappearances, extrajudicial killings, and politically motivated cases",
      "Context for the student-led July 2024 uprising and fall of government"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina]
  })
];
