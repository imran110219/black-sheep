import type { AssetRecord } from "@/domain/asset";
import type { CaseCategory, CaseRecord, LegalStatus, PersonCaseRole } from "@/domain/case";
import type {
  Area,
  ClaimRecord,
  GeographicAssociation,
  ImpactRecord,
  IncidentRecord,
  InfluenceDomain,
  Institution,
  InstitutionAssociation
} from "@/domain/claim";
import type { CorrectionRecord, SubjectResponse } from "@/domain/correction";
import type { DossierCollection } from "@/domain/dossier";
import type { NewsRecord } from "@/domain/news";
import type { Organization } from "@/domain/organization";
import type { PersonProfile } from "@/domain/person";
import type { RelationshipRecord } from "@/domain/relationship";
import type { RevisionRecord } from "@/domain/revision";
import type { SourceRecord } from "@/domain/source";
import type { Tag } from "@/domain/tag";

const id = (n: number) => `00000000-0000-4000-8000-${n.toString().padStart(12, "0")}`;

const personIds = Array.from({ length: 10 }, (_, index) => id(index + 1));
const caseIds = Array.from({ length: 12 }, (_, index) => id(101 + index));
const sourceIds = Array.from({ length: 24 }, (_, index) => id(201 + index));
const newsIds = Array.from({ length: 18 }, (_, index) => id(301 + index));
const tagIds = Array.from({ length: 12 }, (_, index) => id(401 + index));
const assetIds = Array.from({ length: 10 }, (_, index) => id(501 + index));
const relationshipIds = Array.from({ length: 12 }, (_, index) => id(601 + index));
const responseIds = Array.from({ length: 5 }, (_, index) => id(701 + index));
const areaIds = Array.from({ length: 15 }, (_, index) => id(1001 + index));
const claimIds = Array.from({ length: 20 }, (_, index) => id(1101 + index));
const incidentIds = Array.from({ length: 12 }, (_, index) => id(1201 + index));
const impactIds = Array.from({ length: 12 }, (_, index) => id(1301 + index));
const geographicAssociationIds = Array.from({ length: 20 }, (_, index) => id(1401 + index));
const institutionAssociationIds = Array.from({ length: 20 }, (_, index) => id(1501 + index));
const institutionIds = Array.from({ length: 12 }, (_, index) => id(1601 + index));
const dossierIds = Array.from({ length: 6 }, (_, index) => id(1701 + index));

const influenceDomains: InfluenceDomain[] = [
  "POLITICS",
  "GOVERNMENT",
  "BANKING",
  "LAND",
  "BUSINESS",
  "PUBLIC_CONTRACTS",
  "RELIGION",
  "MEDIA",
  "SECURITY",
  "ELECTIONS",
  "HUMAN_RIGHTS",
  "FAMILY_NETWORK",
  "OTHER"
];

export const tags: Tag[] = [
  ["public-procurement", "সরকারি ক্রয়", "Public procurement"],
  ["banking", "ব্যাংকিং", "Banking"],
  ["local-government", "স্থানীয় সরকার", "Local government"],
  ["elections", "নির্বাচন", "Elections"],
  ["audit", "অডিট", "Audit"],
  ["court-record", "আদালত নথি", "Court record"],
  ["asset-disclosure", "সম্পদ বিবরণ", "Asset disclosure"],
  ["human-rights", "মানবাধিকার", "Human rights"],
  ["administrative-action", "প্রশাসনিক ব্যবস্থা", "Administrative action"],
  ["appeal", "আপিল", "Appeal"],
  ["acquittal", "খালাস", "Acquittal"],
  ["correction", "সংশোধন", "Correction"]
].map(([slug, nameBn, nameEn], index) => ({
  id: tagIds[index],
  slug,
  nameBn,
  nameEn,
  descriptionBn: `${nameBn} সম্পর্কিত ডেমো ট্যাগ।`,
  descriptionEn: `Demo tag for ${nameEn.toLowerCase()} records.`,
  parentId: index > 6 ? tagIds[5] : undefined,
  isActive: true
}));

export const organizations: Organization[] = [
  {
    id: id(801),
    isDemo: true,
    slug: "demo-civic-procurement-board",
    nameBn: "ডেমো সিভিক প্রকিউরমেন্ট বোর্ড",
    nameEn: "Demo Civic Procurement Board",
    type: "Public authority",
    summaryBn: "সরকারি ক্রয় সংক্রান্ত কাল্পনিক সংস্থা।",
    summaryEn: "A fictional public procurement authority.",
    country: "Bangladesh",
    website: "https://example.com/procurement",
    personIds: [personIds[0], personIds[1], personIds[5]],
    caseIds: [caseIds[0], caseIds[4]],
    tagIds: [tagIds[0], tagIds[4]]
  },
  {
    id: id(802),
    isDemo: true,
    slug: "demo-metropolitan-bank",
    nameBn: "ডেমো মেট্রোপলিটন ব্যাংক",
    nameEn: "Demo Metropolitan Bank",
    type: "Financial institution",
    summaryBn: "ব্যাংকিং নথি প্রদর্শনের জন্য কাল্পনিক প্রতিষ্ঠান।",
    summaryEn: "A fictional institution for banking-related records.",
    country: "Bangladesh",
    website: "https://example.com/bank",
    personIds: [personIds[2], personIds[6]],
    caseIds: [caseIds[2], caseIds[8]],
    tagIds: [tagIds[1]]
  },
  {
    id: id(803),
    isDemo: true,
    slug: "demo-city-services",
    nameBn: "ডেমো সিটি সার্ভিসেস",
    nameEn: "Demo City Services",
    type: "Municipal contractor",
    summaryBn: "স্থানীয় সরকার চুক্তির কাল্পনিক ঠিকাদার।",
    summaryEn: "A fictional municipal services contractor.",
    country: "Bangladesh",
    website: "https://example.com/city-services",
    personIds: [personIds[3], personIds[7]],
    caseIds: [caseIds[3], caseIds[9]],
    tagIds: [tagIds[2], tagIds[6]]
  },
  {
    id: id(804),
    isDemo: true,
    slug: "demo-rights-observer",
    nameBn: "ডেমো রাইটস অবজারভার",
    nameEn: "Demo Rights Observer",
    type: "Civil society",
    summaryBn: "মানবাধিকার পর্যবেক্ষণের কাল্পনিক সংস্থা।",
    summaryEn: "A fictional civil-society monitoring group.",
    country: "Bangladesh",
    website: "https://example.com/rights-observer",
    personIds: [personIds[4], personIds[8], personIds[9]],
    caseIds: [caseIds[5], caseIds[10]],
    tagIds: [tagIds[7]]
  }
];

