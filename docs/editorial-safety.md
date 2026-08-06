# Editorial Safety

Black Sheep uses neutral wording, source attribution, and status separation. Being listed in a profile, source, claim, case, relationship, or incident does not by itself establish guilt.

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

`SourceRecord.supportedClaims` should describe exactly what the source supports. Do not use a source to support details it does not actually establish.

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

## Product Boundary

The current app is frontend-only. Do not add backend, API-mode, authentication, admin, or public submission features without an explicit scope change.
