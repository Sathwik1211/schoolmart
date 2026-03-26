// src/pages/Science.jsx
import { Link } from 'react-router-dom';
import { FlaskConical, Beaker, Atom, Microscope, Dna, Zap, ArrowRight, ArrowUpRight, Download, Eye, FileText, Activity, Layers, CheckCircle2 } from 'lucide-react';

const scienceItems = [
  { id: 1, title: 'Modular Physics Bench', cat: 'Lab Furniture', img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80', badge: 'Safety Plus' },
  { id: 2, title: 'The Human Anatomy V3', cat: 'Biology Models', img: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=800&q=80', badge: 'High-Detail' },
  { id: 3, title: 'Spectroscopy Kit', cat: 'Optics', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80', badge: 'Advanced' },
  { id: 4, title: 'Chemical Storage Unit', cat: 'Safety', img: 'https://images.unsplash.com/photo-1581093196277-9f608109ca46?w=800&q=80', badge: 'ISO Certified' },
  { id: 5, title: 'DNA Sequencer Card', cat: 'Biotech', img: 'https://images.unsplash.com/photo-1579154235820-22718e001804?w=800&q=80', badge: 'Modern' },
  { id: 6, title: 'Micro-Grid Solar Kit', cat: 'Renewables', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', badge: 'STEM Pick' },
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

        {/* SIDEBAR GRID LAYOUT */}
        <section className="py-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8">
           {/* LEFT SIDEBAR CATEGORY */}
           <aside className="lg:w-[240px] flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                 <div className="mb-6">
                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-4">SCIENCE CORE</h3>
                    <div className="w-8 h-1 bg-emerald-500 rounded-full" />
                 </div>
                 {['CHEMISTRY KITS', 'PHYSICS LABS', 'BIOLOGY MODELS', 'MICROSCOPES', 'LAB SAFETY'].map((cat, i) => (
                    <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-emerald-600 text-white shadow-lg' : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-900'}`}>{cat}</button>
                 ))}
                 
                 <div className="mt-12 p-6 bg-emerald-900 rounded-[25px] border border-emerald-800 text-white shadow-2xl overflow-hidden relative group">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 blur-xl opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[8px] font-black text-emerald-400 tracking-[0.2em] uppercase mb-4 block">Safety Status</span>
                    <div className="flex items-center gap-2 mb-4">
                       <CheckCircle2 size={12} className="text-emerald-400" />
                       <span className="text-[9px] font-black uppercase">OSHA Compliant</span>
                    </div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-emerald-500 rounded-full text-[7px] font-black uppercase tracking-widest transition-all">Download SDS</button>
                 </div>
              </div>
           </aside>

           {/* MAIN CONTENT GALLERY */}
           <div className="flex-grow">
              <div className="flex justify-between items-end mb-8 px-2">
                 <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">CHEMISTRY <span className="text-emerald-500 italic font-serif lowercase tracking-normal text-lg ml-2">Apparatus</span></h2>
                 <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Selected Kits for Gr. 8-12</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {scienceItems.map((work, i) => (
                    <div key={i} className={`relative overflow-hidden rounded-[25px] shadow-sm group cursor-pointer border border-gray-300 h-[220px]`}>
                       <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 shadow-xl flex items-center justify-center text-white">
                             <ArrowUpRight size={18} />
                          </div>
                       </div>
                       <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-3 group-hover:translate-y-0">
                          <h3 className="text-sm font-black text-white uppercase tracking-tighter font-heading">{work.title}</h3>
                          <span className="text-[8px] text-emerald-400 font-black tracking-widest uppercase">{work.cat}</span>
                       </div>
                    </div>
                 ))}
              </div>
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
