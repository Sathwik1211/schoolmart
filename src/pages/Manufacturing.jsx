// src/pages/Manufacturing.jsx
import { Link } from 'react-router-dom';
import { Settings, Shield, Zap, Box, Factory, Truck, CheckCircle2, Award, ArrowRight, ArrowUpRight, Download, Eye, Layers, Activity } from 'lucide-react';

const categories = [
  { title: 'METALWORKS', icon: <Settings size={18} /> },
  { title: 'WOOD SHOP', icon: <Box size={18} /> },
  { title: 'LOGISTICS', icon: <Truck size={18} /> },
  { title: 'QUALITY CONTROL', icon: <Shield size={18} /> },
  { title: 'FACTORY 4.0', icon: <Activity size={18} /> },
];

const stats = [
  { label: 'FACTORY AREA', value: '50,000+', unit: 'SQ. FT.' },
  { label: 'ROBOTIC ARMS', value: '12', unit: 'UNITS' },
  { label: 'DAILY OUTPUT', value: '800+', unit: 'PRODUCTS' },
  { label: 'QUALITY CHECKS', value: '3-STAGE', unit: 'PROTOCOL' },
];

const Manufacturing = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED SPLIT-HUB HERO - COMPACT PACKED */}
        <section className="pt-4 pb-6 flex flex-col lg:flex-row gap-4 items-stretch">
           {/* STORY BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-emerald-500/10 transition-colors" />
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90 border border-emerald-500/20">
                 <Factory size={12} className="inline mr-2 animate-pulse" /> Precision Hub 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Precision. <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">and</span> <br/> Scale.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Combined robotic precision with artisan craftsmanship to deliver furniture that lasts decades in high-traffic school environments.
              </p>
           </div>

           {/* FEATURE HUB - RIGHT (High Contrast) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-emerald-400">Virtual <br/> Factory Tour <br/> Booking Hub.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-emerald-500 text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">Book Now</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-emerald-400 transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-white rounded-[30px] p-8 text-gray-900 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Safety <br/> Compliance <br/> Certified BIFMA.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Level 3</span>
                    <Shield className="text-gray-300 group-hover:text-emerald-500 transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {categories.map((cat, i) => (
               <button key={i} className="flex items-center gap-3 group flex-none py-2 px-6 hover:bg-white rounded-full transition-all border border-transparent hover:border-gray-50 shadow-sm hover:shadow-gray-100">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white transition-all">
                   {cat.icon}
                 </div>
                 <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest transition-colors">{cat.title}</span>
               </button>
             ))}
           </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-6 border-t border-gray-100">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                 { t: 'Material Selection', d: 'Grade-A Wood & Steel.', i: <Box /> },
                 { t: 'Robotic Cutting', d: '0.1mm Laser tolerance.', i: <Settings /> },
                 { t: 'Hand Finish', d: 'Artisanal touch for safety.', i: <Layers /> },
                 { t: 'Multi-Check QC', d: '30-point stress test.', i: <Shield /> },
                 { t: 'Swift Logistics', d: 'Nationwide protective fleet.', i: <Truck /> },
              ].map((step, i) => (
                 <div key={i} className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sm-blue transition-colors">
                       {step.i}
                    </div>
                    <h4 className="text-xl font-black font-heading mb-4 uppercase leading-none">{step.t}</h4>
                    <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest leading-relaxed">{step.d}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
           <div className="bg-white p-12 lg:p-16 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none tracking-tighter uppercase">Direct <br/> From <br/> <span className="text-sm-blue">The Source.</span></h2>
              <p className="text-gray-500 text-sm leading-loose mb-10 font-medium">
                 We bypass middlemen. By manufacturing 100% of our products in-house, we control every micron of quality and offer direct factory pricing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-1 text-gray-900 bg-gray-50 p-6 rounded-3xl group hover:bg-sm-blue hover:text-white transition-all">
                       <span className="text-2xl font-black font-heading leading-none">{stat.value}</span>
                       <span className="text-[7px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">{stat.label}</span>
                    </div>
                 ))}
              </div>
           </div>
           <div className="relative rounded-[40px] overflow-hidden shadow-3xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80" alt="Factory Floor" className="w-full h-[500px] object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-110 transition-all duration-1000" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Manufacturing;
