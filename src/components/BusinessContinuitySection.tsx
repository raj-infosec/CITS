import React, { useState } from 'react';
import { 
  RefreshCw, 
  AlertTriangle, 
  Activity, 
  CheckCircle2, 
  Zap, 
  HardDriveDownload, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  title: string;
  status: string;
  description: string;
  citsRole: string;
  icon: React.ReactNode;
  badgeColor: string;
}

interface BusinessContinuitySectionProps {
  onLearnMore: () => void;
}

export const BusinessContinuitySection: React.FC<BusinessContinuitySectionProps> = ({ onLearnMore }) => {
  const stages: Stage[] = [
    {
      id: "normal",
      step: "01",
      title: "Normal Operations",
      status: "Continuous Replication",
      description: "Production servers, virtual machines, and databases operate normally while automated background snapshots are captured without performance drag.",
      citsRole: "Continuous block-level data synchronization to dedicated on-premise Quorum appliances with air-gapped repositories.",
      icon: <Activity className="w-5 h-5 text-emerald-500" />,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "incident",
      step: "02",
      title: "Incident Occurs",
      status: "Disruption Detected",
      description: "Hardware crash, primary SAN controller failure, ransomware outbreak, or sudden local power grid blackout interrupts live systems.",
      citsRole: "Air-gapped backup volumes remain completely isolated from domain administrative compromises.",
      icon: <AlertTriangle className="w-5 h-5 text-rose-500" />,
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
    },
    {
      id: "detection",
      step: "03",
      title: "Automated Detection",
      status: "Heartbeat Failure Flagged",
      description: "Disaster recovery engine detects lack of host heartbeat or integrity anomalies within seconds, triggering emergency protocols.",
      citsRole: "Proactive alert notification dispatched to designated IT administrators and CITS managed support engineers.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: "recovery",
      step: "04",
      title: "Rapid Failover Recovery",
      status: "Virtual Boot Active",
      description: "Critical servers are booted directly on the disaster recovery appliance hardware, assuming primary IP addresses immediately.",
      citsRole: "One-click instant failover restores core transaction processing while primary hardware remediation begins.",
      icon: <HardDriveDownload className="w-5 h-5 text-sky-500" />,
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
    },
    {
      id: "restored",
      step: "05",
      title: "Business Restored",
      status: "Full Operations Preserved",
      description: "End users, customers, and branch offices continue processing transactions with minimal operational downtime and zero lost customer trust.",
      citsRole: "Non-disruptive delta synchronization rolls new data cleanly back to repaired production servers.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Default highlighting the recovery failover

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
              <RefreshCw className="w-3.5 h-3.5 text-sky-600" />
              <span>Operational Resilience Lifecycle</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
              When business stops,{' '}
              <span className="text-sky-600 block sm:inline">the cost starts.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Eliminate prolonged downtime with verified disaster recovery architectures designed for rapid failover, immutable snapshots, and continuous business continuity.
          </p>
        </div>

        {/* Insightful BCDR Architecture Diagram Showcase */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl p-3 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-300">
                Verified BCDR Architecture Blueprint
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-teal-400">
                Quorum onQ Engine
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-sky-400">
                Sub-15m RTO / Sub-5s RPO
              </span>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#030712] aspect-[16/9] w-full">
            <img 
              src="/bcdr-architecture-insight.svg"
              alt="CITS BCDR Active-Standby Continuous Replication and Instant Virtual Failover Architecture Diagram"
              className="w-full h-full object-contain object-center"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>

        {/* 5-Stage Interactive Recovery Simulator */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-6 flex items-center justify-between">
            <span>Disaster Recovery Failover Sequence</span>
            <span className="text-sky-600 font-semibold">Click a stage to inspect response</span>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {stages.map((stage, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-sky-500'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-sky-300' : 'text-slate-400'
                      }`}>
                        STAGE {stage.step}
                      </span>
                      <div className={`p-1.5 rounded-lg ${
                        isSelected ? 'bg-slate-800' : 'bg-slate-100'
                      }`}>
                        {stage.icon}
                      </div>
                    </div>
                    <h3 className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {stage.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-200/60">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isSelected 
                        ? 'bg-slate-800 text-sky-300 border-slate-700' 
                        : stage.badgeColor
                    }`}>
                      {stage.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Details of Active Stage */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-sky-100 text-sky-800 font-semibold">
                  STAGE {stages[activeStepIndex].step} ANALYSIS
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  {stages[activeStepIndex].title}
                </h4>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {stages[activeStepIndex].description}
              </p>
              <div className="p-3 rounded-lg bg-white border border-sky-100 text-xs text-slate-800 space-y-1">
                <span className="font-mono text-sky-800 font-semibold uppercase">
                  CITS Architecture Mechanism:
                </span>
                <p className="text-slate-700">{stages[activeStepIndex].citsRole}</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Core DR Highlights
              </span>
              <ul className="text-xs text-slate-700 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Verified Quorum Appliance DR Engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Immutable Air-Gapped Snapshots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Non-Disruptive Sandbox Recovery Drills</span>
                </li>
              </ul>
              <button
                onClick={onLearnMore}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Explore Continuity Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
