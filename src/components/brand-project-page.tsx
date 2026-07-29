import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectCarousel } from "@/components/project-carousel";
import { ProjectMediaBlock } from "@/components/project-media";
import type {
  BrandProject,
  CaseStudyBrandProject,
  GalleryBrandProject,
  ProjectImage,
  ProjectMedia,
  ProjectTheme,
} from "@/lib/project-data";
import { cn } from "@/lib/utils";

function projectThemeStyle(theme: ProjectTheme) {
  return {
    "--project-surface": theme.surface,
    "--project-on-surface": theme.surfaceForeground,
    "--project-accent": theme.accent,
    "--project-on-accent": theme.accentForeground,
    "--project-soft": theme.soft,
    "--project-on-soft": theme.softForeground,
    "--project-separator": theme.separator,
    "--project-overlay": theme.overlay,
    "--primary": theme.accent,
    "--primary-foreground": theme.accentForeground,
    "--ring": theme.accent,
  } as CSSProperties;
}

function NextBrandProject({ project }: { project: BrandProject }) {
  return (
    <Link
      className="group flex min-h-44 items-center justify-between gap-8 border-t border-[var(--project-separator)] bg-[var(--project-soft)] px-6 py-12 text-[var(--project-on-soft)] md:px-[6vw]"
      href={`/brandwork/${project.slug}`}
    >
      <span className="font-heading text-xs tracking-[0.18em] uppercase opacity-55">
        Next project
      </span>
      <span className="font-heading flex items-center gap-5 text-right text-2xl font-semibold uppercase md:text-4xl">
        {project.title}
        <span
          aria-hidden="true"
          className="text-[var(--project-accent)] transition-transform duration-200 group-hover:translate-x-2 motion-reduce:transition-none"
        >
          →
        </span>
      </span>
    </Link>
  );
}

function mediaGridClass(media: ProjectMedia) {
  return cn("min-w-0", media.aspect === "wide" && "md:col-span-2");
}

function isProjectImage(media: ProjectMedia): media is ProjectImage {
  return media.kind === "image";
}

