import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-24 scroll-mt-24" aria-label="Selected projects">
       <div className="flex items-center gap-2 mb-12 text-cyan-400 font-mono text-sm tracking-wider">
        <FolderGit2 className="w-4 h-4" />
        <span>projects.json</span>
      </div>

      <div className="grid gap-8">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="group relative glass-card rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
            
            <div className="grid md:grid-cols-12 gap-0">
               {/* Image Section */}
               <div className="md:col-span-5 relative overflow-hidden h-48 md:h-full border-b md:border-b-0 md:border-r border-zinc-800/50">
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    src={project.imageUrl}
                  />
               </div>

               {/* Content Section */}
               <div className="md:col-span-7 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                      <a href={project.link} target="_blank" rel="noreferrer" className="before:absolute before:inset-0">
                        {project.title}
                      </a>
                      <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </h3>
                    
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-cyan-300/80">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;