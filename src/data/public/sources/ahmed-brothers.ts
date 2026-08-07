import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const ahmedBrothersSources = [
  source({
    id: publicSourceIds.azizStateDeptDesignation,
    isDemo: false,
    slug: "source-aziz-state-dept-corruption-designation-2024",
    type: "OFFICIAL_STATEMENT",
    title: "Designation of Former Bangladeshi Official for Significant Corruption",
    publisher: "U.S. Department of State",
    sourceUrl:
      "https://2021-2025.state.gov/designation-of-former-bangladeshi-official-for-significant-corruption/",
    publicationDate: "2024-05-20",
    accessedAt: "2026-08-08",
    excerpt:
      "Official public designation of former Bangladesh Army chief Aziz Ahmed under Section 7031(c), alleging significant corruption, interference in public processes, helping a brother evade accountability, improper military-contract awards, and bribes for government appointments.",
    verificationStatus: "PRIMARY_SOURCE_VERIFIED",
    isPrimarySource: true,
    supportedClaims: [
      "US State Department public designation under Section 7031(c)",
      "Aziz Ahmed and immediate family generally ineligible for US entry",
      "Official US allegation of significant corruption, not a Bangladesh court conviction"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.azizAhmed]
  }),
  source({
    id: publicSourceIds.ahmedBrothersAlJazeeraInvestigation,
    isDemo: false,
    slug: "source-ahmed-brothers-al-jazeera-investigation-2021",
    type: "INVESTIGATIVE_REPORT",
    title: "All the Prime Minister's Men",
    publisher: "Al Jazeera Investigative Unit",
    sourceUrl:
      "https://www.ajiunit.com/article/crime-family-close-to-bangladesh-pm-extracts-bribes-for-state-contracts/",
    publicationDate: "2021-02-01",
    accessedAt: "2026-08-08",
    excerpt:
      "Investigative report alleging that Haris and Anis Ahmed, brothers of General Aziz Ahmed, lived abroad after murder convictions and that the family network was linked to bribe, contract, and security-force influence claims. The report says subjects were contacted for response.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Investigative-report allegations about Ahmed brothers' overseas activity",
      "Haris Ahmed alias Mohammad Hasan reporting",
      "Claims about bribery, contract influence, and security-force access remain investigative allegations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.azizAhmed,
      publicPersonIds.harisAhmed,
      publicPersonIds.tofailAhmedJoseph,
      publicPersonIds.anisAhmed
    ]
  }),
  source({
    id: publicSourceIds.azizTbsAccProbe,
    isDemo: false,
    slug: "source-aziz-tbs-acc-probe-2024",
    type: "NEWS_REPORT",
    title: "ACC to probe corruption allegations against ex-army chief Gen Aziz, his brothers",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/corruption/acc-probe-corruption-allegations-against-ex-army-chief-gen-aziz-his-brothers",
    publicationDate: "2024-09-04",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the ACC decided to investigate allegations of illegal asset accumulation, money laundering, and irregularities against Aziz Ahmed and brothers Haris Ahmed and Tofail Ahmed.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC inquiry reporting",
      "Alleged illegal assets and money laundering are investigation-stage claims",
      "Haris Ahmed and Tofail Ahmed named in ACC inquiry context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.azizAhmed,
      publicPersonIds.harisAhmed,
      publicPersonIds.tofailAhmedJoseph
    ]
  }),
  source({
    id: publicSourceIds.azizBssExtortionCase,
    isDemo: false,
    slug: "source-aziz-bss-extortion-case-2024",
    type: "NEWS_REPORT",
    title: "Extortion case filed against Aziz, Benazir",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news/210642",
    publicationDate: "2024-09-19",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS report that businessman Selim Prodhan filed a court complaint naming Aziz Ahmed, Benazir Ahmed, Haris Ahmed, Tofail Ahmed alias Joseph, and another accused over alleged extortion and abduction; the magistrate directed CID to investigate.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Court complaint reporting",
      "CID investigation order reporting",
      "Extortion and abduction allegations are complaint-stage claims"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.azizAhmed,
      publicPersonIds.benazirAhmed,
      publicPersonIds.harisAhmed,
      publicPersonIds.tofailAhmedJoseph
    ]
  }),
  source({
    id: publicSourceIds.josephDailyStarPardon,
    isDemo: false,
    slug: "source-joseph-daily-star-pardon-2018",
    type: "NEWS_REPORT",
    title: "President pardons top terror Joseph",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/frontpage/president-pardons-top-terror-joseph-1584037",
    publicationDate: "2018-05-30",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Tofayel Ahmed Joseph was released after presidential clemency; it recounts his 2004 death sentence for the 1996 murder of Mostafizur Rahman Mostafa, later commutation to life imprisonment, and Haris and Anis Ahmed's life sentences in the same case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Joseph murder conviction and later commutation reporting",
      "Presidential clemency release reporting",
      "Haris Ahmed and Anis Ahmed life-sentence reporting in same murder case"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.harisAhmed,
      publicPersonIds.tofailAhmedJoseph,
      publicPersonIds.anisAhmed
    ]
  }),
  source({
    id: publicSourceIds.harisAnisProthomAloClemency,
    isDemo: false,
    slug: "source-haris-anis-prothom-alo-clemency-2021",
    type: "NEWS_REPORT",
    title: "Government pardon for Haris and Anis too",
    publisher: "Prothom Alo",
    sourceUrl:
      "https://en.prothomalo.com/bangladesh/crime-and-law/government-pardon-for-haris-and-anis-too/",
    publicationDate: "2021-02-04",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Haris Ahmed and Anis Ahmed, brothers of General Aziz Ahmed, had been sentenced to life imprisonment in the Mustafizur Rahman Mostafa murder case and were later granted clemency under Section 401 of the Code of Criminal Procedure.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Haris Ahmed and Anis Ahmed conviction reporting",
      "Government clemency reporting",
      "Mustafizur Rahman Mostafa murder case procedural history"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.harisAhmed,
      publicPersonIds.tofailAhmedJoseph,
      publicPersonIds.anisAhmed,
      publicPersonIds.azizAhmed
    ]
  }),
  source({
    id: publicSourceIds.azizProthomAloResponse,
    isDemo: false,
    slug: "source-aziz-prothom-alo-us-ban-response-2024",
    type: "SUBJECT_STATEMENT",
    title: "US ban discredits govt: Aziz Ahmed",
    publisher: "Prothom Alo",
    sourceUrl: "https://en.prothomalo.com/bangladesh/aw57e6yud5",
    publicationDate: "2024-05-21",
    accessedAt: "2026-08-08",
    excerpt:
      "Report carrying Aziz Ahmed's response to the US entry ban, including his denial that the corruption allegations were true.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Subject denial of US corruption allegations",
      "Former army chief role and tenure context",
      "Response context for right-of-reply balance"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.azizAhmed]
  })
];
