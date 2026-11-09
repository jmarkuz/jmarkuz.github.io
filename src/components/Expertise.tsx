"use client";

import { about, expertise } from "@/content/profile";
import { matches, useLens } from "./LensProvider";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

/** Intro paragraphs and six areas of expertise. A card lights up when the "What are you hiring for?" filter matches it. */
export function Expertise() {
  const { lens } = useLens();

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="reveal pt-16 md:pt-24">
      <SectionHeading no="02" id="expertise-title" title="Expertise" lead={about.lead} />
      <div className="mb-8 grid gap-x-14 gap-y-3 md:grid-cols-2">
        {about.paragraphs.map((p) => (
          <p key={p} className="text-[16px] text-ink-2 md:text-[17px]">
            <RichText text={p} />
          </p>
        ))}
      </div>
      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((a) => {
          const hit = lens !== null && matches(a.lenses, lens);
          return (
            <li
              key={a.no}
              className={`flex flex-col rounded-xl border bg-surface px-[18px] py-[18px] transition-colors duration-200 ${
                hit ? "border-ink/60 ring-1 ring-ink/20" : "border-line"
              }`}
            >
              <p className="font-mono text-[12.5px] text-faint">{a.no}</p>
              <h3 className="mt-1 text-[17px] leading-snug font-semibold tracking-[-0.01em]">{a.title}</h3>
              <p className="mt-1.5 text-[14.5px] text-muted">{a.text}</p>
              <ul className="mt-3 grid gap-1 border-t border-line pt-3 text-[14.5px] text-ink-2">
                {a.points.map((pt) => (
                  <li key={pt} className="relative pl-4 before:absolute before:top-[10px] before:left-0 before:h-px before:w-2 before:bg-faint">
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
