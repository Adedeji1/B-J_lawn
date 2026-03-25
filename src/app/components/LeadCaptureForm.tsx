import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Banknote,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {Input} from "../components/ui/input";



// ─── Design tokens (mirrors Header.tsx / Hero.tsx) ────────────────────────────
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
  inputBg:      "#F7F4EE",
  inputBorder:  "#D1D8CE",
  inputFocus:   "#1C4A1F",
} as const;
// ─────────────────────────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    body: "Comprehensive coverage for your complete peace of mind.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    body: "Detailed estimates with absolutely no hidden fees.",
  },
  {
    icon: CalendarCheck,
    title: "Fast Scheduling",
    body: "Most consultations booked within 48 hours of your request.",
  },
] as const;

const SERVICES = [
  "Lawn Maintenance",
  "Landscape Design",
  "Property Cleanup",
  "Irrigation Repair",
  "Hardscaping",
  "Sod Installation",
] as const;

export function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduceMotion            = useReducedMotion();

  // ── Focus management ───────
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const firstInputRef     = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      successHeadingRef.current?.focus({ preventScroll: true });
    } else {
      firstInputRef.current?.focus({ preventScroll: true });
    }
  }, [isSubmitted]);

  // FOrm Management
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    notes: "",
    company: "",
  });

  const sanitize = (value: string) =>
    value.replace(/[<>]/g, "").trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: sanitize(value),
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.company) return;

    if (!formData.fullName) return alert("Full name required");
    if (!formData.email.includes("@")) return alert("Invalid email");

    setIsSubmitted(true);
  };


  return (
    <section
      id="estimate"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <svg
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none hidden md:block"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          d="M200 0 L200 200 L0 200 Q100 200 100 100 Q100 0 200 0Z"
          fill={C.bg}
          opacity="0.55"
        />
      </svg>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isSubmitted ? "Your consultation request has been received. We will contact you shortly." : ""}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left: copy + trust items ──────────────────────────────────── */}
          <div className="w-full lg:w-1/2 lg:pt-4">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px" style={{ background: C.primary }} aria-hidden="true" />
              <span
                className="text-xs font-bold tracking-[0.14em] uppercase"
                style={{ color: C.primary }}
              >
                Take The Next Step
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-5 font-serif"
              style={{ color: C.heading }}
            >
              Let's build something{" "}
              <em className="not-italic" style={{ color: C.primary }}>
                beautiful.
              </em>
            </h2>

            <p
              className="text-lg font-medium leading-relaxed mb-10"
              style={{ color: C.muted }}
            >
              Request a complimentary, no-obligation consultation with our
              landscaping experts. We'll assess your property and provide a
              tailored plan to bring your vision to life.
            </p>

            <div className="flex flex-col gap-7">
              {TRUST_ITEMS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: C.surface }}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" style={{ color: C.primary }} />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-base mb-0.5"
                      style={{ color: C.heading }}
                    >
                      {title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form card ─────────────────────────────────────────── */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] 
              }}
              className="rounded-3xl overflow-hidden"
              style={{
                background:  "#ffffff",
                border:      "1px solid #E8EBE6",
                boxShadow:   `0 20px 60px -12px ${C.primary}18, 0 4px 16px -4px ${C.primary}0C`,
              }}
            >
              <div className="p-8 md:p-10">
                {isSubmitted ? (
                  // ── Success state ──────────────────────────────────────────
                  <div className="text-center py-10 flex flex-col items-center">
                    <div
                      className="p-5 rounded-full mb-6"
                      style={{ background: C.surface }}
                      aria-hidden="true"
                    >
                      <CheckCircle2
                        className="w-14 h-14"
                        style={{ color: C.primary }}
                      />
                    </div>

                    {/*
                      tabIndex={-1} so useEffect can programmatically focus this
                      element. The -1 means it won't appear in the natural tab
                      order — only reachable via JS .focus().
                    */}
                    <h3
                      ref={successHeadingRef}
                      tabIndex={-1}
                      className="text-3xl font-bold mb-4 font-serif outline-none"
                      style={{ color: C.heading }}
                    >
                      Request Received
                    </h3>

                    <p
                      className="text-base leading-relaxed mb-8 max-w-sm mx-auto"
                      style={{ color: C.muted }}
                    >
                      Thank you for reaching out. A member of our team will
                      contact you within 24 hours to schedule your consultation.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-sm font-bold pb-0.5 transition-colors border-b-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{
                        color: C.primary,
                        "--tw-ring-color": C.primary,
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color       = C.primaryHover;
                        e.currentTarget.style.borderColor = C.primaryHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color       = C.primary;
                        e.currentTarget.style.borderColor = "transparent";
                      }}
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  // ── Form ──────────────────────────────────────────────────
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                    {/* Full name */}
                    <Field label="Full Name" htmlFor="fullName" required>
                      <input
                        ref={firstInputRef}
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        className="field-input"
                      />
                    </Field>

                    {/* Email + Phone — side by side on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Email Address" htmlFor="email" required>
                        <input
                          ref={firstInputRef}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="jane@smith.com"
                          className="field-input"
                        />
                      </Field>

                      <Field label="Phone Number" htmlFor="phone" required>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          aria-required="true"
                          autoComplete="tel"
                          placeholder="(727) 555-0100"
                          className="field-input"
                        />
                      </Field>
                    </div>

                    {/* Property address */}
                    <Field
                      label="Property Address"
                      htmlFor="address"
                      required
                      hint="We use this to assess your property size and service area."
                    >
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        aria-required="true"
                        autoComplete="street-address"
                        placeholder="123 Bayshore Blvd, Clearwater, FL"
                        className="field-input"
                      />
                    </Field>

                    {/* Service */}
                    <Field label="Primary Service Needed" htmlFor="service">
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          autoComplete="off"
                          className="field-input appearance-none pr-10 cursor-pointer"
                        >
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {/* Chevron — decorative */}
                        <svg
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          style={{ color: C.heading }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Field>

                    {/* Notes */}
                    <Field
                      label="Tell us about your project"
                      htmlFor="notes"
                      hint="Optional — any details help us prepare a better estimate."
                    >
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="e.g. Overgrown backyard, need weekly maintenance, interested in adding a garden bed..."
                        className="field-input resize-none"
                      />
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group w-full min-h-[56px] py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2.5 mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{
                        background:       C.accent,
                        color:            C.accentText,
                        "--tw-ring-color": C.primary,
                      } as React.CSSProperties}
                      onMouseEnter={(e) => (e.currentTarget.style.background = C.accentHover)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = C.accent)}
                    >
                      Request Free Consultation
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>

                    <p
                      className="text-center text-xs mt-1"
                      style={{ color: C.muted }}
                    >
                      Your information is never shared or sold. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Field styles injected once ───────────────────────────────────────── */}
      <style>{`
        .field-input {
          width: 100%;
          padding: 0.875rem 1.125rem;
          border-radius: 0.75rem;
          border: 1px solid ${C.inputBorder};
          background: ${C.inputBg};
          color: ${C.heading};
          font-size: 0.9375rem;
          transition: border-color 150ms, box-shadow 150ms;
          outline: none;
        }
        .field-input::placeholder {
          color: #9BA89E;
        }
        .field-input:hover {
          border-color: #A8B8A5;
        }
        .field-input:focus {
          border-color: ${C.inputFocus};
          box-shadow: 0 0 0 3px ${C.inputFocus}1A;
        }
      `}</style>
    </section>
  );
}

