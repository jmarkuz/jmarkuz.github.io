// All site content lives here. Text may use **bold** for emphasis.
// Dates are "YYYY-MM"; `end: null` means the role is current.

export type Domain = "bank" | "tel" | "gam";

export type LensId =
  | "microservices"
  | "messaging"
  | "integrations"
  | "payments"
  | "performance"
  | "modernisation"
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
  docs: { label: string; href: string };
  diagram: { caption: string; flow: string };
  image: { src: string; alt: string; width: number; height: number };
}

export const site = {
  url: "https://jmarkuz.github.io",
  title: "Marian Kuziv · Senior Java Software Engineer",
  description:
    "Senior Java Software Engineer with 10+ years building backend systems with Java and Spring Boot across banking, telecom and iGaming: microservices, messaging and modernisation.",
};

export const person = {
  name: "Marian Kuziv",
  title: "Senior Java Software Engineer",
  tagline: "Backend systems for banking, telecom and iGaming.",
  intro:
    "Ten years of Java and Spring Boot: microservices, messaging and the modernisation of systems that cannot stop. Below is my career as a trace. Pick what you are hiring for and the evidence lights up.",
  status: "Open to senior backend roles · Prague, CZ",
  location: "Prague, Czech Republic",
  availability:
    "Based in Prague and authorized to work in the Czech Republic. Open to relocation within the EU (visa sponsorship required outside the Czech Republic).",
  email: "mi.kuziv@gmail.com",
  /** 4:5 portrait on a black background for the hero; `share` is a square JPEG for search engines. */
  photo: {
    src: "/portrait.webp",
    width: 1000,
    height: 1250,
    share: "/marian-kuziv.jpg",
    alt: "Portrait of Marian Kuziv in side light, wearing headphones",
  },
  /**
   * "spotlight": dark hero, the photo dissolves into black behind the name.
   * "overlap": light hero, the name crosses the edge of a dark photo card and changes colour.
   */
  heroStyle: "spotlight" as "spotlight" | "overlap",
  linkedin: { label: "in/mariankuziv", href: "https://www.linkedin.com/in/mariankuziv/" },
  github: { label: "jmarkuz", href: "https://github.com/jmarkuz" },
  /** Drop a PDF into /public and set `href` to show the CV link. */
  cv: null as { label: string; href: string } | null,
  languages: ["Ukrainian (native)", "English (professional working, B2)"],
  education: "MSc Mathematics, Drohobych Ivan Franko State Pedagogical University (2007–2012)",
  certifications: ["Google AI Professional Certificate", "Java Design Patterns and Architecture"],
};

export const proof = [
  { value: "10+ yrs", label: "Java backend engineering" },
  { value: "10,000+", label: "transactions/day in guaranteed order" },
  { value: "2h → 15m", label: "regulatory report generation" },
  { value: "80%+", label: "test coverage, critical services" },
];

export const lenses: { id: LensId; label: string }[] = [
  { id: "microservices", label: "Microservices" },
  { id: "messaging", label: "Messaging" },
  { id: "integrations", label: "Integrations" },
  { id: "payments", label: "Payments & risk" },
  { id: "performance", label: "Performance" },
  { id: "modernisation", label: "Modernisation" },
  { id: "leadership", label: "Team leadership" },
];

export const domains: Record<Domain, string> = {
  bank: "Banking",
  tel: "Telecom",
  gam: "iGaming",
};

// Oldest first: this is the order of rows in the trace.
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
        text: "Event-driven order pipeline for OTC derivatives: **10,000+ transactions/day**, guaranteed ordering",
        lenses: ["messaging", "performance"],
      },
      { text: "Regulatory reporting automation: **2 hours → 15 minutes**", lenses: ["performance"] },
      {
        text: "CRM ↔ banking backend integration; data consistency via transaction management",
        lenses: ["integrations"],
      },
      {
        text: "Gradle build scripts extracted into a plugin; Scala maintenance; web console for a REST API",
        lenses: [],
      },
    ],
    stack: ["Java", "Scala", "Gradle", "REST"],
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
      { text: "Integrations with **AT&T, Verizon, T-Mobile and Telus**", lenses: ["integrations"] },
      {
        text: "Integrations with **Jamf Pro, MobileIron, Microsoft Intune, MaaS360 and BlackBerry**",
        lenses: ["integrations"],
      },
      { text: "Inventory reporting service with catalog support", lenses: [] },
      { text: "Unit, integration and end-to-end tests; CI/CD pipelines", lenses: [] },
    ],
    stack: ["Java", "Carrier APIs", "MDM APIs", "CI/CD"],
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
      { text: "Designed and built core microservices for **TEM and UEM** platforms", lenses: ["microservices"] },
      {
        text: "**Led a team of Java developers** after the previous lead left: guidance, design, code review",
        lenses: ["leadership"],
      },
      {
        text: "Integrations with carriers and MDM/UEM providers; MACD and device-enrollment workflows",
        lenses: ["integrations"],
      },
      {
        text: "Contributed to the **monolith-to-microservices** transition",
        lenses: ["modernisation", "microservices"],
      },
      { text: "Established code-quality standards: tests, review, Confluence, Swagger", lenses: ["leadership"] },
      { text: "Supported multi-cloud infrastructure on AWS, GCP and Azure with DevOps", lenses: [] },
    ],
    stack: ["Java", "Spring Boot", "Microservices", "AWS · GCP · Azure", "Swagger"],
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
        text: "Modernised **Risk Management, Retail and Bonus** services, incl. regulatory and external-provider integrations",
        lenses: ["modernisation", "integrations", "payments"],
      },
      {
        text: "Migrated payments from legacy to a **Payment Gateway** architecture; redesigned cross-service workflows and message routing",
        lenses: ["payments", "microservices", "messaging", "modernisation"],
      },
      { text: "**Redis caching** and query optimisation for performance-critical requests", lenses: ["performance"] },
      {
        text: "Moved services to **Java 21 and RabbitMQ 4.0**; tuned Kubernetes HPA and CPU/memory",
        lenses: ["modernisation", "messaging", "performance"],
      },
      { text: "Monitoring, messaging, notifications and CRM integration", lenses: ["messaging", "integrations"] },
      { text: "Test coverage raised to **80%+** on critical services", lenses: [] },
      { text: "Resolved critical production issues across service boundaries", lenses: ["microservices"] },
    ],
    stack: ["Java 21", "Spring Boot", "RabbitMQ 4.0", "Redis", "Kubernetes"],
  },
];

