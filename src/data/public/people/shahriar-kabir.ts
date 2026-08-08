import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const shahriarKabir = createPublicPerson({
  id: publicPersonIds.shahriarKabir,
  slug: "shahriar-kabir",
  nameEn: "Shahriar Kabir",
  nameBn: "শাহরিয়ার কবির",
  aliases: ["Shahriar Kabir"],
  occupation: "WRITER_JOURNALIST",
  publicRoles: ["Writer", "Journalist", "Human-rights activist"],
  activePeriod: "1980-2026",
  primaryAreaEn: "Dhaka",
  primaryAreaBn: "ঢাকা",
  city: "Dhaka",
  influenceDomains: ["MEDIA", "HUMAN_RIGHTS", "POLITICS"],
  summaryEn:
    "Writer, journalist, and human-rights activist named in tribunal reporting on the Shapla Chattar proceeding.",
  summaryBn: "লেখক, সাংবাদিক ও মানবাধিকারকর্মী; শাপলা চত্বর ট্রাইব্যুনাল প্রতিবেদনে নাম এসেছে।",
  historicalIdentityEn:
    "A public intellectual whose writing and activism have shaped debates on Bangladesh's history, secularism, and accountability.",
  historicalIdentityBn:
    "বাংলাদেশের ইতিহাস, ধর্মনিরপেক্ষতা ও জবাবদিহি নিয়ে বিতর্কে প্রভাব রাখা জনবুদ্ধিজীবী।",
  whyListedEn: "Included because the cited tribunal reports name him in the proceeding.",
  whyListedBn: "উল্লিখিত ট্রাইব্যুনাল প্রতিবেদনে কার্যক্রমে তার নাম থাকায় অন্তর্ভুক্ত।",
  overviewEn:
    "The reported legal status is separate from his public writing and civil-society role.",
  overviewBn: "প্রতিবেদিত আইনি status তার লেখক ও নাগরিক সমাজের ভূমিকা থেকে আলাদা।"
});
