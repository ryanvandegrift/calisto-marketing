"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const PINK = "#F6C1D9";
const MAX_W = 1160;

type PlatformProduct = {
  key: string;
  name: string;
  category: string; // small eyebrow label
  overview: string;
  features: string[]; // 8–10
  href: string;
  imageSrc?: string; // optional placeholder
};

type Solution = {
  key: string;
  name: string;
  subtitle: string;
  goals: string[];
  recommended: { name: string; href: string }[];
  href: string;
};

type SimpleItem = {
  title: string;
  description: string;
  href: string;
};

export default function ProHeader() {
  const [open, setOpen] = useState<null | "platform" | "solutions" | "company">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const platformItems = useMemo<PlatformProduct[]>(
    () => [
      {
        key: "deals",
        name: "Calisto Deals",
        category: "Real estate CRM",
        overview:
          "The property-native CRM for agents, teams, and brokerages—built on CalistoOS.",
        features: [
          "Pipelines for listings, offers, contracts",
          "Property-centric records (not “accounts”)",
          "Showings, inspections, access context",
          "Client timelines + next steps",
          "Task + follow-up automation",
          "Team handoffs and visibility",
          "Portfolio-level reporting",
          "Works cleanly at scale",
        ],
        href: "/deals",
        imageSrc: "/images/products/deals.jpg",
      },
      {
        key: "sign",
        name: "Calisto Sign",
        category: "E-signatures",
        overview:
          "Property-smart e-signatures with a calm, branded signing experience—built on CalistoOS + Microsoft cloud.",
        features: [
          "Multi-party workflows",
          "Embedded approvals + signatures",
          "Audit trails + compliance",
          "Signer experience that feels premium",
          "Property + document context together",
          "Templates and role-based routing",
          "Status visibility for teams + clients",
          "Faster execution than DocuSign-style tools",
        ],
        href: "/sign",
        imageSrc: "/images/products/sign.jpg",
      },
      {
        key: "purview",
        name: "Calisto Purview",
        category: "Client portal",
        overview:
          "The client-facing workspace where you share curated listings, manage documents, track steps, and run signing—without confusion.",
        features: [
          "Curated listing boards",
          "Document hub + timelines",
          "Next steps that clients understand",
          "Integrated signing inside the flow",
          "Status visibility across the deal",
          "Clean “what’s needed” checklists",
          "Branded experience for brokerages",
          "Mobile-friendly by default",
        ],
        href: "/purview",
        imageSrc: "/images/products/purview.jpg",
      },
      {
        key: "ops",
        name: "Calisto Ops",
        category: "Operations workspace",
        overview:
          "The calm operational hub for stays, visits, and deals—calendars, reservations, showings, events, tickets, folios, and payments.",
        features: [
          "Unified operational calendar",
          "Tickets + workflows in one hub",
          "Reservations + showings + events",
          "Cross-team coordination",
          "Folio + payment context",
          "Multi-property visibility",
          "Owner + staff alignment",
          "Built to reduce tool sprawl",
        ],
        href: "/ops",
        imageSrc: "/images/products/ops.jpg",
      },
      {
        key: "assure",
        name: "Calisto Assure",
        category: "Quality + condition",
        overview:
          "Structured inspections and evidence trails that prove condition across homes, units, and rooms—inside Calisto One.",
        features: [
          "Inspection flows + scoring",
          "Photo evidence + structured records",
          "Condition history per property/unit",
          "Issue → task/workflow conversion",
          "Owner-ready reports",
          "Team accountability",
          "Compliance-ready documentation",
          "Built for trust at scale",
        ],
        href: "/assure",
        imageSrc: "/images/products/assure.jpg",
      },
      {
        key: "sync",
        name: "Calisto Sync",
        category: "Channel management",
        overview:
          "A channel manager built into Calisto One—connect OTAs and your website to a clean source of truth for rates + availability.",
        features: [
          "Airbnb + Booking.com + VRBO",
          "Direct website connectivity",
          "Rate + availability sync",
          "Avoid double bookings",
          "Channel attribution clarity",
          "Centralized content alignment",
          "Reliable operational source of truth",
          "Designed for calm ops",
        ],
        href: "/sync",
        imageSrc: "/images/products/sync.jpg",
      },
      {
        key: "navigator",
        name: "Calisto Navigator",
        category: "Guest app",
        overview:
          "A branded guest experience app—booking details, online check-in, ID flows, agreements, messaging, upsells, and digital access.",
        features: [
          "Online check-in + identity flows",
          "Agreements in the guest journey",
          "Guest messaging + automation",
          "Upsells + service requests",
          "Booking context in one place",
          "Works with Calisto Access",
          "Clean, branded UX guests use",
          "Built for hotels + property managers",
        ],
        href: "/navigator",
        imageSrc: "/images/products/navigator.jpg",
      },
      {
        key: "access",
        name: "Calisto Access",
        category: "Digital keys",
        overview:
          "Turn bookings, tasks, and visits into digital keys—standalone or integrated into Calisto One for full operational context.",
        features: [
          "Time-bound access for guests/teams",
          "Bookings → keys automatically",
          "Vendor + staff access control",
          "Owner access without chaos",
          "Audit trails per door",
          "Integrates with Ops + Navigator",
          "Supports operational playbooks",
          "Built for real-world workflows",
        ],
        href: "/access",
        imageSrc: "/images/products/access.jpg",
      },
      {
        key: "signal",
        name: "Calisto Signal",
        category: "Safety + device hub",
        overview:
          "IoT signals become calm alerts—leaks, doors, smoke, temperature, motion—structured inside your operations hub.",
        features: [
          "Leak + smoke + environment signals",
          "Door/motion awareness",
          "Alert routing + escalation",
          "Azure IoT foundations",
          "Structured incident records",
          "Works with Calisto 24·7",
          "Property + device history",
          "Designed for trust + safety",
        ],
        href: "/signal",
        imageSrc: "/images/products/signal.jpg",
      },
      {
        key: "247",
        name: "Calisto 24·7",
        category: "Live coverage",
        overview:
          "A real team watching phones, messages, and Signal alerts—following your playbooks—so you wake up to a clear list, not chaos.",
        features: [
          "Live response team",
          "Phones + channel messages covered",
          "Signal alerts monitored",
          "Playbooks + call scripts followed",
          "Incident documentation",
          "Morning-ready summaries",
          "Owner/guest/buyer coverage",
          "Scales without burnout",
        ],
        href: "/24-7",
        imageSrc: "/images/products/247.jpg",
      },
    ],
    []
  );

  const [activeProduct, setActiveProduct] = useState<PlatformProduct>(platformItems[0]);

  const solutions = useMemo<Solution[]>(
    () => [
      {
        key: "hospitality",
        name: "Hotel & Hospitality Operators",
        subtitle: "Guest experience, keys, safety, and operations—together.",
        goals: [
          "Unify guest experience + operations",
          "Digital keys that match workflows",
          "Reduce incidents + late-night chaos",
          "Improve staff coordination",
        ],
        recommended: [
          { name: "Calisto Ops", href: "/ops" },
          { name: "Calisto Navigator", href: "/navigator" },
          { name: "Calisto Access", href: "/access" },
          { name: "Calisto Signal", href: "/signal" },
          { name: "Calisto 24·7", href: "/24-7" },
          { name: "Calisto Sync", href: "/sync" },
        ],
        href: "/solutions/hospitality",
      },
      {
        key: "pm",
        name: "Property Managers",
        subtitle: "Operate properties calmly across teams, owners, and guests.",
        goals: [
          "Standardize ops across properties",
          "Prove condition with evidence",
          "Reduce tool sprawl and missed tasks",
          "Deliver a premium owner + guest experience",
        ],
        recommended: [
          { name: "Calisto Ops", href: "/ops" },
          { name: "Calisto Assure", href: "/assure" },
          { name: "Calisto Sync", href: "/sync" },
          { name: "Calisto Navigator", href: "/navigator" },
          { name: "Calisto Access", href: "/access" },
          { name: "Calisto Signal", href: "/signal" },
          { name: "Calisto 24·7", href: "/24-7" },
          { name: "Calisto Sign", href: "/sign" },
        ],
        href: "/solutions/property-managers",
      },
      {
        key: "secondhome",
        name: "Second-Home Owners",
        subtitle: "Visibility, protection, and calm oversight—without becoming a manager.",
        goals: [
          "Know what’s happening in my home",
          "Prevent damage and respond fast",
          "Control access cleanly",
          "Get clear records and reports",
        ],
        recommended: [
          { name: "Calisto Signal", href: "/signal" },
          { name: "Calisto Access", href: "/access" },
          { name: "Calisto Assure", href: "/assure" },
          { name: "Calisto 24·7", href: "/24-7" },
          { name: "Calisto Ops", href: "/ops" },
        ],
        href: "/solutions/second-home-owners",
      },
      {
        key: "agents",
        name: "Real Estate Agents",
        subtitle: "Property-native sales workflows, client experience, and signing.",
        goals: [
          "Run deals from one calm workspace",
          "Stop juggling docs, showings, follow-ups",
          "Give clients clarity + confidence",
          "Close faster with less friction",
        ],
        recommended: [
          { name: "Calisto Deals", href: "/deals" },
          { name: "Calisto Sign", href: "/sign" },
          { name: "Calisto Purview", href: "/purview" },
          { name: "Calisto Access", href: "/access" },
        ],
        href: "/solutions/real-estate-agents",
      },
      {
        key: "brokers",
        name: "Managing Brokers",
        subtitle: "Visibility, standardization, and a premium client journey across the brokerage.",
        goals: [
          "Standardize team workflows",
          "Create a consistent client experience",
          "Improve compliance and documentation",
          "Gain performance visibility without micromanaging",
        ],
        recommended: [
          { name: "Calisto Deals", href: "/deals" },
          { name: "Calisto Purview", href: "/purview" },
          { name: "Calisto Sign", href: "/sign" },
          { name: "Calisto Assure", href: "/assure" },
        ],
        href: "/solutions/managing-brokers",
      },
    ],
    []
  );

  const [activeSolution, setActiveSolution] = useState<Solution>(solutions[0]);

  const companyItems = useMemo<SimpleItem[]>(
    () => [
      {
        title: "About Calisto Pro",
        description: "What we build and why it exists.",
        href: "/company",
      },
      {
        title: "Founder",
        description: "The story behind Calisto.",
        href: "/company/founder",
      },
      {
        title: "Calisto One",
        description: "The unified portal that connects everything.",
        href: "/calisto-one",
      },
      {
        title: "Calisto Collection",
        description: "Homes managed using Calisto Pro.",
        href: "/calisto-collection",
      },
      {
        title: "Blog",
        description: "Guides, product thinking, and updates.",
        href: "/blog",
      },
      {
        title: "Contact",
        description: "Talk to our team.",
        href: "/contact",
      },
    ],
    []
  );

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close menus when route changes via click (basic)
  function closeAll() {
    setOpen(null);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto px-4" style={{ maxWidth: MAX_W }}>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="inline-flex items-center gap-3" onClick={closeAll}>
            <img
              src="https://calistomedia.blob.core.windows.net/calisto-one/calisto_logo_300.png"
              alt="Calisto"
              className="h-7 w-auto"
            />
            <span className="text-[12px] tracking-[0.22em] text-black/60">
              PRO
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <TopNavButton
              label="Platform"
              open={open === "platform"}
              onOpen={() => setOpen("platform")}
            />
            <TopNavButton
              label="Solutions"
              open={open === "solutions"}
              onOpen={() => setOpen("solutions")}
            />
            <Link
              href="/pricing"
              className="text-[14px] font-light text-black/70 hover:text-black transition"
              onClick={closeAll}
            >
              Pricing
            </Link>
            <TopNavButton
              label="Company"
              open={open === "company"}
              onOpen={() => setOpen("company")}
            />
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://one.calistoco.com/"
              className="inline-flex items-center rounded-full px-4 py-2 text-[14px] font-light transition border border-black/10 hover:border-black/20"
              style={{ background: PINK, color: "#000000" }}
            >
              Log In
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-[14px] font-light hover:border-black/30 transition"
              onClick={closeAll}
            >
              Talk to our team
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-black/15 px-3 py-2 text-[14px] font-light"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
          >
            Menu
          </button>
        </div>
      </div>

      {/* CLICK-CATCH OVERLAY (no dim, just closes) */}
      {open && (
        <button
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setOpen(null)}
          style={{ background: "transparent" }}
        />
      )}

      {/* PLATFORM MEGA MENU */}
      {open === "platform" && (
        <MegaMenuFrame onMouseLeave={() => setOpen(null)}>
          <div className="grid grid-cols-[240px_1fr] gap-10">
            {/* LEFT: PRODUCT LIST */}
            <div>
              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">
                PRODUCTS
              </div>
              <div className="space-y-[2px]">
                {platformItems.map((p) => {
                  const active = activeProduct.key === p.key;
                  return (
                    <button
                      key={p.key}
                      onMouseEnter={() => setActiveProduct(p)}
                      onFocus={() => setActiveProduct(p)}
                      className={[
                        "w-full text-left rounded-lg px-3 py-2 transition",
                        "text-[14px] font-light",
                        active
                          ? "bg-black/[0.04] text-black"
                          : "text-black/80 hover:bg-black/[0.03] hover:text-black",
                      ].join(" ")}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-black/10 pt-4">
                <Link
                  href="/platform"
                  onClick={closeAll}
                  className="text-[13px] font-light text-black/70 hover:text-black transition inline-flex items-center gap-2"
                >
                  Explore the platform <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* RIGHT: PRODUCT DETAILS */}
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-[11px] tracking-[0.22em] text-black/45 mb-2">
                    {activeProduct.category.toUpperCase()}
                  </div>

                  <div className="text-[22px] font-light tracking-[-0.01em] text-black mb-2">
                    {activeProduct.name}
                  </div>

                  <div className="text-[14px] font-light leading-relaxed text-black/70 max-w-[62ch]">
                    {activeProduct.overview}
                  </div>
                </div>

                {/* Optional product image (placeholder ok) */}
                <div className="hidden lg:block w-[220px] shrink-0">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-black/10 bg-black/[0.02]">
                    {activeProduct.imageSrc ? (
                      <img
                        src={activeProduct.imageSrc}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-black/10 pt-5">
                <div className="text-[11px] tracking-[0.22em] text-black/45 mb-3">
                  CAPABILITIES
                </div>

                <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13px] font-light text-black/75">
                  {activeProduct.features.slice(0, 10).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-black/30" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={activeProduct.href}
                    onClick={closeAll}
                    className="inline-flex items-center gap-2 text-[14px] font-light"
                    style={{ color: PINK }}
                  >
                    Explore {activeProduct.name} <span aria-hidden>→</span>
                  </Link>

                  <Link
                    href="/platform/compare"
                    onClick={closeAll}
                    className="text-[13px] font-light text-black/60 hover:text-black transition inline-flex items-center gap-2"
                  >
                    Compare products <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MegaMenuFrame>
      )}

      {/* SOLUTIONS MEGA MENU */}
      {open === "solutions" && (
        <MegaMenuFrame onMouseLeave={() => setOpen(null)}>
          <div className="grid grid-cols-[260px_1fr] gap-10">
            {/* LEFT: CUSTOMER TYPES */}
            <div>
              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">
                SOLUTIONS
              </div>
              <div className="space-y-[2px]">
                {solutions.map((s) => {
                  const active = activeSolution.key === s.key;
                  return (
                    <button
                      key={s.key}
                      onMouseEnter={() => setActiveSolution(s)}
                      onFocus={() => setActiveSolution(s)}
                      className={[
                        "w-full text-left rounded-lg px-3 py-2 transition",
                        "text-[14px] font-light",
                        active
                          ? "bg-black/[0.04] text-black"
                          : "text-black/80 hover:bg-black/[0.03] hover:text-black",
                      ].join(" ")}
                    >
                      {s.name}
                      <div className="text-[12px] font-light text-black/55 mt-1 leading-snug">
                        {s.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-black/10 pt-4">
                <Link
                  href="/solutions"
                  onClick={closeAll}
                  className="text-[13px] font-light text-black/70 hover:text-black transition inline-flex items-center gap-2"
                >
                  Explore solutions <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* RIGHT: SOLUTION DETAIL */}
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="text-[22px] font-light tracking-[-0.01em] text-black">
                {activeSolution.name}
              </div>
              <div className="mt-2 text-[14px] font-light leading-relaxed text-black/70">
                {activeSolution.subtitle}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-10">
                <div>
                  <div className="text-[11px] tracking-[0.22em] text-black/45 mb-3">
                    COMMON GOALS
                  </div>
                  <ul className="space-y-2 text-[13px] font-light text-black/75">
                    {activeSolution.goals.map((g) => (
                      <li key={g} className="flex items-start gap-2">
                        <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-black/30" />
                        <span className="leading-relaxed">{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[11px] tracking-[0.22em] text-black/45 mb-3">
                    RECOMMENDED PRODUCTS
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {activeSolution.recommended.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        onClick={closeAll}
                        className="rounded-lg border border-black/10 px-3 py-2 text-[13px] font-light text-black/75 hover:text-black hover:border-black/20 hover:bg-black/[0.02] transition"
                      >
                        {r.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-black/10 pt-5">
                <Link
                  href={activeSolution.href}
                  onClick={closeAll}
                  className="inline-flex items-center gap-2 text-[14px] font-light"
                  style={{ color: PINK }}
                >
                  Explore {activeSolution.name} <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </MegaMenuFrame>
      )}

      {/* COMPANY MEGA MENU */}
      {open === "company" && (
        <MegaMenuFrame onMouseLeave={() => setOpen(null)}>
          <div className="grid grid-cols-2 gap-6">
            {companyItems.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={closeAll}
                className="rounded-2xl border border-black/10 bg-white px-5 py-4 hover:border-black/20 hover:bg-black/[0.02] transition"
              >
                <div className="text-[15px] font-light text-black">{c.title}</div>
                <div className="mt-1 text-[13px] font-light text-black/65 leading-relaxed">
                  {c.description}
                </div>
              </Link>
            ))}
          </div>
        </MegaMenuFrame>
      )}

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="mx-auto px-4 py-4" style={{ maxWidth: MAX_W }}>
            <div className="space-y-2">
              <MobileSection title="Platform">
                <div className="grid grid-cols-1 gap-1">
                  {platformItems.map((p) => (
                    <Link
                      key={p.key}
                      href={p.href}
                      onClick={closeAll}
                      className="rounded-lg px-3 py-2 text-[14px] font-light text-black/80 hover:bg-black/[0.03] hover:text-black transition"
                    >
                      {p.name}
                      <div className="text-[12px] font-light text-black/55 mt-1">
                        {p.category}
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/platform"
                  onClick={closeAll}
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-light text-black/70"
                >
                  Explore the platform <span aria-hidden>→</span>
                </Link>
              </MobileSection>

              <MobileSection title="Solutions">
                <div className="grid grid-cols-1 gap-2">
                  {solutions.map((s) => (
                    <Link
                      key={s.key}
                      href={s.href}
                      onClick={closeAll}
                      className="rounded-lg border border-black/10 px-3 py-2 text-[14px] font-light text-black/80 hover:border-black/20 hover:bg-black/[0.02] transition"
                    >
                      {s.name}
                      <div className="text-[12px] font-light text-black/55 mt-1">
                        {s.subtitle}
                      </div>
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <Link
                href="/pricing"
                onClick={closeAll}
                className="block rounded-lg px-3 py-2 text-[14px] font-light text-black/80 hover:bg-black/[0.03] hover:text-black transition"
              >
                Pricing
              </Link>

              <MobileSection title="Company">
                <div className="grid grid-cols-1 gap-2">
                  {companyItems.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={closeAll}
                      className="rounded-lg border border-black/10 px-3 py-2 text-[14px] font-light text-black/80 hover:border-black/20 hover:bg-black/[0.02] transition"
                    >
                      {c.title}
                      <div className="text-[12px] font-light text-black/55 mt-1">
                        {c.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <div className="pt-2 flex gap-2">
                <a
                  href="https://one.calistoco.com/"
                  className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-[14px] font-light border border-black/10"
                  style={{ background: PINK, color: "#000000" }}
                >
                  Log In
                </a>
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-black/15 px-4 py-2 text-[14px] font-light"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/** Centered, non-fullwidth mega menu frame */
function MegaMenuFrame({
  children,
  onMouseLeave,
}: {
  children: React.ReactNode;
  onMouseLeave: () => void;
}) {
  return (
    <div className="relative z-50">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 pt-3"
        onMouseLeave={onMouseLeave}
        style={{ width: `min(${MAX_W}px, calc(100vw - 24px))` }}
      >
        <div className="rounded-[28px] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.10)]">
          <div className="p-7">{children}</div>
        </div>
      </div>
      {/* spacer so layout doesn't jump */}
      <div className="h-[420px]" />
    </div>
  );
}

function TopNavButton({
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
      onFocus={onOpen}
      className="text-[14px] font-light text-black/70 hover:text-black transition inline-flex items-center gap-2"
      aria-expanded={open}
    >
      {label}
      <span className="text-black/35">▾</span>
    </button>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-black/10 bg-white">
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-[14px] font-light text-black/80"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="text-black/35">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-3 pb-3">{children}</div>}
    </div>
  );
}
