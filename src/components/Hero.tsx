import { preload } from "react-dom";
import { coreStack, person, practices, proof } from "@/content/profile";
import { mailtoHref } from "@/lib/contact";
import { cvInfo } from "@/lib/cv";
import { HeroCopyEmail } from "./CopyEmail";
import { DownloadIcon, LinkedInIcon, MailIcon, PinIcon } from "./icons";

const WRAP = "mx-auto max-w-[1240px] px-[18px] md:px-9";

/**
 * The portrait dissolves into the page background (a CSS mask), and the subject looks
 * towards the name. The photo's own background is near-black, so there is no visible edge.
 * Above the fold: who, what, where, core stack, and three ways to make contact.
 */
export function Hero() {
  const cv = cvInfo();
  // The portrait is the largest element above the fold: start fetching the right size as early as possible.
  preload(person.photo.src, {
    as: "image",
    imageSrcSet: person.photo.srcSet,
    imageSizes: person.photo.sizes,
    fetchPriority: "high",
  });
  return (
    <section
      aria-label="Introduction"
      data-dark-zone
      className="dark-zone relative isolate -mt-[61px] overflow-hidden"
    >
      <div className="pointer-events-none absolute top-[61px] left-1/2 -z-10 mix-blend-lighten h-[330px] w-[82%] -translate-x-1/2 md:h-[403px] md:w-[460px] lg:top-[calc(50%_+_30px)] lg:right-0 lg:bottom-auto lg:left-0 lg:-translate-y-1/2 lg:h-[calc((100%_-_61px)*0.82)] lg:w-auto lg:translate-x-0">
        {/* From lg up this band has the same width and padding as the page content, so the photo ends on the
            content's right edge (under the stats panel and buttons) rather than at the edge of the window. */}
        <div className="relative mx-auto h-full w-full max-w-[1240px] lg:px-9">
          <div className="relative h-full w-full lg:ml-auto lg:w-[40%] xl:w-[44%]">
            {/* A plain <img> with srcset: the site is a static export, so next/image cannot resize it. */}
            <img
              src={person.photo.src}
              srcSet={person.photo.srcSet}
              sizes={person.photo.sizes}
              width={person.photo.width}
              height={person.photo.height}
              alt={person.photo.alt}
              fetchPriority="high"
              className="spotlight-mask absolute inset-0 size-full object-cover object-[45%_8%] md:object-[45%_20%] lg:object-[45%_2%]"
            />
          </div>
        </div>
      </div>

      <div
        className={`${WRAP} pt-[261px] pb-6 md:pt-[334px] md:pb-8 lg:pt-[84px] lg:pb-6`}
      >
        <p className="flex items-center gap-2.5 text-[14px] text-ink-2">
          <span aria-hidden className="status-led" />
          <span className="status-shimmer">{person.status}</span>
        </p>
        <h1 className="mt-4 text-[34px] leading-[0.95] font-semibold tracking-[-0.04em] whitespace-nowrap [text-shadow:0_2px_24px_rgb(0_0_0/0.45)] min-[420px]:text-[40px] md:mt-5 md:text-[46px] lg:text-[54px] xl:text-[60px]">
          {person.name}
        </h1>
        <p className="mt-2 text-[24px] leading-tight font-semibold tracking-[-0.02em] text-ink md:mt-3 md:text-[30px] lg:text-[34px]">{person.title}</p>
        <p className="mt-2 max-w-[600px] text-[17px] leading-snug tracking-[-0.01em] text-ink-2 md:mt-3 md:text-[20px] lg:max-w-[760px] lg:text-[19px]">
          {person.tagline}
        </p>
        <p className="mt-3 max-w-[600px] text-base text-muted md:text-[17px] lg:mt-2 lg:max-w-[700px] lg:text-[16px]">
          {person.intro}
        </p>

        {/* Call to action: one primary action, two alternatives. */}
        <div className="mt-6 flex max-w-[700px] lg:mt-4 flex-wrap items-center gap-2.5">
          <a
            href={mailtoHref()}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-[15px] font-semibold whitespace-nowrap text-bg hover:bg-ink-2 min-[420px]:flex-none"
          >
            <MailIcon className="size-[18px]" />
            Email me
          </a>
          <HeroCopyEmail email={person.email} />
          <a
            href={person.linkedin.href}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line-2 bg-surface/70 px-4 text-[15px] font-medium whitespace-nowrap backdrop-blur-sm hover:border-ink-2"
          >
            <LinkedInIcon className="size-[17px]" />
            LinkedIn
          </a>
        </div>
        <div className="mt-3 flex max-w-[700px] flex-wrap items-center gap-x-4 gap-y-2.5">
          {cv && (
            <a
              href={cv.href}
              download
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-line-2 bg-surface/70 px-3.5 text-[14px] font-medium whitespace-nowrap backdrop-blur-sm hover:border-ink-2"
            >
              <DownloadIcon className="size-4" />
              Download CV
              <span className="font-mono text-[12px] text-muted">
                {cv.size}
              </span>
            </a>
          )}
        </div>
        {/* Location, legal status and relocation on a line of their own, so a recruiter sees them at once. */}
        <p className="mt-4 flex max-w-[700px] items-start lg:mt-3 gap-2.5 text-[15px] leading-snug text-ink md:text-[16px]">
          <PinIcon className="mt-[3px] size-[18px] flex-none text-ink-2" />
          <span>
            {person.availabilityShort.split(" · ").map((part, i) => (
              <span key={part}>
                {i > 0 && (
                  <span aria-hidden className="mx-2 text-faint">
                    ·
                  </span>
                )}
                <span className={i === 0 ? "font-semibold" : "text-ink-2"}>{part}</span>
              </span>
            ))}
            <span className="mt-0.5 block text-[13.5px] text-muted">{person.availabilityNote}</span>
          </span>
        </p>

        <div className="mt-5 max-w-[560px] lg:mt-3.5 lg:max-w-[640px]">
          <p className="mb-2 font-mono text-[12px] tracking-[0.06em] text-faint uppercase">
            Core stack · practices
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {coreStack.map((t) => (
              <li
                key={t}
                className="rounded-md border border-line-2 bg-surface/60 px-2.5 py-[3px] font-mono text-[13px] text-ink-2"
              >
                {t}
              </li>
            ))}
            {practices.map((t) => (
              <li
                key={t}
                className="rounded-md border border-dashed border-line-2 px-2.5 py-[3px] font-mono text-[13px] text-ink-2"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <dl className="stats-sweep mt-8 grid grid-cols-2 rounded-xl border border-line-2 bg-surface/80 backdrop-blur-sm md:mt-10 lg:mt-6 md:grid-cols-3 lg:grid-cols-6">
          {proof.map((item, i) => (
            <div
              key={item.value}
              className={`flex flex-col-reverse px-3.5 py-3 md:px-5 md:py-4 border-line-2 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t" : ""} ${
                i % 3 ? "md:border-l" : "md:border-l-0"
              } ${i > 2 ? "md:border-t" : "md:border-t-0"} ${i > 0 ? "lg:border-l" : "lg:border-l-0"} lg:border-t-0`}
            >
              <dt className="mt-1 text-[13.5px] leading-snug text-muted">{item.label}</dt>
              <dd className="text-[22px] leading-tight font-semibold tracking-[-0.03em] md:text-[26px]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
