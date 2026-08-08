import type { Area, ClaimRecord, ImpactRecord, IncidentRecord, Institution } from "@/domain/claim";
import type { CaseRecord } from "@/domain/case";
import type { NewsRecord } from "@/domain/news";
import {
  publicAreaIds,
  publicCaseIds,
  publicClaimIds,
  publicImpactIds,
  publicIncidentIds,
  publicInstitutionIds,
  publicNewsIds,
  publicPersonIds,
  publicSourceIds
} from "../ids";

const incidentId = publicIncidentIds.bdrPilkhanaMassacre2009;
const caseId = publicCaseIds.bdrPilkhanaCriminalCase;
const claimId = publicClaimIds.bdrPilkhanaAccountability;
const areaId = publicAreaIds.pilkhanaBdrHeadquarters;

const relatedPeople = [
  publicPersonIds.sheikhHasina,
  publicPersonIds.sheikhFazleNoorTaposh,
  publicPersonIds.sheikhFazlulKarimSelim,
  publicPersonIds.jahangirKabirNanak,
  publicPersonIds.mirzaAzam,
  publicPersonIds.shakilAhmedBdr,
  publicPersonIds.saharaKhatun
];

export const bdrPilkhanaAreas: Area[] = [
  {
    id: areaId,
    isDemo: false,
    slug: "pilkhana-bdr-headquarters",
    nameBn: "পিলখানা বিডিআর সদর দপ্তর",
    nameEn: "Pilkhana BDR Headquarters",
    type: "LOCALITY",
    parentId: publicAreaIds.dhaka,
    country: "Bangladesh",
    summaryBn: "২০০৯ সালের ২৫-২৬ ফেব্রুয়ারির বিডিআর বিদ্রোহ ও হত্যাকাণ্ডের প্রধান জনসম্মুখ স্থান।",
    summaryEn:
      "The principal public location associated with the February 25-26, 2009 BDR mutiny and killings."
  }
];

export const bdrPilkhanaInstitutions: Institution[] = [
  {
    id: publicInstitutionIds.borderGuardsBangladesh,
    isDemo: false,
    slug: "border-guards-bangladesh",
    nameBn: "বর্ডার গার্ড বাংলাদেশ",
    nameEn: "Border Guards Bangladesh",
    type: "SECURITY_AGENCY",
    summaryBn:
      "২০০৯ সালের ঘটনায় তৎকালীন বাংলাদেশ রাইফেলস (BDR) নামে পরিচিত সীমান্তরক্ষী বাহিনী; পরে BGB নামে পুনর্গঠিত।",
    summaryEn:
      "The border force known as Bangladesh Rifles (BDR) during the 2009 event and later renamed Border Guards Bangladesh (BGB).",
    country: "Bangladesh",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka, areaId],
    tagIds: []
  },
  {
    id: publicInstitutionIds.bangladeshArmy,
    isDemo: false,
    slug: "bangladesh-army",
    nameBn: "বাংলাদেশ সেনাবাহিনী",
    nameEn: "Bangladesh Army",
    type: "SECURITY_AGENCY",
    summaryBn:
      "পিলখানায় নিহত ৫৭ জন সেনা কর্মকর্তার প্রাতিষ্ঠানিক প্রেক্ষাপট এবং সংকট-পরবর্তী বিচার ও স্মরণ-প্রক্রিয়ার সঙ্গে যুক্ত বাহিনী।",
    summaryEn:
      "The institution connected to the 57 army officers killed at Pilkhana and to subsequent judicial and memorial processes.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka, areaId],
    tagIds: []
  },
  {
    id: publicInstitutionIds.ministryOfHomeAffairs,
    isDemo: false,
    slug: "ministry-of-home-affairs-bangladesh",
    nameBn: "স্বরাষ্ট্র মন্ত্রণালয়",
    nameEn: "Ministry of Home Affairs",
    type: "GOVERNMENT_AGENCY",
    summaryBn: "বিডিআর/বিজিবি বাহিনীর প্রশাসনিক ও সংকট-প্রতিক্রিয়া প্রেক্ষাপটের সরকারি প্রতিষ্ঠান।",
    summaryEn:
      "The government institution connected to the administrative and crisis-response context of BDR/BGB.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka],
    tagIds: []
  },
  {
    id: publicInstitutionIds.bdrIndependentInvestigationCommission,
    isDemo: false,
    slug: "national-independent-bdr-investigation-commission",
    nameBn: "বিডিআর হত্যাকাণ্ডের জাতীয় স্বাধীন তদন্ত কমিশন",
    nameEn: "National Independent Investigation Commission on the BDR Massacre",
    type: "GOVERNMENT_AGENCY",
    summaryBn:
      "২০২৪ সালে গঠিত এবং ২০০৯ সালের পিলখানা ঘটনা পুনঃতদন্তের দায়িত্বপ্রাপ্ত কমিশন; ২০২৫ সালের প্রতিবেদনটি কমিশনের নিজস্ব finding হিসেবে আলাদা করে পড়তে হবে।",
    summaryEn:
      "A commission formed in 2024 to reinvestigate the 2009 Pilkhana events; its 2025 report should be read as a commission finding distinct from a criminal-court judgment.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka],
    tagIds: []
  }
];

