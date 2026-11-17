import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Layout, 
  Database, 
  FileCheck, 
  Wrench, 
  Monitor, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Database: Database,
  FileCheck: FileCheck,
  Wrench: Wrench,
  Monitor: Monitor,
  Users: Users,
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-mono uppercase tracking-wider">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical & Analytical Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured breakdown of my technical stack, analytical tools, product planning methodologies, and operational knowledge.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div 
          role="tablist"
          aria-label="Filter skills by competency domain"
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                aria-label={`Filter by ${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25 ring-2 ring-brand-500/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const IconComponent = iconMap[group.iconName] || Layout;
            return (
              <div
                key={group.category}
                className="glass-panel rounded-2xl p-6 hover:border-brand-500/60 dark:hover:border-brand-500/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          skill.highlight
                            ? 'bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-950/70 dark:text-brand-300 dark:border-brand-800/80'
                            : 'bg-slate-100/90 text-slate-700 border border-slate-200/80 dark:bg-slate-800/70 dark:text-slate-300 dark:border-slate-700/80'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Count Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>{group.skills.length} core competencies</span>
                  <span className="text-brand-600 dark:text-brand-400 font-medium">Verified training</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Standard Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-600 dark:text-slate-400 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
            Skills are backed by formal university coursework, accredited diplomas, and practical project deliverables.
          </p>
        </div>

      </div>
    </section>
  );
};
