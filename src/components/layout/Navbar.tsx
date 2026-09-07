import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Download, ArrowRight, ShieldCheck, 
  Linkedin, Youtube, Menu, X, ChevronRight, ChevronDown, 
  Building2, Zap, Cpu, Factory, Train, Users, Award, FileText, Image as ImageIcon, Briefcase
} from 'lucide-react';
import { companyData } from '../../data/graceData';

interface Props {
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const Navbar: React.FC<Props> = ({ activePage, onNavigate, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Executive Information & Hotline Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 border-b border-slate-800/80 relative z-50">
        <div className="container-versatile flex items-center justify-between gap-2">
          
          {/* Left: Certifications */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ISO 9001:2015 Certified
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>Head Office: Sector 65, Noida | Plant: Greater Noida</span>
            </span>
          </div>

          {/* Right: Phone & Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
            <a href={`tel:${companyData.phones[0]}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> {companyData.phones[0]}
            </a>
            
            <div className="flex items-center gap-2">
              <a 
                href={companyData.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-5 h-5 bg-slate-900 hover:bg-blue-600 rounded flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 border border-slate-800"
                title="LinkedIn Page"
              >
                <Linkedin className="w-3 h-3" />
              </a>
              <a 
                href={companyData.socialLinks.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="w-5 h-5 bg-slate-900 hover:bg-red-600 rounded flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 border border-slate-800"
                title="YouTube Channel"
              >
                <Youtube className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-2.5' 
          : 'bg-white border-b border-slate-200/70 shadow-xs py-3.5'
      }`}>
        <div className="container-versatile flex items-center justify-between">
          
          {/* Brand Identity Emblem */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-slate-950 via-grace-navy to-grace-primary rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md border border-cyan-400/30 group-hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">GEC</span>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 font-serif tracking-wide leading-none group-hover:text-grace-primary transition-colors">
                GRACE
              </h1>
              <p className="text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mt-1 leading-none">
                ELECTRICAL & CONTRACTORS PRIVATE LIMITED
              </p>
            </div>
          </button>

          {/* Desktop Single-Line Navigation Categories (5 Clean Items with Dropdowns) */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-700 relative">
            
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 px-1 transition-all relative whitespace-nowrap ${
                activePage === 'home' 
                  ? 'text-grace-primary font-extrabold' 
                  : 'hover:text-grace-primary'
              }`}
            >
              <span>Home</span>
              {activePage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-grace-primary to-cyan-500 rounded-full"></span>
              )}
            </button>

            {/* 2. Company Profile Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className={`flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activePage === 'about' 
                    ? 'text-grace-primary font-extrabold' 
                    : 'hover:text-grace-primary'
                }`}
              >
                <span>Company Profile</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-grace-primary' : 'text-slate-400'
                }`} />
                {activePage === 'about' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-grace-primary to-cyan-500 rounded-full"></span>
                )}
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 pt-1.5 w-72 z-50">
                  <div className="bg-white/98 backdrop-blur-lg border border-slate-200/90 rounded-2xl shadow-xl p-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1 border-b border-slate-100 mb-1">
                      Corporate Credentials
                    </div>

                    <button
                      onClick={() => handleNavClick('about-history')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-grace-primary flex items-center justify-center flex-shrink-0 group-hover:bg-grace-primary group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">About Us</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">18+ Years Inception (2008) in Noida</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('about-vision')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">Vision, Mission & Quality</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">ISO 9001:2015 & Corporate Policies</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('about-team')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">Team & Manpower Breakdown</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">50+ Skilled Engineers & Staff</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('about-certifications')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">Certifications & Approvals</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">ISO, Class-A License & CPRI Tests</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Engineering Divisions Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('divisions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'divisions' ? null : 'divisions')}
                className={`flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  ['mep', 'products', 'manufacturing', 'railway'].includes(activePage)
                    ? 'text-grace-primary font-extrabold' 
                    : 'hover:text-grace-primary'
                }`}
              >
                <span>Engineering Divisions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'divisions' ? 'rotate-180 text-grace-primary' : 'text-slate-400'
                }`} />
                {['mep', 'products', 'manufacturing', 'railway'].includes(activePage) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-grace-primary to-cyan-500 rounded-full"></span>
                )}
              </button>

              {activeDropdown === 'divisions' && (
                <div className="absolute top-full -left-10 pt-1.5 w-80 z-50">
                  <div className="bg-white/98 backdrop-blur-lg border border-slate-200/90 rounded-2xl shadow-xl p-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1 border-b border-slate-100 mb-1">
                      Specialized Capabilities
                    </div>

                    <button
                      onClick={() => handleNavClick('mep')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8.5 h-8.5 rounded-lg bg-blue-50 text-grace-primary flex items-center justify-center flex-shrink-0 group-hover:bg-grace-primary group-hover:text-white transition-colors">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">
                          MEP & Turnkey Contracting
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">Substations, Switchyards & Transformers</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('products')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8.5 h-8.5 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">
                          Electrical Panels Range
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">Main LT PCC, MCC, APFC & SCADA Panels</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('manufacturing')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8.5 h-8.5 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Factory className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">
                          Mechanical Manufacturing
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">CNC Laser Cutting & Powder Coating Plant</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('railway')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8.5 h-8.5 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Train className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-grace-primary transition-colors">
                          Railway Products Division
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">SS-316 Bio Retention Tanks & Fuse Boxes</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Media & Gallery */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`py-2 px-1 transition-all relative whitespace-nowrap ${
                activePage === 'gallery' 
                  ? 'text-grace-primary font-extrabold' 
                  : 'hover:text-grace-primary'
              }`}
            >
              <span>Media & Gallery</span>
              {activePage === 'gallery' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-grace-primary to-cyan-500 rounded-full"></span>
              )}
            </button>

            {/* 5. Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`py-2 px-1 transition-all relative whitespace-nowrap ${
                activePage === 'careers' 
                  ? 'text-grace-primary font-extrabold' 
                  : 'hover:text-grace-primary'
              }`}
            >
              <span>Careers</span>
              {activePage === 'careers' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-grace-primary to-cyan-500 rounded-full"></span>
              )}
            </button>

            {/* 6. Contact Us */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-2 px-1 transition-all relative whitespace-nowrap ${
                activePage === 'contact' 
                  ? 'text-grace-primary font-extrabold' 
                  : 'hover:text-grace-primary'
              }`}
            >
              <span>Contact Us</span>
              {activePage === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-grace-primary to-cyan-500 rounded-full"></span>
              )}
            </button>

          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Grace Profile 2026 PDF Request')}
              className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-grace-primary text-slate-800 text-xs font-bold hover:bg-blue-50/50 transition-all flex items-center gap-1.5 group shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-grace-primary group-hover:translate-y-0.5 transition-transform" />
              <span>Profile PDF</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-grace-primary via-blue-600 to-cyan-600 hover:from-grace-bright hover:to-cyan-500 text-white text-xs font-extrabold shadow-md hover:shadow-cyan-500/20 transition-all flex items-center gap-2 group"
            >
              <span>Reach Us</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Drawer Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>

        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            
            <div className="p-3 bg-slate-950 text-white rounded-xl flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> ISO 9001:2015 Certified
              </div>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 font-bold px-2 py-0.5 rounded border border-cyan-500/30">
                Noida & Gr. Noida
              </span>
            </div>

            <div className="space-y-1 text-xs font-bold">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'home' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('about-history')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage.startsWith('about') ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Company Profile & Overview</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('about-certifications')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'about-certifications' ? 'bg-amber-600 text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Certifications & Quality Approvals</span>
                <ChevronRight className="w-4 h-4 text-amber-500" />
              </button>

              <button
                onClick={() => handleNavClick('mep')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'mep' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>33KV Substation & MEP Services</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('products')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'products' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Electrical Panels Range (PCC 6300A)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('manufacturing')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'manufacturing' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Mechanical Manufacturing (32 Machines)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('railway')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'railway' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Railway Products Division (RDSO)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('gallery')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'gallery' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Gallery & Team Showcase</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('careers')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'careers' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Careers & Job Openings</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left py-3 px-3.5 rounded-xl flex items-center justify-between ${
                  activePage === 'contact' ? 'bg-grace-primary text-white' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 font-bold text-xs">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenInquiry('Grace Profile 2026 PDF Request'); }}
                className="w-full py-3 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-grace-primary" /> Download Company Profile PDF
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); handleNavClick('contact'); }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-grace-primary to-cyan-600 text-white shadow-md flex items-center justify-center gap-2"
              >
                <span>Reach Us / Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}
      </header>
    </>
  );
};


