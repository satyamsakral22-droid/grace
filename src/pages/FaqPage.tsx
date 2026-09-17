import React, { useState, useMemo } from 'react';
import {
  MessageSquare, Search, ChevronDown, Phone, Mail, FileText,
  ArrowRight, ShieldCheck, Zap, Factory, Award, Download,
  CheckCircle2, HelpCircle, Layers, Wrench, Train, Clock, Cpu,
  PhoneCall, Sparkles, Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, categoryColors, FaqItem } from '../components/shared/FaqSection';

interface Props {
  onNavigate: (pageId: string) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const FaqPage: React.FC<Props> = ({ onNavigate, onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(faqs.map(f => f.category)));
    return ['All', ...cats];
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q) ||
        faq.badge.toLowerCase().includes(q) ||
        faq.keyPoints.some(kp => kp.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Turnkey 33KV & EPC": return <Zap className="w-3.5 h-3.5" />;
      case "Panel Manufacturing": return <Cpu className="w-3.5 h-3.5" />;
      case "Testing & Quality": return <ShieldCheck className="w-3.5 h-3.5" />;
      case "Railway Products": return <Train className="w-3.5 h-3.5" />;
      case "Commercial & Tenders": return <FileText className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden pb-16">

      <section className="relative py-14 sm:py-20 bg-slate-950 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-grace-primary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-versatile relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4 shadow-lg shadow-cyan-500/10"
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Engineering Knowledge Base & Technical FAQs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[3.2rem] font-black font-serif text-white tracking-tight leading-tight"
          >
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-xs sm:text-base mt-4 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Technical answers on our turnkey 33KV substation scope, in-house panel fabrication capabilities, 5KV Hi-Pot testing benchmarks, ISO 9001:2015 certifications, and tender submission process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto"
          >
            {[
              { value: "33 KV", label: "Turnkey Substations" },
              { value: "6300A", label: "PCC Panel Rating" },
              { value: "5 KV", label: "Hi-Pot Testing" },
              { value: "24 Hrs", label: "Bid Response" }
            ].map((stat, i) => (
              <div key={i} className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md">
                <div className="text-base sm:text-lg font-black font-serif text-cyan-400">{stat.value}</div>
                <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto relative"
          >
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, e.g. 33KV, PCC, 6300A, Testing, VCB, AMC, Quotation..."
              className="w-full pl-11 pr-24 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-xl backdrop-blur-md"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                Clear
              </button>
            ) : (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-slate-500 font-semibold uppercase tracking-wider hidden sm:inline">
                {filteredFaqs.length} Items
              </span>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-4 bg-slate-900/80 border-b border-slate-800/80 sticky top-16 z-30 backdrop-blur-xl">
        <div className="container-versatile">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filter Topic:
            </span>
            {categories.map((cat) => {
              const count = cat === 'All' ? faqs.length : faqs.filter(f => f.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-grace-primary to-cyan-600 text-white shadow-lg shadow-grace-primary/30'
                      : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {getCategoryIcon(cat)}
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-950 relative">
        <div className="container-versatile max-w-5xl">

          {(searchQuery || activeCategory !== 'All') && (
            <div className="mb-6 flex items-center justify-between text-xs text-slate-400 bg-slate-900/60 px-4 py-2.5 rounded-xl border border-slate-800">
              <span>
                Showing <strong className="text-cyan-400 font-bold">{filteredFaqs.length}</strong> result{filteredFaqs.length === 1 ? '' : 's'}
                {activeCategory !== 'All' && <span> in <strong className="text-white">{activeCategory}</strong></span>}
                {searchQuery && <span> matching "<strong className="text-white">{searchQuery}</strong>"</span>}
              </span>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-cyan-400 hover:text-cyan-300 font-bold underline cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800 p-8">
              <HelpCircle className="w-14 h-14 text-slate-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold font-serif text-white mb-2">No Matching Technical Questions</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                We couldn't find any questions matching your query. Our engineering team can answer custom specifications directly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="btn-primary px-6 py-2.5 rounded-xl text-white text-xs font-bold"
                >
                  Reset Search
                </button>
                <button
                  onClick={() => onOpenInquiry('Custom Technical Inquiry')}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700"
                >
                  Submit Question to Engineer
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredFaqs.map((faq, idx) => {
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
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
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

                      <span className={`flex-1 text-sm sm:text-base font-bold font-serif leading-snug transition-colors duration-200 ${
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
                          key={`body-${faq.id}`}
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
                                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/70">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span className="leading-snug">{pt}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {faq.action && (
                              <div className="mt-4 pt-3 flex items-center justify-between flex-wrap gap-3">
                                <span className="text-[11px] text-slate-500 font-medium">
                                  Want complete specifications or technical drawings?
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
          )}

          <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-grace-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Dedicated Technical Tender Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight leading-tight">
                  Have an Upcoming Project or Tender Requirement?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Submit single-line diagrams (SLD), itemized BOQs, or panel specifications for rapid commercial bids. Our technical estimating division responds within 24 to 48 business hours.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-300 font-medium">
                  <a href="tel:+919990095954" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" /> +91-9990095954
                  </a>
                  <span className="text-slate-700 hidden sm:inline">•</span>
                  <a href="mailto:info@gracemep.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> info@gracemep.com
                  </a>
                  <span className="text-slate-700 hidden sm:inline">•</span>
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> 24hr Business Response
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="btn-primary px-8 py-4 rounded-xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-grace-primary/40 cursor-pointer"
                >
                  Request a Formal Quotation <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenInquiry('Grace Company Profile PDF')}
                  className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-400" /> Company Profile PDF
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default FaqPage;
