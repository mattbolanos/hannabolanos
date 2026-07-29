type ImageAspect = "landscape" | "portrait" | "poster" | "square" | "wide";

interface ProjectImage {
  kind: "image";
  src: string;
  alt: string;
  category?: string;
  caption?: string;
  description?: string;
  aspect?: ImageAspect;
}

interface ProjectPlaceholder {
  kind: "placeholder";
  mediaType: "audio" | "gif" | "video";
  label: string;
  detail?: string;
  aspect?: ImageAspect;
}

type ProjectMedia = ProjectImage | ProjectPlaceholder;

interface ProjectLink {
  href: string;
  label: string;
}

interface ProjectTheme {
  surface: string;
  surfaceForeground: string;
  accent: string;
  accentForeground: string;
  soft: string;
  softForeground: string;
  separator: string;
  overlay: string;
}

interface GalleryGroup {
  title: string;
  eyebrow?: string;
  description?: string;
  media: readonly ProjectMedia[];
  display?: "grid" | "photo-carousel" | "source-carousel";
}

interface GalleryBrandProject {
  layout: "gallery";
  slug: string;
  title: string;
  headline: string;
  date: string;
  summary: string;
  groups: readonly GalleryGroup[];
  team?: readonly string[];
  theme: ProjectTheme;
  links?: readonly ProjectLink[];
  nextSlug: string;
}

interface ProjectDetailsSection {
  title: string;
  paragraphs: readonly string[];
}

interface CaseStudyBrandProject {
  layout: "case-study";
  slug: string;
  title: string;
  tagline: string;
  heroImage: ProjectImage;
  secondaryImage?: ProjectImage;
  media: readonly ProjectPlaceholder[];
  details: readonly ProjectDetailsSection[];
  team: readonly string[];
  theme: ProjectTheme;
  quote?: string;
  quoteAttribution?: string;
  links?: readonly ProjectLink[];
  nextSlug: string;
}

type BrandProject = GalleryBrandProject | CaseStudyBrandProject;

interface JournalismProject {
  slug: string;
  title: string;
  source: string;
  date: string;
  quote: string;
  quoteAttribution: string;
  listenUrl: string;
  listenLabel: string;
  heroTone: "black" | "navy";
  image: ProjectImage;
  story: readonly string[];
  production: readonly string[];
  nextSlug: string;
}

const chocolatePhotography: readonly ProjectImage[] = [
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/stretching.webp",
    alt: "Athlete stretching beside Ritual Chocolate Protein",
    aspect: "wide",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/equipment.webp",
    alt: "Ritual Chocolate Protein with workout equipment",
    aspect: "landscape",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/drinking-cup.webp",
    alt: "Athlete drinking chocolate protein from a cup",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/shaker-stretch.webp",
    alt: "Athlete stretching with a Ritual shaker bottle",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/walking.webp",
    alt: "Athlete walking with a Ritual shaker bottle",
    aspect: "landscape",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/powder-closeup.webp",
    alt: "Close-up of Ritual chocolate protein powder",
    aspect: "square",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/shoe-focus.webp",
    alt: "Ritual Chocolate Protein beside training shoes",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/standing-shaker.webp",
    alt: "Athlete holding a chocolate protein shaker",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/product-sky.webp",
    alt: "Ritual Chocolate Protein held against the sky",
    aspect: "landscape",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/styled-drink.webp",
    alt: "Styled glass of Ritual chocolate protein",
    aspect: "square",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/sitting-shaker.webp",
    alt: "Athlete seated with a Ritual shaker bottle",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/walking-side.webp",
    alt: "Side view of an athlete carrying a Ritual shaker",
    aspect: "landscape",
  },
  {
    kind: "image",
    src: "/projects/brandwork/chocolate/shoe-focus-wide.webp",
    alt: "Ritual product and training gear campaign still",
    aspect: "wide",
  },
];

