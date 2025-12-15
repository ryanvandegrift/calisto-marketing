"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type PlatformProduct = {
  key: string;
  name: string;
  category: string;
  overview: string;
  features: string[];
  href: string;
  imageSrc?: string;
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

type MenuKey = null | "platform" | "solutions" | "company" | "pricing";

// --- Tailwind-safe classes (STATIC STRINGS; no template building) ---
const PINK_BG = "bg-[rgba(246,193,217,0.30)]";
const PINK_HOVER = "hover:bg-[rgba(246,193,217,0.30)]";
const MENU_CARD = "rounded-[2px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.12)]";
const ITEM_BASE = "rounded-[2px] px-3 py-2 transition text-black";
const ITEM_TEXT_14 = "text-[14px] font-light";
const ITEM_TEXT_13 = "text-[13px] font-light";

export default function ProHeader() {
  const pathname = usePathname();

  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hideHeader, setHideHeader] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const platformItems = useMemo<PlatformProduct[]>(
    () => [
      {
        key: "deals",
        name: "Calisto Deals",
        category: "Real estate CRM",
        overview: "The property-native CRM for agents, teams, and brokerages—built on CalistoOS.",
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
        overview: "Property-smart e-signatures with a calm, branded signing experience—built on CalistoOS + Microsoft cloud.",
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
        overview: "Structured inspections and evidence trails that prove condition across homes, units, and rooms—inside Calisto One.",
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
        overview: "IoT signals become calm alerts—leaks, doors, smoke, temperature, motion—structured inside your operations hub.",
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

  const solutions = useMemo<Solution[]>(
    () => [
      {
        key: "hospitality",
        name: "Hotel & Hospitality Operators",
        subtitle: "Guest experience, keys, safety, and operations—together.",
        goals: ["Unify guest experience + operations", "Digital keys that match workflows", "Reduce incidents + late-night chaos", "Improve staff coordination"],
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
        goals: ["Know what’s happening in my home", "Prevent damage and respond fast", "Control access cleanly", "Get clear records and reports"],
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
        goals: ["Run deals from one calm workspace", "Stop juggling docs, showings, follow-ups", "Give clients clarity + confidence", "Close faster with less friction"],
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
        goals: ["Standardize team workflows", "Create a consistent client experience", "Improve compliance and documentation", "Gain performance visibility without micromanaging"],
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

  const companyItems = useMemo<SimpleItem[]>(
    () => [
      { title: "About Calisto Pro", description: "What we build and why it exists.", href: "/company" },
      { title: "Founder", description: "The story behind Calisto.", href: "/company/founder" },
      { title: "Calisto One", description: "The unified portal that connects everything.", href: "/calisto-one" },
      { title: "Calisto Collection", description: "Homes managed using Calisto Pro.", href: "/calisto-collection" },
      { title: "Blog", description: "Guides, product thinking, and updates.", href: "/blog" },
      { title: "Contact", description: "Talk to our team.", href: "/contact" },
    ],
    []
  );

  const pricingItems = useMemo<SimpleItem[]>(
    () => [
      { title: "Marketplace", description: "Browse add-ons and services.", href: "/marketplace" },
      { title: "Build your Plan", description: "Configure a plan for your portfolio.", href: "/pricing/build" },
      { title: "Start Free Trial", description: "Start a 14-day trial.", href: "/start" },
    ],
    []
  );

  const [activeProduct, setActiveProduct] = useState<PlatformProduct>(platformItems[0]);
  const [activeSolution, setActiveSolution] = useState<Solution>(solutions[0]);

  // Hide on scroll down / show on scroll up (but never hide while menus are open)
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (open || mobileOpen) return;

      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const goingDown = y > lastY;
          const pastThreshold = y > 24;
          setHideHeader(pastThreshold && goingDown);
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, mobileOpen]);

  // Ensure header is visible when any menu is open
  useEffect(() => {
    if (open || mobileOpen) setHideHeader(false);
  }, [open, mobileOpen]);

  // Close menus on route change (prevents “stuck open”)
  useEffect(() => {
    closeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Escape closes
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  function clearCloseTimer() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  }

  function openMenu(key: Exclude<MenuKey, null>) {
    clearCloseTimer();
    setOpen(key);
  }

  function closeAll() {
    clearCloseTimer();
    setOpen(null);
    setMobileOpen(false);
  }

  const overlayOpen = !!open;

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white",
        "transition-transform duration-300 ease-out will-change-transform",
        hideHeader ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      onMouseEnter={clearCloseTimer}
    >
      <div className="cal-main-inner">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="inline-flex items-center gap-3" onClick={closeAll} aria-label="Calisto home">
            <Image
              src="https://calistomedia.blob.core.windows.net/calisto-one/calisto_logo_300.png"
              alt="Calisto"
              width={140}
              height={36}
              className="h-9 w-auto"
              priority
            />
            <div className="leading-tight">
              <div className="text-[16px] font-medium tracking-[-0.01em] text-black">Calisto &amp; Co.</div>
              <div className="text-[12px] tracking-[0.18em] text-black/60 uppercase">Pro</div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            <TopNavButton label="Platform" open={open === "platform"} onOpen={() => openMenu("platform")} controlsId="menu-platform" />
            <TopNavButton label="Solutions" open={open === "solutions"} onOpen={() => openMenu("solutions")} controlsId="menu-solutions" />
            <TopNavButton label="Pricing" open={open === "pricing"} onOpen={() => openMenu("pricing")} controlsId="menu-pricing" />
            <TopNavButton label="Company" open={open === "company"} onOpen={() => openMenu("company")} controlsId="menu-company" />
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center">
            <a
              href="https://one.calistoco.com/"
              className="inline-flex h-9 items-center justify-center rounded-[2px] px-4 text-[14px] font-normal text-black shadow-[0_6px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition"
            >
              Sign in
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-[2px] px-3 py-2 text-[14px] font-normal text-black shadow-[0_6px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Click-away overlay (closes any open desktop menu) */}
      {overlayOpen && (
        <button
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setOpen(null)}
          style={{ background: "transparent" }}
        />
      )}

      {/* PLATFORM (mega) */}
      {open === "platform" && (
        <MegaMenuDock id="menu-platform" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
          <div className="grid grid-cols-[260px_1fr] gap-10">
            <div>
              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">PRODUCTS</div>

              <div className="space-y-[2px]">
                {platformItems.map((p) => {
                  const active = activeProduct.key === p.key;
                  return (
                    <Link
                      key={p.key}
                      href={p.href}
                      onMouseEnter={() => setActiveProduct(p)}
                      onFocus={() => setActiveProduct(p)}
                      onClick={closeAll}
                      className={[
                        "block w-full text-left",
                        ITEM_BASE,
                        ITEM_TEXT_14,
                        active ? PINK_BG : PINK_HOVER,
                      ].join(" ")}
                    >
                      {p.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 pt-4">
                <Link
                  href="/platform"
                  onClick={closeAll}
                  className="text-[13px] font-light text-black/70 hover:text-black transition inline-flex items-center gap-2"
                >
                  Explore the platform <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">OVERVIEW</div>

              <div className="text-[11px] tracking-[0.22em] text-black/45 mb-2">{activeProduct.category.toUpperCase()}</div>
              <div className="text-[22px] font-light tracking-[-0.01em] text-black mb-2">{activeProduct.name}</div>
              <div className="text-[14px] font-light leading-relaxed text-black/70 max-w-[64ch]">{activeProduct.overview}</div>

              <div className="mt-6 pt-5">
                <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">CAPABILITIES</div>

                <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13px] font-light text-black/75">
                  {activeProduct.features.slice(0, 10).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={activeProduct.href}
                    onClick={closeAll}
                    className="inline-flex items-center gap-2 text-[14px] font-light"
                    style={{ color: "var(--cal-accent)" }}
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
        </MegaMenuDock>
      )}

      {/* SOLUTIONS (mega) */}
      {open === "solutions" && (
        <MegaMenuDock id="menu-solutions" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
          <div className="grid grid-cols-[260px_1fr] gap-10">
            <div>
              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">SOLUTIONS</div>

              <div className="space-y-[2px]">
                {solutions.map((s) => {
                  const active = activeSolution.key === s.key;
                  return (
                    <Link
                      key={s.key}
                      href={s.href}
                      onMouseEnter={() => setActiveSolution(s)}
                      onFocus={() => setActiveSolution(s)}
                      onClick={closeAll}
                      className={[
                        "block w-full text-left",
                        ITEM_BASE,
                        ITEM_TEXT_14,
                        active ? PINK_BG : PINK_HOVER,
                      ].join(" ")}
                    >
                      {s.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 pt-4">
                <Link
                  href="/solutions"
                  onClick={closeAll}
                  className="text-[13px] font-light text-black/70 hover:text-black transition inline-flex items-center gap-2"
                >
                  Explore solutions <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="rounded-[2px] bg-white shadow-[0_14px_40px_rgba(0,0,0,0.10)] p-6">
              <div className="text-[22px] font-light tracking-[-0.01em] text-black">{activeSolution.name}</div>
              <div className="mt-2 text-[14px] font-light leading-relaxed text-black/70">{activeSolution.subtitle}</div>

              <div className="mt-6 grid grid-cols-2 gap-10">
                <div>
                  <div className="text-[11px] tracking-[0.22em] text-black/45 mb-3">COMMON GOALS</div>
                  <ul className="space-y-2 text-[13px] font-light text-black/75">
                    {activeSolution.goals.map((g) => (
                      <li key={g} className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="leading-relaxed">{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[11px] tracking-[0.22em] text-black/45 mb-3">RECOMMENDED PRODUCTS</div>
                  <div className="grid grid-cols-1 gap-2">
                    {activeSolution.recommended.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        onClick={closeAll}
                        className={[
                          "rounded-[2px] px-3 py-2",
                          ITEM_TEXT_13,
                          "text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)]",
                          PINK_HOVER,
                        ].join(" ")}
                      >
                        {r.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5">
                <Link
                  href={activeSolution.href}
                  onClick={closeAll}
                  className="inline-flex items-center gap-2 text-[14px] font-light"
                  style={{ color: "var(--cal-accent)" }}
                >
                  Explore {activeSolution.name} <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </MegaMenuDock>
      )}

      {/* PRICING (simple dropdown, like one.calistoco expectation) */}
      {open === "pricing" && (
        <SimpleDropdownDock id="menu-pricing" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
          <div className="px-2 py-2">
            <div className="text-[11px] tracking-[0.22em] text-black/45 px-2 pb-1">PRICING</div>
            <div className="space-y-[2px]">
              {pricingItems.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={closeAll}
                  className={["block", ITEM_BASE, ITEM_TEXT_14, PINK_HOVER].join(" ")}
                >
                  <div className="text-black">{i.title}</div>
                  <div className="mt-0.5 text-[12px] font-light text-black/60">{i.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </SimpleDropdownDock>
      )}

      {/* COMPANY (simple dropdown, like one.calistoco expectation) */}
      {open === "company" && (
        <SimpleDropdownDock id="menu-company" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
          <div className="px-2 py-2">
            <div className="text-[11px] tracking-[0.22em] text-black/45 px-2 pb-1">COMPANY</div>
            <div className="space-y-[2px]">
              {companyItems.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={closeAll}
                  className={["block", ITEM_BASE, ITEM_TEXT_14, PINK_HOVER].join(" ")}
                >
                  <div className="text-black">{i.title}</div>
                  <div className="mt-0.5 text-[12px] font-light text-black/60">{i.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </SimpleDropdownDock>
      )}

      {/* MOBILE */}
      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden bg-white shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
          <div className="cal-main-inner py-4">
            <div className="space-y-2">
              <MobileSection title="Platform">
                <div className="grid grid-cols-1 gap-1">
                  {platformItems.map((p) => (
                    <Link
                      key={p.key}
                      href={p.href}
                      onClick={closeAll}
                      className={["rounded-[2px] px-3 py-2", ITEM_TEXT_14, "text-black transition", PINK_HOVER].join(" ")}
                    >
                      {p.name}
                      <div className="text-[12px] font-light text-black/60 mt-1">{p.category}</div>
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <MobileSection title="Solutions">
                <div className="grid grid-cols-1 gap-1">
                  {solutions.map((s) => (
                    <Link
                      key={s.key}
                      href={s.href}
                      onClick={closeAll}
                      className={["rounded-[2px] px-3 py-2", ITEM_TEXT_14, "text-black transition", PINK_HOVER].join(" ")}
                    >
                      {s.name}
                      <div className="text-[12px] font-light text-black/60 mt-1">{s.subtitle}</div>
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <MobileSection title="Pricing">
                <div className="grid grid-cols-1 gap-1">
                  {pricingItems.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={closeAll}
                      className={["rounded-[2px] px-3 py-2", ITEM_TEXT_14, "text-black transition", PINK_HOVER].join(" ")}
                    >
                      <div className="text-black">{i.title}</div>
                      <div className="mt-0.5 text-[12px] font-light text-black/60">{i.description}</div>
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <MobileSection title="Company">
                <div className="grid grid-cols-1 gap-1">
                  {companyItems.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={closeAll}
                      className={["rounded-[2px] px-3 py-2", ITEM_TEXT_14, "text-black transition", PINK_HOVER].join(" ")}
                    >
                      <div className="text-black">{i.title}</div>
                      <div className="mt-0.5 text-[12px] font-light text-black/60">{i.description}</div>
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <div className="pt-2">
                <a
                  href="https://one.calistoco.com/"
                  className="w-full inline-flex items-center justify-center rounded-[2px] px-4 py-2 text-[14px] font-normal text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenuDock({
  id,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      id={id}
      className="fixed inset-x-0 top-16 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Mega menu"
    >
      <div className="cal-main-inner">
        <div className={MENU_CARD}>
          <div className="p-7">{children}</div>
        </div>
      </div>
    </div>
  );
}

// Simple dropdown that visually matches the left-column list vibe (no borders, 2px corners)
function SimpleDropdownDock({
  id,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      id={id}
      className="fixed inset-x-0 top-16 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Dropdown menu"
    >
      <div className="cal-main-inner">
        <div className="flex justify-center">
          <div className="w-full max-w-[420px]">
            <div className={MENU_CARD}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopNavButton({
  label,
  open,
  onOpen,
  controlsId,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  controlsId: string;
}) {
  return (
    <button
      onMouseEnter={onOpen}
      onFocus={onOpen}
      className="text-[15px] font-normal text-black/80 hover:text-black transition inline-flex items-center gap-2"
      aria-expanded={open}
      aria-controls={controlsId}
    >
      {label}
      <span className="text-black/35">▾</span>
    </button>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[2px] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
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

function CheckIcon() {
  return (
    <svg className="mt-[2px] shrink-0" width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7.8 13.6 4.7 10.5l1.1-1.1 2 2 6-6 1.1 1.1-7.1 7.1z" fill="var(--cal-accent)" />
    </svg>
  );
}
