import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, ShieldCheck, Zap, Cpu, Factory, Train, CheckCircle,
  Award, Building2, Download, ChevronRight, Phone,
  Shield, ChevronDown, MapPin, Star,
  Clock, Users, Settings, TrendingUp, Wrench, Activity
} from 'lucide-react';
import {
  companyData, classNameAboutInfo,
  productRangeCategory
} from '../data/graceData';
import { ClientLogosMarquee } from '../components/shared/ClientLogosMarquee';
import { mainMedia, factoryMedia } from '../data/galleryData';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';

interface Props {
  onNavigate: (pageId: string) => void;
  onOpenInquiry: (productName?: string) => void;
}

// Animated counter hook
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

// Stat card with animated counter and UK engineering dynamic meter bar
function StatCard({ value, label, description, suffix = '', prefix = '', meterPercent = 90 }: {
  value: number; label: string; description: string; suffix?: string; prefix?: string; meterPercent?: number;
}) {
  const { count, ref } = useCounter(value, 2.2);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div ref={ref} className="text-center px-3 py-5 sm:py-6 group transition-all duration-300 hover:bg-slate-800/40">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-400 font-serif stat-value tracking-tight group-hover:scale-105 transition-transform duration-300">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-bold text-white mt-1.5 group-hover:text-cyan-300 transition-colors">{label}</div>
      <div className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-snug">{description}</div>
      {/* UK engineering dynamic progress meter bar */}
      <div className="w-16 mx-auto h-0.5 bg-slate-800 rounded-full mt-2.5 overflow-hidden">
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

const HERO_VIDEO = '/factory/Annexure- K  Video M&P.mp4';
const HERO_POSTER = mainMedia[0]?.path || '';

export const HomePage: React.FC<Props> = ({ onNavigate, onOpenInquiry }) => {
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // UK engineering smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Delay video autoplay slightly for performance
  useEffect(() => {
    const t = setTimeout(() => setShowVideo(true), 600);
    return () => clearTimeout(t);
  }, []);

  const whyChooseUs = [
    { icon: <Shield className="w-6 h-6" />, title: "ISO 9001:2015 Certified", desc: "Quality management systems certified by international standards for all our processes.", color: "text-emerald-400 bg-emerald-400/10" },
    { icon: <Clock className="w-6 h-6" />, title: "18+ Years of Excellence", desc: "Since 2008, trusted engineering leadership across industrial and commercial India.", color: "text-amber-400 bg-amber-400/10" },
    { icon: <Zap className="w-6 h-6" />, title: "33KV Substation Experts", desc: "Turnkey design-to-commissioning of 33/11KV outdoor and indoor substations.", color: "text-blue-400 bg-blue-400/10" },
    { icon: <Users className="w-6 h-6" />, title: "50+ Skilled Professionals", desc: "Engineers, site supervisors, electricians, and QA/QC specialists pan-India.", color: "text-violet-400 bg-violet-400/10" },
    { icon: <Settings className="w-6 h-6" />, title: "32-Machine Factory", desc: "CNC Laser, 100T Bending, Powder Coating — in-house production at Greater Noida.", color: "text-cyan-400 bg-cyan-400/10" },
    { icon: <Train className="w-6 h-6" />, title: "RDSO Railway Approved", desc: "SS-316 Bio-Retention Tanks and railway enclosures per Indian Railways specifications.", color: "text-indigo-400 bg-indigo-400/10" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden w-full">

      {/* UK Engineering Real-Time Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-grace-primary via-cyan-400 to-emerald-400 origin-left z-50 pointer-events-none shadow-sm shadow-cyan-400/50"
      />

      {/* ═══════════════════════════════════════════════════════
          HERO — Cinematic Full-Height Video Background
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-slate-950 w-full">

        {/* Video background */}
        {showVideo && !videoError && (
          <video
            ref={videoRef}
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover animate-video-fade"
            style={{ opacity: 0.45 }}
          />
        )}

        {/* Poster fallback if video errors */}
        {(videoError || !showVideo) && HERO_POSTER && (
          <img
            src={HERO_POSTER}
            alt="Grace Electrical Factory"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 video-hero-overlay" />
        <div className="absolute inset-0 hero-grid opacity-20" />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-grace-primary/15 rounded-full blur-3xl pointer-events-none ambient-glow-drift" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Main hero content — Full-bleed widescreen 12-column layout */}
        <div className="container-versatile relative z-10 pt-10 pb-16 sm:pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">

            {/* Left 8 cols: Typography & CTAs */}
            <div className="lg:col-span-8">

              {/* Top certification badge + Live Plant Status */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-wrap items-center gap-2.5 mb-5"
              >
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full cert-badge text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-md shadow-amber-500/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>ISO 9001:2015 Certified &bull; Est. 2008 &bull; Class-A Contractor</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[10px] sm:text-[11px] font-bold text-emerald-400 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 radar-dot flex-shrink-0" />
                  <span>Greater Noida Plant Active</span>
                </div>
              </motion.div>

              {/* Company name with smooth text reveal */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-black font-serif text-white tracking-tight leading-[1.1]">
                  Grace Electrical &amp;{' '}
                  <span className="text-gradient-blue block sm:inline">Contractors</span>{' '}
                  <span className="text-slate-400 text-xl sm:text-3xl font-sans font-bold block sm:inline">Pvt. Ltd.</span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-slate-300 text-sm sm:text-base md:text-lg mt-4 max-w-2xl leading-relaxed font-medium"
              >
                Engineering Turnkey 33KV Substations, Industrial LT/HT Panels &amp; High-Integrity MEPF Infrastructure Across India Since 2008.
              </motion.p>

              {/* Primary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap items-center gap-3.5 mt-7"
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary btn-shimmer-sweep px-6 py-3.5 rounded-xl text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-xl shadow-grace-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2 btn-secondary backdrop-blur-md hover:-translate-y-0.5"
                >
                  Contact Us <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenInquiry('Grace Company Profile PDF')}
                  className="px-5 py-3.5 rounded-xl text-slate-300 font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 hover:text-white transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 text-cyan-400" /> Company Profile PDF
                </button>
              </motion.div>

            </div>

            {/* Right 4 cols: Floating Interactive Engineering Badges (UK Engineering Aesthetic) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-3.5 pl-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-xl animate-float-slow hover:border-cyan-500/40 transition-colors cursor-default"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Zap className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">33KV Turnkey Substations</div>
                    <div className="text-[11px] text-cyan-300/80 mt-0.5">CPRI Compliant &bull; Class-A Certified</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-xl animate-float-reverse ml-5 hover:border-emerald-500/40 transition-colors cursor-default"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">32-Machine Plant</div>
                    <div className="text-[11px] text-emerald-300/80 mt-0.5">UPSIDA Greater Noida Facility</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-xl animate-float-slow hover:border-indigo-500/40 transition-colors cursor-default"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">RDSO Approved Assemblies</div>
                    <div className="text-[11px] text-indigo-300/80 mt-0.5">Bio-Retention Tanks & Enclosures</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-medium animate-float">
          <span>Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>

      </section>


      {/* ═══════════════════════════════════════════════════════
          KEY STATISTICS — Animated Counters
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 border-y border-slate-800 relative overflow-hidden w-full">
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        <div className="container-versatile relative z-10 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <StatCard value={18} suffix="+" label="Years of Trust" description="Engineering leadership since 2008" meterPercent={95} />
            <StatCard value={33} suffix=" KV" label="Substation Capacity" description="Outdoor / Indoor Sub-Stations" meterPercent={88} />
            <StatCard value={6300} suffix="A" label="PCC Panel Rating" description="Fixed & Draw-out Power Control Centers" meterPercent={92} />
            <StatCard value={50} suffix="+" label="Team Members" description="Skilled professionals across India" meterPercent={85} />
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          ABOUT — Company Introduction
      ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-grace-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-versatile">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left: Image stack */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-72 sm:h-[390px] shadow-xl img-reveal-cinematic">
                <img
                  src={mainMedia[1]?.path || mainMedia[0]?.path}
                  alt="Grace Electrical project site"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.background = '#1e293b'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card px-4 py-3 rounded-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-grace-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">ISO 9001:2015 Certified Company</p>
                        <p className="text-[10px] text-slate-300 font-medium">Government Approved Class-A Electrical Contractor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 sm:w-36 sm:h-36 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-3 sm:border-4 border-white hidden sm:block">
                <img
                  src={factoryMedia[0]?.path || mainMedia[2]?.path}
                  alt="Grace factory manufacturing"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.background = '#1e293b'; }}
                />
              </div>
            </motion.div>

            {/* Right: Streamlined Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-3">
                  <Building2 className="w-3.5 h-3.5" /> Corporate Overview — Est. 2008
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 leading-tight tracking-tight">
                  18+ Years of <span className="text-gradient-primary">Engineering Leadership</span> &amp; Trust
                </h2>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Grace Electrical &amp; Contractors Pvt. Ltd. was established in 2008 at Sector-65 Noida. Today, backed by our 32-machine UPSIDA manufacturing plant in Greater Noida, we deliver turnkey 33KV substations, CPRI-compliant power panels up to 6300A, and RDSO-certified railway coach assemblies for India's leading enterprises.
              </p>

              {/* Key credential pills */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {[
                  { icon: <MapPin className="w-4 h-4 text-grace-primary" />, label: "Head Office", value: "Sector 65, Noida" },
                  { icon: <Factory className="w-4 h-4 text-emerald-600" />, label: "Manufacturing", value: "UPSIDA Greater Noida" },
                  { icon: <ShieldCheck className="w-4 h-4 text-amber-500" />, label: "Contractor License", value: "Class-A Govt Approved" },
                  { icon: <TrendingUp className="w-4 h-4 text-blue-500" />, label: "Project Reach", value: "Pan-India Execution" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span>{item.icon}</span>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-xs font-bold text-slate-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-primary px-6 py-3 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-grace-primary/20"
                >
                  Explore Full Company Profile <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenInquiry('Grace Profile PDF')}
                  className="px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 hover:bg-slate-800 transition-colors"
                >
                  <Download className="w-4 h-4 text-cyan-400" /> Download Profile PDF
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          ENGINEERING DIVISIONS — 4 Core Capabilities
      ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        <div className="container-versatile relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
              Our Engineering Divisions
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Four specialized verticals built from 18+ years of hands-on expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Turnkey Contracting",
                subtitle: "MEP & EPC Services",
                desc: "Complete 33KV substations, switchyards, HT/LT transformers, underground cables, bus-duct & high mast installations.",
                page: "mep",
                color: "from-blue-600 to-cyan-600",
                bg: "from-blue-500/10 to-cyan-500/5",
                img: mainMedia[0]?.path,
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: "Electrical Panels",
                subtitle: "Manufacturing Range",
                desc: "PCC panels up to 6300A, MCC up to 1600A, APFC up to 1500 KVAR, DG sync panels for up to 8 sets.",
                page: "products",
                color: "from-violet-600 to-purple-600",
                bg: "from-violet-500/10 to-purple-500/5",
                img: factoryMedia[3]?.path,
              },
              {
                icon: <Factory className="w-5 h-5" />,
                title: "Mechanical Manufacturing",
                subtitle: "CNC Factory — Greater Noida",
                desc: "32-machine UPSIDA plant: CNC laser cutting, 100T bending, busbar processing, powder coating 100kV booth.",
                page: "manufacturing",
                color: "from-orange-600 to-amber-600",
                bg: "from-orange-500/10 to-amber-500/5",
                img: factoryMedia[1]?.path,
              },
              {
                icon: <Train className="w-5 h-5" />,
                title: "Railway Products",
                subtitle: "RDSO Approved Division",
                desc: "SS-316 bio-retention tanks for passenger coaches, railway fuse boxes, custom IP-66 enclosures per RDSO norms.",
                page: "railway",
                color: "from-indigo-600 to-blue-700",
                bg: "from-indigo-500/10 to-blue-500/5",
                img: mainMedia[8]?.path,
              },
            ].map((div, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onNavigate(div.page)}
                className="tech-card-glow group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-800/90 hover:border-slate-700 transition-all duration-500 bg-slate-900/95"
              >
                {/* Background image */}
                {div.img && (
                  <div className="absolute inset-0">
                    <img
                      src={div.img}
                      alt={div.title}
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/90 group-hover:bg-slate-900/80 transition-colors duration-500" />
                  </div>
                )}

                <div className="relative p-5 sm:p-5.5 flex flex-col h-full min-h-[240px] justify-between">
                  <div>
                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${div.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      {div.icon}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{div.subtitle}</p>
                    <h3 className="text-sm sm:text-base font-bold text-white font-serif leading-tight mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {div.title}
                    </h3>
                    <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed group-hover:text-slate-300 transition-colors">
                      {div.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold mt-5 text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <span>Explore Division</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          FEATURED PANELS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-grace-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-versatile">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-2.5">
                <Cpu className="w-3.5 h-3.5" /> Manufacturing Range
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
                Electrical Panels
                <span className="block text-gradient-primary">We Manufacture</span>
              </h2>
            </motion.div>
            <button
              onClick={() => onNavigate('products')}
              className="btn-primary px-5 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 flex-shrink-0 shadow-md shadow-grace-primary/20"
            >
              Full Catalog <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {productRangeCategory[0].items.slice(0, 3).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onNavigate('products')}
                className="tech-card-glow group bg-white border border-slate-200/90 hover:border-grace-primary/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden relative bg-slate-100">
                  <img
                    src={factoryMedia[idx + 3]?.path || factoryMedia[idx]?.path}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.background = '#1e293b'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3.5 text-[10px] font-black text-white bg-grace-primary/90 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Rating: {item.rating}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-slate-900 font-serif group-hover:text-grace-primary transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.detail}</p>

                  <div className="mt-3.5 space-y-1">
                    {item.features.slice(0, 3).map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-grace-primary group-hover:gap-2.5 transition-all">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-versatile relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
              <Star className="w-3.5 h-3.5" /> Why Choose Grace
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
              The Grace Advantage
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
              Why India's top companies trust us for critical electrical infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="tech-card-glow group p-5 sm:p-5.5 bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 rounded-2xl cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-4 why-icon-box`}>
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white font-serif mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          CLIENTS
      ═══════════════════════════════════════════════════════ */}
      <ClientLogosMarquee />


      {/* ═══════════════════════════════════════════════════════
          FINAL CTA — Contact / Quotation
      ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-grace-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-versatile relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-12 bg-grace-primary/20 border border-grace-primary/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-white tracking-tight leading-tight">
              Start Your Next{' '}
              <span className="text-gradient-blue inline sm:block">Electrical Project</span>{' '}
              with Grace
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              From 33KV substation design to 6300A panel fabrication — get a detailed technical quotation within 24 hours from our Noida engineering team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-7">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-bold text-sm shadow-xl shadow-grace-primary/30 flex items-center justify-center gap-2"
              >
                Request a Quotation <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919990095954"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 hover:border-white/25 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" /> Call +91-9990095954
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-[11px] sm:text-xs text-slate-500 font-medium">
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
