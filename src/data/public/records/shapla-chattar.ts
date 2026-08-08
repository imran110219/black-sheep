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

const incidentId = publicIncidentIds.shaplaChattarCrackdown2013;
const caseId = publicCaseIds.shaplaChattarCrackdownTribunal;
const claimId = publicClaimIds.shaplaChattarCrackdownAccountability;
const areaId = publicAreaIds.motijheelShaplaChattar;
const institutionId = publicInstitutionIds.hefazatEIslamBangladesh;

const accusedPeople = [
  publicPersonIds.sheikhHasina,
  publicPersonIds.hasanulHaqInu,
  publicPersonIds.abdurRazzaque,
  publicPersonIds.dipuMoni,
  publicPersonIds.jahangirKabirNanak,
  publicPersonIds.mahbubulAlamHanif,
  publicPersonIds.hasanMahmud,
  publicPersonIds.benazirAhmed,
  publicPersonIds.ziaulAhsan,
  publicPersonIds.azizAhmed,
  publicPersonIds.monirulIslam,
  publicPersonIds.harunOrRashid,
  publicPersonIds.biplobKumarSarker,
  publicPersonIds.mohiuddinKhanAlamgir,
  publicPersonIds.shamsulHaqueTuku,
  publicPersonIds.sheikhFazlulKarimSelim,
  publicPersonIds.afmBahauddinNasim,
  publicPersonIds.abdulLatifSiddique,
  publicPersonIds.mrinalKantiDas,
  publicPersonIds.mofazzalHossainChowdhuryMaya,
  publicPersonIds.omarFarukChowdhury,
  publicPersonIds.salahuddinMahmud,
  publicPersonIds.imranHSarker,
  publicPersonIds.shahriarKabir,
  publicPersonIds.mozammelHaqueBabu,
  publicPersonIds.farzanaRupa,
  publicPersonIds.hasanMahmudKhandaker,
  publicPersonIds.akmShahidulHoque
];

const caseLink = (personId: string, legalPosition: string, noteBn: string, noteEn: string) => ({
  personId,
  caseId,
  role: "ACCUSED" as const,
  legalPosition,
  noteBn,
  noteEn
});

export const shaplaChattarAreas: Area[] = [
  {
    id: areaId,
    isDemo: false,
    slug: "motijheel-shapla-chattar",
    nameBn: "মতিঝিল-শাপলা চত্বর",
    nameEn: "Motijheel-Shapla Chattar",
    type: "LOCALITY",
    parentId: publicAreaIds.dhaka,
    country: "Bangladesh",
    summaryBn:
      "২০১৩ সালের হেফাজত সমাবেশ, অভিযান এবং পরবর্তী জবাবদিহি-প্রক্রিয়ার সঙ্গে যুক্ত ঢাকার একটি জনসম্মুখ এলাকা।",
    summaryEn:
      "A public locality in Dhaka associated with the 2013 Hefazat rally, the subsequent operation, and later accountability proceedings."
  }
];

export const shaplaChattarInstitutions: Institution[] = [
  {
    id: institutionId,
    isDemo: false,
    slug: "hefazat-e-islam-bangladesh",
    nameBn: "হেফাজতে ইসলাম বাংলাদেশ",
    nameEn: "Hefazat-e-Islam Bangladesh",
    type: "RELIGIOUS_INSTITUTION",
    summaryBn:
      "২০১৩ সালের মে মাসে মতিঝিলের শাপলা চত্বরে সমাবেশের আয়োজনকারী ধর্মভিত্তিক সংগঠন হিসেবে সংবাদ ও পরবর্তী ট্রাইব্যুনাল প্রতিবেদনে উল্লেখিত।",
    summaryEn:
      "A religious organization identified in reporting as the organizer of the May 2013 rally at Motijheel's Shapla Chattar and in later tribunal proceedings.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.dhaka, areaId],
    tagIds: []
  }
];

