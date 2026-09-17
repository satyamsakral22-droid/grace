import React, { useState } from 'react';
import {
  ChevronDown, MessageSquare, Zap, Factory, MapPin, FileText,
  Shield, Train, Clock, Phone, Award, ArrowRight, CheckCircle2,
  Cpu, Wrench, ExternalLink, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  id: string;
  category: string;
  badge: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
  keyPoints: string[];
  metric?: { value: string; label: string };
  action?: { label: string; page?: string; inquirySubject?: string };
}

export interface FaqSectionProps {
  compact?: boolean;
  onNavigate?: (pageId: string) => void;
  onOpenInquiry?: (productName?: string) => void;
}

export const faqs: FaqItem[] = [
  {
    id: "f-33kv-scope",
    category: "Turnkey 33KV & EPC",
    badge: "Substation Scope",
    icon: <Zap className="w-3.5 h-3.5" />,
    question: "What is Grace's complete scope in turnkey 33KV substations and switchyards?",
    answer: "Grace delivers end-to-end turnkey 33KV outdoor and indoor electrical substations from initial CAD single-line engineering to final grid synchronization. Our comprehensive scope includes civil foundation engineering, structural steel gantries, 33/11 KV power transformers (up to 10MVA), vacuum circuit breakers (VCB), CT/PT metering units, gang-operated disconnectors, lightning arrestors, and deep earthing mat installations.",
    keyPoints: [
      "Turnkey civil foundations, structural gantries & tower erection",
      "Power transformer installation up to 10MVA / 33KV class",
      "Vacuum Circuit Breaker (VCB) & protection relay panel integration",
      "Grid synchronisation, statutory CEIG inspection & commissioning"
    ],
    metric: { value: "33 KV", label: "Turnkey Grid Rating" },
    action: { label: "Explore 33KV Contracting", page: "mep" }
  },
  {
    id: "f-panel-range",
    category: "Panel Manufacturing",
    badge: "LT/HT Panels",
    icon: <Cpu className="w-3.5 h-3.5" />,
    question: "What electrical panels do you manufacture at your Greater Noida UPSIDA plant?",
    answer: "We fabricate an extensive range of custom electrical control assemblies: Power Control Centers (PCC up to 6300A in Form 4b fixed and draw-out configurations), Motor Control Centers (MCC up to 1600A with intelligent VFD and soft-starter drawers), APFC panels up to 1500 KVAR with detuned harmonic suppression reactors, Double Busbar Power Panels up to 6300A, Weatherproof Feeder Pillars up to 3200A, and SCADA-integrated PLC automation panels.",
    keyPoints: [
      "PCC panels rated up to 6300A in Form 4b separation",
      "MCC panels with intelligent motor management & VFD modules",
      "APFC panels up to 1500 KVAR with detuned harmonic filters",
      "Bus trunking systems & rising mains up to 5000A rating"
    ],
    metric: { value: "6300A", label: "Max PCC Capacity" },
    action: { label: "View Panel Range", page: "products" }
  },
  {
    id: "f-quality-testing",
    category: "Testing & Quality",
    badge: "In-House QA/QC",
    icon: <Shield className="w-3.5 h-3.5" />,
    question: "What in-house testing protocols are conducted before panel dispatch?",
    answer: "Every electrical panel and switchgear unit undergoes rigorous routine testing in our in-house testing laboratory prior to packaging and dispatch. Testing protocols strictly follow IS 8623 / IEC 61439 standards: 5KV high-voltage dielectric insulation test, secondary injection relay test kit calibration, contact resistance milli-ohm measurement, ACB release timing verification, phase sequence inspection, and infrared thermal imaging under simulated load.",
    keyPoints: [
      "5KV Hi-Pot dielectric insulation test & leakage measurement",
      "Secondary injection relay testing & ACB release calibration",
      "Infrared thermography audits for hot-spot elimination",
      "Detailed stage-wise QA inspection test certificate provided"
    ],
    metric: { value: "5 KV", label: "Hi-Pot Testing" },
    action: { label: "Inspect Testing Strength", page: "manufacturing" }
  },
  {
    id: "f-mepf-solutions",
    category: "Turnkey 33KV & EPC",
    badge: "Integrated MEPF",
    icon: <Wrench className="w-3.5 h-3.5" />,
    question: "What MEPF engineering solutions do you deliver for industrial & commercial facilities?",
    answer: "Grace delivers multi-disciplinary MEPF contracting services across India for factories, corporate towers, and commercial complexes: industrial fire fighting (automatic sprinkler networks, external fire hydrants, diesel and electric booster pumps), industrial sanitary plumbing & effluent piping, HVAC centralized chilled water plants with AHU ventilation ducting, and low-voltage security automation (CCTV, PAS, and addressable fire alarms).",
    keyPoints: [
      "Turnkey fire fighting hydrants, sprinklers & diesel pump sets",
      "Industrial water supply, sanitary drainage & effluent networks",
      "HVAC chilled water systems & cleanroom ventilation ducting",
      "PAS, addressable fire alarms & integrated BMS surveillance"
    ],
    metric: { value: "Full EPC", label: "MEPF Capability" },
    action: { label: "View MEPF Engineering", page: "mep" }
  },
  {
    id: "f-certifications",
    category: "Testing & Quality",
    badge: "Govt. Approved",
    icon: <Award className="w-3.5 h-3.5" />,
    question: "What statutory licenses and quality certifications does Grace hold?",
    answer: "Grace Electrical & Contractors Pvt. Ltd. holds an active ISO 9001:2015 Quality Management System certification and an official Government-approved Class-A Electrical Contractor license. All installations adhere strictly to Indian Electricity Rules (IE Rules), CPWD norms, Military Engineer Services (MES) specifications, and Bureau of Indian Standards (BIS/ISI) codes. Our railway stock is manufactured to strict RDSO/IRS guidelines.",
    keyPoints: [
      "ISO 9001:2015 Certified Quality Management System",
      "Government-Approved Class-A Electrical Contractor License",
      "CPWD, MES & Indian Electricity Rules full compliance",
      "Authorized OEM integration with ABB, Schneider, L&T, Polycab"
    ],
    metric: { value: "Class-A", label: "Contractor Grade" },
    action: { label: "Request License Copies", inquirySubject: "Certifications & Contractor License Inquiry" }
  },
  {
    id: "f-railway-rdso",
    category: "Railway Products",
    badge: "RDSO Approved",
    icon: <Train className="w-3.5 h-3.5" />,
    question: "What railway rolling stock products are manufactured in your dedicated division?",
    answer: "Our specialized Railway Division manufactures SS-316 grade Stainless Steel Bio-Retention Tanks for Indian Railways passenger coaches in strict conformance with RDSO guidelines. We also engineer vibration-resistant underframe electrical fuse boxes and custom CNC-fabricated IP-66 metal enclosures for passenger locomotives, equipped with heavy-duty gasketed sealing and high-grade electrostatic powder coating.",
    keyPoints: [
      "SS-316 stainless steel bio-retention tanks for rail coaches",
      "RDSO-compliant vibration-resistant coach fuse boxes",
      "Leak-proof automatic TIG welding with dye penetration testing",
      "Custom CNC laser-cut IP-66 railway electrical enclosures"
    ],
    metric: { value: "SS-316", label: "Railway Grade Steel" },
    action: { label: "Explore Railway Division", page: "railway" }
  },
  {
    id: "f-timeline-process",
    category: "Commercial & Tenders",
    badge: "10-Stage Process",
    icon: <Clock className="w-3.5 h-3.5" />,
    question: "What is your typical project delivery timeline and execution methodology?",
    answer: "We follow a disciplined 10-step project methodology: Tender acquisition → Detailed costing → Order finalization → CAD & GA drawing approval → Joint site survey → Resource procurement → In-house manufacturing with stage QC → High-voltage testing & pre-commissioning → Site installation → Final handover with training and as-built documentation. Standard panel fabrication requires 4 to 8 weeks following drawing sign-off.",
    keyPoints: [
      "Rapid 4–8 week panel manufacturing lead times",
      "Detailed CAD single-line & general arrangement approval",
      "Dedicated Project In-charge & Electrical Power Advisor deployed",
      "As-built documentation, test records & user manuals provided"
    ],
    metric: { value: "4–8 Wks", label: "Standard Delivery" },
    action: { label: "Consult on Timelines", inquirySubject: "Project Delivery Schedule Inquiry" }
  },
  {
    id: "f-quotation-rfq",
    category: "Commercial & Tenders",
    badge: "Fast Turnaround",
    icon: <FileText className="w-3.5 h-3.5" />,
    question: "How can clients submit tenders, BOQs, or requests for technical quotations?",
    answer: "You can submit tender documents, single-line diagrams (SLD), and itemized BOQs directly by email to info@gracemep.com or nk@gracemep.com. For rapid telephone coordination, our engineering desk is accessible at +91-9990095954 or 0120-3511739. Our technical estimating division generates comprehensive techno-commercial proposals within 24 to 48 business hours.",
    keyPoints: [
      "Guaranteed 24–48 business hour quotation turnaround",
      "Comprehensive itemized BOQ costing and component options",
      "Technical evaluation of single-line diagrams & busbar sizing",
      "Direct technical consultation with senior electrical engineers"
    ],
    metric: { value: "24 Hrs", label: "Quotation Turnaround" },
    action: { label: "Submit Tender / BOQ", page: "contact" }
  },
  {
    id: "f-om-amc",
    category: "Commercial & Tenders",
    badge: "24/7 Operations",
    icon: <Phone className="w-3.5 h-3.5" />,
    question: "Do you provide Operation & Maintenance (O&M) and Annual Maintenance Contracts (AMC)?",
    answer: "Yes. Grace provides structured Operation & Maintenance (O&M) programs and Annual Maintenance Contracts (AMC) for 33KV substations, HT/LT transformers, power panels, DG synchronization systems, and commercial MEP installations. Our dedicated service engineering team provides scheduled preventive audits, annual transformer oil filtration, thermographic inspections, and guaranteed 2-hour breakdown support across NCR.",
    keyPoints: [
      "24/7 round-the-clock emergency electrical breakdown support",
      "Scheduled infrared thermal imaging & contact resistance audits",
      "Transformer oil breakdown voltage (BDV) testing & filtration",
      "Dedicated resident technical manpower available for large sites"
    ],
    metric: { value: "24/7", label: "Emergency Support" },
    action: { label: "Inquire for AMC", page: "contact" }
  }
];

