# React Interview Guide for Senior Frontend Developers

This guide is written for a frontend developer with 6+ years of experience. The answers use simple, natural English so you can say them aloud without sounding memorized.

The best senior-level answers usually follow this shape:

1. Give the direct answer.
2. Explain the tradeoff or mental model.
3. Give one real example.
4. Mention how you would verify or measure your decision.

Do not try to show that you know every API. Show that you can choose the right tool, explain why, and avoid common production problems.

---

## 30-second React summary

> React is a library for building user interfaces from reusable components. I describe the UI for the current props, state, and context, and React updates the DOM when those inputs change. I keep rendering pure, put user actions in event handlers, and use Effects only to synchronize with systems outside React. For larger applications, I keep state close to where it is used, separate server state from client UI state, and optimize only after measuring.

This answer already gives an interviewer several useful signals: component thinking, declarative UI, pure rendering, correct Effect usage, state ownership, and measured performance work.

---

## 1. Components and component design

### Interview-ready answer

> A React component is a JavaScript function that returns a description of the UI, usually with JSX. Its output depends on props, state, and context. I try to keep components focused and predictable. I split a component when it has more than one responsibility, when part of it is reusable, or when separating it makes testing and state ownership clearer.

### Clear explanation

A component should behave like a pure function during rendering: with the same props, state, and context, it should return the same JSX. Rendering should not send requests, change global variables, start timers, or mutate props.

Good boundaries follow product responsibilities, not an arbitrary line count. A large but cohesive form can be easier to understand than ten tiny wrapper components. Composition is usually better than building one component with many boolean props.

```tsx
type UserCardProps = {
  user: { id: string; name: string; avatarUrl: string };
  actions?: React.ReactNode;
};

function UserCard({ user, actions }: UserCardProps) {
  return (
    <article>
      <img src={user.avatarUrl} alt="" />
      <h2>{user.name}</h2>
      {actions}
    </article>
  );
}

// Composition keeps UserCard reusable.
<UserCard user={user} actions={<FollowButton userId={user.id} />} />;
```

### Common mistakes

- Doing side effects during render.
- Mutating props or state objects.
- Creating “god components” that fetch, transform, validate, and render everything.
- Splitting every few lines into a component without a useful boundary.
- Using many flags such as `isModal`, `isCard`, and `isCompact` instead of composition or clear variants.

### Likely follow-up questions

**What makes a component pure?** Given the same inputs, it returns the same JSX and does not change anything outside itself during render.

**Composition or inheritance?** Composition. React components accept children, render props, or component props, which covers normal reuse cases without class inheritance.

**When do you colocate logic?** I colocate code that changes together. I extract it when reuse, testing, or ownership becomes clearer.

---

## 2. Props vs state

### Interview-ready answer

> Props are read-only inputs passed by a parent. State is data owned by a component that can change over time and trigger a re-render. I avoid copying props into state because that creates two sources of truth. If a value can be calculated from props or existing state during render, I calculate it instead of storing it.

### Clear explanation

State ownership is more important than the API used to store it. Put state in the closest common owner of all components that need to read or update it. This is often called lifting state up.

```tsx
function CartSummary({ items }: { items: CartItem[] }) {
  // Derived value: no extra state or Effect needed.
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <output>Total: {total}</output>;
}
```

Use a functional update when the next value depends on the previous value:

```tsx
setQuantity(previous => previous + 1);
```

### Common mistakes

- Mutating state: `user.name = 'Sam'; setUser(user)`.
- Storing derived values such as a filtered list in state.
- Copying a prop into state and expecting it to stay synchronized.
- Putting all state at the application root.
- Using stale state in multiple updates instead of a functional updater.

### Likely follow-up questions

**Why is state described as a snapshot?** Each render sees the state values for that render. Calling a setter requests another render; it does not change the value already captured by the current handler.

**When is prop-to-state valid?** When the prop is only an initial value and the component intentionally owns later changes. I name it `initialValue` or use a `key` to reset the component explicitly.

**State or ref?** State is for information that affects rendering. A ref stores a mutable value without causing a re-render, such as a DOM node or timer ID.

---

## 3. Hooks and the Rules of Hooks

### Interview-ready answer

> Hooks let function components use React features such as state, context, refs, and Effects. I call Hooks only at the top level of a component or custom Hook, never inside a condition or loop. React relies on the same Hook call order on every render. I use the lint rules because they catch ordering and dependency mistakes.

### Clear explanation

Important Hooks and their normal purpose:

- `useState`: local state.
- `useReducer`: related state transitions with explicit actions.
- `useRef`: mutable data that does not drive rendering, or a DOM reference.
- `useContext`: read a context value.
- `useEffect`: synchronize with an external system after a commit.
- `useLayoutEffect`: measure or adjust layout before the browser paints; use rarely.
- `useMemo` and `useCallback`: performance optimizations.
- `useTransition` and `useDeferredValue`: keep urgent interactions responsive while less urgent UI updates.
- `useId`: stable IDs for accessibility relationships, not list keys.

```tsx
function Profile({ userId }: { userId: string }) {
  // Good: Hook order is always the same.
  const [expanded, setExpanded] = useState(false);
  const user = useUser(userId);

  if (!user) return <Spinner />;
  return <ProfileView user={user} expanded={expanded} onToggle={() => setExpanded(x => !x)} />;
}
```

### Common mistakes

- Calling a Hook after an early return or inside a condition.
- Treating `useMemo` and `useCallback` as semantic guarantees.
- Using a ref for visible data and wondering why the UI does not update.
- Using `useLayoutEffect` for ordinary data fetching.
- Disabling the Hooks linter instead of fixing the design.

