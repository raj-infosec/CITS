import React, { useState } from 'react';
import { 
  Calculator, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  TrendingDown, 
  Clock, 
  ShieldAlert, 
  Building2, 
  DollarSign,
  HelpCircle
} from 'lucide-react';

interface DowntimeCalculatorSectionProps {
  onOpenConsultation: (inquiryContext?: string) => void;
}

export const DowntimeCalculatorSection: React.FC<DowntimeCalculatorSectionProps> = ({
  onOpenConsultation,
}) => {
  // Calculator inputs
  const [employeeCount, setEmployeeCount] = useState<number>(180);
  const [hourlyRevenue, setHourlyRevenue] = useState<number>(3500); // USD
  const [currentRecoveryHours, setCurrentRecoveryHours] = useState<number>(18); // Traditional tape/manual restore hours
  const [averageHourlyWage, setAverageHourlyWage] = useState<number>(18); // USD/hour/employee

  // Calculations
  // Total direct revenue lost during an incident
  const directRevenueLoss = hourlyRevenue * currentRecoveryHours;
  // Idle payroll productivity loss (assuming 75% worker paralysis during full IT outage)
  const productivityLoss = employeeCount * averageHourlyWage * currentRecoveryHours * 0.75;
  // Remediation & emergency vendor triage overhead
  const remediationCost = Math.round(hourlyRevenue * 1.5 * Math.min(currentRecoveryHours, 24));
  // Total traditional outage impact
  const totalTraditionalLoss = directRevenueLoss + productivityLoss + remediationCost;

  // With CITS & Quorum onQ: Sub-15 minute instant failover (0.25 hours)
  const citsRecoveryHours = 0.25;
  const citsRevenueLoss = hourlyRevenue * citsRecoveryHours;
  const citsProductivityLoss = employeeCount * averageHourlyWage * citsRecoveryHours * 0.75;
  const citsTotalLoss = Math.round(citsRevenueLoss + citsProductivityLoss);

  // Capital preserved / risk mitigated
  const netSavedCapital = totalTraditionalLoss - citsTotalLoss;

  const handleBookAssessment = () => {
    onOpenConsultation(
      `Downtime Risk Profile: ${employeeCount} users, $${hourlyRevenue}/hr revenue, current DR recovery SLA: ${currentRecoveryHours}h. Projected single-incident exposure: $${totalTraditionalLoss.toLocaleString()}. Requesting Quorum Zero-Downtime DR scoping.`
    );
  };

  return (
    <section id="downtime-calculator" className="py-20 md:py-28 bg-[#070b14] text-white border-y border-slate-800 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/4 -left-48 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-sky-400 mb-4">
            <Calculator className="w-3.5 h-3.5 text-sky-400" />
            <span>EXECUTIVE FINANCIAL MODELER</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-300">Cost of Inaction Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Financial Reality of Downtime.{' '}
            <span className="font-serif italic font-normal text-sky-300">
              Calculate your exposure.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            In banking, manufacturing, and enterprise commerce across East Africa, IT downtime isn&apos;t merely a technical inconvenience — it is a catastrophic drain on working capital, staff productivity, and regulatory compliance.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Parameters (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center justify-between border-b border-slate-800 pb-4">
              <span>Enterprise Operational Variables</span>
              <span className="text-xs font-mono text-slate-400 font-normal">Adjust values to match your organization</span>
            </h3>

            <div className="mt-6 space-y-6">
              
              {/* Slider 1: Number of Employees / Workstations */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <label htmlFor="input-emp-count" className="font-medium text-slate-200 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    Total Knowledge Workers & Systems Users
                  </label>
                  <span className="font-mono font-bold text-sky-300 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                    {employeeCount.toLocaleString()} employees
                  </span>
                </div>
                <input
                  id="input-emp-count"
                  type="range"
                  min="20"
                  max="2500"
                  step="10"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>20 users (SME)</span>
                  <span>500 (Mid-Market)</span>
                  <span>2,500+ (Tier-1 Bank/Gov)</span>
                </div>
              </div>

              {/* Slider 2: Hourly Revenue / Operational Value */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <label htmlFor="input-hourly-rev" className="font-medium text-slate-200 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    Estimated Hourly Revenue / Operational Flow
                  </label>
                  <span className="font-mono font-bold text-emerald-300 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                    ${hourlyRevenue.toLocaleString()} / hour
                  </span>
                </div>
                <input
                  id="input-hourly-rev"
                  type="range"
                  min="250"
                  max="25000"
                  step="250"
                  value={hourlyRevenue}
                  onChange={(e) => setHourlyRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>$250/hr</span>
                  <span>$5,000/hr</span>
                  <span>$25,000+/hr</span>
                </div>
              </div>

              {/* Slider 3: Current Recovery Time Objective (RTO) */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <label htmlFor="input-recovery-hrs" className="font-medium text-slate-200 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Current Recovery Time to Full Production (RTO)
                  </label>
                  <span className="font-mono font-bold text-amber-300 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                    {currentRecoveryHours} Hours
                  </span>
                </div>
                <input
                  id="input-recovery-hrs"
                  type="range"
                  min="2"
                  max="72"
                  step="1"
                  value={currentRecoveryHours}
                  onChange={(e) => setCurrentRecoveryHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>2 hours (Fast)</span>
                  <span>18 hours (Regional Avg)</span>
                  <span>72 hours (Ransomware lock)</span>
                </div>
              </div>

              {/* Recovery Mechanism Comparison Insight */}
              <div className="pt-4 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold mb-1">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Conventional Tape / NAS Backup</span>
                  </div>
                  <p className="text-slate-400">
                    Average East African recovery requires rebuilding bare-metal OS, reinstalling DBs, and replaying transaction logs.
                  </p>
                  <p className="font-mono text-rose-300 mt-2 font-bold">
                    Typical RTO: {currentRecoveryHours} to 48 Hours
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-800/60">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>CITS + Quorum onQ Failover</span>
                  </div>
                  <p className="text-slate-400">
                    High-availability virtual clone spins up instantaneously on local appliance or private cloud.
                  </p>
                  <p className="font-mono text-emerald-400 mt-2 font-bold">
                    Verified RTO: Under 15 Minutes
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Calculated Exposure & Business Case (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0f172a] to-[#0a101d] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Single Outage Exposure Summary
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-rose-950 text-rose-400 border border-rose-800/60">
                HIGH RISK PROFILE
              </span>
            </div>

            {/* Big Headline Metric */}
            <div className="mt-6">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                Projected Total Loss (Current Posture)
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-rose-400 font-mono tracking-tight mt-1">
                ${totalTraditionalLoss.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Direct revenue, employee downtime, emergency contractor remediation.
              </p>
            </div>

            {/* Breakdown Items */}
            <div className="mt-6 space-y-3 font-mono text-xs border-y border-slate-800/80 py-4">
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                  Direct Revenue Forfeited:
                </span>
                <span className="font-bold text-white">${directRevenueLoss.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Idle Staff Productivity Burn:
                </span>
                <span className="font-bold text-white">${Math.round(productivityLoss).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <ShieldAlert className="w-3.5 h-3.5 text-indigo-400" />
                  Forensic & Recovery Overhead:
                </span>
                <span className="font-bold text-white">${remediationCost.toLocaleString()}</span>
              </div>
            </div>

            {/* CITS Protection Impact */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/70">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                <span>WITH CITS ZERO-DOWNTIME ARCHITECTURE</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[10px]">98.7% MITIGATION</span>
              </div>
              <div className="text-2xl font-bold text-emerald-300 font-mono">
                ${netSavedCapital.toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 font-sans mt-1">
                Capital preserved and business risk eliminated per incident through sub-15 minute instant failover.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-6">
              <button
                id="calculator-book-assessment-btn"
                onClick={handleBookAssessment}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-xl shadow-lg shadow-sky-950 transition-all group"
              >
                <span>Request Custom Business Continuity Assessment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Confidential analysis conducted by certified CITS Systems Architects.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
