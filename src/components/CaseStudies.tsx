"use client";

import { caseStudies } from "@/content/profile";
import { matches, useLens } from "./LensProvider";
import { SectionHeading } from "./SectionHeading";

const label = "font-mono text-[12.5px] tracking-[0.06em] text-faint uppercase";

/**
 * Three engineering stories from professional work: challenge, approach, impact. Collapsed by default; native
 * <details>, so it works from the keyboard and the full text is in the HTML for search engines and Ctrl+F.
 */
export function CaseStudies() {
  const { lens } = useLens();

  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="reveal pt-16 md:pt-24">
      <SectionHeading
        no="03"
        id="case-studies-title"
        title="Case studies"
        lead="Engineering challenges from my work. Descriptions are generalised to respect confidentiality."
      />
      <div className="grid gap-3">
        {caseStudies.map((c) => {
          const hit = lens !== null && matches(c.lenses, lens);
          return (
            <details
              key={c.id}
              className={`group overflow-hidden rounded-[14px] border bg-surface transition-colors duration-200 ${
                hit ? "border-ink/60 ring-1 ring-ink/20" : "border-line-2"
              }`}
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-[18px] hover:bg-ink/[0.025] md:px-6">
                <span aria-hidden className="mt-1.5 font-mono text-[12px] text-faint transition-transform group-open:rotate-90">
                  ▸
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[12.5px] text-muted">
                    {c.where} · {c.category}
                  </span>
                  <span className="mt-0.5 block text-[19px] font-semibold tracking-[-0.015em]">{c.title}</span>
                  <span className="mt-0.5 block text-[15px] text-muted">{c.summary}</span>
                </span>
                <span className="mt-1 hidden font-mono text-[12.5px] text-faint md:block">
                  <span className="group-open:hidden">expand</span>
                  <span className="hidden group-open:inline">collapse</span>
                </span>
              </summary>
              <div className="grid gap-6 border-t border-line px-5 py-5 md:grid-cols-[1fr_1.35fr_1fr] md:gap-8 md:px-6 md:pl-[52px]">
                <div>
                  <h4 className={label}>Challenge</h4>
                  <p className="mt-2 text-[15px] text-ink-2">{c.challenge}</p>
                </div>
                <div>
                  <h4 className={label}>Approach</h4>
                  <ul className="mt-2 grid gap-1.5 text-[15px] text-ink-2">
                    {c.approach.map((a) => (
                      <li key={a} className="relative pl-4 before:absolute before:top-[10px] before:left-0 before:size-1 before:rounded-full before:bg-line-2">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={label}>Impact</h4>
                  <p className="mt-2 text-[15px] text-ink-2">{c.impact}</p>
                  <p className="mt-4 font-mono text-[12.5px] text-muted">{c.stack}</p>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
