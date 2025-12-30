
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          AURA<span className="font-display italic font-light text-zinc-400">.design</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-2 bg-zinc-900 text-white text-xs uppercase tracking-widest hover:bg-zinc-700 transition-all rounded-full"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon (Simplified) */}
        <button className="md:hidden flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-zinc-900"></span>
          <span className="w-6 h-0.5 bg-zinc-900"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
