// All site content lives here. Text may use **bold** for emphasis.
// This file is public: keep work experience generic (see docs/content-policy.md). No internal service,
// client, provider or regulator names, no platform scale, no unmeasured performance figures.
// Dates are "YYYY-MM"; `end: null` means the role is current.

export type Domain = "bank" | "tel" | "gam";

export type LensId =
  | "microservices"
  | "messaging"
  | "integrations"
  | "payments"
  | "performance"
  | "modernisation"
  | "reliability"
  | "cloud"
  | "quality"
  | "leadership";

export type YearMonth = `${number}-${string}`;

export interface Achievement {
  text: string;
  lenses: LensId[];
}

export interface Role {
  title: string;
  start: YearMonth;
  end: YearMonth | null;
}

export interface Company {
  id: string;
  name: string;
  domain: Domain;
  title: string;
  focus: string;
  start: YearMonth;
  end: YearMonth | null;
  /** Title changes inside the company, shown as child rows in the trace. */
  roles?: Role[];
  achievements: Achievement[];
  stack: string[];
}

export type SkillUse = "work" | "personal" | "both";

export interface Skill {
  name: string;
  use: SkillUse;
  lenses?: LensId[];
  /** One of the four technologies that define the profile; drawn slightly stronger. */
  key?: boolean;
}

