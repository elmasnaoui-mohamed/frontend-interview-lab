# Senior Vue 3 Interview Preparation Guide

**Profile:** Frontend developer with 6+ years of experience and strong enterprise Vue experience  
**Goal:** Give clear, natural answers that sound like real engineering experience—not memorized definitions.

---

## How to use this guide

For most questions, answer in this order:

1. Give the direct answer in one or two sentences.
2. Explain the reason or mental model.
3. Add a real production example.
4. Mention one trade-off, risk, or edge case.

A useful senior-level phrase is:

> “The choice depends on ownership, update frequency, and how widely the state is shared.”

Do not try to recite every detail. Start short, then let the interviewer ask for depth.

## Topic map

- **Core Vue:** reactivity, refs, reactive objects, computed values, watchers, Composition API, and lifecycle
- **Component APIs:** components, props, emits, slots, provide/inject, composables, directives, and forms
- **Application development:** routing, Pinia, async components, Suspense, Teleport, rendering, and `nextTick`
- **Production engineering:** SSR, hydration, TypeScript, testing, accessibility, security, errors, and debugging
- **Enterprise design:** large-app architecture, themes, design tokens, responsive UI, RTL/LTR, and large tables
- **Interview practice:** six system-design scenarios, rapid review, a 14-day plan, and a mock question bank

---

# 1. Reactivity in Vue 3

## Interview-ready answer

“Vue 3 uses proxies to track reactive reads and writes. When a component renders, Vue records the reactive values it reads. If one of those values changes later, Vue schedules the affected component to render again. Updates are batched, so several synchronous changes normally cause one DOM update.”

## Easy explanation

Vue builds a dependency relationship between state and the code that uses it. A render, computed value, or watcher becomes an effect. Reading reactive state tracks the effect; writing that state triggers it.

Vue 3 can observe property addition and deletion because `reactive()` uses `Proxy`. A `ref` uses a wrapper with a reactive `.value` property.

## Example

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const quantity = ref(1)
const unitPrice = ref(25)
const total = computed(() => quantity.value * unitPrice.value)
</script>

<template>
  <button @click="quantity++">Add item</button>
  <p>Total: {{ total }}</p>
</template>
```

Refs are automatically unwrapped in templates, so the template uses `quantity`, not `quantity.value`.

## Common mistakes

- Expecting a plain variable to update the UI.
- Destructuring a reactive object and losing reactivity.
- Mutating state during rendering or inside a computed getter.
- Creating watchers for values that should be computed.
- Assuming the DOM updates immediately after every assignment.

## Trade-offs

Deep reactive objects are convenient, but large or third-party objects may create unnecessary proxy work. For external class instances, immutable structures, or very large data, consider `shallowRef`, `shallowReactive`, or `markRaw`.

## Likely follow-ups

- How does Vue track dependencies?
- Why are updates batched?
- What is the difference between `ref`, `reactive`, and `shallowRef`?
- How do you keep destructured properties reactive?
- When would you use `toRaw` or `markRaw`?

---

# 2. `ref` vs `reactive`

## Interview-ready answer

“I normally use `ref` as the default because it works with primitives and objects and stays clear when values are passed around. I use `reactive` when several related fields form one state object. The important detail is that replacing a reactive object can break references, while assigning to `ref.value` is safe.”

## Easy explanation

- `ref(value)` returns an object with `.value` in JavaScript.
- `reactive(object)` returns a proxy and only works with objects, arrays, maps, and sets.
- Templates unwrap refs automatically.
- A reactive object's nested properties are reactive by default.

## Example

```ts
import { reactive, ref, toRefs } from 'vue'

const loading = ref(false)

const filters = reactive({
  search: '',
  status: 'active',
  page: 1,
})

// Keep reactivity when exposing individual fields.
const { search, status, page } = toRefs(filters)
```

For API replacement:

```ts
const customer = ref<Customer | null>(null)
customer.value = await fetchCustomer()
```

## Common mistakes

- Writing `const { search } = reactiveObject` and expecting `search` to stay reactive.
- Replacing a reactive variable: `state = newState`.
- Forgetting `.value` in script code.
- Using one huge reactive object for unrelated state.

## Trade-offs

`ref` is explicit and composable but adds `.value` in scripts. `reactive` looks natural for forms and grouped state but has identity and destructuring limitations. Consistency within a codebase often matters more than a small syntax preference.

## Likely follow-ups

- What do `toRef` and `toRefs` do?
- Does a ref containing an object make that object reactive?
- When would you use `shallowRef`?
- Why can destructuring lose reactivity?

---

# 3. `computed` vs `watch` vs `watchEffect`

## Interview-ready answer

“I use `computed` for derived state, `watch` for a side effect tied to explicit sources, and `watchEffect` when the effect should automatically track everything it reads. A computed getter should stay pure. If I am calling an API, writing storage, or integrating with a non-Vue system, a watcher may be appropriate.”

## Easy explanation

- `computed`: returns cached derived data and reevaluates only when a dependency changes.
- `watch`: observes named sources and provides new/old values plus cleanup.
- `watchEffect`: runs immediately and automatically tracks synchronous reactive reads.

## Example

```ts
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

watch(
  () => filters.search,
  async (search, _oldSearch, onCleanup) => {
    const controller = new AbortController()
    onCleanup(() => controller.abort())

    results.value = await searchCustomers(search, controller.signal)
  },
  { flush: 'post' },
)
```

The cleanup prevents an older request from winning a race.

## Common mistakes

- Using a watcher to copy one piece of state into another.
- Performing mutations or network calls inside computed getters.
- Deep-watching a large table or store.
- Creating a watcher asynchronously and forgetting to stop it.
- Expecting dependencies read after an `await` in `watchEffect` to be tracked.

## Trade-offs

`watch` is explicit and easier to reason about. `watchEffect` is concise but can hide dependencies. Deep watchers are convenient, but traversal can be expensive. Prefer narrow sources.

## Likely follow-ups

- What does `immediate` do?
- What are `flush: 'pre'`, `'post'`, and `'sync'`?
- How do you cancel stale asynchronous work?
- Are computed values lazy and cached?

---

# 4. Composition API vs Options API

## Interview-ready answer

“Both APIs use the same Vue reactivity system and both are valid. For large enterprise features, I prefer Composition API because I can group code by business concern and extract typed composables. Options API is approachable and works well for smaller components or teams that prefer its fixed structure.”

## Easy explanation

Options API groups code by option: `data`, `computed`, `methods`, and hooks. Composition API groups code by feature: table selection, permissions, filters, and data loading can each live together.

`<script setup>` reduces boilerplate and usually gives better TypeScript inference.

## Example

```ts
// useTableSelection.ts
export function useTableSelection() {
  const selectedIds = ref(new Set<string>())
  const isSelected = (id: string) => selectedIds.value.has(id)
  const clear = () => selectedIds.value = new Set()
  return { selectedIds, isSelected, clear }
}
```

## Common mistakes

- Moving everything into one very large `setup()` function.
- Treating composables as global stores.
- Calling composables outside component setup when they depend on component lifecycle.
- Mixing APIs without a clear reason.

## Trade-offs

Composition API improves reuse and typing but allows inconsistent structure if the team has no conventions. Options API is predictable but can scatter one feature across several options.

## Likely follow-ups

- What is `<script setup>` compiled into?
- Can both APIs be used together?
- What makes a good composable?
- How do you organize a large setup function?

---

# 5. Components and component design

## Interview-ready answer

“I design components around clear ownership and stable public APIs. A reusable component should own presentation and local interaction state, accept data and configuration through props, and report meaningful events. I avoid components that know too much about a specific page or global store.”

## Easy explanation

Good component boundaries follow reasons to change. A base button changes with the design system. A customer table changes with the customer feature. A page coordinates data and business workflows.

## Example

```vue
<DataTable
  :rows="customers"
  :columns="columns"
  :loading="loading"
  row-key="id"
  @sort-change="updateSort"
  @row-activate="openCustomer"
