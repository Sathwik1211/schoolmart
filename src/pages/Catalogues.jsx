// src/pages/Catalogues.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Download, FileText, ArrowRight, ArrowUpRight, BookMarked, Layers, ChevronLeft, ChevronRight, Share2, Library } from 'lucide-react';

const catalogues = [
  {
    id: 1,
    title: 'School Furniture 2025',
    description: 'Complete range of ergonomic classroom, library, and office furniture solutions for modern campuses.',
    cat: 'Furniture',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=80',
    size: '15 MB',
  },
  {
    id: 2,
    title: 'Digital Infrastructure Guide',
    description: 'Smart boards, interactive panels, and complete ed-tech solutions for high-performance classrooms.',
    cat: 'Tech',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80',
    size: '8 MB',
  },
];

const smallCatalogues = [
  { title: 'Sports Surfaces', cat: 'Sports', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80' },
  { title: 'Lab Equipment', cat: 'Science', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80' },
  { title: 'Kindergarten', cat: 'Design', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { title: 'Architecture', cat: 'Buildings', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80' },
];

const Catalogues = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED SPLIT-HUB HERO - THE USER PREFERRED THIS */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* STORY BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
                 <BookOpen size={12} className="inline mr-2 animate-pulse" /> Digital Library 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Knowledge <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">is</span> <br/> Infrastructure.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Deep-dive into our comprehensive institutional catalogues, design handbooks, and technical datasheets.
              </p>
           </div>

           {/* FEATURE HUB - RIGHT (High Contrast) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-sm-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">Instant <br/> 2025 Master <br/> Catalogue PDF.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Download Now</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-white rounded-[30px] p-8 text-sm-blue flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Technical <br/> Datasheets <br/> V.2025.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Library</span>
                    <Layers className="text-blue-300 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-12 px-2">
           <div className="flex overflow-x-auto gap-12 pb-4 hide-scrollbar justify-start border-b border-gray-100">
             {smallCatalogues.map((cat, i) => (
               <div key={i} className="flex flex-col items-start gap-1 group flex-none py-2 px-4 cursor-pointer active:scale-95 transition-all">
                 <h4 className="text-[14px] font-black text-gray-900 uppercase tracking-tighter transition-colors group-hover:text-sm-blue">{cat.title}</h4>
                 <span className="text-[7px] font-black text-gray-400 uppercase tracking-[0.3em]">{cat.cat} RELEASE</span>
               </div>
             ))}
           </div>
        </section>

        {/* MASONRY DISPLAY - INSPIRED BY ARCHITECTURE PAGE */}
        <section className="py-12 border-t border-gray-100">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {smallCatalogues.concat(smallCatalogues).map((item, i) => (
                 <div key={i} className="break-inside-avoid bg-white p-2 rounded-[30px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl group cursor-pointer hover:-translate-y-2 relative overflow-hidden">
                    <div className="relative h-64 rounded-[25px] overflow-hidden mb-6">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                       <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Download size={18} />
                       </div>
                    </div>
                    <div className="px-6 pb-4">
                       <div className="flex gap-2 mb-3">
                          <span className="text-[7px] font-black tracking-widest text-sm-blue uppercase py-1 px-2 bg-blue-50 rounded-md">New Release</span>
                          <span className="text-[7px] font-black tracking-widest text-gray-400 uppercase py-1 px-2 border border-gray-100 rounded-md">V.2025</span>
                       </div>
                       <h3 className="text-xl font-black text-gray-900 font-heading mb-6 group-hover:text-sm-blue transition-colors leading-none uppercase">{item.title}</h3>
                       <button className="w-full py-4 bg-gray-50 group-hover:bg-sm-blue group-hover:text-white text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all">Request Portfolio</button>
                    </div>
                 </div>
              ))}

              {/* ACTION CALLOUT */}
              <div className="break-inside-avoid bg-[#1A1A1A] rounded-[30px] p-10 text-white flex flex-col justify-center min-h-[300px] shadow-2xl relative overflow-hidden group">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-sm-blue blur-3xl opacity-20" />
                 <BookMarked size={32} className="text-sm-blue mb-6" />
                 <h4 className="text-2xl font-black font-heading mb-4 tracking-tighter uppercase leading-none">Curated <br/> Portfolios.</h4>
                 <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest leading-loose mb-8">Request a custom proposal for your institution's specific requirements.</p>
                 <button className="px-6 py-3 bg-sm-blue text-white font-black rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-xl uppercase tracking-widest text-[8px] w-fit">Get Custom PDF</button>
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-gray-100 mt-20">
           <div className="order-2 lg:order-1 relative">
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sm-blue rounded-full blur-[80px] opacity-10" />
              <div className="bg-white p-12 lg:p-16 rounded-[40px] shadow-sm border border-gray-100 relative z-10">
                 <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none tracking-tighter uppercase">Knowledge <br/> <span className="text-sm-blue">Infrastructure.</span></h2>
                 <p className="text-gray-500 text-sm leading-loose mb-10 font-medium">
                    We treat cataloging as a science. Every specification is verified against international safety and ergonomic standards to ensure you make the right choice.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {['200+ Palettes', 'UV Resistant', 'Odourless', 'BIFMA Level-3'].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-[9px] font-black text-gray-900 uppercase tracking-widest bg-gray-50 p-4 rounded-xl group hover:bg-gray-900 hover:text-white transition-all">
                          <Layers size={14} className="text-sm-blue group-hover:text-white" />
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-3xl">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000&q=80" alt="Library Background" className="w-full h-[500px] object-cover contrast-125 brightness-75 grayscale group-hover:grayscale-0 transition-all duration-1000" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Catalogues;