export const areas: Area[] = [
  {
    id: areaIds[0],
    isDemo: true,
    slug: "bangladesh",
    nameBn: "বাংলাদেশ",
    nameEn: "Bangladesh",
    type: "COUNTRY",
    country: "Bangladesh",
    summaryBn: "কাল্পনিক রেকর্ডের দেশ পর্যায়ের ভৌগোলিক প্রেক্ষাপট।",
    summaryEn: "Country-level geographic context for fictional records."
  },
  {
    id: areaIds[1],
    isDemo: true,
    slug: "dhaka-division",
    nameBn: "ঢাকা বিভাগ",
    nameEn: "Dhaka Division",
    type: "DIVISION",
    parentId: areaIds[0],
    country: "Bangladesh",
    summaryBn: "রাজনীতি, ব্যাংকিং ও সরকারি চুক্তির কাল্পনিক কেন্দ্র।",
    summaryEn: "A fictional center for politics, banking, and public contracts."
  },
  {
    id: areaIds[2],
    isDemo: true,
    slug: "dhaka-district",
    nameBn: "ঢাকা জেলা",
    nameEn: "Dhaka District",
    type: "DISTRICT",
    parentId: areaIds[1],
    country: "Bangladesh",
    latitude: 23.8103,
    longitude: 90.4125,
    summaryBn: "ডেমো প্রোফাইল, ব্যাংক ও মিডিয়া ঘটনার প্রধান এলাকা।",
    summaryEn: "Primary area for demo profiles, banking, and media incidents."
  },
  {
    id: areaIds[3],
    isDemo: true,
    slug: "gazipur-district",
    nameBn: "গাজীপুর জেলা",
    nameEn: "Gazipur District",
    type: "DISTRICT",
    parentId: areaIds[1],
    country: "Bangladesh",
    summaryBn: "কাল্পনিক ভূমি ও স্থানীয় প্রভাবের রেকর্ডে ব্যবহৃত জেলা।",
    summaryEn: "District used for fictional land and local influence records."
  },
  {
    id: areaIds[4],
    isDemo: true,
    slug: "chattogram-division",
    nameBn: "চট্টগ্রাম বিভাগ",
    nameEn: "Chattogram Division",
    type: "DIVISION",
    parentId: areaIds[0],
    country: "Bangladesh"
  },
  {
    id: areaIds[5],
    isDemo: true,
    slug: "chattogram-district",
    nameBn: "চট্টগ্রাম জেলা",
    nameEn: "Chattogram District",
    type: "DISTRICT",
    parentId: areaIds[4],
    country: "Bangladesh"
  },
  {
    id: areaIds[6],
    isDemo: true,
    slug: "rajshahi-division",
    nameBn: "রাজশাহী বিভাগ",
    nameEn: "Rajshahi Division",
    type: "DIVISION",
    parentId: areaIds[0],
    country: "Bangladesh"
  },
  {
    id: areaIds[7],
    isDemo: true,
    slug: "rajshahi-district",
    nameBn: "রাজশাহী জেলা",
    nameEn: "Rajshahi District",
    type: "DISTRICT",
    parentId: areaIds[6],
    country: "Bangladesh"
  },
  {
    id: areaIds[8],
    isDemo: true,
    slug: "sylhet-division",
    nameBn: "সিলেট বিভাগ",
    nameEn: "Sylhet Division",
    type: "DIVISION",
    parentId: areaIds[0],
    country: "Bangladesh"
  },
  {
    id: areaIds[9],
    isDemo: true,
    slug: "sylhet-district",
    nameBn: "সিলেট জেলা",
    nameEn: "Sylhet District",
    type: "DISTRICT",
    parentId: areaIds[8],
    country: "Bangladesh"
  },
  {
    id: areaIds[10],
    isDemo: true,
    slug: "demo-north-constituency",
    nameBn: "ডেমো উত্তর আসন",
    nameEn: "Demo North Constituency",
    type: "CONSTITUENCY",
    parentId: areaIds[2],
    country: "Bangladesh",
    summaryBn: "নির্বাচন ও রাজনৈতিক ঘাঁটির কাল্পনিক আসন।",
    summaryEn: "A fictional constituency for election and political-base records."
  },
  {
    id: areaIds[11],
    isDemo: true,
    slug: "demo-river-port-city",
    nameBn: "ডেমো নদীবন্দর শহর",
    nameEn: "Demo River Port City",
    type: "CITY",
    parentId: areaIds[5],
    country: "Bangladesh",
    summaryBn: "ব্যবসা, পরিবহন ও জনচুক্তির কাল্পনিক শহর।",
    summaryEn: "A fictional city tied to business, transport, and public contracts."
  },
  {
    id: areaIds[12],
    isDemo: true,
    slug: "demo-east-upazila",
    nameBn: "ডেমো পূর্ব উপজেলা",
    nameEn: "Demo East Upazila",
    type: "UPAZILA",
    parentId: areaIds[3],
    country: "Bangladesh",
    summaryBn: "ভূমি আগ্রহ ও স্থানীয় প্রভাবের কাল্পনিক এলাকা।",
    summaryEn: "A fictional area for land-interest and local influence records."
  },
  {
    id: areaIds[13],
    isDemo: true,
    slug: "demo-market-locality",
    nameBn: "ডেমো বাজার এলাকা",
    nameEn: "Demo Market Locality",
    type: "LOCALITY",
    parentId: areaIds[11],
    country: "Bangladesh",
    summaryBn: "ঘটনার স্থান হিসেবে ব্যবহৃত জনবহুল কাল্পনিক এলাকা।",
    summaryEn: "A fictional crowded locality used as an incident location."
  },
  {
    id: areaIds[14],
    isDemo: true,
    slug: "demo-south-union",
    nameBn: "ডেমো দক্ষিণ ইউনিয়ন",
    nameEn: "Demo South Union",
    type: "UNION",
    parentId: areaIds[12],
    country: "Bangladesh",
    summaryBn: "গ্রামীণ ভূমি ও পরিবার-নেটওয়ার্ক রেকর্ডের কাল্পনিক ইউনিয়ন।",
    summaryEn: "A fictional union for rural land and family-network records."
  }
];

