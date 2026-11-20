import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";

import Providers from "@/providers/Providers";
import Navbar from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "دبیرستان ادیبان",
  description: "وب‌سایت دبیرستان ادیبان",
};

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
