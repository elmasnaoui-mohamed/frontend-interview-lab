# Modern Angular Interview Preparation Guide

For a senior frontend developer with 6+ years of experience

This guide uses short, natural answers that you can say aloud. The examples use modern Angular: standalone components, built-in control flow, signals, functional providers, lazy routes, and zoneless-friendly state updates. Older patterns appear only when they matter in real enterprise code or migration work.

## How to use this guide

For each topic:

1. Say the **interview-ready answer** aloud.
2. Read the explanation and code until you can explain the reason behind the pattern.
3. Practice the follow-up questions without reading the answer.
4. Add one example from your own work: a production bug, performance improvement, shared component, design-system decision, or migration.

The strongest senior answers normally have this shape:

> **Decision → reason → trade-off → real result.**

Example:

> “I used route-level lazy loading because the admin area was large and used by a small percentage of users. It reduced the initial bundle, but it added more loading states and chunk boundaries. We measured the change with bundle analysis and web-vitals data.”

## Modern Angular baseline

- Prefer standalone components and `bootstrapApplication` for new code.
- Keep features organized by business domain, not by file type.
- Use built-in control flow: `@if`, `@for`, `@switch`, and `@defer`.
- Use signals for local synchronous UI state and derived state.
- Use RxJS for asynchronous streams, cancellation, coordination, and event pipelines.
- Prefer `inject()` where it improves readability and composition.
- Prefer functional guards and functional HTTP interceptors.
- Write zoneless-compatible code. Zoneless change detection is the default in Angular v21+.
- Prefer typed reactive forms for established complex form code. Signal Forms are a strong modern option in Angular v22+ signal-based applications.
- Use Vitest and Angular `TestBed` in new CLI projects; test behavior, not implementation details.
- Treat accessibility, security, performance, and internationalization as architecture concerns, not final polishing.

## Contents

1. Architecture and application structure
2. Standalone components and application bootstrap
3. Components and templates
4. Data binding and component communication
5. Directives
6. Pipes
7. Services and dependency injection
8. Signals
9. RxJS observables and operators
10. Promises versus Observables
11. Lifecycle hooks and render callbacks
12. Forms
13. Routing, guards, resolvers, and navigation
14. HTTP, API boundaries, and interceptors
15. Change detection
16. OnPush
17. Zones and zoneless Angular
18. State management
19. Content projection
20. View queries and content queries
21. Lazy loading and deferrable views
22. SSR, prerendering, and hydration
23. Testing
24. Accessibility, responsive design, and RTL/LTR
25. Security
26. Performance
27. Migration and legacy Angular

The final sections contain senior architecture scenarios, a rapid-review cheat sheet, a four-week study plan, a story-bank template, and questions to ask the interviewer.

---

# 1. Architecture and application structure

## Interview-ready answer

> “I organize a large Angular application by business feature. Each feature owns its routes, pages, components, data access, and state. I keep reusable UI in a design-system or shared UI layer, and I keep cross-cutting infrastructure such as authentication, logging, and HTTP configuration at the application level. Dependencies should point inward: pages compose features, feature logic uses domain or data services, and reusable UI should not know about business workflows.”

## Clear explanation

A scalable Angular architecture usually has four kinds of code:

- **App shell:** bootstrap, top-level layout, global providers, error handling, routing.
- **Features:** business areas such as orders, customers, billing, or admin.
- **Shared UI/design system:** buttons, fields, dialogs, tables, tokens, icons, layout primitives.
- **Core infrastructure:** authentication, API clients, telemetry, storage, feature flags.

Organize by feature first. A folder named `orders` tells a developer where the order workflow lives. A global `components` folder becomes a mixed collection with unclear ownership.

Keep smart orchestration near route/page components. Presentational components should receive data through inputs and report user intent through outputs. Do not force every component into “smart” or “dumb”; use the separation where it creates a clear API and makes testing easier.

## Practical example

```text
src/app/
  app.config.ts
  app.routes.ts
  shell/
  features/
    orders/
      orders.routes.ts
      pages/
      ui/
      data-access/
      state/
  shared/
    ui/
    utilities/
  core/
    auth/
    http/
    telemetry/
```

```ts
// orders.routes.ts
export const ORDERS_ROUTES: Routes = [
  {
    path: '',
    providers: [OrdersStore],
    children: [
      { path: '', loadComponent: () => import('./pages/orders-list')
          .then(m => m.OrdersList) },
      { path: ':id', loadComponent: () => import('./pages/order-detail')
          .then(m => m.OrderDetail) },
    ],
  },
];
```

## Common mistakes

- Organizing only by technical type: one huge folder each for components, services, and models.
- Putting business rules inside generic UI components.
- Creating a global “shared” module or service that owns unrelated responsibilities.
- Letting components call many low-level APIs directly.
- Adding a state library before the state problem is understood.
- Creating circular feature dependencies.

## Trade-offs

- Feature boundaries improve ownership and lazy loading, but some types are duplicated.
- A strict layered architecture improves consistency, but too many wrapper layers slow development.
- A monorepo helps shared libraries and dependency rules, but adds tooling and governance cost.

## Likely follow-up questions

**How do you decide if code is shared?**  
I wait for a real second use case. Then I extract the smallest stable API. Similar-looking code is not always the same abstraction.

**Where should business logic live?**  
In domain functions, services, or feature stores that can be tested without a large component fixture. Components should mainly coordinate state and UI.

**How do you prevent architecture decay?**  
Use ownership, code review rules, dependency constraints, small public APIs, and architecture decision records for important choices.

---

# 2. Standalone components and application bootstrap

## Interview-ready answer

> “Standalone components declare their template dependencies directly in `imports`, so new Angular applications do not need NgModules for feature composition. I bootstrap with `bootstrapApplication`, configure application providers in `ApplicationConfig`, and lazy-load standalone routes or components. This makes dependencies easier to see and supports incremental migration from NgModules.”

## Clear explanation

Modern components are standalone by default. A component imports the components, directives, and pipes used by its template. This gives local, explicit dependencies and works well with route-level code splitting.

Application-wide providers normally live in `app.config.ts`. Feature-specific providers can live on routes, and truly local providers can live on a component.

## Practical example

```ts
@Component({
  selector: 'app-user-card',
  imports: [DatePipe, RouterLink],
  template: `
    <a [routerLink]="['/users', user().id]">
      {{ user().name }} · {{ user().createdAt | date }}
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCard {
  user = input.required<User>();
}
```

```ts
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};

bootstrapApplication(App, appConfig);
```

## Common mistakes

- Importing a large shared bundle into every component.
- Providing a stateful service at component level by accident, creating many instances.
- Assuming standalone means “no architecture” or “one giant component.”
- Rewriting a stable NgModule application all at once without business value.

## Trade-offs

- Direct imports improve clarity, but component metadata can grow.
- Migration can be incremental, but a mixed standalone/NgModule period requires team conventions.
- Route-level providers give good isolation, but service lifetime follows the route injector and must be understood.

## Likely follow-up questions

**Are NgModules removed?**  
No. Angular supports them for existing applications and libraries, but recommends standalone for new code.

**What belongs in `app.config.ts`?**  
Global concerns: router, HTTP, hydration, global error handling, animations if used, and application-wide tokens.

**Can a standalone component use an NgModule library?**  
Yes. Add that NgModule to the component’s `imports`.

---

# 3. Components and templates

## Interview-ready answer

> “A component is a class plus a template, styles, and metadata. I keep components focused, expose a small typed API, and use built-in template control flow. I avoid heavy calculations and side effects in templates because template expressions can run often. For reusable components, I design semantic HTML, keyboard behavior, theming, RTL support, and accessibility as part of the API.”

## Clear explanation

Angular compiles templates, checks bindings, and updates the DOM when reactive state changes. Modern component APIs include signal-based `input()`, `output()`, and `model()`.

Use:

- `@if` for conditional rendering.
- `@for` with a stable `track` expression for lists.
- `@switch` for clear finite states.
- `@defer` for code-splitting UI that is not needed immediately.

## Practical example

```ts
@Component({
  selector: 'app-product-list',
  template: `
    @if (loading()) {
      <app-spinner aria-label="Loading products" />
    } @else if (products().length === 0) {
      <p>No products found.</p>
    } @else {
      <ul>
        @for (product of products(); track product.id) {
          <li><app-product-card [product]="product" /></li>
        }
      </ul>
    }
  `,
  imports: [Spinner, ProductCard],
})
export class ProductList {
  products = input.required<readonly Product[]>();
  loading = input(false);
}
```

## Common mistakes

- Calling expensive methods from interpolation.
- Tracking list items by index when items can move or be inserted.
- Mutating input objects inside a child.
- Building a reusable component with no keyboard or focus design.
- Using nested conditions until the template becomes unreadable.

## Trade-offs

- Small components improve reuse and tests, but excessive splitting makes navigation harder.
- Inline templates are convenient for small components; separate templates are easier for complex markup.
- A highly configurable component can cover more cases, but its API can become difficult to understand.

## Likely follow-up questions

**Why does `track` matter in `@for`?**  
It lets Angular preserve DOM nodes and component instances when a collection changes. A stable ID avoids unnecessary recreation.

**When do you split a component?**  
When part of it has a clear responsibility, API, reuse case, independent performance boundary, or test boundary.

---

# 4. Data binding and component communication

## Interview-ready answer

> “Angular supports interpolation, property binding, attribute binding, event binding, and two-way binding. I use inputs for data flowing down and outputs for user intent flowing up. I use two-way binding only when the child really owns an editable value contract; otherwise explicit input and output names are clearer.”

## Clear explanation

## Practical example

```html
<!-- text interpolation -->
<h2>{{ title() }}</h2>

