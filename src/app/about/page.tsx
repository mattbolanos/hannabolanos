import type { Metadata } from "next";
import Image from "next/image";

import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/marquee";
import palmTrees from "../../../public/about/palm-trees.jpeg";
import hanna from "../../../public/hanna.jpeg";

const PORTRAIT_CLIP_PATH =
  "M0.5,0 C0.768,0,0.894,0.056,0.919,0.081 C0.944,0.106,1,0.242,1,0.505 C1,0.768,0.947,0.891,0.919,0.919 C0.891,0.947,0.768,1,0.5,1 C0.202,1,0.11,0.948,0.081,0.919 C0.052,0.89,0,0.768,0,0.5 C0,0.232,0.053,0.109,0.081,0.081 C0.109,0.053,0.232,0,0.5,0";

export const metadata: Metadata = {
  title: "About — HB",
  description:
    "About Hanna Bolaños, a creative operations and production leader with a background in branded content and journalism.",
};

function MarqueeText({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display block text-[clamp(2.899rem,4.824vw,4.4325rem)] leading-[1.4] font-light tracking-tighter whitespace-nowrap">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <h1 id="about-hanna-heading" className="sr-only">
        About Hanna Bolaños
      </h1>

      <section
        aria-labelledby="about-hanna-heading"
        className="relative isolate min-h-[75.84375rem] overflow-hidden text-white md:h-[59.668vw] md:min-h-0"
      >
        <Image
          src={palmTrees}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#2a2829]/78"
        />

        <div className="pt-[8.978rem] md:pt-[13.225vw]">
          <Marquee
            aria-hidden="true"
            autoFill
            gap="clamp(1.15rem, 2.1vw, 1.9rem)"
            speed={26}
          >
            <MarqueeContent>
              <MarqueeItem>
                <MarqueeText>About Hanna</MarqueeText>
              </MarqueeItem>
              <MarqueeItem>
                <MarqueeText>*</MarqueeText>
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>

          <div className="mx-auto mt-[2.69rem] w-full px-[6vw] md:mt-[3.94vw] md:grid md:w-max md:-translate-x-[0.3vw] md:grid-cols-[34.78vw_29.73vw] md:gap-[13.1vw] md:px-0">
            <div className="flex flex-col gap-4 text-[1.0886rem] leading-[1.5] font-medium md:gap-[1.22vw] md:text-[1.393vw]">
              <p>
                Hanna has 8 years of industry experience in creative ops and
                production. She is currently helping bring traceable,
                science-backed products to market at Ritual, the #1 platform for
                women&apos;s health.
              </p>

              <p>
                Her prior experience includes writing and producing branded
                content at Spotify Advertising for brands like Liquid I.V.,
                Amazon, Starbucks, Toyota, LEGO and more.
              </p>

              <p>
                A graduate of Northwestern University&apos;s{" "}
                <em>Medill School of Journalism</em>, Hanna has razor-sharp
                editorial skills and a penchant for building creative
                relationships. She credits all her success to the three years
                she spent as an audio producer for NPR News in Washington, D.C.
              </p>
            </div>

            <div className="relative mt-[12vw] aspect-square w-full overflow-hidden md:mt-0">
              <svg aria-hidden="true" className="absolute size-0">
                <defs>
                  <clipPath
                    id="about-portrait-clip"
                    clipPathUnits="objectBoundingBox"
                  >
                    <path d={PORTRAIT_CLIP_PATH} />
                  </clipPath>
                </defs>
              </svg>

              <Image
                src={hanna}
                alt="Hanna Bolaños smiling in front of a brick wall"
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 30vw, calc(100vw - 3rem)"
                className="object-cover [clip-path:url(#about-portrait-clip)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Get in touch"
        className="bg-[#f1f1ef] pt-[3.09rem] md:pt-0"
      >
        <Marquee
          aria-hidden="true"
          autoFill
          gap="clamp(1.8rem, 3.3vw, 3rem)"
          speed={26}
        >
          <MarqueeContent>
            <MarqueeItem>
              <MarqueeText>GET IN TOUCH</MarqueeText>
            </MarqueeItem>
          </MarqueeContent>
        </Marquee>
      </section>
    </div>
  );
}
