import { z } from "zod";

export const dossierCollectionSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  slug: z.string(),
  titleBn: z.string(),
  titleEn: z.string(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  personIds: z.array(z.string().uuid()),
  claimIds: z.array(z.string().uuid()),
  incidentIds: z.array(z.string().uuid()),
  areaIds: z.array(z.string().uuid()),
  institutionIds: z.array(z.string().uuid()),
  sourceIds: z.array(z.string().uuid()),
  coverImage: z.string(),
  updatedAt: z.string()
});

export type DossierCollection = z.infer<typeof dossierCollectionSchema>;
