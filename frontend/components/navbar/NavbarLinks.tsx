import Link from "next/link";

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

export default function NavbarLinks() {
  return (
    <nav aria-label="ناوبری اصلی">
      <ul className="flex items-center gap-1">
        {navLinks.map((link) => (
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