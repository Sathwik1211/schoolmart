// src/pages/SchoolDesigns.jsx
import { Link } from 'react-router-dom';
import { Palette, Compass, Pencil, Lightbulb, Layout, ArrowRight, Eye, Stars, Download, Layers } from 'lucide-react';

const categories = [
  { id: 'all', name: 'COLOR SCHEMES', icon: <Palette size={24} /> },
  { id: 'spatial', name: 'SPATIAL PLANNING', icon: <Compass size={24} /> },
  { id: 'graphic', name: 'WALL GRAPHICS', icon: <Pencil size={24} /> },
  { id: 'lighting', name: 'SMART LIGHTING', icon: <Lightbulb size={24} /> },
  { id: 'flooring', name: 'SAFE FLOORING', icon: <Layout size={24} /> },
];

const designWorks = [
  { title: 'The Bio-Atrium', cat: 'Interior Strategy', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', height: 'h-[500px]' },
  { title: 'Cyber-Punk STEM Lab', cat: 'Digital Experience', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80', height: 'h-[400px]' },
  { title: 'Pastel Primary Wing', cat: 'Color Psychology', img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80', height: 'h-[600px]' },
  { title: 'The Zen Library', cat: 'Adaptive Spaces', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80', height: 'h-[450px]' },
  { title: 'Infinity Sports Arena', cat: 'Kinetic Design', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', height: 'h-[550px]' },
];

const SchoolDesigns = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* CREATIVE MASONRY HERO SECTION (Unique for Designs) */}
        <section className="py-12 flex flex-col items-center text-center">
           <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="px-4 py-1.5 bg-yellow-400 text-gray-900 font-black rounded-full text-[9px] uppercase tracking-[0.2em] mb-6 shadow-lg relative z-10">
                 <Stars size={14} className="inline mr-2 animate-spin" /> Design Innovation 2024
              </div>
           </div>
           <h1 className="text-4xl md:text-6xl font-black font-heading leading-[0.9] mb-8 tracking-tighter text-gray-900 uppercase">
              Imagine <br/> <span className="text-sm-blue uppercase italic font-serif">Infinite</span> <br/> Learning.
           </h1>
           <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-medium">
              We create non-linear, adaptive spaces where students don't just sit—they explore, discover, and flourish.
           </p>

           {/* Category Icons Slider — AS PER SCREENSHOT 1 */}
           <div className="flex overflow-x-auto gap-8 pb-10 hide-scrollbar justify-start lg:justify-center w-full">
             {categories.map((cat) => (
               <button key={cat.id} className="flex flex-col items-center gap-3 group flex-none">
                 <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-300 group-hover:bg-gray-900 group-hover:text-white transition-all transform hover:-translate-y-2 border-2 border-transparent group-hover:border-sm-blue">
                   {cat.icon}
                 </div>
                 <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest">{cat.name}</span>
               </button>
             ))}
           </div>
        </section>

        {/* STAGGERED MASONRY GALLERY (Screenshot 3 Flow Inspired but for Designs) */}
        <section className="py-12 border-t border-gray-100">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {designWorks.map((work, i) => (
                 <div key={i} className={`break-inside-avoid relative overflow-hidden rounded-[30px] shadow-xl group cursor-pointer ${work.height}`}>
                    <img src={work.img} alt={work.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                       <Download size={16} />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                       <span className="text-sm-blue font-black text-[8px] uppercase tracking-widest block mb-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">{work.cat}</span>
                       <h3 className="text-xl font-black text-white font-heading leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-500 uppercase">{work.title}</h3>
                       <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-200">Case Study <ArrowRight size={10} className="inline ml-1" /></p>
                    </div>
                 </div>
              ))}

              {/* UNIQUE BENTO CALL-TO-ACTION IN MASONRY */}
              <div className="break-inside-avoid bg-gray-900 rounded-[30px] p-8 text-white flex flex-col justify-center min-h-[300px] relative overflow-hidden group">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-sm-blue blur-3xl opacity-20 group-hover:opacity-60 transition-opacity" />
                 <Layout size={32} className="text-sm-blue mb-6 animate-pulse" />
                 <h4 className="text-xl font-black font-heading mb-4 tracking-tight uppercase">Bespoke <br/> Space Design.</h4>
                 <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest leading-loose mb-8">Our architects specialize in spatial design.</p>
                 <button className="px-6 py-2.5 bg-sm-blue text-white font-black rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-xl uppercase tracking-widest text-[8px] w-fit">Request Pitch</button>
              </div>
           </div>
        </section>

        {/* INFORMATIONAL BLOCK (Screenshot 2 / Bento Style) */}
        <section className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
           <div className="order-2 lg:order-1 relative">
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sm-blue rounded-full blur-[80px] opacity-10" />
              <div className="bg-white p-10 lg:p-14 rounded-[40px] shadow-3xl border border-gray-50 relative z-10">
                 <div className="w-16 h-1.5 bg-sm-blue rounded-full mb-8" />
                 <h2 className="text-3xl font-black text-gray-900 font-heading mb-6 leading-tight tracking-tighter uppercase">Psychology <br/> of <span className="text-sm-blue">Colors.</span></h2>
                 <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">
                    We engineer moods. From focus-inducing blues to creativity-sparking yellows.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {['200+ Palettes', 'UV Resistant', 'Odourless', 'Texture Ready'].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-[9px] font-black text-gray-900 uppercase tracking-widest bg-gray-50 p-3.5 rounded-xl group hover:bg-gray-900 hover:text-white transition-all">
                          <Layers size={14} className="text-sm-blue group-hover:text-white" />
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           <div className="order-1 lg:order-2">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-1000">
                 <img src="https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1000&q=80" alt="Atmosphere" className="w-full h-[400px] object-cover" />
                 <div className="absolute inset-0 bg-blue-900/10 backdrop-contrast-125" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-sm-blue transition-all">
                       <Eye size={28} />
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

export default SchoolDesigns;