<!-- DOM property -->
<button [disabled]="saving()">Save</button>

<!-- HTML attribute; useful for ARIA and attributes without DOM properties -->
<button [attr.aria-expanded]="open()">Menu</button>

<!-- event -->
<button (click)="save()">Save</button>

<!-- class and style -->
<div [class.active]="selected()" [style.inline-size.px]="width()"></div>
```

Signal-based component API:

```ts
@Component({ selector: 'app-rating', template: `...` })
export class Rating {
  value = model.required<number>();
  disabled = input(false);
  committed = output<number>();
}
```

```html
<app-rating [(value)]="rating" (committed)="saveRating($event)" />
```

## Common mistakes

- Using attribute binding when a DOM property is intended, or the reverse.
- Emitting vague outputs such as `changed` instead of user intent such as `submitted`.
- Passing mutable objects down and changing them in several components.
- Using two-way binding across many layers, which hides data flow.
- Forgetting that interpolation produces text and is not the right tool for every property.

## Trade-offs

- Explicit one-way flow is predictable but needs more wiring.
- `model()` makes a custom two-way control concise but creates tighter parent-child coupling.
- Shared service state avoids output chains, but can hide ownership if overused.

## Likely follow-up questions

**Property binding versus attribute binding?**  
Properties update the live DOM object. Attributes update markup-level attributes. ARIA normally needs `attr.aria-*`.

**How do unrelated components communicate?**  
Use state owned by their nearest common feature boundary, often a service/store. Avoid a global event bus with undocumented events.

---

# 5. Directives

## Interview-ready answer

> “A directive adds behavior to an existing element or component. Attribute directives change behavior or appearance, while structural behavior changes what is rendered. In modern templates I normally use built-in `@if` and `@for` instead of legacy structural directive syntax. I create a custom directive when behavior should be reusable without adding another DOM wrapper.”

## Clear explanation

Components are directives with templates. Attribute directives are useful for cross-cutting UI behavior such as autofocus, permission-aware interaction, resize observation, or analytics.

## Practical example

```ts
@Directive({
  selector: '[appAutoFocus]',
  host: { '[attr.data-autofocus]': 'true' },
})
export class AutoFocusDirective {
  private element = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => this.element.nativeElement.focus());
  }
}
```

Prefer `host` metadata or `hostDirectives` for composition when appropriate. Use `Renderer2` or Angular template bindings when direct DOM work would break SSR, security, or testability.

## Common mistakes

- Creating a directive for business logic that belongs in a feature service.
- Directly changing DOM in a way that assumes a browser during SSR.
- Hiding access-control logic in a visual directive; the server must still authorize.
- Recreating `@if` or `@for` with custom structural directives without a strong reason.

## Trade-offs

- Directives reuse behavior without wrappers, but hidden behavior can surprise readers.
- `hostDirectives` supports composition, but exposed inputs and outputs need a careful public API.

## Likely follow-up questions

**Component versus directive?**  
Use a component when you own a view. Use a directive when you add behavior to an existing host.

**How does a structural directive work in legacy templates?**  
The `*` syntax is shorthand around an `ng-template`; the directive controls creation of embedded views.

---

# 6. Pipes

## Interview-ready answer

> “A pipe transforms a value for display. Pipes should be small, deterministic, and free of side effects. Pure pipes run again when an input reference changes, so I use immutable updates. I use `AsyncPipe` to subscribe in templates because it handles cleanup and change-detection notification.”

## Clear explanation

Pipes are good for formatting dates, currency, labels, and simple derived display values. They should not fetch data or mutate inputs.

## Practical example

```ts
@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(name: string): string {
    return name.trim().split(/\s+/).map(part => part[0] ?? '').join('').toUpperCase();
  }
}
```

```html
<span aria-hidden="true">{{ user.name | initials }}</span>
<span class="sr-only">{{ user.name }}</span>
```

## Common mistakes

- Making an impure pipe to compensate for mutable state.
- Calling HTTP or changing state from a pipe.
- Assuming a pure pipe detects mutation inside an array or object.
- Putting heavy sorting or filtering in a pipe on a large list.

## Trade-offs

- Pipes keep display transformations declarative, but complex business transformations are easier to test as plain functions.
- Impure pipes react to more changes, but can run very often and hurt performance.

## Likely follow-up questions

**Pure versus impure pipe?**  
A pure pipe runs when primitive input values or object references change. An impure pipe may run on every check. Pure is the default and normally preferred.

**Pipe versus computed signal?**  
Use a pipe for reusable template formatting. Use `computed` for component or feature state derived from signals.

---

# 7. Services and dependency injection

## Interview-ready answer

> “Dependency injection lets a class ask for a dependency instead of constructing it. I use root providers for real application singletons, route providers for feature-scoped state, and component providers only when each component subtree needs its own instance. I use `InjectionToken` for configuration or interfaces because TypeScript interfaces do not exist at runtime.”

## Clear explanation

Angular resolves a token from the nearest element injector, then parent element injectors, then route/application environment injectors. Provider location controls instance scope and lifetime.

`providedIn: 'root'` is tree-shakable and is the normal default for stateless services or true app-wide state.

## Practical example

```ts
export interface ApiConfig { baseUrl: string; }

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');

@Injectable({ providedIn: 'root' })
export class UsersApi {
  private http = inject(HttpClient);
  private config = inject(API_CONFIG);

  getUser(id: string) {
    return this.http.get<User>(`${this.config.baseUrl}/users/${id}`);
  }
}

// app.config.ts
{ provide: API_CONFIG, useValue: { baseUrl: '/api' } }
```

## Common mistakes

- Providing a service in both root and a component, then wondering why state is duplicated.
- Turning every helper into an injectable service.
- Using a service locator through `Injector.get()` instead of explicit dependencies.
- Creating circular service dependencies.
- Using a string token that can collide instead of `InjectionToken`.

## Trade-offs

- Root scope is simple and shareable, but global mutable state is harder to reason about.
- Route scope isolates and lazy-loads feature state, but navigating away destroys it.
- `inject()` supports field initializers and functions; constructor injection can make dependencies visually obvious in one place. Both are valid.

## Likely follow-up questions

**`useClass`, `useValue`, `useFactory`, and `useExisting`?**  
`useClass` constructs a class, `useValue` provides a fixed value, `useFactory` computes a dependency, and `useExisting` aliases another token without creating a second instance.

**Why is DI useful in tests?**  
I can replace API, clock, storage, or configuration dependencies with controlled test doubles.

---

# 8. Signals

## Interview-ready answer

> “A signal is a synchronous reactive value. I read it by calling it, update writable signals with `set` or `update`, derive state with `computed`, and use `effect` only for real side effects. Signals are a good fit for local UI and feature state because Angular tracks exactly where they are read. I avoid using effects to copy one piece of state into another because that can create loops and inconsistent state.”

## Clear explanation

- `signal(value)`: writable state.
- `computed(() => ...)`: cached derived state; read-only.
- `effect(() => ...)`: runs side-effecting code when dependencies change.
- `linkedSignal(...)`: writable state that resets or derives from another reactive source.
- `toSignal` / `toObservable`: bridges signals and RxJS.

Signals always have a current value. Observables represent events over time and may not have one.

## Practical example

```ts
@Injectable()
export class CartStore {
  private readonly _items = signal<readonly CartItem[]>([]);

