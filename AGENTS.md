# Agent Instructions

- Maintain frontend-only scope until explicitly changed.
- Preserve strict TypeScript.
- Use the repository abstraction; route files must not import fixtures directly.
- Keep public data in `src/data`.
- Never introduce direct guilt booleans such as `isCorrupt` or `isMurderer`.
- Never include NID, passport, private email, private phone, precise residence, private coordinates, or similar identifiers in public models.
- Distinguish allegation, inquiry, investigation, charge, trial, conviction, appeal, acquittal, dismissal, withdrawn charges, sanctions, and closed records.
- Real public records are allowed only when source-backed, privacy-safe, and status-aware. Fictional demo data must stay isolated in `src/data/fixtures` and must not be exported by the active public data index.
- Keep each public person/character in a separate slug-named file under `src/data/public/people`; keep that person's source bundle in the matching slug-named file under `src/data/public/sources`.
- Keep Bangla and English translations synchronized.
- Do not add backend, API-mode, authentication, admin, or public submission functionality unless explicitly requested.
- Before adding a real person, check for duplicates by slug, English/Bangla name, aliases, and source URLs.
- Follow `docs/ai-data-workflow.md` when researching, adding, enriching, or reviewing public data.
- Run `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` before completion.
