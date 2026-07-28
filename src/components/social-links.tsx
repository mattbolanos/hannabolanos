import InstagramIcon from "@hugeicons/core-free-icons/InstagramIcon";
import Linkedin01Icon from "@hugeicons/core-free-icons/Linkedin01Icon";
import Mail01Icon from "@hugeicons/core-free-icons/Mail01Icon";

import { HugeiconsIcon } from "@hugeicons/react";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/hannabolanos/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/hbolanos/",
    label: "LinkedIn",
    icon: Linkedin01Icon,
  },
  {
    href: "mailto:hpbolanos@gmail.com",
    label: "Email Hanna Bolaños",
    icon: Mail01Icon,
  },
];

export function SocialLinks() {
  return (
    <nav aria-label="Social links">
      <ul className="flex items-center">
        {SOCIAL_LINKS.map((socialLink) => (
          <li key={socialLink.href}>
            <a
              href={socialLink.href}
              aria-label={socialLink.label}
              className="inline-flex size-11 items-center justify-center rounded-full transition-opacity duration-150 ease-[ease] hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
            >
              <HugeiconsIcon
                aria-hidden="true"
                icon={socialLink.icon}
                size={20}
                strokeWidth={1.75}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
