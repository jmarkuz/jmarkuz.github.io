"use client";

import { useState } from "react";
import { KEY_WORK_LIMIT, companies, domains, lenses, type Company, type Domain } from "@/content/profile";
import { endMonth, formatDuration, formatMonth, toMonth } from "@/lib/time";
import { CtaStrip } from "./CtaStrip";
import { matches, useLens } from "./LensProvider";
import { RichText } from "./RichText";

const bar: Record<Domain, string> = { bank: "bg-bank", tel: "bg-tel", gam: "bg-gam" };
const childBar: Record<Domain, string> = {
  bank: "bg-bank-tint ring-1 ring-inset ring-bank",
  tel: "bg-tel-tint ring-1 ring-inset ring-tel",
  gam: "bg-gam-tint ring-1 ring-inset ring-gam",
};
const pill: Record<Domain, string> = {
  bank: "bg-bank-tint text-bank-ink",
  tel: "bg-tel-tint text-tel-ink",
  gam: "bg-gam-tint text-gam-ink",
};

const T0 = toMonth(companies[0]!.start);
/** Newest role first, like a CV; the time axis still runs left to right. */
const newestFirst = [...companies].reverse();

/** Year gridlines and the label column share one grid so bars line up with the axis. */
const ROW = "grid grid-cols-1 md:grid-cols-[310px_minmax(0,1fr)] lg:grid-cols-[330px_minmax(0,1fr)]";

export function Trace() {
  const { lens, selected, select, now } = useLens();
  const span = Math.max(now - T0, 1);
  const pct = (m: number) => ((m - T0) / span) * 100;
  const firstYear = Math.floor(T0 / 12) + 1;
  const years = Array.from({ length: Math.floor(now / 12) - firstYear + 1 }, (_, i) => firstYear + i);

  const gridlines = (
    <>
      {years.map((y) => (
        <i key={y} aria-hidden className="absolute inset-y-0 w-px bg-line" style={{ left: `${pct(y * 12)}%` }} />
      ))}
    </>
  );

  const current = companies.find((c) => c.id === selected) ?? companies[companies.length - 1]!;
  const domainTotals = (Object.keys(domains) as Domain[]).map((d) => ({
    domain: d,
    months: companies.filter((c) => c.domain === d).reduce((n, c) => n + endMonth(c.end, now) - toMonth(c.start), 0),
  }));

  return (
    <div className="mt-4 overflow-clip rounded-[14px] border border-line-2 bg-surface shadow-[0_24px_48px_-32px_rgb(30_25_10/0.25)]">
      <div className="flex flex-wrap items-center gap-x-[18px] gap-y-1 border-b border-line bg-sunk px-[18px] py-3 font-mono text-[12.5px] text-muted">
        <span>
          <b className="font-medium text-ink">trace</b> marian-kuziv/career
        </span>
        <span>
          {companies.length} companies · {formatDuration(now - T0)}
        </span>
        <span className="ml-auto hidden gap-4 md:flex" aria-hidden>
          {(Object.keys(domains) as Domain[]).map((d) => (
            <span key={d} className="inline-flex items-center gap-1.5">
              <i className={`size-2.5 rounded-[3px] ${bar[d]}`} />
              {domains[d].toLowerCase()}
            </span>
          ))}
        </span>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_400px]">
        <div className="border-b border-line pb-2.5 lg:border-r lg:border-b-0">
          <div className="lg:sticky lg:top-[72px]">
          {/* Year axis */}
          <div className={`${ROW} mx-3.5 h-8 border-b border-line md:mx-0`} aria-hidden>
            <div className="hidden md:block" />
            <div className="relative">
              {years.map((y, i) => (
                <span
                  key={y}
                  className={`absolute top-2 -translate-x-1/2 font-mono text-[12px] text-faint ${i % 2 ? "hidden md:inline" : ""}`}
                  style={{ left: `${pct(y * 12)}%` }}
                >
                  {y}
                </span>
              ))}
            </div>
          </div>

          {/* Root span */}
          <div className={`${ROW} items-center px-3.5 pt-1.5 md:min-h-10 md:px-0 md:pt-0`}>
            <div className="flex items-center gap-2 text-[15px] md:pr-3.5 md:pl-[34px]">
              <span aria-hidden className="size-2 flex-none rounded-[2px] bg-ink" />
              <span className="font-semibold">marian-kuziv · career</span>
              <span className="ml-auto font-mono text-[12px] text-faint">{formatDuration(now - T0)}</span>
            </div>
            <div className="relative h-[30px] md:h-10">
              {gridlines}
              <span className="absolute inset-x-0 top-1.5 flex h-[18px] items-center rounded bg-ink px-2 font-mono text-[12px] font-medium whitespace-nowrap text-bg md:top-[11px]">
                {formatMonth(T0)} → now · {formatDuration(now - T0)}
              </span>
            </div>
          </div>

          <ul aria-label="Companies, newest first">
            {newestFirst.map((c) => (
              <CompanyRows
                key={c.id}
                company={c}
                now={now}
                pct={pct}
                gridlines={gridlines}
                isSelected={c.id === current.id}
                dimmed={lens !== null && !c.achievements.some((a) => a.lenses.includes(lens))}
                litDots={c.achievements.map((a) => matches(a.lenses, lens))}
                onSelect={() => select(c.id)}
              />
            ))}
          </ul>

          <p className="px-[18px] pt-2.5 font-mono text-[12.5px] text-faint">Click any row to see what I did there ↗</p>

          <div className="mx-[18px] mt-5 mb-6 border-t border-line pt-4">
            <h3 className="mb-2.5 font-mono text-[12px] font-medium tracking-[0.06em] text-faint uppercase">Time by domain</h3>
            <div className="flex h-2.5 gap-0.5 overflow-hidden rounded-[5px]" aria-hidden>
              {domainTotals.map((t) => (
                <span key={t.domain} className={bar[t.domain]} style={{ flex: t.months }} />
              ))}
            </div>
            <ul className="mt-2.5 flex flex-wrap gap-x-[22px] gap-y-1 text-[14px] text-ink-2">
              {domainTotals.map((t) => (
                <li key={t.domain} className="inline-flex items-center">
                  <i aria-hidden className={`mr-[7px] inline-block size-2 rounded-[2px] ${bar[t.domain]}`} />
                  {domains[t.domain]}
                  <b className="ml-1.5 font-mono text-[12.5px] font-medium text-muted">{formatDuration(t.months)}</b>
                </li>
              ))}
            </ul>
          </div>

          <CtaStrip className="mx-[18px] mb-4 hidden !rounded-xl !bg-sunk !py-4 lg:flex" />
          </div>
        </div>

        <DetailPanel key={current.id} company={current} now={now} lens={lens} />
      </div>
    </div>
  );
}

