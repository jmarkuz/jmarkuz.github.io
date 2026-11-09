import { principles } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function Principles() {
  return (
    <section id="principles" aria-labelledby="principles-title" className="reveal pt-16 md:pt-24">
      <SectionHeading
        no="06"
        id="principles-title"
        title="How I approach engineering"
        lead="Good engineering is understanding the problem, making informed decisions, and building systems that stay reliable as they evolve."
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {principles.map((p) => (
          <li key={p.title} className="rounded-xl border border-line bg-surface px-4 py-4">
            <h3 className="text-[16px] font-semibold tracking-[-0.01em]">{p.title}</h3>
            <p className="mt-1.5 text-[14.5px] text-muted">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