>
  <template #cell-status="{ row }">
    <StatusBadge :status="row.status" />
  </template>
</DataTable>
```

The table owns rendering, keyboard behavior, and interaction mechanics; the page owns customer-specific behavior.

## Common mistakes

- Building a “universal” component with dozens of boolean props.
- Coupling reusable components directly to route or store state.
- Mutating parent-owned data.
- Splitting every few lines into a component without a meaningful boundary.
- Using index as a list key when item identity exists.

## Trade-offs

Highly generic components can become complex and hard to use. Feature-specific components duplicate some code but often provide clearer APIs. Start with real use cases and generalize only stable patterns.

## Likely follow-ups

- How do you decide component boundaries?
- Smart vs presentational components—is that still useful?
- How do you design an enterprise data table?
- How do you expose controlled and uncontrolled behavior?

---

# 6. Props and emits

## Interview-ready answer

“Props are a component's input and should be treated as read-only. Emits are its output. I type and validate both, use domain-level event names, and avoid emitting implementation details. For object props, I remember that nested mutation is technically possible but usually breaks ownership.”

## Easy explanation

Data normally flows down through props; events flow up. This makes ownership visible and debugging easier.

## Example

```vue
<script setup lang="ts">
type User = { id: string; name: string }

const props = withDefaults(defineProps<{
  user: User
  disabled?: boolean
}>(), {
  disabled: false,
})

const emit = defineEmits<{
  save: [user: User]
  cancel: []
}>()

function submit() {
  emit('save', { ...props.user })
}
</script>
```

## Common mistakes

- Mutating a prop directly.
- Using a shared object/array default in older runtime declaration styles.
- Emitting vague events such as `change` with unclear payloads.
- Passing many layers of props when the data belongs in a scoped store or provider.
- Treating emits as DOM events that automatically bubble through components—they do not.

## Trade-offs

Explicit props and emits make dependencies clear, but deep trees can create prop drilling. Provide/inject or a store can help when state genuinely belongs to a subtree or application—not simply to avoid writing props.

## Likely follow-ups

- Why are nested object props still mutable?
- How do you validate props at runtime?
- Do component events bubble?
- How would you support multiple `v-model` bindings?

---

# 7. Slots

## Interview-ready answer

“Slots let the parent supply structure while the child owns layout or behavior. I use named slots for clear extension points and scoped slots when the child needs to expose data such as a row or validation state. Slots are often better than adding many render-related props.”

## Easy explanation

Props pass data; slots pass template content. Scoped slots are child-to-parent data exposure for rendering—not general state communication.

## Example

```vue
<!-- BaseCard.vue -->
<article class="card">
  <header><slot name="title" /></header>
  <section><slot /></section>
  <footer v-if="$slots.actions"><slot name="actions" /></footer>
</article>
```

```vue
<BaseCard>
  <template #title>Account</template>
  <p>{{ user.email }}</p>
  <template #actions><Button>Edit</Button></template>
</BaseCard>
```

## Common mistakes

- Using unnamed slots when several extension points exist.
- Making slot props unstable or undocumented.
- Using slots for business logic instead of presentation customization.
- Forgetting accessible structure when consumers replace content.

## Trade-offs

Slots offer flexibility but reduce how much the child controls its DOM, styling, and accessibility. A design-system component should expose focused extension points rather than its entire structure.

## Likely follow-ups

- What is a scoped slot?
- Are slots rendered in parent or child scope?
- When would you use a slot instead of a prop?
- How do slots affect performance?

---

# 8. Provide and inject

## Interview-ready answer

“Provide/inject is useful for dependencies shared by a component subtree, such as a form context, table context, locale, or design-system configuration. I use typed symbol keys and usually provide readonly state plus explicit actions. I do not use it as an invisible replacement for all props or a global store.”

## Easy explanation

An ancestor provides a value and any descendant can inject it without every intermediate component forwarding a prop.

## Example

```ts
import type { InjectionKey, Ref } from 'vue'

type ThemeContext = {
  direction: Readonly<Ref<'ltr' | 'rtl'>>
  setDirection: (value: 'ltr' | 'rtl') => void
}

export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')

// Parent
provide(themeKey, { direction: readonly(direction), setDirection })

// Descendant
const theme = inject(themeKey)
if (!theme) throw new Error('Theme provider is missing')
```

## Common mistakes

- Using string keys that can collide.
- Providing a non-reactive primitive and expecting updates.
- Allowing descendants to mutate shared state freely.
- Hiding critical feature dependencies.
- Forgetting a default or a clear missing-provider error.

## Trade-offs

It removes prop drilling but makes dependencies less visible at the component call site. Pinia is better for application-wide domain state, devtools, and independent consumers.

## Likely follow-ups

- Is provided data reactive?
- How do you type injection keys?
- Provide/inject vs Pinia?
- How do you test a component that injects a dependency?

---

# 9. Composables

## Interview-ready answer

“A composable packages reactive state and behavior around one concern. I keep its API small, make ownership and cleanup clear, and accept refs or getters when inputs may change. A composable is not automatically a singleton; state created inside it is normally new for each call.”

## Easy explanation

Composables reuse logic, not markup. Examples include pagination, permissions, fetch state, media queries, and keyboard navigation.

## Example

```ts
import { onScopeDispose, toValue, watch, type MaybeRefOrGetter } from 'vue'

