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
    <main className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED EXPERIMENTAL HERO - REMOVED CENTERED STARTING */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* EXPERIMENT BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-emerald-500/10 transition-colors" />
              <div className="px-3 py-1 bg-emerald-500 text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
                 <Activity size={12} className="inline mr-2 animate-pulse" /> Experimental Discovery
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Science Is <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Pure</span> <br/> Fun.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 From periodic tables to professional workbenches, we create spaces where curiosity triggers action.
              </p>
           </div>

           {/* SAFETY FEATURE HUB - RIGHT (High Contrast Inspired) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-emerald-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-emerald-400">Zero-Leaking <br/> Security <br/> Performance.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-emerald-500 text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 active:scale-95">Safety Manual</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-emerald-400 transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-emerald-50 rounded-[30px] p-8 text-emerald-800 flex flex-col justify-between group overflow-hidden relative border border-emerald-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Certified <br/> SEFA <br/> Institution.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Member</span>
                    <Layers className="text-emerald-300 group-hover:text-emerald-600 transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — AS PER REFERENCE */}
        <section className="pb-12 px-2">
           <div className="flex overflow-x-auto gap-10 pb-4 hide-scrollbar justify-start lg:justify-center border-b border-gray-100">
             {categories.map((cat) => (
               <button key={cat.id} className="flex items-center gap-3 group flex-none py-2 px-6 hover:bg-white rounded-full transition-all border border-transparent hover:border-gray-50 shadow-sm hover:shadow-gray-100">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                   {cat.icon}
                 </div>
                 <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest transition-colors">{cat.name}</span>
               </button>
             ))}
           </div>
        </section>

        {/* LAB-GRID SHOWCASE (Screenshot 4 Product Inspired Variation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
           {scienceItems.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-[40px] border border-gray-100 shadow-sm group hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col lg:flex-row gap-8 items-center">
                 <div className="w-full lg:w-[280px] h-[280px] rounded-[30px] overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                       <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black tracking-widest text-emerald-600 uppercase shadow-lg select-none">{item.badge}</span>
                    </div>
                 </div>
                 
                 <div className="flex-1 px-4 pb-8 lg:pb-0">
                    <span className="text-sm-blue font-black text-[9px] uppercase tracking-[0.2em] block mb-3">{item.cat}</span>
                    <h3 className="text-2xl font-black text-gray-900 font-heading mb-4 leading-tight group-hover:text-emerald-600 transition-colors uppercase">{item.title}</h3>
                    <p className="text-gray-400 text-[10px] font-bold leading-relaxed uppercase tracking-widest mb-8 h-8 overflow-hidden line-clamp-2">{item.desc}</p>
                    <div className="flex items-center gap-4">
                       <button className="flex-1 py-3.5 bg-gray-900 group-hover:bg-emerald-600 text-white font-black text-[9px] tracking-widest uppercase rounded-xl transition-all shadow-xl active:scale-95">Download Info <Download size={14} className="inline ml-1" /></button>
                       <button className="w-12 h-12 bg-gray-50 group-hover:bg-white border border-gray-100 group-hover:border-emerald-100 rounded-xl flex items-center justify-center text-gray-300 group-hover:text-emerald-600 transition-all active:scale-95 shadow-sm">
                          <Eye size={18} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* TECHNICAL SCIENCE BENTO (Screenshot 2 / Unique Element) */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6 h-auto lg:h-[600px]">
           {/* Main Safety Feature */}
           <div className="lg:col-span-2 lg:row-span-2 bg-[#1A1A1A] rounded-[40px] p-10 lg:p-14 text-white relative overflow-hidden group shadow-3xl">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500 opacity-10 rounded-full blur-[80px] group-hover:opacity-30 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                 <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-md rounded-[25px] flex items-center justify-center text-emerald-400 border border-emerald-500/30 mb-10 shadow-2xl group-hover:scale-110 transition-transform">
                    <Activity size={32} />
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black font-heading leading-[0.9] mb-8 tracking-tighter uppercase whitespace-pre-line">Zero-Leaking {"\n"} <span className="text-emerald-400 italic">Security.</span></h2>
                 <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-loose max-w-sm mb-10">
                    Our laboratory workbenches feature hospital-grade epoxy coating and fire-proof gas plumbing, ensuring maximum child safety.
                 </p>
                 <div className="mt-auto flex gap-4">
                    <button className="px-8 py-3 bg-white text-gray-900 font-black rounded-3xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl uppercase tracking-widest text-[9px] active:scale-95">Safety Handbook</button>
                 </div>
              </div>
           </div>

           {/* Small Stats Bento */}
           <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-[30px] p-8 shadow-sm border border-gray-50 flex flex-col justify-center items-center text-center group hover:shadow-2xl transition-all hover:bg-emerald-50 transition-colors">
              <span className="text-3xl font-black text-emerald-600 mb-2 font-heading uppercase">SEFA</span>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-tight">Certified Lab <br/> Furniture Member</p>
           </div>
           
           <div className="lg:col-span-1 lg:row-span-1 bg-sm-blue rounded-[30px] p-8 shadow-2xl flex flex-col justify-center items-center text-center text-white group hover:bg-emerald-600 transition-colors">
              <Beaker size={32} className="mb-4 opacity-30 group-hover:scale-110 transition-transform" />
              <h5 className="text-2xl font-black font-heading mb-1 uppercase">500+</h5>
              <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">Kits Installed <br/> Pan-India</p>
           </div>

           {/* Bottom CTA Bento Row */}
           <div className="lg:col-span-2 lg:row-span-1 bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm flex items-center justify-between group overflow-hidden relative active:scale-[0.98] cursor-pointer">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-emerald-600 transition-colors">
                    <FileText size={20} />
                 </div>
                 <div>
                    <h5 className="text-lg font-black text-gray-900 mb-1 leading-tight uppercase tracking-tight">Setup Guide</h5>
                    <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]">PDF Lab Blueprints</p>
                 </div>
              </div>
              <div className="w-10 h-10 border-2 border-gray-900 group-hover:bg-emerald-600 group-hover:border-emerald-600 text-gray-900 group-hover:text-white rounded-full flex items-center justify-center transition-all">
                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
           </div>

        </section>

      </div>
    </main>
  );
};

export default Science;
