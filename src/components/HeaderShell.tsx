"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The sticky header follows the section under it: dark over the hero and the footer, light over the page.
 * Dark sections are marked with data-dark-zone; data-dark-fraction limits how much of a section counts as dark
 * (the black-to-light transition band is dark only in its first half). Server markup starts dark, matching the hero.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = (ref.current?.offsetHeight ?? 60) / 2;
      const zones = Array.from(document.querySelectorAll<HTMLElement>("[data-dark-zone]"));
      const over = zones.some((el) => {
        const r = el.getBoundingClientRect();
        const fraction = Number(el.dataset.darkFraction ?? 1);
        return r.top <= y && r.top + r.height * fraction > y;
      });
      setDark(over);
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
  }, []);

  return (
    <header
      ref={ref}
      className={`${dark ? "dark-zone" : ""} sticky top-0 z-20 border-b border-line bg-bg/90 text-ink backdrop-blur-md transition-colors duration-200`}
    >
      {children}
    </header>
  );
}
