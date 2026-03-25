// src/components/ResourceTiles.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, FileText } from 'lucide-react';
import ImageOverlayCard from './ImageOverlayCard';

const tiles = [
  {
    title: 'IMMERSIVE LEARNING',
    subtitle: 'VR & AR in Education',
    path: '/digital',
    height: 'h-64',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    title: 'KINDERGARTEN DESIGN',
    subtitle: 'Playful Learning Spaces',
    path: '/design',
    height: 'h-48',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    title: 'COMPOSITE SKILL LABS',
    subtitle: 'Future-Ready Education',
    path: '/labs',
    height: 'h-56',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  },
  {
    title: 'LIBRARY INNOVATIONS',
    subtitle: 'Modern Reading Spaces',
    path: '/labs',
    height: 'h-72',
    img: '/images/card_library.png',
  },
  {
    title: 'FURNITURE DESIGN & PLANNING',
    subtitle: 'Custom Solutions',
    path: '/furniture',
    height: 'h-52',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
  },
  {
    title: 'SELLING OR BUYING A SCHOOL',
    subtitle: 'CHECK OPPORTUNITIES WITH US',
    path: '/school-sale',
    height: 'h-64',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    featured: true,
  },
  {
    title: 'GAMIFIED MATH LABS',
    subtitle: 'Learn Math Through Play',
    path: '/gamified-math-labs',
    height: 'h-48',
    img: 'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=600&q=80',
  },
  {
    title: 'INTERACTIVE WALLS',
    subtitle: 'Engaging Learning Tools',
    path: '/digital',
    height: 'h-60',
    img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80',
  },
  {
    title: '16 LATEST INTERACTIVE PANELS',
    subtitle: 'FOR CLASSROOMS',
    path: '/digital',
    height: 'h-56',
    img: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=600&q=80',
  },
  {
    title: 'WONDERGARTENS',
    subtitle: 'Magical Learning Spaces',
    path: '/environments',
    height: 'h-48',
    img: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&q=80',
  },
  {
    title: '20+ AI TOOLS FOR CLASSROOMS',
    subtitle: 'WITH TRAINING SUPPORT',
    path: '/digital',
    height: 'h-52',
    img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&q=80',
  },
  {
    title: 'SMART SPORTS FOR SCHOOLS',
    subtitle: 'Next-Gen Sports Infrastructure',
    path: '/sports',
    height: 'h-64',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
  },
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
    <section className="py-6 px-4 bg-sm-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Main Tiles Grid */}
          <div className="flex-1">
            <div className="columns-2 lg:columns-3 gap-3 space-y-3">
              {tiles.map((tile) => (
                <Link
                  key={tile.title}
                  to={tile.path}
                  className={`block break-inside-avoid ${tile.height} rounded-2xl overflow-hidden relative group`}
                  style={{ marginBottom: '12px' }}
                >
                  {/* Real background photo */}
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80';
                    }}
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/70" />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-sm font-heading leading-tight drop-shadow">
                      {tile.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-0.5 leading-relaxed">
                      {tile.subtitle}
                    </p>
                    <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white/90 text-xs font-medium">Explore</span>
                      <ArrowRight size={12} className="text-white/90" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Explore Our Solutions — Modern Pill-Style Slider */}
            <div className="mt-14 pb-10">
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
                      {/* Pill-shaped image container to break the 'box' feel */}
                      <div className="relative h-[420px] rounded-[100px] overflow-hidden shadow-2xl transition-all duration-500 group-hover:rounded-[2rem] group-hover:scale-[0.98]">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Status/Badge */}
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
                    
                    {/* Floating/Cardless content below the pill */}
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
          <div className="w-full lg:w-72 space-y-4">
            {/* CTA Buttons */}
            <div className="space-y-2">
              <Link
                to="/forums"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-sm-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                <MessageSquare size={16} />
                <span className="uppercase tracking-wider text-xs">Discussion Forum</span>
              </Link>
            {/* Quick Quote Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-50 bg-gray-50/30">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Quick Quote</h3>
              </div>
              <form className="p-4 space-y-3">
                <div className="space-y-3">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="School Name" 
                      className="w-full pl-4 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sm-blue focus:border-sm-blue outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Pin Code" 
                      className="w-full pl-4 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sm-blue focus:border-sm-blue outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="relative group">
                    <textarea 
                      placeholder="What are you looking for?" 
                      rows="3"
                      className="w-full pl-4 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sm-blue focus:border-sm-blue outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-gray-300 resize-none"
                    ></textarea>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-2.5 bg-sm-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 text-xs uppercase tracking-widest shadow-sm active:scale-[0.98]"
                >
                  Submit Quote
                </button>
              </form>
            </div>
            </div>

            {/* Classifieds Section */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-3 py-1.5">
                <h3 className="text-white font-bold text-center uppercase tracking-wide text-xs">TRENDING</h3>
              </div>
              <div className="px-3 py-0.5">
                {[
                  { label: 'Schools for Sale / Lease', path: '/school-sale' },
                  { label: 'Fundraising for Schools', path: '#' },
                  { label: 'Partnerships', path: '/partnerships' },
                  { label: 'Book a Workshop', path: '#' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block text-[10px] font-bold text-gray-700 hover:text-sm-blue transition-colors duration-150 py-3 border-b border-gray-200 last:border-0 uppercase tracking-wider"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Free Consultation Banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                alt="Consultation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-700/80" />
              <div className="relative p-5 text-white text-center">
                <h3 className="text-2xl font-bold font-heading">FREE</h3>
                <p className="text-base font-semibold">CONSULTATION</p>
                <p className="text-xs opacity-80 mb-4">WITH OUR DESIGN TEAM</p>
                <Link
                  to="/consultation"
                  className="inline-block px-5 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Resources Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-4 py-2">
                <h3 className="text-white font-bold text-center uppercase tracking-wide text-xs">Resources</h3>
              </div>
              <div className="px-4 py-1">
                {[
                  'Complete guide to digitization of schools',
                  'Setting Up A School In India',
                  'Product catalog 2025',
                  'How to setup composite skill lab?',
                  'Lookbook – Play Furniture',
                  'Gamified math resources',
                  'Completed projects',
                  '20 stunning school design ideas',
                  'Library trends',
                  'JOB OPENINGS',
                  'Join as Influencers',
                ].map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="block text-[10px] font-bold text-gray-700 hover:text-sm-blue transition-colors duration-200 py-2.5 border-b border-gray-200 last:border-0 uppercase tracking-widest"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-4 py-2.5">
                <h3 className="text-white font-semibold text-center uppercase tracking-wide text-sm">Follow Us</h3>
              </div>
              <div className="p-3 flex justify-center gap-3">
                <a href="https://www.facebook.com/schoolmart.in" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="https://twitter.com/schoolmarts" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href="https://www.youtube.com/channel/UCgKY_Kf8jH1hoP3p0I0tiRA" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>

            {/* Sidebar action links */}
            <Link to="/govt" className="block relative rounded-2xl overflow-hidden shadow-sm group" style={{ height: '70px' }}>
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80" alt="Govt Schools" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-700/75" />
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <p className="text-[10px] font-medium uppercase tracking-widest opacity-80">Products for</p>
                <p className="text-base font-bold">GOVT SCHOOLS</p>
              </div>
            </Link>

            <Link to="/renovation" className="block relative rounded-2xl overflow-hidden shadow-sm group" style={{ height: '70px' }}>
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" alt="Renovation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-purple-700/75" />
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <p className="text-base font-bold">SCHOOL RENOVATION</p>
                <p className="text-[10px] uppercase tracking-widest opacity-80">Services</p>
              </div>
            </Link>

            <Link to="/design" className="block relative rounded-2xl overflow-hidden shadow-sm group" style={{ height: '70px' }}>
              <img src="https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&q=80" alt="School Ideas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-amber-600/75" />
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <p className="text-base font-bold">20 SMART SCHOOL IDEAS</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceTiles;
