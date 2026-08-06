# Domain Model

The public frontend model is built around bilingual, source-backed public-interest profiles. The active data exported by `src/data/index.ts` is public-only; fictional fixtures remain in `src/data/fixtures/mock-data.ts` for development reference but are not part of the active app data.

## Active Public Entities

### `PersonProfile`

`PersonProfile` is the main public record. It contains:

- bilingual names, aliases, summaries, descriptions, and historical identity text
- occupation, public roles, political affiliation when applicable, organizations, public website, city, country, and active period
- influence domains such as `POLITICS`, `ELECTIONS`, `VIOLENCE`, `PUBLIC_CONTRACTS`, `LAND`, and `PATRONAGE`
- a `PersonNarrative` layer for story-oriented profile sections
- references to cases, news, assets, relationships, claims, incidents, and sources through ids
- publication and audit metadata: `publicationStatus`, `isActive`, `createdBy`, `updatedBy`, `lastVerifiedAt`, `publishedAt`, and `updatedAt`
- `isDemo`, which is `false` for current public records

Current public people live in:

- `src/data/public/people/sheikh-hasina.ts`
- `src/data/public/people/obaidul-quader.ts`
- `src/data/public/people/top-terrors.ts`

### `SourceRecord`

`SourceRecord` stores online source metadata and the specific claims each source supports. Public sources currently live in:

- `src/data/public/sources/sheikh-hasina.ts`
- `src/data/public/sources/obaidul-quader.ts`
- `src/data/public/sources/top-terrors.ts`

Every real person should have at least one source record before publication. Source excerpts must be short summaries, not copied article text.

## Scaffolded Evidence Entities

The codebase also defines richer evidence and network entities:

- `ClaimRecord`
- `Area`
- `GeographicAssociation`
- `InstitutionAssociation`
- `IncidentRecord`
- `ImpactRecord`
- `CaseRecord`
- `NewsRecord`
- `AssetRecord`
- `RelationshipRecord`
- `SubjectResponse`
- `CorrectionRecord`
- `RevisionRecord`

These are active domain types, but most are currently empty in the public data export. They should be populated only when source-backed records are available.

## Status Boundaries

The model deliberately separates:

- allegation
- reported claim
- inquiry
- investigation
- official finding
- formal charge
- trial
- conviction
- appeal
- acquittal
- dismissal
- withdrawn charges
- sanctions
- closed records

Do not collapse these into a single guilt indicator. The project must not introduce fields such as `isCorrupt`, `isMurderer`, or any equivalent direct guilt boolean.

## Privacy Boundary

Public records must not include NID, passport number, private email, private phone, exact residence, private coordinates, or similar personal identifiers. Public area references should use broad civic geography such as city, district, constituency, or reported area of influence.
