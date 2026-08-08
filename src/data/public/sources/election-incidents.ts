import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const electionIncidentSources = [
  source({
    id: publicSourceIds.february1996ElectionHumanRightsWatch,
    isDemo: false,
    slug: "source-february-1996-election-human-rights-watch",
    type: "INVESTIGATIVE_REPORT",
    title: "Political Violence: Bangladesh",
    publisher: "Human Rights Watch",
    sourceUrl: "https://www.hrw.org/report/1996/06/01/political-violence-all-sides",
    publicationDate: "1996-06-01",
    accessedAt: "2026-08-08",
    excerpt:
      "Human Rights Watch documented political violence, intimidation, and human-rights abuses around the February 1996 election and the opposition boycott.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "February 1996 election boycott context",
      "Election-related political violence",
      "Reported human-rights abuses"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina, publicPersonIds.khaledaZia]
  }),
  source({
    id: publicSourceIds.october2001ElectionAmnesty,
    isDemo: false,
    slug: "source-october-2001-election-amnesty-minority-attacks",
    type: "INVESTIGATIVE_REPORT",
    title: "Bangladesh: Attacks on members of the Hindu minority",
    publisher: "Amnesty International",
    sourceUrl: "https://www.amnesty.org/en/documents/asa13/006/2001/en/",
    publicationDate: "2001-10-01",
    accessedAt: "2026-08-08",
    excerpt:
      "Amnesty International documented attacks and discrimination against Hindu minorities after the October 2001 general election, including reported killings and property attacks.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "October 2001 election aftermath",
      "Reported attacks on Hindu minorities",
      "Reported killings and property attacks"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina, publicPersonIds.khaledaZia]
  }),
  source({
    id: publicSourceIds.january2007ElectionEuropeanParliament,
    isDemo: false,
    slug: "source-january-2007-election-european-parliament",
    type: "GOVERNMENT_DOCUMENT",
    title: "European Parliament resolution on Bangladesh",
    publisher: "European Parliament",
    sourceUrl: "https://www.europarl.europa.eu/doceo/document/TA-6-2007-0385_EN.html",
    publicationDate: "2007-09-06",
    accessedAt: "2026-08-08",
    excerpt:
      "The European Parliament recorded poll-related violence, postponement of the scheduled January 2007 election, emergency rule, and restrictions under the caretaker government.",
    verificationStatus: "REVIEWED",
    isPrimarySource: true,
    supportedClaims: [
      "January 2007 election postponement",
      "Poll-related violence",
      "State of emergency and caretaker-government context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina, publicPersonIds.khaledaZia]
  }),
  source({
    id: publicSourceIds.january2014ElectionHumanRightsWatch,
    isDemo: false,
    slug: "source-january-2014-election-human-rights-watch",
    type: "INVESTIGATIVE_REPORT",
    title:
      "Democracy in the Crossfire: Opposition Violence and Government Abuses in the 2014 Pre- and Post-Election Period in Bangladesh",
    publisher: "Human Rights Watch",
    sourceUrl:
      "https://www.hrw.org/report/2014/04/29/democracy-crossfire/opposition-violence-and-government-abuses-2014-pre-and-post",
    publicationDate: "2014-04-29",
    accessedAt: "2026-08-08",
    excerpt:
      "Human Rights Watch documented opposition violence, government abuses, killings, and attacks around the January 5, 2014 election and its boycott.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "January 2014 election boycott context",
      "Pre- and post-election violence",
      "Reported government and opposition abuses"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina, publicPersonIds.khaledaZia]
  }),
  source({
    id: publicSourceIds.december2018ElectionTime,
    isDemo: false,
    slug: "source-december-2018-election-time",
    type: "NEWS_REPORT",
    title: "Bangladesh election marred by voter suppression",
    publisher: "TIME",
    sourceUrl: "https://time.com/5490744/bangladesh-elections-sheihk-hasina-rigging-allegations/",
    publicationDate: "2018-12-31",
    accessedAt: "2026-08-08",
    excerpt:
      "TIME reported pre-election violence, opposition pressure, and allegations of voter suppression and vote rigging surrounding the December 2018 parliamentary election.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "December 2018 election chronology",
      "Reported opposition pressure and intimidation",
      "Vote-rigging allegations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina, publicPersonIds.khaledaZia]
  }),
  source({
    id: publicSourceIds.january2024ElectionEuropeanUnion,
    isDemo: false,
    slug: "source-january-2024-election-european-union",
    type: "OFFICIAL_STATEMENT",
    title:
      "Statement by the High Representative on behalf of the European Union on the parliamentary elections in Bangladesh",
    publisher: "Council of the European Union",
    sourceUrl:
      "https://www.consilium.europa.eu/en/press/press-releases/2024/01/09/bangladesh-statement-by-the-high-representative-on-behalf-of-the-eu-on-the-parliamentary-elections/",
    publicationDate: "2024-01-09",
    accessedAt: "2026-08-08",
    excerpt:
      "The European Union called for investigation of reported election irregularities after the January 2024 parliamentary election and noted concerns about participation and violence.",
    verificationStatus: "REVIEWED",
    isPrimarySource: true,
    supportedClaims: [
      "January 2024 election chronology",
      "Opposition boycott context",
      "European Union concerns about reported irregularities"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhHasina, publicPersonIds.khaledaZia]
  }),
  source({
    id: publicSourceIds.december2018ElectionHomeMinister,
    isDemo: false,
    slug: "source-december-2018-election-home-minister-violence",
    type: "NEWS_REPORT",
    title: "Polls violence intensity higher this time: Home minister",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/bangladesh-national-election-2018/news/polls-violence-intensity-higher-time-home-minister-1677316",
    publicationDate: "2018-12-22",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reported Home Minister Asaduzzaman Khan's comments about election violence and threats involving election officials before the December 2018 poll.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Asaduzzaman Khan public election-period response",
      "Reported election violence context",
      "Reported threats involving election officials"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.asaduzzamanKhanKamal]
  })
];
