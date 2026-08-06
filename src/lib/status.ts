import type { CaseCategory, LegalStatus, PersonCaseRole } from "@/domain/case";
import type { Locale, VerificationStatus } from "@/domain/common";

type LabelInfo = { bn: string; en: string; explanationBn: string; explanationEn: string };

export const legalStatusInfo: Record<LegalStatus, LabelInfo> = {
  ALLEGATION_REPORTED: {
    bn: "রিপোর্টেড অভিযোগ",
    en: "Reported allegation",
    explanationBn: "প্রকাশিত প্রতিবেদনে অভিযোগ এসেছে; এটি আদালতের সিদ্ধান্ত নয়।",
    explanationEn: "An allegation has been reported; this is not a court finding."
  },
  PRELIMINARY_INQUIRY: {
    bn: "প্রাথমিক অনুসন্ধান",
    en: "Preliminary inquiry",
    explanationBn: "কর্তৃপক্ষ প্রাথমিক তথ্য যাচাই করছে।",
    explanationEn: "An authority is reviewing initial information."
  },
  UNDER_INVESTIGATION: {
    bn: "তদন্তাধীন",
    en: "Under investigation",
    explanationBn: "তদন্ত চলছে; দায় নির্ধারিত হয়নি।",
    explanationEn: "An investigation is ongoing; liability has not been determined."
  },
  FORMALLY_CHARGED: {
    bn: "আনুষ্ঠানিক অভিযোগ গঠন",
    en: "Formally charged",
    explanationBn: "আনুষ্ঠানিক অভিযোগ আনা হয়েছে; বিচারে ফল নির্ধারিত হবে।",
    explanationEn: "Formal charges have been filed; outcome depends on proceedings."
  },
  TRIAL_PENDING: {
    bn: "বিচার অপেক্ষমাণ",
    en: "Trial pending",
    explanationBn: "বিচার শুরু হওয়ার অপেক্ষায় আছে।",
    explanationEn: "The matter is awaiting trial."
  },
  TRIAL_ONGOING: {
    bn: "বিচার চলমান",
    en: "Trial ongoing",
    explanationBn: "আদালতে বিচার চলছে।",
    explanationEn: "Court proceedings are ongoing."
  },
  AWAITING_VERDICT: {
    bn: "রায় অপেক্ষমাণ",
    en: "Awaiting verdict",
    explanationBn: "শুনানি শেষে রায়ের অপেক্ষা।",
    explanationEn: "Proceedings have concluded and a verdict is pending."
  },
  CONVICTED: {
    bn: "দণ্ডিত",
    en: "Convicted",
    explanationBn: "আদালত দোষী সাব্যস্ত করেছে; আপিলের অবস্থা আলাদাভাবে দেখুন।",
    explanationEn: "A court has entered a conviction; check appeal status separately."
  },
  CONVICTION_UNDER_APPEAL: {
    bn: "দণ্ডের বিরুদ্ধে আপিল",
    en: "Conviction under appeal",
    explanationBn: "দণ্ডের বিরুদ্ধে আপিল বিচারাধীন।",
    explanationEn: "The conviction is under appeal."
  },
  ACQUITTED: {
    bn: "খালাস",
    en: "Acquitted",
    explanationBn: "আদালত অভিযোগ থেকে খালাস দিয়েছে।",
    explanationEn: "A court has acquitted the person or dismissed the allegation on merits."
  },
  DISMISSED: {
    bn: "মামলা খারিজ",
    en: "Case dismissed",
    explanationBn: "মামলা খারিজ হয়েছে।",
    explanationEn: "The case has been dismissed."
  },
  CHARGES_WITHDRAWN: {
    bn: "অভিযোগ প্রত্যাহার",
    en: "Charges withdrawn",
    explanationBn: "আনা অভিযোগ প্রত্যাহার করা হয়েছে।",
    explanationEn: "Charges were withdrawn."
  },
  CONVICTION_OVERTURNED: {
    bn: "দণ্ড বাতিল",
    en: "Conviction overturned",
    explanationBn: "উচ্চতর কর্তৃপক্ষ দণ্ড বাতিল করেছে।",
    explanationEn: "A conviction was overturned."
  },
  OFFICIAL_AUDIT_FINDING: {
    bn: "সরকারি অডিট পর্যবেক্ষণ",
    en: "Official audit finding",
    explanationBn: "সরকারি অডিটে পর্যবেক্ষণ এসেছে; তা ফৌজদারি দণ্ড নয়।",
    explanationEn: "An official audit recorded a finding; it is not a criminal conviction."
  },
  ADMINISTRATIVE_FINDING: {
    bn: "প্রশাসনিক পর্যবেক্ষণ",
    en: "Administrative finding",
    explanationBn: "প্রশাসনিক প্রক্রিয়ায় পর্যবেক্ষণ এসেছে।",
    explanationEn: "An administrative process recorded a finding."
  },
  ADMINISTRATIVE_SANCTION: {
    bn: "প্রশাসনিক নিষেধাজ্ঞা",
    en: "Administrative sanction",
    explanationBn: "প্রশাসনিক নিষেধাজ্ঞা বা শাস্তিমূলক ব্যবস্থা নেয়া হয়েছে।",
    explanationEn: "An administrative sanction has been imposed."
  },
  CLOSED_WITHOUT_CHARGE: {
    bn: "অভিযোগ ছাড়াই বন্ধ",
    en: "Closed without charge",
    explanationBn: "আনুষ্ঠানিক অভিযোগ ছাড়া বিষয়টি বন্ধ হয়েছে।",
    explanationEn: "The matter closed without formal charge."
  },
  ARCHIVED: {
    bn: "আর্কাইভড",
    en: "Archived",
    explanationBn: "রেকর্ডটি ঐতিহাসিক বা নিষ্ক্রিয় হিসেবে সংরক্ষিত।",
    explanationEn: "The record is retained as historical or inactive."
  }
};

