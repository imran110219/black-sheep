import type { InfluenceDomain } from "@/domain/claim";
import type { PersonProfile } from "@/domain/person";
import { publicPersonIds } from "../ids";

type TopTerrorSeed = {
  id: string;
  slug: string;
  nameEn: string;
  nameBn: string;
  aliases: string[];
  birthYear?: number;
  summaryEn: string;
  summaryBn: string;
  publicRoles: string[];
  activePeriod: string;
  primaryAreaEn: string;
  primaryAreaBn: string;
  city: string;
  influenceDomains: InfluenceDomain[];
  historicalIdentityEn: string;
  historicalIdentityBn: string;
  whyListedEn: string;
  whyListedBn: string;
  overviewEn: string;
  overviewBn: string;
};

const common = {
  isDemo: false,
  occupation: "UNDERWORLD_FIGURE",
  country: "Bangladesh",
  politicalAffiliation: undefined,
  organizations: [],
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

const seeds: TopTerrorSeed[] = [
  {
    id: publicPersonIds.swedenAslam,
    slug: "sweden-aslam",
    nameEn: "Sweden Aslam",
    nameBn: "সুইডেন আসলাম",
    aliases: ["Sheikh Mohammad Aslam", "শেখ মোহাম্মদ আসলাম"],
    birthYear: 1962,
    summaryEn:
      "A Dhaka underworld figure reported by Bangladeshi media as one of the 23 top criminals named in the early 2000s.",
    summaryBn:
      "বাংলাদেশি সংবাদমাধ্যমে ২০০০-এর দশকের শুরুতে তালিকাভুক্ত ২৩ শীর্ষ অপরাধীর একজন হিসেবে আলোচিত ঢাকার আন্ডারওয়ার্ল্ড ব্যক্তি।",
    publicRoles: ["Reported top-listed criminal"],
    activePeriod: "1980s-2024",
    primaryAreaEn: "Tejgaon, Dhaka",
    primaryAreaBn: "তেজগাঁও, ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "PATRONAGE", "LAND"],
    historicalIdentityEn:
      "Reported in public records and media coverage as a long-running Dhaka underworld figure associated with murder cases, bail proceedings, and prison history.",
    historicalIdentityBn:
      "প্রকাশ্য সংবাদ ও রেকর্ডে হত্যা মামলা, জামিন প্রক্রিয়া ও দীর্ঘ কারাবাসের ইতিহাসসহ ঢাকার আন্ডারওয়ার্ল্ডের পুরনো ব্যক্তি হিসেবে আলোচিত।",
    whyListedEn:
      "Included because public reporting identifies him as one of Bangladesh's early-2000s top-listed criminals and documents his release on bail in 2024.",
    whyListedBn:
      "প্রকাশ্য প্রতিবেদনে তাকে ২০০০-এর দশকের শুরুর শীর্ষ তালিকাভুক্ত অপরাধীদের একজন এবং ২০২৪ সালে জামিনে মুক্ত ব্যক্তি হিসেবে উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "Media reports state that he faced multiple cases, including murder cases, and was released from Kashimpur High-Security Central Jail on bail in September 2024.",
    overviewBn:
      "সংবাদ প্রতিবেদনে বলা হয়েছে, তার বিরুদ্ধে হত্যাসহ একাধিক মামলা ছিল এবং ২০২৪ সালের সেপ্টেম্বরে তিনি কাশিমপুর হাই সিকিউরিটি কেন্দ্রীয় কারাগার থেকে জামিনে মুক্ত হন।"
  },
  {
    id: publicPersonIds.subrataBain,
    slug: "subrata-bain",
    nameEn: "Subrata Bain",
    nameBn: "সুব্রত বাইন",
    aliases: ["Subroto Bain", "Trimati Subrata Bain", "Fateh Ali"],
    birthYear: 1967,
    summaryEn:
      "A reported leader of Dhaka's Seven Star group and one of the country's top-listed criminals.",
    summaryBn:
      "ঢাকার সেভেন স্টার গ্রুপের কথিত নেতা এবং দেশের শীর্ষ তালিকাভুক্ত অপরাধীদের একজন হিসেবে সংবাদমাধ্যমে আলোচিত।",
    publicRoles: ["Reported Seven Star group leader"],
    activePeriod: "1990s-2025",
    primaryAreaEn: "Moghbazar, Dhaka",
    primaryAreaBn: "মগবাজার, ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "PUBLIC_CONTRACTS", "LAND"],
    historicalIdentityEn:
      "Public reports describe him as a central figure in the Seven Star group, with law-enforcement references to murder, extortion, tender manipulation, and Interpol notice history.",
    historicalIdentityBn:
      "প্রকাশ্য প্রতিবেদনে তাকে সেভেন স্টার গ্রুপের কেন্দ্রীয় ব্যক্তি হিসেবে উল্লেখ করা হয়; হত্যা, চাঁদাবাজি, টেন্ডার নিয়ন্ত্রণ ও ইন্টারপোল নোটিশের ইতিহাসও আলোচিত।",
    whyListedEn:
      "Included because multiple public reports identify him as a top-listed criminal and document his 2025 arrest with Molla Masud.",
    whyListedBn:
      "একাধিক প্রকাশ্য প্রতিবেদনে তাকে শীর্ষ তালিকাভুক্ত অপরাধী এবং ২০২৫ সালে মোল্লা মাসুদের সঙ্গে গ্রেপ্তার ব্যক্তি হিসেবে উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "Reports link him to the Seven Star group, Moghbazar-area criminal networks, a life sentence in a murder case, and arrests in India and Bangladesh.",
    overviewBn:
      "প্রতিবেদনগুলো তাকে সেভেন স্টার গ্রুপ, মগবাজারকেন্দ্রিক অপরাধ নেটওয়ার্ক, হত্যা মামলায় সাজা এবং ভারত ও বাংলাদেশে গ্রেপ্তারের ইতিহাসের সঙ্গে যুক্ত করে।"
  },
  {
    id: publicPersonIds.jisanAhmed,
    slug: "jisan-ahmed",
    nameEn: "Jisan Ahmed",
    nameBn: "জিসান আহমেদ",
    aliases: ["Zeesan Ahmed", "Ali Akbar Chowdhury", "Zeesan Ahmed Monty"],
    summaryEn:
      "A Dhaka underworld figure reported as a top-listed fugitive and arrested in Dubai in 2019.",
    summaryBn:
      "ঢাকার আন্ডারওয়ার্ল্ডের একজন ব্যক্তি, যাকে শীর্ষ তালিকাভুক্ত পলাতক হিসেবে এবং ২০১৯ সালে দুবাইয়ে গ্রেপ্তার ব্যক্তি হিসেবে সংবাদমাধ্যমে উল্লেখ করা হয়।",
    publicRoles: ["Reported top-listed fugitive"],
    activePeriod: "2001-2019",
    primaryAreaEn: "Gulshan, Banani, Badda and Motijheel, Dhaka",
    primaryAreaBn: "গুলশান, বনানী, বাড্ডা ও মতিঝিল, ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "PUBLIC_CONTRACTS", "BUSINESS"],
    historicalIdentityEn:
      "Public reports describe him as a fugitive top-listed criminal connected to extortion, tender manipulation, target killings, and Dubai extradition efforts.",
    historicalIdentityBn:
      "প্রকাশ্য প্রতিবেদনে তাকে চাঁদাবাজি, টেন্ডার নিয়ন্ত্রণ, টার্গেট কিলিং এবং দুবাই থেকে ফেরত আনার প্রক্রিয়ার সঙ্গে যুক্ত পলাতক শীর্ষ তালিকাভুক্ত অপরাধী হিসেবে উল্লেখ করা হয়।",
    whyListedEn:
      "Included because police-attributed reporting says he was among the 23 notorious criminals listed in 2001 and was arrested in Dubai.",
    whyListedBn:
      "পুলিশ সূত্রভিত্তিক প্রতিবেদনে বলা হয়েছে, তিনি ২০০১ সালের ২৩ শীর্ষ অপরাধীর তালিকায় ছিলেন এবং দুবাইয়ে গ্রেপ্তার হন; তাই অন্তর্ভুক্ত।",
    overviewEn:
      "Reports state that he fled Bangladesh, allegedly used the name Ali Akbar Chowdhury, and came back into public attention after anti-corruption drives in 2019.",
    overviewBn:
      "প্রতিবেদনে বলা হয়েছে, তিনি দেশ ছাড়েন, আলী আকবর চৌধুরী নাম ব্যবহার করেন বলে অভিযোগ, এবং ২০১৯ সালের অভিযানের পর আবার আলোচনায় আসেন।"
  },
  {
    id: publicPersonIds.khandakerTanvirulIslamJoy,
    slug: "khandaker-tanvirul-islam-joy",
    nameEn: "Khandaker Tanvirul Islam Joy",
    nameBn: "খন্দকার তানভীরুল ইসলাম জয়",
    aliases: ["Tanvir Islam Joy", "Tanveer Islam Khandakar"],
    birthYear: 1967,
    summaryEn:
      "A reported Seven Star Group leader who appeared in Bangladesh Police most-wanted records and later in a Daily Star/Global News investigation.",
    summaryBn:
      "সেভেন স্টার গ্রুপের কথিত নেতা, যার নাম বাংলাদেশ পুলিশের মোস্ট ওয়ান্টেড রেকর্ড এবং ডেইলি স্টার/গ্লোবাল নিউজ অনুসন্ধানে আসে।",
    publicRoles: ["Reported Seven Star group leader"],
    activePeriod: "1990s-2019",
    primaryAreaEn: "Mohammadpur, Dhanmondi and Hazaribagh, Dhaka",
    primaryAreaBn: "মোহাম্মদপুর, ধানমন্ডি ও হাজারীবাগ, ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "BUSINESS", "PATRONAGE"],
    historicalIdentityEn:
      "Reported as a Seven Star leader whose identity and alleged overseas presence were examined in a cross-border media investigation.",
    historicalIdentityBn:
      "সেভেন স্টার গ্রুপের কথিত নেতা হিসেবে আলোচিত; তার পরিচয় ও বিদেশে অবস্থানের অভিযোগ নিয়ে সীমান্তপারের সংবাদ অনুসন্ধান প্রকাশিত হয়।",
    whyListedEn:
      "Included because public reporting identifies him as a Seven Star leader and one of Bangladesh Police's most-wanted criminals.",
    whyListedBn:
      "প্রকাশ্য প্রতিবেদনে তাকে সেভেন স্টার নেতা এবং বাংলাদেশ পুলিশের মোস্ট ওয়ান্টেড অপরাধীদের একজন হিসেবে উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "The Daily Star and Global News reported similarities between him and an Ontario-based businessman, while noting disputes and fingerprint questions.",
    overviewBn:
      "ডেইলি স্টার ও গ্লোবাল নিউজ অন্টারিওভিত্তিক এক ব্যবসায়ীর সঙ্গে তার সাদৃশ্য নিয়ে প্রতিবেদন করে; সেখানে বিরোধ ও ফিঙ্গারপ্রিন্ট প্রশ্নও উল্লেখ ছিল।"
  },
  {
    id: publicPersonIds.kalaJahangir,
    slug: "kala-jahangir",
    nameEn: "Kala Jahangir",
    nameBn: "কালা জাহাঙ্গীর",
    aliases: ["Ferdous alias Kala Jahangir"],
    summaryEn:
      "A fugitive top-listed criminal named in public reporting on the Saidur Rahman Newton murder verdict.",
    summaryBn:
      "সাইদুর রহমান নিউটন হত্যা মামলার রায়সংক্রান্ত প্রকাশ্য প্রতিবেদনে নাম আসা পলাতক শীর্ষ তালিকাভুক্ত অপরাধী।",
    publicRoles: ["Reported top-listed criminal"],
    activePeriod: "1990s-2006",
    primaryAreaEn: "Mirpur and Old Dhaka",
    primaryAreaBn: "মিরপুর ও পুরান ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "LAND", "PATRONAGE"],
    historicalIdentityEn:
      "Public reporting links him to Dhaka underworld networks and court verdicts in high-profile murder cases.",
    historicalIdentityBn:
      "প্রকাশ্য প্রতিবেদন তাকে ঢাকার আন্ডারওয়ার্ল্ড নেটওয়ার্ক এবং আলোচিত হত্যা মামলার আদালত রায়ের সঙ্গে যুক্ত করে।",
    whyListedEn:
      "Included because court reporting says he was sentenced to death in the Saidur Rahman Newton murder case and remained fugitive.",
    whyListedBn:
      "আদালত প্রতিবেদনে বলা হয়েছে, সাইদুর রহমান নিউটন হত্যা মামলায় তার মৃত্যুদণ্ড হয় এবং তিনি পলাতক ছিলেন; তাই অন্তর্ভুক্ত।",
    overviewEn:
      "Daily Star and bdnews24 reports identify him among death-sentence convicts in the Newton murder case and as a top-listed criminal.",
    overviewBn:
      "ডেইলি স্টার ও বিডিনিউজ২৪ প্রতিবেদনে নিউটন হত্যা মামলার মৃত্যুদণ্ডপ্রাপ্তদের মধ্যে এবং শীর্ষ তালিকাভুক্ত অপরাধী হিসেবে তার নাম উল্লেখ করা হয়।"
  },
  {
    id: publicPersonIds.killerAbbas,
    slug: "killer-abbas",
    nameEn: "Killer Abbas",
    nameBn: "কিলার আব্বাস",
    aliases: ["Abbas Ali", "Md Abbas Ali"],
    summaryEn:
      "A Dhaka underworld figure reported as a top-listed criminal and released from Kashimpur jail in 2024.",
    summaryBn:
      "ঢাকার আন্ডারওয়ার্ল্ডের একজন ব্যক্তি, যাকে শীর্ষ তালিকাভুক্ত অপরাধী এবং ২০২৪ সালে কাশিমপুর কারাগার থেকে মুক্ত ব্যক্তি হিসেবে উল্লেখ করা হয়।",
    publicRoles: ["Reported top-listed criminal"],
    activePeriod: "2001-2024",
    primaryAreaEn: "Mirpur, Dhaka",
    primaryAreaBn: "মিরপুর, ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "LAND", "BUSINESS"],
    historicalIdentityEn:
      "Public reports describe Abbas Ali, known as Killer Abbas, as a long-incarcerated top terror linked in reporting to Mirpur-area influence.",
    historicalIdentityBn:
      "প্রকাশ্য প্রতিবেদনে আব্বাস আলী ওরফে কিলার আব্বাসকে দীর্ঘদিন কারাবন্দী শীর্ষ সন্ত্রাসী এবং মিরপুর অঞ্চলের প্রভাবের সঙ্গে আলোচিত ব্যক্তি বলা হয়েছে।",
    whyListedEn:
      "Included because public reports identify him as a top terror, describe his 2003 arrest, and document release from jail in 2024.",
    whyListedBn:
      "প্রকাশ্য প্রতিবেদনে তাকে শীর্ষ সন্ত্রাসী, ২০০৩ সালের গ্রেপ্তার এবং ২০২৪ সালে কারামুক্তির তথ্যসহ উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "Reports state that he was arrested in a shooting case in 2003 and was later released from Kashimpur Central Jail-2.",
    overviewBn:
      "প্রতিবেদনে বলা হয়েছে, ২০০৩ সালে গুলির ঘটনায় দায়ের মামলায় তিনি গ্রেপ্তার হন এবং পরে কাশিমপুর কেন্দ্রীয় কারাগার-২ থেকে মুক্ত হন।"
  },
  {
    id: publicPersonIds.ershadShikdar,
    slug: "ershad-shikdar",
    nameEn: "Ershad Shikdar",
    nameBn: "এরশাদ শিকদার",
    aliases: ["Ershad Sikder"],
    summaryEn:
      "A Khulna criminal figure convicted in murder cases and executed in 2004 after court and clemency proceedings.",
    summaryBn:
      "খুলনার অপরাধ জগতের ব্যক্তি, যিনি হত্যা মামলায় দণ্ডিত হন এবং আদালত ও ক্ষমা প্রক্রিয়ার পর ২০০৪ সালে মৃত্যুদণ্ড কার্যকর হয়।",
    publicRoles: ["Convicted criminal"],
    activePeriod: "1990s-2004",
    primaryAreaEn: "Khulna",
    primaryAreaBn: "খুলনা",
    city: "Khulna",
    influenceDomains: ["VIOLENCE", "BUSINESS", "PATRONAGE"],
    historicalIdentityEn:
      "Documented in court and media reporting as a convicted Khulna crime figure whose death sentence was upheld and carried out in 2004.",
    historicalIdentityBn:
      "আদালত ও সংবাদ প্রতিবেদনে খুলনার দণ্ডিত অপরাধী হিসেবে নথিভুক্ত, যার মৃত্যুদণ্ড বহাল থাকে এবং ২০০৪ সালে কার্যকর হয়।",
    whyListedEn:
      "Included because public records report conviction, death sentence, rejected clemency, and execution.",
    whyListedBn:
      "দণ্ড, মৃত্যুদণ্ড, ক্ষমা আবেদন প্রত্যাখ্যান এবং মৃত্যুদণ্ড কার্যকরের প্রকাশ্য রেকর্ড থাকায় অন্তর্ভুক্ত।",
    overviewEn:
      "Daily Star archive reporting states that his death sentence was fixed after presidential rejection of clemency; VOA Bangla reported his execution in Khulna District Jail.",
    overviewBn:
      "ডেইলি স্টার আর্কাইভে ক্ষমা আবেদন প্রত্যাখ্যানের পর মৃত্যুদণ্ডের তারিখ নির্ধারণের কথা বলা হয়; ভয়েস অফ আমেরিকা বাংলা খুলনা জেলা কারাগারে মৃত্যুদণ্ড কার্যকরের খবর প্রকাশ করে।"
  },
  {
    id: publicPersonIds.mollaMasud,
    slug: "molla-masud",
    nameEn: "Molla Masud",
    nameBn: "মোল্লা মাসুদ",
    aliases: ["Mollah Masud", "Abu Rasel Masud", "Mullah Masud"],
    summaryEn:
      "A reported Seven Star group member and top-listed criminal arrested in India in 2015 and Bangladesh in 2025.",
    summaryBn:
      "সেভেন স্টার গ্রুপের কথিত সদস্য এবং শীর্ষ তালিকাভুক্ত অপরাধী, যিনি ২০১৫ সালে ভারতে এবং ২০২৫ সালে বাংলাদেশে গ্রেপ্তার হন বলে সংবাদমাধ্যমে উল্লেখ।",
    publicRoles: ["Reported Seven Star group member"],
    activePeriod: "1990s-2025",
    primaryAreaEn: "Moghbazar, Dhaka",
    primaryAreaBn: "মগবাজার, ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "PUBLIC_CONTRACTS", "PATRONAGE"],
    historicalIdentityEn:
      "Public reports identify him as a Seven Star member, a most-wanted criminal, and an associate arrested with Subrata Bain.",
    historicalIdentityBn:
      "প্রকাশ্য প্রতিবেদনে তাকে সেভেন স্টার সদস্য, মোস্ট ওয়ান্টেড অপরাধী এবং সুব্রত বাইনের সঙ্গে গ্রেপ্তার সহযোগী হিসেবে উল্লেখ করা হয়।",
    whyListedEn:
      "Included because Bangladesh Police-attributed reports and later media reports document red notice history, cases, and arrests.",
    whyListedBn:
      "বাংলাদেশ পুলিশ সূত্রভিত্তিক প্রতিবেদন ও পরবর্তী সংবাদে রেড নোটিশের ইতিহাস, মামলা ও গ্রেপ্তারের তথ্য থাকায় অন্তর্ভুক্ত।",
    overviewEn:
      "Reports state he was second-in-command in the Moghbazar-based Seven Star group, fled to India after the 2001 most-wanted list, and was arrested in 2015 and 2025.",
    overviewBn:
      "প্রতিবেদনগুলো বলছে, তিনি মগবাজারভিত্তিক সেভেন স্টার গ্রুপের দ্বিতীয় সারির নেতা ছিলেন, ২০০১ সালের মোস্ট ওয়ান্টেড তালিকার পর ভারতে পালান এবং ২০১৫ ও ২০২৫ সালে গ্রেপ্তার হন।"
  },
  {
    id: publicPersonIds.picchiHannan,
    slug: "picchi-hannan",
    nameEn: "Picchi Hannan",
    nameBn: "পিচ্চি হান্নান",
    aliases: ["Pichchi Hannan", "Mohammad Hannan"],
    summaryEn:
      "A listed criminal reported killed in RAB custody-related crossfire in 2004 after arrest and remand.",
    summaryBn:
      "তালিকাভুক্ত অপরাধী, যিনি গ্রেপ্তার ও রিমান্ডের পর ২০০৪ সালে র‍্যাবের কথিত ক্রসফায়ারে নিহত হন বলে প্রতিবেদন।",
    publicRoles: ["Reported top-listed criminal"],
    activePeriod: "2001-2004",
    primaryAreaEn: "Mirpur, Agargaon and Uttara, Dhaka",
    primaryAreaBn: "মিরপুর, আগারগাঁও ও উত্তরা, ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "BUSINESS", "PATRONAGE"],
    historicalIdentityEn:
      "Public reporting and academic work identify him as one of the 23 top criminals and an early high-profile RAB crossfire death.",
    historicalIdentityBn:
      "প্রকাশ্য প্রতিবেদন ও একাডেমিক গবেষণায় তাকে ২৩ শীর্ষ অপরাধীর একজন এবং র‍্যাবের প্রথমদিকের আলোচিত ক্রসফায়ার মৃত্যুর ঘটনা হিসেবে উল্লেখ করা হয়।",
    whyListedEn:
      "Included because public reports document his listing, arrest, pending cases, remand, and death in a claimed crossfire.",
    whyListedBn:
      "তালিকাভুক্তি, গ্রেপ্তার, চলমান মামলা, রিমান্ড এবং কথিত ক্রসফায়ারে মৃত্যুর প্রকাশ্য রেকর্ড থাকায় অন্তর্ভুক্ত।",
    overviewEn:
      "Daily Star archives reported that he had 11 pending cases and was killed during a RAB operation; academic literature later discussed the case in the context of RAB crossfire deaths.",
    overviewBn:
      "ডেইলি স্টার আর্কাইভে তার বিরুদ্ধে ১১টি চলমান মামলা এবং র‍্যাব অভিযানে মৃত্যুর কথা বলা হয়; পরবর্তী একাডেমিক সাহিত্য ঘটনাটি র‍্যাব ক্রসফায়ার প্রসঙ্গে আলোচনা করে।"
  },
  {
    id: publicPersonIds.tokaiSagar,
    slug: "tokai-sagar",
    nameEn: "Tokai Sagar",
    nameBn: "টোকাই সাগর",
    aliases: ["Aminur Rasul Sagar", "Amin Rasul Sagor", "Tokai Sagor"],
    summaryEn:
      "A reported co-leader of the Seven Star gang named in public reporting on Dhaka underworld networks.",
    summaryBn:
      "ঢাকার আন্ডারওয়ার্ল্ড নেটওয়ার্ক নিয়ে প্রকাশ্য প্রতিবেদনে সেভেন স্টার গ্যাংয়ের কথিত সহ-নেতা হিসেবে উল্লেখিত ব্যক্তি।",
    publicRoles: ["Reported Seven Star group co-leader"],
    activePeriod: "1990s-2025",
    primaryAreaEn: "Dhaka",
    primaryAreaBn: "ঢাকা",
    city: "Dhaka",
    influenceDomains: ["VIOLENCE", "PUBLIC_CONTRACTS", "BUSINESS"],
    historicalIdentityEn:
      "Public reporting identifies Amin Rasul Sagor, known as Tokai Sagor, as a co-leader of the Seven Star gang associated with extortion, violent turf wars, and tender manipulation.",
    historicalIdentityBn:
      "প্রকাশ্য প্রতিবেদনে আমিন রাসুল সাগর ওরফে টোকাই সাগরকে চাঁদাবাজি, সহিংস আধিপত্য সংঘর্ষ ও টেন্ডার নিয়ন্ত্রণের সঙ্গে যুক্ত সেভেন স্টার গ্যাংয়ের সহ-নেতা বলা হয়েছে।",
    whyListedEn:
      "Included because multiple reports on the Seven Star group name him as a co-leader or overseas top terror.",
    whyListedBn:
      "সেভেন স্টার গ্রুপ নিয়ে একাধিক প্রতিবেদনে তাকে সহ-নেতা বা বিদেশে থাকা শীর্ষ সন্ত্রাসী হিসেবে উল্লেখ করায় অন্তর্ভুক্ত।",
    overviewEn:
      "Reports connect him to the Seven Star group; a Prothom Alo report also cited law-enforcement sources saying Aminur Rasul Sagar alias Tokai Sagar was staying in the US.",
    overviewBn:
      "প্রতিবেদনগুলো তাকে সেভেন স্টার গ্রুপের সঙ্গে যুক্ত করে; প্রথম আলোও আইনশৃঙ্খলা সূত্রের বরাতে আমিনুর রাসুল সাগর ওরফে টোকাই সাগরের যুক্তরাষ্ট্রে থাকার কথা উল্লেখ করে।"
  }
];

export const topTerrorPeople: PersonProfile[] = seeds.map((seed) => ({
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
  publicRoles: seed.publicRoles,
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
      "প্রকাশ্য উৎসে এই অংশটি পূর্ণাঙ্গভাবে যাচাই করা হয়নি; প্রোফাইলটি আপাতত তালিকাভুক্তি, আদালত/আইনশৃঙ্খলা রেকর্ড ও সংবাদ প্রতিবেদনকে আলাদা রাখে।",
    riseToPowerEn:
      "This section is not fully verified from public sources yet; the profile currently separates listing, court/law-enforcement records, and news reports.",
    powerBaseBn: seed.primaryAreaBn,
    powerBaseEn: seed.primaryAreaEn,
    documentedPatternsBn:
      "প্রতিবেদনভিত্তিক থিম: সহিংসতা, চাঁদাবাজি, টেন্ডার বা এলাকা-ভিত্তিক প্রভাব; আদালতের ফলাফল থাকলে তা আলাদা করে দেখাতে হবে।",
    documentedPatternsEn:
      "Reported themes include violence, extortion, tender or area-based influence; court outcomes must be shown separately where available.",
    historicalImpactBn:
      "এই ধরনের প্রোফাইলের জনস্বার্থ হলো নগর অপরাধ, রাজনৈতিক পৃষ্ঠপোষকতা, আইনশৃঙ্খলা অভিযান ও আদালত প্রক্রিয়ার ইতিহাস বোঝা।",
    historicalImpactEn:
      "The public-interest value is understanding urban crime, political patronage, law-enforcement operations, and court-process history.",
    publicReputationBn:
      "প্রোফাইলটি সংবাদ ও প্রকাশ্য রেকর্ডের ভাষা অনুসরণ করে; অভিযোগ, মামলা, দণ্ড ও মৃত্যুদণ্ড আলাদা status হিসেবে পড়তে হবে।",
    publicReputationEn:
      "The profile follows source language; allegations, cases, convictions, and executions must be read as separate statuses.",
    legacyBn:
      "পরবর্তী পর্যায়ে প্রতিটি মামলা, দাবি, আদালত রায়, আপিল, খালাস বা প্রত্যাহার আলাদা evidence layer-এ যুক্ত করা উচিত।",
    legacyEn:
      "Next steps should add each case, claim, judgment, appeal, acquittal, or withdrawal in the evidence layer.",
    featuredClaimIds: [],
    featuredRelationshipIds: [],
    featuredIncidentIds: []
  }
}));