  readonly items = this._items.asReadonly();
  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  add(item: CartItem) {
    this._items.update(items => [...items, item]);
  }
}
```

Use an effect for an external side effect:

```ts
effect(() => localStorage.setItem('theme', this.theme()));
```

Be careful with browser-only APIs during SSR; guard or move them to browser-only execution.

## Common mistakes

- Mutating an array in place: `items().push(x)`.
- Using `effect` for derived state instead of `computed`.
- Creating effects without thinking about lifetime and cleanup.
- Converting every Observable to a signal, even when stream operators are the better model.
- Calling `toSignal()` repeatedly for the same Observable, creating repeated subscriptions.

## Trade-offs

- Signals are simple and fine-grained for synchronous state, but RxJS is stronger for complex async event pipelines.
- A service-based signal store has little boilerplate, but a large team may need stricter event history, devtools, or conventions from a state library.
- Custom equality can reduce updates, but deep comparison may cost more than rendering.

## Likely follow-up questions

**Signal versus `BehaviorSubject`?**  
Both expose current state. A signal is synchronous and integrates directly with Angular dependency tracking. A `BehaviorSubject` is an Observable source and composes with the full RxJS operator model.

**When would you use `effect`?**  
For logging, persistence, imperative charts, or another external system. Not for normal derived state.

**How do signals work with OnPush?**  
When an OnPush template reads a signal, Angular tracks it. Updating that signal marks the relevant view for refresh.

---

# 9. RxJS observables and operators

## Interview-ready answer

> “An Observable is a lazy stream that can emit zero, one, or many values and can be cancelled by unsubscribing. I use RxJS for HTTP composition, route streams, search, websockets, and events over time. I choose flattening operators by cancellation and ordering requirements: `switchMap` cancels the previous inner stream, `concatMap` queues, `mergeMap` runs in parallel, and `exhaustMap` ignores new triggers while one is active.”

## Clear explanation

Useful operator groups:

- Transform: `map`, `scan`.
- Filter/timing: `filter`, `debounceTime`, `distinctUntilChanged`.
- Combine: `combineLatest`, `forkJoin`, `withLatestFrom`.
- Flatten: `switchMap`, `concatMap`, `mergeMap`, `exhaustMap`.
- Error/finalization: `catchError`, `retry`, `finalize`.
- Lifecycle/sharing: `take`, `takeUntilDestroyed`, `shareReplay`.

## Practical example: typeahead search

```ts
results$ = this.searchControl.valueChanges.pipe(
  map(value => value.trim()),
  debounceTime(250),
  distinctUntilChanged(),
  switchMap(query =>
    query ? this.api.search(query).pipe(
      catchError(() => of([]))
    ) : of([])
  ),
);
```

`switchMap` is correct because an old search response should not replace a newer result.

Manual subscription with automatic cleanup:

```ts
events$.pipe(takeUntilDestroyed()).subscribe(event => this.handle(event));
```

## Common mistakes

- Nested subscriptions instead of flattening operators.
- Using `switchMap` for writes that must all complete.
- Subscribing in a service and again in a component, causing duplicate work.
- Putting `catchError` too high and ending a long-lived stream.
- Using `shareReplay(1)` without understanding cache lifetime and ref counting.
- Forgetting cleanup for long-lived manual subscriptions.

## Trade-offs

- RxJS handles complex time and concurrency well, but operator-heavy code has a learning cost.
- Template `AsyncPipe` is simple; imperative subscription is sometimes needed for side effects.
- `shareReplay` prevents duplicate work, but can retain stale values or keep a source alive if configured poorly.

## Likely follow-up questions

**`combineLatest` versus `forkJoin`?**  
`combineLatest` keeps emitting after every source has emitted once. `forkJoin` emits once when all sources complete, so it suits a group of finite HTTP calls.

**Hot versus cold Observable?**  
A cold source creates work per subscriber, like `HttpClient`. A hot source exists independently and subscribers observe shared emissions, like many subjects or browser events.

**Subject versus BehaviorSubject?**  
A `Subject` has no current value. A `BehaviorSubject` requires an initial value and immediately gives the latest value to a new subscriber.

---

# 10. Promises versus Observables

## Interview-ready answer

> “A Promise represents one future result and starts immediately. An Observable can represent zero to many values, is normally lazy, supports cancellation through unsubscription, and has operators for time and concurrency. I use `async`/`await` for simple one-step asynchronous logic and Observables when I need streams, cancellation, retries, or Angular APIs that already return Observables.”

## Clear explanation

A Promise settles once with a value or error. An Observable describes a subscription that may emit several values, error, or complete. Most Angular `HttpClient` Observables are cold: no request is sent until something subscribes. Unsubscribing can cancel the underlying request.

## Practical comparison

```ts
// One result; easy sequential flow
const config = await firstValueFrom(this.http.get<Config>('/api/config'));

// Stream; cancel old requests when the query changes
const results$ = query$.pipe(
  switchMap(query => this.http.get<Result[]>('/api/search', { params: { query } }))
);
```

## Common mistakes

- Saying Promises are cancellable. Standard Promises are not; the underlying operation may support `AbortSignal` separately.
- Converting Observables to Promises too early and losing cancellation or multiple emissions.
- Using `firstValueFrom` on a source that may never emit, leaving the Promise pending.
- Assuming Observables always execute; most need a subscriber.

## Trade-offs

- Promises are easier for simple imperative flow.
- Observables are more expressive for streams but add concepts and operator complexity.
- Converting at a boundary is fine; repeated conversion throughout a feature makes behavior harder to follow.

## Likely follow-up questions

**Why does `HttpClient` return Observables?**  
They are lazy, compose with RxJS, support interception, and unsubscribing can cancel an in-flight request.

**What is the difference between `firstValueFrom` and `lastValueFrom`?**  
The first resolves on the first emission and unsubscribes. The last waits for completion and resolves with the final emission; it is dangerous for streams that do not complete.

---

# 11. Lifecycle hooks and render callbacks

## Interview-ready answer

> “I use lifecycle hooks only when the timing is part of the requirement. `ngOnChanges` reacts to input changes, `ngOnInit` handles initialization after initial inputs, `ngAfterViewInit` is for initialized view children, and `ngOnDestroy` is for cleanup. For DOM work after rendering, I prefer `afterNextRender` or `afterEveryRender`. With signals and `takeUntilDestroyed`, many older hook use cases disappear.”

## Clear explanation

Important order on initial creation:

1. constructor
2. first `ngOnChanges`
3. `ngOnInit`
4. `ngAfterContentInit`
5. `ngAfterViewInit`
6. render callbacks after DOM rendering

The constructor is for JavaScript construction and injected dependencies, not input-dependent work.

## Practical example

```ts
export class ChartPanel {
  chartHost = viewChild.required<ElementRef<HTMLElement>>('chartHost');
  private chart?: Chart;
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.chart = new Chart(this.chartHost().nativeElement);
      this.destroyRef.onDestroy(() => this.chart?.destroy());
    });
  }
}
```

## Common mistakes

- Starting input-dependent work in the constructor.
- Changing already-checked state in `ngAfterViewInit`, causing expression-changed errors.
- Putting expensive logic in `ngDoCheck` or checked hooks.
- Using hooks to synchronize state that should be `computed`.
- Forgetting external listener, timer, or third-party library cleanup.

## Trade-offs

- Hooks give exact framework timing but create temporal coupling.
- Signal derivation is clearer for reactive state, but imperative libraries still need render timing and cleanup.

## Likely follow-up questions

**`ngOnInit` versus constructor?**  
The constructor creates the class. `ngOnInit` runs after Angular has set initial inputs.

**Why use `DestroyRef`?**  
It keeps setup and cleanup close together and is used by helpers such as `takeUntilDestroyed`.

---

# 12. Forms

## Interview-ready answer

> “For enterprise forms I usually use typed reactive forms because the model is explicit, scalable, and easy to test. Template-driven forms are fine for small simple forms. In modern signal-based applications, Signal Forms provide typed signal state and schema validation. Whichever approach I choose, I design validation, server errors, accessibility, submission state, and custom controls together.”

## Clear explanation

Current choices:

- **Typed reactive forms:** mature choice for complex, dynamic, existing enterprise forms.
- **Template-driven forms:** small, simple forms with limited logic.
- **Signal Forms:** modern signal model, type inference, schema validation; a strong choice for new Angular v22+ signal-based work.

For a reusable custom control, implement the expected form-control contract. In reactive forms this commonly means `ControlValueAccessor`; with Signal Forms, use its custom-control APIs.

## Practical example: typed reactive form

```ts
profileForm = this.fb.nonNullable.group({
  name: ['', [Validators.required, Validators.maxLength(80)]],
  email: ['', [Validators.required, Validators.email]],
  direction: this.fb.nonNullable.control<'ltr' | 'rtl'>('ltr'),
});

submit() {
  if (this.profileForm.invalid) {
    this.profileForm.markAllAsTouched();
    return;
  }

  this.api.save(this.profileForm.getRawValue()).subscribe(/* handle states */);
}
```

Accessible template fragment:

```html
<label for="email">Email</label>
<input id="email" type="email" formControlName="email"
       [attr.aria-invalid]="email.invalid && email.touched"
       [attr.aria-describedby]="email.invalid && email.touched ? 'email-error' : null" />
@if (email.invalid && email.touched) {
  <p id="email-error" role="alert">Enter a valid email address.</p>
}
```

## Common mistakes

- Using untyped forms and casting values later.
- Showing errors before the user has interacted or submitted.
- Treating client validation as security; the server must validate again.
- Losing disabled values by using `.value` when `getRawValue()` is intended.
- Subscribing to `valueChanges` without cleanup or debouncing expensive work.
- Writing a custom control without proper touched, disabled, and accessibility behavior.

## Trade-offs

- Reactive forms are explicit and powerful but involve more setup.
- Template-driven forms are concise but harder to scale and test.
- Signal Forms fit signal state naturally, but migration cost and third-party control compatibility must be considered in established applications.

## Likely follow-up questions

**`setValue` versus `patchValue`?**  
`setValue` requires the full control shape. `patchValue` updates only supplied fields. I use `setValue` when shape checking is valuable.

**Sync versus async validators?**  
Sync validators return immediately. Async validators return a Promise or Observable, for example checking username availability. I debounce API checks and handle server validation on submit too.

**How do you model dynamic rows?**  
Use a typed `FormArray`, stable row identity, and a row component when the UI is complex.

---

# 13. Routing, guards, resolvers, and navigation

## Interview-ready answer

> “I define routes as feature boundaries and lazy-load non-critical features. I use functional guards for navigation decisions, resolvers only when data must exist before activation, and route input binding or route signals for route data. A guard improves UX, but it is never security; the server must enforce authorization.”

## Clear explanation

Main guard types:

- `CanActivate`: can enter a route.
- `CanActivateChild`: can enter child routes.
- `CanDeactivate`: can leave, often for unsaved changes.
- `CanMatch`: can this route configuration match; useful for role/feature alternatives.

Return a `UrlTree` or `RedirectCommand` to redirect. Do not return `false` and then call `navigate()` as a side effect.

## Practical example

```ts
export const authGuard: CanActivateFn = (_, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isAuthenticated()
    ? true
    : router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
};

