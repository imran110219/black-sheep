import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const khaledaZiaSources = [
  source({
    id: publicSourceIds.khaledaZiaBssProfile,
    isDemo: false,
    slug: "source-khaleda-zia-bss-profile-2025",
    type: "NEWS_REPORT",
    title: "Khaleda Zia: From homemaker to Bangladesh's first female prime minister",
    publisher: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/at-a-glance/346200",
    publicationDate: "2025-12-30",
    accessedAt: "2026-08-08",
    excerpt:
      "BSS described Khaleda Zia's premiership, BNP leadership, and roles in Bangladesh's parliamentary and electoral history.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Former prime minister role",
      "BNP leadership role",
      "1991 and February 1996 election context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.khaledaZia]
  }),
  source({
    id: publicSourceIds.khaledaZiaBanglapediaProfile,
    isDemo: false,
    slug: "source-khaleda-zia-banglapedia-profile",
    type: "OTHER",
    title: "Zia, Begum Khaleda",
    publisher: "Banglapedia",
    sourceUrl: "https://en.banglapedia.org/index.php/Zia%2C_Begum_Khaleda",
    publicationDate: "2022-01-01",
    accessedAt: "2026-08-08",
    excerpt:
      "Banglapedia records Khaleda Zia's two premierships, BNP chairpersonship, and the political context of the February 1996 and 2008 elections.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: ["Two premierships", "BNP chairperson role", "Election-history context"],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.khaledaZia]
  })
];
