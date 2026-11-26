# Boilerplate Next.js

Modern TypeScript starter for **Next.js 16** with **React 19**, **Tailwind CSS v4**, **ESLint 10 (Flat Config)**, **Prettier 3**, **Husky v9**, **Commitlint**, **Semantic Release**, and a **universal AI Agents setup**.

## Stack

- **Next.js** `16.4` (App Router + `next.config.ts`)
- **React** `19.3`
- **TypeScript** `6.0`
- **Tailwind CSS** `4.3` (`@tailwindcss/postcss`, CSS-first in `src/app/globals.css`)
- **ESLint** `10.15` + **Prettier** `3.10` via `@ialexanderbrito/eslint-config` `3.0`
- **Husky** `9` + **lint-staged** `17` + **Commitlint** `21` + **Commitizen** + **Semantic Release** `25`
- **Node.js** `24` (`.nvmrc`) + **Yarn**

## Getting Started

```bash
# Use the recommended Node.js version
nvm use

# Install dependencies
yarn install

# Start the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `yarn dev`          | Start Next.js development server                |
| `yarn build`        | Create production build                         |
| `yarn start`        | Run production server                           |
| `yarn type-check`   | Run TypeScript type checking (`tsc --noEmit`)   |
| `yarn lint`         | Run ESLint 10 across the repository             |
| `yarn lint:fix`     | Run ESLint 10 with automatic fixes              |
| `yarn format`       | Format files with Prettier 3                    |
| `yarn format:check` | Check Prettier formatting without editing files |
| `yarn validate`     | Run `type-check`, `lint`, and `format:check`    |
| `yarn commit`       | Guided Conventional Commit using Commitizen     |

## ESLint & Prettier

- `eslint.config.mjs` uses **ESLint 10 Flat Config** with `@ialexanderbrito/eslint-config/next`.
- `prettier.config.mjs` re-exports `@ialexanderbrito/eslint-config/prettier` so ESLint and Prettier stay 100% aligned with zero rule conflicts.
- `.vscode/settings.json` enables format-on-save and ESLint Flat Config auto-fix out of the box.

## AI Agents Compatibility

This boilerplate uses the open **`AGENTS.md` + `.agents/skills/`** standard (AAIF / Agent Skills) with thin entrypoints for every major tool:

- **`AGENTS.md`** — Single source of truth (Antigravity, OpenCode, Cursor, Codex, Grok, Windsurf, Zed)
- **`CLAUDE.md`** — Claude Code entrypoint (`@AGENTS.md`)
- **`.cursor/rules/project.mdc`** — Cursor always-applied project rule
- **`.github/copilot-instructions.md`** — GitHub Copilot instructions
- **`.agents/skills/`** — Portable skills (`SKILL.md` format) shared across agents