export const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
];
```

## Common mistakes

- Treating guards as authorization security.
- Deeply nesting routes with unclear ownership.
- Loading all page data in a resolver, delaying navigation with no skeleton UI.
- Subscribing manually to route parameters when a reactive binding is simpler.
- Redirecting imperatively from inside a guard.

## Trade-offs

- Resolvers prevent a half-ready screen but delay route activation and can make navigation feel frozen.
- Component loading states show the shell sooner but add UI state.
- `CanMatch` can choose different route configurations, but false means Angular tries other matches rather than simply blocking.

## Likely follow-up questions

**Snapshot versus route stream?**  
Use the snapshot for a value that cannot change while the component instance is reused. Use reactive route values when parameters can change without component recreation.

**How do you handle unsaved changes?**  
A `CanDeactivate` guard asks the component or form-state service whether navigation is safe, then returns a boolean or an async confirmation result.

---

# 14. HTTP, API boundaries, and interceptors

## Interview-ready answer

> “`HttpClient` returns cold Observables. I keep endpoint details in focused API services and map transport DTOs into domain models at the boundary. I use functional interceptors for cross-cutting behavior such as authentication headers, correlation IDs, error normalization, or caching. Requests are immutable, so an interceptor clones a request before changing it.”

## Clear explanation

Functional interceptors have predictable ordering and can use `inject()`. Register them with `provideHttpClient(withInterceptors([...]))`.

An interceptor should be cross-cutting. A specific endpoint’s business error does not belong in a global interceptor.

## Practical example

```ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();

  if (!token || !req.url.startsWith('/api/')) {
    return next(req);
  }

  return next(req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  }));
};

provideHttpClient(withInterceptors([
  correlationIdInterceptor,
  authInterceptor,
  errorLoggingInterceptor,
]));
```

## Common mistakes

- Adding a token to third-party URLs and leaking credentials.
- Retrying unsafe writes automatically.
- Swallowing all errors globally so the feature cannot respond correctly.
- Refresh-token logic that sends several refresh requests concurrently.
- Depending on TypeScript response types as runtime validation.
- Forgetting that every subscription to a cold HTTP Observable can send a request.

## Trade-offs

- Interceptors remove duplication, but too much hidden behavior makes requests difficult to debug.
- Runtime schema validation improves safety at external boundaries, but adds bundle and processing cost.
- Caching improves speed, but invalidation and user-specific data require careful keys and lifetime.

## Likely follow-up questions

**How do you implement token refresh safely?**  
Allow only one refresh operation, queue or share waiting requests, retry them with the new token, prevent the refresh request itself from being intercepted recursively, and log out cleanly on refresh failure.

**Where do you map DTOs?**  
At the data-access boundary so the rest of the feature does not depend on backend naming or nullable transport shapes.

---

# 15. Change detection

## Interview-ready answer

> “Change detection updates views when Angular knows state may have changed. Modern Angular is moving from broad ZoneJS-triggered checks to explicit notifications such as signal updates, input changes, event handlers, `AsyncPipe`, and `markForCheck`. I first model state reactively and profile real bottlenecks; I do not call `detectChanges` as a general fix.”

## Clear explanation

Angular traverses relevant views and evaluates template bindings. A change-detection strategy controls when a subtree is eligible to be checked. Notifications include:

- A signal read by a template changes.
- An input is set.
- A template or host event runs.
- `AsyncPipe` receives a value and marks for check.
- Code calls `markForCheck`.

Avoid side effects while bindings are being checked.

## Practical example

```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>{{ status() }}</p>`,
})
export class UploadStatus {
  status = signal('Waiting');

  complete() {
    this.status.set('Complete');
  }
}
```

## Common mistakes

- Calling functions with expensive work from a template.
- Mutating shared objects and expecting reference-based checks to notice.
- Calling `detectChanges()` until an error disappears without finding the state-flow problem.
- Doing state changes in checked lifecycle hooks.
- Assuming “fewer checks” always means a faster app; DOM work and JavaScript may be the real bottleneck.

## Trade-offs

- Explicit reactive notifications improve predictability and performance, but integrations must notify Angular correctly.
- Manual change-detector APIs offer control but make timing and ownership harder to reason about.

## Likely follow-up questions

**`markForCheck` versus `detectChanges`?**  
`markForCheck` schedules the view to participate in a normal future check. `detectChanges` immediately checks a view subtree. I prefer normal scheduling unless I have a measured, local reason.

**What causes `ExpressionChangedAfterItHasBeenCheckedError`?**  
State changed after Angular checked a binding in the same verification cycle. The fix is usually to correct lifecycle timing or state flow, not hide the error with a timeout.

---

# 16. OnPush

## Interview-ready answer

> “OnPush lets Angular skip a component subtree when it has no relevant notification. It works best with immutable inputs, signals, `AsyncPipe`, and event-driven updates. It is both a performance tool and a design signal: a component should have clear inputs and reactive state. It does not mean Angular checks a component only once.”

## Clear explanation

With OnPush, Angular can skip a subtree when it has no new input or other notification. An input reference change, a handled event, an updated signal consumed by the template, `AsyncPipe`, or an explicit mark can make the view eligible for checking.

## Practical example

```ts
@Component({
  selector: 'app-order-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `{{ order().number }} — {{ order().total | currency }}`,
  imports: [CurrencyPipe],
})
export class OrderRow {
  order = input.required<Order>();
}

// Good immutable update
this.orders.update(items =>
  items.map(item => item.id === updated.id ? updated : item)
);
```

## Common mistakes

- Mutating an input object in place.
- Manually subscribing and assigning a plain field without a notification.
- Believing events inside an OnPush component do not trigger a refresh.
- Applying OnPush everywhere without profiling or fixing unstable template work.

## Trade-offs

- OnPush can skip work and encourages clean state flow.
- Code that depends on mutation or hidden side effects needs refactoring.
- In a zoneless app, reactive notification correctness matters even with the default strategy; OnPush is helpful but not mandatory.

## Likely follow-up questions

**When is an OnPush component checked?**  
When it receives a relevant input, handles an event, a consumed signal changes, `AsyncPipe` marks it, it is explicitly marked, or another relevant framework notification occurs.

**Does projected content follow the child’s OnPush boundary?**  
The projected nodes belong to the parent’s view, so the child’s OnPush strategy does not simply own or skip that parent content.

---

# 17. Zones and zoneless Angular

## Interview-ready answer

> “ZoneJS patches async browser APIs so Angular can run change detection after many asynchronous tasks, even if it does not know whether state changed. Zoneless Angular removes that patching and relies on explicit Angular notifications such as signals, inputs, events, `AsyncPipe`, and `markForCheck`. Zoneless is the default in Angular v21+, so I write components that update reactive state instead of relying on an unrelated timer or task to refresh the UI.”

## Clear explanation

Benefits of zoneless operation include less patching, smaller startup overhead, clearer stack traces, and fewer unnecessary global synchronization passes.

Migration checklist:

- Prefer signals for template state.
- Use `AsyncPipe` or `toSignal` for Observables read by templates.
- Use `markForCheck` when integrating an imperative callback.
- Remove dependencies on `NgZone.onStable`, `onMicrotaskEmpty`, and similar Zone-specific behavior.
- Test form state and third-party libraries carefully.
- Remove ZoneJS from build and test polyfills after compatibility is confirmed.

## Practical example

```ts
// Zoneless-friendly callback integration
export class NetworkPanel {
  online = signal(navigator.onLine);

  constructor() {
    const destroyRef = inject(DestroyRef);
    const handler = () => this.online.set(navigator.onLine);

    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);
    destroyRef.onDestroy(() => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    });
  }
}
```

## Common mistakes

- Removing ZoneJS before checking third-party and test assumptions.
- Updating a plain field from an external callback with no notification.
- Assuming `NgZone.run()` is the main zoneless migration strategy.
- Depending on Zone stability events for application logic.
- Forgetting that some reactive-form structural updates may need a bridge to a template notification.

## Trade-offs

- Zoneless improves predictability and can improve performance, but legacy libraries may rely on patched async behavior.
- ZoneJS makes older code “just refresh,” but can hide the real update source and trigger more checks than necessary.

## Likely follow-up questions

