import { Star, UserCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

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
      className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-[#228B22] hover:text-white transition-all text-[#2C3E50]"
      aria-label="Next testimonial"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );

  const PrevArrow = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-[#228B22] hover:text-white transition-all text-[#2C3E50]"
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="w-6 h-6" />
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 w-full h-[300px] bg-[#F4F3ED] rounded-b-[40px] md:rounded-b-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-8 h-8 text-[#2D6A4F] fill-current"
              />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A312B] mb-6">
            Trusted by Pinellas <span className="italic font-serif text-[#2D6A4F]">County.</span>
          </h2>
          <p className="text-lg text-[#5C655E] max-w-2xl mx-auto">
            See what your neighbors are saying about our 5-star lawn care and landscaping services.
          </p>
        </div>

        <div className="px-4 lg:px-0">
          <Slider {...settings} className="testimonial-slider -mx-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-4 outline-none h-full">
                <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-[#1B4332]/5 border border-gray-100 h-full flex flex-col min-h-[320px] transition-transform duration-300 hover:-translate-y-2">
                  <div className="flex text-[#2D6A4F] mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2A312B] text-xl leading-relaxed flex-grow font-serif mb-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#E3E8E0] flex items-center justify-center">
                      <UserCircle className="w-8 h-8 text-[#1B4332]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B4332] text-lg">
                        {t.name}
                      </h4>
                      <p className="text-sm font-semibold text-[#5C655E] uppercase tracking-wider">
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
