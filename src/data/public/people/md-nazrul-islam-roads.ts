import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const mdNazrulIslamRoads = createPublicPerson({
  id: publicPersonIds.mdNazrulIslamRoads,
  slug: "md-nazrul-islam-roads",
  nameEn: "Md Nazrul Islam",
  nameBn: "মো. নজরুল ইসলাম",
  aliases: [
    "Nazrul Islam Roads Secretary",
    "Former Road Transport and Highways Division secretary"
  ],
  occupation: "PUBLIC_OFFICIAL",
  publicRoles: ["Former Secretary of the Road Transport and Highways Division"],
  organizations: ["Road Transport and Highways Division"],
  activePeriod: "2018-2026",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["GOVERNMENT", "PUBLIC_CONTRACTS", "LAND"],
  summaryEn:
    "Former roads secretary named by BSS in an ACC case over Dhaka Elevated Expressway land and flat-allocation allegations.",
  summaryBn:
    "Dhaka Elevated Expressway land ও flat-allocation allegations নিয়ে ACC case-এ BSS-এ নাম থাকা সাবেক roads secretary।",
  historicalIdentityEn:
    "A road-transport administrator discussed through expressway land-use case reporting.",
  historicalIdentityBn: "expressway land-use case reporting-এ আলোচিত road-transport administrator।",
  whyListedEn:
    "Included because BSS named him among accused in the ACC expressway flat-allocation case.",
  whyListedBn:
    "ACC expressway flat-allocation case-এ accusedদের মধ্যে BSS তার নাম উল্লেখ করায় অন্তর্ভুক্ত।",
  overviewEn: "This is ACC case-reporting context, not a final finding.",
  overviewBn: "এটি ACC case-reporting context, final finding নয়।",
  patternsEn: "Reported themes: road-transport administration, expressway land-allocation case.",
  patternsBn:
    "প্রতিবেদনভিত্তিক থিম: road-transport administration, expressway land-allocation case।"
});
