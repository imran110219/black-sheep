import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const july45IctProceedingSource = source({
  id: publicSourceIds.july45BssProbeReport,
  isDemo: false,
  slug: "source-bss-quader-45-ict-proceeding-2025",
  type: "NEWS_REPORT",
  title: "Tribunal sets Feb 9 for probe report in case against Quader, 44 others",
  publisher: "Bangladesh Sangbad Sangstha",
  sourceUrl: "https://www.bssnews.net/others/339824",
  publicationDate: "2025-12-08",
  accessedAt: "2026-08-08",
  excerpt:
    "BSS report on an ICT case against 45 accused including Obaidul Quader and Anisul Huq, listing 17 arrested accused produced before the tribunal.",
  verificationStatus: "REVIEWED",
  isPrimarySource: false,
  supportedClaims: [
    "ICT proceeding involving Quader and 44 others",
    "Arrested accused produced before tribunal",
    "Probe-report schedule and proceeding status"
  ],
  relatedCaseIds: [],
  relatedPersonIds: [
    publicPersonIds.obaidulQuader,
    publicPersonIds.anisulHuq,
    publicPersonIds.amirHossainAmu,
    publicPersonIds.shajahanKhan,
    publicPersonIds.qamrulIslam,
    publicPersonIds.abdurRazzaque,
    publicPersonIds.rashedKhanMenon,
    publicPersonIds.hasanulHaqInu,
    publicPersonIds.kamalAhmedMajumder,
    publicPersonIds.golamDastagirGazi,
    publicPersonIds.dipuMoni,
    publicPersonIds.zunaidAhmedPalak,
    publicPersonIds.salmanFRahman,
    publicPersonIds.tawfiqEElahiChowdhury,
    publicPersonIds.ahmShamsuddinChowdhuryManik,
    publicPersonIds.jahangirAlamHomeSecretary,
    publicPersonIds.solaimanMohammadSelim,
    publicPersonIds.muhammadFarukKhan
  ]
});