export function useCustomer(id: MaybeRefOrGetter<string>) {
  const customer = ref<Customer | null>(null)
  const error = ref<unknown>(null)

  const stop = watch(
    () => toValue(id),
    async (currentId, _old, onCleanup) => {
      const controller = new AbortController()
      onCleanup(() => controller.abort())
      try {
        customer.value = await api.getCustomer(currentId, controller.signal)
      } catch (e) {
        if (!controller.signal.aborted) error.value = e
      }
    },
    { immediate: true },
  )

  onScopeDispose(stop)
  return { customer: readonly(customer), error: readonly(error) }
}
```

## Common mistakes

- Returning many unrelated values.
- Starting side effects without cleanup.
- Destructuring a reactive return object in a way that loses reactivity.
- Hiding shared module-level state accidentally.
- Calling lifecycle-dependent composables after an `await` in setup.

## Trade-offs

Composables improve reuse and testing, but too many thin wrappers make navigation harder. Extract a composable when a concern has meaningful behavior, reuse, or testing value.

## Likely follow-ups

- Composable vs utility function?
- Composable vs Pinia store?
- How do you accept both refs and plain values?
- How do you prevent request races?

---

# 10. Lifecycle hooks

## Interview-ready answer

“Lifecycle hooks connect component lifetime to external work. I use `onMounted` for browser-only integrations, `onBeforeUnmount` or scope cleanup for listeners and observers, and `onUpdated` only when I really need post-render behavior. I avoid using hooks as a general data-flow mechanism.”

## Easy explanation

Common hooks:

- `onBeforeMount` / `onMounted`
- `onBeforeUpdate` / `onUpdated`
- `onBeforeUnmount` / `onUnmounted`
- `onActivated` / `onDeactivated` for cached components
- `onErrorCaptured` for descendant errors
- `onServerPrefetch` for SSR data

## Example

```ts
const element = useTemplateRef<HTMLElement>('panel')
let observer: ResizeObserver | undefined

onMounted(() => {
  observer = new ResizeObserver(updateLayout)
  if (element.value) observer.observe(element.value)
})

onBeforeUnmount(() => observer?.disconnect())
```

## Common mistakes

- Reading DOM refs before mount.
- Adding listeners without removing them.
- Mutating reactive state in `onUpdated` and creating loops.
- Assuming mounted hooks run during SSR.
- Fetching the same data in several nested components without coordination.

## Trade-offs

Hooks are direct and understandable but tightly couple work to the component. Reusable lifecycle behavior usually belongs in a composable.

## Likely follow-ups

- Difference between `onBeforeUnmount` and `onUnmounted`?
- What happens with `KeepAlive`?
- Which hooks run on the server?
- When is a template ref available?

---

# 11. Custom directives

## Interview-ready answer

“I use a custom directive when behavior is mainly low-level DOM work and does not need a component UI—for example focus, click-outside, or a third-party DOM plugin. For reusable UI and state, I prefer components or composables.”

## Easy explanation

Directives receive an element, binding value, and lifecycle hooks such as `mounted`, `updated`, and `unmounted`.

## Example

```ts
import type { Directive } from 'vue'

export const vFocus: Directive<HTMLInputElement, boolean> = {
  mounted(el, binding) {
    if (binding.value) el.focus()
  },
  updated(el, binding) {
    if (binding.value && !binding.oldValue) el.focus()
  },
}
```

## Common mistakes

- Doing business logic inside a directive.
- Forgetting to remove listeners in `unmounted`.
- Assuming directives applied to a component always target a predictable root element.
- Reimplementing behavior already supported by native HTML.

## Trade-offs

Directives provide exact DOM access but are less declarative and harder to type or compose than components. Keep their API small.

## Likely follow-ups

- Local vs global directives?
- When would you choose a directive over a composable?
- Which directive hooks are available?
- How do directives behave in SSR?

---

# 12. Forms and `v-model`

## Interview-ready answer

“`v-model` is syntax for passing a value and listening for its update event. In a component, I treat it as a controlled contract, validate at the correct boundary, and separate raw input state from submitted domain data when needed. Vue 3 also supports named and multiple models.”

## Easy explanation

For a component, `v-model="name"` is roughly:

```vue
<TextField :model-value="name" @update:model-value="name = $event" />
```

## Example

```vue
<script setup lang="ts">
const model = defineModel<string>({ required: true })
</script>

<template>
  <input v-model.trim="model" autocomplete="name" />
</template>
```

Multiple models:

```vue
<DateRange v-model:start="startDate" v-model:end="endDate" />
```

## Common mistakes

- Mutating a prop instead of emitting an update.
- Using one validation rule for display, server, and domain concerns.
- Showing errors before users interact without a product reason.
- Forgetting stable IDs, labels, `aria-describedby`, and error associations.
- Treating all values as strings when the domain expects numbers or dates.

## Trade-offs

Two-way binding is concise but can hide ownership if used across many layers. For meaningful actions such as “approve invoice,” use an explicit event or command instead of `v-model`.

## Likely follow-ups

- How does `v-model` work internally?
- How do custom modifiers work?
- How would you design form validation?
- Controlled vs uncontrolled inputs?

---

# 13. Vue Router and navigation guards

## Interview-ready answer

“I use route records as the source of page-level structure and lazy-load feature pages. Guards are best for navigation policy such as authentication or unsaved changes, not normal data fetching. Authorization must still be enforced on the server; a client guard only improves UX.”

## Easy explanation

Router types include global guards, route-level `beforeEnter`, and component guards. Route meta can describe required permissions or layout.

## Example

```ts
const routes = [
  {
    path: '/admin/users',
    component: () => import('./features/users/UserListPage.vue'),
    meta: { requiresAuth: true, permission: 'users.read' },
  },
]

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isSignedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.meta.permission && !auth.can(to.meta.permission)) {
    return { name: 'forbidden' }
  }
})
```

## Common mistakes

- Calling `next()` more than once in legacy guard style.
- Creating redirect loops.
- Trusting client-side guards for security.
- Putting every fetch in a global guard and blocking navigation.
- Ignoring cancellation when route params change quickly.

## Trade-offs

Fetching before navigation prevents incomplete pages but delays route entry. Fetching inside the page shows the shell sooner and allows skeletons, but the page must handle loading and errors.

## Likely follow-ups

- How do you handle unsaved form changes?
- How do you type route meta?
- When do guards run?
- How do you handle a failed lazy-loaded route chunk?

---

# 14. Pinia and state management

## Interview-ready answer

“I use Pinia for state shared across unrelated components or routes, especially domain state that benefits from devtools and centralized actions. I keep local UI state local and server cache in a data-fetching layer when possible. Stores should represent clear domains rather than becoming one global dumping ground.”

## Easy explanation

A store exposes state, getters, and actions. Setup stores use Composition API primitives and are naturally typed.

## Example

```ts
export const useSessionStore = defineStore('session', () => {
  const user = ref<User | null>(null)
  const permissions = computed(() => new Set(user.value?.permissions ?? []))

  function can(permission: string) {
    return permissions.value.has(permission)
  }

  async function signOut() {
    await api.signOut()
    user.value = null
  }

  return { user, can, signOut }
})
```

## Common mistakes

- Putting all API responses and temporary component state in stores.
- Destructuring store state directly instead of using `storeToRefs`.
- Creating stores that depend on each other cyclically.
- Mutating store state from everywhere with no action conventions.
- Persisting sensitive data in local storage.

## Trade-offs

Central stores improve sharing and debugging but increase global coupling. Server-state libraries can provide caching, invalidation, retries, and deduplication that a hand-written Pinia store would need to reinvent.

## Likely follow-ups

- Pinia vs composable?
- Why use `storeToRefs`?
- How do you reset or persist a store?
- How do you use Pinia safely with SSR?

---

# 15. Async components and code splitting

## Interview-ready answer

“I use route-level dynamic imports as the first code-splitting boundary, then async components for heavy or rarely used UI such as editors and charts. I provide loading, error, timeout, and retry behavior where failure is realistic. Splitting too aggressively creates many network requests and unstable loading.”

## Easy explanation

`defineAsyncComponent` loads a component only when Vue needs to render it. Bundlers turn dynamic imports into separate chunks.

## Example

```ts
const ReportDesigner = defineAsyncComponent({
  loader: () => import('./ReportDesigner.vue'),
  loadingComponent: LoadingPanel,
  errorComponent: LoadError,
  delay: 150,
  timeout: 15_000,
  onError(error, retry, fail, attempts) {
    if (attempts <= 2) retry()
    else fail()
  },
})
```

## Common mistakes

- Making tiny, frequently used components asynchronous.
- Showing a spinner for very fast loads and causing flicker.
- Ignoring deployment cases where old clients request deleted chunks.
- Not prefetching a predictable next step.
- Forgetting that async loading does not reduce runtime cost after mount.

## Trade-offs

Smaller initial bundles improve first load, but more chunks add request overhead and loading states. Use bundle analysis and real-user metrics rather than guessing.

## Likely follow-ups

- Async component vs dynamic route import?
- How do you recover from chunk-load failures?
- What should be preloaded or prefetched?
- How does an async component work with Suspense?

---

# 16. Suspense and Teleport

## Interview-ready answer

“Suspense coordinates fallback UI for asynchronous setup and async dependencies, while Teleport renders a component's DOM somewhere else without changing its logical component ownership. I use Teleport for modals and overlays, and I use Suspense carefully because error and nested-loading behavior should be explicit.”

## Easy explanation

Teleport changes DOM placement, not the component tree. Props, injects, and events still work through the logical Vue tree.

## Example

```vue
<Suspense>
  <CustomerDetails :id="customerId" />
  <template #fallback>
    <CustomerDetailsSkeleton />
  </template>
