import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, ArrowRight, RefreshCw, AlertTriangle } from 'lucide-react';

interface MaturityAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultationWithResults: (summary: string) => void;
}

export const MaturityAssessmentModal: React.FC<MaturityAssessmentModalProps> = ({
  isOpen,
  onClose,
  onBookConsultationWithResults,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0]);

  if (!isOpen) return null;

  const questions = [
    {
      domain: "Cybersecurity & Edge Defense",
      question: "How does your organisation inspect encrypted network traffic and defend against zero-day ransomware?",
      options: [
        { label: "Standard commercial router or legacy firewall without deep SSL/TLS inspection", score: 1 },
        { label: "Next-gen firewall in place, but endpoint protection runs disconnected without synchronized telemetry", score: 2 },
        { label: "Fully synchronized Next-Gen XGS firewall with managed EDR and regular third-party VAPT audits", score: 3 },
      ]
    },
    {
      domain: "Business Continuity & DR",
      question: "If your core server hardware suffered total catastrophic failure today, how fast can you restore live business operations?",
      options: [
        { label: "More than 24 hours (manual tape or unverified file backups; requires rebuilding servers)", score: 1 },
        { label: "Between 4 and 12 hours (virtual machine snapshots stored on connected network drives)", score: 2 },
        { label: "Under 15 minutes (One-click instant failover on dedicated air-gapped DR appliances like Quorum)", score: 3 },
      ]
    },
    {
      domain: "Enterprise Information & Documents",
      question: "How are internal purchase vouchers, customer records, and board resolutions routed and archived?",
      options: [
        { label: "Physical paper forms, manual ink signatures, and physical manila filing cabinets", score: 1 },
        { label: "Shared network folders and scanned PDFs, but approvals still happen over unencrypted email chains", score: 2 },
        { label: "Centralized EDMS with OCR indexing, automated approval workflows, and immutable audit logs", score: 3 },
      ]
    },
    {
      domain: "Communications & Branch Connectivity",
      question: "How are regional branches and mobile executive staff connected for voice and collaboration?",
      options: [
        { label: "Separate analog telephone lines paying standard carrier rates for inter-branch calls", score: 1 },
        { label: "Basic cloud VoIP, but quality fluctuates and boardroom video systems suffer frequent disruptions", score: 2 },
        { label: "Unified Matrix IP-PBX with secure VoIP trunks, branch extension dialing, and acoustic-tuned video rooms", score: 3 },
      ]
    }
  ];

  const handleSelectOption = (score: number) => {
    const updated = [...scores];
    updated[currentStep] = score;
    setScores(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // Results state
    }
  };

  const totalScore = scores.reduce((a, b) => a + b, 0); // min 4, max 12
  const percentage = Math.round((totalScore / 12) * 100);

  const getAssessmentOutcome = () => {
    if (totalScore <= 6) {
      return {
        level: "High Operational Vulnerability",
        badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
        summary: "Your organisation is exposed to critical downtime risks, perimeter blind spots, and paper-based approval delays. Immediate priority should be placed on air-gapped disaster recovery and Next-Gen firewall hardening.",
        recommendedAction: "Schedule a non-disruptive Technical Discovery Assessment with CITS engineers."
      };
    } else if (totalScore <= 9) {
      return {
        level: "Moderate Infrastructure Resilience",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
        summary: "You have foundational IT tools, but disconnected systems create operational bottlenecks and lateral vulnerability. Synchronizing endpoint telemetry with edge firewalls and automating document workflows will yield high ROI.",
        recommendedAction: "Review synchronized zero-trust architecture and automated EDMS workflow routing."
      };
    } else {
      return {
        level: "Advanced Enterprise Ready",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        summary: "Strong enterprise architecture posture. To maintain compliance and operational edge, focus on periodic VAPT penetration testing, simulated disaster recovery drills, and continuous security audits.",
        recommendedAction: "Engage CITS for advanced VAPT penetration audits and enterprise multi-site expansion."
      };
    }
  };

  const outcome = getAssessmentOutcome();

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 cursor-default"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close Assessment"
        >
          <X className="w-5 h-5" />
        </button>

        {currentStep < questions.length ? (
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {questions[currentStep].domain}
              </span>
            </div>

            {/* Question */}
            <div className="mt-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {questions[currentStep].question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 transition-all text-sm text-slate-800 font-medium flex items-center justify-between group"
                >
                  <span className="leading-relaxed pr-2">{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              ))}
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-1.5 mt-8 justify-center">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentStep ? 'w-8 bg-sky-600' : 'w-2 bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-2xl bg-sky-50 text-sky-600 mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Architecture Maturity Report
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Evaluated against enterprise resilience benchmarks
              </p>
            </div>

            {/* Score Metric */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase text-slate-500 font-semibold">Resilience Rating</p>
                <p className="text-2xl font-black text-slate-900">{percentage}%</p>
              </div>
              <span className={`text-xs font-mono px-3 py-1 rounded-md border font-semibold ${outcome.badgeColor}`}>
                {outcome.level}
              </span>
            </div>

            {/* Findings */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 space-y-2">
              <p className="leading-relaxed">{outcome.summary}</p>
              <p className="font-semibold text-sky-800 pt-1 border-t border-slate-100">
                Strategic Recommendation: {outcome.recommendedAction}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onBookConsultationWithResults(`Infrastructure Assessment Result: ${outcome.level} (${percentage}%)`);
                }}
                className="flex-1 py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-colors text-center"
              >
                Discuss Findings with Senior Advisor
              </button>
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setScores([0, 0, 0, 0]);
                }}
                className="py-3 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Restart Test
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
