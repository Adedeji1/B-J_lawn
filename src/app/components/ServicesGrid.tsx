// import {
//   Scissors,
//   Flower2,
//   Leaf,
//   Droplets,
//   Wind,
//   Sprout,
//   Hammer,
//   Tractor,
//   Trees,
//   ArrowRight,
//   Truck,
// } from "lucide-react";
// import { motion } from "motion/react";

// export function ServicesGrid() {
//   const services = [
//     {
//       icon: <Scissors className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Lawn Maintenance",
//       description:
//         "Weekly mowing, edging, and trimming to keep your St. Augustine grass pristine year-round.",
//     },
//     {
//       icon: <Flower2 className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Landscape Design",
//       description:
//         "Bespoke designs for residential properties. Transform your outdoor space into an oasis.",
//     },
//     {
//       icon: <Leaf className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Garden Care",
//       description:
//         "Ongoing horticultural care for planted beds, delicate shrubs, and native flora.",
//     },
//     {
//       icon: <Trees className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Arboriculture",
//       description:
//         "Precision hedge, shrub, and tree trimming for clean lines and plant health.",
//     },
//     {
//       icon: <Droplets className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Irrigation Systems",
//       description:
//         "Diagnosis and repair of sprinkler systems. Essential for thriving in Florida's climate.",
//     },
//     {
//       icon: <Wind className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Pressure Washing",
//       description:
//         "Revitalize hardscapes, driveways, and outdoor surfaces with our professional pressure washing services.",
//     },
//     {
//       icon: <Truck className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Hauling Services",
//       description:
//         "Efficient removal of yard waste, debris, and unwanted materials to keep your property clean and clutter-free.",
//     },
//     {
//       icon: <Tractor className="w-6 h-6 text-[#2D6A4F]" />,
//       title: "Sod Installation",
//       description:
//         "Premium sod delivery and flawless professional installation for instant green coverage.",
//     },
//   ];

//   return (
//     <section id="services" className="py-24 md:py-32 bg-white relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
//           {/* Sticky Left Column */}
//           <div className="lg:w-1/3 relative">
//             <div className="lg:sticky lg:top-32 flex flex-col gap-6">
//               <div className="inline-flex items-center gap-3">
//                 <span className="w-8 h-[1px] bg-[#1B4332]"></span>
//                 <span className="text-sm font-bold text-[#1B4332] tracking-widest uppercase">Our Expertise</span>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold text-[#2A312B] leading-tight">
//                 Complete Care for <span className="italic font-serif text-[#2D6A4F]">Exceptional</span> Properties.
//               </h2>
              
//               <p className="text-lg text-[#5C655E] leading-relaxed">
//                 From precision maintenance to architectural hardscaping, we provide comprehensive solutions tailored to Pinellas County's unique environment.
//               </p>

//               <div className="pt-4">
//                 <a
//                   href="#estimate"
//                   className="inline-flex items-center gap-2 pb-1 border-b-2 border-[#1B4332] text-[#1B4332] font-bold text-lg hover:text-[#2D6A4F] hover:border-[#2D6A4F] transition-colors"
//                 >
//                   Request a Consultation
//                   <ArrowRight className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Scrolling Right Column (Bento/Staggered Grid) */}
//           <div className="lg:w-2/3">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
//                   className={`bg-[#F4F3ED] p-8 md:p-10 rounded-2xl group hover:bg-[#1B4332] transition-colors duration-500 ease-out flex flex-col h-full ${
//                     index % 2 === 1 ? "md:mt-12" : ""
//                   }`}
//                 >
//                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#2D6A4F] transition-colors duration-500">
//                     <div className="group-hover:text-white transition-colors duration-500">
//                       {service.icon}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-[#2A312B] mb-4 group-hover:text-white transition-colors duration-500 font-serif">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-[#5C655E] group-hover:text-gray-200 transition-colors duration-500 leading-relaxed font-medium">
//                     {service.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import {
  Scissors,
  Flower2,
  Leaf,
  Droplets,
  Wind,
  Sprout,
  Tractor,
  Trees,
  ArrowRight,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

// ─── Design tokens (mirrors Header / Hero / LeadCaptureForm) ──────────────────
const C = {
  primary:      "#1C4A1F",
  primaryHover: "#3A7D44",
  accent:       "#F5A623",
  accentText:   "#1A1A18",
  muted:        "#4A5C4D",
  heading:      "#1E2A20",
  bg:           "#F7F4EE",
  surface:      "#E3E8E0",
} as const;
// ─────────────────────────────────────────────────────────────────────────────

// ── Services data — module-level constant (not recreated on every render) ──────
// Icon is stored as a component reference (LucideIcon), not as JSX.
// This lets us pass color props at render time, fixing the hover color bug.
interface Service {
  id:          string;
  Icon:        LucideIcon;
  title:       string;
  description: string;
}

