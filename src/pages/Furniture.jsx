// src/pages/Furniture.jsx
import { Link } from 'react-router-dom';
import { Armchair, Table, BookOpen, School, Building2, Bed, Star, Check, ArrowRight } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const catImages = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
  '/images/card_library.png',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
];

const Furniture = () => {
  const categories = [
    {
      title: 'Primary & High School',
      description: 'Ergonomic desks, chairs, and storage solutions for older students.',
      icon: School,
      accent: '#3B82F6',
      img: catImages[0],
    },
    {
      title: 'Kindergarten',
      description: 'Colorful, safe, and playful furniture for early learners.',
      icon: Armchair,
      accent: '#EC4899',
      img: catImages[1],
    },
    {
      title: 'Office Furniture',
      description: 'Professional furniture for school administration areas.',
      icon: Building2,
      accent: '#6B7280',
      img: catImages[2],
    },
    {
      title: 'Library Furniture',
      description: 'Bookshelves, reading tables, and comfortable seating.',
      icon: BookOpen,
      accent: '#D97706',
      img: catImages[3],
    },
    {
      title: 'Lab Furniture',
      description: 'Durable lab tables, stools, and storage cabinets.',
      icon: Table,
      accent: '#10B981',
      img: catImages[4],
    },
    {
      title: 'Hostel Furniture',
      description: 'Beds, wardrobes, and study tables for boarding facilities.',
      icon: Bed,
      accent: '#8B5CF6',
      img: catImages[5],
    },
  ];

  const features = [
    'ISO 9001 Certified Quality',
    'Ergonomic Designs',
    '5-Year Warranty',
    'Pan-India Delivery',
    'Custom Manufacturing',
    'Bulk Order Discounts',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-sm-orange to-orange-600 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">School Furniture</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Comfort Meets<br />Learning
              </h1>
              <p className="text-lg text-white/80 mb-5">
                1200+ products designed for comfort, durability, and learning excellence
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Quick Delivery</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Best Prices</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Custom Designs</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-sm-orange font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                  Request Quote
                </Link>
                <a href="http://www.schoolmart.store" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
                  Shop Online
                </a>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero_furniture.png"
                alt="School furniture"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
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
                <div className="w-5 h-5 bg-sm-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">
              Furniture Categories
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Explore our wide range of furniture solutions for every area of your school
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, index) => (
              <ImageOverlayCard
                key={index}
                img={cat.img}
                title={cat.title}
                description={cat.description}
                badge={{ label: 'Furniture', color: cat.accent }}
                fallback="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-5">
                Why Choose Schoolmart Furniture?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Star, title: 'Premium Quality', desc: 'All furniture is manufactured using high-grade materials with ISO 9001 certification.' },
                  { icon: Check, title: 'Ergonomic Design', desc: 'Designed with student comfort and posture in mind for better learning outcomes.' },
                  { icon: Armchair, title: 'Custom Solutions', desc: "We can customize furniture to match your school's specific requirements and branding." },
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="flex gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ItemIcon size={18} className="text-sm-orange" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/card_classroom.png"
                alt="School classroom furniture"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">
            Get a Furniture Quote
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Contact us for bulk orders and custom furniture requirements. We offer competitive pricing for schools across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
              Request Quote
            </Link>
            <a href="tel:+919966109191" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Furniture;