function GalleryProjectPage({
  project,
  nextProject,
}: {
  project: GalleryBrandProject;
  nextProject: BrandProject;
}) {
  return (
    <article
      className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--project-soft)] text-[var(--project-on-soft)]"
      style={projectThemeStyle(project.theme)}
    >
      <header className="flex min-h-[39rem] flex-col justify-end bg-[var(--project-surface)] px-6 pt-36 pb-16 text-[var(--project-on-surface)] md:min-h-[44rem] md:px-[6vw] md:pb-20">
        <p className="font-heading mb-auto text-xs tracking-[0.22em] uppercase opacity-65">
          Brand work · {project.date}
        </p>
        <p className="font-display text-[clamp(4rem,12vw,11rem)] leading-[0.8] tracking-[-0.06em]">
          {project.title}
        </p>
        <div className="mt-12 grid gap-7 border-t border-[var(--project-separator)] pt-7 md:grid-cols-[1fr_1.25fr]">
          <h1 className="font-heading text-[clamp(2.25rem,5vw,5.5rem)] leading-[0.95] font-semibold uppercase">
            {project.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed opacity-80 md:justify-self-end md:text-xl">
            {project.summary}
          </p>
        </div>
      </header>

      {project.groups.map((group, groupIndex) => {
        const carouselImages = group.media.filter(isProjectImage);

        return (
          <section
            className={cn(
              "overflow-hidden px-6 py-16 md:px-[6vw] md:py-24",
              groupIndex % 2 === 1
                ? "bg-white text-[var(--project-on-soft)]"
                : "bg-[var(--project-soft)] text-[var(--project-on-soft)]",
            )}
            key={`${project.slug}-${group.title}`}
          >
            <div className="mx-auto max-w-[92rem]">
              <div className="mb-10 grid gap-4 border-t border-[var(--project-separator)] pt-5 md:grid-cols-2 md:gap-12">
                <div>
                  {group.eyebrow ? (
                    <p className="font-heading mb-3 text-xs tracking-[0.18em] uppercase opacity-55">
                      {group.eyebrow}
                    </p>
                  ) : null}
                  <h2 className="font-heading text-4xl font-semibold uppercase md:text-6xl">
                    {group.title}
                  </h2>
                </div>
                {group.description ? (
                  <p className="max-w-xl text-lg leading-relaxed md:justify-self-end">
                    {group.description}
                  </p>
                ) : null}
              </div>

              {group.display === "photo-carousel" ? (
                <ProjectCarousel
                  ariaLabel={`${group.title} photography`}
                  items={carouselImages}
                  variant="photos"
                />
              ) : null}

              {group.display === "source-carousel" ? (
                <ProjectCarousel
                  ariaLabel={`${group.title} channels`}
                  items={carouselImages}
                  variant="sources"
                />
              ) : null}

              {!group.display || group.display === "grid" ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {group.media.map((media, index) => (
                    <ProjectMediaBlock
                      className={mediaGridClass(media)}
                      key={
                        media.kind === "image"
                          ? media.src
                          : `${media.mediaType}-${media.label}`
                      }
                      media={media}
                      preload={groupIndex === 0 && index === 0}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      {project.team?.length ? (
        <section className="bg-[var(--project-surface)] px-6 py-16 text-[var(--project-on-surface)] md:px-[6vw] md:py-24">
          <div className="mx-auto grid max-w-[92rem] gap-8 border-t border-[var(--project-separator)] pt-6 md:grid-cols-2">
            <h2 className="font-heading text-4xl font-semibold uppercase md:text-6xl">
              The team
            </h2>
            <ul className="space-y-3 leading-relaxed md:justify-self-end md:text-right">
              {project.team.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {project.links?.length ? (
        <nav
          aria-label={`${project.title} links`}
          className="border-t border-[var(--project-separator)] bg-white px-6 py-10 text-[var(--project-on-soft)] md:px-[6vw]"
        >
          <ul className="mx-auto flex max-w-[92rem] flex-wrap gap-3">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  className="font-heading inline-flex rounded-full border border-current px-5 py-3 text-sm uppercase transition-colors hover:border-[var(--project-accent)] hover:bg-[var(--project-accent)] hover:text-[var(--project-on-accent)]"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <NextBrandProject project={nextProject} />
    </article>
  );
}

function CaseStudyProjectPage({
  project,
  nextProject,
}: {
  project: CaseStudyBrandProject;
  nextProject: BrandProject;
}) {
  return (
    <article
      className="relative left-1/2 w-screen -translate-x-1/2 bg-[var(--project-soft)] text-[var(--project-on-soft)]"
      style={projectThemeStyle(project.theme)}
    >
      <header className="relative isolate flex min-h-[39rem] items-end overflow-hidden px-6 pt-36 pb-14 text-[var(--project-on-surface)] md:min-h-[44rem] md:px-[6vw] md:pb-20">
        <ProjectMediaBlock
          className="absolute inset-0 z-0 [&>div]:h-full [&>div]:aspect-auto"
          media={project.heroImage}
          preload
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-[var(--project-overlay)]"
        />
        <div className="relative z-20 w-full border-t border-[var(--project-separator)] pt-6">
          <p className="font-heading text-xs tracking-[0.22em] uppercase opacity-70">
            Brand work
          </p>
          <h1 className="font-heading mt-4 text-[clamp(3.75rem,9vw,9rem)] leading-[0.85] font-semibold tracking-[-0.05em] uppercase">
            {project.title}
          </h1>
          <p className="font-heading mt-7 max-w-4xl text-xl tracking-[0.08em] uppercase md:text-3xl">
            “{project.tagline}”
          </p>
        </div>
      </header>

      {project.quote ? (
        <section className="bg-[var(--project-soft)] px-6 py-16 text-center text-[var(--project-on-soft)] md:px-[12vw] md:py-24">
          <blockquote className="font-heading mx-auto max-w-5xl text-[clamp(2rem,4.5vw,4.5rem)] leading-tight font-medium">
            “{project.quote}”
          </blockquote>
          {project.quoteAttribution ? (
            <p className="font-heading mt-6 text-xs tracking-[0.2em] uppercase opacity-55">
              — {project.quoteAttribution}
            </p>
          ) : null}
        </section>
      ) : null}

      {project.media.length || project.secondaryImage ? (
        <section
          aria-label="Project media"
          className="bg-[var(--project-surface)] px-6 py-16 text-[var(--project-on-surface)] md:px-[6vw] md:py-24"
        >
          <div className="mx-auto grid max-w-[92rem] gap-5 border-t border-[var(--project-separator)] pt-6 md:grid-cols-2">
            {project.secondaryImage ? (
              <ProjectMediaBlock media={project.secondaryImage} />
            ) : null}
            {project.media.map((media) => (
              <ProjectMediaBlock
                key={`${media.mediaType}-${media.label}`}
                media={media}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-white px-6 py-16 text-[var(--project-on-soft)] md:px-[6vw] md:py-24">
        <div className="mx-auto max-w-[92rem]">
          <h2 className="font-heading border-b border-[var(--project-separator)] pb-5 text-sm tracking-[0.2em] uppercase">
            Project details
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-[1.7fr_0.8fr] md:gap-[8vw]">
            <div className="space-y-12">
              {project.details.map((section) => (
                <section key={section.title}>
                  <h3 className="font-heading text-3xl font-semibold uppercase md:text-4xl">
                    {section.title}
                  </h3>
                  <div className="mt-5 max-w-3xl space-y-5 text-lg leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="border-t border-[var(--project-separator)] pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <h3 className="font-heading text-sm tracking-[0.2em] uppercase">
                The team
              </h3>
              <ul className="mt-5 space-y-3 leading-relaxed">
                {project.team.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>

              {project.links?.length ? (
                <ul className="mt-10 space-y-3">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        className="font-heading inline-flex border-b border-[var(--project-accent)] pb-1 text-sm uppercase"
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      <NextBrandProject project={nextProject} />
    </article>
  );
}

function BrandProjectPage({
  project,
  nextProject,
}: {
  project: BrandProject;
  nextProject: BrandProject;
}) {
  if (project.layout === "gallery") {
    return <GalleryProjectPage nextProject={nextProject} project={project} />;
  }

  return <CaseStudyProjectPage nextProject={nextProject} project={project} />;
}

export { BrandProjectPage };
