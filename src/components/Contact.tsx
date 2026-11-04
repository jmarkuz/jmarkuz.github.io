import { person, site } from "@/content/profile";
import { ContactCopyEmail } from "./CopyEmail";

const row = "grid w-full grid-cols-[80px_1fr_auto] items-center border-b border-night-line px-[18px] py-[15px] text-left text-[15px] last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[96px_1fr_auto]";
const key = "font-mono text-[11.5px] text-night-faint";
const hint = "font-mono text-xs text-night-muted";

export function Contact() {
  const host = new URL(site.url).host;
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-night mt-16 pt-14 pb-8 text-[#eeeff1] md:mt-24 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1240px] px-[18px] md:px-9">
        <h2 id="contact-title" className="max-w-[860px] text-[34px] leading-[1.02] font-semibold tracking-[-0.04em] md:text-[56px]">
          Hiring a senior Java engineer? <span className="text-night-muted">One email is enough.</span>
        </h2>
        <div className="mt-7 grid items-end gap-7 md:mt-10 md:grid-cols-2 md:gap-14">
          <p className="max-w-[460px] text-base text-night-muted">{person.availability}</p>
          <div className="overflow-hidden rounded-xl border border-night-line">
            <ContactCopyEmail email={person.email} className={row} />
            <a className={row} href={person.linkedin.href}>
              <span className={key}>linkedin</span>
              {person.linkedin.label}
              <span className={hint} aria-hidden>↗</span>
            </a>
            <a className={row} href={person.github.href}>
              <span className={key}>github</span>
              {person.github.label}
              <span className={hint} aria-hidden>↗</span>
            </a>
            {person.cv && (
              <a className={row} href={person.cv.href} download>
                <span className={key}>cv</span>
                {person.cv.label}
                <span className={hint} aria-hidden>↓</span>
              </a>
            )}
          </div>
        </div>
        <footer className="mt-16 flex flex-col justify-between gap-1 border-t border-night-line pt-[18px] font-mono text-[11.5px] text-night-faint md:flex-row">
          <span>© {new Date().getFullYear()} {person.name}</span>
          <span>{host}</span>
        </footer>
      </div>
    </section>
  );
}