**Is OnPush required for zoneless?**  
No. It is recommended because it encourages compatible notification patterns, but default-strategy components can work if updates notify Angular.

**How do you update a view from a third-party callback?**  
Set a signal consumed by the template, use an Observable with `AsyncPipe`, or call `markForCheck` after updating state.

---

# 18. State management

## Interview-ready answer

> “I choose state management based on scope and complexity. Local UI state stays in the component. Shared feature state can live in a route-scoped service with private writable signals and public read-only signals. I use a full store library when the team needs strict event flow, entity tools, effects, devtools, or coordination across many features. The important points are single ownership, derived state instead of duplicated state, immutable updates, and clear async boundaries.”

## Clear explanation

State levels:

1. **Local component:** selected tab, open state, draft UI value.
2. **Feature:** cart, search results, wizard state, current order editing.
3. **Application:** authenticated user, global preferences, feature flags.
4. **Server cache:** API data with loading, error, freshness, and invalidation.
5. **URL state:** filters, page, sort, and shareable navigation state.

Do not copy the same value into component state, service state, store state, and URL unless each copy has a clear synchronization contract.

## Practical example

```ts
@Injectable()
export class OrdersStore {
  private api = inject(OrdersApi);
  private _orders = signal<readonly Order[]>([]);
  private _status = signal<'idle' | 'loading' | 'error'>('idle');

  orders = this._orders.asReadonly();
  status = this._status.asReadonly();
  openOrders = computed(() => this.orders().filter(x => x.status === 'open'));

  load() {
    this._status.set('loading');
    this.api.list().pipe(
      take(1),
      finalize(() => {
        if (this._status() === 'loading') this._status.set('idle');
      }),
    ).subscribe({
      next: orders => this._orders.set(orders),
      error: () => this._status.set('error'),
    });
  }
}
```

In production, model success/error status carefully so `finalize` cannot erase an error state.

## Common mistakes

- Putting all state in one global store.
- Storing derived values instead of computing them.
- Exposing writable signals or subjects publicly.
- Ignoring stale requests and race conditions.
- Keeping shareable filters only in memory instead of the URL.
- Treating a state library as architecture by itself.

## Trade-offs

- A signal service is simple and Angular-native, but relies on team conventions.
- A formal store adds predictable events and tooling, but also boilerplate and indirection.
- URL state improves sharing and browser navigation, but serialization and backward compatibility need care.

## Likely follow-up questions

**When would you choose NgRx or another store?**  
When state changes are complex, cross-feature, audit-sensitive, or handled by a large team that benefits from consistent events, effects, selectors, and devtools.

**How do you avoid race conditions?**  
Choose the correct concurrency behavior: cancel stale reads with `switchMap`, queue required writes with `concatMap`, or identify responses by request/version.

---

# 19. Content projection

## Interview-ready answer

> “Content projection lets a component define layout while the parent supplies content through `ng-content`. I use it for design-system containers such as cards, dialogs, and field wrappers. I use selectors for named slots and keep the slot contract small. Projected content belongs to the parent’s view, which matters for styling, queries, and change detection.”

## Clear explanation

The child owns the container template, while the parent owns the projected nodes and their bindings. A plain `ng-content` is a default slot; `select` creates named slots based on CSS selectors.

## Practical example

```ts
@Component({
  selector: 'app-card',
  template: `
    <article class="card">
      <header><ng-content select="[card-title]" /></header>
      <div><ng-content /></div>
      <footer><ng-content select="[card-actions]" /></footer>
    </article>
  `,
})
export class Card {}
```

```html
<app-card>
  <h2 card-title>Account</h2>
  <p>Profile details</p>
  <button card-actions>Save</button>
</app-card>
```

## Common mistakes

- Putting `ng-content` inside `@if`; projected nodes are still created.
- Creating many fragile slot selectors.
- Expecting component-scoped styles to automatically style arbitrary projected content.
- Using projection when a typed input or `TemplateRef` would make the contract clearer.

## Trade-offs

- Projection is flexible and keeps semantic markup with the consumer.
- Inputs give stronger data contracts but less markup freedom.
- `TemplateRef` supports conditional or repeated rendering but is more complex.

## Likely follow-up questions

**Content projection versus an input?**  
Use projection when callers need to provide markup and behavior. Use inputs when the child should own rendering from structured data.

**Can `ng-content` be added dynamically?**  
No. Angular processes projection placeholders at compile time. Use template fragments or `TemplateRef` for dynamic rendering patterns.

---

# 20. View queries and content queries

## Interview-ready answer

> “A view query reads something created by the component’s own template. A content query reads something projected by the parent. Modern signal queries such as `viewChild()` and `contentChildren()` expose reactive results. I use queries for collaboration between UI pieces, not as a shortcut to tightly control child internals.”

## Clear explanation

Queries return component/directive instances, template references, or elements that match the query. View queries observe the component’s own view; content queries observe the projection boundary. Signal queries update as matching content changes.

## Practical example

```ts
@Component({
  selector: 'app-tabs',
  template: `<div role="tablist"><ng-content /></div>`,
})
export class Tabs {
  tabs = contentChildren(Tab);
  selected = computed(() => this.tabs().find(tab => tab.active()));
}

@Component({
  template: `<input #searchBox type="search" />`,
})
export class SearchPage {
  searchBox = viewChild.required<ElementRef<HTMLInputElement>>('searchBox');
}
```

## Common mistakes

- Confusing projected content with the component’s own view.
- Reading a required query before it is available.
- Using `ElementRef.nativeElement` for normal binding that belongs in the template.
- Calling many imperative methods on children and creating tight coupling.
- Keeping legacy `QueryList` subscriptions without cleanup.

## Trade-offs

- Queries are useful for compound components such as tabs and menus.
- Inputs/outputs are more explicit and testable for ordinary communication.
- Signal queries compose naturally with `computed`, but migration from decorator queries needs lifecycle review.

## Likely follow-up questions

**`viewChild` versus `contentChild`?**  
`viewChild` searches the component’s template. `contentChild` searches content supplied inside the component’s host element.

**When is a query result available?**  
Signal queries update as the view/content changes. Required queries throw if read when no match exists, so read them only when the rendering contract guarantees a result.

---

# 21. Lazy loading and deferrable views

## Interview-ready answer

> “I lazy-load route features with `loadChildren` or `loadComponent` so users do not download every feature at startup. Inside a page, I use `@defer` for heavy UI that is below the fold or triggered later. I choose boundaries from user journeys and bundle measurements, not simply one chunk per component.”

## Clear explanation

Lazy route APIs create chunks around navigation boundaries. `@defer` creates a chunk around a template dependency and loads it on triggers such as viewport, interaction, idle, or a condition. Placeholder, loading, and error blocks keep the experience understandable.

## Practical example

```ts
export const routes: Routes = [
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.routes')
      .then(m => m.REPORTS_ROUTES),
  },
];
```

```html
@defer (on viewport) {
  <app-heavy-chart [data]="chartData()" />
} @placeholder {
  <div class="chart-skeleton" aria-hidden="true"></div>
} @loading (minimum 200ms) {
  <p>Loading chart…</p>
} @error {
  <p>Chart could not be loaded.</p>
}
```

## Common mistakes

- Lazy-loading tiny pieces and creating too many network chunks.
- Putting shared code in a path that duplicates it across bundles.
- Missing loading, error, and retry UX.
- Deferring above-the-fold content and hurting LCP.
- Using `@defer` without testing SSR/hydration and accessibility behavior.

## Trade-offs

- Lazy loading improves initial load but adds later network latency.
- Prefetching improves future navigation but uses bandwidth that may not be needed.
- Larger chunks reduce request overhead; smaller chunks reduce unused code. Measure on realistic devices and networks.

## Likely follow-up questions

**Route lazy loading versus `@defer`?**  
Route lazy loading splits navigation features. `@defer` splits a section within a rendered page.

**What would you preload?**  
Likely next routes or critical post-login features, based on product analytics and network conditions—not every lazy route automatically.

---

# 22. SSR, prerendering, and hydration

## Interview-ready answer

> “Server-side rendering sends useful HTML for the first request, which can improve first content and discoverability. Hydration reuses that server DOM on the client instead of destroying and rebuilding it. I keep server and browser output deterministic, avoid direct browser globals during server rendering, use transfer caching for suitable GET data, and test hydration mismatches and application stability.”

## Clear explanation

- **CSR:** browser creates the page after JavaScript loads.
- **SSR:** server renders per request.
- **Prerender/SSG:** HTML is generated at build time for known routes.
- **Hydration:** client Angular attaches behavior to existing server-rendered DOM.

SSR is not automatically the best choice for every authenticated enterprise screen. It adds server cost and rendering constraints. Public landing pages, product pages, and content routes often benefit more.

## Practical example

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
};
```

Browser-specific behavior:

```ts
private platformId = inject(PLATFORM_ID);

readPreference() {
  return isPlatformBrowser(this.platformId)
    ? localStorage.getItem('density')
    : null;
}
```

Prefer platform abstractions or render callbacks when possible instead of spreading browser checks everywhere.

## Common mistakes

