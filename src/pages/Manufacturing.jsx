// src/pages/Manufacturing.jsx
import { Link } from 'react-router-dom';
import { Settings, Shield, Zap, Box, Factory, Truck, CheckCircle2, Award, ArrowRight, Download, Eye, Layers } from 'lucide-react';

const stats = [
  { label: 'Factory Area', value: '50,000+', unit: 'Sq. Ft.' },
  { label: 'Robotic Arms', value: '12', unit: 'Units' },
  { label: 'Daily Output', value: '800+', unit: 'Products' },
  { label: 'Quality Checks', value: '3-Stage', unit: 'Protocol' },
];

const Manufacturing = () => {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white pt-24 pb-20 overflow-hidden">
      {/* INDUSTRIAL PRECISION HERO (Unique for Manufacturing) */}
      <section className="px-4 py-20 relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -mr-96 -mt-96" />
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1 text-center lg:text-left">
                 <span className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/10 text-emerald-400 font-black rounded-full mb-8 text-[11px] uppercase tracking-widest border border-emerald-500/20 active:translate-y-1 transition-transform">
                    <Factory size={16} className="animate-pulse" /> Precision Engineering
                 </span>
                 <h1 className="text-5xl md:text-9xl font-black font-heading leading-[0.85] tracking-tighter uppercase mb-10">
                    Indian <br/> <span className="text-sm-blue italic font-serif">Craft,</span> <br/> Global <br/> Standard.
                 </h1>
                 <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
                    Our state-of-the-art manufacturing facility in Bangalore combines robotic precision with artisan craftsmanship to deliver furniture that lasts decades.
                 </p>
                 <div className="flex gap-4 justify-center lg:justify-start">
                    <button className="px-12 py-5 bg-white text-gray-900 font-black rounded-3xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                       Factory Tour Video <Eye size={18} />
                    </button>
                 </div>
              </div>

              <div className="flex-1 w-full relative group">
                 <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="relative grid grid-cols-2 gap-6 scale-95 group-hover:scale-100 transition-transform duration-1000">
                    {stats.map((stat, i) => (
                       <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-[50px] text-center hover:bg-emerald-500 transition-all cursor-crosshair">
                          <h3 className="text-4xl md:text-6xl font-black mb-2 text-white">{stat.value}</h3>
                          <p className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-widest leading-loose">{stat.label} <br/> {stat.unit}</p>
                       </div>
                    ))}
                 </div>
              </div>
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
