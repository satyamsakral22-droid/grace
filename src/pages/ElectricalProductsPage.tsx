import React, { useState } from 'react';
import { Search, ShieldCheck, ArrowRight, Download, CheckCircle, Cpu, Zap } from 'lucide-react';
import { productRangeCategory } from '../data/graceData';
import { motion } from 'framer-motion';
import { ParticleOrbs } from '../components/shared/ParticleOrbs';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

const panelImages = [
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80', // switchgear/control panel
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // engineer with tech
  'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80', // circuit board / electronics
  'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=800&q=80', // industrial automation
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // PCB / electrical components
  'https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=800&q=80', // power distribution
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80', // power grid
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', // engineers at site
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', // infrastructure
];

export const ElectricalProductsPage: React.FC<Props> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">

      <section className="py-16 sm:py-20 dark-banner-bg text-white relative overflow-hidden">
        <ParticleOrbs count={5} />
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-15">
          <img decoding="async" loading="lazy"
            src="/services/pcc-panel-1.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-950/60" />
        </div>
        <div className="container-versatile relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <Cpu className="w-3.5 h-3.5" /> Noida Unit Manufacturing
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-2 tracking-tight leading-tight">
              Electrical Panels &{' '}
              <span className="text-gradient-blue">Automation Catalog</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
              Grace Group is a trusted manufacturer and supplier of all type LT panels including PCC, MCC, APFC, DG Synchronization, and PLC control panels from our Noida unit.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {['PCC up to 6300A', 'MCC up to 1600A', 'APFC up to 1500 KVAR', '8 DG Sync Panels'].map((spec, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-5 bg-slate-50 border-b border-slate-200 sticky top-[69px] z-30 backdrop-blur-sm bg-slate-50/95">
        <div className="container-versatile flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search panels (PCC 6300A, APFC, DG Sync)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-grace-primary input-premium"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-grace-primary to-cyan-500 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-grace-primary/40'
              }`}
            >
              All Categories
            </button>
            {productRangeCategory.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.category
                    ? 'bg-gradient-to-r from-grace-primary to-cyan-500 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-grace-primary/40'
                }`}
              >
                {cat.category.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-white">
        <div className="container-versatile space-y-14">
          {productRangeCategory.map((catGroup, idx) => {
            if (activeCategory !== 'all' && activeCategory !== catGroup.category) return null;

            const filteredItems = catGroup.items.filter(item =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.rating.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.detail.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={idx} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 pb-4 border-b-2 border-slate-100"
                >
                  <div className="w-1 h-8 bg-gradient-to-b from-grace-primary to-cyan-400 rounded-full" />
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-slate-900 tracking-tight">{catGroup.category}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 card-lift flex flex-col"
                    >
                      <div className="h-48 overflow-hidden relative bg-gradient-to-br from-slate-900 to-slate-800 parallax-img-wrap flex-shrink-0">
                        <img decoding="async" loading="lazy"
                          src={item.image || (item.imageOptions && item.imageOptions[0])}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={e => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (item.imageOptions && item.imageOptions.length > 1) {
                              const next = item.imageOptions.find(opt => opt !== target.src && !target.src.endsWith(opt));
                              if (next) { target.src = next; return; }
                            }
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-grace-primary/0 to-cyan-500/0 group-hover:from-grace-primary/15 group-hover:to-cyan-500/10 transition-all duration-500" />
                        <span className="absolute bottom-3 left-3 text-[10px] font-black text-white bg-gradient-to-r from-grace-primary to-cyan-500 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                          Rating: {item.rating}
                        </span>
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-cyan-300" />
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-sm font-bold text-slate-900 font-serif group-hover:text-grace-primary transition-colors leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed flex-1">{item.detail}</p>

                        <div className="mt-4 space-y-1.5">
                          {item.features.slice(0, 3).map((feat, fi) => (
                            <div key={fi} className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                              {feat}
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex gap-2">
                          <button
                            onClick={() => onOpenInquiry(item.name)}
                            className="flex-1 py-2.5 bg-gradient-to-r from-grace-primary to-cyan-500 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5"
                          >
                            Get Quote <ArrowRight className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => onOpenInquiry(item.name + ' Specifications')}
                            className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors border border-slate-200"
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
