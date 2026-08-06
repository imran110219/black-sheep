import { z } from "zod";

export const organizationSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.literal(true),
  slug: z.string(),
  nameBn: z.string(),
  nameEn: z.string(),
  type: z.string(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  country: z.string(),
  website: z.string().url(),
  personIds: z.array(z.string().uuid()),
  caseIds: z.array(z.string().uuid()),
  tagIds: z.array(z.string().uuid())
});
export type Organization = z.infer<typeof organizationSchema>;
