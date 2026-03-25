// src/pages/LabsLibraries.jsx
import { Link } from 'react-router-dom';
import { BookOpen, FlaskConical, Calculator, Microscope, Library, Database, Check, ArrowRight, Lightbulb } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const labImages = [
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  '/images/card_biology_lab.png',
  '/images/card_physics_lab.png',
  'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80',
];
const libImages = [
  '/images/card_library.png',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
];

const LabsLibraries = () => {
  const labs = [
    { title: 'Chemistry Lab', description: 'Complete chemistry lab setup with safety equipment and storage.', icon: FlaskConical, accent: '#10B981', path: '/science-is-fun', img: labImages[0] },
    { title: 'Biology Lab', description: 'Microscopes, specimens, and life science equipment.', icon: Microscope, accent: '#EC4899', path: '/science-is-fun', img: labImages[1] },
    { title: 'Physics Lab', description: 'Equipment for mechanics, optics, and electricity experiments.', icon: Lightbulb, accent: '#3B82F6', path: '/science-is-fun', img: labImages[2] },
    { title: 'Math Lab', description: 'Gamified math learning environment with manipulatives.', icon: Calculator, accent: '#EAB308', path: '/gamified-math-labs', img: labImages[3] },
    { title: 'STEM Lab', description: 'Integrated science, technology, engineering, and math lab.', icon: FlaskConical, accent: '#8B5CF6', path: '/science-is-fun', img: labImages[4] },
    { title: 'Composite Lab', description: 'NEP-compliant multi-disciplinary science lab.', icon: Database, accent: '#F97316', path: '/science-is-fun', img: labImages[5] },
  ];

  const libraries = [
    { title: 'Traditional Library', description: 'Classic library setup with bookshelves, reading tables, and seating.', icon: Library, accent: '#D97706', img: libImages[0] },
    { title: 'Digital Library', description: 'Technology-integrated library with e-books and digital resources.', icon: Database, accent: '#0891B2', img: libImages[1] },
    { title: 'Phygital Library', description: 'Blend of physical books and digital resources with interactive zones.', icon: BookOpen, accent: '#4F46E5', img: libImages[2] },
  ];

  const features = ['Complete Lab Setup', 'Library Furniture', 'Equipment & Tools', 'Safety Compliance', 'Installation Support', 'Training & Handover'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">Labs & Libraries</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Learn Through<br />Discovery
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Complete solutions for science labs and modern libraries
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Science Labs</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Math Labs</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Libraries</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">Get Quote</Link>
                <Link to="/catalogues" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">View Catalogue</Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/card_biology_lab.png" alt="School lab" className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
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
                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Science &amp; Math Labs</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Complete lab solutions for practical learning</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {labs.map((lab, index) => (
              <Link key={index} to={lab.path} className="block focus:outline-none">
                <ImageOverlayCard
                  img={lab.img}
                  title={lab.title}
                  description={lab.description}
                  badge={{ label: 'Lab', color: lab.accent }}
                  fallback="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Libraries Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Library Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Modern library setups for the digital age</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {libraries.map((lib, index) => (
              <ImageOverlayCard
                key={index}
                img={lib.img}
                title={lib.title}
                description={lib.description}
                badge={{ label: 'Library', color: lib.accent }}
                fallback="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">Setup Your Lab or Library</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">Get a complete solution including furniture, equipment, and installation support.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">Request Quote</Link>
            <a href="tel:+919966109191" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">Call Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LabsLibraries;
