// src/pages/DigitalInfra.jsx
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Tablet, Terminal, Wifi, Cloud, ArrowRight, ArrowUpRight, Download, Eye, Zap, ShieldAlert, CheckCircle2, Cpu } from 'lucide-react';

const gadgets = [
  { id: 1, title: 'Smart Panel 75" 4K', cat: 'Interactivity', price: '₹1,45,000', img: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=800&q=80', badge: 'Tech Pick' },
  { id: 2, title: 'Student Tablet V2', cat: 'Mobility', price: '₹12,500', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', badge: 'Best Seller' },
  { id: 3, title: 'Mesh Router X', cat: 'Connectivity', price: '₹8,900', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', badge: 'High-Perf' },
];

const DigitalInfra = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* CYBER STRIP HERO - HIGH TECH LIGHT MODE - UNIQUE LAYOUT */}
        <section className="pt-4 pb-6 flex flex-col lg:flex-row gap-3 items-stretch">
           {/* STORY BLOCK (SPAN 8-EQUIVALENT) - PACKED */}
           <div className="flex-[2] bg-gray-50 rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sm-blue/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-sm-blue/10 transition-all duration-1000" />
              <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90 relative z-10">
                 <Zap size={12} className="inline mr-2 animate-pulse" /> Digital Revolution 2025
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase relative z-10">
                 The <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Smart</span> <br/> Campus.
              </h1>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest max-w-sm leading-loose relative z-10">
                 Future-proofing educational legacy with high-affinity hardware and cloud infrastructure.
              </p>
              <div className="flex gap-4 mt-8 relative z-10">
                 <button className="px-6 py-3 bg-gray-900 text-white font-black rounded-full text-[8px] uppercase tracking-widest hover:bg-sm-blue transition-all active:scale-95">Book Demo</button>
                 <button className="px-6 py-3 bg-white text-gray-400 border border-gray-100 font-black rounded-full text-[8px] uppercase tracking-widest">Specifications</button>
              </div>
           </div>

           {/* TECH STACK COLUMN - PACKED */}
           <div className="flex-1 flex flex-col gap-3">
              <div className="flex-1 bg-gradient-to-br from-sm-blue to-blue-700 rounded-[25px] p-8 flex flex-col justify-between group overflow-hidden relative border border-white/10 shadow-xl">
                 <Cpu className="text-white/20 group-hover:text-white transition-all transform group-hover:rotate-45" size={40} />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-blue-50">Integrated <br/> Cloud <br/> Dashboard.</h3>
              </div>
              <div className="flex-1 bg-white rounded-[25px] p-8 flex flex-col justify-between group border border-gray-100 hover:border-sm-blue transition-all shadow-lg">
                 <div className="flex items-center justify-between">
                    <span className="text-[24px] font-black font-heading text-sm-blue uppercase tracking-tighter">AI Ready</span>
                    <Terminal className="text-gray-300 group-hover:text-sm-blue" size={24} />
                 </div>
                 <button className="w-full py-3 bg-gray-50 text-[8px] font-black text-gray-900 uppercase tracking-[0.3em] rounded-xl hover:bg-sm-blue hover:text-white transition-all">Enroll Support</button>
              </div>
           </div>
        </section>

        {/* SIDEBAR LAYOUT SECTION */}
        <section className="py-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8">
           {/* LEFT SIDEBAR CATEGORY */}
           <aside className="lg:w-[240px] flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                 <div className="mb-6">
                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-4">INFRA ENGINE</h3>
                    <div className="w-8 h-1 bg-sm-blue rounded-full" />
                 </div>
                 {['INTERACTIVE', 'TABLETS', 'NETWORKING', 'CLOUD CLASS', 'SECURITY'].map((cat, i) => (
                    <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>{cat}</button>
                 ))}
                 
                 <div className="mt-12 p-6 bg-gray-900 rounded-[25px] border border-gray-800 text-white shadow-xl">
                    <span className="text-[8px] font-black text-sm-blue tracking-[0.2em] uppercase mb-4 block">System Health</span>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                       <span className="text-[10px] font-black uppercase">All Nodes Active</span>
                    </div>
                    <button className="w-full py-2 bg-white/10 hover:bg-sm-blue rounded-full text-[7px] font-black uppercase tracking-widest transition-all">Network Map</button>
                 </div>
              </div>
           </aside>

           {/* PRODUCTS CONTENT GRID */}
           <div className="flex-grow">
              <div className="flex justify-between items-end mb-8 px-2">
                 <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">NETWORK <span className="text-sm-blue italic font-serif lowercase tracking-normal text-lg ml-2">Solutions</span></h2>
                 <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active nodes in 5,200 institutions</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {gadgets.map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                       <div className="relative bg-gray-50 rounded-[25px] overflow-hidden transition-all duration-500 group-hover:shadow-xl h-[260px] border border-gray-300 p-2 shadow-sm">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-110 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100" />
                          <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[7px] font-black text-sm-blue uppercase tracking-widest shadow-sm border border-blue-50">
                             {item.badge}
                          </div>
                          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-10 h-10 rounded-full bg-sm-blue shadow-xl flex items-center justify-center text-white">
                                <ArrowRight size={18} />
                             </div>
                          </div>
                       </div>
                       <div className="mt-5 px-3">
                          <h3 className="text-[12px] font-black text-gray-900 uppercase tracking-tighter mb-1.5 leading-none group-hover:text-sm-blue transition-colors">{item.title}</h3>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-black text-sm-blue uppercase tracking-widest">{item.price}</span>
                             <div className="h-px flex-grow bg-gray-100" />
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px] border border-gray-300 p-2">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" alt="Tech" className="w-full h-full object-cover rounded-[25px] grayscale brightness-95" />
           </div>
           
           <div className="bg-white p-12 rounded-[30px] border border-gray-300 shadow-sm relative overflow-hidden group">
              <h2 className="text-3xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Enterprise <br/> <span className="text-sm-blue">Privacy Pro.</span></h2>
              <div className="grid grid-cols-1 gap-3">
                 {['Institutional Grade Encryption', 'Multi-Year Service Level Agreements', 'On-Site Training Programs'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-5 rounded-xl border border-gray-50 group hover:border-sm-blue transition-all text-gray-600">
                       <ShieldAlert size={16} className="text-sm-blue" />
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

export default DigitalInfra;
