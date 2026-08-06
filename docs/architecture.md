# Architecture

Black Sheep is a frontend-only Next.js App Router application. Locale-prefixed routes live under `src/app/[locale]`; Bangla and English are supported through `next-intl`.

## Rendering Model

Server Components are the default. Client Components are limited to UI behavior such as theme switching, locale switching, mobile navigation, share/print actions, and query-string filter controls.

## Data Flow

Routes must not import data files directly. Pages and features should depend on:

- `BlackSheepRepository`
- `createBlackSheepRepository`
- context helpers in `src/repositories/record-context.ts`

The current repository implementation is local and read-only. It imports from `@/data`, which aggregates active public records from `src/data/public`.

`src/data/fixtures/mock-data.ts` still exists as a fictional development fixture set, but it is not exported by `src/data/index.ts` and is not part of the active app data.

## Public Data Structure

Active public records are organized by entity:

```text
src/data/public/
  ids.ts
  people/
    sheikh-hasina.ts
    obaidul-quader.ts
    top-terrors.ts
    index.ts
  sources/
    sheikh-hasina.ts
    obaidul-quader.ts
    top-terrors.ts
    index.ts
  index.ts
```

The root aggregate is:

```text
src/data/index.ts
```

It exports public `people` and `sources`, plus typed empty arrays for scaffolded entities such as claims, cases, incidents, areas, organizations, relationships, corrections, and revisions.

## UI Structure

The homepage is editorial-first: hero search, featured profiles, influence discovery, place discovery, historical eras, dossiers, and latest updates.

Profile pages are ordered as:

1. cinematic identity header
2. Story View
3. influence footprint and people network
4. timeline
5. Evidence View

The evidence layer remains available even when a profile currently has only source records and no structured claims or cases.

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
