"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

const PINK = "#F6C1D9";

type Audience =
  | "Hotel & Hospitality Operators"
  | "Property Managers"
  | "Second-Home Owners"
  | "Real Estate Agents"
  | "Managing Brokers";

type Product = {
  key: string;
  name: string;
  overview: string;
  features: string[];
  href: string;
};

type Solution = {
  key: string;
  name: Audience;
  headline: string;
  summary: string;
  recommended: { productKey: string; why: string }[];
  href: string;
};

export default function ProHeader() {
  const [open, setOpen] = useState<null | "platform" | "solutions" | "company">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<"platform" | "solutions">("platform");

  const headerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  const products = useMemo<Product[]>(
    () => [
      {
        key: "deals",
        name: "Calisto Deals",
        overview:
          "The property-native CRM for agents, teams & brokerages—built on CalistoOS so listings, buyers, sellers, and showings work like real estate actually works.",
        features: [
          "Property-native pipeline (not accounts)",
          "Listings, buyers, sellers in one workspace",
          "Showings, access, and follow-ups connected",
          "Inspection + condition context in the deal",
          "Team visibility and accountability",
          "Client-ready share flows via Purview",
          "Works with Sign for fast execution",
          "Structured notes and next steps",
          "Designed for calm selling",
        ],
        href: "/deals",
      },
      {
        key: "sign",
        name: "Calisto Sign",
        overview:
          "Property-smart e-signatures with a calm, branded experience—keeping documents, signers, and properties in one place on the Microsoft cloud.",
        features: [
          "Property-linked signature packets",
          "Multi-party routing and approvals",
          "Audit trails & compliance-ready records",
          "Templates for repeatable workflows",
          "Role-based access control",
          "Client-friendly signing experience",
          "Embedded in Purview and Solutions",
          "Secure document organization",
          "Faster execution for teams",
        ],
        href: "/sign",
      },
      {
        key: "purview",
        name: "Calisto Purview",
        overview:
          "The client experience for real estate—curated listings, documents, next steps, and signing in one workspace so clients always know what’s happening.",
        features: [
          "Curated listing collections",
          "Document hub for transactions",
          "Clear next steps and timelines",
          "E-signing embedded with Sign",
          "Client clarity: what’s signed + what’s next",
          "Brokerage-ready experience layer",
          "Works across deals + operations",
          "Beautiful, branded presentation",
          "Clean handoff and accountability",
        ],
        href: "/purview",
      },
      {
        key: "ops",
        name: "Calisto Ops",
        overview:
          "The operations workspace—calendars, reservations, showings, events, tickets, folios, and payments in one calm hub.",
        features: [
          "Unified operational calendar",
          "Reservations + showings + events",
          "Tickets and workflows in one hub",
          "Folios & payment context",
          "Cross-team coordination",
          "Multi-property visibility",
          "Owner + staff alignment",
          "Built to reduce tool sprawl",
          "Calm operations, at scale",
        ],
        href: "/ops",
      },
      {
        key: "assure",
        name: "Calisto Assure",
        overview:
          "The quality and condition layer—inspect, document, and prove condition with visual evidence and records that flow into Calisto One.",
        features: [
          "Structured inspections",
          "Photo evidence + documentation",
          "Condition history per unit/home",
          "Client-ready proof and records",
          "Operational handoff into Ops",
          "Standards & checklists by asset type",
          "Trust layer for owners and guests",
          "Better dispute prevention",
          "Designed for repeatability",
        ],
        href: "/assure",
      },
      {
        key: "sync",
        name: "Calisto Sync",
        overview:
          "A channel manager built into Calisto One—connect Airbnb, Booking.com, VRBO, and direct availability into one reliable source of truth.",
        features: [
          "Unified availability & rates",
          "Avoid double bookings",
          "Stop channel-by-channel updates",
          "Clean operational source of truth",
          "Works with Ops calendar",
          "Aligns with guest comms",
          "Built for operators at scale",
          "Context for workflows",
          "Clean, reliable syncing",
        ],
        href: "/sync",
      },
      {
        key: "navigator",
        name: "Calisto Navigator",
        overview:
          "A branded guest experience app—booking details, online check-in, ID flows, agreements, messaging, upsells, and digital access.",
        features: [
          "Online check-in & ID flows",
          "Agreements and signature flows",
          "Guest messaging (structured)",
          "Upsells & service requests",
          "Digital access integration",
          "Branded guest experience",
          "Works with Ops + Sync",
          "Designed for repeatable stays",
          "Guests actually use it",
        ],
        href: "/navigator",
      },
      {
        key: "access",
        name: "Calisto Access",
        overview:
          "Digital access for guests, owners & teams—turn bookings, tasks, and visits into keys that match how your operations actually work.",
        features: [
          "Keys from bookings/tasks/visits",
          "Role-based access control",
          "Time-bound entry rules",
          "Audit logs and visibility",
          "Works with Ops & Navigator",
          "Owner + staff access flows",
          "Fieldwork-friendly access",
          "Multi-property ready",
          "Calm access governance",
        ],
        href: "/access",
      },
      {
        key: "signal",
        name: "Calisto Signal",
        overview:
          "Safety & device hub—devices send signals, CalistoOS and Azure IoT turn them into calm alerts inside your operations hub.",
        features: [
          "Leak, motion, door, smoke, temp monitoring",
          "Structured alerts (not noise)",
          "Incident context inside Ops",
          "Device-level visibility",
          "Automation-ready escalation",
          "Works with Access + 24·7",
          "Built for homes and hotels",
          "Azure IoT patterns",
          "Calm incident handling",
        ],
        href: "/signal",
      },
      {
        key: "247",
        name: "Calisto 24·7",
        overview:
          "Live coverage—calls, channel messages, and Signal alerts handled by a real team using your playbooks, day and night.",
        features: [
          "Live response to calls/messages/alerts",
          "Playbook-driven handling",
          "Clear morning recap list",
          "Incident documentation",
          "Works with Signal & Ops",
          "Protects focus time",
          "Designed for owners + operators",
          "Scales across markets",
          "Always-on calm coverage",
        ],
        href: "/24-7",
      },
    ],
    []
  );

  const productByKey = useMemo(() => {
    const m = new Map<string, Product>();
    products.forEach((p) => m.set(p.key, p));
    return m;
  }, [products]);

  const solutions = useMemo<Solution[]>(
    () => [
      {
        key: "hospitality",
        name: "Hotel & Hospitality Operators",
        headline: "Guest experience, building safety, and digital keys in one system.",
        summary:
          "Bring rooms, residences, guests, staff, and buildings into a single view—so operations stay calm even at scale.",
        recommended: [
          { productKey: "ops", why: "Run stays, events, tickets, and payments in one hub." },
          { productKey: "sync", why: "Keep channels aligned and eliminate double booking risk." },
          { productKey: "navigator", why: "Deliver check-in, messaging, and upsells guests use." },
          { productKey: "access", why: "Turn bookings into keys with role-based control." },
          { productKey: "signal", why: "Convert device noise into structured alerts." },
          { productKey: "247", why: "After-hours coverage using your playbooks." },
          { productKey: "assure", why: "Condition proof and standards across units." },
          { productKey: "sign", why: "Agreements and approvals tied to the property record." },
        ],
        href: "/solutions/hospitality",
      },
      {
        key: "pm",
        name: "Property Managers",
        headline: "A calm operating system for homes, teams, and owners.",
        summary:
          "Coordinate inspections, keys, devices, guest workflows, and owner trust—without stitching together a dozen tools.",
        recommended: [
          { productKey: "ops", why: "Centralize calendars, tickets, and operational work." },
          { productKey: "assure", why: "Standardize inspection, condition, and proof." },
          { productKey: "access", why: "Control entry for staff, guests, and vendors." },
          { productKey: "signal", why: "Catch leaks and risks early with structured alerts." },
          { productKey: "247", why: "After-hours coverage that follows your playbooks." },
          { productKey: "navigator", why: "Guest app for check-in, messaging, and add-ons." },
          { productKey: "sync", why: "Channel reliability and clean source of truth." },
          { productKey: "sign", why: "Approvals and documents in one place." },
        ],
        href: "/solutions/property-managers",
      },
      {
        key: "owners",
        name: "Second-Home Owners",
        headline: "Know what’s happening—without living on your phone.",
        summary:
          "Condition proof, secure access, safer homes, and a calm record of everything that happened while you were away.",
        recommended: [
          { productKey: "assure", why: "Inspection evidence and condition history you can trust." },
          { productKey: "access", why: "Control who can enter and when—fully logged." },
          { productKey: "signal", why: "Early warnings for leaks, smoke, doors, and more." },
          { productKey: "247", why: "A live team to handle incidents and interruptions." },
          { productKey: "ops", why: "A calm hub for visits, tasks, and household operations." },
          { productKey: "sign", why: "Approvals and documents in one secure place." },
        ],
        href: "/solutions/second-home-owners",
      },
      {
        key: "agents",
        name: "Real Estate Agents",
        headline: "Property-native sales + a client experience that feels premium.",
        summary:
          "Close faster with a CRM that understands properties, plus signing and access that match the real-world workflow.",
        recommended: [
          { productKey: "deals", why: "CRM designed for listings, buyers, sellers, and showings." },
          { productKey: "sign", why: "Property-smart signature flows that keep execution calm." },
          { productKey: "purview", why: "Client workspace for curated listings and next steps." },
          { productKey: "access", why: "Control showings and track entry when needed." },
          { productKey: "assure", why: "Condition evidence that builds trust and reduces disputes." },
        ],
        href: "/solutions/real-estate-agents",
      },
      {
        key: "brokers",
        name: "Managing Brokers",
        headline: "Standardize how your team sells—without slowing them down.",
        summary:
          "Visibility, consistency, and accountability across agents—with a client experience your brokerage owns.",
        recommended: [
          { productKey: "deals", why: "Team pipeline visibility + real estate-native workflows." },
          { productKey: "purview", why: "Consistent client experience across the brokerage." },
          { productKey: "sign", why: "Approvals and signatures with audit trails and control." },
          { productKey: "assure", why: "Standards and condition evidence that protects the brand." },
          { productKey: "247", why: "Coverage so teams stay present during peak hours." },
          { productKey: "access", why: "Track and control entry during showings." },
        ],
        href: "/solutions/managing-brokers",
      },
    ],
    []
  );

  const [activeProductKey, setActiveProductKey] = useState(products[0]?.key ?? "deals");
  const [activeSolutionKey, setActiveSolutionKey] = useState(solutions[0]?.key ?? "hospitality");

  const activeProduct = productByKey.get(activeProductKey) ?? products[0];
  const activeSolution = solutions.find((s) => s.key === activeSolutionKey) ?? solutions[0];

  // ESC closes
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // click outside closes (desktop)
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (menuRef.current?.contains(t)) return;
      if (headerRef.current?.contains(t)) return;
      setOpen(null);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [open]);

  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 170);
  }
  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  const [mobileSelectedProductKey, setMobileSelectedProductKey] = useState<string | null>(null);
  const [mobileSelectedSolutionKey, setMobileSelectedSolutionKey] = useState<string | null>(null);

  // max width = 1160 (your preference)
  const PANEL_W = "max-w-[1160px]";
  const LIST_MAX_H = "max-h-[430px]";

  // Panel animation state (subtle, premium)
  const [panelVisible, setPanelVisible] = useState(false);
  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => setPanelVisible(true), 10);
      return () => window.clearTimeout(t);
    } else {
      setPanelVisible(false);
    }
  }, [open]);

  return (
    <header
  ref={(n) => {
    headerRef.current = n;
  }}
  className="sticky top-0 z-50 font-sans"
>
      {/* Top bar (calm glass) */}
      <div className="border-b border-black/10 bg-white/65 backdrop-blur-2xl">
        <div className="cal-main-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Brand */}
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="https://calistomedia.blob.core.windows.net/calisto-one/calisto_logo_300.png"
                alt="Calisto"
                className="h-7 w-auto"
              />
              <span className="text-[12px] tracking-[0.24em] text-black/60 font-light">PRO</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavButton label="Platform" open={open === "platform"} onOpen={() => setOpen("platform")} />
              <NavButton label="Solutions" open={open === "solutions"} onOpen={() => setOpen("solutions")} />
              <Link href="/pricing" className="text-[14px] text-black/70 hover:text-black transition font-light">
                Pricing
              </Link>
              <NavButton label="Company" open={open === "company"} onOpen={() => setOpen("company")} />
            </nav>

            {/* Actions + Mobile */}
            <div className="flex items-center gap-3">
              {/* Log In as pink pill */}
              <a
                href="https://one.calistoco.com/"
                className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-[14px] border border-black/10 hover:border-black/20 transition font-light shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                style={{ background: PINK, color: "#000" }}
              >
                Log In
              </a>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-[14px] text-black/85 hover:border-black/20 hover:text-black transition bg-white/60 font-light"
              >
                Talk to our team
              </Link>

              <button
                className="md:hidden inline-flex items-center rounded-full border border-black/15 px-3 py-2 text-[13px] bg-white/60 font-light"
                onClick={() => {
                  setMobileOpen((v) => !v);
                  setMobileSelectedProductKey(null);
                  setMobileSelectedSolutionKey(null);
                }}
                aria-expanded={mobileOpen}
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PLATFORM PANEL */}
      {open === "platform" && (
        <FloatingPanel
          menuRef={menuRef}
          widthClass={PANEL_W}
          panelVisible={panelVisible}
          cancelClose={cancelClose}
          scheduleClose={scheduleClose}
        >
          <div className="grid grid-cols-[260px_1fr]">
            {/* LEFT */}
            <div className="p-5 border-r border-black/10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
                Products
              </div>

              <div className={`${LIST_MAX_H} overflow-auto pr-1 space-y-1`}>
                {products.map((p) => {
                  const selected = p.key === activeProductKey;
                  return (
                    <button
                      key={p.key}
                      onMouseEnter={() => setActiveProductKey(p.key)}
                      onFocus={() => setActiveProductKey(p.key)}
                      className={[
                        "relative w-full text-left rounded-xl px-3 py-[9px] transition",
                        selected
                          ? "bg-black/[0.035] border border-black/10"
                          : "border border-transparent hover:bg-black/[0.03]",
                      ].join(" ")}
                    >
                      {/* micro highlight line (premium, not flashy) */}
                      {selected && (
                        <span className="pointer-events-none absolute inset-x-2 top-0 h-[1px] bg-white/70" />
                      )}
                      <div className="text-[13px] leading-5 text-black font-light">{p.name}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 pt-5 border-t border-black/10">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-[13px] text-black/65 hover:text-black transition font-light"
                >
                  Explore the platform →
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
                Overview
              </div>

              <div className="text-[18px] text-black mb-2 font-light">{activeProduct.name}</div>
              <div className="text-[14px] leading-6 text-black/65 mb-6 max-w-[760px] font-light">
                {activeProduct.overview}
              </div>

              <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
                Capabilities
              </div>

              <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-[13px] text-black/75">
                {activeProduct.features.slice(0, 10).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-black/30 mt-[2px]">▢</span>
                    <span className="leading-5 font-light">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                <Link
                  href={activeProduct.href}
                  className="inline-flex items-center gap-2 text-[14px] hover:opacity-90 font-light"
                  style={{ color: PINK }}
                >
                  Explore {activeProduct.name} →
                </Link>

                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 text-[13px] text-black/60 hover:text-black transition font-light"
                >
                  Compare products →
                </Link>
              </div>
            </div>
          </div>
        </FloatingPanel>
      )}

      {/* SOLUTIONS PANEL */}
      {open === "solutions" && (
        <FloatingPanel
          menuRef={menuRef}
          widthClass={PANEL_W}
          panelVisible={panelVisible}
          cancelClose={cancelClose}
          scheduleClose={scheduleClose}
        >
          <div className="grid grid-cols-[260px_1fr]">
            {/* LEFT */}
            <div className="p-5 border-r border-black/10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
                Solutions
              </div>

              <div className={`${LIST_MAX_H} overflow-auto pr-1 space-y-1`}>
                {solutions.map((s) => {
                  const selected = s.key === activeSolutionKey;
                  return (
                    <button
                      key={s.key}
                      onMouseEnter={() => setActiveSolutionKey(s.key)}
                      onFocus={() => setActiveSolutionKey(s.key)}
                      className={[
                        "relative w-full text-left rounded-xl px-3 py-[9px] transition",
                        selected
                          ? "bg-black/[0.035] border border-black/10"
                          : "border border-transparent hover:bg-black/[0.03]",
                      ].join(" ")}
                    >
                      {selected && (
                        <span className="pointer-events-none absolute inset-x-2 top-0 h-[1px] bg-white/70" />
                      )}
                      <div className="text-[13px] leading-5 text-black font-light">{s.name}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 pt-5 border-t border-black/10">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-[13px] text-black/65 hover:text-black transition font-light"
                >
                  Explore all solutions →
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
                You’re in the right place
              </div>

              <div className="text-[18px] text-black mb-2 font-light">{activeSolution.headline}</div>
              <div className="text-[14px] leading-6 text-black/65 mb-6 max-w-[820px] font-light">
                {activeSolution.summary}
              </div>

              <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
                Recommended products
              </div>

              <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                {activeSolution.recommended.slice(0, 10).map((r) => {
                  const p = productByKey.get(r.productKey);
                  if (!p) return null;
                  return (
                    <Link
                      key={r.productKey}
                      href={p.href}
                      className="group rounded-2xl border border-black/10 bg-white/70 p-4 hover:border-black/20 transition"
                    >
                      <div className="text-[14px] text-black mb-1 font-light">{p.name}</div>
                      <div className="text-[12px] text-black/60 leading-5 font-light">{r.why}</div>
                      <div className="mt-2 text-[12px] text-black/45 group-hover:text-black/60 transition font-light">
                        Explore →
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                <Link
                  href={activeSolution.href}
                  className="inline-flex items-center gap-2 text-[14px] hover:opacity-90 font-light"
                  style={{ color: PINK }}
                >
                  Explore {activeSolution.name} →
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[13px] text-black/60 hover:text-black transition font-light"
                >
                  Talk to our team →
                </Link>
              </div>
            </div>
          </div>
        </FloatingPanel>
      )}

      {/* COMPANY PANEL */}
      {open === "company" && (
        <FloatingPanel
          menuRef={menuRef}
          widthClass={PANEL_W}
          panelVisible={panelVisible}
          cancelClose={cancelClose}
          scheduleClose={scheduleClose}
        >
          <div className="p-6 grid grid-cols-2 gap-5">
            <MenuCard title="About" description="What Calisto Pro is and why it exists." href="/about" />
            <MenuCard title="Founder" description="The story and operating philosophy behind Calisto." href="/founder" />
            <MenuCard title="Blog" description="Product, operations, and real estate insights." href="/blog" />
            <MenuCard title="Calisto Collection" description="Homes managed by Calisto using Calisto Pro." href="/collection" />
            <MenuCard title="Calisto One" description="The portal and operational home for Calisto." href="/calisto-one" />
            <MenuCard title="Contact" description="Talk to our team." href="/contact" />
          </div>
        </FloatingPanel>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white font-sans">
          <div className="flex items-center justify-between px-4 h-16 border-b border-black/10 bg-white/70 backdrop-blur-2xl">
            <div className="text-[12px] tracking-[0.24em] text-black/60 font-light">CALISTO PRO</div>
            <button
              className="rounded-full border border-black/15 px-3 py-2 text-[13px] bg-white/60 font-light"
              onClick={() => setMobileOpen(false)}
            >
              Close
            </button>
          </div>

          <div className="px-4 pt-4">
            <div className="flex gap-2">
              <button
                className={`flex-1 rounded-full border px-3 py-2 text-[13px] font-light ${
                  mobileTab === "platform" ? "border-black/30" : "border-black/10"
                }`}
                onClick={() => {
                  setMobileTab("platform");
                  setMobileSelectedProductKey(null);
                }}
              >
                Platform
              </button>
              <button
                className={`flex-1 rounded-full border px-3 py-2 text-[13px] font-light ${
                  mobileTab === "solutions" ? "border-black/30" : "border-black/10"
                }`}
                onClick={() => {
                  setMobileTab("solutions");
                  setMobileSelectedSolutionKey(null);
                }}
              >
                Solutions
              </button>
            </div>
          </div>

          <div className="px-4 py-4 overflow-auto h-[calc(100vh-64px-72px)]">
            {mobileTab === "platform" ? (
              mobileSelectedProductKey ? (
                <MobileDetail
                  title={productByKey.get(mobileSelectedProductKey)?.name ?? "Product"}
                  subtitle={productByKey.get(mobileSelectedProductKey)?.overview ?? ""}
                  bullets={productByKey.get(mobileSelectedProductKey)?.features ?? []}
                  ctaLabel={`Explore ${productByKey.get(mobileSelectedProductKey)?.name ?? "Product"} →`}
                  ctaHref={productByKey.get(mobileSelectedProductKey)?.href ?? "/"}
                  onBack={() => setMobileSelectedProductKey(null)}
                />
              ) : (
                <div className="space-y-2">
                  {products.map((p) => (
                    <button
                      key={p.key}
                      className="w-full text-left rounded-2xl border border-black/10 bg-white/70 p-4"
                      onClick={() => setMobileSelectedProductKey(p.key)}
                    >
                      <div className="text-[14px] text-black font-light">{p.name}</div>
                      <div className="text-[12px] text-black/60 mt-1 line-clamp-2 font-light">{p.overview}</div>
                    </button>
                  ))}
                  <Link className="block text-[13px] text-black/70 pt-3 font-light" href="/platform">
                    Explore the platform →
                  </Link>
                </div>
              )
            ) : mobileSelectedSolutionKey ? (
              <MobileSolutionDetail
                solution={solutions.find((s) => s.key === mobileSelectedSolutionKey)!}
                productByKey={productByKey}
                onBack={() => setMobileSelectedSolutionKey(null)}
              />
            ) : (
              <div className="space-y-2">
                {solutions.map((s) => (
                  <button
                    key={s.key}
                    className="w-full text-left rounded-2xl border border-black/10 bg-white/70 p-4"
                    onClick={() => setMobileSelectedSolutionKey(s.key)}
                  >
                    <div className="text-[14px] text-black font-light">{s.name}</div>
                    <div className="text-[12px] text-black/60 mt-1 line-clamp-2 font-light">{s.headline}</div>
                  </button>
                ))}
                <Link className="block text-[13px] text-black/70 pt-3 font-light" href="/solutions">
                  Explore all solutions →
                </Link>
              </div>
            )}
          </div>

          <div className="px-4 py-4 border-t border-black/10 grid grid-cols-2 gap-3">
            <a
              href="https://one.calistoco.com/"
              className="inline-flex justify-center items-center rounded-full px-4 py-3 text-[14px] border border-black/10 font-light shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              style={{ background: PINK, color: "#000" }}
            >
              Log In
            </a>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center rounded-full border border-black/10 px-4 py-3 text-[14px] font-light"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/** Floating glass panel with subtle motion */
function FloatingPanel({
  children,
  menuRef,
  widthClass,
  panelVisible,
  cancelClose,
  scheduleClose,
}: {
  children: React.ReactNode;
  menuRef: React.RefObject<HTMLDivElement>;
  widthClass: string;
  panelVisible: boolean;
  cancelClose: () => void;
  scheduleClose: () => void;
}) {
  return (
    <div className="absolute inset-x-0 top-16" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
      <div className={`mx-auto ${widthClass} px-4`}>
        <div
          ref={menuRef}
          className={[
            "rounded-[28px] border border-black/10 bg-white/70 backdrop-blur-2xl",
            "shadow-[0_30px_90px_rgba(0,0,0,0.12)] overflow-hidden",
            "transition duration-200 ease-out",
            panelVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
          ].join(" ")}
        >
          {/* top micro highlight */}
          <div className="pointer-events-none h-[1px] bg-white/70" />
          {children}
        </div>
        <div className="h-3" />
      </div>
    </div>
  );
}

/** Top nav button */
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
      onFocus={onOpen}
      className="text-[14px] text-black/70 hover:text-black transition inline-flex items-center gap-2 font-light"
      aria-expanded={open}
    >
      {label}
      <span className="text-black/30">▾</span>
    </button>
  );
}

function MenuCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-black/10 bg-white/70 p-5 hover:border-black/20 transition"
    >
      <div className="text-[14px] text-black mb-1 font-light">{title}</div>
      <div className="text-[12px] text-black/60 leading-5 font-light">{description}</div>
      <div className="mt-3 text-[12px] text-black/45 group-hover:text-black/60 transition font-light">
        Explore →
      </div>
    </Link>
  );
}

function MobileDetail({
  title,
  subtitle,
  bullets,
  ctaLabel,
  ctaHref,
  onBack,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  onBack: () => void;
}) {
  return (
    <div className="font-light">
      <button className="text-[13px] text-black/70 mb-4" onClick={onBack}>
        ← Back
      </button>
      <div className="text-[18px] text-black mb-2">{title}</div>
      <div className="text-[13px] text-black/65 leading-6 mb-5">{subtitle}</div>

      <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
        Capabilities
      </div>
      <ul className="space-y-2 text-[13px] text-black/75 mb-6">
        {bullets.slice(0, 10).map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="text-black/30 mt-[2px]">▢</span>
            <span className="leading-5">{b}</span>
          </li>
        ))}
      </ul>

      <Link href={ctaHref} className="inline-flex items-center gap-2 text-[14px]" style={{ color: PINK }}>
        {ctaLabel}
      </Link>
    </div>
  );
}

function MobileSolutionDetail({
  solution,
  productByKey,
  onBack,
}: {
  solution: Solution;
  productByKey: Map<string, Product>;
  onBack: () => void;
}) {
  return (
    <div className="font-light">
      <button className="text-[13px] text-black/70 mb-4" onClick={onBack}>
        ← Back
      </button>

      <div className="text-[18px] text-black mb-2">{solution.name}</div>
      <div className="text-[13px] text-black/65 leading-6 mb-5">{solution.summary}</div>

      <div className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-3 font-extralight">
        Recommended products
      </div>
      <div className="space-y-2 mb-6">
        {solution.recommended.map((r) => {
          const p = productByKey.get(r.productKey);
          if (!p) return null;
          return (
            <Link key={p.key} href={p.href} className="block rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-[14px] text-black">{p.name}</div>
              <div className="text-[12px] text-black/60 mt-1 leading-5">{r.why}</div>
            </Link>
          );
        })}
      </div>

      <Link href={solution.href} className="inline-flex items-center gap-2 text-[14px]" style={{ color: PINK }}>
        Explore {solution.name} →
      </Link>
    </div>
  );
}
