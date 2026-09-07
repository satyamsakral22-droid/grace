import React from 'react';
import { 
  Phone, Mail, MapPin, ShieldCheck, Linkedin, Youtube, ArrowRight 
} from 'lucide-react';
import { companyData } from '../../data/graceData';

interface Props {
  onNavigate: (pageId: string) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 text-xs border-t border-slate-900">
      <div className="container-versatile grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Corporate Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-grace-navy to-grace-primary text-white font-black text-xl rounded-xl flex items-center justify-center border border-blue-400/20">
              GEC
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base font-serif">GRACE MEP</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Grace Electrical & Contractors</p>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed text-xs">
            Professional Electrical Contracting company established in 2008 at Noida. Specialized in 33KV Substations, LT/HT Electrical Panels, Turnkey MEPF Engineering, and Railway Coach Stock.
          </p>

          <div className="pt-2 flex items-center gap-2">
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 font-bold rounded text-[11px] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001:2015 Certified
            </span>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex items-center gap-3">
            <a 
              href={companyData.socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-grace-primary text-white rounded-lg flex items-center gap-2 text-xs transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn Page
            </a>
            <a 
              href={companyData.socialLinks.youtube} 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-red-600 text-white rounded-lg flex items-center gap-2 text-xs transition-colors"
            >
              <Youtube className="w-3.5 h-3.5 text-red-500" /> YouTube Channel
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h5 className="font-bold text-white text-sm mb-4 uppercase tracking-wider font-serif">Website Pages</h5>
          <ul className="space-y-2.5 text-slate-300 font-medium">
            <li><button onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">Home Page</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors">About Us & Company Profile</button></li>
            <li><button onClick={() => onNavigate('mep')} className="hover:text-cyan-400 transition-colors">MEP & Turnkey Contracting</button></li>
            <li><button onClick={() => onNavigate('products')} className="hover:text-cyan-400 transition-colors">Electrical Panels Range</button></li>
            <li><button onClick={() => onNavigate('manufacturing')} className="hover:text-cyan-400 transition-colors">Mechanical Manufacturing</button></li>
            <li><button onClick={() => onNavigate('railway')} className="hover:text-cyan-400 transition-colors">Railway Products Division</button></li>
            <li><button onClick={() => onNavigate('gallery')} className="hover:text-cyan-400 transition-colors">Gallery & Team Showcase</button></li>
            <li><button onClick={() => onNavigate('careers')} className="hover:text-cyan-400 transition-colors">Careers & Job Openings</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors">Contact Details & Map</button></li>
          </ul>
        </div>

        {/* Col 3: Addresses */}
        <div className="space-y-4">
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-grace-primary" /> Head Office (Noida)
            </h5>
            <p className="text-slate-300 font-medium leading-relaxed">
              {companyData.headOffice.address}, {companyData.headOffice.city}<br />
              {companyData.headOffice.statePin}
            </p>
            <a 
              href="https://maps.app.goo.gl/nkJGijSHN3fAEwnc6" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1 mt-1.5 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <MapPin className="w-3 h-3 text-cyan-400" /> View Office Map 📍
            </a>
          </div>

          <div className="pt-2 border-t border-slate-900">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Manufacturing Unit (Greater Noida)
            </h5>
            <p className="text-slate-300 font-medium leading-relaxed">
              {companyData.manufactureUnit.address}<br />
              {companyData.manufactureUnit.area}<br />
              {companyData.manufactureUnit.cityState}
            </p>
            <a 
              href="https://maps.app.goo.gl/yKTEx9SXTv1jBk9p8" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1 mt-1.5 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MapPin className="w-3 h-3 text-emerald-400" /> View Factory Map 📍
            </a>
          </div>
        </div>

        {/* Col 4: Contact Support */}
        <div>
          <h5 className="font-bold text-white text-sm mb-4 uppercase tracking-wider font-serif">Contact Information</h5>
          <div className="space-y-2 text-slate-300 font-mono">
            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-cyan-400" /> 0120-3511739, 3512647</p>
            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-emerald-400" /> +91-9990095954, 9891280077</p>
            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-grace-cyan" /> info@gracemep.com</p>
            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-grace-cyan" /> nk@gracemep.com</p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="mt-5 w-full py-2.5 bg-gradient-to-r from-grace-primary to-grace-bright text-white font-bold rounded-xl shadow hover:shadow-lg transition-all text-xs flex items-center justify-center gap-2"
          >
            Reach Out To Us <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="container-versatile pt-8 mt-10 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-2">
        <div>© 2026 {companyData.name}. All rights reserved.</div>
        <div className="font-mono text-slate-400">Website: www.gracemep.com</div>
      </div>
    </footer>
  );
};
