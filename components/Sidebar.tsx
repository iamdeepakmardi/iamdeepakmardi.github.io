import React from 'react';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import LocationCard from './LocationCard';

const Sidebar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'mail': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24 px-6 py-12 md:px-12 lg:px-0">
      <div>
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to Opportunities
        </div>

        {/* Profile Picture */}
        <div className="relative w-32 h-32 mb-8 group">
           <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
           <img 
             src={HERO_DATA.avatarUrl} 
             alt={HERO_DATA.name} 
             className="relative w-full h-full rounded-full object-cover border-2 border-zinc-800/80 group-hover:border-cyan-400/50 transition-colors duration-300 shadow-2xl" 
           />
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl font-sans">
          {HERO_DATA.name}
        </h1>
        <h2 className="mt-4 text-xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 sm:text-2xl font-mono">
          {HERO_DATA.title}
        </h2>
        <p className="mt-6 max-w-xs leading-relaxed text-zinc-400 text-base">
          {HERO_DATA.tagline}
        </p>
        
        <LocationCard />

        {/* Navigation - Styled as File System */}
        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max space-y-3 font-mono text-sm">
            <li>
              <a className="group flex items-center py-2" href="#about">
                <span className="text-cyan-500 mr-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">./</span>
                <span className="text-zinc-500 group-hover:text-zinc-200 transition-colors">README.md</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-2" href="#skills">
                <span className="text-cyan-500 mr-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">./</span>
                <span className="text-zinc-500 group-hover:text-zinc-200 transition-colors">skills.config</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-2" href="#experience">
                <span className="text-cyan-500 mr-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">./</span>
                <span className="text-zinc-500 group-hover:text-zinc-200 transition-colors">experience.log</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-2" href="#projects">
                <span className="text-cyan-500 mr-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">./</span>
                <span className="text-zinc-500 group-hover:text-zinc-200 transition-colors">projects.json</span>
              </a>
            </li>
             <li>
              <a className="group flex items-center py-2" href="#education">
                <span className="text-cyan-500 mr-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">./</span>
                <span className="text-zinc-500 group-hover:text-zinc-200 transition-colors">education.txt</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-12 lg:mt-0">
        <ul className="flex items-center gap-6" aria-label="Social media">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.platform}>
              <a
                className="block text-zinc-400 hover:text-cyan-400 transition-all hover:-translate-y-1 p-2 hover:bg-zinc-800 rounded-lg"
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${link.platform} (opens in a new tab)`}
              >
                <span className="sr-only">{link.platform}</span>
                {getIcon(link.icon)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;