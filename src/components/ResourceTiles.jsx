// src/components/ResourceTiles.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, FileText } from 'lucide-react';

const mainTiles = [
  {
    title: 'Immersive Learning',
    description: 'VR & AR in Education',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    size: 'large',
    color: 'indigo',
    path: '/digital'
  },
  {
    title: 'Furniture Design',
    description: 'Custom Educational Solutions',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    size: 'wide',
    color: 'cyan',
    path: '/furniture'
  },
  {
    title: 'Selling or Buying a School',
    description: 'Strategic Opportunities',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    size: 'normal',
    color: 'purple',
    path: '/school-sale'
  },
  {
     title: 'Composite Skill Labs',
     description: 'Future-Ready Education',
     img: 'https://images.unsplash.com/photo-1544604193-41c19b0cd0f9?w=800&q=80',
     size: 'normal',
     color: 'orange',
     path: '/labs'
  },
  {
     title: 'Gamified Math Labs',
     description: 'Learn Through Play',
     img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
     size: 'normal',
     color: 'emerald',
     path: '/gamified-math-labs'
  }
];

const solutions = [
  {
    title: 'School Furniture',
    description: '1200+ ergonomic products for every classroom, lab and library',
    path: '/furniture',
    badge: { label: 'Furniture', color: '#F97316' },
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  },
  {
    title: 'Digital Infrastructure',
    description: 'Cutting-edge ed-tech, interactive panels and smart classrooms',
    path: '/digital',
    badge: { label: 'Technology', color: '#3B82F6' },
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    title: 'Sports Infrastructure',
    description: 'Professional-grade courts, equipment and sports facilities',
    path: '/sports',
    badge: { label: 'Sports', color: '#22C55E' },
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  },
  {
    title: 'School Architecture',
    description: 'NEP-ready campus planning and interior design by expert architects',
    path: '/school-building-design',
    badge: { label: 'Architecture', color: '#8B5CF6' },
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    title: 'Learning Environments',
    description: 'STEM labs, libraries, maker-spaces and activity rooms',
    path: '/environments',
    badge: { label: 'Environments', color: '#0EA5E9' },
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
  },
  {
    title: 'School Design & Planning',
    description: 'End-to-end campus setup, expansion and renovation services',
    path: '/design',
    badge: { label: 'Design', color: '#EC4899' },
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

const ResourceTiles = () => {
  return (
    <section className="py-12 px-4 bg-sm-gray overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Tiles Content */}
          <div className="flex-1">
            {/* Top Outstanding Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainTiles.map((tile, idx) => (
                <Link 
                  key={idx} 
                  to={tile.path}
                  className={`group relative ${
                    tile.size === 'large' ? 'md:row-span-2 md:h-[600px]' : 
                    'h-[284px]'
                  }`}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:scale-[0.98] group-hover:shadow-3xl bg-gray-200">
                    <img 
                      src={tile.img} 
                      alt={tile.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/60" />
                    
                    {/* Floating Glass Card */}
                    <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 z-20 group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 max-w-[280px]">
                        <div className={`w-8 h-1 rounded-full mb-4 bg-${tile.color}-500`} style={{ backgroundColor: tile.color }} />
                        <h3 className="text-gray-900 font-black text-lg md:text-xl font-heading leading-tight mb-2">
                          {tile.title}
                        </h3>
                        <p className="text-gray-600 text-[11px] font-bold uppercase tracking-widest opacity-60">
                          {tile.description}
                        </p>
                        
                        <div className="mt-4 flex items-center gap-2 text-sm-blue text-[10px] font-bold cursor-pointer hover:gap-3 transition-all duration-300">
                          <span>EXPLORE</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Explore Our Solutions — Modern Pill-Style Slider */}
            <div className="mt-20">
              <div className="flex flex-col mb-8">
                <div className="flex items-center gap-4 mb-1">
                  <div className="h-1 w-12 bg-sm-blue rounded-full" />
                  <h2 className="text-gray-900 text-3xl font-black font-heading tracking-tight">Our Solutions</h2>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm ml-16">Innovative educational infrastructure designed for impact.</p>
                  <Link to="/catalogues" className="text-sm-blue text-sm font-bold hover:underline flex items-center gap-1">
                    View All <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              <div className="flex overflow-x-auto gap-8 pb-10 px-4 -mx-4 hide-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {solutions.map((item, idx) => (
                  <Link 
                    key={item.title} 
                    to={item.path} 
                    className="flex-none w-[280px] group snap-center"
                  >
                    <div className="relative mb-6">
                      <div className="relative h-[420px] rounded-[100px] overflow-hidden shadow-2xl transition-all duration-500 group-hover:rounded-[2rem] group-hover:scale-[0.98]">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2">
                          <span 
                            className="px-4 py-1.5 text-[9px] font-bold text-white uppercase tracking-[0.2em] rounded-full backdrop-blur-md shadow-lg border border-white/20 whitespace-nowrap"
                            style={{ backgroundColor: `${item.badge.color}bb` }}
                          >
                            {item.badge.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center px-4 transform transition-all duration-300 group-hover:-translate-y-2">
                      <h3 className="text-gray-900 font-extrabold text-xl font-heading mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4 opacity-80">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-100 text-sm-blue group-hover:bg-sm-blue group-hover:text-white group-hover:border-sm-blue transition-all duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-72 space-y-6">
            <div className="space-y-3">
              <Link
                to="/forums"
                className="flex items-center justify-center gap-2 w-full py-3 bg-sm-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 text-xs uppercase tracking-widest shadow-lg shadow-blue-900/10"
              >
                <MessageSquare size={16} />
                <span>Discussion Forum</span>
              </Link>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-50 bg-gray-50/30">
                  <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">Quick Quote</h3>
                </div>
                <form className="p-4 space-y-3">
                  <div className="space-y-3 text-xs">
                    <input type="text" placeholder="School Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-1 focus:ring-sm-blue outline-none" />
                    <input type="text" placeholder="Pin Code" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-1 focus:ring-sm-blue outline-none" />
                    <textarea placeholder="Looking for..." rows="3" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-1 focus:ring-sm-blue outline-none resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-sm-blue text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors">Submit Quote</button>
                </form>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-3 py-2">
                <h3 className="text-white font-bold text-center uppercase tracking-widest text-[10px]">Trending</h3>
              </div>
              <div className="px-4 py-1">
                {['Schools for Sale / Lease', 'Fundraising', 'Partnerships', 'Workshops'].map((item) => (
                  <Link key={item} to="#" className="block text-[10px] font-bold text-gray-700 py-3 border-b border-gray-50 last:border-0 uppercase tracking-wider hover:text-sm-blue">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-40 group">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Consultation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-teal-800/80 p-5 flex flex-col items-center justify-center text-white text-center">
                <h3 className="text-xl font-black mb-1">FREE CONSULTATION</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-80 mb-3">With our design team</p>
                <Link to="#" className="px-4 py-1.5 bg-white text-teal-800 font-bold rounded-lg text-xs uppercase">Book Now</Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-4 py-2">
                <h3 className="text-white font-bold text-center uppercase tracking-widest text-[10px]">Resources</h3>
              </div>
              <div className="px-5 py-2">
                {[
                  'Digitization Guide',
                  'Setting Up A School',
                  'Product Catalog 2025',
                  'Skill Lab Blueprint',
                  'Play Furniture Lookbook',
                ].map((item) => (
                  <Link key={item} to="#" className="block text-[10px] font-bold text-gray-600 py-2.5 border-b border-gray-50 last:border-0 uppercase tracking-widest hover:text-sm-blue">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceTiles;
