import { z } from "zod";
import { verificationStatusSchema } from "./common";

export const claimTypeSchema = z.enum([
  "CORRUPTION",
  "ABUSE_OF_POWER",
  "POLITICAL_REPRESSION",
  "ELECTION_INTERFERENCE",
  "VIOLENCE",
  "LAND_CONTROL",
  "BANKING_INFLUENCE",
  "BUSINESS_NETWORK",
  "PUBLIC_CONTRACTS",
  "RELIGIOUS_INFLUENCE",
  "MEDIA_INFLUENCE",
  "NEPOTISM",
  "PATRONAGE",
  "ILLICIT_ASSET",
  "HUMAN_RIGHTS_ABUSE",
  "HISTORICAL_RESPONSIBILITY",
  "GOVERNMENT_CONTROL",
  "INSTITUTIONAL_CAPTURE",
  "OTHER"
]);
export type ClaimType = z.infer<typeof claimTypeSchema>;

export const claimStatusSchema = z.enum([
  "REPORTED",
  "ALLEGED",
  "OFFICIALLY_INVESTIGATED",
  "OFFICIAL_FINDING",
  "FORMALLY_CHARGED",
  "JUDICIALLY_ESTABLISHED",
  "DISPUTED",
  "RETRACTED",
  "HISTORICAL_CONSENSUS"
]);
export type ClaimStatus = z.infer<typeof claimStatusSchema>;

export const claimPersonRoleSchema = z.enum([
  "OFFICIAL",
  "SUBJECT",
  "ACCUSED",
  "BENEFICIARY",
  "WITNESS",
  "RESPONDENT",
  "RELATED_PERSON",
  "OTHER"
]);
export type ClaimPersonRole = z.infer<typeof claimPersonRoleSchema>;

export const claimPersonLinkSchema = z.object({
  personId: z.string().uuid(),
  role: claimPersonRoleSchema,
  noteBn: z.string().optional(),
  noteEn: z.string().optional()
});
export type ClaimPersonLink = z.infer<typeof claimPersonLinkSchema>;

export const areaTypeSchema = z.enum([
  "COUNTRY",
  "DIVISION",
  "DISTRICT",
  "UPAZILA",
  "UNION",
  "CONSTITUENCY",
  "CITY",
  "LOCALITY",
  "OTHER"
]);
export type AreaType = z.infer<typeof areaTypeSchema>;

export const influenceDomainSchema = z.enum([
  "POLITICS",
  "GOVERNMENT",
  "BANKING",
  "LAND",
  "BUSINESS",
  "PUBLIC_CONTRACTS",
  "RELIGION",
  "MEDIA",
  "SECURITY",
  "ELECTIONS",
  "VIOLENCE",
  "HUMAN_RIGHTS",
  "FAMILY_NETWORK",
  "PATRONAGE",
  "OTHER"
]);
export type InfluenceDomain = z.infer<typeof influenceDomainSchema>;

export const areaSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  slug: z.string(),
  nameBn: z.string(),
  nameEn: z.string(),
  type: areaTypeSchema,
  parentId: z.string().uuid().optional(),
  country: z.string(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  summaryBn: z.string().optional(),
  summaryEn: z.string().optional()
});
export type Area = z.infer<typeof areaSchema>;

export const institutionTypeSchema = z.enum([
  "POLITICAL_PARTY",
  "GOVERNMENT_AGENCY",
  "BANK",
  "FINANCIAL_INSTITUTION",
  "COMPANY",
  "BUSINESS_GROUP",
  "RELIGIOUS_INSTITUTION",
  "EDUCATIONAL_INSTITUTION",
  "MEDIA_ORGANIZATION",
  "FOUNDATION",
  "NGO",
  "SECURITY_AGENCY",
  "CONTRACTING_COMPANY",
  "FAMILY_ENTERPRISE",
  "OTHER"
]);
export type InstitutionType = z.infer<typeof institutionTypeSchema>;

export const institutionSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  slug: z.string(),
  nameBn: z.string(),
  nameEn: z.string(),
  type: institutionTypeSchema,
  summaryBn: z.string(),
  summaryEn: z.string(),
  country: z.string(),
  areaIds: z.array(z.string().uuid()),
  website: z.string().url().optional(),
  organizationId: z.string().uuid().optional(),
  tagIds: z.array(z.string().uuid())
});
export type Institution = z.infer<typeof institutionSchema>;

export const geographicAssociationSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  personId: z.string().uuid(),
  areaId: z.string().uuid(),
  relationType: z.enum([
    "BIRTHPLACE",
    "RESIDENCE",
    "CONSTITUENCY",
    "POLITICAL_BASE",
    "BUSINESS_BASE",
    "LAND_INTEREST",
    "INCIDENT_LOCATION",
    "AREA_OF_INFLUENCE",
    "ADMINISTRATIVE_CONTROL",
    "OTHER"
  ]),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  claimIds: z.array(z.string().uuid()),
  sourceIds: z.array(z.string().uuid()),
  verificationStatus: verificationStatusSchema
});
export type GeographicAssociation = z.infer<typeof geographicAssociationSchema>;

