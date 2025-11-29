import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ChatWidget from './components/ChatWidget';
import { HERO_DATA } from './constants';
import { Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Grid Layer */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      
      {/* Radial Gradient Follower */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.07), transparent 80%)`
        }}
      />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          
          {/* Left Column (Fixed) */}
          <Sidebar />

          {/* Right Column (Scrollable) */}
          <main id="content" className="pt-24 lg:w-[55%] lg:py-24">
            
            {/* About Section */}
            <section id="about" className="mb-20 scroll-mt-24" aria-label="About me">
              <div className="flex items-center gap-2 mb-8 text-cyan-400 font-mono text-sm tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>README.md</span>
              </div>
              
              <div className="glass-card rounded-2xl p-8 text-zinc-400 leading-relaxed font-light shadow-xl">
                <p className="mb-6">
                  {HERO_DATA.about}
                </p>
                <p className="mb-6">
                  My philosophy is simple: <span className="text-zinc-100 font-medium">Clean code, scalable architecture, and pixel-perfect UIs.</span> I currently architect solutions at <a href="#" className="inline-block relative text-zinc-100 hover:text-cyan-400 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-cyan-500/50">TechFlow Solutions</a>.
                </p>
                <p>
                   When I'm away from the terminal, I'm likely refactoring my home automation setup or exploring cyberpunk literature.
                </p>
              </div>
            </section>

            <Skills />

            <Experience />
            
            <Projects />
            
            <Education />

            <section className="mb-16 pt-12 border-t border-zinc-800/50 text-sm font-mono text-zinc-500 flex flex-col gap-2">
               <p>
                 // Built with React, Tailwind, and Google Gemini
               </p>
               <p>
                 // Deployed on Vercel
               </p>
            </section>
          </main>
        </div>
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default App;