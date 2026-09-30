import React, { useState } from 'react';
import { 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  Server, 
  PhoneCall, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  Shield, 
  FileCheck, 
  Layers, 
  Cpu, 
  HelpCircle, 
  ArrowUpRight,
  Sparkles,
  Building2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { SOLUTION_PILLARS, ENTERPRISE_PRODUCTS, ICT_HARDWARE_PRODUCTS, INDUSTRIES } from '../data/citsData';
import { SolutionPillar } from '../types';
import { HeaderAnimatedVisual, HeaderTabType } from '../components/HeaderAnimatedVisual';

interface SolutionsViewProps {
  initialSlug?: string;
  onSelectSolutionDetail: (slug: string) => void;
  onNavigateToProducts: (category?: string, productId?: string) => void;
  onNavigateToPartners: () => void;
  onOpenConsultation: (initialNote?: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  initialSlug,
  onSelectSolutionDetail,
  onNavigateToProducts,
  onNavigateToPartners,
  onOpenConsultation,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialSlug || SOLUTION_PILLARS[0].slug
  );
  const [headerTab, setHeaderTab] = useState<HeaderTabType>('solutions');

  const activeSolution: SolutionPillar = 
    SOLUTION_PILLARS.find(s => s.slug === selectedSlug) || SOLUTION_PILLARS[0];

  const getSolutionIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className={`${className} text-emerald-500`} />;
      case 'RefreshCw': return <RefreshCw className={`${className} text-sky-500`} />;
      case 'FileSpreadsheet': return <FileSpreadsheet className={`${className} text-indigo-500`} />;
      case 'Server': return <Server className={`${className} text-blue-500`} />;
      case 'PhoneCall': return <PhoneCall className={`${className} text-teal-500`} />;
      case 'Code2': return <Code2 className={`${className} text-purple-500`} />;
      default: return <Layers className={`${className} text-sky-500`} />;
    }
  };

  return (
    <div className="bg-[#fafafc] min-h-screen text-slate-800">
      
      {/* Top Banner Header */}
      <section className="bg-[#090f1d] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Brief & Tabs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-mono text-sky-400">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>STRATEGIC ARCHITECTURAL SYSTEMS &amp; EXECUTIVE BRIEFS</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Enterprise Technology{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                  Solution Pillars.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Beyond standalone hardware or software, CITS <strong>Solutions</strong> deliver unified, mission-critical technology architectures. We synthesize zero-trust cyber resilience, automated disaster recovery, global security standards, and guaranteed Tier-3 SLAs to ensure continuous uptime and strategic institutional agility.
              </p>

              {/* Quick Clarification Banner Tabs */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setHeaderTab('solutions')}
                  className={`p-3 rounded-xl text-left transition-all space-y-1 cursor-pointer ${
                    headerTab === 'solutions'
                      ? 'bg-slate-900/95 border-2 border-sky-400/80 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold block uppercase ${headerTab === 'solutions' ? 'text-sky-400' : 'text-slate-300'}`}>
                      1. Solutions {headerTab === 'solutions' && '●'}
                    </span>
                    {headerTab === 'solutions' && (
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    )}
                  </div>
                  <p className="text-slate-300">Unified frameworks, executive blueprints &amp; enterprise SLAs.</p>
                </button>

                <button 
                  type="button"
                  onClick={() => setHeaderTab('products')}
                  className={`p-3 rounded-xl text-left transition-all space-y-1 group cursor-pointer ${
                    headerTab === 'products'
                      ? 'bg-slate-900/95 border-2 border-amber-400/80 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/50'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className={`font-bold flex items-center justify-between ${headerTab === 'products' ? 'text-amber-400' : 'text-slate-200 group-hover:text-amber-400'}`}>
                    <span>2. Products {headerTab === 'products' && '●'}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${headerTab === 'products' ? 'text-amber-400' : 'text-slate-500 group-hover:text-amber-400'}`} />
                  </span>
                  <p className="text-slate-400">Servers, Laptops, Desktops, Switches &amp; Software Licenses.</p>
                </button>

                <button 
                  type="button"
                  onClick={() => setHeaderTab('stack')}
                  className={`p-3 rounded-xl text-left transition-all space-y-1 group cursor-pointer ${
                    headerTab === 'stack'
                      ? 'bg-slate-900/95 border-2 border-indigo-400/80 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-400/50'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className={`font-bold flex items-center justify-between ${headerTab === 'stack' ? 'text-indigo-400' : 'text-slate-200 group-hover:text-indigo-400'}`}>
                    <span>3. Technology Stack {headerTab === 'stack' && '●'}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${headerTab === 'stack' ? 'text-indigo-400' : 'text-slate-500 group-hover:text-indigo-400'}`} />
                  </span>
                  <p className="text-slate-400">Global OEM partners: Dell, HPE, HP, Lenovo, UniFi, ARCON, Sophos.</p>
                </button>
              </div>
            </div>

            {/* Right Column: Relevant Animated Image & Telemetry Canvas */}
            <div className="lg:col-span-5 w-full">
              <HeaderAnimatedVisual
                activeTab={headerTab}
                solutionSlug={selectedSlug}
                onNavigateToProducts={() => onNavigateToProducts()}
                onNavigateToPartners={onNavigateToPartners}
                onSelectSolutionSlug={(slug) => {
                  setSelectedSlug(slug);
                  setHeaderTab('solutions');
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Solution Selector Sticky Bar */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {SOLUTION_PILLARS.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setSelectedSlug(sol.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedSlug === sol.slug
                    ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">{sol.number}</span>
                <span>{sol.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Solution Brief & Architecture Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Solution Title & Executive Brief Hero Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sky-600 px-2.5 py-1 rounded bg-sky-50 border border-sky-100">
                  PILLAR {activeSolution.number} &bull; STRATEGIC ARCHITECTURE
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Tier-3 Engineering &bull; In-Country Support
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {activeSolution.heroHeadline}
              </h2>
              <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
                {activeSolution.heroSubheadline}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenConsultation(`Strategic Discovery for Pillar ${activeSolution.number}: ${activeSolution.title}`)}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <span>Request Solution Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectSolutionDetail(activeSolution.slug)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Full Technical Specification</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Architecture Visual & Executive Brief Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {activeSolution.image && (
              <div className="lg:col-span-5 rounded-2xl overflow-hidden relative min-h-[220px] bg-slate-950 border border-slate-800 shadow-xs group">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      Verified Reference Architecture
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white">
                    {activeSolution.frameworkMethodology}
                  </p>
                </div>
              </div>
            )}
            <div className={`${activeSolution.image ? 'lg:col-span-7' : 'lg:col-span-12'} p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0d1629] text-white flex flex-col justify-between space-y-4`}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                    Executive Architecture Brief
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {activeSolution.executiveBrief || activeSolution.strategicOutcome}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span>SLA: <strong className="text-white">{activeSolution.slaGuarantee}</strong></span>
                <span>&bull;</span>
                <span>Deployment: <strong className="text-white">{activeSolution.deploymentTimeline}</strong></span>
              </div>
            </div>
          </div>

          {/* Operational Risk vs Architectural Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-rose-50/70 border border-rose-100 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-rose-600" />
                <span>The Operational Risk / Failure Point</span>
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeSolution.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>The CITS Architectural Outcome</span>
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeSolution.strategicOutcome}
              </p>
            </div>
          </div>

          {/* 4-Step Framework & Methodology */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Deployment Methodology
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Proven 4-Stage Architectural Delivery Lifecycle
                </h3>
              </div>
              {activeSolution.frameworkMethodology && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-50 text-sky-800 border border-sky-200/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  {activeSolution.frameworkMethodology}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-slate-500 font-mono block">Typical Deployment Timeline:</span>
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>{activeSolution.deploymentTimeline || '2 - 4 Weeks'}</span>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-slate-500 font-mono block">Support &amp; SLA Commitment:</span>
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>{activeSolution.slaGuarantee || '4-Hour Mission-Critical On-Site SLA'}</span>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-slate-500 font-mono block">Audit Compliance Alignment:</span>
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-indigo-600" />
                <span>Zero Trust &bull; ISO 27001 &bull; PCI-DSS</span>
              </span>
            </div>
          </div>

          {/* Associated Hardware & Software Products Linkage */}
          {activeSolution.associatedProducts && activeSolution.associatedProducts.length > 0 && (
            <div className="p-5 rounded-xl bg-sky-50/60 border border-sky-100 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-900 font-bold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-sky-600" />
                  <span>Associated Deployable Products &amp; Hardware For This Solution:</span>
                </span>
                <span className="text-xs text-sky-700">
                  Available for direct hardware procurement &amp; licensing
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeSolution.associatedProducts.map((prodName, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => onNavigateToProducts()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-sky-200 text-xs font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-700 shadow-2xs transition-all"
                  >
                    <span>{prodName}</span>
                    <ArrowUpRight className="w-3 h-3 text-sky-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Detailed Capabilities Grid for Active Solution */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold">
              Architecture Modules
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
              Core Capabilities Included in {activeSolution.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSolution.capabilities.map((cap, cIdx) => (
              <div 
                key={cIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    CAPABILITY 0{cIdx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {cap.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {cap.deliverables.map((del, dIdx) => (
                    <span 
                      key={dIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Switcher: Browse Other Solution Briefs */}
        <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                All Solution Briefs
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Explore Other Enterprise Architecture Pillars
              </h3>
            </div>
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white transition-colors"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOLUTION_PILLARS.map((sol) => (
              <button
                key={sol.id}
                onClick={() => {
                  setSelectedSlug(sol.slug);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`p-4 rounded-xl text-left border transition-all ${
                  selectedSlug === sol.slug
                    ? 'bg-white border-sky-500 ring-2 ring-sky-500/20 shadow-xs'
                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400 font-bold">
                    {sol.number}
                  </span>
                  {selectedSlug === sol.slug && (
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 font-bold">
                      ACTIVE BRIEF
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-sm text-slate-900 mt-1">
                  {sol.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {sol.shortDescription}
                </p>
              </button>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};
