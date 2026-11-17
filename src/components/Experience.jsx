import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Building2, 
  BadgeCheck, 
  CheckCircle2, 
  Headphones, 
  Sparkles, 
  MapPin 
} from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-mono uppercase tracking-wider">
            <span>Corporate Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world enterprise exposure developing customer empathy, CRM data accuracy, and structured problem resolution.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <div 
              key={index}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800/90 shadow-xl space-y-8"
            >
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 shadow-sm border border-brand-200 dark:border-brand-800/60">
                    <Headphones className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-semibold text-sm">
                        <Building2 className="w-4 h-4" aria-hidden="true" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono self-start sm:self-auto">
                  <BadgeCheck className="w-4 h-4 text-brand-500" aria-hidden="true" />
                  Enterprise Operations
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Core Responsibilities & Operational Scope
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div 
                      key={rIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Competencies Gained */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Professional Competencies Gained
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300 border border-brand-200 dark:border-brand-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Value Translation Callout */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  <strong className="text-slate-900 dark:text-white font-semibold">Analytical Takeaway:</strong> Working on the front lines of customer support in a major enterprise provided invaluable first-hand exposure to how software defects and confusing UI workflows negatively impact end users. This experience makes me deeply committed to data validation, intuitive UX, and clean requirement specifications.
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
