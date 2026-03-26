// src/pages/Sports.jsx
import { Link } from 'react-router-dom';
import { Zap, Activity, Trophy, Shield, Target, ArrowRight, ArrowUpRight, Award, Layers, CheckCircle2 } from 'lucide-react';

const Sports = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* KINETIC TRIPLE HERO - DISTINCT FROM THE SPLIT-HUB */}
        <section className="pt-4 pb-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
           {/* COLUMN 1 - STORY (SPAN 5) */}
           <div className="md:col-span-5 bg-white rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90">
                 <Zap size={12} className="inline mr-2" /> Performance 2025
              </div>
              <h1 className="text-4xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase">
                 Built <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">for</span> <br/> Champions.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Engineering high-performance athletic surfaces for the next generation.
              </p>
           </div>

           {/* COLUMN 2 - KINETIC IMAGE (SPAN 4) */}
           <div className="md:col-span-4 rounded-[25px] overflow-hidden relative shadow-lg group">
              <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Athletics" />
              <div className="absolute inset-0 bg-sm-blue/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>

           {/* COLUMN 3 - ACTION STACK (SPAN 3) */}
           <div className="md:col-span-3 flex flex-col gap-4">
              <div className="flex-1 bg-gray-900 rounded-[25px] p-6 text-white flex flex-col justify-between group overflow-hidden relative border border-gray-800">
                 <h3 className="text-[9px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">Schedule <br/> Site Survey.</h3>
                 <ArrowUpRight className="self-end text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
              </div>
              <div className="flex-1 bg-emerald-50 rounded-[25px] p-6 text-emerald-600 flex flex-col justify-between group overflow-hidden relative border border-emerald-100">
                 <Shield className="text-emerald-300" size={20} />
                 <h3 className="text-[9px] font-black uppercase tracking-[0.1em] z-10 leading-relaxed group-hover:text-emerald-700">Safety Compliance Gold Certified.</h3>
              </div>
           </div>
        </section>

        {/* SIDEBAR GALLERY LAYOUT */}
        <section className="py-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8">
           {/* LEFT SIDEBAR CATEGORY */}
           <aside className="lg:w-[240px] flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                 <div className="mb-6">
                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-4">ARENA MODULES</h3>
                    <div className="w-8 h-1 bg-sm-blue rounded-full" />
                 </div>
                 {['OUTDOOR TURFS', 'INDOOR COURTS', 'EQUIPMENT', 'SAFETY SURFACING'].map((cat, i) => (
                    <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>{cat}</button>
                 ))}
                 
                 <div className="mt-12 p-6 bg-emerald-50/50 rounded-[25px] border border-emerald-100 group transition-all hover:bg-emerald-50">
                    <span className="text-[8px] font-black text-emerald-600 tracking-[0.2em] uppercase mb-4 block">Safety Rating</span>
                    <div className="flex items-center gap-2 mb-3">
                       <Shield size={14} className="text-emerald-500" />
                       <span className="text-[10px] font-black uppercase text-emerald-700">Gold Certified</span>
                    </div>
                    <p className="text-[8px] font-bold text-emerald-600/70 uppercase tracking-widest leading-loose">Compliant with International Standards.</p>
                 </div>
              </div>
           </aside>

           {/* MAIN CONTENT GALLERY */}
           <div className="flex-grow">
              <div className="flex justify-between items-end mb-8 px-2">
                 <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">ELITE <span className="text-sm-blue italic font-serif lowercase tracking-normal text-lg ml-2">Surfaces</span></h2>
                 <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">1,200+ Fields Installed</span>
              </div>
              
              <div className="columns-1 md:columns-2 gap-4 space-y-4">
                 {[
                   { t: 'The Olympic Track', c: 'Competition', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', h: 'h-[300px]' },
                   { t: 'Maple Court Pro', c: 'Basketball', img: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=800&q=80', h: 'h-[400px]' },
                   { t: 'Turf Excellence', c: 'Football', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', h: 'h-[350px]' },
                   { t: 'Aquatic High-Dive', c: 'Swimming', img: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=80', h: 'h-[450px]' },
                   { t: 'Indoor Gym Elite', c: 'Fitness', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', h: 'h-[300px]' },
                   { t: 'Badminton Arena', c: 'Racket Sports', img: 'https://images.unsplash.com/photo-1626224580175-340ad0e3aed0?w=800&q=80', h: 'h-[400px]' },
                   { t: 'Cricket Pitch Max', c: 'Outdoor', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80', h: 'h-[350px]' },
                 ].map((work, i) => (
                    <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[25px] shadow-sm group cursor-pointer ${work.h} border border-gray-300`}>
                       <img src={work.img} alt={work.t} className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-3 group-hover:translate-y-0">
                          <h3 className="text-sm font-black text-white uppercase tracking-tighter">{work.t}</h3>
                          <span className="text-[8px] text-sm-blue font-black tracking-widest uppercase">{work.c}</span>
                       </div>
                    </div>
                 ))}
                 
                 <div className="break-inside-avoid bg-gray-900 rounded-[25px] p-8 text-white flex flex-col justify-center min-h-[250px] relative overflow-hidden group">
                    <Trophy size={32} className="text-sm-blue mb-4" />
                    <h4 className="text-xl font-black font-heading tracking-tighter uppercase leading-none mb-4">Tournaments <br/> Ready.</h4>
                    <button className="px-5 py-2.5 bg-sm-blue text-white font-black rounded-full hover:bg-white hover:text-gray-900 transition-all text-[8px] tracking-widest w-fit">Request Specs</button>
                 </div>
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID - COMPACT */}
        <section className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-gray-100 mt-6">
           <div className="relative rounded-[30px] overflow-hidden shadow-xl h-[350px]">
              <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=80" alt="Athletic" className="w-full h-full object-cover" />
           </div>
           
           <div className="bg-white p-10 rounded-[30px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 font-heading mb-6 leading-none uppercase">High <span className="text-sm-blue">Impact.</span></h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                 Shock-absorption technology for safety and performance.
              </p>
              <div className="grid grid-cols-2 gap-3">
                 {['FIBA Compliant', 'Anti-Skid', 'Heat Proof', '10 Yr Warranty'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[8px] font-black text-gray-900 uppercase tracking-widest bg-gray-50 p-3 rounded-xl border border-gray-100">
                       <CheckCircle2 size={12} className="text-sm-blue" />
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
