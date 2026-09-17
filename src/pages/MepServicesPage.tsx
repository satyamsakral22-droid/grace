import React from 'react';
import {
  Zap, Wind, Layers, ShieldCheck, ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';
import { electricalServices, mepfServices, projectProcessingFlowchart } from '../data/graceData';
import { motion } from 'framer-motion';
import { ParticleOrbs } from '../components/shared/ParticleOrbs';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

const serviceImages = [
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80', // solar/power grid
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', // engineers at site
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80', // switchgear panel
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80', // safety / industrial
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // precision tech
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', // futuristic engineering
];

const mepfImages = [
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', // plumbing pipes
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', // HVAC / building systems
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // fire safety
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80', // modern building
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', // architecture/construction
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', // team at work
];

export const MepServicesPage: React.FC<Props> = ({ onOpenInquiry }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">

      <section className="py-16 sm:py-20 dark-banner-bg text-white relative overflow-hidden">
        <ParticleOrbs count={5} />
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <img decoding="async" loading="lazy"
            src="/services/substation-33kv-1.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>
        <div className="container-versatile relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <Zap className="w-3.5 h-3.5" /> Turnkey Contracting
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-2 tracking-tight leading-tight">
              Electrical & MEPF{' '}
              <span className="text-gradient-blue">Engineering Services</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
              Grace Group undertakes complete turnkey contracts of Supply, Installation, Testing & Commissioning for 33KV Substations, Electrical, Fire Fighting, Plumbing, HVAC, and Mechanical systems.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <button
                onClick={() => onOpenInquiry('MEP Engineering Service')}
                className="btn-primary btn-shimmer-sweep px-7 py-3.5 rounded-xl text-white font-bold text-sm flex items-center gap-2 shadow-lg"
              >
                Get Project Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white">
        <div className="container-versatile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-3">
              Up to 33KV Capability
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 mt-1 tracking-tight">
              Turnkey Electrical Contracting Services
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-0.5 w-16 bg-gradient-to-r from-grace-primary to-cyan-400 mt-4 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricalServices.map((es, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 card-lift flex flex-col"
              >
                <div className="h-44 overflow-hidden relative bg-gradient-to-br from-slate-900 to-slate-800 parallax-img-wrap flex-shrink-0">
                  <img decoding="async" loading="lazy"
                    src={es.image || (es.imageOptions && es.imageOptions[0])}
                    alt={es.title}
                    className="w-full h-full object-cover"
                    onError={e => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (es.imageOptions && es.imageOptions.length > 1) {
                        const next = es.imageOptions.find(opt => opt !== target.src && !target.src.endsWith(opt));
                        if (next) { target.src = next; return; }
                      }
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-black text-white bg-gradient-to-r from-grace-primary to-cyan-500 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {es.spec}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-grace-primary transition-colors font-serif">{es.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed flex-1">{es.description}</p>
                  <button
                    onClick={() => onOpenInquiry(es.title)}
                    className="mt-5 w-full py-2.5 bg-slate-900 hover:bg-gradient-to-r hover:from-grace-primary hover:to-cyan-500 text-white text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Specification <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 gradient-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="container-versatile relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-900/30 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              Comprehensive MEPF
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
              Mechanical, Fire Fighting & Plumbing Solutions
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-0.5 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-4 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mepfServices.map((mep, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group glass-dark-hover rounded-2xl border border-slate-800/60 overflow-hidden flex flex-col transition-all duration-400"
              >
                <div className="h-40 overflow-hidden relative bg-slate-900 parallax-img-wrap flex-shrink-0">
                  <img decoding="async" loading="lazy"
                    src={mep.image || (mep.imageOptions && mep.imageOptions[0]) || mepfImages[idx % mepfImages.length]}
                    alt={mep.title}
                    className="w-full h-full object-cover"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                  <span className="absolute top-2.5 left-3 text-[10px] font-bold text-emerald-300 bg-emerald-900/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {mep.spec}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors font-serif">{mep.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed flex-1">{mep.description}</p>
                  <button
                    onClick={() => onOpenInquiry(mep.title)}
                    className="mt-4 w-full py-2 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-900/20 text-xs font-bold rounded-xl transition-all duration-300"
                  >
                    View Service Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="container-versatile relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-3">
              Quality Execution Cycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
              Flow Chart (Project Processing)
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-0.5 w-16 bg-gradient-to-r from-grace-primary to-cyan-400 mx-auto mt-4 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {projectProcessingFlowchart.map((fc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group p-4 bg-gradient-to-br from-white to-blue-50/40 border border-slate-200 hover:border-grace-primary/40 rounded-2xl relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-3 -left-1">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-grace-primary to-cyan-500 text-white text-xs font-black flex items-center justify-center shadow-md">
                    {fc.step}
                  </span>
                </div>
                {i < projectProcessingFlowchart.length - 1 && (
                  <div className="absolute top-4 -right-2 z-10 hidden lg:block">
                    <ChevronRight className="w-4 h-4 text-grace-primary/50" />
                  </div>
                )}
                <div className="mt-3">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">{fc.stage}</h4>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">{fc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
