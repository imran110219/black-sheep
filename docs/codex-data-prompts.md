# Codex Data Prompts

Use these prompts when asking Codex or another AI agent to research, suggest, add, extract, or enrich public-interest profile data.

All prompts assume the project rules in `AGENTS.md`, `docs/ai-data-workflow.md`, and `docs/editorial-safety.md` apply.

Current data boundary:

- Active real people and sources live in `src/data/public`.
- No fictional demo records are active in the application data index.
- Add structured records to `src/data/public` only after source-backed research, duplicate checks, privacy review, and synchronized Bangla/English writing.
- Route/page work must use the repository abstraction; route files must not import data files directly.
- A court case is not required for a real public profile. If no real legal proceeding is source-backed, leave `caseIds` empty and use source-backed Story, News, Claim, Incident, Network, or association records instead.

## 1. Search Web and Suggest People

```text
Search the web for public-interest Bangladeshi people who may fit KaloKhata's accountability encyclopedia.

Goal:
- Suggest candidate people only.
- Do not edit files yet.

Research requirements:
- Search established news, official records, court/tribunal reporting, ACC/police/government records, and reputable investigative reports.
- Include source-backed public-interest people even when no case exists, as long as the sources support public role, influence, institutional connection, incident involvement, official finding, or reported controversy.
- Prefer people with multiple independent public sources.
- Include Bangla and English name variants where available.
- Check the existing repo for duplicates before suggesting anyone:
  - rg -i "name|alias|bangla name" src/data/public/people src/data/public/sources
  - rg "source-url-fragment" src/data/public/sources

For each suggested person, return:
- nameEn
- nameBn if found
- aliases
- public role
- why they may be public-interest
- Story layer summary: historical identity, why listed, power base or influence context
- Network layer leads: known public organizations, institutions, areas, associates, or offices to research later
- Evidence layer leads: claims, incidents, cases, official findings, responses, corrections, or source bundles to research later
- status boundary: allegation, filed case, trial, conviction, acquittal, dismissal, sanction, official finding, etc.
- 2-5 source links
- duplicate risk: none / possible / likely
- recommendation: add / enrich existing / skip for now

Do not use guilt language. Do not include private identifiers.
```

## 2. Add One Person From Details

```text
Add this person to the KaloKhata public data:

Person:
- nameEn:
- nameBn:
- aliases:
- public role:
- organization(s):
- area:
- source links:
- notes:

Tasks:
1. Read AGENTS.md and docs/ai-data-workflow.md.
2. Check for duplicates by slug, English name, Bangla name, aliases, source URL, and id keys.
3. Search the web for at least 2 supporting public sources when possible.
4. Extract only source-backed facts.
5. Create or update:
   - src/data/public/people/<person-slug>.ts
   - src/data/public/sources/<person-slug>.ts
   - src/data/public/ids.ts
   - src/data/public/people/index.ts
   - src/data/public/sources/index.ts
6. Fill Story-layer fields only with source-backed summaries:
   - whyListedBn / whyListedEn
   - historicalOverviewBn / historicalOverviewEn
   - riseToPowerBn / riseToPowerEn when supported
   - powerBaseBn / powerBaseEn when supported
   - documentedPatternsBn / documentedPatternsEn when supported
   - historicalImpactBn / historicalImpactEn when supported
   - legacyBn / legacyEn when supported
7. Add influence domains only as coverage/navigation metadata, not guilt labels.
8. A case is not required. If no legal case exists, keep `caseIds: []`; do not invent placeholder cases.
9. Do not create real ClaimRecord, IncidentRecord, InstitutionAssociation, GeographicAssociation, ImpactRecord, or CaseRecord unless source-backed and explicitly requested.
10. Keep Bangla and English synchronized.
11. Use neutral, status-aware wording.
12. Do not add private identifiers.
13. Run:
   - pnpm format:check
   - pnpm lint
   - pnpm typecheck
   - pnpm test
   - pnpm build

Final response:
- summarize files changed
- list source links used
- state validation results
```

## 3. Extract a News Link and Add Data

```text
Check this news link and add relevant public data to KaloKhata:

URL:

Tasks:
1. Open the URL and extract:
   - title
   - publisher
   - publication date
   - author or wire attribution
   - named people
   - exact legal/procedural status language
   - official body, court, police, tribunal, or agency involved
   - what the source supports
   - what the source does not establish
2. Search the web for additional context on the main person:
   - public role and biography
   - official profile if available
   - related court/tribunal/agency reporting
   - acquittal, dismissal, bail, appeal, or correction records
3. Check duplicate records in the repo.
4. If the person already exists, enrich the existing files.
5. If the person does not exist and the source is sufficient, add a new per-person file and source file.
6. Use the article as a SourceRecord with a short paraphrased excerpt.
7. Preserve status boundaries. A news allegation, testimony, arrest, remand, or filed complaint is not a conviction.
8. If no case exists, keep `caseIds` empty and represent the item as news/source-backed Story, Claim, Incident, or Network context only when the source supports it.
9. If the article describes a historical event, public-interest claim, institution link, area link, or legal case, summarize it as a proposed Story/Network/Evidence addition unless the user explicitly asks to create structured records.
10. Run the full validation suite.

Final response:
- say whether the person was added or an existing profile was enriched
- list source links used
- mention any unresolved status uncertainty
- state validation results
```

