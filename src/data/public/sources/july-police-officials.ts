import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const julyPoliceOfficialsSources = [
  source({
    id: publicSourceIds.julyPoliceRampuraIctCharges,
    isDemo: false,
    slug: "source-july-police-rampura-ict-charges",
    type: "NEWS_REPORT",
    title: "Crime against humanity: ICT accepts charges against ex-DMP chief Habibur, 4 others",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/crime-justice/news/crime-against-humanity-ict-accepts-charges-against-ex-dmp-chief",
    publicationDate: "2025-08-10",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reported that the ICT accepted charges against five former police officials over the Rampura July Uprising incident, naming Rashedul Islam, Mashiur Rahman, Tarikul Islam Bhuiyan, and Chanchal Chandra Sarkar alongside former DMP commissioner Habibur Rahman.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT charge-acceptance reporting",
      "Rampura July Uprising case context",
      "Public police roles of the named officials",
      "Reported custody and absconding posture"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.habiburRahmanDmp,
      publicPersonIds.rashedulIslam,
      publicPersonIds.mashiurRahman,
      publicPersonIds.tarikulIslamBhuiyan,
      publicPersonIds.chanchalChandraSarkar
    ]
  }),
  source({
    id: publicSourceIds.julyPoliceChankharpulIctCharges,
    isDemo: false,
    slug: "source-july-police-chankharpul-ict-charges",
    type: "NEWS_REPORT",
    title: "July killings: Charges pressed against eight cops at ICT",
    publisher: "The Daily Star",
    sourceUrl:
      "https://online.thedailystar.net/news/bangladesh/crime-justice/news/july-killings-charges-pressed-against-eight-cops-ict-3902856",
    publicationDate: "2025-05-26",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reported that ICT-1 took cognisance of charges against eight police officials over the Chankharpul killings, naming Sudip Kumar Chakraborty, Sha Alam Mohammad Akhtarul Islam, Mohammad Imrul, and Arshad Hossain among the accused.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT charge-acceptance reporting",
      "Chankharpul July Uprising case context",
      "Public police roles of the named officials",
      "Reported command-responsibility allegation context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [
      publicPersonIds.habiburRahmanDmp,
      publicPersonIds.sudipKumarChakraborty,
      publicPersonIds.shaAlamMohammadAkhtarulIslam,
      publicPersonIds.mohammadImrul,
      publicPersonIds.arshadHossain
    ]
  }),
  source({
    id: publicSourceIds.ishtiaqAhmedBssIctCustody,
    isDemo: false,
    slug: "source-ishtiaq-ahmed-bss-ict-custody",
    type: "NEWS_REPORT",
    title: "Ex-Addl SP sent to jail for pinpointing July protesters thru drones",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/others/268120",
    publicationDate: "2025-04-29",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS reported that the ICT sent former additional superintendent of police Ishtiaq Ahmed to jail in a Chankharpul case and quoted a prosecutor alleging that a police digital-forensics team used drones to identify protesters and share information with law-enforcement agencies.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "ICT custody reporting",
      "Former additional superintendent of police role",
      "Police digital-forensics supervisor role",
      "Prosecutor-attributed drone-identification allegation"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.ishtiaqAhmed]
  })
];
