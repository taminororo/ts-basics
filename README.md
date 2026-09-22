# ts-basics

TypeScript practice for onboarding §1 (TypeScript).

## Run

```bash
npm install
npm run check-types                  # type check only (tsc --noEmit)
node src/03-unknown-narrowing.ts     # run a file directly (Node 23.6+)
```

Type checks also run on GitHub Actions for every push and pull request.

## Checklist

- [x] primitives, `interface` vs `type`, unions, literal types — `src/01-basics.ts`
- [x] generics — `src/02-generics.ts`
- [x] `unknown` vs `any`, narrowing, type guards — `src/03-unknown-narrowing.ts`
- [x] utility types: `Partial`, `Pick`, `Omit`, `Record`, `ReturnType` — `src/04-utility-types.ts`
- [x] how `tsconfig.json` works and what `strict` turns on — `tsconfig.json`
- [x] modules: `import` / `export`, default vs named — `src/types/todo.ts`

## What I learned

### Basics (`src/01-basics.ts`)

- A union of literal types rejects any value other than the specified ones.
- Since TypeScript uses structural typing, a value can be assigned across different type names if the shapes are identical.
- A union can only be defined with `type`, not `interface`.
- Declaring the same name twice merges `interface`s, but causes a duplicate identifier error for `type`s.

### Generics (`src/02-generics.ts`)

Alternative syntaxes for the exact same type; knowing how to read both is enough.

`await` unwraps the inner value from the container. At the type level: `Promise<number>` -> `number`.

Even when the outer container is identical, types are not assignable inner type inside `< >` differs.

T is resolved on each function call. Accurately typing the return value requires caller to handle type narrowing.

If the type cannot be inferred from arguments, the caller must supply it explicitly.

### unknown, narrowing, type guards (`src/03-unknown-narrowing.ts`)
`any` bypasses type checking, whereas `unknown` prevents you from doing anything until you verify the type.
Within the `if` block where you check the type using `typeof`, the value can be treated as that specific type (narrowing).
Using type guard syntax allows you to treat a value as that specific type (though an incorrect check leads to an incorrect determination).

### Utility types (`src/04-utility-types.ts`)
You can create new types based on existing ones (Omit / Partial / Pick / Record / ReturnType).
When you modify the original type, all derived types automatically reflect the change, and the specific locations requiring correction are listed as type errors.

### tsconfig and modules

## Resources

- TypeScript Handbook — https://www.typescriptlang.org/docs/handbook/
- Survival TypeScript (Japanese) — https://typescriptbook.jp/
