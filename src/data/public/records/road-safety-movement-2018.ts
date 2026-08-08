import type { ClaimRecord, ImpactRecord, IncidentRecord } from "@/domain/claim";
import type { NewsRecord } from "@/domain/news";
import {
  publicAreaIds,
  publicClaimIds,
  publicImpactIds,
  publicIncidentIds,
  publicInstitutionIds,
  publicNewsIds,
  publicPersonIds,
  publicSourceIds
} from "../ids";

const incidentId = publicIncidentIds.roadSafetyMovement2018;
const claimId = publicClaimIds.roadSafetyMovement2018;
const impactId = publicImpactIds.roadSafetyMovement2018HumanRights;

const sourceIds = [
  publicSourceIds.roadSafetyMovementDailyStarAmnesty,
  publicSourceIds.roadSafetyMovementHumanRightsWatch,
  publicSourceIds.roadSafetyMovementArrests,
  publicSourceIds.roadSafetyMovementRetrospective,
  publicSourceIds.roadSafetyMovementPoliticalResponse,
  publicSourceIds.roadSafetyMovementQuaderStatement,
  publicSourceIds.roadSafetyMovementMinisterComments
];

export const roadSafetyMovement2018Claims: ClaimRecord[] = [
  {
    id: claimId,
    isDemo: false,
    slug: "road-safety-movement-2018-accountability",
    personIds: [
      publicPersonIds.sheikhHasina,
      publicPersonIds.obaidulQuader,
      publicPersonIds.asaduzzamanKhanKamal
    ],
    titleBn: "২০১৮ সালের নিরাপদ সড়ক আন্দোলন ও দমন-পীড়ন প্রসঙ্গ",
    titleEn: "The 2018 Road Safety Movement and reported crackdown context",
    summaryBn:
      "দুই শিক্ষার্থীর মৃত্যুর পর নিরাপদ সড়কের দাবিতে গড়ে ওঠা আন্দোলন, প্রতিবাদকারী ও সাংবাদিকদের ওপর হামলার প্রতিবেদন, গ্রেপ্তার এবং সরকারি সড়ক-নিরাপত্তা প্রতিশ্রুতিকে আলাদা status হিসেবে নথিবদ্ধ করা হয়েছে।",
    summaryEn:
      "The record separates the student movement after two deaths, reports of attacks on protesters and journalists, arrests, and government road-safety commitments into distinct statuses.",
    type: "POLITICAL_REPRESSION",
    status: "REPORTED",
    verificationStatus: "CROSS_CHECKED",
    startDate: "2018-07-29",
    endDate: "2018-08-16",
    areaIds: [publicAreaIds.dhaka],
    organizationIds: [],
    institutionIds: [
      publicInstitutionIds.governmentOfBangladesh,
      publicInstitutionIds.bangladeshPolice,
      publicInstitutionIds.awamiLeague
    ],
    relatedClaimIds: [],
    caseIds: [],
    sourceIds,
    newsIds: [
      publicNewsIds.roadSafetyMovementDailyStarAmnesty,
      publicNewsIds.roadSafetyMovementHumanRightsWatch,
      publicNewsIds.roadSafetyMovementArrests,
      publicNewsIds.roadSafetyMovementRetrospective,
      publicNewsIds.roadSafetyMovementPoliticalResponse,
      publicNewsIds.roadSafetyMovementQuaderStatement,
      publicNewsIds.roadSafetyMovementMinisterComments
    ],
    subjectResponseIds: [],
    editorialContextBn:
      "আন্দোলন, হামলা, গ্রেপ্তার ও সরকারি প্রতিশ্রুতির বর্ণনা উৎসভেদে আলাদা করে পড়তে হবে; এই claim কোনো নির্দিষ্ট ব্যক্তি বা প্রতিষ্ঠানের বিরুদ্ধে চূড়ান্ত অপরাধ-ফাইন্ডিং নয়।",
    editorialContextEn:
      "Accounts of the movement, attacks, arrests, and government commitments should be read separately by source; this claim is not a final criminal finding against a specific person or institution.",
    isDisputed: true,
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];

export const roadSafetyMovement2018ImpactRecords: ImpactRecord[] = [
  {
    id: impactId,
    isDemo: false,
    incidentId,
    impactType: "HUMAN_RIGHTS",
    summaryBn:
      "মানবাধিকার প্রতিবেদনে প্রতিবাদকারী ও সাংবাদিকদের ওপর হামলা, গ্রেপ্তার এবং মতপ্রকাশ ও শান্তিপূর্ণ সমাবেশের অধিকার নিয়ে উদ্বেগ নথিবদ্ধ হয়েছে।",
    summaryEn:
      "Human-rights reporting documented attacks and arrests involving protesters and journalists, alongside concerns about freedom of expression and peaceful assembly.",
    affectedAreaIds: [publicAreaIds.dhaka],
    affectedOrganizationIds: [],
    sourceIds,
    verificationStatus: "CROSS_CHECKED"
  }
];

export const roadSafetyMovement2018Incidents: IncidentRecord[] = [
  {
    id: incidentId,
    isDemo: false,
    slug: "road-safety-movement-2018",
    titleBn: "২০১৮ সালের নিরাপদ সড়ক আন্দোলন",
    titleEn: "2018 Road Safety Movement",
    summaryBn:
      "২০১৮ সালের ২৯ জুলাই থেকে আগস্টে শিক্ষার্থীদের নেতৃত্বে নিরাপদ সড়ক, দায়বদ্ধ পরিবহন ব্যবস্থা ও সড়ক দুর্ঘটনার বিচার দাবিতে দেশব্যাপী প্রতিবাদ।",
    summaryEn:
      "Student-led protests from July 29 into August 2018 demanding safer roads, accountable transport systems, and justice after fatal road crashes.",
    descriptionBn:
      "২০১৮ সালের ২৯ জুলাই ঢাকার বিমানবন্দর সড়কে একটি দ্রুতগামী বাসের ধাক্কায় দুই শিক্ষার্থী নিহত ও অন্যরা আহত হওয়ার পর শিক্ষার্থীরা নিরাপদ সড়কের দাবিতে রাস্তায় নামে। মানবাধিকার ও সংবাদ প্রতিবেদনে আন্দোলনের সময় প্রতিবাদকারী ও সাংবাদিকদের ওপর হামলা, গ্রেপ্তার এবং মতপ্রকাশের অধিকার নিয়ে উদ্বেগ উঠে আসে। একই সময়ে সরকার সড়ক-নিরাপত্তা আইন ও পরিবহন নিয়ন্ত্রণের প্রতিশ্রুতি দেয়। এই রেকর্ড আন্দোলন, সরকারি প্রতিক্রিয়া, হামলার প্রতিবেদন ও গ্রেপ্তারকে আলাদা status হিসেবে রাখে।",
    descriptionEn:
      "After two students were killed and others injured by a speeding bus on Dhaka's Airport Road on July 29, 2018, students took to the streets demanding safer roads. Human-rights and news reports raised concerns about attacks on protesters and journalists, arrests, and freedom of expression during the movement. The government also promised road-safety legislation and transport regulation. This record keeps the movement, government response, reported attacks, and arrests as separate statuses.",
    incidentType: "PUBLIC_PROTEST",
    periodStart: "2018-07-29",
    periodEnd: "2018-08-16",
    areaIds: [publicAreaIds.dhaka],
    personLinks: [
      {
        personId: publicPersonIds.sheikhHasina,
        role: "OFFICIAL",
        noteBn:
          "সরকারের সড়ক-নিরাপত্তা প্রতিশ্রুতি ও নীতিগত প্রতিক্রিয়ার রাজনৈতিক প্রেক্ষাপটে সাবেক প্রধানমন্ত্রী হিসেবে যুক্ত; এটি আন্দোলনে হামলা বা গ্রেপ্তারের ব্যক্তিগত দায়ের ফাইন্ডিং নয়।",
        noteEn:
          "Linked as the former prime minister in the political context of the government's road-safety commitments and policy response; this is not a finding of personal responsibility for attacks or arrests."
      },
      {
        personId: publicPersonIds.obaidulQuader,
        role: "OFFICIAL",
        noteBn:
          "সড়ক পরিবহন ও সেতুমন্ত্রী এবং আওয়ামী লীগ সাধারণ সম্পাদক হিসেবে আন্দোলন নিয়ে প্রকাশ্য বক্তব্য দেওয়ার প্রেক্ষাপটে যুক্ত; এটি হামলা বা গ্রেপ্তারের দায়ের ফাইন্ডিং নয়।",
        noteEn:
          "Linked as road transport minister and Awami League general secretary through public statements about the movement; this is not a finding of responsibility for attacks or arrests."
      },
      {
        personId: publicPersonIds.asaduzzamanKhanKamal,
        role: "OFFICIAL",
        noteBn:
          "স্বরাষ্ট্রমন্ত্রী হিসেবে শিক্ষার্থীদের দাবিকে যৌক্তিক বলা ও সরকারি প্রতিক্রিয়ার প্রকাশ্য বক্তব্যের প্রেক্ষাপটে যুক্ত; এটি দমন-পীড়নের দায়ের ফাইন্ডিং নয়।",
        noteEn:
          "Linked as home minister through public comments describing the students' demands and the government response; this is not a finding of responsibility for repression."
      }
    ],
    organizationIds: [],
    institutionIds: [
      publicInstitutionIds.governmentOfBangladesh,
      publicInstitutionIds.bangladeshPolice,
      publicInstitutionIds.awamiLeague
    ],
    claimIds: [claimId],
    caseIds: [],
    sourceIds,
    newsIds: [
      publicNewsIds.roadSafetyMovementDailyStarAmnesty,
      publicNewsIds.roadSafetyMovementHumanRightsWatch,
      publicNewsIds.roadSafetyMovementArrests,
      publicNewsIds.roadSafetyMovementRetrospective,
      publicNewsIds.roadSafetyMovementPoliticalResponse,
      publicNewsIds.roadSafetyMovementQuaderStatement,
      publicNewsIds.roadSafetyMovementMinisterComments
    ],
    impactRecordIds: [impactId],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];

export const roadSafetyMovement2018NewsRecords: NewsRecord[] = [
  {
    id: publicNewsIds.roadSafetyMovementDailyStarAmnesty,
    isDemo: false,
    slug: "daily-star-amnesty-road-safety-protests-2018",
    title: "Amnesty International urges govt to end crackdown on student protesters",
    publisher: "The Daily Star",
    agency: "The Daily Star",
    newsType: "ARTICLE",
    sourceUrl:
      "https://www.thedailystar.net/news/politics/amnesty-international-urges-bangladesh-government-end-student-movement-for-safe-roads-1616866",
    summary:
      "Report on Amnesty International's response to the student movement and reported crackdown concerns.",
    publishedAt: "2018-08-06",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.roadSafetyMovementHumanRightsWatch,
    isDemo: false,
    slug: "human-rights-watch-road-safety-protests-2018",
    title: "Bangladesh: Stop Attacks on Student Protesters, Critics",
    publisher: "Human Rights Watch",
    agency: "Human Rights Watch",
    newsType: "DOCUMENTARY",
    sourceUrl:
      "https://www.hrw.org/news/2018/08/06/bangladesh-stop-attacks-student-protesters-critics",
    summary:
      "Human Rights Watch report on attacks, arrests, and rights concerns during the road-safety protests.",
    publishedAt: "2018-08-06",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.roadSafetyMovementArrests,
    isDemo: false,
    slug: "bdnews24-road-safety-protest-arrests-2018",
    title: "Police arrest 97 in 51 cases over student protests for safe roads",
    publisher: "bdnews24.com",
    agency: "bdnews24.com",
    newsType: "ARTICLE",
    sourceUrl:
      "https://bdnews24.com/bangladesh/police-arrest-97-in-51-cases-over-student-protests-for-safe-roads",
    summary: "Report on police-reported arrests and cases after the road-safety movement.",
    publishedAt: "2018-08-16",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.roadSafetyMovementRetrospective,
    isDemo: false,
    slug: "daily-star-road-safety-movement-four-years-2018",
    title: "Road Safety Movement: Four years on, road fatalities keep rising",
    publisher: "The Daily Star",
    agency: "The Daily Star",
    newsType: "ARTICLE",
    sourceUrl:
      "https://online.thedailystar.net/news/bangladesh/transport/news/road-safety-movement-four-years-road-fatalities-keep-rising-3082106",
    summary:
      "Retrospective report on the 2018 movement, government directives, and continuing road-safety concerns.",
    publishedAt: "2022-07-29",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.roadSafetyMovementPoliticalResponse,
    isDemo: false,
    slug: "daily-star-minister-response-road-safety-movement-2018",
    title: "Students' demands logical, will be implemented: Home minister",
    publisher: "The Daily Star",
    agency: "The Daily Star",
    newsType: "ARTICLE",
    sourceUrl:
      "https://www.thedailystar.net/city/bangladesh-safe-roads-demand-of-students-logical-taken-consideration-home-minister-asaduzzaman-khan-1614352",
    summary:
      "Report on public responses by Home Minister Asaduzzaman Khan Kamal and Road Transport Minister Obaidul Quader.",
    publishedAt: "2018-08-01",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [],
    personIds: [publicPersonIds.asaduzzamanKhanKamal, publicPersonIds.obaidulQuader],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.roadSafetyMovementQuaderStatement,
    isDemo: false,
    slug: "daily-star-obaidul-quader-road-safety-statement-2018",
    title: "Evil political forces infiltrating student protest",
    publisher: "The Daily Star",
    agency: "The Daily Star",
    newsType: "ARTICLE",
    sourceUrl:
      "https://www.thedailystar.net/politics/political-intruders-infiltrating-students-demonstration-for-safe-roads-in-bangladesh-obaidul-quader-1615846",
    summary:
      "Report on Obaidul Quader's public statement about the road-safety movement and student safety.",
    publishedAt: "2018-08-04",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [],
    personIds: [publicPersonIds.obaidulQuader],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.roadSafetyMovementMinisterComments,
    isDemo: false,
    slug: "daily-star-three-ministers-road-safety-protest-2018",
    title: "3 ministers slam BNP over protest",
    publisher: "The Daily Star",
    agency: "The Daily Star",
    newsType: "ARTICLE",
    sourceUrl: "https://www.thedailystar.net/frontpage/3-ministers-slam-bnp-over-protest-1615270",
    summary: "Report on ministerial political comments during the road-safety movement.",
    publishedAt: "2018-08-02",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [],
    personIds: [publicPersonIds.obaidulQuader, publicPersonIds.asaduzzamanKhanKamal],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  }
];
