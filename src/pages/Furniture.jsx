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
    name: 'Ergonomic Teacher Chair',
    category: 'Office',
    price: '₹3,200',
    img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
  },
  {
    id: 3,
    name: 'Modular Library Shelving',
    category: 'Library',
    price: '₹12,400',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
  },
  {
    id: 4,
    name: 'Science Lab Workstation',
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
    name: 'Storage Lockers Z-Type',
    category: 'Classroom',
    price: '₹15,000',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

const Furniture = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Header Section */}
      <section className="pt-24 pb-12 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 font-heading leading-tight mb-6">
                 Modern School <span className="text-sm-blue">Furniture.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Explore 1200+ ergonomic products designed to create inspiring and functional learning spaces for the next generation.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-sm-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                View Catalogue
              </button>
              <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-full text-gray-400 hover:text-sm-blue hover:border-sm-blue transition-all">
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Category Icons Slider — AS PER SCREENSHOT 1 */}
          <div className="flex overflow-x-auto gap-8 pb-4 hide-scrollbar justify-center">
            {categories.map((cat) => (
              <button key={cat.id} className="flex flex-col items-center gap-4 group flex-none">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-100">
                  {cat.icon}
                </div>
                <span className="text-[11px] font-black text-gray-500 group-hover:text-gray-900 tracking-widest uppercase">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Staggered Grid Layout */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
               <div className="w-8 h-1 bg-sm-blue rounded-full" />
               <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Trending Products</h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                <Filter size={16} />
                <span>Filters</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-bold text-gray-900 cursor-pointer">
                <span>Featured</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item) => (
              <div 
                key={item.id} 
                className={`group cursor-pointer ${item.isLarge ? 'md:col-span-1 lg:row-span-2' : ''}`}
              >
                <div className={`relative bg-gray-50 rounded-[40px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl ${item.isLarge ? 'h-[500px]' : 'h-[300px]'}`}>
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.badge && (
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-sm-blue uppercase tracking-widest shadow-sm">
                      {item.badge}
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-sm-blue/0 group-hover:bg-sm-blue/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-sm-blue shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowRight size={28} />
                     </div>
                  </div>
                </div>
                
                <div className="mt-6 px-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-sm-blue uppercase tracking-widest">{item.category}</span>
                    <span className="text-gray-900 font-bold text-sm tracking-tight">{item.price}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-heading group-hover:text-sm-blue transition-colors">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
             <button className="px-12 py-4 border-2 border-gray-900 text-gray-900 font-black rounded-full hover:bg-gray-900 hover:text-white transition-all uppercase tracking-widest text-xs">
               Load More Discovery
             </button>
          </div>
        </div>
      </section>

      {/* Modern Split CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto rounded-[60px] overflow-hidden bg-sm-blue relative min-h-[400px] flex flex-col items-center justify-center text-center p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white font-heading max-w-2xl mb-8 leading-tight">
            Planning a new campus expansion?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mb-10">
            Get professional layout designs and furniture consultancy from our expert architects for free.
          </p>
          <Link to="/contact-us" className="px-10 py-4 bg-white text-sm-blue font-black rounded-full hover:bg-sm-gray transition-all shadow-xl uppercase tracking-widest text-sm">
            Talk to Experts
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Furniture;