### Likely follow-up questions

**Why must Hook order stay stable?** React associates Hook state with call position. Conditional calls shift those positions and connect the wrong state to later Hooks.

**When do you choose `useReducer`?** When several fields change together, transitions are easier to describe as actions, or I want logic that is easy to test separately.

**Does `useRef` persist between renders?** Yes. The ref object is stable, and changing `.current` does not request a render.

---

## 4. `useEffect` and cleanup

### Interview-ready answer

> I use `useEffect` to synchronize React with an external system: a network connection, browser API, subscription, timer, or third-party widget. I do not use it for values I can calculate during render or for normal user actions. The cleanup must undo the setup. It runs before the Effect runs again with changed dependencies and when the component unmounts.

### Clear explanation

Think “synchronization,” not “lifecycle method.” An Effect describes how one external connection follows current React inputs.

```tsx
function ChatRoom({ roomId }: { roomId: string }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return <Chat roomId={roomId} />;
}
```

Cancel or ignore stale async work:

```tsx
useEffect(() => {
  const controller = new AbortController();

  async function load() {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        signal: controller.signal,
      });
      setUser(await response.json());
    } catch (error) {
      if ((error as DOMException).name !== 'AbortError') setError(error);
    }
  }

  load();
  return () => controller.abort();
}, [userId]);
```

Dependency rules:

- No array: run after every commit.
- `[]`: no reactive dependencies; setup once per mount in production.
- `[a, b]`: rerun when either value changes by `Object.is` comparison.

In development Strict Mode, React intentionally performs an extra setup-cleanup-setup cycle. This finds missing cleanup and impure logic. It is not a production double request.

### Common mistakes

- Omitting dependencies to force an Effect to run less often.
- Using an Effect to derive state: `setFullName(first + last)`.
- Putting a user action such as submitting an order in an Effect.
- Making the Effect callback itself `async`; it would return a Promise instead of cleanup.
- Forgetting to remove listeners, clear timers, unsubscribe, or abort obsolete requests.
- Adding unstable objects or functions as dependencies without changing the design.

### Likely follow-up questions

**Why does my Effect loop?** It updates state, that update changes a dependency, and the dependency reruns the Effect. First ask whether an Effect is needed at all.

**`useEffect` vs `useLayoutEffect`?** `useEffect` normally runs after paint. `useLayoutEffect` runs after DOM changes but before paint, so it is useful for layout measurement but can block painting.

**How do you avoid stale closures?** Include reactive values as dependencies, use functional state updates, or use a ref when the latest mutable value must be read without driving the Effect.

**Is fetching in an Effect always wrong?** No, but a framework or server-state library usually handles caching, deduplication, races, SSR, and retries better.

---

## 5. `useMemo`, `useCallback`, and `React.memo`

### Interview-ready answer

> These are performance tools, not correctness tools. `useMemo` caches a calculated value, `useCallback` caches a function identity, and `React.memo` can skip a child render when its props are shallowly equal. I use them only when profiling shows useful work can be skipped, or when stable identity is needed by a memoized child or Hook dependency.

### Clear explanation

```tsx
const ProductRow = React.memo(function ProductRow({ product, onSelect }: Props) {
  return <button onClick={() => onSelect(product.id)}>{product.name}</button>;
});

function ProductList({ products, query }: ListProps) {
  const visible = useMemo(
    () => expensiveFilter(products, query),
    [products, query],
  );

  const handleSelect = useCallback((id: string) => {
    analytics.track('product_selected', { id });
  }, []);

  return visible.map(product => (
    <ProductRow key={product.id} product={product} onSelect={handleSelect} />
  ));
}
```

This helps only if `expensiveFilter` is meaningfully expensive and `ProductRow` receives stable props. A new `product` object on every render would break the memoization.

Modern React tooling may use the React Compiler to memoize values and components automatically. In an interview, still explain manual memoization because many production codebases use it, but acknowledge that compiler support can reduce the need for it.

### Common mistakes

- Wrapping everything in memoization “just in case.” Memoization also has comparison, memory, and complexity costs.
- Using `useMemo` for side effects.
- Assuming `React.memo` prevents every render. Context changes and the component's own state still render it.
- Passing a new object, array, or inline function to a memoized child on every render.
- Writing an expensive deep comparison that costs more than rendering.
- Relying on memoization for correctness.

### Likely follow-up questions

**Does a new function always cause a performance problem?** No. Creating functions is usually cheap. Identity matters only when a consumer uses it for comparison or dependencies.

**How does `React.memo` compare props?** By default, it compares each prop with `Object.is`, which is effectively a shallow prop comparison.

**How do you decide whether to memoize?** Profile a real interaction in a production build, find repeated expensive work, apply the smallest optimization, and measure again.

---

## 6. Controlled vs uncontrolled components

### Interview-ready answer

> A controlled input gets its current value from React state and reports changes through a handler. An uncontrolled input keeps its value in the DOM and I read it through a ref or form submission. Controlled inputs are useful for live validation and dependent UI. Uncontrolled inputs can be simpler for basic forms and file inputs. I do not switch an input between the two modes during its lifetime.

### Clear explanation

```tsx
// Controlled
function SearchBox() {
  const [query, setQuery] = useState('');
  return (
    <input
      value={query}
      onChange={event => setQuery(event.target.value)}
      aria-label="Search"
    />
  );
}

// Uncontrolled
function NameForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  function submit(event: React.FormEvent) {
    event.preventDefault();
    console.log(inputRef.current?.value);
  }
  return <form onSubmit={submit}><input ref={inputRef} defaultValue="Sam" /></form>;
}
```

