import { publicCaseIds, publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

const quader = publicPersonIds.obaidulQuader;

export const obaidulQuaderEnrichmentSources = [
  source({
    id: publicSourceIds.obaidulPidBiography,
    isDemo: false,
    slug: "source-pid-obaidul-quader-biography",
    type: "GOVERNMENT_DOCUMENT",
    title: "Minister biographies: Obaidul Quader",
    publisher: "Press Information Department, Government of Bangladesh",
    sourceUrl: "https://pressinform.portal.gov.bd/pages/static-pages/6922dccb933eb65569e12170",
    jurisdiction: "Bangladesh",
    publicationDate: "2024-01-01",
    accessedAt: "2026-08-08",
    excerpt:
      "The government biography identifies Obaidul Quader as Minister for Road Transport and Bridges and records his party and parliamentary roles.",
    verificationStatus: "PRIMARY_SOURCE_VERIFIED",
    isPrimarySource: true,
    supportedClaims: [
      "Former Road Transport and Bridges minister role",
      "Awami League leadership context",
      "Parliamentary role"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [quader]
  }),
  source({
    id: publicSourceIds.obaidulDailyStarBiography,
    isDemo: false,
    slug: "source-daily-star-obaidul-quader-profile",
    type: "NEWS_REPORT",
    title: "Obaidul Quader: At a glance",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/politics/obaidul-quader-glance-1303048",
    publicationDate: "2016-10-23",
    accessedAt: "2026-08-08",
    excerpt:
      "A biographical profile describing Obaidul Quader's Awami League general-secretary role, ministerial office, student-politics background, and public career.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Awami League general-secretary role",
      "Student-politics background",
      "Ministerial career"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [quader]
  }),
  source({
    id: publicSourceIds.obaidulDailyStarIctCharges,
    isDemo: false,
    slug: "source-daily-star-obaidul-quader-ict-charges-2026",
    type: "NEWS_REPORT",
    title: "ICT-2 frames charges against Quader, 6 others",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/ict-2-frames-charges-against-quader-6-others-4088191",
    publicationDate: "2026-01-22",
    accessedAt: "2026-08-08",
    excerpt:
      "The report says ICT-2 framed charges against Obaidul Quader and six others over alleged crimes against humanity during the July 2024 uprising.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT-2 charge-framing report",
      "July 2024 uprising proceeding",
      "Charges are not a conviction"
    ],
    relatedCaseIds: [publicCaseIds.obaidulQuaderJulyUprisingIct],
    relatedPersonIds: [quader]
  }),
  source({
    id: publicSourceIds.obaidulFinancialExpressFlatCase,
    isDemo: false,
    slug: "source-financial-express-obaidul-quader-flat-case-2025",
    type: "NEWS_REPORT",
    title: "ACC files case against Obaidul Quader, 13 others for expressway flat scam",
    publisher: "The Financial Express",
    sourceUrl:
      "https://thefinancialexpress.com.bd/national/acc-files-case-against-obaidul-quader-13-others-for-expressway-flat-scam",
    publicationDate: "2025-12-08",
    accessedAt: "2026-08-08",
    excerpt:
      "The report says ACC filed a case over alleged allocation of rehabilitation flats built on land acquired for people affected by the Dhaka Elevated Expressway project.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case filing",
      "Expressway rehabilitation-flat allegations",
      "No final outcome reported"
    ],
    relatedCaseIds: [publicCaseIds.obaidulQuaderExpresswayFlat],
    relatedPersonIds: [quader]
  }),
  source({
    id: publicSourceIds.obaidulDailyStarTunnelCase,
    isDemo: false,
    slug: "source-daily-star-obaidul-quader-karnaphuli-tunnel-case-2025",
    type: "NEWS_REPORT",
    title: "Karnaphuli Tunnel: ACC sues Obaidul Quader for graft",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/karnaphuli-tunnel-acc-sues-obaidul-quader-graft-3972866",
    publicationDate: "2025-08-19",
    accessedAt: "2026-08-08",
    excerpt:
      "The report says ACC filed a case against former minister Obaidul Quader and former Bridge Authority officials over alleged corruption and irregularities in the Karnaphuli Tunnel project.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC case filing",
      "Karnaphuli Tunnel project allegations",
      "No final outcome reported"
    ],
    relatedCaseIds: [publicCaseIds.obaidulQuaderKarnaphuliTunnel],
    relatedPersonIds: [quader]
  }),
  source({
    id: publicSourceIds.obaidulJagoNewsJihadAcquittal,
    isDemo: false,
    slug: "source-jagonews-obaidul-quader-jihad-murder-acquittal-2026",
    type: "NEWS_REPORT",
    title: "Hasina, Quader, 124 others acquitted in ‘Jihad murder’ case",
    publisher: "Jago News 24",
    sourceUrl: "https://www.jagonews24.com/en/national/news/91012",
    publicationDate: "2026-04-01",
    accessedAt: "2026-08-08",
    excerpt:
      "The report says a Dhaka court acquitted Obaidul Quader and other accused after a final investigation report recommended acquittal.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Acquittal report",
      "Final investigation report recommending acquittal",
      "Exculpatory legal outcome"
    ],
    relatedCaseIds: [publicCaseIds.obaidulQuaderJihadMurderAcquittal],
    relatedPersonIds: [quader]
  })
];
