import Link from "next/link";
import { ProjectMediaBlock } from "@/components/project-media";
import type { JournalismProject } from "@/lib/project-data";
import { cn } from "@/lib/utils";

function JournalismProjectPage({
  project,
  nextProject,
}: {
  project: JournalismProject;
  nextProject: JournalismProject;
}) {
  return (
    <article className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f1f1ef] text-white">
      <header
        className={cn(
          "flex min-h-[33rem] flex-col items-center justify-center px-6 pt-32 pb-16 text-center md:min-h-[39rem] md:px-[8vw]",
          project.heroTone === "black" ? "bg-black" : "bg-[#253551]",
        )}
      >
        <p className="font-heading mb-8 text-xs tracking-[0.22em] uppercase text-white/55">
          Journalism
        </p>
        <h1 className="font-heading max-w-6xl text-[clamp(2.7rem,6vw,6rem)] leading-[0.98] font-semibold tracking-[0.01em] uppercase">
          {project.title}
        </h1>
        <a
          className="font-heading mt-12 inline-flex min-w-52 justify-center rounded-full bg-white px-8 py-4 text-sm text-black transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          href={project.listenUrl}
          rel="noreferrer"
          target="_blank"
        >
          {project.listenLabel} ↗
        </a>
      </header>

      <section className="bg-[#253551] px-6 py-16 md:px-[6vw] md:py-24">
        <div className="mx-auto grid max-w-[92rem] items-start gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-[8vw]">
          <ProjectMediaBlock media={project.image} preload />

          <div>
            <div className="font-heading border-b border-white/45 pb-9 text-lg">
              <p className="font-semibold underline decoration-white/50 decoration-2 underline-offset-3">
                As heard on {project.source}
              </p>
              <p className="mt-1">{project.date}</p>
            </div>

            <blockquote className="border-b border-white/45 py-9">
              <p className="font-heading text-[clamp(1.6rem,3vw,3rem)] leading-tight">
                “{project.quote}”
              </p>
              <footer className="font-heading mt-5 text-xs tracking-[0.18em] uppercase text-white/60">
                — {project.quoteAttribution}
              </footer>
            </blockquote>

            <details className="group border-b border-white/45 py-2">
              <summary className="font-heading flex cursor-pointer list-none items-center justify-between py-5 text-xl font-medium [&::-webkit-details-marker]:hidden">
                The Story
                <span
                  aria-hidden="true"
                  className="text-2xl transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <div className="space-y-4 pb-7 leading-relaxed text-white/78">
                {project.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>

            <details className="group border-b border-white/45 py-2">
              <summary className="font-heading flex cursor-pointer list-none items-center justify-between py-5 text-xl font-medium [&::-webkit-details-marker]:hidden">
                The Production
                <span
                  aria-hidden="true"
                  className="text-2xl transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <div className="space-y-4 pb-7 leading-relaxed text-white/78">
                {project.production.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      <Link
        className="group flex min-h-44 items-center justify-between gap-8 bg-[#f1f1ef] px-6 py-12 text-[#191919] md:px-[6vw]"
        href={`/journalism/${nextProject.slug}`}
      >
        <span className="font-heading text-xs tracking-[0.18em] uppercase opacity-55">
          Next story
        </span>
        <span className="font-heading flex items-center gap-5 text-right text-2xl font-semibold uppercase md:text-4xl">
          {nextProject.title}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-2 motion-reduce:transition-none"
          >
            →
          </span>
        </span>
      </Link>
    </article>
  );
}

export { JournalismProjectPage };
