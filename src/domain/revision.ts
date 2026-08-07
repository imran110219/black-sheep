import { z } from "zod";

export const revisionRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.boolean(),
  entityType: z.string(),
  entityId: z.string().uuid(),
  version: z.number().int().positive(),
  changeSummaryBn: z.string(),
  changeSummaryEn: z.string(),
  changedAt: z.string(),
  publicNote: z.string()
});
export type RevisionRecord = z.infer<typeof revisionRecordSchema>;
