import type { PersonProfile } from "@/domain/person";
import {
  publicAreaIds,
  publicAssociationIds,
  publicCaseIds,
  publicClaimIds,
  publicIncidentIds,
  publicNewsIds,
  publicRelationshipIds,
  publicPersonIds
} from "../ids";

export const sheikhHasina: PersonProfile = {
  id: publicPersonIds.sheikhHasina,
  isDemo: false,
  slug: "sheikh-hasina",
  nameBn: "শেখ হাসিনা",
  nameEn: "Sheikh Hasina",
  aliases: ["Sheikh Hasina Wazed", "Sheikh Hasina Wajed", "শেখ হাসিনা ওয়াজেদ"],
  birthYear: 1947,
  summaryBn:
    "বাংলাদেশ আওয়ামী লীগের সভাপতি ও সাবেক প্রধানমন্ত্রী; ২০২৪ সালের জুলাই-আগস্ট গণ-অভ্যুত্থান-সংক্রান্ত আইসিটি মামলায় তার বিরুদ্ধে বিচার, দণ্ড ও জবাব প্রকাশ্য রেকর্ডে রয়েছে।",
  summaryEn:
    "Bangladesh Awami League president and former prime minister whose public record now includes ICT trial, conviction, sentence, and response reporting related to the July-August 2024 uprising.",
  descriptionBn:
    "এই প্রোফাইলটি দলীয় জীবনী, জাতিসংঘের মানবাধিকার fact-finding report, শাসনব্যবস্থা-সংক্রান্ত বিশ্লেষণ এবং আইসিটি-সংক্রান্ত সংবাদ প্রতিবেদনের ভিত্তিতে রাজনৈতিক ভূমিকা, ক্ষমতার সময়কাল, মানবাধিকার প্রেক্ষাপট ও আদালত-প্রক্রিয়ার status আলাদা করে রাখে।",
  descriptionEn:
    "This profile separates political biography, period in power, governance-analysis context, human-rights context, and court-process status using party biography material, a UN fact-finding report, and ICT-related news reporting.",
  occupation: "POLITICIAN",
  politicalAffiliation: "AWAMI_LEAGUE",
  publicRoles: [
    "Former Prime Minister of Bangladesh",
    "President of Bangladesh Awami League",
    "Former Leader of the Opposition",
    "Former Member of Parliament for Gopalganj-3"
  ],
  organizations: ["Bangladesh Awami League", "Government of Bangladesh", "Jatiya Sangsad"],
  website: "https://www.albd.org/pages/16/Sheikh-Hasina",
  activePeriod: "1981-present",
  activePeriodStart: "1981-02-01",
  activePeriodEnd: undefined,
  historicalEraIds: ["1980s", "1990s", "2000s", "2010s", "2020s"],
  primaryAreaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka, publicAreaIds.gopalganj3],
  claimIds: [
    publicClaimIds.sheikhHasinaJulyUprisingRightsFindings,
    publicClaimIds.sheikhHasinaIctCommandResponsibility,
    publicClaimIds.sheikhHasinaElectionControversies,
    publicClaimIds.sheikhHasinaExecutiveCentralisation
  ],
  incidentIds: [
    publicIncidentIds.sheikhHasinaJulyAugustUprising,
    publicIncidentIds.february1996ElectionCrisis,
    publicIncidentIds.october2001ElectionAftermath,
    publicIncidentIds.january2007ElectionPostponement,
    publicIncidentIds.january2014ElectionViolence,
    publicIncidentIds.december2018ElectionIrregularities,
    publicIncidentIds.january2024ElectionBoycott,
    publicIncidentIds.august21DhakaGrenadeAttack2004
  ],
  institutionAssociationIds: [
    publicAssociationIds.sheikhHasinaAwamiLeagueRole,
    publicAssociationIds.sheikhHasinaGovernmentRole,
    publicAssociationIds.sheikhHasinaIctCaseRole
  ],
  geographicAssociationIds: [
    publicAssociationIds.sheikhHasinaBangladeshInfluence,
    publicAssociationIds.sheikhHasinaGopalganjConstituency,
    publicAssociationIds.sheikhHasinaDhakaPowerBase
  ],
  primaryAreaBn: "বাংলাদেশ",
  primaryAreaEn: "Bangladesh",
  influenceDomains: [
    "POLITICS",
    "GOVERNMENT",
    "ELECTIONS",
    "PATRONAGE",
    "HUMAN_RIGHTS",
    "SECURITY"
  ],
  historicalIdentityBn:
    "বাংলাদেশের দীর্ঘ সময়ের প্রধানমন্ত্রী ও আওয়ামী লীগ সভাপতি হিসেবে রাষ্ট্রক্ষমতা, নির্বাচন, মানবাধিকার রেকর্ড এবং ২০২৪-পরবর্তী জবাবদিহি আলোচনায় কেন্দ্রীয় ব্যক্তি।",
  historicalIdentityEn:
    "A central figure in discussions of state power, elections, human-rights records, and post-2024 accountability as a long-serving prime minister and Awami League president.",
  narrative: {
    whyListedBn:
      "শেখ হাসিনা দীর্ঘ সময় রাষ্ট্রক্ষমতা ও আওয়ামী লীগ নেতৃত্বের সঙ্গে যুক্ত ছিলেন এবং ২০২৪ সালের জুলাই-আগস্ট গণ-অভ্যুত্থান-সংক্রান্ত মানবাধিকার প্রতিবেদন, আইসিটি অভিযোগ, বিচার, দণ্ড এবং তার নিজের অস্বীকৃতি প্রকাশ্য রেকর্ডে রয়েছে বলে প্রোফাইলটি অন্তর্ভুক্ত।",
    whyListedEn:
      "Sheikh Hasina is included because of her long association with state power and Awami League leadership, and because public records now include July-August 2024 human-rights reporting, ICT charges, trial, sentence, and her denial.",
    historicalOverviewBn:
      "প্রকাশ্য উৎসে তাকে টুঙ্গিপাড়ায় জন্মগ্রহণকারী আওয়ামী লীগ সভাপতি, সাবেক প্রধানমন্ত্রী, সাবেক বিরোধীদলীয় নেতা এবং গোপালগঞ্জ-৩ আসনের সংসদীয় রাজনীতির কেন্দ্রীয় ব্যক্তি হিসেবে উল্লেখ করা হয়। ২০২৪ সালের ৫ আগস্ট তার সরকারের পতনের পর আইসিটি-তে জুলাই গণ-অভ্যুত্থান-সংক্রান্ত মামলায় তার বিরুদ্ধে অভিযোগ গঠন, অনুপস্থিতিতে বিচার এবং দণ্ডের খবর প্রকাশিত হয়েছে।",
    historicalOverviewEn:
      "Public sources identify her as a Tungipara-born Awami League president, former prime minister, former opposition leader, and central figure in Gopalganj-3 parliamentary politics. After the fall of her government on August 5, 2024, ICT-related reports record charge framing, trial in absentia, and sentencing in the July uprising case.",
    riseToPowerBn:
      "১৯৮১ সালে দেশে ফেরার আগে অনুপস্থিতিতে আওয়ামী লীগ সভাপতি নির্বাচিত হন। এরপর সামরিক শাসনবিরোধী রাজনীতি, বিরোধীদলীয় নেতৃত্ব, ১৯৯৬ সালের নির্বাচনী বিজয় এবং ২০০৯-২০২৪ সময়ের ধারাবাহিক সরকার পরিচালনার মাধ্যমে তার রাজনৈতিক প্রভাব বিস্তৃত হয়।",
    riseToPowerEn:
      "Elected Awami League president in absentia before returning in 1981, she became a major figure through anti-military-rule politics, opposition leadership, the 1996 election victory, and consecutive governments from 2009 to 2024.",
    powerBaseBn:
      "বাংলাদেশ আওয়ামী লীগ, জাতীয় সরকার, সংসদীয় রাজনীতি এবং গোপালগঞ্জ-৩ আসনের রাজনৈতিক ভিত্তি।",
    powerBaseEn:
      "Bangladesh Awami League, national government, parliamentary politics, and the Gopalganj-3 constituency base.",
    documentedPatternsBn:
      "উৎস-সমর্থিত থিম: দলীয় নেতৃত্ব, দীর্ঘ প্রধানমন্ত্রিত্ব, নির্বাচনী বিতর্ক, executive authority centralisation, গণতান্ত্রিক পরিসর সংকোচনের সমালোচনা, ২০২৪ সালের protest crackdown সম্পর্কিত মানবাধিকার প্রেক্ষাপট, আইসিটি অভিযোগ/বিচার/দণ্ড এবং subject response।",
    documentedPatternsEn:
      "Source-backed themes: party leadership, long premiership, election controversies, centralisation of executive authority, democratic-space criticism, human-rights context around the 2024 protest crackdown, ICT charges/trial/sentence, and subject response.",
    historicalImpactBn:
      "দীর্ঘ প্রধানমন্ত্রিত্ব ও দলীয় নেতৃত্বের কারণে বাংলাদেশের রাজনৈতিক প্রতিষ্ঠান, নির্বাচন, আইনশৃঙ্খলা ব্যবস্থাপনা, উন্নয়ননীতি, বিরোধী রাজনীতি এবং ২০২৪-পরবর্তী জবাবদিহি কাঠামোতে তার প্রভাব জনস্বার্থের বিষয়।",
    historicalImpactEn:
      "Her long premiership and party leadership make her influence on political institutions, elections, law-enforcement governance, development policy, opposition politics, and post-2024 accountability a public-interest subject.",
    publicReputationBn:
      "প্রোফাইলটি জীবনী, মানবাধিকার প্রতিবেদন, আদালত-সংক্রান্ত প্রতিবেদন এবং তার জবাবকে আলাদা status হিসেবে রাখে। আইসিটি দণ্ডকে আদালত-প্রদত্ত দণ্ড হিসেবে দেখানো হয়েছে; একই সঙ্গে AP-প্রতিবেদিত অস্বীকৃতি ও appeal limitation-ও উল্লেখযোগ্য।",
    publicReputationEn:
      "The profile separates biography, human-rights reporting, court-process reporting, and her response. The ICT outcome is described as a court-imposed sentence, while AP-reported denial and appeal limitations remain relevant context.",
    legacyBn:
      "পরবর্তী পর্যায়ে আইসিটি রায়, আপিল/আত্মসমর্পণ/গ্রেপ্তার পরিস্থিতি, অন্য মামলার অগ্রগতি, খালাস, প্রত্যাহার বা সংশোধন পাওয়া গেলে পৃথক evidence record হিসেবে যুক্ত করা উচিত।",
    legacyEn:
      "Future updates should add the ICT judgment text, appeal/surrender/arrest posture, other case progress, acquittals, withdrawals, or corrections as separate evidence records when available.",
    featuredClaimIds: [
      publicClaimIds.sheikhHasinaJulyUprisingRightsFindings,
      publicClaimIds.sheikhHasinaIctCommandResponsibility,
      publicClaimIds.sheikhHasinaElectionControversies
    ],
    featuredRelationshipIds: [publicRelationshipIds.sheikhHasinaMamunIctCoDefendant],
    featuredIncidentIds: [publicIncidentIds.sheikhHasinaJulyAugustUprising]
  },
  city: "Dhaka",
  country: "Bangladesh",
  socialLinks: [
    { label: "Party profile", url: "https://www.albd.org/pages/16/Sheikh-Hasina" },
    { label: "Public profile", url: "https://en.wikipedia.org/wiki/Sheikh_Hasina" }
  ],
  tags: [],
  caseIds: [publicCaseIds.sheikhHasinaIctJulyUprising],
  newsIds: [
    publicNewsIds.sheikhHasinaBssCharges,
    publicNewsIds.sheikhHasinaBssAppeal,
    publicNewsIds.sheikhHasinaApReturnStatement
  ],
  assetIds: [],
  relationshipIds: [publicRelationshipIds.sheikhHasinaMamunIctCoDefendant],
  publicationStatus: "PUBLISHED",
  isActive: true,
  createdBy: "admin",
  updatedBy: "admin",
  lastVerifiedAt: "2026-08-07",
  publishedAt: "2026-08-07",
  updatedAt: "2026-08-07"
};
