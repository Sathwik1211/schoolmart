// src/pages/DigitalInfra.jsx
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Tablet, Terminal, Wifi, Cloud, ArrowRight, ArrowUpRight, Download, Eye, Zap, ShieldAlert } from 'lucide-react';

const categories = [
  { id: 'all', name: 'INTERACTIVE PANELS', icon: <Monitor size={24} /> },
  { id: 'tablets', name: 'TABLETS & LAPS', icon: <Tablet size={24} /> },
  { id: 'network', name: 'SMART WIFI', icon: <Wifi size={24} /> },
  { id: 'cloud', name: 'CLOUD CLASS', icon: <Cloud size={24} /> },
  { id: 'ai', name: 'AI TOOLS', icon: <Terminal size={24} /> },
];

const gadgets = [
  { id: 1, title: 'Smart Panel 75" 4K', cat: 'Interactivity', desc: '40-point touch, built-in Android 13, and 5-year warranty.', img: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=800&q=80', badge: 'Tech Pick' },
  { id: 2, title: 'Student Tablet V2', cat: 'Mobility', desc: 'Pre-loaded with educational OS and rugged shockproof case.', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', badge: 'Best Seller' },
  { id: 3, title: 'Mesh Router X', cat: 'Connectivity', desc: 'Seamless campus-wide high-speed internet for 500+ users.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', badge: 'High-Perf' },
];

const DigitalInfra = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-12 overflow-hidden">
      {/* MODERN SMART HUB HERO - REMOVED GENERIC STARTING */}
      <section className="px-4 pt-8 pb-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
         {/* TECH BLOCK - LEFT */}
         <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
            <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
               <Zap size={12} className="inline mr-2 animate-pulse" /> Digital Revolution
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
               Building <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">the</span> <br/> Smart Campus.
            </h1>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
               Future-proofing educational legacy with hardware & cloud infrastructure tailored for modern pedagogy.
            </p>
         </div>

         {/* INFRA FEATURE HUB - RIGHT (Premium Inspired) */}
         <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
               <div className="absolute inset-0 bg-sm-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">Integrated <br/> Tech Stack <br/> Dashboard.</h3>
               <div className="flex items-center justify-between mt-8 relative z-10">
                  <button className="px-5 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95">Live Demo</button>
                  <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
               </div>
            </div>
            <div className="bg-blue-50 rounded-[30px] p-8 text-sm-blue flex flex-col justify-between group overflow-hidden relative border border-blue-100">
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Enterprise <br/> Infrastructure <br/> Scale.</h3>
               <div className="flex items-center justify-between mt-8 relative z-10">
                  <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Support</span>
                  <Tablet className="text-blue-300 group-hover:text-sm-blue transition-colors" size={24} />
               </div>
            </div>
         </div>
      </section>

      {/* DASHBOARD-STYLE GRID CARES (Screenshot 4 Inspired but Layout Different) */}
      <section className="py-14 px-4 bg-white rounded-t-[40px] shadow-sm">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
               <div>
                  <h2 className="text-2xl font-black text-gray-900 font-heading tracking-tight uppercase">Enterprise Infrastructure</h2>
                  <p className="text-gray-500 text-xs mt-2 font-medium">Selected hardware for institution-wide deployment.</p>
               </div>
               <div className="hidden md:flex gap-8 text-center overflow-x-auto pb-4 scroll-smooth">
                 {categories.map((cat) => (
                   <button key={cat.id} className="flex flex-col items-center gap-3 group flex-none outline-none">
                     <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-sm-blue group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:scale-110 border border-gray-100">
                       {cat.icon}
                     </div>
                     <span className="text-[7px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest">{cat.name}</span>
                   </button>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {gadgets.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-[40px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group cursor-pointer overflow-hidden flex flex-col relative">
                     <div className="relative h-60 rounded-[30px] overflow-hidden mb-6">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-all opacity-0 group-hover:opacity-100" />
                        <div className="absolute top-4 right-4 animate-bounce">
                           <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black tracking-widest uppercase shadow-lg text-sm-blue border border-blue-50">{item.badge}</span>
                        </div>
                     </div>
                     <div className="px-4 pb-6 flex-1 flex flex-col">
                        <p className="text-sm-blue font-black text-[9px] uppercase tracking-widest mb-2">{item.cat}</p>
                        <h3 className="text-xl font-black text-gray-900 font-heading mb-3 leading-tight group-hover:text-sm-blue transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-gray-500 text-[10px] leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">{item.desc}</p>
                        <button className="w-full py-3.5 bg-gray-50 group-hover:bg-sm-blue group-hover:text-white text-gray-400 group-hover:shadow-xl transition-all font-black text-[9px] uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2">
                           View Specification <ArrowRight size={14} />
                        </button>
                     </div>
                  </div>
               ))}

               {/* UNIQUE CTA CARD (Bento Inspired) */}
               <div className="lg:col-span-1 bg-sm-blue rounded-[40px] p-10 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-center text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_40%_40%,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                  <div className="relative z-10">
                     <ShieldAlert size={48} className="mx-auto mb-6 text-white/40 group-hover:scale-110 transition-transform duration-700" />
                     <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Security & <br/> Training.</h4>
                     <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest leading-loose mb-8">All our hardware comes with <br/> 2-year support and training.</p>
                     <button className="px-8 py-3 bg-white text-sm-blue font-black rounded-full hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-[9px]">Learn More</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* TECH SPECS STICKY LIST */}
      <section className="py-16 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-5 relative pb-10">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full blur-3xl" />
               {[
                 { t: 'Interactive', img: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=400&q=80' },
                 { t: 'Software', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
                 { t: 'Security', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80' },
                 { t: 'Lab Kits', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80' }
               ].map((box, i) => (
                  <div key={i} className={`h-48 rounded-[30px] overflow-hidden relative group shadow-sm ${i % 2 !== 0 ? 'mt-8' : ''}`}>
                     <img src={box.img} alt={box.t} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                     <div className="absolute bottom-4 left-4">
                        <span className="text-[9px] font-black text-white px-3 py-1 bg-black/30 backdrop-blur-md rounded-lg uppercase tracking-widest">{box.t}</span>
                     </div>
                  </div>
               ))}
            </div>

            <div>
               <h2 className="text-3xl md:text-5xl font-black text-gray-900 font-heading leading-tight mb-8 tracking-tighter uppercase">Enterprise Data <br/> & <span className="text-sm-blue">Privacy.</span></h2>
               <div className="space-y-4">
                  {['Institutional Grade Encryption', 'Multi-Year Service Level Agreements', 'On-Site Training Programs', 'Digital Twin Campus Planning'].map((item, i) => (
                     <div key={i} className="flex items-center gap-5 p-5 rounded-[25px] bg-white shadow-sm border border-gray-100 group hover:border-sm-blue transition-all cursor-pointer active:scale-95">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-sm-blue group-hover:bg-sm-blue group-hover:text-white transition-all">
                           <Zap size={18} />
                        </div>
                        <span className="text-[11px] font-black text-gray-700 font-heading uppercase tracking-widest">{item}</span>
                        <div className="ml-auto w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:translate-x-1 transition-all">
                           <ArrowRight size={14} />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default DigitalInfra;
