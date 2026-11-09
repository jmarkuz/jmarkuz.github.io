import { CaseFiles } from "@/components/CaseFiles";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { CtaStrip } from "@/components/CtaStrip";
import { ExperienceText } from "@/components/ExperienceText";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { LensBar } from "@/components/LensBar";
import { LensProvider } from "@/components/LensProvider";
import { Principles } from "@/components/Principles";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { Trace } from "@/components/Trace";
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
        {/* The black hero fades into the light page. The header treats the first part of this band as dark. */}
        <div aria-hidden data-dark-zone data-dark-fraction="0.5" className="h-[96px] md:h-[128px] bg-[linear-gradient(to_bottom,rgb(11_12_14)_0%,rgb(21_22_24)_12%,rgb(48_49_50)_25%,rgb(86_86_86)_38%,rgb(129_129_128)_50%,rgb(172_172_170)_62%,rgb(210_209_206)_75%,rgb(237_236_232)_88%,rgb(247_246_242)_100%)]" />
        <div className="mx-auto max-w-[1240px] px-[18px] md:px-9">
          <section id="experience" aria-labelledby="experience-title">
            <SectionHeading no="01" id="experience-title" title="Experience" lead="Career as a distributed trace, oldest role first." />
            <LensBar />
            <Trace />
            <CtaStrip className="mt-6 lg:hidden" />
            <ExperienceText />
          </section>
          <Expertise />
          <CaseStudies />
          <CaseFiles />
          <Skills />
          <Principles />
        </div>
      </main>
      <Contact />
    </LensProvider>
  );
}
