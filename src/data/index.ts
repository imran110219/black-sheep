import type { AssetRecord } from "@/domain/asset";
import type { DossierCollection } from "@/domain/dossier";
import type { Organization } from "@/domain/organization";
import type { Tag } from "@/domain/tag";
import {
  sheikhHasinaAreas,
  sheikhHasinaCases,
  sheikhHasinaClaims,
  sheikhHasinaCorrections,
  sheikhHasinaGeographicAssociations,
  sheikhHasinaImpactRecords,
  sheikhHasinaIncidents,
  sheikhHasinaInstitutionAssociations,
  sheikhHasinaInstitutions,
  sheikhHasinaNewsRecords,
  sheikhHasinaRelationships,
  sheikhHasinaRevisions,
  sheikhHasinaSubjectResponses
} from "./public/records/sheikh-hasina";
export { publicPeople as people, publicSources as sources } from "./public";

export const areas = sheikhHasinaAreas;
export const cases = sheikhHasinaCases;
export const claims = sheikhHasinaClaims;
export const corrections = sheikhHasinaCorrections;
export const geographicAssociations = sheikhHasinaGeographicAssociations;
export const impactRecords = sheikhHasinaImpactRecords;
export const incidents = sheikhHasinaIncidents;
export const institutionAssociations = sheikhHasinaInstitutionAssociations;
export const institutions = sheikhHasinaInstitutions;
export const newsRecords = sheikhHasinaNewsRecords;
export const relationships = sheikhHasinaRelationships;
export const revisions = sheikhHasinaRevisions;
export const subjectResponses = sheikhHasinaSubjectResponses;

export const assets: AssetRecord[] = [];
export const dossiers: DossierCollection[] = [];
export const organizations: Organization[] = [];
export const tags: Tag[] = [];
