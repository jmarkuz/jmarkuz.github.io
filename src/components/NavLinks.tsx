"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "./icons";

export interface NavItem {
  href: string;
  label: string;
  /** Sections that count as this item for the active-section highlight. */
  ids: string[];
}

/**
 * Desktop: the link of the section on screen is highlighted (aria-current="location").
 * Small screens: a menu button opens a panel with the same links plus LinkedIn and GitHub.
 */
export function NavLinks({ items, linkedin, github }: { items: NavItem[]; linkedin: string; github: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // The active section is the last one whose top has passed a line a little below the sticky header.
      const line = 120;
      let current: string | null = null;
      for (const item of items) {
        const passed = item.ids.some((id) => {
          const el = document.getElementById(id);
          return el !== null && el.getBoundingClientRect().top <= line;
        });
        if (passed) current = item.href;
      }
      // The footer is short, so on tall screens its top never reaches the line: count it as soon as it fills
      // the lower half of the window, or when the page is scrolled to the very bottom.
      const contact = document.getElementById("contact");
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (contact && (contact.getBoundingClientRect().top <= window.innerHeight * 0.5 || atBottom)) current = "#contact";
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  // Escape closes the menu; a click or tap outside it closes it too.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panel.current && !panel.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <>
      <nav aria-label="Sections" className="ml-auto hidden gap-6 text-[15px] text-muted lg:flex">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={active === item.href ? "location" : undefined}
            className={`border-b py-1 transition-colors hover:text-ink ${
              active === item.href ? "border-ink text-ink" : "border-transparent"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div ref={panel} className="order-last lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 flex-none items-center justify-center rounded-lg border border-line-2 bg-surface text-ink-2 hover:border-ink-2 hover:text-ink"
        >
          <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-[18px]">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        {open && (
          <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-bg px-[18px] pt-2 pb-4 md:px-9">
            <nav aria-label="Sections (menu)" className="mx-auto grid max-w-[1240px]">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "location" : undefined}
                  className={`border-b border-line py-3 text-[16px] ${active === item.href ? "font-semibold text-ink" : "text-ink-2"}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-3 md:hidden">
                <a href={linkedin} className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-line-2 text-[15px] font-medium">
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
                <a href={github} className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-line-2 text-[15px] font-medium">
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
