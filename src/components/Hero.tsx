import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Terminal, 
  ArrowUpRight, 
  CheckCircle2, 
  RefreshCw, 
  Zap, 
  Cpu, 
  Lock, 
  Radio, 
  Server, 
  Laptop, 
  ExternalLink,
  Shield,
  Layers,
  HardDrive,
  Image as ImageIcon
} from 'lucide-react';
import { ConnectedCanvas } from './ConnectedCanvas';
import { HeroValueProps } from './HeroValueProps';
import { TechnologyProtectsGallery } from './TechnologyProtectsGallery';

interface HeroProps {
  onExploreSolutions: () => void;
  onOpenConsultation: (note?: string) => void;
  onOpenAssessment: () => void;
  onSelectSolution?: (slug: string) => void;
  onNavigateToProducts?: (productId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSolutions,
  onOpenConsultation,
  onOpenAssessment,
  onSelectSolution,
  onNavigateToProducts,
}) => {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'bcdr' | 'arcon' | 'prtg' | 'hardware'>('bcdr');

  const telemetryShowcases = {
    bcdr: {
      title: 'Quorum onQ High Availability & BCDR',
      metric: '< 15m RTO',
      status: 'Standby Replica Online',
      desc: 'Instant 1-click virtual failover during power failure or ransomware with 0 transactional SQL loss.',
      tag: 'BCDR / Disaster Recovery',
      image: '/bcdr-architecture-insight.svg',
      productId: 'quorum-dr'
    },
    arcon: {
      title: 'ARCON Privileged Access Management',
      metric: '100% Vaulted',
      status: 'Zero-Trust Enforced',
      desc: 'Root DBA & switch credential vaulting with live keystroke video logging and enterprise security audit compliance.',
      tag: 'Identity & Access (PAM)',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
      productId: 'arcon-pam'
    },
    prtg: {
      title: 'Paessler PRTG Network Telemetry',
      metric: '< 1s Telemetry',
      status: '124 Sensors Active',
      desc: 'Sub-second sensor surveillance across branch fiber links, server CPU loads, and server room thermal probes.',
      tag: 'Observability & Monitoring',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      productId: 'prtg-monitor'
    },
    hardware: {
      title: 'Dell & HPE Servers + Commercial Fleets',
      metric: '3-Yr On-Site',
      status: 'Kampala Staging Ready',
      desc: 'Certified enterprise compute, HP EliteBook and Lenovo ThinkPad laptops with hardware-level security.',
      tag: 'Enterprise IT Hardware',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
      productId: 'dell-hpe-enterprise-servers'
    }
  };

  const currentPreview = telemetryShowcases[activeTelemetryTab];

  return (
    <section className="relative bg-[#070b14] text-white pt-6 pb-12 md:pt-8 md:pb-16 overflow-hidden border-b border-slate-800 bg-grid-pattern">
      {/* Background Interactive Ambient Canvas */}
      <ConnectedCanvas theme="dark" interactive={true} className="opacity-60" />

      {/* Subtle radial lighting gradient */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-sky-600/15 via-blue-700/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Compact space-efficient layout with small-font statement and explanatory solutions */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-sky-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>COMPLETE IT SOLUTIONS UGANDA</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-300 font-sans">Enterprise Systems Architect</span>
            </div>

            {/* STATEMENT IN SMALL FONT (as requested by user) */}
            <div className="border-l-2 border-sky-400 pl-3 py-0.5">
              <p className="text-xs sm:text-sm font-mono text-sky-300 font-medium tracking-wide uppercase">
                Technology that protects. Infrastructure that performs. Businesses that move forward.
              </p>
            </div>

            {/* Space-Saving Concise Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Cyber-Defense, High Availability &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                Commercial IT Infrastructure.
              </span>
            </h1>

            {/* Explanatory overview focusing directly on solutions */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
              CITS engineers resilient digital architectures across East Africa by converging tier-1 software platforms with pre-staged enterprise hardware. We ensure continuous uptime, regulatory compliance, and rapid recovery from cyber threats and hardware failures:
            </p>

            {/* EXPLANATORY SOLUTIONS FOCUS (BCDR Quorum, ARCON PAM, PRTG, ManageEngine, Sophos, Hardware)
                Presented in a high-density, space-efficient structured 2-column grid without clunky tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              
              {/* Solution 1: BCDR with Quorum */}
              <div 
                onClick={() => {
                  setActiveTelemetryTab('bcdr');
                  const el = document.getElementById('technology-that-protects-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 transition-all cursor-pointer group space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-teal-400">
                    <RefreshCw className="w-3.5 h-3.5 text-teal-400 group-hover:rotate-180 transition-transform duration-500" />
                    <span>BCDR (Quorum onQ)</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/80">
                    &lt; 15m RTO
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Instant virtual standby clones spin up in under 15 minutes during power loss or ransomware attacks with zero transactional database loss.
                </p>
              </div>

              {/* Solution 2: ARCON PAM */}
              <div 
                onClick={() => {
                  setActiveTelemetryTab('arcon');
                  const el = document.getElementById('technology-that-protects-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all cursor-pointer group space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400">
                    <Lock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Zero-Trust PAM (ARCON)</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/80">
                    100% Vaulted
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Complete vaulting and automated rotation of root DBA and switch credentials with real-time keystroke video logging for zero-trust &amp; ISO 27001 compliance.
                </p>
              </div>

              {/* Solution 3: PRTG Monitoring */}
              <div 
                onClick={() => {
                  setActiveTelemetryTab('prtg');
                  const el = document.getElementById('technology-that-protects-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400">
                    <Radio className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Telemetry (PRTG Paessler)</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/80">
                    &lt; 1s NOC Alerts
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Real-time sensor telemetry across multi-branch fiber links, WAN latency, server CPU loads, and server room thermal sensors.
                </p>
              </div>

              {/* Solution 4: ManageEngine & Hardware Fleets */}
              <div 
                onClick={() => {
                  setActiveTelemetryTab('hardware');
                  const el = document.getElementById('technology-that-protects-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ITSM &amp; Hardware Fleets</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80">
                    Multi-OS Patching
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Automated CVE patching across 850+ apps paired with commercial HP EliteBook &amp; Lenovo ThinkPad laptops and Dell/HPE servers.
                </p>
              </div>

            </div>

            {/* Action CTAs (No wasted tabs) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-talk-expert-btn"
                onClick={() => onOpenConsultation('Inquiry: Architectural Review & Solutions Consultation (BCDR Quorum & ARCON PAM)')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-xl shadow-md shadow-sky-950/50 transition-all group"
              >
                <span>Talk to a Solutions Architect</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-view-gallery-btn"
                onClick={() => {
                  const el = document.getElementById('technology-that-protects-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-teal-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-teal-500/40 rounded-xl transition-all shadow-xs"
              >
                <ImageIcon className="w-3.5 h-3.5 text-teal-400" />
                <span>Protective Solutions Gallery</span>
              </button>

              {onNavigateToProducts && (
                <button
                  id="hero-explore-products-btn"
                  onClick={() => onNavigateToProducts()}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-sky-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-sky-500/40 rounded-xl transition-colors"
                >
                  <span>Explore Products &amp; Hardware</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-sky-400" />
                </button>
              )}

              <button
                id="hero-assessment-btn"
                onClick={onOpenAssessment}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-slate-400 hover:text-sky-300 py-2 px-1 tracking-wider transition-colors"
              >
                <span>60s CIO Assessment</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>

          </div>

          {/* Right Column: Multi-Technology Visual Showcase Card (With Real Imagery & Live Telemetry HUD) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#0b1220] border border-slate-700/80 shadow-2xl backdrop-blur-md overflow-hidden">
              
              {/* Header with Live Telemetry Indicator */}
              <div className="p-3.5 pb-2.5 flex items-center justify-between border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  <span className="font-semibold text-white">CITS.SOLUTIONS_LAB</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>KAMPALA_NOC: ONLINE</span>
                </div>
              </div>

              {/* Technology Image Preview Container */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden group">
                <img
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-slate-950/40 to-transparent" />
                
                {/* Floating Telemetry HUD Badges Over Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-sky-300 border border-sky-500/30">
                    {currentPreview.tag}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/90 text-white font-bold shadow-xs">
                    {currentPreview.metric}
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    {currentPreview.status}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                    {currentPreview.title}
                  </h3>
                </div>
              </div>

              {/* Explanatory description of currently showcased technology */}
              <div className="p-3.5 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {currentPreview.desc}
                </p>

                {/* Direct switch between the 4 primary technologies to view images & specs */}
                <div className="grid grid-cols-4 gap-1.5 pt-1 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveTelemetryTab('bcdr')}
                    className={`p-1.5 rounded-lg text-center font-mono text-[10px] transition-all ${
                      activeTelemetryTab === 'bcdr'
                        ? 'bg-teal-950 text-teal-300 border border-teal-600 font-bold'
                        : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    Quorum DR
                  </button>
                  <button
                    onClick={() => setActiveTelemetryTab('arcon')}
                    className={`p-1.5 rounded-lg text-center font-mono text-[10px] transition-all ${
                      activeTelemetryTab === 'arcon'
                        ? 'bg-sky-950 text-sky-300 border border-sky-600 font-bold'
                        : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    ARCON PAM
                  </button>
                  <button
                    onClick={() => setActiveTelemetryTab('prtg')}
                    className={`p-1.5 rounded-lg text-center font-mono text-[10px] transition-all ${
                      activeTelemetryTab === 'prtg'
                        ? 'bg-indigo-950 text-indigo-300 border border-indigo-600 font-bold'
                        : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    PRTG Net
                  </button>
                  <button
                    onClick={() => setActiveTelemetryTab('hardware')}
                    className={`p-1.5 rounded-lg text-center font-mono text-[10px] transition-all ${
                      activeTelemetryTab === 'hardware'
                        ? 'bg-blue-950 text-blue-300 border border-blue-600 font-bold'
                        : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    Dell &amp; HPE
                  </button>
                </div>

                {/* Quick Product Link & Gallery Access */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => {
                      const el = document.getElementById('technology-that-protects-gallery');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-mono text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Deep Gallery</span>
                  </button>

                  {onNavigateToProducts && (
                    <button
                      onClick={() => onNavigateToProducts(currentPreview.productId)}
                      className="text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Subtle glow background */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl" />
          </div>

        </div>

        {/* Responsive Image Gallery Component for 'Technology that protects' Section */}
        <div className="mt-12 mb-8">
          <TechnologyProtectsGallery
            onSelectSolution={onSelectSolution}
            onNavigateToProducts={onNavigateToProducts}
            onOpenConsultation={onOpenConsultation}
            initialSelectedId={
              activeTelemetryTab === 'bcdr' 
                ? 'quorum-onq' 
                : activeTelemetryTab === 'arcon' 
                ? 'arcon-pam' 
                : activeTelemetryTab === 'prtg' 
                ? 'prtg-network' 
                : 'enterprise-compute'
            }
          />
        </div>

        {/* Key Value Propositions with authentic technology imagery */}
        <HeroValueProps
          onSelectSolution={onSelectSolution}
          onOpenConsultation={onOpenConsultation}
        />
      </div>
    </section>
  );
};

