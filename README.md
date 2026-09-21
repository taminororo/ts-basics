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

- [ ] primitives, `interface` vs `type`, unions, literal types — `src/01-basics.ts`
- [ ] generics — `src/02-generics.ts`
- [ ] `unknown` vs `any`, narrowing, type guards — `src/03-unknown-narrowing.ts`
- [ ] utility types: `Partial`, `Pick`, `Omit`, `Record`, `ReturnType` — `src/04-utility-types.ts`
- [ ] how `tsconfig.json` works and what `strict` turns on — `tsconfig.json`
- [ ] modules: `import` / `export`, default vs named — `src/types/todo.ts`

## What I learned
A union of literal types rejects any value other than the specified ones.

Since TypeScript uses structural typing, assignment is possible if the shapes are identical, even if the type names differ.

A union can only be defined with `type`, not `interface`.
If you define a type with the same name twice, `interface`s are merged, whereas `type`s result in a duplicate definition error.

Alternative syntaxes for the exact same type; knowing how to read both is enough.

`await` unwraps the inner value from the container. At the type level: `Promise<number>` -> `number`.

Even when the outer container is identical, types are not assignable inner type inside `< >` differs.

T is resolved on each function call. Accurately typing the return value requires caller to handle type narrowing.

If the type cannot be inferred from arguments, the caller must supply it explicitly.

## Resources

- TypeScript Handbook — https://www.typescriptlang.org/docs/handbook/
- Survival TypeScript (Japanese) — https://typescriptbook.jp/
