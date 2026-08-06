import { z } from "zod";
import { verificationStatusSchema } from "./common";

export const assetTypeSchema = z.enum([
  "LAND",
  "RESIDENTIAL_PROPERTY",
  "COMMERCIAL_PROPERTY",
  "VEHICLE",
  "COMPANY_OWNERSHIP",
  "BANK_OR_FINANCIAL_HOLDING",
  "BUSINESS_INTEREST",
  "OTHER"
]);

export const assetRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.literal(true),
  personId: z.string().uuid(),
  title: z.string(),
  assetType: assetTypeSchema,
  currency: z.string(),
  description: z.string(),
  value: z.number().optional(),
  acquisitionDate: z.string().optional(),
  country: z.string(),
  city: z.string(),
  imageUrl: z.string().url().optional(),
  sourceIds: z.array(z.string().uuid()),
  verificationStatus: verificationStatusSchema,
  isPublished: z.boolean(),
  updatedAt: z.string()
});
export type AssetRecord = z.infer<typeof assetRecordSchema>;
