import { person } from "@/content/profile";
import { mailtoHref } from "@/lib/contact";
import { HeaderShell } from "./HeaderShell";
import { NavLinks, type NavItem } from "./NavLinks";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const nav: NavItem[] = [
  { href: "#experience", label: "Experience", ids: ["experience"] },
  { href: "#expertise", label: "Expertise", ids: ["expertise"] },
  { href: "#case-studies", label: "Case studies", ids: ["case-studies"] },
  { href: "#pet-projects", label: "Projects", ids: ["pet-projects"] },
  { href: "#skills", label: "Skills", ids: ["skills", "principles"] },
  { href: "#contact", label: "Contact", ids: ["contact"] },
];

export function DomainMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-2.5 rounded-[3px] bg-[linear-gradient(90deg,var(--color-bank)_0_33%,var(--color-tel)_33%_66%,var(--color-gam)_66%)] ${className}`}
    />
  );
}

const iconButton =
  "inline-flex size-9 flex-none items-center justify-center rounded-lg border border-line-2 bg-surface text-ink-2 hover:border-ink-2 hover:text-ink";

/** Contact is always one click away: the primary action stays in the sticky header. */
export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="mx-auto flex h-15 max-w-[1240px] items-center gap-2 px-[18px] min-[360px]:gap-3 md:px-9">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight whitespace-nowrap">
          <DomainMark />
          {person.name}
        </a>
        <NavLinks items={nav} linkedin={person.linkedin.href} github={person.github.href} />
        <a
          href={mailtoHref()}
          className="ml-auto inline-flex h-9 flex-none items-center gap-2 rounded-lg bg-ink px-3.5 text-[14px] font-semibold whitespace-nowrap text-bg hover:bg-ink-2 lg:ml-0"
        >
          <MailIcon className="size-4" />
          <span>
            Email<span className="hidden sm:inline"> me</span>
          </span>
        </a>
        <a href={person.linkedin.href} aria-label="LinkedIn profile" className={`${iconButton} max-md:hidden`}>
          <LinkedInIcon className="size-[17px]" />
        </a>
        <a href={person.github.href} aria-label="GitHub profile" className={`${iconButton} max-md:hidden`}>
          <GitHubIcon className="size-[18px]" />
        </a>
      </div>
    </HeaderShell>
  );
}
