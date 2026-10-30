# Senior Frontend Architecture & System Design Interview Guide

Tailored for a senior frontend engineer with 6+ years of experience building enterprise interfaces with Vue, Angular, React, TypeScript, reusable components, design tokens, RTL/LTR layouts, responsive UI, dark mode, performance optimization, and production debugging.

The language in this guide is intentionally simple and natural. You can use many of the answers almost word for word in an interview.

---

## 1. A Repeatable Framework for Any Frontend System-Design Question

Do not jump directly to tools. First show how you think.

### The CRAFT method

1. **Clarify** the users, scale, constraints, and business goal.
2. **Requirements**: separate must-have behavior from quality requirements.
3. **Architecture**: define boundaries, components, state, APIs, and ownership.
4. **Flow and failures**: explain the normal data flow, then slow, offline, stale, and error cases.
5. **Trade-offs and testing**: explain why the design fits now and how it can evolve.

### Opening sentence

> “Before choosing the architecture, I want to clarify the users, expected scale, data freshness, browser support, and the most important quality goals. Then I’ll propose a simple design and discuss how it handles failures and future growth.”

### Questions that work in almost every scenario

- Who are the main users, and what is their most important task?
- What scale should we expect: users, requests, records, modules, and teams?
- Is the experience read-heavy, write-heavy, or real-time?
- How fresh must the data be?
- What are the latency and performance targets?
- Must it work offline or on unreliable networks?
- Which browsers, devices, locales, and accessibility level must we support?
- Are SEO and first-load performance important?
- What security, privacy, or regulatory constraints exist?
- What already exists, and what can we change?

### Quality checklist

For every design, mention the relevant items:

- Performance: loading, rendering, memory, network, caching.
- Reliability: empty, loading, partial, stale, error, offline, and recovery states.
- Security: authentication, authorization, validation, XSS, CSRF, and sensitive data.
- Accessibility: keyboard, focus, semantics, contrast, announcements, reduced motion.
- Observability: logs, metrics, traces, release version, user journey.
- Testability: unit, integration, contract, end-to-end, visual, accessibility.
- Maintainability: clear ownership, stable interfaces, documentation, migration path.

### A simple architecture vocabulary

Use these terms naturally:

- **Server state**: remote data, loading, errors, freshness, caching.
- **Client state**: local UI state such as an open panel or selected tab.
- **Domain state**: business state such as a draft order or permissions.
- **URL state**: filters, sorting, pagination, selected entity, shareable navigation.
- **Boundary**: an area with a clear responsibility and public interface.
- **Adapter**: code that isolates the UI from a backend response or third-party API.
- **Progressive enhancement**: deliver the essential experience first, then add richer behavior.

---

## 2. Autocomplete Search

### Clarifying questions

- Is this local filtering or remote search?
- How many items exist, and how fast do results change?
- Must results be personalized, grouped, highlighted, or ranked?
- Is free text allowed, or must the user select a result?
- What is the latency target, and should recent searches work offline?

### Requirements

- Functional: show relevant suggestions, support keyboard and mouse, highlight matches, select a result, clear the query.
- Quality: avoid unnecessary requests, never show stale results, respond quickly, work with assistive technology, protect private queries.

### Proposed architecture

- A controlled search input owns the raw text.
- A debounce waits roughly 200–300 ms before remote search.
- A query layer manages cache, loading, errors, deduplication, and cancellation.
- Each request uses `AbortController`; a request ID is an extra guard against races.
- Cache recent results by normalized query with a short TTL.
- The results popover is a reusable accessible combobox/listbox.
- The server owns full-text search, ranking, permissions, and rate limiting.

### Data flow

User types → local input updates immediately → debounce fires → previous request is cancelled → normalized query is checked in cache → API request runs if needed → response is accepted only if it matches the latest query → list renders → selection updates the form or route.

### Trade-offs

- A shorter debounce feels faster but creates more traffic.
- Client filtering is instant for small stable datasets; server search scales and ranks better.
- Prefetching popular results improves speed but may expose or waste data.
- Caching reduces latency, but a long TTL can show stale suggestions.

### Failure cases

- Responses arrive out of order: cancel and compare request IDs.
- Network is slow: keep the input responsive and show a subtle loading state.
- API fails: show a retry option without erasing the query.
- No results: clearly say “No results,” not a blank list.
- IME composition: do not search in the middle of composing East Asian text.

### Performance, security, accessibility

- Set a minimum query length, debounce, cache, and limit response size.
- Encode input; the server must validate it and enforce access control and rate limits.
- Use proper combobox semantics, `aria-expanded`, `aria-controls`, active descendant, arrow keys, Enter, Escape, and clear focus behavior.
- Announce result count without announcing every keystroke.

### Interview-ready answer

> “I would keep typing local and immediate, but debounce remote searches by about 250 milliseconds. The query layer would cancel the previous request, cache recent queries, and ignore any response that is not for the latest input. The backend should own ranking, permissions, and rate limiting. I would build the UI as an accessible combobox with full keyboard support and clear loading, empty, and error states. I would measure input-to-results latency, request volume, zero-result rate, and selection rate. The main trade-off is responsiveness versus network traffic, so I would tune the debounce and cache using production data.”

---

## 3. Infinite Scrolling

### Clarifying questions

- Is the content a feed, catalog, or task list?
- Must users return to the same position or share a result location?
- Is ordering stable while new items are added?
- Is SEO important? Is explicit pagination acceptable?

### Requirements

- Load more data near the end without blocking interaction.
- Prevent duplicates, preserve scroll position, and provide recovery.
- Keep memory and DOM size under control.
- Make the feature usable by keyboard and screen-reader users.

### Proposed architecture and data flow

- Use cursor pagination, not page numbers, for changing datasets.
- An `IntersectionObserver` watches a sentinel near the end.
- The query layer stores pages and the next cursor and deduplicates by stable item ID.
- Virtualize when the list can grow large.
- Save cursor/scroll state in route history or a page cache for back navigation.

Viewport nears sentinel → request next cursor → append unique items → update cursor → virtualization renders only the visible window.

### Trade-offs

- Infinite scroll is smooth for discovery; pagination is better for location, comparison, SEO, and reaching the footer.
- Virtualization protects the DOM but complicates dynamic heights, focus, printing, and browser find.
- Prefetching earlier feels faster but uses more bandwidth.

### Failure cases and concerns

- Duplicate or missing items: stable IDs plus cursor semantics.
- Reordering while browsing: use a snapshot cursor or show a “new items” prompt instead of shifting content.
- Failed next page: inline retry at the boundary; keep loaded items.
- The observer fires repeatedly: prevent concurrent requests.
- Accessibility: include an explicit “Load more” control, announce added item count, preserve focus, and expose the current position.
- Security: server enforces permissions for every page; never trust a cursor from the client.

### Interview-ready answer

