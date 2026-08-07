import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const asaduzzamanKhanKamalSources = [
  source({
    id: publicSourceIds.asadKamalBssFormalCharge,
    isDemo: false,
    slug: "source-asad-kamal-bss-ict-formal-charge-2025",
    type: "NEWS_REPORT",
    title: "Formal charge filed against Hasina over July crimes against humanity",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/news-flash/278877",
    publicationDate: "2025-06-01",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that ICT prosecutors filed formal charges naming Sheikh Hasina, Asaduzzaman Khan Kamal, and former IGP Chowdhury Abdullah Al-Mamun.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former home minister identification",
      "ICT formal-charge reporting",
      "July-August Mass Uprising crimes-against-humanity proceeding"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.asaduzzamanKhanKamal,
      publicPersonIds.sheikhHasina,
      publicPersonIds.chowdhuryAbdullahAlMamun
    ]
  })
];
