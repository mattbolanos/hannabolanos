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
  src?: string;
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
      "Introducing Ritual’s plant-based, traceably sourced protein—now in rich, creamy chocolate. Whether you’re dominating the court, or just trying to make it until lunchtime, we’re powering your every serve. Because no one should have to choose between essential quality and great taste.",
    groups: [
      {
        title: "Launch film",
        eyebrow: "Your new favorite pick-me-up 🍫🤎",
        media: [
          {
            kind: "placeholder",
            mediaType: "video",
            label: "Chocolate Protein launch film",
            src: "/projects/brandwork/chocolate/launch-film.mp4",
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
      "Senior AD: Sam Danan",
      "Production: Hanna Bolaños, Oui Productions",
      "Video: Erynn Lamont",
      "Set/Prop Design: Shelby Kay Reed",
      "HMU: Amber Rose",
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
      separator: "#7a3f00",
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
      "A fresh, sunny, lo-fi shoot of various Ritual products captured in an east-side Los Angeles home. Content has been used across email marketing, organic social, growth advertising, collateral, Ritual.com, PR and company events.",
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
              "A 360° love-themed campaign about gut health, starring Ritual’s Synbiotic+ because true love means going #2 around your #1.",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/ritual/campaign-prenatal.webp",
            alt: "Ritual bestselling prenatal social campaign",
            category: "Social",
            caption: "April 2024",
            description:
              "Instagram campaign to celebrate Ritual’s clinically-backed Essential Prenatal vitamin becoming the number one bestselling prenatal in the U.S.",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/ritual/campaign-new-year.webp",
            alt: "Ritual New Year sale email campaign",
            category: "Email",
            caption: "December 2024",
            description:
              "Email campaign for Ritual’s signature New Year Sale, made to remind you that taking care of yourself is better than reinvention.",
            aspect: "portrait",
          },
          {
            kind: "image",
            src: "/projects/brandwork/ritual/campaign-mothers-day.webp",
            alt: "Ritual Mother’s Day growth campaign",
            category: "Growth",
            caption: "May 2025",
            description:
              "Targeted growth asset for Ritual’s yearly Mother’s Day Sale, aimed at giving moms the science-backed support they need to thrive.",
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
            src: "/projects/brandwork/ritual/essential-men.gif",
            aspect: "square",
          },
          {
            kind: "placeholder",
            mediaType: "gif",
            label: "Pregnancy Bundle",
            src: "/projects/brandwork/ritual/pregnancy-bundle.gif",
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
      separator: "#fae400",
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
        src: "/projects/brandwork/liquid-iv/gen-x.mp4",
        aspect: "landscape",
      },
      {
        kind: "placeholder",
        mediaType: "video",
        label: "Millennials · Pop",
        src: "/projects/brandwork/liquid-iv/millennials.mp4",
        aspect: "landscape",
      },
      {
        kind: "placeholder",
        mediaType: "video",
        label: "Gen Z · Indie Rock",
        src: "/projects/brandwork/liquid-iv/gen-z.mp4",
        aspect: "landscape",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "Liquid I.V. wanted to grow national product awareness for their Hydration Multiplier across Gen X, Millennial and Gen Z audiences by leaning into generational music tastes and compelling animated visuals.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I produced 3x 0:30s animated videos, illustrating how life looks and feels before drinking Liquid I.V. and after.",
          "I pitched the creative concept and wrote three distinct video scripts, incorporating Liquid I.V.’s brand messaging and desired storylines.",
          "I sourced the animation studio, built our budget, managed the timeline and addressed all client feedback. I directed the voice talent, recorded the audio and cut the audio tracks. I also managed communications with the client throughout the campaign.",
          "Each video targets 1 generational audience and features a corresponding custom music track inspired by each generation’s most streamed genre on Spotify.",
          "The videos begin with muted color palettes and low quality sound, mimicking dehydration. Once a character drinks a glass of Liquid I.V., the scene transforms. The colors get brighter and the music tracks fill out.",
          "The result is a comprehensive sonic-visual experience, positioning Liquid I.V. as the #1 hydrator across multiple consumer sets.",
          "The client increased their media spend with Spotify following the release of this campaign and reposted the videos on their social channels.",
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
          "I worked with our artist relations team to book rising Puerto Rican reggaeton star Myke Towers to be the face of this collaboration.",
          "I pitched the creative treatment to Starbucks, wrote the interview questions and spoke with Towers for an hour about his family, hometown, what inspires him, his advice for aspiring artists and his career so far.",
          "I edited the interview into 6x 2–3:00 minute clips, which we placed throughout a playlist Towers created. You can listen to his story alongside the tracks that’ve made him who he is today on Spotify at the link above.",
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
        src: "/projects/brandwork/amazon/doechii-1.mp3",
        aspect: "wide",
      },
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "Amazon × Doechii 2",
        src: "/projects/brandwork/amazon/doechii-2.mp3",
        aspect: "wide",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "Amazon wanted to create a custom multimedia campaign around the tagline “Whatever You’re Into, It’s On Prime,” a celebration of the many ways people can engage with Amazon to get more out of their passions.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I helped win the business for this campaign by pitching a collaboration with an emerging musical artist whose wide-ranging interests encapsulate Amazon’s tagline. I then worked with the artist relations team to book rising rapper Doechii for 2x 0:30s audio spots.",
          "In addition to writing the treatment, I interviewed Doechii, cut the final spots and oversaw post-production.",
          "I also built and managed our client-facing and internal timelines, as well as our production budget and client communications.",
          "The final spots strike a great balance between Amazon’s campaign messaging and Doechii’s authentic responses, resulting in branded content that feels engaging and relatable.",
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
        src: "/projects/brandwork/pacifico/dissect.mp3",
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
          "Pacifico’s brand is all about putting your own spin on things. Given Dissect’s ethos as a musical-analysis podcast, I produced an audio ad about remixes.",
          "I worked with our audio engineer to create an original beat that gets remixed as the ad progresses. The spot begins with the crackling of vinyl on a turntable. We hear Dissect’s host Cole Cuchna explain how all music is derivative, and there’s great value in making something you love your own. As he narrates, the music changes. An effect is added to the keyboard, the drum and bass patterns shift, and the guitar line gets reversed, creating an entirely new beat before our ears.",
          "The ad generates positive brand affinity for Pacifico by seamlessly blending its campaign messaging with the authentic identity of Dissect for a fully immersive and original listening experience.",
        ],
      },
    ],
    team: [
      "Lead Producer: Hanna Bolaños",
      "Creative Concepting: Hanna Bolaños",
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
        src: "/projects/brandwork/lego/disney.mp3",
        aspect: "wide",
      },
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "LEGO × Marvel",
        src: "/projects/brandwork/lego/marvel.mp3",
        aspect: "wide",
      },
      {
        kind: "placeholder",
        mediaType: "audio",
        label: "Disney × Star Wars",
        src: "/projects/brandwork/lego/star-wars.mp3",
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
          "I produced 3x 0:30s audio spots that capture LEGO’s fun and imaginative nature. Narrated by voice talent, the ads share tips and tricks parents can use to inspire their kids to engage in imaginative play, while emphasizing LEGO as the perfect partner.",
          "In addition to managing the timeline and budget, I pitched the creative concept to LEGO, scripted all 3 spots, sourced the voice actors and directed them during tapings. I selected the best cuts from each before handing the tracks off for post-production. I also selected the music and sound effects.",
          "Each ad spotlights one of the following LEGO themes: Disney Princess, Marvel and Star Wars. The result is three distinct sonic worlds with conversational narration made to inspire our target audience.",
          "Each ad ran within a matching targeted playlist on Spotify.",
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
        src: "/projects/brandwork/mcdonalds/ringer.mp3",
        aspect: "wide",
      },
    ],
    details: [
      {
        title: "The Ask",
        paragraphs: [
          "McDonald’s ran a flight of ads across Spotify on the Ringer Network focused on their famous Chicken McNuggets. They wanted something playful and humorous that highlighted the family dynamics that come into play when enjoying a McDonald’s feast.",
        ],
      },
      {
        title: "The Execution",
        paragraphs: [
          "I ideated, wrote, voiced and oversaw post for this 0:30 ad that uses custom sound design to create and ultimately alleviate the tension that arises when there’s only one more Chicken McNugget left at dinner.",
          "The spot opens with an upbeat track and cheery narration, describing a wholesome family dinner with McDonald’s. Everything’s going swimmingly until the music suddenly becomes tense, primal.",
          "The narration simultaneously shifts, as we learn that only one McNugget remains. The conversation stops, eyes lock, a fight is imminent! Until we learn there’s another McNugget box. Phew…",
          "The ad ends with a return to the cheery music, encouraging listeners to grab their own box of McNuggets.",
        ],
      },
    ],
    team: [
      "Lead Producer: Hanna Bolaños",
      "Voice Talent: Hanna Bolaños",
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
    listenLabel: "Listen Now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/loneliness/hero.webp",
      alt: "A person sitting alone at a window",
      aspect: "square",
    },
    story: [
      "Humans are a naturally social species, but COVID-19 forced us into deeply unnatural isolation. However, loneliness was a problem long before social distancing became the norm. In this hour-long episode of NPR’s TED Radio Hour, Jonny Sun, Susan Pinker, Grace Kim and Suleika Jaouad explore what loneliness looks and feels like, and how we can try to make peace with it.",
    ],
    production: [
      "I produced Susan Pinker’s segment in this episode. She’s the author of The Village Effect, a book that explores how face-to-face interactions are critical for our happiness and long-term health. She gave a TED Talk on the subject in 2017.",
      "I scripted interview questions for our host, recorded the interview and turned 60+ minutes of tape into a tight 20-minute segment. I also did the sound design and scoring.",
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
    listenLabel: "Listen Here",
    heroTone: "navy",
    image: {
      kind: "image",
      src: "/projects/journalism/burnout/hero.webp",
      alt: "Dating apps displayed on a phone",
      aspect: "square",
    },
    story: [
      "When I was a producer for NPR’s All Things Considered, I was in my early 20s and swiping through dating apps daily. It was exhausting, almost like a second job. I thought dating would be a reprieve from the burnout I was experiencing from work, but actually…it was contributing to it. I wanted to explore that connection, so I pitched this story.",
    ],
    production: [
      "I wandered through downtown Washington, D.C. on a Tuesday night, boom mic in hand, popping in and out of neighborhood bars, interviewing people who use dating apps. It was weird, hilarious and super fun. I chuckled at everyone eyeing my over-ear headphones and bulky radio equipment, smushed up against yuppies in collared shirts with full steins in hand. To my delight, people were very willing to share their stories. I even found a couple on a first date who had met online.",
      "I also interviewed Anne Helen Petersen, a writer and journalist who wrote a viral article about burnout for BuzzFeed in 2019. According to her, burnout is not exhaustion you can fix with vacation. Instead, she calls burnout society’s base temperature. We turn things that aren’t work into work. Her interview served as the story’s structural backbone.",
      "The piece went through roughly 20 rounds of edits prior to becoming live-radio ready. I reported, wrote, narrated, scored and cut the final product.",
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
    listenLabel: "Listen Now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/epstein/hero.webp",
      alt: "Women standing together outside a courthouse",
      aspect: "square",
    },
    story: [
      "In the aftermath of financier Jeffrey Epstein’s death, we learned more about how he recruited the young women and girls he was accused of sexually abusing and assaulting. Before his federal case was dismissed, the judge allowed Epstein’s accusers to testify in court. We spoke with one of them—an actress named Chauntae Davies.",
    ],
    production: [
      "Typically before an interview, the producer conducts research and provides the host with questions to prepare. However, given the delicate subject matter, I advised my host to simply ask Ms. Davies to tell her story from start to finish. Typically hosts only spend about 30 minutes on an interview as they record multiple each day, but the two spoke for an hour. Ms. Davies felt heard as she was given the time and space to speak freely. I’m grateful to have been a part of giving her that platform, and I’m very proud to have produced this story.",
      "I oversaw the recording and edited the conversation from 60 minutes down to 8 in about 3 hours. It remains one of the most challenging and rewarding edits of my career.",
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
    listenLabel: "Listen Now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/old-friend/hero.webp",
      alt: "Christine Blasey Ford taking an oath before testifying",
      aspect: "square",
    },
    story: [
      "When Christine Blasey Ford accused then-Supreme Court nominee Judge Brett Kavanaugh of sexual assault in 2018, she was immediately thrust into the spotlight, somewhere she never wanted to be. Everyone was eager to learn her intentions as negotiations over whether she would testify before the Senate Judiciary Committee began.",
      "NPR was looking for a human angle to this story. If interviewing Blasey Ford wasn’t possible, finding someone who knew her well was the next best thing. I soon found Kirsten Leimroth, a longtime friend of Blasey Ford’s who was willing to speak with us about her.",
    ],
    production: [
      "I produced this story in one day. Finding and booking the guest was the most challenging part, followed by the edit.",
      "Once Leimroth committed to the interview, I prepared my host, recorded the interview and turned 45 minutes of tape into a tight 7 in 2 hours for air. Leimroth gave us a great understanding of Blasey Ford’s thought process behind coming forward, as well as her character. This is one of my most crucial bookings, and I’m proud of the edit as well.",
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
    listenLabel: "Listen Now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/cuban/hero.webp",
      alt: "A pressed Cuban sandwich sliced in half",
      aspect: "square",
    },
    story: [
      "In May 2019, a New York Times crossword puzzle published this clue: “A city famous for its Cuban sandwiches.” The answer was Tampa, but many people felt it should have been Miami. And so, an age-old beef (ha!) was reignited: which city has the best Cuban sammies?",
    ],
    production: [
      "I kicked this story off by finding two Cuban sandwich experts: Ricardo Morales of Old’s Havana Cuban Bar and Cocina in Miami, and Andrea Gonzmart, owner of the Columbia Restaurant in Tampa. I asked both of them why their city’s version of the sammie is superior, cut the tape, wrote the script and off it went to air.",
      "I also interviewed New York Times puzzlemaster Will Shortz for accountability purposes, but he insisted on staying neutral.",
      "This was an incredibly fun piece to produce and don’t let the run time fool you—sometimes short pieces are the hardest to do well.",
    ],
    nextSlug: "flan",
  },
  {
    slug: "flan",
    title: "Kentucky Fried Flan",
    source: "NPR’s All Things Considered",
    date: "May 14, 2019",
    quote:
      "Excuse me, are you going to buy any chicken? No, I just want the flan.",
    quoteAttribution: "Claudia Bovea",
    listenUrl:
      "https://www.npr.org/2019/07/26/745731848/this-is-the-only-kentucky-fried-chicken-that-serves-house-made-flan",
    listenLabel: "Listen Now",
    heroTone: "black",
    image: {
      kind: "image",
      src: "/projects/journalism/flan/hero.webp",
      alt: "House-made flan on a plate",
      aspect: "square",
    },
    story: [
      "When NPR learned that a KFC in Hialeah, Florida was the only KFC in the world that bakes its own flan, we had to give them a call. There are more than 21,000 KFCs in the world across more than 130 countries, but only one has this tasty, silky dessert on the menu. The secret recipe was invented by a chef who immigrated to the U.S. from Cuba. It’s been kept in-house ever since.",
    ],
    production: [
      "I reached out to Dan Yagoda, the owner of the Hialeah KFC, and he was more than happy to share the flan’s origin story. Yagoda began cooking for the KFC when he was 23, and that’s where he met then-head chef Baldomero Gonzalez. Every once in a while, Gonzalez would make flan in the pressure cooker meant for frying chicken. Turns out, it makes the flan irresistible.",
      "I also interviewed Claudia Bovea, the general manager of the Hialeah KFC. She spoke highly of the flan, sharing that people sometimes come with their own containers just to take extra home with them.",
      "I recorded all the interviews, wrote the script, tracked it and laid up the story for air same-day. The result is a tantalizing little piece for your afternoon drive home.",
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
