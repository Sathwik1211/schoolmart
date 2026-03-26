// src/pages/Sports.jsx
import { Link } from 'react-router-dom';
import { Trophy, Target, Dumbbell, Timer, Medal, Zap, ArrowRight, Play, Award, HardHat, FileText } from 'lucide-react';

const categories = [
  { id: 'all', name: 'SPORTS SURFACES', icon: <Target size={24} /> },
  { id: 'gym', name: 'GYM & FITNESS', icon: <Dumbbell size={24} /> },
  { id: 'equipment', name: 'GEAR & EQUIP', icon: <Trophy size={24} /> },
  { id: 'surfaces', name: 'OUTDOOR COURTS', icon: <Timer size={24} /> },
  { id: 'indoor', name: 'INDOOR SPORTS', icon: <Medal size={24} /> },
];

const stadiums = [
  { title: 'The Velocity Turf', cat: 'FIFA Approved', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=80', badge: 'High-Impact' },
  { title: 'Zen-Active Gym', cat: 'Modular Fitness', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80', badge: 'Next-Gen' },
];

const Sports = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 overflow-hidden relative">
      {/* KINETIC DIAGONAL HERO (Unique for Sports) */}
      <section className="px-4 py-20 relative bg-gray-900 border-b border-white/5 skew-y-1 -mt-10 overflow-hidden min-h-[600px] flex items-center">
         <div className="absolute top-0 right-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-blue via-transparent to-transparent" />
         <div className="max-w-7xl mx-auto relative z-10 -skew-y-1 w-full text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sm-blue text-white font-black rounded-full mb-8 text-[11px] uppercase tracking-widest shadow-lg animate-bounce">
                  <Zap size={14} className="fill-white" /> Performance Infrastructure
               </span>
               <h1 className="text-6xl md:text-9xl font-black font-heading leading-none text-white tracking-tighter mb-10">
                  Fueling <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sm-blue to-teal-400 italic font-serif">Champions.</span>
               </h1>
               <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                  We don't just build grounds; we build arenas of excellence. Professional-grade surfaces and equipment for every athletic ambition.
               </p>
               <div className="flex gap-4 justify-center lg:justify-start">
                  <button className="px-12 py-5 bg-white text-gray-900 font-black rounded-[20px] hover:bg-sm-blue hover:text-white transition-all shadow-3xl uppercase tracking-widest text-xs flex items-center gap-3">
                     Schedule Site Survey <ArrowRight size={18} />
                  </button>
               </div>
            </div>
            
            <div className="flex-1 w-full relative group">
               <div className="absolute inset-0 bg-blue-500 rounded-full blur-[140px] opacity-20" />
               <div className="relative rounded-[60px] overflow-hidden shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-700 h-[500px]">
                  <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=80" alt="Sports Arena" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <button className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-sm-blue transition-all group-hover:scale-110">
                        <Play size={40} className="fill-white" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* DYNAMIC CATEGORY EXPLORER (Screenshot 1 Variation) */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 px-4 text-center lg:text-left">
               <div className="max-w-lg mb-8 md:mb-0">
                  <h2 className="text-4xl font-black font-heading tracking-tight mb-4">Institutional Gear</h2>
                  <p className="text-gray-500 font-medium">Selected equipment to withstand intense school-level usage.</p>
               </div>
               
               <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar w-full md:w-auto">
                  {categories.map((cat) => (
                    <button key={cat.id} className="flex flex-col items-center gap-4 group flex-none py-2 px-6 rounded-[35px] bg-gray-50 border border-gray-100 min-w-[140px] hover:bg-gray-900 transition-all shadow-sm">
                      <div className="text-gray-300 group-hover:text-sm-blue transition-colors">
                        {cat.icon}
                      </div>
                      <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-widest">{cat.name}</span>
                    </button>
                  ))}
               </div>
            </div>

            {/* STADIUM-GRID LAYOUT (Screenshot 2 Bento Variation) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               {stadiums.map((stad, i) => (
                  <div key={i} className="rounded-[60px] overflow-hidden relative group h-[600px] shadow-2xl border border-gray-100 cursor-pointer">
                     <img src={stad.img} alt={stad.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-all" />
                     
                     <div className="absolute top-10 left-10">
                        <span className="px-6 py-2 bg-sm-blue text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">{stad.badge}</span>
                     </div>

                     <div className="absolute bottom-12 left-12 right-12 text-center lg:text-left">
                        <p className="text-sm-blue font-black text-[11px] uppercase tracking-[0.3em] mb-4">{stad.cat}</p>
                        <h3 className="text-3xl md:text-5xl font-black text-white font-heading leading-tight mb-8 drop-shadow-xl">{stad.title}</h3>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                           <button className="px-8 py-3 bg-white text-gray-900 font-black rounded-full hover:bg-sm-blue hover:text-white transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                              Download Case Study <FileText size={16} />
                           </button>
                           <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/40 transition-all">
                              <ArrowRight size={20} />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SPECIFICATION HIGHLIGHT (Screenshot 4 Product Inspired Variation) */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-100">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 w-full bg-[#1A1A1A] rounded-[60px] p-12 lg:p-20 text-white relative flex flex-col justify-end overflow-hidden group shadow-3xl">
               <div className="absolute -top-10 -right-10 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-[120px] group-hover:opacity-30 transition-opacity" />
               <div className="relative z-10">
                  <HardHat size={60} className="text-emerald-400 mb-10 group-hover:rotate-6 transition-transform" />
                  <h4 className="text-4xl font-black font-heading mb-6 tracking-tight">Zero-Injury <br/> <span className="text-emerald-400">Policy.</span></h4>
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-[0.2em] leading-loose max-w-sm mb-12">
                     All our synthetic surfaces are FIFA, ITF, or FIBA compliant, ensuring maximum shock absorption for growing joints of school children.
                  </p>
                  <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-3xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl uppercase tracking-widest text-[10px]">Security Audits</button>
               </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
               <h2 className="text-5xl md:text-8xl font-black text-gray-900 font-heading leading-tight mb-8 tracking-tighter">Surface <br/> <span className="text-sm-blue">Technology.</span></h2>
               <div className="space-y-6">
                  {[
                    { t: '5-Layer Acrylic Coating', d: 'UV Resistant & Non-Reflective' },
                    { t: 'Multi-Directional Drainage', d: 'Playable within 30m of rainfall' },
                    { t: 'Bio-Mechanical Traction', d: 'Engineered for school footwear' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 rounded-[35px] bg-white border border-gray-100 shadow-sm group hover:scale-[1.02] transition-all cursor-pointer">
                       <div className="w-14 h-14 bg-blue-50 text-sm-blue group-hover:bg-sm-blue group-hover:text-white rounded-2xl flex items-center justify-center transition-all">
                          <Award size={24} />
                       </div>
                       <div>
                          <h5 className="text-xl font-black text-gray-900 mb-1">{item.t}</h5>
                          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default Sports;
