// src/pages/Guides.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Search, Download, FileText, ArrowRight, ArrowUpRight, Award, Shield, Layers, FileCheck } from 'lucide-react';

const categories = [
  { id: 'all', name: 'NEP 2020', icon: <BookOpen size={20} /> },
  { id: 'safety', name: 'SAFETY PROTOCOL', icon: <Shield size={20} /> },
  { id: 'technical', name: 'TECH SPECS', icon: <Layers size={20} /> },
  { id: 'standards', name: 'CERTIFICATIONS', icon: <Award size={20} /> },
  { id: 'planning', name: 'SITE PLANNING', icon: <FileCheck size={20} /> },
];

const Guides = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED SPLIT-HUB HERO - THE USER PREFERRED THIS */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* STORY BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
                 <BookOpen size={12} className="inline mr-2" /> Knowledge Base 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Strategy. <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">for</span> <br/> Compliance.
              </h1>
              
              {/* Compact Search below title */}
              <div className="relative max-w-sm mt-4">
                 <input type="text" placeholder="Search strategy handbooks..." className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-100 focus:border-sm-blue outline-none text-[10px] font-bold uppercase tracking-widest transition-all" />
                 <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
           </div>

           {/* FEATURE HUB - RIGHT (High Contrast) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-sm-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">NEP 2024 <br/> Implementation <br/> Resource Kit.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Download PDF</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-white rounded-[30px] p-8 text-sm-blue flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Certification <br/> & <br/> Standards.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">BIFMA</span>
                    <Award className="text-gray-300 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-12 px-2">
           <div className="flex overflow-x-auto gap-8 pb-4 hide-scrollbar justify-start border-b border-gray-100">
             {categories.map((cat) => (
               <button key={cat.id} className="flex items-center gap-3 group flex-none py-2 px-6 hover:bg-white rounded-full transition-all border border-transparent hover:border-gray-50 shadow-sm hover:shadow-gray-100">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white transition-all">
                   {cat.icon}
                 </div>
                 <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest transition-colors">{cat.name}</span>
               </button>
             ))}
           </div>
        </section>

        {/* RESOURCE LISTING - MASONRY INSPIRED BY ARCHITECTURE */}
        <section className="py-12 border-t border-gray-100">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {[
                { t: 'Safety Master-Guide', c: 'Logistics', img: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=800&q=80', h: 'h-[400px]' },
                { t: 'Spatial Planning V2', c: 'Architecture', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', h: 'h-[500px]' },
                { t: 'Color Psychology', c: 'Interiors', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', h: 'h-[350px]' },
                { t: 'Furniture Selection', c: 'Strategy', img: 'https://images.unsplash.com/photo-1582213726894-46944743265d?w=800&q=80', h: 'h-[450px]' },
              ].map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[30px] shadow-sm group cursor-pointer ${work.h} border border-gray-100`}>
                    <img src={work.img} alt={work.t} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <span className="text-sm-blue font-black text-[8px] uppercase tracking-widest block mb-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">{work.c} Handbook</span>
                       <h3 className="text-xl font-black text-white font-heading leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-500 uppercase">{work.t}</h3>
                    </div>
                 </div>
              ))}

              {/* ACTION CALLOUT */}
              <div className="break-inside-avoid bg-sm-blue rounded-[30px] p-10 text-white flex flex-col justify-center min-h-[300px] shadow-2xl relative overflow-hidden group border border-sm-blue/20">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
                 <FileText size={32} className="text-white mb-6" />
                 <h4 className="text-2xl font-black font-heading mb-4 tracking-tighter uppercase leading-none">Custom <br/> Portfolio.</h4>
                 <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-loose mb-8">Request a curated strategy document for your school's specific infrastructure budget.</p>
                 <button className="px-6 py-3 bg-white text-sm-blue font-black rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-xl uppercase tracking-widest text-[8px] w-fit">Request Curation</button>
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="order-2 lg:order-1 relative">
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sm-blue rounded-full blur-[80px] opacity-10" />
              <div className="bg-white p-12 lg:p-16 rounded-[40px] shadow-sm border border-gray-100 relative z-10">
                 <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none tracking-tighter uppercase">Regulatory <br/> <span className="text-sm-blue">Frameworks.</span></h2>
                 <p className="text-gray-500 text-sm leading-loose mb-10 font-medium">
                    We keep stay updated with the latest NEA and MoE guidelines to ensure your institutional design remains compliant for the next decade.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {['200+ Guides', 'Site Surveys', 'Compliance Audit', 'Future Ready'].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-[9px] font-black text-gray-900 uppercase tracking-widest bg-gray-50 p-4 rounded-2xl group hover:bg-sm-blue hover:text-white transition-all">
                          <Award size={14} className="text-sm-blue group-hover:text-white" />
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-3xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80" alt="Planning" className="w-full h-[500px] object-cover" />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Guides;
