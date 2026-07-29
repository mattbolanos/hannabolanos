import Image from "next/image";
import type { ProjectMedia } from "@/lib/project-data";
import { cn } from "@/lib/utils";

const ASPECT_CLASSES = {
  landscape: "aspect-4/3",
  portrait: "aspect-4/5",
  poster: "aspect-3/4",
  square: "aspect-square",
  wide: "aspect-video",
} as const;

interface ProjectMediaProps {
  media: ProjectMedia;
  className?: string;
  preload?: boolean;
}

function ProjectMediaBlock({
  media,
  className,
  preload = false,
}: ProjectMediaProps) {
  const aspectClass = ASPECT_CLASSES[media.aspect ?? "landscape"];

  if (media.kind === "placeholder") {
    return (
      <div
        aria-label={`${media.mediaType} placeholder: ${media.label}`}
        className={cn(
          "relative flex overflow-hidden border border-current/25 bg-current/3",
          aspectClass,
          className,
        )}
        role="img"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 [background-image:linear-gradient(135deg,currentColor_1px,transparent_1px)] [background-size:18px_18px]"
        />
        <div className="relative m-auto flex max-w-[80%] flex-col items-center gap-3 text-center">
          <span className="font-heading rounded-full border border-current/35 px-3 py-1 text-[0.6875rem] tracking-[0.18em] uppercase">
            {media.mediaType}
          </span>
          <p className="font-heading text-xl leading-tight font-medium md:text-2xl">
            {media.label}
          </p>
          {media.detail ? (
            <p className="text-sm opacity-65">{media.detail}</p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <figure className={className}>
      <div className={cn("relative overflow-hidden bg-black/5", aspectClass)}>
        <Image
          alt={media.alt}
          className="object-cover"
          fill
          preload={preload}
          sizes="(min-width: 1280px) 760px, (min-width: 768px) 50vw, 100vw"
          src={media.src}
        />
      </div>
      {media.caption ? (
        <figcaption className="font-heading mt-3 text-sm tracking-wide uppercase opacity-65">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export { ProjectMediaBlock };
