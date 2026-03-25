import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Shield, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Variants } from "framer-motion";
import heroImage from "../../assets/2b431874b5968ba5e04535305a0494f77e716c2f.png";
import Img1 from "../../assets/sample1.jpeg";
import Img2 from "../../assets/sample2.jpeg";
import Img3 from "../../assets/sample3.jpeg";

// ─── Design tokens (mirrors Header.tsx) ───────────────────────────────────────
const C = {
  primary:      "#1C4A1F",
  primaryHover: "#3A7D44",
  accent:       "#F5A623",
  accentHover:  "#E8961A",
  accentText:   "#1A1A18",
  muted:        "#4A5C4D",
  heading:      "#1E2A20",
  bg:           "#F7F4EE",
  surface:      "#E3E8E0",
} as const;
// ─────────────────────────────────────────────────────────────────────────────

const SLIDES = [
  { src: heroImage, alt: "Manicured lawn and landscape design in Pinellas County" },
  { src: Img1,      alt: "Professional lawn care service — trimmed hedges and edging" },
  { src: Img2,      alt: "Residential landscaping project completed by Bay & Jay" },
  { src: Img3,      alt: "Garden maintenance and seasonal planting by Bay & Jay Lawncare" },
] as const;

const SLIDE_DURATION = 5000; // ms between auto-advances

