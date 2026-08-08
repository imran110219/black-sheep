# Architecture

KaloKhata is a frontend-only Next.js App Router application. Locale-prefixed routes live under `src/app/[locale]`; Bangla and English are supported through `next-intl`.

## Rendering Model

Server Components are the default. Client Components are limited to UI behavior such as theme switching, locale switching, mobile navigation, share/print actions, and query-string filter controls.

## Data Flow

Routes must not import data files directly. Pages and features should depend on:

- `KaloKhataRepository`
- `createKaloKhataRepository`

The current repository implementation is local and read-only. It imports source-backed records from `@/data`, primarily from `src/data/public` and the researched Sheikh Hasina record set.

Route components must not access repository internals or data arrays directly. Story, evidence, network, area, institution, incident, dossier, news, source, organization, and case contexts are exposed as repository methods.

Current repository context methods include:

- `getPersonStoryContext`
- `getPersonEvidenceContext`
- `getPersonNetworkContext`
- `getAreaContext`
- `getInstitutionContext`
- `getIncidentContext`
- `getDossierContext`
- `getCaseContext`
- `getNewsContext`
- `getSourceContext`
- `getOrganizationContext`
- `globalSearch`

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

It exports the active public people and sources plus the researched Sheikh Hasina record set. Empty typed collections are retained for entity types that do not yet have researched public records.

Important boundary: active application records are source-backed public data. No fictional demo records are exported by `src/data`.

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

People-directory filters are parsed with Zod at the route boundary. Supported parameters include text search, area, historical era, influence domain, institution type, legal status, claim and incident type/status, relationship and verification status, official-finding and response availability, year, sort order, and positive integer `page`. Invalid or non-finite page values fall back safely, and out-of-range pages resolve to the last available page.

## Routes

Current locale-prefixed application routes include:

- `/[locale]`
- `/[locale]/people`
- `/[locale]/people/[slug]`
- `/[locale]/areas`
- `/[locale]/areas/[slug]`
- `/[locale]/institutions`
- `/[locale]/institutions/[slug]`
- `/[locale]/incidents`
- `/[locale]/incidents/[slug]`
- `/[locale]/dossiers`
- `/[locale]/dossiers/[slug]`
- `/[locale]/cases/[slug]`
- `/[locale]/news/[slug]`
- `/[locale]/sources/[slug]`
- `/[locale]/organizations/[slug]`
- policy/support pages such as about, methodology, source policy, privacy, legal, right of reply, and corrections

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
