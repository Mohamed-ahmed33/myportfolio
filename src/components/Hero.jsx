import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Sparkles, 
  Database, 
  Layout, 
  CheckCircle2, 
  Workflow, 
  Cpu, 
  GitBranch, 
  FileText 
} from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern scroll-mt-24"
    >
      {/* Background glow effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-400/10 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand Identity */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status / Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="flex h-2 w-2 relative" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1 font-sans">
                <MapPin className="w-3.5 h-3.5 text-brand-500" aria-hidden="true" />
                {personalInfo.location}
              </span>
              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">|</span>
              <span className="text-brand-600 dark:text-brand-400 font-sans font-medium">MIS Graduate</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-mono font-medium text-brand-600 dark:text-brand-400 tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personalInfo.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 pt-1">
                {personalInfo.roleTitle}
              </p>
              <div className="inline-block">
                <span className="text-xs sm:text-sm md:text-base font-mono font-semibold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 inline-block">
                  {personalInfo.subTitle}
                </span>
              </div>
            </div>

            {/* Multidisciplinary Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A multidisciplinary graduate combining foundational training in modern web development, business requirements analysis, and organizational systems. I bridge the gap between technical code and tangible operational goals through structured problem-solving.
            </p>

            {/* Core Philosophy Banner */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs sm:text-sm italic font-medium text-slate-700 dark:text-slate-300 text-left">
                  "{personalInfo.corePhilosophy}"
                </p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('project')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm border border-slate-200 dark:border-slate-700 transition-all duration-200 shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                <Mail className="w-4 h-4 text-brand-500" aria-hidden="true" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Key Pillars Badges */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0 text-left">
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">Pillar 01</span>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate block">Web Dev</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">Pillar 02</span>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate block">Business Req.</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">Pillar 03</span>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate block">Systems Logic</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom CSS/SVG Technical Illustration (Systems, Data, Web & Logic) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer decorative glow card */}
              <div className="relative rounded-2xl glass-panel p-5 sm:p-6 shadow-xl border border-slate-200/80 dark:border-slate-800/80">
                
                {/* Header bar of visual console */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" aria-hidden="true" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      system-architecture.mis
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" /> Live State
                  </span>
                </div>

                {/* Conceptual Interactive System Diagram */}
                <div className="py-5 space-y-4 font-mono text-xs">
                  
                  {/* Layer 1: Business Requirements & Analysis */}
                  <div className="group p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 hover:border-brand-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                          <FileText className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200 font-sans">1. Requirements & Business Domain</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">BRD • PRD • User Stories • Jira</p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-300">
                        Input
                      </span>
                    </div>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="flex justify-center -my-2" aria-hidden="true">
                    <div className="flex items-center gap-1 text-slate-400 dark:text-slate-600">
                      <Workflow className="w-4 h-4 text-brand-500 animate-pulse" />
                      <span className="text-[10px]">transforms into schema & logic</span>
                    </div>
                  </div>

                  {/* Layer 2: Systems Logic & Data Pipeline */}
                  <div className="group p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 hover:border-brand-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                          <Database className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200 font-sans">2. Data Modeling & Backend</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">PHP / Laravel • MySQL • Postman APIs</p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-300">
                        Core
                      </span>
                    </div>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="flex justify-center -my-2" aria-hidden="true">
                    <div className="flex items-center gap-1 text-slate-400 dark:text-slate-600">
                      <GitBranch className="w-4 h-4 text-brand-500 animate-pulse" />
                      <span className="text-[10px]">renders responsive client interface</span>
                    </div>
                  </div>

                  {/* Layer 3: Modern Frontend & User Experience */}
                  <div className="group p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 hover:border-brand-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                          <Layout className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200 font-sans">3. Client Experience & Web UI</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">React.js • HTML5/CSS3 • Responsive</p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
                        Output
                      </span>
                    </div>
                  </div>

                </div>

                {/* Terminal status bottom pill */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-brand-500" aria-hidden="true" />
                    <span>Approach: Analytical & Systematic</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Ready</span>
                </div>

              </div>
              
              {/* Decorative background accent badge */}
              <div 
                className="absolute -bottom-3 -right-3 hidden sm:block p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-mono text-slate-600 dark:text-slate-300"
                aria-hidden="true"
              >
                <span className="text-brand-500 font-bold">const</span> mindset = <span className="text-emerald-500">"Solutions oriented"</span>;
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
