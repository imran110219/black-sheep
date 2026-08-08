import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const farzanaRupa = createPublicPerson({
  id: publicPersonIds.farzanaRupa,
  slug: "farzana-rupa",
  nameEn: "Farzana Rupa",
  nameBn: "ফারজানা রূপা",
  aliases: ["Farzana Rupa", "Farzana Rupa Ahmed"],
  occupation: "JOURNALIST",
  publicRoles: ["Journalist", "Television presenter"],
  activePeriod: "2000-2026",
  primaryAreaEn: "Dhaka",
  primaryAreaBn: "ঢাকা",
  city: "Dhaka",
  influenceDomains: ["MEDIA", "POLITICS"],
  summaryEn:
    "Journalist and television presenter named in tribunal reporting on the Shapla Chattar proceeding.",
  summaryBn: "সাংবাদিক ও টেলিভিশন উপস্থাপক; শাপলা চত্বর ট্রাইব্যুনাল প্রতিবেদনে নাম এসেছে।",
  historicalIdentityEn:
    "A public media figure whose profile separates professional role from the reported legal proceeding.",
  historicalIdentityBn: "প্রতিবেদিত আইনি কার্যক্রম থেকে পেশাগত public media role আলাদা রাখা হয়েছে।",
  whyListedEn: "Included because the cited tribunal reports name her in the proceeding.",
  whyListedBn: "উল্লিখিত ট্রাইব্যুনাল প্রতিবেদনে কার্যক্রমে তার নাম থাকায় অন্তর্ভুক্ত।",
  overviewEn: "The reported accused status is not a final finding of responsibility.",
  overviewBn: "প্রতিবেদিত accused status চূড়ান্ত দায়ের ফাইন্ডিং নয়।"
});
