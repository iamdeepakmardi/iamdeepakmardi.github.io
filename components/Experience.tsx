import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { ExternalLink, Hash } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-24 scroll-mt-24" aria-label="Work experience">
      <div className="flex items-center gap-2 mb-12 text-cyan-400 font-mono text-sm tracking-wider">
        <Hash className="w-4 h-4" />
        <span>experience.log</span>
      </div>

      <div className="relative border-l border-zinc-800 ml-3 space-y-16">
        {EXPERIENCE_DATA.map((job) => (
          <div key={job.id} className="relative pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-zinc-900 border-2 border-zinc-600 transition-all group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
               <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                 {job.role}
                 <span className="text-cyan-500">@</span>
                 <span className="text-zinc-300">{job.company}</span>
               </h3>
               <span className="font-mono text-xs text-zinc-500 uppercase tracking-wide mt-1 sm:mt-0 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800">
                 {job.period}
               </span>
            </header>
            
            <div className="mt-4 text-base leading-relaxed text-zinc-400">
              {Array.isArray(job.description) ? (
                <ul className="list-disc pl-4 space-y-2 marker:text-cyan-500/70">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{job.description}</p>
              )}
            </div>
            
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
              {job.skills.map((skill) => (
                <li key={skill}>
                  <div className="flex items-center rounded bg-cyan-900/10 border border-cyan-900/30 px-3 py-1 text-xs font-mono font-medium text-cyan-300 hover:bg-cyan-900/20 transition-colors cursor-default">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;