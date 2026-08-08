import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const salahuddinMahmud = createPublicPerson({
  id: publicPersonIds.salahuddinMahmud,
  slug: "salahuddin-mahmud",
  nameEn: "Salahuddin Mahmud",
  nameBn: "সালাহউদ্দিন মাহমুদ",
  aliases: ["Salahuddin Mahmud"],
  occupation: "PUBLIC_OFFICIAL",
  publicRoles: ["Public figure named in ICT reporting"],
  activePeriod: "2013-2026",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["GOVERNMENT", "HUMAN_RIGHTS"],
  summaryEn: "Public figure named in reporting on the Shapla Chattar tribunal proceeding.",
  summaryBn: "শাপলা চত্বর ট্রাইব্যুনাল কার্যক্রমের প্রতিবেদনে নাম থাকা জনপরিচিত ব্যক্তি।",
  historicalIdentityEn:
    "The available event sources identify him through the tribunal proceeding; further biography should be added only after identity verification.",
  historicalIdentityBn:
    "উপলব্ধ event sources তাকে ট্রাইব্যুনাল কার্যক্রমের মাধ্যমে চিহ্নিত করে; পরিচয় যাচাই ছাড়া অতিরিক্ত biography যোগ করা হয়নি।",
  whyListedEn: "Included because the cited reports name him in the proceeding.",
  whyListedBn: "উল্লিখিত প্রতিবেদনে কার্যক্রমে তার নাম থাকায় অন্তর্ভুক্ত।",
  overviewEn:
    "Identity and public-role details remain intentionally limited pending stronger independent sources.",
  overviewBn:
    "আরও শক্তিশালী independent source না পাওয়া পর্যন্ত পরিচয় ও public-role details সীমিত রাখা হয়েছে।"
});
