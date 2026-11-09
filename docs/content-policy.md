# What goes on the public site

The site and this repository are public. Work experience is described in generic, role-level terms.

## Do publish

- Employer name, job titles, dates (already on the CV).
- Industry and domain at a high level: banking, telecom, iGaming; "risk", "retail", "bonus", "payments".
- Technologies, patterns and techniques: Java, Spring Boot, RabbitMQ, Redis, PostgreSQL, Kubernetes, idempotency, `SKIP LOCKED`, feature flags, concurrent index builds.
- Qualitative outcomes: "improved response time and stability", "reduced coupling", "raised test coverage to 80%+".
- Measured numbers only when they are the author's own and non-confidential.

## Do not publish

- Internal service, product or repository names, and internal service-to-service topology.
- Names of payment providers, regulators, clients, partners and other third parties (the source documents already anonymise these; keep them anonymous).
- Internal URLs, hostnames, environments, configuration keys, feature-flag names, credentials.
- Platform scale (players, requests per minute) and business figures.
- Performance percentages or load numbers that are not measured results of the author's own change.
- Anything described as an open risk or known weakness of a production system.
- Personal data: home address, identity documents. Phone numbers stay off the pages; the only exception is the downloadable CV, which is the author's own choice and should be re-checked whenever it is replaced.

## Working notes

Drafts that contain any of the "do not publish" material live in `private/`, which is ignored by git. Only generic text from `src/content/profile.ts` is shown on the site.
