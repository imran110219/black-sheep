# Editorial Safety

KaloKhata uses neutral wording, source attribution, and status separation. Being listed in a profile, source, claim, case, relationship, or incident does not by itself establish guilt.

The current app has active source-backed public people, sources, and structured Story/Network/Evidence records for researched profiles and historical events. No fictional demo records are active in the application data index.

## Inclusion Policy

A public figure may be included even when no court case, charge, conviction, or formal investigation exists. KaloKhata is not only a case directory; it is a source-backed historical accountability encyclopedia.

Inclusion without a case is allowed only when all of these are true:

- the person is a public figure or otherwise has clear public-interest relevance
- at least one credible public source supports the public role, controversy, documented action, institutional connection, incident, claim, or historical significance
- the profile can be written without private identifiers or unsupported personal allegations
- the record clearly separates public role, reported claim, allegation, official statement, investigation, finding, legal status, response, and historical interpretation

Do not invent legal records. If no case exists, leave `caseIds` empty and use the correct evidence type:

- `SourceRecord` for source metadata and supported facts
- `NewsRecord` for article-level coverage
- `ClaimRecord` for reported public-interest claims, themes, official findings, disputed claims, or historical interpretation
- `IncidentRecord` for historically important events that may have no case
- `InstitutionAssociation` or `GeographicAssociation` for source-backed public network or area links

The absence of a case must not be treated as proof that reporting is false. The presence of a case must not be treated as proof of guilt.

## Required Language

Use source-aware terms such as:

- reported
- alleged
- police-attributed
- court-reported
- convicted
- sentenced
- acquitted
- dismissed
- released on bail
- fugitive according to source
- listed by authorities according to source

Avoid language that independently declares guilt unless the record is explicitly describing a conviction or executed sentence and the source supports that status.

## Criminal-History Profiles

Profiles about real underworld figures or alleged syndicate leaders require extra care:

- Do not convert media allegations into court findings.
- Do not imply a relationship is proof of criminal conduct.
- Do not combine unrelated cases into one broad accusation.
- If a person was convicted, name the conviction status separately from unresolved allegations.
- If a person was released on bail, acquitted, or charges were dismissed or withdrawn, show that as prominently as allegations or charges.
- If a person died in a claimed crossfire or custody-related event, describe it as reported by the source and preserve the law-enforcement attribution.

## Source Rules

Every real profile should have at least one `SourceRecord`. Every future claim, incident, relationship, institution association, area association, case, correction, or subject response should carry `sourceIds`.

When adding new structured records, first perform duplicate checks by slug, Bangla/English name, aliases, and source URLs. Add only source-backed, privacy-safe, status-aware records.

## Story, Network, Evidence

Story summaries must be supported by source-backed records and must not turn allegations into established fact. Network associations must label whether a connection is verified, reported, disputed, or alleged. Evidence sections must distinguish reported claims, allegations, investigations, official findings, charges, convictions, acquittals, dismissals, retractions, and corrections.

Claim status is not guilt status. Influence-domain tags are organizational metadata, not badness scores or probability labels.

Do not create score-like fields, ranking labels, probability labels, or binary guilt fields. Avoid names such as `isCorrupt`, `isMurderer`, `crimeScore`, `badnessScore`, or equivalents.

`SourceRecord.supportedClaims` should describe exactly what the source supports. Do not use a source to support details it does not actually establish.

When adding source-backed data, preserve the source's status boundary:

- a filed complaint is not a conviction
- an arrest is not a finding
- testimony is not a final judgment
- a police or agency statement should be attributed to that body
- an acquittal, dismissal, withdrawn charge, or bail release must not be hidden behind allegations

Use short paraphrased source excerpts. Do not copy long passages from articles.

## Privacy Rules

Never publish:

- NID or passport numbers
- private email addresses
- private phone numbers
- precise residence
- private coordinates
- names or identifiers of unrelated private family members unless clearly public-interest and sourced
- unverified private financial details

Use broad public geography such as city, district, constituency, reported area of influence, or institution name.

`GeographicAssociation` must not expose precise private residences or private coordinates. Use district, city, constituency, locality, or broad area-of-influence records.

## Product Boundary

The current app is frontend-only. Do not add backend, API-mode, authentication, admin, or public submission features without an explicit scope change.
