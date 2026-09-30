import React from 'react';
import { 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  PhoneCall, 
  Server, 
  Layers, 
  CheckCircle2
} from 'lucide-react';
import { TECHNOLOGY_PARTNERS } from '../data/citsData';
import { getPartnerColorTheme } from '../utils/partnerTheme';
import { HeaderAnimatedVisual } from '../components/HeaderAnimatedVisual';

interface PartnersViewProps {
  onOpenConsultation: () => void;
  onNavigateToSolutions?: () => void;
  onNavigateToProducts?: () => void;
}

export const PartnersView: React.FC<PartnersViewProps> = ({ 
  onOpenConsultation,
  onNavigateToSolutions,
  onNavigateToProducts
}) => {
  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#090f1d] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                Technology Ecosystem &bull; Verified OEM Platforms
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Global Technology Partners &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                  Certified OEM Alliances.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                CITS represents and implements proven enterprise manufacturers — avoiding unverified experimental tools to guarantee operational reliability, certified support, and long-term hardware durability.
              </p>

              {/* Quick Jump Shortcuts */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-sky-300">
                  Tier-1 Direct OEM Alliances
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-emerald-300">
                  Certified In-Country Engineers
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-indigo-300">
                  24/7 OEM Escalation Line
                </span>
              </div>
            </div>

            {/* Right Column: Relevant Animated Image & Telemetry Canvas */}
            <div className="lg:col-span-5 w-full">
              <HeaderAnimatedVisual
                activeTab="stack"
                onNavigateToSolutions={onNavigateToSolutions}
                onNavigateToProducts={onNavigateToProducts}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNOLOGY_PARTNERS.map((partner) => {
            const theme = getPartnerColorTheme(partner.name);
            return (
              <div
                key={partner.name}
                className={`bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs ${theme.lightHoverBorder} hover:shadow-md transition-all flex flex-col justify-between group`}
              >
                {partner.image && (
                  <div className="h-36 w-full relative overflow-hidden bg-slate-950">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-semibold border ${theme.darkBadgeBg} ${theme.darkBadgeText} ${theme.darkBadgeBorder}`}>
                        {theme.displayBadge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-300">
                        Enterprise Tier
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <span className={`font-mono text-xs px-2.5 py-1 rounded font-semibold border ${theme.lightBadgeBg} ${theme.lightBadgeText} ${theme.lightBadgeBorder}`}>
                        {theme.displayBadge}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${theme.dotBg}`} />
                        <span className="text-xs font-mono text-slate-400">Verified Platform</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-extrabold text-slate-900 mt-4 tracking-tight">
                      {partner.name}
                    </h2>
                    <p className="text-xs font-mono text-slate-600 font-medium mt-1">
                      Domain: <span className="text-slate-800">{partner.category}</span>
                    </p>

                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                      {partner.coreStrengths}
                    </p>
                  </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block mb-2">
                    CITS Delivery Competencies:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Hardware sizing &amp; procurement</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sandbox testing &amp; staging</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Ongoing Tier-3 SLA maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Need assistance selecting the right platform?</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Our enterprise consultants evaluate your transaction load, user count, and existing topology to recommend an interoperable architecture.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 whitespace-nowrap transition-colors"
          >
            Request Technology Evaluation
          </button>
        </div>
      </section>

    </div>
  );
};
