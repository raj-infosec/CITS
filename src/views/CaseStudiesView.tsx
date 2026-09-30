import React, { useState, useEffect } from 'react';
import { FileText, ArrowRight, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { ANONYMIZED_CASE_STUDIES } from '../data/citsData';
import { CaseStudy } from '../types';

interface CaseStudiesViewProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onOpenConsultation }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedSector, setSelectedSector] = useState<string>('All');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCase) {
        setSelectedCase(null);
      }
    };
    if (selectedCase) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCase]);

  const sectorTabs = [
    { id: 'All', label: 'All Deployments', activeClass: 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-800', inactiveClass: 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100', dot: 'bg-sky-400' },
    { id: 'Banking & Financial Services', label: 'Banking & Financial Services', activeClass: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-600/20 ring-1 ring-emerald-600', inactiveClass: 'bg-emerald-50/70 border border-emerald-200/80 text-emerald-900 hover:bg-emerald-100/80', dot: 'bg-emerald-400' },
    { id: 'Manufacturing & Distribution', label: 'Manufacturing & Distribution', activeClass: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-600/20 ring-1 ring-amber-600', inactiveClass: 'bg-amber-50/70 border border-amber-200/80 text-amber-900 hover:bg-amber-100/80', dot: 'bg-amber-400' },
    { id: 'Government & Public Sector', label: 'Government & Public Sector', activeClass: 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-sm shadow-purple-600/20 ring-1 ring-purple-600', inactiveClass: 'bg-purple-50/70 border border-purple-200/80 text-purple-900 hover:bg-purple-100/80', dot: 'bg-purple-400' }
  ];

  const filteredStudies = selectedSector === 'All'
    ? ANONYMIZED_CASE_STUDIES
    : ANONYMIZED_CASE_STUDIES.filter(s => s.sector === selectedSector);

  const getSectorBadgeStyle = (sector: string) => {
    if (sector.includes('Banking')) return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    if (sector.includes('Manufacturing')) return 'bg-amber-50 text-amber-800 border-amber-200';
    if (sector.includes('Government')) return 'bg-purple-50 text-purple-800 border-purple-200';
    return 'bg-sky-50 text-sky-800 border-sky-200';
  };

  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#090f1d] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              Architecture In Action &bull; Anonymized Deployments
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Real-world resilience.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                Measurable outcomes.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore how CITS designs and implements mission-critical solutions across commercial banking, industrial manufacturing, and statutory regulatory bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Filter Bar */}
      <section className="py-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 uppercase font-semibold mr-2">Sector Filter:</span>
          {sectorTabs.map((tab) => {
            const isActive = selectedSector === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSector(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                  isActive ? tab.activeClass : tab.inactiveClass
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${tab.dot} ${isActive ? 'animate-pulse' : 'opacity-70'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Case Studies Detailed List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-xs space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase mb-1">
                  <span className={`px-2 py-0.5 rounded border text-[11px] ${getSectorBadgeStyle(study.sector)}`}>{study.sector}</span>
                  <span>&bull;</span>
                  <span className="text-slate-400 font-normal">Anonymized Case Architecture</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {study.title}
                </h2>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  Client Profile: {study.anonymizedClient}
                </p>
              </div>

              <button
                onClick={() => setSelectedCase(study)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-sky-600 border border-slate-300 hover:border-sky-500 px-4 py-2 rounded-lg transition-colors self-start sm:self-auto"
              >
                <span>View Full Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-slate-500 uppercase font-semibold block text-[10px]">
                  1. The Operational Challenge
                </span>
                <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-slate-500 uppercase font-semibold block text-[10px]">
                  2. CITS Engineering Approach
                </span>
                <p className="text-slate-700 leading-relaxed">{study.approach}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-slate-500 uppercase font-semibold block text-[10px]">
                  3. Deployed Technical Solution
                </span>
                <p className="text-slate-700 leading-relaxed">{study.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="font-mono text-emerald-800 uppercase font-semibold block text-[10px]">
                  4. Measured Business Outcome
                </span>
                <p className="text-emerald-950 font-medium leading-relaxed">{study.outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={onOpenConsultation}
                className="text-xs font-semibold text-sky-600 hover:text-sky-700"
              >
                Discuss Similar Architecture &rarr;
              </button>
            </div>
          </div>
        ))}

        <div className="text-center text-xs font-mono text-slate-400">
          * Pursuant to strict non-disclosure obligations and sovereign infrastructure security standards, proprietary corporate names are anonymized.
        </div>
      </section>

      {/* Full Modal Viewer */}
      {selectedCase && (
        <div 
          onClick={() => setSelectedCase(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 cursor-default"
          >
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase text-sky-600 font-bold block mb-2">
              {selectedCase.sector} Architecture Case
            </span>
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              {selectedCase.title}
            </h3>

            <div className="mt-6 space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-slate-500 uppercase font-semibold block text-[10px]">
                  The Challenge
                </span>
                <p className="text-slate-800 text-sm leading-relaxed">{selectedCase.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-slate-500 uppercase font-semibold block text-[10px]">
                  The Approach
                </span>
                <p className="text-slate-800 text-sm leading-relaxed">{selectedCase.approach}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-slate-500 uppercase font-semibold block text-[10px]">
                  The Technical Solution
                </span>
                <p className="text-slate-800 text-sm leading-relaxed">{selectedCase.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="font-mono text-emerald-800 uppercase font-semibold block text-[10px]">
                  The Outcome
                </span>
                <p className="text-emerald-950 font-medium text-sm leading-relaxed">{selectedCase.outcome}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onOpenConsultation();
                }}
                className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors"
              >
                Request Architecture Consultation
              </button>
              <button
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
