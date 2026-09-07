import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, Zap, Cpu, Layers, CheckCircle, Award, 
  Building2, Factory, Train, FileText, Download, CheckCircle2, ChevronRight, Phone, Mail,
  Activity, Wrench, Shield, Leaf, HeartHandshake, Eye, Sparkles, ChevronLeft, ArrowUpRight
} from 'lucide-react';
import { 
  companyData, classNameAboutInfo, electricalServices, mepfServices, productRangeCategory, 
  machineryStrengthList, testingStrengthList, valuableClientsList, channelPartnersList, 
  ongoingProjects, completedProjects, projectProcessingFlowchart 
} from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';
import { ClientLogosMarquee } from '../components/shared/ClientLogosMarquee';

interface Props {
  onNavigate: (pageId: string) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate, onOpenInquiry }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activePolicyTab, setActivePolicyTab] = useState<'quality' | 'safety' | 'environment' | 'mission'>('quality');

  // Hero Slides from gracemep.com & PDF
  const heroSlides = [
    {
      title: "Electrical & Mechanical Turnkey Projects",
      subtitle: "Turnkey EPC Substation Erection, HT/LT Transformers & Cable Network Infrastructure",
      description: "Grace Electrical Power Corporation has substantial expertise in complete electrical & mechanical systems up to 33KV. Designing, supply, fabrication, testing & commissioning.",
      badge: "33KV Substation & Switchyard Specialists",
      primaryCta: "Explore MEP Services",
      targetPage: "mep",
      bgGradient: "from-slate-900 via-blue-950 to-slate-900"
    },
    {
      title: "Turnkey MEP & Electrical Panel Manufacturing",
      subtitle: "Custom-Made PCC Panels up to 6300A, MCC Panels & Bus Trunking Systems",
      description: "Our objective is to provide quality turnkey MEP services with a focus on sound electrical engineering, sustaining the highest level of safety and Indian Electrical Rules compliance.",
      badge: "State-of-the-Art Factory in Greater Noida",
      primaryCta: "View Electrical Panels",
      targetPage: "products",
      bgGradient: "from-blue-950 via-slate-900 to-indigo-950"
    },
    {
      title: "Operation & Maintenance (O&M) Services",
      subtitle: "Comprehensive AMC Solutions for Industrial Plants, Malls & Townships",
      description: "Providing effective round-the-clock operation and maintenance of electrical, mechanical, and HVAC equipment for industrial complexes and commercial townships across India.",
      badge: "24/7 Technical Support & Maintenance",
      primaryCta: "Reach Us Direct",
      targetPage: "contact",
      bgGradient: "from-slate-950 via-blue-900 to-slate-900"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* Dynamic Executive Hero Showcase Slider Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-slate-900 to-blue-950/40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-versatile py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-300 rounded-full text-xs font-bold backdrop-blur-xs">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  ISO 9001:2015 Certified • Est. 2008 in Noida
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" /> Class-A Electrical Contractor
                </div>
              </div>

              {/* Dynamic Slide Heading */}
              <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center space-y-3 transition-all duration-500">
                <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> {heroSlides[activeSlide].badge}
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white font-serif leading-[1.15] tracking-tight">
                  {heroSlides[activeSlide].title}
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  {heroSlides[activeSlide].description}
                </p>
              </div>

              {/* Compliance Box */}
              <div className="p-4 bg-slate-800/80 border border-slate-700/80 rounded-xl space-y-1.5 text-xs text-slate-300">
                <div className="font-bold text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" /> Engineering Standards Compliance:
                </div>
                <div>Designed strictly according to <span className="font-semibold text-cyan-300">Indian Electrical Rules, ISI Code, ISO Quality Norms, CPWD Rules, MES & IRS Specifications</span>.</div>
              </div>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-200 border-y border-slate-800 py-3.5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>33/11 KV Substations & Switchyards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>PCC Panels up to 6300A (Draw-out)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>MCC Panels up to 1600A Capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>RDSO Railway Coach Bio Retention Tanks</span>
                </div>
              </div>

              {/* CTAs & Slide Controls */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-2 text-xs rounded-xl"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate(heroSlides[activeSlide].targetPage)}
                    className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold border border-slate-700 transition-colors text-xs rounded-xl"
                  >
                    {heroSlides[activeSlide].primaryCta}
                  </button>
                </div>

                {/* Slider Dot Indicators */}
                <div className="flex items-center gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeSlide === index ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* Hero Right Media Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <ImagePlaceholder 
                label={heroSlides[activeSlide].title} 
                height="h-60" 
                category={`Turnkey Division (Est. 2008 Noida)`}
              />

              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder 
                  label="PCC Panel 6300A Draw-out" 
                  height="h-36" 
                  category="Form 4b Switchgear Panel"
                />
                <ImagePlaceholder 
                  label="1.5 KW CNC Laser & Bending" 
                  height="h-36" 
                  category="UPSIDA Greater Noida Unit"
                />
              </div>

              {/* Instant Call Banner */}
              <div className="p-3.5 bg-slate-800/90 border border-slate-700/80 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Landline: 0120-3511739 / 3512647</span>
                </div>
                <span className="text-cyan-400 font-mono font-bold">+91-9990095954</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Metrics Counter Bar */}
      <section className="bg-slate-950 text-white py-10 border-b border-slate-800">
        <div className="container-versatile">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {companyData.stats.map((st, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight">{st.value}</div>
                <div className="text-sm font-bold text-white mt-1">{st.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{st.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streamlined Corporate About Overview */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container-versatile">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Company Profile
              </span>
              <h2 className="text-3xl font-bold text-slate-900 font-serif leading-tight">
                About Grace Electrical & Contractors Pvt. Ltd.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {classNameAboutInfo.aboutText1}
              </p>

              {/* Policy Tabs Summary */}
              <div className="pt-2 space-y-3">
                <div className="flex border-b border-slate-200 text-xs font-bold text-slate-600 space-x-4">
                  <button 
                    onClick={() => setActivePolicyTab('quality')}
                    className={`pb-2 border-b-2 transition-all flex items-center gap-1.5 ${
                      activePolicyTab === 'quality' ? 'border-grace-primary text-grace-primary font-extrabold' : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    <Shield className="w-3.5 h-3.5" /> Quality Policy
                  </button>
                  <button 
                    onClick={() => setActivePolicyTab('safety')}
                    className={`pb-2 border-b-2 transition-all flex items-center gap-1.5 ${
                      activePolicyTab === 'safety' ? 'border-grace-primary text-grace-primary font-extrabold' : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" /> Safety Policy
                  </button>
                  <button 
                    onClick={() => setActivePolicyTab('environment')}
                    className={`pb-2 border-b-2 transition-all flex items-center gap-1.5 ${
                      activePolicyTab === 'environment' ? 'border-grace-primary text-grace-primary font-extrabold' : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    <Leaf className="w-3.5 h-3.5" /> Environment Policy
                  </button>
                  <button 
                    onClick={() => setActivePolicyTab('mission')}
                    className={`pb-2 border-b-2 transition-all flex items-center gap-1.5 ${
                      activePolicyTab === 'mission' ? 'border-grace-primary text-grace-primary font-extrabold' : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    <HeartHandshake className="w-3.5 h-3.5" /> Mission & Values
                  </button>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 italic leading-relaxed">
                  {activePolicyTab === 'quality' && <div>"{classNameAboutInfo.qualityPolicy}"</div>}
                  {activePolicyTab === 'safety' && <div>"{classNameAboutInfo.safetyPolicy}"</div>}
                  {activePolicyTab === 'environment' && <div>"{classNameAboutInfo.environmentPolicy}"</div>}
                  {activePolicyTab === 'mission' && <div>"{classNameAboutInfo.mission}"</div>}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-slate-900 hover:bg-grace-primary text-white text-xs font-bold transition-colors flex items-center gap-2 rounded-xl"
                >
                  Read Full Corporate Profile & Credentials <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <ImagePlaceholder 
                label="Director & Executive Leadership Showcase" 
                height="h-64" 
                category="Director & Corporate Office Noida"
              />
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium space-y-2">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Noida Head Office</span>
                  <span className="text-grace-primary font-mono text-[11px]">Sector 65</span>
                </div>
                <div className="text-slate-600">A-60, Sector 65, Noida, G.B Nagar, U.P-201301</div>
                
                <div className="pt-2 border-t border-slate-200 font-bold text-slate-900 flex items-center justify-between">
                  <span>Greater Noida Plant</span>
                  <span className="text-emerald-700 font-mono text-[11px]">UPSIDA Site-5</span>
                </div>
                <div className="text-slate-600">N-20, Surajpur Industrial Area, Site-5, UPSIDA, Greater Noida</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Core Engineering Divisions */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container-versatile">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1 rounded-full shadow-xs">
                Core Capabilities
              </span>
              <h3 className="text-3xl font-bold text-slate-900 font-serif mt-2">
                Our Core Engineering Divisions
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-md font-medium">
              Turnkey 33KV EPC Contracting, LT/HT Panel Fabrication, MEPF Systems, and Railway Coach Stock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Division 1 */}
            <div 
              onClick={() => onNavigate('mep')}
              className="bg-white p-6 border border-slate-200 hover:border-grace-primary/50 rounded-2xl shadow-xs hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-blue-50 text-grace-primary rounded-xl flex items-center justify-center font-bold mb-4 border border-blue-100 group-hover:bg-grace-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-serif group-hover:text-grace-primary transition-colors">
                  Turnkey Contracting
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Substations & switchyards up to 33KV, HT/LT Transformers up to 10MVA, TPN Busducts & cable trays.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-grace-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View MEP Services <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Division 2 */}
            <div 
              onClick={() => onNavigate('products')}
              className="bg-white p-6 border border-slate-200 hover:border-grace-primary/50 rounded-2xl shadow-xs hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-blue-50 text-grace-primary rounded-xl flex items-center justify-center font-bold mb-4 border border-blue-100 group-hover:bg-grace-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-serif group-hover:text-grace-primary transition-colors">
                  Electrical Panels
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  PCC Panels up to 6300A, MCC up to 1600A, APFC up to 1500 KVAR, DG Synchronization up to 8 DG sets.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-grace-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Panels Catalog <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Division 3 */}
            <div 
              onClick={() => onNavigate('manufacturing')}
              className="bg-white p-6 border border-slate-200 hover:border-grace-primary/50 rounded-2xl shadow-xs hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-blue-50 text-grace-primary rounded-xl flex items-center justify-center font-bold mb-4 border border-blue-100 group-hover:bg-grace-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Factory className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-serif group-hover:text-grace-primary transition-colors">
                  Mechanical Manufacturing
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  32-machine inventory, CNC Fiber Laser Cutting (1.5kW), 100T CNC Bending, 100kV Powder Coating Plant.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-grace-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Machinery List <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Division 4 */}
            <div 
              onClick={() => onNavigate('railway')}
              className="bg-white p-6 border border-slate-200 hover:border-grace-primary/50 rounded-2xl shadow-xs hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-blue-50 text-grace-primary rounded-xl flex items-center justify-center font-bold mb-4 border border-blue-100 group-hover:bg-grace-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Train className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-serif group-hover:text-grace-primary transition-colors">
                  Railway Products
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  SS-316 Bio Retention Tanks for passenger coaches, electrical fuse boxes, and RDSO enclosures.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-grace-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Railway Division <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Electrical Panels Catalog Highlight */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container-versatile">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Manufacturing Range
              </span>
              <h3 className="text-3xl font-bold text-slate-900 font-serif mt-2">
                Featured Electrical Panels Range
              </h3>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-grace-primary text-white text-xs font-bold transition-colors flex items-center gap-2 rounded-xl shadow-xs hover:shadow-md"
            >
              View Complete Panels Catalog <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productRangeCategory[0].items.slice(0, 3).map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate('products')}
                className="bg-white border border-slate-200 hover:border-grace-primary/50 rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="overflow-hidden">
                    <ImagePlaceholder 
                      label={item.name} 
                      height="h-44" 
                      category={`Panel Rating: ${item.rating}`}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-mono font-bold text-grace-primary bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                      Rating: {item.rating}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 font-serif mt-3 group-hover:text-grace-primary transition-colors">{item.name}</h4>
                    <p className="text-xs text-slate-600 mt-2 font-sans leading-relaxed">{item.detail}</p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-[11px] font-semibold text-slate-700">
                      {item.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={(e) => { e.stopPropagation(); onNavigate('products'); }}
                    className="w-full py-2.5 bg-slate-50 group-hover:bg-grace-primary group-hover:text-white border border-slate-200 group-hover:border-grace-primary text-slate-900 text-xs font-bold transition-all rounded-xl shadow-xs"
                  >
                    View Panel Specifications
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Machinery & In-House Testing Power */}
      <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="container-versatile">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                Factory Capability
              </span>
              <h3 className="text-3xl font-bold font-serif leading-tight">
                Machinery & In-House Testing Power
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our Greater Noida manufacturing plant features <span className="text-cyan-400 font-bold">32 heavy machinery units</span> including CNC Fiber Laser Cutting (1.5 KW), 100 Ton CNC Bending, 30 Ton Busbar Processor, and 100 kV Powder Coating Booth with 200–250°C curing ovens.
              </p>

              {/* Machinery Highlight Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-200 pt-2">
                <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-xl space-y-1">
                  <div className="text-cyan-400 font-mono font-bold text-sm">1.5 KW CNC Laser</div>
                  <div className="text-slate-400 text-[11px]">Precision Sheet Cutting</div>
                </div>
                <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-xl space-y-1">
                  <div className="text-cyan-400 font-mono font-bold text-sm">40–100 Ton Bending</div>
                  <div className="text-slate-400 text-[11px]">Up to 16mm CNC Bending</div>
                </div>
                <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-xl space-y-1">
                  <div className="text-cyan-400 font-mono font-bold text-sm">30 Ton Busbar</div>
                  <div className="text-slate-400 text-[11px]">Hydraulic Busbar Processor</div>
                </div>
                <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-xl space-y-1">
                  <div className="text-cyan-400 font-mono font-bold text-sm">100 kV Coating</div>
                  <div className="text-slate-400 text-[11px]">Electrostatic Powder Booth</div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('manufacturing')}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                View Full 32 Machine Inventory <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right QA/QC Testing Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-slate-800/90 border border-slate-700/80 rounded-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                  <h4 className="font-serif font-bold text-base text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" /> In-House QA/QC Testing Bench
                  </h4>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">100% Tested</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300 font-medium">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>High Voltage Insulation Test Set (2.5 / 5 KV Automatic)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Fluke & Rushall Automatic Multi-Meters & Flexible CT up to 4000A</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Secondary Injection Relay Testing & ACB Release Test Kit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>200 MΩ 5KV IR Testers, Phase Sequence & Thermal Imager Scans</span>
                  </div>
                </div>
              </div>

              <ImagePlaceholder 
                label="QA/QC Panel High Voltage Testing Bench" 
                height="h-36" 
                category="In-House 5KV HV Test Set & Fluke Analyzers"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Our Valued Clients & Channel Partners Marquee */}
      <ClientLogosMarquee />

    </div>
  );
};

export default HomePage;
