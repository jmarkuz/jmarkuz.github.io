# jmarkuz.github.io

Personal site of Marian Kuziv, Senior Java Software Engineer. A single static page built with Next.js (static export), TypeScript and Tailwind CSS, deployed to GitHub Pages.

The career is shown as a distributed trace. A "What are you hiring for?" filter highlights matching roles, evidence, projects and skills.

## Edit the content

Everything on the page comes from [`src/content/profile.ts`](src/content/profile.ts): roles, achievements, lens tags, projects, skills and contact details. Text may use `**bold**`.

- **New achievement**: add `{ text, lenses }` to a company. `lenses` decides which filter chips highlight it.
- **New job**: add a company at the end of `companies` with `end: null`, and set the previous job's `end`.
- **CV download**: put the PDF in `public/` and set `person.cv`, for example `{ label: "Marian_Kuziv_CV.pdf", href: "/Marian_Kuziv_CV.pdf" }`. The link stays hidden while `cv` is `null`.
- **Tailored link**: `https://jmarkuz.github.io/?for=messaging` opens the page with that filter on. Ids: `microservices`, `messaging`, `integrations`, `payments`, `performance`, `modernisation`, `leadership`.

## Run locally

Requires Node.js 18.18 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

Build the static site into `out/` and preview it:

```bash
npm run build
```

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Create a public repository named **`jmarkuz.github.io`**. That name serves the site at `https://jmarkuz.github.io/`. Under any other name it is served at `/<repo>/`, and `basePath` must be set in `next.config.ts`.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push this project to the `main` branch:

   ```bash
   git init -b main
   ```

   ```bash
   git add .
   ```

   ```bash
   git commit -m "Initial site"
   ```

   ```bash
   git remote add origin git@github.com:jmarkuz/jmarkuz.github.io.git
   ```

   ```bash
   git push -u origin main
   ```

4. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) type-checks, builds and publishes `out/`. It runs on every push to `main`, on demand, and on the 1st of each month so that durations such as "2y 7m" stay current in the static HTML.

Optional: to use a custom domain, add it under Settings → Pages and put a `CNAME` file containing the domain in `public/`. Then update `site.url` in `src/content/profile.ts`.

## Structure

```
src/app/            layout (fonts, metadata, JSON-LD), page, sitemap, robots, 404, favicon
src/components/     Trace, LensBar, LensProvider, CaseFiles, diagrams, Skills, About, Contact, …
src/content/        profile.ts: all text and data
src/lib/time.ts     month arithmetic and formatting
public/             og.png, project screenshots
mockups/            Phase 1 design concepts (not part of the build)
```

## Quality

Lighthouse on the production build, served with compression:

- Desktop: 100 performance, 100 accessibility, 100 best practices, 100 SEO.
- Mobile: 98 performance, 100 accessibility, 100 best practices, 100 SEO.

Text colours meet WCAG AA. Rows and chips work from the keyboard, and motion is disabled under `prefers-reduced-motion`.