// ─── Field wrapper ─────────────────────────────────────────────────────────────
// Keeps label + hint + input consistently composed.
// `required` renders the visual asterisk AND links aria-describedby.

interface FieldProps {
  label:    string;
  htmlFor:  string;
  required?: boolean;
  hint?:     string;
  children:  React.ReactNode;
}

// function Field({ label, htmlFor, required, hint, children }: FieldProps) {
//   const hintId = hint ? `${htmlFor}-hint` : undefined;

//   return (
//     <div className="flex flex-col gap-1.5">
//       <label
//         htmlFor={htmlFor}
//         className="text-sm font-semibold"
//         style={{ color: C.heading }}
//       >
//         {label}
//         {required && (
//           <span
//             aria-hidden="true"   /* sr reads aria-required on the input instead */
//             className="ml-1 font-bold"
//             style={{ color: C.primary }}
//           >
//             *
//           </span>
//         )}
//       </label>

//       {hint && (
//         <p
//           id={hintId}
//           className="text-xs leading-snug -mt-0.5"
//           style={{ color: C.muted }}
//         >
//           {hint}
//         </p>
//       )}

//       {/*
//         Clone the child to inject aria-describedby when a hint exists.
//         This links the hint text to the input in the accessibility tree.
//       */}
//       {/* {hint
//         ? cloneWithProp(children, { "aria-describedby": hintId })
//         : children
//       } */}
//     </div>
//   );
// }
function Field({ label, htmlFor, required, hint, children }: FieldProps) {
  const hintId = hint ? `${htmlFor}-hint` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-semibold"
        style={{ color: C.heading }}
      >
        {label}
        {required && (
          <span className="ml-1 font-bold" style={{ color: C.primary }}>
            *
          </span>
        )}
      </label>

      {hint && (
        <p id={hintId} className="text-xs" style={{ color: C.muted }}>
          {hint}
        </p>
      )}

      {children}
    </div>
  );
}
function cloneWithProp(children: React.ReactNode, props: Record<string, string>) {
  const child = children as React.ReactElement<Record<string, unknown>>;
  // If the child is a <div> wrapper (select), drill into it
  if (child.type === "div") {
    const inner = child.props.children as React.ReactElement<Record<string, unknown>>;
    return {
      ...child,
      props: {
        ...child.props,
        children: { ...inner, props: { ...inner.props, ...props } },
      },
    };
  }
  return { ...child, props: { ...child.props, ...props } };
}