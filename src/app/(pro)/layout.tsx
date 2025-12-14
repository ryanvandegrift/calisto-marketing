import type { Metadata } from "next";
import ProHeader from "@/components/shell/ProHeader";
import ProFooter from "@/components/shell/ProFooter";

export const metadata: Metadata = {
  title: "Calisto Pro - Professional Operations Platform",
  description:
    "10 integrated products for property management, real estate, and hospitality operations.",
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ProHeader />
      <main className="flex-1">{children}</main>
      <ProFooter />
    </div>
  );
}
