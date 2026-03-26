// src/pages/Environments.jsx
import { Link } from 'react-router-dom';
import { Layout, Sparkles, Wind, Sun, Leaf, ArrowRight, ArrowUpRight, Eye, CheckCircle2, Award, Layers } from 'lucide-react';

const Environments = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* BENTO HIGH-DENSITY HERO - A 3x2 PACKED GRID MIXING CONTENT & IMAGE */}
        <section className="pt-4 pb-6 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-3 items-stretch h-auto">
           {/* BIG TEXT BLOCK */}
           <div className="md:col-span-3 lg:col-span-2 bg-white rounded-[20px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group min-h-[300px]">
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90">
                 <Sparkles size={12} className="inline mr-2" /> Sensory Hub 2025
              </div>
              <h1 className="text-4xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase">
                 Atmosphere <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal text-left">is</span> <br/> Everything.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose text-left">
                 Harmonizing architectural sensory design to stimulate deep academic performance.
              </p>
           </div>

           {/* ACTION CARD - BLACK */}
           <div className="md:col-span-3 lg:col-span-1 bg-gray-900 rounded-[20px] p-6 text-white flex flex-col justify-between group overflow-hidden relative border border-gray-800 shadow-xl">
              <h3 className="text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed text-sm-blue">Request <br/> Environment <br/> Audit Survey.</h3>
              <div className="flex items-center justify-between mt-6">
                 <button className="px-4 py-2 bg-sm-blue text-white font-black rounded-full text-[7px] uppercase tracking-widest active:scale-95 transition-all shadow-lg active:shadow-blue-500/20">Apply Online</button>
                 <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={20} />
              </div>
           </div>

           {/* IMAGE CARD - PACKED */}
           <div className="hidden lg:block lg:col-span-1 bg-gray-100 rounded-[20px] overflow-hidden relative shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" alt="Space" />
           </div>

           {/* SUB-BLOCK 1 - ECO */}
           <div className="md:col-span-2 lg:col-span-1 bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-sm-blue transition-colors">
              <div className="flex flex-col gap-1">
                 <span className="text-[12px] font-black text-gray-900 uppercase tracking-tighter">Eco Materials</span>
                 <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest">SUSTAINABLE</span>
              </div>
              <Leaf className="text-green-300 group-hover:text-green-500 transition-colors" size={24} />
           </div>

           {/* SUB-BLOCK 2 - SOUND */}
           <div className="md:col-span-2 lg:col-span-1 bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-sm-blue transition-colors">
              <div className="flex flex-col gap-1">
                 <span className="text-[12px] font-black text-gray-900 uppercase tracking-tighter">Sound Control</span>
                 <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest">ACOUSTICS</span>
              </div>
              <Wind className="text-blue-200 group-hover:text-sm-blue transition-colors" size={24} />
           </div>

           {/* SUB-BLOCK 3 - LIGHT */}
           <div className="md:col-span-2 lg:col-span-1 bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-sm-blue transition-colors">
              <div className="flex flex-col gap-1">
                 <span className="text-[12px] font-black text-gray-900 uppercase tracking-tighter">Digital Lighting</span>
                 <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest">LUMENS V2</span>
              </div>
              <Sun className="text-yellow-300 group-hover:text-yellow-500 transition-colors" size={24} />
           </div>

           {/* SUB-BLOCK 4 - FLOW */}
           <div className="hidden lg:flex lg:col-span-1 bg-blue-50/30 rounded-[20px] p-6 border border-blue-100 shadow-sm items-center justify-between group hover:bg-sm-blue hover:text-white transition-all">
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">Spatial Research Indices</span>
              <Layers className="text-sm-blue group-hover:text-white transition-colors" size={20} />
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['ACOUSTICS', 'LIGHTING', 'AIR FLOW', 'ECO MATERIALS', 'SPATIAL FLOW'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors py-2">{cat}</button>
             ))}
           </div>
        </section>

        {/* MASONRY DISPLAY */}
        <section className="py-6 border-t border-gray-100">
           <div className="columns-1 md:columns-3 gap-4 space-y-4">
              {[
                { t: 'Natural Light Study', c: 'Optics', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', h: 'h-[300px]' },
                { t: 'Acoustic Panel Grid', c: 'Sound', img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee62?w=600&q=80', h: 'h-[400px]' },
                { t: 'Biophilic Design', c: 'Nature', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&q=80', h: 'h-[350px]' },
              ].map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[20px] shadow-sm group cursor-pointer ${work.h} border border-gray-100`}>
                    <img src={work.img} alt={work.t} className="w-full h-full object-cover transition-all duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                       <h3 className="text-sm font-black text-white uppercase">{work.t}</h3>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-gray-100 mt-6">
           <div className="bg-white p-12 rounded-[30px] border border-gray-100">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase">Engineering <span className="text-sm-blue">Atmospheres.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['CFD Modeled', 'Acoustic Labs', 'UV Protected', 'Ergo Tech'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black text-gray-900 uppercase tracking-widest bg-gray-50 p-4 rounded-xl group hover:bg-sm-blue hover:text-white transition-all border border-gray-100">
                       <CheckCircle2 size={14} className="text-sm-blue group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           <div className="rounded-[30px] overflow-hidden shadow-xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80" alt="Consultation" className="w-full h-full object-cover shadow-2xl" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Environments;
