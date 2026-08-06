# Black Sheep

Black Sheep is a frontend-only public-interest accountability archive. It presents documented profiles, cases, sources, news coverage, corrections, subject responses, assets, and relationships without declaring that a listed person is guilty.

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
- `NEXT_PUBLIC_ALLOW_INDEXING=false` sets `noindex,nofollow` and robots disallow. Use this for demo data.

## Architecture

Routes never import fixtures directly. Pages depend on `BlackSheepRepository`, which currently reads local fictional data from `src/data`. Public DTOs avoid private identifiers and direct guilt booleans.

## Content Rules

Records distinguish reported allegation, inquiry, investigation, charge, trial, conviction, appeal, acquittal, dismissal, sanctions, audit findings, and closed matters. Media coverage is not shown as a judicial finding. Acquittals and dismissed outcomes are displayed prominently.

## Security

The frontend does not render raw HTML or use `dangerouslySetInnerHTML`. Runtime data is validated with Zod where API boundaries exist. External links use `rel="noopener noreferrer"` and public URL helpers only allow HTTP(S). No secrets should be placed in `NEXT_PUBLIC_*` variables.

## Demo Data

All fixtures are fictional and marked `isDemo: true`. Contact address `editorial@blacksheep.example` is a placeholder.

## Scripts

`dev`, `build`, `start`, `lint`, `lint:fix`, `format`, `format:check`, `typecheck`, `test`, `test:watch`, `test:coverage`, `test:e2e`, `test:e2e:ui`, and `validate`.

## Known Limitations

The UI is production-oriented but uses fictional local fixtures. There is no backend, authentication, admin portal, public submission flow, or API contract in the current scope.
