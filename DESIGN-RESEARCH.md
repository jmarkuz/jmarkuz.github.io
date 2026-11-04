# Portfolio research and Concept 3 "Trace"

Status: proposal for approval. `mockups/v3/trace.html` is a clickable prototype (vanilla JS, disposable), not the production site.

## 1. What was studied

Ten reference portfolios, chosen because they are widely cited or belong to engineers known for their systems work:

| Site | Signature idea | Who/what clear in 5 s? | Weakness |
|---|---|---|---|
| brittanychiang.com | Sticky identity column, experience list with tech pills | Yes | The most-cloned dev layout; tag noise |
| leerob.com | Text-only; bio "short/long" toggle | Yes | No work shown on the home page |
| joshwcomeau.com | Whimsy: sounds, interactive lessons | No (blog first) | Not a portfolio; no role or hire info |
| rauno.me | Manifesto line; old site versions kept live | Yes | Everything one click deep, unlabeled icons |
| emilkowal.ski | Well-known OSS components as proof | Yes | Promo banner on top, no contact |
| lynnandtonic.com | Yearly redesign (v. XIX) | Name only | No proof on the home page |
| bruno-simon.com | Drive a car through a 3D world | Yes, after loading | Heavy; work hidden behind play |
| jvns.ca | Every post on one page, zines | Name only | Wall of links |
| martin.kleppmann.com | Credentials stacked up front | Yes | Very long, dated theme |
| paco.me | Voice-heavy tone, "Now" section | Yes | Little proof of depth |

Hiring-side evidence:
- People scan before they read. The often-quoted "7 seconds" is TheLadders' resume eye-tracking (7.4 s, 2018); hiring managers report 30 to 90 seconds on a portfolio before deciding to read on.
- Profy.dev survey (60+ hiring managers): most do look at the site, but few weigh it heavily. A site that looks bad or has broken links or outdated data hurts. GitHub, READMEs and the resume matter more.
- Common advice: 3 to 6 projects, each with problem, role and results; avoid skill bars.

## 2. What this means for Marian

1. **Identity in one sentence**, in the first screen (every strong example does this).
2. **One signature idea, and only one.** Memorable sites have a single strong idea. The weak ones stack gimmicks or hide content behind play (Bruno Simon).
3. **Proof beats claims** (Kleppmann, Emil, Paco). Numbers and named integrations go up front.
4. **Backend work is invisible.** Frontend portfolios show UI; a backend engineer has to show *architecture and outcomes*.
5. **Respect the 30-second scan.** Everything important must be visible without clicking; interaction only adds depth.
6. **The round-2 "Dossier" concept is effectively Brittany Chiang's layout**, which is why it is not unique.

## 3. Concept 3: Trace

**Idea.** The career is drawn as a *distributed trace*: the timeline view backend engineers use daily in Jaeger, Tempo and OpenTelemetry. To a recruiter it reads like an ordinary timeline (Gantt bars with years). To an engineer it is a wink that says "this person thinks in systems". The metaphor stays in the frame; the content uses plain words.

**How it works**
- **Hero.** Name, title, one-line positioning, 4 proof numbers.
- **"What are you hiring for?" lens.** Seven chips: Microservices, Messaging, Integrations, Payments & risk, Performance, Modernisation, Team leadership. Choosing one dims unrelated roles and highlights matching evidence in the trace, the detail panel, skills and projects, with a count ("2 roles · 4 pieces of evidence"). This turns the page into an answer to the recruiter's actual question.
- **Trace (= Experience).**
  - One row per company, colour-coded by domain (banking green, telecom indigo, iGaming amber), plus child rows for title changes with real dates (LinkedIn: intern → junior → junior backend at Luxoft; CV: engineer → senior at Brightfin).
  - Dots under a bar count the key achievements.
  - The current job has a subtle "running" stripe.
  - Clicking a row opens the detail panel: role, period, achievements, stack.
  - Underneath, a "Time by domain" bar (banking 1y 11m · telecom 5y 10m · iGaming 2y 7m).
- **Case files (= Projects).** Each project leads with its *architecture diagram* (ReadyBell event flow; Vacancy Tracker pipeline), then Problem / Design / Hard parts / Stack, then a screenshot. This is what makes backend work visible.
- **Skills.** Grouped rows; ● professional, ○ personal projects, ●○ both; the lens highlights the relevant tools.
- **Contact.** Copy-email button (with "Copied" feedback), LinkedIn, GitHub, CV PDF. Email is also in the top bar on every screen.

**Visual system**
- Warm white `#f7f6f2`, ink `#15171a`. The only colours are the three domain colours, and each one means one thing.
- Type: Instrument Sans (text, headings) + JetBrains Mono (timeline, labels).
- Motion: lens dimming and highlighting, the running stripe on the current job. All of it is disabled under `prefers-reduced-motion`.
- Accessibility: rows are keyboard-focusable buttons, colour is never the only signal (domain names are written out), and the panel is announced through `aria-live`.
- Mobile: rows stack label-above-bar, child rows collapse, lens chips scroll horizontally, and the detail panel sits under the trace.

**Why it should work**
- *Unique.* Among the sites reviewed, none used a tracing waterfall or a hiring-intent filter. The idea comes from Marian's own field, so it is not decoration.
- *Interesting.* One clear interaction (the lens) gives an immediate, personal result.
- *Easy to understand.* Without clicking anything, the first screen already shows name, role, numbers, the full career timeline and the current job's details.

**Risks and mitigations**
- The jargon could confuse non-engineers. All visible labels are plain ("What are you hiring for?", "Click any row", "Key work"); trace words appear only in small mono captions.
- The interaction may hide content from SEO and print. All text is server-rendered in the DOM; interaction only filters and highlights it.
- The gap Jan–Apr 2024 is visible on the timeline. It comes from the real dates. Tell me if you want it handled differently.

## 4. Files

- `mockups/v3/trace.html`: open in a browser and click the rows and chips.
- `mockups/v3/trace-desktop.png`: full page, no filter.
- `mockups/v3/trace-lens-messaging.png`, `trace-lens-messaging-full.png`: "Messaging" lens active.
- `mockups/v3/trace-mobile.png`: 390 px wide.

Hosting plan (GitHub Pages, Next.js static export) and open questions are unchanged; see `PHASE1.md`.

## Sources

- https://brittanychiang.com · https://leerob.com · https://www.joshwcomeau.com · https://rauno.me · https://emilkowal.ski · https://lynnandtonic.com · https://bruno-simon.com · https://jvns.ca · https://martin.kleppmann.com · https://paco.me
- https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge
- https://www.fueler.io/blog/your-portfolio-has-7-seconds-what-recruiters-look-at-first
- https://careerfoundry.com/en/blog/web-development/software-engineer-portfolio/
- https://elementor.com/blog/best-web-developer-portfolio-examples/
