import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, ShieldCheck, Zap, Cpu, Factory, Train, CheckCircle,
  Award, Building2, Download, ChevronRight, Phone,
  Shield, ChevronDown, MapPin, Star,
  Clock, Users, Settings, TrendingUp, Wrench, Activity, Play
} from 'lucide-react';
import {
  companyData, classNameAboutInfo,
  productRangeCategory
} from '../data/graceData';
import { ClientLogosMarquee } from '../components/shared/ClientLogosMarquee';
import { mainMedia, factoryMedia } from '../data/galleryData';
import { motion, useInView, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ParticleOrbs } from '../components/shared/ParticleOrbs';

interface Props {
  onNavigate: (pageId: string) => void;
  onOpenInquiry: (productName?: string) => void;
}

function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return { count, ref };
}

function StatCard({ value, label, description, suffix = '', prefix = '', meterPercent = 90, icon }: {
  value: number; label: string; description: string; suffix?: string; prefix?: string; meterPercent?: number; icon?: React.ReactNode;
}) {
  const { count, ref } = useCounter(value, 2.2);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div ref={ref} className="relative text-center px-4 py-7 group transition-all duration-300 hover:bg-slate-800/60 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-3 text-cyan-400 group-hover:border-cyan-500/40 group-hover:neon-cyan transition-all duration-300">
          {icon}
        </div>
      )}
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-400 font-serif stat-value tracking-tight group-hover:scale-105 transition-transform duration-300 text-neon-cyan">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-bold text-white mt-1.5 group-hover:text-cyan-300 transition-colors">{label}</div>
      <div className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-snug">{description}</div>
      <div className="w-20 mx-auto h-0.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
        {inView && (
          <div
            className="h-full bg-gradient-to-r from-grace-primary via-cyan-400 to-emerald-400 meter-fill rounded-full"
            style={{ width: `${meterPercent}%` }}
          />
        )}
      </div>
    </div>
  );
}

const HERO_VIDEO = '/hero-bg.mp4';
const HERO_FALLBACK_VIDEO = '/factory/Annexure- K  Video M&P.mp4';

