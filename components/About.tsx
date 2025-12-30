
import React from 'react';
import { SERVICES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden bg-zinc-200 grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl">
              <img 
                src="https://picsum.photos/seed/designer/800/1000" 
                alt="Designer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-zinc-900 flex items-center justify-center p-8 text-white hidden md:flex">
              <p className="text-xs uppercase tracking-[0.2em] font-medium leading-loose text-center">
                10+ Years of Creative Excellence
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold italic">Design that speaks <br/>before you do.</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              I am a multidisciplinary graphic designer based in London. My philosophy is rooted in the belief that great design is invisible—it simply feels right. 
            </p>
            <p className="text-zinc-500">
              I specialize in creating cohesive brand ecosystems that bridge the gap between physical and digital worlds. Whether it's a sleek app interface or high-end tactile packaging, my approach remains consistent: clarity over clutter, always.
            </p>

            <div id="services" className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {SERVICES.map((s) => (
                <div key={s.title} className="space-y-3">
                  <div className="text-2xl">{s.icon}</div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{s.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
