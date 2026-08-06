# Domain Model

The frontend public model covers people, bilingual names, descriptions, occupations, affiliations, public roles, organizations, cases, news coverage, categories, assets, relationships, and hierarchical tags.

Additional public structures include `SourceRecord`, `SubjectResponse`, `CorrectionRecord`, and `RevisionRecord`. These support source attribution, right of reply, public correction logs, and public revision history.

The model deliberately excludes private identifiers and direct guilt booleans. Categories describe record subject matter. Legal status describes process state or outcome.
