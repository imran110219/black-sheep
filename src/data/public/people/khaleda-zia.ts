import { publicIncidentIds, publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const khaledaZia = createPublicPerson({
  id: publicPersonIds.khaledaZia,
  slug: "khaleda-zia",
  nameEn: "Khaleda Zia",
  nameBn: "খালেদা জিয়া",
  aliases: ["Begum Khaleda Zia", "Khaleda Zia Rahman", "বেগম খালেদা জিয়া"],
  occupation: "POLITICIAN",
  publicRoles: [
    "Former Prime Minister of Bangladesh",
    "Former chairperson of Bangladesh Nationalist Party",
    "Former Leader of the Opposition"
  ],
  organizations: ["Bangladesh Nationalist Party", "Government of Bangladesh", "Jatiya Sangsad"],
  activePeriod: "1981-2025",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["POLITICS", "GOVERNMENT", "ELECTIONS"],
  summaryEn:
    "Former prime minister and BNP chairperson whose public record is central to Bangladesh's electoral transitions, opposition politics, and caretaker-government debates.",
  summaryBn:
    "সাবেক প্রধানমন্ত্রী ও বিএনপি চেয়ারপারসন, যার প্রকাশ্য রেকর্ড বাংলাদেশের নির্বাচনী রূপান্তর, বিরোধী রাজনীতি ও caretaker government বিতর্কের সঙ্গে কেন্দ্রীয়ভাবে যুক্ত।",
  historicalIdentityEn:
    "A major post-1980 political figure associated with Bangladesh's 1990 democratic transition, 1996 and 2001 elections, and later election crises.",
  historicalIdentityBn:
    "১৯৮০-পরবর্তী বাংলাদেশের ১৯৯০ গণতান্ত্রিক রূপান্তর, ১৯৯৬ ও ২০০১ সালের নির্বাচন এবং পরবর্তী নির্বাচনী সংকটের সঙ্গে যুক্ত প্রধান রাজনৈতিক ব্যক্তিত্ব।",
  whyListedEn:
    "Included because official and established public biographies document her roles as prime minister, BNP chairperson, parliamentary leader, and central participant in Bangladesh's election history.",
  whyListedBn:
    "সরকারি ও প্রতিষ্ঠিত প্রকাশ্য জীবনীতে প্রধানমন্ত্রী, বিএনপি চেয়ারপারসন, সংসদীয় নেতা এবং বাংলাদেশের নির্বাচনী ইতিহাসের কেন্দ্রীয় অংশগ্রহণকারী হিসেবে তার ভূমিকা নথিবদ্ধ থাকায় অন্তর্ভুক্ত।",
  overviewEn:
    "Bangladesh Parliament and public biographical records document Khaleda Zia's parliamentary leadership and two premierships. Her links to election incidents are political and institutional context, not findings of personal responsibility for every reported event.",
  overviewBn:
    "বাংলাদেশ সংসদ ও প্রকাশ্য জীবনীভিত্তিক রেকর্ডে খালেদা জিয়ার সংসদীয় নেতৃত্ব ও দুই দফা প্রধানমন্ত্রিত্ব নথিবদ্ধ। নির্বাচনী incident-এ তার links রাজনৈতিক ও প্রাতিষ্ঠানিক context; প্রতিটি reported ঘটনার ব্যক্তিগত দায়ের finding নয়।",
  patternsEn:
    "Source-backed themes: parliamentary government, opposition leadership, caretaker-government transition, election boycotts, and electoral competition.",
  patternsBn:
    "উৎস-সমর্থিত থিম: সংসদীয় সরকার, বিরোধী নেতৃত্ব, caretaker-government transition, নির্বাচন বর্জন এবং নির্বাচনী প্রতিযোগিতা।",
  incidentIds: [
    publicIncidentIds.february1996ElectionCrisis,
    publicIncidentIds.october2001ElectionAftermath,
    publicIncidentIds.january2007ElectionPostponement,
    publicIncidentIds.january2014ElectionViolence,
    publicIncidentIds.december2018ElectionIrregularities,
    publicIncidentIds.january2024ElectionBoycott
  ]
});
