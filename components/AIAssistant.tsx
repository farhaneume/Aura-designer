
import React, { useState } from 'react';
import { generateProjectBrief } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !industry) return;
    
    setLoading(true);
    const brief = await generateProjectBrief(name, industry);
    setResult(brief);
    setLoading(false);
  };

  return (
    <section id="ai-tool" className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4 block">Experimental AI Tool</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold italic mb-6">Brief Generator</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Need inspiration for a new project? Describe your concept, and our AI assistant will help you draft a professional design brief.
          </p>
        </div>

        <div className="bg-zinc-800 p-8 rounded-2xl shadow-2xl border border-zinc-700">
          <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Project Name</label>
              <input 
                type="text"
                placeholder="e.g. Neon Horizon"
                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-sm focus:outline-none focus:border-white transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Industry</label>
              <input 
                type="text"
                placeholder="e.g. Sustainable Fashion"
                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-sm focus:outline-none focus:border-white transition-colors"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className={`md:col-span-2 py-4 bg-white text-zinc-900 text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Generating Insight...' : 'Generate Project Brief'}
            </button>
          </form>

          {result && (
            <div className="bg-zinc-900 p-6 border-l-4 border-white animate-in fade-in slide-in-from-top-4">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">AI Recommendation:</h4>
              <p className="text-zinc-300 italic leading-relaxed font-display text-lg">"{result}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
