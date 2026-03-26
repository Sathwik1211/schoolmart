// src/pages/Manufacturing.jsx
import { Link } from 'react-router-dom';
import { Settings, Shield, Zap, Box, Factory, Truck, CheckCircle2, Award, ArrowRight, ArrowUpRight, Download, Eye, Layers, Activity } from 'lucide-react';

const stats = [
  { label: 'AREA', value: '50k+', u: 'SQFT' },
  { label: 'ARMS', value: '12', u: 'BOTS' },
  { label: 'DAILY', value: '800+', u: 'OUT' },
  { label: 'CHECKS', value: '100%', u: 'QC' },
];

const Manufacturing = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TECHNICAL STRIP HERO - HORIZONTAL HIGH DENSITY */}
        <section className="pt-4 pb-6 flex flex-col gap-3">
           {/* STRIP 1 - THE STORY & STATS */}
           <div className="flex flex-col lg:flex-row gap-3 items-stretch h-auto lg:h-[300px]">
              <div className="flex-1 bg-[#1A1A1A] rounded-[20px] p-8 text-white relative overflow-hidden group border border-gray-800 shadow-2xl">
                 <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit border border-emerald-500/20">
                    <Factory size={12} className="inline mr-2 animate-pulse" /> Precision 4.0
                 </div>
                 <h1 className="text-4xl font-black font-heading leading-tight mb-4 tracking-tighter uppercase">
                    Precision <br/> <span className="text-emerald-500 italic font-serif lowercase tracking-normal">and</span> Scale.
                 </h1>
                 <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                    Combining robotic precision with artisan craftsmanship for institutional excellence.
                 </p>
                 <div className="absolute top-8 right-8 flex flex-col gap-3">
                    <button className="p-3 bg-emerald-500 text-white rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-xl active:scale-90">
                       <ArrowUpRight size={20} />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-emerald-500 transition-all border border-white/10">
                       <Download size={20} />
                    </button>
                 </div>
              </div>

              {/* STATS STRIP - PACKED */}
              <div className="lg:w-[320px] bg-white rounded-[20px] p-8 grid grid-cols-2 gap-4 border border-gray-100 shadow-sm content-center">
                 {stats.map((s, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl border border-gray-50 group hover:border-emerald-200 transition-colors">
                       <span className="text-2xl font-black font-heading text-gray-900 leading-none mb-1">{s.value}</span>
                       <span className="text-[6px] font-black tracking-widest text-emerald-600 uppercase">{s.label}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* STRIP 2 - LARGE CINEMATIC IMAGE - PACKED */}
           <div className="h-[250px] lg:h-[350px] rounded-[20px] overflow-hidden relative shadow-lg group border border-gray-100">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" alt="Factory" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 max-w-sm">
                 <h3 className="text-xl font-black text-white uppercase font-heading leading-none mb-4">Artisanal <br/> Robotic <br/> Harmony.</h3>
                 <button className="px-5 py-2.5 bg-emerald-500 text-white font-black rounded-full text-[8px] uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all">Book Factory Tour</button>
              </div>
           </div>
        </section>

        {/* PROCESS FLOW - HORIZONTAL CLOSELY PACKED */}
        <section className="pb-6 border-t border-gray-100 py-6 overflow-hidden">
           <div className="flex overflow-x-auto gap-4 scrollbar-hide">
              {[
                 { t: 'Material', i: <Box /> },
                 { t: 'Cutting', i: <Settings /> },
                 { t: 'Assembly', i: <Layers /> },
                 { t: 'Quality', i: <Shield /> },
                 { t: 'Logistics', i: <Truck /> },
              ].map((step, i) => (
                 <div key={i} className="flex-none w-40 bg-white p-6 rounded-[20px] border border-gray-100 flex flex-col items-center gap-4 group hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">{step.i}</div>
                    <span className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">{step.t}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* INFO GRID - COMPACT */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="bg-white p-10 rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full" />
              <h2 className="text-3xl font-black text-gray-900 font-heading mb-6 leading-none uppercase">Direct Source <br/> Control.</h2>
              <div className="flex flex-col gap-3">
                 {['NEP Compliant Materials', 'BIFMA Level 3 Quality', 'Zero VOC Finishing', 'Eco-Circular Supply'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black tracking-widest uppercase bg-gray-50 p-4 rounded-xl border border-gray-50 hover:bg-emerald-50 transition-colors">
                       <CheckCircle2 size={14} className="text-emerald-500" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[350px]">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80" alt="Tech" className="w-full h-full object-cover" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Manufacturing;
