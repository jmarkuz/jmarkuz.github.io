import { person } from "@/content/profile";
import { HeaderCopyEmail } from "./CopyEmail";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function DomainMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-2.5 rounded-[3px] bg-[linear-gradient(90deg,var(--color-bank)_0_33%,var(--color-tel)_33%_66%,var(--color-gam)_66%)] ${className}`}
    />
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-15 max-w-[1240px] items-center gap-3 px-[18px] md:gap-7 md:px-9">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <DomainMark />
          {person.name}
        </a>
        <nav aria-label="Sections" className="ml-auto hidden gap-6 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <HeaderCopyEmail email={person.email} />
        <a
          href={person.linkedin.href}
          className="inline-flex h-9 items-center rounded-lg bg-ink px-3.5 text-[13.5px] font-medium text-white hover:bg-ink-2"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
