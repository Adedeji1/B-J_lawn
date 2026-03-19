import { Shield, ChevronRight, ArrowDownRight } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../../assets/2b431874b5968ba5e04535305a0494f77e716c2f.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 bg-[#F4F3ED] overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E3E8E0] rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D8F3DC] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Typography / Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#1B4332]"></div>
              <span className="text-sm font-bold text-[#1B4332] tracking-widest uppercase">
                Licensed & Insured
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A312B] leading-[1.1] tracking-tight">
              Crafting <br />
              <span className="text-[#2D6A4F] italic font-serif">Pristine</span> <br />
              Landscapes.
            </h1>

            <p className="text-lg md:text-xl text-[#5C655E] font-medium leading-relaxed max-w-lg">
              Elevating outdoor spaces across Pinellas County. We blend architectural design with expert horticulture for over 500 properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full mt-4">
              <a
                href="#estimate"
                className="group relative w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-[#1B4332] text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-[#2D6A4F] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative flex items-center gap-2">
                  Start Your Project
                  <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
                </span>
              </a>
              <a
                href="#gallery"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-transparent border border-[#1B4332]/20 hover:border-[#1B4332] text-[#1B4332] rounded-full font-semibold text-lg transition-all"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>

          {/* Image / Visual Column (Editorial layout) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Arch Image */}
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Pristine landscape design"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Element */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-12 -left-8 md:left-4 z-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#2D6A4F]" />
                </div>
                <div>
                  <p className="text-sm text-[#5C655E] font-medium">Trusted by</p>
                  <p className="text-xl font-bold text-[#1B4332]">500+ Clients</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Outline Arch */}
            <div className="absolute -top-6 -right-6 w-full max-w-md aspect-[4/5] rounded-t-full rounded-b-2xl border-2 border-[#2D6A4F]/20 z-0 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
