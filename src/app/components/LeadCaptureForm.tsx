import { useState } from "react";
import { CheckCircle2, ShieldCheck, Banknote, CalendarCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="estimate" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4F3ED] rounded-bl-[200px] z-0 opacity-50 hidden md:block"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 lg:pr-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#1B4332]"></span>
              <span className="text-sm font-bold text-[#1B4332] tracking-widest uppercase">Take The Next Step</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A312B] mb-6 font-serif leading-tight">
              Let's build something <span className="italic text-[#2D6A4F]">beautiful.</span>
            </h2>
            
            <p className="text-lg text-[#5C655E] font-medium leading-relaxed mb-10">
              Request a complimentary, no-obligation consultation with our landscaping experts. We’ll assess your property and provide a tailored plan to bring your vision to life.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3E8E0] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#1B4332]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2A312B] text-lg">Fully Licensed & Insured</h4>
                  <p className="text-[#5C655E] text-sm">Comprehensive coverage for your peace of mind.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3E8E0] flex items-center justify-center shrink-0">
                  <Banknote className="w-6 h-6 text-[#1B4332]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2A312B] text-lg">Transparent Pricing</h4>
                  <p className="text-[#5C655E] text-sm">Detailed estimates with absolutely no hidden fees.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2rem] shadow-2xl shadow-[#1B4332]/10 border border-gray-100 overflow-hidden"
            >
              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="bg-[#E3E8E0] p-6 rounded-full mb-6">
                      <CheckCircle2 className="w-16 h-16 text-[#2D6A4F]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2A312B] mb-4 font-serif">
                      Request Received
                    </h3>
                    <p className="text-lg text-[#5C655E] mb-8 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. A member of our team will contact you shortly to schedule your consultation.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#1B4332] font-bold hover:text-[#2D6A4F] transition-colors border-b-2 border-transparent hover:border-[#2D6A4F] pb-1"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-sm font-bold text-[#2A312B] tracking-wide">
                        Full Name <span className="text-[#2D6A4F]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] outline-none transition-all bg-[#F4F3ED]/50"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-bold text-[#2A312B] tracking-wide">
                        Phone Number <span className="text-[#2D6A4F]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        defaultValue="727-"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] outline-none transition-all bg-[#F4F3ED]/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-bold text-[#2A312B] tracking-wide">
                        Primary Service Needed
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] outline-none transition-all bg-[#F4F3ED]/50 appearance-none text-[#5C655E] font-medium"
                        >
                          <option>Lawn Maintenance</option>
                          <option>Landscape Design</option>
                          <option>Property Cleanup</option>
                          <option>Irrigation Repair</option>
                          <option>Hardscaping</option>
                          <option>Sod Installation</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#2A312B]">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group w-full min-h-[60px] bg-[#1B4332] hover:bg-[#2D6A4F] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 mt-4"
                    >
                      Request Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-[#5C655E] mt-4">
                      We respect your privacy. Your information is never shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}