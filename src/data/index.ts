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
import { obaidulQuaderCases } from "./public/records/obaidul-quader";
import {
  bdrPilkhanaAreas,
  bdrPilkhanaCases,
  bdrPilkhanaClaims,
  bdrPilkhanaImpactRecords,
  bdrPilkhanaIncidents,
  bdrPilkhanaInstitutions,
  bdrPilkhanaNewsRecords
} from "./public/records/bdr-pilkhana";
import {
  roadSafetyMovement2018Claims,
  roadSafetyMovement2018ImpactRecords,
  roadSafetyMovement2018Incidents,
  roadSafetyMovement2018NewsRecords
} from "./public/records/road-safety-movement-2018";
import { financialScandalIncidents } from "./public/records/financial-scandals";
import { electionIncidents } from "./public/records/election-incidents";
export { publicPeople as people, publicSources as sources } from "./public";

export const areas = [...sheikhHasinaAreas, ...shaplaChattarAreas, ...bdrPilkhanaAreas];
export const cases = [
  ...sheikhHasinaCases,
  ...shaplaChattarCases,
  ...obaidulQuaderCases,
  ...bdrPilkhanaCases
];
export const claims = [
  ...sheikhHasinaClaims,
  ...shaplaChattarClaims,
  ...bdrPilkhanaClaims,
  ...roadSafetyMovement2018Claims
];
export const corrections = sheikhHasinaCorrections;
export const geographicAssociations = sheikhHasinaGeographicAssociations;
export const impactRecords = [
  ...sheikhHasinaImpactRecords,
  ...shaplaChattarImpactRecords,
  ...bdrPilkhanaImpactRecords,
  ...roadSafetyMovement2018ImpactRecords
];
export const incidents = [
  ...sheikhHasinaIncidents,
  ...shaplaChattarIncidents,
  ...bdrPilkhanaIncidents,
  ...roadSafetyMovement2018Incidents,
  ...financialScandalIncidents,
  ...electionIncidents
];
export const institutionAssociations = sheikhHasinaInstitutionAssociations;
export const institutions = [
  ...sheikhHasinaInstitutions,
  ...shaplaChattarInstitutions,
  ...bdrPilkhanaInstitutions
];
export const newsRecords = [
  ...sheikhHasinaNewsRecords,
  ...shaplaChattarNewsRecords,
  ...bdrPilkhanaNewsRecords,
  ...roadSafetyMovement2018NewsRecords
];
export const relationships = sheikhHasinaRelationships;
export const revisions = sheikhHasinaRevisions;
export const subjectResponses = sheikhHasinaSubjectResponses;

export const assets: AssetRecord[] = [];
export const dossiers: DossierCollection[] = [];
export const organizations: Organization[] = [];
export const tags: Tag[] = [];
