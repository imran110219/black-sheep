import type {
  Area,
  ClaimRecord,
  GeographicAssociation,
  ImpactRecord,
  IncidentRecord,
  Institution,
  InstitutionAssociation
} from "@/domain/claim";
import type { CaseRecord } from "@/domain/case";
import type { CorrectionRecord, SubjectResponse } from "@/domain/correction";
import type { NewsRecord } from "@/domain/news";
import type { RelationshipRecord } from "@/domain/relationship";
import type { RevisionRecord } from "@/domain/revision";
import {
  publicAreaIds,
  publicAssociationIds,
  publicCaseIds,
  publicClaimIds,
  publicCorrectionIds,
  publicImpactIds,
  publicIncidentIds,
  publicInstitutionIds,
  publicNewsIds,
  publicPersonIds,
  publicRelationshipIds,
  publicRevisionIds,
  publicSourceIds
} from "../ids";

const hasina = publicPersonIds.sheikhHasina;
const mamun = publicPersonIds.chowdhuryAbdullahAlMamun;
const ictCase = publicCaseIds.sheikhHasinaIctJulyUprising;
const julyIncident = publicIncidentIds.sheikhHasinaJulyAugustUprising;

export const sheikhHasinaAreas: Area[] = [
  {
    id: publicAreaIds.bangladesh,
    isDemo: false,
    slug: "bangladesh",
    nameBn: "বাংলাদেশ",
    nameEn: "Bangladesh",
    type: "COUNTRY",
    country: "Bangladesh",
    summaryBn:
      "শেখ হাসিনার জাতীয় রাজনৈতিক ক্ষমতা, সরকার পরিচালনা ও ২০২৪-পরবর্তী জবাবদিহির প্রধান ভৌগোলিক প্রেক্ষাপট।",
    summaryEn:
      "The national geographic context for Sheikh Hasina's political power, government tenure, and post-2024 accountability record."
  },
  {
    id: publicAreaIds.dhaka,
    isDemo: false,
    slug: "dhaka",
    nameBn: "ঢাকা",
    nameEn: "Dhaka",
    type: "CITY",
    parentId: publicAreaIds.bangladesh,
    country: "Bangladesh",
    summaryBn: "জাতীয় সরকার, আইসিটি বিচার ও ২০২৪ সালের গণ-আন্দোলনের কেন্দ্রীয় রাজনৈতিক এলাকা।",
    summaryEn:
      "Central political area for national government, ICT proceedings, and the 2024 mass uprising."
  },
  {
    id: publicAreaIds.gopalganj3,
    isDemo: false,
    slug: "gopalganj-3",
    nameBn: "গোপালগঞ্জ-৩",
    nameEn: "Gopalganj-3",
    type: "CONSTITUENCY",
    parentId: publicAreaIds.bangladesh,
    country: "Bangladesh",
    summaryBn:
      "প্রকাশ্য দলীয় জীবনী ও সংসদীয় রেকর্ডে শেখ হাসিনার দীর্ঘদিনের নির্বাচনী ভিত্তি হিসেবে আলোচিত আসন।",
    summaryEn:
      "A constituency described in public biographical and parliamentary context as Sheikh Hasina's long-running electoral base."
  },
  {
    id: publicAreaIds.rangpur,
    isDemo: false,
    slug: "rangpur",
    nameBn: "রংপুর",
    nameEn: "Rangpur",
    type: "CITY",
    parentId: publicAreaIds.bangladesh,
    country: "Bangladesh",
    summaryBn:
      "ওএইচসিএইচআর রিপোর্টে আবু সাঈদ হত্যাকাণ্ডের বিস্তারিত বিশ্লেষণের একটি গুরুত্বপূর্ণ স্থান।",
    summaryEn: "A key location in the OHCHR report's detailed analysis of the killing of Abu Sayed."
  },
  {
    id: publicAreaIds.ashulia,
    isDemo: false,
    slug: "ashulia",
    nameBn: "আশুলিয়া",
    nameEn: "Ashulia",
    type: "LOCALITY",
    parentId: publicAreaIds.dhaka,
    country: "Bangladesh",
    summaryBn:
      "আইসিটি অভিযোগে ২০২৪ সালের ৫ আগস্টের আশুলিয়া হত্যাকাণ্ড আলাদা গণহত্যা-সম্পর্কিত ঘটনারূপে উল্লেখিত।",
    summaryEn:
      "The ICT charges identify Ashulia as a separate August 5, 2024 mass-killing-related incident location."
  }
];