> “I would first check whether infinite scroll is actually right. For a feed it often is; for search or administration, pagination may be easier to navigate. I would use cursor pagination, an intersection observer, request deduplication, and stable IDs. For a very long list, I would virtualize the visible rows and preserve scroll state when the user navigates back. I would also provide a keyboard-accessible Load more button and an inline retry. I would track next-page latency, duplicate rate, abandonment, memory, and long tasks.”

---

## 4. Large Data Tables

### Clarifying questions

- How many rows and columns? Is the data remote?
- Do users sort, filter, group, resize, pin, edit, select, or export?
- Is this desktop-only, or must it work on small screens?
- Are there permission-sensitive columns or live updates?

### Requirements

- Fast scanning and interaction with large datasets.
- Stable sorting/filtering and shareable views.
- Keyboard navigation, clear semantics, and safe editing.
- Export and bulk actions without downloading all data into the browser.

### Proposed architecture

- Server-side filtering, sorting, aggregation, and cursor/page pagination for large datasets.
- URL holds filters, sort, visible view, and page/cursor where practical.
- A headless table model defines columns and behavior; a presentational layer applies design-system components.
- Row and optional column virtualization for large results.
- Normalize entities by ID. Keep selection rules separate from rendered rows.
- For editing, use local drafts, validation, explicit save or safe optimistic updates, and conflict handling.
- Export is an asynchronous backend job with status and a secure download link.

### Data flow

User changes filters → URL and query key update → request is cancelled/replaced → server returns rows, schema metadata, total/next cursor → table renders visible window → edits go through validation and mutation → cache is updated or invalidated.

### Trade-offs

- Server operations scale but add latency; client operations are fast only after all data is loaded.
- A powerful grid library saves time but increases bundle size, licensing, customization, and upgrade risk.
- Virtualization improves speed but makes accessibility and variable row heights harder.

### Failure cases and concerns

- Reset pagination when a filter changes.
- Keep the old table visible during a refresh, with a refreshing indicator.
- Handle partial column permissions on the server and in the column model.
- Use sticky headers carefully; test zoom and screen readers.
- For mobile, prioritize columns, allow horizontal scroll, or offer a card/detail view.
- Prevent formula injection in CSV exports and validate all editable values server-side.

### Interview-ready answer

> “For a large enterprise table, I would treat the backend as the source for sorting, filtering, pagination, aggregation, and export. I would keep view state in the URL so the result can be shared and restored. The frontend would use a headless column model, a query cache, stable row IDs, and virtualization only when measurements show it is needed. Editing would have validation, clear dirty state, conflict handling, and permission checks on the server. I would test keyboard navigation, zoom, screen readers, large datasets, and slow networks, and measure query latency, render time, long tasks, and edit failures.”

---

## 5. Enterprise Dashboards

### Clarifying questions

- Who uses the dashboard, and what decisions do they make?
- How fresh must each metric be?
- Are widgets independent, customizable, or permission-based?
- Do users need drill-down, export, comparison, or real-time updates?

### Requirements

- Show trustworthy KPIs and trends with understandable definitions.
- Load important content first and tolerate partial failure.
- Support filters, drill-down, responsive layout, RTL/LTR, dark mode, and accessibility.

### Proposed architecture

- A shell owns navigation, permissions, global date/filter context, layout, and error boundaries.
- Widgets are feature modules with typed inputs and their own query/error state.
- A backend-for-frontend can aggregate, authorize, and shape data for the UI.
- Cache each widget independently; use different freshness rules per metric.
- Load the most important widgets first and lazy-load secondary charts.
- Use design tokens for themes, spacing, charts, direction, and status colors.

### Data flow

Route loads → user/permission/config data loads → critical widgets request data in parallel → each widget shows its own skeleton/result/error → filter changes update URL/context → affected queries refresh → drill-down navigates with preserved filter context.

### Trade-offs

- One large endpoint reduces round trips but couples refresh and failure; widget endpoints isolate ownership but can create request waterfalls.
- Real-time WebSockets are useful only when freshness justifies complexity; polling or focus revalidation is often enough.
- Customizable layouts increase user value and testing complexity.

### Failure cases and concerns

- One widget failing must not blank the dashboard.
- Show “last updated” and stale state; never present stale data as live.
- Empty data is different from an error.
- Charts need text summaries, labels, keyboard access where interactive, non-color cues, and sufficient contrast.
- Avoid rendering hundreds of chart points; aggregate or downsample.
- The server must authorize every metric and filter, not only hide widgets.

### Interview-ready answer

> “I would design the dashboard as a stable shell with independent feature widgets. Global filters would live in the URL, while each widget owns its query, loading, error, and freshness state. Critical widgets load first; secondary widgets lazy-load. A backend-for-frontend is useful if the UI needs data from many services or consistent authorization. Partial failure is important: one broken chart should not break the page. I would make data freshness visible and provide accessible summaries for charts. I would measure time to useful content, widget error rate, stale-data age, and interaction latency.”

---

## 6. Reusable Component Library and Design System

### Clarifying questions

- How many products, brands, frameworks, and teams will use it?
- Is the goal visual consistency, accessibility, delivery speed, or all three?
- Who owns decisions and support? How are breaking changes handled?
- Must it support RTL/LTR, dark mode, density, white-labeling, and older browsers?

### Requirements

- Accessible, themeable, documented components with stable APIs.
- Shared design tokens and clear contribution/governance rules.
- Safe versioning, automated quality checks, and measured adoption.

### Proposed architecture

- Three layers: tokens → primitives → composed patterns.
- Semantic tokens such as `color.surface.default`, not product-specific raw colors.
- Framework-neutral foundations where useful, with thin framework bindings if multiple frameworks are required.
- Public components expose controlled customization through variants, slots, events, and CSS variables—not internal DOM dependencies.
- Package by domain to support tree shaking. Publish typed APIs and changelogs.
- Documentation includes behavior, accessibility, examples, do/don’t guidance, RTL, dark mode, and migration notes.
- Governance includes owners, RFCs for major changes, deprecation periods, and contribution standards.

### Data flow

Design decisions become versioned tokens → components consume semantic tokens → applications consume components → usage, defects, and requests feed back into the system roadmap.

### Trade-offs

- Too little flexibility creates local forks; too much flexibility destroys consistency.
- A single package is simple but can create large releases; multiple packages add version coordination.
- Supporting many frameworks increases reach and maintenance cost.

### Failure cases and concerns

- Visual breaking changes: visual regression tests and release previews.
- API breaks: semantic versioning, codemods, deprecation warnings, migration guides.
- CSS conflicts: scoped styles/layers, stable token contracts, no fragile selectors.
- Accessibility regressions: automated checks plus keyboard and screen-reader testing.
- Security: avoid unsafe HTML APIs; keep dependencies reviewed and updated.
- Measure adoption, duplicate components removed, upgrade lag, accessibility defects, and developer satisfaction.

### Interview-ready answer

