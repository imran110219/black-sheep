import type { IncidentRecord } from "@/domain/claim";
import { publicAreaIds, publicIncidentIds, publicPersonIds, publicSourceIds } from "../ids";

const bangladesh = publicAreaIds.bangladesh;
const electionPersonLinks = [
  {
    personId: publicPersonIds.sheikhHasina,
    role: "RELATED_PERSON" as const,
    noteBn:
      "জাতীয় রাজনৈতিক নেতৃত্ব ও নির্বাচনী প্রতিযোগিতার প্রেক্ষাপটে যুক্ত; reported সহিংসতা বা অনিয়মের ব্যক্তিগত দায়ের finding নয়।",
    noteEn:
      "Linked for national political leadership and electoral-competition context; this is not a finding of personal responsibility for reported violence or irregularities."
  },
  {
    personId: publicPersonIds.khaledaZia,
    role: "RELATED_PERSON" as const,
    noteBn:
      "বিএনপি নেতৃত্ব, সাবেক প্রধানমন্ত্রিত্ব ও বিরোধী রাজনীতির নির্বাচনী প্রেক্ষাপটে যুক্ত; reported ঘটনার ব্যক্তিগত দায়ের finding নয়।",
    noteEn:
      "Linked for BNP leadership, former premiership, and opposition-politics context; this is not a finding of personal responsibility for reported events."
  }
];
const election2018OfficialLink = {
  personId: publicPersonIds.asaduzzamanKhanKamal,
  role: "OFFICIAL" as const,
  noteBn:
    "২০১৮ সালের নির্বাচন-পূর্ব সহিংসতা নিয়ে স্বরাষ্ট্রমন্ত্রী হিসেবে প্রকাশ্য বক্তব্যের context-এ যুক্ত; reported ঘটনার ব্যক্তিগত দায়ের finding নয়।",
  noteEn:
    "Linked as home minister through public comments about pre-election violence in 2018; this is not a finding of personal responsibility for reported events."
};

