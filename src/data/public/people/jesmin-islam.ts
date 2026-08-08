import { publicIncidentIds, publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const jesminIslam = createPublicPerson({
  id: publicPersonIds.jesminIslam,
  slug: "jesmin-islam",
  nameEn: "Jesmin Islam",
  nameBn: "জেসমিন ইসলাম",
  aliases: ["Jasmine Islam", "Hall-Mark Jesmin"],
  occupation: "BUSINESS_PERSON",
  publicRoles: ["Chairperson of Hall-Mark Group"],
  organizations: ["Hall-Mark Group", "Sonali Bank"],
  activePeriod: "2010-2026",
  primaryAreaEn: "Dhaka",
  primaryAreaBn: "ঢাকা",
  city: "Dhaka",
  influenceDomains: ["BANKING", "BUSINESS", "FAMILY_NETWORK"],
  summaryEn:
    "Hall-Mark Group chairperson whose public record includes conviction reporting in a Sonali Bank loan-scam case.",
  summaryBn:
    "Hall-Mark Group-এর chairperson, যার প্রকাশ্য রেকর্ডে Sonali Bank loan-scam case-এ conviction reporting রয়েছে।",
  historicalIdentityEn:
    "A corporate figure connected to Bangladesh's Hall-Mark/Sonali Bank accountability record.",
  historicalIdentityBn:
    "বাংলাদেশের Hall-Mark/Sonali Bank accountability record-এর সঙ্গে যুক্ত corporate figure।",
  whyListedEn:
    "Included because public court reporting names her among those sentenced in the Hall-Mark loan-scam proceeding.",
  whyListedBn:
    "Hall-Mark loan-scam proceeding-এ সাজাপ্রাপ্তদের মধ্যে তাকে public court reporting-এ নামযুক্ত করায় অন্তর্ভুক্ত।",
  overviewEn:
    "The current record should stay limited to the sourced Hall-Mark/Sonali Bank case and related public role unless additional proceedings are researched.",
  overviewBn:
    "অতিরিক্ত proceedings গবেষণা না করা পর্যন্ত বর্তমান record sourced Hall-Mark/Sonali Bank case ও related public role-এ সীমিত রাখা উচিত।",
  patternsEn:
    "Reported themes: corporate chairperson role, state-bank loan case, conviction reporting.",
  patternsBn:
    "প্রতিবেদনভিত্তিক থিম: corporate chairperson role, state-bank loan case, conviction reporting।",
  incidentIds: [publicIncidentIds.hallmarkSonaliBankLoanScam]
});
