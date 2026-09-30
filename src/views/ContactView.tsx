import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  Calculator, 
  FileText, 
  Sliders, 
  Tag, 
  X, 
  Check, 
  Copy, 
  Download,
  Calendar
} from 'lucide-react';
import { REGIONAL_OFFICES } from '../data/citsData';
import { ContactFormData, QuoteCalculationResult } from '../types';
import { QuickQuoteEstimator } from '../components/QuickQuoteEstimator';
import { formatCurrency } from '../data/quoteData';

interface ContactViewProps {
  initialMode?: 'quote' | 'direct';
  initialCategoryId?: string;
  onOpenConsultationModal?: (initialNote?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialMode = 'quote',
  initialCategoryId = 'arcon-pam',
  onOpenConsultationModal,
}) => {
  const [activeTab, setActiveTab] = useState<'quote' | 'direct'>(initialMode);
  const [attachedQuote, setAttachedQuote] = useState<QuoteCalculationResult | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'Uganda',
    areaOfInterest: 'Cybersecurity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteCalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  // Handle applying estimate from QuickQuoteEstimator
  const handleApplyQuote = (quote: QuoteCalculationResult) => {
    setAttachedQuote(quote);

    // Map category name to area of interest
    let area = 'Cybersecurity';
    if (quote.categoryId.includes('pam') || quote.categoryId.includes('vapt')) {
      area = 'Cybersecurity & PAM';
    } else if (quote.categoryId.includes('dr')) {
      area = 'Backup & Disaster Recovery';
    } else if (quote.categoryId.includes('edms')) {
      area = 'Enterprise Information Management';
    } else if (quote.categoryId.includes('hardware')) {
      area = 'Enterprise IT Infrastructure';
    } else if (quote.categoryId.includes('itsm')) {
      area = 'ITSM & Endpoint Management';
    } else if (quote.categoryId.includes('prtg')) {
      area = 'Network Observability & Monitoring';
    }

    const budgetDisplay = `${formatCurrency(quote.estimatedLowUsd, 'USD')} - ${formatCurrency(quote.estimatedHighUsd, 'USD')} (${formatCurrency(quote.estimatedLowUgx, 'UGX')} - ${formatCurrency(quote.estimatedHighUgx, 'UGX')})`;

    const formattedMessage = `[CITS Quick Quote Request - Ref: ${quote.quoteRef}]
Service Category: ${quote.categoryName} (${quote.techPartner})
Scope Units: ${quote.units} ${quote.unitLabel}
Distributed Locations: ${quote.branchCount === 1 ? 'Central HQ' : `${quote.branchCount} Branch Sites`}
SLA Commitment: ${quote.slaTier === 'premium' ? 'Mission-Critical 24x7x365 SLA' : 'Enterprise 8x5 Business SLA'}
CITS Certified Staging: ${quote.includeStagingAndDeploy ? 'Included' : 'Self-Deployed'}
Estimated Budget Range: ${budgetDisplay}
Estimated Staging Timeline: ${quote.timeline}

Please review our technical parameters and assign an enterprise architect to schedule an introductory discovery session.`;

    setFormData((prev) => ({
      ...prev,
      areaOfInterest: area,
      quoteRef: quote.quoteRef,
      estimatedBudget: budgetDisplay,
      selectedCategory: quote.categoryName,
      serviceScopeSummary: `${quote.units} ${quote.unitLabel} across ${quote.branchCount} location(s)`,
      message: formattedMessage,
    }));

    // Smooth scroll down to engagement form
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleRemoveAttachedQuote = () => {
    setAttachedQuote(null);
    setFormData((prev) => ({
      ...prev,
      quoteRef: undefined,
      estimatedBudget: undefined,
      selectedCategory: undefined,
      serviceScopeSummary: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    const payload = {
      ...formData,
      formType: attachedQuote ? 'quick-quote-consultation' : 'architecture-discovery',
      quote: attachedQuote || undefined,
      source: window.location.href,
    };

    try {
      let response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Shared-hosting fallback: BigRock/cPanel can serve contact.php when the Vercel API is absent.
      if (response.status === 404 || response.status === 405) {
        response = await fetch('/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!response.ok) {
        throw new Error('The enquiry service returned an error.');
      }

      setSubmitted(true);
      setSubmittedQuote(attachedQuote);
    } catch (error) {
      console.error('CITS contact submission failed:', error);
      setSubmitError('We could not transmit your request right now. Please use the WhatsApp or email options on this page, or try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyConfirmation = () => {
    if (!submittedQuote) return;
    const summary = `CITS Official Engagement Confirmation
Reference: ${submittedQuote.quoteRef}
Client: ${formData.name} (${formData.company})
Email: ${formData.email} | Phone: ${formData.phone}
Country Desk: ${formData.country}
Service: ${submittedQuote.categoryName} (${submittedQuote.techPartner})
Scope: ${submittedQuote.units} ${submittedQuote.unitLabel}, ${submittedQuote.branchCount} Location(s)
Estimated Range: ${formatCurrency(submittedQuote.estimatedLowUsd, 'USD')} - ${formatCurrency(submittedQuote.estimatedHighUsd, 'USD')}
Expected SLA Response: Within 24 Business Hours`;

    navigator.clipboard.writeText(summary);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#090f1d] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Regional Directory &bull; Automated Scoping &bull; Direct Engagement
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Enterprise Consultation &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
                Quick Quote Scoping.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you require an immediate automated budget estimation for ARCON PAM, Next-Gen Firewalls, ManageEngine ITSM, PRTG, or commercial hardware fleets &mdash; or wish to schedule a confidential architecture audit &mdash; our senior engineers are at your disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mode Selector Tabs */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 bg-slate-200/80 p-1.5 rounded-xl border border-slate-300/80">
            <button
              type="button"
              id="tab-quick-quote-mode"
              onClick={() => setActiveTab('quote')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'quote'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'quote' ? 'text-sky-600' : 'text-slate-500'}`} />
              <span>⚡ Quick Quote Estimator</span>
              <span className="px-1.5 py-0.2 rounded bg-sky-100 text-sky-800 text-[10px] font-mono hidden md:inline">
                AUTOMATED
              </span>
            </button>

            <button
              type="button"
              id="tab-direct-inquiry-mode"
              onClick={() => setActiveTab('direct')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'direct'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className={`w-4 h-4 ${activeTab === 'direct' ? 'text-sky-600' : 'text-slate-500'}`} />
              <span>Direct Architecture Discovery</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Guaranteed Enterprise SLA: Response &le; 24h</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Work Area (7 cols or 8 cols depending on view) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SUBMITTED SUCCESS STATE */}
            {submitted ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-10 shadow-sm text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold inline-block">
                    Inquiry &amp; Quick Quote Dispatched
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Consultation Request Successfully Transmitted
                  </h3>
                  <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your consultation request for <strong className="text-slate-900">{formData.company}</strong> has been assigned to our senior enterprise engineering desk in <strong className="text-slate-900">{formData.country}</strong>.
                  </p>
                </div>

                {/* Attached Quote Summary Card */}
                {submittedQuote && (
                  <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 text-left border border-slate-800 space-y-4 max-w-xl mx-auto shadow-md">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 block">
                          Official Scope Reference
                        </span>
                        <strong className="text-lg font-mono text-white">
                          {submittedQuote.quoteRef}
                        </strong>
                      </div>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-sky-950 text-sky-300 border border-sky-800">
                        {submittedQuote.categoryName}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Scope Parameters:</span>
                        <strong className="text-slate-200">
                          {submittedQuote.units} {submittedQuote.unitLabel} ({submittedQuote.branchCount} Sites)
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">SLA Commitment:</span>
                        <strong className="text-slate-200">
                          {submittedQuote.slaTier === 'premium' ? '24/7 Platinum' : '8x5 Standard'}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Budget Range (USD):</span>
                        <strong className="text-sky-400 font-mono">
                          {formatCurrency(submittedQuote.estimatedLowUsd, 'USD')} &ndash; {formatCurrency(submittedQuote.estimatedHighUsd, 'USD')}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Budget Range (UGX):</span>
                        <strong className="text-emerald-400 font-mono">
                          {formatCurrency(submittedQuote.estimatedLowUgx, 'UGX')} &ndash; {formatCurrency(submittedQuote.estimatedHighUgx, 'UGX')}
                        </strong>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Timeline: {submittedQuote.timeline}</span>
                      <span>Compliance: {submittedQuote.complianceBadges.join(', ')}</span>
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {submittedQuote && (
                    <button
                      onClick={handleCopyConfirmation}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {copiedSuccess ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-600">Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-600" />
                          <span>Copy Official Reference Summary</span>
                        </>
                      )}
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedQuote(null);
                      setAttachedQuote(null);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        country: 'Uganda',
                        areaOfInterest: 'Cybersecurity',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Start Another Scoping Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* TAB 1: QUICK QUOTE ESTIMATOR */}
                {activeTab === 'quote' && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                    <QuickQuoteEstimator
                      onApplyQuoteToConsultation={handleApplyQuote}
                      onOpenConsultationModal={onOpenConsultationModal}
                      initialCategoryId={initialCategoryId}
                    />
                  </div>
                )}

                {/* TAB 2 / DIRECT INQUIRY MODE OR ENGAGEMENT FORM */}
                <div 
                  ref={formRef}
                  id="engagement-details"
                  className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-9 shadow-xs space-y-6"
                >
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5" />
                        <span>Corporate Engagement &amp; Advisory Request</span>
                      </span>
                      {attachedQuote && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Quote Attached ({attachedQuote.quoteRef})
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mt-1">
                      {attachedQuote 
                        ? `Lock in Scope for ${attachedQuote.categoryName}`
                        : 'Initiate a Senior Technical Consultation'
                      }
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      {attachedQuote
                        ? `Submit your details below to schedule an enterprise architect review for ${attachedQuote.quoteRef}.`
                        : 'Connect with our systems engineers to scope bespoke architecture, cloud migration, or regulatory compliance.'
                      }
                    </p>
                  </div>

                  {/* Attached Quote Callout Banner */}
                  {attachedQuote && (
                    <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <strong className="text-sky-950 font-bold">
                            Attached Estimate: {attachedQuote.categoryName} ({attachedQuote.techPartner})
                          </strong>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-200/80 text-sky-900 font-semibold">
                            {attachedQuote.quoteRef}
                          </span>
                        </div>
                        <p className="text-slate-600">
                          Scope: {attachedQuote.units} {attachedQuote.unitLabel}, {attachedQuote.branchCount} Location(s) &bull; Range:{' '}
                          <strong className="text-slate-900 font-mono">
                            {formatCurrency(attachedQuote.estimatedLowUsd, 'USD')} &ndash; {formatCurrency(attachedQuote.estimatedHighUsd, 'USD')}
                          </strong>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleRemoveAttachedQuote}
                        className="text-slate-500 hover:text-rose-600 text-xs font-medium flex items-center gap-1 shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Detach Quote</span>
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-slate-700 font-semibold mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Christine Akello"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-slate-700 font-semibold mb-1">
                          Organisation / Enterprise *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Financial Services"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-slate-700 font-semibold mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="c.akello@apexfinancial.co.ug"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-slate-700 font-semibold mb-1">
                          Direct Telephone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+256 703 000000"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-slate-700 font-semibold mb-1">
                          Operating Country *
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 bg-white"
                        >
                          <option value="Uganda">Uganda (Headquarters)</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Other Regional">Other Regional / International</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono text-slate-700 font-semibold mb-1">
                          Architectural Area of Interest *
                        </label>
                        <select
                          value={formData.areaOfInterest}
                          onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 bg-white"
                        >
                          <option value="Cybersecurity">Cybersecurity (Sophos / WatchGuard)</option>
                          <option value="Cybersecurity & PAM">Privileged Access Management (ARCON PAM)</option>
                          <option value="ITSM & Endpoint Management">ITSM &amp; Endpoint Central (ManageEngine)</option>
                          <option value="Network Observability & Monitoring">Network Telemetry (PRTG Paessler)</option>
                          <option value="Backup & Disaster Recovery">Backup &amp; Disaster Recovery (Quorum)</option>
                          <option value="Enterprise IT Infrastructure">Enterprise Hardware &amp; Fleets (HP / Lenovo / UniFi)</option>
                          <option value="Enterprise Information Management">Enterprise Document Management (EDMS)</option>
                          <option value="Communications">Unified Communications &amp; IP-PBX (Matrix)</option>
                          <option value="VAPT & Security Audits">VAPT &amp; Penetration Testing</option>
                          <option value="ICT Consulting & Training">Strategic ICT Consulting &amp; SLA</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block font-mono text-slate-700 font-semibold">
                          Scope Notes &amp; Environment Details
                        </label>
                        {attachedQuote && (
                          <span className="text-[10px] text-sky-600 font-mono">
                            Auto-populated from Quick Quote
                          </span>
                        )}
                      </div>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details on user counts, branch offices, existing perimeter appliances, or timeline constraints..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 font-mono text-xs leading-relaxed"
                      />
                    </div>

                    {submitError && (
                      <div role="alert" className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-xs text-rose-800">
                        {submitError}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <span>Transmitting Scoping Request...</span>
                        ) : (
                          <>
                            <span>
                              {attachedQuote 
                                ? `Submit Consultation with Attached Quote [${attachedQuote.quoteRef}]`
                                : 'Submit Architecture Discovery Request'
                              }
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}

          </div>

          {/* Regional Hubs & Verified Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Assist WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-950/90 via-slate-900 to-slate-900 text-white border border-emerald-500/40 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live WhatsApp Dispatch
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  FASTEST RESPONSE
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Urgent Assistance on WhatsApp
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Prefer direct messaging? Connect directly with our Kampala engineering desk or regional coordinators on WhatsApp for quick scoping, pricing sheets, or incident triage.
              </p>
              <div className="pt-1">
                <a
                  id="contact-page-whatsapp-btn"
                  href="https://wa.me/256703922319?text=Hello%20CITS%20Team%2C%20I%20would%20like%20to%20speak%20with%20a%20systems%20architect%20regarding%20an%20enterprise%20solution%20quote..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 transition-all group"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                  <span>Chat on WhatsApp (+256 703922319)</span>
                </a>
              </div>
            </div>

            {/* Support Windows */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Operational Advisory Hours
              </span>
              <h3 className="text-lg font-bold text-white">
                Enterprise Support Windows
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Standard consulting: Monday &ndash; Friday, 8:00 AM &ndash; 5:30 PM (EAT).
                <br />
                Managed SLA Clients: 24/7/365 priority emergency escalation.
              </p>
            </div>

            {/* Verified Offices Cards */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold px-1">
                Regional Hubs &amp; Directory
              </div>

              {REGIONAL_OFFICES.map((office) => (
                <div
                  key={office.country}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-bold">
                      {office.country} {office.country === 'Uganda' && '(Headquarters)'}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      Verified Entity
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-xs">
                    {office.companyName}
                  </h4>

                  <div className="text-[11px] text-slate-600 space-y-1.5 pt-0.5">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>

                    <div className="flex items-center gap-2 font-mono">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-900 hover:text-sky-600 font-medium">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 font-mono">
                      <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-sky-600 hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
