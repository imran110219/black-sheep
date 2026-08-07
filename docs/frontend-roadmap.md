# Frontend Roadmap

## Phase 1 Current Baseline

The app is a localized, frontend-only, read-only public data product with:

- active public profile and source records
- demo scaffold claim, incident, area, institution, dossier, correction, and case records
- repository abstraction
- repository-backed page contexts; route components should not import fixture data or call mock-only context helpers
- Story View and Evidence View profile layout using `?view=story|evidence`
- editorial discovery homepage
- area, institution, incident, and dossier routes
- global search across people, areas, institutions, incidents, claims, cases, and dossiers in the local repository implementation
- strict TypeScript, linting, formatting, tests, and production build checks

Existing real public records remain file-backed and are active for people and source discovery.

The current scaffold records for claims, incidents, institutions, areas, associations, impacts, dossiers, cases, news, corrections, and revisions are fictional demo records. They are UI/data-shape coverage, not real evidence attached to the active public people list.

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

When converting a demo scaffold entity into real data:

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
