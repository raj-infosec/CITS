import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ArrowRight, Shield, Terminal, Users } from 'lucide-react';

interface CareersViewProps {
  onOpenConsultation: () => void;
}

export const CareersView: React.FC<CareersViewProps> = ({ onOpenConsultation }) => {
  const [submitted, setSubmitted] = useState(false);

  const openPositions = [
    {
      title: "Senior Cybersecurity Systems Engineer",
      location: "Kampala, Uganda",
      department: "Security Architecture",
      type: "Full-Time",
      requirements: "Sophos / WatchGuard certified, 4+ years Next-Gen Firewall deployment, deep familiarity with packet inspection and VAPT frameworks."
    },
    {
      title: "Enterprise Solutions Architect (DR & Storage)",
      location: "Kampala, Uganda / Regional",
      department: "Infrastructure Continuity",
      type: "Full-Time",
      requirements: "Demonstrated experience designing high-availability SAN/NAS clusters, Quorum/Veeam disaster recovery appliances, and hyperconverged infrastructure."
    },
    {
      title: "Enterprise Document Systems Consultant",
      location: "Kampala, Uganda",
      department: "Information Management",
      type: "Full-Time",
      requirements: "EDMS implementation background (ViciDocs/Alfresco/SharePoint), OCR pipeline indexing, regulatory record retention workflows."
    },
    {
      title: "VoIP & Unified Communications Specialist",
      location: "Lusaka, Zambia / Kampala, Uganda",
      department: "Communications",
      type: "Full-Time",
      requirements: "Matrix IP-PBX, SIP trunking, multi-site extension routing, hybrid audio-visual boardroom integration."
    }
  ];

  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#090f1d] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              Engineering Culture &bull; Careers at CITS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Build resilient infrastructure for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                East Africa&apos;s leading institutions.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Join an engineering team where hands-on architectural competence is prized above corporate buzzwords. We solve the technical challenges that keep enterprises running.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Terminal className="w-6 h-6 text-sky-600 mb-2" />
            <h3 className="font-bold text-slate-900">Technical Rigor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We test every configuration in isolated sandboxes before touching customer production. We value genuine diagnostic skill.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Shield className="w-6 h-6 text-emerald-600 mb-2" />
            <h3 className="font-bold text-slate-900">Zero-Fluff Accountability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We measure success by uptime, backup restoration speed, and verified threat mitigation, not vanity metrics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Users className="w-6 h-6 text-indigo-600 mb-2" />
            <h3 className="font-bold text-slate-900">Continuous Mastery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sponsored certifications across Sophos, WatchGuard, Quorum, and enterprise systems, with direct access to hardware labs.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Active Openings
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Current Engineering &amp; Consulting Opportunities
          </h2>
        </div>

        <div className="space-y-4">
          {openPositions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-300 transition-all"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-600">
                  <span className="font-bold">{pos.department}</span>
                  <span>&bull;</span>
                  <span>{pos.location}</span>
                  <span>&bull;</span>
                  <span className="text-slate-400">{pos.type}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pos.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pos.requirements}</p>
              </div>

              <a
                href={`mailto:careers@cits.co.ug?subject=${encodeURIComponent(`Application for ${pos.title} (${pos.location})`)}`}
                className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs whitespace-nowrap transition-colors inline-flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>Apply via Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <h3 className="font-bold text-slate-900 text-base">Don&apos;t see an exact match?</h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            We are always interested in senior network architects, disaster recovery engineers, and database administrators. Send your CV and portfolio of enterprise deployments to <a href="mailto:careers@cits.co.ug" className="text-sky-600 font-mono underline">careers@cits.co.ug</a>.
          </p>
        </div>
      </section>

    </div>
  );
};
