import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Zap, Factory, MapPin, FileText, Shield, Train, Clock, Phone, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
  category: string;
}

export interface FaqSectionProps {
  compact?: boolean;
  onNavigate?: (pageId: string) => void;
}

export const faqs: FaqItem[] = [
  {
    category: "Services",
    icon: <Zap className="w-3.5 h-3.5" />,
    question: "What types of electrical contracting services does Grace provide?",
    answer: "Grace Electrical & Contractors Pvt. Ltd. provides comprehensive turnkey MEP services: complete 33KV outdoor/indoor substations and switchyards, HT/LT transformer supply and commissioning (up to 10MVA), overhead and underground HT cable networks, TPN bus-duct systems, ladder-type cable tray installations, high mast and road lighting, earthing protection systems, fire fighting, plumbing, HVAC, CCTV/BMS/PAS integration, and industrial electrical installations."
  },
  {
    category: "Panels",
    icon: <Factory className="w-3.5 h-3.5" />,
    question: "What electrical panels do you manufacture?",
    answer: "We manufacture a complete range from our UPSIDA Greater Noida plant: PCC panels up to 6300A in fixed and draw-out types, MCC panels up to 1600A with VFD/soft-starter modules, APFC panels up to 1500 KVAR with detuned reactors, Double Busbar Power Panels up to 6300A, Feeder Pillars up to 3200A, PLC/SCADA automation panels, DG synchronising panels for up to 8 sets, and Bus Trunking / Rising Mains up to 5000A. All panels are manufactured to ISO 9001:2015 standards."
  },
  {
    category: "Quality",
    icon: <Shield className="w-3.5 h-3.5" />,
    question: "What quality certifications does Grace hold?",
    answer: "Grace Electrical & Contractors Pvt. Ltd. is ISO 9001:2015 certified for its Quality Management System. We hold a Government-approved Class-A Electrical Contractor licence, comply with Indian Electrical Rules, ISI code, CPWD rules, MES specifications, and IRS/RDSO specifications for our railway division. All panels undergo in-house 5KV high voltage insulation testing, ACB release testing, secondary injection relay testing, and thermal imaging before dispatch."
  },
  {
    category: "Quotation",
    icon: <FileText className="w-3.5 h-3.5" />,
    question: "How can I request a quotation or technical inquiry?",
    answer: "You can reach us via: Email at info@gracemep.com or nk@gracemep.com, Phone at +91-9990095954 or +91-9891280077, or Landline at 0120-3511739 / 0120-3512647. You may also download our Company Profile PDF or Electrical Panel Catalogue from this website and submit an inquiry through our Contact Us page. We respond to all inquiries within 24 business hours."
  },
  {
    category: "Locations",
    icon: <MapPin className="w-3.5 h-3.5" />,
    question: "Where are your offices and manufacturing facilities?",
    answer: "Our registered Head Office is at A-60, Sector 65, Noida, G.B. Nagar, U.P. – 201301. Our manufacturing plant (32-machine facility) is located at N-20, Surajpur Industrial Area, Site-5, UPSIDA, Greater Noida, G.B. Nagar. We execute projects pan-India — from NCR, Punjab, Rajasthan, Uttarakhand, Assam, and other states."
  },
  {
    category: "Projects",
    icon: <Award className="w-3.5 h-3.5" />,
    question: "What are some notable projects completed by Grace?",
    answer: "Our portfolio includes: Maruti Suzuki India Ltd. (Hapur), PepsiCo Channo Plant (Punjab), Spectrum Metro Mall Sector-75 Noida, Taj SATS Jewar Airport, Emaar Marbella (Gurgaon), Assam Power Distribution Company Ltd (Guwahati), Delhi International Airport (DIAL), Shiva Statue Nathdwara Udaipur, Westline Hotel Rishikesh, Win Medicare (Modi Group), and multiple Gardenia & Sikka Group residential townships across NCR."
  },
  {
    category: "Railway",
    icon: <Train className="w-3.5 h-3.5" />,
    question: "What railway-specific products do you manufacture?",
    answer: "Our Railway Division manufactures SS-316 Stainless Steel Bio-Retention Tanks for Indian Railways passenger coaches (RDSO specification compliant), Railway Electrical Fuse Boxes with vibration-resistant and IP-66 enclosures, and Custom Fabricated Railway Electrical Enclosures with CNC laser-cut bodies, powder-coated to railway specifications. All railway products are manufactured to RDSO/IRS norms."
  },
  {
    category: "Timeline",
    icon: <Clock className="w-3.5 h-3.5" />,
    question: "What is your typical project delivery timeline?",
    answer: "Our structured 10-step execution process covers: Tender collection → Costing & bid → Order finalization → Engineering/CAD design → Site inspection → Commercial approval → Manpower & procurement → Contract execution with QC → High voltage testing & commissioning → Handing over & training. Panel manufacturing lead times typically range from 4–12 weeks depending on specification."
  },
  {
    category: "Manufacturing",
    icon: <Factory className="w-3.5 h-3.5" />,
    question: "What is your factory's manufacturing capability?",
    answer: "Our Greater Noida UPSIDA plant has 32 heavy-duty machines including: CNC Fiber Laser Cutting Machine (1.5 KW), CNC Bending Machine (40–100 Ton, up to 16mm), Hydraulic Busbar Processor (30 Ton, 12mm/120mm), TIG Welding (200–300A), MIG Welding (330–350A), Powder Coating Booth & Oven (100kV electrostatic, 200–250°C curing), and a full in-house QA/QC testing bench with 5KV Hi-Pot testers and Fluke analyzers."
  },
  {
    category: "Standards",
    icon: <Shield className="w-3.5 h-3.5" />,
    question: "Which electrical standards and norms do you follow?",
    answer: "All our designs and installations strictly follow Indian Electrical Rules (IE Rules), ISI standards, ISO 9001:2015 Quality Norms, CPWD specifications, MES (Military Engineering Services) rules, and IRS/RDSO norms for our railway products. Our switchgear and panel components are sourced from authorized OEM partners including Schneider Electric, ABB, Havells, Polycab, KEI Wires, and L&T Switchgear."
  },
  {
    category: "O&M",
    icon: <Zap className="w-3.5 h-3.5" />,
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: "Yes. We provide comprehensive Operation & Maintenance (O&M) services and Annual Maintenance Contracts (AMC) for electrical systems including switchgear panels, transformers, HVAC equipment, DG sets, and fire protection systems. Our technical team is available round-the-clock for breakdown support at industrial plants, commercial malls, and residential townships."
  },
  {
    category: "Contact",
    icon: <Phone className="w-3.5 h-3.5" />,
    question: "How do I get in touch for an urgent site requirement?",
    answer: "For urgent requirements, call us directly at +91-9990095954 or +91-9891280077. Our Noida office landlines are 0120-3511739 and 0120-3512647. You can also email info@gracemep.com or nk@gracemep.com. Visit us at A-60, Sector 65, Noida. Our team will deploy resources to your site promptly."
  }
];

