import { about } from "@/content/profile";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="reveal pt-16 md:pt-24">
      <SectionHeading no="02" id="about-title" title="About" lead={about.lead} />
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-14">
        <div>
          {about.paragraphs.map((p) => (
            <p key={p} className="mb-3.5 text-[17px] text-ink-2">
              <RichText text={p} />
            </p>
          ))}
        </div>
        <ul className="grid gap-2.5">
          {about.principles.map((p) => (
            <li key={p.title} className="rounded-xl border border-line bg-surface px-[18px] py-4">
              <p className="text-[15px] font-semibold">{p.title}</p>
              <p className="text-[13.5px] text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
