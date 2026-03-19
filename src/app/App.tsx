import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ServicesGrid } from "./components/ServicesGrid";
import { ServiceAreas } from "./components/ServiceAreas";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { Testimonials } from "./components/Testimonials";
import { FAQSection } from "./components/FAQSection";
import { LeadCaptureForm } from "./components/LeadCaptureForm";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "Bay & Jay Lawncare - Expert Landscaping in Pinellas County";
    
    // Add or update meta description for SEO
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert lawn care, landscaping design, and maintenance services for St. Petersburg, Clearwater, and all of Pinellas County. Get your free estimate today.');
  }, []);

  return (
    <div className="antialiased text-[#2A312B] bg-[#F4F3ED] selection:bg-[#1B4332] selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <ServiceAreas />
        <BeforeAfterGallery />
        <Testimonials />
        <FAQSection />
        <LeadCaptureForm />
      </main>
      <Footer />
    </div>
  );
}
