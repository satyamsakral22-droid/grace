import React, { useState } from 'react';
import { X, Upload, CheckCircle2, Send, Briefcase, User, Mail, Phone, FileText } from 'lucide-react';
import { companyData } from '../../data/graceData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export const CareerApplyModal: React.FC<Props> = ({ isOpen, onClose, jobTitle = 'General Application' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    coverNote: ''
  });

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        <div className="bg-gradient-to-r from-grace-navy via-grace-deep to-grace-primary p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-white/10 px-2.5 py-1 rounded-full">
              Direct Candidate Portal
            </span>
            <h3 className="text-xl font-bold mt-2 font-serif text-white">Apply for Role: {jobTitle}</h3>
            <p className="text-xs text-blue-100 mt-1">Submit your application to Grace MEP Human Resources.</p>
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
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Application Submitted!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for applying to <strong className="text-grace-primary">{companyData.name}</strong>. Our HR team will review your resume and contact short-listed candidates.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2.5 bg-grace-primary text-white font-medium text-xs rounded-lg hover:bg-grace-bright"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-grace-primary"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-grace-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99900 95954"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-grace-primary"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Total Experience</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 Years in Electrical Panels"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-grace-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Highest Qualification</label>
                <input
                  type="text"
                  placeholder="e.g. B.Tech Electrical / Diploma / ITI"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-grace-primary"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Upload Resume (PDF / DOCX) *</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50 hover:border-grace-primary transition-colors relative">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-6 h-6 text-grace-primary mx-auto mb-1" />
                  {fileName ? (
                    <span className="font-bold text-emerald-600">{fileName}</span>
                  ) : (
                    <span className="text-slate-500">Click or Drag resume file here to attach</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Cover Note / Remarks</label>
                <textarea
                  rows={2}
                  placeholder="Briefly state your key technical skills and current notice period..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-grace-primary"
                ></textarea>
              </div>

              <div className="pt-3 flex justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-slate-300 rounded-lg font-medium text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-grace-primary text-white font-bold rounded-lg hover:bg-grace-bright flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Application
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
