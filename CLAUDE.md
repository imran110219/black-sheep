# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # start dev server
pnpm build            # production build
pnpm lint             # ESLint
pnpm lint:fix         # ESLint with auto-fix
pnpm format           # Prettier write
pnpm format:check     # Prettier check (CI)
pnpm typecheck        # tsc --noEmit
pnpm test             # Vitest (run once)
pnpm test:watch       # Vitest (watch)
pnpm test:e2e         # Playwright
pnpm validate         # format:check + lint + typecheck + test + build (required before completion)
```

Run a single Vitest test file:
```bash
pnpm test src/path/to/file.test.ts
```

## Architecture

### Rendering and routing

Next.js 15 App Router. All locale-prefixed pages live under `src/app/[locale]/`. Bangla (`bn`) is the default locale; English (`en`) is the alternative. `next-intl` handles routing and message loading from `src/i18n/messages/bn.json` and `en.json`.

Server Components are the default. Client Components are used only for interactive UI: theme/locale switching, mobile navigation, share/print, and filter controls.

### Repository pattern (critical boundary)

Route files **must never import from `src/data` directly**. All data access goes through the repository:

```ts
// src/repositories/repository-factory.ts
createKaloKhataRepository() // returns LocalKaloKhataRepository
```

The `KaloKhataRepository` interface (`src/repositories/kalokhata-repository.ts`) defines all context methods. The local implementation (`src/repositories/local-kalokhata-repository.ts`) loads from `src/data` in-memory. Pages call methods like `getPersonStoryContext`, `getIncidentContext`, `globalSearch`, etc.

### Domain types

All entity schemas are defined with Zod in `src/domain/`. Key types:
- `PersonProfile`, `PersonNarrative`, `PersonCard` — `src/domain/person.ts`
- `ClaimRecord`, `IncidentRecord`, `Area`, `Institution`, `GeographicAssociation`, `InstitutionAssociation`, `ImpactRecord`, `InfluenceDomain` — `src/domain/claim.ts`
- `CaseRecord`, `LegalStatus` — `src/domain/case.ts`
- `SourceRecord` — `src/domain/source.ts`
- `NewsRecord`, `CorrectionRecord`, `RevisionRecord`, `SubjectResponse`, `DossierCollection` — their respective domain files

### Data layer

`src/data/index.ts` is the single aggregate export consumed by the repository. It re-exports:
- `people` and `sources` from `src/data/public/` (one file per person slug)
- All structured record collections assembled from `src/data/public/records/<event-slug>.ts`

Collections currently empty (typed, no active records): `assets`, `dossiers`, `organizations`, `tags`.

### Source file naming conventions

Most people have a dedicated `src/data/public/sources/<person-slug>.ts` file. Some people are covered instead — or additionally — by **shared thematic source bundles** (e.g., `ahmed-brothers.ts`, `osman-family-narayanganj.ts`, `july-police-officials.ts`). These bundles cover multiple related people in one file and are intentional. They are fully registered in `sources/index.ts` and the repository finds them through `relatedPersonIds` reverse-indexing.

The rule: every person in `publicPersonIds` must appear in at least one source's `relatedPersonIds`. Two tests in `tests/unit/search.test.ts` enforce this — "source relatedPersonIds all reference existing people" and "every public person has at least one source record". Do not create source bundles whose `relatedPersonIds` reference IDs not in `publicPersonIds`.

### Adding a new public person

1. **IDs** — add a new `camelCase` key and UUID to `src/data/public/ids.ts` (pattern: `00000000-0000-4000-8000-000000000NNN`)
2. **Person file** — `src/data/public/people/<person-slug>.ts` using `createPublicPerson` from `./_person-factory.ts`
3. **Source file** — `src/data/public/sources/<person-slug>.ts` using `source` from `./_source-factory.ts`
4. **Register** — export from `src/data/public/people/index.ts` and `src/data/public/sources/index.ts`

`createPublicPerson` accepts a `PublicPersonSeed` and fills in common defaults (country, caseIds, publicationStatus, narrative boilerplate). Pass `narrativeStyle: "caseHistory"` for underworld/criminal-history profiles.

### Adding a structured record set (incidents, claims, cases, etc.)

1. Create `src/data/public/records/<event-slug>.ts` exporting typed arrays
2. Import and spread those arrays into the relevant exports in `src/data/index.ts`
3. Link person `incidentIds` or other id arrays after the record exists with `sourceIds`

### Feature components

`src/features/` holds domain-specific UI components grouped by entity (people, cases, corrections, incidents, news, sources, organizations, relationships, assets). `src/components/shared/` holds cross-cutting presentational components. `src/components/ui/` has base primitives (button, input, select — shadcn/ui-style).

### i18n

All user-facing strings go through `next-intl`. Bangla and English must be kept in sync — update both `bn.json` and `en.json` for any new copy. Locale routing config is in `src/i18n/routing.ts`.

## Editorial and data rules

See `AGENTS.md` for the authoritative list of content rules. Key constraints Claude must follow when touching `src/data/`:

- Never add `isCorrupt`, `isMurderer`, or any direct guilt boolean
- `caseIds: []` is correct for news/source-only profiles — do not invent placeholder `CaseRecord` entries
- Every real person must have at least one `SourceRecord`
- `ClaimRecord` ≠ `CaseRecord` ≠ `IncidentRecord` — use the right type for what the source actually supports
- `InfluenceDomain` values are navigation metadata, not guilt labels
- Check for duplicates by slug, English/Bangla name, aliases, and source URL before adding anyone
- Bangla and English text must always be updated together

For detailed workflow, web research queries, and reusable AI prompts see `docs/ai-data-workflow.md` and `docs/codex-data-prompts.md`.

## Validation gate

Before reporting any data or code task complete, run:

```bash
pnpm validate
```

All five checks (format:check, lint, typecheck, test, build) must pass.
