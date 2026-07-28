import Image, { type StaticImageData } from "next/image";
import amazonPrimeDay from "../../public/amazon-prime-day.jpeg";
import lego from "../../public/lego.jpeg";
import liquidIv from "../../public/liquid-iv.jpeg";
import mcdonalds from "../../public/mcdonalds.jpeg";
import pacifico from "../../public/pacifico.jpeg";
import ritual from "../../public/ritual.jpeg";
import ritualChocolate from "../../public/ritual-chocolate.jpeg";
import starbucks from "../../public/starbucks.png";

const PORTFOLIO_ITEMS = [
  {
    title: "Ritual",
    image: ritualChocolate,
    alt: "Ritual chocolate protein package on a brown studio backdrop",
  },
  {
    title: "Ritual",
    image: ritual,
    alt: "Woman holding a Ritual supplement bottle in a bright kitchen",
  },
  {
    title: "Liquid I.V.",
    image: liquidIv,
    alt: "Liquid I.V. hydration multiplier packaging held outdoors",
  },
  {
    title: "Starbucks",
    image: starbucks,
    alt: "Starbucks brand mark on a deep green background",
  },
  {
    title: "Amazon",
    image: amazonPrimeDay,
    alt: "Amazon Prime Day campaign artwork",
  },
  {
    title: "Pacifico",
    image: pacifico,
    alt: "Pacifico campaign scene by the water",
  },
  {
    title: "LEGO",
    image: lego,
    alt: "LEGO editorial campaign artwork",
  },
  {
    title: "McDonald's",
    image: mcdonalds,
    alt: "McDonald's campaign artwork",
  },
] satisfies readonly PortfolioItem[];

interface PortfolioItem {
  title: string;
  image: StaticImageData;
  alt: string;
}

export function PortfolioGrid() {
  return (
    <section
      aria-label="Selected brand work"
      className="grid gap-4 md:grid-cols-2"
    >
      {PORTFOLIO_ITEMS.map((item) => (
        <figure
          key={item.image.src}
          className="group bg-muted relative isolate aspect-4/3 overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
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
