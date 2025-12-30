
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6 font-semibold">
            Visual Designer & Art Director
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-tight mb-8">
            Turning <span className="italic">pixels</span> into <span className="text-zinc-300">poetry.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-xl leading-relaxed mb-10">
            I help modern brands find their unique visual voice through intentional design, clean aesthetics, and storytelling.
          </p>
          <div className="flex gap-4">
            <a 
              href="#work"
              className="px-10 py-5 bg-zinc-900 text-white text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all"
            >
              Explore My Work
            </a>
            <a 
              href="#contact"
              className="px-10 py-5 border border-zinc-200 text-zinc-900 text-sm uppercase tracking-widest hover:bg-zinc-50 transition-all"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-zinc-100 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-zinc-100 rounded-full blur-2xl -z-10 opacity-30"></div>
    </section>
  );
};

export default Hero;
