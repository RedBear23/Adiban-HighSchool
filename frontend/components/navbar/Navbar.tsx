import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <header className="relative z-50 bg-primary shadow-[0_3px_14px_rgba(0,77,0,0.22)]">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Right side - Logo */}
        <NavbarLogo />

        {/* Left side - Desktop navigation */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>

        {/* Mobile navigation */}
        <NavbarMobile />
      </div>
    </header>
  );
}