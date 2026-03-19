import { ShieldCheck, CalendarCheck, MapPin, Clock } from "lucide-react";

export function TrustBar() {
  const trustSignals = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#2D6A4F]" />,
      title: "Licensed & Insured",
      description: "Fully covered for your peace of mind.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-[#2D6A4F]" />,
      title: "Free Consultations",
      description: "No obligation, expert evaluations.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#2D6A4F]" />,
      title: "Local Specialists",
      description: "Pinellas County native experts.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#2D6A4F]" />,
      title: "Prompt Response",
      description: "Swift communication guaranteed.",
    },
  ];

  return (
    <div className="bg-[#1B4332] py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-4 group ${index !== 0 ? 'pt-8 sm:pt-0 sm:pl-8 lg:pl-12' : ''}`}
            >
              <div className="bg-white/5 p-4 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                {signal.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 font-serif tracking-wide">
                  {signal.title}
                </h3>
                <p className="text-white/70 font-medium text-sm leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
