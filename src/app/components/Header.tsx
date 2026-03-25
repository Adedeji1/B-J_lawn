// 

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

// ─── Design tokens ─────────────────────────────────────────────────────────────
// Single source of truth. Move these to tailwind.config.js / CSS variables
// once you're ready for a full token system.
const C = {
  primary:      "#1C4A1F", // Forest  — brand primary, text on light
  primaryHover: "#3A7D44", // Meadow  — hover / active state
  accent:       "#F5A623", // Sunshine — CTA background
  accentHover:  "#E8961A", // Sunshine dark — CTA hover
  accentText:   "#1A1A18", // Bark    — text ON accent (passes 7:1 contrast)
  navDefault:   "#4A5C4D", // Muted green — nav link default
  bg:           "#F7F4EE", // Linen   — page / header background
  chipBg:       "#E3E8E0", // Soft green chip — mobile phone button
} as const;
// ──────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { name: "Services",      href: "#services" },
  { name: "About",         href: "#about"    },
  { name: "Service Areas", href: "#areas"    },
  { name: "Contact",       href: "#contact"  },
] as const;

export function Header() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // ── Scroll state ──
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    // passive: true prevents scroll-blocking, eliminates Chrome warning
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close menu on outside click ──
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [mobileMenuOpen]);

  // ── Close menu on Escape ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/*
        Skip-to-content — invisible until focused.
        Screen readers and keyboard users land here first.
        Requires id="main-content" on your <main> element.
      */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold focus:shadow-lg"
        style={{ background: C.accent, color: C.accentText }}
      >
        Skip to main content
      </a>

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/96 backdrop-blur-md py-3 border-gray-200/60 shadow-sm"
            : "py-5 border-transparent"
        }`}
        style={!isScrolled ? { background: `${C.bg}CC` } : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <a
              href="#"
              aria-label="Bay & Jay Lawncare — back to top"
              className="flex-shrink-0 flex gap-6 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ "--tw-ring-color": C.primary } as React.CSSProperties}
            >
              <img
                src={logo}
                alt="Bay & Jay Lawncare"
                className="h-11 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-[#1B4332] tracking-tight font-serif">
                Bay & Jay
              </span>

            </a>

            {/* ── Desktop nav ── */}
            <nav
              className="hidden lg:flex items-center gap-10"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* ── Desktop actions ── */}
            <div className="hidden lg:flex items-center gap-6">
              <PhoneLink />

              <a
                href="#estimate"
                className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: C.accent,
                  color: C.accentText,
                  "--tw-ring-color": C.primary,
                } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.accentHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.accent)}
              >
                Get Free Estimate
              </a>
            </div>

            {/* ── Mobile: call chip + burger ── */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:+17274814770"
                aria-label="Call (727) 481-4770"
                className="p-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                style={{
                  color: C.primary,
                  background: C.chipBg,
                  "--tw-ring-color": C.primary,
                } as React.CSSProperties}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>

              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="p-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                style={{
                  color: C.primary,
                  "--tw-ring-color": C.primary,
                } as React.CSSProperties}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen
                  ? <X    className="w-6 h-6" aria-hidden="true" />
                  : <Menu className="w-6 h-6" aria-hidden="true" />
                }
              </button>
            </div>

          </div>
        </div>

        {/*
          ── Mobile menu ──
          Uses max-height + opacity CSS transition — no Tailwind plugin needed.
          tabIndex is managed so hidden links are skipped by keyboard.
        */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="false"
          aria-label="Mobile navigation"
          aria-hidden={!mobileMenuOpen}
          className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: mobileMenuOpen ? "520px" : "0px", opacity: mobileMenuOpen ? 1 : 0 }}
        >
          <div className="bg-white border-t border-gray-100 shadow-xl px-6 pt-4 pb-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="py-3.5 border-b border-gray-100 text-base font-semibold transition-colors"
                style={{ color: C.primary }}
              >
                {link.name}
              </a>
            ))}

            {/* Primary CTA */}
            <a
              href="#estimate"
              onClick={closeMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="mt-5 w-full text-center py-4 rounded-full font-bold text-base transition-colors"
              style={{ background: C.accent, color: C.accentText }}
            >
              Get Free Estimate
            </a>

            {/* Secondary: call */}
            <a
              href="tel:+17274814770"
              onClick={closeMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm border transition-colors"
              style={{ color: C.primary, borderColor: C.primary }}
            >
              <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              (727) 481-4770
            </a>
          </div>
        </div>

      </header>
    </>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-semibold tracking-wide transition-colors duration-150 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
      style={{
        color: C.navDefault,
        "--tw-ring-color": C.primary,
      } as React.CSSProperties}
      onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
      onMouseLeave={(e) => (e.currentTarget.style.color = C.navDefault)}
    >
      {children}
    </a>
  );
}

function PhoneLink() {
  return (
    <a
      href="tel:+17274814770"
      aria-label="Call us at (727) 481-4770"
      className="flex items-center gap-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 rounded-sm"
      style={{
        color: C.primary,
        "--tw-ring-color": C.primary,
      } as React.CSSProperties}
      onMouseEnter={(e) => (e.currentTarget.style.color = C.primaryHover)}
      onMouseLeave={(e) => (e.currentTarget.style.color = C.primary)}
    >
      <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span>(727) 481-4770</span>
    </a>
  );
}