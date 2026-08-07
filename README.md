# Black Sheep

Black Sheep is a frontend-only public-interest accountability encyclopedia. It presents public profiles, historical narrative, influence domains, source records, and scaffolded evidence structures without declaring that a listed person is guilty.

Default locale is Bangla (`/bn`), with English at `/en`.

## Technology

Next.js App Router, React, strict TypeScript, Tailwind CSS, shadcn/ui-style local components, Lucide icons, next-themes, next-intl, Zod, React Hook Form-ready dependencies, TanStack Query, date-fns, Vitest, Testing Library, Playwright, ESLint, and Prettier.

## Run Locally

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Validate:

```bash
pnpm validate
```

## Environment

- `NEXT_PUBLIC_SITE_URL` is used for metadata.
- `NEXT_PUBLIC_ALLOW_INDEXING=false` sets `noindex,nofollow` and robots disallow. Use this while reviewing sensitive public records.

## Architecture

Routes never import data files directly. Pages depend on `BlackSheepRepository`, which currently reads local public data from `src/data`. Active public records live under `src/data/public`; fictional fixtures remain under `src/data/fixtures` but are not exported by the active data index. Public DTOs avoid private identifiers and direct guilt booleans.

## Content Rules

Records distinguish reported allegation, inquiry, investigation, charge, trial, conviction, appeal, acquittal, dismissal, sanctions, audit findings, and closed matters. Media coverage is not shown as a judicial finding. Acquittals, bail releases, dismissed outcomes, and withdrawn charges must be displayed prominently.

## Security

The frontend does not render raw HTML or use `dangerouslySetInnerHTML`. Runtime data is validated with Zod where API boundaries exist. External links use `rel="noopener noreferrer"` and public URL helpers only allow HTTP(S). No secrets should be placed in `NEXT_PUBLIC_*` variables.

## Public Data

Active data is public-only and file-backed. Public people and sources are organized by entity under `src/data/public`; each person/character has a separate slug-named people file and matching source file. Demo fixtures are retained separately for development reference only.

For data research, duplicate checks, enrichment, source rules, and AI-agent workflow, see `docs/ai-data-workflow.md`.

## Scripts

`dev`, `build`, `start`, `lint`, `lint:fix`, `format`, `format:check`, `typecheck`, `test`, `test:watch`, `test:coverage`, `test:e2e`, `test:e2e:ui`, and `validate`.

## Known Limitations

There is no backend, authentication, admin portal, public submission flow, or API contract in the current scope. Several structured evidence arrays, such as claims, incidents, cases, and relationships, are currently scaffolded but empty in the public data export until source-backed records are added.