- Accessing `window`, `document`, `localStorage`, or layout APIs during server rendering.
- Producing different HTML on server and client due to random values, time, locale, or data.
- Directly manipulating DOM before hydration.
- Using `ngSkipHydration` as a broad fix instead of finding the mismatch.
- Caching personalized server HTML across users.
- Starting never-ending tasks that prevent server stability.

## Trade-offs

- SSR can improve initial content and SEO, but adds infrastructure, server load, and debugging complexity.
- Hydration prevents flicker and DOM recreation, but requires deterministic markup.
- Prerendering is fast and cheap at runtime, but only fits routes/data known at build time or acceptable regeneration intervals.

## Likely follow-up questions

**What causes a hydration mismatch?**  
Different server/client DOM: invalid HTML correction, browser-only conditions, random IDs, locale/time differences, or direct DOM manipulation.

**What is event replay?**  
It captures supported user events that occur before hydration finishes and replays them after the page becomes interactive.

---

# 23. Testing

## Interview-ready answer

> “I test behavior at the cheapest reliable level. Pure functions and stores get focused unit tests; components get DOM tests for inputs, outputs, accessibility, and user interaction; HTTP services use the Angular HTTP testing backend; routing is tested with the router testing harness; and a small number of end-to-end tests cover critical journeys. New Angular CLI projects use Vitest, while older projects may still use Karma or Jest.”

## Clear explanation

A practical test pyramid:

- Many fast tests for functions, validators, pipes, services, and state transitions.
- Component integration tests for rendered behavior.
- Fewer end-to-end tests for login, checkout, permissions, and critical workflows.

Avoid tests that repeat Angular’s own behavior or depend on private fields.

## Practical example

```ts
describe('Counter', () => {
  it('increments when the button is clicked', async () => {
    const fixture = TestBed.createComponent(Counter);
    await fixture.whenStable();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    await fixture.whenStable();

    expect(button.textContent).toContain('1');
  });
});
```

HTTP test idea:

```ts
const req = httpTesting.expectOne('/api/users/42');
expect(req.request.method).toBe('GET');
req.flush({ id: '42', name: 'Sam' });
httpTesting.verify();
```

## Common mistakes

- Testing private methods instead of visible behavior.
- Over-mocking until the test no longer resembles the application.
- Using real timers or network calls in unit tests.
- Calling `detectChanges()` many times without understanding stabilization.
- Only writing happy-path tests.
- Ignoring keyboard, focus, RTL, and accessibility in component tests.

## Trade-offs

- Isolated tests are fast and clear but miss template/integration problems.
- Component tests give confidence at moderate cost.
- E2E tests give realistic confidence but are slower and can be flaky if selectors and data are unstable.

## Likely follow-up questions

**What do you mock?**  
External boundaries or expensive nondeterminism: network, clock, storage, analytics, and sometimes child systems. I prefer real simple collaborators.

**How do you test OnPush or zoneless code?**  
Update state through the public API or user event and wait for Angular stabilization. A test that needs arbitrary manual change detection can reveal a missing reactive notification.

**How do you test accessibility?**  
Check semantic roles/names, keyboard behavior, focus movement, error associations, and automated rules, then include manual screen-reader testing for important flows.

---

# 24. Accessibility, responsive design, and RTL/LTR

## Interview-ready answer

> “I start with semantic HTML because it gives keyboard and screen-reader behavior for free. I make every interaction keyboard-accessible, preserve visible focus, connect labels and errors, and manage focus for dialogs and route changes. I use ARIA only when native HTML is not enough. For RTL, I use CSS logical properties, test direction changes, and avoid assuming that visual left and right mean previous and next.”

## Clear explanation

Core checks:

- Correct heading and landmark structure.
- Accessible names for controls.
- Keyboard access and logical focus order.
- Visible focus and sufficient contrast.
- Errors connected with `aria-describedby` and announced when appropriate.
- Motion respects user preferences.
- Zoom/reflow and touch target size.
- Direction-aware icons, layout, and text.

## Practical example

```html
<button type="button"
        [attr.aria-expanded]="menuOpen()"
        aria-controls="account-menu"
        (click)="menuOpen.update(v => !v)">
  Account
</button>

@if (menuOpen()) {
  <nav id="account-menu" aria-label="Account options">...</nav>
}
```

```css
.panel {
  margin-inline: 1rem;
  padding-inline-start: 1.5rem;
  border-inline-start: 4px solid var(--accent);
}
```

## Common mistakes

- Using clickable `<div>` elements instead of buttons or links.
- Removing focus outlines without a replacement.
- Adding ARIA that conflicts with native semantics.
- Using placeholder text as the only label.
- Reversing every icon in RTL; some icons such as play or check do not mirror.
- Testing only with a mouse and one screen width.

## Trade-offs

- A custom control may match a design exactly but requires significant keyboard and screen-reader engineering.
- Native controls have strong behavior but limited styling in some cases.
- Live regions help announce updates, but too many announcements overwhelm users.

## Likely follow-up questions

**How do you make a dialog accessible?**  
Give it a label, trap focus while open, move focus into it, support Escape where appropriate, hide/inert the background, and restore focus to the trigger when closed.

**How do you validate RTL?**  
Run component stories and key journeys in both directions, use logical CSS, inspect mixed-direction text, and verify keyboard order and directional icons.

---

# 25. Security

## Interview-ready answer

> “Angular treats template-bound values as untrusted and sanitizes relevant contexts, but Angular does not make an application secure by itself. I avoid dynamic template construction and direct DOM injection, audit every `bypassSecurityTrust...` call, use AOT, CSP and Trusted Types where possible, and enforce authentication, authorization, validation, and output encoding on the server. Route guards only improve client UX.”

## Clear explanation

Main frontend risks:

- XSS from unsafe HTML, URLs, DOM APIs, or third-party libraries.
- CSRF when cookie authentication is used without correct server/client protection.
- Token leakage through storage, logs, URLs, or third-party requests.
- Supply-chain vulnerabilities.
- Exposing secrets in browser bundles.
- SSR request/header trust mistakes.

Angular sanitizes bindings by security context, but values explicitly marked trusted bypass that protection.

## Practical example

```html
<!-- Angular sanitizes HTML in this binding -->
<section [innerHTML]="articleHtml"></section>
```

For rich user content, also sanitize with a well-reviewed policy at the server/content boundary. Do not call `bypassSecurityTrustHtml` merely to remove an Angular warning.

## Common mistakes

- Storing a secret API key in `environment.ts`.
- Treating client-side role checks as authorization.
- Using `bypassSecurityTrustHtml` on user content.
- Rendering user-built Angular templates.
- Logging access tokens or personal data.
- Adding authorization headers to every URL.
- Trusting forwarded SSR headers without a trusted proxy configuration.

## Trade-offs

- Strong CSP and Trusted Types greatly reduce DOM XSS risk, but third-party scripts and legacy code may need migration.
- Cookie auth can reduce JavaScript token exposure but needs CSRF protection and correct SameSite settings.
- Runtime validation improves boundary safety but adds code and maintenance.

## Likely follow-up questions

**How does Angular prevent XSS?**  
It treats template values as untrusted and escapes or sanitizes based on context. Templates themselves are trusted executable code, so never build templates from user input.

**Is localStorage safe for tokens?**  
Any JavaScript running on the origin can read it, so XSS can steal the token. The auth design should consider threat model, backend capabilities, cookie controls, token lifetime, and CSP—not only convenience.

---

# 26. Performance

## Interview-ready answer

> “I measure before optimizing. For slow initial load, I inspect bundle composition, lazy-load routes, defer non-critical UI, optimize images and fonts, and consider SSR or prerendering. For slow interaction, I profile the main thread and Angular change detection, remove heavy template work, use stable list tracking, signals or OnPush where useful, and virtualize large lists. I confirm the result with real-user and lab metrics.”

## Clear explanation

Performance areas:

- **Network:** bundle size, chunks, caching, compression, API waterfalls.
- **Rendering:** LCP, layout shift, image dimensions, hydration.
- **Runtime:** long tasks, repeated calculations, change detection, memory leaks.
- **Data:** over-fetching, duplicate requests, large DOM/list size.
- **User perception:** skeletons, optimistic UI, progress, prioritization.

Useful Angular tools include `@defer`, route lazy loading, `NgOptimizedImage`, zoneless change detection, signals, OnPush, and server rendering where appropriate.

## Practical example

```html
<img ngSrc="/assets/hero.webp"
     width="1200" height="600"
     priority
     alt="Team reviewing a dashboard" />

@for (row of visibleRows(); track row.id) {
  <app-row [row]="row" />
}
```

## Common mistakes

- Optimizing without a trace, metric, or user impact.
- Lazy-loading everything and creating request waterfalls.
- Using memoization for cheap calculations.
- Keeping thousands of DOM nodes instead of virtualizing.
- Forgetting image dimensions and causing layout shift.
- Measuring only on a fast developer laptop.
- Using index tracking for a changing list.

## Trade-offs

- Caching improves latency but creates invalidation and memory concerns.
- Virtualization handles large lists but complicates variable height, focus, print, and screen-reader behavior.
- SSR can improve first content but costs server resources and complexity.
- Optimistic updates feel fast but require rollback and conflict handling.