## 4. Enrich Existing Character

```text
Enrich this existing KaloKhata profile:

Person slug or name:
Focus area:
- biography
- aliases
- public offices
- organizations
- cases or trial posture
- source records
- Bangla wording
- influence domains
- historical overview
- Story layer summaries
- Network layer leads
- Evidence layer leads
- claims or incidents if explicitly requested and source-backed
- corrections/acquittals/dismissals

Tasks:
1. Locate existing files:
   - rg -i "name|alias|slug" src/data/public/people src/data/public/sources
2. Read the person and source files.
3. Search the web for additional public sources.
4. Check for contradictory or exculpatory records such as acquittal, dismissal, bail, appeal, retraction, or correction.
5. Add only source-backed information.
6. Keep all descriptions neutral and status-aware.
7. Add new source records only when they support specific claims.
8. Keep influence domains as navigation metadata, not guilt labels.
9. Do not link unresearched claims/incidents/cases/institutions to the real person.
10. Do not create placeholder cases. If no case exists, keep the profile source-backed through Story, SourceRecord, NewsRecord, ClaimRecord, IncidentRecord, or Network records as appropriate.
11. Keep Bangla and English synchronized.
12. Run the full validation suite.

Final response:
- summarize enriched fields
- list added sources
- state anything intentionally not added because it was unsupported or private
- state validation results
```

## 5. Duplicate Audit

```text
Audit KaloKhata public data for duplicate people or duplicate sources.

Tasks:
1. Search duplicate person indicators:
   - same slug
   - same English name
   - same Bangla name
   - aliases
   - public role + organization overlap
2. Search duplicate source indicators:
   - same sourceUrl
   - same title + publisher
   - same article represented under multiple people
3. Use:
   - rg -i "name|alias" src/data/public/people src/data/public/sources
   - rg "https?://" src/data/public/sources
4. Report:
   - definite duplicates
   - possible duplicates requiring human review
   - shared sources that are acceptable because they mention multiple people
5. Do not merge records unless source evidence clearly proves they are the same person.

Final response:
- findings first
- recommended fixes
- files affected if fixes were made
- validation results if edits were made
```

## 6. Source Quality Review

```text
Review source quality for this person or all public profiles:

Scope:

Tasks:
1. Check every SourceRecord for:
   - working URL
   - publisher
   - title
   - publication date
   - short paraphrased excerpt
   - exact supportedClaims
   - relatedPersonIds
2. Identify weak sources:
   - social posts
   - copied blogs
   - unsourced listicles
   - sources that do not support the claim
   - source excerpts that copy too much article text
3. Search for stronger replacements where needed.
4. Preserve source/status boundaries.

Final response:
- weak source findings
- replacements added or recommended
- validation results if edits were made
```

## 7. Add Source-Backed Claim Or Incident

```text
Add a structured source-backed Story/Evidence record for an existing KaloKhata public person.

Target person slug:
Record type:
- ClaimRecord
- IncidentRecord
- CaseRecord
- InstitutionAssociation
- GeographicAssociation
- ImpactRecord

Source links:

Tasks:
1. Read AGENTS.md, docs/ai-data-workflow.md, docs/domain-model.md, and docs/editorial-safety.md.
2. Locate the existing public person and source files.
3. Check duplicates by slug, title, source URL, person ID, institution name, area name, and case number where applicable.
4. Verify that each proposed fact is supported by a source.
5. Preserve status boundaries:
   - ClaimRecord is not the same as CaseRecord.
   - IncidentRecord is not the same as CaseRecord.
   - associations are not proof of wrongdoing.
   - disputed, retracted, acquitted, dismissed, or withdrawn records must be clearly labelled.
   - no-case records must remain no-case records; do not fabricate case numbers, courts, or legal statuses.
6. Add or update source records first.
7. Add the structured record only if it has sourceIds and bilingual text.
8. Link the person's id arrays only after the structured record is complete.
9. Do not include private identifiers, precise residence, private coordinates, private phone/email, or unsupported financial details.
10. Keep Bangla and English synchronized.
11. Run the full validation suite.

Final response:
- summarize structured records added
- list source links used
- state status boundaries and unresolved uncertainty
- state validation results
```

## 8. Strict Wording Rewrite