</Suspense>

<Teleport to="#overlays">
  <ModalDialog v-if="open" @close="open = false" />
</Teleport>
```

## Common mistakes

- Assuming Suspense is the error boundary; it primarily handles pending state.
- Teleporting a dialog without focus management, escape handling, or background inertness.
- Depending on DOM ancestry for styles after teleporting.
- Teleporting to a target that does not exist.

## Trade-offs

Suspense creates coordinated loading but may delay all content behind one dependency. Independent skeletons can feel faster. Teleport solves stacking and overflow problems but may require globally available theme variables and careful SSR handling.

## Likely follow-ups

- Does Teleport break provide/inject?
- How do you make a teleported modal accessible?
- How are errors handled with Suspense?
- What happens during SSR hydration?

---

# 17. Rendering and performance

## Interview-ready answer

“I measure first, then optimize the actual bottleneck. In Vue, I focus on stable props, correct keys, smaller reactive dependencies, virtualization for large lists, route-level splitting, and avoiding unnecessary deep watchers. For tables, DOM volume is usually more important than micro-optimizing computed values.”

## Easy explanation

Vue compiles templates into render functions and marks dynamic parts with patch information. During updates, it can focus on dynamic nodes instead of comparing the whole DOM tree.

## Realistic table strategy

- Use server-side pagination/filtering for very large datasets.
- Virtualize rows when many must remain available client-side.
- Keep row keys stable.
- Avoid passing a newly created object or callback to every row on each render.
- Keep column definitions stable.
- Use `shallowRef` for large immutable result arrays if deep proxying is unnecessary.
- Profile scripting, rendering, layout, and network separately.

```vue
<RowItem
  v-for="row in visibleRows"
  :key="row.id"
  :row="row"
  :selected="selectedIds.has(row.id)"
  v-memo="[row.version, selectedIds.has(row.id)]"
/>
```

## Common mistakes

- Optimizing without a profiler or metric.
- Using array index as a key for mutable lists.
- Rendering thousands of DOM rows because the data fetch was fast.
- Adding `v-if` and `v-for` to the same element.
- Making every component global or wrapping everything in memoization.
- Deep-cloning state after every change.

## Trade-offs

Virtualization improves performance but complicates dynamic row heights, print layouts, browser search, and accessibility. Memoization reduces work but adds invalidation complexity. Simpler code is preferable until evidence shows a bottleneck.

## Likely follow-ups

- `v-if` vs `v-show`?
- Why are stable keys important?
- What does `v-once` or `v-memo` do?
- How do you diagnose a slow table?
- What is the virtual DOM doing?

---

# 18. `nextTick`

## Interview-ready answer

“Vue batches reactive updates and applies the DOM patch asynchronously. I use `nextTick` when I must wait for Vue's pending DOM update before measuring or focusing an element. I do not use it as a general timing workaround.”

## Easy explanation

State changes immediately; the rendered DOM catches up in the next update flush.

## Example

```ts
const editing = ref(false)
const input = useTemplateRef<HTMLInputElement>('editInput')

async function startEditing() {
  editing.value = true
  await nextTick()
  input.value?.focus()
}
```

## Common mistakes

- Expecting `nextTick` to wait for API requests, CSS transitions, or images.
- Adding repeated ticks instead of fixing data flow.
- Measuring layout before the component has rendered.
- Using `setTimeout(0)` where the requirement is specifically Vue's render flush.

## Trade-offs

`nextTick` is precise for Vue DOM updates but creates imperative coupling. Prefer declarative behavior or a post-flush watcher when it describes the intent better.

## Likely follow-ups

- Does reactive state update before `nextTick`?
- Difference between `nextTick` and `setTimeout`?
- When would you use a watcher with `flush: 'post'`?

---

# 19. SSR and hydration

## Interview-ready answer

“SSR generates HTML on the server for faster first content and better crawlability, then hydration attaches Vue behavior in the browser. Server and client must produce the same initial markup. I isolate browser-only APIs, avoid shared request state, and serialize initial data safely.”

## Easy explanation

SSR is not just “rendering twice.” Each request needs isolated app, router, and store state. Hydration reuses the server DOM; a mismatch means the two environments disagreed.

## Example

```ts
const width = ref<number | null>(null)

