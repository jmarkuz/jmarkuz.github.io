"use client";

import { companies, lenses } from "@/content/profile";
import { useLens } from "./LensProvider";

export function LensBar() {
  const { lens, toggleLens } = useLens();

  const activeLens = lenses.find((l) => l.id === lens);
  const matching = lens ? companies.filter((c) => c.achievements.some((a) => a.lenses.includes(lens))) : [];
  const evidence = lens ? companies.reduce((n, c) => n + c.achievements.filter((a) => a.lenses.includes(lens)).length, 0) : 0;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3.5 md:mt-5">
      <div id="lens-label">
        <p className="text-[15px] font-semibold">What are you hiring for?</p>
        <p className="text-[13.5px] text-muted">Highlights matching roles, evidence and skills</p>
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
              className={`h-[34px] flex-none rounded-full border px-[11px] text-[14px] transition-colors ${
                on ? "border-ink bg-ink text-bg" : "border-line-2 bg-surface text-ink-2 hover:border-ink-2"
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </div>
      {/* Always rendered, so screen readers announce the change; empty while no filter is active. */}
      <p aria-live="polite" className={`font-mono text-[12.5px] text-muted md:ml-auto ${lens ? "w-full md:w-auto" : "sr-only"}`}>
        {lens && (
          <>
            <b className="font-medium text-ink">{matching.length}</b> {matching.length === 1 ? "role" : "roles"} ·{" "}
            <b className="font-medium text-ink">{evidence}</b> {evidence === 1 ? "piece" : "pieces"} of evidence
          </>
        )}
      </p>
      {activeLens && (
        <p className="w-full text-[13.5px] text-muted">
          <span className="font-mono text-[12px] tracking-[0.06em] text-faint uppercase">Keywords</span>{" "}
          {activeLens.keywords.join(" · ")}
        </p>
      )}
    </div>
  );
}
