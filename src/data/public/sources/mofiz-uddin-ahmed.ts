import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mofizUddinAhmedSources = [
  source({
    id: publicSourceIds.mofizDailySunTransfer,
    isDemo: false,
    slug: "source-mofiz-daily-sun-dig-transfer-2023",
    type: "NEWS_REPORT",
    title: "7 DIGs transferred",
    publisher: "Daily Sun",
    sourceUrl: "https://www.daily-sun.com/printversion/details/674295",
    publicationDate: "2023-02-16",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that Sylhet Range DIG Mofiz Uddin Ahmed was transferred to the CID and posted as anti-terrorism unit DIG.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Sylhet Range DIG role",
      "CID anti-terrorism unit transfer",
      "Police administrative record"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mofizUddinAhmed]
  }),
  source({
    id: publicSourceIds.mofizNewAgeTrafficInterview,
    isDemo: false,
    slug: "source-mofiz-new-age-traffic-interview-2019",
    type: "NEWS_REPORT",
    title: "Problems need to be solved slowly, steadily: Mofiz Uddin Ahmed",
    publisher: "New Age",
    sourceUrl:
      "https://www.newagebd.net/article/76054/problems-need-to-be-solved-slowly-steadily-mofiz-uddin-ahmed",
    publicationDate: "2019-06-21",
    accessedAt: "2026-08-08",
    excerpt:
      "Interview identifying Mofiz Uddin Ahmed as DMP additional commissioner traffic and discussing Dhaka traffic-signal administration.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "DMP additional commissioner traffic role",
      "Traffic-management policy context",
      "Public administration record"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mofizUddinAhmed]
  })
];