function CompanyRows({
  company: c,
  now,
  pct,
  gridlines,
  isSelected,
  dimmed,
  litDots,
  onSelect,
}: {
  company: Company;
  now: number;
  pct: (m: number) => number;
  gridlines: React.ReactNode;
  isSelected: boolean;
  dimmed: boolean;
  litDots: boolean[];
  onSelect: () => void;
}) {
  const s = toMonth(c.start);
  const e = endMonth(c.end, now);
  const labelRight = pct(e) < 70;
  const period = `${formatMonth(s)} → ${c.end ? formatMonth(e) : "now"}`;

  return (
    <li className={`transition-opacity duration-200 hover:opacity-100 ${dimmed ? "opacity-70" : ""}`}>
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isSelected}
        className={`${ROW} relative w-full items-center px-3.5 pt-1.5 text-left hover:bg-ink/[0.025] md:min-h-10 md:px-0 md:pt-0 ${
          isSelected ? "bg-ink/[0.05] before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-ink" : ""
        }`}
      >
        <span className="flex items-center gap-2 text-[15px] whitespace-nowrap md:pr-3.5 md:pl-[18px]">
          <span aria-hidden className="hidden w-3 font-mono text-[11px] text-faint md:inline">
            {isSelected ? "▾" : "▸"}
          </span>
          <span aria-hidden className={`size-2 flex-none rounded-[2px] ${bar[c.domain]}`} />
          <span className="font-semibold">{c.name}</span>
          <span className="sr-only">
            , {c.title}, {period},
          </span>
          <span className="ml-auto font-mono text-[12px] text-faint">{formatDuration(e - s)}</span>
        </span>
        <span className="relative block h-[30px] md:h-10" aria-hidden>
          {gridlines}
          <span
            className={`absolute top-1.5 h-[18px] overflow-hidden rounded md:top-[11px] ${bar[c.domain]} ${c.end ? "" : "span-running"}`}
            style={{ left: `${pct(s)}%`, width: `${pct(e) - pct(s)}%` }}
          />
          <span
            className={`absolute top-[7px] px-2 font-mono text-[12px] whitespace-nowrap text-muted md:top-3 ${labelRight ? "" : "-translate-x-full"}`}
            style={{ left: `${labelRight ? pct(e) : pct(s)}%` }}
          >
            {period}
          </span>
          <span
            className={`absolute top-[26px] flex gap-[3px] md:top-[31px] ${labelRight ? "ml-[3px]" : "-translate-x-full"}`}
            style={{ left: `${labelRight ? pct(s) : pct(e)}%` }}
          >
            {litDots.map((lit, i) => (
              <i key={i} className={`size-[5px] rounded-full bg-ink ${lit ? "" : "opacity-25"}`} />
            ))}
          </span>
        </span>
      </button>

      {c.roles && (
        <ul className="hidden md:block" aria-label={`Titles at ${c.name}`}>
          {[...c.roles].reverse().map((r) => {
            const rs = toMonth(r.start);
            const re = endMonth(r.end, now);
            return (
              <li key={r.title + r.start} className={`${ROW} min-h-10 items-center`}>
                <span className="flex items-center gap-2 pr-3.5 pl-[34px] text-[14px] whitespace-nowrap text-ink-2">
                  <span aria-hidden className={`size-2 flex-none rounded-[2px] ${bar[c.domain]}`} />
                  <span className="overflow-hidden text-ellipsis">{r.title}</span>
                  <span className="ml-auto font-mono text-[12px] text-faint">{formatDuration(re - rs)}</span>
                </span>
                <span className="relative block h-10" aria-hidden>
                  {gridlines}
                  <span
                    className={`absolute top-3.5 h-3 rounded-[3px] opacity-80 ${childBar[c.domain]}`}
                    style={{ left: `${pct(rs)}%`, width: `${pct(re) - pct(rs)}%` }}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

function DetailPanel({ company: c, now, lens }: { company: Company; now: number; lens: ReturnType<typeof useLens>["lens"] }) {
  const s = toMonth(c.start);
  const e = endMonth(c.end, now);
  const lensLabel = lenses.find((l) => l.id === lens)?.label.toLowerCase();
  const [expanded, setExpanded] = useState(false);

  // Short lists are shown whole. Long ones show the strongest first, plus anything the active filter matches.
  const total = c.achievements.length;
  const collapsible = total > KEY_WORK_LIMIT + 1;
  const visible = c.achievements.filter(
    (a, i) => expanded || !collapsible || i < KEY_WORK_LIMIT || (lens !== null && a.lenses.includes(lens)),
  );
  const hidden = total - visible.length;

  return (
    <aside aria-live="polite" aria-label={`Details: ${c.name}`} className="bg-surface px-[22px] pt-5 pb-[22px]">
      <p className="font-mono text-[12.5px] text-faint">
        span · {c.name.toLowerCase()} · {c.achievements.length} events
      </p>
      <h3 className="mt-1 flex items-center gap-2.5 text-2xl font-semibold tracking-[-0.02em]">
        {c.name}
        <span className={`rounded px-[7px] py-0.5 font-mono text-[11.5px] font-medium tracking-[0.04em] uppercase ${pill[c.domain]}`}>
          {domains[c.domain]}
        </span>
      </h3>
      <p className="mt-0.5 text-[15px] text-ink-2">{c.title}</p>
      <p className="text-[14px] text-muted">{c.focus}</p>

      <dl className="mt-3.5 grid grid-cols-[86px_1fr] gap-x-2.5 gap-y-1.5 border-y border-line py-3 text-[14px]">
        <dt className="pt-0.5 font-mono text-[12px] text-faint">period</dt>
        <dd className="text-ink-2">
          {formatMonth(s)} — {c.end ? formatMonth(e) : "present"} · {formatDuration(e - s)}
        </dd>
        <dt className="pt-0.5 font-mono text-[12px] text-faint">status</dt>
        <dd className="text-ink-2">{c.end ? "completed" : "● running"}</dd>
      </dl>

      <h4 className="mt-3.5 mb-2 font-mono text-[12px] font-medium tracking-[0.06em] text-faint uppercase">
        Key work{lensLabel ? ` · matching ${lensLabel}` : ""}
      </h4>
      <ul id={`key-work-${c.id}`} className="grid gap-[7px]">
        {visible.map((a) => {
          const state = lens === null ? "" : a.lenses.includes(lens) ? "hit" : "mute";
          return (
            <li
              key={a.text}
              className={`grid grid-cols-[14px_minmax(0,1fr)] gap-1.5 text-[15px] leading-[1.45] transition-opacity ${
                state === "hit" ? "-mx-2 rounded-md bg-ink/[0.06] px-2 py-1 text-ink" : "text-ink-2"
              }`}
            >
              <span aria-hidden className={`mt-[7px] size-1.5 rounded-full ${state === "hit" ? "bg-ink ring-4 ring-ink/10" : "bg-line-2"}`} />
              <span>
                <RichText text={a.text} />
                {a.detail && (
                  <details className="group mt-1">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded px-0.5 font-mono text-[12px] text-muted hover:text-ink">
                      <span aria-hidden className="inline-block transition-transform group-open:rotate-90">
                        ▸
                      </span>
                      Technical details
                    </summary>
                    <p className="mt-1 text-[14px] leading-[1.45] text-muted">
                      <RichText text={a.detail} />
                    </p>
                  </details>
                )}
              </span>
            </li>
          );
        })}
      </ul>
      {collapsible && (hidden > 0 || expanded) && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={`key-work-${c.id}`}
          onClick={() => setExpanded((v) => !v)}
          className="mt-2.5 inline-flex items-center gap-1.5 rounded-md px-1 py-0.5 font-mono text-[12.5px] text-muted hover:text-ink"
        >
          <span aria-hidden className={`inline-block transition-transform ${expanded ? "rotate-90" : ""}`}>
            ▸
          </span>
          {expanded ? "Show less" : `Show ${hidden} more`}
        </button>
      )}

      <ul className="mt-3.5 flex flex-wrap gap-[5px]" aria-label="Stack">
        {c.stack.map((t) => (
          <li key={t} className="rounded border border-line-2 px-[7px] py-0.5 font-mono text-[12px] text-ink-2">
            {t}
          </li>
        ))}
      </ul>
    </aside>
  );
}
