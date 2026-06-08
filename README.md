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

- `/` — Project overview, principal investigators, and latest news.
- `/about` — The Acorn vision, research narrative, and project timeline.
- `/research` — Research thrusts and what Acorn enables.
- `/education` — Education, outreach, and broadening-participation activities.
- `/publications` — Project publications.
- `/people` — Team directory grouped by role (PIs, partners, PhD, graduate, undergraduate).
- `/partners` — Collaborating institutions and partner labs.
- `/news` + `/news/[id]` — Rolling project updates.
- `/admin` — Lightweight dashboard to author updates and attribute them to people.

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

- Set the project **Root Directory** to `apps/web`, or run `vercel link` from `apps/web`.
- The default build command is `npm run build`.
