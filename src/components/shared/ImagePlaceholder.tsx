import React, { useState } from 'react';
import { Camera, Play, Maximize2 } from 'lucide-react';

interface Props {
  src?: string;
  label: string;
  height?: string;
  category?: string;
  className?: string;
  onClick?: () => void;
  isVideo?: boolean;
}

export const ImagePlaceholder: React.FC<Props> = ({ 
  src,
  label, 
  height = "h-48", 
  category = "Gallery Image", 
  className = "",
  onClick,
  isVideo = false
}) => {
  const [error, setError] = useState(false);

  if (src && !error) {
    const checkVideo = isVideo || src.toLowerCase().endsWith('.mp4');

    if (checkVideo) {
      return (
        <div 
          onClick={onClick}
          className={`relative group w-full ${height} bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md ${onClick ? 'cursor-pointer' : ''} ${className}`}
        >
          <video 
            src={src} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            muted
            loop
            playsInline
            onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
            onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
          />
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
              {category}
            </span>
            <p className="text-xs font-semibold text-white mt-1 line-clamp-1">{label}</p>
          </div>
        </div>
      );
    }

    return (
      <div 
        onClick={onClick}
        className={`relative group w-full ${height} bg-slate-100 rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        <img 
          src={src} 
          alt={label} 
          onError={() => setError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white opacity-90 group-hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
            {category}
          </span>
          <p className="text-xs font-semibold text-white mt-1 line-clamp-1">{label}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`relative w-full ${height} bg-slate-100 border border-slate-200 p-4 flex flex-col items-center justify-center text-center overflow-hidden transition-all rounded-xl ${onClick ? 'cursor-pointer hover:border-grace-primary' : ''} ${className}`}
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
        </div>
      </div>
    </div>
  );
};

