// src/pages/SchoolDesigns.jsx
import { Link } from 'react-router-dom';
import { Palette, Ruler, Layers, Home, Sparkles, Check, ArrowRight, Building2 } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const designImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
];

const SchoolDesigns = () => {
  const designs = [
    { title: 'Kindergarten Design', description: 'Playful, colorful spaces designed for early childhood learning and development.', icon: Sparkles, accent: '#EC4899', img: designImages[0] },
    { title: 'Primary School Design', description: 'Engaging environments that foster curiosity and foundational learning.', icon: Home, accent: '#3B82F6', img: designImages[1] },
    { title: 'High School Design', description: 'Modern spaces designed for advanced learning and student collaboration.', icon: Building2, accent: '#8B5CF6', img: designImages[2] },
    { title: 'STEM Campus Design', description: 'Future-ready campuses with integrated science, technology, and innovation spaces.', icon: Layers, accent: '#10B981', img: designImages[3] },
    { title: 'Theme-Based Design', description: 'Unique school designs based on educational philosophies and themes.', icon: Palette, accent: '#F97316', img: designImages[4] },
    { title: 'Renovation & Upgrade', description: 'Transform existing schools into modern learning environments.', icon: Ruler, accent: '#14B8A6', img: designImages[5] },
  ];

  const features = ['20+ Design Templates', '3D Visualization', 'NEP 2020 Aligned', 'Customizable Plans', 'Expert Architects', 'End-to-End Service'];

  const ideas = ['Open Learning Spaces', 'Collaborative Zones', 'Outdoor Classrooms', 'Maker Spaces', 'Reading Nooks', 'Art Studios', 'Science Gardens', 'Performance Areas', 'Quiet Zones', 'Game-Based Learning', 'Sustainable Design', 'Flexible Furniture', 'Technology Hubs', 'Wellness Centers', 'Community Spaces', 'Sports Integration', 'Natural Lighting', 'Color Psychology', 'Wayfinding Design', 'Safety Features'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">School Designs</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Spaces That<br />Inspire Greatness
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Inspiring school design ideas and architectural solutions for modern education
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Kindergarten</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Primary</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">High School</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">Get Design Consultation</Link>
                <Link to="/catalogues" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">View Portfolio</Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/hero_architecture.png" alt="School design" className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-6 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Categories */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Design Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Explore our range of school design solutions for different educational levels and needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {designs.map((design, index) => (
              <ImageOverlayCard
                key={index}
                img={design.img}
                title={design.title}
                description={design.description}
                badge={{ label: 'Design', color: design.accent }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Design Ideas */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 font-heading mb-6">20 Smart School Design Ideas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {ideas.map((idea, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-3 flex items-center gap-2 hover:bg-purple-50 transition-colors duration-200">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-700 text-xs font-medium">{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">Design Your Dream School</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">Work with our expert architects to create a school that inspires learning and reflects your educational vision.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">Start Your Project</Link>
            <Link to="/school-building-design" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">View Architecture</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SchoolDesigns;
