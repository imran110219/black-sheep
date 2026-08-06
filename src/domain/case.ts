import { z } from "zod";
import { publicationStatusSchema } from "./common";

export const legalStatusSchema = z.enum([
  "ALLEGATION_REPORTED",
  "PRELIMINARY_INQUIRY",
  "UNDER_INVESTIGATION",
  "FORMALLY_CHARGED",
  "TRIAL_PENDING",
  "TRIAL_ONGOING",
  "AWAITING_VERDICT",
  "CONVICTED",
  "CONVICTION_UNDER_APPEAL",
  "ACQUITTED",
  "DISMISSED",
  "CHARGES_WITHDRAWN",
  "CONVICTION_OVERTURNED",
  "OFFICIAL_AUDIT_FINDING",
  "ADMINISTRATIVE_FINDING",
  "ADMINISTRATIVE_SANCTION",
  "CLOSED_WITHOUT_CHARGE",
  "ARCHIVED"
]);
export type LegalStatus = z.infer<typeof legalStatusSchema>;

export const caseCategorySchema = z.enum([
  "CORRUPTION",
  "BRIBERY",
  "EMBEZZLEMENT",
  "FRAUD",
  "ABUSE_OF_POWER",
  "MISUSE_OF_PUBLIC_FUNDS",
  "ELECTORAL_MISCONDUCT",
  "FINANCIAL_MISCONDUCT",
  "MONEY_LAUNDERING",
  "BANKING_MISCONDUCT",
  "HUMAN_RIGHTS_ABUSE",
  "VIOLENCE",
  "HOMICIDE_RELATED",
  "ORGANIZED_CRIME",
  "THEFT",
  "OTHER"
]);
export type CaseCategory = z.infer<typeof caseCategorySchema>;

export const personCaseRoleSchema = z.enum([
  "ACCUSED",
  "DEFENDANT",
  "RESPONDENT",
  "CONVICTED_PERSON",
  "INVESTIGATED_OFFICIAL",
  "COMPLAINANT",
  "WITNESS",
  "BENEFICIARY",
  "RELATED_PERSON",
  "OTHER"
]);
export type PersonCaseRole = z.infer<typeof personCaseRoleSchema>;

export const personCaseLinkSchema = z.object({
  personId: z.string().uuid(),
  caseId: z.string().uuid(),
  role: personCaseRoleSchema,
  legalPosition: z.string(),
  noteBn: z.string(),
  noteEn: z.string()
});
export type PersonCaseLink = z.infer<typeof personCaseLinkSchema>;

export const timelineEventSchema = z.object({
  id: z.string().uuid(),
  date: z.string(),
  titleBn: z.string(),
  titleEn: z.string(),
  descriptionBn: z.string(),
  descriptionEn: z.string(),
  sourceIds: z.array(z.string().uuid())
});
export type TimelineEvent = z.infer<typeof timelineEventSchema>;

export const caseRecordSchema = z.object({
  id: z.string().uuid(),
  isDemo: z.literal(true),
  slug: z.string(),
  caseNumber: z.string(),
  titleBn: z.string(),
  titleEn: z.string(),
  summaryBn: z.string(),
  summaryEn: z.string(),
  descriptionBn: z.string(),
  descriptionEn: z.string(),
  category: caseCategorySchema,
  legalStatus: legalStatusSchema,
  jurisdiction: z.string(),
  authority: z.string(),
  courtName: z.string(),
  judgeName: z.string().optional(),
  prosecutorName: z.string().optional(),
  defenseAttorneyName: z.string().optional(),
  filedAt: z.string(),
  startedAt: z.string(),
  resolvedAt: z.string().optional(),
  verdict: z.string().optional(),
  sentence: z.string().optional(),
  outcomeBn: z.string().optional(),
  outcomeEn: z.string().optional(),
  evidenceSummaryBn: z.string(),
  evidenceSummaryEn: z.string(),
  personLinks: z.array(personCaseLinkSchema),
  sourceIds: z.array(z.string().uuid()),
  subjectResponseIds: z.array(z.string().uuid()),
  tags: z.array(z.string().uuid()),
  timelineEvents: z.array(timelineEventSchema),
  relatedCaseIds: z.array(z.string().uuid()),
  lastVerifiedAt: z.string(),
  publicationStatus: publicationStatusSchema,
  updatedAt: z.string()
});
export type CaseRecord = z.infer<typeof caseRecordSchema>;

export type CaseSummary = Pick<
  CaseRecord,
  | "id"
  | "slug"
  | "titleBn"
  | "titleEn"
  | "caseNumber"
  | "category"
  | "legalStatus"
  | "authority"
  | "lastVerifiedAt"
  | "updatedAt"
  | "isDemo"
>;
