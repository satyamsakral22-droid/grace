import React from 'react';
import {
  Factory, ShieldCheck, CheckCircle, Wrench, Layers, Zap
} from 'lucide-react';
import { machineryStrengthList, testingStrengthList, companyData } from '../data/graceData';
import { factoryMedia, mainMedia } from '../data/galleryData';
import { motion } from 'framer-motion';
import { ParticleOrbs } from '../components/shared/ParticleOrbs';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

const machineIcons = [
  <Zap className="w-4 h-4" />,
  <Layers className="w-4 h-4" />,
  <Wrench className="w-4 h-4" />,
  <Factory className="w-4 h-4" />,
];

export const MechanicalManufacturingPage: React.FC<Props> = ({ onOpenInquiry }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">

      <section className="py-16 sm:py-20 dark-banner-bg text-white relative overflow-hidden">
        <ParticleOrbs count={5} />
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-20">
          <img decoding="async" loading="lazy"
            src={factoryMedia[2]?.path}
            alt=""
            className="w-full h-full object-cover"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>
        <div className="container-versatile relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <Factory className="w-3.5 h-3.5" /> Surajpur Site-5 Plant, Greater Noida
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-2 tracking-tight leading-tight">
              Mechanical Manufacturing{' '}
              <span className="text-gradient-blue">& Testing Strength</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
              In-house sheet metal fabrication, CNC Fiber Laser Cutting, CNC Bending, 100kV Electrostatic Powder Coating, and 5KV High Voltage Testing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl">
              {[
                { label: '32 Machines', sub: 'Full CNC Setup' },
                { label: '100kV', sub: 'Powder Coating' },
                { label: '5KV HV', sub: 'Testing Lab' },
                { label: 'UPSIDA', sub: 'Certified Plant' },
              ].map((stat, i) => (
                <div key={i} className="glass-dark p-3 rounded-xl border border-slate-700/40 text-center">
                  <div className="text-base font-black text-cyan-400 text-neon-cyan">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-slate-950 relative overflow-hidden">
        <div className="overflow-hidden marquee-mask">
          <div className="flex gap-3 animate-marquee-glide">
            {[...factoryMedia.slice(0, 8), ...factoryMedia.slice(0, 8)].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden border border-slate-800/50 parallax-img-wrap">
                <img decoding="async" loading="lazy"
                  src={img.path}
                  alt="Factory"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white">
        <div className="container-versatile">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-3">
                Factory Inventory
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
                Machinery Strength{' '}
                <span className="text-gradient-primary">(32 Equipment Setup)</span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-0.5 w-16 bg-gradient-to-r from-grace-primary to-cyan-400 mt-4 rounded-full origin-left"
              />
            </motion.div>
            <button
              onClick={() => onOpenInquiry('Factory Manufacturing Setup')}
              className="btn-primary px-6 py-3 rounded-xl text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-grace-primary/20"
            >
              Inquire Manufacturing Specs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {machineryStrengthList.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
                className="group flex items-center gap-3 p-3.5 bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-grace-primary/40 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-grace-primary/10 to-cyan-500/10 border border-grace-primary/20 flex items-center justify-center text-grace-primary flex-shrink-0 group-hover:from-grace-primary group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                  {machineIcons[idx % machineIcons.length]}
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{m}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 gradient-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="container-versatile relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">
                In-House Finishing
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
                Powder Coating Plant{' '}
                <span className="text-gradient-blue">& Oven (200–250°C)</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Powder coating is applied electrostatically as a free-flowing dry powder and cured under heat (200–250°C) to form a tough skin far superior to liquid paint.
              </p>
              <div className="space-y-3">
                {[
                  'Thermoset & Thermoplastic Powder Coating Options',
                  'Electrostatic Fluidized Bed & Magnetic Brush (EMB) Coating',
                  '100 kV Electrostatic Spray Setup',
                  'UV-resistant & corrosion-proof finish',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="grid grid-cols-2 gap-3">
                {factoryMedia.slice(4, 8).map((img, i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden border border-slate-800/60 parallax-img-wrap ${i === 0 ? 'col-span-2 h-52' : 'h-36'}`}>
                    <img decoding="async" loading="lazy"
                      src={img.path}
                      alt="Factory powder coating"
                      className="w-full h-full object-cover"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">
              In-House Quality Control
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
              Testing Strength (Complete QC Setup)
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-0.5 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-4 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testingStrengthList.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-white to-emerald-50/30 border border-slate-200 hover:border-emerald-400/40 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-500 flex-shrink-0 group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <span className="text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
