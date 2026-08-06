import type { AssetRecord } from "@/domain/asset";
import type { CaseRecord } from "@/domain/case";
import type {
  Area,
  ClaimRecord,
  GeographicAssociation,
  ImpactRecord,
  IncidentRecord,
  InstitutionAssociation
} from "@/domain/claim";
import type { CorrectionRecord, SubjectResponse } from "@/domain/correction";
import type { NewsRecord } from "@/domain/news";
import type { Organization } from "@/domain/organization";
import type { RelationshipRecord } from "@/domain/relationship";
import type { RevisionRecord } from "@/domain/revision";
import type { Tag } from "@/domain/tag";
import { publicPeople, publicSources } from "./public";

export const people = publicPeople;
export const sources = publicSources;

export const areas: Area[] = [];
export const assets: AssetRecord[] = [];
export const cases: CaseRecord[] = [];
export const claims: ClaimRecord[] = [];
export const corrections: CorrectionRecord[] = [];
export const geographicAssociations: GeographicAssociation[] = [];
export const impactRecords: ImpactRecord[] = [];
export const incidents: IncidentRecord[] = [];
export const institutionAssociations: InstitutionAssociation[] = [];
export const newsRecords: NewsRecord[] = [];
export const organizations: Organization[] = [];
export const relationships: RelationshipRecord[] = [];
export const revisions: RevisionRecord[] = [];
export const subjectResponses: SubjectResponse[] = [];
export const tags: Tag[] = [];
