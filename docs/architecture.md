# Architecture

Black Sheep is a frontend-only Next.js App Router application. Locale-prefixed routes live under `src/app/[locale]`; Bangla and English are supported through `next-intl`.

## Rendering Model

Server Components are the default. Client Components are limited to UI behavior such as theme switching, locale switching, mobile navigation, share/print actions, and query-string filter controls.

## Data Flow

Routes must not import data files directly. Pages and features should depend on:

- `BlackSheepRepository`
- `createBlackSheepRepository`

The current repository implementation is local and read-only. It imports from `@/data`, which aggregates active fictional demo records from `src/data/fixtures/mock-data.ts`.

Route components must not call mock-only context helpers such as `getPublicMockIndex()`. Story, evidence, network, area, institution, incident, dossier, news, source, organization, and case contexts are exposed as repository methods.

## Public Data Structure

Active public records are organized by entity:

```text
src/data/public/
  ids.ts
  people/
    sheikh-hasina.ts
    obaidul-quader.ts
    anisul-huq.ts
    ...
    ziaul-ahsan.ts
    index.ts
  sources/
    sheikh-hasina.ts
    obaidul-quader.ts
    anisul-huq.ts
    ...
    ziaul-ahsan.ts
    index.ts
  index.ts
```

The root aggregate is:

```text
src/data/index.ts
```

For this product revision, it exports the fictional fixture graph: people, claims, incidents, areas, institutions, associations, impacts, dossiers, cases, sources, news, corrections, and revisions.

Each public person and that person's primary source bundle should live in a separate slug-named file. Do not group people under labels such as former regime, terrorist, criminal, or any equivalent collection category.

For the full public-data workflow, including web research, duplicate checks, enrichment, and validation, see `docs/ai-data-workflow.md`.

## UI Structure

The homepage is editorial-first: hero search, featured profiles, influence discovery, place discovery, historical eras, dossiers, and latest updates.

Profile pages are ordered as:

1. cinematic identity header
2. sticky profile navigation
3. Story/Evidence mode switch
4. Story layer: why listed, metrics, history, claims, incidents, influence, network, geography, timeline
5. Evidence layer: legal status, cases, sources, news, responses, corrections, revisions

Story View is the default. Evidence View is selected with `?view=evidence` and reorders the evidence sections higher on the page.

## Validation

The expected completion checks are:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Testing uses Vitest for utilities/components and Playwright for primary user journeys.