export const institutions: Institution[] = [
  ["demo-civic-front", "ডেমো সিভিক ফ্রন্ট", "Demo Civic Front", "POLITICAL_PARTY"],
  ["demo-metropolitan-bank", "ডেমো মেট্রোপলিটন ব্যাংক", "Demo Metropolitan Bank", "BANK"],
  ["demo-riverland-holdings", "ডেমো রিভারল্যান্ড হোল্ডিংস", "Demo Riverland Holdings", "COMPANY"],
  [
    "demo-unity-shrine-trust",
    "ডেমো ইউনিটি শ্রাইন ট্রাস্ট",
    "Demo Unity Shrine Trust",
    "RELIGIOUS_INSTITUTION"
  ],
  [
    "demo-city-services-ltd",
    "ডেমো সিটি সার্ভিসেস লিমিটেড",
    "Demo City Services Ltd",
    "CONTRACTING_COMPANY"
  ],
  [
    "demo-public-works-cell",
    "ডেমো পাবলিক ওয়ার্কস সেল",
    "Demo Public Works Cell",
    "GOVERNMENT_AGENCY"
  ],
  [
    "demo-family-enterprise",
    "ডেমো ফ্যামিলি এন্টারপ্রাইজ",
    "Demo Family Enterprise",
    "FAMILY_ENTERPRISE"
  ],
  ["demo-daily-media", "ডেমো ডেইলি মিডিয়া", "Demo Daily Media", "MEDIA_ORGANIZATION"],
  ["demo-security-unit", "ডেমো সিকিউরিটি ইউনিট", "Demo Security Unit", "SECURITY_AGENCY"],
  ["demo-rural-foundation", "ডেমো রুরাল ফাউন্ডেশন", "Demo Rural Foundation", "FOUNDATION"],
  ["demo-credit-union", "ডেমো ক্রেডিট ইউনিয়ন", "Demo Credit Union", "FINANCIAL_INSTITUTION"],
  [
    "demo-education-trust",
    "ডেমো এডুকেশন ট্রাস্ট",
    "Demo Education Trust",
    "EDUCATIONAL_INSTITUTION"
  ]
].map(([slug, nameBn, nameEn, type], index) => ({
  id: institutionIds[index],
  isDemo: true,
  slug,
  nameBn,
  nameEn,
  type: type as Institution["type"],
  summaryBn: `${nameBn} একটি কাল্পনিক প্রতিষ্ঠান; সম্পর্ক অপরাধের প্রমাণ নয়।`,
  summaryEn: `${nameEn} is a fictional institution; association is not proof of wrongdoing.`,
  country: "Bangladesh",
  areaIds: [areaIds[2 + (index % 13)]],
  website: `https://example.com/institutions/${slug}`,
  organizationId: organizations[index % organizations.length]?.id,
  tagIds: [tagIds[index % tagIds.length]]
}));

const statuses: LegalStatus[] = [
  "ALLEGATION_REPORTED",
  "UNDER_INVESTIGATION",
  "FORMALLY_CHARGED",
  "TRIAL_ONGOING",
  "CONVICTED",
  "CONVICTION_UNDER_APPEAL",
  "ACQUITTED",
  "DISMISSED",
  "OFFICIAL_AUDIT_FINDING",
  "ADMINISTRATIVE_SANCTION",
  "PRELIMINARY_INQUIRY",
  "CLOSED_WITHOUT_CHARGE"
];

const categories: CaseCategory[] = [
  "CORRUPTION",
  "BRIBERY",
  "FRAUD",
  "ABUSE_OF_POWER",
  "MISUSE_OF_PUBLIC_FUNDS",
  "FINANCIAL_MISCONDUCT",
  "MONEY_LAUNDERING",
  "BANKING_MISCONDUCT",
  "HUMAN_RIGHTS_ABUSE",
  "ELECTORAL_MISCONDUCT",
  "THEFT",
  "OTHER"
];

const roleFor = (index: number): PersonCaseRole =>
  (
    [
      "ACCUSED",
      "RESPONDENT",
      "DEFENDANT",
      "INVESTIGATED_OFFICIAL",
      "CONVICTED_PERSON",
      "BENEFICIARY",
      "WITNESS",
      "COMPLAINANT"
    ] as PersonCaseRole[]
  )[index % 8];

