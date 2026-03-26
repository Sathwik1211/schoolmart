// src/pages/Mathematics.jsx
import { Link } from 'react-router-dom';
import { Calculator, Triangle, Square, Circle, Zap, ArrowRight, Download, Eye, ExternalLink, Layers, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const MathItems = [
  { id: 1, title: 'The Pythagoras Lab', cat: 'Theorem Visuals', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80', badge: 'Best Seller' },
  { id: 2, title: '3D Fraction Set', cat: 'Fractional Logic', img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80', badge: 'NEA Pick' },
  { id: 3, title: 'Gamified Abacus Kit', cat: 'Mental Math', img: 'https://images.unsplash.com/photo-1509228468518-180dd482180c?w=800&q=80', badge: 'Innovation' },
  { id: 4, title: 'Statistics Hub', cat: 'Data Science', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', badge: 'Stats+' },
  { id: 5, title: 'Algebraic Tiles', cat: 'Equation Logic', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', badge: 'New Gen' },
  { id: 6, title: 'Geometric Solids', cat: 'Volume Study', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', badge: 'Premium' },
  { id: 7, title: 'Logic Gates Kit', cat: 'Digital Math', img: 'https://images.unsplash.com/photo-1584433144859-1fc3ab84a9ec?w=800&q=80', badge: 'Bestseller' },
  { id: 8, title: 'Vector Space Pro', cat: 'Calculus', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80', badge: 'Advanced' },
  { id: 9, title: 'Trigonometry Dial', cat: 'Angles', img: 'https://images.unsplash.com/photo-1543286386-3067403818e8?w=800&q=80', badge: 'Utility' },
];

const Mathematics = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* GRID-MODULAR HERO - PERFECTLY ALIGNED 3-COLUMN MESH - UNIQUE LAYOUT */}
        <section className="pt-4 pb-6 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
           {/* LOGIC BLOCK (MOD 1) - PACKED */}
           <div className="bg-white rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90">
                 <Sparkles size={12} className="inline mr-2" /> Logic Hub 2025
              </div>
              <h1 className="text-4xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase">
                 Gamify <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Mathematics.</span>
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Tangible discovery kits mapping complex abstractions to physical logic.
              </p>
           </div>

           {/* IMAGE BLOCK (MOD 2) - PACKED */}
           <div className="rounded-[25px] overflow-hidden relative shadow-lg group border border-gray-100 min-h-[350px]">
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale" alt="Math" />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all" />
              <div className="absolute top-6 right-6">
                 <Triangle className="text-white/40 group-hover:text-sm-blue transition-colors rotate-12" size={32} />
              </div>
           </div>

           {/* ACTION BLOCK (MOD 3) - PACKED */}
           <div className="bg-gray-900 rounded-[25px] p-8 text-white flex flex-col justify-between group overflow-hidden relative border border-gray-800 shadow-2xl">
              <div className="flex flex-col gap-2">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-sm-blue">Curriculum Kit <br/> Syllabus Maps.</h3>
                 <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">NCERT GRADE 1-10 READY</span>
              </div>
              <div className="flex items-center justify-between mt-auto">
                 <button className="px-5 py-2.5 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest active:scale-95 transition-all">Download Map</button>
                 <ArrowUpRight className="text-white/20 group-hover:text-sm-blue" size={24} />
              </div>
           </div>
        </section>

        {/* SIDEBAR GRID LAYOUT */}
        <section className="py-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8">
           {/* LEFT SIDEBAR CATEGORY */}
           <aside className="lg:w-[240px] flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                 <div className="mb-6">
                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-4">MATH ENGINE</h3>
                    <div className="w-8 h-1 bg-sm-blue rounded-full" />
                 </div>
                 {['GEOMETRY', 'ALGEBRA', 'ABACUS', 'DIGITAL MATH', 'LOGIC KITS'].map((cat, i) => (
                    <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>{cat}</button>
                 ))}
                 
                 <div className="mt-12 p-6 bg-gray-900 rounded-[25px] border border-gray-800 text-white shadow-2xl overflow-hidden relative group">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-sm-blue blur-xl opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[8px] font-black text-sm-blue tracking-[0.2em] uppercase mb-4 block">Calculations</span>
                    <div className="text-xl font-black mb-4">π = 3.1415...</div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-sm-blue rounded-full text-[7px] font-black uppercase tracking-widest transition-all">Logic AI</button>
                 </div>
              </div>
           </aside>

           {/* MAIN CONTENT GRID */}
           <div className="flex-grow">
              <div className="flex justify-between items-end mb-8 px-2">
                 <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">GEOMETRY <span className="text-sm-blue italic font-serif lowercase tracking-normal text-lg ml-2">Visualizer</span></h2>
                 <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active nodes in 5,200 institutions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {MathItems.map((item, i) => (
                    <div key={i} className="bg-white p-2 rounded-[25px] border border-gray-300 shadow-sm transition-all duration-500 hover:shadow-2xl group cursor-pointer relative overflow-hidden">
                       <div className="relative h-48 rounded-[20px] overflow-hidden mb-4">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                          <div className="absolute top-4 right-4 animate-bounce opacity-0 group-hover:opacity-100">
                             <span className="px-3 py-1 bg-sm-blue rounded-full text-[7px] font-black tracking-widest uppercase text-white shadow-lg">{item.badge}</span>
                          </div>
                          <div className="absolute inset-0 bg-sm-blue/0 group-hover:bg-sm-blue/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                             <div className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center text-sm-blue">
                                <ArrowRight size={18} />
                             </div>
                          </div>
                       </div>
                       <div className="px-4 pb-4 text-center">
                          <p className="text-sm-blue font-black text-[8px] uppercase tracking-widest mb-1">{item.cat}</p>
                          <h3 className="text-[13px] font-black text-gray-900 uppercase mb-4 leading-none group-hover:text-sm-blue transition-colors">{item.title}</h3>
                          <div className="h-px bg-gray-100 w-full" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="bg-gray-900 p-12 rounded-[30px] border border-gray-800 shadow-sm relative group overflow-hidden">
              <h2 className="text-4xl font-black font-heading mb-8 leading-none uppercase tracking-tighter text-white">Analytical <br/> <span className="text-sm-blue">Planning Hub.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['Custom Logo Kits', 'NCERT Mapped', 'Annual Audit', 'Global Standards'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-sm-blue transition-all text-gray-400">
                       <CheckCircle2 size={14} className="text-sm-blue group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&q=80" alt="Planning" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Mathematics;
