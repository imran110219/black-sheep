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

A court case is not required for inclusion. Many profiles will be source-backed from news reporting, official biographies, parliamentary records, agency statements, investigative reports, sanctions records, institutional records, or historically important incident coverage. When no case exists, keep `caseIds` empty and do not create a placeholder `CaseRecord`.

Current active data state:

- Real public people and real public sources are active from `src/data/public`.
- As of 2026-08-08, the active index contains 118 public-person modules and 107 source modules. Recent additions include public officials and security leaders, political and family networks, business and banking figures, and financial- and health-sector accountability profiles.
- Active structured Story/Network/Evidence records include Sheikh Hasina, Shapla Chattar, BDR/Pilkhana, Obaidul Quader, and the 2018 Road Safety Movement.
- Structured collections are expanded incrementally; each record must remain source-backed, status-aware, and privacy-safe.
- Fictional fixture data is not exported by the active data index.
- Adding a real public person from source-backed reporting is valid even when `caseIds` is empty.

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

When adding new fields to `PersonProfile`, update `createPublicPerson` defaults so existing public people remain schema-compatible.

The local repository reverse-indexes claims and incidents for person contexts. Claims use `personIds` for discovery and may use role-aware `personLinks` when the relationship needs clarification. Incidents use `personLinks` with an explicit role. Do not assume that a linked person is a perpetrator merely because the person appears in a record.

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

## Inclusion Without A Case

Use this path when a source-backed public-interest person has no known legal case:

1. Add or enrich the public person file with neutral Story-layer context.
2. Add at least one `SourceRecord` that states exactly what the source supports.
3. Link `sourceIds` and, if useful, `newsIds`.
4. Leave `caseIds: []` unless a real proceeding is source-backed.
5. Use `ClaimRecord` only for a specific public-interest claim or theme, with `REPORTED`, `ALLEGED`, `DISPUTED`, `OFFICIAL_FINDING`, or another accurate status.
6. Use `IncidentRecord` only when the source describes a concrete event or period, and label each person's role precisely.
7. Use association records only for public, source-backed institutions or broad geography.
8. Write Bangla and English summaries so readers understand that the record is news/source-backed context, not a court finding.

Suitable non-case inclusion examples include:

- a public official whose governance actions or institutional power are documented by reliable news and official sources
- a business, banking, media, religious, or political figure whose influence network is source-backed
- a person connected to a historically important incident where no case has been filed
- a figure named in an official report, inquiry, sanctions notice, parliamentary record, or investigative report
- a person whose public response, correction, acquittal, dismissal, or denial is part of the historical record

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

Story, Network, and Evidence layer enrichment should remain incremental:

- Story: historical identity, why listed, overview, rise to power, power base, documented patterns, historical impact, public reputation, and legacy.
- Network: broad public areas, organizations, institutions, relationship leads, institution associations, and geographic associations.
- Evidence: claims, incidents, cases, legal status, sources, news, subject responses, corrections, and revisions.

Do not attach a structured claim, incident, institution association, geographic association, impact, or case to a real person until it is source-backed, privacy-safe, and status-aware.

If a profile has only news/source support and no case, prefer Story-layer fields plus `SourceRecord`/`NewsRecord` first. Add structured `ClaimRecord`, `IncidentRecord`, or association records only when the source supports a specific claim, event, or relationship clearly enough to label it.

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

`ClaimStatus` is not a guilt status. `InfluenceDomain` values are coverage/navigation metadata, not labels of wrongdoing.

Use `ClaimRecord` for public-interest claims or themes that are not necessarily court cases. Use `CaseRecord` for legal or official proceedings. Use `IncidentRecord` for historically important events that may or may not have related cases.

Never upgrade a news-supported claim into a case. A `CaseRecord` requires a real filed complaint, tribunal/court record, authority proceeding, sanction, or official case-like process with source-backed status details.

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

## Structured Record Conversion

Before adding a new structured public record:

1. Check duplicates by slug, title, Bangla/English name, aliases, source URL, institution name, area name, and case number where applicable.
2. Add or update `SourceRecord` entries first.
3. Create bilingual summaries and descriptions from source-backed facts only.
4. Keep association role labels exact. Alleged association, reported association, official role, and verified role are different.
5. Keep broad geography only. Do not publish precise private residences or private coordinates.
6. Link the public person's `claimIds`, `incidentIds`, `institutionAssociationIds`, or `geographicAssociationIds` only after the structured record exists and has `sourceIds`.
7. Keep all route/page access behind `BlackSheepRepository`; do not import fixture arrays directly in routes.

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