```text
Review and rewrite public profile wording for editorial safety.

Scope:

Tasks:
1. Find direct guilt language, unsupported certainty, or overbroad labels.
2. Replace with status-aware wording:
   - reported
   - alleged
   - accused
   - court-reported
   - police-attributed
   - testified
   - facing trial
   - convicted, only where supported by final court record/report
3. Keep Bangla and English equivalent.
4. Do not weaken supported convictions or acquittals; state them clearly with status.
5. Run the full validation suite.

Final response:
- wording risks found
- files changed
- validation results
```

## 9. Repository Or Route Refactor

````text
Refactor KaloKhata route/page data access without changing editorial content.

Scope:

Tasks:
1. Inspect the existing route/component/repository code first.
2. Keep frontend-only scope.
3. Preserve public people and source data in src/data/public.
4. Do not import data files directly from route files.
5. Keep all context lookups behind KaloKhataRepository methods.
6. Keep strict TypeScript and Zod validation.
7. Preserve Story, Network, and Evidence layer behavior.
8. Run:
   - pnpm format:check
   - pnpm lint
   - pnpm typecheck
   - pnpm test
   - pnpm build

Final response:
- repository methods changed
- route files changed
- validation results

## 10. Add Or Enrich A Historical Event

```text
Add this historical event to KaloKhata:

Event details:
- title:
- Bangla title if known:
- date or period:
- location or area:
- short description:
- known people:
- known organizations or institutions:
- source links or search leads:

Goal:
- First determine whether this event already exists in KaloKhata.
- If it exists, enrich the existing event without creating a duplicate.
- If it does not exist, research and add one source-backed IncidentRecord, then add the related public people, news, sources, areas, institutions, claims, cases, impacts, responses, corrections, and timeline links that the evidence supports.

Tasks:
1. Read AGENTS.md, docs/ai-data-workflow.md, docs/domain-model.md, and docs/editorial-safety.md.
2. Search the repository before editing:
   - rg -i "event title|Bangla title|alias|location|date" src/data/public
   - rg -i "incident|event title|location" src/data/public/records src/data/public/sources
   - rg "source-url-fragment" src/data/public/sources
3. Check for duplicates by:
   - event slug
   - English and Bangla titles
   - alternate names and aliases
   - date or date range
   - area or location
   - matching source URLs, case numbers, or official document numbers
4. If the event exists:
   - read the existing IncidentRecord and linked sources
   - preserve its id and slug
   - add only genuinely new source-backed facts
   - merge duplicate source links instead of creating duplicate SourceRecords
   - preserve existing corrections and revision history
5. If the event does not exist:
   - search established news, official records, court or tribunal reporting, government/ACC/police records, human-rights reports, and reputable investigations
   - create a source-backed IncidentRecord in `src/data/public/records/<event-slug>.ts`
   - use a precise incident type, date or period, broad public area, description, impact, sourceIds, and related ids
   - do not use a private address or precise private location
6. Research related people only after establishing the event from reliable sources:
   - check existing people by English/Bangla name and aliases before adding anyone
   - add an existing person only when a source supports a public-interest connection
   - add a new person only when the person is publicly identifiable, source-backed, privacy-safe, and relevant to the event
   - record the exact role: leader, decision-maker, subject, accused, victim, witness, official, beneficiary, related person, or other
   - do not imply that every linked person caused or committed the event
7. Research and link related records only when supported:
   - `SourceRecord` for each source bundle and source URL
   - `NewsRecord` for distinct news coverage
   - `Area` and `GeographicAssociation` for broad public geography
   - `Institution` and `InstitutionAssociation` for public organizations or institutions
   - `ClaimRecord` for a public-interest claim or theme that is not itself a case
   - `CaseRecord` only for a real filed case, tribunal proceeding, official inquiry, sanction, or other source-backed legal/official process
   - `ImpactRecord` only for source-backed consequences; do not invent numeric values
   - `SubjectResponse`, `CorrectionRecord`, and `RevisionRecord` when source-backed and applicable
8. Preserve status boundaries. Clearly distinguish reported event, allegation, investigation, official finding, charge, trial, conviction, acquittal, dismissal, disputed claim, retraction, and historical interpretation.
9. Do not create placeholder cases, placeholder people, fake news, fictional institutions, or unsourced associations merely to fill sections.
10. Keep Bangla and English titles, summaries, descriptions, roles, and editorial context synchronized.
11. Update only the necessary public data indexes, ids, and repository-backed context wiring. Routes must not import data files directly.
12. Run:
   - pnpm format:check
   - pnpm lint
   - pnpm typecheck
   - pnpm test
   - pnpm build

Final response:
- state whether the event already existed or was newly added
- provide the event slug and affected files
- list related people added or enriched and their exact documented roles
- list news, sources, areas, institutions, claims, cases, impacts, responses, and corrections added
- state duplicate checks performed
- state unresolved status or identity uncertainty
- state validation results
````

```

```
