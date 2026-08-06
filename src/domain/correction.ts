import { z } from "zod";
import { verificationStatusSchema } from "./common";

export const subjectResponseSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.literal(true),
  personId: z.string().uuid(),
  caseId: z.string().uuid().optional(),
  responseBn: z.string(),
  responseEn: z.string(),
  responseSourceUrl: z.string().url().optional(),
  receivedAt: z.string(),
  publishedAt: z.string(),
  verificationStatus: verificationStatusSchema
});
export type SubjectResponse = z.infer<typeof subjectResponseSchema>;

export const correctionStatusSchema = z.enum([
  "REQUESTED",
  "UNDER_REVIEW",
  "ACCEPTED",
  "PARTIALLY_ACCEPTED",
  "REJECTED",
  "PUBLISHED"
]);

export const correctionRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.literal(true),
  entityType: z.string(),
  entityId: z.string().uuid(),
  titleBn: z.string(),
  titleEn: z.string(),
  correctionBn: z.string(),
  correctionEn: z.string(),
  correctedAt: z.string(),
  sourceIds: z.array(z.string().uuid()),
  status: correctionStatusSchema
});
export type CorrectionRecord = z.infer<typeof correctionRecordSchema>;
