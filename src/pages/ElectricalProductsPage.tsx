import React, { useState } from 'react';
import { Search, ShieldCheck, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { productRangeCategory } from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

export const ElectricalProductsPage: React.FC<Props> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      
      {/* Header Banner */}
      <section className="py-10 sm:py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="container-versatile">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Noida Unit Manufacturing</span>
          <h1 className="text-2xl sm:text-4xl font-black font-serif text-white mt-1">Electrical Panels & Automation Catalog</h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Grace Group is a trusted manufacturer and supplier of all type LT panels including PCC, MCC, APFC, DG Synchronization, and PLC control panels from our Noida unit.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="container-versatile flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search panels (e.g. PCC 6300A, APFC, 8 DG Sync)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-grace-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'all' ? 'bg-grace-primary text-white' : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              All Categories
            </button>
            {productRangeCategory.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat.category ? 'bg-grace-primary text-white' : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                Category {idx + 1}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Panel Categories Display */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container-versatile space-y-10">
          
          {productRangeCategory.map((catGroup, idx) => {
            if (activeCategory !== 'all' && activeCategory !== catGroup.category) return null;

            const filteredItems = catGroup.items.filter(item => 
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.rating.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.detail.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={idx} className="space-y-5">
                <div className="border-b border-slate-200 pb-2.5">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">{catGroup.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredItems.map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                      <div>
                        <ImagePlaceholder 
                          label={`Placeholder: ${item.name}`}
                          height="h-38"
                          category="Panel Image Placeholder"
                        />
                        <div className="p-4 sm:p-5">
                          <span className="text-[11px] font-mono font-bold text-grace-primary bg-blue-50 px-2 py-0.5 rounded">
                            Rating: {item.rating}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 mt-1.5">{item.name}</h3>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 pt-0">
                        <button
                          className="w-full py-2 bg-slate-900 hover:bg-grace-primary text-white text-xs font-bold rounded-xl transition-colors"
                        >
                          View Panel Specifications
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
};
