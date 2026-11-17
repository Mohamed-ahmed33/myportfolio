import React from 'react';
import { beyondTechnology } from '../data/portfolioData';
import { 
  Target, 
  BrainCircuit, 
  ShieldAlert, 
  Sliders, 
  Boxes, 
  RefreshCw, 
  Sparkles, 
  CheckCircle2, 
  Swords 
} from 'lucide-react';

const disciplineIcons = [
  Target,
  BrainCircuit,
  ShieldAlert,
  Sliders,
  Boxes,
  RefreshCw
];

export const BeyondTech = () => {
  return (
    <section id="beyond-tech" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-xs font-mono uppercase tracking-wider">
            <Swords className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
            <span>Analytical Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {beyondTechnology.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {beyondTechnology.subtitle}
          </p>
        </div>

        {/* Narrative & Core Chess Analogy */}
        <div className="max-w-4xl mx-auto mb-16 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4 text-center">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {beyondTechnology.overview}
          </p>
        </div>

        {/* 6 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {beyondTechnology.disciplines.map((item, idx) => {
            const Icon = disciplineIcons[idx] || Target;
            return (
              <div
                key={item.title}
                className="glass-panel rounded-2xl p-6 hover:border-amber-500/60 dark:hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Spotlight: Constrained Chess & Pawn Challenges */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-navy-950 text-white p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Chessboard Graphic Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none" aria-hidden="true">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div 
                  key={i} 
                  className={(Math.floor(i / 8) + (i % 8)) % 2 === 0 ? 'bg-white' : 'bg-transparent'} 
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Constraint-Based Problem Solving</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {beyondTechnology.constraintExperience.highlight}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {beyondTechnology.constraintExperience.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Strategic Economy
              </span>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Maximizing Scarce Resources
              </span>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5 text-brand-400">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Calm Execution Under Pressure
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
