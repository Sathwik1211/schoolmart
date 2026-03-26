// src/pages/Catalogues.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Download, FileText, ArrowRight, BookMarked, Layers, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

const catalogues = [
  {
    id: 1,
    title: 'School Furniture 2025',
    description: 'Complete range of ergonomic classroom, library, and office furniture solutions for modern campuses.',
    tags: ['Furniture', 'Best Seller', 'NEA Certified'],
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=80',
    color: 'bg-orange-500',
    size: '15 MB',
  },
  {
    id: 2,
    title: 'Digital Infrastructure Guide',
    description: 'Smart boards, interactive panels, and complete ed-tech solutions for high-performance classrooms.',
    tags: ['Tech', 'Innovation', 'FutureReady'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80',
    color: 'bg-blue-600',
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
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* FEATURED STORY SECTION — BENTO STYLE SLIDER */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 mb-12 h-[600px]">
          {/* Main Large Hero Feature (Screenshot 2 Inspired) */}
          <div className="flex-1 rounded-[40px] overflow-hidden relative group">
             <img 
               src={catalogues[0].img} 
               alt={catalogues[0].title} 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
             
             <div className="absolute top-8 left-8">
                <span className="px-5 py-2 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">New Release</span>
             </div>

             <div className="absolute bottom-12 left-12 max-w-xl">
                <h2 className="text-white text-4xl md:text-6xl font-black font-heading leading-tight mb-4 drop-shadow-xl">{catalogues[0].title}</h2>
                <p className="text-white/70 text-lg mb-8 line-clamp-2">{catalogues[0].description}</p>
                <div className="flex gap-4">
                   <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-full hover:bg-sm-gray transition-all shadow-xl uppercase tracking-widest text-sm flex items-center gap-2">
                     <Download size={18} /> Download Now
                   </button>
                   <button className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all">
                      <Share2 size={22} />
                   </button>
                </div>
             </div>
          </div>

          {/* Side Small Features (Screenshot 2 Style) */}
          <div className="hidden lg:flex flex-col gap-6 w-[400px]">
             {smallCatalogues.slice(0, 2).map((cat, i) => (
                <div key={i} className={`flex-1 rounded-[40px] overflow-hidden relative group p-8 flex flex-col justify-end ${i === 0 ? 'bg-blue-50' : 'bg-purple-50'}`}>
                   <img 
                     src={cat.img} 
                     alt={cat.title} 
                     className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                   />
                   <div className="relative z-10">
                      <span className="text-[10px] font-black text-gray-900/40 uppercase tracking-widest block mb-2">{cat.cat}</span>
                      <h3 className="text-2xl font-black text-gray-900 font-heading leading-tight mb-4">{cat.title}</h3>
                      <button className="text-sm font-black text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">Shop Now</button>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* RECENTLY LAUNCHED LIST (Screenshot 4 Inspired) */}
        <div className="mt-20">
           <div className="flex items-end justify-between mb-10 px-2">
              <div>
                 <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tight">Technical Datasheets</h2>
                 <p className="text-gray-500 text-sm mt-2">Explore 200+ detailed specifications and design guides</p>
              </div>
              <div className="flex gap-2">
                 <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:border-sm-blue hover:text-sm-blue transition-all"><ChevronLeft /></button>
                 <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:border-sm-blue hover:text-sm-blue transition-all"><ChevronRight /></button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {smallCatalogues.concat(smallCatalogues).map((item, i) => (
                 <div key={i} className="bg-white p-2 rounded-[30px] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl group cursor-pointer hover:-translate-y-2">
                    <div className="relative h-60 rounded-[25px] overflow-hidden mb-6">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Layers size={20} />
                       </div>
                    </div>
                    <div className="px-4 pb-6">
                       <div className="flex gap-2 mb-3">
                          <span className="text-[8px] font-black tracking-widest text-sm-blue uppercase py-1 px-2 bg-blue-50 rounded-md">New</span>
                          <span className="text-[8px] font-black tracking-widest text-gray-400 uppercase py-1 px-2 border border-gray-100 rounded-md">V.2025</span>
                       </div>
                       <h3 className="text-lg font-black text-gray-900 font-heading mb-4 group-hover:text-sm-blue transition-colors line-clamp-1">{item.title} Catalogue</h3>
                       <button className="w-full py-3 bg-gray-50 group-hover:bg-sm-blue group-hover:text-white text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">Download Info</button>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* STACKED LIST SECTION (Screenshot 3 Inspired) */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
               <div className="relative rounded-[60px] overflow-hidden shadow-2xl skew-y-1">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Consultation" className="w-full h-[600px] object-cover" />
                  <div className="absolute inset-0 bg-sm-blue/20" />
               </div>
               <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl shadow-blue-200 max-w-xs border border-blue-50 transform -rotate-2">
                  <div className="w-12 h-12 bg-sm-blue rounded-2xl flex items-center justify-center text-white mb-6">
                     <BookMarked size={24} />
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-2 leading-tight">Can't find what you need?</h4>
                  <p className="text-gray-500 text-xs mb-6">Our design team can curate a custom portfolio for your specific school project.</p>
                  <button className="text-xs font-black text-sm-blue uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">Request Custom Portolio <ArrowRight size={14} /></button>
               </div>
            </div>

            <div>
               <span className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 font-black text-[9px] uppercase tracking-widest rounded-full mb-6 shadow-sm">Exclusive Content</span>
               <h2 className="text-4xl md:text-6xl font-black text-gray-900 font-heading leading-tight mb-8">Architectural <br/> <span className="text-sm-blue">Lookbooks.</span></h2>
               <div className="space-y-6">
                  {[
                    { t: 'Interior Design Handbook', d: '2025 Trends in Color & Texture' },
                    { t: 'The Smart Campus Guide', d: 'Integrating Tech & Architecture' },
                    { t: 'Outdoor Learning Spaces', d: 'Landscape Design for Schools' },
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-6 p-6 rounded-[30px] border border-gray-100 hover:border-sm-blue hover:bg-blue-50/30 transition-all cursor-pointer group">
                        <div className="w-14 h-14 bg-gray-100 group-hover:bg-white rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-sm-blue shadow-sm group-hover:shadow-lg transition-all">
                           <FileText size={20} />
                        </div>
                        <div className="flex-1">
                           <h4 className="text-lg font-black text-gray-900 mb-1">{item.t}</h4>
                           <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{item.d}</p>
                        </div>
                        <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white group-hover:border-sm-blue transition-all">
                           <ChevronRight size={20} />
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

export default Catalogues;
