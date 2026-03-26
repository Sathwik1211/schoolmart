// src/pages/Science.jsx
import { Link } from 'react-router-dom';
import { FlaskConical, Beaker, Atom, Microscope, Dna, Zap, ArrowRight, ArrowUpRight, Download, Eye, FileText, Activity, Layers, CheckCircle2 } from 'lucide-react';

const scienceItems = [
  { id: 1, title: 'Modular Physics Bench', cat: 'Lab Furniture', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80', badge: 'Safety Plus' },
  { id: 2, title: 'The Human Anatomy V3', cat: 'Biology Models', img: 'https://images.unsplash.com/photo-1540344211158-99937399a9a3?w=800&q=80', badge: 'High-Detail' },
];

const Science = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ASYMMETRIC SCHEMATIC HERO - OVERLAPPING ELEMENTS & HIGH VISUAL DENSITY - UNIQUE LAYOUT */}
        <section className="pt-4 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
           {/* STORY OVERLAY (SPAN 8-EQUIVALENT) - PACKED */}
           <div className="lg:col-span-8 bg-emerald-50 rounded-[25px] p-8 flex flex-col justify-center border border-emerald-100 shadow-sm relative overflow-hidden group min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="px-3 py-1 bg-emerald-500 text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90 relative z-10">
                 <Activity size={12} className="inline mr-2 animate-pulse" /> Experimental Discovery 2025
              </div>
              <h1 className="text-4xl lg:text-6xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase relative z-10">
                 Science <br/> <span className="text-emerald-500 italic font-serif lowercase tracking-normal">is</span> <br/> Pure Fun.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-sm leading-loose relative z-10">
                 From periodic tables to precision workbenches, we create spaces where curiosity triggers action.
              </p>
           </div>

           {/* IMAGE HUB (SPAN 4) - PACKED */}
           <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex-grow rounded-[25px] overflow-hidden relative shadow-lg group border border-gray-100">
                 <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Lab" />
                 <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-all" />
              </div>
              <div className="bg-[#1A1A1A] rounded-[25px] p-6 text-white flex flex-col justify-between group overflow-hidden relative border border-gray-800 shadow-2xl transition-transform hover:scale-[1.02]">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-emerald-400">Zero-Leaking <br/> Security <br/> Performance.</h3>
                 <button className="p-3 bg-emerald-500 text-white rounded-full self-end mt-4 shadow-xl active:scale-95"><ArrowUpRight size={20} /></button>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['CHEMISTRY KITS', 'PHYSICS LABS', 'BIOLOGY MODELS', 'MICROSCOPES', 'LAB SAFETY'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-emerald-500 uppercase tracking-widest transition-colors py-2 uppercase">{cat}</button>
             ))}
           </div>
        </section>

        {/* MASONRY GALLERY - CLOSELY PACKED */}
        <section className="py-6 border-t border-gray-100">
           <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {scienceItems.map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[25px] shadow-sm group cursor-pointer border border-gray-100 h-[300px]`}>
                    <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                       <h3 className="text-sm font-black text-white uppercase">{work.title}</h3>
                       <span className="text-[7px] text-emerald-400 font-black tracking-widest uppercase">{work.cat}</span>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm relative group overflow-hidden">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Security <br/> <span className="text-emerald-500">Performance.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['Acid Resistant', 'Safe Plumbing', 'SEFA Certified', 'Custom Fitting'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-50 hover:bg-emerald-500 hover:text-white transition-all">
                       <CheckCircle2 size={14} className="text-emerald-500 group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1000&q=80" alt="Laboratory" className="w-full h-full object-cover" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Science;
