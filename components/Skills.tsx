import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-24 scroll-mt-24" aria-label="Technical skills">
      <div className="flex items-center gap-2 mb-8 text-cyan-400 font-mono text-sm tracking-wider">
        <Cpu className="w-4 h-4" />
        <span>skills.config</span>
      </div>
      
      <div className="grid gap-6">
        {SKILLS_DATA.map((category) => (
          <div key={category.name} className="glass-card rounded-xl p-6 border-l-2 border-l-cyan-500/30">
            <h3 className="text-zinc-200 font-mono font-medium mb-4 flex items-center gap-2">
              <span className="text-cyan-500">const</span> {category.name} <span className="text-cyan-500">=</span> <span className="text-zinc-500">[</span>
            </h3>
            
            <div className="flex flex-wrap gap-2 pl-4">
              {category.skills.map((skill, index) => (
                <span key={skill} className="group relative">
                  <span className="px-3 py-1.5 rounded bg-zinc-900/50 border border-zinc-700/50 text-zinc-300 font-mono text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default block">
                    "{skill}"{index < category.skills.length - 1 && <span className="text-zinc-600">,</span>}
                  </span>
                </span>
              ))}
            </div>
            
            <div className="mt-4 text-zinc-500 font-mono text-sm">];</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;