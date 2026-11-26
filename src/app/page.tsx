import type { CSSProperties } from 'react';

const stackItems = [
  {
    name: 'Next.js',
    version: '16.4',
    detail: 'App Router, Turbopack, TypeScript config',
    bg: 'var(--tag-blue-bg)',
    fg: 'var(--tag-blue-fg)',
  },
  {
    name: 'React',
    version: '19.3',
    detail: 'Server Components by default',
    bg: 'var(--tag-green-bg)',
    fg: 'var(--tag-green-fg)',
  },
  {
    name: 'TypeScript',
    version: '6.0',
    detail: 'Strict mode with @/* path aliases',
    bg: 'var(--tag-yellow-bg)',
    fg: 'var(--tag-yellow-fg)',
  },
  {
    name: 'Tailwind CSS',
    version: '4.3',
    detail: 'CSS-first tokens via @tailwindcss/postcss',
    bg: 'var(--tag-red-bg)',
    fg: 'var(--tag-red-fg)',
  },
];

const commands = [
  { cmd: 'yarn dev', desc: 'Start Next.js dev server' },
  { cmd: 'yarn validate', desc: 'Run type-check, ESLint 10 & Prettier 3' },
  { cmd: 'yarn build', desc: 'Create production build with Turbopack' },
  { cmd: 'yarn commit', desc: 'Guided Conventional Commit via Commitizen' },
];

const agentFiles = [
  { file: 'AGENTS.md', role: 'Universal single source of truth' },
  { file: 'CLAUDE.md', role: 'Claude Code entrypoint' },
  { file: '.cursor/rules/', role: 'Always-applied Cursor guardrails' },
  { file: '.agents/skills/', role: 'Portable Agent Skills standard' },
];

const qualityChecks = [
  'ESLint 10 Flat Config (@ialexanderbrito/eslint-config v3)',
  'Prettier 3 synced directly with ESLint rules',
  'Husky v9 + lint-staged + Commitlint pre-commit hooks',
  'Semantic Release & GitHub Actions CI ready',
];

const stagger = (index: number): CSSProperties =>
  ({ '--index': index }) as CSSProperties;

