import React from 'react';
import { Sparkles, Layers, Info } from 'lucide-react';

interface Props {
  conceptId: number;
  title: string;
  subtitle: string;
  highlights: string[];
}

export const ConceptLabel: React.FC<Props> = ({ conceptId, title, subtitle, highlights }) => {
  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 py-3 px-4 sm:px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 bg-grace-primary text-white font-bold rounded text-[11px] tracking-wide uppercase flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Concept {conceptId}
          </span>
          <div>
            <h4 className="font-bold text-white text-sm leading-none">{title}</h4>
            <p className="text-slate-400 text-[11px] mt-0.5">{subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {highlights.map((item, idx) => (
            <span key={idx} className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded-full text-[11px] font-medium border border-slate-700">
              ✓ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
