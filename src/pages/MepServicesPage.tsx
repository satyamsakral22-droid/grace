import React from 'react';
import { 
  Zap, Flame, Wind, Layers, ShieldCheck, ArrowRight, CheckCircle, ChevronRight 
} from 'lucide-react';
import { electricalServices, mepfServices, projectProcessingFlowchart } from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

export const MepServicesPage: React.FC<Props> = ({ onOpenInquiry }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      
      {/* Header Banner */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="container-versatile">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Turnkey Contracting</span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-1">Electrical & MEPF Engineering Services</h1>
          <p className="text-sm text-slate-400 max-w-2xl mt-2">
            Grace Group undertakes complete turnkey contracts of Supply, Installation, Testing & Commissioning for 33KV Substations, Electrical, Fire Fighting, Plumbing, HVAC, and Mechanical systems.
          </p>
        </div>
      </section>

      {/* Electrical Turnkey Services */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container-versatile">
          <div className="mb-10">
            <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-grace-light px-3 py-1 rounded-full">
              Up to 33 KV Capability
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-serif mt-2">
              Turnkey Electrical Contracting Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricalServices.map((es, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <ImagePlaceholder 
                    label={`Placeholder: ${es.title}`}
                    height="h-40"
                    category="Service Image Placeholder"
                  />
                  <div className="mt-4">
                    <span className="text-xs font-mono font-bold text-grace-primary bg-blue-50 px-2.5 py-1 rounded">
                      {es.spec}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{es.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{es.description}</p>
                  </div>
                </div>

                <button
                  className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-grace-primary text-white text-xs font-bold rounded-xl transition-colors"
                >
                  View Technical Specification
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEPF Engineering Section */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container-versatile">
          <div className="mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
              Comprehensive MEPF
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-serif mt-2">
              Mechanical, Fire Fighting & Plumbing Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mepfServices.map((mep, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <ImagePlaceholder 
                    label={`Placeholder: ${mep.title}`}
                    height="h-40"
                    category="MEPF Image Placeholder"
                  />
                  <div className="mt-4">
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                      {mep.spec}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{mep.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{mep.description}</p>
                  </div>
                </div>

                <button
                  className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all"
                >
                  View Service Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Stage Project Processing Flowchart */}
      <section className="py-14 bg-white">
        <div className="container-versatile">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-grace-primary uppercase tracking-widest">Quality Execution Cycle</span>
            <h2 className="text-3xl font-bold text-slate-900 font-serif mt-1">Flow Chart (Project Processing)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {projectProcessingFlowchart.map((fc, i) => (
              <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative">
                <span className="text-xl font-mono font-black text-grace-primary opacity-60">Step {fc.step}</span>
                <h4 className="text-xs font-bold text-slate-900">{fc.stage}</h4>
                <p className="text-[11px] text-slate-600 leading-snug">{fc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
