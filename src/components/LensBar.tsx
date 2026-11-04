"use client";

import { companies, lenses } from "@/content/profile";
import { useLens } from "./LensProvider";

export function LensBar() {
  const { lens, toggleLens } = useLens();

  const matching = lens ? companies.filter((c) => c.achievements.some((a) => a.lenses.includes(lens))) : [];
  const evidence = lens ? companies.reduce((n, c) => n + c.achievements.filter((a) => a.lenses.includes(lens)).length, 0) : 0;

  return (
    <div className="mt-7 flex flex-wrap items-center gap-3.5 md:mt-9">
      <div id="lens-label">
        <p className="text-sm font-semibold">What are you hiring for?</p>
        <p className="text-[12.5px] text-muted">Highlights matching roles, evidence and skills</p>
      </div>
      <div
        role="group"
        aria-labelledby="lens-label"
        className="-mx-[18px] flex w-[calc(100%+36px)] gap-1.5 overflow-x-auto px-[18px] pb-1 md:mx-0 md:w-auto md:flex-wrap md:overflow-visible md:p-0"
      >
        {lenses.map((l) => {
          const on = lens === l.id;
          return (
            <button
              key={l.id}
              type="button"
              aria-pressed={on}
              onClick={() => toggleLens(l.id)}
              className={`h-[34px] flex-none rounded-full border px-[13px] text-[13.5px] transition-colors ${
                on ? "border-ink bg-ink text-white" : "border-line-2 bg-surface text-ink-2 hover:border-ink-2"
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="w-full font-mono text-xs text-muted md:ml-auto md:w-auto">
        {lens ? (
          <>
            <b className="font-medium text-ink">{matching.length}</b> {matching.length === 1 ? "role" : "roles"} ·{" "}
            <b className="font-medium text-ink">{evidence}</b> {evidence === 1 ? "piece" : "pieces"} of evidence
          </>
        ) : (
          "no filter · showing everything"
        )}
      </p>
    </div>
  );
}