export const sheikhHasinaInstitutions: Institution[] = [
  {
    id: publicInstitutionIds.awamiLeague,
    isDemo: false,
    slug: "bangladesh-awami-league",
    nameBn: "বাংলাদেশ আওয়ামী লীগ",
    nameEn: "Bangladesh Awami League",
    type: "POLITICAL_PARTY",
    summaryBn:
      "শেখ হাসিনার দলীয় নেতৃত্ব, রাজনৈতিক ক্ষমতার ভিত্তি এবং ২০২৪ আন্দোলন-সংক্রান্ত জনস্বার্থ আলোচনার কেন্দ্রীয় দল।",
    summaryEn:
      "The political party central to Sheikh Hasina's leadership, power base, and public-interest discussion of the 2024 uprising.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka],
    website: "https://www.albd.org/",
    tagIds: []
  },
  {
    id: publicInstitutionIds.governmentOfBangladesh,
    isDemo: false,
    slug: "government-of-bangladesh",
    nameBn: "বাংলাদেশ সরকার",
    nameEn: "Government of Bangladesh",
    type: "GOVERNMENT_AGENCY",
    summaryBn:
      "২০০৯-২০২৪ সময়ের সরকার পরিচালনা, নির্বাহী ক্ষমতা ও প্রতিবাদ দমনের অভিযোগ/ফাইন্ডিংয়ের প্রাতিষ্ঠানিক প্রেক্ষাপট।",
    summaryEn:
      "Institutional context for government tenure, executive authority, and findings/allegations concerning protest repression from 2009 to 2024.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka],
    tagIds: []
  },
  {
    id: publicInstitutionIds.internationalCrimesTribunal1,
    isDemo: false,
    slug: "international-crimes-tribunal-1",
    nameBn: "আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল-১",
    nameEn: "International Crimes Tribunal-1",
    type: "GOVERNMENT_AGENCY",
    summaryBn:
      "জুলাই গণ-অভ্যুত্থান-সংক্রান্ত মানবতাবিরোধী অপরাধ মামলায় অভিযোগ গঠন, বিচার ও রায়ের আদালত।",
    summaryEn:
      "The tribunal reported as framing charges, trying, and delivering judgment in the July Mass Uprising crimes-against-humanity case.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.dhaka],
    tagIds: []
  },
  {
    id: publicInstitutionIds.bangladeshPolice,
    isDemo: false,
    slug: "bangladesh-police",
    nameBn: "বাংলাদেশ পুলিশ",
    nameEn: "Bangladesh Police",
    type: "SECURITY_AGENCY",
    summaryBn:
      "ওএইচসিএইচআর রিপোর্টে ২০২৪ সালের প্রতিবাদে নিরাপত্তা বাহিনীর গুলি, গ্রেপ্তার ও নির্যাতন-সংক্রান্ত ফাইন্ডিংয়ের প্রাতিষ্ঠানিক প্রেক্ষাপট।",
    summaryEn:
      "Security-force context for OHCHR findings concerning shootings, arrests, and torture during the 2024 protests.",
    country: "Bangladesh",
    areaIds: [publicAreaIds.bangladesh],
    tagIds: []
  },
  {
    id: publicInstitutionIds.ohchr,
    isDemo: false,
    slug: "un-ohchr",
    nameBn: "জাতিসংঘ মানবাধিকার হাইকমিশনারের কার্যালয়",
    nameEn: "UN Office of the High Commissioner for Human Rights",
    type: "GOVERNMENT_AGENCY",
    summaryBn:
      "২০২৪ সালের জুলাই-আগস্ট প্রতিবাদ-সংক্রান্ত মানবাধিকার fact-finding report প্রকাশকারী জাতিসংঘ সংস্থা।",
    summaryEn:
      "UN body that published the human-rights fact-finding report on the July-August 2024 protests.",
    country: "International",
    areaIds: [publicAreaIds.bangladesh],
    website: "https://www.ohchr.org/",
    tagIds: []
  }
];

