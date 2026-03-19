import { useState, useEffect } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Service Areas", href: "#areas" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-gray-200/50" : "bg-[#F4F3ED]/80 backdrop-blur-sm py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center group-hover:bg-[#2D6A4F] transition-colors">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#1B4332] tracking-tight font-serif">
                Bay & Jay
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#5C655E] hover:text-[#1B4332] font-semibold text-sm tracking-wide uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#1B4332] font-semibold">
              <Phone className="w-5 h-5 text-[#2D6A4F]" />
              <a href="tel:7274814770" className="hover:text-[#2D6A4F] transition-colors">(727) 481-4770</a>
            </div>
            <a
              href="#estimate"
              className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white px-7 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href="tel:7274814770"
              className="p-2 text-[#1B4332] bg-[#E3E8E0] rounded-full"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1B4332]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-2xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-[#1B4332] py-2 border-b border-gray-100 font-serif"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#estimate"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-[#1B4332] text-white py-4 rounded-full font-bold text-lg mt-4 shadow-lg"
          >
            Get Free Estimate
          </a>
        </div>
      )}
    </header>
  );
}
