"use client";

import Image from "next/image";
import { caseFiles, moreRepos, type CaseFile } from "@/content/profile";
import { ReadyBellFlow, VacancyPipeline } from "./diagrams";
import { matches, useLens } from "./LensProvider";
import { SectionHeading } from "./SectionHeading";

const diagrams: Record<CaseFile["id"], () => React.ReactElement> = {
  readybell: ReadyBellFlow,
  "vacancy-tracker": VacancyPipeline,
};

export function CaseFiles() {
  const { lens } = useLens();

  return (
    <section id="projects" aria-labelledby="projects-title" className="reveal pt-16 md:pt-24">
      <SectionHeading
        no="03"
        id="projects-title"
        title="Case files"
        lead="Backend work is invisible, so each project shows its architecture first."
      />
      <div className="grid gap-[18px]">
        {caseFiles.map((p) => {
          const Diagram = diagrams[p.id];
          return (
            <article
              key={p.id}
              aria-labelledby={`${p.id}-title`}
              className={`grid overflow-hidden rounded-[14px] border border-line-2 bg-surface transition-opacity duration-200 md:grid-cols-2 ${
                matches(p.lenses, lens) ? "" : "opacity-40"
              }`}
            >
              <div className="border-b border-line p-5 md:border-r md:border-b-0 md:px-[30px] md:py-7">
                <p className="font-mono text-[11.5px] text-muted">{p.kind}</p>
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
                    <div key={k} className="grid grid-cols-[96px_1fr] gap-3 border-b border-line py-2.5 text-sm text-ink-2">
                      <dt className="pt-0.5 font-mono text-[11px] tracking-[0.05em] text-faint uppercase">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={p.repo}
                    className="inline-flex h-[38px] items-center rounded-lg bg-ink px-[15px] text-[13.5px] font-medium text-white hover:bg-ink-2"
                  >
                    Repository ↗<span className="sr-only"> for {p.name}</span>
                  </a>
                  <a
                    href={p.docs.href}
                    className="inline-flex h-[38px] items-center rounded-lg border border-line-2 bg-surface px-[15px] text-[13.5px] font-medium hover:border-ink-2"
                  >
                    {p.docs.label}
                    <span className="sr-only"> for {p.name}</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col bg-sunk">
                <p className="flex justify-between border-b border-line px-[18px] py-3 font-mono text-[11px] text-faint">
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

      <ul className="mt-[18px] grid gap-3 md:grid-cols-3">
        {moreRepos.map((r) => (
          <li key={r.name}>
            <a
              href={r.href}
              className="block h-full rounded-xl border border-line bg-surface px-4 py-3.5 text-[13px] text-muted hover:border-line-2"
            >
              <b className="mb-0.5 block font-mono text-[12.5px] font-medium break-words text-ink">{r.name}</b>
              {r.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
