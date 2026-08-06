import type { InfluenceDomain } from "@/domain/claim";
import type { PersonProfile } from "@/domain/person";
import { publicPersonIds } from "../ids";

type ProfileSeed = {
  id: string;
  slug: string;
  nameEn: string;
  nameBn: string;
  aliases: string[];
  birthYear?: number;
  occupation: string;
  politicalAffiliation?: string;
  publicRoles: string[];
  organizations: string[];
  website?: string;
  activePeriod: string;
  primaryAreaEn: string;
  primaryAreaBn: string;
  city: string;
  influenceDomains: InfluenceDomain[];
  summaryEn: string;
  summaryBn: string;
  historicalIdentityEn: string;
  historicalIdentityBn: string;
  whyListedEn: string;
  whyListedBn: string;
  overviewEn: string;
  overviewBn: string;
  patternsEn: string;
  patternsBn: string;
};

const common = {
  isDemo: false,
  country: "Bangladesh",
  socialLinks: [],
  tags: [],
  caseIds: [],
  newsIds: [],
  assetIds: [],
  relationshipIds: [],
  publicationStatus: "PUBLISHED" as const,
  isActive: true,
  createdBy: "admin",
  updatedBy: "admin",
  lastVerifiedAt: "2026-08-07",
  publishedAt: "2026-08-07",
  updatedAt: "2026-08-07"
};

