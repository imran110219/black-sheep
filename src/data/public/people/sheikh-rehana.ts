import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const sheikhRehana = createPublicPerson({
  id: publicPersonIds.sheikhRehana,
  slug: "sheikh-rehana",
  nameEn: "Sheikh Rehana",
  nameBn: "শেখ রেহানা",
  aliases: ["Rehana Siddiq", "Sheikh Rehana Siddiq"],
  occupation: "POLITICAL_FAMILY_MEMBER",
  politicalAffiliation: "AWAMI_LEAGUE",
  publicRoles: ["Younger sister of Sheikh Hasina"],
  organizations: ["Sheikh family"],
  activePeriod: "2025-2026",
  primaryAreaEn: "Bangladesh and United Kingdom",
  primaryAreaBn: "বাংলাদেশ ও যুক্তরাজ্য",
  city: "Dhaka",
  influenceDomains: ["FAMILY_NETWORK", "LAND", "POLITICS"],
  summaryEn:
    "Sheikh Hasina's younger sister, sentenced in absentia in a Purbachal plot-allocation corruption case according to court reporting.",
  summaryBn:
    "শেখ হাসিনার ছোট বোন, court reporting অনুযায়ী Purbachal plot-allocation corruption case-এ in absentia দণ্ডপ্রাপ্ত।",
  historicalIdentityEn:
    "A member of the Sheikh family discussed through ACC Purbachal plot-allocation cases and verdict reporting.",
  historicalIdentityBn:
    "ACC Purbachal plot-allocation cases ও verdict reporting-এ আলোচিত শেখ পরিবারের সদস্য।",
  whyListedEn:
    "Included because BSS and Daily Star report that a Dhaka court sentenced her in a Purbachal plot-allocation corruption case.",
  whyListedBn:
    "BSS ও Daily Star reporting অনুযায়ী Dhaka court তাকে Purbachal plot-allocation corruption case-এ দণ্ড দিয়েছে বলে অন্তর্ভুক্ত।",
  overviewEn:
    "The profile records court-reported conviction/sentence status and should be read with any later appeal, acquittal, or correction if reported.",
  overviewBn:
    "প্রোফাইল court-reported conviction/sentence status রাখে; পরে appeal, acquittal বা correction থাকলে তা আলাদা করে পড়তে হবে।",
  patternsEn:
    "Reported themes: Purbachal plot allocation, family-network case, in-absentia sentence.",
  patternsBn:
    "প্রতিবেদনভিত্তিক থিম: Purbachal plot allocation, family-network case, in-absentia sentence।"
});
