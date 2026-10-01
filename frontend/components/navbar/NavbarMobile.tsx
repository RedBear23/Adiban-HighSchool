"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "خانه",
    href: "/",
  },
  {
    label: "درباره مدرسه",
    href: "/about",
  },
  {
    label: "اخبار",
    href: "/news",
  },
  {
    label: "رویدادها",
    href: "/events",
  },
  {
    label: "کادر مدرسه",
    href: "/teachers",
  },
  {
    label: "گالری",
    href: "/gallery",
  },
  {
    label: "تماس با ما",
    href: "/contact",
  },
];

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-lg p-2 text-white transition-colors hover:bg-primary-dark"
        aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-primary-dark bg-primary shadow-lg"
          >
            <nav className="mx-auto max-w-7xl px-4 py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}