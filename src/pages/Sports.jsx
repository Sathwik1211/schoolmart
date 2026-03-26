// src/pages/Sports.jsx
import { Link } from 'react-router-dom';
import { Zap, Activity, Trophy, Shield, Target, ArrowRight, ArrowUpRight, Award, Layers, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'all', name: 'OUTDOOR TURFS', icon: <Activity size={20} /> },
  { id: 'indoor', name: 'INDOOR COURTS', icon: <Target size={20} /> },
  { id: 'equipment', name: 'EQUIPMENT', icon: <Zap size={20} /> },
  { id: 'safety', name: 'SAFETY SURFACING', icon: <Shield size={20} /> },
  { id: 'arenas', name: 'MULTI-ARENAS', icon: <Trophy size={20} /> },
];

const sportsWorks = [
  { t: 'The Olympic Track', c: 'Competition', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', h: 'h-[400px]' },
  { t: 'Maple Court Pro', c: 'Basketball', img: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=800&q=80', h: 'h-[500px]' },
  { t: 'Safety Rubber Play', c: 'Infrastructure', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80', h: 'h-[350px]' },
  { t: 'Synthetic Multi-Turf', c: 'Performance', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', h: 'h-[450px]' },
];

const Sports = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED SPLIT-HUB HERO - THE USER PREFERRED THIS */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* STORY BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
                 <Zap size={12} className="inline mr-2" /> Performance Hub 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Built <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">for</span> <br/> Champions.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 We engineer high-performance athletic surfaces that empower the next generation of sporting excellence.
              </p>
           </div>

           {/* FEATURE HUB - RIGHT (High Contrast) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-sm-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">Schedule <br/> Professional <br/> Site Survey.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Book Now</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-emerald-50 rounded-[30px] p-8 text-emerald-600 flex flex-col justify-between group overflow-hidden relative border border-emerald-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Safety <br/> Compliance <br/> Certified.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Gold</span>
                    <Shield className="text-emerald-300 group-hover:text-emerald-500 transition-colors" size={24} />
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

        {/* MASONRY GALLERY */}
        <section className="py-12 border-t border-gray-100">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {sportsWorks.map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[30px] shadow-sm group cursor-pointer ${work.h} border border-gray-100`}>
                    <img src={work.img} alt={work.t} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <span className="text-sm-blue font-black text-[8px] uppercase tracking-widest block mb-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">{work.c} Arena</span>
                       <h3 className="text-xl font-black text-white font-heading leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-500 uppercase">{work.t}</h3>
                    </div>
                 </div>
              ))}

              {/* ACTION CALLOUT */}
              <div className="break-inside-avoid bg-gray-900 rounded-[30px] p-10 text-white flex flex-col justify-center min-h-[300px] shadow-2xl relative overflow-hidden group">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-sm-blue blur-3xl opacity-20" />
                 <Trophy size={32} className="text-sm-blue mb-6" />
                 <h4 className="text-2xl font-black font-heading mb-4 tracking-tighter uppercase leading-none">Tournaments <br/> Ready.</h4>
                 <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest leading-loose mb-8">Professional-grade surfaces certified for national events.</p>
                 <button className="px-6 py-3 bg-sm-blue text-white font-black rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-xl uppercase tracking-widest text-[8px] w-fit">Request Specs</button>
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="relative rounded-[40px] overflow-hidden shadow-3xl">
              <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=80" alt="Athletic Surface" className="w-full h-[500px] object-cover" />
           </div>
           
           <div className="bg-white p-12 lg:p-16 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none tracking-tighter uppercase">High <br/> <span className="text-sm-blue">Impact.</span> Low <span className="text-sm-blue">Injury.</span></h2>
              <p className="text-gray-500 text-sm leading-loose mb-10 font-medium">
                 Our shock-absorption technology minimizes athlete strain without compromising kinetic energy return, ensuring safety and performance go hand-in-hand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {['FIBA Compliant', 'Anti-Skid', 'Heat Resistant', '10 Year Warranty'].map((item, i) => (
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

export default Sports;