## Likely follow-up questions

**How would you diagnose a slow page?**  
Reproduce on a realistic device/network, capture a performance trace, separate network from scripting/rendering, inspect Angular and browser flame charts, form a hypothesis, change one thing, and compare before/after metrics.

**Which metrics matter?**  
Core Web Vitals for public experience, plus product-specific measures such as route-ready time, input response, task completion time, API latency, error rate, and memory growth.

---

# 27. Migration and legacy Angular

## Interview-ready answer

> “I migrate Angular incrementally. First I upgrade supported versions, make the build and tests reliable, and establish performance and error baselines. Then I use official schematics for standalone components, built-in control flow, signal inputs, `inject`, and lazy routes where they add value. I keep behavior changes separate from mechanical migration, use feature flags for risky flows, and remove old patterns only after production evidence is stable.”

## Clear explanation

Legacy patterns you may encounter:

- NgModule bootstrapping and feature modules.
- `*ngIf`, `*ngFor`, and `*ngSwitch`.
- decorator `@Input`, `@Output`, `@ViewChild`, and `@ContentChild`.
- class-based guards and interceptors.
- constructor injection.
- ZoneJS-dependent plain-field updates.
- Karma/Jasmine test suites.
- RxJS subscription cleanup with a manual `destroy$` subject.
- View Engine-era library or dynamic-component patterns.

These are not all “bad.” The question is whether migration improves maintainability, performance, safety, or developer speed enough to justify the risk.

## Practical migration sequence

```text
1. Inventory versions, libraries, build plugins, tests, and browser support.
2. Upgrade one supported Angular major at a time with `ng update`.
3. Fix deprecated APIs and third-party incompatibilities.
4. Stabilize tests, telemetry, and performance budgets.
5. Convert leaf features to standalone.
6. Adopt built-in control flow and lazy routes mechanically.
7. Introduce signals at clear state boundaries; do not mix models randomly.
8. Make components zoneless-compatible and test third-party integrations.
9. Remove ZoneJS only when the application is ready.
10. Clean obsolete adapters after production validation.
```

## Common mistakes

- Combining framework upgrade, redesign, state rewrite, and test migration in one release.
- Migrating only syntax without understanding provider scope or behavior.
- Replacing working RxJS pipelines with signals just because signals are newer.
- Removing ZoneJS before external callbacks and form behavior are ready.
- Upgrading without checking library peer dependencies and maintenance status.
- Letting two patterns coexist indefinitely with no migration rule.

## Trade-offs

- A big-bang rewrite offers a clean target but has high delivery and parity risk.
- Incremental migration keeps shipping and allows rollback, but temporarily creates mixed patterns.
- Keeping legacy code avoids immediate risk, but dependency and hiring costs grow over time.

## Likely follow-up questions

**Would you rewrite a large Angular app?**  
Usually no. I would isolate high-change areas, migrate routes or vertical slices, and measure. A rewrite is justified only when the existing architecture blocks business goals and incremental paths have been tested and rejected.

**How do you migrate from NgModules to standalone?**  
Start with leaf declarations, use the official standalone schematic, move providers carefully to application/route/component scope, convert bootstrap last, and test lazy boundaries and singleton behavior.

---

# Senior architecture scenarios

## Scenario 1: Design a large multi-team enterprise frontend

**Strong answer**

> “I would split by business domains with clear ownership and public APIs. The shell owns global navigation, authentication integration, error handling, and top-level routing. Each domain owns its routes, data access, state, and pages. A governed design system owns accessible primitives, tokens, themes, RTL behavior, and documentation. I would enforce dependency directions in tooling and use route-level lazy loading. I would start as a modular monolith unless independent deployment is a proven need.”

Discuss:

- Release ownership and dependency rules.
- Shared contract versioning.
- Observability and error boundaries.
- Feature flags and rollback.
- Why micro-frontends add duplicated runtime, consistency, routing, and operational costs.

## Scenario 2: A dashboard is slow after adding many widgets

**Strong answer**

> “I would capture a trace before changing code. I would check bundle waterfalls, duplicate API calls, long tasks, widget rendering, list size, and change-detection frequency. Then I might defer below-the-fold widgets, batch or cache data, virtualize large tables, move heavy calculations out of templates, and use signals or OnPush for clear update boundaries. I would compare LCP, interaction latency, memory, and widget-ready time before and after.”

Avoid saying: “I would add OnPush everywhere.” That is a possible tool, not a diagnosis.

## Scenario 3: Shared component library must support brands, RTL, and accessibility

**Strong answer**

> “I would build on semantic HTML and accessible interaction patterns, expose design tokens through CSS custom properties, and use logical CSS properties for direction. Components would have small typed APIs and composition slots. We would test keyboard, screen readers, high contrast, zoom, RTL/LTR, themes, and supported browsers in CI and manual release checks. Breaking changes would follow a versioned migration path.”

Discuss escape hatches carefully: too few block product teams; too many destroy consistency.

## Scenario 4: Authentication and token refresh

**Strong answer**

> “The backend remains the authority. The frontend auth service exposes session state, guards improve navigation UX, and an interceptor adds credentials only to trusted API origins. Refresh is single-flight so concurrent 401 responses do not create several refresh requests. Waiting requests resume once with the new credential; refresh failure clears session state and redirects safely. I avoid logging credentials and review XSS, CSRF, cookie, CSP, and token-lifetime trade-offs with the backend team.”

## Scenario 5: Complex offline-capable workflow

**Strong answer**

> “I would separate server state, local drafts, and sync status. Commands get stable client IDs and an outbox. The UI can update optimistically, but each operation needs pending, failed, conflict, and retry states. Sync must be idempotent. Conflict policy depends on the domain: last-write-wins may be unacceptable for financial or regulated data. I would make offline limitations visible and monitor queue age and failure rate.”

## Scenario 6: Migrate an Angular 14 enterprise app

**Strong answer**

> “I would inventory dependencies and production risks, upgrade supported majors step by step with official migrations, and keep each change deployable. I would stabilize tests and telemetry before architectural changes. Then I would migrate low-risk features to standalone and built-in control flow, improve lazy boundaries, introduce signals only where they simplify state, and prepare for zoneless behavior. I would not mix a framework upgrade with a full design-system and state rewrite.”

## Scenario 7: Signals or RxJS for a search page

**Strong answer**

> “I would keep the input and view state as signals if that is natural, but use RxJS for the debounced cancellable request pipeline. `toObservable(query)` plus `debounceTime`, `distinctUntilChanged`, and `switchMap` expresses time and cancellation clearly. I can expose the result back as a signal with `toSignal` or a resource. I choose each tool for its strength rather than forcing one reactive model everywhere.”

## Scenario 8: Production-only memory leak

**Strong answer**

> “I would reproduce a repeated navigation or interaction path and compare heap snapshots. I would look for retained components, subscriptions, event listeners, timers, observers, overlays, and caches. Angular-managed template subscriptions are normally safe, while manual integrations need cleanup. I would fix ownership with `takeUntilDestroyed`, `DestroyRef`, or explicit third-party teardown, then add a regression test or monitoring signal.”

## Scenario 9: SSR page has hydration errors

**Strong answer**

> “I would inspect the first mismatch and compare server HTML with the client’s expected DOM. Common causes are invalid HTML, random or time-based values, locale differences, browser-only conditions, and direct DOM changes. I would make rendering deterministic and delay imperative DOM work until after rendering. I would use skip-hydration only as a narrow temporary boundary for a third-party widget.”

## Scenario 10: State library decision

**Strong answer**

> “I would list the actual problems: number of writers, cross-route lifetime, async workflows, entity volume, debugging needs, team size, and audit requirements. Local signals or a feature service may be enough. A formal store is valuable when consistent events, effects, selectors, entity tools, and devtools reduce team risk. I would test the decision on one representative feature and define conventions before broad adoption.”

---

# Rapid-review cheat sheet

## Say these in one sentence

| Topic | Fast answer |
|---|---|
| Standalone | Components import their own template dependencies; prefer standalone and `bootstrapApplication` for new code. |
| Signal | A synchronous reactive value read by calling it; use `computed` for derived state. |
| Observable | A lazy, cancellable stream of zero to many values. |
| Promise | One eager future result; good for simple sequential async flow. |
| OnPush | Skips a subtree without relevant notifications; works best with immutable inputs and reactive state. |
| Zoneless | Angular refreshes from explicit notifications instead of ZoneJS-patched async tasks. |
| DI | Classes request dependencies by tokens; provider location controls scope and lifetime. |
| Guard | Controls navigation UX; never replaces server authorization. |
| Interceptor | Cross-cutting HTTP middleware; functional interceptors are preferred. |
| Resolver | Loads required data before route activation, at the cost of delayed navigation. |
| Projection | Parent supplies markup to a child’s `ng-content` slots. |
| View query | Finds something in the component’s own template. |
| Content query | Finds something projected by the parent. |
| SSR | Server creates initial HTML per request. |
| Hydration | Client reuses server-rendered DOM and attaches behavior. |
| `@defer` | Lazily loads a view fragment based on a trigger. |
| Pure pipe | Runs when primitive values or object references change; should be deterministic. |

