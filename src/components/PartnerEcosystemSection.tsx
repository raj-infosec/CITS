import React, { useState } from 'react';
import { 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  PhoneCall, 
  Server, 
  Code2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { TECHNOLOGY_PARTNERS } from '../data/citsData';
import { getPartnerColorTheme } from '../utils/partnerTheme';

interface PartnerEcosystemSectionProps {
  onLearnMore: () => void;
  onNavigateToProducts?: (productId?: string) => void;
}

export const PartnerEcosystemSection: React.FC<PartnerEcosystemSectionProps> = ({ 
  onLearnMore,
  onNavigateToProducts 
}) => {
  const [selectedPartner, setSelectedPartner] = useState<string>("ARCON PAM");
  const activePartner = TECHNOLOGY_PARTNERS.find(p => p.name === selectedPartner) || TECHNOLOGY_PARTNERS[0];

  const getProductId = (name: string): string | undefined => {
    if (name.includes('ARCON')) return 'arcon-pam';
    if (name.includes('ManageEngine')) return 'manage-engine';
    if (name.includes('PRTG')) return 'prtg-monitor';
    if (name.includes('Sophos')) return 'sophos-cybersecurity';
    if (name.includes('Quorum')) return 'quorum-dr';
    if (name.includes('Vicisoft')) return 'vicisoft-edms';
    if (name.includes('HP') || name.includes('Lenovo') || name.includes('UniFi')) return 'ict-hardware-section';
    return undefined;
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Technology Architecture Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
              The right technology,{' '}
              <span className="text-sky-600 block sm:inline">brought together.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            We integrate world-class platforms into a coherent, managed architecture tailored to the bandwidth and compliance realities of East African business.
          </p>
        </div>

        {/* Dynamic Ecosystem Hub Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Architecture Hub */}
          <div className="lg:col-span-7 bg-[#fafafc] border border-slate-200/90 rounded-2xl p-6 sm:p-8 relative">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-6 flex items-center justify-between">
              <span>CITS INTEGRATION CORE</span>
              <span className="text-sky-600 font-semibold">Select technology platform</span>
            </div>

            {/* Hub Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TECHNOLOGY_PARTNERS.map((partner) => {
                const isSelected = partner.name === selectedPartner;
                const theme = getPartnerColorTheme(partner.name);
                return (
                  <button
                    key={partner.name}
                    onClick={() => setSelectedPartner(partner.name)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? `${theme.lightSelectedBg} text-white ${theme.lightSelectedRing} shadow-md`
                        : `bg-white ${theme.lightHoverBorder} hover:shadow-xs text-slate-800 border-slate-200/90`
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold tracking-wide border truncate ${
                          isSelected
                            ? `${theme.lightSelectedBadge} border-white/20`
                            : `${theme.lightBadgeBg} ${theme.lightBadgeText} ${theme.lightBadgeBorder}`
                        }`}>
                          {theme.displayBadge}
                        </span>
                        <span className={`w-2 h-2 rounded-full ${theme.dotBg} shrink-0`} />
                      </div>
                      <h3 className={`font-bold text-base mt-1 tracking-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {partner.name}
                      </h3>
                    </div>

                    <div className={`mt-3 pt-2 border-t ${isSelected ? 'border-white/15' : 'border-slate-100'}`}>
                      <span className={`text-[11px] font-medium line-clamp-1 ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                        {partner.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 text-center text-xs font-mono text-slate-400">
              Coordinated via CITS Engineering Discovery &amp; Deployment Standards
            </div>
          </div>

          {/* Right: Selected Platform Deep-Dive */}
          <div className="lg:col-span-5 bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="border-b border-slate-800 pb-5">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                Verified Technology Platform
              </span>
              <h3 className="text-3xl font-extrabold text-white mt-1">
                {activePartner.name}
              </h3>
              <p className="text-sm font-mono text-slate-400 mt-1">
                {activePartner.category}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Core Architectural Strength
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {activePartner.coreStrengths}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <span className="font-mono text-emerald-400 uppercase font-semibold">
                CITS Certified Capability
              </span>
              <p className="text-slate-400">
                Full-lifecycle sizing, hardware procurement, sandbox testing, high-availability deployment, and tier-3 SLA escalation.
              </p>
            </div>

            <div className="pt-2 space-y-2">
              {onNavigateToProducts && (
                <button
                  onClick={() => onNavigateToProducts(getProductId(activePartner.name))}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
                >
                  <span>View {activePartner.name} Specs &amp; Use Cases</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={onLearnMore}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-xl transition-colors border border-slate-700"
              >
                <span>Browse Entire Partner Ecosystem</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
