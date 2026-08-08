import { publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const ishtiaqAhmed = createPublicPerson({
  id: publicPersonIds.ishtiaqAhmed,
  slug: "ishtiaq-ahmed",
  nameEn: "Ishtiaq Ahmed",
  nameBn: "ইশতিয়াক আহমেদ",
  aliases: ["Ishtiaq Ahmed"],
  occupation: "POLICE_OFFICIAL",
  publicRoles: [
    "Former Additional Superintendent of Police",
    "Former supervisor of the Police Digital Forensics Team"
  ],
  organizations: ["Bangladesh Police", "Police Digital Forensics Team"],
  activePeriod: "2024-2025",
  primaryAreaEn: "Chankharpul, Dhaka",
  primaryAreaBn: "চানখারপুল, ঢাকা",
  city: "Dhaka",
  influenceDomains: ["SECURITY", "GOVERNMENT", "HUMAN_RIGHTS", "MEDIA"],
  summaryEn:
    "Former additional superintendent of police placed in custody in an ICT case concerning alleged drone-based identification of July protesters.",
  summaryBn:
    "সাবেক অতিরিক্ত পুলিশ সুপার; জুলাইয়ের প্রতিবাদকারীদের drone-ভিত্তিক শনাক্তকরণের অভিযোগে আইসিটি মামলায় কারাগারে পাঠানোর প্রতিবেদন রয়েছে।",
  historicalIdentityEn:
    "A police digital-forensics supervisor recorded through BSS reporting on an ICT custody proceeding.",
  historicalIdentityBn:
    "আইসিটি custody proceeding নিয়ে BSS প্রতিবেদনে নথিভুক্ত পুলিশ digital-forensics supervisor।",
  whyListedEn:
    "Included because BSS reported that the ICT sent him to jail and quoted a prosecutor's allegation about drone-based identification; this is not a conviction.",
  whyListedBn:
    "আইসিটি তাকে কারাগারে পাঠিয়েছে এবং drone-ভিত্তিক শনাক্তকরণ নিয়ে প্রসিকিউটরের অভিযোগ উদ্ধৃত করেছে বলে BSS জানানোয় অন্তর্ভুক্ত; এটি conviction নয়।",
  overviewEn:
    "The profile records arrest/custody and prosecutor-attributed allegations as procedural evidence, not as a final finding.",
  overviewBn:
    "প্রোফাইলে arrest/custody ও প্রসিকিউটর-উদ্ধৃত অভিযোগ procedural evidence হিসেবে রাখা হয়েছে; final finding হিসেবে নয়।",
  patternsEn:
    "Reported theme: digital surveillance, police operations, and ICT custody during the July Uprising.",
  patternsBn:
    "প্রতিবেদনভিত্তিক থিম: জুলাই গণ-অভ্যুত্থানে digital surveillance, পুলিশ অপারেশন ও আইসিটি custody।",
  narrativeStyle: "caseHistory"
});
