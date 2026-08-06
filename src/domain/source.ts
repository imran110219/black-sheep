import { z } from "zod";
import { verificationStatusSchema } from "./common";

export const sourceTypeSchema = z.enum([
  "COURT_JUDGMENT",
  "COURT_FILING",
  "POLICE_OR_INVESTIGATION_RECORD",
  "GOVERNMENT_DOCUMENT",
  "AUDIT_REPORT",
  "PARLIAMENTARY_RECORD",
  "REGULATORY_FINDING",
  "OFFICIAL_STATEMENT",
  "INVESTIGATIVE_REPORT",
  "NEWS_REPORT",
  "SUBJECT_STATEMENT",
  "CORRECTION_NOTICE",
  "OTHER"
]);

export const sourceRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.literal(true),
  slug: z.string(),
  type: sourceTypeSchema,
  title: z.string(),
  publisher: z.string(),
  sourceUrl: z.string().url(),
  archivedUrl: z.string().url().optional(),
  documentNumber: z.string().optional(),
  jurisdiction: z.string().optional(),
  publicationDate: z.string(),
  accessedAt: z.string(),
  excerpt: z.string(),
  verificationStatus: verificationStatusSchema,
  isPrimarySource: z.boolean(),
  supportedClaims: z.array(z.string()),
  relatedCaseIds: z.array(z.string().uuid()),
  relatedPersonIds: z.array(z.string().uuid())
});
export type SourceRecord = z.infer<typeof sourceRecordSchema>;
