# Senior TypeScript Interview Guide

Tailored for a senior frontend developer with 6+ years of JavaScript, frameworks, and enterprise applications.

## How to use this guide

For each topic, first say the **interview answer** aloud. Then explain the code without reading it. A senior answer should usually cover four things: what the feature is, why it matters, its limits, and the trade-off you would make in production.

---

## 1. Type inference and annotations

**Interview answer:** TypeScript often infers a type from a value or context, so I avoid annotations that only repeat what the compiler already knows. I add explicit types at public boundaries—function parameters, exported APIs, state models, and places where I want to enforce a contract.

**Simple explanation:** Inference reduces noise. An annotation communicates intent and prevents a later edit from silently changing an important contract.

```ts
const count = 3; // inferred as number

function formatUser(user: User): string {
  return `${user.name} (${user.id})`;
}
```

**Common mistakes:** Annotating every local variable; relying on inference for an exported API whose contract should remain stable; confusing `const n = 3` (literal `3`) with mutable `let n = 3` (`number`).

**Trade-off:** More annotations improve clarity and API stability, but excessive annotations create noise and can make refactoring harder.

**Likely follow-ups:** Where do you insist on annotations? How does contextual typing work for callbacks? Why annotate return types on exported functions?

## 2. `any`, `unknown`, `never`, and `void`

**Interview answer:** `any` opts out of type checking. `unknown` accepts any value but forces me to narrow it before use, so it is safer at untrusted boundaries. `void` describes a function whose result should not be used. `never` means a value cannot exist or a function cannot complete normally; it is useful for exhaustive checks.

```ts
function parseInput(value: unknown): string {
  if (typeof value === "string") return value;
  throw new Error("Expected a string");
}

function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${String(value)}`);
}
```

**Common mistakes:** Using `any` for convenience; treating `unknown` as usable without a guard; thinking `void` means a function literally returns no JavaScript value; using `never` where `void` is intended.

**Trade-off:** `any` can speed up a temporary migration, but it moves failures to runtime. Prefer `unknown`, narrow it, and contain unavoidable `any` at a small boundary.

**Follow-ups:** Why can an `async` function be `Promise<void>`? When is `never` inferred? What is the difference between `unknown` and `any` in assignment?

## 3. Union and intersection types

**Interview answer:** A union `A | B` means a value may be one of several types, so I can only use members common to all options until I narrow it. An intersection `A & B` requires a value to satisfy both types. I use unions for alternatives and intersections mainly for composing compatible object capabilities.

```ts
type Id = string | number;
type Audited = { createdAt: Date; updatedAt: Date };
type User = { id: Id; name: string } & Audited;
```

**Common mistakes:** Assuming a union exposes every member from every branch; intersecting incompatible primitives or conflicting properties, producing `never`; building unreadable “type puzzles” with many intersections.

**Trade-off:** Unions model real alternatives clearly. Intersections reduce repetition, but named domain types are often easier to understand than deep composition.

**Follow-ups:** What happens to `{x: string} & {x: number}`? How do you narrow a union? Union of functions versus function with union parameters?

## 4. Literal types

**Interview answer:** Literal types represent exact values such as `"loading"` or `200`, not every string or number. They let the compiler model a closed set of valid states and catch typos.

```ts
type Theme = "light" | "dark" | "system";
function setTheme(theme: Theme) {}

setTheme("dark");
// setTheme("blue"); // error
```

**Common mistakes:** Widening a value to `string` too early; duplicating the same literal list in runtime code and types; using literal unions for an open-ended set.

**Trade-off:** Literal unions give autocomplete and safety for stable finite values. For values supplied by third parties, allow extension, for example `KnownValue | (string & {})`, or validate a plain string.

**Follow-ups:** Why does `let status = "open"` usually become `string`? How does `as const` preserve literals?

## 5. Interfaces versus type aliases

**Interview answer:** Both can describe object shapes. Interfaces are extendable and support declaration merging, which is useful for public or augmentable contracts. Type aliases can also represent unions, primitives, tuples, mapped types, and conditional types. In an application I choose a consistent convention; I normally use interfaces for object contracts and types for composition or unions.

```ts
interface Employee extends Person { employeeId: string }
type Result<T> = { ok: true; data: T } | { ok: false; error: AppError };
```

**Common mistakes:** Claiming one is always faster or always better; accidental interface merging; creating long inheritance chains.

**Trade-off:** Interface merging is powerful for libraries and module augmentation, but closed aliases can be more predictable. Composition is often clearer than inheritance.

**Follow-ups:** Can a type alias extend an interface? What is declaration merging? Which produces better error messages today?

## 6. Optional and `readonly` properties

**Interview answer:** `prop?: T` means the property may be absent; it is not always the same domain meaning as “present with `undefined`.” `readonly` prevents assignment through that TypeScript reference, but it is shallow and provides no runtime immutability.

```ts
interface Config {
  readonly apiUrl: string;
  timeoutMs?: number;
}

