import { DesktopNavigation } from "@/components/navigation/desktop";

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
    <header className="font-heading sticky top-0 z-20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center px-5 py-14">
        <DesktopNavigation routes={ROUTES} />
      </div>
    </header>
  );
}

export { Header, type RouteItem };
