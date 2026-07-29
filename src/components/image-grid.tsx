import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface ImageGridItem {
  title: string;
  image: StaticImageData;
  alt: string;
  href: string;
}

interface ImageGridProps {
  ariaLabel: string;
  items: readonly ImageGridItem[];
}

function ImageGrid({ ariaLabel, items }: ImageGridProps) {
  return (
    <section aria-label={ariaLabel} className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <Link
          href={item.href}
          key={item.href}
          className="group focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <figure className="bg-muted relative isolate aspect-4/3 overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              loading={index < 4 ? "eager" : "lazy"}
              placeholder="blur"
              sizes="(min-width: 1280px) 612px, (min-width: 768px) calc(50vw - 1.75rem), calc(100vw - 2.5rem)"
              className="rounded-sm object-cover transition-transform duration-300 ease-out group-hover:scale-[1.015] motion-reduce:transition-none"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-[#f1f1ef] opacity-0 transition-opacity duration-200 ease-[ease] group-hover:opacity-60 group-focus-visible:opacity-60 motion-reduce:transition-none"
            />

            <figcaption className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-[7%] text-center opacity-0 transition-opacity duration-200 ease-[ease] group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
              <h2 className="font-display text-6xl leading-[1.2] font-light tracking-[0.04em] text-[#281414]">
                {item.title}
              </h2>
            </figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
}

export { ImageGrid, type ImageGridItem };
