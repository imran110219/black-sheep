import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

const relatedPeople = [
  publicPersonIds.sheikhHasina,
  publicPersonIds.hasanulHaqInu,
  publicPersonIds.abdurRazzaque,
  publicPersonIds.dipuMoni,
  publicPersonIds.jahangirKabirNanak,
  publicPersonIds.mahbubulAlamHanif,
  publicPersonIds.hasanMahmud,
  publicPersonIds.benazirAhmed,
  publicPersonIds.ziaulAhsan,
  publicPersonIds.azizAhmed,
  publicPersonIds.monirulIslam,
  publicPersonIds.harunOrRashid,
  publicPersonIds.biplobKumarSarker,
  publicPersonIds.mohiuddinKhanAlamgir,
  publicPersonIds.shamsulHaqueTuku,
  publicPersonIds.sheikhFazlulKarimSelim,
  publicPersonIds.afmBahauddinNasim,
  publicPersonIds.abdulLatifSiddique,
  publicPersonIds.mrinalKantiDas,
  publicPersonIds.mofazzalHossainChowdhuryMaya,
  publicPersonIds.omarFarukChowdhury,
  publicPersonIds.salahuddinMahmud,
  publicPersonIds.imranHSarker,
  publicPersonIds.shahriarKabir,
  publicPersonIds.mozammelHaqueBabu,
  publicPersonIds.farzanaRupa,
  publicPersonIds.hasanMahmudKhandaker,
  publicPersonIds.akmShahidulHoque
];

const tribunalCase = "00000000-0000-4000-8000-000000000322";

