import React from 'react';
import { 
  Compass, 
  ShieldAlert, 
  Sliders, 
  LifeBuoy, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { PROFESSIONAL_SERVICES } from '../data/citsData';
import { ServiceItem } from '../types';
import { HeaderAnimatedVisual } from '../components/HeaderAnimatedVisual';

interface ServicesViewProps {
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenConsultation }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-sky-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-rose-500" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-emerald-500" />;
      case 'LifeBuoy': return <LifeBuoy className="w-6 h-6 text-indigo-500" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-purple-500" />;
      default: return <ShieldCheck className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <div className="bg-[#fafafc] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#090f1d] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono uppercase tracking-wider text-sky-400">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Professional Services &amp; Advisory</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
                Strategic consulting.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                  Rigorous execution.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                From board-level cybersecurity audits and disaster recovery runbooks to hands-on deployment and guaranteed response SLAs, CITS delivers end-to-end technical leadership.
              </p>

              {/* Quick Jump Shortcuts */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-emerald-300">
                  VAPT Penetration Audits
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-sky-300">
                  Sub-15m Critical SLAs
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-indigo-300">
                  Turnkey Infrastructure Staging
                </span>
              </div>
            </div>

            {/* Right Column: Relevant Animated Image & Telemetry Canvas */}
            <div className="lg:col-span-5 w-full">
              <HeaderAnimatedVisual
                activeTab="services"
                onOpenConsultation={onOpenConsultation}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {PROFESSIONAL_SERVICES.map((service: ServiceItem, idx) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-9 shadow-xs hover:border-slate-300 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    SERVICE 0{idx + 1}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p className="text-xs font-mono text-sky-600 font-medium">
                  Audience: {service.audience}
                </p>
                {service.image && (
                  <div className="h-28 w-full rounded-xl overflow-hidden relative bg-slate-900 border border-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>
                )}
              </div>

              <div className="lg:col-span-8 space-y-5">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-3">
                    Core Engagement Scope:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {service.scope.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Engage Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
