import React from 'react';
import { 
  Factory, Cpu, ShieldCheck, CheckCircle, Flame, Wrench, Layers 
} from 'lucide-react';
import { machineryStrengthList, testingStrengthList, companyData } from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

export const MechanicalManufacturingPage: React.FC<Props> = ({ onOpenInquiry }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      
      {/* Header Banner */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="container-versatile">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Surajpur Site-5 Plant, Greater Noida</span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-1">Mechanical Manufacturing & Testing Strength</h1>
          <p className="text-sm text-slate-400 max-w-2xl mt-2">
            In-house sheet metal fabrication, CNC Fiber Laser Cutting, CNC Bending, 100kV Electrostatic Powder Coating, and 5KV High Voltage Testing.
          </p>
        </div>
      </section>

      {/* Machinery Strength List (32 Items from PDF) */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="container-versatile">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-grace-light px-3 py-1 rounded-full">
                Factory Inventory
              </span>
              <h2 className="text-3xl font-bold text-slate-900 font-serif mt-2">
                Machinery Strength (32 Equipment Setup)
              </h2>
            </div>
            <button
              onClick={() => onOpenInquiry('Factory Manufacturing Setup')}
              className="px-5 py-2.5 bg-grace-primary text-white text-xs font-bold rounded-xl shadow"
            >
              Inquire Manufacturing Specs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machineryStrengthList.map((m, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm flex items-center justify-between">
                <span>{m}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Powder Coating Process */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="container-versatile">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-grace-primary uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full">
                In-House Finishing
              </span>
              <h2 className="text-3xl font-bold text-slate-900 font-serif">
                Powder Coating Plant & Oven (200–250°C)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Powder coating is applied electrostatically as a free-flowing dry powder and cured under heat (200–250°C) to form a tough skin far superior to liquid paint.
              </p>
              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">✓ Thermoset & Thermoplastic Powder Coating Options</div>
                <div className="flex items-center gap-2">✓ Electrostatic Fluidized Bed & Magnetic Brush (EMB) Coating</div>
                <div className="flex items-center gap-2">✓ 100 kV Electrostatic Spray Setup</div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <ImagePlaceholder 
                label="Powder Coating Booth & 250°C Curing Oven" 
                height="h-56" 
                category="Placeholder: Powder Coating Plant"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Testing Strength (14 Items from PDF) */}
      <section className="py-14 bg-white">
        <div className="container-versatile">
          <div className="mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
              In-House Quality Control
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-serif mt-2">
              Testing Strength (Complete QC Setup)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testingStrengthList.map((t, i) => (
              <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
