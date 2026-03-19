import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "What's included in regular lawn maintenance service?",
      answer:
        "Our standard lawn maintenance includes precision mowing, edging along walkways and driveways, line trimming around obstacles, and blowing debris off all hard surfaces. We ensure your yard looks spotless every visit.",
    },
    {
      question: "How often should I get my lawn treated for weeds in Florida?",
      answer:
        "In Florida's warm climate, weeds can grow rapidly year-round. We generally recommend a tailored treatment plan every 6-8 weeks, adjusting for the wet summer season when growth accelerates.",
    },
    {
      question: "Do you offer seasonal cleanup packages?",
      answer:
        "Yes! We offer comprehensive spring and fall cleanups, which include heavy leaf removal, branch clearing, fresh mulch installation, and preparing your garden beds for the upcoming season.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. Bay & Jay Lawncare Inc is fully licensed and carries comprehensive liability insurance, providing total peace of mind for our residential and commercial clients.",
    },
    {
      question: "What grass types do you specialize in?",
      answer:
        "We are experts in Florida's most common turfgrasses, particularly St. Augustine, Zoysia, and Bahia. We tailor our mowing height, watering recommendations, and fertilizing schedules to your specific grass type.",
    },
    {
      question: "Can you handle emergency cleanup after a storm?",
      answer:
        "Yes, we provide rapid response emergency cleanups following severe weather or hurricanes. We'll clear fallen branches, remove heavy debris, and help restore safety and order to your property quickly.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F4F3ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#1B4332]"></span>
            <span className="text-sm font-bold text-[#1B4332] tracking-widest uppercase">FAQ</span>
            <span className="w-8 h-[1px] bg-[#1B4332]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A312B] mb-6 font-serif">
            Common <span className="italic text-[#2D6A4F]">Questions.</span>
          </h2>
          <p className="text-lg text-[#5C655E] font-medium">
            Everything you need to know about our services in Pinellas County.
          </p>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm data-[state=open]:border-[#2D6A4F]/30 transition-all duration-300"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-6 px-8 text-left text-[#2A312B] font-bold text-lg hover:text-[#1B4332] transition-colors group">
                  {faq.question}
                  <div className="w-10 h-10 rounded-full bg-[#F4F3ED] flex items-center justify-center group-hover:bg-[#E3E8E0] transition-colors shrink-0 ml-4">
                    <ChevronDown className="h-5 w-5 text-[#2D6A4F] transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-[#5C655E] font-medium text-base data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                <div className="px-8 pb-6 pt-2 leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}