const timeout = config.timeoutMs ?? 5_000;
```

**Common mistakes:** Using truthiness when `0` or `""` is valid; believing `readonly` freezes nested objects; overusing optional fields instead of modeling separate states.

**Trade-off:** Optional fields are convenient for configuration and patches. For business states, a discriminated union may express valid combinations more safely. Enable `exactOptionalPropertyTypes` when absence and explicit `undefined` must differ.

**Follow-ups:** `Readonly<T>` versus `Object.freeze`? How does `exactOptionalPropertyTypes` change assignments?

## 7. Narrowing and type guards

**Interview answer:** Narrowing is TypeScript refining a broad type from control flow. I prefer built-in checks such as `typeof`, `instanceof`, `in`, equality, and discriminants. For repeated domain checks I write a type predicate, but the function must really validate what it claims.

```ts
type ApiUser = { id: string; name: string };

function isApiUser(value: unknown): value is ApiUser {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.id === "string" && typeof v.name === "string";
}
```

**Common mistakes:** Writing a predicate that only checks one field; using `as` instead of proving the type; losing narrowing after mutation or across unsafe callbacks.

**Trade-off:** Handwritten guards are dependency-free but can drift from types. A runtime schema is better for complex external data.

**Follow-ups:** Predicate `value is T` versus assertion `asserts value is T`? Why is `typeof null === "object"` relevant?

## 8. Generics and constraints

**Interview answer:** Generics preserve relationships between input and output types. A constraint limits what a type parameter must support. I use generics when callers gain specific type information—not just to replace a concrete type with a letter.

```ts
function getById<T extends { id: string }>(items: readonly T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

**Common mistakes:** Using a generic only once (`function log<T>(x: T): void` adds little); returning an unchecked cast; using `{}` to mean object; over-generalizing a simple API.

**Trade-off:** Generics produce reusable, precise APIs, but complex generic signatures hurt usability and diagnostics. Start concrete, generalize when a real relationship appears.

**Follow-ups:** Constraint versus default type parameter? Why is `K extends keyof T` useful? When would overloads be clearer?

## 9. `keyof`, `typeof`, and indexed access

**Interview answer:** In a type position, `keyof T` gives the known property keys of `T`. `typeof value` captures the static type of a runtime value. `T[K]` looks up the value type at key `K`. Together they keep types synchronized with real objects.

```ts
const roles = {
  admin: { canDelete: true },
  viewer: { canDelete: false }
} as const;

type Role = keyof typeof roles; // "admin" | "viewer"
type AdminConfig = (typeof roles)["admin"];
```

**Common mistakes:** Confusing type-level `typeof` with runtime `typeof`; expecting `Object.keys` to return `(keyof T)[]` for arbitrary objects; indexing with an unconstrained string.

**Trade-off:** Deriving types removes duplication, but a runtime object should not become an accidental, unreadable source of every domain type.

**Follow-ups:** Why is `keyof` sometimes `string | number`? How do index signatures affect it?

## 10. Mapped types

**Interview answer:** A mapped type iterates over property keys to transform a shape. Built-in utilities such as `Partial` and `Readonly` are mapped types. I use them for systematic transformations, not to hide a poorly modeled domain.

```ts
type Nullable<T> = { [K in keyof T]: T[K] | null };
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] };
```

**Common mistakes:** Forgetting mapped types are shallow; losing optional/readonly modifiers unintentionally; creating clever key remapping nobody can maintain.

**Trade-off:** They remove repeated declarations and keep models aligned, but named explicit types may communicate business meaning better.

**Follow-ups:** How do `+?`, `-?`, `readonly`, and key remapping work? Why use `string & K`?

## 11. Conditional types

**Interview answer:** A conditional type chooses a type using `T extends U ? X : Y`. It is useful for expressing relationships and extracting types with `infer`. When the checked type is a naked type parameter, it distributes over unions.

```ts
type ElementOf<T> = T extends readonly (infer U)[] ? U : T;
type A = ElementOf<string[]>; // string

type NonDistributed<T> = [T] extends [string] ? true : false;
```

**Common mistakes:** Being surprised by distribution; recursive types that hit complexity limits; recreating built-in utilities; exposing hard-to-read conditions in public APIs.

**Trade-off:** Conditional types make libraries expressive, but overloads or separate named types can be clearer for application code.

**Follow-ups:** What does `infer` do? How do you prevent distribution? Implement `Awaited` conceptually.

## 12. Utility types

**Interview answer:** Utility types perform common transformations. I regularly use `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `NonNullable`, `Parameters`, `ReturnType`, and `Awaited`. I choose them only when the resulting type matches the domain semantics.

```ts
type UserPreview = Pick<User, "id" | "name">;
type UserPatch = Partial<Pick<User, "name" | "email">>;
type UsersById = Record<string, User>;
type AsyncValue = Awaited<ReturnType<typeof fetchUser>>;
```

**Common mistakes:** Using `Partial<Entity>` as every update DTO; using `Omit` chains that become fragile; assuming utilities validate runtime data.

**Trade-off:** Utilities reduce duplication, but explicit request/response types better capture permissions, validation, and API evolution.

**Follow-ups:** `Omit` versus `Exclude`? Why can `Record<string, T>` be unsafe with unchecked indexing?

## 13. Function overloads

**Interview answer:** Overloads describe a small set of distinct call signatures while one implementation handles them. Callers see the overload signatures, not the implementation signature. I use them when return type depends on the input shape and a union signature would lose that relationship.

```ts
function parse(value: string): object;
function parse(value: string[]): object[];
function parse(value: string | string[]): object | object[] {
  return Array.isArray(value) ? value.map(JSON.parse) : JSON.parse(value);
}
```

**Common mistakes:** Writing implementation signatures incompatible with overloads; too many overloads; ordering broad overloads before specific ones; using overloads where a generic or union is simpler.

**Trade-off:** Overloads improve caller precision, but increase maintenance. Prefer unions when input and output are not correlated.

**Follow-ups:** Why can’t callers use the implementation signature? Overload versus generic conditional return type?

## 14. Classes and access modifiers

**Interview answer:** TypeScript classes add types to JavaScript classes. `public` is the default, `protected` is visible to subclasses, and `private` is compile-time privacy. JavaScript `#field` gives runtime privacy. `abstract` defines incomplete base behavior; `readonly` prevents reassignment after construction.

```ts
abstract class Store<T> {
  #items = new Map<string, T>();
  protected constructor(public readonly name: string) {}
  protected set(id: string, value: T) { this.#items.set(id, value); }
  abstract refresh(): Promise<void>;
}
```

**Common mistakes:** Deep inheritance; assuming TS `private` is runtime security; placing all business logic in stateful classes; exposing mutable collections.

**Trade-off:** Classes fit framework services and stateful objects. Functions and composition often test and reuse more easily.

**Follow-ups:** `private` versus `#private`? Parameter properties? Abstract class versus interface?

## 15. Enums and alternatives

**Interview answer:** Enums create a runtime object as well as a type. They can be useful when interoperating with enum-based APIs, but for most frontend state I prefer an `as const` object or string-literal union because it emits predictable JavaScript and works naturally with serialization.

```ts
const Direction = { Up: "UP", Down: "DOWN" } as const;
type Direction = typeof Direction[keyof typeof Direction];
```

**Common mistakes:** Numeric enum reverse mappings and accidental numeric compatibility; using `const enum` across package boundaries; assuming a backend string is valid merely by casting it.

**Trade-off:** Enums offer namespacing and runtime values. Literal unions are simpler and more structural. Validate values received over the network either way.

**Follow-ups:** What JavaScript does an enum emit? Risks of `const enum`? Why prefer string enums over numeric ones?

## 16. Discriminated unions

**Interview answer:** A discriminated union gives every variant a shared literal field, such as `kind` or `status`. A switch on that field narrows safely, models valid states, and supports exhaustive checking. It is one of my preferred tools for UI and async state.

```ts
type LoadState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: AppError };

function render<T>(state: LoadState<T>): string {
  switch (state.status) {
    case "idle": return "Ready";
    case "loading": return "Loading…";
    case "success": return String(state.data);
    case "error": return state.error.message;
    default: return assertNever(state);
  }
}
```

**Common mistakes:** Optional fields on one large state object; non-literal discriminants; missing exhaustive checks.

**Trade-off:** More variants mean more code, but invalid combinations become impossible and refactors become safer.

**Follow-ups:** How does `never` enforce exhaustiveness? How would you model retries or stale data?

## 17. Structural typing

**Interview answer:** TypeScript is structurally typed: compatibility depends mainly on a value’s shape, not its declared name. This is ergonomic for JavaScript and testing. For domain values that must not be mixed, I can add a brand to create nominal-like types.

```ts
type UserId = string & { readonly __brand: "UserId" };
type OrderId = string & { readonly __brand: "OrderId" };

function asUserId(value: string): UserId { return value as UserId; }
```

**Common mistakes:** Assuming two interfaces with different names are incompatible; overusing brands without validated constructors; misunderstanding excess-property checks as exact-object typing.

**Trade-off:** Structural typing enables flexible composition. Branding adds domain protection but needs controlled creation and may complicate serialization boundaries.

**Follow-ups:** Why can a variable with extra fields be assigned when an object literal cannot? What are fresh-object excess-property checks?

## 18. Variance, practically

**Interview answer:** Variance describes how compatibility of `T` affects compatibility of a container of `T`. Read-only producers are usually covariant; consumers are contravariant under `strictFunctionTypes`; mutable containers can be unsafe and should conceptually be invariant. In reviews, I focus on callback parameter safety and avoid mutating arrays passed from narrower types.

```ts
type Animal = { name: string };
type Dog = Animal & { bark(): void };

type Producer<T> = () => T;
type Consumer<T> = (value: T) => void;

const makeAnimal: Producer<Animal> = (): Dog => ({ name: "Rex", bark() {} });
```

**Common mistakes:** Assigning a handler for `Dog` where any `Animal` may arrive; forgetting method parameters have historical bivariance behavior; mutating covariantly viewed arrays.

**Trade-off:** Strict callback checking can require adapters, but prevents real runtime errors. Prefer `readonly T[]` for input collections.

**Follow-ups:** Covariance versus contravariance? What does `strictFunctionTypes` change? Why are methods special?

## 19. Declaration files

**Interview answer:** `.d.ts` files describe types for existing JavaScript without emitting code. Libraries publish them directly or use DefinitelyTyped packages. I use module declarations for untyped dependencies and module augmentation only when I am extending a real library contract.

```ts
// legacy-widget.d.ts
declare module "legacy-widget" {
  export interface Options { color?: string }
  export function mount(element: HTMLElement, options?: Options): () => void;
}
```

**Common mistakes:** Declaring a module as `any`; putting runtime code in `.d.ts`; mismatching the actual export style; broad global declarations; forgetting the file must be included by `tsconfig`.

**Trade-off:** A minimal declaration unblocks work, but incorrect types are worse than missing types because they create false confidence. Test library declarations with sample compilation.

**Follow-ups:** Ambient declaration? Module augmentation? `@types` resolution? `declare global`?

## 20. Modules

**Interview answer:** Every file with a top-level import or export is a module with its own scope. I align TypeScript’s `module` and `moduleResolution` with the actual runtime and bundler, and I pay attention to ESM/CJS interop, package `exports`, and file extensions.

```ts
// user.ts
export type User = { id: string };
export function loadUser(): Promise<User> { /* ... */ throw new Error(); }

// app.ts
import { loadUser, type User } from "./user.js";
```

**Common mistakes:** Treating path aliases as runtime rewriting; mixing ESM and CommonJS assumptions; default-export interop surprises; barrel files that introduce cycles or reduce tree-shaking.

**Trade-off:** Barrels simplify imports but can hide dependencies. Explicit imports give clearer ownership and often better build behavior.

**Follow-ups:** What does `moduleResolution: "bundler"` mean? Why may Node ESM imports include `.js` in TypeScript source? What is a circular dependency?

## 21. Important strict `tsconfig` options

**Interview answer:** I start with `strict: true`, which includes checks such as strict nullability and function types. For stronger enterprise safety I consider `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `useUnknownInCatchVariables`, and `noFallthroughCasesInSwitch`. I enable them intentionally and fix code instead of hiding errors with assertions.

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "useUnknownInCatchVariables": true,
    "verbatimModuleSyntax": true
  }
}
```

**Common mistakes:** Copying a config without matching the runtime; `skipLibCheck` mistaken for checking application code; enabling strictness and adding mass `as` casts; confusing `target` with `lib`.

**Trade-off:** Strictness raises short-term migration cost but lowers ambiguity and production defects. Roll out high-impact flags by package when a legacy codebase cannot change at once.

**Follow-ups:** What does `strictNullChecks` prevent? Does TypeScript transpile polyfills? When is `skipLibCheck` reasonable?

## 22. `satisfies`

**Interview answer:** `satisfies` checks that an expression conforms to a type while preserving the expression’s more specific inferred type. It is ideal for configuration objects where I want typo checking without widening every property to the target type.

```ts
type RouteName = "home" | "settings";
type Route = { path: string; secure: boolean };

const routes = {
  home: { path: "/", secure: false },
  settings: { path: "/settings", secure: true }
} satisfies Record<RouteName, Route>;

routes.settings.secure; // still inferred as true
```

**Common mistakes:** Treating it as a runtime check; confusing it with `as`; expecting it to change the variable’s type to the target.

**Trade-off:** It gives validation plus precise inference. An annotation is better when you deliberately want to hide implementation detail or widen the public type.

**Follow-ups:** `satisfies` versus annotation versus assertion? Does it emit JavaScript?

## 23. Const assertions

**Interview answer:** `as const` prevents literal widening and makes object properties and array elements readonly at the type level. It is useful for fixed configuration and deriving literal unions, but it does not freeze the object at runtime.

```ts
const levels = ["info", "warn", "error"] as const;
type Level = typeof levels[number];

const action = { type: "USER_LOADED", id: "u1" } as const;
```

**Common mistakes:** Assuming deep runtime immutability; applying it to hide an API design issue; struggling with a readonly tuple where a mutable array is required.

**Trade-off:** Const assertions give very precise types, but too much precision can make mutation-oriented APIs awkward. Accept readonly inputs where possible.

**Follow-ups:** `const` declaration versus `as const`? What are const type parameters?

## 24. Type-only imports

**Interview answer:** `import type` makes it explicit that an import exists only for type checking and should not become a runtime dependency. It improves clarity, avoids some accidental side effects and cycles, and works well with `verbatimModuleSyntax`.

```ts
import type { User } from "./models.js";
import { createUser } from "./service.js";

export type { User };
```

**Common mistakes:** Using a type-only imported class as a runtime value; relying on old import elision behavior; assuming type-only imports fix an actual runtime cycle elsewhere.

**Trade-off:** Explicit syntax is slightly more verbose but makes module boundaries and emitted code predictable.

**Follow-ups:** Can a class be both a type and a value? What does `verbatimModuleSyntax` do?

## 25. Typing APIs and errors

**Interview answer:** Network data is untrusted even if I write a response interface. I receive it as `unknown`, validate at the boundary, then expose a typed domain result. I normalize errors into a discriminated union or application error instead of assuming caught values are `Error`.

```ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { kind: "network" | "validation" | "server"; message: string } };

async function getUser(id: string): Promise<ApiResult<User>> {
  try {
    const response = await fetch(`/api/users/${encodeURIComponent(id)}`);
    if (!response.ok) return { ok: false, error: { kind: "server", message: `${response.status}` } };
    const raw: unknown = await response.json();
    const user = UserSchema.parse(raw);
    return { ok: true, data: user };
  } catch (error: unknown) {
    return { ok: false, error: { kind: "network", message: error instanceof Error ? error.message : "Unknown error" } };
  }
}
```

**Common mistakes:** `response.json() as User`; generic `ApiResponse<T>` with no runtime validation; catching `any`; losing HTTP status and error cause.

**Trade-off:** Validation costs code and CPU, but it localizes failures and protects the rest of the app. Validate public/external boundaries most strongly.

**Follow-ups:** Exceptions versus result types? Where should DTO-to-domain mapping happen? How do you type error codes?

## 26. React patterns

**Interview answer:** I type component props and domain state, rely on inference for JSX and simple hooks, and model async or reducer state with discriminated unions. I avoid `React.FC` when it adds no value, use `ComponentProps` to wrap native elements, and type event handlers by the element involved.

```tsx
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button data-variant={variant} {...props} />;
}

const [user, setUser] = useState<User | null>(null);
const onChange: React.ChangeEventHandler<HTMLInputElement> = e => setQuery(e.currentTarget.value);
```

**Common mistakes:** `any` events; `useState([])` inferring `never[]`; giant prop interfaces; unsafe context defaults; copying server state into local state; overusing non-null assertions on refs.

**Trade-off:** Generic reusable components can become difficult to infer. A smaller explicit component API is often better than maximum polymorphism.

**Follow-ups:** How do you type `children`, refs, context, reducers, or a generic table? Server-state library inference?

## 27. Angular patterns

**Interview answer:** I use typed services, reactive forms, dependency injection, and observable pipelines. I keep API DTOs separate from domain models and let RxJS operators preserve types. Modern typed reactive forms reduce stringly typed form access.

```ts
interface UserDto { id: string; display_name: string }

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private readonly http: HttpClient) {}
  getUser(id: string): Observable<User> {
    return this.http.get<UserDto>(`/api/users/${id}`).pipe(
      map(dto => ({ id: dto.id, name: dto.display_name }))
    );
  }
}

const form = new FormGroup({
  email: new FormControl("", { nonNullable: true })
});
```

**Common mistakes:** Believing `http.get<T>` validates the response; untyped forms; nested subscriptions; excessive non-null assertions for inputs initialized by Angular.

**Trade-off:** Definite-assignment assertions may be necessary at framework-managed boundaries, but keep them localized. Runtime schemas are still needed for untrusted APIs.

**Follow-ups:** Type an `@Input`, custom validator, route data, signal, or RxJS error path. `Observable<T>` versus `Promise<T>`?

## 28. Vue patterns

**Interview answer:** In Vue 3 I use `defineProps`, `defineEmits`, typed refs, and typed composables. I let inference handle simple refs, explicitly type nullable or initially empty state, and remember that refs unwrap differently in templates and script.

```vue
<script setup lang="ts">
type Props = { user: User; compact?: boolean };
const props = withDefaults(defineProps<Props>(), { compact: false });
const emit = defineEmits<{ save: [user: User]; cancel: [] }>();

const selected = ref<User | null>(null);
const title = computed(() => props.user.name.toUpperCase());
</script>
```

**Common mistakes:** `ref(null)` staying too narrow; destructuring reactive objects and losing reactivity; using `any` for emits; confusing `Ref<T>` with `T`; assuming compile-time props validate arbitrary server data.

**Trade-off:** Generic components and composables improve reuse but can make template inference harder. Prefer domain-specific APIs unless reuse is proven.

**Follow-ups:** `ref` versus `reactive`? Type a composable or injection key? How are component events typed?

## 29. Runtime schemas versus compile-time safety

**Interview answer:** TypeScript types disappear after compilation, so they cannot validate JSON, local storage, form input, environment variables, or messages. At those boundaries I use a schema library or careful guards, then infer or derive the TypeScript type to avoid drift.

```ts
import { z } from "zod";

const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1)
});
type User = z.infer<typeof UserSchema>;

const user = UserSchema.parse(await response.json());
```

**Common mistakes:** Casting instead of validating; validating only the top level; maintaining unrelated schema and interface definitions; validating trusted internal values repeatedly.

**Trade-off:** Schemas add bundle size, runtime work, and error-handling complexity. Use them at trust boundaries, not between every internal function.

**Follow-ups:** Parse versus safe-parse? How do you share schemas with a backend? How do you handle transformations and branded values?

## 30. Monorepos

**Interview answer:** In a TypeScript monorepo I define clear package boundaries, avoid reaching into another package’s source internals, and use project references or a build orchestrator for incremental builds. Each package should publish intentional entry points and declarations, with shared base configs that packages extend.

```json
// packages/ui/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": { "composite": true, "declaration": true, "outDir": "dist" },
  "include": ["src"]
}
```

**Common mistakes:** One giant `paths` map that bypasses package exports; importing source across packages; duplicated dependency versions; type-check order differing from build order; global shared “types” becoming a dumping ground.

**Trade-off:** Project references improve boundaries and incremental builds but add configuration and require compatible output structure. Small repositories may not need them.

**Follow-ups:** What does `composite` do? How do package `exports` and types work? How would you prevent dependency cycles?

## 31. Library types

**Interview answer:** A TypeScript library should expose a small stable public type surface, emit `.d.ts` files, and test the package as consumers import it. I avoid leaking private dependency types, preserve inference, and use `exports` plus matching type declarations for each entry point.

```json
{
  "name": "@acme/widgets",
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" }
  },
  "types": "./dist/index.d.ts"
}
```

```ts
export interface WidgetOptions { color?: string }
export declare function createWidget(options?: WidgetOptions): Widget;
```

**Common mistakes:** Exporting every internal type; relying only on `types` while runtime `exports` disagree; bundling duplicate library instances; breaking types in a patch release; shipping declarations that reference unavailable files.

**Trade-off:** Rich inferred types delight users but can lock implementation details into the public API. Name and document stable types deliberately.

**Follow-ups:** `dependencies` versus `peerDependencies`? How do you test types? Dual ESM/CJS concerns? Declaration maps?

## 32. Migrating from JavaScript

**Interview answer:** I migrate incrementally: enable `allowJs`, type-check JavaScript where useful, convert high-value boundaries first, and measure the remaining unsafe surface. I establish a strict target but stage flags by package. I contain temporary `any` with ownership and follow-up work instead of mass-casting until the build is green.

**Practical sequence:**

1. Establish reproducible builds and tests.
2. Add a compatible `tsconfig`; start with `allowJs` and optionally `checkJs`.
3. Type API clients, shared models, utilities, and new code first.
4. Rename leaf modules to `.ts`/`.tsx`; add runtime validation at external boundaries.
5. Track `any`, `@ts-expect-error`, and non-null assertions.
6. Enable strict flags gradually, starting with `noImplicitAny` and `strictNullChecks` where feasible.
7. Remove compatibility settings when the migration finishes.

**Common mistakes:** Big-bang rewrite; changing behavior and language at once; replacing every error with `as`; typing only UI leaves while API boundaries stay unsafe; no metric or owner.

**Trade-off:** Incremental migration keeps delivery moving but temporarily permits mixed safety levels. Package-level gates and CI prevent regression.

**Follow-ups:** Which files first? How do you measure progress? How would you handle an untyped dependency or global script?

---

# Practical coding exercises with solutions

Try each exercise before reading its solution.

## Exercise 1: Type-safe property reader

Write `getProperty` so the key must exist and the return type matches that key.

```ts
const user = { id: "u1", age: 37, active: true };
const age = getProperty(user, "age"); // number
```

**Solution**

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
```

The important relationship is not merely “key is a string”; it is “key belongs to this exact object type, and the result belongs to this exact key.”

## Exercise 2: Exhaustive reducer

Model increment, decrement, and reset actions. Make a future unhandled action fail compilation.

**Solution**

```ts
type Action =
  | { type: "increment"; by: number }
  | { type: "decrement"; by: number }
  | { type: "reset" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment": return state + action.by;
    case "decrement": return state - action.by;
    case "reset": return 0;
    default: return assertNever(action);
  }
}
```

## Exercise 3: Safe error message

Write a function that accepts `unknown` and returns a useful message without unsafe casts.

**Solution**

```ts
function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  try { return JSON.stringify(error); }
  catch { return "Unknown error"; }
}
```

In production, also preserve the original cause for observability rather than reducing every error to a string too early.

## Exercise 4: Typed event bus

Create an event emitter where each event name controls its payload.

**Solution**

```ts
type Events = {
  userLoaded: { id: string; name: string };
  signedOut: undefined;
  notification: { message: string; level: "info" | "error" };
};

