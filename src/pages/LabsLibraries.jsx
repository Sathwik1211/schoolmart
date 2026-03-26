// src/pages/LabsLibraries.jsx
import { Link } from 'react-router-dom';
import { Library, BookCopy, Bookmark, ScrollText, BookOpen, Layers, ArrowRight, ArrowUpRight, Eye, Download, Star, Sparkles, Building2 } from 'lucide-react';

const categories = [
  { id: 'all', name: 'LIBRARY SHELVING', icon: <Library size={20} /> },
  { id: 'seating', name: 'ZEN SEATING', icon: <BookCopy size={20} /> },
  { id: 'stem', name: 'STEM LABS', icon: <Bookmark size={20} /> },
  { id: 'digital', name: 'E-LIBRARIES', icon: <ScrollText size={20} /> },
  { id: 'furniture', name: 'MODULAR DESKS', icon: <BookOpen size={20} /> },
];

const libProjects = [
  { title: 'The Arc Library', cat: 'Modernism', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1000&q=80', badge: 'Gold Star Design' },
  { title: 'STEM Discovery Hub', cat: 'Innovation', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=80', badge: 'High-Perf Lab' },
];

const LabsLibraries = () => {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 overflow-hidden relative">
      {/* MINIMALIST MODERNIST HERO - UNIQUE GRID 4 */}
      <section className="px-4 py-24 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-blue-50/30 rounded-full blur-[120px] -mr-32 -mt-32" />
         <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-orange-50/20 rounded-full blur-[100px] -ml-24 -mb-24" />

         <div className="relative z-10">
            <div className="flex justify-center mb-10">
               <div className="px-6 py-2 bg-white/50 backdrop-blur-md text-sm-blue font-black rounded-full border border-blue-100 shadow-sm text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                  <Star size={16} className="fill-sm-blue text-sm-blue" /> World Class Learning Hubs
               </div>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black font-heading leading-tight tracking-tighter text-gray-900 mb-12 uppercase">
               Serene. <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-sm-blue to-gray-400">Engineering</span> <br/> Brilliant.
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed font-medium">
               We re-imagine the silent corners of schools as high-engagement zones for deep work, creative exploration, and collaborative discovery.
            </p>

            {/* FLOATING CATEGORY ICONS STACK (Screenshot 1 Variation) */}
            <div className="flex overflow-x-auto gap-12 pb-12 hide-scrollbar justify-start lg:justify-center w-full max-w-5xl mx-auto scroll-smooth">
               {categories.map((cat) => (
                 <button key={cat.id} className="flex flex-col items-center gap-5 group flex-none outline-none">
                   <div className="w-24 h-24 rounded-[35px] bg-white shadow-2xl flex items-center justify-center text-gray-300 group-hover:bg-gray-900 group-hover:text-white transition-all transform hover:-translate-y-4 duration-500 border border-gray-50 group-hover:border-sm-blue">
                     {cat.icon}
                   </div>
                   <span className="text-[9px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-[0.2em] transition-colors">{cat.name}</span>
                 </button>
               ))}
            </div>
         </div>
      </section>

      {/* FULL-WIDTH IMMERSIVE PORTFOLIO (Screenshot 2 Bento Style but Linear) */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-100 space-y-32">
         {libProjects.map((proj, i) => (
            <div key={i} className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="flex-1 w-full group relative overflow-hidden rounded-[80px] shadow-3xl h-[600px] border-[12px] border-white">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-all" />
                  <div className="absolute top-10 right-10 flex gap-3">
                     <span className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg text-sm-blue border border-blue-50">{proj.badge}</span>
                  </div>
               </div>
               
               <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                     <div className="w-12 h-0.5 bg-sm-blue rounded-full" />
                     <span className="text-sm-blue font-black text-xs uppercase tracking-[0.4em]">{proj.cat} Portfolio</span>
                  </div>
                  <h3 className="text-4xl md:text-7xl font-black text-gray-900 font-heading leading-tight mb-8 tracking-tighter uppercase">{proj.title}</h3>
                  <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-lg">
                     A showcase project demonstrating our capability in bespoke wooden shelving, ergonomic reading zones, and digital cataloguing zones.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                     <button className="px-10 py-4 bg-gray-900 text-white font-black rounded-[25px] hover:bg-sm-blue transition-all shadow-xl uppercase tracking-widest text-[11px] active:scale-95 flex items-center gap-3">
                        View Details <Eye size={18} />
                     </button>
                     <button className="w-14 h-14 border-2 border-gray-200 rounded-[25px] flex items-center justify-center text-gray-300 hover:text-sm-blue hover:border-sm-blue transition-all active:scale-95">
                        <Download size={20} />
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </section>

      {/* TECH/ORGANIZATION BENTO (Screenshot 3 Flow Inspired Variation) */}
      <section className="py-24 px-4 bg-white relative">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-8 relative pb-20">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
               {[
                 { t: 'Modular Shelving', d: 'Adjustable Steel Shelves', i: <Layers size={32} /> },
                 { t: 'Acoustic Design', d: 'Sound Absorption Wall Panels', i: <Building2 size={32} /> },
                 { t: 'RFID Management', d: 'Automated Book Tracking', i: <Sparkles size={32} /> },
               ].map((box, i) => (
                  <div key={i} className={`bg-white p-8 rounded-[50px] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all hover:-translate-y-3 cursor-pointer ${i === 2 ? 'col-span-2' : ''}`}>
                     <div className="w-20 h-20 bg-gray-50 group-hover:bg-sm-blue group-hover:text-white rounded-[40px] flex items-center justify-center text-gray-300 transition-all mb-8 shadow-sm">
                        {box.i}
                     </div>
                     <h4 className="text-xl font-black text-gray-900 mb-2 leading-tight uppercase font-heading">{box.t}</h4>
                     <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-loose">{box.d}</p>
                  </div>
               ))}
            </div>

            <div>
               <h2 className="text-5xl md:text-8xl font-black text-gray-900 font-heading leading-tight mb-8 tracking-tighter uppercase">Space <br/> <span className="text-sm-blue">Engineering.</span></h2>
               <div className="space-y-6">
                  {['Institutional Volume Planning', 'Standardized Safety Clearances', 'Dynamic Workflow Integration', 'Ergonomic Posture Solutions'].map((item, i) => (
                     <div key={i} className="flex items-center gap-6 p-8 rounded-[40px] bg-gray-50 border border-transparent group hover:bg-white hover:border-sm-blue hover:shadow-3xl transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-blue-50 text-sm-blue group-hover:bg-sm-blue group-hover:text-white rounded-2xl flex items-center justify-center transition-all">
                           <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-[11px] font-black text-gray-700 font-heading uppercase tracking-[0.3em]">{item}</span>
                        <div className="ml-auto w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-200 group-hover:text-sm-blue group-hover:border-sm-blue transition-all">
                           <Sparkles size={16} />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA (Linear Modern Bento) */}
      <section className="py-24 px-4">
         <div className="max-w-5xl mx-auto rounded-[80px] bg-[#1A1A1A] text-white p-12 lg:p-20 text-center relative overflow-hidden group shadow-3xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 opacity-20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10">
               <h5 className="text-4xl md:text-6xl font-black font-heading leading-none mb-10 tracking-tighter uppercase">Plan Your Silent <br/> <span className="text-sm-blue underline-offset-[20px] decoration-white/20">Powerhouses.</span></h5>
               <button className="px-12 py-5 bg-white text-gray-900 font-black rounded-3xl hover:bg-sm-blue hover:text-white transition-all shadow-xl uppercase tracking-widest text-[11px] active:scale-95 flex items-center justify-center gap-3 mx-auto">
                  Request Specialist Design Consultation <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default LabsLibraries;
