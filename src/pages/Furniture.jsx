// src/pages/Furniture.jsx
import { useState } from 'react';
import { Sofa, GraduationCap, Library, FlaskConical, Building2, ArrowRight, Download, Filter, ChevronDown, CheckCircle2, Award } from 'lucide-react';
import QuickView from '../components/QuickView';

const products = [
  { id: 1, name: 'Dual Desk Series 500', category: 'Classroom', price: '₹4,500 - ₹6,500', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', badge: 'Best Seller' },
  { id: 2, name: 'Ergonomic Chair', category: 'Office', price: '₹3,200', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80' },
  { id: 3, name: 'Library Shelving', category: 'Library', price: '₹12,400', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80' },
  { id: 4, name: 'Lab Workstation', category: 'Labs', price: '₹18,500', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80' },
  { id: 5, name: 'Auditorium Seating', category: 'Auditorium', price: '₹5,800', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', badge: 'New Entry' },
  { id: 6, name: 'Cafeteria Table', category: 'Cafeteria', price: '₹9,200', img: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&q=80' },
  { id: 7, name: 'Kindergarten Pods', category: 'Classroom', price: '₹14,000', img: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&q=80', badge: 'Playful' },
  { id: 8, name: 'Stackable Chairs', category: 'Classroom', price: '₹1,500', img: 'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=800&q=80' },
  { id: 9, name: 'Executive Desk', category: 'Office', price: '₹28,000', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80' },
];

const Furniture = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <main className="min-h-screen bg-white pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* PRODUCT SHOWCASE HERO - UNIQUE LAYOUT - PACKED */}
        <section className="pt-4 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
           {/* IMAGE FOCUS (SPAN 7) */}
           <div className="lg:col-span-7 rounded-[25px] overflow-hidden relative shadow-lg group border border-gray-100 min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80" alt="Furniture" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-sm-blue/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end backdrop-blur-md bg-white/10 p-6 rounded-[20px] border border-white/20">
                 <div>
                    <span className="text-[8px] font-black text-white/60 uppercase tracking-widest block mb-2">Featured Series</span>
                    <h2 className="text-2xl font-black text-white uppercase leading-none">Modular <br/> Classroom Pro.</h2>
                 </div>
                 <button className="px-6 py-2.5 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-xl">Explore Series</button>
              </div>
           </div>

           {/* COLLECTION HUB (SPAN 5) - PACKED */}
           <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex-grow bg-gray-50 rounded-[25px] p-8 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
                 <div className="px-3 py-1 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-4 w-fit scale-90">
                    <Sofa size={12} className="inline mr-2" /> 2025 Collection
                 </div>
                 <h1 className="text-4xl font-black font-heading leading-tight mb-4 tracking-tighter text-gray-900 uppercase">
                    School <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Furniture</span> <br/> Solutions.
                 </h1>
                 <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                    1200+ ergonomic products designed for inspiring spaces.
                 </p>
              </div>

              {/* DOWNLOAD SUB-HUB - PACKED */}
              <div className="bg-gray-900 rounded-[25px] p-8 text-white flex items-center justify-between group overflow-hidden relative border border-gray-800 shadow-2xl transition-transform hover:scale-[1.02]">
                 <div className="flex flex-col gap-2">
                    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-sm-blue">The 2025 Lookbook.</h3>
                    <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">DOWNLOAD MASTER CATALOGUE</span>
                 </div>
                 <button className="p-4 bg-sm-blue text-white rounded-full shadow-lg relative z-10">
                    <Download size={20} />
                 </button>
              </div>
           </div>
        </section>

        {/* CATEGORY & PRODUCT SECTION - SIDEBAR LAYOUT */}
        <section className="py-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8">
           {/* LEFT SIDEBAR CATEGORY */}
           <aside className="lg:w-[240px] flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                 <div className="mb-6">
                    <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-4">CATEGORIES</h3>
                    <div className="w-8 h-1 bg-sm-blue rounded-full" />
                 </div>
                 {['CLASSROOM', 'LIBRARY', 'LABS', 'OFFICE', 'CAFETERIA', 'AUDITORIUM'].map((cat, i) => (
                    <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-between group ${i === 0 ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                       {cat}
                       {i === 0 && <ChevronDown size={14} className="-rotate-90" />}
                    </button>
                 ))}
                 
                 {/* QUICK FILTERS BELOW */}
                 <div className="mt-12 p-6 bg-gray-50 rounded-[25px] border border-gray-100">
                    <span className="text-[8px] font-black text-gray-400 tracking-[0.2em] uppercase mb-4 block">Refine Search</span>
                    <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                       <input type="checkbox" className="w-4 h-4 rounded-md border-gray-300 text-sm-blue focus:ring-sm-blue" />
                       <span className="text-[9px] font-bold text-gray-500 uppercase group-hover:text-gray-900 transition-colors">In Stock Only</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <input type="checkbox" className="w-4 h-4 rounded-md border-gray-300 text-sm-blue focus:ring-sm-blue" />
                       <span className="text-[9px] font-bold text-gray-500 uppercase group-hover:text-gray-900 transition-colors">NEP Compliant</span>
                    </label>
                 </div>
              </div>
           </aside>

           {/* PRODUCTS GRID - MAIN CONTENT */}
           <div className="flex-grow">
              <div className="flex justify-between items-end mb-4 px-2">
                 <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">CLASSROOM <span className="text-sm-blue italic font-serif lowercase tracking-normal text-lg ml-2">Collection</span></h2>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Showing 1-4 of 120 Products</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {products.map((item) => (
                    <div 
                      key={item.id} 
                      className="group cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                       <div className="relative bg-gray-50 rounded-[25px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl h-[280px] border border-gray-300 p-2 shadow-sm">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-110 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100" />
                          {item.badge && (
                             <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-sm-blue uppercase tracking-widest shadow-sm border border-blue-50">
                                {item.badge}
                             </div>
                          )}
                          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-10 h-10 rounded-full bg-sm-blue shadow-xl flex items-center justify-center text-white">
                                <ArrowRight size={18} />
                             </div>
                          </div>
                       </div>
                       <div className="mt-5 px-3">
                          <h3 className="text-base font-black text-gray-900 uppercase tracking-tighter mb-1.5 leading-none group-hover:text-sm-blue transition-colors">{item.name}</h3>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-sm-blue transition-colors">View Details →</span>
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
           <div className="bg-white p-12 rounded-[30px] border border-gray-300 shadow-sm relative group overflow-hidden">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Bespoke <br/> <span className="text-sm-blue">Planning Hub.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['Free Layout Design', 'Mockup Samples', 'Pan-India Delivery', 'BIFMA Level-3'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-50 hover:bg-sm-blue hover:text-white transition-all">
                       <CheckCircle2 size={14} className="text-sm-blue group-hover:text-white" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=80" alt="Planning" className="w-full h-full object-cover" />
           </div>
        </section>
      </div>

      <QuickView 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        data={selectedItem} 
      />
    </main>
  );
};

export default Furniture;