onMounted(() => {
  width.value = window.innerWidth
})
```

The initial server and client render can both show a neutral layout, then browser-only information is added after mount.

## Common mistakes

- Reading `window`, `document`, or `localStorage` during server rendering.
- Using random values, current time, or locale-dependent output in initial markup.
- Sharing one Pinia instance across requests and leaking user data.
- Fetching again immediately on the client instead of hydrating initial state.
- Injecting unsafe serialized JSON into HTML.

## Trade-offs

SSR improves initial rendering and SEO for suitable pages but adds server cost, deployment complexity, hydration work, and environment constraints. A client-rendered internal dashboard may not need it. Static generation can be simpler for stable content.

## Likely follow-ups

- What causes hydration mismatches?
- How do you make Pinia request-safe?
- SSR vs SSG vs CSR?
- How do you handle authentication on the server?
- What is selective or lazy hydration?

---

# 20. TypeScript integration

## Interview-ready answer

“Vue 3 works well with TypeScript, especially with `<script setup>`. I type component boundaries—props, emits, models, slots, injection keys, router meta, and API responses—because that is where errors spread. I still validate external data at runtime because TypeScript disappears at runtime.”

## Easy explanation

TypeScript checks development-time assumptions. It does not prove an API response or local-storage value is valid.

## Example

```vue
<script setup lang="ts" generic="T extends { id: string }">
defineProps<{
  rows: T[]
  selectedId?: T['id']
}>()

defineEmits<{
  select: [row: T]
}>()

defineSlots<{
  default(props: { row: T }): unknown
}>()
</script>
```

At the API boundary, use schema validation or a deliberate parser before treating `unknown` as a domain type.

## Common mistakes

- Using `any` for API responses or component events.
- Casting with `as` instead of validating.
- Making every field optional to silence errors.
- Duplicating types that should come from one contract.
- Forgetting null states for data that loads asynchronously.

## Trade-offs

Advanced generic component APIs can become harder to understand than duplicated, domain-specific components. Type the stable contract, but do not make types more complex than the product behavior.

## Likely follow-ups

- Type-based vs runtime prop declarations?
- How do you type template refs?
- How do you type a generic table?
- Why validate data if TypeScript already checks it?

---

# 21. Testing

## Interview-ready answer

“I test behavior at the lowest useful level. Pure logic and composables get focused unit tests; components are tested through rendered output and user interaction; critical flows get end-to-end tests. I avoid testing Vue internals or implementation details.”

## Easy explanation

A balanced test strategy:

- Unit tests: transformations, validators, state transitions.
- Component tests: props, emits, slots, accessibility, interaction.
- Integration tests: router, store, network boundary.
- E2E tests: a small set of business-critical journeys.

## Example

```ts
it('emits the selected customer', async () => {
  const customer = { id: 'c1', name: 'Mina' }
  const wrapper = mount(CustomerRow, { props: { customer } })

  await wrapper.get('button').trigger('click')

  expect(wrapper.emitted('select')).toEqual([[customer]])
})
```

For network behavior, mock at the HTTP boundary rather than mocking every internal composable.

## Common mistakes

- Asserting private component state.
- Using large snapshots as the main assertion.
- Over-mocking until the test no longer resembles production.
- Forgetting `await` for DOM-triggered updates.
- Writing brittle selectors based on CSS layout.
- Testing only happy paths.

## Trade-offs

Unit tests are fast and precise but cannot prove integration. E2E tests give confidence but are slower and can be flaky. Use a few strong end-to-end flows and more focused tests below them.

## Likely follow-ups

- How do you test a composable with lifecycle hooks?
- How do you test Pinia or router behavior?
- What should be mocked?
- How do you test accessibility?

---

# 22. Accessibility

## Interview-ready answer

“Accessibility is part of component correctness, not a final audit. I start with semantic HTML, complete keyboard behavior, visible focus, programmatic labels, and correct status announcements. Reusable components are important because one accessible implementation improves the whole product.”

## Easy explanation

Use native elements first. A real `<button>` already supports keyboard activation, focus, and semantics. ARIA can describe missing semantics, but it does not add behavior.

## Enterprise examples

- A modal traps focus, restores it on close, closes predictably, and marks the background inert.
- A sortable header is a button and communicates sort state with `aria-sort`.
- Form errors are linked with `aria-describedby` and summarized after submit.
- Live updates use an appropriate `aria-live` region without becoming noisy.
- RTL changes direction and layout, but not every icon should be mirrored.

```vue
<button
  type="button"
  :aria-expanded="open"
  aria-controls="account-menu"
  @click="open = !open"
>
  Account
</button>
```

## Common mistakes

- Using clickable `<div>` elements.
- Removing focus outlines without a replacement.
- Adding ARIA roles while missing keyboard behavior.
- Assuming a screen reader test is the only accessibility test.
- Encoding meaning only through color.
- Breaking logical focus order in responsive or teleported UI.

## Trade-offs

Highly custom widgets require much more behavior and testing than native controls. Sometimes product visuals should adapt to a robust native pattern rather than recreate it.

## Likely follow-ups

- How do you make a data table accessible?
- How do you test keyboard navigation?
- `aria-label` vs visible label?
- What changes for RTL?
- How do you build an accessible modal?

---

# 23. Security

## Interview-ready answer

“Vue escapes normal template interpolation, which reduces XSS risk, but `v-html`, unsafe URLs, third-party content, and direct DOM APIs still need care. I do not put secrets in frontend code, I treat client authorization as UX only, and I design authentication with CSRF, token storage, and content security policy in mind.”

## Easy explanation

The browser receives all frontend code, so anything shipped to it is discoverable. Security decisions must be enforced by the backend.

## Example

```vue
<!-- Safe: text is escaped -->
<p>{{ customerComment }}</p>

