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
          <li
            key={route.href}
            className={cn(
              pathname === route.href && "underline",
              "underline-offset-6 hover:underline",
            )}
          >
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
