import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface ProjectNavigationItem {
  href: string;
  title: string;
}

interface ProjectNavigationProps {
  ariaLabel: string;
  nextProject?: ProjectNavigationItem;
  previousProject?: ProjectNavigationItem;
}

function ProjectNavigation({
  ariaLabel,
  nextProject,
  previousProject,
}: ProjectNavigationProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="grid grid-cols-2 items-center gap-6 bg-[#f1f1ef] px-6 py-10 text-[#171717] md:px-[3vw]"
    >
      {previousProject ? (
        <Link
          className="group font-heading inline-flex items-center gap-1.5 justify-self-start py-2 text-sm leading-none font-semibold uppercase transition-opacity duration-150 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none md:text-lg"
          href={previousProject.href}
        >
          <ChevronLeftIcon
            aria-hidden="true"
            className="size-6 shrink-0 transition-transform duration-150 group-hover:-translate-x-1 motion-reduce:transition-none sm:size-8"
            strokeWidth={2}
          />
          <span>{previousProject.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {nextProject ? (
        <Link
          className="group font-heading inline-flex items-center gap-1.5 justify-self-end py-2 text-right text-sm leading-none font-semibold uppercase transition-opacity duration-150 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none md:text-lg"
          href={nextProject.href}
        >
          <span>{nextProject.title}</span>
          <ChevronRightIcon
            aria-hidden="true"
            className="size-6 shrink-0 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none sm:size-8"
            strokeWidth={2}
          />
        </Link>
      ) : null}
    </nav>
  );
}

export { ProjectNavigation };
