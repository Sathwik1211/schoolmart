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
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Masonry Tiles Grid */}
            <div className="columns-2 lg:columns-3 gap-3 space-y-3">
              {tiles.map((tile) => (
                <Link
                  key={tile.title}
                  to={tile.path}
                  className={`block break-inside-avoid ${tile.height} rounded-2xl overflow-hidden relative group shadow-sm`}
                  style={{ marginBottom: '12px' }}
                >
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/70" />

                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-sm font-heading leading-tight drop-shadow uppercase tracking-wide">
                      {tile.title}
                    </h3>
                    <p className="text-white/70 text-[10px] mt-0.5 leading-relaxed">
                      {tile.subtitle}
                    </p>
                    <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white/90 text-[10px] font-medium uppercase">Explore</span>
                      <ArrowRight size={10} className="text-white/90" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Explore Our Solutions — Classic Grid */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                <h2 className="text-gray-900 text-lg font-bold font-heading uppercase tracking-tight">Explore Our Solutions</h2>
                <Link to="/catalogues" className="text-sm-blue text-xs font-semibold hover:underline uppercase">View All →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {solutions.map((item) => (
                  <Link key={item.title} to={item.path} className="block group">
                    <ImageOverlayCard
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      badge={item.badge}
                      fallback="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-72 space-y-4">
            <div className="space-y-2">
              <Link
                to="/forums"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-sm-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-colors duration-200 text-sm shadow-sm"
              >
                <MessageSquare size={16} />
                <span className="uppercase tracking-wider text-[11px]">Discussion Forum</span>
              </Link>
              
              {/* Quick Quote Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-50 bg-gray-50/30">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Quick Quote</h3>
                </div>
                <form className="p-4 space-y-3">
                  <div className="space-y-3">
                    <input type="text" placeholder="School Name" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sm-blue outline-none transition-all" />
                    <input type="text" placeholder="Pin Code" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sm-blue outline-none transition-all" />
                    <textarea placeholder="What are you looking for?" rows="3" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs focus:ring-1 focus:ring-sm-blue outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-sm-blue text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-sm">Submit Quote</button>
                </form>
              </div>
            </div>

            {/* Trending Section */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-3 py-1.5">
                <h3 className="text-white font-bold text-center uppercase tracking-wide text-xs">TRENDING</h3>
              </div>
              <div className="px-3 py-1">
                {['Schools for Sale / Lease', 'Fundraising', 'Partnerships', 'Workshops'].map((item) => (
                  <Link key={item} to="#" className="block text-[10px] font-bold text-gray-700 hover:text-sm-blue py-3 border-b border-gray-200 last:border-0 uppercase tracking-wider">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Consultation Banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm h-40">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Consultation" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-teal-700/80 p-5 flex flex-col items-center justify-center text-white text-center">
                <h2 className="text-2xl font-black mb-0">FREE</h2>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-3">CONSULTATION</h3>
                <Link to="#" className="px-5 py-2 bg-white text-teal-700 font-bold rounded-lg text-xs uppercase hover:bg-gray-100 transition-colors">Book Now</Link>
              </div>
            </div>

            {/* Resources Section — FULL LIST */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-4 py-2">
                <h3 className="text-white font-bold text-center uppercase tracking-wide text-xs">Resources</h3>
              </div>
              <div className="px-4 py-1">
                {[
                  'Complete guide to digitization',
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
                  <Link key={item} to="#" className="block text-[10px] font-bold text-gray-700 hover:text-sm-blue py-2.5 border-b border-gray-200 last:border-0 uppercase tracking-widest">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-cyan-500 px-4 py-2">
                <h3 className="text-white font-bold text-center uppercase tracking-wide text-xs">Follow Us</h3>
              </div>
              <div className="p-4 flex justify-center gap-4">
                {/* Social icons would go here, simplified for revert */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg" />
                  <div className="w-8 h-8 bg-sky-500 rounded-lg" />
                  <div className="w-8 h-8 bg-red-600 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Govt / Renovation / Ideas Links */}
            <div className="space-y-3">
              <Link to="/govt" className="block relative h-16 rounded-2xl overflow-hidden shadow-sm group">
                <div className="absolute inset-0 bg-sm-blue flex flex-col items-center justify-center text-white">
                  <p className="text-[9px] uppercase tracking-[0.2em] font-medium">Products for</p>
                  <p className="text-sm font-bold uppercase">Govt Schools</p>
                </div>
              </Link>
              <Link to="/renovation" className="block relative h-16 rounded-2xl overflow-hidden shadow-sm group">
                <div className="absolute inset-0 bg-purple-600 flex flex-col items-center justify-center text-white">
                  <p className="text-sm font-bold uppercase">School Renovation</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-medium">Services</p>
                </div>
              </Link>
              <Link to="/ideas" className="block relative h-16 rounded-2xl overflow-hidden shadow-sm group">
                <div className="absolute inset-0 bg-orange-500 flex flex-col items-center justify-center text-white">
                  <p className="text-sm font-bold uppercase">20 Smart School Ideas</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceTiles;
