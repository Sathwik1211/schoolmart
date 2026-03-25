// src/pages/Architecture.jsx
import { Link } from 'react-router-dom';
import { Building2, Ruler, PenTool, Home, TreePine, Lightbulb, Check, ArrowRight, Compass } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const serviceImages = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
];

const Architecture = () => {
  const services = [
    {
      title: 'School Master Planning',
      description: 'Comprehensive campus planning and layout design for optimal space utilization.',
      icon: Compass,
      accent: '#3B82F6',
      img: serviceImages[0],
    },
    {
      title: 'Building Design',
      description: 'Architectural design of school buildings with modern aesthetics and functionality.',
      icon: Building2,
      accent: '#8B5CF6',
      img: serviceImages[1],
    },
    {
      title: 'Interior Design',
      description: 'Interior spaces designed for learning, creativity, and student well-being.',
      icon: Home,
      accent: '#EC4899',
      img: serviceImages[2],
    },
    {
      title: 'Landscape Design',
      description: 'Outdoor spaces, gardens, and play areas designed for exploration and recreation.',
      icon: TreePine,
      accent: '#10B981',
      img: serviceImages[3],
    },
    {
      title: 'Renovation & Expansion',
      description: 'Transform existing spaces and expand facilities to meet growing needs.',
      icon: Ruler,
      accent: '#F97316',
      img: serviceImages[4],
    },
    {
      title: 'Sustainable Design',
      description: 'Eco-friendly and energy-efficient school designs for a greener future.',
      icon: Lightbulb,
      accent: '#14B8A6',
      img: serviceImages[5],
    },
  ];

  const features = [
    '16+ Panel Architects',
    'NEP 2020 Compliant Designs',
    '3D Visualization',
    'End-to-End Execution',
    'Sustainable Practices',
    'Budget Optimization',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">School Architecture</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Inspiring Learning<br />Spaces
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Designing world-class school campuses with India's leading architects
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Master Planning</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Building Design</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">3D Visualization</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                  Book Consultation
                </Link>
                <Link to="/design" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
                  View Designs
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero_architecture.png"
                alt="School architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
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
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">
              Our Architectural Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Comprehensive architecture and design solutions for educational institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ImageOverlayCard
                key={index}
                img={service.img}
                title={service.title}
                description={service.description}
                badge={{ label: 'Architecture', color: service.accent }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 font-heading mb-8">
            Our Design Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision, requirements, and constraints' },
              { step: '02', title: 'Concept Design', desc: 'Creating initial concepts and 3D visualizations' },
              { step: '03', title: 'Detailed Design', desc: 'Developing detailed architectural drawings and plans' },
              { step: '04', title: 'Execution', desc: 'Overseeing construction and ensuring quality delivery' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">
            Ready to Design Your Dream School?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Schedule a free consultation with our panel of expert school architects and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
              Book Free Consultation
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

export default Architecture;