A reusable component can support either a controlled API (`value`, `onChange`) or an uncontrolled API (`defaultValue`) but should define the contract carefully.

### Common mistakes

- Passing `value` without `onChange`, making an editable field read-only.
- Starting with `undefined` and later passing a string, which switches modes.
- Controlling every field at a high parent level and causing a large tree to render on every keystroke.
- Trying to set a file input's value programmatically.
- Using placeholder text instead of a label.

### Likely follow-up questions

**Which is better?** Neither always. I choose based on whether React needs the value during editing.

**What are `value` and `defaultValue`?** `value` controls the current value. `defaultValue` sets only the initial DOM value.

**How do form libraries reduce renders?** Many register uncontrolled fields and subscribe only the parts that need updates.

---

## 7. Context

### Interview-ready answer

> Context passes a value through a component tree without manually forwarding props at every level. I use it for stable, cross-cutting data such as theme, locale, authentication information, or a feature-specific dependency. It is not automatically a full state-management solution. When a provider value changes, consumers that read that context render again, so I keep contexts focused and provider values stable where it matters.

### Clear explanation

```tsx
type AuthValue = { user: User | null; signOut: () => void };
const AuthContext = createContext<AuthValue | null>(null);

function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be inside AuthProvider');
  return value;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const signOut = useCallback(() => setUser(null), []);
  const value = useMemo(() => ({ user, signOut }), [user, signOut]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
```

Do not memoize the provider value automatically. Do it when the provider renders often and the changed object identity causes real consumer work.

### Common mistakes

- Putting all application state in one context.
- Creating a new provider object every render in a hot part of the tree.
- Using context for state needed by only two nearby components.
- Hiding a component's real dependencies in many contexts, making reuse and testing harder.
- Expecting `React.memo` to block a context update in a consumer.

### Likely follow-up questions

**Context vs prop drilling?** A few explicit props are often clearer. Context helps when many layers only forward the same cross-cutting value.

**How do you improve context performance?** Split contexts by concern and update frequency, move providers closer to consumers, keep values stable when useful, or use selector-based external stores for frequent granular updates.

**Can context hold state?** Yes. Usually the provider owns state and exposes value plus actions. Context itself is the delivery mechanism.

---

## 8. State management

### Interview-ready answer

> I choose state management by state type and ownership, not by application size alone. Local UI state stays in the component. Shared state goes to the nearest common owner or a focused context. Server state is handled by a data-fetching layer with caching and invalidation. I use an external store when many distant components need frequent, granular updates or when the team needs stronger debugging and state conventions.

### Clear explanation

Useful categories:

| State | Example | Normal home |
|---|---|---|
| Local UI | open modal, selected tab | `useState` in the feature |
| Complex local | form wizard transitions | `useReducer` |
| URL state | page, filters, selected record | router/search parameters |
| Server state | users, orders, loading/cache status | framework/data library |
| Cross-cutting | theme, locale, current account | focused context |
| High-frequency shared client state | editor/canvas/store | external store with selectors |

Server state is different from client state: it has an external source of truth, can become stale, and needs caching, retries, deduplication, invalidation, and refetching.

```tsx
type State = { status: 'idle' | 'saving' | 'saved' | 'error' };
type Action = { type: 'save' } | { type: 'success' } | { type: 'failure' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'save': return { status: 'saving' };
    case 'success': return { status: 'saved' };
    case 'failure': return { status: 'error' };
  }
}
```

### Common mistakes

- Choosing a global store before understanding state ownership.
- Copying server responses into several client stores.
- Keeping shareable navigation state outside the URL.
- Exposing a store's entire state to every component instead of selecting a small slice.
- Storing duplicate or derived data that can become inconsistent.

### Likely follow-up questions

**Context vs Redux/Zustand-style store?** Context broadcasts provider value changes. External stores usually provide selectors, granular subscriptions, middleware, and dev tools. I choose based on update patterns and team needs.

**What is normalized state?** Entities are stored once by ID, and relationships use IDs. It prevents inconsistent duplicate copies and makes updates predictable.

**Where should filters live?** In the URL if users should bookmark, share, refresh, or use browser navigation with them; otherwise local state may be enough.

---

## 9. Rendering, commits, and re-renders

### Interview-ready answer

> A render means React calls components to calculate the next UI. A commit is when React applies the necessary changes to the DOM. A component renders initially and when its state changes, its parent renders, a context it reads changes, or an external-store subscription updates. A render does not mean the DOM changed. React compares the result and commits only the required mutations.

### Clear explanation

The normal flow is:

1. An update is triggered.
2. React renders the affected component tree and calculates the next element tree.
3. React commits DOM changes.
4. The browser paints.
5. Passive Effects run, with timing details depending on the interaction.

Parent render normally calls child components again. That is expected and often cheap. React does not “watch variables”; setters, context, and subscriptions schedule work.

```tsx
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <Child label="Stable text" /> {/* Called when Parent renders */}
    </>
  );
}
```

### Common mistakes

- Treating every render as a bug.
- Logging in development Strict Mode and assuming production renders twice.
- Performing a side effect in render because it “usually runs once.”
- Mirroring props to state to try to prevent renders.
- Memoizing before identifying expensive work.

### Likely follow-up questions

**Can React discard a render?** Yes. Modern rendering can pause, restart, or abandon render work before commit. That is why rendering must be pure.

**Does setting the same state always render?** React can bail out when the next value is `Object.is` equal, though it may call the component before bailing out in some cases.

**Render phase vs commit phase?** Render calculates and must be pure. Commit changes the host environment and runs the relevant lifecycle/effect work.

---

## 10. Batching and state snapshots

### Interview-ready answer

