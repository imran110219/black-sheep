import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const matiurBdnewsAccCaseSource = source({
  id: publicSourceIds.matiurBdnewsAccCase,
  isDemo: false,
  slug: "source-matiur-bdnews-acc-wealth-case-2024",
  type: "NEWS_REPORT",
  title: "ACC prosecutes ex-IGP Benazir, NBR's Matiur, their families over 'wealth beyond means'",
  publisher: "bdnews24.com",
  sourceUrl: "https://bdnews24.com/bangladesh/d0eb7dddde1a",
  publicationDate: "2024-12-15",
  accessedAt: "2026-08-08",
  excerpt:
    "Report that ACC filed cases against former NBR official Matiur Rahman and others over alleged wealth beyond means and concealed asset information.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "Former NBR official role",
    "ACC case-filing report",
    "Wealth-beyond-means and asset-concealment allegations"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.mdMatiurRahmanNbr, publicPersonIds.benazirAhmed]
});

export const rahmatulMuneemBssTravelBanSource = source({
  id: publicSourceIds.rahmatulMuneemBssTravelBan,
  isDemo: false,
  slug: "source-rahmatul-muneem-bss-travel-ban-2025",
  type: "NEWS_REPORT",
  title: "Travel ban imposed on ex-NBR chairman Rahmatul Muneem, wife",
  publisher: "Bangladesh Sangbad Sangstha",
  sourceUrl: "https://www.bssnews.net/others/275246",
  publicationDate: "2025-05-21",
  accessedAt: "2026-08-08",
  excerpt:
    "Report that a court imposed a travel ban on former NBR chairman Abu Hena Md Rahmatul Muneem and his wife over ACC graft-allegation inquiry context.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "Former NBR chairman role",
    "Court travel-ban order",
    "ACC inquiry over graft allegations"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.abuHenaMdRahmatulMuneem]
});

export const expresswayBssFlatScamSource = source({
  id: publicSourceIds.expresswayBssFlatScam,
  isDemo: false,
  slug: "source-bss-expressway-flat-allocation-acc-case-2025",
  type: "NEWS_REPORT",
  title: "ACC files case against Obaidul Quader, 13 others for expressway flat scam",
  publisher: "Bangladesh Sangbad Sangstha",
  sourceUrl: "https://www.bssnews.net/others/339879",
  publicationDate: "2025-12-08",
  accessedAt: "2026-08-08",
  excerpt:
    "Report that ACC filed a case against Obaidul Quader and 13 former secretaries over alleged unlawful flat construction and long-term leases on land acquired for Dhaka Elevated Expressway rehabilitation.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "ACC case-filing report",
    "Expressway land and flat-allocation allegations",
    "Former secretary accused-list context"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [
    publicPersonIds.obaidulQuader,
    publicPersonIds.abuHenaMdRahmatulMuneem,
    publicPersonIds.zafarAhmedKhan,
    publicPersonIds.mdNazrulIslamRoads
  ]
});

export const mihirKantiTbsAccCasesSource = source({
  id: publicSourceIds.mihirKantiTbsAccCases,
  isDemo: false,
  slug: "source-mihir-kanti-tbs-acc-cases-2025",
  type: "NEWS_REPORT",
  title: "ACC files cases against ex-secretary Mihir Kanti over embezzlement allegations",
  publisher: "The Business Standard",
  sourceUrl:
    "https://www.tbsnews.net/bangladesh/acc-files-cases-against-ex-secretary-mihir-kanti-over-embezzlement-charges-1128156",
  publicationDate: "2025-04-28",
  accessedAt: "2026-08-08",
  excerpt:
    "Report that ACC filed six cases against former secretary Mihir Kanti Majumder and others over alleged embezzlement through fake projects.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "Former secretary role",
    "ACC case-filing report",
    "Fake-project embezzlement allegations"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.mihirKantiMajumder]
});

export const ashadulNewAgeN95ProbeSource = source({
  id: publicSourceIds.ashadulNewAgeN95Probe,
  isDemo: false,
  slug: "source-ashadul-new-age-n95-probe-2020",
  type: "NEWS_REPORT",
  title: "Bangladesh anti-graft watchdog asks for probe report on N95 scam",
  publisher: "New Age",
  sourceUrl:
    "https://www.newagebd.net/article/107670/bangladesh-anti-graft-watchdog-asks-for-probe-report-on-n95-scam",
  publicationDate: "2020-05-29",
  accessedAt: "2026-08-08",
  excerpt:
    "Report on ACC attention to the N95 mask controversy and departmental steps, noting Health Services Division secretary Md Ashadul Islam was transferred.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "Health Services Division secretary role",
    "N95 mask probe context",
    "Transfer after departmental steps"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.mdAshadulIslam]
});

export const jabedPatwaryDhakaTribuneElectionCaseSource = source({
  id: publicSourceIds.jabedPatwaryDhakaTribuneElectionCase,
  isDemo: false,
  slug: "source-jabed-patwary-dhaka-tribune-election-case-2026",
  type: "NEWS_REPORT",
  title: "HC issues rule on bail of former CEC Habibul Awal",
  publisher: "Dhaka Tribune",
  sourceUrl:
    "https://www.dhakatribune.com/bangladesh/court/413794/hc-issues-rule-on-bail-of-former-cec-habibul-awal",
  publicationDate: "2026-06-28",
  accessedAt: "2026-08-08",
  excerpt:
    "Report on an election-related case that names former IGP Jabed Patwary among accused former officials; this is case-reporting context, not a finding.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "Former IGP identification",
    "Election-case accused-list reporting",
    "No final finding established"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.drMohammadJabedPatwary]
});

export const jabedPatwaryProthomAloPoliceCorruptionSource = source({
  id: publicSourceIds.jabedPatwaryProthomAloPoliceCorruption,
  isDemo: false,
  slug: "source-jabed-patwary-prothom-alo-police-corruption-2018",
  type: "NEWS_REPORT",
  title: "Police corruption facilitates drug trade",
  publisher: "Prothom Alo",
  sourceUrl: "https://en.prothomalo.com/bangladesh/Police-corruption-facilitates-drug-trade",
  publicationDate: "2018-02-01",
  accessedAt: "2026-08-08",
  excerpt:
    "Report on police officials discussing recruitment, transfer, and drug-trade corruption at a meeting after Jabed Patwary took over as IGP.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "IGP role context",
    "Police corruption discussion during tenure",
    "General institutional discussion, not personal finding"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [publicPersonIds.drMohammadJabedPatwary]
});