const ritualPhotography: readonly ProjectImage[] = [
  ...[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 13].map((imageNumber) => ({
    kind: "image" as const,
    src: `/projects/brandwork/ritual/in-the-wild-${String(imageNumber).padStart(2, "0")}.webp`,
    alt: `Ritual In The Wild campaign photograph ${imageNumber}`,
    aspect: "square" as const,
  })),
  {
    kind: "image",
    src: "/projects/brandwork/ritual/campaign-header.webp",
    alt: "Ritual products photographed in a sunlit Los Angeles home",
    aspect: "square",
  },
  {
    kind: "image",
    src: "/projects/brandwork/ritual/in-the-wild-14.webp",
    alt: "Ritual In The Wild campaign photograph 14",
    aspect: "square",
  },
];

const BRAND_PROJECTS = [
  {
    layout: "gallery",
    slug: "chocolate",
    title: "Ritual",
    headline: "Chocolate Protein",
    date: "November 2025",
    summary:
      "Introducing Ritual’s plant-based, traceably sourced protein—now in rich, creamy chocolate. Whether you’re dominating the court or just trying to make it until lunchtime, the campaign powers every serve without asking anyone to choose between essential quality and great taste.",
    groups: [
      {
        title: "Launch film",
        eyebrow: "Your new favorite pick-me-up 🍫🤎",
        media: [
          {
            kind: "placeholder",
            mediaType: "video",
            label: "Chocolate Protein launch film",
            detail: "Video placeholder",
            aspect: "wide",
          },
        ],
      },
      {
        title: "Campaign photography",
        eyebrow: "Chocolate Protein · November 2025",
        display: "photo-carousel",
        media: chocolatePhotography,
      },
      {
        title: "Launch ecosystem",
        eyebrow: "Email, organic social, Amazon & growth",
        display: "source-carousel",
        media: [
          {
            kind: "image",
            src: "/projects/brandwork/chocolate/email-purchaser.webp",
            alt: "Chocolate Protein purchaser email creative",
            category: "Email",
            caption: "Winback Email Module",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/chocolate/social-launch.webp",
            alt: "Chocolate Protein Instagram launch post",
            category: "Organic Social",
            caption: "Instagram Launch Post",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/chocolate/email-subscriber.webp",
            alt: "Chocolate Protein subscriber email creative",
            category: "Email",
            caption: "Customer Announcement Blast",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/chocolate/benefit-claims.webp",
            alt: "Chocolate Protein benefit claims creative",
            category: "Amazon",
            caption: "Product Landing Page",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/chocolate/meta-story.webp",
            alt: "Chocolate Protein paid social story",
            category: "Growth",
            caption: "Meta Advertising",
            aspect: "portrait",
          },
        ],
      },
    ],
    team: [
      "Photography: Ashley Batz",
      "Art Direction: Meria Ogawa",
      "Concept: Michael Arrietta",
      "VP Creative: Fiel Valdez",
      "Senior Art Direction: Sam Danan",
      "Production: Hanna Bolaños, Oui Productions",
      "Video: Erynn Lamont",
      "Set & Prop Design: Shelby Kay Reed",
      "Hair & Makeup: Amber Rose",
      "Wardrobe: Sarah Rose",
      "Video Editing: Peter Quinn & Vidhan Chawla",
    ],
    theme: {
      surface: "#253551",
      surfaceForeground: "#ffffff",
      accent: "#d6a227",
      accentForeground: "#211a17",
      soft: "#f4f0ea",
      softForeground: "#211a17",
      separator: "#d6a227",
      overlay: "#253551b8",
    },
    nextSlug: "ritual",
  },
  {
    layout: "gallery",
    slug: "ritual",
    title: "Ritual",
    headline: "In The Wild",
    date: "April 2024–May 2025",
    summary:
      "A fresh, sunny, lo-fi shoot of Ritual products captured in an east-side Los Angeles home. The work has lived across email, organic social, growth advertising, collateral, Ritual.com, PR and company events.",
    groups: [
      {
        title: "In The Wild",
        eyebrow: "Campaign photography · April 2024",
        display: "photo-carousel",
        media: ritualPhotography,
      },
      {
        title: "Campaigns",
        eyebrow: "Growth, social & email",
        display: "source-carousel",
        description:
          "A cross-channel collection spanning gut health, prenatal leadership, the New Year sale and Mother’s Day.",
        media: [
          {
            kind: "image",
            src: "/projects/brandwork/ritual/campaign-gut-health.webp",
            alt: "Ritual gut health growth campaign",
            category: "Growth",
            caption: "February 2025",
            description:
              "A gut-health campaign introducing Synbiotic+ as the daily ritual that supports digestion, immunity and regularity.",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/ritual/campaign-prenatal.webp",
            alt: "Ritual bestselling prenatal social campaign",
            category: "Social",
            caption: "April 2024",
            description:
              "Organic social celebrating Essential Prenatal as the bestselling prenatal multivitamin on Ritual.com.",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/ritual/campaign-new-year.webp",
            alt: "Ritual New Year sale email campaign",
            category: "Email",
            caption: "December 2024",
            description:
              "A lifecycle campaign positioning the New Year sale as a simple way to start—and keep—a better daily ritual.",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/ritual/campaign-mothers-day.webp",
            alt: "Ritual Mother’s Day growth campaign",
            category: "Growth",
            caption: "May 2025",
            description:
              "A Mother’s Day campaign built around the rituals that care for moms at every stage.",
            aspect: "portrait",
          },
        ],
      },
      {
        title: "Product modules",
        eyebrow: "Animated ecommerce creative",
        media: [
          {
            kind: "placeholder",
            mediaType: "gif",
            label: "Essential for Men 18+",
            detail: "Animated product module placeholder",
            aspect: "square",
          },
          {
            kind: "placeholder",
            mediaType: "gif",
            label: "Pregnancy Bundle",
            detail: "Animated product module placeholder",
            aspect: "square",
          },
        ],
      },
    ],
    team: [
      "Photo & Video: Alex Kim Kenealy",
      "Art Direction: Kimmie Torgerson, Tricia Desjardins, Kasha Killingsworth",
      "VP Creative: Fiel Valdez",
      "Production: Hanna Bolaños, Tiffany Tomaszewski, Bianca Stenzl",
      "Video Editing: Peter Quinn, Vidhan Chawla",
      "Prop & Set Design: Ruth Kim",
      "Wardrobe: Sandy Phan",
      "Hair & Makeup: Justine Fang",
    ],
    theme: {
      surface: "#253551",
      surfaceForeground: "#ffffff",
      accent: "#d5ff34",
      accentForeground: "#253551",
      soft: "#f1f1ef",
      softForeground: "#171717",
      separator: "#b9d232",
      overlay: "#253551b8",
    },
    links: [
      { href: "https://ritual.com/shop/men", label: "Essential for Men 18+" },
      { href: "https://ritual.com/shop/pregnancy", label: "Pregnancy Bundle" },
    ],
    nextSlug: "liquidiv",
  },
  {
    layout: "case-study",
    slug: "liquidiv",
    title: "Liquid I.V.",
    tagline: "Life hits different when you’re hydrated",
    heroImage: {
      kind: "image",
      src: "/projects/brandwork/liquid-iv/hero.webp",
      alt: "Liquid I.V. Hydration Multiplier campaign artwork",
      aspect: "landscape",
    },
    media: [
      {
        kind: "placeholder",
        mediaType: "video",
        label: "Gen X · Hip-Hop",
        detail: "0:30 animated film placeholder",
        aspect: "landscape",
      },
      {
        kind: "placeholder",
        mediaType: "video",
        label: "Millennials · Pop",
        detail: "0:30 animated film placeholder",
        aspect: "landscape",
      },
      {
        kind: "placeholder",
        mediaType: "video",
        label: "Gen Z · Indie Rock",
        detail: "0:30 animated film placeholder",
        aspect: "landscape",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "Liquid I.V. wanted to grow national awareness for its Hydration Multiplier across Gen X, Millennial and Gen Z audiences by leaning into generational music tastes and animated visual storytelling.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I produced three 0:30 animated videos that illustrate how life looks and feels before drinking Liquid I.V.—and how it transforms after.",
          "I pitched the concept, wrote three distinct scripts, sourced the animation studio, built the budget, managed the timeline, directed voice talent and edited the audio tracks.",
          "Each film pairs a generational audience with a custom track inspired by its most-streamed Spotify genre. Muted palettes and lo-fi sound open every spot; color and music bloom as soon as the character hydrates.",
          "The client increased its Spotify media spend following the campaign and reposted the films across its social channels.",
        ],
      },
    ],
    team: [
      "Lead Producer: Hanna Bolaños",
      "Animation & Sound Design: Panic! Studio",
      "Audio Engineering & Music Composition: Molly Bolten",
      "Voice Talent: Thomas Copeland",
    ],
    theme: {
      surface: "#087b98",
      surfaceForeground: "#ffffff",
      accent: "#d6ff2a",
      accentForeground: "#123846",
      soft: "#eaf8fb",
      softForeground: "#123846",
      separator: "#00a7c8",
      overlay: "#087b98b8",
    },
    nextSlug: "starbucks",
  },
  {
    layout: "case-study",
    slug: "starbucks",
    title: "Starbucks",
    tagline: "Outside Voice · Hispanic Heritage Month",
    heroImage: {
      kind: "image",
      src: "/projects/brandwork/starbucks/hero.webp",
      alt: "Starbucks Outside Voice collaboration with Myke Towers",
      aspect: "landscape",
    },
    secondaryImage: {
      kind: "image",
      src: "/projects/brandwork/starbucks/playlist-cover.webp",
      alt: "Myke Towers playlist cover",
      aspect: "square",
    },
    media: [],
    quote: "If you can make it in Puerto Rico, you can make it anywhere.",
    quoteAttribution: "Myke Towers",
    links: [
      {
        href: "https://open.spotify.com/playlist/141b4a4muXi6TqIEE9pZ6o?dlsi=921d05a987b84586&nd=1&si=0f9e9645baa543d6",
        label: "Listen on Spotify",
      },
      {
        href: "https://ads.spotify.com/en-US/news-and-insights/outside-voice-hispanic-heritage-month/",
        label: "Read the feature",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "Starbucks honored Hispanic Heritage Month on Spotify by sponsoring Outside Voice, a recurring Spotify Advertising audio series that spotlights the stories and careers of BIPOC creatives.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I worked with artist relations to book rising Puerto Rican reggaeton star Myke Towers, pitched the treatment to Starbucks, wrote the interview questions and spoke with Towers about his family, hometown, influences and career.",
          "I edited the hour-long interview into six short clips placed throughout a playlist Towers created, letting listeners hear his story alongside the tracks that shaped him.",
        ],
      },
    ],
    team: [
      "Lead Producer: Hanna Bolaños",
      "Audio Engineering & Sound Design: Nic Cummings, Made in Katana",
    ],
    theme: {
      surface: "#006241",
      surfaceForeground: "#ffffff",
      accent: "#d4e9e2",
      accentForeground: "#006241",
      soft: "#f3f0e9",
      softForeground: "#1e3932",
      separator: "#cba258",
      overlay: "#1e3932bd",
    },
    nextSlug: "amazon",
  },
  {
    layout: "case-study",
    slug: "amazon",
    title: "Amazon",
    tagline: "Whatever you’re into, it’s on Prime",
    heroImage: {
      kind: "image",
      src: "/projects/brandwork/amazon/hero.webp",
      alt: "Amazon Prime collaboration with Doechii",
      aspect: "landscape",
    },
    media: [
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "Amazon × Doechii 1",
        detail: "Audio player placeholder",
        aspect: "wide",
      },
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "Amazon × Doechii 2",
        detail: "Audio player placeholder",
        aspect: "wide",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "Amazon wanted a custom multimedia campaign around “Whatever You’re Into, It’s On Prime”—a celebration of the many ways people use Amazon to get more out of their passions.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I helped win the business by pitching a collaboration with an emerging musical artist whose wide-ranging interests embodied the line, then worked with artist relations to book Doechii for two 0:30 audio spots.",
          "I wrote the treatment, interviewed Doechii, cut the final spots and oversaw post-production while managing the production budget, timelines and client communication.",
        ],
      },
    ],
    team: [
      "Lead Producer: Hanna Bolaños",
      "Audio Engineering & Sound Design: ForeverAudio",
    ],
    theme: {
      surface: "#146eb4",
      surfaceForeground: "#ffffff",
      accent: "#ff9900",
      accentForeground: "#111820",
      soft: "#eef6fb",
      softForeground: "#142a3d",
      separator: "#ff9900",
      overlay: "#146eb4b8",
    },
    nextSlug: "pacifico",
  },
  {
    layout: "case-study",
    slug: "pacifico",
    title: "Pacifico",
    tagline: "Live life anchors up",
    heroImage: {
      kind: "image",
      src: "/projects/brandwork/pacifico/hero.webp",
      alt: "Pacifico and Dissect campaign artwork",
      aspect: "landscape",
    },
    media: [
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "Pacifico × Dissect",
        detail: "Audio player placeholder",
        aspect: "wide",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "Pacifico wanted an immersive audio ad around “That’s Living Life Anchors Up” to run on Spotify’s musical-analysis podcast Dissect.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "Because Pacifico’s brand is about putting your own spin on things, I produced a spot about remixes. An original beat changes beneath host Cole Cuchna as he explains how creative work is transformed through reinterpretation.",
          "The keyboard effect, drums, bass and guitar evolve in real time, blending the campaign message with Dissect’s identity for a fully immersive listening experience.",
        ],
      },
    ],
    team: [
      "Lead Producer & Creative Concepting: Hanna Bolaños",
      "Audio Engineering & Sound Design: Robert Hann",
    ],
    theme: {
      surface: "#0b5964",
      surfaceForeground: "#ffffff",
      accent: "#f0b64f",
      accentForeground: "#0b3440",
      soft: "#f5efe3",
      softForeground: "#173f45",
      separator: "#f0b64f",
      overlay: "#0b5964b8",
    },
    nextSlug: "lego",
  },
  {
    layout: "case-study",
    slug: "lego",
    title: "LEGO",
    tagline: "Press play",
    heroImage: {
      kind: "image",
      src: "/projects/brandwork/lego/hero.webp",
      alt: "LEGO audio campaign artwork",
      aspect: "landscape",
    },
    media: [
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "LEGO × Disney",
        detail: "Audio player placeholder",
        aspect: "wide",
      },
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "LEGO × Marvel",
        detail: "Audio player placeholder",
        aspect: "wide",
      },
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "LEGO × Star Wars",
        detail: "Audio player placeholder",
        aspect: "wide",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "LEGO wanted original, co-branded audio spots featuring Disney IP that would inspire parents to engage in imaginative play with their young children.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I produced three 0:30 spots, pitched the concept, wrote every script, sourced and directed the voice actors, selected takes, music and sound effects, and managed the timeline and budget.",
          "Each spot builds a distinct sonic world around Disney, Marvel or Star Wars and ran inside a matching targeted Spotify playlist.",
        ],
      },
    ],
    team: [
      "Lead Producer: Hanna Bolaños",
      "Audio Engineering & Sound Design: Molly Bolten",
    ],
    theme: {
      surface: "#e3000b",
      surfaceForeground: "#ffffff",
      accent: "#ffd500",
      accentForeground: "#171717",
      soft: "#fff4d6",
      softForeground: "#3d130f",
      separator: "#ffd500",
      overlay: "#7a1117bb",
    },
    nextSlug: "mcdonalds",
  },
  {
    layout: "case-study",
    slug: "mcdonalds",
    title: "McDonald’s",
    tagline: "The last Chicken McNugget",
    heroImage: {
      kind: "image",
      src: "/projects/brandwork/mcdonalds/hero.webp",
      alt: "McDonald’s campaign logo artwork",
      aspect: "landscape",
    },
    media: [
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "McDonald’s × The Ringer Network",
        detail: "0:30 audio spot placeholder",
        aspect: "wide",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "McDonald’s ran ads across Spotify’s Ringer Network around its Chicken McNuggets and wanted a playful story about the family dynamics that emerge around a McDonald’s feast.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I ideated, wrote, voiced and oversaw post for a 0:30 spot that builds—and ultimately releases—the tension of discovering one final McNugget at dinner.",
          "Cheery narration and music turn primal as eyes lock and a fight seems imminent, before a second box restores peace. The ending returns to the bright opening mood and invites listeners to grab their own box.",
        ],
      },
    ],
    team: [
      "Lead Producer & Voice Talent: Hanna Bolaños",
      "Audio Engineering & Sound Design: Molly Bolten",
    ],
    theme: {
      surface: "#da291c",
      surfaceForeground: "#ffffff",
      accent: "#ffc72c",
      accentForeground: "#21130d",
      soft: "#fff4d6",
      softForeground: "#2b1a10",
      separator: "#ffc72c",
      overlay: "#7f1d18bb",
    },
    nextSlug: "chocolate",
  },
] satisfies readonly BrandProject[];

