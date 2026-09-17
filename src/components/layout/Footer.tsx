import React from 'react';
import {
  Phone, Mail, MapPin, ShieldCheck, Linkedin, Youtube, ArrowRight,
  Download, Zap, Cpu, Factory, Train, ChevronRight, ExternalLink
} from 'lucide-react';
import { companyData } from '../../data/graceData';

interface Props {
  onNavigate: (pageId: string) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      <div className="divider-industrial" />

      <div className="bg-gradient-to-r from-grace-primary via-grace-bright to-cyan-600 py-10 relative overflow-hidden shine-effect">
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-8" aria-hidden="true">
          <path d="M 0 50% Q 30% 20% 60% 50% T 120% 50%" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" className="circuit-line" />
        </svg>
        <div className="container-versatile relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">
                ISO 9001:2015 Certified | Class-A Electrical Contractor | Est. 2008
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif leading-tight">
                Ready to Start Your Electrical Project?
              </h3>
              <p className="text-blue-100/80 text-sm mt-1">
                Get a detailed quotation within 24 hours from our Noida engineering team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-white hover:bg-slate-100 text-grace-primary font-black text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 justify-center hover:-translate-y-0.5 ripple-effect"
              >
                Get a Quotation <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenInquiry('Grace Company Profile PDF')}
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm rounded-xl transition-all flex items-center gap-2 justify-center hover:border-white/50"
              >
                <Download className="w-4 h-4" /> Company Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 border-b border-slate-900">
        <div className="container-versatile grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-grace-navy to-grace-primary text-white font-black text-xl rounded-xl flex items-center justify-center border border-grace-primary/30 shadow-lg">
                <span className="text-gradient-white text-sm font-black">GEC</span>
              </div>
              <div>
                <h4 className="font-black text-white text-base font-serif leading-none">GRACE</h4>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Electrical & Contractors Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Professional Electrical Contracting & Panel Manufacturing company established in 2008 at Noida. Specializing in 33KV Substations, LT/HT Panels, Turnkey MEPF Engineering, and Railway Coach Products.
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded-lg text-[10px] flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3" /> ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold rounded-lg text-[10px]">
                Class-A Contractor
              </span>
              <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold rounded-lg text-[10px]">
                Est. 2008
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={companyData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyData.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-red-600 border border-slate-800 hover:border-red-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${companyData.emails[0]}`}
                className="w-9 h-9 bg-slate-900 hover:bg-grace-primary border border-slate-800 hover:border-grace-primary rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-5 uppercase tracking-wider font-serif border-b border-slate-800 pb-3">
              Quick Navigation
            </h5>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Us & Profile', page: 'about' },
                { label: 'MEP & Turnkey Contracting', page: 'mep', icon: <Zap className="w-3 h-3" /> },
                { label: 'Electrical Panels Range', page: 'products', icon: <Cpu className="w-3 h-3" /> },
                { label: 'Mechanical Manufacturing', page: 'manufacturing', icon: <Factory className="w-3 h-3" /> },
                { label: 'Railway Products Division', page: 'railway', icon: <Train className="w-3 h-3" /> },
                { label: 'Gallery & Media', page: 'gallery' },
                { label: 'Careers', page: 'careers' },
                { label: 'Frequently Asked Questions (FAQ)', page: 'faq' },
                { label: 'Contact Us', page: 'contact' },
              ].map(({ label, page, icon }) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-medium group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    {icon && <span className="text-slate-600 group-hover:text-cyan-400">{icon}</span>}
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-white text-sm mb-5 uppercase tracking-wider font-serif border-b border-slate-800 pb-3">
              Our Facilities
            </h5>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" /> Head Office — Noida
              </div>
              <p className="text-slate-300 font-medium leading-relaxed text-xs">
                {companyData.headOffice.address}, {companyData.headOffice.city}<br />
                {companyData.headOffice.statePin}
              </p>
              <a
                href="https://maps.app.goo.gl/nkJGijSHN3fAEwnc6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> View on Google Maps
              </a>
            </div>

            <div className="space-y-1 pt-4 border-t border-slate-900">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Factory className="w-3.5 h-3.5" /> Manufacturing Plant
              </div>
              <p className="text-slate-300 font-medium leading-relaxed text-xs">
                {companyData.manufactureUnit.address}<br />
                {companyData.manufactureUnit.area}<br />
                {companyData.manufactureUnit.cityState}
              </p>
              <a
                href="https://maps.app.goo.gl/yKTEx9SXTv1jBk9p8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> View Factory on Map
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-5 uppercase tracking-wider font-serif border-b border-slate-800 pb-3">
              Contact Information
            </h5>
            <div className="space-y-3 text-xs font-mono">
              <a href="tel:01203511739" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                <span className="w-7 h-7 bg-slate-900 group-hover:bg-cyan-500/20 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                </span>
                0120-3511739, 3512647
              </a>
              <a href={`tel:${companyData.phones[0]}`} className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors group">
                <span className="w-7 h-7 bg-slate-900 group-hover:bg-emerald-500/20 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </span>
                +91-9990095954
              </a>
              <a href={`tel:${companyData.phones[1]}`} className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors group">
                <span className="w-7 h-7 bg-slate-900 group-hover:bg-emerald-500/20 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </span>
                +91-9891280077
              </a>
              <a href={`mailto:${companyData.emails[0]}`} className="flex items-center gap-3 text-slate-300 hover:text-grace-cyan transition-colors group">
                <span className="w-7 h-7 bg-slate-900 group-hover:bg-grace-cyan/20 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-grace-cyan" />
                </span>
                info@gracemep.com
              </a>
              <a href={`mailto:${companyData.emails[1]}`} className="flex items-center gap-3 text-slate-300 hover:text-grace-cyan transition-colors group">
                <span className="w-7 h-7 bg-slate-900 group-hover:bg-grace-cyan/20 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-grace-cyan" />
                </span>
                nk@gracemep.com
              </a>
            </div>

            <div className="mt-6 space-y-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 bg-gradient-to-r from-grace-primary to-grace-bright text-white font-bold rounded-xl shadow transition-all text-xs flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-grace-primary/20 hover:-translate-y-0.5"
              >
                Contact Us <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenInquiry('Electrical Panel Catalogue')}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold rounded-xl transition-all text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" /> Panel Catalogue PDF
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="container-versatile py-5 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-600 gap-2">
        <div>
          © 2026 <span className="text-slate-400 font-semibold">Grace Electrical & Contractors Pvt. Ltd.</span> All rights reserved.
        </div>
        <div className="flex items-center gap-4 font-mono text-slate-600">
          <span>www.gracemep.com</span>
          <span className="text-slate-800">|</span>
          <span>Noida, U.P. India</span>
        </div>
      </div>
    </footer>
  );
};
