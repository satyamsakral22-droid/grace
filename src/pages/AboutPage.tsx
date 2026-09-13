import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Award, Building2, Users, CheckCircle, Heart, 
  Leaf, Zap, FileText, CheckCircle2, FileCheck, ExternalLink, Image as ImageIcon
} from 'lucide-react';
import { companyData, classNameAboutInfo, teamBreakdown } from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';
import { motion } from 'framer-motion';

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
      
      {/* Header Banner */}
      <section className="py-10 sm:py-12 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-grace-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-versatile relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001:2015 Certified | Est. 2008
          </div>
          <h1 className="text-2xl sm:text-4xl font-black font-serif text-white mt-1 tracking-tight leading-tight">
            Grace Electrical &<br className="hidden sm:block" />
            Contractors Pvt. Ltd.
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl mt-2.5 leading-relaxed font-medium">
            18+ years of engineering leadership across India — Turnkey 33KV Substations, LT/HT Panel Manufacturing, Comprehensive MEPF Engineering, and Indian Railways Products from our Noida base since 2008.
          </p>
        </div>
      </section>

      {/* Sub-Navigation Tabs Bar */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="container-versatile">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-3 no-scrollbar text-xs font-bold">
            
            <button
              onClick={() => setSelectedTab('history')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 ${
                selectedTab === 'history'
                  ? 'bg-grace-primary text-white shadow-md'
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
                  ? 'bg-grace-primary text-white shadow-md'
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
                  ? 'bg-grace-primary text-white shadow-md'
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
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Certifications & Approvals</span>
            </button>

          </div>
        </div>
      </section>

      {/* TAB 1: About Company & History */}
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

                {/* Key Statistics Grid */}
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

              <div className="lg:col-span-5 space-y-6">
                <ImagePlaceholder 
                  label="Director & Leadership Office Showcase" 
                  height="h-72" 
                  category="Photo Placeholder: Corporate Director Photo"
                />

                <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-4 text-xs font-mono">
                  <div className="text-sm font-bold font-serif text-cyan-400 uppercase tracking-wider">Official Facilities</div>
                  
                  <div className="space-y-1">
                    <div className="text-slate-400 font-bold uppercase">Head Office (Noida):</div>
                    <div className="text-slate-200">{companyData.headOffice.address}, {companyData.headOffice.city}, {companyData.headOffice.statePin}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-1">
                    <div className="text-slate-400 font-bold uppercase">Manufacturing Plant (Greater Noida):</div>
                    <div className="text-slate-200">{companyData.manufactureUnit.address}, {companyData.manufactureUnit.area}, {companyData.manufactureUnit.cityState}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-400 font-bold">Official Site: www.gracemep.com</span>
                    <button 
                      onClick={() => onOpenInquiry('Grace Profile PDF')}
                      className="px-3 py-1 bg-grace-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
                    >
                      Download PDF 📄
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>
      )}

      {/* TAB 2: Vision, Mission & Policies */}
      {selectedTab === 'vision' && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-10 sm:py-12 bg-slate-50"
        >
          <div className="container-versatile space-y-12">
            
            {/* Vision, Mission, Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-grace-primary rounded-xl flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Our Corporate Vision</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {classNameAboutInfo.vision}
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Our Corporate Mission</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {classNameAboutInfo.mission}
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Our Core Values</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {classNameAboutInfo.values}
                </p>
              </div>
            </div>

            {/* Corporate Policy Statements */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  Executive Governance
                </span>
                <h3 className="text-3xl font-bold text-slate-900 font-serif mt-2">Official Corporate Policies</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-grace-primary" /> Total Quality Policy
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {classNameAboutInfo.qualityPolicy}
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Employee Safety Policy
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {classNameAboutInfo.safetyPolicy}
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600" /> Environment & Energy Policy
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {classNameAboutInfo.environmentPolicy}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>
      )}

      {/* TAB 3: Team & Manpower Breakdown */}
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
              {/* Technical Team Table */}
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

              {/* Official Team Table */}
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

      {/* TAB 4: Certifications & Approvals (PHOTO PLACEHOLDERS SECTION) */}
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

            {/* 6 Certificate Photo Placeholders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. ISO 9001:2015 Certificate Placeholder */}
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
                
                {/* Photo Placeholder Frame */}
                <ImagePlaceholder 
                  label="Certificate Scan Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop ISO 9001:2015 Certificate Image Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 Certificate Photo Placeholder
                </div>
              </div>

              {/* 2. Class-A Electrical Contractor License Placeholder */}
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

                {/* Photo Placeholder Frame */}
                <ImagePlaceholder 
                  label="Contractor License Scan Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop Class-A Electrical Contractor License Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 License Photo Placeholder
                </div>
              </div>

              {/* 3. CPRI / ERDA Type Test Report Placeholder */}
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

                {/* Photo Placeholder Frame */}
                <ImagePlaceholder 
                  label="CPRI Test Certificate Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop CPRI Test Certificate Image Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 Test Report Photo Placeholder
                </div>
              </div>

              {/* 4. MSME / NSIC Registration Placeholder */}
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

                {/* Photo Placeholder Frame */}
                <ImagePlaceholder 
                  label="MSME Registration Certificate Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop MSME / Udyam Certificate Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 MSME Photo Placeholder
                </div>
              </div>

              {/* 5. RDSO / Railway Approval Certificate Placeholder */}
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

                {/* Photo Placeholder Frame */}
                <ImagePlaceholder 
                  label="RDSO Approval Certificate Placeholder" 
                  height="h-56" 
                  category="Photo Placeholder: Drop RDSO Approval Certificate Here"
                />

                <div className="text-[11px] text-center font-mono font-semibold text-slate-400 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
                  📷 RDSO Photo Placeholder
                </div>
              </div>

              {/* 6. OEM Switchgear Channel Partner Certificate Placeholder */}
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

                {/* Photo Placeholder Frame */}
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
