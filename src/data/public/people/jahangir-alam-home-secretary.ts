import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const jahangirAlamHomeSecretary = createPublicPerson({
  id: publicPersonIds.jahangirAlamHomeSecretary,
  slug: "jahangir-alam-home-secretary",
  nameEn: "Jahangir Alam",
  nameBn: "জাহাঙ্গীর আলম",
  aliases: ["Jahangir Alam Home Secretary", "Former Senior Secretary Jahangir Alam"],
  occupation: "PUBLIC_OFFICIAL",
  publicRoles: ["Former Senior Secretary of the Ministry of Home Affairs"],
  organizations: ["Ministry of Home Affairs"],
  activePeriod: "2022-2025",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["GOVERNMENT", "SECURITY"],
  summaryEn:
    "Former senior home secretary named by BSS among arrested accused produced before ICT in a July Mass Uprising case.",
  summaryBn:
    "July Mass Uprising মামলায় ICT-তে হাজির arrested accusedদের মধ্যে BSS-এ নাম থাকা সাবেক senior home secretary।",
  historicalIdentityEn:
    "A senior home-ministry administrator discussed through tribunal-process reporting.",
  historicalIdentityBn:
    "tribunal-process reporting-এ আলোচিত জ্যেষ্ঠ স্বরাষ্ট্র মন্ত্রণালয় প্রশাসক।",
  whyListedEn:
    "Included because BSS named Jahangir Alam among accused produced before ICT; slug clarifies this is the home-secretary figure.",
  whyListedBn:
    "BSS Jahangir Alam-কে ICT-তে হাজির accusedদের মধ্যে উল্লেখ করেছে; slug-এ home-secretary পরিচয় স্পষ্ট করা হয়েছে।",
  overviewEn:
    "This is proceeding-status reporting only and avoids conflating him with other public figures of the same name.",
  overviewBn:
    "এটি শুধু proceeding-status reporting এবং একই নামের অন্য public figures-এর সঙ্গে মেশানো হয়নি।",
  patternsEn: "Reported themes: home-ministry administration, ICT accused-list reporting.",
  patternsBn: "প্রতিবেদনভিত্তিক থিম: home-ministry administration, ICT accused-list reporting।"
});
