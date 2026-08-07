import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const jisanAhmedSources = [
  source({
    id: publicSourceIds.jisanAhmedUnb,
    isDemo: false,
    slug: "source-jisan-ahmed-unb-2019",
    type: "NEWS_REPORT",
    title: "Top terror Jisan being brought back from Dubai: Police",
    publisher: "United News of Bangladesh",
    sourceUrl:
      "https://unb.com.bd/category/bangladesh/top-terror-jisan-being-brought-back-from-dubai-police/29560",
    publicationDate: "2019-10-04",
    accessedAt: "2026-08-07",
    excerpt:
      "Police-attributed report on Dubai arrest, 2001 top criminal list, Interpol alert, and alleged alias.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Dubai arrest",
      "2001 top criminal list",
      "Ali Akbar Chowdhury alias reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.jisanAhmed]
  }),
  source({
    id: publicSourceIds.jisanAhmedTbs,
    isDemo: false,
    slug: "source-jisan-ahmed-tbs-2019",
    type: "NEWS_REPORT",
    title: "Zeesan planned to kill 4 Jubo League leaders",
    publisher: "The Business Standard",
    sourceUrl: "https://www.tbsnews.net/bangladesh/zeesan-planned-kill-4-jubo-league-leaders",
    publicationDate: "2019-10-06",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report on Zeesan/Jisan, alleged Dubai-based influence, weapons, and tender manipulation.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Zeesan/Jisan alias reporting",
      "Reported Dubai-based operations",
      "Tender manipulation reporting"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.jisanAhmed]
  })
];
