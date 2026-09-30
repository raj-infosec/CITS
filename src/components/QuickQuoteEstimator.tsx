import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Shield, 
  Cpu, 
  Activity, 
  Laptop, 
  RefreshCw, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Calculator, 
  Sliders, 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  MessageCircle, 
  Clock, 
  Building2, 
  DollarSign, 
  HelpCircle,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { 
  QUICK_QUOTE_CATEGORIES, 
  calculateQuickQuote, 
  formatCurrency, 
  UGX_PER_USD 
} from '../data/quoteData';
import { QuoteCalculationResult } from '../types';

interface QuickQuoteEstimatorProps {
  onApplyQuoteToConsultation: (quoteResult: QuoteCalculationResult) => void;
  onOpenConsultationModal?: (initialNote: string) => void;
  initialCategoryId?: string;
  isCompact?: boolean;
}

export const QuickQuoteEstimator: React.FC<QuickQuoteEstimatorProps> = ({
  onApplyQuoteToConsultation,
  onOpenConsultationModal,
  initialCategoryId = 'arcon-pam',
  isCompact = false,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategoryId);
  const selectedCategory = useMemo(() => {
    return QUICK_QUOTE_CATEGORIES.find((c) => c.id === selectedCategoryId) || QUICK_QUOTE_CATEGORIES[0];
  }, [selectedCategoryId]);

  const [units, setUnits] = useState<number>(selectedCategory.defaultUnits);
  const [branchCount, setBranchCount] = useState<number>(1);
  const [slaTier, setSlaTier] = useState<'standard' | 'premium'>('standard');
  const [includeStaging, setIncludeStaging] = useState<boolean>(true);
  const [currency, setCurrency] = useState<'USD' | 'UGX'>('USD');
  const [copied, setCopied] = useState<boolean>(false);

  // Keep units in valid bounds when category changes
  const handleCategorySelect = (catId: string) => {
    setSelectedCategoryId(catId);
    const cat = QUICK_QUOTE_CATEGORIES.find((c) => c.id === catId);
    if (cat) {
      setUnits(cat.defaultUnits);
    }
  };

  // Perform calculation
  const quoteResult = useMemo(() => {
    return calculateQuickQuote({
      categoryId: selectedCategoryId,
      units,
      branchCount,
      slaTier,
      includeStagingAndDeploy: includeStaging,
      currency,
    });
  }, [selectedCategoryId, units, branchCount, slaTier, includeStaging, currency]);

  // Copy summary to clipboard
  const handleCopySummary = () => {
    const summaryText = `CITS Enterprise Quick Quote [${quoteResult.quoteRef}]
Service: ${quoteResult.categoryName} (${quoteResult.techPartner})
Scope: ${quoteResult.units} ${quoteResult.unitLabel}, ${quoteResult.branchCount} Branch(es)
SLA Tier: ${quoteResult.slaTier === 'premium' ? 'Mission-Critical 24x7x365' : 'Enterprise 8x5 Business'}
Staging & Deployment: ${quoteResult.includeStagingAndDeploy ? 'Included (CITS Certified)' : 'Self-Deployed'}
Estimated Budget Range: ${formatCurrency(currency === 'UGX' ? quoteResult.estimatedLowUgx : quoteResult.estimatedLowUsd, currency)} – ${formatCurrency(currency === 'UGX' ? quoteResult.estimatedHighUgx : quoteResult.estimatedHighUsd, currency)}
Estimated Timeline: ${quoteResult.timeline}
Compliance: ${quoteResult.complianceBadges.join(', ')}
Request consultation: sales@cits.co.ug | +256 703922319`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Icon mapping
  const renderCategoryIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Laptop': return <Laptop className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Lock': return <Lock className={className} />;
      case 'FileText': return <FileText className={className} />;
      default: return <ShieldCheck className={className} />;
    }
  };

  // WhatsApp quick quote URL
  const whatsappUrl = `https://wa.me/256703922319?text=${encodeURIComponent(
    `Hello CITS Team, I generated an automated Quick Quote [${quoteResult.quoteRef}] for ${quoteResult.categoryName} (${quoteResult.units} ${quoteResult.unitLabel}, ${quoteResult.branchCount} Branch/es). Estimated budget: ${formatCurrency(currency === 'UGX' ? quoteResult.estimatedLowUgx : quoteResult.estimatedLowUsd, currency)} - ${formatCurrency(currency === 'UGX' ? quoteResult.estimatedHighUgx : quoteResult.estimatedHighUsd, currency)}. I would like to discuss this specification with an enterprise architect.`
  )}`;

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Currency Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Automated Cost &amp; Scope Estimation
            </span>
            <span className="text-xs text-slate-500 font-mono hidden md:inline">
              Ref: <strong className="text-slate-800">{quoteResult.quoteRef}</strong>
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time scoping calibrated for East African commercial &amp; banking deployments.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 shrink-0 self-start sm:self-auto">
          <span className="text-[11px] font-mono text-slate-500 px-2 font-medium">Currency:</span>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 rounded text-xs font-semibold font-mono transition-all ${
              currency === 'USD'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            USD ($)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('UGX')}
            className={`px-3 py-1 rounded text-xs font-semibold font-mono transition-all ${
              currency === 'UGX'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            UGX (USh)
          </button>
        </div>
      </div>

      {/* Step 1: Select Service Category */}
      <div className="space-y-3">
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
          1. Select Enterprise Solution Category *
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {QUICK_QUOTE_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`text-left p-3 rounded-xl border transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-sky-500 bg-sky-50/60 shadow-xs ring-2 ring-sky-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className={`p-1.5 rounded-lg shrink-0 ${
                      isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {renderCategoryIcon(cat.iconName, 'w-4 h-4')}
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold truncate max-w-[120px]">
                      {cat.techPartner}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium text-slate-600">
                    From {formatCurrency(cat.basePriceUsd, 'USD')}
                  </span>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-sky-600">
                      <Check className="w-3 h-3" /> Selected
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Configure Environment Scope */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-5">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-sky-600" />
            <span>2. Tune Scope &amp; Architecture Parameters</span>
          </label>
          <span className="text-[11px] text-slate-500 font-mono">
            Active: <span className="text-slate-800 font-semibold">{selectedCategory.name}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Unit / Endpoint volume slider */}
          <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800">
                {selectedCategory.unitLabel}
              </span>
              <span className="font-mono font-extrabold text-sky-700 text-sm bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                {units} units
              </span>
            </div>

            <input
              type="range"
              min={selectedCategory.minUnits}
              max={selectedCategory.maxUnits}
              step={selectedCategory.unitStep}
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 pt-1">
              <span>Min: {selectedCategory.minUnits}</span>
              <div className="flex gap-1">
                {selectedCategory.unitPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setUnits(preset)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      units === preset
                        ? 'bg-sky-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
              <span>Max: {selectedCategory.maxUnits}</span>
            </div>
          </div>

          {/* Branch / Site count */}
          <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Distributed Branches / Remote Sites</span>
              </span>
              <span className="font-mono font-extrabold text-slate-800 text-sm bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {branchCount === 1 ? 'Central HQ Only' : `${branchCount} Sites`}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {[
                { count: 1, label: '1 (HQ)' },
                { count: 3, label: '2 - 3' },
                { count: 7, label: '4 - 8' },
                { count: 15, label: '10+' },
              ].map((b) => (
                <button
                  key={b.count}
                  type="button"
                  onClick={() => setBranchCount(b.count)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-mono font-semibold transition-all text-center ${
                    branchCount === b.count
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-500">
              Includes remote tunnel gateway gateways, probe collectors, and multi-site configuration.
            </p>
          </div>

        </div>

        {/* SLA Tier & Staging Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          
          {/* SLA Selector */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-slate-600 font-semibold uppercase tracking-wider">
              Support &amp; SLA Commitment Tier
            </span>
            <div className="grid grid-cols-2 gap-2">
              {selectedCategory.slaOptions.map((opt) => {
                const isSelected = slaTier === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSlaTier(opt.id)}
                    className={`p-2.5 text-left rounded-xl border transition-all ${
                      isSelected
                        ? 'border-sky-500 bg-white shadow-xs ring-1 ring-sky-500'
                        : 'border-slate-200 bg-slate-100/70 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">{opt.name}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />}
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {opt.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CITS In-Country Staging & Deployment Option */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-slate-600 font-semibold uppercase tracking-wider">
              Engineering Implementation
            </span>
            <label className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition-colors">
              <input
                type="checkbox"
                checked={includeStaging}
                onChange={(e) => setIncludeStaging(e.target.checked)}
                className="mt-0.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500 h-4 w-4"
              />
              <div className="text-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>Include CITS Staging &amp; Hardening</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold">
                    RECOMMENDED
                  </span>
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Pre-delivery master imaging, BIOS lockdown, perimeter rule validation, on-site commissioning, and administrator knowledge transfer.
                </p>
              </div>
            </label>
          </div>

        </div>

      </div>

      {/* Step 3: Dynamic Automated Estimate Output Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-md relative overflow-hidden">
        
        {/* Background circuit glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          
          {/* Header & Estimated Range */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                  Estimated Investment Range ({currency})
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  REF: {quoteResult.quoteRef}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {formatCurrency(
                    currency === 'UGX' ? quoteResult.estimatedLowUgx : quoteResult.estimatedLowUsd,
                    currency
                  )}
                  <span className="text-slate-400 font-normal text-lg sm:text-2xl mx-1.5">&ndash;</span>
                  {formatCurrency(
                    currency === 'UGX' ? quoteResult.estimatedHighUgx : quoteResult.estimatedHighUsd,
                    currency
                  )}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currency === 'UGX' ? '(Excl. VAT)' : 'USD Net'}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Based on <strong className="text-white">{quoteResult.units} {quoteResult.unitLabel.toLowerCase()}</strong> across{' '}
                <strong className="text-white">{quoteResult.branchCount} location(s)</strong> with {quoteResult.slaTier === 'premium' ? '24/7 Platinum SLA' : 'Enterprise 8x5 SLA'}.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopySummary}
                className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
                title="Copy quotation summary"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Summary</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="Share quotation to WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span className="hidden sm:inline">WhatsApp Triage</span>
              </a>
            </div>
          </div>

          {/* Transparent Itemized Breakdown Table */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Itemized Architectural Cost Breakdown
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {quoteResult.breakdown.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-200 block truncate" title={item.label}>
                    {item.label}
                  </span>
                  <div className="font-mono text-sm font-bold text-sky-400">
                    {formatCurrency(currency === 'UGX' ? item.amountUgx : item.amountUsd, currency)}
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Included Deliverables & Regulatory Compliance */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-slate-800/80 text-xs">
            
            {/* Deliverables (8 cols) */}
            <div className="md:col-span-8 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                Standard CITS Engagement Deliverables
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                {quoteResult.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline & Compliance (4 cols) */}
            <div className="md:col-span-4 space-y-2.5 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                  Typical Staging Timeline
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  {quoteResult.timeline}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                  Verified Compliance Readiness
                </span>
                <div className="flex flex-wrap gap-1">
                  {quoteResult.complianceBadges.map((badge, bidx) => (
                    <span
                      key={bidx}
                      className="px-1.5 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800 text-[10px] font-mono font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Integration Action Trigger */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-300 text-center sm:text-left">
              Ready to lock in this estimate? Attach this configuration directly to your enterprise consultation request.
            </p>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                id="apply-quote-to-form-btn"
                onClick={() => onApplyQuoteToConsultation(quoteResult)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Apply Estimate &amp; Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
