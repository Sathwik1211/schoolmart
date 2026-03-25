// src/pages/AboutUs.jsx
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Award, Building2, Globe, Lightbulb, Handshake } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize school infrastructure by bringing together the best architects, designers, and edtech innovators to create world-class learning environments.',
      accent: '#3B82F6',
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading one-stop solution for all school infrastructure needs across Asia, empowering 10,000+ schools by 2030.',
      accent: '#10B981',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Quality, Innovation, Integrity, and Customer Satisfaction are at the core of everything we do at Schoolmart.',
      accent: '#8B5CF6',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    },
  ];

  const stats = [
    { number: '4000+', label: 'Partner Schools', icon: Building2 },
    { number: '16+', label: 'Panel Architects', icon: Users },
    { number: '20+', label: 'Designers', icon: Lightbulb },
    { number: '4', label: 'Countries', icon: Globe },
    { number: '7+', label: 'Years Experience', icon: Award },
    { number: '80+', label: 'Global Partners', icon: Handshake },
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
                India's Leading<br />School Consortium
              </h1>
              <p className="text-lg text-white/80 mb-6">
                Bringing together architects, designers, and edtech innovators to transform school infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
                <Link to="/catalogues" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero_about.png"
                alt="Schoolmart team"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                Who We Are
              </h2>
              <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold text-sm-blue">Schoolmart.in</span> is a consortium of architects, designers, and school innovators who strive to bring better learning outcomes through the latest infrastructure and edtech. It's the first ever company in Asia to bring curriculum mapped innovations to the school industry.
                </p>
                <p>
                  We help schools with new campus setups, expansion, design to execution, NEP ready environments, labs, libraries, sports infra, and more.
                </p>
                <p>
                  <span className="font-semibold text-sm-blue">Schoolmart.in</span> is an initiative of Thirdeye Group, with 4000+ partner schools across India backed by 7 years of experience.
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-sm-blue hover:text-white transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-sm-blue rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white">
                      <Icon size={18} className="text-white group-hover:text-sm-blue" />
                    </div>
                    <p className="text-2xl font-bold font-heading">{stat.number}</p>
                    <p className="text-xs text-gray-500 group-hover:text-white/80">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value) => (
              <ImageOverlayCard
                key={value.title}
                img={value.img}
                title={value.title}
                description={value.description}
                badge={{ label: 'Schoolmart', color: value.accent }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Consortium */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Our Consortium</h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              A dynamic team of experts working together to transform educational infrastructure
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'School Architects', count: '16+', desc: 'Expert architects specializing in educational infrastructure', img: '/images/hero_architecture.png', color: '#3B82F6' },
              { title: 'Space Designers', count: '20+', desc: 'Creative designers for engaging learning environments', img: '/images/hero_environments.png', color: '#10B981' },
              { title: 'EdTech Experts', count: '15+', desc: 'Technology specialists for digital transformation', img: '/images/hero_digital.png', color: '#8B5CF6' },
              { title: 'School Innovators', count: '10+', desc: 'Education pioneers bringing fresh ideas', img: '/images/hero_about.png', color: '#F97316' },
            ].map((item) => (
              <ImageOverlayCard
                key={item.title}
                img={item.img}
                title={item.title}
                description={`${item.count} ${item.desc}`}
                badge={{ label: item.count, color: item.color }}
                fallback="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">
            Partner With Us
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Join our growing network of schools and transform your educational infrastructure with India's leading school solutions provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/registration-new-form" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
              Become a Partner
            </Link>
            <a href="tel:+919966109191" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
