# jmarkuz.github.io - portfolio

Personal site of Marian Kuziv, Senior Java Software Engineer. A single static page built with Next.js (static export), TypeScript and Tailwind CSS, deployed to GitHub Pages.

The career is shown as a distributed trace. A "What are you hiring for?" filter highlights matching roles, evidence, projects and skills.

The page has two palettes. The "Spotlight" hero (the portrait dissolves into black and looks towards the name) and the footer are black; between them the black fades through a gradient into a light page. Colours are tokens (RGB channels in `src/app/globals.css`, mapped in `tailwind.config.ts`); the `dark-zone` class switches every token to the dark palette, and the sticky header follows the section under it. Each of the three industry colours (banking, telecom, iGaming) is used only for that industry.

## Edit the content

Keywords recruiters search for, and where they are covered: [`docs/seo-keywords.md`](docs/seo-keywords.md).

The repository and the site are public. Describe work generically and read [`docs/content-policy.md`](docs/content-policy.md) before adding experience. Drafts with employer-specific details go in `private/`, which git ignores.

Everything on the page comes from [`src/content/profile.ts`](src/content/profile.ts): roles, achievements, lens tags, projects, skills and contact details. Text may use `**bold**`.

- **New achievement**: add `{ text, lenses }` to a company. `lenses` decides which filter chips highlight it.
- **New job**: add a company at the end of `companies` with `end: null`, and set the previous job's `end`.
- **CV download**: the PDF lives in `public/Marian_Kuziv_Senior_Java_Developer_CV.pdf` and is linked from `person.cv`. To replace it, overwrite the file (keep the name) and rebuild. The button shows the real file size and disappears if the file is missing. Check what the PDF contains (it currently includes the author's email and phone numbers).
- **Tailored link**: `https://jmarkuz.github.io/?for=messaging` opens the page with that filter on. Ids: `microservices`, `messaging`, `integrations`, `payments`, `performance`, `modernisation`, `reliability`, `cloud`, `quality`, `leadership`.

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
public/             og.png, portrait, project screenshots
mockups/            Phase 1 design concepts (not part of the build)
```

## Quality

Lighthouse on the production build, served with compression:

- Desktop: 100 performance, 100 accessibility, 100 best practices, 100 SEO.
- Mobile: 97 performance, 100 accessibility, 100 best practices, 100 SEO.

Text colours meet WCAG AA. Rows and chips work from the keyboard, and motion is disabled under `prefers-reduced-motion`.
