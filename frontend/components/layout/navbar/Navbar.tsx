import NavbarAuth from "./NavbarAuth";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarMobile from "./NavbarMobile";

import { NotificationCenter } from "@/components/notifications/NotificationCenter";

export default function Navbar() {
  return (
    <header
      id="navbar"
      className="relative z-50 border-b border-border bg-card shadow-sm"
    >
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavbarLogo />

        <div className="flex items-center gap-2 lg:gap-5">
          <div className="hidden lg:block">
            <NavbarLinks />
          </div>

          <NotificationCenter />

          <div className="hidden lg:block">
            <NavbarAuth />
          </div>

          <NavbarMobile />
        </div>
      </div>
    </header>
  );
}