class EventBus<E extends Record<string, unknown>> {
  private listeners: { [K in keyof E]?: Array<(payload: E[K]) => void> } = {};

  on<K extends keyof E>(event: K, listener: (payload: E[K]) => void): () => void {
    const list = (this.listeners[event] ??= []);
    list.push(listener);
    return () => {
      const index = list.indexOf(listener);
      if (index >= 0) list.splice(index, 1);
    };
  }

  emit<K extends keyof E>(event: K, payload: E[K]): void {
    this.listeners[event]?.forEach(listener => listener(payload));
  }
}

const bus = new EventBus<Events>();
bus.emit("notification", { message: "Saved", level: "info" });
```

Senior discussion: synchronous listeners can throw and mutate subscriptions during emission. Decide and document error isolation, ordering, async behavior, and cleanup.

## Exercise 5: Patch type with required ID

Create a type that makes all fields optional except `id`.

**Solution**

```ts
type PatchWithId<T extends { id: PropertyKey }> =
  Pick<T, "id"> & Partial<Omit<T, "id">>;

type UserPatch = PatchWithId<User>;
```

For a real API, prefer an explicit DTO if only selected properties are legally editable.

## Exercise 6: Runtime-safe API parser

Create a reusable fetch helper that validates its response rather than trusting a generic.

**Solution**

```ts
type Schema<T> = { parse(value: unknown): T };