<!-- Dangerous unless content is sanitized by a trusted policy -->
<div v-html="trustedSanitizedHtml" />
```

For links, allow expected protocols and destinations instead of binding untrusted strings directly.

## Common mistakes

- Rendering user HTML with `v-html` without sanitization.
- Storing long-lived sensitive tokens in local storage without considering XSS.
- Treating hidden buttons or route guards as authorization.
- Exposing secrets in `VITE_*` environment variables.
- Dynamically building templates from user content.
- Logging personal or authentication data.

## Trade-offs

HttpOnly secure cookies reduce JavaScript token exposure but require CSRF defenses and correct server configuration. Strict CSP improves protection but can complicate third-party scripts and inline styles.

## Likely follow-ups

- Does Vue prevent all XSS?
- Where should auth tokens be stored?
- How do you prevent CSRF?
- Are frontend environment variables secret?
- How do you safely render rich text?

---

# 24. Error handling and production debugging

## Interview-ready answer

“I handle errors at the boundary that can make a useful decision. A field shows validation errors, a feature handles expected API failure, and an application-level handler reports unexpected failures. In production I combine user-safe messages, structured logs, source maps, correlation IDs, and monitoring context.”

## Easy explanation

Different errors need different responses:

- Expected domain error: explain what the user can do.
- Transient network error: retry with limits or offer retry.
- Authentication error: refresh or redirect safely.
- Programming error: capture context and fail in a controlled way.

## Example

```ts
app.config.errorHandler = (error, instance, info) => {
  monitor.captureException(error, {
    tags: { vueInfo: info },
    extra: { route: router.currentRoute.value.fullPath },
  })
}
```

Feature-level request code should distinguish aborts, timeouts, 4xx domain failures, and unexpected 5xx failures rather than displaying “Something went wrong” for everything.

## Common mistakes

- Swallowing errors in empty `catch` blocks.
- Showing raw server messages or stack traces to users.
- Retrying non-idempotent operations automatically.
- Logging sensitive request data.
- Relying only on a global error handler.
- Debugging minified production errors without source maps or release versions.

## Trade-offs

More telemetry helps diagnosis but adds cost, privacy responsibilities, and noise. Sample high-volume events, scrub sensitive data, and attach actionable context rather than logging everything.

## Likely follow-ups

- What does `onErrorCaptured` do?
- How do you prevent stale requests from updating state?
- How do you diagnose a production-only issue?
- What context belongs in an error report?
- How do you design retries?

---

# 25. Architecture for large Vue applications

## Interview-ready answer

“I organize large applications by business feature, with a small shared foundation for design-system components, infrastructure, and cross-cutting services. Dependencies should point inward: pages compose features, features use domain and shared APIs, and base UI does not import business code. I enforce boundaries with conventions, TypeScript, lint rules, and tests.”

## Easy explanation

A practical structure:

```text
src/
  app/                 # app startup, router, providers, layouts
  features/
    customers/
      api/
      components/
      composables/
      pages/
      stores/
      types.ts
      routes.ts
  shared/
    ui/                # design-system components
    api/               # HTTP client and cross-cutting transport
    i18n/
    utilities/
  styles/
    tokens.css
    themes.css
```

## Enterprise principles

- Route boundaries are natural code-splitting and ownership boundaries.
- Domain code should not depend on concrete page components.
- Base UI uses design tokens, logical CSS properties, and documented slots.
- API transport types are converted into stable domain/view models.
- Permission checks are centralized but server-enforced.
- Feature flags have owners and removal dates.
- Observability and accessibility are included in the definition of done.

## Common mistakes

- Organizing the whole app only by technical type: one giant `components/`, `stores/`, and `services/` folder.
- Creating a generic abstraction before multiple real use cases exist.
- Letting shared code import feature code.
- One global store for unrelated domains.
- Using an event bus for core application workflows.
- Allowing barrel exports to hide circular dependencies.

## Trade-offs

Feature boundaries may duplicate small helpers, but duplication is sometimes cheaper than premature coupling. A monorepo helps separate packages and teams, but adds tooling and release complexity. Micro-frontends can support organizational independence, but should solve a team/deployment problem—not be a default architecture.

## Likely follow-ups

- How do you enforce module boundaries?
- How do you share a design system across teams?
- When would you choose a monorepo or micro-frontends?
- How do you migrate a legacy Vue application?
- Where should API calls live?

---

# 26. Themes, design tokens, responsive UI, and RTL/LTR

## Interview-ready answer

“I treat design tokens as semantic contracts rather than raw color values. Components consume tokens such as surface, text, border, and focus colors; themes replace the token values. For RTL, I use logical CSS properties and test behavior, focus order, charts, icons, and mixed-direction content—not only text alignment.”

## Easy explanation

Primitive token: `--blue-600`.  
Semantic token: `--color-action-primary`.  
Component token: `--button-primary-background`.

The semantic layer lets a theme change meaning without changing every component.

## Example

```css
:root {
  --color-surface: #ffffff;
  --color-text: #172033;
  --space-control-inline: 0.75rem;
}

[data-theme='dark'] {
  --color-surface: #151923;
  --color-text: #f2f4f8;
}

.card {
  color: var(--color-text);
  background: var(--color-surface);
  padding-inline: var(--space-control-inline);
  border-inline-start: 3px solid var(--color-accent);
}
```

Set `dir="rtl"` at the document or correct subtree. Use `margin-inline-start`, `inset-inline-end`, and `text-align: start` instead of hard-coded left/right where direction should adapt.

## Common mistakes

- Hard-coding colors inside components.
- Implementing dark mode by inverting everything.
- Flipping all icons in RTL, including universal symbols and logos.
- Using viewport breakpoints when a reusable component needs container queries.
- Reordering visual layout in a way that conflicts with DOM/focus order.
- Forgetting persisted theme SSR, causing a flash or hydration mismatch.

## Trade-offs

Many token layers provide flexibility but can make tracing values difficult. Define ownership and naming rules. Container queries improve component portability but may require a thoughtful fallback for older target environments.

## Likely follow-ups

- How do you avoid theme flicker in SSR?
- Which icons should mirror in RTL?
- CSS logical properties vs direction-specific styles?
- How do you test themes and responsive states?
- How do you version design tokens?

---

# 27. Large tables

## Interview-ready answer

“For large tables, I separate data concerns from rendering concerns. The server owns filtering, sorting, and pagination when the dataset is large; the client owns interaction state and visible rendering. I use stable row identity, cancel stale requests, virtualize only when necessary, and design keyboard and screen-reader behavior from the start.”

## Easy explanation

A table can involve several independent states:

- Query: page, page size, search, filters, sort.
- Request: loading, error, latest request identity.
- Data: rows, total count, schema/version.
- Interaction: focused cell, selected IDs, expanded rows.
- Presentation: visible columns, density, pinned columns.

Keeping them separate prevents one giant object from triggering unrelated work.

## Example

```ts
watch(
  () => ({ ...toValue(query) }),
  async (nextQuery, _old, onCleanup) => {
    const controller = new AbortController()
    onCleanup(() => controller.abort())

    loading.value = true
    try {
      const response = await api.listCustomers(nextQuery, controller.signal)
      rows.value = response.items
      total.value = response.total
    } finally {
      if (!controller.signal.aborted) loading.value = false
    }
  },
  { immediate: true },
)
```

## Common mistakes

- Loading the full dataset and hiding rows with CSS.
- Selecting rows by array index.
- Losing selection when a new page loads without a defined selection policy.
- Sending one request per keystroke without debounce/cancellation.
- Rendering every cell as a heavy component.
- Using a visual grid without implementing the expected keyboard model.

## Trade-offs

Native `<table>` semantics are strong and often preferable. A fully interactive ARIA grid offers spreadsheet-like navigation but requires significant accessibility engineering. Server pagination scales, while client-side operations can offer faster interaction for bounded datasets.

## Likely follow-ups

- How do you keep selection across pages?
- Cursor vs offset pagination?
- How do you handle variable-height virtualization?
- How do you make sorting accessible?
- Where would you cache table data?

---

# Senior system-design scenarios

## Scenario 1: Design an enterprise customer-management frontend

### A strong answer structure

“I would start by clarifying scale, roles, latency, offline needs, supported browsers, localization, and whether SEO matters. Then I would define feature boundaries around customer search, details, editing, audit history, and permissions.”

### Proposed design

```text
Browser
  Router + route-level feature chunks
    Customer list feature
      query state in URL
      server-state/cache layer
      virtualized or paginated table
    Customer details feature
      overview / activity / documents child routes
    Shared design system
      tokens, themes, RTL, accessible primitives
  Pinia
    session, permissions, durable cross-route UI state
  API layer
    typed client, runtime validation, cancellation, error mapping
  Observability
    errors, performance marks, correlation IDs, release version
