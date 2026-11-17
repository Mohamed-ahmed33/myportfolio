import React, { useState } from 'react';
import { featuredProject } from '../data/portfolioData';
import { 
  HeartHandshake, 
  UserCheck, 
  MapPin, 
  CalendarClock, 
  CheckCircle, 
  SlidersHorizontal, 
  Sparkles 
} from 'lucide-react';

export const FeaturedProject = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="project" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 text-xs font-mono uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-rose-500" aria-hidden="true" />
            <span>Graduation Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {featuredProject.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {featuredProject.tagline}
          </p>
        </div>

        {/* Project Card Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800/90 shadow-xl overflow-hidden relative">
          
          {/* Subtle Background Glow */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 dark:bg-rose-500/10 blur-[100px] pointer-events-none rounded-full" 
            aria-hidden="true"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Project Overview & Features */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Type and Tech Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                  {featuredProject.projectType}
                </span>
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Core Description */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Solving Healthcare Logistics with Accessible Web Technologies
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {featuredProject.overview}
                </p>
              </div>

              {/* Impact Note */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{featuredProject.impactNote}</span>
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Core System Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuredProject.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 text-left"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" aria-hidden="true" />
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                          {feat.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal pl-5">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Conceptual Workflow Architecture (No Fake Screenshots) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="text-center lg:text-left">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-center lg:justify-start gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-brand-500" aria-hidden="true" />
                  Conceptual Workflow Architecture
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Click through the steps below to inspect the sequential donor workflow:
                </p>
              </div>

              {/* Step Navigation Tabs */}
              <div 
                role="tablist"
                aria-label="Workflow step tabs"
                className="grid grid-cols-3 gap-2"
              >
                {featuredProject.workflowSteps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <button
                      key={step.step}
                      role="tab"
                      aria-selected={isCurrent}
                      aria-label={`View workflow ${step.step}: ${step.title}`}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-xl text-left border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                        isCurrent
                          ? 'bg-brand-50/80 dark:bg-brand-950/80 border-brand-500 ring-2 ring-brand-500/20'
                          : 'bg-white/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold text-brand-600 dark:text-brand-400 block">
                        {step.step}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block truncate">
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Conceptual UI Illustration */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-md relative min-h-[300px] flex flex-col justify-between">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
                    {featuredProject.workflowSteps[activeStep].visualBadge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Architecture Step {activeStep + 1} of 3
                  </span>
                </div>

                {/* Workflow Simulation Content based on Active Step */}
                <div className="py-6">
                  {activeStep === 0 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                          <UserCheck className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h5 className="text-base font-bold text-slate-900 dark:text-white">
                            Donor Registration & Health Intake
                          </h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Validated input collection with client-side JavaScript
                          </p>
                        </div>
                      </div>

                      {/* Mock Form Structure (Conceptual Representation) */}
                      <div className="space-y-2 pt-2 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60 font-mono text-xs">
                        <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                          <span>[input] Full Name & Blood Type</span>
                          <span className="text-emerald-500 font-bold">Validated</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                          <span>[input] Geographic Location (District)</span>
                          <span className="text-emerald-500 font-bold">Logged</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                          <span>[input] Health Screening Criteria</span>
                          <span className="text-brand-500 font-bold">Eligible</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                          <MapPin className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h5 className="text-base font-bold text-slate-900 dark:text-white">
                            Nearest Donation Center Assignment
                          </h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Proximity pairing and center capacity checking
                          </p>
                        </div>
                      </div>

                      {/* Mock Center Matching Diagram */}
                      <div className="space-y-2 pt-2 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60 font-mono text-xs">
                        <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-brand-500" aria-hidden="true"></span>
                            Donor Coordinates: Cairo District
                          </span>
                          <span className="text-slate-400">Reference point</span>
                        </div>
                        <div className="p-2 rounded bg-brand-50/70 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60">
                          Match: National Plasma Center - Branch A (Nearest)
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          Distance calculation ensures minimal donor travel time.
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                          <CalendarClock className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h5 className="text-base font-bold text-slate-900 dark:text-white">
                            Appointment Scheduling & Confirmation
                          </h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Time-slot reservation and donor instructions
                          </p>
                        </div>
                      </div>

                      {/* Mock Appointment Ticket */}
                      <div className="space-y-2 pt-2 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60 font-mono text-xs">
                        <div className="flex justify-between text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700 pb-1">
                          <span>CONFIRMED DONATION TICKET</span>
                          <span className="text-emerald-500 font-semibold">Ready</span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-400 pt-1">
                          <span>Center: Assigned Facility</span>
                          <span>Time: Morning Slot</span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          Includes preparation reminders (hydration, ID checklist).
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step Explanation Summary */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <p className="text-xs">
                    {featuredProject.workflowSteps[activeStep].summary}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