export const about = {
  lead: "From requirements to production support, across three industries.",
  paragraphs: [
    "I started in investment banking on trade processing and regulatory reporting, then moved into telecom and iGaming, where **integration-heavy backends** are the norm: carrier APIs, MDM/UEM providers, payment gateways and regulatory feeds.",
    "Most of my work is in **microservices, messaging and data stores**, and in what keeps them healthy: caching and query tuning, Kubernetes resource tuning, runtime upgrades, tests and documentation. I have led a Java team and run design and code review.",
  ],
  principles: [
    {
      title: "Own the whole lifecycle",
      text: "Requirements, design, implementation, testing, deployment and production support.",
    },
    {
      title: "Modernise without stopping",
      text: "Monolith → microservices, legacy payments → Payment Gateway, Java 21 and RabbitMQ 4.0.",
    },
    {
      title: "Leave it better documented",
      text: "Test coverage, code review, Swagger specs and Confluence as part of delivery.",
    },
  ],
};

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
    docs: { label: "Architecture notes", href: "https://github.com/jmarkuz/ReadyBell/tree/master/docs/architecture" },
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
    docs: { label: "Decision log", href: "https://github.com/jmarkuz/vacancy-tracker/blob/master/docs/decisions.md" },
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
  {
    name: "spring-transaction-propagation-examples",
    text: "Runnable transaction propagation samples",
    href: "https://github.com/jmarkuz/spring-transaction-propagation-examples",
  },
  {
    name: "gradle-auto-deploy-to-nexus",
    text: "Bundle libraries, publish to Nexus",
    href: "https://github.com/jmarkuz/gradle-auto-deploy-to-nexus",
  },
];

export const skillGroups: { group: string; skills: Skill[] }[] = [
  {
    group: "Languages",
    skills: [
      { name: "Java 17–21", use: "both", lenses: ["modernisation"] },
      { name: "SQL", use: "both" },
      { name: "Scala", use: "work" },
      { name: "TypeScript", use: "personal" },
    ],
  },
  {
    group: "Frameworks",
    skills: [
      { name: "Spring Boot", use: "both", lenses: ["microservices", "modernisation"] },
      { name: "Spring Data / JPA / Hibernate", use: "both" },
      { name: "Spring Security", use: "both" },
      { name: "Spring Cloud", use: "work", lenses: ["microservices"] },
      { name: "React", use: "personal" },
      { name: "Preact · Vite", use: "personal" },
    ],
  },
  {
    group: "Architecture",
    skills: [
      { name: "Microservices", use: "work", lenses: ["microservices"] },
      { name: "Event-driven", use: "both", lenses: ["messaging"] },
      { name: "DDD", use: "both", lenses: ["microservices"] },
      { name: "Clean / Hexagonal", use: "both" },
      { name: "CQRS", use: "work", lenses: ["messaging"] },
      { name: "REST / SOAP", use: "work", lenses: ["integrations"] },
    ],
  },
  {
    group: "Data & messaging",
    skills: [
      { name: "PostgreSQL", use: "both" },
      { name: "Redis", use: "both", lenses: ["performance"] },
      { name: "MongoDB", use: "work" },
      { name: "Elasticsearch", use: "work", lenses: ["performance"] },
      { name: "RabbitMQ", use: "work", lenses: ["messaging"] },
      { name: "Apache Kafka", use: "both", lenses: ["messaging"] },
      { name: "ActiveMQ (JMS)", use: "work", lenses: ["messaging"] },
      { name: "Flyway", use: "personal" },
    ],
  },
  {
    group: "Cloud & DevOps",
    skills: [
      { name: "AWS", use: "work" },
      { name: "Kubernetes", use: "work", lenses: ["microservices", "performance"] },
      { name: "Docker", use: "both", lenses: ["microservices"] },
      { name: "Helm", use: "work" },
      { name: "Terraform", use: "work" },
      { name: "GitHub Actions", use: "both" },
      { name: "GitLab CI", use: "work" },
    ],
  },
  {
    group: "Observability",
    skills: [
      { name: "Prometheus", use: "work", lenses: ["performance"] },
      { name: "Grafana", use: "work", lenses: ["performance"] },
      { name: "ELK", use: "work", lenses: ["performance"] },
      { name: "OpenTelemetry", use: "work", lenses: ["performance", "microservices"] },
      { name: "DataDog", use: "work", lenses: ["performance"] },
    ],
  },
  {
    group: "Testing & build",
    skills: [
      { name: "JUnit", use: "both" },
      { name: "Mockito", use: "work" },
      { name: "Testcontainers", use: "both" },
      { name: "ArchUnit", use: "personal" },
      { name: "jqwik", use: "personal" },
      { name: "Playwright", use: "personal" },
      { name: "Gradle", use: "both" },
      { name: "Maven", use: "both" },
    ],
  },
];
