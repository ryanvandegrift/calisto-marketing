import Link from "next/link";

const PINK_BG = "bg-[rgba(246,193,217,0.45)]";

export default function ProFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* Header-style divider */}
      <div className="h-px w-full bg-black/10" />

      <div className="cal-main-inner">
        <div className="py-14">
          <div className="grid gap-12 md:grid-cols-[1.1fr_2fr]">
            {/* LEFT: Brand / positioning */}
            <div className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-3">
                <img
                  src="https://calistomedia.blob.core.windows.net/calisto-one/calisto_logo_300.png"
                  alt="Calisto"
                  className="h-8 w-auto"
                />
                <div className="leading-tight">
                  <div className="text-[15px] font-medium tracking-[-0.01em] text-black">
                    Calisto &amp; Co.
                  </div>
                  <div className="text-[12px] tracking-[0.18em] text-black/60 uppercase">
                    Pro
                  </div>
                </div>
              </Link>

              <p className="text-[14px] font-light leading-relaxed text-black/70 max-w-[52ch]">
                Calisto Pro is the professional operations layer inside Calisto One—powered by CalistoOS.
                Built for property managers, hospitality operators, and real estate teams who need calm workflows
                and proof clients can trust.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://one.calistoco.com/"
                  className={[
                    "inline-flex items-center justify-center",
                    "h-9 px-4 rounded-[2px]",
                    "text-[14px] font-normal text-black",
                    "shadow-[0_6px_16px_rgba(0,0,0,0.10)]",
                    "hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition",
                    PINK_BG,
                  ].join(" ")}
                >
                  Sign in
                </a>

                <Link
                  href="/contact"
                  className={[
                    "inline-flex items-center justify-center",
                    "h-9 px-4 rounded-[2px]",
                    "text-[14px] font-normal text-black",
                    "shadow-[0_6px_16px_rgba(0,0,0,0.10)]",
                    "hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition",
                  ].join(" ")}
                >
                  Talk to our team
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-1">
                {["Instagram", "LinkedIn"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-[13px] font-light text-black/55 hover:text-black transition"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: Navigation */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <FooterCol
                title="Platform"
                links={[
                  { label: "Platform overview", href: "/platform" },
                  { label: "Compare products", href: "/platform/compare" },
                  { label: "Pricing", href: "/pricing" },
                ]}
              />

              {/* PRODUCTS */}
              <div className="lg:col-span-1 xl:col-span-2">
                <div className="text-[11px] tracking-[0.22em] text-black/45 mb-4">
                  PRODUCTS
                </div>

                <ul className="space-y-2 xl:grid xl:grid-cols-2 xl:gap-x-10 xl:gap-y-2 xl:space-y-0">
                  {[
                    ["Calisto Deals", "/deals"],
                    ["Calisto Sign", "/sign"],
                    ["Calisto Purview", "/purview"],
                    ["Calisto Ops", "/ops"],
                    ["Calisto Assure", "/assure"],
                    ["Calisto Sync", "/sync"],
                    ["Calisto Navigator", "/navigator"],
                    ["Calisto Access", "/access"],
                    ["Calisto Signal", "/signal"],
                    ["Calisto 24·7", "/24-7"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <FooterLink href={href} label={label} />
                    </li>
                  ))}
                </ul>
              </div>

              <FooterCol
                title="Solutions"
                links={[
                  { label: "All solutions", href: "/solutions" },
                  { label: "Hospitality operators", href: "/solutions/hospitality" },
                  { label: "Property managers", href: "/solutions/property-managers" },
                  { label: "Second-home owners", href: "/solutions/second-home-owners" },
                  { label: "Real estate agents", href: "/solutions/real-estate-agents" },
                  { label: "Managing brokers", href: "/solutions/managing-brokers" },
                ]}
              />

              <FooterCol
                title="Company"
                links={[
                  { label: "About", href: "/company" },
                  { label: "Founder", href: "/company/founder" },
                  { label: "Calisto One", href: "/calisto-one" },
                  { label: "Blog", href: "/blog" },
                  { label: "Resources", href: "/resources" },
                  { label: "Contact", href: "/contact" },
                ]}
              />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-black/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-[13px] font-light text-black/55">
              © {year} Calisto LLC. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <FooterLink href="/terms" label="Terms" />
              <FooterLink href="/privacy" label="Privacy" />
              <FooterLink href="/cookies" label="Cookies" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.22em] text-black/45 mb-4">
        {title.toUpperCase()}
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <FooterLink href={l.href} label={l.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center gap-2",
        "text-[13px] font-light text-black/70 hover:text-black transition",
        "rounded-[2px] px-2 py-1 -ml-2",
        "hover:bg-black/[0.03]",
      ].join(" ")}
    >
      <span>{label}</span>
      <span className="text-black/25" aria-hidden>
        →
      </span>
    </Link>
  );
}