export const cases: CaseRecord[] = caseIds.map((caseId, index) => {
  const firstPerson = personIds[index % personIds.length];
  const secondPerson = personIds[(index + 3) % personIds.length];
  const linkedSources = [sourceIds[index * 2], sourceIds[index * 2 + 1]].filter(Boolean);
  return {
    id: caseId,
    isDemo: true,
    slug: `demo-case-${index + 1}`,
    caseNumber: `DEMO-${2010 + index}-${String(index + 1).padStart(3, "0")}`,
    titleBn: `ডেমো মামলা ${index + 1}: নথিভিত্তিক জনস্বার্থ রেকর্ড`,
    titleEn: `Demo Case ${index + 1}: documented public-interest record`,
    summaryBn: "এই কাল্পনিক রেকর্ডটি আইনি অবস্থার নিরপেক্ষ উপস্থাপনা প্রদর্শন করে।",
    summaryEn: "This fictional record demonstrates neutral presentation of legal status.",
    descriptionBn:
      "ডেমো নথিতে অভিযোগ, কর্তৃপক্ষের পদক্ষেপ, উৎস এবং সংশ্লিষ্ট ব্যক্তিদের নির্দিষ্ট ভূমিকা আলাদা করে দেখানো হয়েছে।",
    descriptionEn:
      "The demo record separates allegations, authority actions, sources, and the exact roles of involved people.",
    category: categories[index],
    legalStatus: statuses[index],
    jurisdiction: "Bangladesh",
    authority: index % 2 === 0 ? "Demo Anti-Corruption Desk" : "Demo Administrative Tribunal",
    courtName: index % 3 === 0 ? "Demo Metropolitan Court" : "Not applicable or not yet assigned",
    judgeName: index % 4 === 0 ? "Demo Judge A" : undefined,
    prosecutorName: index % 5 === 0 ? "Demo Prosecutor B" : undefined,
    defenseAttorneyName: index % 6 === 0 ? "Demo Counsel C" : undefined,
    filedAt: `${2010 + index}-02-12`,
    startedAt: `${2010 + index}-04-20`,
    resolvedAt: index >= 6 ? `${2011 + index}-09-10` : undefined,
    verdict:
      statuses[index] === "CONVICTED" ? "Conviction entered by demo trial court." : undefined,
    sentence: statuses[index] === "CONVICTED" ? "Demo sentence: monetary penalty." : undefined,
    outcomeBn:
      statuses[index] === "ACQUITTED"
        ? "আদালত অভিযোগ থেকে খালাস দিয়েছে; এই ফলাফল অভিযোগের সমান গুরুত্বে প্রদর্শিত।"
        : statuses[index] === "DISMISSED"
          ? "প্রক্রিয়াগত কারণে মামলা খারিজ।"
          : undefined,
    outcomeEn:
      statuses[index] === "ACQUITTED"
        ? "The court acquitted the person; this outcome is displayed as prominently as the allegation."
        : statuses[index] === "DISMISSED"
          ? "The case was dismissed on procedural grounds."
          : undefined,
    evidenceSummaryBn:
      "উৎস তালিকা, সংক্ষিপ্ত উদ্ধৃতি এবং সময়রেখার মাধ্যমে নথির ভিত্তি দেখানো হয়েছে।",
    evidenceSummaryEn: "Sources, short excerpts, and timeline events show the document basis.",
    personLinks: [
      {
        personId: firstPerson,
        caseId,
        role: roleFor(index),
        legalPosition: "Record subject",
        noteBn: "এই ব্যক্তির ভূমিকা নির্দিষ্টভাবে নথিভুক্ত; অপরাধ প্রমাণ বোঝায় না।",
        noteEn: "This person's role is specifically documented and does not imply guilt."
      },
      {
        personId: secondPerson,
        caseId,
        role: index % 2 === 0 ? "WITNESS" : "RELATED_PERSON",
        legalPosition: "Linked participant",
        noteBn: "সহযোগী রেকর্ড হিসেবে যুক্ত; অভিযুক্ত হিসেবে নয়।",
        noteEn: "Linked as a related participant, not as an accused person."
      }
    ],
    sourceIds: linkedSources,
    subjectResponseIds: index < responseIds.length ? [responseIds[index]] : [],
    tags: [tagIds[index % tagIds.length], tagIds[(index + 5) % tagIds.length]],
    timelineEvents: [
      {
        id: id(900 + index),
        date: `${2020 + index}-02-12`,
        titleBn: "রেকর্ড খোলা",
        titleEn: "Record opened",
        descriptionBn: "প্রাথমিক নথির ভিত্তিতে ডেমো রেকর্ড তৈরি।",
        descriptionEn: "Demo record created from initial documents.",
        sourceIds: linkedSources.slice(0, 1)
      },
      {
        id: id(930 + index),
        date: `${2020 + index}-06-18`,
        titleBn: "উৎস পর্যালোচনা",
        titleEn: "Source review",
        descriptionBn: "সম্পাদকীয় যাচাইয়ের সময় উৎসগুলো পুনরায় দেখা হয়েছে।",
        descriptionEn: "Sources were reviewed during editorial verification.",
        sourceIds: linkedSources
      }
    ],
    relatedCaseIds: index > 0 ? [caseIds[index - 1]] : [],
    lastVerifiedAt: `2026-07-${String(10 + index).padStart(2, "0")}`,
    publicationStatus: "PUBLISHED",
    updatedAt: `2026-07-${String(12 + index).padStart(2, "0")}`
  };
});

