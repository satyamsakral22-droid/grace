import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, FileText } from 'lucide-react';
import { companyData } from '../../data/graceData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuickInquiryModal: React.FC<Props> = ({ isOpen, onClose, defaultProduct = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: defaultProduct || 'Turnkey Electrical Contracting',
    estimatedLoad: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        <div className="bg-gradient-to-r from-grace-navy via-grace-deep to-grace-primary p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-white/10 px-2.5 py-1 rounded-full">
              Instant Technical Inquiry
            </span>
            <h3 className="text-xl font-bold mt-2 font-serif text-white">Send Direct Technical Inquiry</h3>
            <p className="text-xs text-blue-100 mt-1">Connect with Grace MEP engineering team for immediate technical consultation.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Inquiry Received Successfully!</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm">
                Thank you for contacting <strong className="text-grace-primary">{companyData.name}</strong>. Our senior electrical engineer will get in touch with you shortly.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-2.5 bg-grace-primary text-white font-medium rounded-lg hover:bg-grace-bright transition-colors shadow-md"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Satyam Sakral"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grace-primary focus:bg-white text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Larsen & Toubro / Private Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grace-primary focus:bg-white text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grace-primary focus:bg-white text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99900 95954"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grace-primary focus:bg-white text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Service / Requirement</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grace-primary focus:bg-white text-slate-800"
                  >
                    <option value="Turnkey Electrical Contracting">Turnkey Electrical Contracting (Substation 33KV)</option>
                    <option value="Power Control Center (PCC Panel)">PCC Panel (Up to 6300A)</option>
                    <option value="Motor Control Center (MCC Panel)">MCC Panel (Up to 1600A)</option>
                    <option value="Automatic Power Factor Correction (APFC)">APFC Panel (Up to 1500 KVAR)</option>
                    <option value="DG Synchronization Panel">DG Synchronization Panel (Up to 8 DG)</option>
                    <option value="MEPF Engineering Services">MEPF (Fire, HVAC, Plumbing)</option>
                    <option value="Railway Coach Components">Railway Division (Retention Tanks / Fuse Boxes)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Estimated Electrical Load (kVA/Amps)</label>
                  <input
                    type="text"
                    placeholder="e.g. 1000 kVA / 1600A"
                    value={formData.estimatedLoad}
                    onChange={(e) => setFormData({ ...formData, estimatedLoad: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grace-primary focus:bg-white text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Project Details / Specifications</label>
                <textarea
                  rows={3}
                  placeholder="Describe your project scope, location, or technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-grace-primary focus:bg-white text-slate-800"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-grace-primary" /> +91-9990095954</span>
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-grace-primary" /> info@gracemep.com</span>
                </div>

                <div className="flex gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-grace-primary to-grace-bright text-white font-medium rounded-lg hover:shadow-lg transition-all text-sm flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
