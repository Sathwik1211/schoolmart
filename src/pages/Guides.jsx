// src/pages/Guides.jsx
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Download, ExternalLink, ChevronRight, Lightbulb, School, Calculator, FlaskConical, Library } from 'lucide-react';

const Guides = () => {
  const guides = [
    {
      title: 'Complete Guide to Digitization of Schools',
      description: 'A comprehensive guide to transforming your school with digital infrastructure and tools.',
      icon: Lightbulb,
      color: 'bg-blue-500',
      category: 'Digital',
      img: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=800&q=80',
    },
    {
      title: 'Setting Up A School In India',
      description: 'Step-by-step guide for establishing a new school, from planning to execution.',
      icon: School,
      color: 'bg-green-500',
      category: 'Setup',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    },
    {
      title: 'How to Setup Composite Skill Lab',
      description: 'Detailed guide on designing and setting up NEP-compliant composite skill labs.',
      icon: FlaskConical,
      color: 'bg-purple-500',
      category: 'Labs',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    },
    {
      title: 'Gamified Math Resources',
      description: 'Collection of resources and ideas for creating engaging math learning environments.',
      icon: Calculator,
      color: 'bg-yellow-500',
      category: 'Math',
      img: 'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=800&q=80',
    },
    {
      title: 'Library Trends 2025',
      description: 'Latest trends in school library design and digital integration.',
      icon: Library,
      color: 'bg-orange-500',
      category: 'Library',
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    },
    {
      title: '20 Stunning School Design Ideas',
      description: 'Inspirational school architecture and interior design concepts.',
      icon: School,
      color: 'bg-pink-500',
      category: 'Design',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    },
  ];

  const resources = [
    { title: 'Product Catalog 2025', type: 'PDF', size: '15 MB' },
    { title: 'Lookbook - Play Furniture', type: 'PDF', size: '8 MB' },
    { title: 'Completed Projects Portfolio', type: 'PDF', size: '25 MB' },
    { title: 'NEP Implementation Guide', type: 'PDF', size: '5 MB' },
    { title: 'Furniture Planning Guide', type: 'PDF', size: '10 MB' },
    { title: 'Digital Classroom Setup', type: 'PDF', size: '7 MB' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen size={80} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Guides & Resources
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive guides, resources, and insights to help you build better schools
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 font-heading mb-4">
            Featured Guides
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our collection of in-depth guides covering various aspects of school infrastructure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={guide.img} 
                      alt={guide.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`${guide.color} w-10 h-10 rounded-lg flex items-center justify-center shadow-lg`}>
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider rounded-full border border-white/10">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{guide.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                    <button className="flex items-center gap-2 text-sm-blue font-medium hover:underline">
                      <Download size={16} />
                      <span>Download Guide</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-heading mb-6">
                Downloadable Resources
              </h2>
              <p className="text-gray-600 mb-8">
                Access our library of downloadable resources including catalogues, lookbooks, 
                and implementation guides.
              </p>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <FileText size={18} className="text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{resource.title}</p>
                        <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                      <Download size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl h-full min-h-80 flex items-center justify-center">
              <BookOpen size={140} className="text-indigo-400 opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-sm-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 font-heading mb-12">
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/furniture" className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-sm-orange/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-sm-orange" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Furniture</h3>
              <p className="text-gray-600 text-sm">Browse our furniture collection</p>
            </Link>
            <Link to="/digital" className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-sm-blue/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-sm-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital</h3>
              <p className="text-gray-600 text-sm">Explore digital solutions</p>
            </Link>
            <Link to="/labs" className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Labs</h3>
              <p className="text-gray-600 text-sm">View lab setup options</p>
            </Link>
            <Link to="/design" className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Designs</h3>
              <p className="text-gray-600 text-sm">See design inspirations</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
            Need Custom Guidance?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experts can provide personalized guidance for your school infrastructure project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-us"
              className="px-8 py-3 bg-sm-orange text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200"
            >
              Talk to an Expert
            </Link>
            <a 
              href="https://wa.me/919966109191"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-sm-navy transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Guides;
