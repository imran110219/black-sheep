import { publicPersonIds, publicSourceIds } from "../ids";
import { source } from "./_source-factory";

export const sheikhFazleNoorTaposhSources = [
  source({
    id: publicSourceIds.taposhDsccBiography,
    isDemo: false,
    slug: "source-taposh-dscc-biography",
    type: "GOVERNMENT_DOCUMENT",
    title: "Biography of Hon'ble Mayor Sheikh Fazle Noor Taposh",
    publisher: "Dhaka South City Corporation",
    sourceUrl: "https://dscc.gov.bd/site/page/284a426a-cdb8-43be-b9ba-221294df2343/%5Bfront%5D",
    publicationDate: "2022-08-22",
    accessedAt: "2026-08-07",
    excerpt:
      "Official biography recording mayoral role, parliamentary roles, Awami League nomination, and minister-status notice.",
    verificationStatus: "REVIEWED",
    isPrimarySource: true,
    supportedClaims: [
      "Former DSCC mayor role",
      "Former MP roles",
      "Awami League mayoral nomination"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhFazleNoorTaposh]
  }),
  source({
    id: publicSourceIds.taposhProthomAloBank,
    isDemo: false,
    slug: "source-taposh-prothom-alo-modhumoti-bank",
    type: "INVESTIGATIVE_REPORT",
    title: "Dhaka south city's money in Taposh's bank",
    publisher: "Prothom Alo English",
    sourceUrl: "https://en.prothomalo.com/bangladesh/city/h7cdfmc5gj",
    publicationDate: "2024-08-25",
    accessedAt: "2026-08-07",
    excerpt:
      "Public report alleging DSCC funds and transactions were shifted toward Modhumoti Bank, with contract and patronage concerns.",
    verificationStatus: "REVIEWED",
    isPrimarySource: false,
    supportedClaims: [
      "Modhumoti Bank relationship",
      "DSCC fund allegations",
      "Contract and party-linked patronage allegations"
    ],
    relatedCaseIds: [],
    relatedPersonIds: [publicPersonIds.sheikhFazleNoorTaposh]
  })
];
