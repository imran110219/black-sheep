import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const mihirKantiMajumder = createPublicPerson({
  id: publicPersonIds.mihirKantiMajumder,
  slug: "mihir-kanti-majumder",
  nameEn: "Mihir Kanti Majumder",
  nameBn: "মিহির কান্তি মজুমদার",
  aliases: ["Former secretary Mihir Kanti Majumder"],
  occupation: "PUBLIC_OFFICIAL",
  publicRoles: [
    "Former Secretary",
    "Former UDDIPAN board chairman",
    "Former Palli Sanchay Bank chairman"
  ],
  organizations: ["UDDIPAN", "Palli Sanchay Bank"],
  activePeriod: "2011-2025",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["GOVERNMENT", "BANKING", "BUSINESS"],
  summaryEn:
    "Former secretary whose public record includes ACC case reporting over alleged embezzlement through fake projects at UDDIPAN.",
  summaryBn:
    "UDDIPAN-এ fake projects-এর মাধ্যমে alleged embezzlement নিয়ে ACC case reporting-এ নাম থাকা সাবেক secretary।",
  historicalIdentityEn:
    "A former public official and NGO/bank-board figure discussed through ACC embezzlement-case reporting.",
  historicalIdentityBn:
    "ACC embezzlement-case reporting-এ আলোচিত সাবেক public official ও NGO/bank-board figure।",
  whyListedEn:
    "Included because TBS reports ACC filed six cases naming him over alleged embezzlement of more than Tk200 crore.",
  whyListedBn:
    "TBS reporting অনুযায়ী Tk200 crore-এর বেশি alleged embezzlement নিয়ে ACC ছয়টি case filed করে তার নাম উল্লেখ করেছে।",
  overviewEn: "This is ACC case-reporting context and not a final conviction.",
  overviewBn: "এটি ACC case-reporting context, final conviction নয়।",
  patternsEn: "Reported themes: former secretary role, NGO projects, ACC embezzlement cases.",
  patternsBn: "প্রতিবেদনভিত্তিক থিম: former secretary role, NGO projects, ACC embezzlement cases।"
});
