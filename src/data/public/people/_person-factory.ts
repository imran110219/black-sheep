import type { InfluenceDomain } from "@/domain/claim";
import type { PersonProfile } from "@/domain/person";

export type PublicPersonSeed = {
  id: string;
  slug: string;
  nameEn: string;
  nameBn: string;
  aliases: string[];
  birthYear?: number;
  occupation: string;
  politicalAffiliation?: string;
  publicRoles: string[];
  organizations?: string[];
  website?: string;
  activePeriod: string;
  primaryAreaEn: string;
  primaryAreaBn: string;
  city: string;
  influenceDomains: InfluenceDomain[];
  summaryEn: string;
  summaryBn: string;
  historicalIdentityEn: string;
  historicalIdentityBn: string;
  whyListedEn: string;
  whyListedBn: string;
  overviewEn: string;
  overviewBn: string;
  patternsEn?: string;
  patternsBn?: string;
  narrativeStyle?: "general" | "caseHistory";
};

const common = {
  isDemo: false,
  country: "Bangladesh",
  socialLinks: [],
  tags: [],
  caseIds: [],
  newsIds: [],
  assetIds: [],
  relationshipIds: [],
  publicationStatus: "PUBLISHED" as const,
  isActive: true,
  createdBy: "admin",
  updatedBy: "admin",
  lastVerifiedAt: "2026-08-07",
  publishedAt: "2026-08-07",
  updatedAt: "2026-08-07"
};

const generalNarrative = {
  riseToPowerBn:
    "প্রকাশ্য উৎসে ভূমিকা ও পদ নিশ্চিত করা হয়েছে; বিতর্ক বা অভিযোগ আলাদা উৎস-সমর্থিত evidence layer হিসেবে পড়তে হবে।",
  riseToPowerEn:
    "Public roles are source-confirmed; controversies or allegations must be read separately as source-backed evidence-layer material.",
  historicalImpactBn:
    "জনস্বার্থের কারণ হলো রাষ্ট্রীয় প্রতিষ্ঠান, আইনশৃঙ্খলা, গণমাধ্যম, নগর শাসন বা আর্থিক খাতে ক্ষমতার ব্যবহার কীভাবে নথিতে আলোচিত হয়েছে তা বোঝা।",
  historicalImpactEn:
    "The public-interest value is understanding how power in state institutions, policing, media, urban governance, or finance is discussed in records.",
  publicReputationBn:
    "প্রোফাইলটি উৎসের ভাষা অনুসরণ করে; সমালোচনা, অভিযোগ, মামলা, গ্রেপ্তার, দণ্ড বা খালাস আলাদা status হিসেবে পড়তে হবে।",
  publicReputationEn:
    "The profile follows source language; criticism, allegation, case, arrest, conviction, or acquittal must be read as separate statuses.",
  legacyBn:
    "পরবর্তী ধাপে প্রতিটি দাবি, মামলা, আদালত আদেশ, জবাব বা সংশোধন আলাদা structured record হিসেবে যুক্ত করা উচিত।",
  legacyEn:
    "Next steps should model each claim, case, court order, response, or correction as a separate structured record."
};

const caseHistoryNarrative = {
  riseToPowerBn:
    "প্রকাশ্য উৎসে এই অংশটি পূর্ণাঙ্গভাবে যাচাই করা হয়নি; প্রোফাইলটি আপাতত তালিকাভুক্তি, আদালত/আইনশৃঙ্খলা রেকর্ড ও সংবাদ প্রতিবেদনকে আলাদা রাখে।",
  riseToPowerEn:
    "This section is not fully verified from public sources yet; the profile currently separates listing, court/law-enforcement records, and news reports.",
  historicalImpactBn:
    "এই ধরনের প্রোফাইলের জনস্বার্থ হলো নগর অপরাধ, রাজনৈতিক পৃষ্ঠপোষকতা, আইনশৃঙ্খলা অভিযান ও আদালত প্রক্রিয়ার ইতিহাস বোঝা।",
  historicalImpactEn:
    "The public-interest value is understanding urban crime, political patronage, law-enforcement operations, and court-process history.",
  publicReputationBn:
    "প্রোফাইলটি সংবাদ ও প্রকাশ্য রেকর্ডের ভাষা অনুসরণ করে; অভিযোগ, মামলা, দণ্ড ও মৃত্যুদণ্ড আলাদা status হিসেবে পড়তে হবে।",
  publicReputationEn:
    "The profile follows source language; allegations, cases, convictions, and executions must be read as separate statuses.",
  legacyBn:
    "পরবর্তী পর্যায়ে প্রতিটি মামলা, দাবি, আদালত রায়, আপিল, খালাস বা প্রত্যাহার আলাদা evidence layer-এ যুক্ত করা উচিত।",
  legacyEn:
    "Next steps should add each case, claim, judgment, appeal, acquittal, or withdrawal in the evidence layer."
};

export function createPublicPerson(seed: PublicPersonSeed): PersonProfile {
  const narrativeDefaults =
    seed.narrativeStyle === "caseHistory" ? caseHistoryNarrative : generalNarrative;

  return {
    ...common,
    id: seed.id,
    slug: seed.slug,
    nameBn: seed.nameBn,
    nameEn: seed.nameEn,
    aliases: seed.aliases,
    birthYear: seed.birthYear,
    summaryBn: seed.summaryBn,
    summaryEn: seed.summaryEn,
    descriptionBn: seed.overviewBn,
    descriptionEn: seed.overviewEn,
    occupation: seed.occupation,
    politicalAffiliation: seed.politicalAffiliation,
    publicRoles: seed.publicRoles,
    organizations: seed.organizations ?? [],
    website: seed.website,
    activePeriod: seed.activePeriod,
    primaryAreaBn: seed.primaryAreaBn,
    primaryAreaEn: seed.primaryAreaEn,
    city: seed.city,
    influenceDomains: seed.influenceDomains,
    historicalIdentityBn: seed.historicalIdentityBn,
    historicalIdentityEn: seed.historicalIdentityEn,
    narrative: {
      whyListedBn: seed.whyListedBn,
      whyListedEn: seed.whyListedEn,
      historicalOverviewBn: seed.overviewBn,
      historicalOverviewEn: seed.overviewEn,
      riseToPowerBn: narrativeDefaults.riseToPowerBn,
      riseToPowerEn: narrativeDefaults.riseToPowerEn,
      powerBaseBn: seed.primaryAreaBn,
      powerBaseEn: seed.primaryAreaEn,
      documentedPatternsBn:
        seed.patternsBn ??
        "প্রতিবেদনভিত্তিক থিম: সহিংসতা, চাঁদাবাজি, টেন্ডার বা এলাকা-ভিত্তিক প্রভাব; আদালতের ফলাফল থাকলে তা আলাদা করে দেখাতে হবে।",
      documentedPatternsEn:
        seed.patternsEn ??
        "Reported themes include violence, extortion, tender or area-based influence; court outcomes must be shown separately where available.",
      historicalImpactBn: narrativeDefaults.historicalImpactBn,
      historicalImpactEn: narrativeDefaults.historicalImpactEn,
      publicReputationBn: narrativeDefaults.publicReputationBn,
      publicReputationEn: narrativeDefaults.publicReputationEn,
      legacyBn: narrativeDefaults.legacyBn,
      legacyEn: narrativeDefaults.legacyEn,
      featuredClaimIds: [],
      featuredRelationshipIds: [],
      featuredIncidentIds: []
    }
  };
}
