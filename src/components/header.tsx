"use client";

import { usePathname } from "next/navigation";
import { HBLogo } from "@/components/logo";
import { DesktopNavigation } from "@/components/navigation/desktop";
import { MobileNavigation } from "@/components/navigation/mobile";
import { SocialLinks } from "@/components/social-links";
import { cn } from "@/lib/utils";

interface RouteItem {
  href: string;
  name: string;
}

const ROUTES: RouteItem[] = [
  { href: "/", name: "Brand Work" },
  { href: "/journalism", name: "Journalism" },
  { href: "/about", name: "About" },
];

function Header() {
  const pathname = usePathname();
  const isOverlayPage =
    pathname === "/about" ||
    pathname.startsWith("/brandwork/") ||
    pathname.startsWith("/journalism/");

  return (
    <header
      className={cn(
        "font-heading z-20",
        isOverlayPage
          ? cn("absolute inset-x-0 top-0 bg-transparent", "text-white")
          : "bg-background md:bg-background/60 sticky top-0 md:backdrop-blur-2xl",
      )}
    >
      <div className="mx-auto hidden max-w-7xl items-center px-5 py-7 md:flex">
        <div className="flex min-w-0 flex-1 justify-start">
          <DesktopNavigation routes={ROUTES} />
        </div>

        <HBLogo />

        <div className="flex min-w-0 flex-1 justify-end">
          <SocialLinks />
        </div>
      </div>

      <MobileNavigation
        routes={ROUTES}
        logo={<HBLogo />}
        socialLinks={<SocialLinks />}
      />
    </header>
  );
}

export { Header, type RouteItem };
