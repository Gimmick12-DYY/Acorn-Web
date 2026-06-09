# Acorn Project Website (Monorepo)

Website for **Acorn: The Dawn of Very Large Scale Brain Integrated Computer Systems** — a
Collaborative Research project in the spirit of the NSF Expeditions in Computing program.

The repository is organized as a monorepo for clean separation between the frontend
application and shared code.

## Structure

- `apps/web` — Next.js 16 + TypeScript + Tailwind website (App Router). This is the deployable app.
- `packages/core` — Shared TypeScript types and data accessors (People, News, Publications).
- `packages/ui` — Shared UI components available for reuse across apps.

## Pages

- `/` — Project overview and latest news
- `/about` — Public expedition overview
- `/research` — Research areas (public summaries only)
- `/people` — Team directory
- `/publications` — Publications
- `/outreach` — Outreach and community engagement
- `/news` + `/news/[id]` — Project updates
- `/admin` — News authoring dashboard

## Confidential content

This website is **public-facing only**. Do not commit project proposals, grant drafts, internal
documents, or other confidential materials to this repository. Paths matching `*proposal*`,
`*confidential*`, `proposal/`, and `private/` are gitignored by default.

When adding page content, use only information approved for public release.

## Getting started

1. Install Node 18.17+.
2. Install dependencies (installs all workspaces):

```bash
npm install
```

3. Run the dev server (runs `apps/web`):

```bash
npm run dev
```

4. Build / start:

```bash
npm run build
npm run start
```

## Data & content

Initial content lives in `apps/web/data/*.json` and is imported directly by server
components and API routes. **The seeded people, partners, and PI entries are placeholders —
replace them with the real Acorn team and institutions.**

News updates are stored locally in `apps/web/data/news.json` — no database required. They can
be authored from the `/admin` page, which reads and writes that file directly.

> **Note:** Filesystem writes work in local development and on any persistent Node host. On a
> serverless / read-only deployment (e.g. Vercel), the filesystem is not writable at runtime, so
> updates created via `/admin` won't persist there. In that case, edit `apps/web/data/news.json`
> directly (or commit changes) and redeploy.

## Deploying to Vercel

1. Import **`Gimmick12-DYY/Acorn-Web`** at [vercel.com/new](https://vercel.com/new).
2. **Critical:** set **Root Directory** to **`apps/web`** (click *Edit* on the import screen).
3. Leave **Framework Preset** as **Next.js**.
4. Enable **Include source files outside of the Root Directory** if shown (needed for the npm workspace install).
5. No environment variables are required.
6. Deploy.

If you see a plain Vercel **`404: NOT_FOUND`** page (not the site design), the project was almost certainly imported with the wrong root directory or the build failed. Fix it under **Project → Settings → General → Root Directory → `apps/web`**, then **Redeploy**.

The repo includes `apps/web/vercel.json` with the correct monorepo install command (`cd ../.. && npm install`).
