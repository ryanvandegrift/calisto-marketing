import type { Metadata } from "next";
import ProHeader from "@/components/shell/ProHeader";
import ProFooter from "@/components/shell/ProFooter";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["200", "300", "400", "500"], // 200 = ExtraLight, 300 = Light
});

// The metadata is exported as a named export
export const metadata: Metadata = {
  title: "Calisto Pro - Professional Operations Platform",
  description:
    "10 integrated products for property management, real estate, and hospitality operations.",
};

// This is the ONLY default export (combining RootLayout and ProLayout)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <ProHeader />
          <main className="flex-1">{children}</main>
          <ProFooter />
        </div>
      </body>
    </html>
  );
}