export const sheikhHasinaClaims: ClaimRecord[] = [
  {
    id: publicClaimIds.sheikhHasinaJulyUprisingRightsFindings,
    isDemo: false,
    slug: "sheikh-hasina-july-uprising-rights-findings",
    personIds: [hasina],
    titleBn: "২০২৪ সালের জুলাই-আগস্ট প্রতিবাদে মানবাধিকার লঙ্ঘন বিষয়ে জাতিসংঘের ফাইন্ডিং",
    titleEn: "UN findings on human-rights violations during the July-August 2024 protests",
    summaryBn:
      "ওএইচসিএইচআর রিপোর্টে সাবেক সরকার, নিরাপত্তা ও গোয়েন্দা সংস্থা এবং আওয়ামী লীগ-সংশ্লিষ্ট সহিংস উপাদানের মাধ্যমে গুরুতর মানবাধিকার লঙ্ঘনের ফাইন্ডিং প্রকাশ করা হয়েছে।",
    summaryEn:
      "The OHCHR report records findings of serious human-rights violations involving the former government, security and intelligence services, and violent elements associated with the Awami League.",
    type: "HUMAN_RIGHTS_ABUSE",
    status: "OFFICIAL_FINDING",
    verificationStatus: "PRIMARY_SOURCE_VERIFIED",
    startDate: "2024-07-01",
    endDate: "2024-08-15",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka, publicAreaIds.rangpur],
    organizationIds: [],
    institutionIds: [
      publicInstitutionIds.governmentOfBangladesh,
      publicInstitutionIds.bangladeshPolice,
      publicInstitutionIds.ohchr
    ],
    relatedClaimIds: [publicClaimIds.sheikhHasinaIctCommandResponsibility],
    caseIds: [ictCase],
    sourceIds: [publicSourceIds.sheikhHasinaOhchrFactFinding],
    newsIds: [],
    subjectResponseIds: [],
    editorialContextBn:
      "এই দাবি জাতিসংঘের fact-finding report-এর ফাইন্ডিং; এটি আইসিটি রায়ের সমতুল্য নয়, তবে পরবর্তী বিচারিক প্রেক্ষাপটের গুরুত্বপূর্ণ উৎস।",
    editorialContextEn:
      "This claim reflects findings from a UN fact-finding report; it is not the same as the ICT judgment but is important evidence-layer context.",
    isDisputed: false,
    lastVerifiedAt: "2026-08-07",
    updatedAt: "2026-08-07"
  },
  {
    id: publicClaimIds.sheikhHasinaIctCommandResponsibility,
    isDemo: false,
    slug: "sheikh-hasina-ict-command-responsibility",
    personIds: [hasina, mamun],
    titleBn: "জুলাই গণ-অভ্যুত্থান মামলায় আইসিটি-১-এর superior command responsibility রায়",
    titleEn: "ICT-1 superior command responsibility judgment in the July Mass Uprising case",
    summaryBn:
      "বিএসএসের প্রতিবেদন অনুযায়ী আইসিটি-১ শেখ হাসিনা ও আসাদুজ্জামান খান কামালকে মানবতাবিরোধী অপরাধে দোষী সাব্যস্ত করে এবং নির্দিষ্ট অভিযোগে মৃত্যুদণ্ড দেয়; সাবেক আইজিপি চৌধুরী আবদুল্লাহ আল-মামুন approver হিসেবে পাঁচ বছরের দণ্ড পান।",
    summaryEn:
      "BSS reported that ICT-1 convicted Sheikh Hasina and Asaduzzaman Khan Kamal of crimes against humanity, imposed the death sentence on specified counts, and sentenced former IGP Chowdhury Abdullah Al-Mamun to five years after treating him as an approver.",
    type: "HISTORICAL_RESPONSIBILITY",
    status: "JUDICIALLY_ESTABLISHED",
    verificationStatus: "REVIEWED",
    startDate: "2024-07-01",
    endDate: "2025-12-15",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka, publicAreaIds.ashulia],
    organizationIds: [],
    institutionIds: [publicInstitutionIds.internationalCrimesTribunal1],
    relatedClaimIds: [publicClaimIds.sheikhHasinaJulyUprisingRightsFindings],
    caseIds: [ictCase],
    sourceIds: [
      publicSourceIds.sheikhHasinaBssIctCharges,
      publicSourceIds.sheikhHasinaBssIctJudgment,
      publicSourceIds.sheikhHasinaBssIctAppeal,
      publicSourceIds.sheikhHasinaApVerdictResponse
    ],
    newsIds: [publicNewsIds.sheikhHasinaBssCharges, publicNewsIds.sheikhHasinaBssAppeal],
    subjectResponseIds: [],
    editorialContextBn:
      "রেকর্ডটি আদালত-প্রতিবেদিত দণ্ড হিসেবে দেখানো হয়েছে; একই সঙ্গে তার অস্বীকৃতি ও আপিল-সংক্রান্ত অবস্থাও evidence layer-এ রাখা হয়েছে।",
    editorialContextEn:
      "This is shown as a court-reported conviction/sentence while preserving her denial and appeal-related posture in the evidence layer.",
    isDisputed: true,
    lastVerifiedAt: "2026-08-07",
    updatedAt: "2026-08-07"
  },
  {
    id: publicClaimIds.sheikhHasinaElectionControversies,
    isDemo: false,
    slug: "sheikh-hasina-election-controversies",
    personIds: [hasina],
    titleBn: "২০১৪, ২০১৮ ও ২০২৪ নির্বাচনের বিতর্কিত রাজনৈতিক প্রেক্ষাপট",
    titleEn: "Contested political context around the 2014, 2018, and 2024 elections",
    summaryBn:
      "বিশ্লেষণধর্মী প্রতিবেদনে তার শাসনামলে নির্বাচন, বিরোধী রাজনীতি ও গণতান্ত্রিক পরিসর নিয়ে বিতর্কের প্রসঙ্গ তুলে ধরা হয়েছে।",
    summaryEn:
      "Analytical reporting discusses election controversies, opposition politics, and democratic-space concerns during her years in power.",
    type: "ELECTION_INTERFERENCE",
    status: "REPORTED",
    verificationStatus: "REVIEWED",
    startDate: "2014-01-05",
    endDate: "2024-01-07",
    areaIds: [publicAreaIds.bangladesh],
    organizationIds: [],
    institutionIds: [publicInstitutionIds.awamiLeague, publicInstitutionIds.governmentOfBangladesh],
    relatedClaimIds: [publicClaimIds.sheikhHasinaExecutiveCentralisation],
    caseIds: [],
    sourceIds: [publicSourceIds.sheikhHasinaDailyStarIronGrip],
    newsIds: [],
    subjectResponseIds: [],
    editorialContextBn:
      "এটি বিচারিক রায় নয়; নির্বাচনী ও শাসনব্যবস্থা নিয়ে বিশ্লেষণধর্মী রিপোর্টিং হিসেবে উপস্থাপিত।",
    editorialContextEn:
      "This is not a judicial finding; it is presented as analytical reporting about elections and governance.",
    isDisputed: true,
    lastVerifiedAt: "2026-08-07",
    updatedAt: "2026-08-07"
  },
  {
    id: publicClaimIds.sheikhHasinaExecutiveCentralisation,
    isDemo: false,
    slug: "sheikh-hasina-executive-centralisation",
    personIds: [hasina],
    titleBn: "দীর্ঘ শাসনামলে নির্বাহী ক্ষমতা কেন্দ্রীকরণের সমালোচনা",
    titleEn: "Criticism of executive centralisation during long tenure",
    summaryBn:
      "জনস্বার্থ বিশ্লেষণে দীর্ঘ প্রধানমন্ত্রিত্ব, দলীয় নিয়ন্ত্রণ, রাষ্ট্রীয় প্রতিষ্ঠান ও checks and balances দুর্বল হওয়ার সমালোচনা আলোচিত হয়েছে।",
    summaryEn:
      "Public-interest analysis discusses criticism of long premiership, party control, state institutions, and weakened checks and balances.",
    type: "GOVERNMENT_CONTROL",
    status: "REPORTED",
    verificationStatus: "REVIEWED",
    startDate: "2009-01-06",
    endDate: "2024-08-05",
    areaIds: [publicAreaIds.bangladesh, publicAreaIds.dhaka],
    organizationIds: [],
    institutionIds: [publicInstitutionIds.governmentOfBangladesh, publicInstitutionIds.awamiLeague],
    relatedClaimIds: [publicClaimIds.sheikhHasinaElectionControversies],
    caseIds: [],
    sourceIds: [publicSourceIds.sheikhHasinaDailyStarIronGrip],
    newsIds: [],
    subjectResponseIds: [],
    editorialContextBn: "এটি ঐতিহাসিক/রাজনৈতিক ব্যাখ্যা; নির্দিষ্ট অপরাধ প্রমাণের দাবি হিসেবে নয়।",
    editorialContextEn:
      "This is historical/political interpretation, not a claim that a specific crime has been proven.",
    isDisputed: true,
    lastVerifiedAt: "2026-08-07",
    updatedAt: "2026-08-07"
  }
];

