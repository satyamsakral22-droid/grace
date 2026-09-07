import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Zap } from 'lucide-react';

export const LoadEstimatorTool: React.FC = () => {
  const [loadKva, setLoadKva] = useState<number>(500);
  const [voltage, setVoltage] = useState<number>(415); // 415V 3-Phase standard
  const [powerFactor, setPowerFactor] = useState<number>(0.85);

  // 3-Phase Amps Calculation: I = (kVA * 1000) / (√3 * V)
  const currentAmps = Math.round((loadKva * 1000) / (Math.sqrt(3) * voltage));
  // Recommended Busbar rating (with 25% safety margin)
  const recommendedRating = Math.round(currentAmps * 1.25);

  // Recommended Grace Panel Type
  const getPanelRecommendation = (amps: number) => {
    if (amps <= 400) return { name: "Wall Mounted Distribution Panel / Feeder Pillar", rating: "400A IP-55 Enclosure" };
    if (amps <= 1600) return { name: "MCC / Distribution Control Panel", rating: "1600A Draw-out / Fixed" };
    if (amps <= 3200) return { name: "Main LT / PCC Panel", rating: "3200A PCC Panel with ACB" };
    return { name: "Heavy Duty Power Control Center (PCC)", rating: "6300A Fixed & Draw-out PCC Panel" };
  };

  const recommendation = getPanelRecommendation(recommendedRating);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 md:p-8 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-grace-light text-grace-primary rounded-xl flex items-center justify-center font-bold">
          <Calculator className="w-5 h-5 text-grace-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 font-serif">Electrical Load & Panel Capacity Estimator</h3>
          <p className="text-xs text-slate-500">Interactive engineering tool by Grace MEP for quick sizing</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Controls */}
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
              <span>Connected Transformer Load (kVA)</span>
              <span className="text-grace-primary font-bold">{loadKva} kVA</span>
            </div>
            <input
              type="range"
              min="50"
              max="4000"
              step="50"
              value={loadKva}
              onChange={(e) => setLoadKva(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-grace-primary"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>50 kVA</span>
              <span>1000 kVA</span>
              <span>2500 kVA</span>
              <span>4000 kVA</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">System Voltage</label>
              <select
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-grace-primary"
              >
                <option value={415}>415V (3-Phase LT)</option>
                <option value={440}>440V (3-Phase Heavy)</option>
                <option value={11000}>11 KV (HT Grid)</option>
                <option value={33000}>33 KV (Substation Grid)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Target Power Factor (cos φ)</label>
              <select
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-grace-primary"
              >
                <option value={0.80}>0.80 (Uncorrected)</option>
                <option value={0.85}>0.85 (Standard Industrial)</option>
                <option value={0.95}>0.95 (APFC Optimized)</option>
                <option value={0.99}>0.99 (Unity Target)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculated Results Box */}
        <div className="bg-slate-900 text-white rounded-xl p-6 relative overflow-hidden shadow-lg border border-slate-800">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Zap className="w-48 h-48 text-cyan-400" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs uppercase font-medium tracking-wider text-slate-400">Full Load Current</span>
              <span className="text-2xl font-black text-cyan-400 font-mono">{currentAmps} <span className="text-xs font-sans text-slate-300">Amps</span></span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs uppercase font-medium tracking-wider text-slate-400">Rec. Busbar Rating (+25% Margin)</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">{recommendedRating} <span className="text-xs font-sans text-slate-300">Amps</span></span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] uppercase font-bold text-amber-400 tracking-wider">Recommended Grace Panel Solution:</span>
              <p className="text-sm font-bold text-white mt-0.5">{recommendation.name}</p>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">{recommendation.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
