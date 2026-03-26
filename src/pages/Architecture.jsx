// src/pages/Architecture.jsx
import { Link } from 'react-router-dom';
import { Building2, Compass, Pencil, Map, ArrowRight, ArrowUpRight, Award, CheckCircle2, Layers, Layout } from 'lucide-react';

const Architecture = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* DRAFTBOARD GRID HERO - OVERLAPPING ELEMENTS & HIGH VISUAL DENSITY - UNIQUE LAYOUT */}
        <section className="pt-4 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch h-auto lg:h-[450px]">
           {/* LEFT STORY (SPAN 5) - PACKED */}
           <div className="lg:col-span-5 bg-white rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-50/20 mix-blend-multiply opacity-50" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90 relative z-10">
                 <Building2 size={12} className="inline mr-2" /> Architectural Studio 2025
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase relative z-10">
                 Dream. <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">then</span> <br/> Construct.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose relative z-10">
                 We create adaptive building designs that foster long-term institutional growth.
              </p>
           </div>

           {/* RIGHT DRAFTING STACK (SPAN 7) - PACKED DENSE GRID */}
           <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-3 h-full">
              {/* IMAGE LARGE (SPAN 2x2) */}
              <div className="col-span-2 row-span-2 rounded-[25px] overflow-hidden relative shadow-lg group border border-gray-100 h-full">
                 <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Draft" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-black uppercase font-heading leading-none">The Bio-Atrium.</h3>
                    <span className="text-[7px] font-black text-sm-blue tracking-widest uppercase">INTERIOR STRATEGY</span>
                 </div>
              </div>

              {/* ACTION CARD (SPAN 1) - PACKED */}
              <div className="col-span-1 bg-gray-900 rounded-[25px] p-6 text-white flex flex-col justify-between group overflow-hidden relative shadow-xl border border-gray-800">
                 <h3 className="text-[9px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">Request <br/> Pitch <br/> Proposal.</h3>
                 <button className="px-4 py-2 bg-sm-blue text-white font-black rounded-full text-[7px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all w-fit">Request</button>
              </div>

              {/* STAT CARD (SPAN 1) - PACKED */}
              <div className="col-span-1 bg-blue-50/50 rounded-[25px] p-6 flex flex-col items-center justify-center text-center group border border-blue-100 shadow-sm transition-all hover:bg-sm-blue hover:text-white">
                 <span className="text-2xl font-black font-heading leading-none text-gray-900 group-hover:text-white uppercase mb-1">5M+</span>
                 <span className="text-[6px] font-black tracking-widest text-sm-blue group-hover:text-white uppercase">SQFT DESIGNED</span>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['SPATIAL PLANNING', 'STRUCTURAL', 'INTERIORS', 'LANDSCAPING', 'SITE AUDITS'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors py-2 uppercase">{cat}</button>
             ))}
           </div>
        </section>

        {/* MASONRY GALLERY - PACKED */}
        <section className="py-6 border-t border-gray-100">
           <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {[
                { t: 'The Bio-Atrium', c: 'Interior Strategy', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', h: 'h-[300px]' },
                { t: 'Cyber-Punk Lab', c: 'Digital Space', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80', h: 'h-[400px]' },
              ].map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[25px] shadow-sm group cursor-pointer ${work.h} border border-gray-100`}>
                    <img src={work.img} alt={work.t} className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xs font-black text-white uppercase">{work.t}</h3>
                 </div>
              ))}
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm relative group overflow-hidden">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Spatial <br/> <span className="text-sm-blue">Innovation Hub.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['NEP Adaptive', 'Structural Audit', 'BIM Ready', 'Pan-India Reach'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-50 hover:bg-sm-blue hover:text-white transition-all">
                       <Compass size={14} className="text-sm-blue group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80" alt="Draft" className="w-full h-full object-cover" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Architecture;
