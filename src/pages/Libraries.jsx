// src/pages/Libraries.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Library as LibraryIcon, Search, FileText, Globe, MousePointer2, Sparkles, ArrowRight, ArrowUpRight, Download, Eye, Zap, ShieldCheck, CheckCircle2, PlayCircle } from 'lucide-react';

const libraryCollections = [
  { id: 1, title: 'K-12 Reference Library', cat: 'Academic', price: 'High-Density Shelving', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80', badge: 'Standard' },
  { id: 2, title: 'Digital Resource Kiosks', cat: 'Modern Tech', price: 'Integrated 4K Screens', img: 'https://images.unsplash.com/photo-1592478411213-61fa3e467d53?w=800&q=80', badge: 'Tech-Infused' },
  { id: 3, title: 'Collaborative Reading Zones', cat: 'Furniture', price: 'Acoustic Focused', img: 'https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?w=800&q=80', badge: 'Popular' },
];

const Libraries = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* LIBRARY HERO - HIGH DENSITY WHITE THEME */}
        <section className="pt-4 pb-6 flex flex-col lg:flex-row gap-3 items-stretch">
           {/* STORY BLOCK */}
           <div className="flex-[2] bg-gray-50 rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sm-blue/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-sm-blue/10 transition-all duration-1000" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90 relative z-10">
                 <LibraryIcon size={12} className="inline mr-2 animate-bounce" /> Modern Knowledge Hub
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase relative z-10">
                 The <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Future</span> <br/> Library.
              </h1>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest max-w-sm leading-loose relative z-10">
                 Merging physical collections with high-speed digital accessibility and ergonomic study zones.
              </p>
              <div className="flex gap-4 mt-8 relative z-10">
                 <button className="px-6 py-3 bg-gray-900 text-white font-black rounded-full text-[8px] uppercase tracking-widest hover:bg-sm-blue transition-all active:scale-95">Explore Designs</button>
                 <button className="px-6 py-3 bg-white text-gray-400 border border-gray-100 font-black rounded-full text-[8px] uppercase tracking-widest">Catalog Download</button>
              </div>
           </div>

           {/* FEATURES COLUMN */}
           <div className="flex-1 flex flex-col gap-3">
              <div className="flex-1 bg-gradient-to-br from-sm-green to-emerald-700 rounded-[25px] p-8 flex flex-col justify-between group overflow-hidden relative border border-white/10 shadow-xl">
                 <Search className="text-white/20 group-hover:text-white transition-all transform group-hover:scale-110" size={40} />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-emerald-50">Unified <br/> Discovery <br/> Platforms.</h3>
              </div>
              <div className="flex-1 bg-white rounded-[25px] p-8 flex flex-col justify-between group border border-gray-100 hover:border-sm-blue transition-all shadow-lg">
                 <div className="flex items-center justify-between">
                    <span className="text-[24px] font-black font-heading text-sm-blue uppercase tracking-tighter">Zones</span>
                    <Sparkles className="text-gray-300 group-hover:text-sm-blue" size={24} />
                 </div>
                 <button className="w-full py-3 bg-gray-50 text-[8px] font-black text-gray-900 uppercase tracking-[0.3em] rounded-xl hover:bg-sm-blue hover:text-white transition-all">Acoustic Logic</button>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['SHELVING', 'E-KIOSKS', 'FURNITURE', 'ARCHIVES', 'READING TECH'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-sm-blue uppercase tracking-widest transition-colors py-2 uppercase">{cat}</button>
             ))}
           </div>
        </section>

        {/* CONTENT GRID */}
        <section className="py-6 border-t border-gray-50">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {libraryCollections.map((item, i) => (
                 <div key={i} className="bg-white p-2 rounded-[25px] border border-gray-100 group hover:border-sm-blue transition-all shadow-sm">
                    <div className="relative h-48 rounded-[20px] overflow-hidden mb-4">
                       <img src={item.img} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" alt={item.title} />
                       <div className="absolute top-4 right-4 animate-pulse">
                          <span className="px-3 py-1 bg-sm-blue rounded-full text-[7px] font-black tracking-widest uppercase text-white">{item.badge}</span>
                       </div>
                    </div>
                    <div className="px-4 pb-4">
                       <h3 className="text-[14px] font-black uppercase text-gray-900 mb-2 leading-none group-hover:text-sm-blue transition-colors line-clamp-1">{item.title}</h3>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black leading-none">{item.price}</span>
                          <button className="text-sm-blue group-hover:translate-x-1 transition-transform"><ArrowUpRight size={18} /></button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* LICENSING INFO */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px] border border-gray-100 p-2">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80" alt="Tech" className="w-full h-full object-cover rounded-[25px] grayscale brightness-95" />
           </div>
           
           <div className="bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden group">
              <h2 className="text-3xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Space <br/> <span className="text-sm-blue">Efficiency.</span></h2>
              <div className="grid grid-cols-1 gap-3">
                 {['Institutional Cataloging Standards', 'Offline Digital Archive Servers', 'End-to-End Installation'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-5 rounded-xl border border-gray-50 group hover:border-sm-blue transition-all text-gray-600">
                       <CheckCircle2 size={16} className="text-sm-blue" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

export default Libraries;