async function fetchValidated<T>(url: string, schema: Schema<T>): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const value: unknown = await response.json();
  return schema.parse(value);
}

const user = await fetchValidated("/api/me", UserSchema);
```

The schema connects compile-time typing with runtime proof. Add cancellation, error normalization, retries, and tracing according to the application’s policy.

## Exercise 7: Generic table model

Type a table column so `render` receives the value for its selected key.

**Solution**

```ts
type Column<T, K extends keyof T = keyof T> = {
  key: K;
  title: string;
  render?: (value: T[K], row: T) => string;
};

function column<T, K extends keyof T>(config: Column<T, K>): Column<T, K> {
  return config;
}

const ageColumn = column<User, "age">({
  key: "age",
  title: "Age",
  render: age => `${age} years`
});
```

Senior discussion: a plain `Column<T>[]` can lose the correlation between each key and renderer. A helper, tuple, or discriminated mapped union can preserve it.

```ts
type AnyColumn<T> = {
  [K in keyof T]: Column<T, K>
}[keyof T];
```

## Exercise 8: Async state renderer

Add a `refreshing` state that retains old data, without allowing data on initial `loading`.

**Solution**

```ts
type QueryState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "refreshing"; data: T }
  | { status: "error"; error: AppError; previousData?: T };
```

This models state semantics directly. A single object with `loading`, `data`, and `error` optionals would permit contradictory combinations.

---

# Senior-level cheat sheet

## Strong short answers

- **Inference or annotation?** Infer implementation details; annotate public contracts and places where intent matters.
- **`any` or `unknown`?** `unknown` at untrusted boundaries; narrow before use. Isolate temporary `any`.
- **Union or intersection?** Union for alternatives, intersection for combined capabilities.
- **Interface or type?** Interface for extendable object contracts; type for unions and transformations; consistency matters more than dogma.
- **Assertion or validation?** An assertion tells the compiler; validation proves something at runtime.
- **Generic or union?** Generic when input and output types are related; union for a fixed set of alternatives.
- **Overload or union?** Overload when distinct inputs produce distinct outputs; union when the output does not depend on the branch.
- **Enum or literal union?** Usually literal union/`as const`; enum when its runtime object or ecosystem interop is useful.
- **Optional fields or union?** Optional for genuinely independent absence; discriminated union for mutually exclusive states.
- **Class or function?** Class for identity/state/lifecycle or framework fit; functions and composition for simple reusable logic.
- **Compile-time or runtime?** TypeScript protects typed code paths; validate all external and persisted data at runtime.

## High-value patterns

```ts
// Exhaustiveness
const unreachable = (x: never): never => { throw new Error(String(x)); };

