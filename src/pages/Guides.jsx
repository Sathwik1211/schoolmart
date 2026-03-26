// src/pages/Guides.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Search, Download, FileText, ArrowRight, ArrowUpRight, Award, Shield, Layers, FileCheck } from 'lucide-react';

const categories = [
  { id: 'all', name: 'NEP 2020', icon: <BookOpen size={20} /> },
  { id: 'safety', name: 'SAFETY PROTOCOL', icon: <Shield size={20} /> },
  { id: 'technical', name: 'TECH SPECS', icon: <Layers size={20} /> },
];

const Guides = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HORIZONTAL HUB HERO - WIDE CONTENT WITH PACKED ACTION STRIP - UNIQUE LAYOUT */}
        <section className="pt-4 pb-6 flex flex-col gap-4">
           {/* LARGE WIDE STORY BLOCK - PACKED TITLE */}
           <div className="bg-gray-50 rounded-[25px] p-10 flex flex-col items-center text-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90">
                 <BookOpen size={12} className="inline mr-2" /> Knowledge Base 2025
              </div>
              <h1 className="text-4xl lg:text-6xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase max-w-2xl">
                 Strategy. <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">for</span> <br/> Compliance.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-sm leading-loose">
                 Deep-dive into our institutional strategy handbooks and regulatory frameworks.
              </p>
           </div>

           {/* HORIZONTAL ACTION STRIP - THREE PACKED CARDS BELOW WIDE HERO */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-gray-900 rounded-[25px] p-8 text-white flex flex-col justify-between group overflow-hidden relative border border-gray-800 shadow-2xl transition-transform hover:scale-[1.01]">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue mb-4">NEP 2024 <br/> Implementation Kit.</h3>
                 <button className="px-5 py-2.5 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all w-fit">Download PDF</button>
              </div>
              <div className="bg-white rounded-[25px] p-8 border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-sm-blue transition-all">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-sm-blue leading-relaxed">Certification <br/> & <br/> Standards BIFMA.</h3>
                 <Award className="text-gray-200 group-hover:text-sm-blue transition-colors self-end" size={24} />
              </div>
              <div className="bg-white rounded-[25px] p-8 border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-sm-blue transition-all">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-sm-blue leading-relaxed">Custom <br/> Institutional Portfolio.</h3>
                 <button className="px-5 py-2.5 bg-gray-50 text-gray-400 font-black rounded-full text-[8px] uppercase tracking-widest group-hover:bg-sm-blue group-hover:text-white transition-all w-fit mt-4">Request Curation</button>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['NEP 2020', 'SAFETY PROTOCOL', 'TECH SPECS', 'CERTIFICATIONS', 'SITE PLANNING'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors py-2 uppercase">{cat}</button>
             ))}
           </div>
        </section>

        {/* RESOURCE LISTING */}
        <section className="py-6 border-t border-gray-100">
           <div className="columns-1 md:columns-3 gap-4 space-y-4">
              {[
                { t: 'Safety Master-Guide', c: 'Logistics', img: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=600&q=80', h: 'h-[300px]' },
                { t: 'Spatial Planning', c: 'Design', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80', h: 'h-[400px]' },
                { t: 'Color Psychology', c: 'Interiors', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', h: 'h-[350px]' },
              ].map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[25px] shadow-sm group cursor-pointer ${work.h} border border-gray-100`}>
                    <img src={work.img} alt={work.t} className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xs font-black text-white uppercase">{work.t}</h3>
                 </div>
              ))}
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden group">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Regulatory <span className="text-sm-blue">Frameworks.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['NEA Guidelines', 'Site Surveys', 'Compliance Audit', 'Future Ready'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-sm-blue hover:text-white transition-all">
                       <Award size={14} className="text-sm-blue group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80" alt="Planning" className="w-full h-full object-cover" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Guides;