export const HomePage: React.FC<Props> = ({ onNavigate, onOpenInquiry }) => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const whyChooseUs = [
    { icon: <Shield className="w-6 h-6" />, title: "ISO 9001:2015 Certified", desc: "Quality management systems certified by international standards for all our processes.", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-500/30", glow: "neon-emerald" },
    { icon: <Clock className="w-6 h-6" />, title: "18+ Years of Excellence", desc: "Since 2008, trusted engineering leadership across industrial and commercial India.", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-500/30", glow: "neon-amber" },
    { icon: <Zap className="w-6 h-6" />, title: "33KV Substation Experts", desc: "Turnkey design-to-commissioning of 33/11KV outdoor and indoor substations.", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-500/30", glow: "neon-blue" },
    { icon: <Users className="w-6 h-6" />, title: "50+ Skilled Professionals", desc: "Engineers, site supervisors, electricians, and QA/QC specialists pan-India.", color: "text-violet-400", bg: "bg-violet-400/10 border-violet-500/30", glow: "" },
    { icon: <Settings className="w-6 h-6" />, title: "32-Machine Factory", desc: "CNC Laser, 100T Bending, Powder Coating — in-house production at Greater Noida.", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-500/30", glow: "neon-cyan" },
    { icon: <Train className="w-6 h-6" />, title: "RDSO Railway Approved", desc: "SS-316 Bio-Retention Tanks and railway enclosures per Indian Railways specifications.", color: "text-indigo-400", bg: "bg-indigo-400/10 border-indigo-500/30", glow: "" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden w-full">

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-grace-primary via-cyan-400 to-emerald-400 origin-left z-50 pointer-events-none shadow-sm shadow-cyan-400/50"
      />

      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden w-full bg-black">

        {!videoError && (
          <video
            ref={videoRef}
            src={HERO_VIDEO}
            autoPlay muted loop playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {videoError && (
          <video
            src={HERO_FALLBACK_VIDEO}
            autoPlay muted loop playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
        )}

        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.05) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{
          background: 'linear-gradient(to top, #000000 0%, transparent 100%)'
        }} />


        <div className="container-versatile relative z-10 pt-16 pb-28 w-full">
          <div className="max-w-3xl space-y-0">

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2.5 mb-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold text-emerald-300 backdrop-blur-md shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                ISO 9001:2015 Certified · Est. 2008 · Class-A Contractor
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-[11px] font-bold text-cyan-300 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                Greater Noida Plant Active
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              <h1 className="font-black font-serif tracking-tight leading-[1.04]">
                <span className="block text-4xl sm:text-5xl lg:text-[4rem] text-white">
                  Grace Electrical
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-[4rem]" style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #00A3E0 40%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  &amp; Contractors
                </span>
                <span className="block text-xl sm:text-2xl text-slate-400 font-sans font-semibold mt-2 tracking-normal">
                  Pvt. Ltd.
                </span>
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                className="h-0.5 w-48 mt-5 rounded-full origin-left"
                style={{ background: 'linear-gradient(90deg, #0052CC, #00A3E0, transparent)' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-slate-300 text-sm sm:text-base md:text-[18px] mt-6 max-w-2xl leading-relaxed font-medium"
            >
              Engineering Turnkey <strong className="text-white font-bold">33KV Substations</strong>, Industrial LT/HT Panels &amp; High-Integrity MEPF Infrastructure Across India Since 2008.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 mt-9"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary btn-shimmer-sweep ripple-effect px-8 py-3.5 rounded-xl text-white font-black text-sm flex items-center gap-2 shadow-2xl shadow-grace-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="px-6 py-3.5 rounded-xl bg-white/8 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all flex items-center gap-2 backdrop-blur-md hover:-translate-y-1 duration-300"
              >
                <Play className="w-4 h-4 text-cyan-400" /> View Gallery
              </button>
              <button
                onClick={() => onOpenInquiry('Grace Company Profile PDF')}
                className="px-5 py-3.5 rounded-xl text-slate-300 font-bold text-sm border border-slate-700/80 hover:border-slate-500 hover:text-white transition-all flex items-center gap-2 hover:-translate-y-1 duration-300"
              >
                <Download className="w-4 h-4 text-cyan-400" /> Company Profile
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8"
            >
              {[
                { label: '24hr Response', color: 'bg-cyan-400' },
                { label: 'Pan-India Projects', color: 'bg-emerald-400' },
                { label: 'RDSO Approved', color: 'bg-indigo-400' },
                { label: 'CPRI Tested', color: 'bg-amber-400' },
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <span className={`w-1 h-1 rounded-full ${t.color}`} />
                  {t.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-medium animate-float">
          <span>Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      <section className="bg-slate-900/90 border-y border-slate-800/80 relative overflow-hidden w-full backdrop-blur-sm">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="container-versatile relative z-10 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            <StatCard value={18} suffix="+" label="Years of Trust" description="Engineering leadership since 2008" meterPercent={95} icon={<Award className="w-5 h-5" />} />
            <StatCard value={33} suffix=" KV" label="Substation Capacity" description="Outdoor / Indoor Sub-Stations" meterPercent={88} icon={<Zap className="w-5 h-5" />} />
            <StatCard value={6300} suffix="A" label="PCC Panel Rating" description="Fixed & Draw-out Power Control Centers" meterPercent={92} icon={<Cpu className="w-5 h-5" />} />
            <StatCard value={50} suffix="+" label="Team Members" description="Skilled professionals across India" meterPercent={85} icon={<Users className="w-5 h-5" />} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grace-primary/40 to-transparent" />
      </section>


      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-40 pointer-events-none translate-y-1/2" />
        <div className="container-versatile relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-80 sm:h-[420px] shadow-2xl img-reveal-cinematic">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Grace Electrical — engineers at project site"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass-card-light px-4 py-3 rounded-xl backdrop-blur-md border border-white/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-grace-primary to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">ISO 9001:2015 Certified Company</p>
                        <p className="text-[10px] text-slate-600 font-medium">Government Approved Class-A Electrical Contractor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-5 -right-5 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                  alt="Grace factory — precision manufacturing"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grace-primary/30 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-5 -left-5 w-28 h-28 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=300&q=80"
                  alt="Engineering team — innovation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-transparent" />
              </motion.div>

              <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20 hidden sm:block" style={{
                backgroundImage: 'radial-gradient(circle, #0052CC 1px, transparent 1px)',
                backgroundSize: '8px 8px'
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-4">
                  <Building2 className="w-3.5 h-3.5" /> Corporate Overview — Est. 2008
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-serif text-slate-900 leading-tight tracking-tight">
                  18+ Years of{' '}
                  <span className="text-gradient-primary">Engineering Leadership</span>{' '}
                  & Trust
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Grace Electrical & Contractors Pvt. Ltd. was established in 2008 at Sector-65 Noida. Today, backed by our 32-machine UPSIDA manufacturing plant in Greater Noida, we deliver turnkey 33KV substations, CPRI-compliant power panels up to 6300A, and RDSO-certified railway coach assemblies for India's leading enterprises.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <MapPin className="w-4 h-4 text-grace-primary" />, label: "Head Office", value: "Sector 65, Noida" },
                  { icon: <Factory className="w-4 h-4 text-emerald-600" />, label: "Manufacturing", value: "UPSIDA Greater Noida" },
                  { icon: <ShieldCheck className="w-4 h-4 text-amber-500" />, label: "Contractor License", value: "Class-A Govt Approved" },
                  { icon: <TrendingUp className="w-4 h-4 text-blue-500" />, label: "Project Reach", value: "Pan-India Execution" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200/80 rounded-xl hover:border-grace-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-xs font-bold text-slate-900">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-primary px-7 py-3.5 rounded-xl text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-grace-primary/25"
                >
                  Explore Company Profile <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenInquiry('Grace Profile PDF')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm border border-slate-700 flex items-center gap-2 hover:bg-slate-800 transition-colors"
                >
                  <Download className="w-4 h-4 text-cyan-400" /> Download Profile
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20 gradient-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <ParticleOrbs count={4} />
        <div className="container-versatile relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
              Our Engineering Divisions
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
              Four specialized verticals built from 18+ years of hands-on expertise.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-0.5 w-16 bg-gradient-to-r from-grace-primary to-cyan-400 mx-auto mt-5 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Turnkey Contracting",
                subtitle: "MEP & EPC Services",
                desc: "Complete 33KV substations, switchyards, HT/LT transformers, underground cables, bus-duct & high mast installations.",
                page: "mep",
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "group-hover:shadow-blue-500/20",
                img: '/services/substation-33kv-1.jpg',
                accent: "border-blue-500/30 group-hover:border-blue-400/60",
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Electrical Panels",
                subtitle: "Manufacturing Range",
                desc: "PCC panels up to 6300A, MCC up to 1600A, APFC up to 1500 KVAR, DG sync panels for up to 8 sets.",
                page: "products",
                gradient: "from-violet-500 to-purple-500",
                glowColor: "group-hover:shadow-violet-500/20",
                img: '/services/pcc-panel-1.jpg',
                accent: "border-violet-500/30 group-hover:border-violet-400/60",
              },
              {
                icon: <Factory className="w-6 h-6" />,
                title: "Mechanical Mfg.",
                subtitle: "CNC Factory — Greater Noida",
                desc: "32-machine UPSIDA plant: CNC laser cutting, 100T bending, busbar processing, powder coating 100kV booth.",
                page: "manufacturing",
                gradient: "from-orange-500 to-amber-500",
                glowColor: "group-hover:shadow-orange-500/20",
                img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
                accent: "border-orange-500/30 group-hover:border-orange-400/60",
              },
              {
                icon: <Train className="w-6 h-6" />,
                title: "Railway Products",
                subtitle: "RDSO Approved Division",
                desc: "SS-316 bio-retention tanks for passenger coaches, railway fuse boxes, custom IP-66 enclosures per RDSO norms.",
                page: "railway",
                gradient: "from-indigo-500 to-blue-600",
                glowColor: "group-hover:shadow-indigo-500/20",
                img: 'https://images.unsplash.com/photo-1474487548417-781cb6d646f4?w=800&q=80',
                accent: "border-indigo-500/30 group-hover:border-indigo-400/60",
              },
            ].map((div, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onNavigate(div.page)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border ${div.accent} transition-all duration-500 glass-dark-hover perspective-card`}
              >
                {div.img && (
                  <div className="absolute inset-0">
                    <img decoding="async" loading="lazy"
                      src={div.img}
                      alt={div.title}
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-25 transition-opacity duration-700 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-900/70" />
                  </div>
                )}

                <div className="perspective-card-inner relative p-6 flex flex-col min-h-[260px] justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${div.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shine-effect`}>
                      {div.icon}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">{div.subtitle}</p>
                    <h3 className="text-base font-bold text-white font-serif leading-tight mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {div.title}
                    </h3>
                    <p className="text-slate-400 text-[12px] leading-relaxed group-hover:text-slate-300 transition-colors">
                      {div.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold mt-6 text-slate-500 group-hover:text-cyan-400 transition-all">
                    <span>Explore Division</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${div.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="container-versatile relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-3">
                <Cpu className="w-3.5 h-3.5" /> Manufacturing Range
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-serif text-slate-900 tracking-tight">
                Electrical Panels{' '}
                <span className="text-gradient-primary block">We Manufacture</span>
              </h2>
            </motion.div>
            <button
              onClick={() => onNavigate('products')}
              className="btn-primary px-6 py-3 rounded-xl text-white font-bold text-sm flex items-center gap-2 flex-shrink-0 shadow-lg shadow-grace-primary/20"
            >
              Full Catalog <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productRangeCategory[0].items.slice(0, 3).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => onNavigate('products')}
                className="group bg-white border border-slate-200/90 hover:border-grace-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500 card-lift"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-slate-900 to-slate-800 parallax-img-wrap">
                  <img
                    src={item.image || (item.imageOptions && item.imageOptions[0])}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-grace-primary/0 to-grace-primary/0 group-hover:from-grace-primary/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-black text-white bg-gradient-to-r from-grace-primary to-cyan-500 px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Rating: {item.rating}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-bold text-slate-900 font-serif group-hover:text-grace-primary transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.detail}</p>

                  <div className="mt-4 space-y-1.5">
                    {item.features.slice(0, 3).map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-grace-primary group-hover:gap-3 transition-all">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      <section className="py-10 gradient-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="mb-6 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400/80">Our Manufacturing Facility</span>
        </div>
        <div className="overflow-hidden marquee-mask">
          <div className="flex gap-4 animate-marquee-glide">
            {[...factoryMedia.slice(0, 10), ...factoryMedia.slice(0, 10)].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-56 h-36 rounded-xl overflow-hidden border border-slate-800/60 parallax-img-wrap">
                <img
                  src={img.path}
                  alt="Factory"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden marquee-mask mt-4">
          <div className="flex gap-4 animate-marquee-glide-reverse">
            {[...mainMedia.slice(0, 10), ...mainMedia.slice(0, 10)].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-56 h-36 rounded-xl overflow-hidden border border-slate-800/60 parallax-img-wrap">
                <img
                  src={img.path}
                  alt="Project"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-grace-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-versatile relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <Star className="w-3.5 h-3.5" /> Why Choose Grace
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
              The Grace Advantage
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
              Why India's top companies trust us for critical electrical infrastructure.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-grace-primary mx-auto mt-5 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group p-6 glass-dark-hover rounded-2xl cursor-default border ${item.bg} transition-all duration-400`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} border flex items-center justify-center mb-5 ${item.color} why-icon-box group-hover:${item.glow} transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className={`text-base font-bold text-white font-serif mb-2 group-hover:${item.color} transition-colors`}>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      <ClientLogosMarquee />


      <section className="py-20 sm:py-24 gradient-mesh-blue relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-grace-primary/25 rounded-full blur-3xl pointer-events-none" />
        <ParticleOrbs count={4} />

        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" aria-hidden="true">
          <path d="M 0 150 Q 400 50 800 150 T 1600 150" stroke="#00A3E0" strokeWidth="2" fill="none" className="circuit-line" />
          <path d="M 0 250 Q 300 150 600 250 T 1200 250" stroke="#0052CC" strokeWidth="1" fill="none" className="circuit-line" style={{ animationDelay: '1s' }} />
        </svg>

        <div className="container-versatile relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-grace-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl neon-cyan shine-effect">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight">
              Start Your Next{' '}
              <span className="text-gradient-blue">Electrical Project</span>{' '}
              with Grace
            </h2>
            <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              From 33KV substation design to 6300A panel fabrication — get a detailed technical quotation within 24 hours from our Noida engineering team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary btn-shimmer-sweep ripple-effect w-full sm:w-auto px-9 py-4 rounded-xl text-white font-bold text-sm shadow-xl shadow-grace-primary/30 flex items-center justify-center gap-2"
              >
                Request a Quotation <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919990095954"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white/8 hover:bg-white/15 text-white font-bold text-sm border border-white/15 hover:border-white/30 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-cyan-400" /> Call +91-9990095954
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> ISO 9001:2015 Certified</span>
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-amber-500" /> Class-A Electrical Contractor</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-grace-primary" /> Noida & Greater Noida</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-cyan-400" /> 24hr Response</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
