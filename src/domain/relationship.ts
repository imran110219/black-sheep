import { z } from "zod";
import { verificationStatusSchema } from "./common";

export const relationshipTypeSchema = z.enum([
  "FAMILY",
  "POLITICAL",
  "BUSINESS",
  "PROFESSIONAL",
  "ORGANIZATIONAL",
  "ALLEGED_ASSOCIATE",
  "CO_DEFENDANT",
  "BENEFICIARY",
  "OTHER"
]);

export const relationshipRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  fromPersonId: z.string().uuid(),
  toPersonId: z.string().uuid(),
  relationshipType: relationshipTypeSchema,
  summaryBn: z.string(),
  summaryEn: z.string(),
  sourceIds: z.array(z.string().uuid()),
  verificationStatus: verificationStatusSchema,
  isActive: z.boolean(),
  updatedAt: z.string()
});
export type RelationshipRecord = z.infer<typeof relationshipRecordSchema>;
