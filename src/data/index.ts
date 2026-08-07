import {
  areas as demoAreas,
  assets,
  cases as demoCases,
  claims as demoClaims,
  corrections as demoCorrections,
  dossiers,
  geographicAssociations as demoGeographicAssociations,
  impactRecords as demoImpactRecords,
  incidents as demoIncidents,
  institutionAssociations as demoInstitutionAssociations,
  institutions as demoInstitutions,
  newsRecords as demoNewsRecords,
  organizations,
  relationships as demoRelationships,
  revisions as demoRevisions,
  subjectResponses as demoSubjectResponses,
  tags
} from "./fixtures/mock-data";
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

export const areas = [...sheikhHasinaAreas, ...demoAreas];
export const cases = [...sheikhHasinaCases, ...demoCases];
export const claims = [...sheikhHasinaClaims, ...demoClaims];
export const corrections = [...sheikhHasinaCorrections, ...demoCorrections];
export const geographicAssociations = [
  ...sheikhHasinaGeographicAssociations,
  ...demoGeographicAssociations
];
export const impactRecords = [...sheikhHasinaImpactRecords, ...demoImpactRecords];
export const incidents = [...sheikhHasinaIncidents, ...demoIncidents];
export const institutionAssociations = [
  ...sheikhHasinaInstitutionAssociations,
  ...demoInstitutionAssociations
];
export const institutions = [...sheikhHasinaInstitutions, ...demoInstitutions];
export const newsRecords = [...sheikhHasinaNewsRecords, ...demoNewsRecords];
export const relationships = [...sheikhHasinaRelationships, ...demoRelationships];
export const revisions = [...sheikhHasinaRevisions, ...demoRevisions];
export const subjectResponses = [...sheikhHasinaSubjectResponses, ...demoSubjectResponses];
export { assets, dossiers, organizations, tags };
