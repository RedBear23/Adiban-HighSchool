import Link from "next/link";

import { NAV_LINKS } from "./nav_links";

export default function NavbarLinks() {
  return (
    <nav aria-label="ناوبری اصلی">
      <ul className="flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
