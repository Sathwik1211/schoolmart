// src/pages/Catalogues.jsx
import { Link } from 'react-router-dom';
import { BookOpen, Download, FileText, ExternalLink, FolderOpen, ChevronRight } from 'lucide-react';

const Catalogues = () => {
  const catalogues = [
    {
      title: 'School Furniture Catalogue 2025',
      description: 'Complete range of school furniture including classroom, library, lab, and office furniture.',
      size: '15 MB',
      pages: '120',
      color: 'bg-sm-orange',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'
    },
    {
      title: 'Digital Infrastructure Guide',
      description: 'Interactive panels, smart boards, tablets, and complete digital classroom solutions.',
      size: '8 MB',
      pages: '65',
      color: 'bg-sm-blue',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    },
    {
      title: 'Sports Infrastructure Catalogue',
      description: 'Sports surfaces, equipment, and complete sports facility solutions for schools.',
      size: '12 MB',
      pages: '85',
      color: 'bg-sm-green',
      img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80'
    },
    {
      title: 'Lab Equipment Catalogue',
      description: 'Science labs, STEM labs, math labs, and composite skill lab solutions.',
      size: '18 MB',
      pages: '150',
      color: 'bg-purple-600',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80'
    },
    {
      title: 'Kindergarten Design Catalogue',
      description: 'Play furniture, learning aids, and complete kindergarten environment solutions.',
      size: '10 MB',
      pages: '75',
      color: 'bg-pink-500',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    },
    {
      title: 'School Architecture Portfolio',
      description: 'School design ideas, architectural solutions, and completed project showcase.',
      size: '25 MB',
      pages: '200',
      color: 'bg-teal-600',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
    },
  ];

  const lookbooks = [
    { title: 'Play Furniture Lookbook', path: '#' },
    { title: 'Classroom Design Ideas', path: '#' },
    { title: 'Library Design Inspiration', path: '#' },
    { title: 'Lab Setup Guide', path: '#' },
    { title: 'Sports Facility Ideas', path: '#' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sm-blue to-blue-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen size={80} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Product Catalogues
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Download our comprehensive catalogues and explore our complete range of school infrastructure solutions
          </p>
        </div>
      </section>

      {/* Main Catalogues */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 font-heading mb-12">
            Download Our Catalogues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogues.map((cat, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className={`${cat.color} w-10 h-10 rounded-lg flex items-center justify-center shadow-lg`}>
                      <FileText size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FolderOpen size={14} />
                      {cat.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {cat.pages} pages
                    </span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-sm-blue hover:text-white transition-colors duration-200">
                    <Download size={16} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbooks */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-heading mb-6">
                Design Lookbooks
              </h2>
              <p className="text-gray-600 mb-8">
                Explore our curated collection of design ideas and inspiration for creating 
                world-class learning environments in your school.
              </p>
              <div className="space-y-3">
                {lookbooks.map((book, index) => (
                  <Link 
                    key={index}
                    to={book.path}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-sm-blue hover:text-white transition-colors duration-200 group"
                  >
                    <span className="font-medium">{book.title}</span>
                    <ChevronRight size={18} className="text-gray-400 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl h-full min-h-80 flex items-center justify-center">
              <BookOpen size={140} className="text-purple-400 opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-sm-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 font-heading mb-12">
            Quick Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/furniture" className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-sm-orange/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-sm-orange" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Browse Furniture</h3>
              <p className="text-gray-600 text-sm">Explore our complete furniture range online</p>
            </Link>
            <Link to="/digital" className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-sm-blue/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-sm-blue" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Solutions</h3>
              <p className="text-gray-600 text-sm">View our digital infrastructure products</p>
            </Link>
            <Link to="/sports" className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-sm-green/10 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-sm-green" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sports Equipment</h3>
              <p className="text-gray-600 text-sm">Check out sports infrastructure solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-sm-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
            Need a Custom Catalogue?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for specialized catalogues tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-us"
              className="px-8 py-3 bg-sm-orange text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:info@schoolmart.in"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-sm-navy transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalogues;
