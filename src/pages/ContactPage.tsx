import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Linkedin, Youtube, Send, CheckCircle2, Globe, Clock, Building2, ArrowRight, Zap
} from 'lucide-react';
import { companyData } from '../data/graceData';
import { motion } from 'framer-motion';
import { ParticleOrbs } from '../components/shared/ParticleOrbs';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">

      <section className="py-16 sm:py-20 dark-banner-bg text-white relative overflow-hidden">
        <ParticleOrbs count={5} />
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-15">
          <img decoding="async" loading="lazy"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-950/70" />
        </div>
        <div className="container-versatile relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <Zap className="w-3.5 h-3.5" /> Get In Touch
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-2 tracking-tight leading-tight">
              Contact Grace{' '}
              <span className="text-gradient-blue">Electrical & Contractors</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
              Reach out to our corporate office in Noida or manufacturing plant in Greater Noida for project inquiries, technical specifications, or tender submissions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container-versatile">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: companyData.phones[0], sub: companyData.phones[1], href: `tel:${companyData.phones[0]}`, color: 'text-emerald-500', bg: 'bg-emerald-50 border-emerald-200' },
              { icon: <Mail className="w-5 h-5" />, label: 'Email Us', value: companyData.emails[0], sub: companyData.emails[1], href: `mailto:${companyData.emails[0]}`, color: 'text-grace-primary', bg: 'bg-blue-50 border-blue-200' },
              { icon: <MapPin className="w-5 h-5" />, label: 'Head Office', value: 'Sector 65, Noida', sub: 'G.B Nagar, U.P-201301', href: 'https://maps.app.goo.gl/nkJGijSHN3fAEwnc6', color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200' },
              { icon: <Clock className="w-5 h-5" />, label: 'Response Time', value: '24 Hours', sub: 'Mon–Sat, 9AM–7PM', href: null, color: 'text-violet-500', bg: 'bg-violet-50 border-violet-200' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className={`flex items-center gap-3.5 p-4 ${card.bg} border rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-white shadow-sm border border-white/50 flex items-center justify-center ${card.color} flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{card.label}</p>
                      <p className="text-xs font-bold text-slate-900 truncate">{card.value}</p>
                      <p className="text-[10px] text-slate-500 truncate">{card.sub}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`flex items-center gap-3.5 p-4 ${card.bg} border rounded-2xl`}>
                    <div className={`w-10 h-10 rounded-xl bg-white shadow-sm border border-white/50 flex items-center justify-center ${card.color} flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{card.label}</p>
                      <p className="text-xs font-bold text-slate-900">{card.value}</p>
                      <p className="text-[10px] text-slate-500">{card.sub}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="container-versatile">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            <div className="lg:col-span-5 space-y-5">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-grace-primary/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-grace-primary" />
                    </div>
                    <span className="text-xs font-bold text-grace-primary uppercase tracking-widest">Head Office</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/nkJGijSHN3fAEwnc6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold text-grace-primary hover:text-blue-700 flex items-center gap-1 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    <MapPin className="w-3 h-3" /> Maps
                  </a>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-serif">Noida Corporate Office</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-medium">
                  {companyData.headOffice.address}, {companyData.headOffice.city}<br />
                  {companyData.headOffice.statePin}
                </p>
                <div className="mt-3 h-32 rounded-xl overflow-hidden bg-slate-100 relative">
                  <img decoding="async" loading="lazy"
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
                    alt="Office area — Noida"
                    className="w-full h-full object-cover"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl shadow-md"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Manufacturing Plant</span>
                </div>
                <h3 className="text-base font-bold text-white font-serif">Greater Noida UPSIDA Facility</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                  {companyData.manufactureUnit.address}<br />
                  {companyData.manufactureUnit.area}<br />
                  {companyData.manufactureUnit.cityState}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['32 Machines', 'CNC Laser', 'Powder Coating', '5KV HV Test'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-slate-700 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm"
              >
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Connect With Us</p>
                <div className="flex flex-col gap-2.5">
                  {companyData.landlines.map((ll, i) => (
                    <a key={i} href={`tel:${ll}`} className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-grace-primary transition-colors">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {ll}
                    </a>
                  ))}
                  <a href={`mailto:${companyData.emails[0]}`} className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-grace-primary transition-colors">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    {companyData.emails[0]}
                  </a>
                  <a href={`mailto:${companyData.emails[1]}`} className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-grace-primary transition-colors">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    {companyData.emails[1]}
                  </a>
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                  <a
                    href={companyData.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    href={companyData.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5" /> YouTube
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden"
              >
                <div className="px-7 py-6 bg-gradient-to-r from-slate-950 to-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 hero-grid opacity-10" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-grace-primary/15 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <h2 className="text-lg font-black text-white font-serif">Send us an Inquiry</h2>
                    <p className="text-slate-400 text-xs mt-1">We'll respond within 24 hours with a detailed technical proposal.</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="p-10 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-xl neon-emerald">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-black font-serif text-slate-900">Inquiry Sent Successfully!</h3>
                    <p className="text-slate-500 text-sm mt-2">Our engineering team will review your requirements and respond within 24 hours with a detailed technical quotation.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 btn-primary px-8 py-3 rounded-xl text-white font-bold text-sm shadow-lg shadow-grace-primary/20"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-7 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Mr. Rajesh Kumar"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 input-premium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company Name"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 input-premium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 input-premium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 99900 95954"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 input-premium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 input-premium"
                      >
                        <option>General Inquiry</option>
                        <option>33KV Substation Project</option>
                        <option>Electrical Panel Manufacturing</option>
                        <option>MEP/MEPF Contracting</option>
                        <option>Railway Products (RDSO)</option>
                        <option>Mechanical Manufacturing</option>
                        <option>Company Profile Request</option>
                        <option>Tender Submission</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project requirements — voltage, capacity, site location, timeline, and any specific standards or certifications needed..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 resize-none input-premium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary btn-shimmer-sweep ripple-effect py-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-grace-primary/25"
                    >
                      <Send className="w-4 h-4" /> Submit Inquiry — Get Response in 24hrs
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