const seeds: ProfileSeed[] = [
  {
    id: publicPersonIds.anisulHuq,
    slug: "anisul-huq",
    nameEn: "Anisul Huq",
    nameBn: "আনিসুল হক",
    aliases: ["Anisul Huq MP"],
    occupation: "POLITICIAN",
    politicalAffiliation: "AWAMI_LEAGUE",
    publicRoles: ["Former Law Minister"],
    organizations: [
      "Ministry of Law, Justice and Parliamentary Affairs",
      "Bangladesh Awami League"
    ],
    activePeriod: "2014-2024",
    primaryAreaEn: "Bangladesh",
    primaryAreaBn: "বাংলাদেশ",
    city: "Dhaka",
    influenceDomains: ["POLITICS", "HUMAN_RIGHTS", "PATRONAGE"],
    summaryEn:
      "Former law minister whose tenure is discussed in public reporting around judicial administration, constitutional amendment, digital-security laws, and post-2024 arrest context.",
    summaryBn:
      "সাবেক আইনমন্ত্রী, যার মেয়াদ বিচার প্রশাসন, সাংবিধানিক সংশোধন, ডিজিটাল নিরাপত্তা আইন এবং ২০২৪-পরবর্তী গ্রেপ্তার প্রসঙ্গে প্রকাশ্য প্রতিবেদনে আলোচিত।",
    historicalIdentityEn:
      "A former law minister associated in public criticism and reporting with controversial legal and judicial changes during the Awami League government.",
    historicalIdentityBn:
      "আওয়ামী লীগ সরকারের সময়ে বিতর্কিত আইনি ও বিচারিক পরিবর্তন নিয়ে প্রকাশ্য সমালোচনা ও প্রতিবেদনে আলোচিত সাবেক আইনমন্ত্রী।",
    whyListedEn:
      "Included because reporting identifies him as a central legal-policy figure and separately documents arrest in post-uprising murder-case proceedings.",
    whyListedBn:
      "প্রতিবেদনে তাকে গুরুত্বপূর্ণ আইন-নীতিনির্ধারণী ব্যক্তি হিসেবে এবং গণঅভ্যুত্থান-পরবর্তী হত্যা মামলার প্রক্রিয়ায় গ্রেপ্তার ব্যক্তি হিসেবে আলাদাভাবে উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "Public reporting criticizes his ministry's role in the 16th Amendment, digital-security legislation, and lower-judiciary administration. Arrest reporting is treated separately from those policy criticisms.",
    overviewBn:
      "প্রকাশ্য প্রতিবেদনে ১৬তম সংশোধনী, ডিজিটাল নিরাপত্তা আইন এবং নিম্ন আদালত প্রশাসনে তার মন্ত্রণালয়ের ভূমিকা নিয়ে সমালোচনা করা হয়েছে। গ্রেপ্তার-সংক্রান্ত প্রতিবেদনকে এসব নীতি সমালোচনা থেকে আলাদা রাখা হয়েছে।",
    patternsEn:
      "Reported themes: law-ministry influence, judicial administration, cyber-law restrictions, opposition and dissent cases.",
    patternsBn:
      "প্রতিবেদনভিত্তিক থিম: আইন মন্ত্রণালয়ের প্রভাব, বিচার প্রশাসন, সাইবার-আইন বিধিনিষেধ, বিরোধী ও ভিন্নমত-সম্পর্কিত মামলা।"
  },
  {
    id: publicPersonIds.chowdhuryAbdullahAlMamun,
    slug: "chowdhury-abdullah-al-mamun",
    nameEn: "Chowdhury Abdullah Al-Mamun",
    nameBn: "চৌধুরী আবদুল্লাহ আল-মামুন",
    aliases: ["Abdullah Al-Mamun", "C A Al-Mamun"],
    occupation: "LAW_ENFORCEMENT_OFFICIAL",
    publicRoles: ["Former Inspector General of Police"],
    organizations: ["Bangladesh Police"],
    activePeriod: "2022-2024",
    primaryAreaEn: "Bangladesh",
    primaryAreaBn: "বাংলাদেশ",
    city: "Dhaka",
    influenceDomains: ["POLITICS", "VIOLENCE", "HUMAN_RIGHTS"],
    summaryEn:
      "Former Inspector General of Police whose post-2024 arrest and remand were publicly reported in cases related to deaths during the July-August uprising.",
    summaryBn:
      "সাবেক পুলিশ মহাপরিদর্শক, যার ২০২৪-পরবর্তী গ্রেপ্তার ও রিমান্ড জুলাই-আগস্ট গণঅভ্যুত্থানের মৃত্যুসংক্রান্ত মামলায় প্রকাশ্য প্রতিবেদনে আসে।",
    historicalIdentityEn:
      "A former national police chief discussed through law-enforcement command responsibility, unrest-period policing, and later criminal proceedings.",
    historicalIdentityBn:
      "আইনশৃঙ্খলা বাহিনীর কমান্ড দায়িত্ব, অস্থিরতা-পর্বের পুলিশিং এবং পরবর্তী ফৌজদারি প্রক্রিয়ার আলোচনায় থাকা সাবেক জাতীয় পুলিশপ্রধান।",
    whyListedEn:
      "Included because public reporting identifies him as former IGP and documents arrest, remand, and jail orders in uprising-related murder cases.",
    whyListedBn:
      "প্রকাশ্য প্রতিবেদনে তাকে সাবেক আইজিপি এবং গণঅভ্যুত্থান-সংশ্লিষ্ট হত্যা মামলায় গ্রেপ্তার, রিমান্ড ও কারাগারে পাঠানোর তথ্যসহ উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "Reporting states he was arrested after the fall of the government for alleged involvement in mass killings during the July-August uprising; those allegations remain distinct from any final court outcome.",
    overviewBn:
      "প্রতিবেদন বলছে, জুলাই-আগস্ট গণঅভ্যুত্থানের সময় গণহত্যায় alleged involvement-এর অভিযোগে সরকার পতনের পর তিনি গ্রেপ্তার হন; এসব অভিযোগকে চূড়ান্ত আদালত ফলাফল থেকে আলাদা রাখা হয়েছে।",
    patternsEn:
      "Reported themes: national police command, protest policing, remand proceedings, uprising-related murder cases.",
    patternsBn:
      "প্রতিবেদনভিত্তিক থিম: জাতীয় পুলিশ কমান্ড, প্রতিবাদ-পর্বের পুলিশিং, রিমান্ড প্রক্রিয়া, গণঅভ্যুত্থান-সংশ্লিষ্ট হত্যা মামলা।"
  },
  {
    id: publicPersonIds.hasanMahmud,
    slug: "hasan-mahmud",
    nameEn: "Hasan Mahmud",
    nameBn: "হাছান মাহমুদ",
    aliases: ["Dr Hasan Mahmud", "হাসান মাহমুদ"],
    occupation: "POLITICIAN",
    politicalAffiliation: "AWAMI_LEAGUE",
    publicRoles: ["Former Information Minister", "Former Foreign Minister"],
    organizations: ["Ministry of Information and Broadcasting", "Bangladesh Awami League"],
    activePeriod: "2019-2024",
    primaryAreaEn: "Bangladesh",
    primaryAreaBn: "বাংলাদেশ",
    city: "Dhaka",
    influenceDomains: ["POLITICS", "MEDIA", "HUMAN_RIGHTS"],
    summaryEn:
      "Former information minister publicly associated with media-policy messaging, digital-law defense, and official responses to press-freedom criticism.",
    summaryBn:
      "সাবেক তথ্যমন্ত্রী, যিনি গণমাধ্যম নীতি, ডিজিটাল আইন প্রতিরক্ষা এবং সংবাদমাধ্যমের স্বাধীনতা নিয়ে সমালোচনার সরকারি প্রতিক্রিয়ার সঙ্গে প্রকাশ্যে যুক্ত।",
    historicalIdentityEn:
      "A senior Awami League figure and former information minister discussed in the context of media regulation and press-freedom debates.",
    historicalIdentityBn:
      "গণমাধ্যম নিয়ন্ত্রণ ও সংবাদমাধ্যমের স্বাধীনতা বিতর্কে আলোচিত আওয়ামী লীগের জ্যেষ্ঠ নেতা ও সাবেক তথ্যমন্ত্রী।",
    whyListedEn:
      "Included because public records identify his ministry role and reporting documents his statements defending media-law enforcement and government press-freedom positions.",
    whyListedBn:
      "প্রকাশ্য রেকর্ডে তার মন্ত্রণালয় দায়িত্ব এবং গণমাধ্যম আইন প্রয়োগ ও সংবাদমাধ্যমের স্বাধীনতা বিষয়ে সরকারি অবস্থান রক্ষার বক্তব্য নথিভুক্ত থাকায় অন্তর্ভুক্ত।",
    overviewEn:
      "Sources include official statements defending Bangladesh's press-freedom record and news reporting on his comments after a journalist's arrest under digital-law context.",
    overviewBn:
      "উৎসের মধ্যে বাংলাদেশের সংবাদমাধ্যম স্বাধীনতার সরকারি অবস্থান রক্ষাকারী বক্তব্য এবং ডিজিটাল-আইন প্রেক্ষাপটে সাংবাদিক গ্রেপ্তারের পর তার মন্তব্য নিয়ে সংবাদ প্রতিবেদন রয়েছে।",
    patternsEn:
      "Reported themes: media regulation, official communications, Digital Security Act/Cyber Security Act debate, press-freedom criticism.",
    patternsBn:
      "প্রতিবেদনভিত্তিক থিম: গণমাধ্যম নিয়ন্ত্রণ, সরকারি যোগাযোগ, ডিজিটাল নিরাপত্তা আইন/সাইবার নিরাপত্তা আইন বিতর্ক, সংবাদমাধ্যম স্বাধীনতা সমালোচনা।"
  },
  {
    id: publicPersonIds.mohammadAliArafat,
    slug: "mohammad-ali-arafat",
    nameEn: "Mohammad Ali Arafat",
    nameBn: "মোহাম্মদ আলী আরাফাত",
    aliases: ["Mohammad A Arafat"],
    occupation: "POLITICIAN",
    politicalAffiliation: "AWAMI_LEAGUE",
    publicRoles: ["Former State Minister for Information and Broadcasting"],
    organizations: ["Ministry of Information and Broadcasting", "Bangladesh Awami League"],
    activePeriod: "2023-2024",
    primaryAreaEn: "Dhaka",
    primaryAreaBn: "ঢাকা",
    city: "Dhaka",
    influenceDomains: ["POLITICS", "MEDIA", "PATRONAGE"],
    summaryEn:
      "Former state minister for information and broadcasting, described in public reporting as an Awami League communications and foreign-relations figure.",
    summaryBn:
      "সাবেক তথ্য ও সম্প্রচার প্রতিমন্ত্রী, যাকে প্রকাশ্য প্রতিবেদনে আওয়ামী লীগের যোগাযোগ ও বৈদেশিক সম্পর্ক-সম্পর্কিত ব্যক্তি হিসেবে উল্লেখ করা হয়েছে।",
    historicalIdentityEn:
      "A former state minister and Awami League central figure involved in public messaging on press freedom, disinformation, and media policy.",
    historicalIdentityBn:
      "সংবাদমাধ্যমের স্বাধীনতা, বিভ্রান্তিকর তথ্য এবং গণমাধ্যম নীতি নিয়ে জনসমক্ষে বার্তাদানে যুক্ত সাবেক প্রতিমন্ত্রী ও আওয়ামী লীগের কেন্দ্রীয় ব্যক্তি।",
    whyListedEn:
      "Included because public reporting identifies him as state minister and a key Awami League communications figure.",
    whyListedBn:
      "প্রকাশ্য প্রতিবেদনে তাকে প্রতিমন্ত্রী এবং আওয়ামী লীগের গুরুত্বপূর্ণ যোগাযোগ-সম্পর্কিত ব্যক্তি হিসেবে উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "Reporting covers his appointment, Awami League central role, media-policy priorities, disinformation comments, and defense of the Cyber Security Act framework.",
    overviewBn:
      "প্রতিবেদনগুলোতে তার নিয়োগ, আওয়ামী লীগের কেন্দ্রীয় ভূমিকা, গণমাধ্যম নীতি অগ্রাধিকার, বিভ্রান্তিকর তথ্য বিষয়ে মন্তব্য এবং সাইবার নিরাপত্তা আইন কাঠামোর পক্ষে বক্তব্য উঠে এসেছে।",
    patternsEn:
      "Reported themes: political communications, media messaging, disinformation policy, press-freedom debate.",
    patternsBn:
      "প্রতিবেদনভিত্তিক থিম: রাজনৈতিক যোগাযোগ, গণমাধ্যম বার্তা, বিভ্রান্তিকর তথ্য নীতি, সংবাদমাধ্যম স্বাধীনতা বিতর্ক।"
  },
  {
    id: publicPersonIds.sheikhFazleNoorTaposh,
    slug: "sheikh-fazle-noor-taposh",
    nameEn: "Sheikh Fazle Noor Taposh",
    nameBn: "শেখ ফজলে নূর তাপস",
    aliases: ["Sheikh Fazle Noor Taposh MP"],
    birthYear: 1971,
    occupation: "POLITICIAN",
    politicalAffiliation: "AWAMI_LEAGUE",
    publicRoles: ["Former Mayor of Dhaka South City Corporation", "Former Member of Parliament"],
    organizations: ["Dhaka South City Corporation", "Bangladesh Awami League", "Modhumoti Bank"],
    website: "https://dscc.gov.bd/site/page/284a426a-cdb8-43be-b9ba-221294df2343/%5Bfront%5D",
    activePeriod: "2008-2024",
    primaryAreaEn: "Dhaka South",
    primaryAreaBn: "ঢাকা দক্ষিণ",
    city: "Dhaka",
    influenceDomains: ["POLITICS", "BANKING", "PUBLIC_CONTRACTS", "LAND"],
    summaryEn:
      "Former Dhaka South mayor and Awami League figure whose official biography and later reporting connect him to city administration, Modhumoti Bank, and contract/patronage allegations.",
    summaryBn:
      "সাবেক ঢাকা দক্ষিণ মেয়র ও আওয়ামী লীগ নেতা, যার সরকারি জীবনী এবং পরবর্তী প্রতিবেদনে নগর প্রশাসন, মধুমতি ব্যাংক এবং চুক্তি/পৃষ্ঠপোষকতা অভিযোগের প্রসঙ্গ আসে।",
    historicalIdentityEn:
      "A former mayor and party-linked urban political figure discussed through city governance, bank relationships, and reported patronage allegations.",
    historicalIdentityBn:
      "নগর শাসন, ব্যাংক সম্পর্ক এবং প্রতিবেদিত পৃষ্ঠপোষকতা অভিযোগের আলোচনায় থাকা সাবেক মেয়র ও দলীয় নগর রাজনীতির ব্যক্তি।",
    whyListedEn:
      "Included because official records confirm his mayoral and parliamentary roles, while public reporting raises questions about DSCC funds, Modhumoti Bank, contracts, and party-linked benefits.",
    whyListedBn:
      "সরকারি রেকর্ডে তার মেয়র ও সংসদ সদস্যের ভূমিকা নিশ্চিত এবং প্রকাশ্য প্রতিবেদনে ডিএসসিসি তহবিল, মধুমতি ব্যাংক, চুক্তি ও দলীয় সুবিধা নিয়ে প্রশ্ন ওঠায় অন্তর্ভুক্ত।",
    overviewEn:
      "The DSCC biography records his public offices. Prothom Alo reporting alleges that DSCC funds and transactions were moved toward Modhumoti Bank and raises contract/patronage concerns.",
    overviewBn:
      "ডিএসসিসি জীবনীতে তার সরকারি পদগুলো নথিভুক্ত। প্রথম আলো প্রতিবেদনে ডিএসসিসি তহবিল ও লেনদেন মধুমতি ব্যাংকের দিকে সরানোর অভিযোগ এবং চুক্তি/পৃষ্ঠপোষকতা প্রশ্ন উঠে এসেছে।",
    patternsEn:
      "Reported themes: city governance, public funds, bank relationship, contracts, party-linked patronage.",
    patternsBn:
      "প্রতিবেদনভিত্তিক থিম: নগর শাসন, জনতহবিল, ব্যাংক সম্পর্ক, চুক্তি, দল-সংশ্লিষ্ট পৃষ্ঠপোষকতা।"
  },
  {
    id: publicPersonIds.salmanFRahman,
    slug: "salman-f-rahman",
    nameEn: "Salman F. Rahman",
    nameBn: "সালমান এফ রহমান",
    aliases: ["Salman Fazlur Rahman", "Salman F Rahman"],
    occupation: "BUSINESSPERSON",
    publicRoles: [
      "Former Private Industry and Investment Adviser",
      "Vice Chairman of Beximco Group"
    ],
    organizations: ["Beximco Group", "Former Prime Minister's Office"],
    activePeriod: "2009-2026",
    primaryAreaEn: "Dhaka and national financial sector",
    primaryAreaBn: "ঢাকা ও জাতীয় আর্থিক খাত",
    city: "Dhaka",
    influenceDomains: ["POLITICS", "BANKING", "BUSINESS", "PUBLIC_CONTRACTS"],
    summaryEn:
      "Former private industry and investment adviser and Beximco vice chairman whose public record includes major banking, loan, stock-market, and money-laundering allegations.",
    summaryBn:
      "সাবেক বেসরকারি শিল্প ও বিনিয়োগ উপদেষ্টা এবং বেক্সিমকো ভাইস চেয়ারম্যান, যার প্রকাশ্য রেকর্ডে ব্যাংকিং, ঋণ, শেয়ারবাজার ও মানি লন্ডারিং অভিযোগ রয়েছে।",
    historicalIdentityEn:
      "A business and political adviser figure discussed through the relationship between political influence, large bank exposure, Beximco-linked finance, and ACC proceedings.",
    historicalIdentityBn:
      "রাজনৈতিক প্রভাব, বড় ব্যাংক ঋণ এক্সপোজার, বেক্সিমকো-সংশ্লিষ্ট অর্থায়ন এবং দুদক প্রক্রিয়ার সম্পর্ক নিয়ে আলোচিত ব্যবসায়ী ও রাজনৈতিক উপদেষ্টা।",
    whyListedEn:
      "Included because public reporting and ACC statements link him to major banking, loan, stock-market, embezzlement, and money-laundering allegations; arrest context is separately documented.",
    whyListedBn:
      "প্রকাশ্য প্রতিবেদন ও দুদক বিবৃতিতে তাকে বড় ব্যাংকিং, ঋণ, শেয়ারবাজার, আত্মসাৎ ও মানি লন্ডারিং অভিযোগের সঙ্গে যুক্ত করা হয়েছে; গ্রেপ্তার প্রসঙ্গ আলাদাভাবে নথিভুক্ত।",
    overviewEn:
      "TBS reported large loans to companies associated with him. BSS reported an ACC case alleging stock-market manipulation, bank-loan embezzlement, and money laundering.",
    overviewBn:
      "টিবিএস তার সঙ্গে সংশ্লিষ্ট কোম্পানির বড় ঋণ নিয়ে প্রতিবেদন করেছে। বাসস শেয়ারবাজার কারসাজি, ব্যাংক ঋণ আত্মসাৎ ও মানি লন্ডারিং অভিযোগে দুদক মামলার খবর প্রকাশ করেছে।",
    patternsEn:
      "Reported themes: banking exposure, political influence, corporate finance, stock market, loan fraud and money-laundering allegations.",
    patternsBn:
      "প্রতিবেদনভিত্তিক থিম: ব্যাংক ঋণ এক্সপোজার, রাজনৈতিক প্রভাব, কর্পোরেট অর্থায়ন, শেয়ারবাজার, ঋণ জালিয়াতি ও মানি লন্ডারিং অভিযোগ।"
  }
];