export const sheikhHasinaCases: CaseRecord[] = [
  {
    id: ictCase,
    isDemo: false,
    slug: "sheikh-hasina-ict-july-uprising-case",
    caseNumber: "Criminal Appeal No 96/2025 referenced after ICT-1 judgment",
    titleBn: "জুলাই গণ-অভ্যুত্থান-সংক্রান্ত আইসিটি-১ মানবতাবিরোধী অপরাধ মামলা",
    titleEn: "ICT-1 crimes-against-humanity case concerning the July Mass Uprising",
    summaryBn:
      "আইসিটি-১ জুলাই-আগস্ট ২০২৪ গণ-অভ্যুত্থান দমনের ঘটনায় শেখ হাসিনা, আসাদুজ্জামান খান কামাল ও চৌধুরী আবদুল্লাহ আল-মামুনের বিরুদ্ধে মানবতাবিরোধী অপরাধের অভিযোগ গঠন, বিচার ও রায় প্রদান করেছে বলে বিএসএস প্রতিবেদন করেছে।",
    summaryEn:
      "BSS reported that ICT-1 framed charges, conducted proceedings, and delivered judgment against Sheikh Hasina, Asaduzzaman Khan Kamal, and Chowdhury Abdullah Al-Mamun in a crimes-against-humanity case over the July-August 2024 uprising.",
    descriptionBn:
      "২০২৫ সালের ১ জুন আনুষ্ঠানিক অভিযোগ দাখিল, ১০ জুলাই অভিযোগ গঠন, ১৭ নভেম্বর রায় এবং ১৫ ডিসেম্বর আপিল-সংক্রান্ত প্রতিবেদন এই মামলা-রেকর্ডের ভিত্তি। রেকর্ডে দণ্ড, অস্বীকৃতি ও আপিল-সংক্রান্ত অবস্থান আলাদা করে রাখা হয়েছে।",
    descriptionEn:
      "The record is based on reports of formal charges on June 1, charge framing on July 10, judgment on November 17, and appeal-related reporting on December 15, 2025. It separates conviction/sentence, denial, and appeal posture.",
    category: "HUMAN_RIGHTS_ABUSE",
    legalStatus: "CONVICTION_UNDER_APPEAL",
    jurisdiction: "Bangladesh",
    authority: "International Crimes Tribunal prosecution",
    courtName: "International Crimes Tribunal-1",
    filedAt: "2025-06-01",
    startedAt: "2025-07-10",
    resolvedAt: "2025-11-17",
    verdict:
      "BSS reported that ICT-1 convicted Sheikh Hasina and Asaduzzaman Khan Kamal of crimes against humanity in connection with the July Mass Uprising.",
    sentence:
      "BSS reported imprisonment till natural death on one charge and death sentence on another; AP and other wire coverage reported a death sentence in absentia.",
    outcomeBn:
      "আদালত-প্রতিবেদিত দণ্ড আছে, তবে শেখ হাসিনা রায়কে পক্ষপাতদুষ্ট ও রাজনৈতিক উদ্দেশ্যপ্রণোদিত বলেছেন; আপিল/আত্মসমর্পণ/গ্রেপ্তার posture আলাদা প্রসঙ্গ।",
    outcomeEn:
      "There is a court-reported conviction and sentence, while Sheikh Hasina has called the verdict biased and politically motivated; appeal/surrender/arrest posture remains separate context.",
    evidenceSummaryBn:
      "বিএসএসের অভিযোগ গঠন, রায় ও আপিল-সংক্রান্ত প্রতিবেদন, এপি প্রতিক্রিয়া প্রতিবেদন এবং ওএইচসিএইচআর fact-finding report এই রেকর্ডকে সমর্থন করে।",
    evidenceSummaryEn:
      "BSS charge-framing, judgment, and appeal reporting, AP response coverage, and the OHCHR fact-finding report support this record.",
    personLinks: [
      {
        personId: hasina,
        caseId: ictCase,
        role: "CONVICTED_PERSON",
        legalPosition: "Convicted in absentia according to reported ICT-1 judgment",
        noteBn:
          "আইসিটি-১ রায়-সংক্রান্ত প্রতিবেদনে তাকে দণ্ডিত বলা হয়েছে; তার অস্বীকৃতি ও রাজনৈতিক উদ্দেশ্যপ্রণোদিত বলার জবাব আলাদা রাখা হয়েছে।",
        noteEn:
          "ICT-1 judgment reporting describes her as convicted; her denial and claim of political motivation are kept separately."
      },
      {
        personId: mamun,
        caseId: ictCase,
        role: "CONVICTED_PERSON",
        legalPosition: "Former IGP and reported approver in the same case",
        noteBn:
          "বিএসএসের প্রতিবেদনে সাবেক আইজিপি চৌধুরী আবদুল্লাহ আল-মামুনকে একই মামলায় approver হিসেবে পাঁচ বছরের দণ্ড পাওয়া ব্যক্তি হিসেবে উল্লেখ করা হয়েছে।",
        noteEn:
          "BSS reported former IGP Chowdhury Abdullah Al-Mamun as an approver who received a five-year sentence in the same case."
      }
    ],
    sourceIds: [
      publicSourceIds.sheikhHasinaBssIctCharges,
      publicSourceIds.sheikhHasinaBssIctJudgment,
      publicSourceIds.sheikhHasinaBssIctAppeal,
      publicSourceIds.sheikhHasinaApVerdictResponse,
      publicSourceIds.sheikhHasinaOhchrFactFinding
    ],
    subjectResponseIds: [],
    tags: [],
    timelineEvents: [
      {
        id: "00000000-0000-4000-8000-000000000541",
        date: "2025-06-01",
        titleBn: "আনুষ্ঠানিক অভিযোগ দাখিল",
        titleEn: "Formal charges filed",
        descriptionBn:
          "বিএসএস জানায়, আইসিটি প্রসিকিউশন জুলাই গণ-অভ্যুত্থান-সংক্রান্ত মানবতাবিরোধী অপরাধের আনুষ্ঠানিক অভিযোগ দাখিল করে।",
        descriptionEn:
          "BSS reported that the ICT prosecution filed formal crimes-against-humanity charges concerning the July Mass Uprising.",
        sourceIds: [publicSourceIds.sheikhHasinaBssIctFormalCharge]
      },
      {
        id: "00000000-0000-4000-8000-000000000542",
        date: "2025-07-10",
        titleBn: "অভিযোগ গঠন",
        titleEn: "Charges framed",
        descriptionBn:
          "আইসিটি-১ অভিযোগ গঠন করে এবং আনুষ্ঠানিক বিচার শুরু হয় বলে বিএসএস প্রতিবেদন করে।",
        descriptionEn: "BSS reported that ICT-1 framed charges and formal trial proceedings began.",
        sourceIds: [publicSourceIds.sheikhHasinaBssIctCharges]
      },
      {
        id: "00000000-0000-4000-8000-000000000543",
        date: "2025-11-17",
        titleBn: "রায় ও দণ্ড",
        titleEn: "Judgment and sentence",
        descriptionBn:
          "বিএসএস ও আন্তর্জাতিক সংবাদমাধ্যমে আইসিটি-১ রায়, দণ্ড এবং in absentia প্রক্রিয়া প্রতিবেদন করা হয়।",
        descriptionEn:
          "BSS and international media reported the ICT-1 judgment, sentence, and in-absentia posture.",
        sourceIds: [
          publicSourceIds.sheikhHasinaBssIctJudgment,
          publicSourceIds.sheikhHasinaApVerdictResponse
        ]
      },
      {
        id: "00000000-0000-4000-8000-000000000544",
        date: "2025-12-15",
        titleBn: "আপিল-সংক্রান্ত প্রতিবেদন",
        titleEn: "Appeal-related reporting",
        descriptionBn: "বিএসএস জানায়, প্রসিকিউশন নির্দিষ্ট দণ্ড বাড়ানোর জন্য আপিল করেছে।",
        descriptionEn:
          "BSS reported that the prosecution filed an appeal seeking enhancement of specified sentences.",
        sourceIds: [publicSourceIds.sheikhHasinaBssIctAppeal]
      }
    ],
    relatedCaseIds: [],
    lastVerifiedAt: "2026-08-07",
    publicationStatus: "PUBLISHED",
    updatedAt: "2026-08-07"
  }
];