```

### Important choices

- Keep filter and sort state in the URL so views are shareable and browser navigation works.
- Put server data in a query/cache layer; do not duplicate it automatically in Pinia.
- Use route-level authorization for UX and backend authorization for security.
- Use optimistic updates only for reversible actions with clear rollback.
- Log table performance using real dataset sizes.
- Define empty, loading, partial, error, and permission-denied states.

### Likely challenges

- “How would you support multiple teams?” Define feature ownership, shared UI governance, API contracts, and automated boundary checks.
- “How would you make it resilient?” Add request cancellation, bounded retries, idempotency awareness, stale-data indicators, and feature-level error recovery.
- “How would you migrate it?” Use route-by-route strangler migration with shared auth and design tokens.

---

## Scenario 2: Design a reusable data-table platform

### Interview-ready proposal

“I would separate a headless table model from the rendered components. The headless layer owns column definitions, sorting, selection, expansion, and state transitions. The UI layer owns accessible DOM, styling, virtualization integration, and slots. Feature pages own the query and business actions.”

### Public API ideas

```ts
type Column<Row> = {
  id: string
  header: string
  value: (row: Row) => unknown
  sortable?: boolean
  width?: number
  align?: 'start' | 'center' | 'end'
}
```

Events should express meaning: `sort-change`, `selection-change`, `row-activate`. Avoid leaking raw DOM events unless needed.

### Questions to settle

- Native table or ARIA grid?
- Server or client operations?
- How does selection work across pages and filters?
- Are column settings user-specific and persisted?
- Fixed or variable row height?
- How are loading, partial refresh, and empty states rendered?
- What are the performance budgets?

### Risks

The biggest risk is building a universal component that handles every product case. Establish supported patterns and escape hatches, track exceptions, and split specialized variants when their interaction models differ.

---

## Scenario 3: Multi-brand themes with RTL/LTR

### Interview-ready proposal

“I would publish versioned semantic design tokens, accessible base components, and brand theme packages. Direction and locale are separate settings. Components use logical layout properties, and visual regression tests cover a matrix of high-risk components across brand, theme, viewport, and direction.”

### Key details

- Resolve initial theme on the server or in a small pre-render script to avoid flashing.
- Keep token names semantic and stable; validate contrast automatically.
- Do not duplicate whole stylesheets per direction.
- Use direction-aware icons only where meaning is spatial.
- Test Arabic text length, mixed numbers, truncation, and form controls.
- Provide migration notes when tokens are renamed or removed.

### Trade-off answer

“Testing every component in every combination is too expensive. I use pairwise coverage for most components and a full matrix for foundations such as buttons, dialogs, forms, navigation, and tables.”

---

## Scenario 4: Diagnose a production-only performance regression

### Strong investigation sequence

1. Confirm the user impact and affected release, route, browser, device, account, and dataset size.
2. Compare real-user metrics before and after the release.
3. Reproduce with production-like data and CPU/network throttling.
4. Use the browser Performance panel and Vue Devtools to separate network, JavaScript, Vue rendering, layout, and paint.
5. Check request storms, deep watchers, unstable props, excessive rows, layout thrashing, and third-party scripts.
6. Add a targeted measurement if current telemetry cannot answer the question.
7. Fix the narrow cause, verify metrics, roll out safely, and document the prevention.

### Interview-ready example

“In a large table, I would first check whether the regression comes from more DOM nodes, a watcher firing repeatedly, or layout work from measuring cells. If column definitions are recreated on each render, all rows may receive changed props. I would stabilize them, then verify the improvement in a trace rather than assuming.”

---

## Scenario 5: State management for a complex workflow

### Interview-ready proposal

“I separate server state, workflow state, and local UI state. Server entities use a cache with invalidation. A Pinia store owns a multi-route draft or approval workflow. Component state owns open panels, focused tabs, and temporary input unless it must survive navigation.”

### Decision table

| State | Best default home | Why |
|---|---|---|
| Current signed-in user | Session store | Used across unrelated routes |
| Customer search results | Query/cache layer | Server data with freshness and cancellation |
| Search filters | URL | Shareable and restorable |
| Modal open state | Component | Local and temporary |
| Multi-step unsaved draft | Feature store | Must survive route steps |
| Theme | App provider/store + persisted preference | Global cross-cutting state |
| Input validation message | Form/component | Belongs to interaction context |

---

## Scenario 6: Modernize a Vue 2 enterprise application

### Interview-ready proposal

“I would reduce migration risk by separating framework upgrade from feature redesign. First I would inventory dependencies, browser support, global APIs, filters, event buses, mixins, and undocumented component contracts. Then I would create a compatibility path, add regression coverage around critical flows, and migrate feature by feature.”

### Practical phases

1. Establish TypeScript, linting, tests, telemetry, and a supported build chain.
2. Replace abandoned dependencies and incompatible patterns.
3. Move shared UI and tokens to Vue 3-compatible foundations.
4. Convert event buses to explicit state/events.
5. Convert high-value mixins into composables when ownership is clear.
6. Migrate routes or vertical slices with measurable acceptance criteria.
7. Remove compatibility mode and obsolete code.

### Trade-off answer

“A full rewrite may look cleaner but delays value and can lose hidden business behavior. Incremental migration has temporary complexity, but it gives us production feedback and rollback boundaries.”

---

# Rapid-review cheat sheet

## Core choices

| Need | Default choice | One-line reason |
|---|---|---|
| Primitive or replaceable state | `ref` | Clear ownership and safe replacement |
| Related object fields | `reactive` | Convenient grouped state |
| Derived state | `computed` | Cached and declarative |
| Explicit side effect | `watch` | Controlled dependencies and cleanup |
| Auto-tracked side effect | `watchEffect` | Concise when dependencies are obvious |
| Reusable reactive behavior | Composable | Reuses logic and lifecycle |
| Subtree dependency | Provide/inject | Avoids intermediate forwarding |
| App/domain shared state | Pinia | Shared ownership and devtools |
| Server data | Query/cache layer | Freshness, deduping, invalidation |
| DOM behavior only | Directive | Low-level element integration |

## Short answers worth memorizing

- **Why Composition API?** “It groups code by feature and makes typed logic reuse easier.”
- **Why not put everything in Pinia?** “Global state increases coupling; state should live at the narrowest owner that needs it.”
- **Why computed instead of watch?** “Derived data should be declarative and cached, without synchronization bugs.”
- **Why stable keys?** “Keys preserve item identity so Vue can patch and retain component state correctly.”
- **Why `nextTick`?** “To wait for Vue's batched DOM patch before measuring or focusing.”
- **What is hydration?** “Vue attaches behavior to server-rendered HTML while expecting the same initial structure.”
- **What does Teleport change?** “DOM location, not logical component ownership.”
- **Are route guards security?** “No. They improve UX; the backend must enforce authorization.”
- **Is TypeScript runtime validation?** “No. External data still needs validation.”
- **First performance step?** “Measure with production-like data and identify whether the cost is network, script, render, layout, or paint.”

## Red flags to avoid saying

- “Composition API is always better.”
- “Pinia replaces all local state.”
- “Vue prevents XSS.”
- “The client route guard secures the page.”
- “More components always improve performance.”
- “Index is fine as a key.”
- “Deep watch is the easiest solution.”
- “We should rewrite it from scratch.”
- “Accessibility is mainly ARIA.”
- “TypeScript guarantees the API response.”

## Senior answer checklist

Before ending an answer, try to include at least one of these:

- Ownership: Who owns and changes this state?
- Boundary: Is this local, feature-level, application-wide, or server state?
- Failure: What happens if the request or chunk fails?
- Scale: What changes with 100,000 rows or several teams?
- Accessibility: Can keyboard and assistive-technology users complete it?
- Security: Is the backend enforcing the rule?
- Measurement: How will we prove the design works in production?
- Trade-off: What complexity does this choice add?

---

# Practical 14-day study plan

Aim for **60–90 minutes per day**. Speak answers aloud; interviews test communication as much as recall.

## Day 1 — Reactivity fundamentals

- Review reactivity, `ref`, `reactive`, `toRef`, `toRefs`, shallow APIs.
- Build a small price calculator.
- Explain dependency tracking in 60 seconds without technical jargon.
- Practice: “Why did destructuring break reactivity?”

## Day 2 — Computed and watchers

- Build filtered search with request cancellation.
- Compare `computed`, `watch`, and `watchEffect` aloud.
- Practice cleanup, flush timing, and stale requests.

## Day 3 — Components and communication

- Review props, emits, slots, and `v-model`.
- Design a reusable input and card.
- Explain component ownership and why prop mutation is risky.

## Day 4 — Composition and composables

- Extract pagination or media-query logic into a composable.
- Add cleanup and TypeScript types.
- Compare composables, utilities, stores, and provide/inject.

## Day 5 — Router and state

- Build protected lazy routes and URL-based filters.
- Create one Pinia store and keep local state outside it.
- Explain CSR authorization vs backend authorization.

## Day 6 — Modern Vue features

- Practice async components, Suspense, Teleport, and `nextTick`.
- Build an accessible teleported modal.
- Explain loading, error, and focus behavior.

## Day 7 — Rendering and performance

- Profile a deliberately slow list.
- Fix unstable props and excessive DOM.
- Review keys, `v-if`/`v-show`, virtualization, and shallow reactivity.
- Give a five-minute large-table diagnosis.

## Day 8 — TypeScript and API boundaries

- Type props, emits, slots, models, injection keys, and a generic table.
- Validate one `unknown` API response at runtime.
- Practice explaining why `as Customer` is not validation.

## Day 9 — Testing

- Write a unit test, component interaction test, and one E2E test outline.
- Review what to mock and what not to mock.
- Explain your test pyramid using one real feature.

## Day 10 — Accessibility and internationalization

- Keyboard-test a menu, form, modal, and table.
- Switch the page between LTR and RTL.
- Review semantics, focus, labels, live regions, logical CSS, and icon mirroring.

## Day 11 — Security, errors, and SSR

- Review XSS, `v-html`, CSRF, token storage, and environment variables.
- Explain hydration mismatches and request-scoped state.
- Design error handling for validation, timeout, 401, 403, 409, and 500 responses.

## Day 12 — Architecture

- Draw the feature-based application structure from memory.
- Decide where six different kinds of state belong.
- Explain design-system governance and module boundaries.

## Day 13 — System design practice

- Spend 30 minutes on the customer-management scenario.
- Spend 30 minutes on the reusable data-table scenario.
- Always start with requirements and finish with failure, measurement, and trade-offs.

## Day 14 — Mock interview and gap review

- Answer 15 rapid questions with a two-minute limit each.
- Complete one 30-minute system-design session.
- Record yourself and remove overly formal or vague wording.
- Review only the weak areas after the mock.

---

# Mock interview question bank

## Fast technical questions

1. How does Vue 3 reactivity work?
2. When do you choose `ref` over `reactive`?
3. What breaks when you destructure a reactive object?
4. When is a watcher a better choice than computed?
5. How do you cancel stale requests in a watcher?
6. Why use Composition API in a large application?
7. How do you define a good component boundary?
8. Why should props be read-only?
9. When are scoped slots useful?
10. Provide/inject or Pinia—how do you choose?
11. What makes a composable safe and reusable?
12. Which lifecycle hooks run in SSR?
13. When should you create a custom directive?
14. How does component `v-model` work?
15. What belongs in a router guard?
16. Which state should not go into Pinia?
17. How do async components affect performance?
18. What problem does Teleport solve?
19. What is Suspense responsible for?
20. When is `nextTick` necessary?
21. What causes a hydration mismatch?
22. How do you type and validate API data?
23. What is your Vue testing strategy?
24. How do you make a custom table accessible?
25. What Vue security risks concern you?
26. How do you investigate production errors?
27. How do you structure a large Vue codebase?

## Behavioral prompts tied to technical experience

Use **Situation → Constraint → Decision → Result → Learning**.

- Tell me about a difficult production bug.
- Describe a reusable component you designed.
- Tell me about a performance problem in a large table.
- Describe a disagreement about architecture.
- Tell me about improving accessibility or RTL support.
- Describe a migration you planned.
- Tell me about a time an abstraction became too complex.
- Describe how you handled an API or requirement change.

### Natural answer template

> “The situation was ___. The main constraint was ___. I considered ___ and ___. I chose ___ because ___. We measured the result using ___. If I did it again, I would ___.”

---

# Final interview strategy

Start with the simplest correct answer. Then add production depth.

A strong senior answer often sounds like this:

> “My default would be X because of Y. In a small component I would keep it local. If the state must survive routes or be shared by unrelated features, I would move it to a scoped store. The main risk is Z, so I would verify it with this metric or test.”

If you do not know a detail, do not bluff. Say:

> “I do not remember the exact API name, but the behavior I would need is ___. I would verify the framework contract before implementing it.”

That answer shows sound judgment—often more valuable than perfect recall.

