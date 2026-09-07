import React from 'react';
import { Briefcase, Clock } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-center items-center py-24 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-50 border border-slate-200 p-10 rounded-3xl shadow-sm">
        
        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto border border-purple-100 shadow-inner">
          <Briefcase className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-amber-600" /> Page Under Development
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            Careers & Talent Acquisition
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Coming Soon! Our careers portal and job application system is currently under development. Please check back later for active job openings.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CareersPage;
