import React from 'react';
import { 
  Building2, 
  Landmark, 
  Factory, 
  Stethoscope, 
  GraduationCap, 
  HeartHandshake, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  Sparkles 
} from 'lucide-react';
import { INDUSTRIES } from '../data/citsData';
import { IndustryItem } from '../types';
import { HeaderAnimatedVisual } from '../components/HeaderAnimatedVisual';

interface IndustriesViewProps {
  onSelectSolution: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ 
  onSelectSolution,
  onOpenConsultation 
}) => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'banking': return <Landmark className="w-6 h-6 text-emerald-600" />;
      case 'government': return <Building2 className="w-6 h-6 text-indigo-600" />;
      case 'manufacturing': return <Factory className="w-6 h-6 text-amber-600" />;
      case 'healthcare': return <Stethoscope className="w-6 h-6 text-rose-600" />;
      case 'education': return <GraduationCap className="w-6 h-6 text-sky-600" />;
      case 'ngos': return <HeartHandshake className="w-6 h-6 text-teal-600" />;
      case 'enterprise': return <Briefcase className="w-6 h-6 text-blue-600" />;
      default: return <Layers className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#090f1d] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono uppercase tracking-wider text-sky-400">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Sector Specialization &amp; Workloads</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
                Enterprise architectures tailored to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                  your industry realities.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Every vertical carries distinct operational requirements, uptime tolerances, and bandwidth constraints. Explore how CITS engineers resilient systems around your specific operating environment.
              </p>

              {/* Quick Jump Shortcuts */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-purple-300">
                  Core Banking &amp; Financial Workloads
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-sky-300">
                  Zero Downtime Active-Active DR
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-emerald-300">
                  Full Audit Governance
                </span>
              </div>
            </div>

            {/* Right Column: Relevant Animated Image & Telemetry Canvas */}
            <div className="lg:col-span-5 w-full">
              <HeaderAnimatedVisual
                activeTab="industries"
                onOpenConsultation={onOpenConsultation}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {INDUSTRIES.map((industry: IndustryItem) => (
            <div
              key={industry.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all"
            >
              {industry.image && (
                <div className="h-44 sm:h-52 w-full relative overflow-hidden bg-slate-950">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/75 backdrop-blur-xs text-sky-300 border border-sky-400/30 font-semibold">
                      Enterprise Vertical
                    </span>
                    <span className="text-xs font-mono text-slate-300">
                      Regional &amp; Enterprise Standards
                    </span>
                  </div>
                </div>
              )}
              <div className="p-7 sm:p-9 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      {getIndustryIcon(industry.id)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {industry.name}
                      </h2>
                      <p className="text-xs font-mono text-slate-500 mt-0.5">
                        Sector Focus Blueprint
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors self-start sm:self-auto"
                  >
                    <span>Request Sector Sizing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Vulnerabilities */}
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-600 font-semibold block">
                    Core Operational & Regulatory Vulnerabilities:
                  </span>
                  <div className="space-y-2">
                    {industry.keyChallenges.map((challenge, cIdx) => (
                      <div key={cIdx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-amber-500 font-bold font-mono">•</span>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-800 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-sky-600" />
                      CITS Tailored Architecture Strategy
                    </span>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {industry.tailoredArchitecture}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                      Priority Standards:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {industry.criticalPriorities.map((p, pIdx) => (
                        <span key={pIdx} className="text-xs font-mono px-3 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {industry.recommendedSolutions && industry.recommendedSolutions.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                        Recommended Solution Architectures:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {industry.recommendedSolutions.map((solName, sIdx) => {
                          const lower = solName.toLowerCase();
                          let slug = 'cybersecurity';
                          if (lower.includes('continuity') || lower.includes('disaster')) slug = 'business-continuity';
                          else if (lower.includes('information') || lower.includes('edms')) slug = 'information-management';
                          else if (lower.includes('enterprise it') || lower.includes('infrastructure')) slug = 'enterprise-it';
                          else if (lower.includes('comm') || lower.includes('voice')) slug = 'communications';
                          else if (lower.includes('software')) slug = 'software-solutions';

                          return (
                            <button
                              key={sIdx}
                              onClick={() => onSelectSolution(slug)}
                              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200/80 font-medium transition-colors group/btn cursor-pointer"
                              title={`Explore ${solName} architecture`}
                            >
                              <span>{solName}</span>
                              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
