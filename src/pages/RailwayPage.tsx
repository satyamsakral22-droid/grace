import React from 'react';
import { Train, Clock } from 'lucide-react';

interface Props {
  onOpenInquiry?: (productName?: string) => void;
}

export const RailwayPage: React.FC<Props> = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-center items-center py-24 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-50 border border-slate-200 p-10 rounded-3xl shadow-sm">
        
        <div className="w-16 h-16 bg-blue-50 text-grace-primary rounded-2xl flex items-center justify-center mx-auto border border-blue-100 shadow-inner">
          <Train className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-amber-600" /> Page Under Development
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
            Railway Division
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            This page content is kept empty for now as requested. Details on RDSO Railway stock components will be published soon.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RailwayPage;
