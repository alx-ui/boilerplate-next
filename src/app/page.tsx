import Image from 'next/image';

const stackVersions = [
  { label: 'Next.js', value: '16.4' },
  { label: 'React', value: '19.3' },
  { label: 'TypeScript', value: '6.0' },
  { label: 'Tailwind CSS', value: '4.3' },
  { label: 'ESLint', value: '10.15' },
  { label: 'Prettier', value: '3.10' },
  { label: 'Node.js', value: '24 LTS' },
];

const scripts = [
  { cmd: 'yarn dev', label: 'Start local dev server' },
  { cmd: 'yarn validate', label: 'Type-check, ESLint 10 & Prettier 3' },
  { cmd: 'yarn build', label: 'Production build with Turbopack' },
  { cmd: 'yarn commit', label: 'Conventional Commit via Commitizen' },
];

const agentFiles = [
  { path: 'AGENTS.md', scope: 'Universal spec' },
  { path: 'CLAUDE.md', scope: 'Claude Code' },
  { path: '.cursor/rules/', scope: 'Cursor IDE' },
  { path: '.agents/skills/', scope: 'Agent Skills' },
];

function Crosshair({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`text-border-strong pointer-events-none absolute z-10 flex h-5 w-5 items-center justify-center font-mono text-sm leading-none select-none ${className}`}
    >
      +
    </span>
  );
}

