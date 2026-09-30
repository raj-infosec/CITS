import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  Server, 
  PhoneCall, 
  Code2, 
  ArrowLeft,
  Building2
} from 'lucide-react';
import { SOLUTION_PILLARS, INDUSTRIES } from '../data/citsData';
import { SolutionPillar } from '../types';

interface SolutionDetailViewProps {
  slug: string;
  onSelectAnotherSolution: (slug: string) => void;
  onBackToHome: () => void;
  onOpenConsultation: () => void;
}

export const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({
  slug,
  onSelectAnotherSolution,
  onBackToHome,
  onOpenConsultation,
}) => {
  const solution: SolutionPillar = 
    SOLUTION_PILLARS.find(s => s.slug === slug) || SOLUTION_PILLARS[0];

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case 'RefreshCw': return <RefreshCw className="w-8 h-8 text-sky-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-8 h-8 text-indigo-400" />;
      case 'Server': return <Server className="w-8 h-8 text-blue-400" />;
      case 'PhoneCall': return <PhoneCall className="w-8 h-8 text-teal-400" />;
      case 'Code2': return <Code2 className="w-8 h-8 text-purple-400" />;
      default: return <Layers className="w-8 h-8 text-sky-400" />;
    }
  };

  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Solution Hero */}
      <section className="bg-[#090f1d] text-white pt-12 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Solutions</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-sky-300">
                <span>Pillar {solution.number}</span>
                <span>&bull;</span>
                <span>{solution.title}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {solution.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
                {solution.heroSubheadline}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Solution Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {getSolutionIcon(solution.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Ecosystem Brands
                  </span>
                  <p className="text-sm font-bold text-white">
                    {solution.technologyEcosystem.join(', ')}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Core Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {solution.deliverablesSummary.map((item, idx) => (
                    <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Strategic Problem & Strategic Outcome Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Executive Architecture Brief */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0d1629] text-white space-y-3 shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                Executive Architecture Brief
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Pillar {solution.number} &bull; Certified Methodology
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {solution.executiveBrief || solution.strategicOutcome}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-600">
                The Operational Bottleneck / Risk
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {solution.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-800">
                The CITS Architectural Outcome
              </span>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {solution.strategicOutcome}
              </p>
            </div>
          </div>

          {/* 4-Step Framework & Methodology */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Engineering Framework
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Proven 4-Stage Architectural Delivery Lifecycle
                </h3>
              </div>
              {solution.frameworkMethodology && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-50 text-sky-800 border border-sky-200/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  {solution.frameworkMethodology}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stage: "STAGE 01", title: "Discovery & Topology Audit", desc: "Audit existing network, access policies, data flows, and regulatory compliance mandates." },
                { stage: "STAGE 02", title: "Staging Lab & Sandbox Validation", desc: "Configuration, firmware hardening, and burn-in testing in our Kampala staging facility." },
                { stage: "STAGE 03", title: "Zero-Downtime Deployment", desc: "Phased cutover, high-availability cluster failover, and policy enforcement with rollback protection." },
                { stage: "STAGE 04", title: "Certified SLA & 24/7 Monitoring", desc: "Handover with Tier-3 engineering escalation, active NOC telemetry, and annual audit support." }
              ].map((step, sIdx) => (
                <div 
                  key={sIdx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-600">
                      {step.stage}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                  </div>
                  <p className="font-bold text-xs text-slate-900">
                    {step.title}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SLA, Timeline & Regulatory Audit Standards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-slate-500 font-mono block">Typical Deployment Timeline:</span>
              <span className="font-bold text-slate-900 text-sm">
                {solution.deploymentTimeline || '2 - 4 Weeks'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-slate-500 font-mono block">Support &amp; SLA Commitment:</span>
              <span className="font-bold text-slate-900 text-sm">
                {solution.slaGuarantee || '4-Hour Mission-Critical On-Site SLA'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-slate-500 font-mono block">Audit Compliance Alignment:</span>
              <span className="font-bold text-slate-900 text-sm">
                Zero-Trust &bull; ISO 27001 &bull; PCI-DSS
              </span>
            </div>
          </div>

          {/* Associated Products */}
          {solution.associatedProducts && solution.associatedProducts.length > 0 && (
            <div className="p-5 rounded-xl bg-sky-50/70 border border-sky-200/80 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-900 font-bold block">
                Associated Deployable Hardware &amp; Licensed Software Products:
              </span>
              <div className="flex flex-wrap gap-2">
                {solution.associatedProducts.map((prod, pIdx) => (
                  <span 
                    key={pIdx}
                    className="text-xs font-semibold px-3 py-1 rounded-md bg-white border border-sky-200 text-slate-800 shadow-2xs"
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Capabilities Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold">
            Engineering Deliverables
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Detailed Solution Capabilities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Engineered, deployed, and supported under verified enterprise methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-all space-y-4"
            >
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  CAPABILITY 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-2">
                  Technical Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {cap.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Sector Applications */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 font-semibold mb-6">
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>Sector Fit for {solution.title}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.slice(0, 4).map((ind) => (
              <div key={ind.id} className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                <p className="font-bold text-slate-900">{ind.name}</p>
                <p className="text-slate-600 line-clamp-2">{ind.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {solution.faqs && solution.faqs.length > 0 && (
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Architecture & Engagement Details
            </h2>
          </div>

          <div className="space-y-4">
            {solution.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{faq.question}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Switcher: Other Solution Pillars */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Explore Adjacent Architectural Pillars
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SOLUTION_PILLARS.map((sol) => (
              <button
                key={sol.id}
                onClick={() => onSelectAnotherSolution(sol.slug)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  sol.slug === slug
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <span className={`text-[10px] font-mono block ${sol.slug === slug ? 'text-sky-300' : 'text-slate-400'}`}>
                  {sol.number}
                </span>
                <p className="text-xs font-bold mt-1 line-clamp-1">{sol.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
