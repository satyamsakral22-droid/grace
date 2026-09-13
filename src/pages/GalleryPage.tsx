import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Camera, Video, Image as ImageIcon, X, ChevronLeft, ChevronRight,
  Download, Play, Layers, Factory, Building2, ZoomIn, Grid3x3
} from 'lucide-react';
import { allMedia, mainMedia, factoryMedia, MediaItem } from '../data/galleryData';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

type TabCategory = 'all' | 'main' | 'factory' | 'videos';

const HERO_VIDEO = '/factory/Annexure- K  Video M&P.mp4';

export const GalleryPage: React.FC<Props> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<TabCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(36);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredMedia = useMemo(() => {
    if (activeTab === 'main') return allMedia.filter(m => m.folder === 'main');
    if (activeTab === 'factory') return allMedia.filter(m => m.folder === 'factory');
    if (activeTab === 'videos') return allMedia.filter(m => m.type === 'video');
    return allMedia;
  }, [activeTab]);

  const visibleMedia = filteredMedia.slice(0, displayCount);
  const activeItem = selectedIndex !== null ? filteredMedia[selectedIndex] : null;
  const videoCount = useMemo(() => allMedia.filter(m => m.type === 'video').length, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredMedia.length - 1 : selectedIndex - 1);
  }, [selectedIndex, filteredMedia.length]);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredMedia.length - 1 ? 0 : selectedIndex + 1);
  }, [selectedIndex, filteredMedia.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [isLightboxOpen, closeLightbox, goPrev, goNext]);

  const tabs = [
    { id: 'all' as const, label: 'All Media', icon: <Grid3x3 className="w-4 h-4" />, count: allMedia.length },
    { id: 'main' as const, label: 'Projects & Sites', icon: <Building2 className="w-4 h-4" />, count: mainMedia.length },
    { id: 'factory' as const, label: 'Manufacturing', icon: <Factory className="w-4 h-4" />, count: factoryMedia.length },
    { id: 'videos' as const, label: 'Videos', icon: <Video className="w-4 h-4" />, count: videoCount },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* ── Header ─────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-8 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-grace-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-versatile relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 badge-premium rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            <Camera className="w-3.5 h-3.5" /> Official Media Showcase
          </div>
          <h1 className="text-2xl sm:text-4xl font-black font-serif text-white tracking-tight leading-tight">
            Gallery &<span className="text-gradient-blue"> Media</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            Explore our manufacturing plant in Greater Noida, CNC fabrication processes, substation projects, and completed MEP & Railway installations across India.
          </p>

          {/* Stats badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { icon: <Building2 className="w-4 h-4 text-cyan-400" />, label: "Project Photos", count: mainMedia.length },
              { icon: <Factory className="w-4 h-4 text-amber-400" />, label: "Factory Photos", count: factoryMedia.filter(m => m.type === 'image').length },
              { icon: <Video className="w-4 h-4 text-violet-400" />, label: "Videos", count: videoCount },
              { icon: <Layers className="w-4 h-4 text-emerald-400" />, label: "Total Assets", count: allMedia.length },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl">
                {s.icon}
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">{s.label}</p>
                  <p className="text-xs sm:text-sm font-black text-white">{s.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Factory Video Feature ─────────────────────────────── */}
      <section className="pb-12 border-b border-slate-800">
        <div className="container-versatile">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-violet-500/20 border border-violet-500/30 rounded-xl flex items-center justify-center">
              <Play className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Featured Video</p>
              <h2 className="text-lg font-black text-white font-serif">Factory & Project Operations</h2>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl max-w-5xl">
            <video
              src={HERO_VIDEO}
              poster={factoryMedia[5]?.path}
              controls
              preload="metadata"
              className="w-full aspect-video object-cover"
            />
          </div>
          <p className="text-xs text-slate-600 font-mono mt-3">
            Grace Electrical & Contractors Pvt. Ltd. — Greater Noida UPSIDA Manufacturing Plant — M&P Division
          </p>
        </div>
      </section>

      {/* ── Tab Filters ──────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 py-4">
        <div className="container-versatile">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setDisplayCount(36); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs flex-shrink-0 transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-grace-primary text-white shadow-lg shadow-grace-primary/25'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600'
                }`}
              >
                {tab.icon}
                {tab.label}
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-slate-800'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Masonry Gallery Grid ──────────────────────────────── */}
      <div className="container-versatile py-10">
        <div className="masonry-grid">
          {visibleMedia.map((item, idx) => (
            <div
              key={item.id}
              className="masonry-item group relative cursor-pointer rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
              onClick={() => openLightbox(filteredMedia.indexOf(item))}
            >
              {item.type === 'video' ? (
                <div className="relative">
                  <video
                    src={item.path}
                    className="w-full object-cover"
                    preload="metadata"
                    muted
                  />
                  {/* Video play overlay */}
                  <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-violet-600 text-white px-2.5 py-1 rounded-lg">
                    VIDEO
                  </span>
                </div>
              ) : (
                <div className="relative">
                  <motion.img
                    src={item.path}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.02 }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const wrapper = e.currentTarget.parentElement;
                      if (wrapper) {
                        wrapper.style.height = '180px';
                        wrapper.style.background = '#1e293b';
                        wrapper.style.display = 'flex';
                        wrapper.style.alignItems = 'center';
                        wrapper.style.justifyContent = 'center';
                        const text = document.createElement('span');
                        text.className = 'text-xs text-slate-500';
                        text.textContent = item.rawFilename;
                        wrapper.appendChild(text);
                      }
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs font-bold text-white">{item.title}</p>
                      <p className="text-[10px] text-slate-400">{item.category}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        {displayCount < filteredMedia.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setDisplayCount(prev => prev + 24)}
              className="px-10 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-white font-bold rounded-2xl transition-all text-sm"
            >
              Load More — {filteredMedia.length - displayCount} remaining
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox / Fullscreen Modal ───────────────────────── */}
      <AnimatePresence>
        {isLightboxOpen && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lightbox-backdrop flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-6xl w-full max-h-[92vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Counter */}
              <div className="absolute -top-12 left-0 text-white/60 text-xs font-mono">
                {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredMedia.length}
              </div>

              {/* Media */}
              <div className="rounded-2xl overflow-hidden bg-slate-900 flex-1 flex items-center justify-center">
                {activeItem.type === 'video' ? (
                  <video
                    key={activeItem.path}
                    src={activeItem.path}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh] object-contain"
                  />
                ) : (
                  <img
                    key={activeItem.path}
                    src={activeItem.path}
                    alt={activeItem.title}
                    className="w-full max-h-[80vh] object-contain"
                  />
                )}
              </div>

              {/* Caption */}
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">{activeItem.title}</p>
                  <p className="text-slate-500 text-xs">{activeItem.category} • {activeItem.folder}</p>
                </div>
              </div>

              {/* Prev / Next */}
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;
