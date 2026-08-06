import { z } from "zod";

export const tagSchema = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  nameBn: z.string(),
  nameEn: z.string(),
  descriptionBn: z.string(),
  descriptionEn: z.string(),
  parentId: z.string().uuid().optional(),
  isActive: z.boolean()
});
export type Tag = z.infer<typeof tagSchema>;
