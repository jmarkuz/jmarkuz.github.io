import { person } from "@/content/profile";
import { mailtoHref } from "@/lib/contact";
import { LinkedInIcon, MailIcon } from "./icons";

/** A recruiter who has seen enough can act without scrolling to the footer. Used inside the trace (wide screens) and right after it (narrow screens). */
export function CtaStrip({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Get in touch"
      className={`flex flex-col gap-4 rounded-2xl border border-line-2 bg-surface px-5 py-5 md:flex-row md:items-center md:justify-between md:px-7 ${className}`}
    >
      <div>
        <p className="text-lg font-semibold tracking-[-0.01em] md:text-xl">Looks like a fit for your {person.title} role?</p>
        <p className="mt-1 text-[15px] text-muted">
          Write to me about the role, or connect on LinkedIn.
        </p>
      </div>
      <div className="grid w-full gap-2.5 md:w-[172px] md:flex-none">
        <a
          href={mailtoHref()}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-ink px-4 text-[15px] font-semibold whitespace-nowrap text-bg hover:bg-ink-2"
        >
          <MailIcon className="size-[18px]" />
          Email me
        </a>
        <a
          href={person.linkedin.href}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-line-2 px-4 text-[15px] font-medium whitespace-nowrap hover:border-ink-2"
        >
          <LinkedInIcon className="size-[17px]" />
          LinkedIn
        </a>
      </div>
    </aside>
  );
}