export const categoryColors: Record<string, string> = {
  "Services":      "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Panels":        "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Quality":       "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Locations":     "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Projects":      "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Quotation":     "text-sky-400 bg-sky-400/10 border-sky-400/20",
  "Railway":       "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  "Timeline":      "text-orange-400 bg-orange-400/10 border-orange-400/20",
  "Manufacturing": "text-rose-400 bg-rose-400/10 border-rose-400/20",
  "Standards":     "text-teal-400 bg-teal-400/10 border-teal-400/20",
  "O&M":           "text-lime-400 bg-lime-400/10 border-lime-400/20",
  "Contact":       "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

export const FaqSection: React.FC<FaqSectionProps> = ({ compact = false, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const displayedFaqs = compact ? faqs.slice(0, 4) : faqs;

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={`${compact ? 'py-12 sm:py-14' : 'py-14 sm:py-16'} bg-slate-950 text-white relative overflow-hidden border-t border-slate-800`}>
      {/* Background */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-72 bg-grace-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-versatile max-w-5xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-7 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2.5">
            <MessageSquare className="w-3.5 h-3.5" />
            {compact ? 'Quick FAQ Preview' : 'Frequently Asked Questions'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
            {compact ? (
              <>Common Questions <span className="text-gradient-blue">Answered</span></>
            ) : (
              <>Everything You Need to Know <span className="text-gradient-blue">About Grace</span></>
            )}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {compact
              ? 'Click any question to view the answer. View the complete FAQ guide for all details.'
              : 'Click any question to expand. Everything about our services, panels, certifications, and delivery.'
            }
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-2">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const catColor = categoryColors[faq.category] ?? "text-slate-400 bg-slate-400/10 border-slate-400/20";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-grace-primary/60 bg-white/[0.05] shadow-md shadow-grace-primary/10'
                    : 'border-slate-800/80 bg-white/[0.02] hover:border-slate-700 hover:bg-white/[0.035]'
                }`}
              >
                {/* Question trigger button */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl group"
                >
                  {/* Category badge */}
                  <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wider ${catColor}`}>
                    {faq.icon}
                    <span className="hidden sm:inline">{faq.category}</span>
                  </span>

                  {/* Question title */}
                  <span className={`flex-1 text-xs sm:text-sm font-bold leading-snug transition-colors duration-200 ${
                    isOpen ? 'text-cyan-300' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-grace-primary text-white rotate-180 shadow-md shadow-grace-primary/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                  </span>
                </button>

                {/* Answer accordion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pt-0.5 pb-4 sm:pb-5 border-t border-slate-800/60">
                        <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Footer Actions or Full CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center"
        >
          {compact && onNavigate ? (
            <>
              <button
                type="button"
                onClick={() => onNavigate('faq')}
                className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-grace-primary/25 hover:-translate-y-0.5 transition-all"
              >
                View All {faqs.length} FAQs <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919990095954"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" /> Ask a Question: +91-9990095954
              </a>
            </>
          ) : (
            <div className="text-center">
              <p className="text-slate-500 text-xs mb-3 font-medium">Still have questions about our turnkey capabilities or panel fabrication?</p>
              <a
                href="tel:+919990095954"
                className="inline-flex items-center gap-2 px-7 py-3.5 btn-primary rounded-xl text-white font-bold text-sm shadow-xl shadow-grace-primary/30 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4" /> Speak with Our Engineers: +91-9990095954
              </a>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default FaqSection;
