import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Award, Building2, Users, CheckCircle, Heart, 
  Leaf, Zap, FileText, CheckCircle2, FileCheck, ExternalLink, Image as ImageIcon, ArrowRight, Download
} from 'lucide-react';
import { companyData, classNameAboutInfo, teamBreakdown } from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';
import { motion } from 'framer-motion';
import { ParticleOrbs } from '../components/shared/ParticleOrbs';

interface Props {
  activeTab?: string;
  onOpenInquiry: (productName?: string) => void;
}

export const AboutPage: React.FC<Props> = ({ activeTab, onOpenInquiry }) => {
  const [selectedTab, setSelectedTab] = useState<'history' | 'vision' | 'team' | 'certifications'>('history');

  useEffect(() => {
    if (activeTab === 'about-vision') {
      setSelectedTab('vision');
    } else if (activeTab === 'about-team') {
      setSelectedTab('team');
    } else if (activeTab === 'about-certifications') {
      setSelectedTab('certifications');
    } else {
      setSelectedTab('history');
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      
      <section className="py-16 sm:py-20 dark-banner-bg text-white relative overflow-hidden">
        <ParticleOrbs count={5} />
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-20">
          <img decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" alt="" className="w-full h-full object-cover" onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/50" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="container-versatile relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001:2015 Certified | Est. 2008
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-2 tracking-tight leading-tight">
              Grace Electrical &{' '}
              <span className="text-gradient-blue">Contractors Pvt. Ltd.</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed">
              18+ years of engineering leadership across India — Turnkey 33KV Substations, LT/HT Panel Manufacturing, Comprehensive MEPF Engineering, and Indian Railways Products from our Noida base since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container-versatile">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-3 no-scrollbar text-xs font-bold">
            
            <button
              onClick={() => setSelectedTab('history')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 ${
                selectedTab === 'history'
                  ? 'bg-gradient-to-r from-grace-primary to-cyan-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>About Us</span>
            </button>

            <button
              onClick={() => setSelectedTab('vision')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 ${
                selectedTab === 'vision'
                  ? 'bg-gradient-to-r from-grace-primary to-cyan-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Vision, Mission & Policies</span>
            </button>

            <button
              onClick={() => setSelectedTab('team')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 ${
                selectedTab === 'team'
                  ? 'bg-gradient-to-r from-grace-primary to-cyan-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Team & Manpower Breakdown</span>
            </button>

            <button
              onClick={() => setSelectedTab('certifications')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 ${
                selectedTab === 'certifications'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Certifications & Approvals</span>
            </button>

          </div>
        </div>
      </section>

      {selectedTab === 'history' && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-10 sm:py-12 bg-white"
        >
          <div className="container-versatile">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-grace-primary border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" /> 18+ Years Inception (Since 2008)
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-serif">
                  Corporate Profile & Engineering Legacy
                </h2>
                
                <div className="space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed font-medium bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <p className="bg-blue-50/60 p-4 rounded-xl text-slate-800 font-semibold">
                    {classNameAboutInfo.aboutText1}
                  </p>
                  <p>
                    {classNameAboutInfo.aboutText2}
                  </p>
                  <p>
                    {classNameAboutInfo.aboutText3}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {companyData.stats.map((st, i) => (
                    <div key={i} className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center space-y-1">
                      <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-serif">{st.value}</div>
                      <div className="text-xs font-bold">{st.label}</div>
                      <div className="text-[10px] text-slate-400 leading-tight">{st.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 h-48 rounded-2xl overflow-hidden parallax-img-wrap">
                    <img decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" alt="Grace Electrical — engineering innovation" className="w-full h-full object-cover" onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }} />
                  </div>
                  <div className="h-32 rounded-xl overflow-hidden parallax-img-wrap">
                    <img decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" alt="Grace manufacturing precision" className="w-full h-full object-cover" onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }} />
                  </div>
                  <div className="h-32 rounded-xl overflow-hidden parallax-img-wrap">
                    <img decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80" alt="Grace project site" className="w-full h-full object-cover" onError={e => { (e.currentTarget as HTMLImageElement).style.background = '#1e293b'; }} />
                  </div>
                </div>

                <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3 text-xs font-mono relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl" />
                  <div className="text-sm font-bold font-serif text-cyan-400 uppercase tracking-wider relative z-10">Official Facilities</div>
                  
                  <div className="space-y-1 relative z-10">
                    <div className="text-slate-400 font-bold uppercase text-[10px]">Head Office (Noida):</div>
                    <div className="text-slate-200">{companyData.headOffice.address}, {companyData.headOffice.city}, {companyData.headOffice.statePin}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-1 relative z-10">
                    <div className="text-slate-400 font-bold uppercase text-[10px]">Manufacturing Plant (Greater Noida):</div>
                    <div className="text-slate-200">{companyData.manufactureUnit.address}, {companyData.manufactureUnit.area}, {companyData.manufactureUnit.cityState}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between relative z-10">
                    <span className="text-emerald-400 font-bold text-[10px]">www.gracemep.com</span>
                    <button 
                      onClick={() => onOpenInquiry('Grace Profile PDF')}
                      className="px-3 py-1.5 bg-gradient-to-r from-grace-primary to-cyan-500 text-white font-bold rounded-lg transition-all hover:shadow-lg text-[10px]"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>
      )}

      {selectedTab === 'vision' && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 sm:py-16 bg-slate-50"
        >
          <div className="container-versatile space-y-14">

            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-widest text-grace-primary mb-3">
                Corporate Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
                Vision, Mission & Core Values
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-0.5 w-16 bg-gradient-to-r from-grace-primary to-cyan-400 mx-auto mt-4 rounded-full origin-left"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  title: 'Our Corporate Vision',
                  text: classNameAboutInfo.vision,
                  bg: 'from-blue-500 to-cyan-500',
                  img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
                  imgAlt: 'Engineering vision - futuristic infrastructure',
                  accent: 'border-blue-300/50',
                  tint: 'from-blue-900/80 via-blue-900/60 to-blue-800/80',
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: 'Our Corporate Mission',
                  text: classNameAboutInfo.mission,
                  bg: 'from-emerald-500 to-teal-500',
                  img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
                  imgAlt: 'Engineering mission - team collaboration',
                  accent: 'border-emerald-300/50',
                  tint: 'from-emerald-900/85 via-emerald-900/65 to-teal-900/80',
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: 'Our Core Values',
                  text: classNameAboutInfo.values,
                  bg: 'from-indigo-500 to-violet-500',
                  img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
                  imgAlt: 'Core values - engineering excellence',
                  accent: 'border-indigo-300/50',
                  tint: 'from-indigo-900/85 via-indigo-900/65 to-violet-900/80',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border ${card.accent} min-h-[420px] flex flex-col`}
                >
                  <div className="absolute inset-0">
                    <img decoding="async" loading="lazy"
                      src={card.img}
                      alt={card.imgAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80`;
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${card.tint}`} />
                  </div>

                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.bg} flex items-center justify-center text-white shadow-lg mb-5 shine-effect`}>
                      {card.icon}
                    </div>

                    <h3 className="text-xl font-black text-white font-serif leading-tight mb-3">
                      {card.title}
                    </h3>

                    <div className="h-0.5 w-10 bg-white/30 rounded-full mb-4" />

                    <p className="text-white/85 text-sm leading-relaxed flex-1">
                      {card.text}
                    </p>

                    <div className={`mt-6 h-1 w-full bg-gradient-to-r ${card.bg} rounded-full opacity-70`} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-5">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">
                  Executive Governance
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 tracking-tight">
                  Official Corporate Policies
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-0.5 w-16 bg-gradient-to-r from-grace-primary to-cyan-400 mx-auto mt-4 rounded-full origin-left"
                />
              </div>

              {[
                {
                  icon: <CheckCircle className="w-5 h-5" />,
                  title: 'Total Quality Policy',
                  text: classNameAboutInfo.qualityPolicy,
                  img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
                  imgAlt: 'Quality policy - precision engineering inspection',
                  iconBg: 'bg-blue-600',
                  badge: 'ISO 9001:2015',
                  badgeColor: 'bg-blue-50 border-blue-200 text-blue-700',
                  accentBar: 'from-grace-primary to-cyan-400',
                  reverse: false,
                },
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  title: 'Employee Safety Policy',
                  text: classNameAboutInfo.safetyPolicy,
                  img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
                  imgAlt: 'Safety policy - worker with protective equipment',
                  iconBg: 'bg-emerald-600',
                  badge: 'Zero Harm Goal',
                  badgeColor: 'bg-emerald-50 border-emerald-200 text-emerald-700',
                  accentBar: 'from-emerald-500 to-teal-400',
                  reverse: true,
                },
                {
                  icon: <Leaf className="w-5 h-5" />,
                  title: 'Environment & Energy Policy',
                  text: classNameAboutInfo.environmentPolicy,
                  img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
                  imgAlt: 'Environment policy - sustainable industrial energy',
                  iconBg: 'bg-green-600',
                  badge: 'Green Commitment',
                  badgeColor: 'bg-green-50 border-green-200 text-green-700',
                  accentBar: 'from-green-500 to-emerald-400',
                  reverse: false,
                },
              ].map((policy, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col ${policy.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div className="md:w-2/5 h-52 md:h-auto overflow-hidden relative flex-shrink-0 parallax-img-wrap">
                    <img decoding="async" loading="lazy"
                      src={policy.img}
                      alt={policy.imgAlt}
                      className="w-full h-full object-cover"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).style.background = '#1e293b';
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-transparent group-hover:from-slate-900/10 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${policy.badgeColor} backdrop-blur-sm bg-white/80`}>
                        {policy.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${policy.accentBar}`} />

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${policy.iconBg} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                        {policy.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-black text-slate-900 font-serif leading-tight group-hover:text-grace-primary transition-colors">
                          {policy.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {policy.text}
                    </p>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
                      className={`mt-6 h-0.5 w-full bg-gradient-to-r ${policy.accentBar} opacity-30 rounded-full origin-left`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.section>
      )}


      {selectedTab === 'team' && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-10 sm:py-12 bg-white"
        >
          <div className="container-versatile space-y-8">
            <div>
              <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Human Resource Capacity
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-serif mt-2">
                50+ Technical & Administrative Team
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                Skilled engineers, project managers, supervisors, and administrative personnel deployed across Grace Electrical & Contractors Pvt. Ltd. sites pan-India.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white px-5 py-3.5 font-bold text-xs uppercase font-serif flex items-center justify-between">
                  <span>(A) Technical Project Execution Staff</span>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left text-xs min-w-[500px]">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Designation</th>
                        <th className="p-3.5 text-center">Count</th>
                        <th className="p-3.5">Qualification & Experience</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {teamBreakdown.technical.map((t, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{t.title}</td>
                          <td className="p-3.5 text-center font-mono font-extrabold text-grace-primary bg-blue-50/50">{t.count}</td>
                          <td className="p-3.5 text-slate-600 font-medium">{t.qualification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white px-5 py-3.5 font-bold text-xs uppercase font-serif flex items-center justify-between">
                  <span>(B) Official Admin & Commercial Staff</span>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left text-xs min-w-[500px]">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5">Designation</th>
                        <th className="p-3.5 text-center">Count</th>
                        <th className="p-3.5">Qualification & Experience</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {teamBreakdown.official.map((o, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{o.title}</td>
                          <td className="p-3.5 text-center font-mono font-extrabold text-grace-primary bg-blue-50/50">{o.count}</td>
                          <td className="p-3.5 text-slate-600 font-medium">{o.qualification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {selectedTab === 'certifications' && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-10 sm:py-12 bg-amber-50/30"
        >
          <div className="container-versatile space-y-10">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200/80 pb-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
                  Quality Compliance & Government Licenses
                </span>
                <h3 className="text-3xl font-bold text-slate-900 font-serif mt-2">
                  Company Certifications & Quality Approvals
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                  Official certificates, Class-A contractor licenses, CPRI test reports, and quality approvals. <span className="font-bold text-amber-800">Photo placeholders below are ready for certificate scan uploads.</span>
                </p>
              </div>

              <button
                onClick={() => onOpenInquiry('Certificate Copies Request')}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-xl shadow transition-all flex items-center gap-2 flex-shrink-0"
              >
                <FileCheck className="w-4 h-4" /> Request Certificate Copies
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-2xl p-5 shadow-sm space-y-4 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    Quality Management
                  </span>
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">ISO 9001:2015 Certificate</h4>
                  <p className="text-xs text-slate-500">Quality Management System Certification for Electrical Contracting & Panel Manufacturing</p>
                </div>
                
                <ImagePlaceholder 
                  label="Certificate Scan Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop ISO 9001:2015 Certificate Image Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 Certificate Photo Placeholder
                </div>
              </div>

              <div className="bg-white border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-2xl p-5 shadow-sm space-y-4 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    Government License
                  </span>
                  <Award className="w-5 h-5 text-grace-primary" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">Class-A Electrical Contractor License</h4>
                  <p className="text-xs text-slate-500">Approved Class-A License for Erection & Commissioning up to 33 KV Substations</p>
                </div>

                <ImagePlaceholder 
                  label="Contractor License Scan Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop Class-A Electrical Contractor License Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 License Photo Placeholder
                </div>
              </div>

              <div className="bg-white border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-2xl p-5 shadow-sm space-y-4 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Type Test Report
                  </span>
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">CPRI / ERDA Type Test Approval</h4>
                  <p className="text-xs text-slate-500">50kA Short Circuit & Temperature Rise Test Certificates for LT PCC Panels</p>
                </div>

                <ImagePlaceholder 
                  label="CPRI Test Certificate Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop CPRI Test Certificate Image Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 Test Report Photo Placeholder
                </div>
              </div>

              <div className="bg-white border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-2xl p-5 shadow-sm space-y-4 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                    Government Enterprise
                  </span>
                  <Building2 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">MSME & NSIC Government Registration</h4>
                  <p className="text-xs text-slate-500">Udyam Registration & Government Procurement Registration Certificate</p>
                </div>

                <ImagePlaceholder 
                  label="MSME Registration Certificate Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop MSME / Udyam Certificate Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 MSME Photo Placeholder
                </div>
              </div>

              <div className="bg-white border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-2xl p-5 shadow-sm space-y-4 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded border border-red-200">
                    Indian Railways
                  </span>
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">RDSO / Railway Approval Certificate</h4>
                  <p className="text-xs text-slate-500">Approved vendor certification for SS-316 Bio Retention Tanks & Coach Fuse Boxes</p>
                </div>

                <ImagePlaceholder 
                  label="RDSO Approval Certificate Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop RDSO Approval Certificate Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 RDSO Photo Placeholder
                </div>
              </div>

              <div className="bg-white border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-2xl p-5 shadow-sm space-y-4 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200">
                    OEM Authorized Partner
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">Authorized OEM Channel Partner Certificate</h4>
                  <p className="text-xs text-slate-500">Official Switchgear Partner Approval for Schneider, ABB, Siemens & Havells</p>
                </div>

                <ImagePlaceholder 
                  label="OEM Authorization Certificate Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop OEM Partner Certificate Image Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 OEM Certificate Photo Placeholder
                </div>
              </div>

            </div>
          </div>
        </motion.section>
      )}

    </div>
  );
};
