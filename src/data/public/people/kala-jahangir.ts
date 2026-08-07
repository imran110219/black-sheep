import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const kalaJahangir = createPublicPerson({
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
    "ডেইলি স্টার ও বিডিনিউজ২৪ প্রতিবেদনে নিউটন হত্যা মামলার মৃত্যুদণ্ডপ্রাপ্তদের মধ্যে এবং শীর্ষ তালিকাভুক্ত অপরাধী হিসেবে তার নাম উল্লেখ করা হয়।",
  occupation: "UNDERWORLD_FIGURE",
  politicalAffiliation: undefined,
  organizations: [],
  narrativeStyle: "caseHistory"
});
