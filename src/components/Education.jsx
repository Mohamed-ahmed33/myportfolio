import React from 'react';
import { educationData } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-mono uppercase tracking-wider">
            <span>Academic & Professional Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Professional Development
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A continuous trajectory blending university degree foundations with hands-on full-stack engineering, HR management, and agile product development.
          </p>
        </div>

        {/* University Degree Feature Card */}
        <div className="mb-14">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-brand-500/30 dark:border-brand-500/30 shadow-xl relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 dark:bg-brand-500/15 blur-[80px] pointer-events-none rounded-full"
              aria-hidden="true"
            />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-500/25">
                  <GraduationCap className="w-8 h-8" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                      Bachelor's Degree
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Grade: {educationData.degree.grade}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {educationData.degree.major}
                  </h3>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-400 mt-0.5">
                    {educationData.degree.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400 self-start lg:self-auto bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-brand-500" aria-hidden="true" />
                <span>{educationData.degree.period}</span>
              </div>
            </div>

            <div className="pt-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{educationData.degree.description}</p>
            </div>
          </div>
        </div>

        {/* Professional Tracks Timeline / Learning Journey */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-500" aria-hidden="true" />
              Specialized Professional Tracks & Diplomas
            </h3>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline-block">
              Chronological Timeline (2023 – 2026)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {educationData.courses.map((course) => (
              <div
                key={course.id}
                className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/60 dark:hover:border-brand-500/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Course Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {course.year}
                    </span>
                    <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {course.location}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-1">
                    {course.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-3">
                    {course.provider} • <span className="text-brand-500">{course.category}</span>
                  </p>

                  {/* Course Topics Details */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                    {course.topics ? (
                      // Two column layout for Web Master (Frontend / Backend)
                      <div className="space-y-3">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 block mb-1.5">
                            Frontend Stack
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {course.topics.frontend.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 block mb-1.5">
                            Backend & Databases
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {course.topics.backend.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Topics list for HR and Icareer
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 block mb-2">
                          Key Curriculum Topics
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.topicsList.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded text-[11px] bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                    Completed & Certified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
