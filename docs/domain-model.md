# Domain Model

The frontend model is built around bilingual, source-aware public-interest profiles. The active people and sources exported by `src/data/index.ts` come from `src/data/public`; newer network/evidence scaffold records currently come from fictional fixtures.

## Conceptual Layers

- Story Layer: identity, why listed, historical overview, rise to power, power base, major themes, incidents, impact, and legacy.
- Network Layer: people, relationships, institutions, organizations, areas, land interests, business bases, political bases, and incident locations.
- Evidence Layer: claims, cases, legal status, official findings, sources, news, subject responses, corrections, and revision history.

## Active Public Entities

### `PersonProfile`

`PersonProfile` is the main public record. It contains:

- bilingual names, aliases, summaries, descriptions, and historical identity text
- occupation, public roles, political affiliation when applicable, organizations, public website, city, country, and active period
- influence domains such as `POLITICS`, `GOVERNMENT`, `BANKING`, `LAND`, `BUSINESS`, `PUBLIC_CONTRACTS`, `RELIGION`, `MEDIA`, `SECURITY`, `ELECTIONS`, `HUMAN_RIGHTS`, and `FAMILY_NETWORK`
- a `PersonNarrative` layer for story-oriented profile sections
- references to cases, news, assets, relationships, claims, incidents, and sources through ids
- publication and audit metadata: `publicationStatus`, `isActive`, `createdBy`, `updatedBy`, `lastVerifiedAt`, `publishedAt`, and `updatedAt`
- `isDemo`, which is `false` for current public records

Current active public people live in `src/data/public/people/<person-slug>.ts`.

### `SourceRecord`

`SourceRecord` stores online source metadata and the specific claims each source supports. Public sources currently live in:

- `src/data/public/sources/<person-slug>.ts`
- `src/data/public/sources/index.ts`

Every real person should have at least one source record before publication. Source excerpts must be short summaries, not copied article text.

Data files must be organized per person/character rather than under broad collection labels. Descriptions must keep policy criticism, arrest reporting, filed cases, tribunal testimony, allegations, trial posture, and final court findings separate.

Before adding or enriching public data, follow `docs/ai-data-workflow.md` for duplicate checks, web research, source record format, and validation commands.

## Scaffolded Evidence Entities

The codebase also defines richer evidence and network entities:

- `ClaimRecord`
- `Area`
- `GeographicAssociation`
- `Institution`
- `InstitutionAssociation`
- `IncidentRecord`
- `ImpactRecord`
- `DossierCollection`
- `CaseRecord`
- `NewsRecord`
- `AssetRecord`
- `RelationshipRecord`
- `SubjectResponse`
- `CorrectionRecord`
- `RevisionRecord`

`ClaimRecord` represents public-interest claims or themes that are not necessarily court cases. `CaseRecord` represents legal or official case records with legal status, authority, court, outcome, and case-specific person roles.

`IncidentRecord` represents historically important events separately from `CaseRecord`; an incident may link to claims, cases, people, institutions, areas, impact records, news, and sources without implying every linked person is responsible.

`InfluenceDomain` tags are navigation and coverage metadata. They are not judgments of guilt.

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
