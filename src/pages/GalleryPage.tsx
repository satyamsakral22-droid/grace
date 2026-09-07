import React, { useState } from 'react';
import { Users, Camera, Building2, Factory, ShieldCheck, Download } from 'lucide-react';
import { companyData } from '../data/graceData';
import { ImagePlaceholder } from '../components/shared/ImagePlaceholder';

interface Props {
  onOpenInquiry: (productName?: string) => void;
}

export const GalleryPage: React.FC<Props> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'leadership' | 'factory' | 'projects'>('leadership');

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      
      {/* Header Banner */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="container-versatile">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Media & Leadership</span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white mt-1">Director & Team Showcase Gallery</h1>
          <p className="text-sm text-slate-400 max-w-2xl mt-2">
            Showcasing the Director, CMD, core leadership, 50+ engineering team members, manufacturing plant workshop, and completed project sites across India.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="container-versatile flex justify-center gap-3">
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'leadership' ? 'bg-grace-primary text-white shadow' : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            Director & Team Members
          </button>
          <button
            onClick={() => setActiveTab('factory')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'factory' ? 'bg-grace-primary text-white shadow' : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            Manufacturing Plant Workshop
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'projects' ? 'bg-grace-primary text-white shadow' : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            Project Sites Gallery
          </button>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-14 bg-white">
        <div className="container-versatile">
          
          {/* Leadership Tab */}
          {activeTab === 'leadership' && (
            <div className="space-y-10">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900 font-serif">Director & Core Leadership Team</h2>
                <p className="text-xs text-slate-500 mt-1">Dedicated team of over 50+ highly skilled professionals across India.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-4 text-center shadow-sm space-y-3">
                  <ImagePlaceholder 
                    label="Director & Board Leadership Photo" 
                    height="h-60" 
                    category="Image Placeholder: Director"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base font-serif">Director / Managing Director</h3>
                    <p className="text-xs text-grace-primary font-bold">Executive Board</p>
                    <p className="text-xs text-slate-500 mt-1">Grace Electrical & Contractors Pvt. Ltd.</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-4 text-center shadow-sm space-y-3">
                  <ImagePlaceholder 
                    label="CMD & Corporate Management" 
                    height="h-60" 
                    category="Image Placeholder: CMD"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base font-serif">CMD (Chairman & Managing Director)</h3>
                    <p className="text-xs text-grace-primary font-bold">Executive Board</p>
                    <p className="text-xs text-slate-500 mt-1">Grace Group Leadership</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-4 text-center shadow-sm space-y-3">
                  <ImagePlaceholder 
                    label="General Manager & Senior Projects Head" 
                    height="h-60" 
                    category="Image Placeholder: GM Projects"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base font-serif">General Manager (Projects)</h3>
                    <p className="text-xs text-grace-primary font-bold">EPC & Operations</p>
                    <p className="text-xs text-slate-500 mt-1">Over 50+ Engineering Team Lead</p>
                  </div>
                </div>
              </div>

              {/* Team Members Grid */}
              <div className="pt-6">
                <h3 className="text-lg font-bold text-slate-900 font-serif mb-4">Engineering & Technical Team Members</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Project Incharge & Power Advisor",
                    "Senior Electrical Design Engineers",
                    "Quality Control & Testing Team",
                    "Site Supervisors & Foremen"
                  ].map((team, idx) => (
                    <ImagePlaceholder 
                      key={idx}
                      label={team}
                      height="h-44"
                      category="Image Placeholder: Team Member"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Factory Workshop Tab */}
          {activeTab === 'factory' && (
            <div className="space-y-8">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900 font-serif">Surajpur Site-5 Manufacturing Plant Workshop</h2>
                <p className="text-xs text-slate-500 mt-1">32 CNC and metal fabrication machinery setups in Greater Noida.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "CNC Fiber Laser Cutting Machine (1.5 KW)",
                  "CNC Bending Machine (100 Ton / 16 mm)",
                  "Hydraulic Busbar Processor (30 Ton)",
                  "Powder Coating Booth & 250°C Curing Oven",
                  "Argon Shielded TIG/MIG Welding Station",
                  "High Voltage 5KV Test Bench & Bench Meter"
                ].map((item, idx) => (
                  <ImagePlaceholder 
                    key={idx}
                    label={item}
                    height="h-52"
                    category="Image Placeholder: Factory Workshop"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Project Sites Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900 font-serif">Completed & Ongoing Project Sites</h2>
                <p className="text-xs text-slate-500 mt-1">Substations, malls, residential high-rises, and industrial facilities across India.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "33KV Switchyard Project Site",
                  "Sparsh Global School MEP Project",
                  "Maruti Suzuki Plant Facility (Hapur)",
                  "Spectrum Metro Mall (Noida)",
                  "PepsiCo Channo Plant (Punjab)",
                  "Emaar Marbella (Gurgaon)"
                ].map((proj, idx) => (
                  <ImagePlaceholder 
                    key={idx}
                    label={proj}
                    height="h-52"
                    category="Image Placeholder: Project Site"
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