export const shaplaChattarClaims: ClaimRecord[] = [
  {
    id: claimId,
    isDemo: false,
    slug: "shapla-chattar-2013-crackdown-accountability",
    personIds: accusedPeople,
    titleBn: "২০১৩ সালের শাপলা চত্বর অভিযান ও জবাবদিহি নিয়ে অভিযোগ",
    titleEn: "Claims and accountability proceedings concerning the 2013 Shapla Chattar crackdown",
    summaryBn:
      "২০১৩ সালের ৫-৬ মে হেফাজত সমাবেশ ঘিরে অভিযান, হতাহতের সংখ্যা ও রাষ্ট্রীয় বলপ্রয়োগ নিয়ে অধিকার সংগঠন, মানবাধিকার প্রতিবেদন এবং পরবর্তী আইসিটি কার্যক্রমে ভিন্ন ভিন্ন বর্ণনা রয়েছে।",
    summaryEn:
      "Rights groups, human-rights reporting, and later ICT proceedings present differing accounts of the May 5-6, 2013 operation, casualties, and use of state force around the Hefazat rally.",
    type: "HUMAN_RIGHTS_ABUSE",
    status: "OFFICIALLY_INVESTIGATED",
    verificationStatus: "CROSS_CHECKED",
    startDate: "2013-05-05",
    endDate: "2013-05-06",
    areaIds: [publicAreaIds.dhaka, areaId],
    organizationIds: [],
    institutionIds: [institutionId, publicInstitutionIds.bangladeshPolice],
    relatedClaimIds: [],
    caseIds: [caseId],
    sourceIds: [
      publicSourceIds.shaplaChattarTbsTribunal,
      publicSourceIds.shaplaChattarBssTribunal,
      publicSourceIds.shaplaChattarBdnewsTribunal,
      publicSourceIds.shaplaChattarDailyStarWarrants,
      publicSourceIds.shaplaChattarHumanRightsWatch,
      publicSourceIds.shaplaChattarOdhikarReport
    ],
    newsIds: [
      publicNewsIds.shaplaChattarTbsTribunal,
      publicNewsIds.shaplaChattarBssTribunal,
      publicNewsIds.shaplaChattarDailyStarWarrants,
      publicNewsIds.shaplaChattarBdnewsTribunal
    ],
    subjectResponseIds: [],
    editorialContextBn:
      "আইসিটি-২ আনুষ্ঠানিক অভিযোগ আমলে নিয়েছে বলে ২০২৬ সালের প্রতিবেদনগুলোতে উল্লেখ আছে; এটি চূড়ান্ত বিচারিক ফাইন্ডিং বা দোষী সাব্যস্ত হওয়ার সমতুল্য নয়। হতাহতের সংখ্যা ও ঘটনার বর্ণনা উৎসভেদে ভিন্ন, তাই প্রতিটি সংখ্যা ও বক্তব্যের উৎস আলাদাভাবে দেখাতে হবে।",
    editorialContextEn:
      "Reports from 2026 say ICT-2 took cognisance of formal charges; that is not a final judicial finding or conviction. Casualty figures and event narratives differ by source, so each figure and account must remain attributed.",
    isDisputed: true,
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];

export const shaplaChattarCases: CaseRecord[] = [
  {
    id: caseId,
    isDemo: false,
    slug: "shapla-chattar-crackdown-tribunal-proceeding",
    caseNumber: "Case number not stated in cited reports",
    titleBn: "শাপলা চত্বর অভিযান-সংক্রান্ত মানবতাবিরোধী অপরাধের কার্যক্রম",
    titleEn: "Crimes-against-humanity proceeding concerning the Shapla Chattar crackdown",
    summaryBn:
      "২০১৩ সালের শাপলা চত্বর ঘটনাপ্রবাহ নিয়ে আইসিটি-২ আনুষ্ঠানিক অভিযোগ আমলে নিয়েছে; ২০২৬ সালের প্রতিবেদনে বিচার-পূর্ব প্রক্রিয়া ও পলাতক আসামিদের বিরুদ্ধে পরোয়ানার কথা বলা হয়েছে।",
    summaryEn:
      "ICT-2 has taken cognisance of formal charges concerning the 2013 Shapla Chattar events; 2026 reports describe a pre-trial proceeding and warrants for absconding accused.",
    descriptionBn:
      "এই রেকর্ডটি ২০১৩ সালের ঘটনা এবং ২০২৪ সালে দায়ের করা অভিযোগের পর ২০২৫-২৬ সালের ট্রাইব্যুনাল কার্যক্রমকে একসঙ্গে দেখায়। এখানে অভিযুক্ত ব্যক্তিদের ভূমিকা অভিযোগপত্রে বর্ণিত আইনি অবস্থান; চূড়ান্ত দায় বা দোষী সাব্যস্ত হওয়ার সিদ্ধান্ত নয়।",
    descriptionEn:
      "This record connects the 2013 events with the tribunal proceedings reported after a complaint filed in 2024 and warrant and charge-related steps in 2025-26. The listed people have the legal position reported in the charge proceeding, not a final finding of responsibility or guilt.",
    category: "HUMAN_RIGHTS_ABUSE",
    legalStatus: "TRIAL_PENDING",
    jurisdiction: "Bangladesh",
    authority: "International Crimes Tribunal",
    courtName: "International Crimes Tribunal-2",
    filedAt: "2024-08-20",
    startedAt: "2024-08-20",
    evidenceSummaryBn:
      "সাক্ষ্য, অধিকার সংগঠনের প্রতিবেদন, মানবাধিকার গবেষণা এবং তদন্ত-পরবর্তী ট্রাইব্যুনাল অভিযোগের কথা সংবাদসূত্রে এসেছে। মৃত্যুর সংখ্যা ও অভিযোগের বর্ণনা উৎসভেদে ভিন্ন এবং বিচারাধীন।",
    evidenceSummaryEn:
      "Reporting refers to witness material, rights-group reports, human-rights research, and post-investigation tribunal allegations. Casualty figures and allegations differ by source and remain subject to trial.",
    personLinks: [
      caseLink(
        publicPersonIds.sheikhHasina,
        "Accused in the formal-charge proceeding",
        "আনুষ্ঠানিক অভিযোগে অভিযুক্ত; এটি চূড়ান্ত রায় নয়।",
        "Named as an accused in the formal-charge proceeding; this is not a final judgment."
      ),
      ...accusedPeople
        .filter((personId) => personId !== publicPersonIds.sheikhHasina)
        .map((personId) =>
          caseLink(
            personId,
            "Accused in the formal-charge proceeding",
            "আনুষ্ঠানিক অভিযোগে অভিযুক্ত হিসেবে সংবাদে নাম এসেছে; এটি চূড়ান্ত রায় নয়।",
            "Named in reporting as accused in the formal-charge proceeding; this is not a final judgment."
          )
        )
    ],
    sourceIds: [
      publicSourceIds.shaplaChattarTbsTribunal,
      publicSourceIds.shaplaChattarBssTribunal,
      publicSourceIds.shaplaChattarBdnewsTribunal,
      publicSourceIds.shaplaChattarDailyStarWarrants,
      publicSourceIds.shaplaChattarBssInvestigation,
      publicSourceIds.shaplaChattarHumanRightsWatch,
      publicSourceIds.shaplaChattarOdhikarReport
    ],
    subjectResponseIds: [],
    tags: [],
    timelineEvents: [
      {
        id: "00000000-0000-4000-8000-000000000551",
        date: "2013-05-05",
        titleBn: "হেফাজত সমাবেশ",
        titleEn: "Hefazat rally",
        descriptionBn: "মতিঝিলের শাপলা চত্বরে হেফাজতে ইসলামের সমাবেশের প্রেক্ষাপট।",
        descriptionEn: "The context of the Hefazat-e-Islam rally at Motijheel's Shapla Chattar.",
        sourceIds: [
          publicSourceIds.shaplaChattarHumanRightsWatch,
          publicSourceIds.shaplaChattarDailyStarWarrants
        ]
      },
      {
        id: "00000000-0000-4000-8000-000000000552",
        date: "2013-05-06",
        titleBn: "অভিযান ও হতাহতের বিরোধপূর্ণ হিসাব",
        titleEn: "Operation and disputed casualty accounts",
        descriptionBn:
          "অভিযান, বলপ্রয়োগ ও হতাহতের সংখ্যা নিয়ে বিভিন্ন উৎসে ভিন্ন বিবরণ প্রকাশিত হয়।",
        descriptionEn:
          "Sources published differing accounts of the operation, use of force, and casualty figures.",
        sourceIds: [
          publicSourceIds.shaplaChattarHumanRightsWatch,
          publicSourceIds.shaplaChattarOdhikarReport
        ]
      },
      {
        id: "00000000-0000-4000-8000-000000000553",
        date: "2024-08-20",
        titleBn: "অভিযোগ দাখিল",
        titleEn: "Complaint filed",
        descriptionBn:
          "২০২৪ সালে ট্রাইব্যুনালে অভিযোগ দাখিলের কথা পরবর্তী সংবাদ প্রতিবেদনে উল্লেখ করা হয়েছে।",
        descriptionEn: "Later reporting says a complaint was filed before the tribunal in 2024.",
        sourceIds: [publicSourceIds.shaplaChattarBdnewsTribunal]
      },
      {
        id: "00000000-0000-4000-8000-000000000554",
        date: "2025-03-12",
        titleBn: "গ্রেপ্তার ও প্রোডাকশন পরোয়ানা",
        titleEn: "Arrest and production warrants",
        descriptionBn:
          "আইসিটি কয়েকজন অভিযুক্তের বিরুদ্ধে গ্রেপ্তার ও প্রোডাকশন পরোয়ানা জারির কথা সংবাদে এসেছে।",
        descriptionEn:
          "Reporting described arrest and production warrants for several accused before the ICT.",
        sourceIds: [publicSourceIds.shaplaChattarDailyStarWarrants]
      },
      {
        id: "00000000-0000-4000-8000-000000000555",
        date: "2026-07-27",
        titleBn: "আনুষ্ঠানিক অভিযোগ আমলে গ্রহণ",
        titleEn: "Formal charges taken cognisance of",
        descriptionBn:
          "আইসিটি-২ শেখ হাসিনা ও অন্য ৪০ জনের বিরুদ্ধে আনুষ্ঠানিক অভিযোগ আমলে নেয় এবং পলাতক অভিযুক্তদের জন্য পরোয়ানার কথা জানানো হয়।",
        descriptionEn:
          "ICT-2 took cognisance of formal charges against Sheikh Hasina and 40 others, with warrants reported for absconding accused.",
        sourceIds: [
          publicSourceIds.shaplaChattarTbsTribunal,
          publicSourceIds.shaplaChattarBssTribunal,
          publicSourceIds.shaplaChattarBdnewsTribunal
        ]
      }
    ],
    relatedCaseIds: [],
    lastVerifiedAt: "2026-08-08",
    publicationStatus: "PUBLISHED",
    updatedAt: "2026-08-08"
  }
];

export const shaplaChattarNewsRecords: NewsRecord[] = [
  {
    id: publicNewsIds.shaplaChattarTbsTribunal,
    isDemo: false,
    slug: "tbs-shapla-chattar-tribunal-warrants-2026",
    title:
      "Shapla Chattar killings: Tribunal issues arrest warrant for Hasina, other absconding accused",
    publisher: "The Business Standard",
    agency: "The Business Standard",
    newsType: "ARTICLE",
    sourceUrl:
      "https://www.tbsnews.net/bangladesh/shapla-chattar-killings-charges-filed-against-hasina-40-others-1498951",
    summary:
      "Report on ICT-2 taking cognisance of formal charges and issuing or maintaining warrant-related steps in the 2013 Shapla Chattar proceeding.",
    publishedAt: "2026-07-27",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: accusedPeople,
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.shaplaChattarBssTribunal,
    isDemo: false,
    slug: "bss-shapla-chattar-formal-charge-2026",
    title: "ICT-2 accepts charges against Hasina, 40 others in ‘Shapla Chattar’ crackdown case",
    publisher: "Bangladesh Sangbad Sangstha",
    agency: "BSS",
    newsType: "ARTICLE",
    sourceUrl:
      "https://www.bssnews.net/law-and-court/409253/ICT-2-accepts-charges-against-Hasina-40-others-in-%E2%80%98Shapla-Chattar%E2%80%99-crackdown-case",
    summary:
      "BSS report on the formal-charge stage, custody production, and warrants in the pending ICT proceeding.",
    publishedAt: "2026-07-27",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: accusedPeople,
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.shaplaChattarDailyStarWarrants,
    isDemo: false,
    slug: "daily-star-shapla-chattar-warrants-2025",
    title: "Shapla Chattar incident: ICT issues arrest warrants for Hasina, 4 others",
    publisher: "The Daily Star",
    agency: "The Daily Star",
    newsType: "ARTICLE",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/shapla-chattar-incident-ict-issues-arrest-warrants-hasina-4-others-3845961",
    summary:
      "Report on an earlier warrant stage and prosecution allegations in the Shapla Chattar proceeding.",
    publishedAt: "2025-03-12",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: [
      publicPersonIds.sheikhHasina,
      publicPersonIds.benazirAhmed,
      publicPersonIds.ziaulAhsan,
      publicPersonIds.biplobKumarSarker,
      publicPersonIds.harunOrRashid
    ],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.shaplaChattarBdnewsTribunal,
    isDemo: false,
    slug: "bdnews24-shapla-chattar-charges-2026",
    title: "ICT accepts charges against Hasina, 40 others over 2013 Shapla Chattar crackdown",
    publisher: "bdnews24.com",
    agency: "bdnews24.com",
    newsType: "ARTICLE",
    sourceUrl: "https://bdnews24.com/bangladesh/894bbe4af40e",
    summary:
      "Independent report on the complaint chronology, formal charges, warrants, and competing casualty accounts.",
    publishedAt: "2026-07-27",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [caseId],
    personIds: [
      publicPersonIds.sheikhHasina,
      publicPersonIds.hasanulHaqInu,
      publicPersonIds.dipuMoni,
      publicPersonIds.benazirAhmed,
      publicPersonIds.ziaulAhsan
    ],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  }
];

export const shaplaChattarIncidents: IncidentRecord[] = [
  {
    id: incidentId,
    isDemo: false,
    slug: "shapla-chattar-crackdown-2013",
    titleBn: "২০১৩ সালের শাপলা চত্বর সমাবেশ, অভিযান ও জবাবদিহি",
    titleEn: "2013 Shapla Chattar rally, crackdown, and accountability proceedings",
    summaryBn:
      "২০১৩ সালের ৫-৬ মে মতিঝিলের শাপলা চত্বরকে ঘিরে সমাবেশ, অভিযান, হতাহতের বিরোধপূর্ণ হিসাব এবং পরবর্তী আইসিটি কার্যক্রমের রেকর্ড।",
    summaryEn:
      "A record of the May 5-6, 2013 rally and operation around Motijheel's Shapla Chattar, competing casualty accounts, and later ICT proceedings.",
    descriptionBn:
      "হেফাজতে ইসলাম বাংলাদেশের সমাবেশের পর শাপলা চত্বরে অভিযান ও বলপ্রয়োগের বিষয়ে মানবাধিকার প্রতিবেদন, অধিকার সংগঠনের হিসাব এবং সরকারি/ট্রাইব্যুনাল-সংক্রান্ত প্রতিবেদন পরস্পর ভিন্ন তথ্য দিয়েছে। ২০২৪ সালে অভিযোগ দাখিল এবং ২০২৫-২৬ সালে পরোয়ানা ও আনুষ্ঠানিক অভিযোগ গ্রহণের মাধ্যমে বিষয়টি বিচারিক প্রক্রিয়ায় প্রবেশ করে। এই রেকর্ডে অভিযুক্তদের আইনি অবস্থানকে চূড়ান্ত দায় বা অপরাধ হিসেবে উপস্থাপন করা হচ্ছে না।",
    descriptionEn:
      "Human-rights reporting, a rights-group account, and government and tribunal-related reporting differ on the operation and use of force after the Hefazat-e-Islam rally at Shapla Chattar. The matter entered a judicial process through a 2024 complaint and warrant and formal-charge steps in 2025-26. This record does not present accused people's legal position as a final finding of responsibility or guilt.",
    incidentType: "GOVERNMENT_CRACKDOWN",
    periodStart: "2013-05-05",
    periodEnd: "2013-05-06",
    areaIds: [publicAreaIds.dhaka, areaId],
    personLinks: accusedPeople.map((personId) => ({
      personId,
      role: "ACCUSED" as const,
      noteBn:
        "পরবর্তী আইসিটি আনুষ্ঠানিক অভিযোগে অভিযুক্ত হিসেবে নাম এসেছে; এটি ঘটনাস্থলে ব্যক্তিগত কার্যকলাপ বা চূড়ান্ত দায়ের বিচারিক ফাইন্ডিং নয়।",
      noteEn:
        "Named as accused in the later ICT formal-charge proceeding; this is not a finding of personal conduct at the scene or final responsibility."
    })),
    organizationIds: [],
    institutionIds: [institutionId, publicInstitutionIds.bangladeshPolice],
    claimIds: [claimId],
    caseIds: [caseId],
    sourceIds: [
      publicSourceIds.shaplaChattarTbsTribunal,
      publicSourceIds.shaplaChattarBssTribunal,
      publicSourceIds.shaplaChattarBdnewsTribunal,
      publicSourceIds.shaplaChattarDailyStarWarrants,
      publicSourceIds.shaplaChattarBssInvestigation,
      publicSourceIds.shaplaChattarHumanRightsWatch,
      publicSourceIds.shaplaChattarOdhikarReport
    ],
    newsIds: [
      publicNewsIds.shaplaChattarTbsTribunal,
      publicNewsIds.shaplaChattarBssTribunal,
      publicNewsIds.shaplaChattarDailyStarWarrants,
      publicNewsIds.shaplaChattarBdnewsTribunal
    ],
    impactRecordIds: [publicImpactIds.shaplaChattarHumanRights],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];

export const shaplaChattarImpactRecords: ImpactRecord[] = [
  {
    id: publicImpactIds.shaplaChattarHumanRights,
    isDemo: false,
    incidentId,
    claimId,
    impactType: "HUMAN_RIGHTS",
    summaryBn:
      "হতাহতের সংখ্যা নিয়ে উৎসভেদে বড় পার্থক্য রয়েছে: ২০২৬ সালের ট্রাইব্যুনাল-সংক্রান্ত প্রতিবেদনে প্রসিকিউশনের ৫৮ জনের হিসাব, ২০১৩ সালের অধিকার প্রতিবেদনে ৬১ জনের দাবি এবং অন্য সমসাময়িক সরকারি হিসাবের উল্লেখ পাওয়া যায়। কোনো সংখ্যাকেই চূড়ান্ত বিচারিক ফাইন্ডিং হিসেবে দেখানো যাবে না।",
    summaryEn:
      "Casualty counts vary substantially by source: 2026 tribunal reporting refers to a prosecution account of 58 deaths, a 2013 rights report attributed 61 deaths to Odhikar, and contemporary reporting also described a lower government count. None should be presented as a final judicial finding.",
    affectedAreaIds: [publicAreaIds.dhaka, areaId],
    affectedOrganizationIds: [],
    sourceIds: [
      publicSourceIds.shaplaChattarTbsTribunal,
      publicSourceIds.shaplaChattarBdnewsTribunal,
      publicSourceIds.shaplaChattarDailyStarWarrants,
      publicSourceIds.shaplaChattarHumanRightsWatch,
      publicSourceIds.shaplaChattarOdhikarReport
    ],
    verificationStatus: "DISPUTED"
  }
];