export const formerRegimeFigurePeople: PersonProfile[] = seeds.map((seed) => ({
  ...common,
  id: seed.id,
  slug: seed.slug,
  nameBn: seed.nameBn,
  nameEn: seed.nameEn,
  aliases: seed.aliases,
  birthYear: seed.birthYear,
  summaryBn: seed.summaryBn,
  summaryEn: seed.summaryEn,
  descriptionBn: seed.overviewBn,
  descriptionEn: seed.overviewEn,
  occupation: seed.occupation,
  politicalAffiliation: seed.politicalAffiliation,
  publicRoles: seed.publicRoles,
  organizations: seed.organizations,
  website: seed.website,
  activePeriod: seed.activePeriod,
  primaryAreaBn: seed.primaryAreaBn,
  primaryAreaEn: seed.primaryAreaEn,
  city: seed.city,
  influenceDomains: seed.influenceDomains,
  historicalIdentityBn: seed.historicalIdentityBn,
  historicalIdentityEn: seed.historicalIdentityEn,
  narrative: {
    whyListedBn: seed.whyListedBn,
    whyListedEn: seed.whyListedEn,
    historicalOverviewBn: seed.overviewBn,
    historicalOverviewEn: seed.overviewEn,
    riseToPowerBn:
      "প্রকাশ্য উৎসে ভূমিকা ও পদ নিশ্চিত করা হয়েছে; বিতর্ক বা অভিযোগ আলাদা উৎস-সমর্থিত evidence layer হিসেবে পড়তে হবে।",
    riseToPowerEn:
      "Public roles are source-confirmed; controversies or allegations must be read separately as source-backed evidence-layer material.",
    powerBaseBn: seed.primaryAreaBn,
    powerBaseEn: seed.primaryAreaEn,
    documentedPatternsBn: seed.patternsBn,
    documentedPatternsEn: seed.patternsEn,
    historicalImpactBn:
      "জনস্বার্থের কারণ হলো রাষ্ট্রীয় প্রতিষ্ঠান, আইনশৃঙ্খলা, গণমাধ্যম, নগর শাসন বা আর্থিক খাতে ক্ষমতার ব্যবহার কীভাবে নথিতে আলোচিত হয়েছে তা বোঝা।",
    historicalImpactEn:
      "The public-interest value is understanding how power in state institutions, policing, media, urban governance, or finance is discussed in records.",
    publicReputationBn:
      "প্রোফাইলটি উৎসের ভাষা অনুসরণ করে; সমালোচনা, অভিযোগ, মামলা, গ্রেপ্তার, দণ্ড বা খালাস আলাদা status হিসেবে পড়তে হবে।",
    publicReputationEn:
      "The profile follows source language; criticism, allegation, case, arrest, conviction, or acquittal must be read as separate statuses.",
    legacyBn:
      "পরবর্তী ধাপে প্রতিটি দাবি, মামলা, আদালত আদেশ, জবাব বা সংশোধন আলাদা structured record হিসেবে যুক্ত করা উচিত।",
    legacyEn:
      "Next steps should model each claim, case, court order, response, or correction as a separate structured record.",
    featuredClaimIds: [],
    featuredRelationshipIds: [],
    featuredIncidentIds: []
  }
}));
