import {
  Scissors,
  Flower2,
  Leaf,
  Droplets,
  Wind,
  Sprout,
  Hammer,
  Tractor,
  Trees,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

export function ServicesGrid() {
  const services = [
    {
      icon: <Scissors className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Lawn Maintenance",
      description:
        "Weekly mowing, edging, and trimming to keep your St. Augustine grass pristine year-round.",
    },
    {
      icon: <Flower2 className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Landscape Design",
      description:
        "Bespoke designs for residential properties. Transform your outdoor space into an oasis.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Garden Care",
      description:
        "Ongoing horticultural care for planted beds, delicate shrubs, and native flora.",
    },
    {
      icon: <Trees className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Arboriculture",
      description:
        "Precision hedge, shrub, and tree trimming for clean lines and plant health.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Irrigation Systems",
      description:
        "Diagnosis and repair of sprinkler systems. Essential for thriving in Florida's climate.",
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Hardscaping",
      description:
        "Custom pavers, elegant retaining walls, and durable stone features for outdoor living.",
    },
    {
      icon: <Sprout className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Turf Health",
      description:
        "Specialized chemical and organic treatments tailored specifically to your lawn type.",
    },
    {
      icon: <Tractor className="w-6 h-6 text-[#2D6A4F]" />,
      title: "Sod Installation",
      description:
        "Premium sod delivery and flawless professional installation for instant green coverage.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32 flex flex-col gap-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#1B4332]"></span>
                <span className="text-sm font-bold text-[#1B4332] tracking-widest uppercase">Our Expertise</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#2A312B] leading-tight">
                Complete Care for <span className="italic font-serif text-[#2D6A4F]">Exceptional</span> Properties.
              </h2>
              
              <p className="text-lg text-[#5C655E] leading-relaxed">
                From precision maintenance to architectural hardscaping, we provide comprehensive solutions tailored to Pinellas County's unique environment.
              </p>

              <div className="pt-4">
                <a
                  href="#estimate"
                  className="inline-flex items-center gap-2 pb-1 border-b-2 border-[#1B4332] text-[#1B4332] font-bold text-lg hover:text-[#2D6A4F] hover:border-[#2D6A4F] transition-colors"
                >
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (Bento/Staggered Grid) */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
                  className={`bg-[#F4F3ED] p-8 md:p-10 rounded-2xl group hover:bg-[#1B4332] transition-colors duration-500 ease-out flex flex-col h-full ${
                    index % 2 === 1 ? "md:mt-12" : ""
                  }`}
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#2D6A4F] transition-colors duration-500">
                    <div className="group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2A312B] mb-4 group-hover:text-white transition-colors duration-500 font-serif">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#5C655E] group-hover:text-gray-200 transition-colors duration-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
