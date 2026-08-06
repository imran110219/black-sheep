import type { AssetRecord } from "@/domain/asset";
import type { CaseCategory, CaseRecord, LegalStatus, PersonCaseRole } from "@/domain/case";
import type { CorrectionRecord, SubjectResponse } from "@/domain/correction";
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
    caseNumber: `DEMO-${2020 + index}-${String(index + 1).padStart(3, "0")}`,
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
    filedAt: `${2020 + index}-02-12`,
    startedAt: `${2020 + index}-04-20`,
    resolvedAt: index >= 6 ? `${2021 + index}-09-10` : undefined,
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
