import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface Props {
  label: string;
  height?: string;
  category?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<Props> = ({ 
  label, 
  height = "h-48", 
  category = "Image Placeholder", 
  className = ""
}) => {
  return (
    <div 
      className={`relative w-full ${height} bg-slate-100 border border-slate-200 p-4 flex flex-col items-center justify-center text-center overflow-hidden transition-all ${className}`}
    >
      <div className="space-y-2 max-w-xs">
        <div className="w-9 h-9 mx-auto rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-xs">
          <Camera className="w-4 h-4 text-grace-primary" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-grace-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            [{category}]
          </span>
          <p className="text-xs font-bold text-slate-800 mt-1.5 line-clamp-2 px-2">
            {label}
          </p>
          <span className="text-[10px] text-slate-400 mt-0.5 block">
            Media Pending Client Share
          </span>
        </div>
      </div>
    </div>
  );
};
