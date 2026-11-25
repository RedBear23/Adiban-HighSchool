
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { NAV_LINKS, NAV_LAB_LINKS } from "./nav_links";

export default function NavbarLinks() {
  const pathname = usePathname();

  function isLinkActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  const isLabActive = NAV_LAB_LINKS.some((link) =>
    isLinkActive(link.href),
  );

  return (
    <nav aria-label="ناوبری اصلی">
      <ul className="flex items-center gap-1">
        {NAV_LINKS.map((link) => {
          const isActive = isLinkActive(link.href);

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

        {/* منوی آزمایشگاه */}
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger
              type="button"
              aria-label="منوی آزمایشگاه"
              className={`
                flex items-center gap-1 rounded-lg px-3 py-2
                text-sm font-medium transition-colors duration-200
                focus-visible:outline-none
                ${
                  isLabActive
                    ? "bg-green-soft text-primary"
                    : "text-navy hover:bg-muted hover:text-primary"
                }
              `}
            >
              آزمایشگاه
              <ChevronDown className="size-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="
                min-w-44 rounded-xl border-border
                bg-popover p-1.5 shadow-lg
              "
            >
              {NAV_LAB_LINKS.map((link) => {
                const isActive = isLinkActive(link.href);

                return (
                  <DropdownMenuItem
                    key={link.href}
                    className={`
                      cursor-pointer rounded-lg px-3 py-2.5
                      text-sm
                      ${
                        isActive
                          ? "bg-green-soft! text-primary!"
                          : "bg-transparent! text-navy!"
                      }
                      hover:bg-muted! hover:text-primary!
                      focus:bg-muted! focus:text-primary!
                    `}
                    render={
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    }
                  />
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}
