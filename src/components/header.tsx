import { HBLogo } from "@/components/logo";
import { DesktopNavigation } from "@/components/navigation/desktop";
import { MobileNavigation } from "@/components/navigation/mobile";
import { SocialLinks } from "@/components/social-links";

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
  return (
    <header className="font-heading md:bg-background/60 bg-background sticky top-0 z-20 md:backdrop-blur-2xl">
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