export const people: PersonProfile[] = personIds.map((personId, index) => {
  const personCases = cases.filter((record) =>
    record.personLinks.some((link) => link.personId === personId)
  );
  const primaryArea = areas[[2, 5, 7, 9, 3][index % 5]];
  const domains = [
    influenceDomains[index % influenceDomains.length],
    influenceDomains[(index + 2) % influenceDomains.length],
    influenceDomains[(index + 4) % influenceDomains.length]
  ];
  return {
    id: personId,
    isDemo: true,
    slug: `demo-person-${index + 1}`,
    nameBn: `ডেমো ব্যক্তি ${index + 1}`,
    nameEn: `Demo Person ${index + 1}`,
    aliases: [`Demo Alias ${index + 1}`, `ডেমো উপনাম ${index + 1}`],
    birthYear: 1970 + index,
    summaryBn: "জনস্বার্থ সংশ্লিষ্ট কাল্পনিক প্রোফাইল; কোনো বাস্তব ব্যক্তিকে নির্দেশ করে না।",
    summaryEn: "A fictional public-interest profile; it does not identify a real person.",
    descriptionBn:
      "এই প্রোফাইলটি অভিযোগ, তদন্ত, ফলাফল, উৎস, প্রতিক্রিয়া ও সংশোধন কীভাবে নিরপেক্ষভাবে দেখানো হয় তা প্রদর্শনের জন্য তৈরি।",
    descriptionEn:
      "This profile demonstrates neutral presentation of allegations, investigations, outcomes, sources, responses, and corrections.",
    occupation: [
      "Public official",
      "Business executive",
      "Contractor",
      "Political organizer",
      "Bank officer"
    ][index % 5],
    politicalAffiliation:
      index % 3 === 0 ? "Demo Civic Front" : index % 3 === 1 ? "Independent" : undefined,
    publicRoles: [`Demo public role ${index + 1}`],
    organizations: [organizations[index % organizations.length].nameEn],
    activePeriod: `${2001 + index}-202${index % 6}`,
    activePeriodStart: `${2001 + index}-01-01`,
    activePeriodEnd: `202${index % 6}-12-31`,
    historicalEraIds: [`${2000 + Math.floor(index / 2) * 10}s`],
    primaryAreaBn: primaryArea.nameBn,
    primaryAreaEn: primaryArea.nameEn,
    primaryAreaIds: [primaryArea.id],
    claimIds: [claimIds[index * 2], claimIds[index * 2 + 1]].filter(Boolean),
    incidentIds: [incidentIds[index % incidentIds.length]],
    institutionAssociationIds: institutionAssociationIds
      .filter((_, associationIndex) => associationIndex % personIds.length === index)
      .slice(0, 3),
    geographicAssociationIds: geographicAssociationIds
      .filter((_, associationIndex) => associationIndex % personIds.length === index)
      .slice(0, 3),
    influenceDomains: domains,
    historicalIdentityBn:
      "রাজনৈতিক প্রভাব, প্রতিষ্ঠানগত সম্পর্ক ও জনস্বার্থ নথিতে আলোচিত কাল্পনিক ব্যক্তি।",
    historicalIdentityEn:
      "A fictional figure discussed through political influence, institutional ties, and public-interest records.",
    narrative: {
      whyListedBn:
        "এই ডেমো প্রোফাইলটি অন্তর্ভুক্ত কারণ সংশ্লিষ্ট ব্যক্তি, প্রতিষ্ঠান, এলাকা ও মামলার মধ্যে সম্পর্ক কীভাবে নথিভিত্তিকভাবে দেখানো যায় তা প্রদর্শন করে।",
      whyListedEn:
        "This demo profile is included to show how links among a person, institutions, areas, and cases can be presented with source-backed context.",
      historicalOverviewBn:
        "কাল্পনিক সময়রেখায় ব্যক্তি স্থানীয় প্রভাব থেকে প্রতিষ্ঠান-নির্ভর ক্ষমতার নেটওয়ার্কে যুক্ত হন। প্রোফাইলটি অভিযোগ, তদন্ত, জবাব ও ফলাফলকে আলাদা করে উপস্থাপন করে।",
      historicalOverviewEn:
        "In the fictional timeline, the person moves from local influence into an institution-linked power network. The profile separates allegations, inquiries, responses, and outcomes.",
      riseToPowerBn:
        "স্থানীয় সংগঠন, পেশাগত যোগাযোগ ও সরকারি প্রক্রিয়ার সঙ্গে সম্পর্কের মাধ্যমে প্রভাব বিস্তারের ডেমো বিবরণ।",
      riseToPowerEn:
        "A demo account of influence built through local organization, professional contacts, and public processes.",
      powerBaseBn: `${primaryArea.nameBn}, সংশ্লিষ্ট প্রতিষ্ঠান ও রাজনৈতিক যোগাযোগ।`,
      powerBaseEn: `${primaryArea.nameEn}, linked institutions, and political contacts.`,
      documentedPatternsBn:
        "নথিতে প্রভাব, পৃষ্ঠপোষকতা, আর্থিক বা ভূমি-সম্পর্কিত বিতর্কের মতো থিম আলাদা করে দেখানো হয়েছে।",
      documentedPatternsEn:
        "Records separate themes such as influence, patronage, financial links, or land-related disputes.",
      historicalImpactBn:
        "জনস্বার্থ, স্থানীয় প্রশাসন ও প্রতিষ্ঠানের ওপর সম্ভাব্য প্রভাব উৎসের ভিত্তিতে ব্যাখ্যা করা হয়েছে।",
      historicalImpactEn:
        "Potential effects on public interest, local administration, and institutions are explained from sources.",
      publicReputationBn:
        "প্রোফাইলের ভাষা অভিযোগ, বিতর্ক ও ফলাফলকে আদালতের সিদ্ধান্ত থেকে আলাদা রাখে।",
      publicReputationEn:
        "The profile language keeps allegations, controversies, and outcomes distinct from court determinations.",
      legacyBn:
        "ডেমো উত্তরাধিকার অংশটি দেখায় কীভাবে পরবর্তী সংশোধন, জবাব ও নতুন উৎস একই প্রোফাইলে যুক্ত হয়।",
      legacyEn:
        "The demo legacy section shows how later corrections, responses, and new sources attach to the same profile.",
      featuredClaimIds: [claimIds[index * 2], claimIds[index * 2 + 1]].filter(Boolean),
      featuredRelationshipIds: relationshipIds
        .filter((_, relIndex) => relIndex % personIds.length === index)
        .slice(0, 2),
      featuredIncidentIds: [incidentIds[index % incidentIds.length]]
    },
    city: ["Dhaka", "Chattogram", "Rajshahi", "Sylhet"][index % 4],
    country: "Bangladesh",
    socialLinks: [{ label: "Public website", url: `https://example.com/demo-person-${index + 1}` }],
    tags: [tagIds[index % tagIds.length], tagIds[(index + 2) % tagIds.length]],
    caseIds: personCases.map((record) => record.id),
    newsIds: newsIds.filter((_, newsIndex) => newsIndex % personIds.length === index).slice(0, 3),
    assetIds: [assetIds[index]].filter(Boolean),
    relationshipIds: relationshipIds.filter(
      (_, relIndex) =>
        relIndex % personIds.length === index ||
        relIndex % personIds.length === (index + 1) % personIds.length
    ),
    publicationStatus: "PUBLISHED",
    isActive: true,
    lastVerifiedAt: `2026-07-${String(20 - index).padStart(2, "0")}`,
    publishedAt: `2025-11-${String(1 + index).padStart(2, "0")}`,
    updatedAt: `2026-07-${String(23 - index).padStart(2, "0")}`
  };
});

