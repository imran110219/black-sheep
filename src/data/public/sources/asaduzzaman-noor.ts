import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const asaduzzamanNoorSources = [
  source({
    id: publicSourceIds.noorDailyStarVirtualCases,
    isDemo: false,
    slug: "source-noor-daily-star-virtual-july-cases-2025",
    type: "NEWS_REPORT",
    title: "Six ex-ministers, three others appear virtually in 4 July uprising cases",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/six-ex-ministers-three-others-appear-virtually-4-july-uprising-cases-3987361",
    publicationDate: "2025-09-16",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that former cultural affairs minister Asaduzzaman Noor and others appeared virtually in Dhaka court in four July-uprising-linked cases.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former cultural affairs minister role",
      "Virtual court appearance",
      "July-uprising case context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.asaduzzamanNoor,
      publicPersonIds.hasanulHaqInu,
      publicPersonIds.zunaidAhmedPalak,
      publicPersonIds.kamalAhmedMajumder
    ]
  })
];
