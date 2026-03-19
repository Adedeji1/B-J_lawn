import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#143224] text-white/70 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#2D6A4F] transition-colors">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-3xl font-bold text-white tracking-tight font-serif">
                Bay & Jay
              </span>
            </a>
            <p className="text-white/60 font-medium leading-relaxed max-w-sm mt-2">
              Pinellas County's leading landscaping experts. Delivering architectural design and precision horticultural care.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="bg-white/5 border border-white/10 p-3 rounded-full hover:bg-[#2D6A4F] text-white transition-all hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 border border-white/10 p-3 rounded-full hover:bg-[#2D6A4F] text-white transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="flex flex-col gap-4 font-medium">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#2D6A4F] text-xl leading-none">•</span> Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#2D6A4F] text-xl leading-none">•</span> Services</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#2D6A4F] text-xl leading-none">•</span> Service Areas</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#2D6A4F] text-xl leading-none">•</span> Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#2D6A4F] text-xl leading-none">•</span> Client Login</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-widest text-sm">Contact Info</h4>
            <div className="flex flex-col gap-5">
              <a href="tel:7274814770" className="flex items-start gap-4 hover:text-white transition-colors group">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-[#2D6A4F] transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 font-semibold mb-1 text-sm uppercase tracking-wider">Call Us</div>
                  <div className="text-white text-xl font-bold font-serif">(727) 481-4770</div>
                </div>
              </a>
              
              <a href="mailto:info@bayandjaylawncare.com" className="flex items-start gap-4 hover:text-white transition-colors group">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-[#2D6A4F] transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 font-semibold mb-1 text-sm uppercase tracking-wider">Email Us</div>
                  <div className="text-white font-medium">info@bayandjaylawncare.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 group cursor-default">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-[#2D6A4F] transition-colors">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 font-semibold mb-1 text-sm uppercase tracking-wider">Business Hours</div>
                  <div className="text-white font-medium leading-relaxed">Mon–Fri: 7am – 5pm<br/>Sat: 8am – 2pm<br/>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium">
          <p className="text-white/60">© {new Date().getFullYear()} Bay & Jay Lawncare Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
