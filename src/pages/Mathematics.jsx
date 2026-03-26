// src/pages/Mathematics.jsx
import { Link } from 'react-router-dom';
import { Calculator, Triangle, Square, Circle, Zap, ArrowRight, Download, Eye, ExternalLink, Layers, Sparkles, ArrowUpRight } from 'lucide-react';

const categories = [
  { id: 'all', name: 'GEOMETRY KITS', icon: <Triangle size={24} /> },
  { id: 'algebra', name: 'ALGEBRA TILES', icon: <Square size={24} /> },
  { id: 'abacus', name: 'MODERN ABACUS', icon: <Circle size={24} /> },
  { id: 'digital', name: 'MATH SOFTWARE', icon: <Calculator size={24} /> },
];

const MathItems = [
  { id: 1, title: 'The Pythagoras Lab', cat: 'Theorem Visuals', desc: 'A physical demonstration set for right-angle triangle proofs.', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80', badge: 'Best Seller' },
  { id: 2, title: '3D Fraction Set', cat: 'Fractional Logic', desc: 'Shatter-proof magnetic pieces for hands-on logic building.', img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80', badge: 'NEA Pick' },
  { id: 3, title: 'Gamified Abacus Kit', cat: 'Mental Math', desc: 'Colorful bead sets with companion app for rapid calculation.', img: 'https://images.unsplash.com/photo-1509228468518-180dd482180c?w=800&q=80', badge: 'Innovation' },
];

const Mathematics = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* LOGICAL GEOMETRIC HERO (Unique for Math) */}
        {/* REFINED LOGICAL HERO - REMOVED CENTERED STARTING */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* LOGIC BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
                 <Sparkles size={12} className="inline mr-2" /> Logic is Beautiful
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Gamify <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Mathematics.</span>
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Transforming complex abstractions into tangible discovery through our range of laboratory kits.
              </p>
           </div>

           {/* GEOMETRIC FEATURE HUB - RIGHT (Premium Inspired) */}
           <div className="lg:w-[450px] grid grid-cols-1 gap-4">
              <div className="bg-gray-900 rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none select-none">
                    <Triangle className="absolute top-6 right-6 text-white rotate-12" size={30} />
                    <Square className="absolute bottom-6 left-6 text-sm-blue rotate-45" size={20} />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed mb-4 text-sm-blue">Curriculum <br/> Mapping <br/> Excellence.</h3>
                    <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest leading-loose max-w-[200px]">Mapped to NCERT & CBSE standards for Grade 1-10 institutions.</p>
                 </div>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-6 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all active:scale-95 shadow-lg shadow-blue-500/10">Syllabus Guide</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Category Strip — FROM REFERENCE SITE */}
        <section className="pb-12 px-2">
           <div className="flex overflow-x-auto gap-10 pb-4 hide-scrollbar justify-start lg:justify-center border-b border-gray-100">
             {categories.map((cat) => (
               <button key={cat.id} className="flex items-center gap-3 group flex-none py-2 px-6 hover:bg-white rounded-full transition-all border border-transparent hover:border-gray-50 shadow-sm hover:shadow-gray-100">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white transition-all">
                   {cat.icon}
                 </div>
                 <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest">{cat.name}</span>
               </button>
             ))}
           </div>
        </section>

        {/* LOGIC-GRID LAYOUT (Screenshot 4 Inspired but cleaner) */}
        <section className="py-12 border-t border-gray-100">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MathItems.map((item, i) => (
                 <div key={i} className="bg-white p-5 rounded-[40px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-sm-blue/20 group cursor-pointer relative overflow-hidden">
                    <div className="relative h-60 rounded-[30px] overflow-hidden mb-6 shadow-inner bg-gray-50 flex items-center justify-center">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute bottom-4 right-4 animate-bounce">
                          <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-sm-blue shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                             <Eye size={18} />
                          </button>
                       </div>
                    </div>
                    
                    <div className="px-3">
                       <span className="text-sm-blue font-black text-[9px] uppercase tracking-widest block mb-1">{item.cat}</span>
                       <h3 className="text-xl font-black text-gray-900 font-heading mb-3 leading-tight group-hover:text-sm-blue transition-colors uppercase">{item.title}</h3>
                       <p className="text-gray-500 text-[10px] leading-relaxed mb-8 h-8 overflow-hidden line-clamp-2">{item.desc}</p>
                       <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                          <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{item.badge}</span>
                          <button className="text-[10px] font-black text-gray-900 group-hover:text-sm-blue uppercase tracking-widest flex items-center gap-2 transition-colors">Buy Kit <ArrowRight size={14} /></button>
                       </div>
                    </div>

                    {/* Subtle Number Decorative */}
                    <span className="absolute -top-6 -right-6 text-[80px] font-black text-gray-50/30 select-none pointer-events-none group-hover:text-sm-blue/5 transition-colors">{i + 1}</span>
                 </div>
              ))}

              {/* UNIQUE BENTO CALL-TO-ACTION FOR MATH */}
              <div className="break-inside-avoid bg-sm-blue rounded-[40px] p-10 text-white flex flex-col justify-center min-h-[350px] relative overflow-hidden group shadow-3xl shadow-blue-100">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] group-hover:scale-150 transition-transform duration-1000" />
                 <Calculator size={40} className="text-white mb-6 group-hover:rotate-12 transition-transform" />
                 <h4 className="text-2xl font-black font-heading mb-4 tracking-tight leading-tight uppercase">Curriculum <br/> Compliance.</h4>
                 <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-loose mb-8 max-w-xs">All our kits are mapped to NCERT/CBSE standards for Grade 1-10.</p>
                 <button className="px-8 py-3.5 bg-white text-sm-blue font-black rounded-3xl hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-[9px] w-fit">Download Syllabus Map</button>
              </div>
           </div>
        </section>

        {/* DATA BLOCK (Screenshot 2 / Static Bento Inspired) */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="order-1 lg:order-2">
              <div className="bg-gray-900 p-10 lg:p-14 rounded-[40px] shadow-3xl relative z-10 text-white group overflow-hidden">
                 <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
                 <div className="w-16 h-1.5 bg-yellow-400 rounded-full mb-8" />
                 <h2 className="text-3xl font-black font-heading mb-6 leading-tight tracking-tighter uppercase">Analytical <br/> Lab <span className="text-sm-blue">Planning.</span></h2>
                 <p className="text-white/40 text-[10px] leading-relaxed mb-10 font-bold uppercase tracking-widest">
                    We specialize in end-to-end math lab setups including wall charts and interactive floor graphics.
                 </p>
                 <div className="space-y-3">
                    {['Custom Logo Kits', 'Institutional Pricing', 'Annual Replacement', 'Digital Library'].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all cursor-pointer">
                          <div className="w-8 h-8 bg-sm-blue rounded-lg flex items-center justify-center text-white">
                             <Layers size={14} />
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-widest flex items-center justify-between w-full">
                             {item} <ExternalLink size={10} className="opacity-40" />
                          </span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[450px] border-8 border-white">
                 <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&q=80" alt="Math Design" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-sm-blue/20" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[30px] shadow-2xl max-w-xs border border-gray-100">
                 <Zap className="text-yellow-400 mb-4 animate-pulse" size={24} />
                 <h5 className="text-lg font-black text-gray-900 mb-1 leading-tight uppercase">Instant Quote?</h5>
                 <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mb-4 leading-relaxed line-clamp-2">Fill details and get kit list in 2 minutes.</p>
                 <button className="text-[9px] font-black text-sm-blue uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">Start Inquiry <ArrowRight size={14} /></button>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

export default Mathematics;
