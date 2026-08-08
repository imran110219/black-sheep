import { publicIncidentIds, publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const mohammadRasselEvaly = createPublicPerson({
  id: publicPersonIds.mohammadRasselEvaly,
  slug: "mohammad-rassel-evaly",
  nameEn: "Mohammad Rassel",
  nameBn: "মোহাম্মদ রাসেল",
  aliases: ["Evaly Rassel", "Mohammad Russell"],
  occupation: "TECH_ENTREPRENEUR",
  publicRoles: ["Founder and CEO of Evaly"],
  organizations: ["Evaly"],
  activePeriod: "2018-2026",
  primaryAreaEn: "Dhaka",
  primaryAreaBn: "ঢাকা",
  city: "Dhaka",
  influenceDomains: ["BUSINESS", "MEDIA"],
  summaryEn:
    "Evaly founder and CEO whose public record includes e-commerce fraud case, arrest, bail, and consumer-payment controversy reporting.",
  summaryBn:
    "Evaly-এর founder ও CEO, যার প্রকাশ্য রেকর্ডে e-commerce fraud case, arrest, bail এবং consumer-payment controversy reporting রয়েছে।",
  historicalIdentityEn:
    "A digital-commerce figure tied to Bangladesh's major e-commerce consumer accountability episode.",
  historicalIdentityBn:
    "বাংলাদেশের বড় e-commerce consumer accountability episode-এর সঙ্গে যুক্ত digital-commerce figure।",
  whyListedEn:
    "Included because public reporting documents fraud cases, arrest, bail status, and regulatory controversy around Evaly customer and merchant payments.",
  whyListedBn:
    "Evaly customer ও merchant payments ঘিরে fraud cases, arrest, bail status এবং regulatory controversy নিয়ে public reporting থাকায় অন্তর্ভুক্ত।",
  overviewEn:
    "Daily Star and Dhaka Tribune reporting documents arrest and later bail status. Consumer allegations and company restructuring should be kept separate from court outcomes.",
  overviewBn:
    "Daily Star ও Dhaka Tribune reporting arrest ও পরবর্তী bail status document করেছে। Consumer allegations ও company restructuring court outcomes থেকে আলাদা রাখতে হবে।",
  patternsEn:
    "Reported themes: e-commerce, consumer payments, fraud cases, arrest and bail reporting.",
  patternsBn:
    "প্রতিবেদনভিত্তিক থিম: e-commerce, consumer payments, fraud cases, arrest and bail reporting।",
  incidentIds: [publicIncidentIds.evalyConsumerPaymentFraud]
});
