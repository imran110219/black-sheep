import type { IncidentRecord } from "@/domain/claim";
import { publicAreaIds, publicIncidentIds, publicPersonIds, publicSourceIds } from "../ids";

const dhaka = publicAreaIds.dhaka;

export const financialScandalIncidents: IncidentRecord[] = [
  {
    id: publicIncidentIds.hallmarkSonaliBankLoanScam,
    isDemo: false,
    slug: "hallmark-sonali-bank-loan-scam",
    titleBn: "হলমার্ক-সোনালী ব্যাংক ঋণ কেলেঙ্কারি",
    titleEn: "Hall-Mark-Sonali Bank loan scam",
    summaryBn:
      "রাষ্ট্রায়ত্ত সোনালী ব্যাংকের ঋণ অনিয়ম, দুদক মামলা এবং একটি মামলায় ২০২৪ সালের দণ্ডাদেশকে কেন্দ্র করে গড়ে ওঠা আর্থিক জবাবদিহির রেকর্ড।",
    summaryEn:
      "A financial-accountability record concerning alleged irregular loans at state-owned Sonali Bank, ACC proceedings, and a 2024 sentence in one case.",
    descriptionBn:
      "২০১০-২০১২ সময়কালে হলমার্ক-সংশ্লিষ্ট ঋণ বিতরণ নিয়ে বাংলাদেশ ব্যাংক ও সংবাদ প্রতিবেদনে অনিয়মের কথা আসে। ২০২৪ সালের আদালত-সংক্রান্ত প্রতিবেদনে তানভীর মাহমুদ, জেসমিন ইসলাম ও অন্যদের একটি সোনালী ব্যাংক loan-scam মামলায় যাবজ্জীবন সাজা পাওয়ার কথা বলা হয়। এই incident বৃহত্তর অভিযোগ, মামলা এবং নির্দিষ্ট দণ্ডাদেশকে একসঙ্গে চূড়ান্ত finding হিসেবে উপস্থাপন করে না।",
    descriptionEn:
      "During 2010-2012, Bangladesh Bank and news reporting described irregular loan disbursements connected to Hall-Mark at Sonali Bank. Court reporting in 2024 said Tanvir Mahmud, Jesmin Islam, and others received life sentences in one Sonali Bank loan-scam case. This incident does not treat the broader allegations, proceedings, and specific sentence as one universal final finding.",
    incidentType: "FINANCIAL_SCANDAL",
    periodStart: "2010-01-01",
    periodEnd: "2012-12-31",
    areaIds: [dhaka],
    personLinks: [
      {
        personId: publicPersonIds.tanvirMahmudHallmark,
        role: "SUBJECT",
        noteBn: "হলমার্ক গ্রুপের ব্যবস্থাপনা পরিচালক হিসেবে আদালত-প্রতিবেদিত মামলায় যুক্ত।",
        noteEn: "Linked as Hall-Mark Group managing director in the court-reported case context."
      },
      {
        personId: publicPersonIds.jesminIslam,
        role: "SUBJECT",
        noteBn: "হলমার্ক গ্রুপের চেয়ারপারসন হিসেবে আদালত-প্রতিবেদিত মামলায় যুক্ত।",
        noteEn: "Linked as Hall-Mark Group chairperson in the court-reported case context."
      }
    ],
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [
      publicSourceIds.hallmarkDailyStarLifeSentence,
      publicSourceIds.hallmarkDhakaTribuneLifeSentence
    ],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.basicBankLoanScam,
    isDemo: false,
    slug: "basic-bank-loan-scam",
    titleBn: "বেসিক ব্যাংক ঋণ কেলেঙ্কারি",
    titleEn: "BASIC Bank loan scam",
    summaryBn:
      "রাষ্ট্রায়ত্ত বেসিক ব্যাংকের ঋণ অনিয়ম, বাংলাদেশ ব্যাংকের পরিদর্শন এবং দুদকের মামলাকে কেন্দ্র করে গড়ে ওঠা আর্থিক খাতের জবাবদিহির রেকর্ড।",
    summaryEn:
      "A financial-sector accountability record concerning loan irregularities at state-owned BASIC Bank, Bangladesh Bank inspections, and ACC proceedings.",
    descriptionBn:
      "২০০৯-২০১২ সময়কালে বেসিক ব্যাংকের কয়েকটি শাখায় ঋণ অনুমোদন ও নথিপত্র নিয়ে অনিয়মের কথা প্রকাশ্য প্রতিবেদনে উঠে আসে। ২০২৩ সালের প্রতিবেদনগুলো সাবেক চেয়ারম্যান শেখ আবদুল হাই বাচ্চু ও অন্যদের বিরুদ্ধে দুদকের মামলা কার্যক্রমের কথা উল্লেখ করে। এই record মামলা ও অভিযোগকে চূড়ান্ত দণ্ড হিসেবে দেখায় না।",
    descriptionEn:
      "Public reporting described loan-approval and documentation irregularities at several BASIC Bank branches during 2009-2012. Reports in 2023 described ACC case activity involving former chairman Sheikh Abdul Hye Bacchu and others. This record treats the matters as allegations and proceedings, not as final convictions.",
    incidentType: "FINANCIAL_SCANDAL",
    periodStart: "2009-01-01",
    periodEnd: "2012-12-31",
    areaIds: [dhaka],
    personLinks: [
      {
        personId: publicPersonIds.sheikhAbdulHyeBacchu,
        role: "SUBJECT",
        noteBn:
          "বেসিক ব্যাংকের সাবেক চেয়ারম্যান হিসেবে দুদক মামলা ও charge-sheet reporting-এ যুক্ত।",
        noteEn: "Linked as former BASIC Bank chairman in ACC case and charge-sheet reporting."
      }
    ],
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [
      publicSourceIds.bacchuDailyStarBasicBankCases,
      publicSourceIds.bacchuBssBasicBankCase
    ],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.destinyMoneyLaundering,
    isDemo: false,
    slug: "destiny-2000-money-laundering-scandal",
    titleBn: "ডেসটিনি-২০০০ অর্থপাচার ও বিনিয়োগকারী কেলেঙ্কারি",
    titleEn: "Destiny-2000 money-laundering and investor scandal",
    summaryBn:
      "ডেসটিনি গ্রুপের MLM ও বিনিয়োগ কাঠামো, অর্থপাচার মামলা এবং আদালত-প্রতিবেদিত দণ্ডাদেশকে কেন্দ্র করে গড়ে ওঠা accountability record।",
    summaryEn:
      "An accountability record concerning Destiny Group's MLM and investment structure, money-laundering proceedings, and court-reported sentences.",
    descriptionBn:
      "২০০২-২০১২ সময়কালে ডেসটিনি গ্রুপের MLM, tree-plantation ও cooperative কার্যক্রম ঘিরে বিনিয়োগকারী অর্থ এবং অর্থপাচার নিয়ে প্রকাশ্য প্রতিবেদন হয়। ২০২২ সালের আদালত-সংক্রান্ত প্রতিবেদনে রফিকুল আমীনসহ অন্যদের money-laundering মামলায় সাজা পাওয়ার কথা বলা হয়। বিনিয়োগকারীর ক্ষতি ও প্রতিটি কোম্পানির কার্যক্রম আলাদা source-specific বিষয় হিসেবে পড়তে হবে।",
    descriptionEn:
      "From 2002-2012, public reporting focused on investor funds and money-laundering allegations around Destiny Group's MLM, tree-plantation, and cooperative operations. Court reporting in 2022 said Rafiqul Amin and others were sentenced in a money-laundering case. Investor losses and each company operation should be read as source-specific matters.",
    incidentType: "FINANCIAL_SCANDAL",
    periodStart: "2002-01-01",
    periodEnd: "2012-12-31",
    areaIds: [dhaka],
    personLinks: [
      {
        personId: publicPersonIds.rafiqulAmin,
        role: "SUBJECT",
        noteBn:
          "ডেসটিনি গ্রুপের ব্যবস্থাপনা পরিচালক হিসেবে money-laundering মামলার আদালত-প্রতিবেদনে যুক্ত।",
        noteEn:
          "Linked as Destiny Group managing director in court reporting about the money-laundering case."
      }
    ],
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [
      publicSourceIds.destinyDailyStarConviction,
      publicSourceIds.destinyDhakaTribuneConviction
    ],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.pkHalderFinancialInstitutionFraud,
    isDemo: false,
    slug: "pk-halder-financial-institution-fraud",
    titleBn: "পিকে হালদার আর্থিক প্রতিষ্ঠান ঋণ জালিয়াতি ও অর্থপাচার রেকর্ড",
    titleEn: "PK Halder financial-institution fraud and money-laundering record",
    summaryBn:
      "একাধিক non-bank financial institution-এ ঋণ অনিয়ম, অর্থপাচার মামলা, সম্পদ পুনরুদ্ধার এবং আদালত-প্রতিবেদিত দণ্ডাদেশের accountability record।",
    summaryEn:
      "An accountability record concerning loan irregularities across multiple non-bank financial institutions, money-laundering proceedings, asset recovery, and court-reported sentences.",
    descriptionBn:
      "২০০৯-২০২২ সময়কালে পিকে হালদারকে ঘিরে একাধিক non-bank financial institution-এর ঋণ, shell company এবং অর্থপাচার নিয়ে তদন্ত ও মামলা হয়েছে বলে প্রকাশ্য প্রতিবেদনে জানানো হয়। ২০২৩ সালের আদালত-সংক্রান্ত প্রতিবেদনে পিকে হালদার ও অন্যদের money-laundering মামলায় সাজা পাওয়ার কথা বলা হয়। সংশ্লিষ্ট প্রতিষ্ঠান ও পৃথক মামলাগুলো এই incident-এর সঙ্গে একীভূত চূড়ান্ত finding নয়।",
    descriptionEn:
      "From 2009-2022, public reporting described investigations and proceedings involving loans, shell companies, and money laundering across multiple non-bank financial institutions associated with PK Halder. Court reporting in 2023 said PK Halder and others were sentenced in a money-laundering case. The related institutions and separate proceedings are not treated as one consolidated final finding.",
    incidentType: "FINANCIAL_SCANDAL",
    periodStart: "2009-01-01",
    periodEnd: "2022-12-31",
    areaIds: [dhaka],
    personLinks: [
      {
        personId: publicPersonIds.prashantaKumarHalder,
        role: "SUBJECT",
        noteBn:
          "একাধিক আর্থিক প্রতিষ্ঠানের accountability ও money-laundering court reporting-এ যুক্ত।",
        noteEn:
          "Linked in accountability and money-laundering court reporting involving multiple financial institutions."
      }
    ],
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [
      publicSourceIds.pkHalderDailyStarConviction,
      publicSourceIds.pkHalderDhakaTribuneConviction
    ],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.evalyConsumerPaymentFraud,
    isDemo: false,
    slug: "evaly-consumer-payment-fraud",
    titleBn: "ইভ্যালি অগ্রিম পেমেন্ট ও ভোক্তা প্রতারণা মামলা প্রসঙ্গ",
    titleEn: "Evaly advance-payment and consumer-fraud case context",
    summaryBn:
      "ইভ্যালির অগ্রিম ভোক্তা পেমেন্ট, পণ্য সরবরাহ ব্যর্থতা, cheque fraud মামলা, গ্রেপ্তার ও bail status-কে আলাদা করে নথিবদ্ধ করা একটি consumer-accountability record।",
    summaryEn:
      "A consumer-accountability record separating Evaly advance payments, non-delivery reports, cheque-fraud cases, arrest, and bail status.",
    descriptionBn:
      "২০২০-২০২১ সময়ে ইভ্যালির বড় ছাড়ে অগ্রিম পেমেন্ট নেওয়া, পণ্য সরবরাহে ব্যর্থতা এবং ফেরত cheque নিয়ে ভোক্তা অভিযোগ প্রকাশ্যে আসে। ২০২১ সালের গ্রেপ্তার এবং পরবর্তী bail reporting এই record-এর procedural layer; এগুলো নিজেরাই চূড়ান্ত প্রতারণা বা অর্থপাচার finding নয়।",
    descriptionEn:
      "During 2020-2021, public reporting described advance customer payments under Evaly's discount model, non-delivery complaints, and returned refund cheques. Arrest reporting in 2021 and later bail reporting are procedural layers of this record; they are not themselves final findings of fraud or money laundering.",
    incidentType: "FINANCIAL_SCANDAL",
    periodStart: "2020-01-01",
    periodEnd: "2021-12-31",
    areaIds: [dhaka],
    personLinks: [
      {
        personId: publicPersonIds.mohammadRasselEvaly,
        role: "SUBJECT",
        noteBn: "ইভ্যালির founder ও CEO হিসেবে fraud case, arrest এবং bail reporting-এ যুক্ত।",
        noteEn: "Linked as Evaly founder and CEO in fraud-case, arrest, and bail reporting."
      },
      {
        personId: publicPersonIds.shamimaNasrinEvaly,
        role: "SUBJECT",
        noteBn: "ইভ্যালির chairperson হিসেবে fraud case, arrest এবং bail reporting-এ যুক্ত।",
        noteEn: "Linked as Evaly chairperson in fraud-case, arrest, and bail reporting."
      }
    ],
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [
      publicSourceIds.evalyDailyStarArrest,
      publicSourceIds.evalyDhakaTribuneBail,
      publicSourceIds.evalyTbsShamimaBail
    ],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];
