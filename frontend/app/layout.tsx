import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "دبیرستان ادیبان",
  description: "وب‌سایت مدرسه ادیبان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}