// src/pages/Furniture.jsx
import { Link } from 'react-router-dom';
import { Sofa, GraduationCap, Library, FlaskConical, Building2, ArrowRight, Download, Filter, ChevronDown, CheckCircle2, Award } from 'lucide-react';

const products = [
  { id: 1, name: 'Dual Desk Series 500', category: 'Classroom', price: '₹4,500 - ₹6,500', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', badge: 'Best Seller' },
  { id: 2, name: 'Ergonomic Chair', category: 'Office', price: '₹3,200', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80' },
  { id: 3, name: 'Library Shelving', category: 'Library', price: '₹12,400', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80' },
  { id: 4, name: 'Lab Workstation', category: 'Labs', price: '₹18,500', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80' },
];

const Furniture = () => {
  return (
    <main className="min-h-screen bg-white pt-16 pb-10">
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

        {/* Compact Strip Menu — Standardized */}
        <section className="pb-6 px-2">
           <div className="flex overflow-x-auto gap-12 pb-2 hide-scrollbar justify-start border-b border-gray-100">
             {['CLASSROOM', 'LIBRARY', 'LABS', 'OFFICE', 'CAFETERIA', 'AUDITORIUM'].map((cat, i) => (
                <button key={i} className="flex-none text-[8px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors py-2 uppercase">{cat}</button>
             ))}
           </div>
        </section>

        {/* PRODUCTS GRID - CLOSELY PACKED */}
        <section className="py-6 border-t border-gray-100">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {products.map((item) => (
               <div key={item.id} className="group cursor-pointer">
                 <div className="relative bg-gray-50 rounded-[20px] overflow-hidden transition-all duration-500 group-hover:shadow-xl h-[250px] border border-gray-100">
                   <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   {item.badge && (
                     <div className="absolute top-4 left-4 px-2 py-1 bg-white rounded-full text-[7px] font-black text-sm-blue uppercase tracking-widest shadow-sm border border-blue-50">
                       {item.badge}
                     </div>
                   )}
                   <div className="absolute inset-0 bg-sm-blue/0 group-hover:bg-sm-blue/10 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-sm-blue">
                         <ArrowRight size={16} />
                      </div>
                   </div>
                 </div>
                 <div className="mt-3 px-1 text-center">
                   <h3 className="text-[12px] font-black text-gray-800 uppercase tracking-tighter mb-1 leading-none">{item.name}</h3>
                   <span className="text-[8px] font-black text-sm-blue uppercase tracking-widest">{item.price}</span>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* INFO SPLIT GRID */}
        <section className="py-6 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
           <div className="bg-white p-12 rounded-[30px] border border-gray-100 shadow-sm relative group overflow-hidden">
              <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-none uppercase tracking-tighter">Bespoke <br/> <span className="text-sm-blue">Planning Hub.</span></h2>
              <div className="grid grid-cols-2 gap-3">
                 {['Free Layout Design', 'Mockup Samples', 'Pan-India Delivery', 'BIFMA Level-3'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-50 hover:bg-sm-blue hover:text-white transition-all">
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
    </main>
  );
};

export default Furniture;
