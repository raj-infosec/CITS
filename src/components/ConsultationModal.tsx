import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Shield, Phone, Mail, Building2, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote?: string;
  onNavigateToQuickQuote?: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialNote = '',
  onNavigateToQuickQuote,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'Uganda',
    areaOfInterest: 'Cybersecurity',
    message: initialNote,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (initialNote) {
      setFormData((prev) => ({
        ...prev,
        message: initialNote,
      }));
    }
  }, [initialNote]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isQuoteAttached = formData.message?.includes('Quick Quote') || formData.message?.includes('CITS-EST-');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    try {
      const payload = {
        ...formData,
        formType: 'consultation',
        source: window.location.href,
      };

      let response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.status === 404 || response.status === 405) {
        response = await fetch('/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (error) {
      console.error('CITS consultation submission failed:', error);
      setSubmitError('We could not transmit your request right now. Please use the WhatsApp or email options on the site, or try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200 cursor-default"
      >
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close Consultation Form"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Consultation Request Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A senior enterprise technology advisor from our {formData.country} team will review your requirements and reach out within 1 business day.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 text-left space-y-1">
              <p><span className="text-slate-400">Area of Interest:</span> {formData.areaOfInterest}</p>
              <p><span className="text-slate-400">Company:</span> {formData.company}</p>
              <p><span className="text-slate-400">Direct Reference:</span> CITS-REQ-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold">
                <Shield className="w-4 h-4" />
                <span>Direct Enterprise Engagement</span>
              </div>
              {isQuoteAttached && (
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  Estimate Attached
                </span>
              )}
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Talk to an Enterprise Expert
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Discuss architecture, schedule a technical discovery audit, or request solution sizing.
            </p>

            {!isQuoteAttached && onNavigateToQuickQuote && (
              <div className="mt-3.5 p-2.5 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between text-xs">
                <span className="text-sky-900 flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  Need instant pricing &amp; scope estimation?
                </span>
                <button
                  type="button"
                  onClick={onNavigateToQuickQuote}
                  className="font-bold text-sky-700 hover:text-sky-900 underline ml-2 shrink-0 flex items-center gap-0.5"
                >
                  <span>Quick Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-slate-700 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Mukasa"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-mono text-slate-700 font-semibold mb-1">
                    Organisation / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Standard Trust Bank"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-slate-700 font-semibold mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="d.mukasa@company.co.ug"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-mono text-slate-700 font-semibold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+256 700 000000"
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
                    <option value="Uganda">Uganda (Kampala HQ)</option>
                    <option value="Zambia">Zambia (Lusaka)</option>
                    <option value="Malawi">Malawi (Lilongwe)</option>
                    <option value="Other Regional">Other Regional / International</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-slate-700 font-semibold mb-1">
                    Primary Area of Interest *
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 bg-white"
                  >
                    <option value="Cybersecurity">Cybersecurity & Next-Gen Firewalls</option>
                    <option value="Backup & Disaster Recovery">Backup & Disaster Recovery (Quorum)</option>
                    <option value="Enterprise Information Management">Enterprise Document Management (EDMS)</option>
                    <option value="Enterprise IT & ERP">Enterprise IT & ERP Infrastructure</option>
                    <option value="Communications">Communications & IP-PBX (Matrix)</option>
                    <option value="Software Solutions">Custom Software & Mobile Applications</option>
                    <option value="VAPT & Security Audits">VAPT & Security Audits</option>
                    <option value="ICT Consulting & Training">ICT Consulting & Training</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-slate-700 font-semibold mb-1">
                  Brief Overview of Requirements / Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline current infrastructure challenges, timeline, or number of users/branches..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
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
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-mono">
                Direct phone inquiries: +256 703922319 &bull; sales@cits.co.ug
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
