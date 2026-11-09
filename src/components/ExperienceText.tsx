import { companies, domains } from "@/content/profile";
import { endMonth, formatDuration, formatMonth, toMonth } from "@/lib/time";
import { RichText } from "./RichText";

/**
 * The full experience as plain text, collapsed by default so it does not repeat the trace on screen.
 * The content is still in the HTML: search engines, ATS parsers and Ctrl+F (which opens <details>) find it.
 * Rendered on the server: no JavaScript is needed to read it.
 */
export function ExperienceText() {
  const now = Date.now();
  const nowMonth = new Date(now).getFullYear() * 12 + new Date(now).getMonth();
  const list = [...companies].reverse();

  return (
    <section aria-labelledby="experience-text-title" className="mt-6">
      <h3 id="experience-text-title" className="mb-2.5 font-mono text-[12px] font-medium tracking-[0.06em] text-faint uppercase">
        All roles as plain text
      </h3>
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        {list.map((c) => {
          const s = toMonth(c.start);
          const e = endMonth(c.end, nowMonth);
          return (
            <details key={c.id} className="group border-b border-line last:border-b-0">
              <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-3 gap-y-0.5 px-4 py-3.5 hover:bg-ink/[0.025] md:px-5">
                <span aria-hidden className="font-mono text-[11px] text-faint transition-transform group-open:rotate-90">
                  ▸
                </span>
                <span className="font-semibold">{c.name}</span>
                <span className="text-[15px] text-ink-2">
                  {c.title} · {domains[c.domain]}
                </span>
                <span className="ml-auto font-mono text-[12.5px] text-faint">
                  {formatMonth(s)} – {c.end ? formatMonth(e) : "present"} · {formatDuration(e - s)}
                </span>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pl-10">
                <p className="mb-2 text-[14px] text-muted">{c.focus}</p>
                <ul className="grid gap-1.5 text-[15px] text-ink-2">
                  {c.achievements.map((a) => (
                    <li key={a.text} className="relative pl-4 before:absolute before:top-[9px] before:left-0 before:size-1 before:rounded-full before:bg-line-2">
                      <RichText text={a.text} />
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[12.5px] text-muted">{c.stack.join(" · ")}</p>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
