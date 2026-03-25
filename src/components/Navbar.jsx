// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Armchair, Building2, Laptop, Palette, BookOpen, Trophy, Calculator, FlaskConical, Library } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Corporate', 
      path: '/corporate',
      dropdown: [
        { name: 'About Us', path: '/aboutus' },
        { name: 'Manufacturing', path: '/manufacturing' },
      ]
    },
    { name: 'Catalogues', path: '/catalogues' },
    { name: 'Environments', path: '/environments' },
    { name: 'SHOP', path: 'http://www.schoolmart.store', external: true },
    { name: 'GUIDES', path: '/guides' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const categories = [
    { name: 'FURNITURE', path: '/furniture', icon: Armchair, color: 'bg-sm-orange' },
    { name: 'ARCHITECTURE', path: '/school-building-design', icon: Building2, color: 'bg-sm-blue' },
    { name: 'DIGITAL INFRA', path: '/digital', icon: Laptop, color: 'bg-sm-teal' },
    { name: 'SCHOOL DESIGNS', path: '/design', icon: Palette, color: 'bg-sm-purple' },
    { name: 'DIGITAL CONTENT', path: '/digital', icon: BookOpen, color: 'bg-sm-green' },
    { name: 'SPORTS', path: '/sports', icon: Trophy, color: 'bg-sm-red' },
    { name: 'MATHEMATICS', path: '/gamified-math-labs', icon: Calculator, color: 'bg-sm-yellow' },
    { name: 'SCIENCE', path: '/science-is-fun', icon: FlaskConical, color: 'bg-sm-cyan' },
    { name: 'LABS / LIBRARIES', path: '/labs', icon: Library, color: 'bg-sm-indigo' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav 
        className={`bg-sm-green sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white font-heading tracking-wide">
                SCHOOL MART
              </span>
              <span className="text-xs text-white/80 -mt-1">everything a school needs</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsCorporateOpen(true)}
                      onMouseLeave={() => setIsCorporateOpen(false)}
                    >
                      <button 
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium text-white uppercase tracking-wide hover:bg-white/10 rounded-md transition-colors duration-200 ${
                          isActive(link.path) ? 'bg-white/20' : ''
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isCorporateOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown */}
                      {isCorporateOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-xl py-2 animate-fade-in-up">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-sm-blue hover:text-white transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-white uppercase tracking-wide hover:bg-white/10 rounded-md transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-sm font-medium text-white uppercase tracking-wide hover:bg-white/10 rounded-md transition-colors duration-200 ${
                        isActive(link.path) ? 'bg-white/20' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-sm-green border-t border-white/20 animate-slide-down">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button 
                        onClick={() => setIsCorporateOpen(!isCorporateOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-white font-medium uppercase tracking-wide hover:bg-white/10 rounded-md"
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isCorporateOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isCorporateOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-white font-medium uppercase tracking-wide hover:bg-white/10 rounded-md"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-white font-medium uppercase tracking-wide hover:bg-white/10 rounded-md ${
                        isActive(link.path) ? 'bg-white/20' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Category Grid */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="flex sm:grid sm:grid-cols-5 lg:grid-cols-9 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-4 pb-2 sm:pb-0 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className="flex flex-col items-center group flex-none w-[26vw] sm:w-auto shrink-0 snap-center sm:snap-none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${cat.color} flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center uppercase tracking-tight group-hover:text-sm-blue transition-colors duration-200">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
