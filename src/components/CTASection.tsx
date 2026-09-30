import React from 'react';
import { ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
  onNavigateToContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenConsultation,
  onNavigateToContact,
}) => {
  return (
    <section className="py-24 bg-[#090f1d] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Subtle background ambient glow */}
      <div 
        className="pointer-events-none absolute inset-0 bg-radial from-sky-600/10 via-transparent to-transparent opacity-60"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Technology Consultation & Discovery</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1]">
          Let&apos;s solve{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
            the technology challenge.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what you are trying to secure, improve or transform. Our senior technical advisors will evaluate your environment and propose an actionable architecture roadmap.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            id="cta-talk-expert-btn"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-lg shadow-lg shadow-sky-950/60 transition-all group"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="cta-request-consultation-btn"
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
          >
            <span>Request a Consultation</span>
          </button>
        </div>

        {/* Direct verified phone line */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <a href="tel:+256703922319" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kampala Direct: +256 703922319</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <a href="mailto:sales@cits.co.ug" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>sales@cits.co.ug</span>
          </a>
        </div>

      </div>
    </section>
  );
};
