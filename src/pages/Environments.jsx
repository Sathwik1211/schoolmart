// src/pages/Environments.jsx
import { Link } from 'react-router-dom';
import { Building2, TreePine, Palette, Lightbulb, BookOpen, Music, Dumbbell, Flower2, Car, Home, Sparkles, Users } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const envImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&q=80',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
  '/images/card_library.png',
  'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=600&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
];

const Environments = () => {
  const environments = [
    { title: 'Wondergarten Room', description: 'Magical learning spaces designed for early childhood education with playful elements.', icon: Sparkles, accent: '#EC4899', path: '/environments', img: envImages[0] },
    { title: 'Rumpus Room', description: 'Active play areas for physical development and motor skills enhancement.', icon: Dumbbell, accent: '#F97316', path: '/environments', img: envImages[1] },
    { title: 'Wonder Room', description: 'Exploratory spaces that spark curiosity and scientific thinking.', icon: Lightbulb, accent: '#EAB308', path: '/environments', img: envImages[2] },
    { title: 'Art & Craft Room', description: 'Creative studios equipped for artistic expression and craft activities.', icon: Palette, accent: '#8B5CF6', path: '/environments', img: envImages[3] },
    { title: 'Green Room', description: 'Nature-inspired spaces promoting environmental awareness and sustainability.', icon: TreePine, accent: '#10B981', path: '/environments', img: envImages[4] },
    { title: 'Traffic Room', description: 'Interactive spaces for teaching road safety and traffic rules.', icon: Car, accent: '#EF4444', path: '/environments', img: envImages[5] },
    { title: 'Home Science Room', description: 'Practical learning spaces for life skills and home science education.', icon: Home, accent: '#D97706', path: '/environments', img: envImages[6] },
    { title: 'Phygital Library', description: 'Modern libraries blending physical books with digital resources.', icon: BookOpen, accent: '#2563EB', path: '/labs', img: envImages[7] },
    { title: 'Mathematica Room', description: 'Interactive math learning environments with gamified elements.', icon: Lightbulb, accent: '#4F46E5', path: '/gamified-math-labs', img: envImages[8] },
    { title: 'English Village', description: 'Immersive language learning environments simulating real-world scenarios.', icon: Users, accent: '#0D9488', path: '/environments', img: envImages[9] },
    { title: 'Discovery Pod', description: 'STEM-focused exploration zones for hands-on learning.', icon: Sparkles, accent: '#0891B2', path: '/labs', img: envImages[10] },
    { title: 'Music Room', description: 'Acoustically designed spaces for music education and practice.', icon: Music, accent: '#E11D48', path: '/environments', img: envImages[11] },
  ];

  const features = [
    'Curriculum-mapped designs',
    'NEP 2020 compliant environments',
    'Child-safe materials and finishes',
    'Ergonomic furniture solutions',
    'Interactive learning elements',
    'Sustainable design practices',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">Learning Environments</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Spaces That<br />Spark Wonder
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Transform your school with specialized learning environments designed for 21st century education
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                  Book Consultation
                </Link>
                <Link to="/design" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
                  View Designs
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero_environments.png"
                alt="Learning environments"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                Creating Future-Ready Learning Spaces
              </h2>
              <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
                <p>
                  At Schoolmart, we specialize in designing and creating specialized learning environments that align with modern educational pedagogy and NEP 2020.
                </p>
                <p>
                  From Wondergartens for early childhood to advanced STEM labs, we provide end-to-end solutions including design, furniture, equipment, and installation.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/card_classroom.png"
                alt="Modern classroom"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environment Types */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Our Environment Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Specialized learning environments designed for different educational needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environments.map((env, index) => (
              <Link key={index} to={env.path} className="block focus:outline-none">
                <ImageOverlayCard
                  img={env.img}
                  title={env.title}
                  description={env.description}
                  badge={{ label: 'Environment', color: env.accent }}
                  fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  tall={true}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 font-heading mb-8">
            Our Design Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and space constraints' },
              { step: '02', title: 'Design', desc: 'Creating customized environment designs and 3D visualizations' },
              { step: '03', title: 'Execution', desc: 'Manufacturing, procurement, and installation' },
              { step: '04', title: 'Handover', desc: 'Training staff and providing maintenance support' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
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
            Ready to Transform Your School?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Get a free consultation and site assessment for your school environment project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
              Book Consultation
            </Link>
            <Link to="/design" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
              View Designs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Environments;