export const institutionAssociationSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  personId: z.string().uuid(),
  institutionId: z.string().uuid(),
  relationshipType: z.enum([
    "FOUNDER",
    "OWNER",
    "BENEFICIAL_OWNER",
    "DIRECTOR",
    "CHAIRPERSON",
    "PATRON",
    "DONOR",
    "POLITICAL_CONTROLLER",
    "RELIGIOUS_PATRON",
    "CONTRACTOR",
    "BORROWER",
    "ALLEGED_ASSOCIATE",
    "OFFICIAL_ROLE",
    "OTHER"
  ]),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  claimIds: z.array(z.string().uuid()),
  sourceIds: z.array(z.string().uuid()),
  verificationStatus: verificationStatusSchema
});
export type InstitutionAssociation = z.infer<typeof institutionAssociationSchema>;

export const impactRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  incidentId: z.string().uuid().optional(),
  claimId: z.string().uuid().optional(),
  personId: z.string().uuid().optional(),
  impactType: z.enum([
    "PUBLIC_FINANCE",
    "LAND",
    "BANKING",
    "LOCAL_COMMUNITY",
    "POLITICAL_RIGHTS",
    "HUMAN_RIGHTS",
    "PUBLIC_INSTITUTION",
    "RELIGIOUS_COMMUNITY",
    "BUSINESS_ENVIRONMENT",
    "MEDIA",
    "OTHER"
  ]),
  summaryBn: z.string(),
  summaryEn: z.string(),
  affectedAreaIds: z.array(z.string().uuid()),
  affectedOrganizationIds: z.array(z.string().uuid()),
  estimatedValue: z.number().optional(),
  currency: z.string().optional(),
  sourceIds: z.array(z.string().uuid()),
  verificationStatus: verificationStatusSchema
});
export type ImpactRecord = z.infer<typeof impactRecordSchema>;

export const incidentPersonLinkSchema = z.object({
  personId: z.string().uuid(),
  role: z.enum([
    "LEADER",
    "DECISION_MAKER",
    "SUBJECT",
    "ACCUSED",
    "VICTIM",
    "WITNESS",
    "OFFICIAL",
    "BENEFICIARY",
    "RELATED_PERSON",
    "OTHER"
  ]),
  noteBn: z.string(),
  noteEn: z.string()
});
export type IncidentPersonLink = z.infer<typeof incidentPersonLinkSchema>;

export const incidentRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  slug: z.string(),
  titleBn: z.string(),
  titleEn: z.string(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  descriptionBn: z.string(),
  descriptionEn: z.string(),
  incidentType: z.enum([
    "POLITICAL_VIOLENCE",
    "KILLING",
    "DISAPPEARANCE",
    "LAND_SEIZURE",
    "BANK_FAILURE",
    "CORRUPTION_SCANDAL",
    "ELECTION_INCIDENT",
    "PUBLIC_PROTEST",
    "HUMAN_RIGHTS_ABUSE",
    "FINANCIAL_SCANDAL",
    "GOVERNMENT_CRACKDOWN",
    "INSTITUTIONAL_CAPTURE",
    "OTHER"
  ]),
  occurredAt: z.string().optional(),
  periodStart: z.string().optional(),
  periodEnd: z.string().optional(),
  areaIds: z.array(z.string().uuid()),
  personLinks: z.array(incidentPersonLinkSchema),
  organizationIds: z.array(z.string().uuid()),
  institutionIds: z.array(z.string().uuid()),
  claimIds: z.array(z.string().uuid()),
  caseIds: z.array(z.string().uuid()),
  sourceIds: z.array(z.string().uuid()),
  newsIds: z.array(z.string().uuid()),
  impactRecordIds: z.array(z.string().uuid()),
  lastVerifiedAt: z.string(),
  updatedAt: z.string()
});
export type IncidentRecord = z.infer<typeof incidentRecordSchema>;

export const claimRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  slug: z.string(),
  personIds: z.array(z.string().uuid()),
  personLinks: z.array(claimPersonLinkSchema).optional(),
  titleBn: z.string(),
  titleEn: z.string(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  type: claimTypeSchema,
  status: claimStatusSchema,
  verificationStatus: verificationStatusSchema,
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  areaIds: z.array(z.string().uuid()),
  organizationIds: z.array(z.string().uuid()),
  institutionIds: z.array(z.string().uuid()),
  relatedClaimIds: z.array(z.string().uuid()),
  caseIds: z.array(z.string().uuid()),
  sourceIds: z.array(z.string().uuid()),
  newsIds: z.array(z.string().uuid()),
  subjectResponseIds: z.array(z.string().uuid()),
  editorialContextBn: z.string().optional(),
  editorialContextEn: z.string().optional(),
  isDisputed: z.boolean(),
  lastVerifiedAt: z.string(),
  updatedAt: z.string()
});
export type ClaimRecord = z.infer<typeof claimRecordSchema>;
