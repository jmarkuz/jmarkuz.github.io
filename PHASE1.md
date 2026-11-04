# Portfolio: Phase 1, round 2 (research, design, two concepts for GitHub Pages)

Status: awaiting approval. No production code exists. `mockups/v2/` holds static visual comps only.
Round 1 concepts (Graphite, Editorial) are kept in `mockups/` for comparison.

## 1. Research

Sources: CV (docx), LinkedIn profile PDF, LinkedIn public page, GitHub profile and repositories (READMEs, languages, contributors, commit history, screenshots).

| Source | What it adds |
|---|---|
| CV | Roles, dates, achievements with numbers, grouped skills, education, certifications, work authorisation |
| LinkedIn PDF | Luxoft started as a Java intern (Apr 2016); Scala maintenance; Gradle scripts extracted into a plugin; Deutsche Bank named as a client; Brightfin listed as one "Regular/Senior" role |
| GitHub | 23 public repos, 234 followers. Two substantial recent projects (ReadyBell, Vacancy Tracker), a Kafka training repo (8 stars), small Spring/Gradle samples. No GitHub Pages site, no `jmarkuz.github.io` repo, no profile README yet |

## 2. Strongest selling points

1. 10+ years of Java and Spring Boot backend work in banking, telecom and iGaming.
2. Integration depth: AT&T, Verizon, T-Mobile, Telus; Jamf Pro, MobileIron, Intune, MaaS360, BlackBerry; payment gateway; regulatory platforms.
3. Modernisation: monolith to microservices, legacy payments to a Payment Gateway, Java 21 and RabbitMQ 4.0, Kubernetes HPA tuning, Redis caching.
4. Leadership: took over a Java team at Brightfin.
5. Numbers: 10,000+ transactions/day in guaranteed order; reports 2 h to 15 min; 80%+ test coverage.
6. Personal projects that show architecture judgement: DDD/hexagonal multi-tenant SaaS; ArchUnit-checked modules with 46 ADRs.

Narrative: *a senior Java engineer who owns the lifecycle and is strongest where systems integrate, scale and have to be modernised without stopping.*

## 3. Structure (same for both concepts)

Hero (name, title, intro, proof numbers, expertise, CTA) · About · Experience · Skills (professional vs personal projects) · Selected projects · Contact.

## 4. Concepts

### Concept 1: Spec Sheet (light)
- Feel: an engineering specification. Faint 40px grid in the hero, hairline tables, mono labels.
- Colour: paper `#f6f6f3`, ink `#111418`, cobalt `#2346d9`; dark grid band for contact.
- Type: IBM Plex Sans + IBM Plex Mono.
- Distinct pieces: `career.path` timeline in the hero (Luxoft → MobiChord → Brightfin → Atlaslive), experience as a "version history" table, a **skills matrix that marks each tool as professional (●) and/or personal projects (○)**, project cards as spec sheets (Problem / Architecture / Stack / Role).
- Files: `concept-1-spec.png`, `concept-1-spec-mobile.png`.

### Concept 2: Dossier (dark), recommended
- Feel: a compact personal dossier. A **sticky left column** keeps name, title, availability, section nav and contacts in view the whole time; content scrolls on the right.
- Colour: near-black `#0b0d10`, sidebar `#0e1114`, soft blue `#86a8ff`, green availability dot.
- Type: Geist + Geist Mono.
- Distinct pieces: a statement-style hero line, stats panel, experience rows with a hover highlight, skills with an All / Professional / Personal filter, large project cards with screenshot, Problem and Architecture columns.
- On mobile the sidebar becomes a header with scrollable section chips and contact buttons.
- Files: `concept-2-dossier.png` (full page), `concept-2-dossier-viewport-{top,experience,projects}.png` (1440×900, shows the sticky column), `concept-2-dossier-mobile.png`.

**Why Concept 2.** A business-card site has one job: who you are and how to reach you. In Dossier the contact details never leave the screen, the page is about 15% shorter, and the layout scales down cleanly. A light theme can come from the same tokens in Phase 2. Pick Concept 1 if you prefer a light, more "technical document" look. Its skills matrix can also be carried over into Concept 2.

Motion for either: section fade-up on first view, active nav indicator, hover states. No parallax, no heavy libraries, `prefers-reduced-motion` respected.

## 5. GitHub Pages hosting plan (Phase 2)

- Repo **`jmarkuz/jmarkuz.github.io`**, served at `https://jmarkuz.github.io/` with no base path. (A repo named e.g. `portfolio` would be served at `/portfolio/` and need `basePath`.)
- Next.js (App Router) with `output: 'export'`, TypeScript, Tailwind CSS, `next/font`; images pre-sized, `images.unoptimized`.
- Deploy with GitHub Actions: build → `actions/upload-pages-artifact` → `actions/deploy-pages`; Pages source set to "GitHub Actions".
- Static only: contact by `mailto:` plus a copy-email button; CV PDF served from `/public`.
- SEO and a11y: metadata, Open Graph image, JSON-LD `Person`, `sitemap.xml`, `robots.txt`, semantic landmarks, keyboard focus styles, AA contrast; target Lighthouse 95+.
- Optional: custom domain via `CNAME`; a profile README (`jmarkuz/jmarkuz`) linking to the site.

## 6. Open questions (still unconfirmed, nothing invented)

1. Location: CV says Prague, LinkedIn says Ukraine. Which one?
2. Brightfin: two titles (CV) or one "Regular/Senior" entry (LinkedIn)?
3. Name Deutsche Bank as a Luxoft client, or keep it generic?
4. Email only (no phone numbers) on a public page?
5. Add a portrait photo? Currently an "MK" monogram.
6. Which CV skills were production (Kafka, Terraform, MongoDB, Elasticsearch, CQRS, Helm, OpenTelemetry, DataDog...) and which study-level?
7. Any metrics for Atlaslive or Brightfin (latency, load, cost, users)?
8. Project role wording: both repos are recent and AI-assisted (`claude` and `ivankuziv` contributors, `.kiro` specs). "Author" or e.g. "Designed and built, AI-assisted"? Live demos?
9. Hero copy and tagline: OK or rewrite?
10. English only, or English + Ukrainian?
11. "Open to new roles" badge: show it?
