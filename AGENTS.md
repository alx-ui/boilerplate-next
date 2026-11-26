# AGENTS.md

Universal project instructions for AI coding agents (Antigravity, Claude Code, Cursor, OpenCode, Codex, Grok, GitHub Copilot, Windsurf, and any Agent Skills-compatible tool).

## Stack

- **Framework:** Next.js 16 (App Router, `src/app`)
- **UI:** React 19 + Tailwind CSS v4 (`@tailwindcss/postcss`, CSS-first config in `src/app/globals.css`)
- **Language:** TypeScript 6 (`strict: true`, path alias `@/*` -> `./src/*`)
- **Linting & Formatting:** ESLint 10 (Flat Config via `@ialexanderbrito/eslint-config/next`) + Prettier 3 (`@ialexanderbrito/eslint-config/prettier`)
- **Git Workflow:** Husky v9, lint-staged, Commitlint (Conventional Commits), Commitizen, Semantic Release
- **Runtime & Package Manager:** Node.js 24 (see `.nvmrc`) + Yarn (`yarn.lock`)

## Essential Commands

Always run verification commands after meaningful edits:

```bash
yarn dev           # Start Next.js dev server
yarn build         # Production build (also validates Next.js types & bundling)
yarn type-check    # Run tsc --noEmit
yarn lint          # Run ESLint 10 across the repository
yarn lint:fix      # Run ESLint with auto-fix
yarn format        # Format all supported files with Prettier 3
yarn format:check  # Verify formatting without modifying files
yarn validate      # Run type-check + lint + format:check
yarn commit        # Interactive Conventional Commit via Commitizen
```

## Project Structure

```text
.
├── .agents/               # Portable Agent Skills (agentskills.io standard: .agents/skills/<name>/SKILL.md)
├── .cursor/rules/         # Cursor project rules (mirrors AGENTS.md)
├── .github/               # CI workflow & GitHub Copilot instructions
├── .husky/                # Git hooks (pre-commit -> lint-staged, commit-msg -> commitlint)
├── public/                # Static assets
├── src/
│   └── app/               # Next.js App Router pages, layouts, and globals.css
├── AGENTS.md              # Single source of truth for all AI agents
├── CLAUDE.md              # Entrypoint for Claude Code (@AGENTS.md)
├── eslint.config.mjs      # ESLint 10 Flat Config
├── next.config.ts         # Next.js 16 configuration
├── postcss.config.mjs     # Tailwind CSS v4 PostCSS plugin
├── prettier.config.mjs    # Prettier 3 config (shared with ESLint)
└── tsconfig.json          # TypeScript compiler configuration
```

## Coding Conventions

- **Next.js App Router:** Prefer Server Components by default; add `'use client'` only when hooks, browser APIs, or interactivity are required.
- **TypeScript:** Keep `strict: true` clean; avoid introducing `any` unless strictly necessary. Prefer `import type` for type-only imports.
- **Styling (Tailwind CSS v4):** Configure theme tokens in `src/app/globals.css` using `@theme`. Do not recreate legacy `tailwind.config.*` or `@tailwind` directives.
- **ESLint & Prettier:** Never disable rules globally or introduce conflicting `.eslintrc.*` / `.prettierrc` files. Both ESLint and Prettier inherit from `@ialexanderbrito/eslint-config`.
  - Import order is enforced (`react`, `next/**`, external, `@/**`, relative) with blank lines between groups and alphabetical sorting.
  - Prettier rules: 2 spaces, single quotes, semicolons, `printWidth: 80`, trailing commas (`all`).
- **Commits:** Follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `ci:`). Commits are validated by Commitlint via Husky.

## Agent Skills (`.agents/skills/`)

Reusable domain skills live in `.agents/skills/<skill-name>/SKILL.md` following the open **Agent Skills** specification.

- When a task matches an installed skill in `.agents/skills/`, read its `SKILL.md` before executing the task.
- Keep `.agents/` ignored in ESLint and Prettier configs so third-party skill files never break project checks.
- Avoid duplicating project instructions across vendor files: update `AGENTS.md` as the single source of truth.

## Verification Checklist Before Finishing

1. Run `yarn validate` (`type-check`, `lint`, `format:check`).
2. Run `yarn build` when changing routes, layouts, Next.js config, CSS, or dependencies.
3. Keep diffs focused and free of unused imports, dead code, or unformatted files.
