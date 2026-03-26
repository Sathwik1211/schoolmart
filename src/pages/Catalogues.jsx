// src/pages/Catalogues.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Download, FileText, ArrowRight, ArrowUpRight, BookMarked, Layers, Library, Search } from 'lucide-react';

const catalogues = [
  { t: 'School Furniture 2025', c: 'Furniture', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80' },
  { t: 'Tech Infrastructure', c: 'Digital', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' },
  { t: 'Sports Surfaces', c: 'Sports', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80' },
  { t: 'Lab Equipment', c: 'Science', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80' },
];

const Catalogues = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* LIBRARY MOSAIC HERO - A DYNAMIC PACKED HUB - UNIQUE LAYOUT */}
        <section className="pt-4 pb-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
           {/* TEXT BLOCK (SPAN 4) - PACKED */}
           <div className="md:col-span-4 bg-gray-50 rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90">
                 <BookOpen size={12} className="inline mr-2 animate-pulse" /> Digital Library 2025
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase">
                 Digital <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Infrastructure.</span>
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Deep-dive into our comprehensive institutional catalogues and design handbooks.
              </p>
           </div>

           {/* ACTION STRIP (SPAN 8) - TWO HORIZONTAL BLOCKS - PACKED */}
           <div className="md:col-span-8 flex flex-col gap-3">
              <div className="bg-[#1A1A1A] rounded-[25px] p-8 text-white flex flex-col lg:flex-row justify-between items-center group overflow-hidden relative border border-gray-800 shadow-2xl transition-transform hover:scale-[1.01]">
                 <div className="flex-1">
                    <h3 className="text-[14px] font-black uppercase tracking-[0.2em] leading-relaxed text-sm-blue mb-2">2025 Master Catalogue.</h3>
                    <p className="text-white/40 text-[9px] uppercase tracking-widest leading-loose max-w-sm">Complete range of ergonomic campus solutions for modern schools.</p>
                 </div>
                 <div className="flex gap-4 mt-8 lg:mt-0">
                    <button className="px-6 py-3 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Instant PDF</button>
                    <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-full text-[8px] uppercase tracking-widest">Share Hub</button>
                 </div>
              </div>

              {/* RESOURCE TILES (SPAN 8) - THREE PACKED TILES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 h-full min-h-[150px]">
                 {['Technical Specs', 'Compliance Guide', 'Design Portfolio'].map((t, i) => (
                    <div key={i} className="bg-white rounded-[25px] p-6 border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-sm-blue transition-all cursor-pointer">
                       <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-sm-blue transition-colors leading-none mb-4">{t}</h4>
                       <ArrowUpRight className="text-gray-200 group-hover:text-sm-blue transition-colors" size={20} />
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['MASTER 2025', 'FURNITURE', 'INFRASTRUCTURE', 'RESOURCES', 'AUDIT INDICES'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors py-2 uppercase">{cat}</button>
             ))}
           </div>
        </section>

        {/* MASONRY DISPLAY - CLOSELY PACKED */}
        <section className="py-6 border-t border-gray-100">
           <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
              {catalogues.concat(catalogues).map((item, i) => (
                 <div key={i} className="break-inside-avoid bg-white p-2 rounded-[25px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl group cursor-pointer hover:-translate-y-2 relative overflow-hidden">
                    <div className="relative h-48 rounded-[20px] overflow-hidden mb-4">
                       <img src={item.img} alt={item.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" />
                       <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Download size={16} />
                       </div>
                    </div>
                    <div className="px-4 pb-4 text-center">
                       <h3 className="text-[14px] font-black text-gray-900 uppercase mb-4 leading-none">{item.t}</h3>
                       <button className="w-full py-3 bg-gray-50 text-gray-500 text-[8px] font-black uppercase tracking-widest rounded-xl hover:bg-sm-blue hover:text-white transition-all">Request Portfolio</button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="order-2 lg:order-1 bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden group">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Knowledge <span className="text-sm-blue">Infrastructure.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['Verified Specs', 'Compliance Audit', 'Future Ready', 'BIFMA Level-3'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-50 hover:bg-sm-blue hover:text-white transition-all">
                       <Layers size={14} className="text-sm-blue group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="order-1 lg:order-2 rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000&q=80" alt="Library" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Catalogues;
