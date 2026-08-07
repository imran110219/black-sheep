import { z } from "zod";
import { influenceDomainSchema } from "./claim";
import { publicationStatusSchema, socialLinkSchema } from "./common";

export const personNarrativeSchema = z.object({
  whyListedBn: z.string(),
  whyListedEn: z.string(),
  historicalOverviewBn: z.string(),
  historicalOverviewEn: z.string(),
  riseToPowerBn: z.string().optional(),
  riseToPowerEn: z.string().optional(),
  powerBaseBn: z.string().optional(),
  powerBaseEn: z.string().optional(),
  documentedPatternsBn: z.string().optional(),
  documentedPatternsEn: z.string().optional(),
  historicalImpactBn: z.string().optional(),
  historicalImpactEn: z.string().optional(),
  publicReputationBn: z.string().optional(),
  publicReputationEn: z.string().optional(),
  legacyBn: z.string().optional(),
  legacyEn: z.string().optional(),
  featuredClaimIds: z.array(z.string().uuid()),
  featuredRelationshipIds: z.array(z.string().uuid()),
  featuredIncidentIds: z.array(z.string().uuid())
});
export type PersonNarrative = z.infer<typeof personNarrativeSchema>;

export const personProfileSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  slug: z.string(),
  nameBn: z.string(),
  nameEn: z.string(),
  aliases: z.array(z.string()),
  birthDate: z.string().optional(),
  birthYear: z.number().int().optional(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  descriptionBn: z.string(),
  descriptionEn: z.string(),
  occupation: z.string(),
  politicalAffiliation: z.string().optional(),
  publicRoles: z.array(z.string()),
  organizations: z.array(z.string()),
  website: z.string().url().optional(),
  activePeriod: z.string(),
  activePeriodStart: z.string().optional(),
  activePeriodEnd: z.string().optional(),
  historicalEraIds: z.array(z.string()),
  primaryAreaBn: z.string(),
  primaryAreaEn: z.string(),
  primaryAreaIds: z.array(z.string().uuid()),
  claimIds: z.array(z.string().uuid()),
  incidentIds: z.array(z.string().uuid()),
  institutionAssociationIds: z.array(z.string().uuid()),
  geographicAssociationIds: z.array(z.string().uuid()),
  influenceDomains: z.array(influenceDomainSchema),
  historicalIdentityBn: z.string(),
  historicalIdentityEn: z.string(),
  narrative: personNarrativeSchema,
  city: z.string(),
  country: z.string(),
  socialLinks: z.array(socialLinkSchema),
  photo: z.string().optional(),
  tags: z.array(z.string().uuid()),
  caseIds: z.array(z.string().uuid()),
  newsIds: z.array(z.string().uuid()),
  assetIds: z.array(z.string().uuid()),
  relationshipIds: z.array(z.string().uuid()),
  publicationStatus: publicationStatusSchema,
  isActive: z.boolean(),
  createdBy: z.string().optional(),
  updatedBy: z.string().optional(),
  lastVerifiedAt: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string()
});
export type PersonProfile = z.infer<typeof personProfileSchema>;

export type PersonCard = Pick<
  PersonProfile,
  | "id"
  | "isDemo"
  | "slug"
  | "nameBn"
  | "nameEn"
  | "aliases"
  | "summaryBn"
  | "summaryEn"
  | "occupation"
  | "politicalAffiliation"
  | "publicRoles"
  | "organizations"
  | "activePeriod"
  | "activePeriodStart"
  | "activePeriodEnd"
  | "historicalEraIds"
  | "primaryAreaBn"
  | "primaryAreaEn"
  | "primaryAreaIds"
  | "claimIds"
  | "incidentIds"
  | "institutionAssociationIds"
  | "geographicAssociationIds"
  | "influenceDomains"
  | "historicalIdentityBn"
  | "historicalIdentityEn"
  | "narrative"
  | "city"
  | "country"
  | "tags"
  | "caseIds"
  | "relationshipIds"
  | "lastVerifiedAt"
  | "updatedAt"
> & {
  counts?: {
    claims: number;
    incidents: number;
    cases: number;
    verifiedSources: number;
    relationships: number;
    institutions: number;
    areas: number;
  };
};

export type PeopleSearchQuery = {
  query?: string;
  area?: string;
  historicalEra?: string;
  influenceDomain?: string;
  institutionType?: string;
  legalStatus?: string;
  category?: string;
  politicalAffiliation?: string;
  occupation?: string;
  organization?: string;
  country?: string;
  tag?: string;
  claimType?: string;
  claimStatus?: string;
  incidentType?: string;
  relationshipType?: string;
  verificationStatus?: string;
  officialFindingAvailable?: string;
  subjectResponseAvailable?: string;
  year?: string;
  sort?: "recently-verified" | "recently-updated" | "alphabetical";
  page?: number;
  pageSize?: number;
};
