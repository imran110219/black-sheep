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
import {
  shaplaChattarAreas,
  shaplaChattarCases,
  shaplaChattarClaims,
  shaplaChattarImpactRecords,
  shaplaChattarIncidents,
  shaplaChattarInstitutions,
  shaplaChattarNewsRecords
} from "./public/records/shapla-chattar";
export { publicPeople as people, publicSources as sources } from "./public";

export const areas = [...sheikhHasinaAreas, ...shaplaChattarAreas];
export const cases = [...sheikhHasinaCases, ...shaplaChattarCases];
export const claims = [...sheikhHasinaClaims, ...shaplaChattarClaims];
export const corrections = sheikhHasinaCorrections;
export const geographicAssociations = sheikhHasinaGeographicAssociations;
export const impactRecords = [...sheikhHasinaImpactRecords, ...shaplaChattarImpactRecords];
export const incidents = [...sheikhHasinaIncidents, ...shaplaChattarIncidents];
export const institutionAssociations = sheikhHasinaInstitutionAssociations;
export const institutions = [...sheikhHasinaInstitutions, ...shaplaChattarInstitutions];
export const newsRecords = [...sheikhHasinaNewsRecords, ...shaplaChattarNewsRecords];
export const relationships = sheikhHasinaRelationships;
export const revisions = sheikhHasinaRevisions;
export const subjectResponses = sheikhHasinaSubjectResponses;

export const assets: AssetRecord[] = [];
export const dossiers: DossierCollection[] = [];
export const organizations: Organization[] = [];
export const tags: Tag[] = [];