> “I see a design system as a product, not only a component folder. I would separate semantic tokens, accessible primitives, and reusable product patterns. Components should have small typed APIs and controlled extension points, while RTL, dark mode, responsive behavior, and accessibility are built in. I would use documentation, visual regression tests, semantic versioning, deprecation windows, and migration tools. Governance is as important as code: teams need a clear contribution path and owners who balance consistency with real product needs.”

---

## 7. State Management

### Clarifying questions

- Which state is remote, local, shared, persistent, or URL-driven?
- How many features write to the same state?
- Must state survive reload, support offline use, undo, or real-time collaboration?

### Requirements and architecture

Use the smallest correct owner:

- Component state for temporary local UI.
- URL state for navigation, filters, sort, and shareable views.
- Form state for values, validation, dirty state, and submission.
- Query/cache library for server state, freshness, retries, and invalidation.
- Feature/domain store only for complex shared workflows.
- App-wide store for truly global data such as session metadata—not every API response.

Keep derived values derived instead of duplicating them. Use selectors and immutable updates. Split stores by domain, define typed actions, and prevent feature modules from reaching into each other’s internals.

### Data flow

User action → feature action/use case → optional API mutation → authoritative response → query cache/domain store update → selectors derive view model → component renders.

### Trade-offs and failure cases

- Global stores make sharing easy but create hidden coupling and broad re-renders.
- Context is fine for stable low-frequency data; frequent updates can re-render large trees.
- Persistence helps recovery but creates migration, privacy, and stale-data problems.
- Avoid double sources of truth between a query cache and global store.
- Clear user-specific state on logout and never persist tokens or sensitive records casually.

### Interview-ready answer

> “I would not choose state management by framework popularity. I first classify the state. Local UI stays local, navigation belongs in the URL, forms use form state, and remote data belongs in a query cache. I add a domain store only when several parts of a workflow need coordinated writes or complex transitions. I keep one source of truth, derive values with selectors, and expose feature-level APIs. This reduces coupling and makes performance and testing easier.”

---

## 8. API Errors, Retry, Cancellation, and Resilience

### Clarifying questions

- Which operations are idempotent? Which are business-critical?
- What error shape, rate limits, and request IDs does the backend provide?
- Can users work offline? Is partial data acceptable?

### Proposed architecture

- A shared API client handles base URL, credentials, trace/request IDs, parsing, timeout, and normalized errors.
- Domain adapters translate transport DTOs into frontend models.
- Query logic owns caching, deduplication, cancellation, and freshness.
- Retry only transient errors such as network failures, 408, 429, and selected 5xx responses.
- Use exponential backoff with jitter and honor `Retry-After`.
- Do not automatically retry validation, authentication, authorization, or non-idempotent mutations unless an idempotency key makes it safe.
- Cancel obsolete searches, navigation requests, and unmounted work with `AbortController`.

### Failure strategy

- 400/422: show field or business feedback.
- 401: attempt one controlled session refresh, then sign in.
- 403: explain lack of access; do not retry.
- 404: show a missing/deleted state.
- 409/412: show conflict and offer refresh/merge.
- 429: back off using server guidance.
- 5xx/network: limited retry, then preserve context and offer manual retry.

Use error boundaries for unexpected render failures, but handle expected API errors inside the feature.

### Concerns

- Avoid retry storms; cap attempts and use jitter.
- Never show secrets or raw stack traces.
- Preserve user input after failure.
- Announce meaningful errors accessibly and move focus only when useful.
- Log error category, endpoint name, release, request ID, retry count, and user journey without sensitive payloads.

### Interview-ready answer

> “I separate expected API errors from unexpected application failures. A shared client normalizes errors and adds request IDs, while the query layer handles cache, cancellation, and limited retries. I retry only transient and safe operations with exponential backoff and jitter. I do not retry a 403 or validation error, and I am careful with non-idempotent mutations. The UI preserves the user’s work and gives an action such as retry, sign in, refresh, or resolve conflict. Observability connects the frontend error to the backend request ID.”

---

## 9. Optimistic Updates

### Clarifying questions

- How often does the operation fail or conflict?
- Can it be safely reversed? Is it financial, destructive, or permission-sensitive?
- Do multiple users edit the same entity?

### Architecture and data flow

Use optimistic UI for fast, low-risk, reversible actions such as favorites or simple status changes.

User acts → snapshot previous cache → update cache immediately → send mutation with entity version/idempotency key → on success reconcile with server → on failure restore snapshot and show feedback → invalidate/refetch if uncertain.

For rapid repeated actions, coalesce requests or serialize per entity. Use version numbers/ETags to detect conflicts. For high-risk operations, use a pending state instead of pretending success.

### Trade-offs and failure cases

- Optimism improves perceived speed but makes rollback, conflicts, and debugging more complex.
- A rollback can overwrite a newer local action; identify each mutation and reconcile in order.
- Server response may transform the data; always accept the server as authoritative.
- Offline queues require durable storage, ordering, deduplication, expiration, and user-visible sync state.
- Do not announce “saved” to assistive technology until the outcome is reliable; “saving” then “saved” is clearer.

### Interview-ready answer

> “I use optimistic updates when the action is likely to succeed, easy to reverse, and not high risk. I snapshot the previous cache, apply the local change, send a versioned mutation, and reconcile with the server response. If it fails, I roll back only that mutation and explain what happened. For payments, destructive operations, or likely conflicts, I prefer a pending state. The key is that the server remains authoritative and every optimistic path has a tested rollback path.”

---

## 10. Authentication and Session Flows

### Clarifying questions

- Is this a browser app, public site, or enterprise SSO product?
- OAuth/OIDC, SAML, MFA, passwordless, or local accounts?
- Are multiple tabs, impersonation, tenant switching, and step-up authentication required?

### Proposed architecture

- Prefer Authorization Code Flow with PKCE for public browser clients.
- For higher security, use a backend-for-frontend: browser receives an `HttpOnly`, `Secure`, `SameSite` session cookie; tokens stay server-side.
- Bootstrap the session from a `/me` or session endpoint.
- Route protection improves UX, but every API performs authorization.
- Refresh is single-flight: one refresh request, with waiting calls queued. If it fails, clear session state and return to sign-in with a safe return URL.
- Synchronize logout/session expiry across tabs with `BroadcastChannel` or storage events.

### Data flow

User starts sign-in → identity provider authenticates → callback validates state/nonce/code verifier → server establishes session → app loads user, tenant, and capabilities → API requests use the session → expiry triggers controlled refresh or reauthentication.

### Failure cases and concerns

- Redirect loops: limit retries and distinguish unauthenticated from forbidden.
- Expiry during form work: preserve non-sensitive draft and restore after sign-in.
- CSRF: SameSite cookies plus anti-CSRF token for state-changing requests where needed.
- XSS: CSP, output encoding, no unsafe token storage, dependency hygiene.
- Open redirect: allow-list return destinations.
- Use capabilities/permissions, not only roles, and enforce them server-side.
- Accessible errors, focus management, and MFA instructions are part of the flow.

