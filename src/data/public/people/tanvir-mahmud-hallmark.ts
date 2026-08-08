import { publicIncidentIds, publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const tanvirMahmudHallmark = createPublicPerson({
  id: publicPersonIds.tanvirMahmudHallmark,
  slug: "tanvir-mahmud-hallmark",
  nameEn: "Tanvir Mahmud",
  nameBn: "তানভীর মাহমুদ",
  aliases: ["Hall-Mark Tanvir", "Tanvir Mahmud Hallmark"],
  occupation: "BUSINESS_PERSON",
  publicRoles: ["Managing director of Hall-Mark Group"],
  organizations: ["Hall-Mark Group", "Sonali Bank"],
  activePeriod: "2010-2026",
  primaryAreaEn: "Dhaka",
  primaryAreaBn: "ঢাকা",
  city: "Dhaka",
  influenceDomains: ["BANKING", "BUSINESS"],
  summaryEn:
    "Hall-Mark Group managing director whose public record includes conviction reporting in the Sonali Bank loan-scam proceedings.",
  summaryBn:
    "Hall-Mark Group-এর managing director, যার প্রকাশ্য রেকর্ডে Sonali Bank loan-scam proceedings-এ conviction reporting রয়েছে।",
  historicalIdentityEn:
    "A business figure central to a major state-bank loan-fraud accountability record.",
  historicalIdentityBn:
    "বড় state-bank loan-fraud accountability record-এর কেন্দ্রীয় ব্যবসায়ী ব্যক্তিত্ব।",
  whyListedEn:
    "Included because court reporting documents life-sentence outcomes involving Tanvir Mahmud, Jesmin Islam, and others in Hall-Mark/Sonali Bank cases.",
  whyListedBn:
    "Hall-Mark/Sonali Bank cases-এ তানভীর মাহমুদ, জেসমিন ইসলাম ও অন্যদের life-sentence outcomes নিয়ে court reporting থাকায় অন্তর্ভুক্ত।",
  overviewEn:
    "Daily Star and Dhaka Tribune reporting documents sentencing in a Hall-Mark loan-scam case. Other Hall-Mark allegations should be added only when linked to specific sourced proceedings.",
  overviewBn:
    "Daily Star ও Dhaka Tribune reporting Hall-Mark loan-scam case-এ sentencing document করেছে। অন্যান্য Hall-Mark allegations শুধু specific sourced proceedings থাকলে যুক্ত করা উচিত।",
  patternsEn:
    "Reported themes: state bank exposure, loan fraud, corporate group control, ACC prosecution.",
  patternsBn:
    "প্রতিবেদনভিত্তিক থিম: state bank exposure, loan fraud, corporate group control, দুদক prosecution।",
  incidentIds: [publicIncidentIds.hallmarkSonaliBankLoanScam]
});