// Key/value relationship
function get<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }

// Literal values from runtime data
const states = ["idle", "loading", "done"] as const;
type State = typeof states[number];

// Config checking without widening
const config = { mode: "prod" } satisfies { mode: "dev" | "prod" };

// Normalize caught values
const message = (e: unknown) => e instanceof Error ? e.message : String(e);

// Safe collection input
function first<T>(values: readonly T[]): T | undefined { return values[0]; }
```

## Senior signals interviewers listen for

- You distinguish TypeScript guarantees from runtime guarantees.
- You explain boundaries, failure modes, and API evolution—not only syntax.
- You prefer modeling valid states over adding assertions.
- You know that external data, environment variables, storage, and URL parameters are untrusted.
- You balance precision with readability and compiler performance.
- You design types for consumers, not just for the implementation.
- You discuss migration, observability, tests, package boundaries, and team conventions.
- You can say when a simpler type is better than a clever generic.

## Red-flag phrases to avoid

- “TypeScript prevents runtime errors.” Better: “It catches many errors before runtime, but external data still needs validation.”
- “`any` and `unknown` are the same.” They are not; `unknown` requires proof before use.
- “Interfaces are always better than types.” Explain capabilities and convention instead.
- “`readonly` makes it immutable.” It is shallow compile-time assignment protection.
- “`http.get<User>` validates the response.” It only tells the compiler what you expect.
- “I fix the type error with `as`.” Explain why the assertion is sound or replace it with narrowing.

---

# Focused 14-day study plan

Plan for 60–90 minutes per day. Spend at least half the time writing and explaining code aloud.

| Day | Focus | Practice outcome |
|---|---|---|
| 1 | Inference, annotations, literal types, `any`/`unknown`/`never`/`void` | Give a two-minute explanation and refactor unsafe input handling. |
| 2 | Unions, intersections, optional/readonly, interfaces vs types | Model an enterprise form and explain invalid states. |
| 3 | Narrowing, guards, assertions, discriminated unions | Build an exhaustive async-state reducer. |
| 4 | Generics and constraints | Write `getById`, `pluck`, and a generic repository API. |
| 5 | `keyof`, type `typeof`, indexed access, mapped types | Derive keys and create three useful transformations. |
| 6 | Conditional types, `infer`, utility types | Rebuild simple versions of `ReturnType`, `Pick`, and `NonNullable`. |
| 7 | Overloads, classes, enums, structural typing, variance | Compare two API designs and defend the simpler one. |
| 8 | Modules, declarations, type-only imports, library types | Type a tiny JS module and package its public API. |
| 9 | `tsconfig` strictness, `satisfies`, const assertions | Review a config and explain every chosen strict flag. |
| 10 | API typing, errors, schema validation | Build `fetchValidated` and normalize network/validation/server errors. |
| 11 | Your primary framework | Type props/inputs, forms, events, state, context/DI, and a reusable component. |
| 12 | Other two frameworks at comparison level | Explain equivalent state, event, and API patterns without memorizing trivia. |
| 13 | Monorepos, migrations, architecture trade-offs | Draft a staged migration plan and package-boundary diagram. |
| 14 | Mock interview | Answer 20 questions aloud, solve two exercises in 40 minutes, review weak points. |

## Daily speaking drill

For each topic, use this 45-second structure:

1. **Definition:** “This feature means…”
2. **Use:** “I use it when…”
3. **Limit:** “It does not…”
4. **Trade-off:** “The benefit is…, but the cost is…”
5. **Example:** Give one production example from a component, API boundary, or shared library.

## Final mock questions

1. Why would you choose `unknown` over `any` for an API response?
2. Model an async page that can refresh while showing old data.
3. Explain `keyof typeof` with a real example.
4. When is a generic unnecessary?
5. What does `satisfies` give you that an annotation does not?
6. Why does a TypeScript interface not validate JSON?
7. Design error types for a frontend API client.
8. Explain a practical variance bug in a callback.
9. How would you publish types for a library with multiple entry points?
10. How would you migrate a large JavaScript application without stopping feature work?
11. Which strict flags would you enable first, and how would you roll them out?
12. When would you use a discriminated union instead of optional properties?
13. What are the risks of barrel exports in a monorepo?
14. Show how you would type a reusable table without losing key/value correlation.
15. What TypeScript choices improve or damage developer experience for library consumers?

---

# A polished two-minute senior answer

> I use TypeScript to make contracts and state transitions explicit, especially at boundaries between components, packages, and APIs. Inside a function I rely on inference to keep code readable, but I annotate public inputs and outputs so contracts stay stable. I prefer `unknown` for untrusted data, validate it at runtime, and then expose a typed domain model.
>
> For UI state I often use discriminated unions because they prevent impossible combinations and support exhaustive checking with `never`. For reusable APIs I use generics only when they preserve a useful relationship, such as a key determining a return type. I avoid complex conditional types when overloads or named types would be clearer.
>
> At project level I enable strict checking and add options such as unchecked-index and exact-optional-property checks where the codebase can support them. In monorepos and libraries I care about package boundaries, declaration output, exports, and consumer experience. I see TypeScript as compile-time risk reduction, not runtime validation, so network data, storage, and configuration are still checked with schemas or guards.

That answer shows language knowledge, production judgment, and senior-level trade-off thinking without sounding memorized.