### Interview-ready answer

> “For an enterprise application, I would normally use OIDC Authorization Code with PKCE, and I would strongly consider a backend-for-frontend so tokens are not exposed to JavaScript. The browser keeps a secure HttpOnly session cookie. The app loads session and capability data at startup, but API authorization is always enforced on the server. Refresh should be single-flight to avoid many refresh calls, and logout or expiry should synchronize across tabs. I would specifically protect against XSS, CSRF, open redirects, and redirect loops, while preserving safe user work when reauthentication is needed.”

---

## 11. Frontend Observability

### Clarifying questions

- Which user journeys matter most?
- What error monitoring, analytics, tracing, and privacy rules already exist?
- Can frontend events connect to backend traces and deployments?

### Proposed architecture

Collect four groups of signals:

- Errors: uncaught errors, rejected promises, handled feature failures, error-boundary events.
- Performance: Core Web Vitals, route timings, API latency, long tasks, resource size.
- Product/journey: search completed, checkout completed, form abandoned—using a governed event schema.
- Context: release version, route template, browser, feature flags, tenant class, correlation/request ID.

Use source maps stored securely in the monitoring system. Sample high-volume events. Scrub query strings, form values, tokens, and personal data. Define service-level indicators around real journeys, not just global averages.

### Data flow

User action creates a frontend trace/event → request includes correlation headers → backend continues the trace → monitoring groups errors by release and route → alerts use rate and user impact → engineer links incident to deployment, request, and session-safe context.

### Trade-offs and failure cases

- More telemetry gives context but costs money and increases privacy risk.
- Client ad blockers and page exits mean telemetry is incomplete.
- A monitoring SDK must not break the app; load safely and keep it small.
- Avoid alerting on every error. Alert on sustained rates, important journeys, and regression from baseline.

### Interview-ready answer

> “I want observability to answer: who is affected, what journey failed, when it started, which release caused it, and whether the backend also failed. I collect errors, web vitals, route and API timing, and a small set of governed journey events. Every event includes release and route context, and API calls carry a correlation ID so frontend and backend traces connect. I scrub sensitive data, sample high-volume events, and alert on user impact rather than raw log volume.”

---

## 12. Performance Optimization

### Clarifying questions

- Which problem matters: first load, interaction delay, scrolling, memory, or API latency?
- What devices and networks represent real users?
- What are current measurements and performance budgets?

### Approach

Measure first, change one bottleneck, verify the user impact, and prevent regression.

### Architecture and techniques

- Delivery: CDN, compression, HTTP caching, immutable hashed assets.
- JavaScript: route/feature splitting, lazy loading, remove unused dependencies, tree shaking, modern builds.
- Rendering: stable keys, memoize expensive work only when measured, virtualize large lists, avoid layout thrashing.
- Images/fonts: correct formats and sizes, responsive images, lazy loading, font subsetting, sensible fallback.
- Data: parallelize independent requests, avoid waterfalls, cache, prefetch likely next actions, paginate large payloads.
- CSS: avoid expensive global selectors and large unused styles; use logical properties for RTL.
- Runtime: move heavy computation to a worker if it blocks the main thread.

Set budgets for initial JavaScript, images, LCP, INP, CLS, and important route transitions. Test in CI and monitor real-user percentiles by device/network.

### Trade-offs and failure cases

- Excessive code splitting creates many requests and loading flashes.
- Memoization has memory and complexity costs.
- Prefetching can waste bandwidth; respect data-saver conditions.
- Skeletons improve perceived progress but can cause layout shift if dimensions differ.
- Do not sacrifice accessibility or correctness for a score.

### Interview-ready answer

> “I optimize from measurements, not guesses. I separate network, loading, rendering, and interaction problems using real-user monitoring and browser profiling. Typical fixes include route-level code splitting, removing heavy dependencies, caching, avoiding request waterfalls, correctly sizing images, virtualizing large collections, and reducing main-thread work. I set performance budgets in CI and watch p75 metrics for real devices. After every change I verify both the metric and the user journey, because a better score is not useful if the experience becomes less reliable.”

---

## 13. Micro-frontends vs Modular Monolith

### Clarifying questions

- How many teams and domains exist? Do they need independent release schedules?
- Is there one framework or several legacy stacks?
- What problem are micro-frontends expected to solve?

### Recommended default

Start with a modular frontend monolith: one deployable application with domain-based modules, clear public APIs, dependency rules, shared platform services, and independent ownership. Move to micro-frontends only when organizational autonomy and release independence justify the runtime and operational cost.

### Micro-frontend architecture when justified

- A thin shell owns routing, authentication integration, navigation, design-system baseline, error isolation, and observability.
- Business domains own vertical slices and deployment.
- Integration can be route-level composition, build-time packages, or runtime federation. Prefer coarse boundaries.
- Cross-domain communication uses URL navigation or a small versioned event contract. Avoid a shared mutable global store.
- Shared dependencies require a version strategy and fallback plan.

### Trade-offs

- Benefits: team autonomy, incremental migration, fault/release isolation.
- Costs: duplicate code, inconsistent UX, dependency conflicts, complex local development, testing, routing, security, observability, and slower page loads.
- Iframes isolate strongly but limit seamless UX and shared accessibility.
- Runtime federation enables independent deployment but increases runtime compatibility risk.

### Failure cases and concerns

- A remote fails to load: shell-level timeout, fallback, retry, and feature isolation.
- Version mismatch: compatibility tests and contract/version policy.
- CSS collisions: design tokens and scoped/layered styles.
- Fragmented accessibility and analytics: platform standards and central validation.
- One compromised remote affects the shell: strict trust model, CSP, dependency and deployment controls.

### Interview-ready answer

> “My default is a modular monolith because it gives strong boundaries without adding distributed-system problems to the browser. I would use domain modules, enforced dependency rules, and clear ownership first. I would choose micro-frontends when several teams truly need independent deployment or when we need gradual migration across stacks. Then I would keep boundaries coarse, make the shell small, standardize the design system and observability, and avoid shared mutable state. The decision should follow an organizational constraint, not a trend.”

---

## 14. SSR, CSR, and SSG

### Clarifying questions

- Is the content public and indexed? How personalized or fresh is it?
- What are the first-load, hosting, and infrastructure constraints?
- Does the page need rich interaction immediately?

### Decision guide

- **CSR**: authenticated applications and highly interactive tools where SEO is not central.
- **SSR**: public or personalized pages needing good initial content and SEO, with fresh server data.
- **SSG**: stable public content such as documentation and marketing pages.
- **Hybrid**: static or server-rendered shell/content, then client interaction; choose per route.

### Data flow

SSR: request → server fetches authorized data → renders HTML → browser displays → JavaScript hydrates → client navigation continues.

SSG: build creates HTML → CDN serves it → optional revalidation updates content.

CSR: CDN serves shell → JavaScript loads → app fetches data → renders.

### Trade-offs and failure cases