export const electionIncidents: IncidentRecord[] = [
  {
    id: publicIncidentIds.february1996ElectionCrisis,
    isDemo: false,
    slug: "february-1996-election-boycott-and-crisis",
    titleBn: "১৯৯৬ সালের ফেব্রুয়ারি নির্বাচন বর্জন ও রাজনৈতিক সংকট",
    titleEn: "February 1996 election boycott and political crisis",
    summaryBn:
      "বিরোধী দলগুলোর নির্বাচন বর্জন, নির্বাচন ঘিরে সহিংসতা এবং পরবর্তী caretaker government transition-কে কেন্দ্র করে গড়ে ওঠা election incident record।",
    summaryEn:
      "An election incident record concerning the opposition boycott, election-related violence, and the subsequent caretaker-government transition.",
    descriptionBn:
      "১৯৯৬ সালের ফেব্রুয়ারি নির্বাচনের আগে ও পরে বিরোধী দলগুলোর বর্জন, রাজনৈতিক সংঘাত, intimidation এবং মানবাধিকার লঙ্ঘনের প্রতিবেদন প্রকাশিত হয়। এই record নির্বাচনের legitimacy নিয়ে রাজনৈতিক দাবিকে আলাদা রাখে এবং পরবর্তী caretaker government transition-কে রাজনৈতিক ফলাফল হিসেবে দেখায়, কোনো একক দলের চূড়ান্ত অপরাধ-ফাইন্ডিং হিসেবে নয়।",
    descriptionEn:
      "Before and after the February 1996 election, reporting described an opposition boycott, political conflict, intimidation, and human-rights abuses. This record separates political claims about electoral legitimacy from the later caretaker-government transition and does not treat the period as a final criminal finding against one party.",
    incidentType: "ELECTION_INCIDENT",
    occurredAt: "1996-02-15",
    periodStart: "1996-01-01",
    periodEnd: "1996-06-01",
    areaIds: [bangladesh],
    personLinks: electionPersonLinks,
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [publicSourceIds.february1996ElectionHumanRightsWatch],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.october2001ElectionAftermath,
    isDemo: false,
    slug: "october-2001-election-aftermath-minority-attacks",
    titleBn: "২০০১ সালের নির্বাচন-পরবর্তী সংখ্যালঘুদের ওপর হামলা",
    titleEn: "October 2001 election aftermath and attacks on minorities",
    summaryBn:
      "অক্টোবর ২০০১ জাতীয় নির্বাচনের পর হিন্দু সংখ্যালঘুদের ওপর হামলা, বৈষম্য ও সম্পত্তি আক্রমণের প্রতিবেদনকে কেন্দ্র করে election incident record।",
    summaryEn:
      "An election incident record concerning reports of attacks, discrimination, and property violence against Hindu minorities after the October 2001 general election.",
    descriptionBn:
      "অ্যামনেস্টি ইন্টারন্যাশনাল ২০০১ সালের সাধারণ নির্বাচনের পর হিন্দু সংখ্যালঘুদের ওপর হামলা, নারীদের বিরুদ্ধে সহিংসতা, হত্যাকাণ্ড এবং সম্পত্তি আক্রমণ নিয়ে উদ্বেগ নথিবদ্ধ করে। এই record-এ source-এ বর্ণিত post-election pattern রাখা হয়েছে; সব ঘটনা বা দায়ের বিষয়ে অতিরিক্ত source ছাড়া সাধারণীকরণ করা হয়নি।",
    descriptionEn:
      "Amnesty International documented concerns about attacks on Hindu minorities, violence against women, killings, and property attacks after the 2001 general election. This record preserves the post-election pattern described by the source and does not generalize responsibility beyond the documented material.",
    incidentType: "ELECTION_INCIDENT",
    periodStart: "2001-10-01",
    periodEnd: "2001-12-31",
    areaIds: [bangladesh],
    personLinks: electionPersonLinks,
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [publicSourceIds.october2001ElectionAmnesty],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.january2007ElectionPostponement,
    isDemo: false,
    slug: "january-2007-election-postponement-crisis",
    titleBn: "২০০৭ সালের নির্বাচন স্থগিত ও caretaker government সংকট",
    titleEn: "January 2007 election postponement and caretaker-government crisis",
    summaryBn:
      "নির্বাচন-পূর্ব সহিংসতা, ২২ জানুয়ারি ২০০৭-এর নির্বাচন স্থগিত, জরুরি অবস্থা এবং caretaker government পরিবর্তনকে কেন্দ্র করে election incident record।",
    summaryEn:
      "An election incident record concerning pre-election violence, postponement of the January 22, 2007 poll, emergency rule, and caretaker-government change.",
    descriptionBn:
      "২০০৭ সালের ২২ জানুয়ারি নির্ধারিত জাতীয় নির্বাচন নির্বাচন-পূর্ব সহিংসতা ও রাজনৈতিক অচলাবস্থার মধ্যে স্থগিত হয়। ইউরোপীয় পার্লামেন্টের নথিতে জরুরি অবস্থা, caretaker government এবং রাজনৈতিক কার্যক্রমের ওপর বিধিনিষেধের প্রসঙ্গও আছে। এই record-এ নির্বাচন অনুষ্ঠিত না হওয়ার ঘটনাকে electoral crisis হিসেবে রাখা হয়েছে।",
    descriptionEn:
      "The national election scheduled for January 22, 2007 was postponed amid pre-election violence and political deadlock. The European Parliament record also described emergency rule, a caretaker-government change, and restrictions on political activity. This incident records the non-occurrence of the scheduled election as an electoral crisis.",
    incidentType: "ELECTION_INCIDENT",
    occurredAt: "2007-01-11",
    periodStart: "2006-10-01",
    periodEnd: "2007-01-30",
    areaIds: [bangladesh],
    personLinks: electionPersonLinks,
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [publicSourceIds.january2007ElectionEuropeanParliament],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.january2014ElectionViolence,
    isDemo: false,
    slug: "january-2014-election-boycott-and-violence",
    titleBn: "২০১৪ সালের নির্বাচন বর্জন ও নির্বাচন-পূর্ব/পরবর্তী সহিংসতা",
    titleEn: "January 2014 election boycott and pre/post-election violence",
    summaryBn:
      "৫ জানুয়ারি ২০১৪ জাতীয় নির্বাচন ঘিরে বিরোধী বর্জন, রাজনৈতিক সহিংসতা, হত্যাকাণ্ড এবং সরকারি ও বিরোধী পক্ষের abuses নিয়ে election incident record।",
    summaryEn:
      "An election incident record concerning the opposition boycott, political violence, killings, and reported government and opposition abuses around the January 5, 2014 election.",
    descriptionBn:
      "হিউম্যান রাইটস ওয়াচের প্রতিবেদনে ২০১৪ সালের নির্বাচন ঘিরে বিরোধী পক্ষের সহিংসতা, সরকারি abuses, হত্যাকাণ্ড এবং নির্বাচন বর্জনের প্রেক্ষাপট নথিবদ্ধ হয়েছে। এই record-এ সরকারি ও বিরোধী পক্ষের কর্মকাণ্ড আলাদা করে পড়তে হবে; প্রতিবেদনকে কোনো একক পক্ষের সার্বিক দায়ের চূড়ান্ত finding হিসেবে দেখানো হয়নি।",
    descriptionEn:
      "Human Rights Watch documented opposition violence, government abuses, killings, and the boycott context around the 2014 election. The record should be read with government and opposition conduct separated; the report is not presented as a universal final finding against one side.",
    incidentType: "ELECTION_INCIDENT",
    occurredAt: "2014-01-05",
    periodStart: "2013-12-01",
    periodEnd: "2014-04-29",
    areaIds: [bangladesh],
    personLinks: electionPersonLinks,
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [publicSourceIds.january2014ElectionHumanRightsWatch],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.december2018ElectionIrregularities,
    isDemo: false,
    slug: "december-2018-election-irregularities",
    titleBn: "২০১৮ সালের নির্বাচন-পূর্ব সহিংসতা ও অনিয়মের অভিযোগ",
    titleEn: "December 2018 pre-election violence and irregularity allegations",
    summaryBn:
      "২০১৮ সালের জাতীয় নির্বাচন ঘিরে opposition pressure, intimidation, voter suppression ও vote-rigging allegations নিয়ে election incident record।",
    summaryEn:
      "An election incident record concerning reported opposition pressure, intimidation, voter suppression, and vote-rigging allegations around the 2018 national election.",
    descriptionBn:
      "২০১৮ সালের নির্বাচনের আগে বিরোধী দলের ওপর চাপ, সহিংসতা ও গ্রেপ্তারের প্রতিবেদন এবং ভোটের দিন voter suppression ও vote-rigging allegations নিয়ে সংবাদ প্রকাশিত হয়। এই record-এ allegations ও field reporting রাখা হয়েছে; চূড়ান্ত electoral finding হিসেবে নয়।",
    descriptionEn:
      "Reporting around the 2018 election described pressure, violence, and arrests affecting the opposition, alongside election-day voter-suppression and vote-rigging allegations. This record preserves those allegations and field reports rather than presenting them as a final electoral finding.",
    incidentType: "ELECTION_INCIDENT",
    occurredAt: "2018-12-30",
    periodStart: "2018-09-01",
    periodEnd: "2018-12-31",
    areaIds: [bangladesh],
    personLinks: [...electionPersonLinks, election2018OfficialLink],
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [
      publicSourceIds.december2018ElectionTime,
      publicSourceIds.december2018ElectionHomeMinister
    ],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  },
  {
    id: publicIncidentIds.january2024ElectionBoycott,
    isDemo: false,
    slug: "january-2024-election-boycott-and-irregularities",
    titleBn: "২০২৪ সালের নির্বাচন বর্জন ও অনিয়মের অভিযোগ",
    titleEn: "January 2024 election boycott and irregularity concerns",
    summaryBn:
      "২০২৪ সালের জাতীয় নির্বাচন ঘিরে opposition boycott, participation concerns, violence এবং reported irregularities নিয়ে election incident record।",
    summaryEn:
      "An election incident record concerning the opposition boycott, participation concerns, violence, and reported irregularities around the 2024 national election.",
    descriptionBn:
      "ইউরোপীয় ইউনিয়নের বিবৃতিতে ২০২৪ সালের জাতীয় নির্বাচনে অংশগ্রহণের সীমাবদ্ধতা, সহিংসতা ও reported irregularities নিয়ে উদ্বেগ এবং তদন্তের আহ্বান জানানো হয়। এই record-এ EU-এর অবস্থানকে official concern হিসেবে দেখানো হয়েছে, কোনো আদালত বা election commission-এর চূড়ান্ত fraud finding হিসেবে নয়।",
    descriptionEn:
      "The European Union statement raised concerns about limited participation, violence, and reported irregularities in the 2024 national election and called for investigation. This record presents the EU position as an official concern, not as a final fraud finding by a court or election commission.",
    incidentType: "ELECTION_INCIDENT",
    occurredAt: "2024-01-07",
    periodStart: "2023-10-01",
    periodEnd: "2024-01-09",
    areaIds: [bangladesh],
    personLinks: electionPersonLinks,
    organizationIds: [],
    institutionIds: [],
    claimIds: [],
    caseIds: [],
    sourceIds: [publicSourceIds.january2024ElectionEuropeanUnion],
    newsIds: [],
    impactRecordIds: [],
    lastVerifiedAt: "2026-08-08",
    updatedAt: "2026-08-08"
  }
];
