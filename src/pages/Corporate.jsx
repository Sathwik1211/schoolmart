// src/pages/Corporate.jsx
import { Link } from 'react-router-dom';
import { Check, Award, Lightbulb, TrendingUp, Users, Building2 } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const Corporate = () => {
  const benefits = [
    'Building a community of education innovators, edtech enthusiasts and change makers',
    'Manufactures most of its products inhouse with own factories spread across India.',
    'Gives advisory on running schools, acquisition of schools, expansions',
    'Involved in renovation of schools as per latest curriculum needs',
    'Exposes partner schools to latest innovations, edtech products at lesser price',
    'Actively involved in gamification of school curriculum',
  ];

  const features = [
    { icon: Award, title: 'Quality', description: 'All products by Dogus Educational Equipments are subjected to quality control procedures. Our company has TS, ISO 9001 quality certification.', accent: '#3B82F6', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    { icon: Lightbulb, title: 'R & D', description: 'Scientific, technical and visual field is constantly changing. Our R&D activities keep up with technology and drive continuous improvement.', accent: '#EAB308', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&q=80' },
    { icon: TrendingUp, title: 'Sales', description: 'Dogus Educational Equipment sales network both domestically and abroad are quickly structured. Quality, service, and customer satisfaction based company.', accent: '#10B981', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-sm-blue to-blue-700 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">About Schoolmart</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                One Stop for All<br />School Infrastructure
              </h1>
              <p className="text-lg text-white/80 mb-5">
                A consortium of 16 panel architects, 20+ designers, school innovators, and EdTech experts working from 4 countries
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">Request a Quote</Link>
                <Link to="/catalogues" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">View Catalogues</Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/hero_about.png" alt="Schoolmart" className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <img src="/images/hero_about.png" alt="Schoolmart team" className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'; }} />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sm-blue text-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">4000+</p>
                <p className="text-xs">Partner Schools</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">All About Schoolmart</h2>
              <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
                <p>Schoolmart is a dynamic consortium comprising school architects, designers, edtech majors, and school innovators who collectively contribute to the transformation of educational institutions.</p>
                <p>School architects within the consortium design infrastructure that is functional, safe, and sustainable. Their meticulous attention to detail ensures schools provide conducive environments for effective teaching and learning.</p>
                <p>Schoolmart's edtech experts leverage digital tools, software, and platforms to optimize teaching methodologies, student engagement, and learning outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 font-heading mb-6">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['School Infrastructure', 'Environments', 'Sports Infrastructure', 'School Supplies', 'School Branding', 'E-learning [AR + VR]'].map((service) => (
              <div key={service} className="bg-white rounded-xl p-4 text-center hover:bg-sm-blue hover:text-white transition-colors duration-300 group border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-sm-blue rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white">
                  <Check size={16} className="text-white group-hover:text-sm-blue" />
                </div>
                <p className="text-xs font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-5">
                Why should you sign up with Schoolmart as a partner school?
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-sm-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-500 text-sm italic">There are more features that can make your school a real 'smart school'</p>
              <Link to="/registration-new-form" className="inline-block mt-4 px-5 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
                Signup With Us Today
              </Link>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" alt="Partnership" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality, R&D, Sales */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Our Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <ImageOverlayCard
                key={feature.title}
                img={feature.img}
                title={feature.title}
                description={feature.description}
                badge={{ label: 'Corporate', color: feature.accent }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">Ready to Transform Your School?</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">Join 4000+ schools across India who trust Schoolmart for their infrastructure needs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">Request a Quote</Link>
            <Link to="/catalogues" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">View Catalogues</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Corporate;