- SSR improves initial content but increases server cost, caching complexity, and time-to-first-byte risk.
- CSR simplifies hosting but can show a blank/loading shell and has weaker SEO by default.
- SSG is fast and resilient but can become stale and produce long builds.
- Hydration mismatch occurs with time, random values, browser-only APIs, locale, or inconsistent data. Keep server/client output deterministic.
- Streaming can improve progressive display but complicates boundaries and monitoring.
- Never serialize secrets into HTML; prevent cache leakage between users.

### Interview-ready answer

> “I choose rendering per route. Public stable content is a good fit for static generation, public dynamic content may use SSR, and an authenticated enterprise workspace is often best as CSR or a hybrid. SSR is not automatically faster: I consider server latency, hydration cost, caching, and personalization. I keep server and client rendering deterministic, avoid leaking user data into shared caches, and measure time to useful content and interaction on real devices.”

---

## 15. Internationalization and RTL/LTR

### Clarifying questions

- Which locales and scripts? Is direction per page or mixed within a page?
- Are content, dates, numbers, currencies, plural rules, and time zones localized?
- Who translates and reviews content? Can translations arrive independently?

### Proposed architecture

- Use stable message IDs and ICU-style parameters/plurals; do not concatenate translated fragments.
- Format dates, numbers, lists, and currencies with `Intl` and explicit locale/time zone.
- Lazy-load locale bundles and use a tested fallback chain.
- Set `lang` and `dir` at the document or container level.
- Use CSS logical properties: inline/block start/end rather than left/right.
- Mirror directional icons such as arrows when meaning requires it; do not mirror universal symbols or text.
- Support mixed-direction content with semantic isolation such as `bdi` where appropriate.
- Design for text expansion and avoid fixed-width text containers.

### Data flow

User/account/browser selects locale → app loads locale messages → document language/direction and formatters update → components render from message IDs and semantic tokens → preference persists in account or safe local storage.

### Trade-offs and failure cases

- Shipping all translations simplifies switching but increases bundle size.
- Browser locale is a useful default, not always the user’s preference.
- Missing keys should fall back visibly in development and safely in production, with monitoring.
- Dates require clear time-zone ownership; store/transport instants consistently and format at the edge.
- Test pseudo-localization, long strings, Arabic/Hebrew, mixed text, keyboard order, charts, tables, and screenshots.

### Interview-ready answer

> “I treat internationalization as architecture, not final translation work. Text uses stable message IDs with plural and parameter support. Dates, numbers, currency, and time zones use standard locale formatters. For RTL, I set the correct language and direction, build layouts with logical CSS properties, and mirror only icons whose meaning is directional. Components must handle text expansion and mixed-direction content. I test pseudo-locales and real RTL pages early, including focus order, tables, charts, dark mode, and responsive layouts.”

---

## 16. Accessibility

### Clarifying questions

- Which standard and target level, usually WCAG 2.2 AA?
- Which user journeys are critical?
- What browsers and assistive technologies are supported?

### Architecture and practice

- Start with semantic HTML and native controls.
- Make every action keyboard-operable with visible focus.
- Keep focus order logical and manage focus after dialogs, navigation, errors, and dynamic updates.
- Associate labels, instructions, and errors with controls.
- Use ARIA only when native semantics are insufficient.
- Meet contrast, zoom/reflow, touch-target, reduced-motion, and non-color requirements.
- Make loading and status changes understandable through appropriate live regions.
- Include accessibility requirements in the design system and definition of done.

### Testing strategy

- Linting and automated scans catch common issues.
- Component tests verify semantics and keyboard behavior.
- Manual keyboard testing is required.
- Test critical flows with representative screen readers and zoom/reflow.
- Include disabled, loading, empty, error, RTL, dark-mode, and high-contrast states.

### Trade-offs and failure cases

- Automated tools catch only part of the problem.
- Custom controls often recreate native behavior badly.
- Virtualized lists and drag-and-drop need deliberate alternative interaction and announcements.
- Do not disable zoom or remove outlines without an equivalent.

### Interview-ready answer

> “Accessibility is part of the component contract and acceptance criteria. I start with semantic HTML and native behavior, then add ARIA only when necessary. I cover keyboard operation, focus management, labels and errors, contrast, zoom, reduced motion, and dynamic announcements. Automated checks run in CI, but I also manually test critical journeys with keyboard and representative screen readers. Building these rules into the design system gives every product a safer default and reduces repeated fixes.”

---

## 17. Testing Strategy

### Clarifying questions

- Which journeys are most valuable or risky?
- What is the current failure history and release frequency?
- Can backend contracts and test environments be controlled?

### Test portfolio

- Static: TypeScript, lint rules, dependency and security checks.
- Unit: pure business rules, formatters, reducers, selectors.
- Component/integration: user-visible behavior, forms, accessibility, loading/error states, with APIs mocked at the network boundary.
- Contract: validate frontend assumptions against API schemas/consumer contracts.
- End-to-end: a small set of critical journeys in realistic environments.
- Visual regression: design-system components and important layouts across themes/directions/viewports.
- Non-functional: accessibility, performance budgets, security scans.

### Principles

- Test behavior, not implementation details.
- Prefer accessible queries such as role and label.
- Use deterministic data, controlled clocks, and isolated tests.
- Do not solve flaky tests with blind retries; fix timing, state, or environment causes.
- Use test impact/parallelization to keep feedback fast.
- Monitor production because tests cannot cover every environment.

### Trade-offs and failure cases

- Too many E2E tests are slow and brittle; too many isolated unit tests miss integration risk.
- Snapshot tests are useful for stable serialized output, not as a replacement for assertions.
- Mocking every dependency creates false confidence; keep a layer of contract and real integration tests.

### Interview-ready answer

> “My test strategy is risk-based. TypeScript and linting give fast feedback. Unit tests cover business logic, component tests cover user behavior and states, contract tests protect API assumptions, and a small E2E suite covers critical journeys. Visual and accessibility checks protect the design system. I test through roles and labels instead of internal selectors. I track flaky tests and production escapes, because test count is not the goal—fast, reliable confidence is.”

---

## 18. Frontend Security

### Threat model questions

- What sensitive data and privileged actions exist?
- What third-party scripts, uploads, rich text, and embedded content exist?
- Is authentication cookie-based? Are there compliance requirements?

### Controls

- XSS: framework escaping, sanitize allowed rich HTML, avoid unsafe DOM APIs, use CSP and Trusted Types where practical.
- CSRF: SameSite cookies and anti-CSRF tokens for relevant state-changing requests.
- Authentication: secure HttpOnly cookies or carefully designed OIDC flow; never log credentials/tokens.
- Authorization: server-side checks for every object/action; UI checks are only convenience.
- Dependencies: lockfiles, review, automated scanning, minimal packages, controlled updates, provenance where supported.
- Supply chain/build: protected CI, least-privilege secrets, signed or traceable artifacts, reproducible releases.
- Data: collect and store the minimum; redact monitoring; clear user caches on logout.
- URLs: prevent open redirects; validate protocols and destinations.
- Uploads: validate type/size/content server-side, isolate storage, scan files, safe download headers.

