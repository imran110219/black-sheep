import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const shajahanKhan = createPublicPerson({
  id: publicPersonIds.shajahanKhan,
  slug: "shajahan-khan",
  nameEn: "Shajahan Khan",
  nameBn: "শাজাহান খান",
  aliases: ["Shahjahan Khan"],
  occupation: "POLITICIAN",
  politicalAffiliation: "AWAMI_LEAGUE",
  publicRoles: ["Former Shipping Minister"],
  organizations: ["Bangladesh Awami League"],
  activePeriod: "1996-2025",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["POLITICS", "GOVERNMENT", "BUSINESS"],
  summaryEn:
    "Former shipping minister named in BSS ICT reporting on the Quader-45 July Mass Uprising case.",
  summaryBn:
    "Quader-45 July Mass Uprising মামলার BSS ICT reporting-এ নাম থাকা সাবেক নৌপরিবহনমন্ত্রী।",
  historicalIdentityEn:
    "A former minister and transport-sector political figure discussed in tribunal-process reporting.",
  historicalIdentityBn:
    "tribunal-process reporting-এ আলোচিত সাবেক মন্ত্রী ও পরিবহন-খাতের রাজনৈতিক ব্যক্তিত্ব।",
  whyListedEn: "Included because BSS named him among arrested accused produced before ICT.",
  whyListedBn: "BSS তাকে ICT-তে হাজির arrested accusedদের মধ্যে উল্লেখ করায় অন্তর্ভুক্ত।",
  overviewEn: "This is proceeding-status reporting and not a final finding.",
  overviewBn: "এটি proceeding-status reporting, final finding নয়।",
  patternsEn: "Reported themes: cabinet role, transport politics, ICT proceedings.",
  patternsBn: "প্রতিবেদনভিত্তিক থিম: cabinet role, transport politics, ICT proceedings।"
});
