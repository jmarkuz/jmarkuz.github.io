"use client";

import { companies, coreStack, skillGroups, type SkillUse } from "@/content/profile";
import { matches, useLens } from "./LensProvider";
import { SectionHeading } from "./SectionHeading";

const useLabel: Record<SkillUse, string> = {
  work: "professional",
  personal: "personal projects",
  both: "professional and personal projects",
};

const companyName = (id: string) => companies.find((c) => c.id === id)?.name ?? id;

function Dot({ use }: { use: SkillUse }) {
  if (use === "personal") return <i aria-hidden className="size-1.5 rounded-full border-[1.5px] border-current" />;
  return <i aria-hidden className={`size-1.5 rounded-full bg-current ${use === "both" ? "dot-both" : ""}`} />;
}

export function Skills() {
  const { lens } = useLens();

  return (
    <section id="skills" aria-labelledby="skills-title" className="reveal pt-16 md:pt-24">
      <SectionHeading
        no="05"
        id="skills-title"
        title="Skills"
        lead="Filled dot: used professionally. Hollow dot: personal projects."
      />
      <div className="overflow-hidden rounded-[14px] border border-line-2 bg-surface">
        <div className="grid border-b border-line-2 md:grid-cols-[200px_1fr]">
          <h3 className="border-b border-line bg-ink px-3.5 py-2.5 text-[14px] font-semibold text-bg md:border-r md:border-b-0 md:px-[18px] md:py-3.5">
            Core technologies
          </h3>
          <ul className="flex flex-wrap gap-1.5 px-3.5 py-3">
            {coreStack.map((t) => (
              <li key={t} className="rounded-md border border-ink/40 bg-ink/[0.05] px-2.5 py-[3px] text-[14px] font-semibold text-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>
        {skillGroups.map((g) => (
          <div key={g.group} className="grid border-b border-line last:border-b-0 md:grid-cols-[200px_1fr]">
            <h3 className="border-b border-line bg-sunk px-3.5 py-2.5 text-[14px] font-semibold md:border-r md:border-b-0 md:px-[18px] md:py-3.5">
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-1.5 px-3.5 py-2.5">
              {g.skills.map((s) => {
                const state = lens === null ? "" : matches(s.lenses, lens) && s.lenses?.length ? "hit" : "mute";
                return (
                  <li
                    key={s.name}
                    title={s.where ? `Used at ${s.where.map(companyName).join(", ")}` : undefined}
                    className={`inline-flex items-center gap-[7px] rounded-md border px-2.5 py-[3px] text-[14px] transition-colors ${
                      state === "hit"
                        ? "skill-hit border-ink bg-ink text-bg"
                        : s.use === "personal"
                          ? "border-dashed border-line-2 text-muted"
                          : s.key
                            ? "border-ink/40 bg-ink/[0.05] font-semibold text-ink"
                            : "border-line-2 text-ink-2"
                    }`}
                  >
                    <Dot use={s.use} />
                    {s.name}
                    <span className="sr-only">
                      {" "}
                      ({useLabel[s.use]}
                      {s.where ? `, ${s.where.map(companyName).join(", ")}` : ""})
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[12.5px] text-muted" aria-hidden>
        <span>● professional</span>
        <span>○ personal projects</span>
        <span>●○ both</span>
      </p>
    </section>
  );
}
