
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 italic text-zinc-900">Selected Works</h2>
            <p className="text-zinc-500 text-lg">A curated collection of branding, digital, and print projects for global clients.</p>
          </div>
          <div className="flex gap-4">
            {['All', 'Branding', 'Digital', 'Print'].map((cat) => (
              <button 
                key={cat}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-zinc-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-[0.2em] font-medium border border-white/30 px-6 py-3 backdrop-blur-sm">View Project</span>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">{project.category}</p>
              <h3 className="text-2xl font-display font-bold group-hover:underline underline-offset-8 transition-all">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