export const sheikhHasinaIncidents: IncidentRecord[] = [
  {
    id: julyIncident,
    isDemo: false,
    slug: "july-august-2024-bangladesh-uprising",
    titleBn: "২০২৪ সালের জুলাই-আগস্ট গণ-অভ্যুত্থান ও দমন-পীড়ন",
    titleEn: "July-August 2024 Bangladesh uprising and crackdown",
    summaryBn:
      "ওএইচসিএইচআর, বিএসএস এবং আন্তর্জাতিক সংবাদমাধ্যমে ২০২৪ সালের ছাত্র-নেতৃত্বাধীন প্রতিবাদ, সহিংস দমন, হতাহতের সংখ্যা, সরকারের পতন এবং পরবর্তী আইসিটি বিচার প্রসঙ্গে বিস্তারিত প্রতিবেদন প্রকাশিত হয়েছে।",
    summaryEn:
      "OHCHR, BSS, and international media have reported on the 2024 student-led protests, violent repression, deaths and injuries, government fall, and subsequent ICT proceedings.",
    descriptionBn:
      "প্রতিবাদ শুরু হয় সরকারি চাকরির কোটা নিয়ে, পরে তা বৃহত্তর শাসনব্যবস্থা ও রাজনৈতিক অসন্তোষে রূপ নেয়। ওএইচসিএইচআর রিপোর্ট সাবেক সরকার ও নিরাপত্তা সংস্থার নীতি ও কর্মকাণ্ড নিয়ে গুরুতর ফাইন্ডিং প্রকাশ করে; আইসিটি মামলা এই ঘটনাপ্রবাহের বিচারিক স্তর।",
    descriptionEn:
      "The protests began over public-service quotas and grew into broader political and governance unrest. The OHCHR report records serious findings about former-government and security-force policy and conduct; the ICT case is the judicial layer connected to this history.",
    incidentType: "HUMAN_RIGHTS_ABUSE",
    periodStart: "2024-07-01",
    periodEnd: "2024-08-15",
    areaIds: [
      publicAreaIds.bangladesh,
      publicAreaIds.dhaka,
      publicAreaIds.rangpur,
      publicAreaIds.ashulia
    ],
    personLinks: [
      {
        personId: hasina,
        role: "DECISION_MAKER",
        noteBn:
          "ওএইচসিএইচআর রিপোর্টে সাবেক রাজনৈতিক নেতৃত্বের জ্ঞান, সমন্বয় ও নির্দেশনার প্রসঙ্গ এসেছে; আইসিটি রায়ে superior command responsibility বিচারিকভাবে উল্লেখিত বলে প্রতিবেদন করা হয়েছে।",
        noteEn:
          "OHCHR reported concerns about knowledge, coordination, and direction by political leadership; BSS reported ICT-1 findings under superior command responsibility."
      },
      {
        personId: mamun,
        role: "OFFICIAL",
        noteBn:
          "বিএসএসের আইসিটি প্রতিবেদনে তাকে সাবেক আইজিপি, সহ-অভিযুক্ত এবং পরে approver হিসেবে উল্লেখ করা হয়েছে।",
        noteEn: "BSS ICT reporting identifies him as former IGP, co-accused, and later approver."
      }
    ],
    organizationIds: [],
    institutionIds: [
      publicInstitutionIds.governmentOfBangladesh,
      publicInstitutionIds.bangladeshPolice,
      publicInstitutionIds.internationalCrimesTribunal1,
      publicInstitutionIds.ohchr
    ],
    claimIds: [
      publicClaimIds.sheikhHasinaJulyUprisingRightsFindings,
      publicClaimIds.sheikhHasinaIctCommandResponsibility
    ],
    caseIds: [ictCase],
    sourceIds: [
      publicSourceIds.sheikhHasinaOhchrFactFinding,
      publicSourceIds.sheikhHasinaBssIctCharges,
      publicSourceIds.sheikhHasinaBssIctJudgment,
      publicSourceIds.sheikhHasinaApVerdictResponse
    ],
    newsIds: [publicNewsIds.sheikhHasinaBssCharges, publicNewsIds.sheikhHasinaApReturnStatement],
    impactRecordIds: [publicImpactIds.sheikhHasinaJulyUprisingHumanRights],
    lastVerifiedAt: "2026-08-07",
    updatedAt: "2026-08-07"
  }
];

