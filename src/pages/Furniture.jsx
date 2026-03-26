// src/pages/Furniture.jsx
import { Link } from 'react-router-dom';
import { Sofa, GraduationCap, Library, FlaskConical, Building2, ArrowRight, Download, Filter, ChevronDown } from 'lucide-react';

const categories = [
  { id: 'all', name: 'ALL FURNITURE', icon: <Sofa size={24} /> },
  { id: 'classroom', name: 'CLASSROOM', icon: <GraduationCap size={24} /> },
  { id: 'library', name: 'LIBRARY', icon: <Library size={24} /> },
  { id: 'labs', name: 'LABS', icon: <FlaskConical size={24} /> },
  { id: 'office', name: 'OFFICE', icon: <Building2 size={24} /> },
];

const products = [
  {
    id: 1,
    name: 'Dual Desk Series 500',
    category: 'Classroom',
    price: '₹4,500 - ₹6,500',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    badge: 'Best Seller',
    isLarge: true,
  },
  {
    id: 2,
    name: 'Ergonomic Chair',
    category: 'Office',
    price: '₹3,200',
    img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
  },
  {
    id: 3,
    name: 'Library Shelving',
    category: 'Library',
    price: '₹12,400',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
  },
  {
    id: 4,
    name: 'Lab Workstation',
    category: 'Labs',
    price: '₹18,500',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    isLarge: true,
  },
  {
    id: 5,
    name: 'Premium Staff Table',
    category: 'Office',
    price: '₹8,900',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
  },
  {
    id: 6,
    name: 'Storage Lockers',
    category: 'Classroom',
    price: '₹15,000',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

const Furniture = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Header Section */}
      <section className="pt-16 pb-10 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight mb-4 uppercase">
                 School <span className="text-sm-blue">Furniture.</span>
              </h1>
              <p className="text-[14px] font-bold text-gray-400 leading-relaxed max-w-lg tracking-widest uppercase">
                Explore 1200+ ergonomic products designed to create inspiring learning spaces.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-sm-blue text-white font-black text-[10px] tracking-widest uppercase rounded-full hover:bg-blue-700 transition-all shadow-lg active:scale-95 shadow-blue-50">
                Catalogue
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-full text-gray-400 hover:text-sm-blue hover:border-sm-blue transition-all">
                <Download size={18} />
              </button>
            </div>
          </div>

          {/* Category Icons Slider — AS PER SCREENSHOT 1 */}
          <div className="flex overflow-x-auto gap-10 pb-4 hide-scrollbar justify-center">
            {categories.map((cat) => (
              <button key={cat.id} className="flex flex-col items-center gap-3 group flex-none">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-50">
                  {cat.icon}
                </div>
                <span className="text-[9px] font-black text-gray-500 group-hover:text-gray-900 tracking-widest uppercase">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Staggered Grid Layout */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
               <div className="w-6 h-1 bg-sm-blue rounded-full" />
               <h2 className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Trending Discovery</h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 tracking-widest uppercase cursor-pointer">
                <Filter size={14} />
                <span>Filters</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-gray-900 tracking-widest uppercase cursor-pointer">
                <span>Featured</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div 
                key={item.id} 
                className={`group cursor-pointer ${item.isLarge ? 'md:col-span-1 lg:row-span-2' : ''}`}
              >
                <div className={`relative bg-gray-50 rounded-[30px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl ${item.isLarge ? 'h-[350px]' : 'h-[220px]'}`}>
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black text-sm-blue uppercase tracking-widest shadow-sm">
                      {item.badge}
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-sm-blue/0 group-hover:bg-sm-blue/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-sm-blue shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowRight size={20} />
                     </div>
                  </div>
                </div>
                
                <div className="mt-4 px-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-black text-sm-blue uppercase tracking-widest">{item.category}</span>
                    <span className="text-gray-900 font-black text-[10px] tracking-tight">{item.price}</span>
                  </div>
                  <h3 className="text-base font-black text-gray-800 font-heading group-hover:text-sm-blue transition-colors uppercase">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
             <button className="px-10 py-3.5 border-2 border-gray-900 text-gray-900 font-black rounded-full hover:bg-gray-900 hover:text-white transition-all uppercase tracking-widest text-[9px]">
               Load More Discovery
             </button>
          </div>
        </div>
      </section>

      {/* Modern Split CTA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden bg-sm-blue relative min-h-[300px] flex flex-col items-center justify-center text-center p-8 shadow-3xl shadow-blue-50">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full -ml-24 -mb-24 blur-3xl" />
          
          <h2 className="text-2xl md:text-3xl font-black text-white font-heading max-w-2xl mb-6 leading-tight uppercase">
            Campus Expansion?
          </h2>
          <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest max-w-xl mb-8 leading-loose">
            Get professional layout designs and furniture consultancy from our experts for free.
          </p>
          <Link to="/contact-us" className="px-8 py-3 bg-white text-sm-blue font-black rounded-full hover:bg-sm-gray transition-all shadow-xl uppercase tracking-widest text-[10px]">
            Talk to Experts
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Furniture;
