import { person, site } from "@/content/profile";
import { cvInfo } from "@/lib/cv";
import { ContactCopyEmail } from "./CopyEmail";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "./icons";

const row =
  "grid w-full grid-cols-[44px_1fr_auto] items-center border-b border-line-2 px-[18px] py-[15px] text-left text-[15px] last:border-b-0 hover:bg-ink/[0.03] md:grid-cols-[52px_1fr_auto]";
const key = "flex items-center font-mono text-[12.5px] text-faint";
const hint = "font-mono text-[12.5px] text-muted";

export function Contact() {
  const host = new URL(site.url).host;
  const cv = cvInfo();
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      data-dark-zone className="dark-zone relative isolate mt-16 overflow-hidden pt-14 pb-8 md:mt-24 md:pt-20 md:pb-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_70%_at_88%_100%,rgb(122_117_240/0.12),transparent_70%),radial-gradient(28%_50%_at_70%_110%,rgb(224_138_46/0.08),transparent_70%)]"
      />
      <div className="mx-auto max-w-[1240px] px-[18px] md:px-9">
        <h2 id="contact-title" className="max-w-[860px] text-[34px] leading-[1.02] font-semibold tracking-[-0.04em] md:text-[56px]">
          Hiring a {person.title}? <span className="block text-muted">One email is enough.</span>
        </h2>
        <div className="mt-7 grid items-start gap-8 md:mt-10 md:grid-cols-2 md:gap-14">
          <p className="max-w-[480px] text-base text-muted">{person.availability}</p>
          <div>
            <div className="overflow-hidden rounded-xl border border-line-2">
              <ContactCopyEmail email={person.email} className={row} />
              <a className={row} href={person.linkedin.href}>
                <span className={key}>
                  <LinkedInIcon className="size-4" />
                  <span className="sr-only">LinkedIn</span>
                </span>
                {person.linkedin.label}
                <span className={hint} aria-hidden>
                  ↗
                </span>
              </a>
              <a className={row} href={person.github.href}>
                <span className={key}>
                  <GitHubIcon className="size-4" />
                  <span className="sr-only">GitHub</span>
                </span>
                {person.github.label}
                <span className={hint} aria-hidden>
                  ↗
                </span>
              </a>
              {cv && (
                <a className={row} href={cv.href} download>
                  <span className={key}>
                    <DownloadIcon className="size-4" />
                    <span className="sr-only">CV</span>
                  </span>
                  {cv.label}
                  <span className={hint}>{cv.size}</span>
                </a>
              )}
            </div>
          </div>
        </div>
        <footer className="mt-16 border-t border-line-2 pt-5">
          <p className="text-[15px] font-semibold">
            {person.name} <span className="font-normal text-muted">· {person.title}</span>
          </p>
          <p className="mt-1 text-[14.5px] text-muted">Building reliable software, one engineering challenge at a time.</p>
          <p className="mt-4 flex flex-col justify-between gap-1 font-mono text-[12.5px] text-faint md:flex-row">
            <span>
              © {new Date().getFullYear()} {person.name}
            </span>
            <span>{host}</span>
          </p>
        </footer>
      </div>
    </section>
  );
}
