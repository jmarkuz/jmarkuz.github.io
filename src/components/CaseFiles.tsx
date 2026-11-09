"use client";

import Image from "next/image";
import { caseFiles, moreRepos, type CaseFile } from "@/content/profile";
import { ReadyBellFlow, VacancyPipeline } from "./diagrams";
import { GitHubIcon } from "./icons";
import { matches, useLens } from "./LensProvider";
import { SectionHeading } from "./SectionHeading";

const diagrams: Record<CaseFile["id"], () => React.ReactElement> = {
  readybell: ReadyBellFlow,
  "vacancy-tracker": VacancyPipeline,
};

export function CaseFiles() {
  const { lens } = useLens();

  return (
    <section id="pet-projects" aria-labelledby="pet-projects-title" className="reveal pt-16 md:pt-24">
      <SectionHeading
        no="04"
        id="pet-projects-title"
        title="Pet projects"
        lead="Backend work is invisible, so each project shows its architecture first."
      />
      <div className="grid gap-[18px]">
        {caseFiles.map((p) => {
          const Diagram = diagrams[p.id];
          return (
            <article
              key={p.id}
              aria-labelledby={`${p.id}-title`}
              className={`grid grid-cols-1 overflow-hidden rounded-[14px] border bg-surface transition-colors duration-200 md:grid-cols-2 ${
                lens !== null && matches(p.lenses, lens) ? "border-ink/60 ring-1 ring-ink/20" : "border-line-2"
              }`}
            >
              <div className="border-b border-line p-5 md:border-r md:border-b-0 md:px-[30px] md:py-7">
                <p className="font-mono text-[12.5px] text-muted">{p.kind}</p>
                <h3 id={`${p.id}-title`} className="mt-1 mb-3 text-[26px] font-semibold tracking-[-0.03em] md:text-[30px]">
                  {p.name}
                </h3>
                <dl className="border-t border-line">
                  {(
                    [
                      ["Problem", p.problem],
                      ["Design", p.design],
                      ["Hard parts", p.hardParts],
                      ["Stack", p.stack],
                    ] as const
                  ).map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[96px_1fr] gap-3 border-b border-line py-2.5 text-[15px] text-ink-2">
                      <dt className="pt-0.5 font-mono text-[12px] tracking-[0.05em] text-faint uppercase">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={p.repo}
                    className="inline-flex h-[38px] items-center rounded-lg bg-ink px-[15px] text-[14px] font-medium text-bg hover:bg-ink-2"
                  >
                    <GitHubIcon className="mr-2 size-4" />
                    Repository ↗<span className="sr-only"> for {p.name}</span>
                  </a>
                </div>
              </div>
              <div className="flex min-w-0 flex-col bg-sunk">
                <p className="flex justify-between border-b border-line px-[18px] py-3 font-mono text-[12px] text-faint">
                  <span>{p.diagram.caption}</span>
                  <span>{p.diagram.flow}</span>
                </p>
                {/* Scrolls sideways on narrow screens so the labels stay readable. */}
                <div className="overflow-x-auto" tabIndex={0} aria-label={`${p.name} architecture diagram`}>
                  <Diagram />
                </div>
                <div className="mx-[18px] mt-auto h-[150px] overflow-hidden rounded-t-lg border border-b-0 border-line-2">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    loading="lazy"
                    className="size-full object-cover object-left-top"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[15px] text-muted">
        <span className="font-mono text-[12.5px] tracking-[0.06em] text-faint uppercase">Also on GitHub</span>
        {moreRepos.map((r) => (
          <a key={r.name} href={r.href} className="group inline-flex items-baseline gap-2">
            <span className="font-mono text-[14px] text-ink underline decoration-line-2 underline-offset-4 group-hover:decoration-ink">
              {r.name}
            </span>
            <span>{r.text} ↗</span>
          </a>
        ))}
      </p>
    </section>
  );
}
