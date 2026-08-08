# Frontend Roadmap

## Phase 1 Current Baseline

The app is a localized, frontend-only, read-only public data product with:

- active public profile and source records
- source-backed public claim, incident, area, institution, correction, and case records where researched
- repository abstraction
- repository-backed page contexts; route components should not import data files or access repository internals
- Story View and Evidence View profile layout using `?view=story|evidence`
- editorial discovery homepage
- area, institution, incident, and dossier routes
- global search across people, areas, institutions, incidents, claims, cases, and dossiers in the local repository implementation
- strict TypeScript, linting, formatting, tests, and production build checks

Existing real public records remain file-backed and active for people and source discovery. The current public index contains 93 person modules and 102 source modules, including recent political, security, family-network, banking, financial, and health-sector research. The Sheikh Hasina structured record set is the current source-backed Story/Network/Evidence example.

The active structured records are the source-backed Sheikh Hasina record set. Other collections are empty until source-backed records are researched and added. Fictional demo records are no longer exported by the application.

## Phase 2 Structured Evidence Expansion

Future source-backed public records can populate:

- `ClaimRecord`
- legal cases and outcomes
- incidents and historical episodes
- geographic associations
- institution associations
- impact records
- subject responses
- corrections
- revision history

Do this incrementally. A real person profile can exist with basic public biography and sources, but claims, incidents, cases, institution associations, area associations, and impact records should not be attached until each record has source ids and careful status language.

When adding a new structured entity as real data:

- keep it in a slug-named public data module where appropriate
- preserve status boundaries
- add source IDs before publication
- avoid precise private addresses or identifiers
- update both Bangla and English text together

## Phase 3 Discovery Improvements

Improve browsing and filtering around:

- influence domain
- area or district
- active period
- institution type
- relationship type
- claim status
- verification status
- subject response availability
- official finding availability

Search should continue to match Bangla and English names, aliases, narrative text, primary areas, organizations, and influence domains.

## Phase 4 Dossiers and Network Views

Improve curated collection pages for themes such as:

- underworld and political patronage
- urban extortion and tender manipulation
- land and power
- election violence
- banking and financial influence

Start with responsive grouped lists. Interactive graph views should come later, after relationships and institution associations are sufficiently populated.

## Phase 5 Editorial Tooling

Build authenticated editorial/admin tooling only after scope changes explicitly allow backend, authentication, and admin functionality. Until then, all work remains frontend-only and file-backed.

## Phase 6 Search and Scaling

Add indexed multilingual search, caching, data validation scripts, source-lineage checks, and privacy-respecting monitoring after policy review.