export interface ExpertiseArea {
  no: string;
  title: string;
  text: string;
  points: string[];
  lenses: LensId[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  where: string;
  stack: string;
  summary: string;
  challenge: string;
  approach: string[];
  impact: string;
  lenses: LensId[];
}

export interface Principle {
  title: string;
  text: string;
}

export interface CaseFile {
  id: "readybell" | "vacancy-tracker";
  name: string;
  kind: string;
  lenses: LensId[];
  problem: string;
  design: string;
  hardParts: string;
  stack: string;
  repo: string;
  diagram: { caption: string; flow: string };
  image: { src: string; alt: string; width: number; height: number };
}

export const site = {
  url: "https://jmarkuz.github.io",
  title: "Marian Kuziv · Senior Java Developer (Spring Boot, Microservices, Kubernetes) · Prague",
  description:
    "Senior Java Developer (Senior Java Software Engineer, Senior Java Backend Engineer) in Prague: 10+ years of Java 17/21, Spring Boot, microservices, RabbitMQ, PostgreSQL, Redis, Kubernetes and AWS across banking, telecom and iGaming. Open to Senior Java Developer roles.",
};

export const person = {
  name: "Marian Kuziv",
  title: "Senior Java Developer",
  /** The title used in employment records and on LinkedIn. Shown in metadata and structured data. */
  altTitle: "Senior Java Software Engineer",
  /** Further titles recruiters search for; used in metadata and structured data only, not as a heading. */
  searchTitles: ["Senior Java Backend Engineer", "Senior Backend Engineer"],
  tagline: "Backend systems for banking, telecom and iGaming.",
  intro:
    "10+ years of Java and Spring Boot: microservices, distributed and high-load systems, event-driven messaging, and the modernisation of platforms that cannot stop. Below is my career as a trace. Pick what you are hiring for and the evidence lights up.",
  status: "Open to Senior Java Developer roles · Prague, CZ",
  /** One line a recruiter needs before writing: where, legal status, relocation. */
  availabilityShort: "Prague, CZ · authorized to work in CZ · open to EU relocation",
  location: "Prague, Czech Republic",
  availability:
    "Based in Prague and authorized to work in the Czech Republic. Open to relocation within the EU (visa sponsorship required outside the Czech Republic).",
  email: "mi.kuziv@gmail.com",
  /** 4:5 portrait on a black background for the hero, in three widths; `share` is a square JPEG for search engines. */
  photo: {
    src: "/portrait-800.webp",
    srcSet: "/portrait-480.webp 480w, /portrait-800.webp 800w, /portrait-1200.webp 1200w",
    /** Desktop: 40-44% of the content width (max 514px), aligned to the content edge. Tablets 460px, phones 82% of the width. */
    sizes: "(min-width: 1312px) 514px, (min-width: 1024px) 40vw, (min-width: 768px) 460px, 82vw",
    width: 1200,
    height: 1500,
    share: "/marian-kuziv.jpg",
    alt: "Portrait of Marian Kuziv in side light, wearing headphones",
  },
  linkedin: { label: "in/mariankuziv", href: "https://www.linkedin.com/in/mariankuziv/" },
  github: { label: "jmarkuz", href: "https://github.com/jmarkuz" },
  /** Drop a PDF into /public and set `href` to show the CV link. */
  cv: { label: "Download CV (PDF)", href: "/Marian_Kuziv_Senior_Java_Developer_CV.pdf" } as { label: string; href: string } | null,
  languages: ["Ukrainian (native)", "English (professional working, B2)"],
  education: "MSc Mathematics, Drohobych Ivan Franko State Pedagogical University (2007–2012)",
  certifications: ["Google AI Professional Certificate", "Java Design Patterns and Architecture"],
};

/** Working practices confirmed by the author. Shown next to the core stack. */
export const practices = ["TDD", "Agile / Scrum", "Code review", "Mentoring"];

/** Most-searched Senior Java keywords that are backed by professional work. Kafka is deliberately not here (personal projects only). */
export const coreStack = [
  "Java 17 / 21",
  "Spring Boot",
  "Microservices",
  "REST APIs",
  "PostgreSQL",
  "RabbitMQ",
  "Redis",
  "Kubernetes",
  "Docker",
  "AWS",
  "CI/CD",
  "Testcontainers",
];

export const proof = [
  { value: "10+ yrs", label: "Java backend engineering", source: "since 2016" },
  { value: "10,000+", label: "transactions/day in guaranteed order", source: "trade processing · Luxoft" },
  { value: "2h → 15m", label: "regulatory report generation", source: "reporting · Luxoft" },
  { value: "80%+", label: "test coverage, critical services", source: "Atlaslive" },
];

export const lenses: { id: LensId; label: string; keywords: string[] }[] = [
  { id: "microservices", label: "Microservices", keywords: ["Spring Boot", "microservices", "distributed systems", "system design", "REST APIs"] },
  { id: "messaging", label: "Messaging", keywords: ["RabbitMQ", "event-driven architecture", "WebSocket", "retries", "Kafka (personal projects)"] },
  { id: "integrations", label: "Integrations", keywords: ["REST / SOAP APIs", "OpenFeign", "third-party APIs", "regulatory"] },
  { id: "payments", label: "Payments & risk", keywords: ["Payment Gateway", "withdrawals", "risk rules", "regulation"] },
  { id: "performance", label: "Performance", keywords: ["high-load", "Redis", "PostgreSQL", "indexes", "concurrency", "N+1 queries"] },
  { id: "modernisation", label: "Modernisation", keywords: ["Java 21", "Spring Boot 3 / 4", "RabbitMQ 4.0", "monolith → microservices"] },
  { id: "reliability", label: "Reliability", keywords: ["idempotency", "retries", "feature flags", "deadlocks", "scalable systems"] },
  { id: "cloud", label: "Cloud & DevOps", keywords: ["Kubernetes", "Docker", "AWS", "CI/CD", "GitLab CI/CD", "Datadog"] },
  { id: "quality", label: "Quality", keywords: ["TDD", "JUnit", "Mockito", "Testcontainers", "SonarQube", "code review", "80%+ coverage"] },
  { id: "leadership", label: "Team leadership", keywords: ["team lead", "mentoring", "code review", "technical design", "Agile / Scrum"] },
];

export const domains: Record<Domain, string> = {
  bank: "Banking",
  tel: "Telecom",
  gam: "iGaming",
};

// Oldest first: this is the order of rows in the trace.
/** The detail panel shows this many achievements first; the rest sit behind "Show more". Order achievements by strength. */
export const KEY_WORK_LIMIT = 5;

export const companies: Company[] = [
  {
    id: "luxoft",
    name: "Luxoft",
    domain: "bank",
    title: "Junior Java Developer",
    focus: "Investment banking & trade processing",
    start: "2016-04",
    end: "2018-03",
    roles: [
      { title: "Java Intern", start: "2016-04", end: "2016-08" },
      { title: "Junior Java Developer", start: "2016-08", end: "2017-05" },
      { title: "Junior Java-Backend Developer", start: "2017-05", end: "2018-03" },
    ],
    achievements: [
      {
        text: "Built an **event-driven** order-processing pipeline for an OTC-derivatives trade-processing system: **10,000+ transactions/day**, guaranteed ordering",
        lenses: ["messaging", "performance", "payments"],
      },
      {
        text: "Built **regulatory reporting** modules; automated multi-system data aggregation, cutting report generation from **2 hours to 15 minutes**",
        lenses: ["performance", "integrations", "payments"],
      },
      {
        text: "Integrated a CRM system with the banking backend; fixed data-consistency issues with **transaction management**",
        lenses: ["integrations", "reliability", "payments"],
      },
      {
        text: "Implemented **third-party system integrations** for investment-banking products",
        lenses: ["integrations"],
      },
      {
        text: "Improved infrastructure and implemented **unified log aggregation** across the systems",
        lenses: ["reliability", "cloud", "modernisation"],
      },
      {
        text: "Built new components and functionality with **performance optimisation**, testing, documentation and support; fixed defects in live systems",
        lenses: ["performance", "quality"],
      },
      { text: "Wrote **Gradle** build scripts and extracted them into a reusable plugin", lenses: ["quality"] },
      { text: "Maintained **Scala** services after internal Scala training", lenses: [] },
      { text: "Built UI components and widgets for an internal portfolio platform with Java and **Google GWT**, and a web console for a REST API (HTML5, CSS3, Bootstrap, jQuery)", lenses: ["integrations"] },
    ],
    stack: ["Java", "Scala", "Gradle", "Google GWT", "REST"],
  },
  {
    id: "mobichord",
    name: "MobiChord",
    domain: "tel",
    title: "Java Software Engineer",
    focus: "MDM / telecom integration platform",
    start: "2018-03",
    end: "2021-05",
    achievements: [
      {
        text: "Designed and built **integrations** with telecom carriers **AT&T, Verizon, T-Mobile and Telus** and MDM providers **Jamf Pro, MobileIron, Microsoft Intune, MaaS360 and BlackBerry**",
        lenses: ["integrations"],
      },
      {
        text: "Extended MDM integrations with device-management functions: enrollment, full and partial sync, wipe, activation, suspension, notifications, location lookup and device info",
        lenses: ["integrations", "messaging"],
      },
      {
        text: "Built a carrier API service with **MACD** support: ordering devices and accessories, changing price plans and features, enabling roaming, across many providers including provider-specific gateways",
        lenses: ["integrations", "microservices"],
      },
      {
        text: "Built a mid-server for **secure encrypted file transfer** between SFTP and ServiceNow",
        lenses: ["integrations", "reliability"],
      },
      {
        text: "Built an **inventory reporting service** with catalog support, enabling catalog management and vendor integration for the device and accessory lifecycle",
        lenses: ["integrations"],
      },
      {
        text: "Owned features across the **full product lifecycle**: requirements, system design, development, testing, delivery and customer support",
        lenses: ["leadership"],
      },
      {
        text: "Introduced unit, integration and end-to-end tests that enabled reliable **CI/CD** pipelines",
        lenses: ["quality", "cloud"],
      },
      {
        text: "Worked with cross-functional teams on requirements and system design; proposed technical improvements based on stakeholder feedback",
        lenses: ["leadership"],
      },
    ],
    stack: ["Java", "Carrier APIs", "MDM APIs", "SFTP", "CI/CD"],
  },
  {
    id: "brightfin",
    name: "Brightfin",
    domain: "tel",
    title: "Senior Java Software Engineer",
    focus: "TEM & MDM/UEM platform · Java Software Engineer until Sep 2022",
    start: "2021-05",
    end: "2024-01",
    roles: [
      { title: "Java Software Engineer", start: "2021-05", end: "2022-09" },
      { title: "Senior Java Software Engineer", start: "2022-09", end: "2024-01" },
    ],
    achievements: [
      {
        text: "**Led a team of Java developers** after the previous lead left: **mentoring** and technical guidance, technical design, **code review**, communication with other teams",
        lenses: ["leadership"],
      },
      {
        text: "Designed and built core **microservices** and **REST APIs** for Telecom Expense Management (TEM) and Unified Endpoint Management (UEM) platforms",
        lenses: ["microservices", "integrations"],
      },
      {
        text: "Migrated a critical platform service from a monolith to **microservices**: better resource use, scalability and performance, and independent deployment",
        lenses: ["modernisation", "microservices"],
      },
      {
        text: "Built **rate limiting** with **Bucket4j and Redis** to protect the APIs from DDoS and resource abuse and keep service quality consistent",
        lenses: ["reliability", "performance", "cloud"],
      },
      {
        text: "Implemented **certificate management with Vault**, with an auto-update setup that streamlined the process",
        lenses: ["reliability", "cloud"],
      },
      {
        text: "Built the integration layer for multiple carrier and MDM/UEM provider APIs, with **asynchronous** device-enrollment (MACD) workflows that improved responsiveness",
        lenses: ["integrations", "messaging", "performance"],
      },
      {
        text: "Built UEM service features: device enrollment, provisioning, configuration management, application deployment, security enforcement, remote monitoring and compliance reporting",
        lenses: ["integrations", "microservices"],
      },
      {
        text: "Owned the TEM billing multi-upload feature end to end: design, implementation, testing and deployment",
        lenses: ["leadership", "payments"],
      },
      {
        text: "Optimised performance and resource usage and gave infrastructure guidance together with the AWS architect and DevOps; supported **AWS, GCP and Azure** infrastructure",
        lenses: ["performance", "cloud"],
      },
      { text: "Took part in the move to a **mono-repo with Bazel**", lenses: ["cloud", "modernisation"] },
      {
        text: "Improved responsiveness of real-time usage calculation and inventory report operations; built device and accessory ordering, catalog support and device lifecycle features",
        lenses: ["performance", "integrations"],
      },
      {
        text: "Established code-quality standards: test coverage, code review, Confluence documentation and **OpenAPI / Swagger** specs",
        lenses: ["leadership", "quality"],
      },
      { text: "Promoted from Java Software Engineer to **Senior** Java Software Engineer (Sep 2022)", lenses: ["leadership"] },
    ],
    stack: ["Java", "Spring Boot", "Microservices", "Redis", "Bucket4j", "Vault", "Bazel", "AWS · GCP · Azure"],
  },
  {
    id: "atlaslive",
    name: "Atlaslive",
    domain: "gam",
    title: "Senior Java Software Engineer",
    focus: "Risk Management & Retail Platform Modernization",
    start: "2024-04",
    end: null,
    achievements: [
      {
        text: "Re-architected a business-critical asynchronous processing flow in a **distributed**, high-load system: one polling job became **two independent streams** with dedicated thread pools (**concurrency**), batched **SKIP LOCKED** fetching on **PostgreSQL** and preserved per-entity ordering, released behind a **feature flag**, so it can be enabled or rolled back by configuration",
        lenses: ["reliability", "performance", "messaging"],
      },
      {
        text: "Migrated payments from a legacy provider adapter to a **Payment Gateway** architecture and unified routing across services, reducing coupling; later moved to the gateway's v2 API",
        lenses: ["payments", "microservices", "modernisation", "integrations"],
      },
      {
        text: "Improved response time and stability of payment and retail paths with **shared Redis caching** (TTL-based, replacing a local cache) and a reactive Redis client with tuned timeouts",
        lenses: ["performance", "payments"],
      },
      {
        text: "Tuned risk-management workloads: critical **PostgreSQL query optimisation**, composite and **concurrently built indexes** (no write blocking in production), **Kubernetes** HPA and CPU/memory tuning, lock-contention fixes with **JPA / Hibernate** pessimistic locking",
        lenses: ["performance", "reliability", "payments", "cloud"],
      },
      {
        text: "Carried out staged **platform upgrades** across the service landscape: Spring Boot 3, Java 17 → 21, **RabbitMQ 4.0** (legacy queues and bindings removed) and Spring Boot 4 / Java 25 in 2026",
        lenses: ["modernisation", "messaging", "microservices", "cloud"],
      },
      {
        text: "Designed a **regulatory integration layer** of **REST APIs** (user registration, operator accounts, token validation at the gateway) that supports several regulator types",
        lenses: ["integrations", "payments"],
      },
      {
        text: "Extended risk categorisation and alerting: limit recalculation after category changes, audit history of automatic changes, login-based country alerts",
        lenses: ["payments"],
      },
      {
        text: "Fixed data-correctness and reliability defects: lost or skipped events, **connection leaks** in a batch pipeline, cache-miss failures, **N+1** queries, retries and read timeouts for partner integrations",
        lenses: ["reliability", "performance", "integrations", "messaging"],
      },
      {
        text: "Extended third-party provider integrations: credit, cash-out and free-bet flows, amount validation, responsible-gaming limit handling",
        lenses: ["integrations", "payments"],
      },
      {
        text: "Delivered bonus and campaign features: per-project toggles, real-time updates over **WebSocket**, and a PoC of resource scaling for high-load campaigns",
        lenses: ["messaging", "performance"],
      },
      {
        text: "Raised test coverage to **80%+** (**JUnit**, **Mockito**, **Testcontainers**), closed **SonarQube** findings and technical debt; delivered through **GitLab CI/CD** and **Docker** images",
        lenses: ["quality", "cloud"],
      },
      {
        text: "Investigated and fixed critical production issues across service boundaries, using **Datadog** monitoring; designed services for **scalability** and **system-design** trade-offs",
        lenses: ["reliability", "microservices", "cloud"],
      },
    ],
    stack: ["Java 21 / 25", "Spring Boot 3 / 4", "PostgreSQL", "RabbitMQ 4.0", "Redis", "Kubernetes", "Docker", "GitLab CI/CD", "Datadog", "Testcontainers"],
  },
];

export const about = {
  lead: "I build and evolve backend systems where reliability, performance and maintainability affect the business directly.",
  paragraphs: [
    "I started in investment banking on trade processing and regulatory reporting, then moved into telecom and iGaming, where **integration-heavy backends** are the norm: carrier APIs, MDM/UEM providers, payment gateways and regulatory feeds.",
    "Most of my work is in **microservices, messaging and data stores**, and in what keeps them healthy: caching and query tuning, Kubernetes resource tuning, runtime upgrades, tests and documentation. I work test-first (**TDD**) in **Agile / Scrum** teams, have led a Java team, and I do **code review** and **mentoring** as part of the job.",
  ],
};

export const expertise: ExpertiseArea[] = [
  {
    no: "01",
    title: "Backend architecture & distributed systems",
    text: "Designing and evolving modular backends, microservices and distributed workflows.",
    points: ["Microservices and service boundaries", "Event-driven architecture", "Inter-service communication", "Distributed workflows", "System integration patterns"],
    lenses: ["microservices"],
  },
  {
    no: "02",
    title: "Performance & scalability",
    text: "Finding bottlenecks and removing them with targeted optimisation.",
    points: ["PostgreSQL query and index optimisation", "Redis caching", "JPA / Hibernate tuning, N+1 elimination", "Kubernetes HPA and resource tuning", "High-load services"],
    lenses: ["performance"],
  },
  {
    no: "03",
    title: "Platform modernisation",
    text: "Modernising live systems without stopping the business.",
    points: ["Java 17 → 21 → 25, Spring Boot 3 / 4, RabbitMQ 4.0", "Legacy integration replacement", "Monolith → microservices", "Technical debt reduction", "API modernisation"],
    lenses: ["modernisation"],
  },
  {
    no: "04",
    title: "Reliability & quality engineering",
    text: "Maintainable, predictable software for business-critical processes.",
    points: ["Unit, integration and end-to-end testing", "Testcontainers, 80%+ coverage", "CI/CD and feature-flag rollouts", "Monitoring and observability", "Retries, idempotency, error handling"],
    lenses: ["reliability", "quality", "cloud"],
  },
  {
    no: "05",
    title: "Integrations & messaging",
    text: "Reliable links between internal services and external providers.",
    points: ["REST / SOAP API integrations", "RabbitMQ messaging and routing", "Payment provider integrations", "Regulatory integrations", "Carrier and MDM provider APIs"],
    lenses: ["integrations", "messaging", "payments"],
  },
  {
    no: "06",
    title: "Technical leadership & collaboration",
    text: "Contributing beyond individual implementation tasks.",
    points: ["Technical decisions and design", "Code review", "Mentoring developers", "Led a Java team", "Agile / Scrum, cross-team work"],
    lenses: ["leadership"],
  },
];

/** Generalised for NDA: no internal service, provider or client names, and no figures that are not measured. */
export const caseStudies: CaseStudy[] = [
  {
    id: "async",
    title: "Reliable asynchronous processing",
    category: "Distributed systems · reliability",
    where: "Atlaslive · iGaming",
    stack: "Java · Spring · PostgreSQL · RabbitMQ",
    summary: "One polling job split into two independent streams, behind a feature flag.",
    challenge:
      "In a business-critical flow, first-pass records and failed or retried ones were handled by one polling job, so retries competed with new work.",
    approach: [
      "Split it into two independent asynchronous streams with dedicated thread pools",
      "Batched fetching with SKIP LOCKED on PostgreSQL, so several instances never process the same record",
      "Kept per-entity ordering and used exponential back-off for retries",
      "Released behind a feature flag, so it can be enabled or rolled back by configuration",
    ],
    impact: "The same set of records is processed as before, with retries no longer blocking new work, and a safe way to switch the change on or off.",
    lenses: ["reliability", "performance", "messaging", "microservices"],
  },
  {
    id: "payments",
    title: "Payment infrastructure modernisation",
    category: "Backend architecture · platform modernisation",
    where: "Atlaslive · iGaming",
    stack: "Java 21 · Spring Boot · RabbitMQ · Redis · PostgreSQL",
    summary: "From a legacy provider adapter to a Payment Gateway with one routing topology.",
    challenge:
      "A legacy payment-provider adapter limited extensibility, and payment routing and responsibilities were spread across services.",
    approach: [
      "Migrated the integration to a Payment Gateway architecture and removed the legacy adapter; later moved to the gateway's v2 API",
      "Routed withdrawal-status requests through the billing service, so there is one routing topology",
      "Replaced a local cache with a shared, TTL-based Redis cache for payment-method lookups",
      "Carried the services through the Java 21 and RabbitMQ 4.0 upgrades",
    ],
    impact: "One routing topology with lower coupling between services, and faster, steadier payment lookups.",
    lenses: ["payments", "modernisation", "integrations"],
  },
  {
    id: "monolith",
    title: "From a monolith to microservices",
    category: "Architecture · migration",
    where: "Brightfin · telecom",
    stack: "Java · Spring Boot · Microservices · Bazel · AWS",
    summary: "A critical platform service moved out of a monolith, with a mono-repo build.",
    challenge:
      "A critical service of a telecom expense and device management platform lived inside a monolith, which limited resource usage, scalability, performance and independent deployment.",
    approach: [
      "Migrated the service from the monolith to microservices",
      "Optimised performance and resource usage and gave infrastructure guidance, in collaboration with the AWS architect and DevOps",
      "Took part in moving the code to a mono-repo built with Bazel",
    ],
    impact: "Better resource usage, scalability and performance, and services that can be deployed independently.",
    lenses: ["modernisation", "microservices", "performance", "cloud"],
  },
  {
    id: "hardening",
    title: "API protection and certificate management",
    category: "Reliability · security",
    where: "Brightfin · telecom",
    stack: "Java · Redis · Bucket4j · Vault",
    summary: "Rate limiting against abuse and automated certificate management.",
    challenge:
      "The platform's APIs needed protection from DDoS attacks and resource abuse, and certificate management needed to be streamlined.",
    approach: [
      "Built rate limiting with Bucket4j and Redis",
      "Protected the APIs from DDoS and resource abuse and kept service quality consistent",
      "Implemented certificate management with Vault and an auto-update setup that streamlined the process",
    ],
    impact: "More predictable service quality under heavy or abusive traffic, and a simpler, automated certificate process.",
    lenses: ["reliability", "performance", "cloud"],
  },
  {
    id: "integrations",
    title: "One platform for many carriers and MDM providers",
    category: "Integrations · enterprise backend",
    where: "MobiChord · telecom",
    stack: "Java · REST / SOAP APIs · SFTP · CI/CD",
    summary: "Carrier and device-management integrations behind a single backend.",
    challenge:
      "A product for organisations had to manage, secure and monitor smartphones, tablets, laptops and smartwatches across many telecom carriers and device-management providers, each with its own API.",
    approach: [
      "Designed and built integrations with carriers (AT&T, Verizon, T-Mobile, Telus) and MDM providers (Jamf Pro, MobileIron, Microsoft Intune, MaaS360, BlackBerry)",
      "Implemented MACD flows: ordering devices and accessories, changing price plans and features, enabling roaming",
      "Added device-management functions: enrollment, full and partial sync, wipe, activation, suspension, notifications, location lookup",
      "Built a mid-server for secure encrypted file transfer between SFTP and ServiceNow, and backed the integrations with unit, integration and end-to-end tests",
    ],
    impact: "One backend to manage, secure and monitor devices across many providers.",
    lenses: ["integrations", "microservices", "reliability"],
  },
];

export const principles: Principle[] = [
  { title: "Ownership", text: "I take responsibility for the quality and outcome of my work, spot issues early, and look beyond the immediate implementation." },
  { title: "Pragmatic architecture", text: "I favour solutions that solve real engineering problems without adding unnecessary complexity." },
  { title: "Reliability first", text: "Business-critical systems need predictable behaviour, thoughtful error handling and well-tested code." },
  { title: "Continuous improvement", text: "I look for ways to improve architecture, workflows, performance and code quality." },
  { title: "Collaboration", text: "I value open communication, constructive feedback and helping teammates succeed." },
];

export const caseFiles: CaseFile[] = [
  {
    id: "readybell",
    name: "ReadyBell",
    kind: "personal project · multi-tenant SaaS",
    lenses: ["messaging", "integrations", "microservices"],
    problem:
      "Restaurant customers wait without knowing when an order is ready. A receipt QR code opens a tracking page and a Web Push fires the moment it is ready. No app, no account.",
    design:
      "DDD + hexagonal modular monolith, six bounded contexts. Domain events go through a port, so a broker can replace the in-process bus later.",
    hardParts:
      "Tenant isolation in the query layer (Hibernate @Filter); order state machine with optimistic locking; SSE with polling fallback; stateless replicas with state in Redis.",
    stack: "Java 21 · Spring Boot 3.4 · PostgreSQL · Redis · React + TypeScript · jqwik",
    repo: "https://github.com/jmarkuz/ReadyBell",
    diagram: { caption: "event flow", flow: "order → ready → push" },
    image: { src: "/projects/readybell-dashboard.webp", alt: "ReadyBell staff dashboard", width: 1200, height: 597 },
  },
  {
    id: "vacancy-tracker",
    name: "Vacancy Tracker",
    kind: "personal project · self-hosted tool",
    lenses: ["integrations"],
    problem:
      "A job search is scattered across feeds, alerts and spreadsheets. This collects vacancies on a schedule, removes duplicates, scores them with reasons and tracks every application.",
    design:
      "Each source is an isolated adapter: one failing source never stops a run. Scoring comes from user-defined rules, not hard-coded roles.",
    hardParts:
      "Cross-source deduplication; opt-in AI tailoring with a fact check before saving; module boundaries enforced by ArchUnit; 46 recorded ADRs.",
    stack: "Java 21 · Spring Boot 3.5 · PostgreSQL · Flyway · Preact + TypeScript · Testcontainers · Playwright",
    repo: "https://github.com/jmarkuz/vacancy-tracker",
    diagram: { caption: "pipeline", flow: "collect → score → track" },
    image: { src: "/projects/vacancy-tracker-dashboard.webp", alt: "Vacancy Tracker dashboard", width: 1200, height: 750 },
  },
];

export const moreRepos = [
  {
    name: "apache-kafka-training-tasks",
    text: "Kafka + Spring Boot training tasks",
    href: "https://github.com/jmarkuz/apache-kafka-training-tasks",
  },
];

export const skillGroups: { group: string; skills: Skill[] }[] = [
  {
    group: "Languages",
    skills: [
      { name: "Java 17 / 21 / 25", use: "both", lenses: ["modernisation"], key: true },
      { name: "SQL", use: "both" },
      { name: "Concurrency / multithreading", use: "work", lenses: ["performance"] },
      { name: "Scala", use: "work" },
      { name: "TypeScript", use: "personal" },
    ],
  },
  {
    group: "Frameworks",
    skills: [
      { name: "Spring Boot", use: "both", lenses: ["microservices", "modernisation"], key: true },
      { name: "Spring Data JPA / Hibernate", use: "both" },
      { name: "Spring Security", use: "both" },
      { name: "Spring Cloud", use: "work", lenses: ["microservices"] },
      { name: "Spring Batch", use: "work", lenses: ["reliability"] },
      { name: "Spring Cloud Gateway", use: "work", lenses: ["microservices"] },
      { name: "Bucket4j", use: "work", lenses: ["reliability", "performance"] },
      { name: "React", use: "personal" },
      { name: "Preact", use: "personal" },
      { name: "Vite", use: "personal" },
    ],
  },
  {
    group: "Architecture",
    skills: [
      { name: "Microservices", use: "work", lenses: ["microservices"], key: true },
      { name: "Distributed systems", use: "work", lenses: ["microservices", "reliability"] },
      { name: "High-load systems", use: "work", lenses: ["performance"] },
      { name: "System design", use: "work", lenses: ["microservices"] },
      { name: "Event-driven architecture", use: "both", lenses: ["messaging"] },
      { name: "DDD", use: "both", lenses: ["microservices"] },
      { name: "Clean / Hexagonal architecture", use: "both" },
      { name: "CQRS", use: "work", lenses: ["messaging"] },
      { name: "REST / SOAP APIs", use: "work", lenses: ["integrations", "microservices"] },
      { name: "OpenAPI / Swagger", use: "work", lenses: ["integrations"] },
      { name: "OpenFeign", use: "work", lenses: ["integrations"] },
      { name: "WebSocket", use: "work", lenses: ["messaging"] },
    ],
  },
  {
    group: "Data & messaging",
    skills: [
      { name: "PostgreSQL", use: "both", lenses: ["performance", "reliability"], key: true },
      { name: "Liquibase", use: "work" },
      { name: "Redis", use: "both", lenses: ["performance"] },
      { name: "MongoDB", use: "work" },
      { name: "Elasticsearch", use: "work", lenses: ["performance"] },
      { name: "RabbitMQ", use: "work", lenses: ["messaging"] },
      { name: "Apache Kafka", use: "personal", lenses: ["messaging"] },
      { name: "Apache ActiveMQ (JMS)", use: "work", lenses: ["messaging"] },
      { name: "Flyway", use: "personal" },
    ],
  },
  {
    group: "Cloud & DevOps",
    skills: [
      { name: "AWS", use: "work", lenses: ["cloud"] },
      { name: "Azure / GCP", use: "work", lenses: ["cloud"] },
      { name: "Kubernetes", use: "work", lenses: ["microservices", "performance", "cloud"] },
      { name: "Docker", use: "both", lenses: ["microservices", "cloud"] },
      { name: "Helm", use: "work", lenses: ["cloud"] },
      { name: "Terraform", use: "work", lenses: ["cloud"] },
      { name: "Vault", use: "work", lenses: ["cloud", "reliability"] },
      { name: "GitHub Actions", use: "both", lenses: ["cloud"] },
      { name: "GitLab CI/CD", use: "work", lenses: ["cloud", "quality"] },
    ],
  },
  {
    group: "Observability",
    skills: [
      { name: "Prometheus", use: "work", lenses: ["performance"] },
      { name: "Grafana", use: "work", lenses: ["performance"] },
      { name: "ELK Stack", use: "work", lenses: ["performance"] },
      { name: "OpenTelemetry", use: "work", lenses: ["performance", "microservices"] },
      { name: "Datadog", use: "work", lenses: ["performance", "cloud"] },
    ],
  },
  {
    group: "Testing & build",
    skills: [
      { name: "JUnit", use: "both", lenses: ["quality"] },
      { name: "Mockito", use: "work", lenses: ["quality"] },
      { name: "Testcontainers", use: "both", lenses: ["quality"] },
      { name: "SonarQube", use: "work", lenses: ["quality"] },
      { name: "ArchUnit", use: "personal" },
      { name: "jqwik", use: "personal" },
      { name: "Playwright", use: "personal" },
      { name: "Gradle", use: "both" },
      { name: "Maven", use: "both" },
      { name: "Bazel", use: "work" },
    ],
  },  {
    group: "Practices",
    skills: [
      { name: "TDD", use: "work", lenses: ["quality"] },
      { name: "Agile / Scrum", use: "work", lenses: ["leadership"] },
      { name: "Code review", use: "work", lenses: ["quality", "leadership"] },
      { name: "Mentoring", use: "work", lenses: ["leadership"] },
      { name: "Technical design", use: "work", lenses: ["leadership", "microservices"] },
    ],
  },

];