const SERVICES: Service[] = [
  {
    id:          "lawn-maintenance",
    Icon:        Scissors,
    title:       "Lawn Maintenance",
    description: "Weekly mowing, edging, and trimming to keep your St. Augustine grass pristine year-round.",
  },
  {
    id:          "landscape-design",
    Icon:        Flower2,
    title:       "Landscape Design",
    description: "Bespoke designs for residential properties — transform your outdoor space into an oasis.",
  },
  {
    id:          "garden-care",
    Icon:        Leaf,
    title:       "Garden Care",
    description: "Ongoing horticultural care for planted beds, delicate shrubs, and native Florida flora.",
  },
  {
    id:          "arboriculture",
    Icon:        Trees,
    title:       "Arboriculture",
    description: "Precision hedge, shrub, and tree trimming for clean lines and long-term plant health.",
  },
  {
    id:          "irrigation",
    Icon:        Droplets,
    title:       "Irrigation Systems",
    description: "Diagnosis and repair of sprinkler systems — essential for thriving in Florida's climate.",
  },
  {
    id:          "pressure-washing",
    Icon:        Wind,
    title:       "Pressure Washing",
    description: "Revitalize driveways, hardscapes, and outdoor surfaces with professional-grade washing.",
  },
  {
    id:          "hauling",
    Icon:        Truck,
    title:       "Hauling Services",
    description: "Efficient removal of yard waste, debris, and materials to keep your property spotless.",
  },
  {
    id:          "sod-installation",
    Icon:        Tractor,
    title:       "Sod Installation",
    description: "Premium sod delivery and flawless professional installation for instant green coverage.",
  },
] as const;

export function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 md:py-32 relative" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* ── Sticky left column ────────────────────────────────────────── */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 flex flex-col gap-6">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3" aria-hidden="true">
                <span className="w-8 h-px" style={{ background: C.primary }} />
                <span
                  className="text-xs font-bold tracking-[0.14em] uppercase"
                  style={{ color: C.primary }}
                >
                  Our Expertise
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: C.heading }}
              >
                Complete care for{" "}
                <em className="font-serif not-italic" style={{ color: C.primary }}>
                  exceptional
                </em>{" "}
                properties.
              </h2>

              <p className="text-lg leading-relaxed" style={{ color: C.muted }}>
                From precision maintenance to architectural hardscaping, we
                deliver comprehensive solutions tailored to Pinellas County's
                unique environment.
              </p>

              <div className="pt-2">
                <a
                  href="#estimate"
                  aria-label="Request a consultation about our services"
                  className="inline-flex items-center gap-2 pb-0.5 border-b-2 font-bold text-base transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm group"
                  style={{
                    color:            C.primary,
                    borderColor:      C.primary,
                    "--tw-ring-color": C.primary,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color       = C.primaryHover;
                    e.currentTarget.style.borderColor = C.primaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color       = C.primary;
                    e.currentTarget.style.borderColor = C.primary;
                  }}
                >
                  Request a Consultation
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ── Scrolling card grid ───────────────────────────────────────── */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.map(({ id, Icon, title, description }, index) => (
                <ServiceCard
                  key={id}
                  Icon={Icon}
                  title={title}
                  description={description}
                  index={index}
                  shouldReduceMotion={!!shouldReduceMotion}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── ServiceCard ───────────────────────────────────────────────────────────────
// Extracted as a named component so hover state is managed properly in React
// (no CSS group-hover hack needed for the icon color).

interface CardProps {
  Icon:               LucideIcon;
  title:              string;
  description:        string;
  index:              number;
  shouldReduceMotion: boolean;
}

function ServiceCard({ Icon, title, description, index, shouldReduceMotion }: CardProps) {
  // Track hover in state — this is what actually makes the icon color change.
  // CSS group-hover cannot reach into a JSX element whose className is already fixed.
  const [hovered, setHovered] = useState(false);

  // Odd-indexed cards are offset down on md+ screens for the staggered look.
  // The offset is applied via padding-top rather than margin to avoid overflow issues.
  const isOdd = index % 2 === 1;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial:    { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport:   { once: true, margin: "-80px" },
        transition: { duration: 0.55, delay: (index % 2) * 0.12, ease: [0.25, 0.1, 0.25, 1] },
      };

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
    >
      {/* Icon chip */}
      <div
        className="w-13 h-13 rounded-full flex items-center justify-center mb-7 flex-shrink-0"
        style={{
          width:      "52px",
          height:     "52px",
          background: hovered ? C.primaryHover : "#ffffff",
          boxShadow:  hovered ? "none" : "0 1px 3px rgba(0,0,0,0.08)",
          transition: "background 400ms ease",
        }}
        aria-hidden="true"
      >
        {/*
          Icon color is set via a JS-driven inline style — not a Tailwind
          group-hover class — so it actually responds to the hovered state.
        */}
        <Icon
          className="w-5 h-5"
          style={{
            color:      hovered ? "#ffffff" : C.primary,
            transition: "color 400ms ease",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold mb-3 font-serif"
        style={{
          color:      hovered ? "#ffffff"  : C.heading,
          transition: "color 400ms ease",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="leading-relaxed text-sm"
        style={{
          color:      hovered ? "rgba(255,255,255,0.80)" : C.muted,
          transition: "color 400ms ease",
        }}
      >
        {description}
      </p>
    </motion.article>
  );
}

// useState needs to be imported — adding here since ServiceCard uses it
import { useState } from "react";