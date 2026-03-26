// src/pages/Environments.jsx
import { Link } from 'react-router-dom';
import { Palette, Compass, Pencil, Lightbulb, Layout, ArrowRight, ArrowUpRight, CheckCircle2, Eye, Stars, Download, Layers, MousePointer2, Sparkles, Globe } from 'lucide-react';

const categories = [
  { id: 'all', name: 'LEARNING HUBS', icon: <Globe size={20} /> },
  { id: 'focus', name: 'FOCUS ZONES', icon: <Compass size={20} /> },
  { id: 'creative', name: 'CREATIVE SPACES', icon: <Palette size={20} /> },
  { id: 'digital', name: 'DIGITAL LOUNGES', icon: <MousePointer2 size={20} /> },
];

const Environments = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED ATMOSPHERE HERO - REMOVED CENTERED STARTING */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* STORY BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-sm-blue/10 text-sm-blue font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90 border border-sm-blue/20">
                 <Sparkles size={12} className="inline mr-2 animate-pulse" /> Sensory Learning
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Atmosphere <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">is</span> <br/> Everything.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 We harmonize architectural sensory design to stimulate focus, collaborative energy, and deep learning.
              </p>
           </div>

           {/* AUDIT FEATURE HUB - RIGHT (Premium Inspired) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-sm-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">Request <br/> Environment <br/> Audit Survey.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95">Apply Online</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-blue-50 rounded-[30px] p-8 text-sm-blue flex flex-col justify-between group overflow-hidden relative border border-blue-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Spatial <br/> Research <br/> Indices.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Bespoke</span>
                    <Layers className="text-blue-300 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — AS PER REFERENCE */}
        <section className="pb-12 px-2">
           <div className="flex overflow-x-auto gap-8 pb-4 hide-scrollbar justify-start border-b border-gray-100">
             {categories.map((cat) => (
               <button key={cat.id} className="flex items-center gap-3 group flex-none py-2 px-6 hover:bg-white rounded-full transition-all border border-transparent hover:border-gray-50 shadow-sm hover:shadow-gray-100">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white transition-all">
                   {cat.icon}
                 </div>
                 <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest transition-colors">{cat.name}</span>
               </button>
             ))}
           </div>
        </section>

        {/* FULL-VIEW SCROLL GALLERY (Screenshot 2 / Unique Element) */}
        <section className="py-24 space-y-40">
           {[
             { t: 'The Bio-Dynamic Primary Wing', d: 'Natural light-indexed color schemes for early childhood cognitive development.', i: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1000&q=80', b: 'Curiosity Optimized' },
             { t: 'High-Performance STEM Atrium', d: 'Industrial glass & steel focus zones for advanced experimental learning.', i: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1000&q=80', b: 'Focus Index 1.0' },
           ].map((env, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className="flex-1 w-full group relative overflow-hidden rounded-[80px] shadow-3xl h-[700px] border-[15px] border-white active:scale-[0.98] transition-all">
                    <img src={env.i} alt={env.t} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-all" />
                    <div className="absolute top-10 right-10">
                       <span className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg text-sm-blue border border-blue-50">{env.b}</span>
                    </div>
                 </div>
                 
                 <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                       <div className="w-16 h-1 bg-sm-blue rounded-full" />
                       <span className="text-sm-blue font-black text-xs uppercase tracking-[0.4em]">Spatial Research {i + 1}</span>
                    </div>
                    <h3 className="text-4xl md:text-7xl font-black text-gray-900 font-heading leading-tight mb-8 tracking-tighter uppercase whitespace-pre-wrap">{env.t}</h3>
                    <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-lg">
                       {env.d} Our research shows a 15% increase in student retention in these environments compared to standard classrooms.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                       <button className="px-10 py-5 bg-gray-900 text-white font-black rounded-3xl hover:bg-sm-blue transition-all shadow-xl uppercase tracking-widest text-[11px] active:scale-95 flex items-center gap-3">
                          Request Environment Audit <ArrowRight size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </section>

        {/* SENSORY BENTO GRID (Screenshot 3 Flow Inspired Variation) */}
        <section className="py-24 px-4 bg-[#1A1A1A] text-white rounded-[100px] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sm-blue opacity-10 rounded-full blur-[120px] group-hover:opacity-30 transition-opacity" />
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
              <div className="flex-1 text-center lg:text-left">
                 <h2 className="text-5xl md:text-8xl font-black font-heading leading-[0.95] tracking-tighter mb-10 text-white uppercase">The 3 Pillars of <br/> <span className="text-sm-blue">Atmosphere.</span></h2>
                 <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
                    Our environmental planning covers Acoustics, Ergonomics, and Bio-philic Harmony to create a perfect equilibrium of discovery.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    {['Silent Floors', 'Anti-Glare Glass', 'Air-Purifying Wall', 'Adjustable Temp'].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 rounded-[35px] bg-white/5 border border-white/5 group hover:bg-white/10 transition-all cursor-pointer">
                          <CheckCircle2 size={24} className="text-emerald-400" />
                          <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-[450px]">
                 <div className="bg-white rounded-[80px] p-12 text-gray-900 relative shadow-2xl relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-sm-blue rounded-[50px] flex items-center justify-center text-white shadow-3xl hover:rotate-12 transition-all">
                       <Lightbulb size={48} />
                    </div>
                    <div className="mt-10 text-center">
                       <h4 className="text-3xl font-black font-heading mb-6 tracking-tight uppercase leading-none">Institutional <br/> Audit.</h4>
                       <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-loose mb-10 max-w-xs mx-auto">Request a physical campus audit of your current classroom environment for free.</p>
                       <button className="px-10 py-4 bg-gray-900 text-white font-black rounded-3xl hover:bg-sm-blue transition-all shadow-xl uppercase tracking-widest text-[10px] w-full">Apply Now</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </main>
  );
};

export default Environments;
