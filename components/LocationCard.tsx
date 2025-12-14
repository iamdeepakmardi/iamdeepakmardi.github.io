import React, { useState, useEffect } from 'react';
import { MapPin, Check, ExternalLink, Menu, X } from 'lucide-react';
import { HERO_DATA } from '../constants';

const LocationCard: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "README.md", icon: "help-circle" }, // Using simple strings for now, can map to icons if needed
    { href: "#skills", label: "skills.config" },
    { href: "#experience", label: "experience.log" },
    { href: "#projects", label: "projects.json" },
    { href: "#education", label: "education.txt" },
  ];

  return (
    <>
      {/* Mobile Sticky Navbar State */}
    <>
      {/* Mobile Sticky Navbar State */}
      <div 
        className={`
          fixed top-4 left-4 right-4 z-50 lg:hidden transition-all duration-300
        `}
      >
        <div className={`
             flex items-center justify-between p-2 pl-4 rounded-full
             ${isScrolled || isMenuOpen
                ? 'bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-lg' 
                : 'bg-zinc-900/40 backdrop-blur-md border border-white/5'}
             transition-colors duration-300
        `}>
            {/* Left: Location */}
            <div className="flex items-center gap-2 text-cyan-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-mono font-medium">{HERO_DATA.location}</span>
            </div>

            {/* Right: Menu Toggle */}
             <button 
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
             >
                 {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
        </div>

        {/* Compact Dropdown Menu */}
        <div className={`
            absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl glass-card border border-white/10 shadow-2xl
            transform transition-all duration-300 origin-top ease-out
            ${isMenuOpen 
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}>
             <nav className="w-full">
                <ul className="flex flex-col">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a 
                                href={link.href} 
                                className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all"
                                onClick={toggleMenu}
                            >
                                <span className="text-cyan-500/50 text-xs font-mono">./</span>
                                <span className="font-mono text-sm">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-2 pt-3 border-t border-white/5 text-center text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                {HERO_DATA.name}
             </div>
        </div>
      </div>

      {/* Desktop Card State (Sidebar) */}
      <div className="hidden lg:flex items-center gap-3 mt-6 p-4 rounded-xl glass-card hover:bg-zinc-800/50 transition-colors border-l-4 border-l-cyan-500/50 group cursor-pointer" title="View on Maps">
        
        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
           <MapPin className="w-6 h-6" />
        </div>

        <div className="flex-1">
            <h3 className="text-zinc-200 font-medium font-sans text-lg leading-none mb-1">
                {HERO_DATA.location}
            </h3>
            <p className="text-zinc-500 text-xs font-mono flex items-center gap-1">
                India <span className="text-zinc-700">•</span> UTC+5:30
            </p>
        </div>
        
        <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
      </div>
    </>
    </>
  );
};

export default LocationCard;
