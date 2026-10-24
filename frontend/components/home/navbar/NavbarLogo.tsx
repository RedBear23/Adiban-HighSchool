import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="صفحه اصلی ادیبان"
    >
      <img
        src="/logo.jpg"
        alt="لوگوی مدرسه ادیبان"
        width={52}
        height={52}
        className="h-13 w-13 rounded-lg object-contain"
      />

      <span className="text-xl font-bold tracking-tight text-white">
        ادیبان
      </span>
    </Link>
  );
}