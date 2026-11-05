import Image from "next/image";
import { companies, domains, person, proof, type Domain } from "@/content/profile";
import { endMonth, formatDuration, formatMonth, monthOf, toMonth } from "@/lib/time";

const WRAP = "mx-auto max-w-[1240px] px-[18px] md:px-9";
const domainBar: Record<Domain, string> = { bank: "bg-bank", tel: "bg-tel", gam: "bg-gam" };

export function Hero() {
  return person.heroStyle === "overlap" ? <OverlapHero /> : <SpotlightHero />;
}

/** Dark band: the portrait dissolves into black and the subject looks towards the name. */
function SpotlightHero() {
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden bg-[#0b0c0e] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[440px] md:inset-y-0 md:right-0 md:left-auto md:h-auto md:w-[56%] lg:w-[52%]">
        <Image
          src={person.photo.src}
          alt={person.photo.alt}
          fill
          priority
          sizes="(min-width: 768px) 56vw, 100vw"
          className="spotlight-mask object-cover object-[45%_18%]"
        />
      </div>

      <div className={`${WRAP} pt-[300px] pb-10 md:pt-24 md:pb-14 lg:pt-28`}>
        <Status tone="dark" />
        <h1 className="mt-4 text-[60px] leading-[0.9] font-semibold tracking-[-0.045em] [text-shadow:0_2px_24px_rgb(0_0_0/0.45)] md:mt-6 md:text-[96px] lg:text-[112px]">
          Marian
          <br />
          Kuziv
        </h1>
        <p className="mt-5 max-w-[560px] text-lg tracking-[-0.01em] text-[#d5d8dc] md:mt-7 md:text-[22px]">
          <strong className="font-semibold text-white">{person.title}.</strong> {person.tagline}
        </p>
        <p className="mt-4 max-w-[520px] text-base text-night-muted md:text-[17px]">{person.intro}</p>
        <CareerStrip tone="dark" className="mt-7 max-w-[520px]" />
        <Proof tone="dark" className="mt-10 md:mt-14 md:grid-cols-4" />
      </div>
    </section>
  );
}

/** Light page: the name crosses the edge of the photo card, ink on paper and white on the photo. */
function OverlapHero() {
  // The card is 460px wide and pinned to the right edge of the container, so the white copy
  // of the name inside it can be offset by (card width − container width) to line up exactly.
  return (
    <section aria-label="Introduction" className={`${WRAP} pt-9 md:pt-14`}>
      <div className="relative [container-type:inline-size]">
        <Status tone="light" className="mb-5 lg:mb-0" />

        <div className="relative lg:min-h-[560px]">
          <h1 className="relative z-0 text-[56px] leading-[0.92] font-semibold tracking-[-0.045em] md:text-[88px] lg:absolute lg:top-14 lg:left-0 lg:text-[112px] lg:whitespace-nowrap xl:text-[164px]">
            Marian Kuziv
          </h1>

          <div className="relative z-10 mt-6 h-[420px] overflow-hidden rounded-[24px] bg-black shadow-[0_30px_60px_-30px_rgb(21_23_26/0.6)] md:h-[520px] lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:h-[560px] lg:w-[460px] lg:rounded-[28px]">
            {/* On wide screens the photo sits lower, so the name crosses the black space above the head, not the face.
                The photo's own background is black, so the gap is invisible. */}
            <div className="absolute inset-x-0 top-0 bottom-0 lg:top-[96px] xl:top-[150px]">
              <Image
                src={person.photo.src}
                alt={person.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover object-[45%_10%]"
              />
            </div>
            {/* White copy of the name, aligned with the ink one, visible only inside the card. */}
            <span
              aria-hidden
              className="absolute top-14 hidden text-[112px] leading-[0.92] font-semibold tracking-[-0.045em] whitespace-nowrap text-white lg:left-[calc(460px-100cqw)] lg:block xl:text-[164px]"
            >
              Marian Kuziv
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 pt-16 pb-5">
              <CareerStrip tone="dark" />
            </div>
          </div>

          <div className="mt-6 lg:absolute lg:top-[230px] lg:left-0 lg:mt-0 lg:w-[calc(100%-510px)] xl:top-[270px]">
            <p className="text-lg tracking-[-0.01em] text-ink-2 md:text-[22px]">
              <strong className="font-semibold text-ink">{person.title}.</strong> {person.tagline}
            </p>
            <p className="mt-4 max-w-[620px] text-base text-ink-2 md:text-lg">{person.intro}</p>
          </div>
        </div>
      </div>
      <Proof tone="light" className="mt-8 md:mt-10 md:grid-cols-4" />
    </section>
  );
}

function Status({ tone, className = "" }: { tone: "dark" | "light"; className?: string }) {
  return (
    <p className={`flex items-center gap-2 text-[13px] ${tone === "dark" ? "text-[#d5d8dc]" : "text-ink-2"} ${className}`}>
      <span aria-hidden className="size-2 flex-none rounded-full bg-[#2fa36b] shadow-[0_0_0_4px_rgb(47_163_107/0.2)]" />
      {person.status}
    </p>
  );
}

function Proof({ tone, className = "" }: { tone: "dark" | "light"; className?: string }) {
  const dark = tone === "dark";
  return (
    <dl
      className={`grid grid-cols-2 rounded-xl border ${dark ? "border-night-line bg-white/[0.03] backdrop-blur-sm" : "border-line bg-surface"} ${className}`}
    >
      {proof.map((item, i) => (
        <div
          key={item.value}
          className={`flex flex-col-reverse px-3.5 py-3 md:px-5 md:py-4 ${dark ? "border-night-line" : "border-line"} ${
            i % 2 ? "border-l" : ""
          } ${i > 1 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
        >
          <dt className={`mt-1 text-[12.5px] leading-snug ${dark ? "text-night-muted" : "text-muted"}`}>{item.label}</dt>
          <dd className="text-[22px] leading-tight font-semibold tracking-[-0.03em] md:text-[26px]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A miniature of the trace: time per domain as one running span. Computed at build time. */
function CareerStrip({ tone, className = "" }: { tone: "dark" | "light"; className?: string }) {
  const now = monthOf(new Date());
  const start = toMonth(companies[0]!.start);
  const totals = (Object.keys(domains) as Domain[]).map((d) => ({
    d,
    months: companies.filter((c) => c.domain === d).reduce((n, c) => n + endMonth(c.end, now) - toMonth(c.start), 0),
  }));
  return (
    <div className={className}>
      <div className="flex h-1.5 gap-0.5 overflow-hidden rounded-full" aria-hidden>
        {totals.map((t) => (
          <span key={t.d} className={domainBar[t.d]} style={{ flex: t.months }} />
        ))}
      </div>
      <p className={`mt-2.5 font-mono text-[11.5px] ${tone === "dark" ? "text-night-muted" : "text-muted"}`}>
        career · {formatMonth(start)} → now · {formatDuration(now - start)} ·{" "}
        {totals.map((t) => `${domains[t.d].toLowerCase()} ${formatDuration(t.months)}`).join(" · ")}
      </p>
    </div>
  );
}
