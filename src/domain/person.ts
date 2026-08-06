import { z } from "zod";
import { publicationStatusSchema, socialLinkSchema } from "./common";

export const personProfileSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.literal(true),
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
  | "city"
  | "country"
  | "tags"
  | "caseIds"
  | "lastVerifiedAt"
  | "updatedAt"
>;

export type PeopleSearchQuery = {
  query?: string;
  legalStatus?: string;
  category?: string;
  politicalAffiliation?: string;
  occupation?: string;
  organization?: string;
  country?: string;
  tag?: string;
  year?: string;
  sort?: "recently-verified" | "recently-updated" | "alphabetical";
  page?: number;
  pageSize?: number;
};
