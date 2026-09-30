import React from 'react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
}

export const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  return (
    <div className="bg-[#fafafc] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs space-y-8">
          
          <div className="border-b border-slate-100 pb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold">
              Complete IT Solutions Uganda Limited &bull; Legal Compliance
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Enterprise Engagement'}
            </h1>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Effective Date: {new Date().getFullYear()} &bull; Governed under the Laws of the Republic of Uganda
            </p>
          </div>

          {type === 'privacy' ? (
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">1. Commitment to Data Sovereignty and Confidentiality</h2>
                <p>
                  Complete IT Solutions Uganda Limited (&quot;CITS&quot;) adheres strictly to regional and international data protection standards and data privacy frameworks. We respect client privacy and sovereign data governance across Uganda, Zambia, and Malawi.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">2. Collection of Corporate Information</h2>
                <p>
                  During architecture scoping, discovery audits, or managed SLA contracts, we collect technical environment details, contact telemetry, and organizational records strictly required to deliver and harden digital infrastructure. We never monetize or disseminate client data to third-party marketing networks.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">3. Security Audit &amp; Penetration Testing Data</h2>
                <p>
                  All vulnerability findings, raw packet traces, penetration test logs, and architectural configurations resulting from VAPT engagements are encrypted and stored in air-gapped repositories with strict role-based access controls.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">4. Direct Contact for Data Governance</h2>
                <p>
                  For questions regarding our privacy mechanisms or data custody, contact our Data Protection Officer at <a href="mailto:privacy@cits.co.ug" className="text-sky-600 font-mono underline">privacy@cits.co.ug</a> or write to: Complete IT Solutions Uganda Limited, 1E Kanti Mansion, Kira Road, Kampala, Uganda.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">1. Enterprise Consulting Terms</h2>
                <p>
                  Engagements with Complete IT Solutions Uganda Limited are governed by formal Master Services Agreements (MSAs), Statements of Work (SOWs), and Service Level Agreements (SLAs). Website materials and architectural guides are provided for professional informational and scoping purposes.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">2. Intellectual Property &amp; Architecture Blueprints</h2>
                <p>
                  All architectural topologies, methodology frameworks, and software codebases authored by CITS remain protected by intellectual property treaties. Custom software applications delivered under client contract are transferred per individual agreement covenants.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">3. Technology Partner Warranties</h2>
                <p>
                  Hardware appliances and OEM software licenses (Sophos, WatchGuard, Quorum, Matrix, Vicisoft) are backed by respective vendor global warranties and certified CITS Tier-3 support tiers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-bold text-slate-900 text-base">4. Governing Jurisdiction</h2>
                <p>
                  These terms are governed by the commercial courts of Kampala, Uganda. Regional operations in Zambia and Malawi are governed under respective territorial operational partner agreements.
                </p>
              </section>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
