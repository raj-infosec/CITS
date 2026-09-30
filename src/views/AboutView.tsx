import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Globe2, 
  Server, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2,
  Building,
  Award,
  Cpu,
  Layers,
  FileCheck
} from 'lucide-react';
import { REGIONAL_OFFICES } from '../data/citsData';

interface AboutViewProps {
  onOpenConsultation: () => void;
  onNavigateToContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ 
  onOpenConsultation, 
  onNavigateToContact 
}) => {
  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Hero Header */}
      <section className="bg-[#090f1d] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              Corporate Overview &bull; Complete IT Solutions Uganda Limited
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Technology should make business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                stronger, safer and more resilient.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              CITS is an enterprise technology partner helping organisations across East and Southern Africa design, secure, and modernise the critical digital infrastructure behind daily business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Identity & Strategic Positioning */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            {/* Official Corporate Brand Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">CITS</span>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest rounded bg-sky-100 text-sky-800 border border-sky-200 px-2 py-0.5">UGANDA</span>
              </div>
              <p className="font-medium tracking-wider uppercase text-xs text-slate-500 mt-1">Complete IT Solutions</p>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Enterprise Technology Partner</span>
                <span className="text-sky-600 font-semibold">Uganda • Zambia • Malawi</span>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Corporate Registration</span>
                <span className="text-slate-800 font-semibold">Established in Kampala</span>
              </div>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold block">
              Strategic Identity
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Engineering beyond traditional IT vendors.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We do not operate as an off-the-shelf computer reseller or a generic maintenance shop. We act as long-term technology architects and trusted advisors for institutions where downtime, data loss, or security breaches threaten solvency and public trust.
            </p>
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Our Core Perception
              </span>
              <p className="font-mono text-sm tracking-wider text-slate-200">
                SECURE &bull; CONNECTED &bull; RESILIENT &bull; INTELLIGENT &bull; ENTERPRISE-READY
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-slate-900">Cybersecurity Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-trust perimeter firewalls, active EDR threat mitigation, and rigorous VAPT penetration testing to defend corporate assets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <RefreshCw className="w-6 h-6 text-sky-600 mb-2" />
              <h3 className="font-bold text-slate-900">Business Continuity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disaster recovery appliances with instant local virtual server spin-up and air-gapped snapshots that make downtime predictable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <Server className="w-6 h-6 text-indigo-600 mb-2" />
              <h3 className="font-bold text-slate-900">Mission-Critical IT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-availability server virtualization, structured optical fiber switching, and enterprise ERP implementations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <Globe2 className="w-6 h-6 text-teal-600 mb-2" />
              <h3 className="font-bold text-slate-900">Regional Footprint</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Serving organizations across Uganda, Zambia, and Malawi with local engineering teams and verified technical support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Engineering Principles & Regional Staging Lab Facility */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 inline-block">
              Engineering Commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              How CITS Delivers Enterprise Reliability
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every server, network gateway, and security architecture deployed by CITS is backed by proven engineering protocols, pre-delivery burn-in testing, and strict regulatory governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Zero-Trust Security</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never assume network traffic is safe. Every user, device, and packet undergoes continuous authentication and encryption, isolating compromised nodes in milliseconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">In-Country Staging Lab</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hardware does not ship unverified. Our Kampala facility performs 72-hour memory burn-in tests, firmware microcode updates, RAID validation, and OS hardening before delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Direct Tier-3 Engineering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No third-party subcontractors. Work is handled directly by in-house engineers holding CISSP, CEH, Sophos Certified Architect, and vendor-certified master credentials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Enterprise Governance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Architectures align with international cybersecurity frameworks, ISO/IEC 27001 standards, and global data protection guidelines, ensuring clean security audit passage.
              </p>
            </div>
          </div>

          {/* Staging Lab Highlight Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/70 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Kampala Technical Operations Facility
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Hardware Staging, Spare Buffers &amp; Mission-Critical Burn-In Testing
              </h3>
              <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                Located at Kanti Mansion, Kira Road, Kampala, our staging facility houses hot-standby spare parts buffers for enterprise servers, switches, and firewalls, enabling 4-hour on-site hardware swap commitments for SLA clients.
              </p>
            </div>
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors shrink-0"
            >
              <span>Visit or Tour Facility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Regional Operations Directory */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Verified Regional Presence
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Operating Entities in East &amp; Southern Africa
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Direct physical operations with verified addresses and corporate entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REGIONAL_OFFICES.map((office) => (
              <div
                key={office.country}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-bold">
                    {office.country} {office.country === 'Uganda' && '(Headquarters)'}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {office.companyName}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{office.role}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-slate-400">Tel:</span>
                    <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-sky-600 hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-slate-400">Email:</span>
                    <a href={`mailto:${office.email}`} className="text-sky-600 hover:underline">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <span>Schedule Strategic Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
