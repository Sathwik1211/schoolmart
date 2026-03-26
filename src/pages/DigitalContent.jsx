// src/pages/DigitalContent.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Video, FileText, Globe, MousePointer2, Sparkles, ArrowRight, ArrowUpRight, Download, Eye, Zap, ShieldCheck, CheckCircle2, PlayCircle } from 'lucide-react';

const contents = [
  { id: 1, title: 'K-12 Interactive Library', cat: 'Curriculum', price: '₹45,000/yr', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80', badge: 'Premium' },
  { id: 2, title: 'VR History Modules', cat: 'Experience', price: '₹12,500', img: 'https://images.unsplash.com/photo-1592478411213-61fa3e467d53?w=800&q=80', badge: 'New' },
  { id: 3, title: 'Coding Bootcamp Suite', cat: 'Skills', price: '₹89,000', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', badge: 'Popular' },
];

const DigitalContent = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* CONTENT HERO - HIGH DENSITY WHITE THEME */}
        <section className="pt-4 pb-6 flex flex-col lg:flex-row gap-3 items-stretch">
           {/* STORY BLOCK */}
           <div className="flex-[2] bg-gray-50 rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sm-green/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-sm-green/10 transition-all duration-1000" />
              <div className="px-3 py-1 bg-sm-green text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90 relative z-10">
                 <Sparkles size={12} className="inline mr-2 animate-bounce" /> Adaptive Learning 2.0
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase relative z-10">
                 The <br/> <span className="text-sm-green italic font-serif lowercase tracking-normal">Infinite</span> <br/> Library.
              </h1>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest max-w-sm leading-loose relative z-10">
                 Curated digital assets and interactive curriculum mapped to global standards.
              </p>
              <div className="flex gap-4 mt-8 relative z-10">
                 <button className="px-6 py-3 bg-gray-900 text-white font-black rounded-full text-[8px] uppercase tracking-widest hover:bg-sm-green transition-all active:scale-95">Free Trial</button>
                 <button className="px-6 py-3 bg-white text-gray-400 border border-gray-100 font-black rounded-full text-[8px] uppercase tracking-widest">Pricing Plan</button>
              </div>
           </div>

           {/* FEATURES COLUMN */}
           <div className="flex-1 flex flex-col gap-3">
              <div className="flex-1 bg-gradient-to-br from-sm-green to-green-700 rounded-[25px] p-8 flex flex-col justify-between group overflow-hidden relative border border-white/10 shadow-xl">
                 <Video className="text-white/20 group-hover:text-white transition-all transform group-hover:scale-110" size={40} />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-green-50">High-Definition <br/> Streaming <br/> Content.</h3>
              </div>
              <div className="flex-1 bg-white rounded-[25px] p-8 flex flex-col justify-between group border border-gray-100 hover:border-sm-green transition-all shadow-lg">
                 <div className="flex items-center justify-between">
                    <span className="text-[24px] font-black font-heading text-sm-green uppercase tracking-tighter">Gamified</span>
                    <PlayCircle className="text-gray-300 group-hover:text-sm-green" size={24} />
                 </div>
                 <button className="w-full py-3 bg-gray-50 text-[8px] font-black text-gray-900 uppercase tracking-[0.3em] rounded-xl hover:bg-sm-green hover:text-white transition-all">Explore Game Design</button>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['K-12 BOOKS', 'VEDIC MATHS', 'CODING', 'ROBOTICS', 'LIFESKILLS'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-sm-green uppercase tracking-widest transition-colors py-2 uppercase">{cat}</button>
             ))}
           </div>
        </section>

        {/* CONTENT GRID */}
        <section className="py-6 border-t border-gray-50">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contents.map((item, i) => (
                 <div key={i} className="bg-white p-2 rounded-[25px] border border-gray-100 group hover:border-sm-green transition-all shadow-sm">
                    <div className="relative h-48 rounded-[20px] overflow-hidden mb-4">
                       <img src={item.img} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" alt={item.title} />
                       <div className="absolute top-4 right-4 animate-pulse">
                          <span className="px-3 py-1 bg-sm-green rounded-full text-[7px] font-black tracking-widest uppercase text-white">{item.badge}</span>
                       </div>
                    </div>
                    <div className="px-4 pb-4">
                       <h3 className="text-[14px] font-black uppercase text-gray-900 mb-2 leading-none group-hover:text-sm-green transition-colors line-clamp-1">{item.title}</h3>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black">{item.price}</span>
                          <button className="text-sm-green group-hover:translate-x-1 transition-transform"><ArrowUpRight size={18} /></button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* LICENSING INFO */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px] border border-gray-100 p-2">
              <img src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?w=1200&q=80" alt="Tech" className="w-full h-full object-cover rounded-[25px] grayscale brightness-95" />
           </div>
           
           <div className="bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden group">
              <h2 className="text-3xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Global <br/> <span className="text-sm-green">Licensing.</span></h2>
              <div className="grid grid-cols-1 gap-3">
                 {['International Content Rights', 'Offline / Local Server Hosting', 'Teacher Training & Support'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-5 rounded-xl border border-gray-50 group hover:border-sm-green transition-all text-gray-600">
                       <ShieldCheck size={16} className="text-sm-green" />
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

export default DigitalContent;
