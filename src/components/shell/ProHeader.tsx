"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const PINK = "#F6C1D9";

/**
 * Product-level model (this is what lets each product stand on its own)
 */
type PlatformProduct = {
  key: string;
  name: string;
  overview: string;
  benefits: string[];
  href: string;
};

type SimpleItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function ProHeader() {
  const [open, setOpen] = useState<null | "platform" | "solutions" | "company">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  /**
   * PLATFORM PRODUCTS (left column)
   * First product will be selected by default
   */
  const platformItems = useMemo<PlatformProduct[]>(
    () => [
      {
        key: "sign",
        name: "Calisto Sign",
        overview:
          "Enterprise-grade agreements, approvals, and signature workflows built directly into your operational stack.",
        benefits: [
          "Multi-party workflows",
          "Embedded approvals & signatures",
          "Audit trails & compliance",
          "Faster execution than DocuSign-style tools",
        ],
        href: "/sign",
      },
      {
        key: "navigator",
        name: "Calisto Navigator",
        overview:
          "Guest and operator experience layer replacing fragmented tools like Duve or Chekin.",
        benefits: [
          "Guest messaging & automation",
          "Check-in & identity flows",
          "Upsells and service requests",
          "Unified guest profile",
        ],
        href: "/navigator",
      },
      {
        key: "ops",
        name: "Calisto Ops",
        overview:
          "Operational command center for properties, teams, and workflows.",
        benefits: [
          "Task orchestration",
          "Team workflows",
          "Operational visibility",
          "Cross-product coordination",
        ],
        href: "/ops",
      },
      {
        key: "signal",
        name: "Calisto Signal",
        overview:
          "Smart monitoring and alerting layer for properties and assets.",
        benefits: [
          "Noise & occupancy monitoring",
          "Security signals",
          "Automated escalation",
          "Human response integration",
        ],
        href: "/signal",
      },
    ],
    []
  );

  /**
   * ACTIVE PRODUCT (right panel)
   * Default = first product (no wasted space)
   */
  const [activeProduct, setActiveProduct] = useState<PlatformProduct>(
    platformItems[0]
  );

  /**
   * Simple menus (unchanged for now)
   */
  const solutionsItems = useMemo<SimpleItem[]>(
    () => [
      {
        title: "Solution 1",
        description: "Who it’s for and what it solves.",
        href: "/solutions/solution-1",
        icon: "◻︎",
      },
      {
        title: "Solution 2",
        description: "Who it’s for and what it solves.",
        href: "/solutions/solution-2",
        icon: "◻︎",
      },
    ],
    []
  );

  const companyItems = useMemo<SimpleItem[]>(
    () => [
      {
        title: "About",
        description: "What Calisto Pro is and why it exists.",
        href: "/company/about",
        icon: "◦",
      },
      {
        title: "Security",
        description: "Trust, privacy, and compliance.",
        href: "/company/security",
        icon: "◦",
      },
      {
        title: "Contact",
        description: "Talk to our team.",
        href: "/contact",
        icon: "◦",
      },
    ],
    []
  );

  /**
   * Close on ESC
   */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
            <span className="text-[13px] tracking-[0.18em] text-black/70">
              PRO
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <NavButton
              label="Platform"
              open={open === "platform"}
              onOpen={() => setOpen("platform")}
            />
            <NavButton
              label="Solutions"
              open={open === "solutions"}
              onOpen={() => setOpen("solutions")}
            />
            <Link
              href="/pricing"
              className="text-[14px] text-black/75 hover:text-black transition"
            >
              Pricing
            </Link>
            <NavButton
              label="Company"
              open={open === "company"}
              onOpen={() => setOpen("company")}
            />
          </nav>

          {/* Actions */}
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
          </div>
        </div>
      </div>

      {/* PLATFORM MEGA MENU */}
      {open === "platform" && (
        <div
          className="absolute inset-x-0 top-16 bg-white border-t border-black/10"
          onMouseLeave={() => setOpen(null)}
        >
          <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-[260px_1fr] gap-10">
            {/* LEFT: PRODUCT LIST */}
            <div className="space-y-2">
              {platformItems.map((p) => (
                <button
                  key={p.key}
                  onMouseEnter={() => setActiveProduct(p)}
                  className={`w-full text-left rounded-xl px-4 py-3 transition ${
                    activeProduct.key === p.key
                      ? "bg-black/5"
                      : "hover:bg-black/5"
                  }`}
                >
                  <div className="text-[14px] text-black">{p.name}</div>
                </button>
              ))}
            </div>

            {/* RIGHT: PRODUCT DETAILS */}
            <div className="rounded-2xl border border-black/10 p-6">
              <div className="text-[16px] text-black mb-2">
                {activeProduct.name}
              </div>
              <div className="text-[14px] text-black/65 mb-4">
                {activeProduct.overview}
              </div>

              <ul className="grid grid-cols-2 gap-y-2 text-[13px] text-black/70 mb-6">
                {activeProduct.benefits.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <Link
                href={activeProduct.href}
                className="inline-flex items-center gap-2 text-[14px]"
                style={{ color: PINK }}
              >
                Explore {activeProduct.name} →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * Simple top-level nav button
 */
function NavButton({
  label,
  open,
  onOpen,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      onMouseEnter={onOpen}
      className="text-[14px] text-black/75 hover:text-black transition inline-flex items-center gap-2"
      aria-expanded={open}
    >
      {label}
      <span className="text-black/35">▾</span>
    </button>
  );
}
