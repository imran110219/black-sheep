import { publicCaseIds, publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const saddamHossainBclSources = [
  source({
    id: publicSourceIds.quaderSevenBssIndictment,
    isDemo: false,
    slug: "source-bss-quader-seven-ict-indictment-2026",
    type: "NEWS_REPORT",
    title: "Tribunal indicts Quader, 6 others over crimes against humanity",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news-flash/353661",
    publicationDate: "2026-01-22",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that ICT-2 framed charges against seven accused including Obaidul Quader, Saddam Hossain, and Wali Asif Inan.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT-2 charge-framing report",
      "BCL leadership context",
      "Formal charges are not a conviction"
    ],
    relatedCaseIds: [publicCaseIds.obaidulQuaderJulyUprisingIct],
    relatedPersonIds: [
      publicPersonIds.obaidulQuader,
      publicPersonIds.saddamHossainBcl,
      publicPersonIds.waliAsifInan,
      publicPersonIds.mohammadAliArafat
    ]
  })
];
