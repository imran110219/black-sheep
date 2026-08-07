import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const mdShahabuddinKhanSources = [
  source({
    id: publicSourceIds.shahabuddinDailyStarHighwayCameras,
    isDemo: false,
    slug: "source-shahabuddin-daily-star-highway-cameras-2023",
    type: "NEWS_REPORT",
    title: "AI cameras to be installed on Dhaka-Chittagong highway",
    publisher: "The Daily Star",
    sourceUrl:
      "https://online91.thedailystar.net/tech-startup/news/ai-cameras-be-installed-dhaka-chittagong-highway-3502041",
    publicationDate: "2023-12-24",
    accessedAt: "2026-08-08",
    excerpt:
      "Report quoting Md Shahabuddin Khan as Additional Inspector General of Highway Police about an AI-camera surveillance project.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Additional Inspector General of Highway Police role",
      "Highway surveillance project context",
      "Public administration role"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdShahabuddinKhan]
  }),
  source({
    id: publicSourceIds.shahabuddinDailyStarForcedRetirement,
    isDemo: false,
    slug: "source-shahabuddin-daily-star-forced-retirement-2024",
    type: "NEWS_REPORT",
    title: "6 police units now running without chiefs",
    publisher: "The Daily Star",
    sourceUrl:
      "https://online-d11.thedailystar.net/news/bangladesh/news/6-police-units-now-running-without-chiefs-3725526",
    publicationDate: "2024-10-13",
    accessedAt: "2026-08-08",
    excerpt:
      "Report that the Highway Police had been without a chief since Shahabuddin Khan was forced to retire.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Highway Police leadership context",
      "Forced-retirement reporting",
      "Administrative status, not criminal finding"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.mdShahabuddinKhan]
  })
];
