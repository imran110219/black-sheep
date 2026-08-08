# Domain Model

The frontend model is built around bilingual, source-aware public-interest profiles. The active people, sources, and Sheikh Hasina structured records exported by `src/data/index.ts` are source-backed public data. Entity schemas remain available for future additions, but fictional fixture records are not active.

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
- Story/Network fields: `activePeriodStart`, `activePeriodEnd`, `historicalEraIds`, `primaryAreaIds`, `claimIds`, `incidentIds`, `institutionAssociationIds`, `geographicAssociationIds`, and `influenceDomains`
- publication and audit metadata: `publicationStatus`, `isActive`, `createdBy`, `updatedBy`, `lastVerifiedAt`, `publishedAt`, and `updatedAt`
- `isDemo`, which is `false` for current public records

Current active public people live in `src/data/public/people/<person-slug>.ts`. As of 2026-08-08, the active index contains 93 public-person modules and 102 matching source modules. Counts are a snapshot, not a schema guarantee.

Two existing public records are hand-authored directly; most public people use `createPublicPerson`, which supplies defaults for the newer Story/Network fields. Keep those defaults in sync when adding fields to `PersonProfile`.

### `SourceRecord`

`SourceRecord` stores online source metadata and the specific claims each source supports. Public sources currently live in:

- `src/data/public/sources/<person-slug>.ts`
- `src/data/public/sources/index.ts`

Every real person should have at least one source record before publication. Source excerpts must be short summaries, not copied article text.

Data files must be organized per person/character rather than under broad collection labels. Descriptions must keep policy criticism, arrest reporting, filed cases, tribunal testimony, allegations, trial posture, and final court findings separate.

Before adding or enriching public data, follow `docs/ai-data-workflow.md` for duplicate checks, web research, source record format, and validation commands.

## Evidence And Network Entities

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

Public profiles are not required to have cases. A person may be represented with `caseIds: []` when credible sources support public-interest biography, role history, institutional power, reported controversies, official findings, incidents, or historical significance but no legal proceeding is source-backed.

Do not create placeholder `CaseRecord` records for news-only profiles. Use `SourceRecord`, `NewsRecord`, `ClaimRecord`, `IncidentRecord`, `InstitutionAssociation`, or `GeographicAssociation` according to what the source actually supports.

### `ClaimRecord` Versus `CaseRecord`

Use `ClaimRecord` for a public-interest theme, allegation, reported pattern, official finding, disputed claim, retraction, or historical interpretation that is not itself a court or agency case file.

Use `CaseRecord` for a specific legal or official proceeding with a case number, authority, court or tribunal, person roles, legal status, timeline, outcome, appeal posture, and case-specific sources.

Never infer guilt from `ClaimStatus`. A judicially established claim should still point to the supporting case/source records.

### `IncidentRecord` Versus `CaseRecord`

Use `IncidentRecord` for a historical event or episode: what happened, when, where, who is linked, each person's exact role, related institutions, impact, and sources.

Use `CaseRecord` for legal treatment of that incident. One incident can have zero, one, or many cases; one case can relate to multiple incidents.

### `Institution` And Association Records

`Institution` covers banks, companies, political parties, religious institutions, media organizations, public agencies, security agencies, foundations, NGOs, family enterprises, and contractors.

`InstitutionAssociation` describes the person's role or reported relationship to an institution. Alleged associations must be visibly labelled and must not be displayed as proof of wrongdoing.

### `Area` And Geographic Records

`Area` supports broad public geography such as country, division, district, upazila, union, constituency, city, and locality.

`GeographicAssociation` describes broad links such as birthplace, constituency, political base, business base, land interest, incident location, area of influence, or administrative control. Do not model precise private residential locations.

### `DossierCollection`

`DossierCollection` groups related people, claims, incidents, areas, institutions, and sources into an editorial collection. No dossier records are currently active until a source-backed collection is researched.

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
