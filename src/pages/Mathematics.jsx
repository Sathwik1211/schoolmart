// src/pages/Mathematics.jsx
import { Link } from 'react-router-dom';
import { Calculator, Gamepad2, Brain, Lightbulb, Puzzle, Check, ArrowRight, Sparkles } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const mathImages = [
  'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=600&q=80',
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80',
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80',
  'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
];

const Mathematics = () => {
  const features = [
    { title: 'Gamified Math Labs', description: 'Interactive learning environments where students learn math through games and activities.', icon: Gamepad2, accent: '#EAB308', img: mathImages[0] },
    { title: 'Math Manipulatives', description: 'Physical tools and objects that help students visualize and understand mathematical concepts.', icon: Puzzle, accent: '#3B82F6', img: mathImages[1] },
    { title: 'Interactive Math Walls', description: 'Wall-mounted learning stations for collaborative math exploration.', icon: Lightbulb, accent: '#10B981', img: mathImages[2] },
    { title: 'Digital Math Tools', description: 'Software and apps that make learning math engaging and interactive.', icon: Calculator, accent: '#8B5CF6', img: mathImages[3] },
    { title: 'Math Games & Puzzles', description: 'Educational games that develop problem-solving and logical thinking skills.', icon: Brain, accent: '#EC4899', img: mathImages[4] },
    { title: 'Teacher Resources', description: 'Comprehensive resources and training for math educators.', icon: Sparkles, accent: '#F97316', img: mathImages[5] },
  ];

  const benefits = ['Makes math fun and engaging', 'Improves conceptual understanding', 'Develops problem-solving skills', 'Reduces math anxiety', 'Supports different learning styles', 'Aligned with curriculum'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-amber-600 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10 relative">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">Gamified Math Labs</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Math Made<br />Magical
              </h1>
              <p className="text-lg text-white/80 mb-5">
                Transform math learning through play, games, and interactive experiences
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Interactive</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gamified</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Curriculum Aligned</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">Setup Math Lab</Link>
                <Link to="/guides" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">View Resources</Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=800&q=80" alt="Math lab" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-6 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Math Lab Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Comprehensive solutions for creating engaging math learning environments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <ImageOverlayCard
                key={index}
                img={feature.img}
                title={feature.title}
                description={feature.description}
                badge={{ label: 'Math Lab', color: feature.accent }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 font-heading mb-8">How Gamified Math Learning Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Explore', desc: 'Students discover math concepts through hands-on activities' },
              { step: '2', title: 'Play', desc: 'Engaging games make learning math fun and enjoyable' },
              { step: '3', title: 'Learn', desc: 'Concepts are understood through practical application' },
              { step: '4', title: 'Master', desc: 'Students develop confidence and fluency in math' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">{item.step}</div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">Set Up Your Math Lab Today</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">Transform the way your students learn mathematics with our gamified math lab solutions.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">Get Started</Link>
            <Link to="/labs" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">Explore Labs</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mathematics;
