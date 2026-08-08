import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const roadSafetyMovement2018Sources = [
  source({
    id: publicSourceIds.roadSafetyMovementDailyStarAmnesty,
    isDemo: false,
    slug: "source-road-safety-movement-daily-star-amnesty-2018",
    type: "NEWS_REPORT",
    title: "Amnesty International urges govt to end crackdown on student protesters",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/politics/amnesty-international-urges-bangladesh-government-end-student-movement-for-safe-roads-1616866",
    publicationDate: "2018-08-06",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reported Amnesty International's call to end the crackdown on student protesters after two students were killed and others injured by a speeding bus, and described the movement's safe-road demands.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "July-August 2018 student road-safety movement",
      "Two student deaths that triggered the protests",
      "Amnesty call to end reported crackdown",
      "Freedom of assembly and safety concerns"
    ],
    relatedCaseIds: [],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.roadSafetyMovementHumanRightsWatch,
    isDemo: false,
    slug: "source-road-safety-movement-human-rights-watch-2018",
    type: "INVESTIGATIVE_REPORT",
    title: "Bangladesh: Stop Attacks on Student Protesters, Critics",
    publisher: "Human Rights Watch",
    sourceUrl:
      "https://www.hrw.org/news/2018/08/06/bangladesh-stop-attacks-student-protesters-critics",
    publicationDate: "2018-08-06",
    accessedAt: "2026-08-08",
    excerpt:
      "Human Rights Watch reported attacks on student protesters and critics, arrests of students and journalists, and government promises concerning reckless driving, traffic regulation, and a new Road Safety Act.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Reported attacks on protesters",
      "Reported arrests of students and journalists",
      "Government road-safety commitments",
      "Freedom of expression and assembly concerns"
    ],
    relatedCaseIds: [],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.roadSafetyMovementArrests,
    isDemo: false,
    slug: "source-road-safety-movement-bdnews24-arrests-2018",
    type: "NEWS_REPORT",
    title: "Police arrest 97 in 51 cases over student protests for safe roads",
    publisher: "bdnews24.com",
    sourceUrl:
      "https://bdnews24.com/bangladesh/police-arrest-97-in-51-cases-over-student-protests-for-safe-roads",
    publicationDate: "2018-08-16",
    accessedAt: "2026-08-08",
    excerpt:
      "bdnews24.com reported police figures of 97 arrests in 51 cases after the road-safety movement, including cases under the ICT Act; the report described the procedural arrest record rather than a finding of guilt.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Police-reported arrest count",
      "Cases filed after the road-safety movement",
      "ICT Act procedural context",
      "Student protest chronology"
    ],
    relatedCaseIds: [],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.roadSafetyMovementRetrospective,
    isDemo: false,
    slug: "source-road-safety-movement-daily-star-retrospective-2022",
    type: "NEWS_REPORT",
    title: "Road Safety Movement: Four years on, road fatalities keep rising",
    publisher: "The Daily Star",
    sourceUrl:
      "https://online.thedailystar.net/news/bangladesh/transport/news/road-safety-movement-four-years-road-fatalities-keep-rising-3082106",
    publicationDate: "2022-07-29",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reviewed the 2018 road-safety movement, subsequent government directives, and continuing road-safety concerns without treating the movement's disputed outcomes as settled fact.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "2018 movement chronology",
      "Government road-safety directives",
      "Long-term policy impact context",
      "Continuing road-safety concerns"
    ],
    relatedCaseIds: [],
    relatedPersonIds: []
  }),
  source({
    id: publicSourceIds.roadSafetyMovementPoliticalResponse,
    isDemo: false,
    slug: "source-road-safety-movement-minister-response-2018",
    type: "NEWS_REPORT",
    title: "Students' demands logical, will be implemented: Home minister",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/city/bangladesh-safe-roads-demand-of-students-logical-taken-consideration-home-minister-asaduzzaman-khan-1614352",
    publicationDate: "2018-08-01",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reported comments by Home Minister Asaduzzaman Khan Kamal describing the students' demands as logical, alongside Road Transport Minister Obaidul Quader's comments on the proposed transport law.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Asaduzzaman Khan Kamal public response",
      "Obaidul Quader public response",
      "Government road-safety policy context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.asaduzzamanKhanKamal, publicPersonIds.obaidulQuader]
  }),
  source({
    id: publicSourceIds.roadSafetyMovementQuaderStatement,
    isDemo: false,
    slug: "source-road-safety-movement-obaidul-quader-2018",
    type: "NEWS_REPORT",
    title: "Evil political forces infiltrating student protest",
    publisher: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/politics/political-intruders-infiltrating-students-demonstration-for-safe-roads-in-bangladesh-obaidul-quader-1615846",
    publicationDate: "2018-08-04",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reported that Road Transport and Bridges Minister and Awami League General Secretary Obaidul Quader urged students to remain alert to political exploitation and spoke about the safety of protesters.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Obaidul Quader road-transport minister role",
      "Obaidul Quader public statement",
      "Government and party response context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.obaidulQuader]
  }),
  source({
    id: publicSourceIds.roadSafetyMovementMinisterComments,
    isDemo: false,
    slug: "source-road-safety-movement-three-ministers-2018",
    type: "NEWS_REPORT",
    title: "3 ministers slam BNP over protest",
    publisher: "The Daily Star",
    sourceUrl: "https://www.thedailystar.net/frontpage/3-ministers-slam-bnp-over-protest-1615270",
    publicationDate: "2018-08-02",
    accessedAt: "2026-08-08",
    excerpt:
      "The Daily Star reported public comments by Commerce Minister Tofail Ahmed, Road Transport and Bridges Minister Obaidul Quader, and Home Minister Asaduzzaman Khan during the road-safety movement.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Obaidul Quader public response",
      "Asaduzzaman Khan public response",
      "Ministerial political context"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.obaidulQuader, publicPersonIds.asaduzzamanKhanKamal]
  })
];