export const claims: ClaimRecord[] = claimIds.map((claimId, index) => {
  const personId = personIds[index % personIds.length];
  const linkedCaseId = caseIds[index % caseIds.length];
  const linkedSourceIds = [
    sourceIds[index % sourceIds.length],
    sourceIds[(index + 5) % sourceIds.length]
  ];
  return {
    id: claimId,
    isDemo: true,
    slug: `demo-claim-${index + 1}`,
    personIds: [personId],
    titleBn: `ডেমো দাবি ${index + 1}: প্রভাব ও জনস্বার্থ রেকর্ড`,
    titleEn: `Demo Claim ${index + 1}: influence and public-interest record`,
    summaryBn:
      "এই কাল্পনিক দাবি আদালতের রায় নয়; এটি উৎসনির্ভর ঐতিহাসিক বা অনুসন্ধানী প্রেক্ষাপট দেখায়।",
    summaryEn:
      "This fictional claim is not a court finding; it presents source-backed historical or investigative context.",
    type: [
      "PATRONAGE",
      "BANKING_INFLUENCE",
      "LAND_CONTROL",
      "PUBLIC_CONTRACTS",
      "ELECTION_INTERFERENCE",
      "RELIGIOUS_INFLUENCE",
      "BUSINESS_NETWORK",
      "HUMAN_RIGHTS_ABUSE"
    ][index % 8] as ClaimRecord["type"],
    status: [
      "REPORTED",
      "ALLEGED",
      "OFFICIALLY_INVESTIGATED",
      "OFFICIAL_FINDING",
      "FORMALLY_CHARGED",
      "DISPUTED",
      "RETRACTED",
      "JUDICIALLY_ESTABLISHED",
      "HISTORICAL_CONSENSUS"
    ][index % 9] as ClaimRecord["status"],
    verificationStatus:
      index % 5 === 0 ? "DISPUTED" : index % 3 === 0 ? "CROSS_CHECKED" : "REVIEWED",
    startDate: `${2008 + (index % 10)}-01-01`,
    endDate: index % 4 === 0 ? `${2014 + (index % 8)}-12-31` : undefined,
    areaIds: [areaIds[2 + (index % 8)]],
    organizationIds: [organizations[index % organizations.length].id],
    institutionIds: [institutionIds[index % institutionIds.length]],
    relatedClaimIds: index > 0 ? [claimIds[index - 1]] : [],
    caseIds: [linkedCaseId],
    sourceIds: linkedSourceIds,
    newsIds: [newsIds[index % newsIds.length]],
    subjectResponseIds: index < responseIds.length ? [responseIds[index]] : [],
    editorialContextBn: "সম্পাদকীয় নোট: দাবি, তদন্ত, ফলাফল ও জবাব আলাদা করে পড়তে হবে।",
    editorialContextEn:
      "Editorial note: read the claim, inquiry, outcome, and response as separate record types.",
    isDisputed: index % 5 === 0 || index % 9 === 5,
    lastVerifiedAt: `2026-07-${String(8 + (index % 18)).padStart(2, "0")}`,
    updatedAt: `2026-07-${String(9 + (index % 18)).padStart(2, "0")}`
  };
});

export const geographicAssociations: GeographicAssociation[] = geographicAssociationIds.map(
  (associationId, index) => ({
    id: associationId,
    isDemo: true,
    personId: personIds[index % personIds.length],
    areaId: areaIds[2 + (index % 8)],
    relationType: [
      "CONSTITUENCY",
      "POLITICAL_BASE",
      "BUSINESS_BASE",
      "LAND_INTEREST",
      "INCIDENT_LOCATION",
      "AREA_OF_INFLUENCE"
    ][index % 6] as GeographicAssociation["relationType"],
    startDate: `${2005 + (index % 12)}-01-01`,
    endDate: index % 5 === 0 ? `${2018 + (index % 5)}-12-31` : undefined,
    summaryBn: "এলাকার সঙ্গে সম্পর্কটি ডেমো উৎসে উল্লিখিত; এটি ব্যক্তিগত ঠিকানা প্রকাশ করে না।",
    summaryEn:
      "The area relationship appears in demo sources and does not publish a private address.",
    claimIds: [claimIds[index % claimIds.length]],
    sourceIds: [sourceIds[index % sourceIds.length]],
    verificationStatus: index % 4 === 0 ? "CROSS_CHECKED" : "REVIEWED"
  })
);

export const institutionAssociations: InstitutionAssociation[] = institutionAssociationIds.map(
  (associationId, index) => ({
    id: associationId,
    isDemo: true,
    personId: personIds[index % personIds.length],
    institutionId: institutions[index % institutions.length].id,
    relationshipType: [
      "PATRON",
      "DIRECTOR",
      "CONTRACTOR",
      "BORROWER",
      "POLITICAL_CONTROLLER",
      "ALLEGED_ASSOCIATE",
      "RELIGIOUS_PATRON"
    ][index % 7] as InstitutionAssociation["relationshipType"],
    startDate: `${2006 + (index % 11)}-01-01`,
    endDate: index % 6 === 0 ? `${2020 + (index % 4)}-12-31` : undefined,
    summaryBn:
      "প্রতিষ্ঠানের সঙ্গে সম্পর্কের ধরন উৎসভিত্তিকভাবে দেখানো হয়েছে; সম্পর্ক নিজে থেকে অপরাধের প্রমাণ নয়।",
    summaryEn:
      "The institution relationship is described from sources; a relationship is not itself proof of wrongdoing.",
    claimIds: [claimIds[index % claimIds.length]],
    sourceIds: [sourceIds[(index + 2) % sourceIds.length]],
    verificationStatus: index % 5 === 0 ? "SOURCE_LOCATED" : "REVIEWED"
  })
);

export const impactRecords: ImpactRecord[] = impactIds.map((impactId, index) => ({
  id: impactId,
  isDemo: true,
  incidentId: incidentIds[index],
  claimId: claimIds[index],
  personId: personIds[index % personIds.length],
  impactType: [
    "PUBLIC_FINANCE",
    "LAND",
    "BANKING",
    "LOCAL_COMMUNITY",
    "POLITICAL_RIGHTS",
    "HUMAN_RIGHTS",
    "PUBLIC_INSTITUTION"
  ][index % 7] as ImpactRecord["impactType"],
  summaryBn:
    "প্রভাবের এই ডেমো সারাংশটি জনস্বার্থে সম্ভাব্য ফলাফল ব্যাখ্যা করে এবং উৎস ছাড়া সংখ্যা দেখায় না।",
  summaryEn:
    "This demo impact summary explains possible public-interest consequences and avoids unsourced numbers.",
  affectedAreaIds: [areaIds[2 + (index % 8)]],
  affectedOrganizationIds: [organizations[index % organizations.length].id],
  estimatedValue: index % 3 === 0 ? 2500000 + index * 100000 : undefined,
  currency: index % 3 === 0 ? "BDT" : undefined,
  sourceIds: [sourceIds[index % sourceIds.length]],
  verificationStatus: index % 4 === 0 ? "CROSS_CHECKED" : "REVIEWED"
}));

