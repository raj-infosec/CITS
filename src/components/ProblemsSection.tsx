import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ClockAlert, 
  FileQuestion, 
  Unplug, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

interface ProblemsSectionProps {
  onSelectSolution: (slug: string) => void;
}

interface ProblemItem {
  id: string;
  category: string;
  headline: string;
  quote: string;
  consequence: string;
  citsResolution: string;
  targetSolutionSlug: string;
  solutionName: string;
  icon: React.ReactNode;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onSelectSolution }) => {
  const problems: ProblemItem[] = [
    {
      id: "cyber-risk",
      category: "CYBER RISK",
      headline: "Multi-vector threats penetrating perimeter lines",
      quote: "Your organisation is exposed to increasingly complex threats.",
      consequence: "Uninspected encrypted traffic, phishing lures, and unpatched endpoints invite ransomware encrypting both live operations and connected backups.",
      citsResolution: "Deploy zero-trust synchronized security: Next-Gen XGS firewalls, active EDR containment, multi-factor ZTNA, and continuous VAPT penetration audits.",
      targetSolutionSlug: "cybersecurity",
      solutionName: "Cybersecurity Architecture",
      icon: <ShieldAlert className="w-5 h-5 text-emerald-600" />
    },
    {
      id: "business-interruption",
      category: "BUSINESS INTERRUPTION",
      headline: "Unplanned downtime eroding operational revenue and trust",
      quote: "Downtime quickly becomes lost revenue and lost trust.",
      consequence: "Server hardware failures or power disruptions cause multi-day recovery nightmares when relying on standard tape or unverified file backups.",
      citsResolution: "One-click high-availability disaster recovery (Quorum) spinning up virtual production machines on local appliances in under 5 minutes.",
      targetSolutionSlug: "business-continuity",
      solutionName: "High-Availability Disaster Recovery",
      icon: <ClockAlert className="w-5 h-5 text-sky-600" />
    },
    {
      id: "information-chaos",
      category: "INFORMATION CHAOS",
      headline: "Physical paperwork paralyzing internal decision-making",
      quote: "Critical documents and information are difficult to access, manage and control.",
      consequence: "Physical files, lost paper vouchers, missing signatures, and non-compliance with statutory record retention periods.",
      citsResolution: "Vicisoft Enterprise EDMS with high-throughput OCR scanning, automated routing approval pipelines, and immutable audit logs.",
      targetSolutionSlug: "information-management",
      solutionName: "Enterprise Information Management",
      icon: <FileQuestion className="w-5 h-5 text-indigo-600" />
    },
    {
      id: "disconnected-systems",
      category: "DISCONNECTED SYSTEMS",
      headline: "Siloed communication and isolated branch operations",
      quote: "Communication and business systems need to work together.",
      consequence: "Extravagant inter-branch telephony costs, fragmented email gateways, dropped video meetings, and isolated field workers.",
      citsResolution: "Unified Matrix IP-PBX telephony connecting all branches over secure VoIP trunks, unified softphones, and boardroom audio/video conferencing.",
      targetSolutionSlug: "communications",
      solutionName: "Unified Communications",
      icon: <Unplug className="w-5 h-5 text-teal-600" />
    },
    {
      id: "digital-growth",
      category: "DIGITAL GROWTH",
      headline: "Legacy architecture unable to scale with corporate expansion",
      quote: "Technology must scale with the organisation.",
      consequence: "Rigid ERP systems, fragile network backbones, and software bottlenecks holding back regional branch openings.",
      citsResolution: "Scalable enterprise server virtualization, structured fiber backbones, custom business applications, and dedicated Tier-3 support SLAs.",
      targetSolutionSlug: "enterprise-it",
      solutionName: "Enterprise IT & Infrastructure",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    }
  ];

  const [activeProblemId, setActiveProblemId] = useState<string>(problems[0].id);
  const activeProblem = problems.find((p) => p.id === activeProblemId) || problems[0];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            Strategic Advisory Perspective
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
            Technology problems rarely exist in isolation.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Enterprise vulnerability is rarely caused by a single absent tool. It stems from fragmented systems, misaligned governance, and technology that does not mirror operational reality.
          </p>
        </div>

        {/* Interactive Problem Explorer (Strategic Consultancy Feel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Problem Category Selector Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {problems.map((problem) => {
              const isActive = problem.id === activeProblemId;
              return (
                <button
                  key={problem.id}
                  onClick={() => setActiveProblemId(problem.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border text-sm flex items-start gap-4 ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-slate-800'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${
                    isActive ? 'bg-slate-800 text-sky-400' : 'bg-white shadow-xs'
                  }`}>
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-mono tracking-wider font-semibold uppercase ${
                        isActive ? 'text-sky-300' : 'text-slate-500'
                      }`}>
                        {problem.category}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <p className={`font-semibold mt-1 text-sm ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      &ldquo;{problem.quote}&rdquo;
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Strategic Translation Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                  {activeProblem.category} ANALYSIS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                  {activeProblem.headline}
                </h3>
              </div>

              {/* The Risk / Consequence */}
              <div className="p-4 rounded-xl bg-white border border-red-100 shadow-xs space-y-1">
                <span className="text-xs font-mono font-semibold text-rose-600 uppercase tracking-wider">
                  The Operational Vulnerability
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeProblem.consequence}
                </p>
              </div>

              {/* The CITS Architectural Solution */}
              <div className="p-4 rounded-xl bg-sky-900/5 border border-sky-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-mono font-semibold text-sky-800 uppercase tracking-wider">
                    CITS Strategic Resolution
                  </span>
                </div>
                <p className="text-sm text-slate-800 font-medium leading-relaxed">
                  {activeProblem.citsResolution}
                </p>
              </div>

              {/* Direct Link to Solution Pillar */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                <span className="text-xs text-slate-500 font-mono">
                  Engineered under CITS {activeProblem.solutionName}
                </span>
                <button
                  onClick={() => onSelectSolution(activeProblem.targetSolutionSlug)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors group"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