## RxJS operator decision table

| Need | Operator | Memory phrase |
|---|---|---|
| Latest request wins | `switchMap` | Cancel old |
| Preserve order | `concatMap` | Queue |
| Parallel work | `mergeMap` | Merge |
| Ignore repeated submit | `exhaustMap` | Busy, ignore |
| Wait for all finite calls | `forkJoin` | Complete together |
| React to latest combined state | `combineLatest` | Latest of each |
| Avoid duplicate consecutive values | `distinctUntilChanged` | Same? skip |
| Cleanup with component | `takeUntilDestroyed` | Destroy-safe |

## Change-detection reminders

- Prefer reactive state over manual `detectChanges()`.
- Signals read in templates notify Angular when updated.
- `AsyncPipe` subscribes, cleans up, and marks for check.
- Immutable references make OnPush behavior clear.
- Stable `track` keys preserve list DOM and component state.
- Profile before optimizing.

## Security reminders

- Browser code contains no secrets.
- Client guards are not authorization.
- Never build templates from user input.
- Audit every sanitizer bypass.
- Restrict auth headers to trusted origins.
- Server validates every request.
- Use CSP and Trusted Types where possible.

## Accessibility reminders

- Native element first.
- Accessible name for every control.
- Keyboard and focus behavior.
- Labels and errors connected.
- Visible focus and sufficient contrast.
- Logical CSS and RTL tests.
- Automated checks plus manual assistive-technology testing.

## Performance reminders

- Measure user impact first.
- Split routes and defer non-critical UI.
- Optimize images and prevent layout shift.
- Avoid heavy template work.
- Virtualize very large lists.
- Watch duplicate requests and memory retention.
- Validate on realistic devices and networks.

---

# Practical 4-week study plan

Assume 60–90 minutes on weekdays and one 2–3 hour practice session each weekend.

## Week 1: Core Angular and spoken answers

**Day 1 — architecture and standalone**

- Read topics 1–2.
- Sketch one enterprise application you built as feature boundaries.
- Practice a 90-second architecture answer.
- Build a small standalone app shell with lazy routes.

**Day 2 — components, templates, binding**

- Read topics 3–4.
- Build a list with `@if`, `@for`, stable tracking, inputs, outputs, and `model()`.
- Explain property versus attribute binding aloud.

**Day 3 — directives, pipes, DI**

- Read topics 5–7.
- Create one directive, one pure pipe, and one `InjectionToken`.
- Practice provider-scope examples: root, route, component.

**Day 4 — signals**

- Read topic 8.
- Build a cart store with private state, read-only signals, and computed totals.
- Explain why an effect is not derived state.

**Day 5 — review**

- Answer every follow-up from topics 1–8 without notes.
- Record yourself. Remove long introductions and jargon.
- Prepare two real stories: reusable component and production debugging.

**Weekend practical**

Build a product list with filters in the URL, a signal-based view model, an accessible empty/loading/error state, and a reusable card.

## Week 2: Async work and application flow

**Day 6 — RxJS**

- Read topic 9.
- Implement a typeahead using `switchMap`.
- Write one example each for `concatMap`, `mergeMap`, and `exhaustMap`.

**Day 7 — Promises and lifecycle**

- Read topics 10–11.
- Explain Promise versus Observable in 45 seconds.
- Integrate a small imperative widget with render timing and cleanup.

**Day 8 — forms**

- Read topic 12.
- Build a typed reactive form with cross-field and server errors.
- Test keyboard, labels, error association, submit state, and focus on the first error.

**Day 9 — routing**

- Read topic 13.
- Add lazy routes, an auth guard, and unsaved-changes guard.
- Explain why guards are not security.

**Day 10 — HTTP**

- Read topic 14.
- Add a functional interceptor and API/DTO mapping layer.
- Explain safe refresh-token concurrency on a whiteboard.

**Weekend practical**

Build an order-edit route with a typed form, resolver or loading-state decision, API errors, cancel-safe reads, ordered writes, and route protection.

## Week 3: Rendering, state, SSR, and quality

**Day 11 — change detection, OnPush, zoneless**

- Read topics 15–17.
- Find one plain async field update and make it zoneless-friendly.
- Explain `markForCheck` versus `detectChanges`.

**Day 12 — state management**

- Read topic 18.
- Decide which state belongs in component, URL, feature store, and server cache.
- Compare signal service versus formal store for one real project.

**Day 13 — projection and queries**

- Read topics 19–20.
- Build accessible tabs or a card with slots.
- Explain view versus content in one minute.

**Day 14 — lazy loading, SSR, hydration**

- Read topics 21–22.
- Add `@defer` with all UI states.
- List five sources of hydration mismatch.

**Day 15 — testing**

- Read topic 23.
- Test a store, component interaction, HTTP service, and route.
- Review tests for implementation coupling and unnecessary mocks.

**Weekend practical**

Profile the application. Produce a short report with the trace, hypothesis, change, and before/after result. Add one accessibility test and one failure-path test.

## Week 4: Senior interview practice

**Day 16 — accessibility and RTL**

- Read topic 24.
- Test a complete flow by keyboard in LTR and RTL.
- Prepare one story about accessibility or design-system quality.

**Day 17 — security**

- Read topic 25.
- Threat-model login, rich text, API tokens, and an admin route.
- Practice explaining XSS, CSRF, guards, and sanitizer bypasses.

**Day 18 — performance**

- Read topic 26.
- Prepare a production performance story with numbers.
- Practice diagnosing rather than naming random optimizations.

**Day 19 — migration**

- Read topic 27.
- Create an incremental migration plan for an Angular 14 application.
- Explain what you would not migrate and why.

**Day 20 — scenario rehearsal**

- Answer all 10 senior scenarios.
- Keep each initial answer under two minutes.
- Let the interviewer pull detail through follow-ups.

**Final weekend mock interview**

1. 10 minutes: introduction and project overview.
2. 30 minutes: Angular fundamentals and code reading.
3. 30 minutes: architecture scenario.
4. 20 minutes: debugging/performance scenario.
5. 10 minutes: your questions for the interviewer.

Afterward, classify every weak answer:

- I did not know the fact.
- I knew it but could not explain it simply.
- I gave no trade-off.
- I gave no real example.
- I did not ask enough clarifying questions.

Fix the category, not just the individual question.

---

# Interview story bank template

Prepare six stories from your own experience:

1. A reusable component or design-system decision.
2. A difficult production bug.
3. A measurable performance improvement.
4. A migration or legacy modernization.
5. A disagreement or trade-off with another engineer/team.
6. An accessibility, RTL, responsiveness, or internationalization challenge.

Use this compact structure:

```text
Context: What product and constraint?
Problem: What was failing or at risk?
Options: What alternatives did you consider?
Decision: What did you choose, and why?
Trade-off: What did the choice cost?
Result: What changed? Use numbers when possible.
Learning: What would you change next time?
```

Do not claim that you “improved performance.” Say what changed: initial JavaScript, LCP, interaction delay, rendering time, error rate, memory, or developer build time.

---

# Questions to ask the interviewer

- How is the Angular application divided into business features and teams?
- Which Angular version and rendering model are in production? Is zoneless adoption planned or complete?
- How do you decide between signals, RxJS, and a state library?
- What are the biggest current performance or reliability problems?
- How are accessibility, RTL, and design-system quality tested?
- What does the test pyramid look like, and which tests are trusted most?
- How often do you release, and how do you use feature flags and rollback?
- Which legacy areas create the most delivery risk?
- How are frontend architecture decisions documented and enforced?
- What would success in the first three months look like?

---

# Current-practice references

These official Angular pages support the modern baseline used in this guide:

- [Components and standalone defaults](https://angular.dev/guide/components)
- [Templates and built-in template features](https://angular.dev/guide/templates)
- [Signals](https://angular.dev/guide/signals)
- [RxJS interop with signals](https://angular.dev/guide/signals/rxjs-interop)
- [Automatic RxJS cleanup with `takeUntilDestroyed`](https://angular.dev/ecosystem/rxjs-interop/take-until-destroyed)
- [Dependency providers and injector scope](https://angular.dev/guide/di/dependency-injection-providers)
- [Forms overview](https://angular.dev/guide/forms)
- [Signal Forms comparison](https://angular.dev/guide/forms/signals/comparison)
- [Route guards and their security limitation](https://angular.dev/guide/routing/route-guards)
- [Functional HTTP interceptors](https://angular.dev/guide/http/interceptors)
- [Zoneless Angular](https://angular.dev/guide/zoneless)
- [Content projection](https://angular.dev/guide/components/content-projection)
- [Hydration](https://angular.dev/guide/hydration)
- [Testing with Vitest](https://angular.dev/guide/testing)
- [Security](https://angular.dev/best-practices/security)
- [Performance](https://angular.dev/best-practices/performance)
- [Official migrations](https://angular.dev/reference/migrations)
- [NgModules for legacy code](https://angular.dev/guide/ngmodules/overview)

Last reviewed against the official Angular documentation: 30 October 2026.
