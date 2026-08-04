import Image from "next/image";
import { ProjectAudioPlayer } from "@/components/project-audio-player";
import { ProjectCarousel } from "@/components/project-carousel";
import { ProjectNavigation } from "@/components/project-navigation";
import { ProjectSeparator } from "@/components/project-separator";
import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/marquee";
import type {
  BrandProject,
  CaseStudyBrandProject,
  GalleryBrandProject,
  ProjectImage,
  ProjectMedia,
  ProjectPlaceholder,
} from "@/lib/project-data";
import { cn } from "@/lib/utils";

function isProjectImage(media: ProjectMedia): media is ProjectImage {
  return media.kind === "image";
}

function isPlayableMedia(media: ProjectMedia): media is ProjectPlaceholder {
  return media.kind === "placeholder" && Boolean(media.src);
}

function ProjectDetails({ project }: { project: CaseStudyBrandProject }) {
  return (
    <section className="bg-white px-6 py-16 text-[#253551] md:px-[7vw] md:py-[7vw]">
      <div className="mx-auto grid max-w-[78rem] gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-[10vw]">
        <h2 className="font-display max-w-[8ch] text-[clamp(4rem,7vw,7rem)] leading-[0.88] tracking-[-0.055em] uppercase">
          Project Details
        </h2>

        <div>
          {project.details.map((section) => (
            <details
              className="group border-t border-[#253551]/55"
              key={section.title}
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 py-4 font-heading text-lg font-medium [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="text-3xl font-light transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
                <span>{section.title}</span>
              </summary>
              <div className="space-y-4 pb-7 pl-10 leading-relaxed text-[#253551]/78">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}

          <details className="group border-y border-[#253551]/55">
            <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 py-4 font-heading text-lg font-medium [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden="true"
                className="text-3xl font-light transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
              <span>The Team</span>
            </summary>
            <ul className="space-y-3 pb-7 pl-10 leading-relaxed text-[#253551]/78">
              {project.team.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}

const CASE_STUDY_HERO_HEIGHTS: Record<string, string> = {
  liquidiv: "md:h-[39.45vw] md:max-h-[43rem]",
  starbucks: "md:h-[34.75vw] md:max-h-[39rem]",
  amazon: "md:h-[26.5vw] md:min-h-96 md:max-h-[30rem]",
  pacifico: "md:h-[34.75vw] md:max-h-[39rem]",
  lego: "md:h-[40.25vw] md:max-h-[44rem]",
  mcdonalds: "md:h-[40.25vw] md:max-h-[44rem]",
};

function CaseStudyHero({ project }: { project: CaseStudyBrandProject }) {
  return (
    <header
      className={cn(
        "relative isolate flex h-[31rem] items-center justify-center overflow-hidden px-6 pt-20 text-center",
        CASE_STUDY_HERO_HEIGHTS[project.slug],
      )}
    >
      <Image
        alt={project.heroImage.alt}
        className={cn(
          "-z-20 object-cover",
          project.slug === "amazon" && "object-[center_56%]",
          project.slug === "mcdonalds" && "object-center",
        )}
        fill
        preload
        sizes="100vw"
        src={project.heroImage.src}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 bg-black/10",
          project.slug === "mcdonalds" && "bg-transparent",
        )}
      />
      <h1
        className={cn(
          "font-display text-[clamp(4rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.045em] text-white",
          project.slug === "mcdonalds" && "bg-white px-5 py-2 text-[#253551]",
        )}
      >
        {project.title}
      </h1>
    </header>
  );
}

function VideoProjectMedia({ project }: { project: CaseStudyBrandProject }) {
  const videos = project.media.filter(
    (media) =>
      isPlayableMedia(media) &&
      media.mediaType === "video" &&
      Boolean(media.src),
  );

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {videos.map((video) => {
        const [audience, genre] = video.label.split(" · ");

        return (
          <figure key={video.src}>
            {/* biome-ignore lint/a11y/useMediaCaption: The source archive does not include caption tracks. */}
            <video
              aria-label={`${video.label} campaign film`}
              className="aspect-video w-full bg-black object-cover shadow-[inset_0_0_0_1px_oklch(1_0_0/0.1)]"
              controls
              playsInline
              preload="metadata"
              src={video.src}
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-white">
              <span className="font-semibold">Audience:</span> {audience}
              <br />
              <span className="font-semibold">Music Genre:</span> {genre}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

function AudioProjectMedia({ project }: { project: CaseStudyBrandProject }) {
  const audio = project.media.filter(
    (media) =>
      isPlayableMedia(media) &&
      media.mediaType === "audio" &&
      Boolean(media.src),
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {audio.map((item) => (
        <ProjectAudioPlayer
          key={item.src}
          label={item.label}
          src={item.src ?? ""}
        />
      ))}
    </div>
  );
}

function StarbucksMedia({ project }: { project: CaseStudyBrandProject }) {
  return (
    <section className="bg-[#253551] px-6 py-16 text-[#253551] md:px-[11vw] md:py-[6vw]">
      <div className="mx-auto grid max-w-[72rem] gap-8 md:grid-cols-2 md:gap-[8vw]">
        <div className="flex flex-col justify-center">
          <blockquote className="rounded-3xl bg-[#c2f665] p-8 font-heading text-[clamp(2rem,3.1vw,3.1rem)] leading-[1.25] shadow-[inset_0_0_0_1px_oklch(0_0_0/0.1)] md:p-10">
            “{project.quote}”
            <footer className="mt-5 text-right text-lg font-semibold uppercase">
              — {project.quoteAttribution}
            </footer>
          </blockquote>

          {project.links?.length ? (
            <div className="mt-8 grid grid-cols-2 gap-4">
              {project.links.map((link, index) => (
                <a
                  className="inline-flex min-h-16 items-center justify-center rounded-full bg-white px-5 text-center font-heading transition-transform duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                  href={link.href}
                  key={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {index === 0 ? "Listen Here" : "Read Here"}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {project.secondaryImage ? (
          <div className="relative aspect-square overflow-hidden shadow-[inset_0_0_0_1px_oklch(1_0_0/0.1)]">
            <Image
              alt={project.secondaryImage.alt}
              className="object-cover"
              fill
              sizes="(min-width: 768px) 40vw, calc(100vw - 3rem)"
              src={project.secondaryImage.src}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CaseStudyProjectPage({
  nextProject,
  previousProject,
  project,
}: {
  nextProject?: BrandProject;
  previousProject?: BrandProject;
  project: CaseStudyBrandProject;
}) {
  const hasVideo = project.media.some(
    (media) => media.kind === "placeholder" && media.mediaType === "video",
  );

  return (
    <article className="relative left-1/2 w-screen -translate-x-1/2 bg-[#253551]">
      <CaseStudyHero project={project} />

      {project.slug === "starbucks" ? (
        <StarbucksMedia project={project} />
      ) : (
        <section className="bg-[#253551] px-6 py-14 text-white md:px-[3vw] md:py-[4.5vw]">
          <h2 className="mx-auto mb-12 max-w-[70rem] text-center font-heading text-[clamp(2rem,3.2vw,3rem)] leading-[1.35] font-bold uppercase">
            <span className="box-decoration-clone bg-white px-2 py-0.5 text-[#253551]">
              “{project.tagline}”
            </span>
          </h2>
          <div className="mx-auto max-w-[86rem]">
            {hasVideo ? (
              <VideoProjectMedia project={project} />
            ) : (
              <AudioProjectMedia project={project} />
            )}
          </div>
        </section>
      )}

      <ProjectSeparator color={project.theme.separator} />
      <ProjectDetails project={project} />
      <ProjectSeparator color={project.theme.separator} />
      <ProjectNavigation
        ariaLabel="More brand work"
        nextProject={
          nextProject
            ? {
                href: `/brandwork/${nextProject.slug}`,
                title: nextProject.title,
              }
            : undefined
        }
        previousProject={
          previousProject
            ? {
                href: `/brandwork/${previousProject.slug}`,
                title: previousProject.title,
              }
            : undefined
        }
      />
    </article>
  );
}

function GalleryHero({ project }: { project: GalleryBrandProject }) {
  const photoHero = project.groups
    .flatMap((group) => group.media)
    .find(
      (media): media is ProjectImage =>
        media.kind === "image" && media.src.includes("campaign-header"),
    );
  const videoHero = project.groups
    .flatMap((group) => group.media)
    .find(
      (media): media is ProjectPlaceholder =>
        media.kind === "placeholder" && media.mediaType === "video",
    );

  return (
    <header className="relative isolate flex h-[35rem] items-center overflow-hidden rounded-b-[8%] bg-[#253551] text-white md:h-[46.25vw] md:max-h-[42.5rem]">
      {project.slug === "chocolate" && videoHero?.src ? (
        <video
          aria-label="Chocolate Protein launch film"
          autoPlay
          className="absolute inset-0 -z-20 size-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
          src={videoHero.src}
        />
      ) : null}

      {project.slug === "ritual" && photoHero ? (
        <Image
          alt={photoHero.alt}
          className="-z-20 object-cover"
          fill
          preload
          sizes="100vw"
          src={photoHero.src}
        />
      ) : null}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#253551]/18"
      />
      <h1 className="sr-only">{project.title}</h1>
      <Marquee
        aria-hidden="true"
        autoFill
        className="w-full"
        gap="clamp(2rem,5vw,5rem)"
        speed={30}
      >
        <MarqueeContent>
          <MarqueeItem>
            <span className="font-display block text-[clamp(5.5rem,10vw,10rem)] leading-none whitespace-nowrap">
              Ritual
            </span>
          </MarqueeItem>
          <MarqueeItem>
            <span className="font-display block text-[clamp(4rem,7vw,7rem)] leading-none">
              *
            </span>
          </MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </header>
  );
}

function GalleryProjectPage({
  nextProject,
  previousProject,
  project,
}: {
  nextProject?: BrandProject;
  previousProject?: BrandProject;
  project: GalleryBrandProject;
}) {
  const photoGroup = project.groups.find(
    (group) => group.display === "photo-carousel",
  );
  const sourceGroup = project.groups.find(
    (group) => group.display === "source-carousel",
  );
  const productGroup = project.groups.find(
    (group) => group.title === "Product modules",
  );
  const photos = photoGroup?.media.filter(isProjectImage) ?? [];
  const sourceItems = sourceGroup?.media.filter(isProjectImage) ?? [];

  return (
    <article className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f1f1ef] text-[#171717]">
      <GalleryHero project={project} />

      {photos.length ? (
        <>
          <section className="overflow-hidden bg-[#f1f1ef] py-20 md:py-[10vw]">
            <ProjectCarousel
              ariaLabel={`${project.title} campaign photography`}
              items={photos}
              variant="photos"
            />
          </section>
          <ProjectSeparator color={project.theme.separator} />
        </>
      ) : null}

      <section className="bg-[#f1f1ef] px-6 py-16 md:px-[11vw] md:py-[7vw]">
        {project.slug === "chocolate" ? (
          <div
            className="mx-auto grid max-w-[88rem] gap-16 md:grid-cols-2 md:gap-[8vw]"
            style={{ color: project.theme.separator }}
          >
            <div className="text-center">
              <h2 className="font-display text-[clamp(2.25rem,3.8vw,3.75rem)] leading-[0.9] tracking-[-0.045em]">
                <span
                  className="box-decoration-clone px-3 py-1.5 text-[#f1f1ef]"
                  style={{ backgroundColor: project.theme.separator }}
                >
                  {project.headline}
                </span>
              </h2>
              <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base leading-relaxed">
                <p className="italic">{project.date}</p>
                <p>{project.groups[0]?.eyebrow}</p>
                <p>{project.summary}</p>
              </div>
            </div>

            {project.team?.length ? (
              <div>
                <h2 className="text-center font-display text-[clamp(2.25rem,3.8vw,3.75rem)] leading-[0.9] tracking-[-0.045em]">
                  <span
                    className="box-decoration-clone px-3 py-1.5 text-[#f1f1ef]"
                    style={{ backgroundColor: project.theme.separator }}
                  >
                    Meet The Team
                  </span>
                </h2>
                <ul className="mx-auto mt-10 max-w-lg space-y-1.5 text-sm leading-relaxed md:text-base">
                  {project.team.map((member) => {
                    const [role, ...names] = member.split(": ");
                    return (
                      <li key={member}>
                        <strong>{role}:</strong> {names.join(": ")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="mx-auto grid max-w-[74rem] gap-10 md:grid-cols-2 md:gap-[8vw]">
            <div>
              <h2 className="font-display text-[clamp(4rem,7vw,7rem)] leading-[0.9] tracking-[-0.055em]">
                {project.headline}
              </h2>
              <div className="mt-8 max-w-md space-y-4 text-base leading-relaxed">
                <p className="italic">April 2024</p>
                <p>{project.summary}</p>
              </div>
            </div>

            {project.team?.length ? (
              <div>
                <h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.055em]">
                  The Team
                </h2>
                <ul className="mt-8 space-y-1.5 text-sm leading-relaxed md:text-base">
                  {project.team.map((member) => {
                    const [role, ...names] = member.split(": ");
                    return (
                      <li key={member}>
                        <strong>{role}:</strong> {names.join(": ")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </section>

      <ProjectSeparator color={project.theme.separator} />

      {sourceItems.length ? (
        <>
          <section className="min-h-[52rem] overflow-hidden bg-[#f1f1ef] py-20 md:py-[10vw]">
            <ProjectCarousel
              ariaLabel="Related campaign work"
              items={sourceItems}
              variant="sources"
            />
          </section>
          <ProjectSeparator color={project.theme.separator} />
        </>
      ) : null}

      {productGroup ? (
        <>
          <section className="bg-[#f1f1ef] px-6 pb-24 md:px-[7vw] md:pb-[8vw]">
            <div className="mx-auto grid max-w-[78rem] gap-12 md:grid-cols-2 md:gap-[5vw]">
              {[...productGroup.media].reverse().map((media) => {
                if (!isPlayableMedia(media) || media.mediaType !== "gif") {
                  return null;
                }

                const link = project.links?.find(
                  (projectLink) => projectLink.label === media.label,
                );

                return (
                  <figure key={media.src}>
                    <h3 className="font-heading mb-4 text-lg font-semibold underline underline-offset-4">
                      {media.label}
                    </h3>
                    <Image
                      alt={`${media.label} animated product module`}
                      className="h-auto w-full object-contain"
                      height={720}
                      src={media.src ?? ""}
                      unoptimized
                      width={1200}
                    />
                    {link ? (
                      <figcaption className="mt-5">
                        Visit the{" "}
                        <a
                          className="font-semibold underline underline-offset-3"
                          href={link.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          product page
                        </a>
                      </figcaption>
                    ) : null}
                  </figure>
                );
              })}
            </div>
          </section>
          <ProjectSeparator color={project.theme.separator} />
        </>
      ) : null}

      <ProjectNavigation
        ariaLabel="More brand work"
        nextProject={
          nextProject
            ? {
                href: `/brandwork/${nextProject.slug}`,
                title: nextProject.title,
              }
            : undefined
        }
        previousProject={
          previousProject
            ? {
                href: `/brandwork/${previousProject.slug}`,
                title: previousProject.title,
              }
            : undefined
        }
      />
    </article>
  );
}

function BrandProjectPage({
  nextProject,
  previousProject,
  project,
}: {
  nextProject?: BrandProject;
  previousProject?: BrandProject;
  project: BrandProject;
}) {
  if (project.layout === "gallery") {
    return (
      <GalleryProjectPage
        nextProject={nextProject}
        previousProject={previousProject}
        project={project}
      />
    );
  }

  return (
    <CaseStudyProjectPage
      nextProject={nextProject}
      previousProject={previousProject}
      project={project}
    />
  );
}

export { BrandProjectPage };
