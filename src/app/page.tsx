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
] satisfies readonly ImageGridItem[];

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="sr-only">Brand work</h1>
      <ImageGrid ariaLabel="Selected brand work" items={BRAND_WORK} />
    </main>
  );
}
