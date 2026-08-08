import { publicIncidentIds, publicPersonIds } from "../ids";
import { createPublicPerson } from "./_person-factory";

export const asaduzzamanKhanKamal = createPublicPerson({
  id: publicPersonIds.asaduzzamanKhanKamal,
  slug: "asaduzzaman-khan-kamal",
  nameEn: "Asaduzzaman Khan Kamal",
  nameBn: "আসাদুজ্জামান খান কামাল",
  aliases: ["Asaduzzaman Khan", "Former Home Minister Kamal"],
  occupation: "POLITICIAN",
  politicalAffiliation: "AWAMI_LEAGUE",
  publicRoles: ["Former Home Minister"],
  organizations: ["Ministry of Home Affairs", "Bangladesh Awami League"],
  activePeriod: "2014-2025",
  primaryAreaEn: "Bangladesh",
  primaryAreaBn: "বাংলাদেশ",
  city: "Dhaka",
  influenceDomains: ["POLITICS", "GOVERNMENT", "SECURITY", "HUMAN_RIGHTS"],
  summaryEn:
    "Former home minister named in ICT formal-charge reporting with Sheikh Hasina and former IGP Chowdhury Abdullah Al-Mamun over July-August 2024 crimes-against-humanity allegations.",
  summaryBn:
    "জুলাই-আগস্ট ২০২৪ crimes-against-humanity allegations-এ শেখ হাসিনা ও সাবেক আইজিপি চৌধুরী আবদুল্লাহ আল-মামুনের সঙ্গে ICT formal-charge reporting-এ নাম থাকা সাবেক স্বরাষ্ট্রমন্ত্রী।",
  historicalIdentityEn:
    "A former home-affairs minister discussed through national security command, policing policy, and ICT process reporting after the July uprising.",
  historicalIdentityBn:
    "July uprising-এর পর national security command, policing policy এবং ICT process reporting-এর আলোচনায় থাকা সাবেক স্বরাষ্ট্রমন্ত্রী।",
  whyListedEn:
    "Included because BSS reports that ICT prosecutors filed formal charges naming him in the July-August mass-uprising crimes-against-humanity case.",
  whyListedBn:
    "BSS প্রতিবেদনে July-August mass-uprising crimes-against-humanity মামলায় ICT prosecutors তার বিরুদ্ধে formal charges filed করেছে বলে উল্লেখ থাকায় অন্তর্ভুক্ত।",
  overviewEn:
    "The profile treats the ICT material as formal-charge and tribunal-process reporting, not as a final finding unless a final judgment is documented.",
  overviewBn:
    "এই প্রোফাইল ICT material-কে formal-charge ও tribunal-process reporting হিসেবে রাখে; final judgment নথিভুক্ত না হলে final finding নয়।",
  patternsEn: "Reported themes: home-ministry command, policing decisions, ICT formal charges.",
  patternsBn:
    "প্রতিবেদনভিত্তিক থিম: home-ministry command, policing decisions, ICT formal charges।",
  incidentIds: [publicIncidentIds.december2018ElectionIrregularities]
});
