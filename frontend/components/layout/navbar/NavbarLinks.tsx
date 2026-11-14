"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "./nav_links";

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="ناوبری اصلی">
      <ul className="flex items-center gap-1">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  rounded-lg px-3 py-2 text-sm font-medium
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-green-soft text-primary"
                      : "text-navy hover:bg-muted hover:text-primary"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
