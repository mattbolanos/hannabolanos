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
  const carouselItems = items.length < 6 ? [...items, ...items] : items;

  return (
    <Carousel
      aria-label={ariaLabel}
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2",
        !isPhotoRail && "lg:w-[calc(100vw-6rem)]",
      )}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent className="-ml-4 md:-ml-7">
        {carouselItems.map((item, index) => (
          <CarouselItem
            aria-label={`${(index % items.length) + 1} of ${items.length}: ${item.category ?? item.alt}`}
            className={cn(
              "pl-4 md:pl-7",
              isPhotoRail
                ? "basis-[84%] md:basis-[46%] lg:basis-[31%]"
                : "basis-[84%] md:basis-1/2 lg:basis-1/3",
            )}
            key={`${item.src}-${index}`}
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
                  <p className="font-display text-[clamp(2.75rem,5vw,5rem)] leading-[0.85] tracking-[-0.035em]">
                    {item.category}
                  </p>
                ) : null}
                {item.caption ? (
                  <p className="mt-4 font-heading text-sm font-semibold tracking-[0.08em] uppercase">
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
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        aria-label={`Previous ${ariaLabel} item`}
        className="top-[40%] bottom-auto left-5 my-0 -translate-y-1/2 md:left-[3vw]"
      />
      <CarouselNext
        aria-label={`Next ${ariaLabel} item`}
        className="top-[40%] right-5 bottom-auto my-0 -translate-y-1/2 md:right-[3vw]"
      />
    </Carousel>
  );
}

export { ProjectCarousel };