export const categoryColors: Record<string, { badge: string; text: string; bg: string; border: string }> = {
  "Turnkey 33KV & EPC": {
    badge: "bg-cyan-950/80 text-cyan-300 border-cyan-500/30",
    text: "text-cyan-400",
    bg: "from-cyan-500/10 to-blue-500/5",
    border: "border-cyan-500/40"
  },
  "Panel Manufacturing": {
    badge: "bg-violet-950/80 text-violet-300 border-violet-500/30",
    text: "text-violet-400",
    bg: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/40"
  },
  "Testing & Quality": {
    badge: "bg-emerald-950/80 text-emerald-300 border-emerald-500/30",
    text: "text-emerald-400",
    bg: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/40"
  },
  "Railway Products": {
    badge: "bg-indigo-950/80 text-indigo-300 border-indigo-500/30",
    text: "text-indigo-400",
    bg: "from-indigo-500/10 to-blue-500/5",
    border: "border-indigo-500/40"
  },
  "Commercial & Tenders": {
    badge: "bg-amber-950/80 text-amber-300 border-amber-500/30",
    text: "text-amber-400",
    bg: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-500/40"
  }
};

export const FaqSection: React.FC<FaqSectionProps> = ({ compact = false, onNavigate, onOpenInquiry }) => {
  const [openId, setOpenId] = useState<string | null>(compact ? faqs[0].id : null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map(f => f.category)))];

  const displayedFaqs = compact
    ? faqs.slice(0, 5)
    : activeCategory === "All"
      ? faqs
      : faqs.filter(f => f.category === activeCategory);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const handleAction = (faq: FaqItem) => {
    if (!faq.action) return;
    if (faq.action.inquirySubject && onOpenInquiry) {
      onOpenInquiry(faq.action.inquirySubject);
    } else if (faq.action.page && onNavigate) {
      onNavigate(faq.action.page);
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <section className={`${compact ? 'py-16 sm:py-20' : 'py-16 sm:py-24'} bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80`}>
      <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-grace-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="container-versatile max-w-5xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 shadow-lg shadow-cyan-500/10">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            {compact ? 'Engineering FAQ Preview' : 'Engineering Knowledge Base & FAQ'}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black font-serif text-white tracking-tight leading-tight">
            {compact ? (
              <>Frequently Asked <span className="text-gradient-blue">Questions</span></>
            ) : (
              <>Authoritative Technical <span className="text-gradient-blue">Guidance & FAQs</span></>
            )}
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-2xl mx-auto font-medium leading-relaxed">
            {compact
              ? 'Clear answers regarding our turnkey 33KV substation scope, in-house panel manufacturing, testing protocols, and pan-India project execution.'
              : 'Detailed specifications, regulatory compliance, factory testing standards, and commercial bidding guidance for EPC contractors and project developers.'
            }
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-0.5 w-20 bg-gradient-to-r from-grace-primary to-cyan-400 mx-auto mt-5 rounded-full origin-left"
          />
        </motion.div>

        {!compact && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-grace-primary to-cyan-600 text-white shadow-lg shadow-grace-primary/30 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-3.5">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const style = categoryColors[faq.category] || {
              badge: "bg-slate-800 text-slate-300 border-slate-700",
              text: "text-cyan-400",
              bg: "from-slate-800/10 to-slate-900/10",
              border: "border-cyan-500/40"
            };

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                  isOpen
                    ? `bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 ${style.border} shadow-xl shadow-grace-primary/10 ring-1 ring-white/10`
                    : 'bg-slate-900/50 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700 backdrop-blur-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 group"
                >
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md flex-shrink-0 ${style.badge}`}>
                    {faq.icon}
                    <span className="hidden sm:inline">{faq.badge}</span>
                  </span>

                  <span className={`flex-1 text-sm sm:text-[15px] font-bold font-serif leading-snug transition-colors duration-200 ${
                    isOpen ? 'text-white' : 'text-slate-200 group-hover:text-cyan-300'
                  }`}>
                    {faq.question}
                  </span>

                  {faq.metric && (
                    <span className="hidden md:flex flex-col items-end flex-shrink-0 text-right pr-2">
                      <span className={`text-xs font-black font-serif ${style.text}`}>{faq.metric.value}</span>
                      <span className="text-[10px] text-slate-500 font-medium">{faq.metric.label}</span>
                    </span>
                  )}

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-gradient-to-br from-grace-primary to-cyan-500 text-white rotate-180 shadow-md shadow-grace-primary/40'
                      : 'bg-slate-800/90 text-slate-400 group-hover:text-white group-hover:bg-slate-700 border border-slate-700/60'
                  }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-800/70">
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                          {faq.answer}
                        </p>

                        {faq.keyPoints && faq.keyPoints.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {faq.keyPoints.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/70">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="leading-snug">{pt}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {faq.action && (
                          <div className="mt-4 pt-3 flex items-center justify-between flex-wrap gap-3">
                            <span className="text-[11px] text-slate-500 font-medium">
                              Need specific drawings or test records for this topic?
                            </span>
                            <button
                              type="button"
                              onClick={() => handleAction(faq)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
                            >
                              <span>{faq.action.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-grace-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-bold text-emerald-400 mb-2.5">
                <Shield className="w-3.5 h-3.5" /> Direct Technical Support Desk
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-serif text-white tracking-tight">
                Have a Complex Substation or Panel Tender Specification?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
                Our Senior Electrical Power Advisors and Project Incharges review single-line diagrams, provide BOQ estimations, and submit formal bids across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              {compact && onNavigate ? (
                <>
                  <button
                    type="button"
                    onClick={() => onNavigate('faq')}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-primary text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-grace-primary/30 cursor-pointer"
                  >
                    View All {faqs.length} FAQs <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+919990095954"
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" /> +91-9990095954
                  </a>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => onNavigate ? onNavigate('contact') : window.location.href = '#contact'}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-primary text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-grace-primary/30 cursor-pointer"
                  >
                    Request a Quotation <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+919990095954"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" /> Call +91-9990095954
                  </a>
                </>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FaqSection;
