# Architecture

Black Sheep uses the Next.js App Router with locale-prefixed routes under `src/app/[locale]`. Server Components are the default. Client Components are limited to theme switching, locale switching, mobile navigation, share/print actions, and query-string filter controls.

Data flows through `BlackSheepRepository`. The current implementation serves fictional local data from `src/data` through `MockBlackSheepRepository`. This keeps pages decoupled from fixtures without introducing backend or API-mode code.

Localization uses `next-intl` with Bangla default and English alternate routes. Search is implemented as tested pure functions for normalization, matching, filtering, sorting, pagination, and status aggregation.

Testing uses Vitest for pure utilities and components, and Playwright for the primary user journeys.
