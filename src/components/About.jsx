import React from 'react';
import { personalInfo, aboutData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Code2, 
  ClipboardList, 
  Users, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

const pillarIcons = {
  'mis-foundation': GraduationCap,
  'web-dev': Code2,
  'business-analysis': ClipboardList,
  'people-operations': Users,
};

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-mono uppercase tracking-wider">
            <span>Professional Narrative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {aboutData.intro}
          </p>
        </div>

        {/* Narrative & Storytelling Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500" aria-hidden="true"></span>
              Bridging Technology, Business, and People
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                My journey began with a degree in <strong className="text-slate-900 dark:text-white font-semibold">Management Information Systems (MIS)</strong>. Unlike traditional software development programs that view code purely as algorithms, MIS taught me to examine how systems interact with organizational workflows, business goals, and everyday end users.
              </p>
              <p>
                To turn conceptual designs into working reality, I pursued comprehensive training in <strong className="text-slate-900 dark:text-white font-semibold">frontend and backend web development</strong>. I enjoy mastering client-side responsiveness with React and modern CSS, as well as architecting relational databases and server-side endpoints with PHP and Laravel.
              </p>
              <p>
                Beyond code, my practical experience in <strong className="text-slate-900 dark:text-white font-semibold">corporate customer service at El Araby Group</strong> and specialized diploma in <strong className="text-slate-900 dark:text-white font-semibold">Human Resources</strong> honed my active listening, requirements clarification, and empathy for stakeholders. When users express frustration, I don't just see a ticket—I analyze the root cause in the workflow.
              </p>
              <p>
                Through the <strong className="text-slate-900 dark:text-white font-semibold">Icareer Technical Track</strong>, I further refined these complementary capabilities into structured business and product analysis: drafting BRDs, PRDs, user stories, and managing sprints in Jira.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
              <blockquote className="italic font-medium text-brand-600 dark:text-brand-400 text-sm sm:text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                "{personalInfo.corePhilosophy}"
              </blockquote>
            </div>
          </div>

          {/* Complementary Strengths Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                How These Disciplines Connect
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Rather than isolated skills, these areas reinforce one another at every stage of the software lifecycle:
              </p>

              <ul className="space-y-3 pt-2">
                {aboutData.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Summary Pill Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-500/20 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-200">
                Career Direction & Value
              </span>
              <h4 className="text-base font-bold">
                Junior Web Developer & Business Analyst
              </h4>
              <p className="text-xs text-brand-100 leading-relaxed">
                Positioned to join collaborative teams where technical execution, business comprehension, and analytical clarity are equally valued.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Complementary Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.pillars.map((pillar) => {
            const IconComponent = pillarIcons[pillar.id] || Sparkles;
            return (
              <div 
                key={pillar.id}
                className="glass-panel rounded-2xl p-5 hover:border-brand-500/60 dark:hover:border-brand-500/60 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 block mb-1">
                    {pillar.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
