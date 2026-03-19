import { useState } from "react";
import { Slider} from "./ui/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

import project1 from "../../assets/2b431874b5968ba5e04535305a0494f77e716c2f.png";
import project2 from "../../assets/6a9e0c6bfffa147e56ed701be42cbf24c87f3f99.png";
import project3 from "../../assets/88e7317eb0d1c4965e2aa6ec0e8e10d2f57f9c06.png";

export function BeforeAfterGallery() {
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "Lawn Care",
    "Hardscaping",
    "Cleanup",
    "Landscape Design",
  ];

  const projects = [
    {
      category: "Lawn Care",
      before: "https://images.unsplash.com/photo-1701588334389-292b555470b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBkZWFkJTIwZ3Jhc3MlMjBsYXdufGVufDF8fHx8MTc3Mzc4OTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      after: project2,
      title: "Complete Overgrowth Restoration",
      location: "St. Petersburg, FL",
    },
    {
      category: "Landscape Design",
      before: "https://images.unsplash.com/photo-1641847609757-9b09cb831b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyZ3Jvd24lMjBnYXJkZW4lMjB3ZWVkc3xlbnwxfHx8fDE3NzM3ODk0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      after: project3,
      title: "Complete Front Yard Redesign",
      location: "Seminole, FL",
    },
    {
      category: "Hardscaping",
      before: "https://images.unsplash.com/photo-1715810440954-1003cebe430e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9rZW4lMjBzdG9uZSUyMHBhdGglMjBoYXJkc2NhcGV8ZW58MXx8fHwxNzczNzg5NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1763431879889-cdcec4d31e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHBhdGlvJTIwbGFuZHNjYXBpbmd8ZW58MXx8fHwxNzczNzg5NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "New Paver Patio Installation",
      location: "Clearwater, FL",
    },
    {
      category: "Cleanup",
      before: "https://images.unsplash.com/photo-1637389186687-1f813c5eff43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzeSUyMGxlYWYlMjBkZWJyaXMlMjB5YXJkfGVufDF8fHx8MTc3Mzc4OTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      after: project1,
      title: "Seasonal Leaf & Debris Removal",
      location: "Largo, FL",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const PrevArrow = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all text-[#1B4332]"
      aria-label="Previous image"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );

  const NextArrow = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all text-[#1B4332]"
      aria-label="Next image"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    customPaging: (i: number) => (
      <div className="w-3 h-3 mx-1 bg-[#E3E8E0] rounded-full mt-4 hover:bg-[#2D6A4F] transition-colors" />
    ),
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F4F3ED] relative">
      {/* Decorative background accent */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-white rounded-b-[40px] md:rounded-b-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#1B4332]"></span>
            <span className="text-sm font-bold text-[#1B4332] tracking-widest uppercase">Our Work</span>
            <span className="w-8 h-[1px] bg-[#1B4332]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A312B] mb-6">
            Transformations We're <span className="italic font-serif text-[#2D6A4F]">Proud Of.</span>
          </h2>
          <p className="text-lg text-[#5C655E] max-w-2xl mx-auto mb-10 leading-relaxed">
            See the difference professional lawn care and landscape design can make. Browse our recent Pinellas County projects.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                  filter === f
                    ? "bg-[#1B4332] text-white"
                    : "bg-white text-[#5C655E] hover:bg-[#E3E8E0] border border-gray-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {filteredProjects.length > 0 ? (
            <Slider {...settings} className="before-after-slider">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="outline-none px-2">
                  <div className="bg-white rounded-[32px] overflow-hidden shadow-xl shadow-[#1B4332]/5 border border-gray-50">
                    <div className="relative">
                      {/* Before / After Label Overlay */}
                      <div className="absolute top-6 left-6 z-20 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-[#2A312B] px-4 py-1.5 text-xs font-bold rounded-full shadow-sm uppercase tracking-wide">Before</span>
                      </div>
                      <div className="absolute top-6 right-6 z-20 flex gap-2">
                        <span className="bg-[#2D6A4F] text-white px-4 py-1.5 text-xs font-bold rounded-full shadow-sm uppercase tracking-wide">After</span>
                      </div>
                      
                      <div className="grid grid-cols-2">
                        <div className="aspect-[3/4] sm:aspect-square relative overflow-hidden group">
                          <img
                            src={project.before}
                            alt={`${project.title} Before`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                        <div className="aspect-[3/4] sm:aspect-square relative overflow-hidden group">
                          <img
                            src={project.after}
                            alt={`${project.title} After`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 bg-white text-center">
                      <p className="text-[#228B22] font-semibold text-sm uppercase tracking-wider mb-2">
                        {project.category} • {project.location}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-[#2C3E50]">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-500">No projects found for this category.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F9F9F7] border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm"
            >
              See More Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
