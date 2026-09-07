import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Linkedin, Youtube, Send, CheckCircle2, Globe, Clock 
} from 'lucide-react';
import { companyData } from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';

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
      
      {/* Header Banner */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="container-versatile">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-1">Contact Grace Electrical & Contractors</h1>
          <p className="text-sm text-slate-400 max-w-2xl mt-2">
            Reach out to our corporate office in Noida or manufacturing plant in Greater Noida for project inquiries, technical specifications, or tender submissions.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 bg-white">
        <div className="container-versatile">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Details & Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Head Office Card */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded">
                    Head Office
                  </span>
                  <a 
                    href="https://maps.app.goo.gl/nkJGijSHN3fAEwnc6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-grace-primary hover:text-blue-700 flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" /> Open in Google Maps 📍
                  </a>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Noida Corporate Office</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {companyData.headOffice.address}, {companyData.headOffice.city}<br />
                  {companyData.headOffice.statePin}
                </p>
                <div className="pt-1">
                  <a 
                    href="https://maps.app.goo.gl/nkJGijSHN3fAEwnc6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-slate-500 hover:text-grace-primary font-mono flex items-center gap-1"
                  >
                    📍 https://maps.app.goo.gl/nkJGijSHN3fAEwnc6
                  </a>
                </div>
              </div>

              {/* Manufacture Unit Card */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded">
                    Manufacturing Unit
                  </span>
                  <a 
                    href="https://maps.app.goo.gl/yKTEx9SXTv1jBk9p8"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" /> Open Factory Map 📍
                  </a>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Greater Noida Factory Plant</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {companyData.manufactureUnit.address}<br />
                  {companyData.manufactureUnit.area}<br />
                  {companyData.manufactureUnit.cityState}
                </p>
                <div className="pt-1">
                  <a 
                    href="https://maps.app.goo.gl/yKTEx9SXTv1jBk9p8"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-slate-500 hover:text-emerald-700 font-mono flex items-center gap-1"
                  >
                    📍 https://maps.app.goo.gl/yKTEx9SXTv1jBk9p8
                  </a>
                </div>
              </div>

              {/* Direct Communications */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-4">
                <h4 className="text-base font-bold font-serif text-white">Direct Communications</h4>
                <div className="space-y-2 text-xs font-mono">
                  <p className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-emerald-400" /> +91-9990095954</p>
                  <p className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-emerald-400" /> +91-9891280077</p>
                  <p className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-cyan-400" /> info@gracemep.com</p>
                  <p className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-cyan-400" /> nk@gracemep.com</p>
                  <p className="flex items-center gap-2.5"><Globe className="w-4 h-4 text-cyan-400" /> www.gracemep.com</p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                  <a 
                    href={companyData.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a 
                    href={companyData.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4" /> YouTube
                  </a>
                </div>
              </div>

              {/* Embedded Google Maps Container */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md bg-white p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-grace-primary" /> Live Google Maps Location
                  </span>
                </div>
                <iframe
                  title="Grace Electrical Noida Head Office Google Maps Location"
                  src="https://maps.google.com/maps?q=A-60,%20Sector%2065,%20Noida,%20Uttar%20Pradesh%20201301&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <a 
                    href="https://maps.app.goo.gl/nkJGijSHN3fAEwnc6"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-grace-primary rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-grace-primary" /> Head Office Map 📍
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/yKTEx9SXTv1jBk9p8"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-emerald-600" /> Factory Plant Map 📍
                  </a>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-grace-light px-3 py-1 rounded-full">
                    Online Inquiry
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif mt-2">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-500 mt-1">Our engineering team will respond within 2 business hours.</p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                    <h4 className="text-2xl font-bold text-slate-900 font-serif">Message Received!</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Grace Electrical & Contractors Pvt. Ltd. We have received your details.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-grace-primary text-white font-bold text-xs rounded-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Satyam Sakral"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grace-primary"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Company Name</label>
                        <input
                          type="text"
                          placeholder="Your Organization"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grace-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="info@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grace-primary"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91-9990095954"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grace-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase mb-1">Inquiry Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grace-primary font-medium"
                      >
                        <option value="Turnkey Electrical Contract">Turnkey 33KV Substation Contract</option>
                        <option value="Electrical Panel Fabrication">Electrical Panel Fabrication (PCC/MCC/APFC)</option>
                        <option value="MEPF Engineering Services">MEPF Services (Fire, HVAC, Plumbing)</option>
                        <option value="Railway Division Requirement">Railway Coach Retention Tanks / Enclosures</option>
                        <option value="General Inquiry">General Business Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase mb-1">Project Details / Message</label>
                      <textarea
                        rows={4}
                        placeholder="Please describe your requirements, specifications, or location..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grace-primary"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-grace-primary to-grace-bright text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all text-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Direct Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
