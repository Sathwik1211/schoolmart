// src/pages/Science.jsx
import { Link } from 'react-router-dom';
import { FlaskConical, Beaker, Atom, Microscope, Dna, Zap, ArrowRight, Download, Eye, FileText, Activity, Layers } from 'lucide-react';

const categories = [
  { id: 'all', name: 'CHEMISTRY KITS', icon: <FlaskConical size={24} /> },
  { id: 'physics', name: 'PHYSICS LABS', icon: <Atom size={24} /> },
  { id: 'biology', name: 'BIOLOGY MODELS', icon: <Dna size={24} /> },
  { id: 'micro', name: 'MICROSCOPES', icon: <Microscope size={24} /> },
  { id: 'safety', name: 'LAB SAFETY', icon: <Activity size={24} /> },
];

const scienceItems = [
  { id: 1, title: 'Modular Physics Bench', cat: 'Lab Furniture', desc: 'Integrated gas, water, and electrical supply with chemical-resistant surface.', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80', badge: 'Safety Plus' },
  { id: 2, title: 'The Human Anatomy V3', cat: 'Biology Models', desc: 'Medical-grade 3D anatomical models with AR-companion learning app.', img: 'https://images.unsplash.com/photo-1540344211158-99937399a9a3?w=800&q=80', badge: 'High-Detail' },
];

const Science = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* EXPERIMENTAL LAB HERO (Unique for Science) */}
        <section className="py-20 flex flex-col items-center text-center relative overflow-hidden bg-white/50 rounded-[80px] border border-gray-100 mb-20 shadow-sm">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sm-blue opacity-[0.03] rounded-full blur-[100px] -mr-96 -mt-96" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500 opacity-[0.03] rounded-full blur-[80px] -ml-64 -mb-64" />

           <div className="relative z-10 flex flex-col items-center">
              <span className="inline-block px-5 py-2 bg-emerald-500/10 text-emerald-600 font-black rounded-full mb-8 text-[11px] uppercase tracking-widest border border-emerald-500/20 active:translate-y-1 transition-transform cursor-pointer">
                 <Activity size={16} className="inline mr-2 animate-pulse" /> Experimental Discovery
              </span>
              <h1 className="text-6xl md:text-9xl font-black font-heading leading-none tracking-tighter text-gray-900 mb-10">
                 Science Is <br/> <span className="text-sm-blue italic font-serif uppercase tracking-tight">Pure</span> Fun.
              </h1>
              <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed font-medium">
                 From periodic tables on walls to professional-grade gas-fitted workbenches, we create spaces where curiosity triggers action.
              </p>

              {/* Category Icons Slider — AS PER SCREENSHOT 1 */}
              <div className="flex overflow-x-auto gap-12 pb-12 hide-scrollbar justify-start lg:justify-center w-full max-w-4xl">
                {categories.map((cat) => (
                  <button key={cat.id} className="flex flex-col items-center gap-4 group flex-none outline-none">
                    <div className="w-20 h-20 rounded-[35px] bg-white shadow-xl flex items-center justify-center text-gray-300 group-hover:bg-emerald-500 group-hover:text-white transition-all transform hover:rotate-3 active:scale-95 border-2 border-transparent group-hover:border-emerald-100">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest transition-colors">{cat.name}</span>
                  </button>
                ))}
              </div>
           </div>
        </section>

        {/* LAB-GRID SHOWCASE (Screenshot 4 Product Inspired Variation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
           {scienceItems.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-[60px] border border-gray-100 shadow-sm group hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 cursor-pointer overflow-hidden flex flex-col lg:flex-row gap-10 items-center">
                 <div className="w-full lg:w-[350px] h-[350px] rounded-[50px] overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute top-6 left-6">
                       <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black tracking-widest text-emerald-600 uppercase shadow-lg select-none">{item.badge}</span>
                    </div>
                 </div>
                 
                 <div className="flex-1 px-8 pb-10 lg:pb-0">
                    <span className="text-sm-blue font-black text-[11px] uppercase tracking-[0.3em] block mb-4">{item.cat}</span>
                    <h3 className="text-3xl font-black text-gray-900 font-heading mb-6 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-widest mb-10 h-10 overflow-hidden line-clamp-2">{item.desc}</p>
                    <div className="flex items-center gap-4">
                       <button className="flex-1 py-4 bg-gray-900 group-hover:bg-emerald-600 text-white font-black text-[10px] tracking-widest uppercase rounded-2xl transition-all shadow-xl shadow-gray-100 group-hover:shadow-emerald-100 active:scale-95">Download Info <Download size={14} className="inline ml-1" /></button>
                       <button className="w-14 h-14 bg-gray-50 group-hover:bg-white border border-gray-100 group-hover:border-emerald-100 rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-emerald-600 transition-all active:scale-95 shadow-sm">
                          <Eye size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* TECHNICAL SCIENCE BENTO (Screenshot 2 / Unique Element) */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-8 h-auto lg:h-[800px]">
           {/* Main Safety Feature */}
           <div className="lg:col-span-2 lg:row-span-2 bg-[#1A1A1A] rounded-[70px] p-12 lg:p-20 text-white relative overflow-hidden group shadow-3xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500 opacity-10 rounded-full blur-[100px] group-hover:opacity-30 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                 <div className="w-24 h-24 bg-emerald-500/20 backdrop-blur-md rounded-[35px] flex items-center justify-center text-emerald-400 border border-emerald-500/30 mb-12 shadow-2xl group-hover:scale-110 transition-transform">
                    <Activity size={48} />
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black font-heading leading-[0.9] mb-10 tracking-tighter">Zero-Leaking <br/> <span className="text-emerald-400 italic">Security.</span></h2>
                 <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-loose max-w-sm mb-12">
                    Our laboratory workbenches feature hospital-grade epoxy coating and fire-proof gas plumbing, ensuring maximum child safety during high-frequency experiments.
                 </p>
                 <div className="mt-auto flex gap-4">
                    <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-3xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl uppercase tracking-widest text-[10px] active:scale-95">Safety Handbook</button>
                 </div>
              </div>
           </div>

           {/* Small Stats Bento */}
           <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-[50px] p-10 shadow-sm border border-gray-50 flex flex-col justify-center items-center text-center group hover:shadow-2xl transition-all hover:bg-emerald-50 transition-colors">
              <span className="text-4xl font-black text-emerald-600 mb-2 font-heading">SEFA</span>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Certified Lab <br/> Furniture Member</p>
           </div>
           
           <div className="lg:col-span-1 lg:row-span-1 bg-sm-blue rounded-[50px] p-10 shadow-2xl flex flex-col justify-center items-center text-center text-white group hover:bg-emerald-600 transition-colors">
              <Beaker size={40} className="mb-6 opacity-30 group-hover:scale-125 transition-transform" />
              <h5 className="text-3xl font-black font-heading mb-1 tracking-tight leading-none uppercase">500+</h5>
              <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Kits Installed <br/> Pan-India</p>
           </div>

           {/* Bottom CTA Bento Row */}
           <div className="lg:col-span-2 lg:row-span-1 bg-white rounded-[50px] p-8 lg:p-12 border border-gray-100 shadow-sm flex items-center justify-between group overflow-hidden relative active:scale-[0.98] cursor-pointer">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                 <div className="w-16 h-16 bg-gray-900 rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:bg-emerald-600 transition-colors">
                    <FileText size={24} />
                 </div>
                 <div>
                    <h5 className="text-xl font-black text-gray-900 mb-1 leading-tight uppercase tracking-tight">Institutional Setup Guide</h5>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Step-by-step PDF Lab Blueprints</p>
                 </div>
              </div>
              <div className="w-14 h-14 border-2 border-gray-900 group-hover:bg-emerald-600 group-hover:border-emerald-600 text-gray-900 group-hover:text-white rounded-full flex items-center justify-center transition-all">
                 <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
           </div>

        </section>

      </div>
    </main>
  );
};

export default Science;
