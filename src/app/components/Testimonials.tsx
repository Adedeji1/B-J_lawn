import { Star, UserCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Slider from "react-slick";

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
} as const;
// ─────────────────────────────────────────────────────────────────────────────

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria S.",
      location: "St. Petersburg",
      text: "Bay & Jay transformed our front yard completely. They are incredibly reliable and their attention to detail on our new sod installation was impressive. Highly recommend their services!",
    },
    {
      name: "David L.",
      location: "Commercial Property Manager, Largo",
      text: "We switched to Bay & Jay for our weekly landscaping maintenance six months ago. Our business park has never looked better, and their communication is top-notch.",
    },
    {
      name: "Jessica T.",
      location: "Clearwater",
      text: "After a major storm, they were out the very next day for property cleanup. Fast, professional, and very reasonably priced. I won't use anyone else for my lawn care.",
    },
    {
      name: "Robert M.",
      location: "Seminole",
      text: "The hardscaping team installed a beautiful paver patio in our backyard. The entire process was seamless from the free estimate to the final walkthrough. Five stars!",
    },
    {
      name: "Sarah W.",
      location: "Madeira Beach",
      text: "My St. Augustine grass was dying and full of weeds. Within two months of their weed control and maintenance plan, it's thick, green, and healthy again.",
    },
  ];

  const NextArrow = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className="absolute right-2 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-[#228B22] hover:text-white transition-all text-[#2C3E50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
      style={{ "--tw-ring-color": C.primary } as React.CSSProperties}
      aria-label="Next testimonial"
    >
      <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
    </button>
  );

  const PrevArrow = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className="absolute left-2 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-[#228B22] hover:text-white transition-all text-[#2C3E50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
      style={{ "--tw-ring-color": C.primary } as React.CSSProperties}
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on very small screens, rely on dots
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 w-full h-[200px] md:h-[300px] bg-[#F4F3ED] rounded-b-[30px] md:rounded-b-[40px] lg:rounded-b-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="flex justify-center mb-4 md:mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 md:w-8 md:h-8"
                style={{ color: C.primary, fill: "currentColor" }}
              />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif" style={{ color: C.heading }}>
            Trusted by Pinellas <span className="italic" style={{ color: C.primary }}>County.</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto px-4" style={{ color: C.muted }}>
            See what your neighbors are saying about our 5-star lawn care and landscaping services.
          </p>
        </div>

        <div className="px-2 md:px-4 lg:px-0">
          <Slider {...settings} className="testimonial-slider -mx-2 md:-mx-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-2 md:px-4 outline-none h-full">
                <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-[2rem] shadow-xl shadow-[#1B4332]/5 border border-gray-100 h-full flex flex-col min-h-[280px] md:min-h-[320px] transition-transform duration-300 hover:-translate-y-1 md:hover:-translate-y-2 relative">
                  {/* Quote icon for mobile */}
                  <div className="absolute top-4 right-4 md:hidden">
                    <Quote className="w-5 h-5" style={{ color: C.primary, opacity: 0.3 }} />
                  </div>

                  <div className="flex text-[#2D6A4F] mb-4 md:mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed flex-grow font-serif mb-6 md:mb-10" style={{ color: C.heading }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 mt-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E3E8E0] flex items-center justify-center flex-shrink-0">
                      <UserCircle className="w-6 h-6 md:w-8 md:h-8" style={{ color: C.primary }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-sm md:text-base lg:text-lg truncate" style={{ color: C.primary }}>
                        {t.name}
                      </h4>
                      <p className="text-xs md:text-sm font-semibold uppercase tracking-wider truncate" style={{ color: C.muted }}>
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