export const incidents: IncidentRecord[] = incidentIds.map((incidentId, index) => ({
  id: incidentId,
  isDemo: true,
  slug: `demo-incident-${index + 1}`,
  titleBn: `ডেমো ঘটনা ${index + 1}: প্রভাব, এলাকা ও প্রতিষ্ঠান`,
  titleEn: `Demo Incident ${index + 1}: influence, place, and institution`,
  summaryBn: "এই কাল্পনিক ঘটনা মামলা, দাবি, এলাকা ও প্রভাব রেকর্ডকে একই গল্পে যুক্ত করার উদাহরণ।",
  summaryEn:
    "This fictional incident shows how cases, claims, places, and impact records can be connected in one story.",
  descriptionBn:
    "ঘটনার বিবরণে কী ঘটেছে, কার ভূমিকা কীভাবে নথিভুক্ত, এবং কোন ফলাফল এখনও অভিযোগ বা বিতর্ক পর্যায়ে আছে তা আলাদা করা হয়েছে।",
  descriptionEn:
    "The incident description separates what happened, how each role is documented, and which outcomes remain alleged or disputed.",
  incidentType: [
    "CORRUPTION_SCANDAL",
    "BANK_FAILURE",
    "LAND_SEIZURE",
    "ELECTION_INCIDENT",
    "PUBLIC_PROTEST",
    "HUMAN_RIGHTS_ABUSE",
    "POLITICAL_VIOLENCE",
    "FINANCIAL_SCANDAL",
    "GOVERNMENT_CRACKDOWN",
    "INSTITUTIONAL_CAPTURE",
    "PUBLIC_PROTEST",
    "OTHER"
  ][index % 12] as IncidentRecord["incidentType"],
  occurredAt: index % 2 === 0 ? `${2012 + index}-04-15` : undefined,
  periodStart: index % 2 === 1 ? `${2010 + index}-01-01` : undefined,
  periodEnd: index % 2 === 1 ? `${2011 + index}-12-31` : undefined,
  areaIds: [areaIds[2 + (index % 8)]],
  personLinks: [
    {
      personId: personIds[index % personIds.length],
      role: ["SUBJECT", "OFFICIAL", "BENEFICIARY", "ACCUSED", "WITNESS", "RELATED_PERSON"][
        index % 6
      ] as IncidentRecord["personLinks"][number]["role"],
      noteBn: "ভূমিকা অভিযোগ, তদন্ত বা প্রেক্ষাপট হিসেবে আলাদা করা হয়েছে।",
      noteEn: "The role is separated as allegation, inquiry, or context."
    }
  ],
  organizationIds: [organizations[index % organizations.length].id],
  institutionIds: [institutions[index % institutions.length].id],
  claimIds: [claimIds[index]],
  caseIds: [caseIds[index % caseIds.length]],
  sourceIds: [sourceIds[index % sourceIds.length], sourceIds[(index + 1) % sourceIds.length]],
  newsIds: [newsIds[index % newsIds.length]],
  impactRecordIds: [impactIds[index]],
  lastVerifiedAt: `2026-07-${String(8 + index).padStart(2, "0")}`,
  updatedAt: `2026-07-${String(10 + index).padStart(2, "0")}`
}));

export const sources: SourceRecord[] = sourceIds.map((sourceId, index) => ({
  id: sourceId,
  isDemo: true,
  slug: `demo-source-${index + 1}`,
  type:
    index % 6 === 0
      ? "COURT_FILING"
      : index % 6 === 1
        ? "AUDIT_REPORT"
        : index % 6 === 2
          ? "GOVERNMENT_DOCUMENT"
          : index % 6 === 3
            ? "NEWS_REPORT"
            : index % 6 === 4
              ? "SUBJECT_STATEMENT"
              : "CORRECTION_NOTICE",
  title: `Demo source document ${index + 1}`,
  publisher: index % 2 === 0 ? "Demo Public Records Office" : "Demo News Archive",
  sourceUrl: `https://example.com/sources/demo-${index + 1}`,
  archivedUrl:
    index % 3 === 0 ? `https://archive.example.com/sources/demo-${index + 1}` : undefined,
  documentNumber: `SRC-${index + 1}`,
  jurisdiction: "Bangladesh",
  publicationDate: `202${index % 6}-03-15`,
  accessedAt: "2026-07-25",
  excerpt:
    "Short fictional excerpt summarizing the document without reproducing copyrighted material.",
  verificationStatus:
    index === 7 ? "DISPUTED" : index % 4 === 0 ? "PRIMARY_SOURCE_VERIFIED" : "REVIEWED",
  isPrimarySource: index % 3 !== 0,
  supportedClaims: [
    "Existence of the demo proceeding",
    "Recorded current status",
    "Named public authority or issuing organization"
  ],
  relatedCaseIds: [caseIds[index % caseIds.length]],
  relatedPersonIds: [personIds[index % personIds.length]]
}));

export const newsRecords: NewsRecord[] = newsIds.map((newsId, index) => ({
  id: newsId,
  isDemo: true,
  slug: `demo-news-${index + 1}`,
  title: `Demo news coverage ${index + 1}`,
  publisher: index % 2 === 0 ? "Demo Daily" : "Demo Public Interest Review",
  agency: "Demo Desk",
  newsType: index % 5 === 0 ? "VIDEO" : "ARTICLE",
  sourceUrl: `https://example.com/news/demo-${index + 1}`,
  summary: "Original short demo summary of public reporting; not a judicial finding.",
  publishedAt: `2025-${String((index % 12) + 1).padStart(2, "0")}-11`,
  strength: index % 3 === 0 ? "HIGH" : index % 3 === 1 ? "MEDIUM" : "LOW",
  verificationStatus: index === 5 ? "DISPUTED" : "SOURCE_LOCATED",
  caseIds: [caseIds[index % caseIds.length]],
  personIds: [personIds[index % personIds.length]],
  categories: [categories[index % categories.length]],
  isActive: true
}));