> React batches state updates so several setters can produce one render instead of several. State in an event handler is a snapshot from that render, so three calls to `setCount(count + 1)` all use the same old value. When the next state depends on the previous state, I use the functional form: `setCount(c => c + 1)`.

### Clear explanation

```tsx
function addThree() {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
  // React processes the updater queue; count increases by 3.
}
```

With modern roots, React automatically batches updates from more sources, including timeouts and Promises. Batching stops code from seeing half-finished UI. If integration code truly needs the DOM updated synchronously, `flushSync` exists, but it can hurt performance and should be rare.

### Common mistakes

- Reading state immediately after a setter and expecting the new value.
- Using the captured value for several dependent updates.
- Using `flushSync` as a normal solution.
- Forgetting that event handlers and async callbacks close over values from the render that created them.

### Likely follow-up questions

**Is `setState` asynchronous?** I avoid that shorthand. More precisely, it queues an update, and React schedules and often batches the render.

**How do you use the new value immediately?** Calculate it in a local variable, use a functional updater, or react to the committed value in the right synchronization layer.

**What does batching guarantee?** It groups compatible updates before rendering; it does not make multiple updates to the same state magically accumulate unless functional updaters are used.

---

## 11. Reconciliation

### Interview-ready answer

> Reconciliation is how React compares the previous and next element trees and decides what can be preserved and what must change. If the element type and position match, React generally preserves the component instance and state. If the type changes, or its identity changes through a key, React replaces that subtree and resets its state.

### Clear explanation

React uses practical heuristics rather than comparing every possible tree arrangement. Type, position, and key define identity.

```tsx
// Same type in the same position: state is preserved.
{isFancy ? <Counter className="fancy" /> : <Counter className="plain" />}

// Different types: subtree is replaced and state resets.
{isFancy ? <FancyCounter /> : <PlainCounter />}
```

To reset state intentionally, change a key:

```tsx
<Chat key={selectedUser.id} user={selectedUser} />
```

### Common mistakes

- Assuming JSX text position rather than tree position determines identity.
- Defining a component inside another component; it creates a new component type on every parent render and can reset state.
- Using a random key to “fix” a rendering issue.
- Expecting hidden and removed components to preserve state in the same way.

### Likely follow-up questions

**What causes state to reset?** Removing the component, changing its type at that position, or changing its key.

**Is reconciliation the same as DOM diffing?** DOM diffing is part of the result, but reconciliation is broader: it matches React elements/component identities and decides what work is needed.

**What is the virtual DOM?** A common name for the in-memory React element representation used to calculate UI changes. The useful point is declarative comparison, not that it is always faster than direct DOM code.

---

## 12. Keys

### Interview-ready answer

> Keys give sibling elements stable identity across renders. A good key comes from the data, is unique among siblings, and stays stable. Keys help React preserve the correct state when items are inserted, removed, or reordered. I avoid array indexes for dynamic lists and never generate random keys during render.

### Clear explanation

```tsx
function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
}
```

An index key can be safe for a truly static list that will never reorder, insert, delete, or hold item-specific state. A database ID or durable client-generated ID is normally better.

Keys are local to siblings. They are not passed to the child as a normal prop.

### Common mistakes

- `key={Math.random()}`: every render remounts every item.
- `key={index}` in a sortable or editable list: state may move to the wrong row.
- Expecting the child to read `props.key`.
- Using a non-unique display label.
- Putting a key inside `TodoItem` rather than on the element returned by `map`.

### Likely follow-up questions

**Why can index keys show the wrong input value?** When order changes, React matches by index, so the component state for the old row is reused for different data.

**Must keys be globally unique?** No, only unique among siblings in that list.

**Can keys be useful outside lists?** Yes. A key can explicitly distinguish component identity or reset state, such as a form for a different customer.

---

## 13. Fiber and concurrent rendering

### Interview-ready answer

> Fiber is React's internal architecture for representing component work as units that can be prioritized, paused, resumed, or discarded. It separates rendering work from the final commit. This supports responsive features such as transitions and Suspense. As an application developer, the important rule is that render code must be pure because React may run it more than once without committing it.

### Clear explanation

Do not over-explain Fiber internals unless asked. The practical mental model is:

- Urgent work, such as typing, should stay responsive.
- Non-urgent work can be marked as a transition.
- React may prepare a UI in the background.
- DOM commits remain coordinated; users do not see a half-committed tree.

```tsx
function SearchPage() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleChange(value: string) {
    setInput(value); // urgent: keep the input responsive
    startTransition(() => setQuery(value)); // non-urgent: update results
  }

  return <><SearchInput value={input} onChange={handleChange} />
    {isPending && <span>Updating…</span>}<Results query={query} /></>;
}
```

“Concurrent” does not normally mean components run on multiple JavaScript threads. It means rendering work can be scheduled and interrupted.

### Common mistakes

- Saying Fiber is the virtual DOM.
- Depending on render being called exactly once.
- Putting network calls, mutations, or analytics in render.
- Marking the controlled input update itself as a transition.
- Using transitions to make slow code fast; they improve scheduling, not raw computation cost.

### Likely follow-up questions

**What is the difference between a transition and debouncing?** A transition changes render priority and may interrupt stale work. Debouncing waits for a quiet time and reduces how often work starts. They solve related but different problems.

**What is Suspense?** A boundary that shows a fallback while compatible code or data needed by its children is not ready. It also coordinates streaming and transitions in supported frameworks.

**Can a render happen without a commit?** Yes. React may abandon obsolete work. Effects do not run for an uncommitted render.

---

## 14. Custom Hooks

### Interview-ready answer