export const sheikhHasinaImpactRecords: ImpactRecord[] = [
  {
    id: publicImpactIds.sheikhHasinaJulyUprisingHumanRights,
    isDemo: false,
    incidentId: julyIncident,
    claimId: publicClaimIds.sheikhHasinaJulyUprisingRightsFindings,
    personId: hasina,
    impactType: "HUMAN_RIGHTS",
    summaryBn:
      "ওএইচসিএইচআর রিপোর্টে ২০২৪ সালের ১ জুলাই থেকে ১৫ আগস্ট পর্যন্ত প্রায় ১,৪০০ জন নিহত হতে পারে এবং হাজারো আহত হয় বলে credible sources-এর ভিত্তিতে অনুমান করা হয়েছে; সংখ্যাগুলো উৎস-নির্ভর অনুমান হিসেবে দেখাতে হবে।",
    summaryEn:
      "The OHCHR report estimates, based on credible sources, that as many as 1,400 people may have been killed and thousands injured between July 1 and August 15, 2024; these numbers should be displayed as source-based estimates.",
    affectedAreaIds: [
      publicAreaIds.bangladesh,
      publicAreaIds.dhaka,
      publicAreaIds.rangpur,
      publicAreaIds.ashulia
    ],
    affectedOrganizationIds: [],
    sourceIds: [publicSourceIds.sheikhHasinaOhchrFactFinding],
    verificationStatus: "PRIMARY_SOURCE_VERIFIED"
  }
];

export const sheikhHasinaInstitutionAssociations: InstitutionAssociation[] = [
  {
    id: publicAssociationIds.sheikhHasinaAwamiLeagueRole,
    isDemo: false,
    personId: hasina,
    institutionId: publicInstitutionIds.awamiLeague,
    relationshipType: "OFFICIAL_ROLE",
    startDate: "1981-02-01",
    summaryBn: "দলীয় জীবনীতে ১৯৮১ সাল থেকে আওয়ামী লীগ সভাপতি হিসেবে তার নেতৃত্বের উল্লেখ আছে।",
    summaryEn: "The party biography describes her leadership as Awami League president from 1981.",
    claimIds: [publicClaimIds.sheikhHasinaExecutiveCentralisation],
    sourceIds: [publicSourceIds.sheikhHasinaAwamiLeagueProfile],
    verificationStatus: "REVIEWED"
  },
  {
    id: publicAssociationIds.sheikhHasinaGovernmentRole,
    isDemo: false,
    personId: hasina,
    institutionId: publicInstitutionIds.governmentOfBangladesh,
    relationshipType: "OFFICIAL_ROLE",
    startDate: "1996-06-23",
    endDate: "2024-08-05",
    summaryBn:
      "প্রকাশ্য জীবনী ও সংবাদসূত্রে তাকে বাংলাদেশের সাবেক প্রধানমন্ত্রী হিসেবে উল্লেখ করা হয়; ২০০৯-২০২৪ সময়কাল ছিল ধারাবাহিক শাসনের সবচেয়ে দীর্ঘ পর্যায়।",
    summaryEn:
      "Public biographical and news sources identify her as a former prime minister of Bangladesh, with 2009-2024 as the longest continuous period in office.",
    claimIds: [
      publicClaimIds.sheikhHasinaElectionControversies,
      publicClaimIds.sheikhHasinaExecutiveCentralisation
    ],
    sourceIds: [
      publicSourceIds.sheikhHasinaAwamiLeagueProfile,
      publicSourceIds.sheikhHasinaDailyStarIronGrip
    ],
    verificationStatus: "REVIEWED"
  },
  {
    id: publicAssociationIds.sheikhHasinaIctCaseRole,
    isDemo: false,
    personId: hasina,
    institutionId: publicInstitutionIds.internationalCrimesTribunal1,
    relationshipType: "OTHER",
    startDate: "2025-06-01",
    summaryBn:
      "আইসিটি-১-এ তিনি জুলাই গণ-অভ্যুত্থান-সংক্রান্ত মানবতাবিরোধী অপরাধ মামলার অভিযুক্ত ও পরে দণ্ডিত ব্যক্তি হিসেবে প্রতিবেদনভুক্ত।",
    summaryEn:
      "She is reported as an accused and later convicted person in the ICT-1 July Mass Uprising crimes-against-humanity case.",
    claimIds: [publicClaimIds.sheikhHasinaIctCommandResponsibility],
    sourceIds: [
      publicSourceIds.sheikhHasinaBssIctCharges,
      publicSourceIds.sheikhHasinaBssIctJudgment
    ],
    verificationStatus: "REVIEWED"
  }
];

