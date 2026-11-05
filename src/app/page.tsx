import { About } from "@/components/About";
import { CaseFiles } from "@/components/CaseFiles";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { LensBar } from "@/components/LensBar";
import { LensProvider } from "@/components/LensProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { Trace } from "@/components/Trace";
import { person } from "@/content/profile";
import { monthOf } from "@/lib/time";

export default function Home() {
  // Static export: this runs at build time. Durations are refreshed on the client after hydration.
  const buildMonth = monthOf(new Date());

  return (
    <LensProvider buildMonth={buildMonth}>
      <div id="top" />
      <SiteHeader />
      <main id="main">
        <Hero />
        <div className={`mx-auto max-w-[1240px] px-[18px] md:px-9 ${person.heroStyle === "spotlight" ? "pt-4 md:pt-6" : ""}`}>
          <section id="experience" aria-labelledby="experience-title">
            <h2 id="experience-title" className="sr-only">
              Experience
            </h2>
            <LensBar />
            <Trace />
          </section>
          <About />
          <CaseFiles />
          <Skills />
        </div>
      </main>
      <Contact />
    </LensProvider>
  );
}
