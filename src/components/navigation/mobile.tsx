"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useId, useState } from "react";
import type { RouteItem } from "@/components/header";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  routes: RouteItem[];
  logo: ReactNode;
  socialLinks: ReactNode;
}

function MobileNavigation({
  routes,
  logo,
  socialLinks,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((open) => !open);

  return (
    <div className="md:hidden">
      <div className="relative z-40 flex h-16 items-center justify-between px-5">
        {logo}

        <button
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="cursor-pointer md:hidden"
          onClick={toggleOpen}
          type="button"
        >
          <span aria-hidden="true" className="relative block size-5">
            <span
              className={cn(
                "bg-foreground absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1 rounded-full transition-transform duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none",
                isOpen && "translate-y-0 -rotate-45",
              )}
            />
            <span
              className={cn(
                "bg-foreground absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 translate-y-1 rounded-full transition-transform duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none",
                isOpen && "translate-y-0 rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        aria-hidden={!isOpen}
        className={cn(
          "pointer-events-none invisible fixed inset-0 z-30 bg-[#f1f1ef] opacity-0 transition-[opacity,visibility] duration-250 ease-out motion-reduce:transition-none",
          isOpen && "pointer-events-auto visible opacity-100",
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-0 flex items-center justify-center"
        >
          <ul className="flex flex-col items-center gap-6">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="inline-flex text-[2.0625rem] leading-none transition-opacity duration-150 ease-[ease] hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
                  onClick={() => setIsOpen(false)}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute inset-x-0 bottom-5 flex justify-center">
          {socialLinks}
        </div>
      </div>
    </div>
  );
}

export { MobileNavigation };
