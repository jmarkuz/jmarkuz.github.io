"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { companies, lenses, type LensId } from "@/content/profile";
import { monthOf } from "@/lib/time";

interface LensState {
  lens: LensId | null;
  toggleLens: (id: LensId) => void;
  selected: string;
  select: (companyId: string) => void;
  /** Current month: the build month until the page hydrates, then the visitor's month. */
  now: number;
}

const LensContext = createContext<LensState | null>(null);

const LENS_IDS = new Set<string>(lenses.map((l) => l.id));
const CURRENT = companies[companies.length - 1]!.id;

export const matches = (tags: readonly LensId[] | undefined, lens: LensId | null) =>
  lens === null || (tags ?? []).includes(lens);

const hasEvidence = (companyId: string, lens: LensId) =>
  companies.find((c) => c.id === companyId)?.achievements.some((a) => a.lenses.includes(lens)) ?? false;

export function LensProvider({ buildMonth, children }: { buildMonth: number; children: ReactNode }) {
  const [lens, setLens] = useState<LensId | null>(null);
  const [selected, setSelected] = useState(CURRENT);
  const [now, setNow] = useState(buildMonth);

  function applyLens(next: LensId | null, from: string) {
    setLens(next);
    // Keep the detail panel useful: jump to the most recent company with matching evidence.
    if (next && !hasEvidence(from, next)) {
      const match = [...companies].reverse().find((c) => hasEvidence(c.id, next));
      if (match) setSelected(match.id);
    }
    const url = new URL(window.location.href);
    if (next) url.searchParams.set("for", next);
    else url.searchParams.delete("for");
    window.history.replaceState(null, "", url);
  }

  // `?for=messaging` preselects a lens, so a tailored link can go with an application.
  useEffect(() => {
    setNow(monthOf(new Date()));
    const param = new URLSearchParams(window.location.search).get("for");
    if (param && LENS_IDS.has(param)) applyLens(param as LensId, CURRENT);
  }, []);

  const value: LensState = {
    lens,
    toggleLens: (id) => applyLens(lens === id ? null : id, selected),
    selected,
    select: setSelected,
    now,
  };
  return <LensContext.Provider value={value}>{children}</LensContext.Provider>;
}

export function useLens(): LensState {
  const ctx = useContext(LensContext);
  if (!ctx) throw new Error("useLens must be used inside <LensProvider>");
  return ctx;
}
