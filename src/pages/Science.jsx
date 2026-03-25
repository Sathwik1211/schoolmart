// src/pages/Science.jsx
import { Link } from 'react-router-dom';
import { FlaskConical, Atom, Microscope, Beaker, Lightbulb, BookOpen, Check, ArrowRight, Sparkles } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const labImages = [
  '/images/card_physics_lab.png',
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  '/images/card_biology_lab.png',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
];

const Science = () => {
  const labs = [
    {
      title: 'Physics Lab',
      description: 'Complete setup for mechanics, optics, electricity, and modern physics experiments.',
      icon: Atom,
      accent: '#3B82F6',
      img: labImages[0],
    },
    {
      title: 'Chemistry Lab',
      description: 'Safety-compliant chemistry lab with all necessary equipment and storage.',
      icon: Beaker,
      accent: '#10B981',
      img: labImages[1],
    },
    {
      title: 'Biology Lab',
      description: 'Microscopes, specimens, and equipment for life science exploration.',
      icon: Microscope,
      accent: '#EC4899',
      img: labImages[2],
    },
    {
      title: 'STEM Lab',
      description: 'Integrated science, technology, engineering, and math learning space.',
      icon: Lightbulb,
      accent: '#8B5CF6',
      img: labImages[3],
    },
    {
      title: 'Composite Lab',
      description: 'NEP-compliant combined lab for multi-disciplinary science learning.',
      icon: FlaskConical,
      accent: '#F97316',
      img: labImages[4],
    },
    {
      title: 'Science Park',
      description: 'Outdoor science learning area with interactive exhibits and models.',
      icon: Sparkles,
      accent: '#14B8A6',
      img: labImages[5],
    },
  ];

  const features = [
    'NEP 2020 Compliant',
    'Safety Certified',
    'Complete Equipment',
    'Installation Support',
    'Teacher Training',
    'Maintenance Services',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">Science Labs</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Science is Fun
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Create engaging science labs that inspire curiosity and discovery
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Physics</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Chemistry</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Biology</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">STEM</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                  Setup Science Lab
                </Link>
                <Link to="/catalogues" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
                  View Equipment
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero_science.png"
                alt="Science lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent" />
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
                <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Types */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Science Lab Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Complete lab setup solutions for all science disciplines</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {labs.map((lab, index) => (
              <ImageOverlayCard
                key={index}
                img={lab.img}
                title={lab.title}
                description={lab.description}
                badge={{ label: 'Science', color: lab.accent }}
                fallback="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Science Labs */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-5">
                Why Invest in Science Labs?
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Hands-On Learning', desc: 'Practical experiments help students understand scientific concepts better.' },
                  { title: 'Scientific Temperament', desc: 'Labs develop observation, analysis, and problem-solving skills.' },
                  { title: 'Career Preparation', desc: 'Early exposure to scientific methods prepares students for STEM careers.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check size={18} className="text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/card_biology_lab.png"
                alt="Science lab equipment"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">
            Build Your Science Lab Today
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Get a complete science lab setup with equipment, furniture, and installation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
              Get Quote
            </Link>
            <Link to="/labs" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
              View All Labs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Science;
