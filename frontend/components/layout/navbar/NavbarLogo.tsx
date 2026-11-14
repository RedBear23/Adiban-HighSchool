import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3"
      aria-label="صفحه اصلی ادیبان"
    >

      <Image
        src="/logo.jpg"
        alt="لوگوی مدرسه ادیبان"
        width={48}
        height={48}
        unoptimized
        className="size-12 rounded-lg object-contain"
      />

      <span className="text-xl font-bold tracking-tight text-navy">
        ادیبان
      </span>
    </Link>
  );
}
