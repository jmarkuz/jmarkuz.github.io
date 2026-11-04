"use client";

import { skillGroups, type SkillUse } from "@/content/profile";
import { matches, useLens } from "./LensProvider";
import { SectionHeading } from "./SectionHeading";

const useLabel: Record<SkillUse, string> = {
  work: "professional",
  personal: "personal projects",
  both: "professional and personal projects",
};

function Dot({ use }: { use: SkillUse }) {
  if (use === "personal") return <i aria-hidden className="size-1.5 rounded-full border-[1.5px] border-current" />;
  return <i aria-hidden className={`size-1.5 rounded-full bg-current ${use === "both" ? "dot-both" : ""}`} />;
}

export function Skills() {
  const { lens } = useLens();

  return (
    <section id="skills" aria-labelledby="skills-title" className="reveal pt-16 md:pt-24">
      <SectionHeading
        no="04"
        id="skills-title"
        title="Skills"
        lead="Filled dot: used professionally. Hollow dot: personal projects."
      />
      <div className="overflow-hidden rounded-[14px] border border-line-2 bg-surface">
        {skillGroups.map((g) => (
          <div key={g.group} className="grid border-b border-line last:border-b-0 md:grid-cols-[200px_1fr]">
            <h3 className="border-b border-line bg-sunk px-3.5 py-2.5 text-[13.5px] font-semibold md:border-r md:border-b-0 md:px-[18px] md:py-3.5">
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-1.5 px-3.5 py-2.5">
              {g.skills.map((s) => {
                const state = lens === null ? "" : matches(s.lenses, lens) && s.lenses?.length ? "hit" : "mute";
                return (
                  <li
                    key={s.name}
                    className={`inline-flex items-center gap-[7px] rounded-md border px-2.5 py-[3px] text-[13.5px] transition-colors ${
                      state === "hit"
                        ? "skill-hit border-ink bg-ink text-white"
                        : s.use === "personal"
                          ? "border-dashed border-line-2 text-muted"
                          : "border-line-2 text-ink-2"
                    } ${state === "mute" ? "opacity-35" : ""}`}
                  >
                    <Dot use={s.use} />
                    {s.name}
                    <span className="sr-only"> ({useLabel[s.use]})</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11.5px] text-muted" aria-hidden>
        <span>● professional (CV)</span>
        <span>○ personal projects (GitHub)</span>
        <span>●○ both</span>
      </p>
    </section>
  );
}