export const bdrPilkhanaClaims: ClaimRecord[] = [
  {
    id: claimId,
    isDemo: false,
    slug: "bdr-pilkhana-killings-and-accountability",
    personIds: relatedPeople,
    titleBn: "পিলখানা হত্যাকাণ্ড ও জবাবদিহির বহুস্তরীয় রেকর্ড",
    titleEn: "The Pilkhana killings and layered accountability record",
    summaryBn:
      "২০০৯ সালের হত্যাকাণ্ডে আদালতের প্রতিষ্ঠিত মৃত্যুর রেকর্ড, mutiny-র সরকারি বর্ণনা, post-mutiny মানবাধিকার অভিযোগ এবং ২০২৫ সালের কমিশন-ফাইন্ডিং—সবগুলো আলাদা status হিসেবে নথিবদ্ধ করা হয়েছে।",
    summaryEn:
      "The record separates the court-established deaths, the official mutiny account, post-mutiny human-rights allegations, and the 2025 commission findings into distinct statuses.",
    type: "HUMAN_RIGHTS_ABUSE",
    status: "OFFICIALLY_INVESTIGATED",
    verificationStatus: "CROSS_CHECKED",
    startDate: "2009-02-25",
    endDate: "2026-02-25",
    areaIds: [publicAreaIds.dhaka, areaId],
    organizationIds: [],
    institutionIds: [
      publicInstitutionIds.borderGuardsBangladesh,
      publicInstitutionIds.bangladeshArmy,
      publicInstitutionIds.ministryOfHomeAffairs,
      publicInstitutionIds.bdrIndependentInvestigationCommission
    ],
    relatedClaimIds: [],
    caseIds: [caseId],
    sourceIds: [
      publicSourceIds.bdrPilkhanaCourtJudgment,
      publicSourceIds.bdrPilkhanaNationalProbeSummary,
      publicSourceIds.bdrPilkhanaHumanRights,
      publicSourceIds.bdrPilkhanaAmnesty,
      publicSourceIds.bdrPilkhanaCommission,
      publicSourceIds.bdrPilkhanaCommissionFindings,
      publicSourceIds.bdrPilkhanaAppeals,
      publicSourceIds.bdrPilkhanaBssJustice
    ],
    newsIds: [
      publicNewsIds.bdrPilkhanaCommission,
      publicNewsIds.bdrPilkhanaCourtJudgment,
      publicNewsIds.bdrPilkhanaHumanRights,
      publicNewsIds.bdrPilkhanaAmnesty,
      publicNewsIds.bdrPilkhanaAppeals,
      publicNewsIds.bdrPilkhanaBssJustice
    ],
    subjectResponseIds: [],
    editorialContextBn:
      "আদালতের রায়, মানবাধিকার সংস্থার সাক্ষ্যভিত্তিক প্রতিবেদন এবং পরবর্তী কমিশনের finding এক জিনিস নয়। ব্যক্তির ভূমিকা কেবল যে উৎসে যতটুকু বলা হয়েছে ততটুকুই দেখাতে হবে।",
    editorialContextEn:
      "The court judgment, interview-based human-rights reporting, and later commission findings are not equivalent. Each person's role should be displayed only to the extent supported by the relevant source.",
    isDisputed: true,
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];

export const bdrPilkhanaCases: CaseRecord[] = [
  {
    id: caseId,
    isDemo: false,
    slug: "bdr-pilkhana-massacre-criminal-case",
    caseNumber:
      "Death reference and criminal appeals; individual case numbers not consolidated in cited reports",
    titleBn: "পিলখানা বিডিআর হত্যাকাণ্ডের ফৌজদারি মামলা ও আপিল",
    titleEn: "Pilkhana BDR killings criminal case and appeals",
    summaryBn:
      "নিম্ন আদালত ও হাইকোর্টের দণ্ডের পর পিলখানা হত্যাকাণ্ড-সংক্রান্ত কয়েকটি আপিল আপিল বিভাগে বিচারাধীন বলে ২০২৬ সালের প্রতিবেদনে জানানো হয়েছে।",
    summaryEn:
      "After trial-court and High Court convictions, several appeals in the Pilkhana killings cases were reported as pending before the Appellate Division in 2026.",
    descriptionBn:
      "এই case record-এ ২০০৯ সালের ঘটনাকে ঘিরে criminal trial, conviction, acquittal/commutation context এবং pending appeals আলাদা করা হয়েছে। ২০২৫ সালের পুনঃতদন্ত কমিশনের finding এই court posture-এর সমতুল্য নয়।",
    descriptionEn:
      "This case record separates the criminal trial, convictions, acquittal/commutation context, and pending appeals connected to the 2009 events. The 2025 reinvestigation commission's findings are not equivalent to this court posture.",
    category: "HOMICIDE_RELATED",
    legalStatus: "CONVICTION_UNDER_APPEAL",
    jurisdiction: "Bangladesh",
    authority: "Bangladesh courts",
    courtName: "Dhaka trial court, High Court Division, and Appellate Division",
    filedAt: "2009-02-25",
    startedAt: "2013-11-05",
    evidenceSummaryBn:
      "সুপ্রিম কোর্টের প্রকাশিত রায়, ২০১৭ সালের হাইকোর্টের দণ্ড-সংক্রান্ত প্রতিবেদন এবং ২০২৬ সালের pending-appeal reporting এই record-এর ভিত্তি।",
    evidenceSummaryEn:
      "The published Supreme Court judgment, reporting on the 2017 High Court verdict, and 2026 reporting on pending appeals support this record.",
    personLinks: [
      {
        personId: publicPersonIds.shakilAhmedBdr,
        caseId,
        role: "OTHER",
        legalPosition: "Deceased victim identified in the court record",
        noteBn: "আদালতের রেকর্ডে নিহত বিডিআর মহাপরিচালক হিসেবে উল্লেখিত।",
        noteEn: "Identified in the court record as the deceased BDR director general."
      },
      {
        personId: publicPersonIds.sheikhHasina,
        caseId,
        role: "OTHER",
        legalPosition: "Prime minister and crisis-response official described in the judgment",
        noteBn:
          "রায়ে সংকট-প্রতিক্রিয়ার সরকারি কর্মকর্তা হিসেবে ভূমিকা বর্ণিত; তাকে এই criminal case-এর accused বলা হচ্ছে না।",
        noteEn:
          "Her crisis-response role is described in the judgment; she is not listed here as an accused in this criminal case."
      }
    ],
    sourceIds: [
      publicSourceIds.bdrPilkhanaCourtJudgment,
      publicSourceIds.bdrPilkhanaNationalProbeSummary,
      publicSourceIds.bdrPilkhanaHumanRights,
      publicSourceIds.bdrPilkhanaAmnesty,
      publicSourceIds.bdrPilkhanaAppeals,
      publicSourceIds.bdrPilkhanaBssJustice
    ],
    subjectResponseIds: [],
    tags: [],
    timelineEvents: [
      {
        id: "00000000-0000-4000-8000-000000000571",
        date: "2009-02-25",
        titleBn: "পিলখানা বিদ্রোহ ও হত্যাকাণ্ড শুরু",
        titleEn: "Pilkhana mutiny and killings begin",
        descriptionBn:
          "বিডিআর সপ্তাহের দরবারে সশস্ত্র বিদ্রোহ শুরু হয় এবং পরবর্তী ৩৩ ঘণ্টায় ৭৪ জন নিহত হন বলে আদালত ও BSS প্রতিবেদনে উল্লেখ আছে।",
        descriptionEn:
          "An armed mutiny began during the BDR week darbar; court and BSS reporting say 74 people were killed over the following 33 hours.",
        sourceIds: [publicSourceIds.bdrPilkhanaCourtJudgment, publicSourceIds.bdrPilkhanaBssJustice]
      },
      {
        id: "00000000-0000-4000-8000-000000000572",
        date: "2013-11-05",
        titleBn: "নিম্ন আদালতের রায়",
        titleEn: "Trial-court verdict",
        descriptionBn:
          "প্রকাশ্য সংবাদ প্রতিবেদনে BDR mutiny criminal case-এ মৃত্যুদণ্ড ও যাবজ্জীবন দণ্ডের কথা বলা হয়েছে।",
        descriptionEn:
          "Public reporting described death and life sentences in the BDR mutiny criminal case.",
        sourceIds: [publicSourceIds.bdrPilkhanaCourtJudgment]
      },
      {
        id: "00000000-0000-4000-8000-000000000573",
        date: "2017-11-27",
        titleBn: "হাইকোর্টের দণ্ড-সংক্রান্ত রায়",
        titleEn: "High Court conviction judgment",
        descriptionBn:
          "হাইকোর্ট ১৩৯ জনের মৃত্যুদণ্ড বহাল এবং অন্যদের সাজা পরিবর্তন/খালাসের কথা সংবাদে এসেছে।",
        descriptionEn:
          "Reporting described the High Court upholding 139 death sentences and altering or acquitting other defendants.",
        sourceIds: [publicSourceIds.bdrPilkhanaCourtJudgment]
      },
      {
        id: "00000000-0000-4000-8000-000000000574",
        date: "2024-12-24",
        titleBn: "পুনঃতদন্ত কমিশন গঠন",
        titleEn: "Reinvestigation commission formed",
        descriptionBn: "সরকার জাতীয় স্বাধীন তদন্ত কমিশন গঠনের কথা ঘোষণা করে।",
        descriptionEn: "The government announced a National Independent Investigation Commission.",
        sourceIds: [publicSourceIds.bdrPilkhanaCommission]
      },
      {
        id: "00000000-0000-4000-8000-000000000575",
        date: "2025-11-30",
        titleBn: "কমিশনের প্রতিবেদন",
        titleEn: "Commission report",
        descriptionBn:
          "TBS কমিশনের reported findings প্রকাশ করে; এগুলো commission finding, court judgment নয়।",
        descriptionEn:
          "TBS reported the commission's findings; these are commission findings, not a criminal-court judgment.",
        sourceIds: [publicSourceIds.bdrPilkhanaCommissionFindings]
      },
      {
        id: "00000000-0000-4000-8000-000000000576",
        date: "2026-02-25",
        titleBn: "আপিল বিচারাধীন থাকার পুনর্ব্যক্তি",
        titleEn: "Pending appeals reaffirmed",
        descriptionBn:
          "BSS জানায়, কয়েকটি আপিল আপিল বিভাগে বিচারাধীন এবং কমিশনের সুপারিশ ধাপে বাস্তবায়নের কথা বলা হয়েছে।",
        descriptionEn:
          "BSS reported that several appeals remained pending before the Appellate Division and that commission recommendations would be implemented in phases.",
        sourceIds: [publicSourceIds.bdrPilkhanaBssJustice]
      }
    ],
    relatedCaseIds: [],
    lastVerifiedAt: "2026-08-08",
    publicationStatus: "PUBLISHED",
    updatedAt: "2026-08-08"
  }
];

export const bdrPilkhanaImpactRecords: ImpactRecord[] = [
  {
    id: publicImpactIds.bdrPilkhanaHumanRights,
    isDemo: false,
    incidentId,
    claimId,
    impactType: "HUMAN_RIGHTS",
    summaryBn:
      "আদালতের রেকর্ড ও সরকারি প্রতিবেদনে ৭৪ জন নিহত হওয়ার কথা আছে, যার মধ্যে ৫৭ জন সেনা কর্মকর্তা; HRW ও Amnesty post-mutiny আটক, নির্যাতন, custodial death এবং fair-trial concerns নথিবদ্ধ করেছে।",
    summaryEn:
      "The court record and government reporting identify 74 deaths, including 57 army officers; HRW and Amnesty documented post-mutiny detention, torture, custodial-death, and fair-trial concerns.",
    affectedAreaIds: [publicAreaIds.dhaka, areaId],
    affectedOrganizationIds: [],
    sourceIds: [
      publicSourceIds.bdrPilkhanaCourtJudgment,
      publicSourceIds.bdrPilkhanaHumanRights,
      publicSourceIds.bdrPilkhanaAmnesty,
      publicSourceIds.bdrPilkhanaBssJustice
    ],
    verificationStatus: "CROSS_CHECKED"
  }
];

export const bdrPilkhanaIncidents: IncidentRecord[] = [
  {
    id: incidentId,
    isDemo: false,
    slug: "bdr-pilkhana-massacre-2009",
    titleBn: "২০০৯ সালের বিডিআর বিদ্রোহ ও পিলখানা হত্যাকাণ্ড",
    titleEn: "2009 BDR mutiny and Pilkhana killings",
    summaryBn:
      "২০০৯ সালের ২৫-২৬ ফেব্রুয়ারি ঢাকার পিলখানায় তৎকালীন বাংলাদেশ রাইফেলস সদর দপ্তরে সশস্ত্র বিদ্রোহ, ৭৪ জনের মৃত্যু, পরবর্তী ফৌজদারি বিচার, মানবাধিকার প্রতিবেদন এবং পুনঃতদন্ত কমিশনের রেকর্ড।",
    summaryEn:
      "The February 25-26, 2009 armed mutiny at the former Bangladesh Rifles headquarters in Pilkhana, Dhaka, the deaths of 74 people, subsequent criminal trials, human-rights reporting, and reinvestigation proceedings.",
    descriptionBn:
      "বিডিআর সপ্তাহের দরবার চলাকালে পিলখানায় সশস্ত্র বিদ্রোহ শুরু হয়। সুপ্রিম কোর্টের রায়ে ৭৪ জন নিহত, যার মধ্যে ৫৭ জন সেনা কর্মকর্তা, উল্লেখ আছে। ২০০৯ সালের জাতীয় তদন্ত ও পরবর্তী আদালত-রেকর্ড এক ধরনের narrative দেয়; HRW ও Amnesty post-mutiny torture, custodial death এবং fair-trial concerns নথিবদ্ধ করে। ২০২৪-২৫ সালের পুনঃতদন্ত কমিশনের finding-কে আলাদা official inquiry layer হিসেবে রাখা হয়েছে এবং তা চূড়ান্ত criminal judgment হিসেবে দেখানো হয়নি।",
    descriptionEn:
      "An armed mutiny began at Pilkhana during the BDR week darbar. The Supreme Court judgment records 74 deaths, including 57 army officers. The 2009 national inquiry and subsequent court record provide one account, while HRW and Amnesty documented post-mutiny torture, custodial-death, and fair-trial concerns. The 2024-25 reinvestigation commission is represented as a separate official-inquiry layer, not as a final criminal judgment.",
    incidentType: "POLITICAL_VIOLENCE",
    periodStart: "2009-02-25",
    periodEnd: "2009-02-26",
    areaIds: [publicAreaIds.dhaka, areaId],
    personLinks: [
      {
        personId: publicPersonIds.shakilAhmedBdr,
        role: "VICTIM",
        noteBn: "আদালতের রেকর্ডে পিলখানায় নিহত তৎকালীন বিডিআর মহাপরিচালক হিসেবে উল্লেখিত।",
        noteEn:
          "Identified in the court record as the then BDR director general killed at Pilkhana."
      },
      {
        personId: publicPersonIds.sheikhHasina,
        role: "OFFICIAL",
        noteBn:
          "তৎকালীন প্রধানমন্ত্রী ও সংকট-প্রতিক্রিয়ার সরকারি সিদ্ধান্তগ্রহণকারী হিসেবে আদালতের রেকর্ডে ভূমিকা বর্ণিত; এই event link তাকে হত্যার জন্য দায়ী বলে না।",
        noteEn:
          "Then prime minister whose crisis-response role is described in the court record; this event link does not assign responsibility for the killings."
      },
      {
        personId: publicPersonIds.saharaKhatun,
        role: "OFFICIAL",
        noteBn:
          "তৎকালীন স্বরাষ্ট্রমন্ত্রী হিসেবে তথ্য গ্রহণ ও প্রয়োজনীয় response steps-এর সঙ্গে আদালতের রেকর্ডে যুক্ত।",
        noteEn:
          "Linked in the court record to receiving information and directing necessary response steps as home minister."
      },
      {
        personId: publicPersonIds.sheikhFazleNoorTaposh,
        role: "OFFICIAL",
        noteBn:
          "HRW-এর উদ্ধৃত সরকারি তদন্ত-সারাংশে সরকারের সঙ্গে BDR সদস্যদের আলোচনায় conduit হিসেবে উল্লেখিত; এটি হত্যার দায়ের finding নয়।",
        noteEn:
          "The government-inquiry summary cited by HRW identifies him as a conduit in discussions with BDR members; this is not a finding of responsibility for the killings."
      },
      {
        personId: publicPersonIds.sheikhFazlulKarimSelim,
        role: "OFFICIAL",
        noteBn:
          "HRW-এর উদ্ধৃত সরকারি তদন্ত-সারাংশে সরকারের সঙ্গে আলোচনার conduit হিসেবে উল্লেখিত; এটি হত্যার দায়ের finding নয়।",
        noteEn:
          "The government-inquiry summary cited by HRW identifies him as a conduit in discussions; this is not a finding of responsibility for the killings."
      },
      {
        personId: publicPersonIds.jahangirKabirNanak,
        role: "OFFICIAL",
        noteBn:
          "সুপ্রিম কোর্টের রায়ে পিলখানায় প্রবেশ করে পরিবার ও কর্মকর্তাদের উদ্ধারে অংশ নেওয়া সরকারি/সংসদীয় ব্যক্তিদের মধ্যে উল্লেখিত।",
        noteEn:
          "The Supreme Court judgment identifies him among public and parliamentary figures who entered Pilkhana during the rescue effort."
      },
      {
        personId: publicPersonIds.mirzaAzam,
        role: "OFFICIAL",
        noteBn:
          "সুপ্রিম কোর্টের রায়ে পিলখানায় প্রবেশ ও উদ্ধার-প্রচেষ্টায় অংশ নেওয়া whip/সংসদ সদস্য হিসেবে উল্লেখিত।",
        noteEn:
          "The Supreme Court judgment identifies him as a whip and parliamentarian involved in entering Pilkhana during the rescue effort."
      }
    ],
    organizationIds: [],
    institutionIds: [
      publicInstitutionIds.borderGuardsBangladesh,
      publicInstitutionIds.bangladeshArmy,
      publicInstitutionIds.ministryOfHomeAffairs,
      publicInstitutionIds.bdrIndependentInvestigationCommission
    ],
    claimIds: [claimId],
    caseIds: [caseId],
    sourceIds: [
      publicSourceIds.bdrPilkhanaCourtJudgment,
      publicSourceIds.bdrPilkhanaNationalProbeSummary,
      publicSourceIds.bdrPilkhanaHumanRights,
      publicSourceIds.bdrPilkhanaAmnesty,
      publicSourceIds.bdrPilkhanaCommission,
      publicSourceIds.bdrPilkhanaCommissionFindings,
      publicSourceIds.bdrPilkhanaAppeals,
      publicSourceIds.bdrPilkhanaBssJustice
    ],
    newsIds: [
      publicNewsIds.bdrPilkhanaCommission,
      publicNewsIds.bdrPilkhanaCourtJudgment,
      publicNewsIds.bdrPilkhanaHumanRights,
      publicNewsIds.bdrPilkhanaAmnesty,
      publicNewsIds.bdrPilkhanaAppeals,
      publicNewsIds.bdrPilkhanaBssJustice
    ],
    impactRecordIds: [publicImpactIds.bdrPilkhanaHumanRights],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];

export const bdrPilkhanaNewsRecords: NewsRecord[] = [
  {
    id: publicNewsIds.bdrPilkhanaCommission,
    isDemo: false,
    slug: "bss-bdr-pilkhana-commission-2024",
    title: "Govt announces full-fledged commission to reinvestigate BDR carnage",
    publisher: "Bangladesh Sangbad Sangstha",
    agency: "BSS",
    newsType: "ARTICLE",
    sourceUrl: "https://www.bssnews.net/news/233268",
    summary: "BSS report on the 2024 National Independent Investigation Commission.",
    publishedAt: "2024-12-24",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.bdrPilkhanaCourtJudgment,
    isDemo: false,
    slug: "supreme-court-bdr-pilkhana-judgment",
    title: "Supreme Court judgment in BDR carnage death reference and appeals",
    publisher: "Supreme Court of Bangladesh",
    agency: "Supreme Court of Bangladesh",
    newsType: "DOCUMENTARY",
    sourceUrl: "https://www.supremecourt.gov.bd/resources/documents/769454_DeathRef58of2013_3.pdf",
    summary: "Published court judgment describing the Pilkhana event and criminal appeal record.",
    publishedAt: "2017-11-27",
    strength: "HIGH",
    verificationStatus: "PRIMARY_SOURCE_VERIFIED",
    caseIds: [caseId],
    personIds: relatedPeople,
    categories: ["HOMICIDE_RELATED"],
    isActive: true
  },
  {
    id: publicNewsIds.bdrPilkhanaHumanRights,
    isDemo: false,
    slug: "human-rights-watch-bdr-mutiny-2012",
    title:
      "The Fear Never Leaves Me: Torture, Custodial Deaths, and Unfair Trials after the 2009 Mutiny",
    publisher: "Human Rights Watch",
    agency: "Human Rights Watch",
    newsType: "DOCUMENTARY",
    sourceUrl:
      "https://www.hrw.org/report/2012/07/04/fear-never-leaves-me/torture-custodial-deaths-and-unfair-trials-after-2009-mutiny",
    summary:
      "Human Rights Watch report on post-mutiny detention, torture, deaths in custody, and fair-trial concerns.",
    publishedAt: "2012-07-04",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.bdrPilkhanaAmnesty,
    isDemo: false,
    slug: "amnesty-bdr-mutineers-trial-2009",
    title: "Bangladesh: Looking for justice: Mutineers on trial",
    publisher: "Amnesty International",
    agency: "Amnesty International",
    newsType: "DOCUMENTARY",
    sourceUrl: "https://www.amnesty.org/en/documents/ASA13/006/2009/en/",
    summary:
      "Amnesty International report on the mutiny, deaths, torture allegations, and fair-trial standards.",
    publishedAt: "2009-04-01",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.bdrPilkhanaAppeals,
    isDemo: false,
    slug: "tbs-bdr-pilkhana-pending-appeals-2024",
    title: "Govt halts plan for BDR mutiny commission amid pending appeals",
    publisher: "The Business Standard",
    agency: "The Business Standard",
    newsType: "ARTICLE",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/govt-halts-plan-bdr-mutiny-commission-amid-pending-appeals-1018991",
    summary:
      "Report on the interaction between proposed reinvestigation and pending Appellate Division appeals.",
    publishedAt: "2024-12-15",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.bdrPilkhanaBssJustice,
    isDemo: false,
    slug: "bss-pilkhana-justice-pending-appeals-2026",
    title: "Home Minister vows justice over Pilkhana carnage, rules out new probe commission",
    publisher: "Bangladesh Sangbad Sangstha",
    agency: "BSS",
    newsType: "ARTICLE",
    sourceUrl: "https://www.bssnews.net/news-flash/363726",
    summary:
      "BSS report on pending appeals and phased implementation of commission recommendations in 2026.",
    publishedAt: "2026-02-25",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: [],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  }
];
