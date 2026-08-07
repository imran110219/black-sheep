# AI Data Workflow

This document is the working checklist for AI agents and editors adding or enriching public data.

For copy-pasteable Codex task prompts, use `docs/codex-data-prompts.md`.

## Scope

The project is frontend-only and file-backed. Do not add backend, API-mode, authentication, admin tools, public submissions, crawlers, scrapers, or private datasets unless the project scope explicitly changes.

Use real public data only when it is:

- from public web sources
- relevant to a public-interest profile
- written with allegation/status separation
- free of private identifiers
- represented in both Bangla and English

## File Format

Each person/character must have separate files:

```text
src/data/public/people/<person-slug>.ts
src/data/public/sources/<person-slug>.ts
```

Add the person and source exports to:

```text
src/data/public/people/index.ts
src/data/public/sources/index.ts
```

Do not create collection files named by broad labels such as `former-regime`, `terrorists`, `criminals`, `corrupt`, `mafia`, or similar categories.

Use `createPublicPerson` from `src/data/public/people/_person-factory.ts` for public person records. Use `source` from `src/data/public/sources/_source-factory.ts` for source records.

## Web Research

When the user gives a URL, open it and extract:

- publisher
- title
- publication date
- author or wire attribution when visible
- named people and aliases
- exact status language used by the source
- court, police, agency, tribunal, or official body involved
- what the source supports and what it does not support

When searching the web, use multiple precise queries:

```text
"Person Name" Bangladesh profile
"Person Name" allegation case
"Person Name" court trial acquitted convicted
"Person Name" Bangladesh source publisher
"Person Name" বাংলা
site:thedailystar.net "Person Name"
site:en.prothomalo.com "Person Name"
site:tbsnews.net "Person Name"
site:bssnews.net "Person Name"
```

Prefer primary or high-accountability sources:

- court or tribunal records
- official government, agency, ACC, police, or parliamentary records
- established newspapers and wire services
- reputable investigative reports
- public official biographies for role/office only

Do not use social media posts, copied blogs, unsourced listicles, or private documents as the only support for a profile.

## Duplicate Checks

Before adding a person, run duplicate checks from the repo root:

```bash
rg -i "english name|alias|bangla name" src/data/public/people src/data/public/sources
rg "source-url-or-domain-fragment" src/data/public/sources
rg "personSlug|personIdKey" src/data/public
```

Check all of these before creating a new record:

- same `slug`
- same `nameEn`
- same `nameBn`
- aliases or spelling variants
- same public role and organization
- same source URL
- same `publicPersonIds` key
- same `publicSourceIds` key

If a likely duplicate exists, enrich the existing file instead of creating a new person. If two public identities may refer to the same person but the sources are not conclusive, do not merge them without stronger evidence.

## Data Enrichment

Enrich a profile only with source-backed information. Useful enrichment fields include:

- aliases and spelling variants
- public role history
- active period
- primary area or broad area of influence
- organizations and public institutions
- influence domains
- `summaryBn` / `summaryEn`
- `historicalIdentityBn` / `historicalIdentityEn`
- `whyListedBn` / `whyListedEn`
- `overviewBn` / `overviewEn`
- `patternsBn` / `patternsEn`
- additional `SourceRecord` entries

Do not add private identifiers, exact residences, private family details, private phone/email, NID/passport numbers, private coordinates, or unsupported financial details.

## Status Language

Map source language carefully:

```text
reported / alleged / accused -> allegation or reported claim
complaint filed / sued / FIR directed -> filed case or formal complaint context
arrested / remanded / sent to jail -> procedural status, not guilt
charged / charge sheet -> formal charge
facing trial / testimony heard -> trial posture
convicted / sentenced -> conviction or sentence
acquitted / case dismissed / charges withdrawn -> exculpatory or resolved status
```

Never convert news reporting, testimony, accusations, arrests, or remand into a final finding. Use words such as `reported`, `alleged`, `testified`, `according to`, `court-reported`, and `police-attributed`.

## Source Records

Every real public person should have at least one source. Each source must include:

- stable `id` from `publicSourceIds`
- `slug`
- `type`
- `title`
- `publisher`
- `sourceUrl`
- `publicationDate`
- `accessedAt`
- short paraphrased `excerpt`
- `verificationStatus`
- `isPrimarySource`
- precise `supportedClaims`
- `relatedPersonIds`

Do not paste long copyrighted text into `excerpt`. Summarize in your own words.

## Quality Gates

After editing, run:

```bash
pnpm format
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

If validation fails, fix the failure and rerun the relevant command. Before completion, the required project checks are:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```