> A custom Hook is a function whose name starts with `use` and that composes other Hooks to reuse stateful behavior. It shares logic, not state itself—each call has its own state unless the Hook connects to a shared external store or context. I design a custom Hook around one clear responsibility and return a small, stable API.

### Clear explanation

```tsx
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  return isOnline;
}
```

Custom Hooks are useful boundaries for subscriptions, data access, reusable interaction logic, and hiding framework details from UI components.

### Common mistakes

- Calling an ordinary helper `useSomething` even though it uses no Hooks.
- Creating one enormous Hook that mixes unrelated concerns.
- Returning a new large object API and then relying on its identity.
- Hiding important side effects behind a surprising name.
- Assuming two calls share state.

### Likely follow-up questions

**Hook vs utility function?** A Hook can call Hooks and follows their rules. A utility is a normal function and can be called anywhere.

**How do you test a custom Hook?** Prefer testing it through a small component's observable behavior. Test the Hook directly when its state transitions are complex and the direct test adds clarity.

**Should a custom Hook return an object or array?** An array is convenient for a small tuple with conventional positions. An object is clearer for several named values and is easier to extend.

---

## 15. Error boundaries

### Interview-ready answer

> An error boundary catches errors thrown while rendering its descendant tree and shows fallback UI instead of breaking the whole screen. It also gives a place to log the error. Traditional error boundaries are class components, though frameworks and libraries often provide wrappers. They do not catch ordinary event-handler errors, most asynchronous callback errors, server-side rendering errors, or errors inside the boundary itself.

### Clear explanation

```tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    reportError(error, info);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
```

Place boundaries around meaningful recovery areas: a route, dashboard widget, rich editor, or third-party integration. A single root boundary is a final safety net but gives poor local recovery.

### Common mistakes

- Wrapping every small component in a boundary.
- Expecting a boundary to catch a rejected Promise in an event handler.
- Showing technical error details to users.
- Logging without useful route, release, component stack, and user-safe context.
- Providing no reset or retry path.

### Likely follow-up questions

**How do you handle event-handler errors?** Use normal `try/catch`, update error state, and report the error.

**How do you reset a boundary?** The boundary can expose retry behavior, or its parent can change a key after the underlying condition changes.

**Error boundary vs Suspense boundary?** Error boundaries handle failures. Suspense boundaries handle waiting for supported asynchronous resources. Applications often use both.

---

## 16. Forms and validation

### Interview-ready answer

> For small forms, local controlled or uncontrolled inputs are enough. For large forms, I use a form library to manage registration, touched state, validation, and performance. I validate for user experience on the client, but the server is the security and business-rule authority. I keep accessible labels and errors, prevent double submission, preserve user input on recoverable failures, and focus the first invalid field when useful.

### Clear explanation

```tsx
function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    // Send to server and handle pending/success/error states.
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" value={email}
        onChange={e => setEmail(e.target.value)}
        aria-invalid={Boolean(error)} aria-describedby={error ? 'email-error' : undefined} />
      {error && <p id="email-error" role="alert">{error}</p>}
      <button type="submit">Save</button>
    </form>
  );
}
```

Validation timing is a product decision. Showing every error before a user interacts is noisy. A common approach is validate on submit, then validate touched invalid fields as they change.

### Common mistakes

- Treating client validation as a security control.
- Validating on every keystroke with expensive schema work across the whole form.
- Disabling submit with no explanation.
- Using color alone for errors or failing to connect error text with its field.
- Losing all input after a server error.
- Allowing repeated submissions while a request is pending.

### Likely follow-up questions

**How do you handle a large form?** Split it by sections, use field-level subscriptions, model cross-field rules explicitly, and keep server validation errors mapped to fields or form-level feedback.

**Where should validation live?** UX validation can run in the client. Authoritative business and security validation must run on the server. Sharing a schema can reduce drift but does not remove server validation.

**How do you upload files?** Use a file input and `FormData`, validate type/size for UX, validate again on the server, and show progress/cancellation when valuable.

---

## 17. Routing

### Interview-ready answer

> Client-side routing maps the URL to UI without a full document reload. I treat the URL as user-visible state: route parameters identify resources, search parameters hold shareable filters or pagination, and navigation should preserve browser back/forward behavior. In production I also think about nested layouts, data loading, code splitting, error states, authentication, scroll and focus management, and direct URL requests on the server.

### Clear explanation

```tsx
// Library-neutral idea; exact APIs depend on the router.
const routes = [
  {
    path: '/projects/:projectId',
    element: <ProjectLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'settings', element: <ProjectSettings /> },
    ],
  },
];
```

Prefer links for navigation because they support open-in-new-tab, keyboard use, and browser semantics. Use imperative navigation after an action such as successful creation.

Authentication checks improve UX, but the server/API must still authorize every protected operation.

### Common mistakes

- Using clickable `div` elements instead of links.
- Storing shareable filters only in component state.
- Protecting a route in the client and calling it authorization.
- Forgetting that refreshing `/projects/123` must be supported by hosting/server configuration.
- Fetching after navigation in a waterfall when the router/framework can load in parallel.
- Ignoring document title, focus, and announcements after navigation.

### Likely follow-up questions

**Route param vs search param?** A route param normally identifies the main resource or hierarchy. Search params represent optional view state such as filter, sort, and page.

**How do you lazy-load a route?** Split its code at the route boundary, show an intentional pending UI, preload likely navigation when useful, and handle chunk-load failures.

**How do you protect routes?** Use client checks for navigation UX and server-side authentication/authorization for real protection.

---

## 18. Testing React applications

### Interview-ready answer

> I test behavior from the user's point of view. Most tests render a component, interact through accessible roles and labels, and assert visible outcomes. I mock network boundaries rather than component internals. I use unit tests for pure logic, integration tests for components and flows, and a smaller set of end-to-end tests for critical journeys. I avoid testing implementation details such as state variables or exact component structure.