export const sheikhHasinaGeographicAssociations: GeographicAssociation[] = [
  {
    id: publicAssociationIds.sheikhHasinaBangladeshInfluence,
    isDemo: false,
    personId: hasina,
    areaId: publicAreaIds.bangladesh,
    relationType: "AREA_OF_INFLUENCE",
    startDate: "1981-02-01",
    summaryBn:
      "জাতীয় দলীয় নেতৃত্ব ও বহু মেয়াদে প্রধানমন্ত্রী থাকার কারণে তার প্রভাবের ক্ষেত্র জাতীয় পর্যায়ের।",
    summaryEn:
      "Her area of influence is national because of party leadership and multiple prime-ministerial terms.",
    claimIds: [
      publicClaimIds.sheikhHasinaElectionControversies,
      publicClaimIds.sheikhHasinaExecutiveCentralisation
    ],
    sourceIds: [
      publicSourceIds.sheikhHasinaAwamiLeagueProfile,
      publicSourceIds.sheikhHasinaDailyStarIronGrip
    ],
    verificationStatus: "REVIEWED"
  },
  {
    id: publicAssociationIds.sheikhHasinaGopalganjConstituency,
    isDemo: false,
    personId: hasina,
    areaId: publicAreaIds.gopalganj3,
    relationType: "CONSTITUENCY",
    summaryBn:
      "দলীয় জীবনী ও প্রকাশ্য জীবনীতে গোপালগঞ্জ-৩ আসনের সঙ্গে তার সংসদীয় রাজনৈতিক ভিত্তি যুক্ত।",
    summaryEn:
      "Party and public biographical sources connect her parliamentary political base to Gopalganj-3.",
    claimIds: [],
    sourceIds: [
      publicSourceIds.sheikhHasinaAwamiLeagueProfile,
      publicSourceIds.sheikhHasinaWikipedia
    ],
    verificationStatus: "REVIEWED"
  },
  {
    id: publicAssociationIds.sheikhHasinaDhakaPowerBase,
    isDemo: false,
    personId: hasina,
    areaId: publicAreaIds.dhaka,
    relationType: "ADMINISTRATIVE_CONTROL",
    startDate: "1996-06-23",
    endDate: "2024-08-05",
    summaryBn:
      "ঢাকা জাতীয় সরকার, প্রধানমন্ত্রীর কার্যালয়, আইসিটি বিচার এবং ২০২৪ সালের কেন্দ্রীয় প্রতিবাদ-রাজনীতির প্রশাসনিক কেন্দ্র।",
    summaryEn:
      "Dhaka is the administrative center for national government, prime-ministerial office, ICT proceedings, and central protest politics in 2024.",
    claimIds: [
      publicClaimIds.sheikhHasinaJulyUprisingRightsFindings,
      publicClaimIds.sheikhHasinaIctCommandResponsibility
    ],
    sourceIds: [
      publicSourceIds.sheikhHasinaOhchrFactFinding,
      publicSourceIds.sheikhHasinaBssIctCharges
    ],
    verificationStatus: "REVIEWED"
  }
];

export const sheikhHasinaRelationships: RelationshipRecord[] = [
  {
    id: publicRelationshipIds.sheikhHasinaMamunIctCoDefendant,
    isDemo: false,
    fromPersonId: hasina,
    toPersonId: mamun,
    relationshipType: "CO_DEFENDANT",
    summaryBn:
      "বিএসএসের আইসিটি প্রতিবেদন শেখ হাসিনা ও সাবেক আইজিপি চৌধুরী আবদুল্লাহ আল-মামুনকে একই জুলাই গণ-অভ্যুত্থান মামলায় যুক্ত করেছে; মামুনকে পরে approver হিসেবে উল্লেখ করা হয়েছে।",
    summaryEn:
      "BSS ICT reporting links Sheikh Hasina and former IGP Chowdhury Abdullah Al-Mamun in the same July Mass Uprising case and later identifies Mamun as an approver.",
    sourceIds: [
      publicSourceIds.sheikhHasinaBssIctCharges,
      publicSourceIds.sheikhHasinaBssIctJudgment
    ],
    verificationStatus: "REVIEWED",
    isActive: true,
    updatedAt: "2026-08-07"
  }
];