export const assets: AssetRecord[] = assetIds.map((assetId, index) => ({
  id: assetId,
  isDemo: true,
  personId: personIds[index],
  title: `Reported demo asset ${index + 1}`,
  assetType: ["LAND", "COMMERCIAL_PROPERTY", "VEHICLE", "COMPANY_OWNERSHIP", "BUSINESS_INTEREST"][
    index % 5
  ] as AssetRecord["assetType"],
  currency: "BDT",
  description:
    "Public-safe documented asset note without exact residential address or private coordinates.",
  value: index % 2 === 0 ? 1000000 + index * 250000 : undefined,
  acquisitionDate: `202${index % 5}-05-01`,
  country: "Bangladesh",
  city: ["Dhaka", "Chattogram", "Sylhet"][index % 3],
  sourceIds: [sourceIds[index]],
  verificationStatus: index % 4 === 0 ? "CROSS_CHECKED" : "REVIEWED",
  isPublished: true,
  updatedAt: `2026-06-${String(index + 1).padStart(2, "0")}`
}));

export const relationships: RelationshipRecord[] = relationshipIds.map((relationshipId, index) => ({
  id: relationshipId,
  isDemo: true,
  fromPersonId: personIds[index % personIds.length],
  toPersonId: personIds[(index + 1) % personIds.length],
  relationshipType:
    index % 4 === 0
      ? "ALLEGED_ASSOCIATE"
      : index % 4 === 1
        ? "PROFESSIONAL"
        : index % 4 === 2
          ? "BUSINESS"
          : "CO_DEFENDANT",
  summaryBn: "নথিতে সম্পর্কের উল্লেখ আছে; অভিযোগিত হলে তা স্পষ্টভাবে চিহ্নিত।",
  summaryEn: "The relationship appears in records; alleged relationships are clearly labelled.",
  sourceIds: [sourceIds[index]],
  verificationStatus: index % 4 === 0 ? "SOURCE_LOCATED" : "REVIEWED",
  isActive: true,
  updatedAt: `2026-06-${String(10 + index).padStart(2, "0")}`
}));

export const subjectResponses: SubjectResponse[] = responseIds.map((responseId, index) => ({
  id: responseId,
  isDemo: true,
  personId: personIds[index],
  caseId: caseIds[index],
  responseBn: "বিষয় ব্যক্তি অভিযোগ অস্বীকার করেছেন এবং নথি পর্যালোচনার অনুরোধ করেছেন।",
  responseEn: "The subject denied the allegation and requested review of supporting documents.",
  responseSourceUrl: `https://example.com/responses/demo-${index + 1}`,
  receivedAt: `2026-05-${String(10 + index).padStart(2, "0")}`,
  publishedAt: `2026-05-${String(12 + index).padStart(2, "0")}`,
  verificationStatus: "SOURCE_LOCATED"
}));

export const corrections: CorrectionRecord[] = Array.from({ length: 5 }, (_, index) => ({
  id: id(751 + index),
  isDemo: true,
  entityType: index % 2 === 0 ? "PERSON" : "CASE",
  entityId: index % 2 === 0 ? personIds[index] : caseIds[index],
  titleBn: `ডেমো সংশোধন ${index + 1}`,
  titleEn: `Demo correction ${index + 1}`,
  correctionBn:
    index === 0
      ? "খালাসের ফলাফল প্রোফাইলে বেশি দৃশ্যমান করা হয়েছে।"
      : "তারিখ বা উৎসের সংক্ষিপ্ত বর্ণনা সংশোধন করা হয়েছে।",
  correctionEn:
    index === 0
      ? "The acquittal outcome was made more prominent on the profile."
      : "A date or source summary was corrected.",
  correctedAt: `2026-07-${String(1 + index).padStart(2, "0")}`,
  sourceIds: [sourceIds[index]],
  status: index === 4 ? "UNDER_REVIEW" : "PUBLISHED"
}));

export const revisions: RevisionRecord[] = Array.from({ length: 10 }, (_, index) => ({
  id: id(771 + index),
  isDemo: true,
  entityType: index % 2 === 0 ? "PERSON" : "CASE",
  entityId: index % 2 === 0 ? personIds[index % personIds.length] : caseIds[index % caseIds.length],
  version: index + 1,
  changeSummaryBn: "উৎস, আইনি অবস্থা বা ভাষা হালনাগাদ করা হয়েছে।",
  changeSummaryEn: "Updated sources, legal status, or neutral wording.",
  changedAt: `2026-07-${String(5 + index).padStart(2, "0")}`,
  publicNote: "Demo public revision note."
}));

export const dossiers: DossierCollection[] = [
  ["banking-and-political-power", "ব্যাংকিং ও রাজনৈতিক ক্ষমতা", "Banking and Political Power"],
  ["land-and-local-influence", "ভূমি ও স্থানীয় প্রভাব", "Land and Local Influence"],
  ["election-violence-records", "নির্বাচনী সহিংসতার রেকর্ড", "Election Violence Records"],
  ["family-and-business-networks", "পরিবার ও ব্যবসায়িক নেটওয়ার্ক", "Family and Business Networks"],
  ["public-procurement-controversies", "সরকারি ক্রয় বিতর্ক", "Public Procurement Controversies"],
  ["religious-patronage-networks", "ধর্মীয় পৃষ্ঠপোষকতার নেটওয়ার্ক", "Religious Patronage Networks"]
].map(([slug, titleBn, titleEn], index) => ({
  id: dossierIds[index],
  isDemo: true,
  slug,
  titleBn,
  titleEn,
  summaryBn:
    "এই কাল্পনিক ডসিয়ার ব্যক্তি, দাবি, ঘটনা, প্রতিষ্ঠান, এলাকা ও উৎসকে একটি দীর্ঘপাঠে যুক্ত করে।",
  summaryEn:
    "This fictional dossier connects people, claims, incidents, institutions, places, and sources into one long-form collection.",
  personIds: [personIds[index % personIds.length], personIds[(index + 2) % personIds.length]],
  claimIds: [claimIds[index], claimIds[index + 6], claimIds[index + 12]].filter(Boolean),
  incidentIds: [incidentIds[index], incidentIds[(index + 4) % incidentIds.length]],
  areaIds: [areaIds[2 + (index % 8)], areaIds[10 + (index % 5)]],
  institutionIds: [institutionIds[index], institutionIds[(index + 3) % institutionIds.length]],
  sourceIds: [sourceIds[index], sourceIds[(index + 7) % sourceIds.length]],
  coverImage: `/images/placeholders/dossier-${index + 1}.svg`,
  updatedAt: `2026-07-${String(15 + index).padStart(2, "0")}`
}));
