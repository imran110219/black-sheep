import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const anisulHuqSources = [
  source({
    id: publicSourceIds.anisulHuqTbs,
    isDemo: false,
    slug: "source-anisul-huq-tbs-2024",
    type: "INVESTIGATIVE_REPORT",
    title: "Anisul Huq: How the minister of (in)justice ruled the law",
    publisher: "The Business Standard",
    sourceUrl:
      "https://www.tbsnews.net/features/panorama/anisul-huq-how-minister-injustice-ruled-law-918341",
    publicationDate: "2024-08-17",
    accessedAt: "2026-08-07",
    excerpt:
      "Public analysis of Anisul Huq's law ministry tenure, judicial-administration criticism, 16th Amendment, and digital-law context.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former law minister role",
      "Criticism of judicial-administration influence",
      "16th Amendment and digital-law context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.anisulHuq]
  }),
  source({
    id: publicSourceIds.anisulHuqBss,
    isDemo: false,
    slug: "source-anisul-huq-bss-arrest-2024",
    type: "NEWS_REPORT",
    title: "Anisul Huq, Salman F Rahman arrested in capital",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news-flash/203781",
    publicationDate: "2024-08-13",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on the arrest of Anisul Huq and Salman F Rahman in a New Market police case.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Arrest reporting",
      "Former law minister role",
      "New Market police case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.anisulHuq, publicPersonIds.salmanFRahman]
  })
];
