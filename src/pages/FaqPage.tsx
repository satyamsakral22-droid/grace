import React, { useState, useMemo } from 'react';
import { 
  MessageSquare, Search, ChevronDown, Phone, Mail, FileText, 
  ArrowRight, ShieldCheck, Zap, Factory, Award, Download, 
  CheckCircle2, HelpCircle, Layers
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
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

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
        faq.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      
      {/* ── Page Header / Banner ────────────────────────────── */}
      <section className="relative py-10 sm:py-12 bg-slate-950 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-grace-primary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-versatile relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Knowledge Base & Technical FAQs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[2.8rem] font-black font-serif text-white tracking-tight leading-tight"
          >
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-xs sm:text-sm mt-3 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Detailed answers regarding our turnkey 33KV contracting, LT/HT panel fabrication range, ISO 9001:2015 certifications, execution timelines, and tender process.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl mx-auto relative"
          >
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, e.g. 33KV, PCC Panels, Quotation, Noida..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-md backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded-md"
              >
                Clear
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter Pills ───────────────────────────── */}
      <section className="py-4 bg-slate-900/70 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-lg">
        <div className="container-versatile">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-grace-primary text-white shadow-md shadow-grace-primary/30'
                    : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accordion List ──────────────────────────────────── */}
      <section className="py-10 sm:py-12 bg-slate-950 relative">
        <div className="container-versatile max-w-5xl">

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 p-8">
              <HelpCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No matching questions found</h3>
              <p className="text-sm text-slate-400 mb-6">
                Try searching with a different term, or contact our engineering team directly.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="btn-primary px-6 py-2.5 rounded-xl text-white text-xs font-bold"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                const catColor = categoryColors[faq.category] ?? "text-slate-400 bg-slate-400/10 border-slate-400/20";

                return (
                  <motion.div
                    key={`${faq.category}-${idx}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-grace-primary/60 bg-white/[0.05] shadow-md shadow-grace-primary/10'
                        : 'border-slate-800/80 bg-white/[0.02] hover:border-slate-700 hover:bg-white/[0.035]'
                    }`}
                  >
                    {/* Trigger Button */}
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl group"
                    >
                      <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wider ${catColor}`}>
                        {faq.icon}
                        <span>{faq.category}</span>
                      </span>

                      <span className={`flex-1 text-xs sm:text-sm font-bold leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-cyan-300' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </span>

                      <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-grace-primary text-white rotate-180 shadow-md shadow-grace-primary/30'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200'
                      }`}>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                      </span>
                    </button>

                    {/* Answer Collapsible */}
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
                          <div className="px-4 sm:px-5 pt-1 pb-4 sm:pb-5 border-t border-slate-800/60">
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
          )}

          {/* Quick Inquiry RFQ Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Need Project-Specific Technical Guidance?
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-serif text-white leading-tight">
                  Speak Directly with Our Engineering Team
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-xl">
                  Whether you need BOQ estimation, CAD single line diagrams, CPRI type test records, or tender bid assistance — we're here to help.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0 w-full md:w-auto">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary px-7 py-3.5 rounded-xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-grace-primary/30"
                >
                  Request a Quotation <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenInquiry('Technical FAQ Consultation')}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
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
