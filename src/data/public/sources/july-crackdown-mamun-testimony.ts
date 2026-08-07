import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const julyCrackdownMamunTestimonySource = source({
  id: publicSourceIds.julyCrackdownDailyStarMamunTestimony,
  isDemo: false,
  slug: "source-daily-star-mamun-ict-testimony-july-crackdown-2025",
  type: "NEWS_REPORT",
  title: "Hasina, Kamal ordered shooting of July protesters",
  publisher: "The Daily Star",
  sourceUrl:
    "https://www.thedailystar.net/news/bangladesh/crime-justice/news/core-committee-ordered-detain-student-leaders-during-july-uprising-ex-igp-mamun-3976826",
  publicationDate: "2025-09-02",
  accessedAt: "2026-08-08",
  excerpt:
    "Report on former IGP Chowdhury Abdullah Al-Mamun's ICT testimony naming political and security figures in alleged July-uprising crackdown decision-making.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "ICT testimony reporting",
    "Alleged political decision-making context",
    "Testimony is not final adjudication"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [
    publicPersonIds.sheikhHasina,
    publicPersonIds.asaduzzamanKhanKamal,
    publicPersonIds.chowdhuryAbdullahAlMamun,
    publicPersonIds.anisulHuq,
    publicPersonIds.sheikhFazleNoorTaposh,
    publicPersonIds.salmanFRahman,
    publicPersonIds.obaidulQuader,
    publicPersonIds.jahangirKabirNanak,
    publicPersonIds.mirzaAzam,
    publicPersonIds.mohammadAliArafat,
    publicPersonIds.hasanulHaqInu,
    publicPersonIds.rashedKhanMenon,
    publicPersonIds.habiburRahmanDmp,
    publicPersonIds.harunOrRashid,
    publicPersonIds.barristerMdHarunArRashid
  ]
});
