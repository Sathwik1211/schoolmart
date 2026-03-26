// src/pages/DigitalInfra.jsx
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Tablet, Terminal, Wifi, Cloud, ArrowRight, Download, Eye, Zap, ShieldAlert } from 'lucide-react';

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
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 overflow-hidden">
      {/* TECH HERO SECTION (Screenshot 4 Product-heavy Inspired) */}
      <section className="px-4 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
         <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-sm-blue font-black rounded-full mb-8 text-[11px] uppercase tracking-widest shadow-sm hover:translate-x-1 transition-transform border border-blue-200 cursor-pointer">
               <Zap size={14} className="animate-pulse" /> Digital Revolution
            </span>
            <h1 className="text-5xl md:text-8xl font-black font-heading leading-[0.9] mb-10 tracking-tighter text-gray-900">
               Building <br/> The <span className="text-sm-blue uppercase italic">Smart</span> <br/> Campus.
            </h1>
            <p className="text-lg text-gray-500 max-w-lg mb-12">
               Future-proof your educational legacy with high-performance hardware and cloud-first infrastructure tailored for modern pedagogy.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
               <button className="px-10 py-5 bg-gray-900 text-white font-black rounded-3xl hover:bg-sm-blue transition-all shadow-xl uppercase tracking-widest text-[11px] flex items-center gap-3 active:scale-95">
                  Request Live Demo <Eye size={18} />
               </button>
            </div>
         </div>

         <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-[140px] opacity-20 -mr-32" />
            <div className="relative bg-[#1A1A1A] rounded-[60px] p-8 overflow-hidden shadow-3xl border border-white/5 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
               <img src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1000&q=80" alt="Smart Class" className="rounded-[40px] opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-12 left-12">
                  <div className="w-14 h-14 bg-sm-blue/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-sm-blue border border-sm-blue/30 shadow-2xl">
                     <Terminal size={32} />
                  </div>
               </div>
               <div className="mt-8">
                  <h4 className="text-white text-2xl font-black mb-2">Integrated Tech Stack</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">One Campus // One Dashboard</p>
               </div>
            </div>
         </div>
      </section>

      {/* DASHBOARD-STYLE GRID CARES (Screenshot 4 Inspired but Layout Different) */}
      <section className="py-24 px-4 bg-white rounded-t-[80px] shadow-sm">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16 border-b border-gray-100 pb-10">
               <div>
                  <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tight">Enterprise Infrastructure</h2>
                  <p className="text-gray-500 text-sm mt-3 font-medium">Selected hardware for institution-wide deployment.</p>
               </div>
               <div className="hidden md:flex gap-12 text-center overflow-x-auto pb-4 scroll-smooth">
                 {categories.map((cat) => (
                   <button key={cat.id} className="flex flex-col items-center gap-4 group flex-none outline-none">
                     <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-sm-blue group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:scale-110">
                       {cat.icon}
                     </div>
                     <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest">{cat.name}</span>
                   </button>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {gadgets.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-[50px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-3xl hover:-translate-y-4 group">
                     <div className="relative h-[300px] rounded-[40px] overflow-hidden mb-8">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-all opacity-0 group-hover:opacity-100" />
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                           <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black tracking-widest uppercase shadow-lg text-sm-blue border border-blue-50">{item.badge}</span>
                        </div>
                     </div>
                     <div className="px-6 pb-8">
                        <p className="text-sm-blue font-black text-[10px] uppercase tracking-widest mb-3">{item.cat}</p>
                        <h3 className="text-2xl font-black text-gray-900 font-heading mb-4 leading-tight group-hover:text-sm-blue transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-gray-500 text-[11px] leading-relaxed mb-8 h-10 overflow-hidden line-clamp-2">{item.desc}</p>
                        <button className="w-full py-4 bg-gray-50 group-hover:bg-sm-blue group-hover:text-white text-gray-400 group-hover:shadow-xl transition-all font-black text-[10px] uppercase tracking-widest rounded-3xl flex items-center justify-center gap-2">
                           View Specification <ArrowRight size={14} />
                        </button>
                     </div>
                  </div>
               ))}

               {/* UNIQUE CTA CARD (Bento Inspired) */}
               <div className="lg:col-span-1 bg-sm-blue rounded-[50px] p-12 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-center text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_40%_40%,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                  <div className="relative z-10">
                     <ShieldAlert size={60} className="mx-auto mb-8 text-white/40 group-hover:scale-125 transition-transform duration-700" />
                     <h4 className="text-3xl font-black mb-6">Security & <br/> Training.</h4>
                     <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-loose mb-10">All our hardware comes with <br/> 2-year on-site support and teachers' training.</p>
                     <button className="px-8 py-3 bg-white text-sm-blue font-black rounded-full hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-[10px]">Learn More</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* TECH SPECS STICKY LIST */}
      <section className="py-24 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl" />
               {[
                 { t: 'Interactive', img: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=400&q=80' },
                 { t: 'Software', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
                 { t: 'Security', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80' },
                 { t: 'Lab Kits', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80' }
               ].map((box, i) => (
                  <div key={i} className={`h-60 rounded-[40px] overflow-hidden relative group shadow-lg ${i % 2 !== 0 ? 'mt-10' : ''}`}>
                     <img src={box.img} alt={box.t} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                     <div className="absolute bottom-6 left-6">
                        <span className="text-xs font-black text-white px-3 py-1 bg-black/30 backdrop-blur-md rounded-lg uppercase tracking-widest">{box.t}</span>
                     </div>
                  </div>
               ))}
            </div>

            <div>
               <h2 className="text-5xl font-black text-gray-900 font-heading leading-tight mb-8 tracking-tighter">Enterprise Data <br/> & <span className="text-sm-blue">Privacy.</span></h2>
               <div className="space-y-6">
                  {['Institutional Grade Encryption', 'Multi-Year Service Level Agreements', 'On-Site Teacher Training Programs', 'Digital Twin Campus Planning'].map((item, i) => (
                     <div key={i} className="flex items-center gap-6 p-6 rounded-[30px] bg-white shadow-sm border border-gray-100 group hover:border-sm-blue transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-sm-blue group-hover:bg-sm-blue group-hover:text-white transition-all shadow-sm">
                           <Zap size={20} />
                        </div>
                        <span className="text-sm font-black text-gray-700 font-heading uppercase tracking-widest">{item}</span>
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
