import { z } from "zod";

export const localeSchema = z.enum(["bn", "en"]);
export type Locale = z.infer<typeof localeSchema>;

export const publicationStatusSchema = z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]);
export type PublicationStatus = z.infer<typeof publicationStatusSchema>;

export const verificationStatusSchema = z.enum([
  "UNVERIFIED",
  "SOURCE_LOCATED",
  "REVIEWED",
  "CROSS_CHECKED",
  "PRIMARY_SOURCE_VERIFIED",
  "DISPUTED",
  "RETRACTED",
  "ARCHIVED"
]);
export type VerificationStatus = z.infer<typeof verificationStatusSchema>;

export const socialLinkSchema = z.object({
  label: z.string(),
  url: z
    .string()
    .url()
    .refine((url) => /^https?:\/\//.test(url), "Only http(s) links are public-safe")
});
export type SocialLink = z.infer<typeof socialLinkSchema>;

export const paginatedResponseSchema = <T extends z.ZodTypeAny>(item: T) =>
  z.object({
    items: z.array(item),
    page: z.number().int().positive(),
    pageSize: z.number().int().positive(),
    total: z.number().int().nonnegative(),
    totalPages: z.number().int().nonnegative()
  });

export type PaginatedResponse<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type LocalizedText = {
  bn: string;
  en: string;
};