export function Hero() {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [isPaused,  setIsPaused]    = useState(false);
  const intervalRef                 = useRef<ReturnType<typeof setInterval> | null>(null);
  const shouldReduceMotion          = useReducedMotion();

  //motion Fade in and Out for the hero section
  // ── Shared motion config (respects prefers-reduced-motion) ─
  const fadeIn = (delay: number): Variants => ({
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  });

  // ── Carousel logic ──────────────────────────────────────────────────────────
  const goTo = useCallback((idx: number) => {
    setActiveIdx((idx + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIdx + 1), [activeIdx, goTo]);
  const goPrev = useCallback(() => goTo(activeIdx - 1), [activeIdx, goTo]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, SLIDE_DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, goNext]);

  // ── Keyboard nav on the carousel ───────────────────────────────────────────
  const handleCarouselKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft")  goPrev();
  };

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden"
      style={{ background: C.bg }}
    >
      <svg
        className="absolute top-0 right-0 w-[520px] h-[520px] -translate-y-1/4 translate-x-1/4 pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="100" fill={C.surface} opacity="0.55" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Copy column ──────────────────────────────────────────────────── */}
          <motion.div
            variants={fadeIn(0)}
            initial="initial"
            animate="animate"
            className="w-full lg:w-1/2 flex flex-col items-start gap-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-px" style={{ background: C.primary }} />
              <span
                className="text-xs font-bold tracking-[0.14em] uppercase"
                style={{ color: C.primary }}
              >
                Licensed &amp; Insured · Pinellas County
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
              style={{ color: C.heading }}
            >
              Crafting{" "}
              <br />
              <em
                className="font-serif not-italic"
                style={{ color: C.primary }}
              >
                Pristine
              </em>{" "}
              <br />
              Landscapes.
            </h1>

            {/* Body */}
            <p
              className="text-lg md:text-xl font-medium leading-relaxed max-w-md"
              style={{ color: C.muted }}
            >
              Elevating outdoor spaces across Pinellas County — we blend
              architectural design with expert horticulture for 50+ properties.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
              {/* Primary — accent */}
              <a
                href="#estimate"
                className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full font-bold text-base overflow-hidden transition-all duration-200 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: C.accent,
                  color: C.accentText,
                  "--tw-ring-color": C.primary,
                } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.accentHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.accent)}
              >
                Start Your Project
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              {/* Secondary — ghost */}
              <a
                href="#gallery"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full font-semibold text-base border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  color: C.primary,
                  borderColor: `${C.primary}33`,
                  "--tw-ring-color": C.primary,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.primary;
                  e.currentTarget.style.background  = `${C.primary}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${C.primary}33`;
                  e.currentTarget.style.background  = "transparent";
                }}
              >
                View Portfolio
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { icon: <Shield className="w-4 h-4 flex-shrink-0" aria-hidden="true" />, label: "Fully insured" },
                { icon: <StarRow />, label: "5-star rated" },
                { icon: null, label: "50+ properties served" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  {icon && <span style={{ color: C.primary }}>{icon}</span>}
                  <span className="text-sm font-medium" style={{ color: C.muted }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Image carousel column ─────────────────────────────────────────── */}
          <motion.div
            {...fadeIn(0.2)}
            className="w-full lg:w-1/2 relative flex flex-col items-center gap-5"
          >
            {/* Main arch frame — carousel */}
            <div
              className="relative w-full max-w-md mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              role="region"
              aria-label="Project photo gallery"
              aria-roledescription="carousel"
              onKeyDown={handleCarouselKey}
              tabIndex={0}
            >
              {/* Arch shape */}
              <div className="relative aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl">
                {SLIDES.map(({ src, alt }, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={alt}
                    aria-hidden={idx !== activeIdx}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: idx === activeIdx ? 1 : 0 }}
                  />
                ))}

                {/* Subtle bottom scrim for floating card readability */}
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.38), transparent)" }}
                  aria-hidden="true"
                />

                {/* Prev / Next */}
                <button
                  onClick={goPrev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-opacity opacity-60 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-opacity opacity-60 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                >
                  <ChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
                </button>

                {/* Dot indicators */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
                  role="tablist"
                  aria-label="Select photo"
                >
                  {SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      role="tab"
                      aria-selected={idx === activeIdx}
                      aria-label={`Photo ${idx + 1} of ${SLIDES.length}`}
                      onClick={() => goTo(idx)}
                      className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
                      style={{
                        width:   idx === activeIdx ? "22px" : "7px",
                        height:  "7px",
                        background: idx === activeIdx ? "#ffffff" : "rgba(255,255,255,0.5)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative offset border */}
              <div
                className="absolute -top-4 -right-4 w-full aspect-[4/5] rounded-t-full rounded-b-2xl z-0 hidden md:block"
                style={{ border: `1.5px solid ${C.primary}28` }}
                aria-hidden="true"
              />
            </div>

            {/* ── Thumbnail strip ──────────────────────────────────────────── */}
            <div
              className="flex gap-3 w-full max-w-md px-1"
              role="group"
              aria-label="Jump to photo"
            >
              {SLIDES.map(({ src, alt }, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`View: ${alt}`}
                  aria-pressed={idx === activeIdx}
                  className="flex-1 aspect-square rounded-xl overflow-hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                  style={{
                    outline:    idx === activeIdx ? `2.5px solid ${C.primary}` : "2.5px solid transparent",
                    outlineOffset: "2px",
                    opacity:    idx === activeIdx ? 1 : 0.62,
                    "--tw-ring-color": C.primary,
                  } as React.CSSProperties}
                >
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* ── Floating trust card ──────────────────────────────────────── */}
            <motion.div
              {...(shouldReduceMotion ? {} : {
                initial:    { opacity: 0, x: 20 },
                animate:    { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] },
              })}
              className="absolute -bottom-4 -left-4 md:left-0 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl"
              style={{ border: "0.5px solid rgba(255,255,255,0.4)" }}
              aria-label="500 properties served in Pinellas County"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${C.primary}18` }}
                  aria-hidden="true"
                >
                  <Shield className="w-5 h-5" style={{ color: C.primary }} />
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: C.muted }}>
                    Pinellas County
                  </p>
                  <p className="text-lg font-bold leading-tight" style={{ color: C.primary }}>
                    50+ Properties
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Five filled star glyphs — lightweight SVG, no icon library needed. */
function StarRow() {
  return (
    <svg width="72" height="13" viewBox="0 0 72 13" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d="M6 0l1.546 3.236L11 3.76 8.5 6.168l.618 3.27L6 7.77l-3.118 1.668L3.5 6.168.999 3.759l3.455-.523z"
          transform={`translate(${i * 14.5}, 0)`}
          fill="#F5A623"
        />
      ))}
    </svg>
  );
}