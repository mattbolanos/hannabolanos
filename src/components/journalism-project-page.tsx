import Image from "next/image";
import { ProjectNavigation } from "@/components/project-navigation";
import type { JournalismProject } from "@/lib/project-data";

function JournalismProjectPage({
  nextProject,
  previousProject,
  project,
}: {
  nextProject?: JournalismProject;
  previousProject?: JournalismProject;
  project: JournalismProject;
}) {
  const hasVisibleHeroImage =
    project.slug === "epstein" || project.slug === "oldfriend";

  return (
    <article className="relative left-1/2 w-screen -translate-x-1/2 bg-[#253551] text-white">
      <header
        className={`relative isolate flex h-[31rem] flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center md:h-[27.7vw] md:min-h-[25rem] ${
          project.heroTone === "navy" ? "bg-[#253551]" : "bg-black"
        }`}
      >
        {hasVisibleHeroImage ? (
          <Image
            alt={project.image.alt}
            className="-z-20 object-cover"
            fill
            preload
            sizes="100vw"
            src={project.image.src}
          />
        ) : null}
        {hasVisibleHeroImage ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-black/20"
          />
        ) : null}

        <h1 className="font-heading max-w-6xl text-[clamp(2.7rem,4.6vw,4.6rem)] leading-[1.04] font-semibold tracking-[0.02em] uppercase">
          {project.title}
        </h1>
        <a
          className="mt-12 inline-flex min-h-14 min-w-56 items-center justify-center rounded-full bg-white px-8 font-heading text-black shadow-[0_1px_0_oklch(0_0_0/0.08),0_8px_24px_oklch(0_0_0/0.1)] transition-transform duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          href={project.listenUrl}
          rel="noreferrer"
          target="_blank"
        >
          {project.listenLabel}
        </a>
      </header>

      <section className="bg-[#253551] px-6 py-16 md:px-[7vw] md:py-[5.5vw]">
        <div className="mx-auto grid max-w-[80rem] items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-[8vw]">
          <blockquote className="flex min-h-[22rem] flex-col justify-center rounded-3xl bg-white p-10 font-heading text-[#253551] shadow-[inset_0_0_0_1px_oklch(0_0_0/0.1)] md:p-14">
            <p className="text-[clamp(1.75rem,2.7vw,2.7rem)] leading-[1.45]">
              “{project.quote}”
            </p>
            <footer className="mt-5 text-right text-base font-semibold uppercase tracking-[0.04em] md:text-xl">
              — {project.quoteAttribution}
            </footer>
          </blockquote>

          <div>
            <div className="border-b border-white/55 pb-8 text-center font-heading text-lg">
              <p className="font-semibold underline decoration-white/70 decoration-2 underline-offset-3">
                As heard on {project.source}
              </p>
              <p className="mt-1">{project.date}</p>
            </div>

            <details className="group border-b border-white/55">
              <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-lg font-medium [&::-webkit-details-marker]:hidden">
                <span>The Story</span>
                <span
                  aria-hidden="true"
                  className="text-3xl font-light transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <div className="space-y-4 pb-8 leading-relaxed text-white/78">
                {project.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>

            <details className="group border-b border-white/55">
              <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-lg font-medium [&::-webkit-details-marker]:hidden">
                <span>The Production</span>
                <span
                  aria-hidden="true"
                  className="text-3xl font-light transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <div className="space-y-4 pb-8 leading-relaxed text-white/78">
                {project.production.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      <ProjectNavigation
        ariaLabel="More journalism"
        nextProject={
          nextProject
            ? {
                href: `/journalism/${nextProject.slug}`,
                title: nextProject.title,
              }
            : undefined
        }
        previousProject={
          previousProject
            ? {
                href: `/journalism/${previousProject.slug}`,
                title: previousProject.title,
              }
            : undefined
        }
      />
    </article>
  );
}

export { JournalismProjectPage };
