import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ArrowRight, Building } from 'lucide-react';
import { REGIONAL_OFFICES } from '../data/citsData';
import { RegionalOffice } from '../types';

interface RegionalPresenceSectionProps {
  onNavigateToContact: () => void;
}

export const RegionalPresenceSection: React.FC<RegionalPresenceSectionProps> = ({ onNavigateToContact }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("Uganda");
  const activeOffice = REGIONAL_OFFICES.find(o => o.country === selectedCountry) || REGIONAL_OFFICES[0];

  return (
    <section className="py-24 bg-[#0a1120] text-white border-b border-slate-800 relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/80">
            <Globe className="w-3.5 h-3.5" />
            <span>East & Southern Africa Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Local knowledge.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 block sm:inline">
              Regional reach.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Headquartered in Kampala, Uganda, with dedicated operational partners in Zambia and Malawi, CITS delivers unified technology consulting and infrastructure support across the region.
          </p>
        </div>

        {/* 2-Column Hub Layout: Interactive Schematic Map & Verified Coordinate Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Minimalist Digital Schematic of East/Southern Africa */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400 mb-6">
              <span>REGIONAL_TOPOLOGY_GRID</span>
              <span className="text-sky-400 font-semibold">3 OPERATIONAL HUBS</span>
            </div>

            {/* Schematic SVG Map of East & Southern Africa with clickable nodes */}
            <div className="relative w-full h-[320px] bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
              
              {/* Subtle architectural grid lines */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:2rem_2rem]"
                aria-hidden="true"
              />

              {/* Minimal SVG representation of the continent outline & connecting lines */}
              <svg 
                viewBox="0 0 400 360" 
                className="w-full h-full max-w-[340px] text-slate-700/50"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                {/* Simplified East & Southern Africa contour */}
                <path 
                  d="M160 40 L240 60 L280 120 L270 180 L250 240 L210 320 L160 300 L140 220 L120 160 L140 100 Z" 
                  className="stroke-slate-800 fill-slate-900/40"
                  strokeDasharray="4 4"
                />

                {/* Connecting Inter-Hub Data Links */}
                {/* Kampala (approx 210, 100) to Lusaka (approx 190, 220) */}
                <line 
                  x1="220" y1="110" 
                  x2="190" y2="230" 
                  stroke="#0284c7" 
                  strokeWidth="1.5" 
                  strokeDasharray="3 3"
                  className="opacity-70 animate-pulse"
                />
                {/* Kampala (220, 110) to Lilongwe (230, 210) */}
                <line 
                  x1="220" y1="110" 
                  x2="230" y2="210" 
                  stroke="#38bdf8" 
                  strokeWidth="1.5" 
                  strokeDasharray="3 3"
                  className="opacity-70"
                />
                {/* Lusaka (190, 230) to Lilongwe (230, 210) */}
                <line 
                  x1="190" y1="230" 
                  x2="230" y2="210" 
                  stroke="#6366f1" 
                  strokeWidth="1.5" 
                  strokeDasharray="3 3"
                  className="opacity-70"
                />

                {/* Hub Node 1: Kampala, Uganda (220, 110) */}
                <g 
                  onClick={() => setSelectedCountry("Uganda")} 
                  className="cursor-pointer group"
                >
                  <circle cx="220" cy="110" r="14" fill="#0369a1" fillOpacity="0.25" />
                  <circle cx="220" cy="110" r="6" fill="#38bdf8" className="group-hover:scale-125 transition-transform" />
                  <text x="235" y="114" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    UGANDA (HQ)
                  </text>
                </g>

                {/* Hub Node 2: Lusaka, Zambia (190, 230) */}
                <g 
                  onClick={() => setSelectedCountry("Zambia")} 
                  className="cursor-pointer group"
                >
                  <circle cx="190" cy="230" r="12" fill="#0284c7" fillOpacity="0.2" />
                  <circle cx="190" cy="230" r="5" fill="#60a5fa" className="group-hover:scale-125 transition-transform" />
                  <text x="110" y="234" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="monospace">
                    ZAMBIA
                  </text>
                </g>

                {/* Hub Node 3: Lilongwe, Malawi (230, 210) */}
                <g 
                  onClick={() => setSelectedCountry("Malawi")} 
                  className="cursor-pointer group"
                >
                  <circle cx="230" cy="210" r="12" fill="#4f46e5" fillOpacity="0.2" />
                  <circle cx="230" cy="210" r="5" fill="#a5b4fc" className="group-hover:scale-125 transition-transform" />
                  <text x="245" y="214" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="monospace">
                    MALAWI
                  </text>
                </g>
              </svg>

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-500">
                Interactive Schematic: Click node to view location
              </div>
            </div>

            {/* Quick Country Buttons below map */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {REGIONAL_OFFICES.map((office) => {
                const isSelected = office.country === selectedCountry;
                return (
                  <button
                    key={office.country}
                    onClick={() => setSelectedCountry(office.country)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono text-center border transition-all ${
                      isSelected
                        ? 'bg-sky-950 text-sky-300 border-sky-600 font-bold'
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {office.country.toUpperCase()} {office.country === 'Uganda' && '(HQ)'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Verified Coordinates & Direct Entity Details */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="border-b border-slate-800 pb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                <Building className="w-3.5 h-3.5" />
                <span>{activeOffice.role}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {activeOffice.companyName}
              </h3>
              <p className="text-sm text-slate-400 font-mono mt-1">
                Territory: {activeOffice.country}
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <div className="p-2 rounded-lg bg-slate-800 text-sky-400 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Physical Office Address
                </p>
                <p className="font-medium text-white mt-0.5">
                  {activeOffice.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Telephone Contact
                </p>
                <a 
                  href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, '')}`} 
                  className="font-mono font-medium text-white hover:text-sky-300 transition-colors mt-0.5 block"
                >
                  {activeOffice.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <div className="p-2 rounded-lg bg-slate-800 text-indigo-400 shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Inquiries & Support Email
                </p>
                <a 
                  href={`mailto:${activeOffice.email}`} 
                  className="font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors mt-0.5 block"
                >
                  {activeOffice.email}
                </a>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Verified regional entity
              </span>
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors group"
              >
                <span>Full Contact Directory</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
