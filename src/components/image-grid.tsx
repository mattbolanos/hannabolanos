import Image, { type StaticImageData } from "next/image";

interface ImageGridItem {
  title: string;
  image: StaticImageData;
  alt: string;
}

interface ImageGridProps {
  ariaLabel: string;
  items: readonly ImageGridItem[];
}

function ImageGrid({ ariaLabel, items }: ImageGridProps) {
  return (
    <section aria-label={ariaLabel} className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <figure
          key={item.image.src}
          className="group bg-muted relative isolate aspect-4/3 overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            loading={index < 4 ? "eager" : "lazy"}
            placeholder="blur"
            sizes="(min-width: 1280px) 612px, (min-width: 768px) calc(50vw - 1.75rem), calc(100vw - 2.5rem)"
            className="rounded-sm object-cover"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-[#f1f1ef] opacity-0 transition-opacity duration-200 ease-[ease] group-hover:opacity-[0.78] motion-reduce:transition-none"
          />

          <figcaption className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-[7%] text-center opacity-0 transition-opacity duration-200 ease-[ease] group-hover:opacity-100 motion-reduce:transition-none">
            <h2 className="font-heading text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.2] font-light tracking-[0.04em] text-[#281414]">
              {item.title}
            </h2>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}

export { ImageGrid, type ImageGridItem };
