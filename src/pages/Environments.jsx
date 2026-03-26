// src/pages/Environments.jsx
import { Link } from 'react-router-dom';
import { Layout, Sparkles, Wind, Sun, Leaf, ArrowRight, ArrowUpRight, Eye, CheckCircle2, Award, Layers } from 'lucide-react';

const categories = [
  { id: 'all', name: 'ACOUSTICS', icon: <Wind size={20} /> },
  { id: 'lighting', name: 'LIGHTING', icon: <Sun size={20} /> },
  { id: 'ventilation', name: 'AIR FLOW', icon: <Wind size={20} /> },
  { id: 'sustainable', name: 'ECO MATERIALS', icon: <Leaf size={20} /> },
  { id: 'ergonomics', name: 'SPATIAL FLOW', icon: <Layout size={20} /> },
];

const Environments = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED SPLIT-HUB HERO - THE USER PREFERRED THIS */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* STORY BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
                 <Sparkles size={12} className="inline mr-2" /> Sensory Studio 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase text-left">
                 Atmosphere <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">is</span> <br/> Everything.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose text-left">
                 We harmonize architectural sensory design to stimulate focus, collaborative energy, and deep academic performance.
              </p>
           </div>

           {/* FEATURE HUB - RIGHT (High Contrast) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-sm-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue text-left">Request <br/> Environment <br/> Audit Survey.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Apply Online</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-white rounded-[30px] p-8 text-sm-blue flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-left">Spatial <br/> Research <br/> Indices.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Bespoke</span>
                    <Layers className="text-blue-300 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
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

        {/* MASONRY DISPLAY - INSPIRED BY ARCHITECTURE PAGE */}
        <section className="py-12 border-t border-gray-100">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {[
                { t: 'Natural Light Study', c: 'Optics', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', h: 'h-[400px]' },
                { t: 'Acoustic Panel Grid', c: 'Sound Control', img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee62?w=800&q=80', h: 'h-[500px]' },
                { t: 'Biophilic Integration', c: 'Nature', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80', h: 'h-[350px]' },
                { t: 'Thermal Comfort', c: 'Air Quality', img: 'https://images.unsplash.com/photo-1582213726894-46944743265d?w=800&q=80', h: 'h-[450px]' },
              ].map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[30px] shadow-sm group cursor-pointer ${work.h} border border-gray-100`}>
                    <img src={work.img} alt={work.t} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <span className="text-sm-blue font-black text-[8px] uppercase tracking-widest block mb-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">{work.c}</span>
                       <h3 className="text-xl font-black text-white font-heading leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-500 uppercase">{work.t}</h3>
                    </div>
                 </div>
              ))}

              {/* ACTION CALLOUT IN MASONRY */}
              <div className="break-inside-avoid bg-sm-blue rounded-[30px] p-10 text-white flex flex-col justify-center min-h-[300px] shadow-2xl relative overflow-hidden group border border-sm-blue/20">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
                 <Award size={32} className="text-white mb-6" />
                 <h4 className="text-2xl font-black font-heading mb-4 tracking-tighter uppercase leading-none">Global <br/> Standards.</h4>
                 <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-loose mb-8">We comply with BIFMA, ISO and WELL building standards.</p>
                 <button className="px-6 py-3 bg-white text-sm-blue font-black rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-xl uppercase tracking-widest text-[8px] w-fit">Request Standards PDF</button>
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="relative rounded-[40px] overflow-hidden shadow-3xl group">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80" alt="Consultation" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-sm-blue/20 mix-blend-overlay" />
           </div>
           
           <div className="bg-white p-12 lg:p-16 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none tracking-tighter uppercase">Engineering <br/> <span className="text-sm-blue">Atmospheres.</span></h2>
              <p className="text-gray-500 text-sm leading-loose mb-10 font-medium">
                 Our technical design team uses computational fluid dynamics to ensure perfect air quality and acoustic clarity in every room.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {['CFD Modeled', 'Acoustic Tested', 'UV Protected', 'Ergo Certified'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black text-gray-900 uppercase tracking-widest bg-gray-50 p-4 rounded-2xl group hover:bg-sm-blue hover:text-white transition-all">
                       <CheckCircle2 size={14} className="text-sm-blue group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

export default Environments;