const JOURNALISM_PROJECTS = [
  {
    slug: "loneliness",
    title: "Meditations on Loneliness",
    source: "NPR’s TED Radio Hour",
    date: "April 24, 2020",
    quote:
      "Real social contact is a biological need like eating, drinking or sleeping.",
    quoteAttribution: "Susan Pinker",
    listenUrl:
      "https://www.npr.org/2020/04/24/842604367/susan-pinker-what-makes-social-connection-so-vital-to-our-well-being",
    listenLabel: "Listen now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/loneliness/hero.webp",
      alt: "A person sitting alone at a window",
      aspect: "square",
    },
    story: [
      "Humans are a naturally social species, but COVID-19 forced us into deeply unnatural isolation. Loneliness, however, was a problem long before social distancing became the norm.",
      "In this hour-long episode of NPR’s TED Radio Hour, Jonny Sun, Susan Pinker, Grace Kim and Suleika Jaouad explore what loneliness looks and feels like—and how we can try to make peace with it.",
    ],
    production: [
      "I produced Susan Pinker’s segment. She is the author of The Village Effect, a book about how face-to-face interactions are critical to happiness and long-term health.",
      "I scripted interview questions for the host, recorded the interview and turned more than an hour of tape into a tight 20-minute segment. I also handled sound design and scoring.",
    ],
    nextSlug: "burnout",
  },
  {
    slug: "burnout",
    title: "Dating App Burnout",
    source: "NPR’s All Things Considered",
    date: "June 26, 2019",
    quote:
      "We’re mired in this cycle of continuous searching and never finding satisfaction.",
    quoteAttribution: "Anne Helen Petersen",
    listenUrl:
      "https://www.npr.org/2019/06/26/736344196/dating-app-burnout-when-swiping-becomes-a-chore",
    listenLabel: "Listen here",
    heroTone: "navy",
    image: {
      kind: "image",
      src: "/projects/journalism/burnout/hero.webp",
      alt: "Dating apps displayed on a phone",
      aspect: "square",
    },
    story: [
      "While producing NPR’s All Things Considered in my early twenties, I was swiping through dating apps daily. Dating was supposed to be a break from work burnout, but it had started to feel like a second job—so I pitched a story about that connection.",
    ],
    production: [
      "I wandered through downtown Washington, D.C. with a boom mic, interviewing people who used dating apps—including a couple on a first date who had met online.",
      "Anne Helen Petersen’s reporting on burnout became the story’s structural backbone. The piece went through roughly 20 rounds of edits before it was ready for live radio; I reported, wrote, narrated, scored and cut the final product.",
    ],
    nextSlug: "epstein",
  },
  {
    slug: "epstein",
    title: "Surviving Jeffrey Epstein",
    source: "NPR’s All Things Considered",
    date: "September 2, 2019",
    quote: "There’s part of me that’s refused to let this man win in death.",
    quoteAttribution: "Chauntae Davies",
    listenUrl:
      "https://www.npr.org/2019/09/02/756823299/chauntae-davies-describes-coming-forward-as-epstein-accuser",
    listenLabel: "Listen now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/epstein/hero.webp",
      alt: "Women standing together outside a courthouse",
      aspect: "square",
    },
    story: [
      "After Jeffrey Epstein’s death, more emerged about how he recruited the young women and girls he was accused of abusing and assaulting. Before the federal case was dismissed, a judge allowed Epstein’s accusers to testify in court. We spoke with one of them, actress Chauntae Davies.",
    ],
    production: [
      "Given the delicate subject, I advised the host to invite Ms. Davies to tell her story from start to finish instead of following a rigid list of questions. The two spoke for an hour, giving her time and space to be heard.",
      "I oversaw the recording and edited the conversation from 60 minutes to eight in roughly three hours. It remains one of the most challenging and rewarding edits of my career.",
    ],
    nextSlug: "oldfriend",
  },
  {
    slug: "oldfriend",
    title: "An Old Friend",
    source: "NPR’s All Things Considered",
    date: "September 21, 2018",
    quote:
      "I don’t think she wanted someone who thought that way about women to be up there.",
    quoteAttribution: "Kirsten Leimroth",
    listenUrl:
      "https://www.npr.org/2018/09/21/650508344/friend-of-christine-blasey-ford-says-she-struggled-months-before-she-came-forwar",
    listenLabel: "Listen now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/old-friend/hero.webp",
      alt: "Christine Blasey Ford taking an oath before testifying",
      aspect: "square",
    },
    story: [
      "When Christine Blasey Ford accused then-Supreme Court nominee Brett Kavanaugh of sexual assault, she was thrust into a spotlight she never wanted. NPR needed a human angle, and if an interview with Blasey Ford was not possible, the next best thing was someone who knew her well.",
      "I found Kirsten Leimroth, a longtime friend who was willing to speak with us about Blasey Ford’s character and thinking.",
    ],
    production: [
      "I produced the story in one day. Once Leimroth committed, I prepared the host, recorded the interview and turned 45 minutes of tape into a tight seven-minute piece in about two hours for air.",
    ],
    nextSlug: "cuban",
  },
  {
    slug: "cuban",
    title: "Cuban Sandwich War",
    source: "NPR’s All Things Considered",
    date: "May 14, 2019",
    quote: "I would never in a million years buy a Cuban sandwich in Miami.",
    quoteAttribution: "Andrea Gonzmart",
    listenUrl:
      "https://www.npr.org/2019/05/14/723325930/new-york-times-crossword-clue-creates-chaos-for-cuban-sandwich-fans",
    listenLabel: "Listen now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/cuban/hero.webp",
      alt: "A pressed Cuban sandwich sliced in half",
      aspect: "square",
    },
    story: [
      "A New York Times crossword called Tampa “a city famous for its Cuban sandwiches.” Plenty of people felt the answer should have been Miami, reigniting the age-old question: which city makes the best Cuban sandwich?",
    ],
    production: [
      "I found two experts—Ricardo Morales of Old’s Havana Cuban Bar and Cocina in Miami, and Andrea Gonzmart of Tampa’s Columbia Restaurant—then asked each to make the case for their city’s sandwich.",
      "I cut the tape, wrote the script and interviewed New York Times puzzlemaster Will Shortz for accountability. Short pieces can be some of the hardest to make work; this one was also a delight.",
    ],
    nextSlug: "flan",
  },
  {
    slug: "flan",
    title: "Kentucky Fried Flan",
    source: "NPR’s All Things Considered",
    date: "July 26, 2019",
    quote:
      "Excuse me, are you going to buy any chicken? No, I just want the flan.",
    quoteAttribution: "Claudia Bovea",
    listenUrl:
      "https://www.npr.org/2019/07/26/745731848/this-is-the-only-kentucky-fried-chicken-that-serves-house-made-flan",
    listenLabel: "Listen now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/flan/hero.webp",
      alt: "House-made flan on a plate",
      aspect: "square",
    },
    story: [
      "A KFC in Hialeah, Florida is the only KFC in the world that bakes its own flan. The secret recipe came from a chef who immigrated to the United States from Cuba and has stayed in-house ever since.",
    ],
    production: [
      "Owner Dan Yagoda shared the flan’s origin story, and general manager Claudia Bovea described customers arriving with their own containers just to take extra home.",
      "I recorded the interviews, wrote and tracked the script, and laid up the story for air on the same day—the result is a small, tantalizing piece for the afternoon drive.",
    ],
    nextSlug: "loneliness",
  },
] satisfies readonly JournalismProject[];

function getBrandProject(slug: string) {
  return BRAND_PROJECTS.find((project) => project.slug === slug);
}

function getJournalismProject(slug: string) {
  return JOURNALISM_PROJECTS.find((project) => project.slug === slug);
}

export {
  BRAND_PROJECTS,
  JOURNALISM_PROJECTS,
  getBrandProject,
  getJournalismProject,
};
export type {
  BrandProject,
  CaseStudyBrandProject,
  GalleryBrandProject,
  JournalismProject,
  ProjectImage,
  ProjectMedia,
  ProjectPlaceholder,
  ProjectTheme,
};
