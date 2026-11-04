import { person, proof } from "@/content/profile";

export function Hero() {
  return (
    <div className="grid items-end gap-6 pt-9 md:grid-cols-[minmax(0,1fr)_440px] md:gap-14 md:pt-16">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 text-[13px] text-ink-2">
          <span aria-hidden className="size-2 rounded-full bg-[#2fa36b] shadow-[0_0_0_4px_rgb(47_163_107/0.15)]" />
          {person.status}
        </p>
        <h1 className="text-[46px] leading-none font-semibold tracking-[-0.04em] md:text-[68px]">{person.name}</h1>
        <p className="mt-3 text-lg tracking-[-0.01em] text-ink-2 md:text-[22px]">
          <strong className="font-semibold text-ink">{person.title}.</strong> {person.tagline}
        </p>
        <p className="mt-4 max-w-[660px] text-base text-ink-2 md:text-lg">{person.intro}</p>
      </div>
      <dl className="grid grid-cols-2 rounded-xl border border-line bg-surface">
        {proof.map((item, i) => (
          <div
            key={item.value}
            className={`flex flex-col-reverse px-3.5 py-3 md:px-5 md:py-4 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line" : ""}`}
          >
            <dt className="mt-1 text-[12.5px] leading-snug text-muted">{item.label}</dt>
            <dd className="text-[22px] leading-tight font-semibold tracking-[-0.03em] md:text-[26px]">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
