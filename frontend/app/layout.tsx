import type { Metadata } from "next";

import "./globals.css";

import Providers from "@/providers/Providers";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "دبیرستان ادیبان",
  description: "وب‌سایت دبیرستان ادیبان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}