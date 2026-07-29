"use client";

import { ProjectMediaBlock } from "@/components/project-media";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ProjectImage } from "@/lib/project-data";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  ariaLabel: string;
  items: readonly ProjectImage[];
  variant: "photos" | "sources";
}

function ProjectCarousel({ ariaLabel, items, variant }: ProjectCarouselProps) {
  const isPhotoRail = variant === "photos";

  return (
    <Carousel
      aria-label={ariaLabel}
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2",
        !isPhotoRail && "lg:w-[calc(100vw-6rem)]",
      )}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent
        className={cn("-ml-4 md:-ml-7", isPhotoRail && "px-6 md:px-[6vw]")}
      >
        {items.map((item, index) => (
          <CarouselItem
            aria-label={`${index + 1} of ${items.length}: ${item.category ?? item.alt}`}
            className={cn(
              "pl-4 md:pl-7",
              isPhotoRail
                ? "basis-[86%] md:basis-[46%] lg:basis-[31%]"
                : "basis-1/2 lg:basis-1/3",
            )}
            key={item.src}
          >
            <div
              className={cn("w-full", !isPhotoRail && "mx-auto max-w-[30rem]")}
            >
              <ProjectMediaBlock
                media={{
                  ...item,
                  aspect: isPhotoRail ? "square" : "poster",
                  caption: undefined,
                }}
              />

              {isPhotoRail ? null : (
                <div className="pt-5">
                  {item.category ? (
                    <p className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.85] tracking-[-0.035em]">
                      {item.category}
                    </p>
                  ) : null}
                  {item.caption ? (
                    <p className="font-heading mt-4 text-sm font-semibold tracking-[0.08em] uppercase">
                      {item.caption}
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="mt-3 max-w-md text-sm leading-relaxed opacity-70 md:text-base">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className={cn(
          "left-3 z-20 border-0 shadow-lg md:left-6 [&_svg]:size-5",
          !isPhotoRail && "lg:left-12",
        )}
        size="icon-xl"
        variant="default"
      />
      <CarouselNext
        className={cn(
          "right-3 z-20 border-0 shadow-lg md:right-6 [&_svg]:size-5",
          !isPhotoRail && "lg:right-12",
        )}
        size="icon-xl"
        variant="default"
      />
    </Carousel>
  );
}

export { ProjectCarousel };
