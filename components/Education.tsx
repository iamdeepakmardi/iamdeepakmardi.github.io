import React from 'react';
import { EDUCATION_DATA, CERTIFICATION_DATA } from '../constants';
import { BookOpen, Award, ArrowUpRight } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-24 scroll-mt-24" aria-label="Education and Certifications">
      <div className="flex items-center gap-2 mb-8 text-cyan-400 font-mono text-sm tracking-wider">
        <BookOpen className="w-4 h-4" />
        <span>education.txt</span>
      </div>

      <div className="space-y-12">
        {/* Education Section */}
        <div className="relative">
           {EDUCATION_DATA.map((edu) => (
             <div key={edu.id} className="glass-card rounded-2xl p-6 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 group hover:border-cyan-500/20 transition-all">
               <div>
                 <h3 className="text-zinc-100 font-bold text-lg">{edu.school}</h3>
                 <p className="text-cyan-400 font-medium">{edu.degree}</p>
               </div>
               <span className="font-mono text-zinc-500 text-sm bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                 {edu.year}
               </span>
             </div>
           ))}
        </div>

        {/* Certifications Subsection */}
        {CERTIFICATION_DATA.length > 0 && (
          <div className="mt-12">
            <h4 className="flex items-center gap-2 text-zinc-300 font-medium mb-6 font-mono text-sm uppercase tracking-wider opacity-80">
               <Award className="w-4 h-4 text-cyan-400" />
               Certifications
            </h4>
            
            <div className="grid gap-4">
              {CERTIFICATION_DATA.map((cert) => (
                <a 
                  key={cert.id} 
                  href={cert.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg bg-zinc-900/30 border border-zinc-800 hover:border-cyan-500/30 hover:bg-zinc-900/60 transition-all"
                >
                  <div className="flex flex-col">
                    <span className="text-zinc-200 font-medium group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      {cert.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-zinc-500 text-sm">{cert.issuer}</span>
                  </div>
                  <span className="font-mono text-xs text-zinc-600">{cert.year}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;