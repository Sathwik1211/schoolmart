// src/pages/LabsLibraries.jsx
import { Link } from 'react-router-dom';
import { Beaker, Book, Microscope, FlaskConical, Atom, ArrowRight, ArrowUpRight, Award, Stars, CheckCircle2, Layers } from 'lucide-react';

const categories = [
  { id: 'all', name: 'STEM LABS', icon: <Microscope size={20} /> },
  { id: 'chem', name: 'CHEMISTRY', icon: <FlaskConical size={20} /> },
  { id: 'physics', name: 'PHYSICS', icon: <Atom size={20} /> },
  { id: 'library', name: 'LIBRARIES', icon: <Book size={20} /> },
];

const LabsLibraries = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SCHEMATIC REVERSE HERO - RIGHT FOCUSED STORY, LEFT FEATURE STACK - PACKED */}
        <section className="pt-4 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
           {/* LEFT STACK (SPAN 4) - PACKED FEATURE CARDS */}
           <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex-1 bg-blue-600 rounded-[25px] p-8 text-white flex flex-col justify-between group overflow-hidden relative border border-blue-500 shadow-xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -mr-16 -mt-16" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-blue-100">STEM Readiness <br/> Audit indices.</h3>
                 <div className="flex items-center justify-between mt-auto">
                    <button className="px-5 py-2.5 bg-white text-blue-600 font-black rounded-full text-[8px] uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">Audit Now</button>
                    <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" size={24} />
                 </div>
              </div>
              <div className="flex-1 bg-white rounded-[25px] p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-sm-blue transition-colors">
                 <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-black text-gray-900 uppercase tracking-tighter">Bespoke Library</span>
                    <span className="text-[7px] font-black text-gray-400 uppercase tracking-[0.3em]">QUIET ZONES</span>
                 </div>
                 <Book className="text-blue-300 group-hover:text-sm-blue transition-colors" size={24} />
              </div>
           </div>

           {/* RIGHT STORY (SPAN 8) - LARGE TEXT & IMAGE INTEGRATION - PACKED */}
           <div className="lg:col-span-8 bg-white rounded-[25px] p-8 border border-gray-100 shadow-sm relative overflow-hidden group flex flex-col md:flex-row gap-8 items-center min-h-[400px]">
              <div className="flex-1 text-center md:text-left">
                 <div className="px-3 py-1 bg-sm-blue/10 text-sm-blue font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90 mx-auto md:mx-0">
                    <Microscope size={12} className="inline mr-2" /> Innovation Hub 2025
                 </div>
                 <h1 className="text-4xl lg:text-5xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase">
                    Serene. <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Brilliant.</span> <br/> Organized.
                 </h1>
                 <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-sm leading-loose">
                    Re-imagining school labs and libraries as high-engagement zones for experimental discovery.
                 </p>
              </div>

              {/* IMAGE ELEMENT - PACKED WITHIN HERO */}
              <div className="w-full md:w-1/2 h-[300px] rounded-[20px] overflow-hidden relative shadow-lg group border border-gray-100">
                 <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Library" />
                 <div className="absolute inset-0 bg-blue-900/10 backdrop-contrast-125" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-sm-blue transition-all">
                       <Atom size={20} />
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* SIDEBAR GALLERY LAYOUT */}
        <section className="py-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8">
           {/* LEFT SIDEBAR CATEGORY */}
           <aside className="lg:w-[240px] flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                 <div className="mb-6">
                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-4">PLATFORM MODULES</h3>
                    <div className="w-8 h-1 bg-sm-blue rounded-full" />
                 </div>
                 {['ROBOTICS', 'COMPOSITE LABS', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY'].map((cat, i) => (
                    <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>{cat}</button>
                 ))}
                 
                 <div className="mt-12 p-6 bg-gray-50 rounded-[25px] border border-gray-100 shadow-sm transition-all hover:bg-white hover:shadow-xl group">
                    <span className="text-[8px] font-black text-gray-400 tracking-[0.2em] uppercase mb-4 block">Experimental Stats</span>
                    <div className="flex items-end gap-1 mb-2">
                       <span className="text-2xl font-black text-gray-900 font-heading">4.2k</span>
                       <span className="text-[8px] font-black text-sm-blue uppercase mb-1">Active Labs</span>
                    </div>
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                       <div className="w-3/4 h-full bg-sm-blue transition-all group-hover:w-full duration-1000" />
                    </div>
                 </div>
              </div>
           </aside>

           {/* MAIN CONTENT GALLERY */}
           <div className="flex-grow">
              <div className="flex justify-between items-end mb-8 px-2">
                 <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">THE <span className="text-sm-blue italic font-serif lowercase tracking-normal text-lg ml-2">Quantum</span> LAB</h2>
                 <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Case Studies: 1,200+ STEM Hubs</span>
              </div>
              
              <div className="columns-1 md:columns-2 gap-4 space-y-4">
                 {[
                   { t: 'The Quantum Lab', c: 'STEM Design', img: 'https://images.unsplash.com/photo-1581093196277-9f608109ca46?w=800&q=80', h: 'h-[300px]' },
                   { t: 'Robotics Workshop', c: 'Future Tech', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80', h: 'h-[350px]' },
                 ].map((work, i) => (
                    <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[25px] shadow-sm group cursor-pointer ${work.h} border border-gray-300`}>
                       <img src={work.img} alt={work.t} className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-3 group-hover:translate-y-0">
                          <h3 className="text-sm font-black text-white uppercase tracking-tighter uppercase">{work.t}</h3>
                          <span className="text-[8px] text-sm-blue font-black tracking-widest uppercase">{work.c}</span>
                       </div>
                    </div>
                 ))}
                 
                 <div className="break-inside-avoid bg-gray-900 rounded-[25px] p-10 text-white flex flex-col justify-center min-h-[250px] relative overflow-hidden group border border-gray-800">
                    <Atom size={32} className="text-sm-blue mb-6" />
                    <h4 className="text-xl font-black font-heading mb-4 uppercase leading-none">Discovery <br/> Blueprint.</h4>
                    <button className="px-6 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest w-fit">Request Specs</button>
                 </div>
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-12 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="order-2 lg:order-1 relative rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1000&q=80" alt="Laboratory" className="w-full h-full object-cover" />
           </div>
           
           <div className="order-1 lg:order-2 bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Knowledge <span className="text-sm-blue">Engineering.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['Acid Resistant', 'Safe Storage', 'Modular', 'RFID Ready'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-sm-blue hover:text-white transition-all">
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

export default LabsLibraries;
