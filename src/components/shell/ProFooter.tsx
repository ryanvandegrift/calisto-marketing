import Link from "next/link";

export default function ProFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="cal-main-inner">
        <div className="py-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="h-8 w-8 rounded-full border border-black/15" aria-hidden="true" />
              <span className="text-sm tracking-wide text-black/70">CALISTO PRO</span>
            </Link>

            <div className="flex items-center gap-4">
              <a className="text-sm text-black/70 hover:text-black" href="#" aria-label="Instagram">
                Instagram
              </a>
              <a className="text-sm text-black/70 hover:text-black" href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:text-right">
            <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
              <Link className="text-sm hover:underline" href="/pricing">Pricing</Link>
              <Link className="text-sm hover:underline" href="/resources">Resources</Link>
              <Link className="text-sm hover:underline" href="/contact">Contact</Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
              <Link className="text-sm hover:underline" href="/terms">Terms</Link>
              <Link className="text-sm hover:underline" href="/privacy">Privacy</Link>
              <Link className="text-sm hover:underline" href="/cookies">Cookies</Link>
            </div>

            <div className="text-sm text-black/60">
              Copyright © {year} Calisto LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