export const categoryLabels: Record<CaseCategory, { bn: string; en: string }> = {
  CORRUPTION: { bn: "দুর্নীতি", en: "Corruption" },
  BRIBERY: { bn: "ঘুষ", en: "Bribery" },
  EMBEZZLEMENT: { bn: "আত্মসাৎ", en: "Embezzlement" },
  FRAUD: { bn: "প্রতারণা", en: "Fraud" },
  ABUSE_OF_POWER: { bn: "ক্ষমতার অপব্যবহার", en: "Abuse of power" },
  MISUSE_OF_PUBLIC_FUNDS: { bn: "সরকারি অর্থের অপব্যবহার", en: "Misuse of public funds" },
  ELECTORAL_MISCONDUCT: { bn: "নির্বাচনী অনিয়ম", en: "Electoral misconduct" },
  FINANCIAL_MISCONDUCT: { bn: "আর্থিক অনিয়ম", en: "Financial misconduct" },
  MONEY_LAUNDERING: { bn: "মানি লন্ডারিং", en: "Money laundering" },
  BANKING_MISCONDUCT: { bn: "ব্যাংকিং অনিয়ম", en: "Banking misconduct" },
  HUMAN_RIGHTS_ABUSE: { bn: "মানবাধিকার লঙ্ঘন", en: "Human rights abuse" },
  VIOLENCE: { bn: "সহিংসতা", en: "Violence" },
  HOMICIDE_RELATED: { bn: "হত্যা-সম্পর্কিত", en: "Homicide related" },
  ORGANIZED_CRIME: { bn: "সংগঠিত অপরাধ", en: "Organized crime" },
  THEFT: { bn: "চুরি", en: "Theft" },
  OTHER: { bn: "অন্যান্য", en: "Other" }
};

export const roleLabels: Record<PersonCaseRole, { bn: string; en: string }> = {
  ACCUSED: { bn: "অভিযুক্ত", en: "Accused" },
  DEFENDANT: { bn: "বিবাদী", en: "Defendant" },
  RESPONDENT: { bn: "প্রতিবাদী", en: "Respondent" },
  CONVICTED_PERSON: { bn: "দণ্ডিত ব্যক্তি", en: "Convicted person" },
  INVESTIGATED_OFFICIAL: { bn: "তদন্তাধীন কর্মকর্তা", en: "Investigated official" },
  COMPLAINANT: { bn: "অভিযোগকারী", en: "Complainant" },
  WITNESS: { bn: "সাক্ষী", en: "Witness" },
  BENEFICIARY: { bn: "সুবিধাভোগী", en: "Beneficiary" },
  RELATED_PERSON: { bn: "সম্পর্কিত ব্যক্তি", en: "Related person" },
  OTHER: { bn: "অন্যান্য ভূমিকা", en: "Other role" }
};

export const verificationLabels: Record<VerificationStatus, { bn: string; en: string }> = {
  UNVERIFIED: { bn: "যাচাই হয়নি", en: "Unverified" },
  SOURCE_LOCATED: { bn: "উৎস পাওয়া গেছে", en: "Source located" },
  REVIEWED: { bn: "পর্যালোচিত", en: "Reviewed" },
  CROSS_CHECKED: { bn: "ক্রস-চেকড", en: "Cross-checked" },
  PRIMARY_SOURCE_VERIFIED: { bn: "প্রাথমিক উৎস যাচাই", en: "Primary source verified" },
  DISPUTED: { bn: "বিতর্কিত", en: "Disputed" },
  RETRACTED: { bn: "প্রত্যাহার", en: "Retracted" },
  ARCHIVED: { bn: "আর্কাইভড", en: "Archived" }
};

export function statusLabel(status: LegalStatus, locale: Locale) {
  return legalStatusInfo[status][locale];
}

export function statusExplanation(status: LegalStatus, locale: Locale) {
  return locale === "bn"
    ? legalStatusInfo[status].explanationBn
    : legalStatusInfo[status].explanationEn;
}
