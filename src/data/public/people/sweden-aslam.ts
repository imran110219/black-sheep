import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const swedenAslam = createPublicPerson({
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
    "সংবাদ প্রতিবেদনে বলা হয়েছে, তার বিরুদ্ধে হত্যাসহ একাধিক মামলা ছিল এবং ২০২৪ সালের সেপ্টেম্বরে তিনি কাশিমপুর হাই সিকিউরিটি কেন্দ্রীয় কারাগার থেকে জামিনে মুক্ত হন।",
  occupation: "UNDERWORLD_FIGURE",
  politicalAffiliation: undefined,
  organizations: [],
  narrativeStyle: "caseHistory"
});
