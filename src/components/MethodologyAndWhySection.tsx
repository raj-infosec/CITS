import React from 'react';
import { 
  Compass, 
  SearchCheck, 
  Cpu, 
  Workflow, 
  LifeBuoy, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  ArrowRight 
} from 'lucide-react';

interface MethodologyAndWhySectionProps {
  onOpenConsultation: () => void;
}

export const MethodologyAndWhySection: React.FC<MethodologyAndWhySectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understand the business context",
      description: "We begin by mapping operational workflows, stakeholder requirements, and growth projections before prescribing technical equipment.",
      icon: <Compass className="w-5 h-5 text-sky-500" />
    },
    {
      number: "02",
      title: "Assess",
      subtitle: "Evaluate current risks & topology",
      description: "Non-disruptive discovery audits inspect existing network latency, single points of failure, backup recovery gaps, and security exposures.",
      icon: <SearchCheck className="w-5 h-5 text-emerald-500" />
    },
    {
      number: "03",
      title: "Architect",
      subtitle: "Design modular, resilient solutions",
      description: "We produce clean architectural schematics, capacity models, and implementation roadmaps matching financial budget cycles.",
      icon: <Cpu className="w-5 h-5 text-indigo-500" />
    },
    {
      number: "04",
      title: "Implement",
      subtitle: "Deploy, stage & cutover cleanly",
      description: "Certified systems engineers execute sandbox testing, high-availability failover drills, and staff knowledge transfer with zero disruption.",
      icon: <Workflow className="w-5 h-5 text-teal-500" />
    },
    {
      number: "05",
      title: "Support",
      subtitle: "Continuous improvement & SLAs",
      description: "Proactive health monitoring, rapid Tier-3 escalation, firmware hygiene, and quarterly technology reviews ensure ongoing durability.",
      icon: <LifeBuoy className="w-5 h-5 text-purple-500" />
    }
  ];

  const differentiators = [
    {
      title: "Technical Depth",
      description: "We combine executive-level business acumen with certified engineering rigor across firewalls, high-availability storage, IP-PBX, and custom enterprise software.",
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />
    },
    {
      title: "Established Vendor Ecosystem",
      description: "Direct engineering relationships with verified technology leaders including Sophos, WatchGuard, Quorum, Vicisoft, Matrix, and RAY.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "End-to-End Delivery",
      description: "From initial discovery audits and proof-of-concept sandbox drills through physical deployment, cabling, policy tuning, and SLA support.",
      icon: <Workflow className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Responsive Regional Support",
      description: "Practical technical escalation when organizations need it most, backed by structured SLAs and verified local engineering presence.",
      icon: <LifeBuoy className="w-5 h-5 text-teal-600" />
    },
    {
      title: "Regional Cross-Border Reach",
      description: "Physical operational capability and registered corporate entities across Uganda (Kampala HQ), Zambia (Lusaka), and Malawi (Lilongwe).",
      icon: <Globe2 className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <>
      {/* 10. How We Work Methodology */}
      <section className="py-24 bg-[#0a1120] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/80">
              <span>5-Step Delivery Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              A structured approach to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                mission-critical technology.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
              We do not treat IT deployment as isolated hardware sales. Every engagement follows a disciplined engineering lifecycle ensuring predictable results.
            </p>
          </div>

          {/* 5-Step Process Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-slate-900/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                    <span className="font-mono text-2xl font-extrabold text-slate-700 group-hover:text-sky-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400 mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. Why CITS - Built for Real-World IT */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading & Executive Rationale */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                The CITS Difference
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 uppercase leading-tight">
                Built for{' '}
                <span className="text-sky-600 block sm:inline">real-world IT.</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Enterprise technology requires more than hardware catalogs. It requires partners who understand operational context, regional bandwidth constraints, and the true cost of downtime.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors group"
                >
                  <span>Engage CITS Advisory</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Grounded Differentiators */}
            <div className="lg:col-span-7 space-y-4">
              {differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs shrink-0">
                    {diff.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
