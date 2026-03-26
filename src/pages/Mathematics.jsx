// src/pages/Mathematics.jsx
import { Link } from 'react-router-dom';
import { Calculator, Triangle, Square, Circle, Zap, ArrowRight, Download, Eye, ExternalLink, Layers, Sparkles } from 'lucide-react';

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
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* LOGICAL GEOMETRIC HERO (Unique for Math) */}
        <section className="py-20 flex flex-col items-center text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
              <Triangle className="absolute top-10 left-10 text-sm-blue rotate-12" size={40} />
              <Square className="absolute bottom-20 right-10 text-gray-300 -rotate-45" size={60} />
              <Circle className="absolute top-1/2 left-20 text-sm-blue/20" size={100} />
           </div>

           <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-gray-900 text-white font-black rounded-full mb-8 text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-transform"><Sparkles size={14} className="inline mr-2" /> Logic is Beautiful</span>
              <h1 className="text-5xl md:text-9xl font-black font-heading leading-none tracking-tighter text-gray-900 mb-10">
                 Gamify <br/> <span className="text-sm-blue uppercase italic underline-offset-8">Mathematics.</span>
              </h1>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                 We transform complex abstractions into tangible discovery through our range of laboratory kits designed for the Indian curriculum.
              </p>

              {/* Category Icons Slider — AS PER SCREENSHOT 1 */}
              <div className="flex overflow-x-auto gap-12 pb-12 hide-scrollbar justify-start lg:justify-center w-full">
                {categories.map((cat) => (
                  <button key={cat.id} className="flex flex-col items-center gap-4 group flex-none">
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-300 group-hover:bg-sm-blue group-hover:text-white transition-all transform hover:-translate-y-2 border-2 border-transparent group-hover:border-sm-blue shadow-blue-50">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest">{cat.name}</span>
                  </button>
                ))}
              </div>
           </div>
        </section>

        {/* LOGIC-GRID LAYOUT (Screenshot 4 Inspired but cleaner) */}
        <section className="py-20 border-t border-gray-100">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {MathItems.map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-[50px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-sm-blue/20 group cursor-pointer relative overflow-hidden">
                    <div className="relative h-64 rounded-[40px] overflow-hidden mb-8 shadow-inner bg-gray-50 flex items-center justify-center">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute bottom-6 right-6">
                          <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-sm-blue shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                             <Eye size={20} />
                          </button>
                       </div>
                    </div>
                    
                    <div className="px-4">
                       <span className="text-sm-blue font-black text-[10px] uppercase tracking-widest block mb-1">{item.cat}</span>
                       <h3 className="text-2xl font-black text-gray-900 font-heading mb-4 leading-tight group-hover:text-sm-blue transition-colors">{item.title}</h3>
                       <p className="text-gray-500 text-[11px] leading-relaxed mb-10 h-10 overflow-hidden line-clamp-2">{item.desc}</p>
                       <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                          <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{item.badge}</span>
                          <button className="text-xs font-black text-gray-900 group-hover:text-sm-blue uppercase tracking-widest flex items-center gap-2 transition-colors">Buy Kit <ArrowRight size={14} /></button>
                       </div>
                    </div>

                    {/* Subtle Number Decorative */}
                    <span className="absolute -top-10 -right-10 text-[120px] font-black text-gray-50/50 select-none pointer-events-none group-hover:text-sm-blue/5 transition-colors">{i + 1}</span>
                 </div>
              ))}

              {/* UNIQUE BENTO CALL-TO-ACTION FOR MATH */}
              <div className="break-inside-avoid bg-sm-blue rounded-[50px] p-12 text-white flex flex-col justify-center min-h-[400px] relative overflow-hidden group shadow-3xl shadow-blue-100">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[60px] group-hover:scale-150 transition-transform duration-1000" />
                 <Calculator size={48} className="text-white mb-8 group-hover:rotate-12 transition-transform" />
                 <h4 className="text-3xl font-black font-heading mb-6 tracking-tight leading-tight">Mathematics <br/> Curriculum Ready.</h4>
                 <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-loose mb-10 max-w-xs">All our kits are mapped to NCERT/CBSE standards for Grade 1-10.</p>
                 <button className="px-10 py-4 bg-white text-sm-blue font-black rounded-3xl hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-[10px] w-fit">Download Syllabus Map</button>
              </div>
           </div>
        </section>

        {/* DATA BLOCK (Screenshot 2 / Static Bento Inspired) */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="order-1 lg:order-2">
              <div className="bg-gray-900 p-12 lg:p-20 rounded-[80px] shadow-3xl relative z-10 text-white group overflow-hidden">
                 <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
                 <div className="w-20 h-2 bg-yellow-400 rounded-full mb-10" />
                 <h2 className="text-4xl font-black font-heading mb-8 leading-tight tracking-tighter">Analytical <br/> Lab <span className="text-sm-blue">Planning.</span></h2>
                 <p className="text-white/40 text-sm leading-relaxed mb-12 font-medium uppercase tracking-widest">
                    We specialize in end-to-end math lab setups including wall charts, interactive floor graphics, and ergonomic workbench systems.
                 </p>
                 <div className="space-y-4">
                    {['Custom Logo Kits', 'Institutional Bulk Pricing', 'Annual Replacement Policy', 'Digital Resource Library'].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all cursor-pointer">
                          <div className="w-10 h-10 bg-sm-blue rounded-xl flex items-center justify-center text-white">
                             <Layers size={18} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest flex items-center justify-between w-full">
                             {item} <ExternalLink size={12} className="opacity-40" />
                          </span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-[70px] overflow-hidden shadow-2xl h-[600px] border-8 border-white">
                 <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&q=80" alt="Math Design" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-sm-blue/20" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-2xl max-w-xs border border-gray-100">
                 <Zap className="text-yellow-400 mb-6 animate-pulse" size={32} />
                 <h5 className="text-xl font-black text-gray-900 mb-2 leading-tight">Instant Quote?</h5>
                 <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6 leading-relaxed">Fill institutional details and get curated kit list in 2 minutes.</p>
                 <button className="text-xs font-black text-sm-blue uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">Start Inquiry <ArrowRight size={14} /></button>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

export default Mathematics;
