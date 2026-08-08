import type { IncidentRecord } from "@/domain/claim";
import { publicAreaIds, publicIncidentIds, publicPersonIds, publicSourceIds } from "../ids";

export const killingIncidents: IncidentRecord[] = [
  {
    id: publicIncidentIds.august21DhakaGrenadeAttack2004,
    isDemo: false,
    slug: "august-21-dhaka-grenade-attack-2004",
    titleBn: "২১ আগস্ট ২০০৪ ঢাকা গ্রেনেড হামলা",
    titleEn: "August 21 Dhaka grenade attack",
    summaryBn:
      "আওয়ামী লীগের সমাবেশে গ্রেনেড হামলায় বহু মানুষের মৃত্যু ও আহত হওয়ার ঘটনা; তদন্ত, বিচার ও রাজনৈতিক দায়ের প্রশ্ন আলাদা status হিসেবে পড়তে হবে।",
    summaryEn:
      "A grenade attack on an Awami League rally that caused mass deaths and injuries; investigation, trial, and political-responsibility questions must be read as separate statuses.",
    descriptionBn:
      "২০০৪ সালের ২১ আগস্ট ঢাকায় আওয়ামী লীগের সমাবেশে গ্রেনেড হামলায় অন্তত ২৪ জন নিহত এবং প্রায় ৩০০ জন আহত হওয়ার কথা প্রকাশ্য প্রতিবেদনে রয়েছে। হিউম্যান রাইটস ওয়াচ তদন্ত ও prosecution-এর আহ্বান জানায়। এই record-এ documented deaths and injuries রাখা হয়েছে; কোনো ব্যক্তির চূড়ান্ত অপরাধ-দায় source ছাড়া নির্ধারণ করা হয়নি।",
    descriptionEn:
      "Public reporting says at least 24 people were killed and about 300 injured in the August 21, 2004 grenade attack on an Awami League rally in Dhaka. Human Rights Watch called for investigation and prosecution. This record documents the reported deaths and injuries without assigning final criminal responsibility to any person beyond the sources.",
    incidentType: "KILLING",
    occurredAt: "2004-08-21",
    periodStart: "2004-08-21",
    periodEnd: "2004-08-21",
    areaIds: [publicAreaIds.dhaka],
    personLinks: [
      {
        personId: publicPersonIds.sheikhHasina,
        role: "RELATED_PERSON",
        noteBn:
          "সমাবেশের রাজনৈতিক নেতা ও হামলার লক্ষ্য হিসেবে public reporting-এ যুক্ত; হামলার ব্যক্তিগত দায়ের finding নয়।",
        noteEn:
          "Linked in public reporting as the political leader at and target of the rally; this is not a finding of personal responsibility for the attack."
      }
    ],
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [
      publicSourceIds.august21GrenadeAttackProthomAlo,
      publicSourceIds.august21GrenadeAttackHumanRightsWatch
    ],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];
