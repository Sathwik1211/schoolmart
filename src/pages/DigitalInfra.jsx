// src/pages/DigitalInfra.jsx
import { Link } from 'react-router-dom';
import { Laptop, Monitor, Tablet, Wifi, Video, Cpu, Check, ArrowRight, Lightbulb } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const productImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=600&q=80',
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
];

const DigitalInfra = () => {
  const products = [
    { title: 'Interactive Panels', description: 'Smart boards and interactive displays for engaging classroom sessions.', icon: Monitor, accent: '#3B82F6', img: productImages[0] },
    { title: 'School Tablets', description: 'Rugged tablets designed specifically for educational use.', icon: Tablet, accent: '#8B5CF6', img: productImages[1] },
    { title: 'Digital Content', description: 'Curriculum-aligned digital learning content and resources.', icon: Laptop, accent: '#10B981', img: productImages[2] },
    { title: 'School Management Software', description: 'Complete ERP solution for school administration and management.', icon: Cpu, accent: '#F97316', img: productImages[3] },
    { title: 'Video Conferencing', description: 'Solutions for hybrid learning and virtual classrooms.', icon: Video, accent: '#EC4899', img: productImages[4] },
    { title: 'Network Infrastructure', description: 'WiFi solutions and networking equipment for campus connectivity.', icon: Wifi, accent: '#14B8A6', img: productImages[5] },
  ];

  const features = ['Curriculum Mapped Content', 'Easy Integration', 'Teacher Training', 'Technical Support', 'Cloud-Based Solutions', 'Secure & Reliable'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">Digital Infrastructure</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Smart Schools<br />for Tomorrow
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Transform your school with cutting-edge digital solutions and smart classroom technology
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Smart Classrooms</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Digital Content</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">School ERP</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                  Get Quote
                </Link>
                <Link to="/guides" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
                  Read Guide
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero_digital.png"
                alt="Digital classroom"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
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
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Digital Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Comprehensive digital infrastructure solutions for modern schools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <ImageOverlayCard
                key={index}
                img={product.img}
                title={product.title}
                description={product.description}
                badge={{ label: 'Digital', color: product.accent }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
              <img src="/images/hero_digital.png" alt="Digital learning" className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'; }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-5">Why Go Digital?</h2>
              <div className="space-y-4">
                {[
                  { title: 'Enhanced Learning', desc: 'Interactive content increases student engagement and improves learning outcomes.' },
                  { title: 'Efficient Administration', desc: 'Automate routine tasks and streamline school operations with smart ERP solutions.' },
                  { title: 'Future Ready', desc: 'Prepare students for a digital world with technology-integrated education.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check size={18} className="text-teal-600" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">Start Your Digital Transformation</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">Get a free assessment of your school's digital infrastructure needs and a customized transformation roadmap.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">Book Assessment</Link>
            <a href="tel:+919966109191" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">Call Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalInfra;
