import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const dipuMoni = createPublicPerson({
  id: publicPersonIds.dipuMoni,
  slug: "dipu-moni",
  nameEn: "Dr. Dipu Moni",
  nameBn: "ডা. দীপু মনি",
  aliases: ["Dipu Moni"],
  occupation: "POLITICIAN",
  politicalAffiliation: "AWAMI_LEAGUE",
  publicRoles: ["Former Education Minister", "Former Foreign Minister"],
  organizations: ["Bangladesh Awami League"],
  activePeriod: "2009-2025",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["POLITICS", "GOVERNMENT"],
  summaryEn:
    "Former minister named by BSS among arrested accused produced before the ICT in the Quader-45 July Mass Uprising case.",
  summaryBn:
    "Quader-45 July Mass Uprising মামলায় ICT-তে হাজির arrested accusedদের মধ্যে BSS-এ নাম থাকা সাবেক মন্ত্রী।",
  historicalIdentityEn:
    "A former cabinet minister discussed through post-uprising tribunal-process reporting.",
  historicalIdentityBn:
    "post-uprising tribunal-process reporting-এ আলোচিত সাবেক মন্ত্রিসভার সদস্য।",
  whyListedEn:
    "Included because BSS named her among accused produced before the ICT in the July Mass Uprising case.",
  whyListedBn:
    "July Mass Uprising মামলায় ICT-তে হাজির accusedদের মধ্যে BSS তার নাম উল্লেখ করায় অন্তর্ভুক্ত।",
  overviewEn:
    "The profile records tribunal-process reporting and does not present a final finding.",
  overviewBn: "প্রোফাইলটি tribunal-process reporting রাখে; final finding উপস্থাপন করে না।",
  patternsEn: "Reported themes: ministerial role, ICT proceeding context.",
  patternsBn: "প্রতিবেদনভিত্তিক থিম: ministerial role, ICT proceeding context।"
});
