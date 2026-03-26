// src/pages/Manufacturing.jsx
import { Link } from 'react-router-dom';
import { Settings, Shield, Zap, Box, Factory, Truck, CheckCircle2, Award, ArrowRight, ArrowUpRight, Download, Eye, Layers } from 'lucide-react';

const stats = [
  { label: 'FACTORY AREA', value: '50,000+', unit: 'SQ. FT.' },
  { label: 'ROBOTIC ARMS', value: '12', unit: 'UNITS' },
  { label: 'DAILY OUTPUT', value: '800+', unit: 'PRODUCTS' },
  { label: 'QUALITY CHECKS', value: '3-STAGE', unit: 'PROTOCOL' },
];

const Manufacturing = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-16 pb-12 overflow-hidden text-white">
      {/* TECHNICAL SCHEMATIC HERO - UNIQUE GRID 5 */}
      <section className="relative h-auto lg:h-[800px] flex items-center border-b border-white/5 overflow-hidden py-12 lg:py-0">
         {/* TECH GRID OVERLAY */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
         <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         
         <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-white/5 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-2xl">
               {/* DATA COLUMN */}
               <div className="lg:col-span-4 p-12 border-r border-white/10 flex flex-col justify-between">
                  <div>
                     <div className="w-12 h-1 bg-sm-blue mb-8" />
                     <h1 className="text-6xl font-black font-heading leading-none tracking-tighter mb-8 uppercase">
                        Heavy <br/> <span className="text-sm-blue">Duty.</span> <br/> Scale.
                     </h1>
                     <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] leading-loose mb-12">
                        Precision engineering at an industrial scale. We don't just build furniture; we manufacture durability.
                     </p>
                  </div>
                  <div className="space-y-8">
                     {stats.map((stat, i) => (
                        <div key={i} className="group cursor-default">
                           <div className="text-4xl font-black font-heading text-white group-hover:text-sm-blue transition-colors">{stat.value}</div>
                           <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* VISUAL PANEL */}
               <div className="lg:col-span-8 relative group min-h-[400px]">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" alt="Factory" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80" />
                  
                  <div className="absolute top-12 right-12">
                     <div className="px-6 py-2 bg-sm-blue text-white font-black rounded-full text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3">
                        <Settings className="animate-spin-slow" size={16} /> ISO 9001:2025
                     </div>
                  </div>

                  <div className="absolute bottom-12 left-12 right-12 flex flex-col lg:flex-row items-end justify-between gap-8">
                     <div className="max-w-md">
                        <h3 className="text-2xl font-black font-heading uppercase mb-6 leading-tight">Precision Metalworks <br/> & Wood Engineering.</h3>
                        <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-full hover:bg-sm-blue hover:text-white transition-all shadow-2xl uppercase tracking-widest text-[10px]">
                           Request Factory Tour <ArrowUpRight size={16} className="inline ml-1" />
                        </button>
                     </div>
                     <Activity size={48} className="text-white/10 group-hover:text-sm-blue transition-colors hidden lg:block" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* COMPACT INDUSTRIAL STRIP - UNIQUE ACTIVITY MENU */}
      <section className="py-12 px-4 border-b border-white/5 bg-black">
         <div className="max-w-7xl mx-auto flex overflow-x-auto gap-12 hide-scrollbar justify-start lg:justify-center items-center">
            {[
              { t: 'Robot CNC', i: <Settings size={18} /> },
              { t: 'Laser Mill', i: <Zap size={18} /> },
              { t: 'UV Coater', i: <Layers size={18} /> },
              { t: '3D Scan', i: <Eye size={18} /> },
              { t: 'QC Labs', i: <Shield size={18} /> },
            ].map((cat, i) => (
               <div key={i} className="flex items-center gap-4 group flex-none cursor-pointer py-4 opacity-40 hover:opacity-100 transition-all">
                  <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-sm-blue group-hover:border-sm-blue transition-all">
                     {cat.i}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{cat.t}</span>
               </div>
            ))}
         </div>
      </section>

      {/* PROCESS FLOW - RE-ALIGNED FOR DARK THEME */}
      <section className="py-32 px-4 bg-black border-b border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
               <div className="max-w-2xl">
                  <div className="w-16 h-1 bg-sm-blue mb-8" />
                  <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tight uppercase">The 5-Stage <br/> <span className="text-sm-blue">Evolution.</span></h2>
               </div>
               <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-loose max-w-xs text-right hidden lg:block">
                  Witness how raw materials are transformed into world-class school infrastructure through elite precision.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
               {[
                 { t: 'Selection', d: 'Grade-A Seasoned Wood & High-Tensile Steel.', i: <Box /> },
                 { t: 'CNC Cut', d: 'Laser precision within 0.1mm tolerance.', i: <Settings /> },
                 { t: 'Finish', d: 'Artisanal touch for smooth, safe edges.', i: <Layers /> },
                 { t: 'Protocol', d: '30-point safety and stress-testing.', i: <Shield /> },
                 { t: 'Transit', d: 'Protective casing and nationwide fleet.', i: <Truck /> },
               ].map((step, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] group hover:bg-white hover:text-gray-900 transition-all duration-700">
                     <div className="text-sm-blue font-black text-xs mb-8 group-hover:text-gray-900">0{i+1}.</div>
                     <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                        {step.i}
                     </div>
                     <h4 className="text-xl font-black font-heading mb-4 uppercase">{step.t}</h4>
                     <p className="text-gray-500 group-hover:text-gray-600 text-[9px] font-bold uppercase tracking-widest leading-relaxed">{step.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* PROCESS FLOW (Screenshot 3 Flow Inspired but Dark Theme) */}
      <section className="py-24 px-4 bg-white text-gray-900 rounded-t-[80px] -mt-20 relative z-20">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">The 5-Stage Transformation.</h2>
               <p className="text-gray-500 max-w-lg mx-auto font-medium">How raw materials evolve into world-class school infrastructure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative pb-20">
               <div className="absolute top-[30%] left-0 right-0 h-1 bg-gray-50 hidden lg:block" />
               
               {[
                 { t: 'Material Selection', d: 'Grade-A Seasoned Wood & High-Tensile Steel.', i: <Box /> },
                 { t: 'Robotic Cutting', d: 'Laser precision within 0.1mm tolerance.', i: <Settings /> },
                 { t: 'Hand Polishing', d: 'Artisanal finish for smooth, safe edges.', i: <Layers /> },
                 { t: 'Multi-Check QC', d: '30-point safety and stress-testing.', i: <Shield /> },
                 { t: 'Direct Logistics', d: 'Protective casing and nationwide fleet.', i: <Truck /> },
               ].map((step, i) => (
                  <div key={i} className="relative z-10 bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 group hover:shadow-3xl hover:-translate-y-4 transition-all duration-500">
                     <div className="w-16 h-16 bg-gray-900 text-white rounded-[25px] flex items-center justify-center mb-8 shadow-2xl group-hover:bg-sm-blue transition-colors">
                        {step.i}
                     </div>
                     <h4 className="text-xl font-black font-heading mb-4 leading-none uppercase">{step.t}</h4>
                     <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{step.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CERTIFICATION BENTO GRID (Screenshot 2 Variation) */}
      <section className="py-24 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-8 h-auto lg:h-[800px]">
            {/* Main Feature */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-[70px] overflow-hidden relative group shadow-3xl">
               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80" alt="Robotics" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-16 left-16 right-16">
                  <span className="px-5 py-2 bg-emerald-500 text-white font-black rounded-full text-[10px] uppercase tracking-widest mb-6 inline-block">ISO 9001:2015</span>
                  <h3 className="text-4xl md:text-6xl font-black text-white font-heading leading-tight mb-8">Unmatched <br/> <span className="text-sm-blue italic font-serif">Durability.</span></h3>
                  <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-3xl hover:bg-sm-blue hover:text-white transition-all shadow-xl uppercase tracking-widest text-[10px]">Quality Policy</button>
               </div>
            </div>

            {/* Small Spec Bento */}
            <div className="lg:col-span-2 lg:row-span-1 bg-gray-900 rounded-[50px] p-12 text-white flex items-center justify-between group overflow-hidden shadow-2xl">
               <div className="relative z-10">
                  <h4 className="text-3xl font-black mb-1">Make In India.</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">100% Indigenous Components</p>
               </div>
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-sm-blue transition-colors">
                  <CheckCircle2 size={32} />
               </div>
            </div>

            <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-[50px] p-10 shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center group hover:bg-orange-50 transition-colors">
               <Award size={40} className="text-sm-orange mb-6 group-hover:scale-125 transition-transform" />
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-loose">BIFMA Level-3 <br/> Safety Rating</p>
            </div>

            <div className="lg:col-span-1 lg:row-span-1 bg-sm-blue rounded-[50px] p-10 shadow-2xl flex flex-col justify-center items-center text-center text-white group hover:bg-emerald-600 transition-colors overflow-hidden relative">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
               <Zap size={40} className="mb-6 opacity-30 group-hover:text-white group-hover:opacity-100 transition-all" />
               <h5 className="text-xl font-black font-heading leading-none uppercase tracking-widest">10-Year <br/> Warranty</h5>
            </div>
         </div>
      </section>

      {/* FINAL CTA BOX */}
      <section className="py-24 px-4">
         <div className="max-w-5xl mx-auto rounded-[80px] bg-white p-12 lg:p-20 text-center relative shadow-3xl border border-gray-100 group">
            <h5 className="text-gray-900 text-3xl md:text-5xl font-black font-heading leading-tight mb-8 tracking-tighter uppercase">Direct From <br/> <span className="text-sm-blue">The Source.</span></h5>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-loose max-w-sm mx-auto mb-12">Visit our experience centre to witness the precision of SchoolMart manufacturing live.</p>
            <button className="px-12 py-5 bg-gray-900 text-white font-black rounded-3xl hover:bg-sm-blue transition-all shadow-xl uppercase tracking-widest text-[11px] active:scale-95 flex items-center justify-center gap-3 mx-auto">
               Request Experience Centre Visit <ArrowRight size={20} />
            </button>
         </div>
      </section>
    </main>
  );
};

export default Manufacturing;