### Clear explanation

```tsx
it('submits a valid email', async () => {
  const user = userEvent.setup();
  render(<NewsletterForm />);

  await user.type(screen.getByRole('textbox', { name: /email/i }), 'sam@example.com');
  await user.click(screen.getByRole('button', { name: /subscribe/i }));

  expect(await screen.findByText(/thanks for subscribing/i)).toBeInTheDocument();
});
```

A useful test pyramid for frontend applications:

- Many fast tests for pure functions and focused component behavior.
- Integration tests for a feature with realistic providers and mocked network responses.
- A few browser tests for sign-in, checkout, permissions, or other critical paths.

Accessibility queries make tests more resilient and encourage semantic markup.

### Common mistakes

- Selecting by CSS class or test ID when a role or label is available.
- Shallow rendering and mocking every child.
- Asserting internal state or that a Hook was called.
- Overusing snapshots for dynamic UI.
- Making all tests end-to-end, resulting in slow and fragile feedback.
- Ignoring loading, empty, error, race, and permission states.

### Likely follow-up questions

**What should you mock?** External boundaries such as HTTP, time, and browser APIs when needed—not the component behavior being tested.

**When is `data-testid` acceptable?** When there is no meaningful accessible selector, such as a non-semantic visualization element. It is a fallback, not a first choice.

**How do you test a custom Hook?** Usually through a test component that exposes its user-visible behavior; directly when the Hook is a reusable library-like unit with complex transitions.

**What makes a test valuable?** It catches a meaningful regression, fails for a clear reason, and stays stable during harmless refactors.

---

## 19. Performance

### Interview-ready answer

> I start with measurement, not memoization. I use browser performance tools, React Profiler, and production metrics to find the slow interaction. Then I reduce the largest cost: unnecessary network work, a large bundle, expensive rendering, too many DOM nodes, or frequent updates. Common fixes are route-level code splitting, list virtualization, keeping state local, selector-based subscriptions, caching expensive calculations, and using transitions for non-urgent updates.

### Clear explanation

Performance has several layers:

1. **Loading:** JavaScript size, images, fonts, caching, server response, code splitting.
2. **Rendering:** expensive component work, large trees, unnecessary updates.
3. **Browser work:** layout, paint, memory, long tasks, animation.
4. **Network/data:** waterfalls, duplicate requests, oversized responses.
5. **Perceived performance:** useful loading states, streaming, optimistic updates, responsive input.

For a table with 50,000 rows, memoizing each row is not the first answer. Render only the visible window. For a search that filters a moderate list, measure the filter, consider a deferred value or transition, and possibly move truly heavy computation off the main thread.

```tsx
const deferredQuery = useDeferredValue(query);
const results = useMemo(
  () => search(items, deferredQuery),
  [items, deferredQuery],
);
```

### Common mistakes

- Optimizing development-mode logs instead of a production build.
- Adding `useMemo`, `useCallback`, and `memo` everywhere.
- Ignoring network waterfalls and bundle size while tuning tiny renders.
- Rendering thousands of hidden DOM nodes.
- Using unstable keys, which remount components and lose caches/state.
- Comparing average performance only; slow-tail users and low-end devices matter.

### Likely follow-up questions

**How do you diagnose a slow interaction?** Reproduce it, record a browser trace and React profile, identify whether time is JavaScript/render/layout/network, change one cause, and compare production measurements.

**Debounce vs throttle?** Debounce waits until events stop; throttle limits how often work runs. Both reduce work. A transition instead changes priority.

**When do you virtualize?** When a long list creates too many DOM nodes or expensive row renders. I also test keyboard access, variable heights, focus, and screen-reader behavior.

**What metrics matter?** User-centered loading and responsiveness metrics, plus task-specific timings such as search response or checkout step completion. Metrics should be segmented by device and route.

---

## 20. Accessibility

### Interview-ready answer

> I start with semantic HTML because it provides keyboard behavior and accessibility information by default. Every control needs an accessible name, all functionality must work with a keyboard, focus must be visible and managed during dialogs and route changes, and status or error messages must be announced appropriately. I use ARIA to fill semantic gaps, not to replace native elements, and I test with keyboard navigation, automated checks, and a screen reader for important flows.

### Clear explanation

```tsx
function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Delete item">
      <TrashIcon aria-hidden="true" />
    </button>
  );
}
```

For a modal dialog:

- Use a tested accessible dialog primitive when possible.
- Move focus into it when opened.
- Keep focus inside while modal.
- Close with Escape when appropriate.
- Return focus to the trigger.
- Give it a name with a heading or `aria-label`.
- Prevent interaction with background content.

Accessibility is a design and engineering requirement, not a final audit task.

### Common mistakes

- Using `div onClick` instead of `button`.
- Removing focus outlines without a visible replacement.
- Using placeholder as the only label.
- Adding ARIA roles that conflict with native semantics.
- Using `aria-live` too broadly and creating noisy announcements.
- Relying only on automated tests; they cannot judge every interaction or accessible name.
- Using color alone to convey status.

### Likely follow-up questions

**Why prefer a button over a clickable div?** A button already has keyboard activation, focusability, role, and disabled semantics.

**`aria-label` vs visible label?** Prefer a visible label because it helps everyone. `aria-label` is useful when a clear visible label is not practical, such as an icon-only button.

**How do you test accessibility?** Semantic queries in component tests, automated rules, full keyboard use, zoom/contrast checks, and screen-reader testing of critical journeys.

**What is the first rule of ARIA?** Use a native HTML element with the required semantics and behavior when one exists.

