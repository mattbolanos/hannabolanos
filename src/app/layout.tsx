import type { Metadata } from "next";
import { DynaPuff, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { SocialLinks } from "@/components/social-links";
import { cn } from "@/lib/utils";

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "HB",
  description: "Hanna Bolaños' personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        ibmPlexSans.variable,
        spaceGroteskHeading.variable,
        dynaPuff.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="mx-auto w-full max-w-7xl px-5 pb-8">{children}</main>
        <footer className="mt-auto flex justify-center px-5 py-8 md:py-14">
          <SocialLinks />
        </footer>
      </body>
    </html>
  );
}