export default function Home() {
  return (
    <div className="bg-bg text-fg min-h-screen">
      <header className="border-border bg-bg/80 sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <a href="#top" className="flex items-center gap-2.5">
              <Image
                src="/next.svg"
                alt="Next.js"
                width={78}
                height={16}
                className="dark:invert"
                priority
              />
              <span className="text-border-strong select-none">/</span>
              <span className="font-mono text-xs font-medium tracking-tight">
                boilerplate
              </span>
            </a>

            <nav
              aria-label="Primary navigation"
              className="text-fg-muted hidden items-center gap-5 text-sm md:flex"
            >
              <a href="#stack" className="hover:text-fg transition-colors">
                Stack
              </a>
              <a href="#features" className="hover:text-fg transition-colors">
                Features
              </a>
              <a href="#agents" className="hover:text-fg transition-colors">
                AI Agents
              </a>
              <a href="#scripts" className="hover:text-fg transition-colors">
                Scripts
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="border-border bg-bg-subtle text-fg-muted hidden rounded-md border px-2.5 py-1 font-mono text-xs sm:inline-flex">
              v3.0
            </span>
            <a
              href="https://github.com/alx-ui/boilerplate-next"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-bg hover:bg-bg-subtle inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium transition-colors"
            >
              GitHub
            </a>
            <a
              href="#scripts"
              className="bg-btn-bg text-btn-fg hover:bg-btn-hover inline-flex h-8 items-center rounded-md px-3 text-xs font-medium transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <section className="border-border relative mt-8 border border-dashed sm:mt-12">
          <Crosshair className="-top-2.5 -left-2.5" />
          <Crosshair className="-top-2.5 -right-2.5" />
          <Crosshair className="-bottom-2.5 -left-2.5" />
          <Crosshair className="-right-2.5 -bottom-2.5" />

          <div
            aria-hidden="true"
            className="nextjs-hero-grid pointer-events-none absolute inset-0 opacity-70"
          />

          <div className="relative px-6 py-20 text-center sm:px-12 sm:py-28">
            <div className="border-border bg-bg/90 text-fg-muted mb-7 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs">
              <span className="bg-accent-blue h-1.5 w-1.5 rounded-full" />
              <span>Next.js 16.4 · React 19 · Tailwind CSS v4 · ESLint 10</span>
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl sm:leading-[1.05]">
              The Next.js Boilerplate for the Web
            </h1>

            <p className="text-fg-muted mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
              Pre-configured with{' '}
              <strong className="text-fg font-medium">
                App Router &amp; Turbopack
              </strong>
              , zero-conflict{' '}
              <strong className="text-fg font-medium">
                ESLint 10 &amp; Prettier 3
              </strong>
              , automated CI/Release, and universal{' '}
              <strong className="text-fg font-medium">
                AI Agent instructions
              </strong>
              .
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#features"
                className="bg-btn-bg text-btn-fg hover:bg-btn-hover inline-flex h-11 items-center rounded-md px-5 text-sm font-medium transition-colors"
              >
                Explore Stack
              </a>
              <a
                href="https://github.com/alx-ui/boilerplate-next"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-bg hover:bg-bg-subtle inline-flex h-11 items-center rounded-md border px-5 text-sm font-medium transition-colors"
              >
                View Repository
              </a>
            </div>

            <div className="text-fg-muted mt-7 inline-flex items-center gap-2 font-mono text-xs">
              <span aria-hidden="true" className="text-fg">
                &#9650;
              </span>
              <span>~</span>
              <code className="text-fg">src/app/page.tsx</code>
              <span className="text-border-strong">|</span>
              <code>yarn validate</code>
            </div>
          </div>

          <div
            id="stack"
            className="border-border bg-bg/95 relative grid scroll-mt-20 grid-cols-2 border-t border-dashed sm:grid-cols-4 lg:grid-cols-7"
          >
            {stackVersions.map((item) => (
              <div
                key={item.label}
                className="border-border flex flex-col items-center justify-center border-r border-b border-dashed px-3 py-3.5 last:border-r-0 lg:border-b-0"
              >
                <span className="text-fg-subtle text-[11px]">{item.label}</span>
                <span className="mt-0.5 font-mono text-xs font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="scroll-mt-16 py-20 sm:py-24">
          <div className="mb-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                What&apos;s in boilerplate-next?
              </h2>
              <p className="text-fg-muted mt-2 text-sm sm:text-base">
                Everything you need to start shipping production Next.js apps
                immediately.
              </p>
            </div>
            <span className="text-fg-subtle font-mono text-xs">
              Zero extra UI dependencies
            </span>
          </div>

          <div className="border-border relative grid grid-cols-1 border-t border-l md:grid-cols-3">
            <Crosshair className="-top-2.5 -left-2.5" />
            <Crosshair className="-top-2.5 -right-2.5" />

            <article className="feature-cell border-border flex flex-col justify-between border-r border-b p-6 sm:p-7">
              <div>
                <div className="border-border bg-bg-subtle mb-6 rounded-lg border p-4 font-mono text-xs">
                  <div className="text-fg-subtle mb-2 flex items-center justify-between text-[11px]">
                    <span>src/app</span>
                    <span className="text-accent-blue">RSC</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span>layout.tsx</span>
                      <span className="text-fg-subtle">Geist</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>page.tsx</span>
                      <span className="text-fg-subtle">Static</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>globals.css</span>
                      <span className="text-fg-subtle">@theme</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  Next.js 16 &amp; React 19
                </h3>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                  App Router with Server Components by default, Turbopack
                  builds, and typed configuration in{' '}
                  <code className="text-fg font-mono text-xs">
                    next.config.ts
                  </code>
                  .
                </p>
              </div>
            </article>

            <article className="feature-cell border-border flex flex-col justify-between border-r border-b p-6 sm:p-7">
              <div>
                <div className="border-border bg-bg-subtle mb-6 rounded-lg border p-4 font-mono text-xs">
                  <div className="text-fg-subtle mb-2 flex items-center justify-between text-[11px]">
                    <span>eslint.config.mjs</span>
                    <span>Flat</span>
                  </div>
                  <div className="text-fg-muted space-y-1">
                    <div>
                      <span className="text-fg">eslint</span> 10.15.0
                    </div>
                    <div>
                      <span className="text-fg">prettier</span> 3.10.1
                    </div>
                    <div>
                      <span className="text-fg">@ialexanderbrito</span> v3.0
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  ESLint 10 &amp; Prettier 3
                </h3>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                  Native ESLint 10 Flat Config synced directly with{' '}
                  <code className="text-fg font-mono text-xs">
                    prettier.config.mjs
                  </code>{' '}
                  for zero formatting or import-order conflicts.
                </p>
              </div>
            </article>

            <article className="feature-cell border-border flex flex-col justify-between border-r border-b p-6 sm:p-7">
              <div>
                <div className="border-border bg-bg-subtle mb-6 rounded-lg border p-4 font-mono text-xs">
                  <div className="text-fg-subtle mb-2 flex items-center justify-between text-[11px]">
                    <span>postcss.config.mjs</span>
                    <span>v4</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-fg">
                      @import &apos;tailwindcss&apos;;
                    </div>
                    <div className="text-fg-muted">
                      @theme inline &#123; ... &#125;
                    </div>
                    <div className="text-fg-subtle">tsconfig strict: true</div>
                  </div>
                </div>

                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  Tailwind v4 &amp; TypeScript 6
                </h3>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                  CSS-first styling via{' '}
                  <code className="text-fg font-mono text-xs">
                    @tailwindcss/postcss
                  </code>{' '}
                  paired with strict TypeScript 6 and{' '}
                  <code className="text-fg font-mono text-xs">@/*</code>{' '}
                  aliases.
                </p>
              </div>
            </article>

            <article
              id="agents"
              className="feature-cell border-border flex scroll-mt-20 flex-col justify-between border-r border-b p-6 sm:p-7"
            >
              <div>
                <div className="border-border bg-bg-subtle mb-6 space-y-2 rounded-lg border p-4 font-mono text-xs">
                  {agentFiles.map((item) => (
                    <div
                      key={item.path}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-fg">{item.path}</span>
                      <span className="text-fg-subtle text-[11px]">
                        {item.scope}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  Universal AI Agents
                </h3>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                  Open{' '}
                  <code className="text-fg font-mono text-xs">AGENTS.md</code>{' '}
                  and{' '}
                  <code className="text-fg font-mono text-xs">
                    .agents/skills/
                  </code>{' '}
                  setup ready for Antigravity, Claude Code, Cursor, OpenCode,
                  Codex, Grok, and Copilot.
                </p>
              </div>
            </article>

            <article className="feature-cell border-border flex flex-col justify-between border-r border-b p-6 sm:p-7">
              <div>
                <div className="border-border bg-bg-subtle mb-6 rounded-lg border p-4 font-mono text-xs">
                  <div className="text-fg-subtle mb-2 flex items-center justify-between text-[11px]">
                    <span>.github/workflows/ci.yml</span>
                    <span>v7</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span>validate</span>
                      <span className="text-fg-subtle">parallel</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>build (.next/cache)</span>
                      <span className="text-fg-subtle">parallel</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>semantic-release</span>
                      <span className="text-fg-subtle">master</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  Git Hooks &amp; CI/CD
                </h3>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                  Husky v9, lint-staged, Commitlint, Commitizen, and
                  least-privilege GitHub Actions with automatic Semantic
                  Release.
                </p>
              </div>
            </article>

            <article
              id="scripts"
              className="feature-cell border-border flex scroll-mt-20 flex-col justify-between border-r border-b p-6 sm:p-7"
            >
              <div>
                <div className="border-border bg-bg-subtle mb-6 space-y-2 rounded-lg border p-4 font-mono text-xs">
                  {scripts.map((item) => (
                    <div
                      key={item.cmd}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-fg">
                        <span className="text-fg-subtle mr-1.5 select-none">
                          $
                        </span>
                        {item.cmd}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  Essential Scripts
                </h3>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                  Run{' '}
                  <code className="text-fg font-mono text-xs">
                    yarn validate
                  </code>{' '}
                  to verify types, lint, and formatting in a single command
                  before pushing.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-border border-t">
        <div className="text-fg-muted mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-4 px-6 py-8 text-xs sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-fg font-mono font-medium">
              boilerplate-next
            </span>
            <span className="text-border-strong">|</span>
            <span>MIT License</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.npmjs.com/package/@ialexanderbrito/eslint-config"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors"
            >
              @ialexanderbrito/eslint-config
            </a>
            <a
              href="https://agents.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors"
            >
              AGENTS.md
            </a>
            <a
              href="https://github.com/alx-ui/boilerplate-next"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
