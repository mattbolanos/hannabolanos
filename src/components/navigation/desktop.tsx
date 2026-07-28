"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { RouteItem } from "@/components/header";
import { cn } from "@/lib/utils";

export function DesktopNavigation({ routes }: { routes: RouteItem[] }) {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex">
      <ul className="flex items-center gap-x-6">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                "underline-offset-6 transition-opacity duration-150 ease-[ease] hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none",
                pathname === route.href && "underline",
              )}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
