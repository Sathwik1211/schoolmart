// src/components/ClientLogos.jsx
import { GraduationCap, School, BookOpen, Building2, Award } from 'lucide-react';

const ClientLogos = () => {
  const clients = [
    { name: 'AVN Vida International School', icon: GraduationCap, color: 'text-blue-600' },
    { name: 'Alwar Das Group', icon: School, color: 'text-orange-600' },
    { name: 'DRS International School', icon: BookOpen, color: 'text-purple-600' },
    { name: 'Bhashyam Educational Institutions', icon: Building2, color: 'text-red-600' },
    { name: 'Excel Edge The Value School', icon: Award, color: 'text-green-600' },
    { name: 'Delhi Public School', icon: GraduationCap, color: 'text-indigo-600' },
    { name: 'DAV Public School', icon: School, color: 'text-teal-600' },
    { name: 'Podar International', icon: BookOpen, color: 'text-pink-600' },
    { name: 'CMS School', icon: Building2, color: 'text-amber-600' },
    { name: 'VIBGYOR Group', icon: Award, color: 'text-cyan-600' },
  ];

  // Duplicate for seamless marquee
  const allClients = [...clients, ...clients];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 font-heading">
          Trusted by Leading Schools
        </h2>
        <p className="text-center text-gray-500 mt-2">
          4000+ partner schools across India
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Content */}
        <div className="flex animate-marquee">
          {allClients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center gap-3 group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <Icon size={28} className={`${client.color}`} />
                </div>
                <span className="text-lg font-semibold text-gray-700 whitespace-nowrap group-hover:text-sm-blue transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-sm-blue font-heading">4000+</p>
            <p className="text-gray-600 mt-1">Partner Schools</p>
          </div>
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-sm-green font-heading">7+</p>
            <p className="text-gray-600 mt-1">Years Experience</p>
          </div>
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-sm-orange font-heading">1200+</p>
            <p className="text-gray-600 mt-1">Products</p>
          </div>
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-sm-purple font-heading">16+</p>
            <p className="text-gray-600 mt-1">Panel Architects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
