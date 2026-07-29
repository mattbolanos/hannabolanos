import type { Metadata } from "next";
import { ImageGrid, type ImageGridItem } from "@/components/image-grid";
import anOldFriend from "../../../public/journalism/an-old-friend.jpg";
import cubanSandwichWar from "../../../public/journalism/cuban-sandwich-war.jpg";
import datingAppBurnout from "../../../public/journalism/dating-app-burnout.jpg";
import kentuckyFriedFlan from "../../../public/journalism/kentucky-fried-flan.jpg";
import meditationsOnLoneliness from "../../../public/journalism/meditations-on-loneliness.jpg";
import survivingJeffreyEpstein from "../../../public/journalism/surviving-jeffrey-epstein.jpg";

const JOURNALISM = [
  {
    title: "Meditations on Loneliness",
    image: meditationsOnLoneliness,
    alt: "Meditations on Loneliness",
    href: "/journalism/loneliness",
  },
  {
    title: "Dating App Burnout",
    image: datingAppBurnout,
    alt: "Dating App Burnout",
    href: "/journalism/burnout",
  },
  {
    title: "Surviving Jeffrey Epstein",
    image: survivingJeffreyEpstein,
    alt: "Surviving Jeffrey Epstein",
    href: "/journalism/epstein",
  },
  {
    title: "An Old Friend",
    image: anOldFriend,
    alt: "An Old Friend",
    href: "/journalism/oldfriend",
  },
  {
    title: "Cuban Sandwich War",
    image: cubanSandwichWar,
    alt: "Cuban Sandwich War",
    href: "/journalism/cuban",
  },
  {
    title: "Kentucky Fried Flan",
    image: kentuckyFriedFlan,
    alt: "Kentucky Fried Flan",
    href: "/journalism/flan",
  },
] satisfies readonly ImageGridItem[];

export const metadata: Metadata = {
  title: "Journalism — HB",
  description: "Selected journalism by Hanna Bolaños.",
};

export default function JournalismPage() {
  return (
    <main className="w-full">
      <h1 className="sr-only">Journalism</h1>
      <ImageGrid ariaLabel="Selected journalism" items={JOURNALISM} />
    </main>
  );
}