---

## 21. Security

### Interview-ready answer

> React escapes values rendered in JSX, which reduces accidental HTML injection, but it does not make the application secure by itself. I avoid `dangerouslySetInnerHTML`; if rich HTML is required, I sanitize it with a well-maintained allowlist-based library. I treat all client data as untrusted, enforce authentication and authorization on the server, protect cookies and requests appropriately, keep secrets out of frontend bundles, and use browser controls such as Content Security Policy as defense in depth.

### Clear explanation

```tsx
// React escapes this text; it is rendered as text, not markup.
<p>{commentFromUser}</p>

// Risky unless trustedHtml has been correctly sanitized.
<div dangerouslySetInnerHTML={{ __html: trustedHtml }} />
```

Major frontend risks to discuss:

- **XSS:** untrusted HTML, unsafe URL handling, third-party scripts, DOM injection.
- **CSRF:** relevant when browsers automatically send credentials such as cookies; use SameSite settings and server-side CSRF defenses where needed.
- **Broken authorization:** hiding a button is not permission enforcement; the API must reject unauthorized actions.
- **Token exposure:** avoid long-lived sensitive tokens in locations accessible to injected scripts; cookie/token design depends on the architecture and threat model.
- **Supply chain:** review dependencies, lock versions, patch vulnerabilities, and limit unnecessary packages/scripts.

### Common mistakes

- Saying React prevents XSS completely.
- Trusting client-side validation or role checks.
- Putting API secrets in environment variables that are bundled into client code.
- Building HTML with user data and passing it to `dangerouslySetInnerHTML`.
- Logging tokens or sensitive personal data.
- Using `target="_blank"` without considering opener protection in environments that do not provide it automatically.

### Likely follow-up questions

**Is local storage safe for tokens?** JavaScript can read it, so an XSS can steal its contents. The right design depends on the application, but secure, HttpOnly, SameSite cookies are often considered for session credentials, together with appropriate CSRF protection.

**What does React escape?** Text values and attribute values rendered through normal JSX. Unsafe direct DOM/HTML APIs and dangerous URLs still require care.

**Can frontend code contain secrets?** No. Anything delivered to the browser can be inspected. Keep secrets on the server.

**How do you render user-authored rich text?** Parse and sanitize it using a strict allowlist, restrict URLs and dangerous attributes, add CSP, and test known attack payloads.

---

## 22. CSR, SSR, SSG, and hydration

### Interview-ready answer

> CSR builds most of the page in the browser after JavaScript loads. SSR creates HTML on the server for each request. SSG creates HTML ahead of time, usually at build time. SSR and SSG can improve initial content and discoverability, but they add server/build and hydration constraints. Hydration is when React attaches behavior to server-generated HTML and makes it interactive. The first client render must match the server output.

### Clear explanation

| Strategy | HTML created | Good fit | Main tradeoff |
|---|---|---|---|
| CSR | In the browser | authenticated tools, highly interactive apps | slower first useful content on weak devices; limited no-JS HTML |
| SSR | Per request/on server | personalized or frequently changing pages | server cost, caching complexity, hydration work |
| SSG | Ahead of requests | docs, marketing, content that changes less often | rebuild/revalidation and large-site build cost |
| Hybrid | Per route or section | most modern production sites | more concepts and cache rules to manage |

```tsx
// Browser entry for HTML that was rendered on the server.
hydrateRoot(document.getElementById('root')!, <App />);
```

Hydration mismatch example:

```tsx
// Bad during render: server and browser may produce different text.
<span>{new Date().toLocaleTimeString()}</span>
```

Better approaches include passing a server-created value as data, using a stable format, or intentionally rendering client-only information after hydration. Do not hide mismatch warnings without understanding the cause.

Streaming SSR can send useful HTML in parts. Suspense boundaries can define where fallbacks appear and where later content is revealed. Hydration still has a JavaScript and main-thread cost, so “server-rendered” does not automatically mean fast.

### Common mistakes

- Accessing `window`, `document`, or browser storage during server rendering.
- Rendering random, time-based, locale-dependent, or browser-only values differently on server and client.
- Assuming SSR removes the need to optimize JavaScript.
- Fetching the same initial data again immediately after hydration.
- Treating SSG pages as permanently static; many systems support revalidation.
- Choosing one rendering mode for the whole product when routes have different needs.

### Likely follow-up questions

**What is hydration?** React reuses server HTML, connects it to the component tree, installs behavior, and makes it interactive rather than recreating all markup from scratch.

**What causes a hydration mismatch?** Different server/client data, time or randomness, invalid HTML nesting, browser-only checks during render, locale differences, or markup changed by another script.

**SSR vs React Server Components?** SSR produces HTML on the server. Server Components execute only on the server and send a component payload that can be combined with Client Components. They are related but different concepts, and framework support defines the full model.

**How do you choose a strategy?** Per route, based on personalization, freshness, SEO/discoverability, cacheability, infrastructure, and interaction needs. I validate the choice with real performance data.

---

## 23. Senior-level architecture questions

### How would you design a large React feature?

> I start from user flows and data ownership. I define route boundaries, server data and mutations, local interaction state, loading and error states, and permission rules. I keep feature code together, expose a small public API, and separate reusable UI from product-specific behavior only when that boundary is real. I plan observability, accessibility, tests, and failure recovery before optimizing.

A practical feature folder might look like this:

```text
projects/
  api/              # queries, mutations, data types
  components/       # feature UI
  hooks/            # feature-specific reusable behavior
  routes/           # route-level composition and loading/error UI
  model/            # pure domain rules or reducer
  tests/
  index.ts           # small public API
```