export const shaplaChattarSources = [
  source({
    id: publicSourceIds.shaplaChattarTbsTribunal,
    isDemo: false,
    slug: "source-tbs-shapla-chattar-tribunal-warrants-2026",
    type: "NEWS_REPORT",
    title:
      "Shapla Chattar killings: Tribunal issues arrest warrant for Hasina, other absconding accused",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/shapla-chattar-killings-charges-filed-against-hasina-40-others-1498951",
    publicationDate: "2026-07-27",
    accessedAt: "2026-08-08",
    excerpt:
      "The report says ICT-2 took cognisance of formal charges against Sheikh Hasina and 40 others over the 2013 Hefazat rally and reported prosecution claims concerning 58 deaths.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT-2 charge-taking report",
      "2026 warrant and production-warrant procedure",
      "Prosecution's reported 58-death account"
    ],
    relatedCaseIds: [tribunalCase],
    relatedPersonIds: relatedPeople
  }),
  source({
    id: publicSourceIds.shaplaChattarBssTribunal,
    isDemo: false,
    slug: "source-bss-shapla-chattar-formal-charge-2026",
    type: "NEWS_REPORT",
    title: "ICT-2 accepts charges against Hasina, 40 others in ‘Shapla Chattar’ crackdown case",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl:
      "https://www.bssnews.net/law-and-court/409253/ICT-2-accepts-charges-against-Hasina-40-others-in-%E2%80%98Shapla-Chattar%E2%80%99-crackdown-case",
    publicationDate: "2026-07-27",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS reports that ICT-2 took cognisance of the formal charge over the May 5, 2013 crackdown and ordered accused in custody to be produced while warrants remained outstanding for absconding accused.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Formal-charge proceeding",
      "Pending tribunal case",
      "Arrest and production warrant procedure"
    ],
    relatedCaseIds: [tribunalCase],
    relatedPersonIds: relatedPeople
  }),
  source({
    id: publicSourceIds.shaplaChattarBdnewsTribunal,
    isDemo: false,
    slug: "source-bdnews24-shapla-chattar-charges-2026",
    type: "NEWS_REPORT",
    title: "ICT accepts charges against Hasina, 40 others over 2013 Shapla Chattar crackdown",
    publisher: "bdnews24.com",
    sourceUrl: "https://bdnews24.com/bangladesh/894bbe4af40e",
    publicationDate: "2026-07-27",
    accessedAt: "2026-08-08",
    excerpt:
      "The report describes the complaint filed in 2024, the tribunal's acceptance of charges in 2026, 31 absconding warrants, and competing prosecution accounts of the death toll.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Complaint and charge chronology",
      "31 absconding warrants",
      "Competing death-toll accounts"
    ],
    relatedCaseIds: [tribunalCase],
    relatedPersonIds: [
      publicPersonIds.sheikhHasina,
      publicPersonIds.hasanulHaqInu,
      publicPersonIds.dipuMoni,
      publicPersonIds.benazirAhmed,
      publicPersonIds.ziaulAhsan
    ]
  }),
  source({
    id: publicSourceIds.shaplaChattarDailyStarWarrants,
    isDemo: false,
    slug: "source-daily-star-shapla-chattar-warrants-2025",
    type: "NEWS_REPORT",
    title: "Shapla Chattar incident: ICT issues arrest warrants for Hasina, 4 others",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/shapla-chattar-incident-ict-issues-arrest-warrants-hasina-4-others-3845961",
    publicationDate: "2025-03-12",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reports arrest and production warrants in the Shapla Chattar proceeding and attributes allegations about planning and responsibility to the prosecution.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2025 warrant proceeding",
      "Prosecution allegations",
      "Reported disagreement over casualty figures"
    ],
    relatedCaseIds: [tribunalCase],
    relatedPersonIds: [
      publicPersonIds.sheikhHasina,
      publicPersonIds.benazirAhmed,
      publicPersonIds.ziaulAhsan,
      publicPersonIds.biplobKumarSarker,
      publicPersonIds.harunOrRashid
    ]
  }),
  source({
    id: publicSourceIds.shaplaChattarBssInvestigation,
    isDemo: false,
    slug: "source-bss-shapla-chattar-investigation-2025",
    type: "NEWS_REPORT",
    title: "ICT permits interrogation of accused in Shapla Chattar case",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/others/304748/news/international",
    publicationDate: "2025-08-24",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS reports an ICT order permitting interrogation of several accused in the Shapla Chattar proceeding and describes the complaint brought on behalf of Hefazat leaders.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Investigation-stage tribunal order",
      "Complaint context",
      "Accused-list reporting"
    ],
    relatedCaseIds: [tribunalCase],
    relatedPersonIds: [publicPersonIds.ziaulAhsan]
  }),
  source({
    id: publicSourceIds.shaplaChattarHumanRightsWatch,
    isDemo: false,
    slug: "source-human-rights-watch-bangladesh-protests-2013",
    type: "INVESTIGATIVE_REPORT",
    title: "Blood on the Streets: The Use of Excessive Force During Bangladesh Protests",
    publisher: "Human Rights Watch",
    sourceUrl:
      "https://www.hrw.org/report/2013/08/01/blood-streets/use-excessive-force-during-bangladesh-protests",
    publicationDate: "2013-08-01",
    accessedAt: "2026-08-08",
    excerpt:
      "Human Rights Watch documented the 2013 protest violence through interviews and described the casualty and force accounts as contested and requiring independent investigation.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2013 protest context",
      "Use-of-force documentation",
      "Contested casualty accounts"
    ],
    relatedCaseIds: [tribunalCase],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.shaplaChattarOdhikarReport,
    isDemo: false,
    slug: "source-odhikar-shapla-chattar-casualty-report-2013",
    type: "INVESTIGATIVE_REPORT",
    title: "61 killed in Shapla Chattar drive: Odhikar",
    publisher: "Odhikar, reported by Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/bangladesh-others/28425/61-killed-in-shapla-chattar-drive-odhikar",
    publicationDate: "2013-05-15",
    accessedAt: "2026-08-08",
    excerpt:
      "The report attributes a total of 61 deaths to Odhikar's account of the May 2013 operation; this figure is presented as a rights-group claim rather than an established judicial finding.",
    verificationStatus: "DISPUTED",
    isPrimarySource: false,
    supportedClaims: [
      "Odhikar-reported casualty figure",
      "May 2013 operation context",
      "Disputed death toll"
    ],
    relatedCaseIds: [tribunalCase],
    relatedPersonIds: []
  })
];