### Trade-offs and failure cases

- A strict CSP improves protection but needs nonce/hash and third-party coordination.
- Client validation improves UX but is not a security boundary.
- `localStorage` is convenient but readable by injected scripts.
- Source maps help debugging; restrict or securely upload them rather than exposing sensitive source unnecessarily.

### Interview-ready answer

> “I start with the threat model and assume the browser is not a trusted authorization boundary. I prevent XSS through escaping, safe APIs, sanitization for approved rich content, and a strong CSP. With cookie sessions I address CSRF. Authorization and validation always happen on the server. I minimize third-party code, scan and review dependencies, keep secrets out of the frontend, and redact telemetry. Security controls should be part of the platform and CI so teams do not have to remember them for every feature.”

---

## 19. CI/CD and Release Strategy

### Clarifying questions

- Monorepo or multiple repositories? How often do teams release?
- What environments, approvals, compliance, and rollback requirements exist?
- Can frontend and backend deploy independently?

### Pipeline

Commit/PR → formatting, lint, types, unit/component tests → affected builds → dependency/security/license checks → accessibility and performance budgets → artifact creation → deploy immutable artifact to test/staging → smoke/E2E tests → progressive production rollout → monitoring → promote or rollback.

### Architecture and practices

- Build once and promote the same immutable artifact; inject environment-safe configuration at runtime where needed.
- Use preview environments for meaningful UI review.
- Use feature flags to separate deploy from release, with owners and expiry dates.
- Use canary or percentage rollout for risky changes.
- Keep frontend compatible with old and new API versions during rollout; additive API evolution helps.
- Upload release metadata and source maps to monitoring.
- Rollback should select a previous artifact, not rebuild old source.

### Trade-offs and failure cases

- More gates reduce risk but slow feedback; run fast affected checks first and parallelize.
- Feature flags reduce release risk but create hidden complexity and stale branches.
- Database/API changes may not be reversible; use expand-and-contract compatibility.
- Test rollback and incident procedures, not only deployment.

### Interview-ready answer

> “I want CI to give fast confidence and CD to make releases small and reversible. Pull requests run types, linting, focused tests, security checks, accessibility checks, and performance budgets. We build an immutable artifact once and promote it through environments. Risky features use short-lived flags and progressive rollout. Monitoring is linked to the release, and rollback selects the previous artifact. Frontend and backend changes remain compatible during deployment using additive contracts and an expand-and-contract approach.”

---

## 20. Scaling Frontend Teams

### Clarifying questions

- How many teams, products, and repositories exist?
- Where are the current bottlenecks: ownership, consistency, releases, architecture, or onboarding?
- Which decisions need central standards and which should stay local?

### Operating model

- Organize product teams around business domains and user outcomes.
- Create a small frontend platform function for shared foundations: design system, build tooling, observability, security defaults, and paved paths.
- Define code ownership and service/component ownership.
- Use architecture principles and automated dependency rules instead of a central approval for every decision.
- Use lightweight RFCs for decisions that affect several teams.
- Maintain examples, templates, migration guides, and an engineering handbook.
- Build communities of practice for knowledge sharing without removing team ownership.

### Quality and evolution

- Standardize outcomes and interfaces, not every internal implementation.
- Measure lead time, change failure rate, recovery time, upgrade lag, accessibility defects, performance, adoption, and developer experience.
- Fund migrations and maintenance explicitly.
- Use codemods and compatibility layers for large changes.

### Trade-offs and failure cases

- Full centralization creates bottlenecks; no coordination creates duplication and inconsistent UX.
- A platform team must treat developers as customers, not issue rules without support.
- Shared libraries without owners become critical abandoned infrastructure.
- Metrics must guide improvement, not rank individuals.

### Interview-ready answer

> “To scale frontend teams, I would give domain teams clear product ownership and provide a small platform with strong defaults for the design system, testing, builds, security, and observability. Cross-team decisions use lightweight RFCs and automated architecture rules. Shared assets have named owners, support expectations, and migration plans. I measure delivery and quality outcomes, plus developer experience. The goal is local autonomy inside clear guardrails, so teams can move independently without creating a fragmented product.”

---

## 21. Cross-Cutting Architecture Example

Imagine an enterprise operations portal with authentication, dashboards, large searchable tables, and editable records.

### High-level design

```text
Browser
├─ Application shell
│  ├─ Routing and session bootstrap
│  ├─ Global navigation and error boundary
│  ├─ Locale, direction, theme, feature flags
│  └─ Observability context
├─ Domain modules
│  ├─ Dashboard
│  ├─ Search
│  ├─ Records table
│  └─ Record editor
├─ Shared platform
│  ├─ Design system and semantic tokens
│  ├─ Typed API client and domain adapters
│  ├─ Query cache
│  └─ Test utilities
└─ Backend-for-frontend
   ├─ Session/token handling
   ├─ Authorization and aggregation
   ├─ Stable UI-shaped contracts
   └─ Calls to domain services
```

### Boundaries

- The shell does not own domain business logic.
- Each domain module has a public API and cannot import another module’s internals.
- The design system contains reusable behavior, not product-specific workflows.
- The query cache owns server-state freshness; domain stores own only complex client workflows.
- The backend remains the authorization and validation boundary.

### Production-readiness checklist

- Typed contracts and compatibility strategy.
- Loading, empty, stale, partial, error, and offline states.
- Request cancellation, timeouts, idempotency, retry policy.
- Route-level lazy loading and performance budgets.
- RTL/LTR, locale formatting, responsive layouts, dark mode.
- Keyboard, screen reader, zoom, contrast, reduced motion.
- XSS, CSRF, permissions, sensitive-data handling, dependency security.
- Correlated errors, web vitals, journey metrics, release metadata.
- Layered tests and a progressive, reversible deployment.

---

## 22. How to Handle Follow-up Challenges

### “Why did you choose this technology?”

> “I would choose it because it solves these specific requirements and our team can operate it. I would validate bundle size, browser support, accessibility, maintenance, and exit cost with a small proof of concept. The architecture should not depend on one library more than necessary.”

### “What happens at ten times the scale?”

> “I would identify which limit we are approaching first: payload size, request rate, render cost, memory, team coordination, or release risk. Then I would scale that boundary—for example server-side aggregation, pagination, virtualization, caching, or domain ownership—rather than making the whole system more complex in advance.”

### “What would you build first?”

> “I would deliver the smallest vertical slice through UI, API, security, observability, and deployment. It proves the risky boundaries early. Then I would expand using measured usage and failure data.”

### “How do you disagree with a proposed architecture?”

> “I first align on the goal and constraints. Then I compare options using the same criteria: user impact, complexity, performance, security, reliability, team ownership, and migration cost. If uncertainty remains, I propose a small experiment with a clear decision deadline.”