export default function Home() {
  return (
    <div className="bg-editorial-dots min-h-screen">
      <header className="border-border bg-canvas/85 sticky top-0 z-10 border-b backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-medium tracking-tight">
              boilerplate-next
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 font-mono text-[11px] tracking-wider uppercase"
              style={{
                backgroundColor: 'var(--tag-green-bg)',
                color: 'var(--tag-green-fg)',
              }}
            >
              Next 16
            </span>
          </div>

          <nav
            aria-label="Primary links"
            className="text-ink-muted flex items-center gap-6 text-sm"
          >
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              Next.js Docs
            </a>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              Tailwind v4
            </a>
            <a
              href="https://github.com/alx-ui/boilerplate-next"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <section className="reveal max-w-3xl" style={stagger(0)}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 font-mono text-[11px] font-medium tracking-[0.06em] uppercase"
              style={{
                backgroundColor: 'var(--tag-blue-bg)',
                color: 'var(--tag-blue-fg)',
              }}
            >
              Production Starter
            </span>
            <span className="text-ink-muted font-mono text-xs">
              Node 24 · Yarn · Zero extra UI dependencies
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[1.08] font-normal tracking-[-0.03em] sm:text-6xl">
            A quiet, batteries-included{' '}
            <span className="italic">foundation</span> for Next.js.
          </h1>

          <p className="text-ink-muted mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            Pre-configured with Next.js 16, React 19, TypeScript 6, Tailwind CSS
            v4, ESLint 10 Flat Config, Prettier 3, and universal AI agent
            instructions. Replace this single file whenever you are ready to
            build.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="https://nextjs.org/docs/app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-bg text-accent-fg hover:bg-accent-hover inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-transform active:scale-[0.98]"
            >
              Read App Router Docs
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className="border-border bg-surface text-ink-muted inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-xs">
              <span>Start editing</span>
              <kbd className="border-border bg-surface-subtle text-ink rounded border px-1.5 py-0.5 font-mono text-[11px]">
                src/app/page.tsx
              </kbd>
            </div>
          </div>
        </section>

        <section
          aria-label="Boilerplate capabilities"
          className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-12"
        >
          <article
            className="bento-card reveal border-border bg-surface rounded-xl border p-7 md:col-span-7"
            style={stagger(1)}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-tight">Core Stack</h2>
              <span className="text-ink-muted font-mono text-xs">
                4 packages
              </span>
            </div>

            <ul className="divide-border divide-y">
              {stackItems.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col justify-between gap-2 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <div>
                    <span className="text-sm font-medium">{item.name}</span>
                    <p className="text-ink-muted text-xs">{item.detail}</p>
                  </div>
                  <span
                    className="w-fit rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wider uppercase"
                    style={{ backgroundColor: item.bg, color: item.fg }}
                  >
                    v{item.version}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className="bento-card reveal border-border bg-surface flex flex-col justify-between rounded-xl border p-7 md:col-span-5"
            style={stagger(2)}
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-sm font-medium tracking-tight">
                  Linting & Delivery
                </h2>
                <span
                  className="rounded-full px-2.5 py-0.5 font-mono text-[11px] tracking-wider uppercase"
                  style={{
                    backgroundColor: 'var(--tag-yellow-bg)',
                    color: 'var(--tag-yellow-fg)',
                  }}
                >
                  Zero conflict
                </span>
              </div>

              <ul className="space-y-3.5">
                {qualityChecks.map((check) => (
                  <li
                    key={check}
                    className="text-ink-muted flex items-start gap-2.5 text-sm leading-snug"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-ink mt-0.5 shrink-0"
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-border mt-6 border-t pt-4">
              <p className="text-ink-muted font-mono text-xs">
                Single source: eslint.config.mjs + prettier.config.mjs
              </p>
            </div>
          </article>

          <article
            className="bento-card reveal border-border bg-surface rounded-xl border p-7 md:col-span-5"
            style={stagger(3)}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-tight">
                AI Agents Ready
              </h2>
              <span
                className="rounded-full px-2.5 py-0.5 font-mono text-[11px] tracking-wider uppercase"
                style={{
                  backgroundColor: 'var(--tag-green-bg)',
                  color: 'var(--tag-green-fg)',
                }}
              >
                AAIF Spec
              </span>
            </div>

            <ul className="space-y-3">
              {agentFiles.map((entry) => (
                <li
                  key={entry.file}
                  className="border-border bg-surface-subtle flex items-center justify-between gap-3 rounded-lg border px-3.5 py-2.5"
                >
                  <code className="font-mono text-xs font-medium">
                    {entry.file}
                  </code>
                  <span className="text-ink-muted text-right text-xs">
                    {entry.role}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-ink-muted mt-4 text-xs">
              Works across Antigravity, Claude Code, Cursor, OpenCode, Codex,
              Grok, and GitHub Copilot.
            </p>
          </article>

          <article
            className="bento-card reveal border-border bg-surface overflow-hidden rounded-xl border md:col-span-7"
            style={stagger(4)}
          >
            <div className="border-border flex items-center justify-between border-b px-5 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="border-border bg-surface-subtle h-2.5 w-2.5 rounded-full border" />
                <span className="border-border bg-surface-subtle h-2.5 w-2.5 rounded-full border" />
                <span className="border-border bg-surface-subtle h-2.5 w-2.5 rounded-full border" />
              </div>
              <span className="text-ink-muted font-mono text-[11px]">
                terminal — boilerplate-next
              </span>
              <span className="w-10" aria-hidden="true" />
            </div>

            <div className="space-y-3.5 p-7 font-mono text-xs sm:text-sm">
              {commands.map((item) => (
                <div
                  key={item.cmd}
                  className="border-border/70 flex flex-col justify-between gap-1 border-b pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-ink-muted select-none">$</span>
                    <code className="text-ink font-medium">{item.cmd}</code>
                  </div>
                  <span className="text-ink-muted font-sans text-xs">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <footer className="border-border border-t">
        <div className="text-ink-muted mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs sm:flex-row">
          <p className="font-mono">boilerplate-next · MIT License</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.npmjs.com/package/@ialexanderbrito/eslint-config"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              @ialexanderbrito/eslint-config
            </a>
            <a
              href="https://agents.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              AGENTS.md Spec
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
