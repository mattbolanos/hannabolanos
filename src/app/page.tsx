import { ImageGrid, type ImageGridItem } from "@/components/image-grid";
import amazonPrimeDay from "../../public/amazon-prime-day.jpeg";
import lego from "../../public/lego.jpeg";
import liquidIv from "../../public/liquid-iv.jpeg";
import mcdonalds from "../../public/mcdonalds.jpeg";
import pacifico from "../../public/pacifico.jpeg";
import ritual from "../../public/ritual.jpeg";
import ritualChocolate from "../../public/ritual-chocolate.jpeg";
import starbucks from "../../public/starbucks.png";

const BRAND_WORK = [
  {
    title: "Ritual",
    image: ritualChocolate,
    alt: "Ritual chocolate protein package on a brown studio backdrop",
    href: "/brandwork/chocolate",
  },
  {
    title: "Ritual",
    image: ritual,
    alt: "Woman holding a Ritual supplement bottle in a bright kitchen",
    href: "/brandwork/ritual",
  },
  {
    title: "Liquid I.V.",
    image: liquidIv,
    alt: "Liquid I.V. hydration multiplier packaging held outdoors",
    href: "/brandwork/liquidiv",
  },
  {
    title: "Starbucks",
    image: starbucks,
    alt: "Starbucks brand mark on a deep green background",
    href: "/brandwork/starbucks",
  },
  {
    title: "Amazon",
    image: amazonPrimeDay,
    alt: "Amazon Prime Day campaign artwork",
    href: "/brandwork/amazon",
  },
  {
    title: "Pacifico",
    image: pacifico,
    alt: "Pacifico campaign scene by the water",
    href: "/brandwork/pacifico",
  },
  {
    title: "LEGO",
    image: lego,
    alt: "LEGO editorial campaign artwork",
    href: "/brandwork/lego",
  },
  {
    title: "McDonald's",
    image: mcdonalds,
    alt: "McDonald's campaign artwork",
    href: "/brandwork/mcdonalds",
  },
] satisfies readonly ImageGridItem[];

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="sr-only">Brand work</h1>
      <ImageGrid ariaLabel="Selected brand work" items={BRAND_WORK} />
    </main>
  );
}
