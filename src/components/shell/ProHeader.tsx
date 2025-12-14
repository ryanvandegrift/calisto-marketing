"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProHeader() {
  const [open, setOpen] = useState<null | "products" | "solutions">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/10">
      <div className="cal-main-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
  <img
    src="https://calistomedia.blob.core.windows.net/calisto-one/calisto_logo_300.png"
    alt="Calisto"
    className="h-8 w-auto"
  />
  <span className="text-sm tracking-wide text-black/100">Calisto Pro</span>
</Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setOpen("products")}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="text-sm text-black/75 hover:text-black transition inline-flex items-center gap-1">
                Products <span className="text-black/40">▾</span>
              </button>

              {open === "products" && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[720px] rounded-2xl border border-black/10 bg-white shadow-lg">
                    <div className="px-6 py-5">
                      <div className="text-xs uppercase tracking-wide text-black/40 mb-4">
                        Products
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <NavCard href="/access" title="Calisto Access" />
                        <NavCard href="/assure" title="Calisto Assure" />
                        <NavCard href="/deals" title="Calisto Deals" />
                        <NavCard href="/navigator" title="Calisto Navigator" />
                        <NavCard href="/ops" title="Calisto Ops" />
                        <NavCard href="/purview" title="Calisto Purview" />
                        <NavCard href="/sign" title="Calisto Sign" />
                        <NavCard href="/signal" title="Calisto Signal" />
                        <NavCard href="/sync" title="Calisto Sync" />
                        <NavCard href="/24-7" title="Calisto 24·7" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpen("solutions")}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="text-sm text-black/75 hover:text-black transition inline-flex items-center gap-1">
                Solutions <span className="text-black/40">▾</span>
              </button>

              {open === "solutions" && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[520px] rounded-2xl border border-black/10 bg-white shadow-lg">
                    <div className="px-6 py-5">
                      <div className="text-xs uppercase tracking-wide text-black/40 mb-4">
                        Solutions
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <NavRow href="/solutions/second-home-owners" title="Second Home Owners" />
                        <NavRow href="/solutions/property-managers" title="Property Managers" />
                        <NavRow href="/solutions/real-estate-agents" title="Real Estate Agents" />
                        <NavRow href="/solutions/managing-brokers" title="Managing Brokers" />
                        <NavRow href="/solutions/hotel-operators" title="Hotel Operators" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link className="text-sm text-black/75 hover:text-black transition" href="/pricing">
              Pricing
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-sm hover:border-black/30 transition"
            >
              Talk to our team
            </Link>

            <button
              className="md:hidden inline-flex items-center rounded-full border border-black/15 px-3 py-2 text-sm"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-black/10 bg-white p-3">
              <div className="space-y-2">
                <div className="text-sm font-medium px-2 pt-2">Products</div>
                <div className="grid grid-cols-2 gap-1">
                  <MobileLink href="/access" label="Access" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/assure" label="Assure" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/deals" label="Deals" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/navigator" label="Navigator" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/ops" label="Ops" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/purview" label="Purview" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/sign" label="Sign" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/signal" label="Signal" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/sync" label="Sync" onClick={() => setMobileOpen(false)} />
                  <MobileLink href="/24-7" label="24·7" onClick={() => setMobileOpen(false)} />
                </div>

                <div className="text-sm font-medium px-2 pt-3">More</div>
                <MobileLink href="/pricing" label="Pricing" onClick={() => setMobileOpen(false)} />
                <MobileLink href="/contact" label="Contact" onClick={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavCard({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="block rounded-2xl p-4 hover:bg-black/5 transition">
      <div className="text-sm">{title}</div>
    </Link>
  );
}

function NavRow({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="block rounded-xl px-3 py-2 hover:bg-black/5 transition text-sm">
      {title}
    </Link>
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
      className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5"
    >
      {label}
    </Link>
  );
}
