# Agent Instructions

- Maintain frontend-only scope until explicitly changed.
- Preserve strict TypeScript.
- Use the repository abstraction; route files must not import data files directly.
- Keep public data in `src/data`.
- Never introduce direct guilt booleans such as `isCorrupt` or `isMurderer`.
- Never include NID, passport, private email, private phone, precise residence, private coordinates, or similar identifiers in public models.
- Distinguish allegation, inquiry, investigation, charge, trial, conviction, appeal, acquittal, dismissal, withdrawn charges, sanctions, and closed records.
- Real public records are allowed only when source-backed, privacy-safe, and status-aware. Active people, sources, and researched structured records come from `src/data/public`; fictional fixture data is not part of the application data index.
- A public person does not need a court case to be included. News, official, parliamentary, investigative, or public-biography sources may support inclusion when the profile is public-interest, privacy-safe, and clearly labelled as reported context, allegations, public role, official finding, or historical analysis as applicable.
- Do not create placeholder or fake `CaseRecord` entries just to justify a profile. If no legal case exists, leave `caseIds` empty and use `ClaimRecord`, `IncidentRecord`, `SourceRecord`, `NewsRecord`, associations, or narrative fields with precise status language.
- Do not replace active `people` or `sources` exports with fixture people/sources; the actual person list in `src/data/public/people` must remain active.
- Maintain the Story, Network, and Evidence layer distinction. Claim status, influence domains, and associations are not guilt indicators.
- Keep each public person/character in a separate slug-named file under `src/data/public/people`; keep that person's source bundle in the matching slug-named file under `src/data/public/sources`.
- Keep Bangla and English translations synchronized.
- Do not add backend, API-mode, authentication, admin, or public submission functionality unless explicitly requested.
- Before adding a real person, check for duplicates by slug, English/Bangla name, aliases, and source URLs.
- Follow `docs/ai-data-workflow.md` when researching, adding, enriching, or reviewing public data.
- Run `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` before completion.
