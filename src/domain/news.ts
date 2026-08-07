import { z } from "zod";
import { caseCategorySchema } from "./case";
import { verificationStatusSchema } from "./common";

export const newsTypeSchema = z.enum([
  "ARTICLE",
  "VIDEO",
  "AUDIO",
  "DOCUMENTARY",
  "INTERVIEW",
  "OTHER"
]);
export const newsStrengthSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);

export const newsRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  slug: z.string(),
  title: z.string(),
  publisher: z.string(),
  agency: z.string(),
  newsType: newsTypeSchema,
  sourceUrl: z.string().url(),
  summary: z.string(),
  publishedAt: z.string(),
  strength: newsStrengthSchema,
  verificationStatus: verificationStatusSchema,
  caseIds: z.array(z.string().uuid()),
  personIds: z.array(z.string().uuid()),
  categories: z.array(caseCategorySchema),
  isActive: z.boolean()
});
export type NewsRecord = z.infer<typeof newsRecordSchema>;
