import type { CaseRecord } from "@/domain/case";
import { publicCaseIds, publicPersonIds, publicSourceIds } from "../ids";

const personId = publicPersonIds.obaidulQuader;

const accusedLink = (caseId: string, noteBn: string, noteEn: string) => ({
  personId,
  caseId,
  role: "ACCUSED" as const,
  legalPosition: "Accused or defendant as reported in the cited proceeding",
  noteBn,
  noteEn
});

const timeline = (
  id: string,
  date: string,
  titleBn: string,
  titleEn: string,
  descriptionBn: string,
  descriptionEn: string,
  sourceIds: string[]
) => ({
  id,
  date,
  titleBn,
  titleEn,
  descriptionBn,
  descriptionEn,
  sourceIds
});

export const obaidulQuaderCases: CaseRecord[] = [
  {
    id: publicCaseIds.obaidulQuaderJulyUprisingIct,
    isDemo: false,
    slug: "obaidul-quader-july-uprising-ict-proceeding",
    caseNumber: "Case number not stated in cited reports",
    titleBn: "জুলাই ২০২৪ গণ-অভ্যুত্থান-সংক্রান্ত আইসিটি কার্যক্রম",
    titleEn: "ICT proceeding concerning the July 2024 uprising",
    summaryBn:
      "আইসিটি-২ ও সংবাদ প্রতিবেদনে জুলাই ২০২৪-এর ঘটনাবলি নিয়ে ওবায়দুল কাদেরসহ কয়েকজনের বিরুদ্ধে অভিযোগ গঠন ও বিচারিক কার্যক্রমের কথা বলা হয়েছে।",
    summaryEn:
      "ICT-2 and news reports describe charge framing and ongoing proceedings concerning Obaidul Quader and others over events during the July 2024 uprising.",
    descriptionBn:
      "এই রেকর্ডে তদন্ত, আনুষ্ঠানিক অভিযোগ ও অভিযোগ গঠনের ধাপ আলাদা রাখা হয়েছে। প্রসিকিউশনের অভিযোগগুলো এখানে অভিযোগ হিসেবে উল্লেখিত; চূড়ান্ত রায় হিসেবে নয়।",
    descriptionEn:
      "This record separates investigation, formal charge, and charge-framing stages. Prosecution allegations are presented as allegations, not as a final judgment.",
    category: "HUMAN_RIGHTS_ABUSE",
    legalStatus: "TRIAL_ONGOING",
    jurisdiction: "Bangladesh",
    authority: "International Crimes Tribunal",
    courtName: "International Crimes Tribunal-2",
    filedAt: "2025-04-20",
    startedAt: "2025-04-20",
    evidenceSummaryBn:
      "বিএসএস, bdnews24 এবং দ্য ডেইলি স্টারের প্রতিবেদনে তদন্ত প্রতিবেদন, অভিযোগ গঠন এবং প্রসিকিউশনের বক্তব্যের উল্লেখ আছে।",
    evidenceSummaryEn:
      "BSS, bdnews24, and The Daily Star report investigation, charge-framing, and prosecution positions in the proceeding.",
    personLinks: [
      accusedLink(
        publicCaseIds.obaidulQuaderJulyUprisingIct,
        "আইসিটি কার্যক্রমে accused হিসেবে নাম এসেছে; এটি চূড়ান্ত দায় বা দোষী সাব্যস্ত হওয়ার সিদ্ধান্ত নয়।",
        "Named as an accused in the ICT proceeding; this is not a final finding of responsibility or guilt."
      )
    ],
    sourceIds: [
      publicSourceIds.july45BssProbeReport,
      publicSourceIds.quaderSevenBssIndictment,
      publicSourceIds.obaidulDailyStarIctCharges
    ],
    subjectResponseIds: [],
    tags: [],
    timelineEvents: [
      timeline(
        "00000000-0000-4000-8000-000000000561",
        "2025-04-20",
        "তদন্ত-সংক্রান্ত শুনানি",
        "Investigation-stage hearing",
        "বিএসএসের প্রতিবেদনে আইসিটি তদন্ত সংস্থার বক্তব্য ও তদন্ত প্রতিবেদন দাখিলের সময়সীমার কথা বলা হয়েছে।",
        "BSS reported the ICT investigation agency's position and a deadline for the investigation report.",
        [publicSourceIds.july45BssProbeReport]
      ),
      timeline(
        "00000000-0000-4000-8000-000000000562",
        "2026-01-23",
        "অভিযোগ গঠন",
        "Charges framed",
        "দ্য ডেইলি স্টার জানায়, আইসিটি-২ ওবায়দুল কাদেরসহ সাতজনের বিরুদ্ধে অভিযোগ গঠন করেছে।",
        "The Daily Star reported that ICT-2 framed charges against Obaidul Quader and six others.",
        [publicSourceIds.quaderSevenBssIndictment, publicSourceIds.obaidulDailyStarIctCharges]
      )
    ],
    relatedCaseIds: [],
    lastVerifiedAt: "2026-08-08",
    publicationStatus: "PUBLISHED",
    updatedAt: "2026-08-08"
  },
  {
    id: publicCaseIds.obaidulQuaderExpresswayFlat,
    isDemo: false,
    slug: "obaidul-quader-expressway-rehabilitation-flats-case",
    caseNumber: "Case number not stated in cited reports",
    titleBn: "ঢাকা এলিভেটেড এক্সপ্রেসওয়ে পুনর্বাসন ফ্ল্যাট বরাদ্দ মামলা",
    titleEn: "Dhaka Elevated Expressway rehabilitation-flat case",
    summaryBn:
      "এলিভেটেড এক্সপ্রেসওয়ের জন্য অধিগ্রহণ করা জমিতে পুনর্বাসন ফ্ল্যাট বরাদ্দের অভিযোগে ACC মামলা দায়েরের কথা সংবাদে এসেছে।",
    summaryEn:
      "News reports say the ACC filed a case over alleged allocation of rehabilitation flats built on land acquired for the Dhaka Elevated Expressway project.",
    descriptionBn:
      "এটি ACC মামলা দায়েরের status; কোনো চূড়ান্ত রায়, দণ্ড বা ব্যক্তিগত লাভের judicial finding এই রেকর্ডে দাবি করা হচ্ছে না।",
    descriptionEn:
      "This record reflects the reported ACC case filing; it does not assert a final judgment, conviction, or judicial finding of personal gain.",
    category: "MISUSE_OF_PUBLIC_FUNDS",
    legalStatus: "FORMALLY_CHARGED",
    jurisdiction: "Bangladesh",
    authority: "Anti-Corruption Commission",
    courtName: "Court not stated in cited reports",
    filedAt: "2025-12-08",
    startedAt: "2025-12-08",
    evidenceSummaryBn:
      "বিএসএস ও দ্য ফাইন্যান্সিয়াল এক্সপ্রেস ACC মামলা দায়েরের কথা প্রতিবেদন করেছে।",
    evidenceSummaryEn: "BSS and The Financial Express reported the ACC case filing.",
    personLinks: [
      accusedLink(
        publicCaseIds.obaidulQuaderExpresswayFlat,
        "ACC মামলা প্রতিবেদনে অভিযুক্ত হিসেবে নাম এসেছে; চূড়ান্ত ফলাফল উল্লেখিত নয়।",
        "Named as an accused in reporting on the ACC case; no final outcome is reported here."
      )
    ],
    sourceIds: [
      publicSourceIds.expresswayBssFlatScam,
      publicSourceIds.obaidulFinancialExpressFlatCase
    ],
    subjectResponseIds: [],
    tags: [],
    timelineEvents: [],
    relatedCaseIds: [],
    lastVerifiedAt: "2026-08-08",
    publicationStatus: "PUBLISHED",
    updatedAt: "2026-08-08"
  },
  {
    id: publicCaseIds.obaidulQuaderKarnaphuliTunnel,
    isDemo: false,
    slug: "obaidul-quader-karnaphuli-tunnel-acc-case",
    caseNumber: "Case number not stated in cited reports",
    titleBn: "কর্ণফুলী টানেল প্রকল্প-সংক্রান্ত ACC মামলা",
    titleEn: "Karnaphuli Tunnel ACC case",
    summaryBn:
      "কর্ণফুলী টানেল প্রকল্পে অনিয়ম ও দুর্নীতির অভিযোগে ACC মামলা দায়েরের কথা দ্য ডেইলি স্টার প্রতিবেদন করেছে।",
    summaryEn:
      "The Daily Star reported an ACC case concerning alleged irregularities and corruption in the Karnaphuli Tunnel project.",
    descriptionBn:
      "মামলা দায়ের ও তদন্ত-সংক্রান্ত তথ্য এখানে রাখা হয়েছে; অভিযোগকে চূড়ান্ত অপরাধ বা রায় হিসেবে উপস্থাপন করা হয়নি।",
    descriptionEn:
      "The record captures the reported filing and investigation context; the allegations are not presented as a final crime finding or judgment.",
    category: "CORRUPTION",
    legalStatus: "FORMALLY_CHARGED",
    jurisdiction: "Bangladesh",
    authority: "Anti-Corruption Commission",
    courtName: "Court not stated in cited report",
    filedAt: "2025-08-28",
    startedAt: "2025-08-28",
    evidenceSummaryBn:
      "দ্য ডেইলি স্টার ACC-এর মামলা দায়ের, অভিযোগের ধারা ও তদন্ত দলের কথা উল্লেখ করেছে।",
    evidenceSummaryEn:
      "The Daily Star reported the ACC filing, cited legal provisions, and an investigation team.",
    personLinks: [
      accusedLink(
        publicCaseIds.obaidulQuaderKarnaphuliTunnel,
        "কর্ণফুলী টানেল মামলায় অভিযুক্ত হিসেবে নাম এসেছে; চূড়ান্ত রায় উল্লেখিত নয়।",
        "Named as an accused in the Karnaphuli Tunnel case; no final judgment is recorded here."
      )
    ],
    sourceIds: [publicSourceIds.obaidulDailyStarTunnelCase],
    subjectResponseIds: [],
    tags: [],
    timelineEvents: [],
    relatedCaseIds: [],
    lastVerifiedAt: "2026-08-08",
    publicationStatus: "PUBLISHED",
    updatedAt: "2026-08-08"
  },
  {
    id: publicCaseIds.obaidulQuaderJihadMurderAcquittal,
    isDemo: false,
    slug: "obaidul-quader-jihad-murder-acquittal",
    caseNumber: "Case number not stated in cited report",
    titleBn: "‘জিহাদ হত্যা’ মামলায় খালাস",
    titleEn: "Acquittal in the ‘Jihad murder’ case",
    summaryBn:
      "জাগো নিউজের প্রতিবেদনে বলা হয়েছে, তদন্ত প্রতিবেদন গ্রহণের পর ওবায়দুল কাদেরসহ ১২৪ জন খালাস পেয়েছেন।",
    summaryEn:
      "Jago News reported that Obaidul Quader and 124 others were acquitted after the court accepted a final investigation report.",
    descriptionBn:
      "এই রেকর্ডটি ওবায়দুল কাদেরের জন্য একটি exculpatory outcome হিসেবে যুক্ত করা হয়েছে। প্রতিবেদন অনুযায়ী alleged victim জীবিত ছিলেন এবং মামলার স্থান ও ঘটনার বর্ণনায় ভুল ছিল।",
    descriptionEn:
      "This record captures an exculpatory outcome for Obaidul Quader. The report says the alleged victim was alive and that the case contained errors about location and the account of events.",
    category: "HOMICIDE_RELATED",
    legalStatus: "ACQUITTED",
    jurisdiction: "Bangladesh",
    authority: "Dhaka court",
    courtName: "Senior Judicial Magistrate court, Dhaka",
    filedAt: "2025-08-11",
    startedAt: "2025-08-11",
    resolvedAt: "2025-10-30",
    verdict: "Acquitted after acceptance of the final investigation report",
    outcomeBn: "চূড়ান্ত তদন্ত প্রতিবেদন গ্রহণের পর খালাস।",
    outcomeEn: "Acquitted after the final investigation report was accepted.",
    evidenceSummaryBn:
      "জাগো নিউজ আদালতের আদেশ, তদন্ত প্রতিবেদন এবং alleged victim-এর জীবিত থাকার বিষয়ে পুলিশি তদন্তের কথা জানিয়েছে।",
    evidenceSummaryEn:
      "Jago News reported the court order, the final investigation report, and police findings that the alleged victim was alive.",
    personLinks: [
      accusedLink(
        publicCaseIds.obaidulQuaderJihadMurderAcquittal,
        "মামলার accused হিসেবে নাম থাকলেও আদালত তাকে খালাস দিয়েছে।",
        "Although named as an accused, he was acquitted by the court."
      )
    ],
    sourceIds: [publicSourceIds.obaidulJagoNewsJihadAcquittal],
    subjectResponseIds: [],
    tags: [],
    timelineEvents: [],
    relatedCaseIds: [],
    lastVerifiedAt: "2026-08-08",
    publicationStatus: "PUBLISHED",
    updatedAt: "2026-08-08"
  }
];
