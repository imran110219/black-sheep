import { formerRegimeFigureSources } from "./former-regime-figures";
import { obaidulQuaderWikipediaSource } from "./obaidul-quader";
import { sheikhHasinaWikipediaSource } from "./sheikh-hasina";
import { topTerrorSources } from "./top-terrors";

export const publicSources = [
  sheikhHasinaWikipediaSource,
  obaidulQuaderWikipediaSource,
  ...formerRegimeFigureSources,
  ...topTerrorSources
];
