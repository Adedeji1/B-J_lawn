import { MapPin, Map, PhoneCall, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function ServiceAreas() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-[#1B4332] relative overflow-hidden">
      {/* Decorative background curves */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2D6A4F] rounded-full mix-blend-screen opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#143224] rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span className="text-sm font-bold text-white/80 tracking-widest uppercase">Local Experts</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif">
              Rooted in <br /> <span className="italic text-[#83C5BE]">Pinellas County.</span>
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed font-light">
              We know Florida soil. Our localized expertise ensures your landscape thrives in our unique Gulf Coast climate.
            </p>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 w-full mt-4">
              {['St. Petersburg', 'Clearwater', 'Largo', 'Seminole', 'Madeira Beach', 'Pinellas Park'].map((city) => (
                <li key={city} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#83C5BE]" />
                  <span className="font-medium">{city}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
              <a
                href="tel:7274814770"
                className="w-full sm:w-auto bg-[#83C5BE] hover:bg-[#68a8a1] text-[#0f281e] px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-md flex justify-center items-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                (727) 481-4770
              </a>
            </div>
          </div>

          {/* Aesthetic Map / Graphic Card */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative bg-[#F4F3ED] p-10 aspect-square md:aspect-[4/3] flex flex-col items-center justify-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-0" />
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-8 border border-gray-100">
                  <Map className="w-12 h-12 text-[#2D6A4F]" />
                </div>
                <h3 className="text-3xl font-bold text-[#2A312B] mb-4 font-serif">Service Map</h3>
                <p className="text-[#5C655E] font-medium max-w-sm mx-auto mb-8">
                  Florida's Gulf Coast is our home and primary service area.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm">
                    <Clock className="w-4 h-4 text-[#2D6A4F]" />
                    <span className="text-sm font-bold text-[#2A312B]">Service 6 Days a Week</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm">
                    <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                    <span className="text-sm font-bold text-[#2A312B]">Emergency Post-Storm Cleanup</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