### “How do you deal with legacy code?”

> “I avoid a large rewrite unless the evidence is very strong. I create a boundary around the legacy area, add observability and characterization tests, then replace vertical slices incrementally. A compatibility layer lets old and new code coexist until migration is complete.”

---

## 23. Behavioral Stories in Simple STAR Format

Adapt the details and metrics to your real experience. Never claim numbers you cannot explain.

### Story 1: Building a reusable component system

**Situation:** Several enterprise products had similar buttons, forms, tables, and dialogs, but each team implemented them differently. Dark mode, responsive behavior, and RTL fixes were repeated.

**Task:** I needed to improve consistency and delivery speed without blocking product teams.

**Action:** I audited duplicated components and accessibility issues, then worked with design and engineers to define semantic design tokens and a small set of high-value primitives. I documented typed APIs, variants, RTL behavior, keyboard behavior, and examples. We added visual and accessibility tests, versioning, a contribution process, and a gradual migration path instead of forcing a full rewrite.

**Result:** Teams reused the same foundations, UI defects decreased, and new screens were faster to build. The most important lesson was that adoption depends on documentation, support, and migration tools as much as component quality.

**Short spoken version:**

> “Several products had duplicated UI with inconsistent accessibility and RTL behavior. I led an audit and helped create semantic tokens and a focused component library. We added documentation, visual and accessibility tests, and a gradual migration path. This reduced repeated work and improved consistency. I learned to treat the design system as an internal product with real users.”

### Story 2: Solving a production performance problem

**Situation:** A data-heavy enterprise page became slow for customers with large accounts. Initial load was long and scrolling sometimes froze.

**Task:** I owned the frontend investigation and needed to improve the experience without changing user behavior.

**Action:** I used real-user timings, network traces, and browser profiles. I found an oversized response, expensive derived calculations, and too many rendered rows. I worked with the backend to paginate the data, moved filtering to the server, virtualized the list, and removed repeated calculations. I added performance budgets and monitoring by account size so the regression would be visible.

**Result:** The page became responsive for large accounts, load time and long tasks dropped, and the team gained a repeatable performance process.

**Short spoken version:**

> “A large customer dataset made an important page slow and sometimes unresponsive. I measured the network and main thread and found three causes: a large payload, repeated calculations, and too many DOM nodes. We added server pagination, virtualization, and simpler derived state. Then I added monitoring and budgets. The key lesson was to measure the whole path instead of guessing from the UI.”

### Story 3: Debugging a difficult production issue

**Situation:** Some users occasionally saw stale results after changing filters quickly. The issue was hard to reproduce locally.

**Task:** I needed to identify the root cause, reduce impact, and prevent recurrence.

**Action:** I added safe diagnostic context around query, request ID, timing, and release version. The evidence showed that responses were arriving out of order and an older request replaced the latest state. I added cancellation and a latest-request guard, wrote a test with controlled delayed responses, and reviewed similar request flows across the application.

**Result:** The stale-results issue stopped, related flows were hardened, and correlation data made later incidents faster to investigate.

**Short spoken version:**

> “Users sometimes saw stale results after changing filters quickly. I added request and timing context and found a race: an older response arrived last and replaced the correct data. I fixed it with cancellation and a latest-request check, then added a deterministic regression test and audited similar flows. I also improved correlation data so future issues would be easier to trace.”

### Story 4: Delivering RTL/LTR and localization

**Situation:** A product built mainly for English needed Arabic support. Many layouts used left/right CSS, icons did not mirror correctly, and text containers assumed short labels.

**Task:** I needed to make internationalization maintainable rather than patching individual screens.

**Action:** I defined an i18n foundation with message IDs, locale formatters, document language/direction, CSS logical properties, and semantic tokens. I updated shared components first, added pseudo-localization and RTL visual tests, and worked with design on icon mirroring and text expansion. We migrated feature areas incrementally.

**Result:** Arabic became a supported product mode, later features inherited RTL behavior by default, and localization defects were caught earlier.

**Short spoken version:**

> “When we added Arabic, I did not want one-off RTL fixes. I moved shared components to logical CSS properties, introduced consistent locale formatting and message IDs, and added pseudo-localization and RTL visual tests. We fixed the design-system layer first, then migrated screens gradually. That made RTL a default capability for future work.”

### Story 5: Managing a risky release

**Situation:** A major workflow redesign affected many users and depended on a new backend contract. A big-bang launch would be difficult to reverse.

**Task:** I needed to make the release safe while keeping the delivery date.

**Action:** I aligned the frontend and backend on an additive, backward-compatible contract. We put the new path behind a short-lived feature flag, added journey metrics and error dashboards, tested rollback, then released to internal users and small customer groups before expanding. We reviewed results at each stage and removed the old path and flag after stability.

**Result:** The rollout completed without a broad incident, issues were found in small cohorts, and rollback remained available throughout.

**Short spoken version:**

> “For a risky workflow redesign, I avoided a big-bang launch. We kept the API backward compatible, used a temporary feature flag, added journey monitoring, and rolled out by cohort. We found and fixed issues while impact was small, then removed the flag and old code. The lesson was that deploy and release should be separate decisions.”

### Story 6: Disagreeing on micro-frontends

**Situation:** The team proposed micro-frontends because the codebase felt slow to change, but there were only two teams and most delays came from unclear module ownership and slow CI.

**Task:** I needed to help the group choose an architecture based on the real constraint.

**Action:** I listened to the concerns and compared a modular monolith with micro-frontends using deployment independence, runtime cost, developer experience, and migration effort. We measured CI and dependency problems, then introduced domain modules, ownership, dependency rules, and affected builds. We agreed on signals that would justify revisiting micro-frontends later.

**Result:** Build and ownership problems improved without adding runtime composition complexity, and the team had a fact-based decision record.

**Short spoken version:**

> “A team suggested micro-frontends because development felt slow. I agreed with the problem but checked the cause. We found unclear boundaries and slow CI, not a real need for independent runtime deployment. We introduced domain ownership, dependency rules, and affected builds in a modular monolith. I like to solve the actual constraint and define when a more complex architecture would become justified.”

### Story 7: Leading through an accessibility gap

**Situation:** An accessibility review found keyboard and screen-reader problems across several custom controls close to a release.

**Task:** I needed to address the immediate risk and stop the same class of issue returning.

**Action:** I prioritized issues by blocked journey and user impact, paired with QA and design, and replaced custom behavior with native semantics where possible. We fixed focus management and error associations, added keyboard/component tests, and moved the patterns into the shared library and definition of done.

**Result:** Critical journeys became usable before release, and the permanent controls reduced accessibility regressions in later features.

**Short spoken version:**

> “An audit found keyboard and screen-reader blockers near release. I prioritized the blocked journeys, used native semantics where possible, and fixed focus and form errors with QA and design. Then I added tests and moved the corrected patterns into the component library. We solved the immediate issue and improved the default for future teams.”

### Story 8: Handling an incident calmly