The exact folders matter less than clear dependencies and ownership. Avoid a global `components`, `hooks`, and `utils` dumping ground when product features are easier to understand together.

### How do you review React code?

> I first check correctness: state ownership, pure rendering, Effect synchronization, races, cleanup, identity, error states, and accessibility. Then I check maintainability: component boundaries, naming, data contracts, test value, and coupling. Finally I consider performance, backed by the expected update pattern or measurements. I do not request memoization just because a component re-renders.

### How do you migrate an older React application?

> I make the migration incremental. I add tests or monitoring around critical behavior, update supported APIs and the root first, enable linting and Strict Mode in manageable areas, then convert or refactor feature by feature. I separate required compatibility changes from optional architecture changes so regressions are easier to isolate.

### How do you explain a tradeoff?

Use this sentence pattern:

> I would start with **A** because our main constraint is **X**. The cost is **Y**. If measurement or product needs show **Z**, I would move to **B**.

Example:

> I would start with local state because only this feature uses the value and it keeps ownership clear. The cost is that sharing it later needs a small refactor. If several distant routes need frequent granular access, I would consider an external store with selectors.

---

## 24. Fast follow-up round

**Why should component render be pure?** React can render more than once, pause work, or discard it. Side effects during render would run at unpredictable times.

**What triggers a re-render?** State updates, parent renders, consumed context changes, and subscribed external-store updates.

**Does a re-render always update the DOM?** No. React commits only the differences that affect the host UI.

**When should you use an Effect?** To synchronize with something outside React, not to calculate ordinary render data.

**Why does an Effect run twice in development?** Root Strict Mode runs an extra setup-cleanup cycle to expose missing cleanup and impure code.

**Why use a functional state update?** When the next state depends on the previous state, especially with queued or batched updates.

**What is a stale closure?** A function reads props or state from the render in which that function was created, even if newer renders exist.

**What does `React.memo` do?** It can skip rendering a component when its props compare equal. It does not block its own state or consumed context updates.

**What is the best key?** A stable unique ID from the data.

**Why not use array index as key?** Insertions and reordering can attach component state to the wrong item.

**Context or global store?** Use focused context for relatively stable cross-cutting values; consider a store for frequent granular shared updates and stronger store tooling.

**Controlled or uncontrolled form?** Controlled when React needs the value during editing; uncontrolled when the DOM can own it and it is read on demand.

**What is reconciliation?** Matching old and new React trees to preserve identity and decide what changes to commit.

**What is Fiber?** React's work representation and scheduling architecture, which allows render work to be prioritized and interrupted.

**What is hydration?** Connecting React behavior to server-generated HTML, with a matching initial client tree.

**How do you improve React performance?** Measure, find the dominant cost, apply the smallest suitable fix, and measure again.

**How do you secure a React app?** Escape by default, sanitize intentional HTML, keep secrets and authorization on the server, protect sessions/requests, reduce third-party risk, and use CSP as defense in depth.

---

## 25. A practical study plan

### Pass 1: Be able to say these without notes

1. React and component model.
2. Props vs state and state ownership.
3. `useEffect` as external synchronization.
4. What causes a re-render.
5. Reconciliation and keys.
6. The three memoization tools and why not to overuse them.
7. Controlled vs uncontrolled inputs.
8. Context vs external state management.
9. CSR, SSR, SSG, and hydration.
10. How you measure performance.

### Pass 2: Code from memory

- A subscription Effect with cleanup.
- A request Effect with abort handling.
- A reducer with typed actions.
- A custom Hook.
- An accessible form field with an error.
- A memoized expensive calculation plus a memoized child.
- A transition that keeps an input responsive.
- An error boundary.

### Pass 3: Prepare real stories

For each area, prepare one production story in this format:

- **Situation:** What user or engineering problem existed?
- **Constraint:** Scale, deadline, browser support, team, legacy system, or accessibility need.
- **Decision:** What did you choose, and why?
- **Tradeoff:** What did the choice cost?
- **Result:** Use a measurable result when possible.
- **Learning:** What would you repeat or change?

Strong story topics:

- A render or bundle performance problem you measured and fixed.
- A race condition or stale Effect you debugged.
- State that was moved, normalized, or removed.
- A reusable component API you designed.
- An accessibility issue you found and prevented from returning.
- A migration from legacy patterns or another framework.
- A testing strategy that reduced regressions without making tests brittle.

---

## 26. Final interview checklist

Before answering:

- Clarify whether the interviewer means local state, server state, or shared client state.
- State the simple default before describing advanced options.
- Mention the tradeoff, not only the API.
- Give one concrete production example.
- For performance questions, say how you would measure.
- For security, say what must be enforced on the server.
- For accessibility, start with semantic HTML and keyboard behavior.
- For Effects, ask what external system is being synchronized.
- Avoid absolute claims such as “always,” “never re-renders,” or “React prevents XSS.”

If you do not remember an API detail, say:

> I do not remember the exact API signature, but the design I would use is…

That is better than guessing. Senior interviewers care more about a correct mental model and sound decisions than perfect recall.

---

## Official references

- [React: Thinking in React](https://react.dev/learn/thinking-in-react)
- [React: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [React: Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- [React: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [React: Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [React: Built-in Hooks](https://react.dev/reference/react/hooks)
- [React: `useEffect`](https://react.dev/reference/react/useEffect)
- [React: `useMemo`](https://react.dev/reference/react/useMemo)
- [React: `memo`](https://react.dev/reference/react/memo)
- [React: Strict Mode](https://react.dev/reference/react/StrictMode)
- [React DOM: `hydrateRoot`](https://react.dev/reference/react-dom/client/hydrateRoot)

