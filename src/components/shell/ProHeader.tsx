"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const PINK = "#F6C1D9";

type MegaItem = {
  title: string;
  description: string;
  href: string;
  icon: string; // simple text icon placeholder for now
};

export default function ProHeader() {
  const [open, setOpen] = useState<null | "platform" | "solutions" | "company">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // close menus on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const platformItems = useMemo<MegaItem[]>(
    () => [
      { title: "Feature 1", description: "Short benefit statement for the platform.", href: "/platform/feature-1", icon: "◼︎" },
      { title: "Feature 2", description: "Short benefit statement for the platform.", href: "/platform/feature-2", icon: "◼︎" },
      { title: "Feature 3", description: "Short benefit statement for the platform.", href: "/platform/feature-3", icon: "◼︎" },
      { title: "Feature 4", description: "Short benefit statement for the platform.", href: "/platform/feature-4", icon: "◼︎" },
      { title: "Feature 5", description: "Short benefit statement for the platform.", href: "/platform/feature-5", icon: "◼︎" },
      { title: "Feature 6", description: "Short benefit statement for the platform.", href: "/platform/feature-6", icon: "◼︎" },
    ],
    []
  );

  const solutionsItems = useMemo<MegaItem[]>(
    () => [
      { title: "Solution 1", description: "Who it’s for + what it solves.", href: "/solutions/solution-1", icon: "◻︎" },
      { title: "Solution 2", description: "Who it’s for + what it solves.", href: "/solutions/solution-2", icon: "◻︎" },
      { title: "Solution 3", description: "Who it’s for + what it solves.", href: "/solutions/solution-3", icon: "◻︎" },
      { title: "Solution 4", description: "Who it’s for + what it solves.", href: "/solutions/solution-4", icon: "◻︎" },
    ],
    []
  );

  const companyItems = useMemo<MegaItem[]>(
    () => [
      { title: "About", description: "What Calisto Pro is and why it exists.", href: "/company/about", icon: "◦" },
      { title: "Founder", description: "Leadership and story.", href: "/company/founder", icon: "◦" },
      { title: "Security", description: "Trust, privacy, compliance.", href: "/company/security", icon: "◦" },
      { title: "Contact", description: "Talk to our team.", href: "/contact", icon: "◦" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
      <div className="cal-main-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="inline-flex items-center gap-3">
            <img
              src="https://calistomedia.blob.core.windows.net/calisto-one/calisto_logo_300.png"
              alt="Calisto"
              className="h-7 w-auto"
            />
            <span className="text-[13px] tracking-[0.18em] text-black/70">PRO</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <TopNavButton label="Platform" isOpen={open === "platform"} onOpen={() => setOpen("platform")} onClose={() => setOpen(null)} />
            <TopNavButton label="Solutions" isOpen={open === "solutions"} onOpen={() => setOpen("solutions")} onClose={() => setOpen(null)} />
            <Link className="text-[14px] text-black/75 hover:text-black transition" href="/pricing">
              Pricing
            </Link>
            <TopNavButton label="Company" isOpen={open === "company"} onOpen={() => setOpen("company")} onClose={() => setOpen(null)} />
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://one.calistoco.com/"
              className="hidden md:inline-flex text-[14px] text-black/70 hover:text-black transition"
            >
              Log In
            </a>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-[14px] hover:border-black/30 transition"
            >
              Talk to our team
            </Link>

            {/* Mobile */}
            <button
              className="md:hidden inline-flex items-center rounded-full border border-black/15 px-3 py-2 text-[14px]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mega panel area (desktop) */}
      <div className="hidden md:block">
        {open && (
          <>
            <div
              className="absolute inset-x-0 top-16 h-[calc(100vh-4rem)]"
              onMouseEnter={() => {}}
              onMouseLeave={() => setOpen(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Panel */}
              <div className="relative mx-auto max-w-6xl px-4 pt-4">
                <MegaPanel
                  title={open === "platform" ? "Platform" : open === "solutions" ? "Solutions" : "Company"}
                  items={open === "platform" ? platformItems : open === "solutions" ? solutionsItems : companyItems}
                  accentHex={PINK}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile menu (simple for now) */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="cal-main-inner">
            <div className="py-4 space-y-2">
              <MobileLink href="/pricing" label="Pricing" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/contact" label="Talk to our team" onClick={() => setMobileOpen(false)} />
              <a
                href="https://one.calistoco.com/"
                className="block rounded-xl px-3 py-2 text-[14px] hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function TopNavButton({
  label,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <button
      type="button"
      className="text-[14px] text-black/75 hover:text-black transition inline-flex items-center gap-2"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      aria-expanded={isOpen}
    >
      <span>{label}</span>
      <span className="text-black/35">▾</span>
      {/* Optional subtle underline when open */}
      <span
        aria-hidden="true"
        className="block h-[2px] w-0"
        style={{
          background: isOpen ? "#000" : "transparent",
        }}
      />
    </button>
  );
}

function MegaPanel({
  title,
  items,
  accentHex,
}: {
  title: string;
  items: MegaItem[];
  accentHex: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[12px] uppercase tracking-[0.18em] text-black/45">{title}</div>
          <div className="h-1 w-14 rounded-full" style={{ background: accentHex }} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group rounded-2xl border border-black/10 p-4 transition hover:-translate-y-[1px] hover:shadow-md"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-[2px] inline-flex h-8 w-8 items-center justify-center rounded-xl border"
                  style={{ borderColor: "rgba(0,0,0,0.12)" }}
                >
                  <span className="text-black/60 text-[12px]">{it.icon}</span>
                </div>
                <div className="min-w-0">
                  <div className="text-[14px] text-black">{it.title}</div>
                  <div className="text-[12px] text-black/55 mt-1">{it.description}</div>
                  <div className="mt-3 text-[12px] text-black/55 group-hover:text-black transition">
                    Explore <span style={{ color: accentHex }}>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-xl px-3 py-2 text-[14px] hover:bg-black/5"
    >
      {label}
    </Link>
  );
}