export const sheikhHasinaNewsRecords: NewsRecord[] = [
  {
    id: publicNewsIds.sheikhHasinaBssCharges,
    isDemo: false,
    slug: "sheikh-hasina-bss-ict-charges-2025",
    title: "ICT frames charges against Sheikh Hasina for July-Aug mass killing",
    publisher: "Bangladesh Sangbad Sangstha",
    agency: "BSS",
    newsType: "ARTICLE",
    sourceUrl: "https://www.bssnews.net/news-flash/290892",
    summary:
      "BSS reported that ICT-1 framed crimes-against-humanity charges against Sheikh Hasina and others and rejected a discharge plea.",
    publishedAt: "2025-07-10",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [ictCase],
    personIds: [hasina, mamun],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.sheikhHasinaBssAppeal,
    isDemo: false,
    slug: "sheikh-hasina-bss-ict-appeal-2025",
    title: "ICT prosecution files appeal to enhance Hasina's sentence to death",
    publisher: "Bangladesh Sangbad Sangstha",
    agency: "BSS",
    newsType: "ARTICLE",
    sourceUrl: "https://www.bssnews.net/news-flash/342213",
    summary:
      "BSS reported appeal-related proceedings after the ICT-1 judgment, including conviction details and sentence-enhancement request.",
    publishedAt: "2025-12-15",
    strength: "HIGH",
    verificationStatus: "REVIEWED",
    caseIds: [ictCase],
    personIds: [hasina, mamun],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  },
  {
    id: publicNewsIds.sheikhHasinaApReturnStatement,
    isDemo: false,
    slug: "sheikh-hasina-ap-return-statement-2026",
    title: "Ousted Bangladeshi leader Sheikh Hasina says she will return from exile in December",
    publisher: "Associated Press",
    agency: "AP",
    newsType: "ARTICLE",
    sourceUrl: "https://apnews.com/article/eb64bc5b38eb570044091295778bf3df",
    summary:
      "AP reported Hasina's August 2026 statement that she intends to return from India in December while facing the reported death sentence and extradition demands.",
    publishedAt: "2026-08-05",
    strength: "MEDIUM",
    verificationStatus: "SOURCE_LOCATED",
    caseIds: [ictCase],
    personIds: [hasina],
    categories: ["HUMAN_RIGHTS_ABUSE"],
    isActive: true
  }
];

export const sheikhHasinaSubjectResponses: SubjectResponse[] = [
  {
    id: "00000000-0000-4000-8000-000000000561",
    isDemo: false,
    personId: hasina,
    caseId: ictCase,
    responseBn:
      "এপি ও অন্যান্য আন্তর্জাতিক প্রতিবেদনে শেখ হাসিনার অস্বীকৃতি, রায়কে পক্ষপাতদুষ্ট/রাজনৈতিক উদ্দেশ্যপ্রণোদিত বলা এবং স্বাধীন আদালতে মুখোমুখি হওয়ার বক্তব্য প্রকাশিত হয়েছে।",
    responseEn:
      "AP and other international reporting carried Sheikh Hasina's denial, her description of the verdict as biased/politically motivated, and her stated willingness to face an independent court.",
    responseSourceUrl:
      "https://apnews.com/article/bangladesh-hasina-verdict-yunus-security-c1eec828e68460bae66824601a94eaca",
    receivedAt: "2025-11-17",
    publishedAt: "2025-11-17",
    verificationStatus: "REVIEWED"
  }
];

export const sheikhHasinaCorrections: CorrectionRecord[] = [
  {
    id: publicCorrectionIds.sheikhHasinaStructuredEvidenceUpgrade,
    isDemo: false,
    entityType: "PERSON",
    entityId: hasina,
    titleBn: "স্টোরি, নেটওয়ার্ক ও evidence layer আলাদা করা হয়েছে",
    titleEn: "Story, network, and evidence layers separated",
    correctionBn:
      "প্রোফাইলের পূর্বের সারাংশকে source-backed claims, incident, case, associations, response এবং impact records-এ ভাগ করা হয়েছে যাতে অভিযোগ, ফাইন্ডিং, দণ্ড ও জবাব আলাদা থাকে।",
    correctionEn:
      "The previous profile summary was separated into source-backed claims, incident, case, associations, response, and impact records so allegations, findings, sentence, and response remain distinct.",
    correctedAt: "2026-08-07",
    sourceIds: [
      publicSourceIds.sheikhHasinaOhchrFactFinding,
      publicSourceIds.sheikhHasinaBssIctCharges,
      publicSourceIds.sheikhHasinaBssIctJudgment,
      publicSourceIds.sheikhHasinaApVerdictResponse
    ],
    status: "PUBLISHED"
  }
];

export const sheikhHasinaRevisions: RevisionRecord[] = [
  {
    id: publicRevisionIds.sheikhHasinaStoryNetworkEvidenceRevision,
    isDemo: false,
    entityType: "PERSON",
    entityId: hasina,
    version: 2,
    changeSummaryBn:
      "শেখ হাসিনা প্রোফাইলে source-backed claims, incident, case, institutions, geographic associations, subject response, correction এবং impact records যুক্ত করা হয়েছে।",
    changeSummaryEn:
      "Added source-backed claims, incident, case, institutions, geographic associations, subject response, correction, and impact records to the Sheikh Hasina profile.",
    changedAt: "2026-08-07",
    publicNote:
      "Structured enrichment based on public sources; demo scaffold records remain separate."
  }
];
