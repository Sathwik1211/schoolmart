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
    <main className="min-h-screen bg-gray-50 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED INDUSTRIAL HERO - REMOVED DARK CENTERED STARTING */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* PRECISION BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-emerald-500/10 transition-colors" />
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90 border border-emerald-500/20">
                 <Factory size={12} className="inline mr-2 animate-pulse" /> Precision Engineering
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Indian <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-sm-blue to-emerald-400">the</span> <br/> Craftsmanship.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Combined robotic precision with artisan craftsmanship to deliver furniture that lasts decades.
              </p>
           </div>

           {/* FACTORY FEATURE HUB - RIGHT (Premium Inspired) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-emerald-400">Virtual <br/> Factory Tour <br/> Video Hub.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-emerald-500 text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 active:scale-95">Watch Live</button>
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

        {/* Compact Stats Strip — AS PER REFERENCE */}
        <section className="pb-12 px-2">
           <div className="flex overflow-x-auto gap-12 pb-4 hide-scrollbar justify-start border-b border-gray-100">
             {stats.map((stat, i) => (
               <div key={i} className="flex flex-col items-start gap-1 group flex-none py-2 px-4">
                 <h4 className="text-[14px] font-black text-gray-900 uppercase tracking-tighter transition-colors group-hover:text-sm-blue">{stat.value}</h4>
                 <span className="text-[7px] font-black text-gray-400 uppercase tracking-[0.3em]">{stat.label}</span>
               </div>
             ))}
           </div>
        </section>
      </div>

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