**Situation:** After a release, error rates increased in a core workflow, but only for one browser/version combination.

**Task:** I was responsible for reducing customer impact and coordinating the frontend response.

**Action:** I confirmed the affected segment using release and browser telemetry, paused rollout, and switched off the new path with a feature flag. I communicated scope and next update time, reproduced the issue in the affected browser, fixed the unsupported API usage with a compatible approach, and added coverage to the browser matrix. After recovery, we wrote a short blameless review with prevention actions.

**Result:** Customer impact was limited, service recovered quickly, and browser compatibility checks improved.

**Short spoken version:**

> “A release caused failures only in one browser group. I used telemetry to confirm the scope, paused the rollout, and disabled the feature to reduce impact. We reproduced and fixed an unsupported browser API, then added compatibility coverage and completed a blameless review. During incidents I focus first on impact, then evidence, communication, recovery, and prevention.”

---

## 24. Behavioral Answer Prompts

Prepare one story for each theme:

- A difficult technical decision.
- A production incident.
- A performance improvement.
- A disagreement handled well.
- Mentoring or raising team quality.
- A mistake and what changed afterward.
- Delivering under uncertainty.
- Improving accessibility, design consistency, or internationalization.

For each story, write only five bullets:

1. One-sentence situation.
2. Your responsibility.
3. Two or three actions using “I,” not only “we.”
4. A measurable or observable result.
5. The lesson and how it changed later work.

### Natural STAR template

> “The situation was ____. I was responsible for ____. I first ____, because ____. Then I ____. The result was ____. What I learned was ____, and I used that later by ____.”

### If you do not remember a metric

Do not invent one. Say:

> “I do not remember the exact percentage, but our monitoring showed a clear reduction in load time and support reports, especially for large accounts.”

---

## 25. A Full 10-Minute System-Design Answer Template

### Minute 0–2: Clarify

> “I’ll clarify the primary user, scale, freshness, device support, SEO, and the most important quality goal.”

Ask four or five useful questions. State assumptions if the interviewer does not answer.

### Minute 2–3: Requirements

> “The main functions are A, B, and C. The most important quality requirements are responsiveness, reliability, accessibility, and secure permission handling.”

### Minute 3–6: Architecture and data flow

Draw or explain:

- UI/shell and feature boundaries.
- State ownership.
- API/BFF and contract.
- Cache, pagination, or real-time mechanism.
- One normal end-to-end data flow.

### Minute 6–8: Failures and quality

Cover:

- Slow, empty, stale, partial, offline, and error states.
- Race conditions, retries, cancellation, and conflicts.
- Security and authorization.
- Keyboard, focus, semantics, and responsive/RTL behavior.

### Minute 8–9: Trade-offs

Compare the chosen design to one credible alternative. Explain when you would change the choice.

### Minute 9–10: Delivery and measurement

> “I would ship a thin vertical slice, add journey and performance monitoring, release progressively, and evolve the design from real usage. Success would be measured by these user and reliability metrics…”

---

## 26. Seven-Day Preparation Plan

Plan for about 90–120 focused minutes per day. Speak answers aloud; silent reading is not enough.

### Day 1: Build your foundation

- Learn the CRAFT framework.
- Practice the 60-second opening and the 10-minute answer structure.
- Review state classification, URL state, query cache, and domain boundaries.
- Exercise: design a simple searchable list in 10 minutes.
- Output: one page of your own preferred architecture vocabulary.

### Day 2: Data-heavy interfaces

- Study autocomplete, infinite scrolling, and large tables.
- Practice race conditions, cancellation, pagination, virtualization, and URL state.
- Exercise: compare infinite scroll with pagination; compare server and client filtering.
- Speak one answer, record it, and remove unnecessary jargon.

### Day 3: Platform and scale

- Study dashboards, design systems, state management, and scaling teams.
- Practice explaining tokens → primitives → patterns.
- Exercise: defend a modular monolith, then explain when micro-frontends become justified.
- Prepare your reusable-components STAR story.

### Day 4: Reliability and security

- Study API errors/retries/cancellation, optimistic updates, authentication, and security.
- Practice the error matrix: 400, 401, 403, 404, 409, 429, 5xx.
- Exercise: explain safe session refresh and a failed optimistic mutation.
- Prepare your production-debugging or incident STAR story.

### Day 5: Delivery quality

- Study observability, performance, testing, and CI/CD.
- Practice explaining measurement before optimization.
- Exercise: design telemetry for a critical user journey and a reversible release.
- Prepare your performance and risky-release STAR stories.

### Day 6: Inclusive global frontend

- Study SSR/CSR/SSG, internationalization, RTL/LTR, accessibility, responsive design, and dark mode.
- Exercise: review a dashboard for keyboard, screen reader, zoom, RTL, text expansion, and theme contrast.
- Prepare your RTL or accessibility STAR story.
- Run one 45-minute mock interview: 25 minutes design, 15 minutes behavioral, 5 minutes feedback.

### Day 7: Simulation and compression

- Run two timed system-design prompts chosen at random.
- Answer six behavioral questions in two minutes each.
- Review only weak areas; do not learn a new framework.
- Create a final one-page cheat sheet with:
  - CRAFT steps.
  - State classification.
  - Failure/error matrix.
  - Performance and accessibility checklist.
  - Five story titles and their results.
- Finish with a calm 60-second introduction connecting your experience to senior-level impact.

---

## 27. Final Cheat Sheet

### Before designing

Users → scale → freshness → devices → SEO → security → accessibility → existing constraints.

### Architecture

Shell → feature boundaries → state ownership → API/BFF → cache → design system → observability.

### Data states

Initial loading → refreshing → success → empty → partial → stale → error → offline → recovery.

### Network

Timeout → cancellation → deduplication → safe retry → backoff/jitter → idempotency → conflict handling.

### Performance

Measure → budget → split → cache → paginate → virtualize → reduce main-thread work → verify in RUM.

### Security

Escape/sanitize → CSP → secure session → CSRF → server authorization → validate → redact → dependency hygiene.

### Accessibility

Semantics → keyboard → focus → labels/errors → contrast → zoom/reflow → announcements → manual testing.

### Senior-level closing sentence

> “I would start with the simplest architecture that meets the current requirements, make the important boundaries explicit, add observability and safe delivery from the beginning, and evolve it when real scale or team constraints justify more complexity.”

---

## 28. Your 60-Second Introduction

> “I’m a frontend engineer with more than six years of experience building enterprise web applications with Vue, Angular, React, and TypeScript. A large part of my work has been turning complex business workflows into reliable and maintainable interfaces. I have built reusable components and design tokens, supported responsive layouts, dark mode, and RTL/LTR experiences, and worked on performance and production debugging. At senior level, I focus not only on delivering a screen, but also on clear architecture, accessibility, observability, safe releases, and helping teams reuse good patterns. I enjoy frontend system design because it connects user experience with engineering trade-offs and long-term team scale.”

