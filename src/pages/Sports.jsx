// src/pages/Sports.jsx
import { Link } from 'react-router-dom';
import { Trophy, Activity, Dumbbell, Target, Users, Check, ArrowRight, Flame } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const catImages = [
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
  'https://images.unsplash.com/photo-1551958219-acbc85db2f06?w=600&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  '/images/card_playground.png',
  'https://images.unsplash.com/photo-1526401485004-46910ecc8e2f?w=600&q=80',
];

const Sports = () => {
  const categories = [
    {
      title: 'Sports Surfaces',
      description: 'Synthetic turf, running tracks, and multi-purpose sports flooring.',
      icon: Activity,
      accent: '#10B981',
      img: catImages[0],
    },
    {
      title: 'Indoor Sports',
      description: 'Badminton, table tennis, and indoor game equipment.',
      icon: Target,
      accent: '#3B82F6',
      img: catImages[1],
    },
    {
      title: 'Outdoor Sports',
      description: 'Cricket, football, basketball, and volleyball equipment.',
      icon: Trophy,
      accent: '#F97316',
      img: catImages[2],
    },
    {
      title: 'Fitness Equipment',
      description: 'Gym equipment and fitness stations for schools.',
      icon: Dumbbell,
      accent: '#8B5CF6',
      img: catImages[3],
    },
    {
      title: 'Playground Equipment',
      description: 'Swings, slides, and outdoor play structures.',
      icon: Flame,
      accent: '#EC4899',
      img: catImages[4],
    },
    {
      title: 'Sports Academy Setup',
      description: 'Complete sports academy infrastructure and equipment.',
      icon: Users,
      accent: '#14B8A6',
      img: catImages[5],
    },
  ];

  const features = [
    '120+ Sports Products',
    'International Standards',
    'Safety Certified',
    'Installation Support',
    'Maintenance Services',
    'Custom Solutions',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">Sports Infrastructure</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Build Champions<br />From Day One
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Complete sports solutions for schools — from equipment to facility setup
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Sports Surfaces</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Equipment</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Academy Setup</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                  Get Quote
                </Link>
                <Link to="/catalogues" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
                  View Catalogue
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero_sports.png"
                alt="School sports facility"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
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
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Sports Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Comprehensive sports infrastructure solutions for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, index) => (
              <ImageOverlayCard
                key={index}
                img={cat.img}
                title={cat.title}
                description={cat.description}
                badge={{ label: 'Sports', color: cat.accent }}
                fallback="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Sports */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
              <img
                src="/images/card_playground.png"
                alt="School playground"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80'; }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-5">
                Why Invest in Sports Infrastructure?
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Holistic Development', desc: 'Sports promote physical fitness, teamwork, and character building in students.' },
                  { title: 'Academic Performance', desc: 'Physical activity improves concentration, memory, and academic outcomes.' },
                  { title: 'School Reputation', desc: "Quality sports facilities enhance your school's brand and attract admissions." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check size={18} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">
            Build Your Sports Facility
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Get a comprehensive quote for your school sports infrastructure project.
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

export default Sports;
