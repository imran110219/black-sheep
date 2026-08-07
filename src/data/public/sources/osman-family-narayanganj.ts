import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const osmanFamilyNarayanganjSources = [
  source({
    id: publicSourceIds.osmanTbsIctWarrant,
    isDemo: false,
    slug: "source-osman-tbs-ict-warrant-2026",
    type: "NEWS_REPORT",
    title:
      "July killings in Narayanganj: ICT accepts charges against Shamim Osman, 11 others, issues arrest warrant",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/court/prosecution-submits-formal-charges-against-shamim-osman-11-others-over-narayanganj",
    publicationDate: "2026-01-19",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that ICT-1 took cognisance of formal charges and issued arrest warrants against former MP Shamim Osman, his son Imtinan Osman Ayan, and others over alleged crimes against humanity in Narayanganj during the July Uprising.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT cognisance and arrest-warrant reporting",
      "Shamim Osman and Imtinan Osman Ayan named in Narayanganj July Uprising proceeding",
      "Three alleged crimes-against-humanity charges linked to 10 deaths"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.shamimOsman, publicPersonIds.imtinanOsmanAyon]
  }),
  source({
    id: publicSourceIds.osmanBssIctIndictment,
    isDemo: false,
    slug: "source-osman-bss-ict-indictment-2026",
    type: "NEWS_REPORT",
    title: "ICT indicts Shamim Osman, 11 others in July crimes against humanity case",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/others/386580",
    publicationDate: "2026-05-13",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS report that ICT-1 framed charges against Shamim Osman and 11 others, including Ayan Osman and Tanvir Ahmed Titu, over alleged atrocities in Narayanganj during the July Mass Uprising.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT charge-framing reporting",
      "Accused are reported as being tried in absentia",
      "Narayanganj Fatullah and Signboard incidents are linked to July 19, July 21, and August 5, 2024"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.shamimOsman,
      publicPersonIds.imtinanOsmanAyon,
      publicPersonIds.tanvirAhmedTitu
    ]
  }),
  source({
    id: publicSourceIds.osmanDhakaTribuneMoneyLaundering,
    isDemo: false,
    slug: "source-osman-dhaka-tribune-money-laundering-2025",
    type: "NEWS_REPORT",
    title: "ACC sues Shamim Osman, family over 200C money laundering allegations",
    publisher: "Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/crime/370986/case-filed-against-shamim-osman-family-over-200c",
    publicationDate: "2025-01-16",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the ACC filed a case against Shamim Osman, Salma Osman, and Tanvir Ahmed over alleged laundering of unrepatriated K Telecommunications foreign telecom revenue.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC money-laundering case reporting",
      "K Telecommunications IGW operator and unrepatriated revenue allegation",
      "Salma Osman reported as chairperson and Tanvir Ahmed as managing director"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.shamimOsman,
      publicPersonIds.salmaOsman,
      publicPersonIds.tanvirAhmedTitu
    ]
  }),
  source({
    id: publicSourceIds.osmanBssAccWealthCases,
    isDemo: false,
    slug: "source-osman-bss-acc-wealth-cases-2025",
    type: "NEWS_REPORT",
    title: "ACC filed cases against ex-MP Shamim Osman, his wife",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl:
      "https://www.bssnews.net/others/292541/ACC-filed-cases-against-ex-MP-Shamim-Osman%2C-his-wife",
    publicationDate: "2025-07-15",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS report that the ACC filed two corruption cases against Shamim Osman and Salma Osman and instructed Imtinan Osman and Labiba Joha Angona to submit wealth statements.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ACC illegal-wealth case reporting against Shamim Osman and Salma Osman",
      "Reported suspicious bank transaction amounts in ACC briefing context",
      "Wealth-statement notice reporting for Imtinan Osman and Labiba Joha Angona"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.shamimOsman,
      publicPersonIds.salmaOsman,
      publicPersonIds.imtinanOsmanAyon,
      publicPersonIds.labibaJohaAngona
    ]
  }),
  source({
    id: publicSourceIds.osmanDhakaTribunePoliticalInfluence,
    isDemo: false,
    slug: "source-osman-dhaka-tribune-narayanganj-politics-2022",
    type: "NEWS_REPORT",
    title: "Explained: Where does Shamim Osman stand in Narayanganj politics?",
    publisher: "Dhaka Tribune",
    sourceUrl:
      "https://www.dhakatribune.com/bangladesh/nation/264931/explained-where-does-shamim-osman-stand-in",
    publicationDate: "2022-03-04",
    accessedAt: "2026-08-08",
    excerpt:
      "Explainer on the Osman family's Narayanganj political influence, local rivalries, and historical public allegations. Accusations mentioned in the article are treated as reported or disputed claims, not findings.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Narayanganj political influence context",
      "Osman family local political-dynasty reporting",
      "Older allegation context must be kept separate from established findings"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.shamimOsman, publicPersonIds.imtinanOsmanAyon]
  }),
  source({
    id: publicSourceIds.osmanBdnewsTokiAccusation,
    isDemo: false,
    slug: "source-osman-bdnews-twaki-accusation-2013",
    type: "NEWS_REPORT",
    title: "Osman on list of Twaki's 'killers'",
    publisher: "bdnews24.com",
    sourceUrl: "https://bdnews24.com/bangladesh/osman-on-list-of-twakis-killers",
    publicationDate: "2013-03-18",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Tanvir Mohammad Twaki's father submitted a list of suspected killers including Shamim Osman and Ayon Osman; the report also notes Osman dismissed the accusation as conspiracy.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Reported accusation in Twaki murder context",
      "Shamim Osman and Ayon Osman named by victim's father as suspects",
      "Denial/dispute context is part of the source record"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.shamimOsman, publicPersonIds.imtinanOsmanAyon]
  }),
  source({
    id: publicSourceIds.osmanTbsIctWitness,
    isDemo: false,
    slug: "source-osman-tbs-ict-witness-2026",
    type: "NEWS_REPORT",
    title: "Shamim Osman's son shot protester beside me, witness tells tribunal",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/court/shamim-osmans-son-shot-protester-beside-me-witness-tells-tribunal-1500146",
    publicationDate: "2026-07-28",
    accessedAt: "2026-08-08",
    excerpt:
      "Report on prosecution witness testimony at ICT-1 alleging Ayon Osman shot a protester and describing an attack allegedly involving Shamim Osman and associates. The testimony is not treated as a final court finding.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT witness-testimony reporting",
      "Allegation against Ayon Osman is testimony-stage material",
      "Reported charge structure for July 19, July 21, and August 5, 2024 Narayanganj incidents"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.shamimOsman,
      publicPersonIds.imtinanOsmanAyon,
      publicPersonIds.tanvirAhmedTitu
    ]
  })
];
