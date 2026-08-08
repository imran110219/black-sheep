# KaloKhata

KaloKhata is a frontend-only illustrated historical accountability encyclopedia. It presents public profiles, historical narrative, influence domains, networks, source records, claims, incidents, cases, institutions, areas, corrections, and evidence structures without declaring that a listed person is guilty.

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

Routes never import data files directly. Pages depend on `KaloKhataRepository`, which reads source-backed records exported by `src/data`. Public DTOs avoid private identifiers and direct guilt booleans. The product is organized into three layers:

- Story: identity, why listed, historical overview, power base, major events, impact, and legacy.
- Network: people, organizations, institutions, areas, relationships, influence domains, and associations.
- Evidence: claims, cases, legal status, sources, news, subject responses, corrections, and revisions.

## Content Rules

Records distinguish reported allegation, inquiry, investigation, charge, trial, conviction, appeal, acquittal, dismissal, sanctions, audit findings, and closed matters. Media coverage is not shown as a judicial finding. Acquittals, bail releases, dismissed outcomes, and withdrawn charges must be displayed prominently.

A public profile does not require a court case. Credible news, official, parliamentary, investigative, public-biography, or institutional sources can support a profile when the person is public-interest and the wording stays privacy-safe and status-aware. If no legal proceeding exists, `caseIds` stays empty; the record should use Story, Source, News, Claim, Incident, Network, or association data instead of placeholder cases.

## Security

The frontend does not render raw HTML or use `dangerouslySetInnerHTML`. Runtime data is validated with Zod where API boundaries exist. External links use `rel="noopener noreferrer"` and public URL helpers only allow HTTP(S). No secrets should be placed in `NEXT_PUBLIC_*` variables.

## Data

The active people and source records come from `src/data/public`. As of 2026-08-08, the active index contains 118 source-backed public-person modules and 107 source modules. The active structured records include source-backed Sheikh Hasina, Shapla Chattar, BDR/Pilkhana, Obaidul Quader, and 2018 Road Safety records. Counts are a snapshot, not a schema guarantee.

Current route surface:

- `/:locale`
- `/:locale/people` and `/:locale/people/:slug`
- `/:locale/areas` and `/:locale/areas/:slug`
- `/:locale/institutions` and `/:locale/institutions/:slug`
- `/:locale/incidents` and `/:locale/incidents/:slug`
- `/:locale/dossiers` and `/:locale/dossiers/:slug`
- existing policy, case, source, news, correction, and organization pages

For data research, duplicate checks, enrichment, source rules, and AI-agent workflow, see `docs/ai-data-workflow.md`. For reusable Codex prompts, see `docs/codex-data-prompts.md`.

## Scripts

`dev`, `build`, `start`, `lint`, `lint:fix`, `format`, `format:check`, `typecheck`, `test`, `test:watch`, `test:coverage`, `test:e2e`, `test:e2e:ui`, and `validate`.

## Known Limitations

There is no backend, authentication, admin portal, public submission flow, or API contract in the current scope. Maps are currently polished geographic cards rather than an interactive map dependency. Public profiles may be added from reliable news, official, investigative, or biographical sources even when no case exists; those profiles keep `caseIds: []` and use careful source-backed wording. No fictional demo records are active.
