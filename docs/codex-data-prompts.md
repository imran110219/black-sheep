# Codex Data Prompts

Use these prompts when asking Codex or another AI agent to research, suggest, add, extract, or enrich public-interest profile data.

All prompts assume the project rules in `AGENTS.md`, `docs/ai-data-workflow.md`, and `docs/editorial-safety.md` apply.

## 1. Search Web and Suggest People

```text
Search the web for public-interest Bangladeshi people who may fit Black Sheep's accountability encyclopedia.

Goal:
- Suggest candidate people only.
- Do not edit files yet.

Research requirements:
- Search established news, official records, court/tribunal reporting, ACC/police/government records, and reputable investigative reports.
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
- status boundary: allegation, filed case, trial, conviction, acquittal, dismissal, sanction, official finding, etc.
- 2-5 source links
- duplicate risk: none / possible / likely
- recommendation: add / enrich existing / skip for now

Do not use guilt language. Do not include private identifiers.
```

## 2. Add One Person From Details

```text
Add this person to the Black Sheep public data:

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
6. Keep Bangla and English synchronized.
7. Use neutral, status-aware wording.
8. Do not add private identifiers.
9. Run:
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
Check this news link and add relevant public data to Black Sheep:

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
8. Run the full validation suite.

Final response:
- say whether the person was added or an existing profile was enriched
- list source links used
- mention any unresolved status uncertainty
- state validation results
```

## 4. Enrich Existing Character

```text
Enrich this existing Black Sheep profile:

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
8. Keep Bangla and English synchronized.
9. Run the full validation suite.

Final response:
- summarize enriched fields
- list added sources
- state anything intentionally not added because it was unsupported or private
- state validation results
```

## 5. Duplicate Audit

```text
Audit Black Sheep public data for duplicate people or duplicate sources.

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

## 7. Strict Wording Rewrite

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
