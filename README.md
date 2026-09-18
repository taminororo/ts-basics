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

<!-- 2-3 lines per topic, in your own words -->

## Resources

- TypeScript Handbook — https://www.typescriptlang.org/docs/handbook/
- Survival TypeScript (Japanese) — https://typescriptbook.jp/
