// src/pages/Manufacturing.jsx
import { Link } from 'react-router-dom';
import { Factory, Check, Award, Shield, Truck, Wrench, Cog, Package } from 'lucide-react';
import ImageOverlayCard from '../components/ImageOverlayCard';

const capImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  'https://images.unsplash.com/photo-1565301660306-29e08751cc53?w=600&q=80',
  'https://images.unsplash.com/photo-1593642532400-2682810df593?w=600&q=80',
];

const Manufacturing = () => {
  const capabilities = [
    { icon: Factory, title: 'In-House Manufacturing', description: 'State-of-the-art manufacturing facilities across India producing high-quality school furniture and equipment.', accent: '#10B981', img: capImages[0] },
    { icon: Award, title: 'Quality Certification', description: 'ISO 9001 certified processes ensuring every product meets international quality standards.', accent: '#EAB308', img: capImages[1] },
    { icon: Shield, title: 'Durability Testing', description: 'Rigorous pre-production testing for durability, performance, and safety.', accent: '#3B82F6', img: capImages[2] },
    { icon: Truck, title: 'Pan-India Delivery', description: 'Efficient logistics network delivering to schools across all states in India.', accent: '#F97316', img: capImages[3] },
    { icon: Wrench, title: 'Custom Solutions', description: 'Bespoke manufacturing capabilities to meet specific school requirements.', accent: '#8B5CF6', img: capImages[4] },
    { icon: Cog, title: 'R&D Excellence', description: 'Continuous innovation and design improvements based on customer feedback.', accent: '#0891B2', img: capImages[5] },
  ];

  const products = ['School Furniture', 'Lab Equipment', 'Sports Infrastructure', 'Digital Infrastructure', 'Library Furniture', 'Kindergarten Equipment', 'Office Furniture', 'Hostel Furniture'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-sm-green to-green-600 py-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">Manufacturing</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3 leading-tight">
                Built to Last,<br />Made for Learning
              </h1>
              <p className="text-lg text-white/80 mb-5">
                State-of-the-art manufacturing facilities producing world-class school infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/catalogues" className="px-6 py-2.5 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">View Our Products</Link>
                <Link to="/contact-us" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">Contact Us</Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" alt="Manufacturing facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" alt="School furniture" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Our Manufacturing Capabilities</h2>
              <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
                <p>Schoolmart operates multiple manufacturing facilities across India, equipped with modern machinery and skilled workforce. Our in-house production capabilities ensure quality control at every stage.</p>
                <p>All products manufactured by Dogus Educational Equipments hold TS and ISO 9001 quality certifications, ensuring international standards.</p>
                <p>Before production, all products undergo durability, performance, and safety tests examined by experts and archived for continuous improvement.</p>
              </div>
              <div className="mt-5">
                <Link to="/catalogues" className="px-5 py-2.5 bg-sm-green text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm inline-block">View Our Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">Our Manufacturing Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, index) => (
              <ImageOverlayCard
                key={index}
                img={cap.img}
                title={cap.title}
                description={cap.description}
                badge={{ label: 'Manufacturing', color: cap.accent }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products We Manufacture */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 font-heading mb-6">Products We Manufacture</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {products.map((product) => (
              <div key={product} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-sm-green hover:text-white transition-colors duration-300 group">
                <div className="w-10 h-10 bg-sm-green/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20">
                  <Check size={16} className="text-sm-green group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-gray-800 group-hover:text-white">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-3">Request a Manufacturing Quote</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">Get competitive pricing for bulk orders and custom manufacturing requirements.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact-us" className="px-6 py-2.5 bg-sm-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">Get Quote</Link>
            <a href="tel:+919966109191" className="px-6 py-2.5 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm">Call Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Manufacturing;
