import React, { useState } from 'react';
import { 
  Building2, 
  Landmark, 
  Factory, 
  Stethoscope, 
  GraduationCap, 
  HeartHandshake, 
  Briefcase, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { INDUSTRIES } from '../data/citsData';
import { IndustryItem } from '../types';

interface IndustriesSectionProps {
  onNavigateToIndustries: () => void;
  onSelectSolution: (slug: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ 
  onNavigateToIndustries,
  onSelectSolution 
}) => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'banking': return <Landmark className="w-5 h-5 text-emerald-600" />;
      case 'government': return <Building2 className="w-5 h-5 text-indigo-600" />;
      case 'manufacturing': return <Factory className="w-5 h-5 text-amber-600" />;
      case 'healthcare': return <Stethoscope className="w-5 h-5 text-rose-600" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-sky-600" />;
      case 'ngos': return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      case 'enterprise': return <Briefcase className="w-5 h-5 text-blue-600" />;
      default: return <Layers className="w-5 h-5 text-slate-600" />;
    }
  };

  const [activeIndustryId, setActiveIndustryId] = useState<string>('banking');
  const activeIndustry = INDUSTRIES.find(i => i.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              Sector-Specific Architectures
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
              Technology built around{' '}
              <span className="text-sky-600 block sm:inline">how your business operates.</span>
            </h2>
          </div>
          <button
            onClick={onNavigateToIndustries}
            className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 self-start md:self-auto group"
          >
            <span>View All Sector Profiles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Sector Tabs + Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sector Buttons */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {INDUSTRIES.map((industry: IndustryItem) => {
              const isActive = industry.id === activeIndustryId;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustryId(industry.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3.5 ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-slate-800'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    isActive ? 'bg-slate-800 text-sky-400' : 'bg-white shadow-xs'
                  }`}>
                    {getIndustryIcon(industry.id)}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {industry.name}
                    </h3>
                    <p className={`text-xs line-clamp-1 ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                      {industry.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tailored Architecture Detail */}
          <div className="lg:col-span-7 bg-[#fafafc] border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="border-b border-slate-200 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  {getIndustryIcon(activeIndustry.id)}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-sky-600 uppercase tracking-wider">
                    Sector Blueprint
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {activeIndustry.name}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-2 font-medium">
                {activeIndustry.tagline}
              </p>
            </div>

            {/* Key Challenges */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Core Operational & Technical Vulnerabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeIndustry.keyChallenges.map((challenge, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-amber-500 font-bold font-mono">•</span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tailored Architecture */}
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                <span className="text-xs font-mono uppercase tracking-wider text-sky-900 font-semibold">
                  CITS Tailored Architecture Strategy
                </span>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {activeIndustry.tailoredArchitecture}
              </p>
            </div>

            {/* Critical Priorities */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                Mandatory Architecture Priorities
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeIndustry.criticalPriorities.map((priority, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white border border-slate-300 text-slate-800 font-medium"
                  >
                    {priority}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Solutions links */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-500 font-mono mr-1">Key Pillars:</span>
                {activeIndustry.recommendedSolutions.map((solName, sIdx) => {
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
                      className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-800 border border-slate-200 transition-colors"
                      title={`View ${solName} architecture`}
                    >
                      {solName}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={onNavigateToIndustries}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 whitespace-nowrap"
              >
                <span>Read Full Industry Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
