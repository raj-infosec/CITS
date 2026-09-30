import React from 'react';
import { TECHNOLOGY_PARTNERS } from '../data/citsData';
import { Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { getPartnerColorTheme } from '../utils/partnerTheme';

interface TrustStripProps {
  onNavigateToProducts: (productId?: string) => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ onNavigateToProducts }) => {
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
    <section className="bg-[#080d1a] border-b border-slate-800/80 py-8 text-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/60 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300">
            <Shield className="w-3.5 h-3.5 text-sky-400" />
            <span>Verified Technology Platforms &amp; Partner Ecosystem</span>
          </div>
          <button
            onClick={() => onNavigateToProducts()}
            className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1.5 group self-start md:self-auto cursor-pointer"
          >
            <span>Explore Products &amp; Hardware Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Harmonized partner badges with distinctive color combinations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {TECHNOLOGY_PARTNERS.map((partner) => {
            const pId = getProductId(partner.name);
            const theme = getPartnerColorTheme(partner.name);
            return (
              <button
                key={partner.name}
                onClick={() => onNavigateToProducts(pId)}
                className={`relative rounded-xl p-3 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${theme.darkCardBg} ${theme.darkBorder} ${theme.darkHoverBorder} ${theme.darkHoverGlow} group shadow-sm`}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold tracking-wide border truncate max-w-[85%] ${theme.darkBadgeBg} ${theme.darkBadgeText} ${theme.darkBadgeBorder}`}>
                      {theme.displayBadge}
                    </span>
                    <ExternalLink className={`w-3 h-3 ${theme.darkActionText} ${theme.darkActionHover} opacity-75 group-hover:opacity-100 transition-all shrink-0`} />
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dotBg} shrink-0`} />
                    <p className={`font-mono font-bold text-sm tracking-wide text-white ${theme.darkTitleHover} transition-colors truncate`}>
                      {partner.name}
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 mt-2 border-t border-white/5 flex items-center justify-between w-full">
                  <span className={`text-[11px] font-mono font-medium ${theme.darkActionText} ${theme.darkActionHover} transition-colors flex items-center gap-1`}>
                    <span>View Specs &amp; Use Cases</span>
                    <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
